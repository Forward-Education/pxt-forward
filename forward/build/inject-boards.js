#!/usr/bin/env node
// Adds the device picker's board packages (forward/overlay/boards/libs/<board>) to a built
// editor. Only runs for builds with FWD_BOARDS=1 (forward/docs/device-picker.md).
//
//   node forward/build/inject-boards.js <build dir> <site dir>
//
// Why after staticpkg: with dynamicBoardDefinition, pxt builds every "core": true package as a
// project, which needs that board's native image. Until Forward builds RP2040 images (plan M7),
// staticpkg would fail on them. Board packages hold only pxt.json, README.md and board.json (no
// code to type-check), so adding them to the bundle's bundledpkgs is all pxt needs to offer them.
// pxt writes the bundle twice: target.json, and target.js as `var pxtTargetBundle = <json>`.
"use strict";

const fs = require("fs");
const path = require("path");

const [BUILD, SITE] = process.argv.slice(2).map(p => path.resolve(p));
if (!BUILD || !SITE) {
    console.error("usage: inject-boards.js <build dir> <site dir>");
    process.exit(1);
}

const forwardBuild = JSON.parse(fs.readFileSync(path.join(BUILD, "forward-build.json"), "utf8"));
const boards = forwardBuild.boards || [];
if (!boards.length) {
    console.log("inject-boards: no boards in this build (FWD_BOARDS unset), nothing to do");
    process.exit(0);
}

const bundled = {};
for (const board of boards) {
    const dir = path.join(BUILD, "libs", board);
    const config = JSON.parse(fs.readFileSync(path.join(dir, "pxt.json"), "utf8"));
    if (config.name !== board) throw new Error(`libs/${board}/pxt.json is named "${config.name}"`);
    const files = { "pxt.json": fs.readFileSync(path.join(dir, "pxt.json"), "utf8") };
    for (const f of config.files) {
        if (/\.(ts|cpp|h|c|s)$/.test(f)) throw new Error(`libs/${board}/${f}: board packages can't carry code until staticpkg can build them`);
        files[f] = fs.readFileSync(path.join(dir, f), "utf8");
    }
    bundled[board] = files;
}

const PREFIX = "var pxtTargetBundle = ";
for (const name of ["target.json", "target.js"]) {
    const p = path.join(SITE, name);
    const text = fs.readFileSync(p, "utf8");
    const isJs = name.endsWith(".js");
    if (isJs && !text.startsWith(PREFIX)) throw new Error(`${name} no longer starts with "${PREFIX}"; re-check inject-boards.js`);
    const bundle = JSON.parse(isJs ? text.slice(PREFIX.length) : text);
    if (!bundle.simulator || !bundle.simulator.dynamicBoardDefinition) throw new Error(`${name}: dynamicBoardDefinition is off`);
    for (const [board, files] of Object.entries(bundled)) {
        if (bundle.bundledpkgs[board]) throw new Error(`${name} already bundles ${board}`);
        bundle.bundledpkgs[board] = files;
    }
    const json = JSON.stringify(bundle, null, 4);
    fs.writeFileSync(p, isJs ? PREFIX + json : json);
}
// The device picker must be in the editor bundle, or nobody can start a project on these boards.
if (!fs.readFileSync(path.join(SITE, "editor.js"), "utf8").includes("fwd-device-picker"))
    throw new Error("editor.js has no device picker (forward/overlay/boards/files/editor/fwd-boards.ts)");
console.log(`inject-boards: bundled ${boards.join(", ")}; device picker in editor.js`);
