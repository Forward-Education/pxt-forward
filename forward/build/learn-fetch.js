#!/usr/bin/env node
// Refreshes the committed snapshot of learn.forwardedu.com content that the home galleries are
// built from (forward/content/learn/). Run by hand when the catalog or the source content changes,
// never at deploy time: the build only reads what this writes.
//
//   node forward/build/learn-fetch.js
//
// Reads forward/content/learn/catalog.json and writes:
//   posts.json                     the catalog's WordPress posts, trimmed (public REST API, read-only)
//   shares/<id>.json               each MakeCode share project's files (makecode.com, fetched here only)
//   tutorials/<owner>/<repo>/<tag>/...  extension tutorial markdown at the pinned tag, with its
//                                  translations under _locales/
//   images.json                    source image URL -> localised file, size in bytes
//   ../../overlay/files/docs/static/forward/learn/*.webp   the localised images
//
// Images are resized and re-encoded as WebP (cards 480 px wide, tutorial pictures 720 px; GIFs
// become animated WebP). Needs cwebp, webpmux and ffmpeg (brew install webp ffmpeg), and a GitHub
// token (GITHUB_TOKEN, or `gh auth token`).
"use strict";

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const os = require("os");
const { execFileSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..", "..");
const LEARN = path.join(ROOT, "forward", "content", "learn");
const IMG_DIR = path.join(ROOT, "forward", "overlay", "files", "docs", "static", "forward", "learn");
const IMG_URL = "/static/forward/learn";
const WP = "https://learn.forwardedu.com/wp-json/wp/v2";
const CARD_WIDTH = 480;
const TUTORIAL_WIDTH = 720;

const catalog = JSON.parse(fs.readFileSync(path.join(LEARN, "catalog.json"), "utf8"));
const items = catalog.categories.flatMap(c => c.items);

function fail(msg) {
    console.error(`learn-fetch: ${msg}`);
    process.exit(1);
}

const TOKEN = process.env.GITHUB_TOKEN || (() => {
    try { return execFileSync("gh", ["auth", "token"]).toString().trim(); } catch { return ""; }
})();
if (!TOKEN) fail("no GitHub token (set GITHUB_TOKEN or log in with gh)");
for (const tool of ["cwebp", "webpmux", "ffmpeg"]) {
    try { execFileSync("which", [tool], { stdio: "ignore" }); } catch { fail(`${tool} not found (brew install webp ffmpeg)`); }
}

async function get(url, { json = true, headers = {}, optional = false } = {}) {
    for (let attempt = 1; ; attempt++) {
        const res = await fetch(url, { headers: { "User-Agent": "forward-learn-fetch", ...headers } });
        if (res.status === 404 && optional) return undefined;
        if (res.ok) return json ? res.json() : Buffer.from(await res.arrayBuffer());
        if (attempt >= 3 || res.status < 500) fail(`${res.status} for ${url}`);
    }
}
const gh = async (p, raw) => {
    const res = await get(`https://api.github.com/${p}`, {
        json: !raw,
        optional: true,
        headers: { Authorization: `Bearer ${TOKEN}`, Accept: raw ? "application/vnd.github.raw" : "application/vnd.github+json" },
    });
    return raw && res ? res.toString("utf8") : res;
};

function writeJson(rel, value) {
    const file = path.join(LEARN, rel);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, JSON.stringify(value, null, 2) + "\n");
}

const decode = s => String(s || "")
    .replace(/<[^>]+>/g, "")
    .replace(/&#(\d+);/g, (m, n) => String.fromCharCode(+n))
    .replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ").trim();

// ---- images ----------------------------------------------------------------------------------

const images = {};      // source URL -> { file, bytes }
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "learn-fetch-"));

function kindOf(buf) {
    if (buf.slice(0, 3).toString() === "GIF") return "gif";
    if (buf.slice(0, 4).toString() === "RIFF" && buf.slice(8, 12).toString() === "WEBP")
        return buf.includes(Buffer.from("ANIM")) ? "webp-anim" : "webp";
    if (buf[0] === 0x89 && buf.slice(1, 4).toString() === "PNG") return "png";
    if (buf[0] === 0xff && buf[1] === 0xd8) return "jpg";
    if (/^\s*(<\?xml[^>]*>\s*)?<svg[\s>]/.test(buf.slice(0, 512).toString())) return "svg";
    return undefined;
}

// Downloads one picture and writes a resized WebP named after the source bytes, so reruns are
// stable and two posts sharing a picture share a file.
async function localise(url, width) {
    if (images[url]) return images[url].file;
    const src = await get(url, { json: false, optional: true });
    if (!src) { console.warn(`learn-fetch: missing image ${url}`); return undefined; }
    const kind = kindOf(src);
    if (!kind) { console.warn(`learn-fetch: not an image ${url}`); return undefined; }
    const name = crypto.createHash("sha256").update(src).update(String(width)).digest("hex").slice(0, 16) + (kind === "svg" ? ".svg" : ".webp");
    const out = path.join(IMG_DIR, name);
    if (!fs.existsSync(out)) {
        fs.mkdirSync(IMG_DIR, { recursive: true });
        const input = path.join(tmp, `in.${kind.replace("-anim", "")}`);
        fs.writeFileSync(input, src);
        const scale = `scale='min(${width},iw)':-2:flags=lanczos`;
        if (kind === "svg") {
            fs.writeFileSync(out, src);
        } else if (kind === "gif") {
            // Homebrew's ffmpeg has no WebP encoder: resize as a GIF, then gif2webp.
            const gif = path.join(tmp, "scaled.gif");
            execFileSync("ffmpeg", ["-v", "error", "-y", "-i", input, "-filter_complex",
                `[0:v]${scale},split[a][b];[a]palettegen=stats_mode=diff[p];[b][p]paletteuse=dither=none`, "-loop", "0", gif]);
            execFileSync("gif2webp", ["-quiet", "-lossy", "-q", "60", "-m", "6", gif, "-o", out]);
        } else if (kind === "webp-anim") {
            // Nothing here decodes animated WebP; it is already compressed, so keep it.
            fs.writeFileSync(out, src);
        } else {
            // cwebp's -resize would also enlarge small pictures; ffmpeg's min() does not.
            const png = path.join(tmp, "scaled.png");
            try {
                execFileSync("ffmpeg", ["-v", "error", "-y", "-i", input, "-vf", scale, "-frames:v", "1", png], { stdio: "pipe" });
                execFileSync("cwebp", ["-quiet", "-q", "75", "-m", "6", "-metadata", "none", png, "-o", out]);
            } catch {
                execFileSync("cwebp", ["-quiet", "-q", "75", "-m", "6", "-metadata", "none", "-resize", String(width), "0", input, "-o", out]);
            }
        }
    }
    images[url] = { file: `${IMG_URL}/${name}`, bytes: fs.statSync(out).size };
    return images[url].file;
}

// ---- WordPress posts -------------------------------------------------------------------------

async function fetchPosts() {
    const ids = [...new Set(items.filter(i => i.post).map(i => i.post))];
    const posts = [];
    for (let i = 0; i < ids.length; i += 50) {
        const batch = ids.slice(i, i + 50);
        posts.push(...await get(`${WP}/posts?include=${batch.join(",")}&per_page=100&_embed=wp:featuredmedia,wp:term`));
    }
    const out = {};
    for (const p of posts) {
        const media = ((p._embedded || {})["wp:featuredmedia"] || [])[0] || {};
        const tags = (((p._embedded || {})["wp:term"]) || []).flat().filter(t => t.taxonomy === "post_tag").map(t => t.name);
        const featured = media.source_url;
        out[p.id] = {
            id: p.id,
            slug: p.slug,
            title: decode(p.title.rendered),
            link: p.link,
            modified: p.modified_gmt,
            tags,
            excerpt: decode(p.excerpt.rendered).replace(/\s*(Read More|Continue reading).*$/i, ""),
            featuredImage: featured,
            image: featured ? await localise(featured, CARD_WIDTH) : undefined,
        };
    }
    for (const id of ids) if (!out[id]) fail(`post ${id} is not public`);
    writeJson("posts.json", out);
    return Object.keys(out).length;
}

// ---- MakeCode share projects -----------------------------------------------------------------

async function fetchShares() {
    const ids = [...new Set(items.filter(i => i.share).map(i => i.share))];
    for (const id of ids) {
        const meta = await get(`https://makecode.com/api/${id}`);
        const files = await get(`https://makecode.com/api/${id}/text`);
        writeJson(`shares/${id}.json`, {
            id,
            name: meta.name,
            target: meta.target,
            created: new Date(meta.time * 1000).toISOString(),
            files,
        });
    }
    return ids.length;
}

// ---- extension tutorials ---------------------------------------------------------------------

const MD_IMAGE = /!\[[^\]]*\]\(\s*([^)\s]+)[^)]*\)|<img[^>]+src=["']([^"']+)["']/g;

// Picture URLs in tutorial markdown point at the repo's main branch on raw.githubusercontent.com.
// Fetch the same path at the pinned tag instead, so the snapshot matches the tutorial's version,
// and fall back to the URL as written when the tag predates the picture. Links into another repo
// (pxt-smart-solar's tutorials still name its old name, pxt-solar, which 404s) are tried at the
// same path in the tutorial's own repo first. github.com/.../blob/... links (an HTML page, not the
// picture; fixed in pxt-climate-action v2.0.3) are read the same way.
function tagged(url, owner, repo, sha) {
    const m = /^https:\/\/(?:raw\.githubusercontent\.com\/([^/]+)\/([^/]+)|github\.com\/([^/]+)\/([^/]+)\/(?:blob|raw))\/(?:refs\/heads\/)?[^/]+\/(.+)$/.exec(url);
    if (!m) return undefined;
    return `https://raw.githubusercontent.com/${owner}/${repo}/${sha}/${m[5]}`;
}

async function fetchTutorials() {
    const wanted = items.filter(i => i.tutorial);
    const byRepo = new Map();
    for (const t of wanted) {
        const [owner, repo, ...rest] = t.tutorial.split("/");
        const key = `${owner}/${repo}#${t.tag}`;
        if (!byRepo.has(key)) byRepo.set(key, { owner, repo, tag: t.tag, paths: [] });
        byRepo.get(key).paths.push(rest.join("/"));
    }
    let count = 0;
    for (const { owner, repo, tag, paths } of byRepo.values()) {
        const commit = await gh(`repos/${owner}/${repo}/commits/${tag}`);
        if (!commit) fail(`${owner}/${repo} has no tag ${tag}`);
        const tree = await gh(`repos/${owner}/${repo}/git/trees/${commit.sha}?recursive=1`);
        const all = new Set(tree.tree.map(x => x.path));
        const base = `tutorials/${owner}/${repo}/${tag}`;
        const files = { "pxt.json": await gh(`repos/${owner}/${repo}/contents/pxt.json?ref=${commit.sha}`, true) };
        for (const p of paths) {
            const variants = [`${p}.md`, ...[...all].filter(x => new RegExp(`^_locales/[^/]+/${p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\.md$`).test(x))];
            if (!all.has(`${p}.md`)) fail(`${owner}/${repo}@${tag} has no ${p}.md`);
            for (const v of variants) {
                const md = await gh(`repos/${owner}/${repo}/contents/${encodeURI(v)}?ref=${commit.sha}`, true);
                files[v] = md;
                for (const m of md.matchAll(MD_IMAGE)) {
                    const url = (m[1] || m[2]).replace(/\?raw=true$/, "");
                    if (!/^https?:/.test(url) || images[url]) continue;
                    const pinned = tagged(url, owner, repo, commit.sha);
                    const file = (pinned && await localiseAs(pinned, url)) || await localise(url, TUTORIAL_WIDTH);
                    if (!file) console.warn(`learn-fetch: ${owner}/${repo}/${v} references a missing image ${url}`);
                }
            }
            count++;
        }
        writeJson(`${base}/repo.json`, { repo: `${owner}/${repo}`, tag, sha: commit.sha, files: Object.keys(files).sort() });
        for (const [f, text] of Object.entries(files)) {
            const file = path.join(LEARN, base, f);
            fs.mkdirSync(path.dirname(file), { recursive: true });
            fs.writeFileSync(file, text);
        }
    }
    return count;
}

// Localise `fetchUrl` but record it under the URL the markdown uses.
async function localiseAs(fetchUrl, recordUrl) {
    const head = await fetch(fetchUrl, { method: "HEAD" });
    if (!head.ok) return undefined;
    const file = await localise(fetchUrl, TUTORIAL_WIDTH);
    if (file) images[recordUrl] = { ...images[fetchUrl], pinned: fetchUrl };
    delete images[fetchUrl];
    return file;
}

(async () => {
    // Start from a clean snapshot, so items dropped from the catalog drop out of it too.
    for (const d of ["shares", "tutorials"]) fs.rmSync(path.join(LEARN, d), { recursive: true, force: true });
    const before = new Set(fs.existsSync(IMG_DIR) ? fs.readdirSync(IMG_DIR) : []);

    for (const c of catalog.categories) if (c.image) await localise(c.image, CARD_WIDTH);
    const posts = await fetchPosts();
    const shares = await fetchShares();
    const tutorials = await fetchTutorials();

    const sorted = Object.fromEntries(Object.entries(images).sort(([a], [b]) => a.localeCompare(b)));
    writeJson("images.json", sorted);
    const used = new Set(Object.values(images).map(i => path.basename(i.file)));
    for (const f of before) if (!used.has(f)) fs.rmSync(path.join(IMG_DIR, f));
    const bytes = [...used].reduce((n, f) => n + fs.statSync(path.join(IMG_DIR, f)).size, 0);
    writeJson("source.json", {
        fetched: new Date().toISOString().slice(0, 10),
        from: ["learn.forwardedu.com/wp-json/wp/v2 (public, read-only)", "makecode.com/api/<share id>", "api.github.com at each pinned tag"],
        posts, shares, tutorials, images: used.size, imageMB: +(bytes / 1048576).toFixed(1),
    });
    fs.rmSync(tmp, { recursive: true, force: true });
    console.log(`learn-fetch: ${posts} posts, ${shares} share projects, ${tutorials} tutorials, ${used.size} images (${(bytes / 1048576).toFixed(1)} MB)`);
})().catch(e => fail(e.stack || e.message));
