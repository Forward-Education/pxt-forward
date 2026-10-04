# 002. First overlay build of v9.0.12: results and follow-ups

Date: 2026-10-04. Status: accepted (record of the first M0 build).

## Context

The first `forward/scripts/build.sh` run proves the overlay layout:
- upstream files untouched
- the effective target written into a separate build copy
- `pxt staticpkg` run there

It ran locally on macOS against a clone of upstream v9.0.12, with pxt-core 13.0.9 and Node 26,
and was compared with a pristine `staticpkg` of the same tag.

## Results

**Overlay mechanics**
- `check-pristine.js` passed. It also failed as intended when `libs/core/basic.cpp` was edited.
- `apply-overlay.js` replaced 1 upstream file and added 3 docfile overrides.
- It excluded 3 paths: the CC BY-NC-SA `ucp-science` course and Microsoft's site verification file.
- `check-invariants.js` found 0 errors.
  - Findings were only GitHub URLs in the compile configuration (used at build time) and the Jacdac simulator's `devUrl`, which applies only on localhost with `?simxdev`.
  - No Microsoft host is left in the effective configuration.

**Build output**
- **Time:** 36 seconds, because all 22 native images were already in the local pxt cache (`~/.pxt/cache`). These images were compiled by Microsoft's cloud service during earlier builds. Expect much longer on a clean machine or CI runner until `fwd-compile` exists (plan M1).
- **Errors:** both builds log the same kinds of TypeScript errors (21 Forward, 23 pristine), so the overlay adds none.
  - `TS1109`/`TS1005` in `sim/visuals/microbit.ts` and `sim/state/record-audio.ts` come from pxt's translation-string scan, which uses an older parser that doesn't know `??` and `?.`.
  - The emitted `sim.js` is correct: those expressions were down-levelled, for example `(_a = pin.value) !== null && _a !== void 0 ? _a : 0`. It passes `node --check`.
  - This settles the open question in `sw-makecode-offline/docs/BUILD.md`: the simulator is intact.
  - `unknown label pxt::RefAction_vtable` and `function not found (shim=...)` come from `staticpkg` trying every "base project plus one package" combination. Some pairs, such as Bluetooth with a V2-only library, can't link. Pristine upstream logs the same.

**In the browser**
- Title "Forward Code", header "Forward Education", no hero banner, no Share button or sign-in.
- A new project opens with the blocks editor and the simulator running.
- All 42 requests went to the editor's own origin.

## Follow-ups

1. **Region lookup (M1).** The console shows `Unable to determine region: Failed to construct 'URL': Invalid base URL` from `initRegionAsync`. It is caught and harmless, and probably comes from the relative `cloud.apiRoot`. Decide in M1 whether to stub the region lookup or set an absolute `apiRoot` per deployment.
2. **Theme image 404 (M2).** `/static/logo_texture.png` returns 404. It's referenced by upstream's `microbit-light` override CSS and is missing from pristine builds too. It goes away when M2 replaces the colour themes.
3. **Logos (M2).** The header still shows upstream's micro:bit logo files (`docs/static/logo.*.svg`).
4. **CI timing (updated after the first CI run).** The first run on `main` (`fa595e3`) took 1m 56s on a clean runner.
   - Each native image came back in about a second. Forward's C++ inputs are byte-identical to upstream's, so the image fingerprints match ones Microsoft's cloud had already built, and the CLI downloads them instead of compiling.
   - It logged the same 18 native-image lines as the local build.
   - This is still a build-time dependency on Microsoft's compile service until `fwd-compile` replaces it (plan M1).
5. **CI annotations.** The translation-scan TypeScript errors above became error annotations through setup-node's `tsc` problem matcher. The workflow now removes that matcher, so they stay in the log only.
   - The same change moves the actions to their pinned v6 releases (Node 24 runtime), pins `ubuntu-24.04`, and builds with Node 24 LTS.
   - Upstream builds with Node 20, which reached end of life in April 2026.
