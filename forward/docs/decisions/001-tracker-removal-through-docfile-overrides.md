# 001. Remove trackers through docfile overrides, not by patching built output

Date: 2026-10-04. Status: accepted.

## Context

The stock editor loads Microsoft's Application Insights on every documentation page and in the
editor, and pxt-microbit adds a Usabilla survey embed.
- `sw-makecode-offline` removed both by patching the *built* files.
- Its own `docs/UPDATING.md` warns that this can break on any MakeCode release.
- The plan (M0 spike 5) asked whether same-named files in the target's `docfiles/` could do it
  at source level instead.

## Decision

Ship four files from `forward/overlay/files/docfiles/`:
- `tracking.html` and `apptracking.html`: keep `pxtweb.js`, which the docs and the editor need. Give pxt an `appInsights` object that does nothing, and a `loadAppInsights` that returns false.
- `tickevent.html`: a do-nothing `pxtTickEvent`, so nothing polls for Application Insights every second.
- `apptrackingweb.html`: pxt-core's single `pxtweb.js` line, without the Usabilla embed.

Each is recorded in `forward/divergence.json` with the hash of the upstream file it replaces or
overrides, so an upstream change fails the build until someone re-checks it.

## Evidence

From the first overlay build of pxt-microbit v9.0.12 (pxt-core 13.0.9), compared with a pristine
build of the same tag:

| Check | Pristine | Forward |
|---|---|---|
| Built HTML files containing `instrumentationKey` | 1030 | 0 |
| Built HTML files loading `js.monitor.azure.com` | 1030 | 0 |
| Built HTML files containing `usabilla` | 3 | 1 (`skillmap.html`) |

The browser check: home screen, new project, blocks editor and a running simulator. It made 42
requests across the editor and the simulator frame, all to the editor's own origin.

## Consequences

- No post-build patch is needed for the main editor or the docs.
- Still needed after the build, as plan M1 already expects:
  - **skillmap:** `skillmap.html` carries its own inline Usabilla embed, so the sub-app removal step must take it out.
  - **unused SDK file:** `ai.2.min.js` is still copied into the output, unused; that step can delete it too.
