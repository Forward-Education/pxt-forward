#!/usr/bin/env node
// Self-hosts the Jacdac simulator: copies a pinned static build into
// <site-dir>/simx/jacdac/pxt-jacdac/-/, where the editor loads it next to the board.
//
//   node forward/build/jacdac-sim.js <site-dir>      (source: forward/jacdac-sim.json)
//
// The build is a Gatsby site made with pathPrefix /simx/jacdac/pxt-jacdac/-/, so it only works at
// exactly that path. Left out: source maps, videos, the gatsby-plugin-offline service worker (it
// would keep serving a stale simulator after a deploy), and full-size device photos that have
// resized copies (the simulator asks for the resized ones).
"use strict";

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { execFileSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..", "..");
const SITE = path.resolve(process.argv[2] || fail("usage: jacdac-sim.js <site-dir>"));
const cfg = JSON.parse(fs.readFileSync(path.join(ROOT, "forward", "jacdac-sim.json"), "utf8"));
const DEST = path.join(SITE, "simx", "jacdac", "pxt-jacdac", "-");

function fail(msg) {
    console.error(`jacdac-sim: ${msg}`);
    process.exit(1);
}

// Two sources, in order of preference:
//   "tarball": { url, sha256, jacdacDocs }  a build published by fwd-jacdac-sim.yml (with Forward widgets)
//   "repo" + "sha":                          a commit of a repo holding a ready build (pxt-jacdac gh-pages)
let CACHE, label;
if (cfg.tarball) {
    const { url, sha256 } = cfg.tarball;
    if (!/^[0-9a-f]{64}$/.test(sha256 || "")) fail("tarball.sha256 must be a SHA-256 hex digest");
    CACHE = path.join(ROOT, "forward", ".build", "jacdac-sim", sha256);
    label = `jacdac-docs ${String(cfg.tarball.jacdacDocs || "?").slice(0, 12)}`;
    if (!fs.existsSync(path.join(CACHE, "index.html"))) {
        fs.rmSync(CACHE, { recursive: true, force: true });
        fs.mkdirSync(CACHE, { recursive: true });
        const tgz = path.join(CACHE, "..", `${sha256}.tgz`);
        execFileSync("curl", ["-fsSL", "-o", tgz, url], { stdio: "inherit" });
        const got = crypto.createHash("sha256").update(fs.readFileSync(tgz)).digest("hex");
        if (got !== sha256) { fs.rmSync(tgz); fail(`download ${url} has SHA-256 ${got}, expected ${sha256}`); }
        execFileSync("tar", ["-xzf", tgz, "-C", CACHE], { stdio: "inherit" });
        fs.rmSync(tgz);
    }
} else {
    CACHE = path.join(ROOT, "forward", ".build", "jacdac-sim", cfg.sha);
    label = `${cfg.repo.replace("https://github.com/", "")} ${cfg.sha.slice(0, 12)}`;
    const git = (...args) => execFileSync("git", args, { cwd: CACHE, stdio: ["ignore", "pipe", "pipe"] }).toString().trim();
    // Fetch the pinned commit once; later runs reuse it.
    if (!fs.existsSync(path.join(CACHE, "index.html"))) {
        fs.rmSync(CACHE, { recursive: true, force: true });
        fs.mkdirSync(CACHE, { recursive: true });
        git("init", "-q");
        git("fetch", "-q", "--depth", "1", cfg.repo, cfg.sha);
        git("checkout", "-q", "FETCH_HEAD");
    }
    if (git("rev-parse", "HEAD") !== cfg.sha) fail(`cache at ${CACHE} is not ${cfg.sha}`);
}

fs.rmSync(DEST, { recursive: true, force: true });
fs.mkdirSync(DEST, { recursive: true });
execFileSync("rsync", [
    "-a",
    "--exclude=/.git", "--exclude=*.map", "--exclude=/videos",
    "--exclude=/sw.js", "--exclude=/workbox-*", "--exclude=/offline-plugin-app-shell-fallback",
    `${CACHE}/`, `${DEST}/`,
], { stdio: "inherit" });

// Full-size device photos: drop X.jpg when resized copies (X.avatar.jpg, X.catalog.jpg, ...) exist.
let dropped = 0;
(function walk(dir) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        const p = path.join(dir, e.name);
        if (e.isDirectory()) { walk(p); continue; }
        const m = /^([^.]+)\.(jpg|png)$/.exec(e.name);
        if (m && fs.existsSync(path.join(dir, `${m[1]}.catalog.${m[2]}`))) { fs.rmSync(p); dropped++; }
    }
})(path.join(DEST, "images", "devices"));

if (!fs.existsSync(path.join(DEST, "index.html"))) fail("no index.html in the simulator build");
const size = execFileSync("du", ["-sh", DEST]).toString().split("\t")[0];
console.log(`jacdac-sim: ${label} at /simx/jacdac/pxt-jacdac/-/ (${size}; ${dropped} full-size photos left out)`);
