#!/usr/bin/env node
// Writes the effective Forward target into a separate build copy. Upstream files in the repo are
// never modified (forward/README.md, rule 1).
//
//   node forward/build/apply-overlay.js [--out <dir>]      default: <repo>/forward/.build
//
//   1. rsync the repo into the build copy, leaving out .git, forward/, .github/ and build output
//   2. pxtarget.json     = upstream merged with forward/overlay/pxtarget.patch.json (RFC 7386)
//   3. targetconfig.json = forward/overlay/targetconfig.json plus the upstream values named by its
//                          "$inherit" JSON pointers (RFC 6901)
//   4. copy forward/overlay/files/** over the copy. Replacing an upstream file needs an entry in
//      forward/divergence.json whose hash still matches the upstream file.
//   5. delete the paths listed in forward/overlay/exclude.txt
//   6. write forward-build.json describing what was built
//
// With FWD_BOARDS=1, the extra boards of the device picker are added too
// (forward/docs/device-picker.md): forward/overlay/boards/pxtarget.patch.json is merged after the
// main patch, each forward/overlay/boards/libs/<board> is copied in, and so is
// forward/overlay/boards/files/** (the device picker, the simulator's board views). Board packages
// are not added to bundleddirs:
// forward/build/inject-boards.js bundles them after staticpkg (it explains why).
//
// ${brand.<key>} placeholders in the overlay JSON are filled from forward/brand.json.
"use strict";

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { execFileSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..", "..");
const FWD = path.join(ROOT, "forward");
const OVERLAY = path.join(FWD, "overlay");
const BOARDS = path.join(OVERLAY, "boards");
const WITH_BOARDS = process.env.FWD_BOARDS === "1";

const argv = process.argv.slice(2);
const outIdx = argv.indexOf("--out");
const OUT = path.resolve(outIdx >= 0 ? argv[outIdx + 1] : path.join(FWD, ".build"));

function fail(msg) {
    console.error(`apply-overlay: ${msg}`);
    process.exit(1);
}

function readJson(p) {
    try {
        return JSON.parse(fs.readFileSync(p, "utf8"));
    } catch (e) {
        fail(`cannot read ${path.relative(ROOT, p)}: ${e.message}`);
    }
}

function writeJson(p, value) {
    fs.writeFileSync(p, JSON.stringify(value, null, 4) + "\n");
}

function sha256(p) {
    return crypto.createHash("sha256").update(fs.readFileSync(p)).digest("hex");
}

// Keys starting with "$" are comments or directives for this script and never reach the output.
function stripMeta(v) {
    if (Array.isArray(v)) return v.map(stripMeta);
    if (v && typeof v === "object")
        return Object.fromEntries(
            Object.entries(v)
                .filter(([k]) => !k.startsWith("$"))
                .map(([k, x]) => [k, stripMeta(x)]));
    return v;
}

function fillBrand(v, brand) {
    if (typeof v === "string")
        return v.replace(/\$\{brand\.([A-Za-z0-9_]+)\}/g, (_, k) => {
            if (!(k in brand)) fail(`unknown placeholder \${brand.${k}}`);
            return brand[k];
        });
    if (Array.isArray(v)) return v.map(x => fillBrand(x, brand));
    if (v && typeof v === "object")
        return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, fillBrand(x, brand)]));
    return v;
}

// RFC 7386 JSON merge patch: null deletes, objects merge, anything else replaces.
function mergePatch(target, patch) {
    if (patch === null || typeof patch !== "object" || Array.isArray(patch)) return patch;
    const out = target && typeof target === "object" && !Array.isArray(target) ? { ...target } : {};
    for (const [k, v] of Object.entries(patch)) {
        if (v === null) delete out[k];
        else out[k] = mergePatch(out[k], v);
    }
    return out;
}

// RFC 6901 JSON pointers.
function tokens(ptr) {
    if (!ptr.startsWith("/")) fail(`not a JSON pointer: ${ptr}`);
    return ptr.slice(1).split("/").map(t => t.replace(/~1/g, "/").replace(/~0/g, "~"));
}

function getAt(obj, ptr) {
    let cur = obj;
    for (const t of tokens(ptr)) {
        if (cur === null || typeof cur !== "object" || !(t in cur)) return undefined;
        cur = cur[t];
    }
    return cur;
}

function setAt(obj, ptr, value) {
    const ts = tokens(ptr);
    let cur = obj;
    for (const t of ts.slice(0, -1)) {
        if (cur[t] === null || typeof cur[t] !== "object") cur[t] = {};
        cur = cur[t];
    }
    cur[ts[ts.length - 1]] = value;
}

function listFiles(dir) {
    const out = [];
    if (!fs.existsSync(dir)) return out;
    (function walk(rel) {
        for (const e of fs.readdirSync(path.join(dir, rel), { withFileTypes: true })) {
            const r = rel ? `${rel}/${e.name}` : e.name;
            if (e.isDirectory()) walk(r);
            else if (e.name !== ".gitkeep") out.push(r);
        }
    })("");
    return out;
}

function git(...args) {
    try {
        return execFileSync("git", args, { cwd: ROOT, stdio: ["ignore", "pipe", "ignore"] }).toString().trim();
    } catch {
        return null;
    }
}

const brand = stripMeta(readJson(path.join(FWD, "brand.json")));
const upstream = stripMeta(readJson(path.join(FWD, "upstream.json")));

// 1. Sync the repo into the build copy. Excluded paths are also protected from --delete, so
//    node_modules/ and built/ survive between runs.
fs.mkdirSync(OUT, { recursive: true });
execFileSync("rsync", [
    "-a", "--delete",
    "--exclude=/.git", "--exclude=/forward", "--exclude=/.github",
    "--exclude=/node_modules", "--exclude=/built", "--exclude=/temp", "--exclude=/projects",
    "--exclude=/forward-build.json",
    `${ROOT}/`, `${OUT}/`,
], { stdio: "inherit" });

// 2. pxtarget.json
const target = mergePatch(
    readJson(path.join(ROOT, "pxtarget.json")),
    fillBrand(stripMeta(readJson(path.join(OVERLAY, "pxtarget.patch.json"))), brand));
const boardLibs = WITH_BOARDS ? fs.readdirSync(path.join(BOARDS, "libs")).filter(d => !d.startsWith(".")).sort() : [];
let effectiveTarget = target;
if (WITH_BOARDS) {
    effectiveTarget = mergePatch(target, fillBrand(stripMeta(readJson(path.join(BOARDS, "pxtarget.patch.json"))), brand));
    for (const d of boardLibs) {
        if (fs.existsSync(path.join(ROOT, "libs", d))) fail(`forward/overlay/boards/libs/${d} would replace an upstream library`);
    }
}
writeJson(path.join(OUT, "pxtarget.json"), effectiveTarget);

// 3. targetconfig.json
const upstreamConfig = readJson(path.join(ROOT, "targetconfig.json"));
const forwardConfig = readJson(path.join(OVERLAY, "targetconfig.json"));
const config = fillBrand(stripMeta(forwardConfig), brand);
for (const ptr of forwardConfig.$inherit || []) {
    const value = getAt(upstreamConfig, ptr);
    if (value === undefined) fail(`$inherit ${ptr} no longer exists upstream; review forward/overlay/targetconfig.json`);
    if (getAt(config, ptr) !== undefined) fail(`$inherit ${ptr} is also set by Forward; keep one of them`);
    setAt(config, ptr, value);
}
writeJson(path.join(OUT, "targetconfig.json"), config);

// 4. Overlay files. Replacing an upstream file needs a ledger entry with the hash of the upstream
//    version it was written against, so an upstream change gets a human review.
const ledger = stripMeta(readJson(path.join(FWD, "divergence.json")));
const replacedLedger = ledger.replaced || {};
// copyTree copies one overlay tree; each file that replaces an upstream file needs a ledger entry.
function copyTree(dir, label, ledgerSection) {
    const files = listFiles(dir);
    const replacedHere = [];
    for (const rel of files) {
        const upstreamFile = path.join(ROOT, rel);
        if (fs.existsSync(upstreamFile)) {
            const entry = ledgerSection[rel];
            if (!entry) fail(`${label}/${rel} replaces an upstream file, but forward/divergence.json has no entry for it`);
            const now = sha256(upstreamFile);
            if (entry.upstreamSha256 !== now)
                fail(`upstream ${rel} changed (ledger ${String(entry.upstreamSha256).slice(0, 12)}, now ${now.slice(0, 12)}); re-check ${label}/${rel} and update the ledger`);
            replacedHere.push(rel);
        }
        fs.mkdirSync(path.dirname(path.join(OUT, rel)), { recursive: true });
        fs.copyFileSync(path.join(dir, rel), path.join(OUT, rel));
    }
    for (const rel of Object.keys(ledgerSection))
        if (!files.includes(rel)) fail(`forward/divergence.json lists ${rel}, but ${label}/${rel} does not exist`);
    return { files, replaced: replacedHere };
}
const main = copyTree(path.join(OVERLAY, "files"), "forward/overlay/files", replacedLedger);
const overlayFiles = main.files;
const replaced = main.replaced;

// Board packages and the device picker (FWD_BOARDS=1 only). forward/overlay/boards/files has its
// own ledger section, "replacedWithBoards", so the default build never carries those changes.
for (const d of boardLibs)
    execFileSync("rsync", ["-a", "--delete", `${path.join(BOARDS, "libs", d)}/`, `${path.join(OUT, "libs", d)}/`], { stdio: "inherit" });
const boardFiles = WITH_BOARDS
    ? copyTree(path.join(BOARDS, "files"), "forward/overlay/boards/files", ledger.replacedWithBoards || {})
    : { files: [], replaced: [] };

// 5. Excluded upstream paths.
const excluded = [];
const excludeFile = path.join(OVERLAY, "exclude.txt");
if (fs.existsSync(excludeFile)) {
    for (const raw of fs.readFileSync(excludeFile, "utf8").split(/\r?\n/)) {
        const rel = raw.trim();
        if (!rel || rel.startsWith("#")) continue;
        if (rel.split(/[\\/]/).includes("..")) fail(`exclude.txt: ${rel} must stay inside the repo`);
        const p = path.join(OUT, rel);
        if (!fs.existsSync(p)) fail(`exclude.txt: ${rel} no longer exists upstream; remove the line`);
        fs.rmSync(p, { recursive: true, force: true });
        excluded.push(rel);
    }
}

// 6. Record what was built.
writeJson(path.join(OUT, "forward-build.json"), {
    builtAt: new Date().toISOString(),
    upstream: { repo: upstream.repo, line: upstream.line, tag: upstream.current },
    head: git("rev-parse", "HEAD"),
    dirty: (git("status", "--porcelain") || "") !== "",
    productName: brand.productName,
    domain: brand.domain,
    boards: boardLibs,
    boardFiles: { replaced: boardFiles.replaced, added: boardFiles.files.filter(f => !boardFiles.replaced.includes(f)) },
    overlay: {
        replaced,
        added: overlayFiles.filter(f => !replaced.includes(f)),
        excluded,
    },
});

console.log(`apply-overlay: build copy ready at ${OUT}`);
console.log(`  files replaced ${replaced.length}, added ${overlayFiles.length - replaced.length}, excluded ${excluded.length}`);
if (WITH_BOARDS) console.log(`  boards (FWD_BOARDS=1): ${boardLibs.join(", ")}`);
