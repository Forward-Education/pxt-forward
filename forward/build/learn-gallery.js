#!/usr/bin/env node
// Builds the home-page galleries from the committed learn.forwardedu.com snapshot
// (forward/content/learn/, refreshed by learn-fetch.js). Offline and deterministic.
//
//   node forward/build/learn-gallery.js            write the generated files (commit them)
//   node forward/build/learn-gallery.js --check    fail if the committed files are out of date
//   node forward/build/learn-gallery.js --site <dir>
//                                                  write the GitHub-tutorial responses into a built
//                                                  editor (run by build.sh after gh-snapshot.js)
//
// Generated, never edited by hand:
//   forward/overlay/files/docs/forward/home/<category>.md   one gallery (row of cards) per category
//   forward/overlay/files/docs/forward/projects/<slug>.md   each share link as a finished-project
//                                                          tutorial, re-pinned to current releases
//   "galleries" in forward/overlay/targetconfig.json
//
// Extension tutorials open as github:<owner>/<repo>/<path>#<tag>. The editor then asks
// /ghtutorial/<owner>/<repo>/<path>?ref=<tag> (makecode.com's tutorial endpoint), which --site
// answers with a static file in the same shape, its pictures moved onto our origin.
"use strict";

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const ROOT = path.resolve(__dirname, "..", "..");
const LEARN = path.join(ROOT, "forward", "content", "learn");
const DOCS = path.join(ROOT, "forward", "overlay", "files", "docs");
const HOME_DIR = "forward/home";
const PROJECTS_DIR = "forward/projects";
const TARGETCONFIG = path.join(ROOT, "forward", "overlay", "targetconfig.json");
const EXTENSIONS = path.join(ROOT, "forward", "extensions.json");

const argv = process.argv.slice(2);
const CHECK = argv.includes("--check");
const siteIdx = argv.indexOf("--site");
const SITE = siteIdx >= 0 ? path.resolve(argv[siteIdx + 1]) : undefined;

const errors = [];
function fail(msg) {
    console.error(`learn-gallery: ${msg}`);
    process.exit(1);
}
const readJson = p => JSON.parse(fs.readFileSync(p, "utf8"));

const catalog = readJson(path.join(LEARN, "catalog.json"));
const posts = readJson(path.join(LEARN, "posts.json"));
const images = readJson(path.join(LEARN, "images.json"));

// The legacy climate-action-kits/pxt-fwd-edu blocks live on in pxt-fwd-modules under new names:
// enums moved into fwdEnums and the module instances are numbered. Same list as
// sw-makecode-offline's build/27-forward-home.sh, plus the renames in pxt-climate-action's
// MIGRATION.md. Applied only to projects that used a replaced extension.
const LEGACY_RENAMES = [
    [/(?:fwdSensors\.|fwdMotors\.|fwdEnums\.)?\bThresholdDirection\./g, "fwdEnums.OverUnder."],
    [/(?:fwdSensors\.|fwdMotors\.|fwdEnums\.)?\bDrivingDirection\./g, "fwdEnums.ForwardReverse."],
    [/(?:fwdSensors\.|fwdMotors\.|fwdEnums\.)?\bDialDirection\.CCW\b/g, "fwdEnums.ClockwiseCounterclockwise.Counterclockwise"],
    [/(?:fwdSensors\.|fwdMotors\.|fwdEnums\.)?\bDialDirection\.CW\b/g, "fwdEnums.ClockwiseCounterclockwise.Clockwise"],
    [/(?:fwdSensors\.|fwdMotors\.|fwdEnums\.)?\bLineSensorState\.Hit\b/g, "fwdEnums.OnOff.On"],
    [/(?:fwdSensors\.|fwdMotors\.|fwdEnums\.)?\bLineSensorState\.Miss\b/g, "fwdEnums.OnOff.Off"],
    [/\.ledRing\b(?!\d)/g, ".ledRing1"],
    [/\.touch\b(?!\d)/g, ".touch1"],
    [/\.fwdDistancePastThreshold\(/g, ".isPastThreshold("],
    [/\.fwdDistance\(\)/g, ".distance()"],
    [/\.conSetEnabled\(/g, ".setEnabled("],
    [/\.fwdSetEnabled\(/g, ".setEnabled("],
    [/\.fwdIsEnabled\(\)/g, ".enabled()"],
    [/\.fwdSetActive\(/g, ".setActive("],
    // Older climate-action-kits releases kept every module under fwdSensors and prefixed each
    // method with fwd. Checked against pxt-fwd-modules v1.1.11 by compiling every converted project.
    [/\bfwdSensors\.(touch|dial)(\d)\b/g, "fwdButtons.$1$2"],
    [/\bfwdSensors\.ledRing(\d)\b/g, "fwdLights.ledRing$1"],
    [/\bfwdSensors\.soilMoisture(\d)\b/g, "fwdSensors.moisture$1"],
    [/\.fwdOnTouch\(/g, ".onEvent("],
    [/\.fwdOnDialTurned\(([^,]+), function \(\w+\)/g, ".onRotated($1, function ()"],
    [/\.fwdPosition\(\)/g, ".position()"],
    [/\.fwdClicksPerTurn\(\)/g, ".clicksPerTurn()"],
    [/\.fwdLineSensorState\(\)/g, ".lineSensorState()"],
    [/\.fwdOnLineSensorStateChange\(/g, ".onLineSensorStateChange("],
    [/\.fwdIsLineSensorState\(/g, ".isLineSensorState("],
    [/\.fwdOnMoistureLevelChangedBy\(/g, ".onReadingChangedBy("],
    [/\.fwdIs(?:Moisture|Light)LevelPastThreshold\(/g, ".isPastThreshold("],
    [/\.fwdMoistureLevel\(\)/g, ".moistureLevel()"],
    [/\.fwdSetAllPixelsColou?r\(/g, ".setAllPixelsColor("],
    [/\.fwdSetPixelColou?r\((\d+), /g, (m, n) => `.setPixelColor(fwdLights.LEDRingPixels.Pixel${+n + 1}, `],
    [/\.fwdTimedRun\(/g, ".timedRun("],
    [/\.fwdIsPressed\(\)/g, ".isPressed()"],
    [/\bfwdMotors\.setEnabled\((fwdBase\.\w+), /g, "$1.setEnabled("],
];

const slugify = s => s.toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const oneLine = s => String(s || "").replace(/\s+/g, " ").trim();
function sentence(s, max = 140) {
    s = oneLine(s);
    if (s.length <= max) return s;
    const cut = s.slice(0, max);
    const stop = cut.lastIndexOf(". ");
    return stop > 60 ? cut.slice(0, stop + 1) : cut.replace(/\s+\S*$/, "") + "...";
}
const parseGithub = spec => {
    const m = /^github:([^/#]+)\/([^/#]+)((?:\/[^#]+)?)(?:#(.+))?$/.exec(spec);
    return m && { owner: m[1], repo: m[2], sub: m[3].replace(/^\//, ""), tag: m[4], slug: `${m[1]}/${m[2]}`.toLowerCase() };
};

// ---- markdown pictures and videos --------------------------------------------------------------

// Every picture moves onto our origin (learn-fetch.js localised them); a picture with no local copy
// is dropped rather than left pointing elsewhere. YouTube embeds go: they would reach YouTube.
function localiseMarkdown(md, where) {
    const local = url => {
        const hit = images[url] || images[url.replace(/\?raw=true$/, "")];
        if (!hit) errors.push(`${where}: no local copy of ${url} (run learn-fetch.js)`);
        return hit && hit.file;
    };
    md = md.replace(/!\[([^\]]*)\]\(\s*(https?:[^)\s]+)([^)]*)\)/g, (m, alt, url) => {
        const file = local(url);
        return file ? `![${alt}](${file})` : "";
    });
    md = md.replace(/(<img[^>]+src=["'])(https?:[^"']+)(["'])/g, (m, a, url, b) => {
        const file = local(url);
        return file ? a + file + b : "";
    });
    md = md.split("\n").filter(l => !/youtu\.?be|^\s*@youtube\b/i.test(l)).join("\n");
    for (const m of md.matchAll(/!\[[^\]]*\]\((https?:[^)]+)\)|<(?:img|iframe|video|source)[^>]+src=["'](https?:[^"']+)/g))
        errors.push(`${where}: still loads ${m[1] || m[2]}`);
    return md;
}

function firstImage(md) {
    const m = /!\[[^\]]*\]\(\s*(\/static\/[^)\s]+)\)|<img[^>]+src=["'](\/static\/[^"']+)/.exec(md);
    return m && (m[1] || m[2]);
}

// First line of prose: skips fences, headings, pictures and tutorial directives.
function blurb(md) {
    let fence = false;
    for (const raw of md.split("\n")) {
        const line = raw.trim();
        if (line.startsWith("```")) { fence = !fence; continue; }
        if (fence || !line || /^(#|!\[|<|\||@|-{3}|\*\*Note)/.test(line)) continue;
        const text = line.replace(/!\[[^\]]*\]\([^)]*\)/g, "").replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
            .replace(/``\|?([^`|]*)\|?``/g, "$1").replace(/\|\|[^:|]*:([^|]*)\|\|/g, "$1").replace(/[*_~]/g, "");
        if (oneLine(text).length > 20) return sentence(text);
    }
    return "";
}

// ---- converted share projects -----------------------------------------------------------------

const ext = catalog.extensions;
const slugOwners = new Map();     // project slug -> share id
function repin(name, spec, where) {
    if (spec === "*" || spec === "") return name === "core" ? undefined : { name, line: name };
    const p = parseGithub(spec);
    if (!p) return { name, line: `${name}=${spec}` };
    let slug = p.slug, legacy = false;
    while (ext[slug] && ext[slug].replace) { slug = ext[slug].replace; legacy = true; }
    const e = ext[slug];
    if (e && e.drop) return undefined;
    if (!e) {
        errors.push(`${where}: no current release listed for ${spec} (catalog.json "extensions")`);
        return { name, line: `${name}=${spec}` };
    }
    return { name: e.name, line: `${e.name}=${e.spec}`, legacy };
}

function convertShare(item, post, many) {
    const share = readJson(path.join(LEARN, "shares", `${item.share}.json`));
    const where = `post ${post.id} share ${item.share}`;
    const cfg = JSON.parse(share.files["pxt.json"]);
    const deps = new Map();
    let legacy = false;
    for (const [name, spec] of Object.entries(cfg.dependencies || {})) {
        const r = repin(name, spec, where);
        if (!r) continue;
        legacy = legacy || r.legacy;
        if (!deps.has(r.name)) deps.set(r.name, r.line);
    }
    let code = (share.files["main.ts"] || "").replace(/\s+$/, "");
    if (legacy) for (const [from, to] of LEGACY_RENAMES) code = code.replace(from, to);
    if (!code) errors.push(`${where}: no main.ts`);

    const variant = oneLine(share.name)
        .replace(/^(\d{4}\s+)?(\[[^\]]*\]\s*)?(Tutorial|Project)\s*[-:]?\s*/i, "")
        .replace(/^(LCD|PIR)\s+-\s+/, "");
    const name = many ? `${post.title}: ${variant}` : post.title;
    let slug = many ? `${post.slug}-${slugify(variant)}` : post.slug;
    // Variants that differ only in punctuation ("Float <Raised>", "Float [Raised]") get numbered.
    const taken = slugOwners.get(slug);
    if (taken && taken !== item.share) {
        let n = 2;
        while (slugOwners.has(`${slug}-${n}`) && slugOwners.get(`${slug}-${n}`) !== item.share) n++;
        slug = `${slug}-${n}`;
    }
    slugOwners.set(slug, item.share);
    const image = post.image;
    const md = [
        `# ${name}`,
        "",
        "## Finished project",
        "",
        ...(image ? [`![${name}](${image})`, ""] : []),
        ...(post.excerpt ? [sentence(post.excerpt, 400), ""] : []),
        `This is a finished project from Forward Education's [${post.title}](${post.link}) activity. ` +
        "Click ``|Done|`` to open the code, then download it to your micro:bit.",
        "",
        "```package",
        ...deps.values(),
        "```",
        "",
        "```template",
        code,
        "```",
        "",
    ].join("\n");
    return {
        file: `${PROJECTS_DIR}/${slug}.md`,
        md,
        deps: [...deps.values()],
        card: {
            name,
            description: sentence(post.excerpt),
            imageUrl: image,
            url: `/${PROJECTS_DIR}/${slug}`,
            cardType: "tutorial",
            label: (post.tags || []).find(t => /^(Beginner|Intermediate|Advanced)$/.test(t)),
        },
    };
}

// ---- extension tutorials ----------------------------------------------------------------------

function tutorialResponse(item) {
    const [owner, repo, ...rest] = item.tutorial.split("/");
    const sub = rest.join("/");
    const base = path.join(LEARN, "tutorials", owner, repo, item.tag);
    const info = readJson(path.join(base, "repo.json"));
    const files = { "pxt.json": fs.readFileSync(path.join(base, "pxt.json"), "utf8") };
    const repin = (catalog.tutorialRepins || {})[`${owner}/${repo}`.toLowerCase()];
    for (const f of info.files) {
        if (f !== `${sub}.md` && !new RegExp(`^_locales/[^/]+/${sub.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\.md$`).test(f)) continue;
        let text = fs.readFileSync(path.join(base, f), "utf8");
        if (repin) text = text.replace(new RegExp(`(github:${owner}/${repo})#v[\\d.]+`, "gi"), `$1#${repin}`);
        files[f] = localiseMarkdown(text, `${item.tutorial}#${item.tag} ${f}`);
    }
    const md = files[`${sub}.md`];
    if (!md) fail(`${item.tutorial}#${item.tag} is not in the snapshot (run learn-fetch.js)`);
    const slug = `${owner}/${repo}`.toLowerCase();
    const fileHash = crypto.createHash("sha256").update(JSON.stringify(files)).digest("hex");
    const deps = [];
    for (const blk of md.matchAll(/```package\n([\s\S]*?)```/g))
        for (const l of blk[1].split("\n").map(x => x.trim()).filter(Boolean)) deps.push(l);
    // The editor makes the new project depend on this repo at the card's tag, then adds the
    // package block's pins. Open the card at the version the tutorial pins for its own extension,
    // so the project gets that one version rather than two.
    const own = deps.map(d => parseGithub(d.slice(d.indexOf("=") + 1))).find(p => p && p.slug === slug && !p.sub);
    const pin = (own && own.tag) || item.tag;
    const title = oneLine((/^#\s+(.+)$/m.exec(md) || [])[1] || sub)
        .replace(/^(.*?)\s+[-–]\s+(Use|Modify)( Tutorial)?$/i, "$2: $1")
        .replace(/\s+Tutorial$/i, "");
    return {
        file: `${slug}/${sub}.json`,
        body: {
            path: `${slug}/${sub}`,
            markdown: {
                filename: `${sub}.md`,
                repo: { repo: slug, files, fileHash, sha: info.sha, version: pin },
            },
            dependencies: [],
        },
        deps: [`${slug}#${pin}`, ...deps],
        card: {
            name: title,
            description: blurb(md),
            imageUrl: firstImage(md),
            url: `github:${slug}/${sub}#${pin}`,
            cardType: "tutorial",
            label: item.grade,
        },
    };
}

// ---- assemble -------------------------------------------------------------------------------

const out = new Map();            // docs-relative path -> text
const responses = [];
const referenced = new Set();     // github owner/repo#tag specs the content needs
const galleries = {};

for (const cat of catalog.categories) {
    const cards = [];
    const sharesPerPost = new Map();
    for (const it of cat.items) if (it.share) sharesPerPost.set(it.post, (sharesPerPost.get(it.post) || 0) + 1);
    for (const it of cat.items) {
        let r;
        if (it.share) {
            const post = posts[it.post] || fail(`post ${it.post} is not in posts.json (run learn-fetch.js)`);
            r = convertShare(it, post, sharesPerPost.get(it.post) > 1);
            if (out.has(r.file) && out.get(r.file) !== r.md) errors.push(`${r.file} generated twice with different content`);
            out.set(r.file, r.md);
        } else {
            r = tutorialResponse(it);
            if (!responses.some(x => x.file === r.file)) responses.push(r);
        }
        for (const d of r.deps) {
            const spec = d.includes("=") ? d.slice(d.indexOf("=") + 1) : d.startsWith("github:") ? d : `github:${d}`;
            const p = parseGithub(spec);
            if (p) referenced.add(`${p.slug}#${p.tag}`);
        }
        if (!it.hidden) {
            if (!r.card.imageUrl && cat.image) r.card.imageUrl = (images[cat.image] || fail(`${cat.id} image not localised (run learn-fetch.js)`)).file;
            const card = Object.fromEntries(Object.entries(r.card).filter(([, v]) => v));
            cards.push(card);
        }
    }
    const page = [
        `# ${cat.title}`,
        "",
        `Coding projects and tutorials for the ${cat.title}, from Forward Education's learning platform.`,
        "",
        `## ${cat.title}`,
        "",
        "```codecard",
        JSON.stringify(cards, null, 4),
        "```",
        "",
    ].join("\n");
    out.set(`${HOME_DIR}/${cat.id}.md`, page);
    galleries[cat.title] = `${HOME_DIR}/${cat.id}`;
}

// Everything the content depends on must be in the extension snapshot, or a tutorial opens with
// blocks missing (gh-snapshot.js follows dependencies from there).
const extensions = readJson(EXTENSIONS);
const served = new Set([...extensions.roots, ...(extensions.tutorialDependencies || [])]
    .map(parseGithub).map(p => `${p.slug}#${p.tag}`));
for (const spec of [...referenced].sort())
    if (!served.has(spec)) errors.push(`github:${spec} is used by the galleries but missing from forward/extensions.json`);

// targetconfig.json keeps everything but "galleries".
const tc = readJson(TARGETCONFIG);
tc.galleries = galleries;
const tcText = JSON.stringify(tc, null, 4) + "\n";

if (errors.length) {
    for (const e of errors) console.error(`ERROR: ${e}`);
    fail(`${errors.length} error(s)`);
}

const generatedDirs = [HOME_DIR, PROJECTS_DIR];
const onDisk = new Set();
for (const d of generatedDirs) {
    const abs = path.join(DOCS, d);
    if (fs.existsSync(abs)) for (const f of fs.readdirSync(abs)) onDisk.add(`${d}/${f}`);
}

if (SITE) {
    const root = path.join(SITE, "api", "ghtutorial");
    fs.rmSync(root, { recursive: true, force: true });
    for (const r of responses) {
        const file = path.join(root, r.file);
        fs.mkdirSync(path.dirname(file), { recursive: true });
        fs.writeFileSync(file, JSON.stringify(r.body));
    }
    // Static builds ask for tutorials at the site root (pxt webConfig.relprefix "/").
    const redirects = path.join(SITE, "api", "redirects.txt");
    const rule = "/ghtutorial/*  /api/ghtutorial/:splat.json  200";
    const existing = fs.existsSync(redirects) ? fs.readFileSync(redirects, "utf8") : "";
    if (!existing.includes(rule)) fs.writeFileSync(redirects, `${rule}\n${existing}`);
    console.log(`learn-gallery: ${responses.length} GitHub tutorial responses written to ${root}`);
} else if (CHECK) {
    const stale = [];
    for (const [rel, text] of out) {
        const abs = path.join(DOCS, rel);
        if (!fs.existsSync(abs) || fs.readFileSync(abs, "utf8") !== text) stale.push(rel);
    }
    for (const rel of onDisk) if (!out.has(rel)) stale.push(`${rel} (no longer generated)`);
    if (fs.readFileSync(TARGETCONFIG, "utf8") !== tcText) stale.push("forward/overlay/targetconfig.json galleries");
    if (stale.length) fail(`out of date, run node forward/build/learn-gallery.js and commit:\n  ${stale.join("\n  ")}`);
    console.log(`learn-gallery: ${out.size} generated files are up to date`);
} else {
    for (const rel of onDisk) if (!out.has(rel)) fs.rmSync(path.join(DOCS, rel));
    for (const [rel, text] of out) {
        const abs = path.join(DOCS, rel);
        fs.mkdirSync(path.dirname(abs), { recursive: true });
        fs.writeFileSync(abs, text);
    }
    fs.writeFileSync(TARGETCONFIG, tcText);
    const count = catalog.categories.map(c => `${c.title} ${c.items.filter(i => !i.hidden).length}`).join(", ");
    console.log(`learn-gallery: ${out.size} files written; cards: ${count}`);
}
