#!/usr/bin/env node
// Pre-builds the native images that projects using Forward's extensions need, and adds them to
// the static editor's /hexcache, so Download works without a compile service.
//
//   node forward/build/prebuild-natives.js <build-dir> <site-dir>
//   node forward/build/prebuild-natives.js --check <sha>     (converter self-test, see below)
//
// For each combination in forward/native-combos.json, a tiny project is written into
// <build-dir>/projects/, then `pxt install` and `pxt build` run with PXT_DEBUG=1. The CLI logs
// "trying .../hexcache/<sha>.hex" for every native image the project needs. That sha is
// exactly what the browser later requests as /hexcache/<sha>.hex. The CLI keeps each image in
// ~/.pxt/cache/hex-<sha> in compressed form; this script expands it to Intel HEX (a port of
// pxt-core's private hexloader.decompressHex) and writes <site-dir>/hexcache/<sha>.hex.
//
// Until fwd-compile exists (plan M1), the CLI gets images it doesn't have from Microsoft's cloud
// compile service at build time. The built editor never calls it.
"use strict";

const fs = require("fs");
const os = require("os");
const path = require("path");
const { execFileSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..", "..");
const CLI_CACHE = path.join(os.homedir(), ".pxt", "cache");

function fail(msg) {
    console.error(`prebuild-natives: ${msg}`);
    process.exit(1);
}

// Port of pxt-core 13.0.9 pxtlib.js hexloader.decompressHex. Lines "!aaaa" + base64 carry 16-byte
// records from address aaaa; "@aaaa" + count carry zero-filled 16-byte records.
function decompressHex(hex) {
    const out = [];
    for (let i = 0; i < hex.length; i++) {
        const m = /^([@!])(....)$/.exec(hex[i]);
        if (!m) { out.push(hex[i]); continue; }
        let addr = parseInt(m[2], 16);
        const next = hex[++i];
        const buf = m[1] === "@" ? Buffer.alloc(16 * parseInt(next, 16)) : Buffer.from(next, "base64");
        if (buf.length === 0 || buf.length % 16 !== 0) fail(`bad compressed record at line ${i}`);
        for (let j = 0; j < buf.length; j += 16) {
            const bytes = [0x10, (addr >> 8) & 0xff, addr & 0xff, 0, ...buf.subarray(j, j + 16)];
            addr += 16;
            const chk = bytes.reduce((a, b) => a + b, 0);
            bytes.push((-chk) & 0xff);
            out.push(":" + bytes.map(b => b.toString(16).padStart(2, "0")).join("").toUpperCase());
        }
    }
    return out;
}

function readCached(sha) {
    const file = path.join(CLI_CACHE, `hex-${sha}`);
    if (!fs.existsSync(file)) return undefined;
    const data = JSON.parse(fs.readFileSync(file, "utf8"));
    return data && Array.isArray(data.hex) ? decompressHex(data.hex).join("\n") : undefined;
}

// Memory image of an Intel HEX file: address -> byte. Handles extended segment (02) and linear
// (04) address records, which staticpkg's copies and pxt's cache use interchangeably.
function memoryOf(text) {
    const mem = new Map();
    let base = 0;
    for (const line of text.split(/\r?\n/)) {
        if (!line.startsWith(":")) continue;
        const b = Buffer.from(line.slice(1), "hex");
        const len = b[0], addr = (b[1] << 8) | b[2], type = b[3], data = b.subarray(4, 4 + len);
        if (type === 0) data.forEach((v, k) => mem.set(base + addr + k, v));
        else if (type === 2) base = ((data[0] << 8) | data[1]) * 16;
        else if (type === 4) base = ((data[0] << 8) | data[1]) * 65536;
    }
    return mem;
}

// Self-test: expand a cached image and compare its memory contents with the copy staticpkg wrote.
if (process.argv[2] === "--check") {
    const sha = process.argv[3];
    const mine = memoryOf(readCached(sha));
    const theirs = memoryOf(fs.readFileSync(path.join(ROOT, "forward", ".build", "built", "packaged", "hexcache", `${sha}.hex`), "utf8"));
    // pxt's compressed cache drops short zero-filled padding records that the cloud's .hex keeps;
    // pxt links from the compressed form itself, so only real data differences count.
    const differs = [...mine].some(([a, v]) => theirs.get(a) !== v)
        || [...theirs].some(([a, v]) => !mine.has(a) && v !== 0);
    const same = !differs;
    console.log(same ? `prebuild-natives: ${sha.slice(0, 12)} matches staticpkg's copy (${mine.size} bytes; ${theirs.size - mine.size} zero padding bytes not kept)` : `MISMATCH (${mine.size} vs ${theirs.size} bytes)`);
    process.exit(same ? 0 : 1);
}

const BUILD = path.resolve(process.argv[2] || fail("usage: prebuild-natives.js <build-dir> <site-dir>"));
const SITE = path.resolve(process.argv[3] || fail("usage: prebuild-natives.js <build-dir> <site-dir>"));
const combos = JSON.parse(fs.readFileSync(path.join(ROOT, "forward", "native-combos.json"), "utf8")).combos;
const pxtCli = path.join(BUILD, "node_modules", "pxt-core", "built", "pxt.js");
const env = { ...process.env, PXT_DEBUG: "1" };
if (!env.GITHUB_ACCESS_TOKEN && env.GITHUB_TOKEN) env.GITHUB_ACCESS_TOKEN = env.GITHUB_TOKEN;

fs.mkdirSync(path.join(SITE, "hexcache"), { recursive: true });
let added = 0;
const report = [];
for (const [name, deps] of Object.entries(combos)) {
    const dir = path.join(BUILD, "projects", `fwd-native-${name}`);
    fs.rmSync(dir, { recursive: true, force: true });
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "pxt.json"), JSON.stringify({
        name: `fwd-native-${name}`,
        dependencies: { core: "*", ...deps },
        files: ["main.ts"],
        supportedTargets: ["microbit"],
    }, null, 4));
    fs.writeFileSync(path.join(dir, "main.ts"), "basic.showNumber(0)\n");

    let log;
    try {
        execFileSync("node", [pxtCli, "install"], { cwd: dir, env, stdio: "pipe" });
        log = execFileSync("node", [pxtCli, "build"], { cwd: dir, env, stdio: "pipe" }).toString();
    } catch (e) {
        fail(`${name}: pxt failed\n${(e.stdout || "").toString().slice(-2000)}${(e.stderr || "").toString().slice(-2000)}`);
    }
    const shas = [...new Set([...log.matchAll(/hexcache\/([0-9a-f]{64})\.hex/g)].map(m => m[1]))];
    if (!shas.length) fail(`${name}: no native image sha in the pxt log`);
    for (const sha of shas) {
        const dest = path.join(SITE, "hexcache", `${sha}.hex`);
        if (fs.existsSync(dest)) continue;
        const hex = readCached(sha);
        if (!hex) fail(`${name}: image ${sha} is not in ${CLI_CACHE}`);
        fs.writeFileSync(dest, hex + "\n");
        added++;
    }
    report.push(`${name}: ${shas.map(s => s.slice(0, 12)).join(", ")}`);
}
for (const line of report) console.log(`  ${line}`);
console.log(`prebuild-natives: ${Object.keys(combos).length} combinations, ${added} new image(s) in ${path.join(SITE, "hexcache")}`);
