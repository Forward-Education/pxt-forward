#!/usr/bin/env node
// Writes a static copy of the GitHub-proxy responses the editor needs for Forward's extensions,
// so they load from the editor's own origin instead of makecode.com (plan M0, spike 1).
//
//   node forward/build/gh-snapshot.js <site-dir>
//
// The editor asks `${apiRoot}gh/...` (apiRoot is /api/) for:
//   gh/<owner>/<repo>                      repo metadata     -> api/gh/<owner>/<repo>/meta.json
//   gh/<owner>/<repo>/refs                 tags and HEAD     -> api/gh/<owner>/<repo>/refs.json
//   gh/<owner>/<repo>/<tag>[/<sub>]/text   package files     -> api/gh/<owner>/<repo>/<tag>[/<sub>]/text.json
//   ghsearch/<target>/<platform>?q=        extension search  -> api/ghsearch.json
// Pages rewrites map those paths onto the files (rules in api/redirects.txt, merged into
// _redirects by prepare-pages.sh). Shapes match makecode.com's proxy (checked 2026-10-07).
//
// Starts from forward/extensions.json ("roots", which extension search offers, and
// "tutorialDependencies", the versions the home-gallery tutorials pin) and follows every github:
// and file: dependency. Needs a
// GitHub token: GITHUB_TOKEN, or `gh auth token` locally. Responses are cached by commit in
// forward/.build/gh-cache/.
"use strict";

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { execFileSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..", "..");
const SITE = path.resolve(process.argv[2] || fail("usage: gh-snapshot.js <site-dir>"));
const CACHE = path.join(ROOT, "forward", ".build", "gh-cache");
const config = JSON.parse(fs.readFileSync(path.join(ROOT, "forward", "extensions.json"), "utf8"));

function fail(msg) {
    console.error(`gh-snapshot: ${msg}`);
    process.exit(1);
}

const TOKEN = process.env.GITHUB_TOKEN || (() => {
    try { return execFileSync("gh", ["auth", "token"]).toString().trim(); } catch { return ""; }
})();
if (!TOKEN) fail("no GitHub token (set GITHUB_TOKEN or log in with gh)");

async function gh(urlPath, raw) {
    const res = await fetch(`https://api.github.com/${urlPath}`, {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            Accept: raw ? "application/vnd.github.raw" : "application/vnd.github+json",
            "User-Agent": "forward-gh-snapshot",
        },
    });
    if (res.status === 404) return undefined;
    if (!res.ok) fail(`GitHub ${res.status} for ${urlPath}`);
    return raw ? res.text() : res.json();
}

// Cached by repo and commit, so reruns don't refetch unchanged packages.
async function cached(key, fn) {
    const file = path.join(CACHE, crypto.createHash("sha256").update(key).digest("hex") + ".json");
    if (fs.existsSync(file)) return JSON.parse(fs.readFileSync(file, "utf8"));
    const value = await fn();
    fs.mkdirSync(CACHE, { recursive: true });
    fs.writeFileSync(file, JSON.stringify(value));
    return value;
}

// github:Owner/repo[/sub/dir][#tag]
function parseGithub(spec) {
    const m = /^github:([^/#]+)\/([^/#]+)((?:\/[^#]+)?)(?:#(.+))?$/.exec(spec);
    if (!m) return undefined;
    return { owner: m[1], repo: m[2], sub: m[3].replace(/^\//, ""), tag: m[4] };
}

const slugOf = p => `${p.owner}/${p.repo}`.toLowerCase();
const repos = new Map();     // slug -> { owner, repo, spellings:Set, tags: Map(tag -> sha) }
const packages = new Map();  // slug#tag/sub -> files
const queue = [...config.roots, ...(config.tutorialDependencies || [])]
    .map(spec => parseGithub(spec) || fail(`bad root ${spec}`));

async function resolveTag(p) {
    if (p.tag) return p.tag;
    const pinned = config.unpinned[slugOf(p)];
    if (pinned) return pinned;
    const known = repos.get(slugOf(p));
    if (known && known.tags.size === 1) return [...known.tags.keys()][0];
    fail(`github:${p.owner}/${p.repo}${p.sub ? "/" + p.sub : ""} has no tag; add it to "unpinned" in forward/extensions.json`);
}

async function visit(p) {
    p.tag = await resolveTag(p);
    const slug = slugOf(p);
    if (!repos.has(slug)) repos.set(slug, { owner: p.owner, repo: p.repo, spellings: new Set(), tags: new Map() });
    const repo = repos.get(slug);
    repo.spellings.add(`${p.owner}/${p.repo}`);
    repo.spellings.add(slug);

    if (!repo.tags.has(p.tag)) {
        const ref = await gh(`repos/${slug}/commits/${encodeURIComponent(p.tag)}`);
        if (!ref) fail(`${slug} has no tag ${p.tag}`);
        repo.tags.set(p.tag, ref.sha);
    }
    const sha = repo.tags.get(p.tag);
    const key = `${slug}#${p.tag}/${p.sub}`;
    if (packages.has(key)) return;

    const files = await cached(`${slug}@${sha}/${p.sub}`, async () => {
        const dir = p.sub ? `${p.sub}/` : "";
        const cfgText = await gh(`repos/${slug}/contents/${dir}pxt.json?ref=${sha}`, true);
        if (cfgText === undefined) fail(`${key}: no pxt.json`);
        const cfg = JSON.parse(cfgText);
        const out = { "pxt.json": cfgText };
        for (const f of [...(cfg.files || []), ...(cfg.testFiles || [])]) {
            const text = await gh(`repos/${slug}/contents/${dir}${f}?ref=${sha}`, true);
            if (text === undefined) console.warn(`gh-snapshot: ${key} lists ${f}, which is missing; skipped`);
            else out[f] = text;
        }
        return out;
    });
    packages.set(key, { p: { ...p }, files });

    const cfg = JSON.parse(files["pxt.json"]);
    for (const [name, spec] of Object.entries(cfg.dependencies || {})) {
        if (spec === "*" || spec === "") continue;           // bundled with the target
        const dep = parseGithub(spec);
        if (dep) { queue.push(dep); continue; }
        if (spec.startsWith("file:")) {                       // sibling folder in the same repo
            const sub = path.posix.normalize(path.posix.join(p.sub || ".", spec.slice(5)));
            if (sub.startsWith("..")) fail(`${key}: ${name} points outside the repo (${spec})`);
            queue.push({ owner: p.owner, repo: p.repo, sub: sub === "." ? "" : sub, tag: p.tag });
            continue;
        }
        console.warn(`gh-snapshot: ${key}: dependency ${name} = ${spec} is not github: or file:; left to the editor`);
    }
}

function write(rel, value) {
    const file = path.join(SITE, rel);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, JSON.stringify(value));
}

(async () => {
    while (queue.length) await visit(queue.shift());

    const base = "api/gh";
    for (const [slug, repo] of repos) {
        const info = await cached(`meta:${slug}`, () => gh(`repos/${slug}`));
        const rootPkg = [...packages.values()].find(x => slugOf(x.p) === slug && !x.p.sub);
        const rootCfg = rootPkg ? JSON.parse(rootPkg.files["pxt.json"]) : {};
        const ver = t => t.replace(/^v/, "").split(/[.-]/).map(x => (isNaN(+x) ? 0 : +x));
        const cmp = (a, b) => { const x = ver(a[0]), y = ver(b[0]); for (let i = 0; i < 4; i++) if ((x[i] || 0) !== (y[i] || 0)) return (x[i] || 0) - (y[i] || 0); return 0; };
        const tags = [...repo.tags.entries()].sort(cmp);
        const [latestTag, latestSha] = tags[tags.length - 1];
        const meta = {
            kind: "script",
            id: `gh/${slug}`,
            name: rootCfg.name || repo.repo,
            description: rootCfg.description || (info && info.description) || "",
            version: (rootCfg.version || latestTag.replace(/^v/, "")),
            defaultBranch: (info && info.default_branch) || "master",
        };
        const refs = { refs: { HEAD: latestSha } };
        for (const [t, s] of tags) refs.refs[`refs/tags/${t}`] = s;
        for (const spelling of repo.spellings) {
            write(`${base}/${spelling}/meta.json`, meta);
            write(`${base}/${spelling}/refs.json`, refs);
        }
    }
    for (const { p, files } of packages.values()) {
        for (const spelling of repos.get(slugOf(p)).spellings)
            write(`${base}/${spelling}/${p.tag}/${p.sub ? p.sub + "/" : ""}text.json`, files);
    }

    // Search: every root extension, whatever the query (the snapshot is a curated list).
    const items = config.roots.map(parseGithub).map(p => {
        const repo = repos.get(slugOf(p));
        const pkg = packages.get(`${slugOf(p)}#${p.tag}/${p.sub}`);
        const cfg = JSON.parse(pkg.files["pxt.json"]);
        return {
            name: repo.repo, full_name: `${repo.owner}/${repo.repo}`, owner: { login: repo.owner },
            description: cfg.description || "", default_branch: "main", private: false, fork: false,
            html_url: `https://github.com/${repo.owner}/${repo.repo}`,
        };
    });
    write("api/ghsearch.json", { total_count: items.length, items });

    // Most specific rules first: Pages applies the first match.
    fs.writeFileSync(path.join(SITE, "api", "redirects.txt"), [
        "/api/gh/:owner/:repo/refs  /api/gh/:owner/:repo/refs.json  200",
        "/api/gh/:owner/:repo/:tag/text  /api/gh/:owner/:repo/:tag/text.json  200",
        "/api/gh/:owner/:repo/:tag/:sub/text  /api/gh/:owner/:repo/:tag/:sub/text.json  200",
        "/api/gh/:owner/:repo  /api/gh/:owner/:repo/meta.json  200",
        "/api/ghsearch/*  /api/ghsearch.json  200",
        "",
    ].join("\n"));

    console.log(`gh-snapshot: ${repos.size} repos, ${packages.size} packages written to ${path.join(SITE, "api")}`);
})().catch(e => fail(e.stack || e.message));
