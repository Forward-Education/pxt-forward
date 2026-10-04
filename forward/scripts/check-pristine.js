#!/usr/bin/env node
// Rule 1: nothing outside forward/ and .github/ may differ from the pinned upstream tag.
// Checks committed and uncommitted changes, plus untracked files.
//
//   node forward/scripts/check-pristine.js
"use strict";

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..", "..");
const upstream = JSON.parse(fs.readFileSync(path.join(ROOT, "forward", "upstream.json"), "utf8"));

const git = (...args) =>
    execFileSync("git", args, { cwd: ROOT, stdio: ["ignore", "pipe", "pipe"] }).toString().trim();

function resolve(ref) {
    try {
        return git("rev-parse", "--verify", "--quiet", `${ref}^{commit}`);
    } catch {
        return null;
    }
}

const tag = upstream.current;
const base = resolve(`refs/upstream-tags/${tag}`) || resolve(`refs/tags/${tag}`);
if (!base) {
    console.error(`check-pristine: upstream tag ${tag} not found. Fetch it with:`);
    console.error(`  git fetch --no-tags ${upstream.repo} '+refs/tags/*:refs/upstream-tags/*'`);
    process.exit(2);
}

const scope = ["--", ".", ":(exclude)forward", ":(exclude).github"];
const changed = git("diff", "--name-only", base, ...scope).split("\n").filter(Boolean);
const untracked = git("ls-files", "--others", "--exclude-standard", ...scope).split("\n").filter(Boolean);
const all = [...new Set([...changed, ...untracked])];

if (all.length) {
    console.error(`check-pristine: ${all.length} path(s) outside forward/ and .github/ differ from ${tag}:`);
    for (const f of all.slice(0, 50)) console.error(`  ${f}`);
    if (all.length > 50) console.error(`  ... and ${all.length - 50} more`);
    console.error("Move the change into forward/overlay/ (see forward/README.md).");
    process.exit(1);
}
console.log(`check-pristine: clean against ${tag} (${base.slice(0, 12)})`);
