#!/usr/bin/env node
// Checks the effective target in a build copy against the plan's invariants.
//
//   node forward/build/check-invariants.js [--build <dir>] [--strict]
//
// Errors always fail the run. Findings (Microsoft or third-party hosts still referenced, video
// galleries) are printed, and fail the run only with --strict, which CI turns on in M1.
"use strict";

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const ROOT = path.resolve(__dirname, "..", "..");
const argv = process.argv.slice(2);
const buildIdx = argv.indexOf("--build");
const BUILD = path.resolve(buildIdx >= 0 ? argv[buildIdx + 1] : path.join(ROOT, "forward", ".build"));
const STRICT = argv.includes("--strict");

const errors = [];
const findings = [];
const read = p => JSON.parse(fs.readFileSync(p, "utf8"));
const sha256 = p => crypto.createHash("sha256").update(fs.readFileSync(p)).digest("hex");

const target = read(path.join(BUILD, "pxtarget.json"));
const config = read(path.join(BUILD, "targetconfig.json"));
const cloud = target.cloud || {};
const theme = target.appTheme || {};

function must(ok, msg) {
    if (!ok) errors.push(msg);
}

must(target.id === "microbit", `target id must stay "microbit" (is "${target.id}")`);
must(target.nickname === "microbit", `nickname must stay "microbit" (is "${target.nickname}")`);
must(cloud.apiRoot === "/api/", 'cloud.apiRoot must be "/api/" so no request defaults to makecode.com');
for (const k of ["sharing", "publishing", "importing", "thumbnails"])
    must(cloud[k] === false, `cloud.${k} must be false`);
must(!cloud.cloudProviders, "cloud.cloudProviders must be absent (sign-in is off)");
must(theme.disableLiveTranslations === true, "appTheme.disableLiveTranslations must be true");
must(!theme.shareUrl, "appTheme.shareUrl must be absent (sharing is off)");
must(!(theme.enabledFeatures && theme.enabledFeatures.aiErrorHelp), "AI error help must be off");
must(!((target.simulator || {}).messageSimulators || {}).robot,
    "simulator.messageSimulators.robot loads microsoft.github.io; remove it");

// Hosts the effective configuration still points at.
const MICROSOFT = /(^|\.)(makecode\.com|microsoft\.com|microsoft\.github\.io|userpxt\.io|azureedge\.net|msecnd\.net|visualstudio\.com|azure\.com|windows\.net|live\.com|crowdin\.com|usabilla\.com)$/i;
const THIRD_PARTY = /(^|\.)(microbit\.org|youtube\.com|youtu\.be|github\.io|githubusercontent\.com|github\.com)$/i;
function scan(v, where) {
    if (typeof v === "string") {
        for (const m of v.matchAll(/https?:\/\/([a-z0-9.-]+)/gi)) {
            const host = m[1].toLowerCase();
            if (MICROSOFT.test(host)) findings.push(`Microsoft host ${host} at ${where}`);
            else if (THIRD_PARTY.test(host)) findings.push(`third-party host ${host} at ${where}`);
        }
    } else if (v && typeof v === "object") {
        for (const k of Object.keys(v)) scan(v[k], `${where}/${k}`);
    }
}
scan(target, "pxtarget.json");
scan(config, "targetconfig.json");
for (const [name, g] of Object.entries(config.galleries || {}))
    if (g && typeof g === "object" && g.youTube) findings.push(`gallery "${name}" is flagged youTube (triggers the YouTube probe)`);

// pxt-core docfiles that Forward overrides: the versions they were written against must not move.
const ledger = read(path.join(ROOT, "forward", "divergence.json"));
const pxtCore = path.join(BUILD, "node_modules", "pxt-core");
if (fs.existsSync(pxtCore)) {
    for (const [rel, entry] of Object.entries(ledger.overridden || {})) {
        const p = path.join(pxtCore, rel);
        if (!fs.existsSync(p)) {
            errors.push(`pxt-core no longer ships ${rel}; re-check forward/overlay/files/${rel}`);
            continue;
        }
        const now = sha256(p);
        if (now !== entry.upstreamSha256)
            errors.push(`pxt-core ${rel} changed (ledger ${String(entry.upstreamSha256).slice(0, 12)}, now ${now.slice(0, 12)}); re-check the override and update forward/divergence.json`);
    }
} else {
    findings.push("node_modules/pxt-core is not installed yet, so the pxt-core docfile hashes were not checked");
}

for (const f of findings) console.log(`finding: ${f}`);
for (const e of errors) console.error(`ERROR: ${e}`);
console.log(`check-invariants: ${errors.length} error(s), ${findings.length} finding(s)${STRICT ? " (strict)" : ""}`);
process.exit(errors.length || (STRICT && findings.length) ? 1 : 0);
