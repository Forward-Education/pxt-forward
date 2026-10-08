# 005. Pre-build native images for Forward's extension combinations

Date: 2026-10-08. Status: accepted (interim until fwd-compile, plan M1).

## Context

- **The problem:** a project that uses Jacdac links Jacdac's C++, so Download needs a native image that `staticpkg` doesn't make; it only pre-builds bundled packages. On staging, Download would have asked `/api/compile/extension`, which doesn't exist yet.
- **What every Forward project needs:** Forward's extensions are TypeScript only, but all of them (except UBit) depend on pxt-jacdac.

## Decision

`forward/build/prebuild-natives.js` runs in `build.sh` after `staticpkg`.

1. **One project per combination.** For each combination in `forward/native-combos.json`, it writes a tiny project into the build copy, then runs `pxt install` and `pxt build` with `PXT_DEBUG=1`.
2. **Fingerprints.** The CLI logs `trying .../hexcache/<sha>.hex` for each native image the project needs. That sha is exactly what the browser later requests.
3. **Conversion.** The CLI keeps images in `~/.pxt/cache/hex-<sha>` in pxt's compressed form. The script expands them to Intel HEX, porting pxt-core 13.0.9's private `hexloader.decompressHex`, and writes `/hexcache/<sha>.hex`.

At build time, until `fwd-compile` exists, the CLI gets any image it doesn't have from Microsoft's compile service. The built editor never calls it.

## Evidence (2026-10-08)

- **Converter self-test:** `--check` compared all 10 images present in both pxt's cache and staticpkg's output. All 10 have identical bytes.
  - pxt's compressed form drops 0 to 12 bytes of zero padding that the cloud's `.hex` keeps.
  - It also writes extended *segment* address records where the cloud uses *linear* ones; both mean the same address.
  - pxt links from this same compressed form itself.
- **Combinations:** the 4 combinations (pxt-jacdac v1.9.41 and v1.9.42, each with and without datalogger) need 3 images: one V1 base and two V2. The two Jacdac versions have identical C++.
- **Download in the editor** (Pages emulator; new project, FIFA kit added): it fetched exactly `/hexcache/949fbd03….hex` and `/hexcache/ac2cabee….hex` and saved the `.hex`.
  - No `/api/compile` call, and nothing off-origin.
  - The WebUSB pairing step was skipped for the test, because no board was connected.

## Consequences

- Combinations outside the list still need a compile service. That includes Bluetooth, audio recording and third-party C++ extensions, and any new pxt-jacdac release whose C++ changes. Add likely combinations to `native-combos.json`. `fwd-compile` (M1) covers the rest.
- A clean CI runner fetches these images from Microsoft's cache at build time (seconds). Plan M1 moves this to Forward's own build images.
- Untested so far: flashing a real micro:bit V2 and running Jacdac modules from one of these downloads. That's the next hardware bench check.
