# 006. Self-host the Jacdac simulator, starting with the build makecode.microbit.org pins

Date: 2026-10-08. Status: accepted (step 1 of plan M3).

## Context

As soon as a project uses Jacdac, the editor opens the Jacdac simulator in a frame at
`/simx/jacdac/pxt-jacdac/-/index.html`, on its own origin. Staging had nothing there, so the
panel under the board showed the 404 page.

## Decision

`forward/build/jacdac-sim.js` copies a pinned static simulator build to that path during the build.
- **Pinned build:** `forward/jacdac-sim.json` names pxt-jacdac's `gh-pages` commit `1804c0b3`, the same build makecode.microbit.org uses today (October 2025).
  - It's a Gatsby site built for exactly this path, and needs nothing else from jacdac-docs.
- **Left out:**
  - source maps (16 MB)
  - videos (62 MB)
  - the `gatsby-plugin-offline` service worker, which would keep serving an old simulator after a deploy
  - full-size device photos that have resized copies
  
  That takes it from 259 MB to 47 MB (1,257 files). The whole site stays around 4,900 files.

Step 2 (plan M3) replaces the pinned commit with a build of jacdac-docs' `makecodesim` branch that includes Forward's device widgets. Only `jacdac-sim.json` changes for the editor.

## Evidence (Pages emulator, 2026-10-08)

- **Panel:** a new project with the FIFA kit shows the Jacdac panel (Add blocks, Add simulators, Devices) instead of the 404 page.
- **Devices:** `fwdMotors.servoPort1.setAngle(90); fwdMotors.setRelay(true)` created simulated `fifaBrain/servo1` (at 90°) and `fifaBrain/relay` (active) devices that follow the program.
- **Network:** 80 requests across the editor (53), the board simulator (2) and the Jacdac frame (25), all to our own origin.

## Consequences

- Simulated devices show Jacdac's generic widgets. Forward's widgets need step 2, and simulated devices also need product-id tagging (plan M3).
- The simulator still runs on the editor's origin. The separate simulator origin is a later M0/M4 item.
- Upstream fixes reach us only when `jacdac-sim.json` changes, which is deliberate.

## Update 2026-10-08: newer upstream build with Forward widgets

- **New pin:** upstream rebuilt pxt-jacdac's `gh-pages` on 2026-10-06 (`2c550e0e`) from jacdac-docs `makecodesim`, with jacdac-spec `a86d334d`. Its bundle contains Forward's widgets (`FwdDialWidget`, `FwdDpadWidget` and others) and 31 Forward catalog images. `jacdac-sim.json` now pins it (51 MB after pruning).
  - The same FIFA test passes, with 80 requests all on our origin.
  - Simulated devices still get the generic widgets: Forward's widgets are chosen by product id, which simulated devices report as 0 (plan M3, part 2).
- **Own builds:** for builds ahead of upstream, `.github/workflows/fwd-jacdac-sim.yml` builds `makecodesim` at any commit and publishes a tarball. `jacdac-sim.js` accepts it through a `"tarball"` entry (URL plus SHA-256).
  - The workflow uses Node 14 on x86, as upstream does. jacdac-docs' Gatsby 4 dependencies have no prebuilt native binaries for newer Node.
  - It can't be reproduced on Apple silicon: an arm64 container can't build `@parcel/watcher`, and under x86 emulation Gatsby segfaults.
  - Not yet run in CI.
