# Plan: Forward-branded MakeCode editor (a fork of pxt-microbit)

## Context

Forward Education wants its own MakeCode editor with its own look and feel, its own hardware and its own simulators. It must keep full micro:bit (V1 and V2) and Jacdac functionality, and leave room to add Forward's own boards later.

**What exists today**
- **Offline build:** `sw-makecode-offline` already builds stock `microsoft/pxt-microbit` with `pxt staticpkg`. It bundles Forward's extensions, serves the Jacdac simulator itself and compiles .hex files offline.
  - It customises the editor by patching the *built output*, which its own `docs/UPDATING.md` says can break on any MakeCode release.
  - It is unbranded.
  - Its hex cache of pre-compiled runtime images was compiled by Microsoft's cloud service.
- **Hardware:** every shipping product is a stock micro:bit V2 plus accessories (UBit, FIFA breakout, motor board) or one of about 30 Jacdac modules, so none of it needs a new runtime.
- **Jacdac simulator:** Forward's simulator widgets were merged into jacdac-docs on 2026-09-28. makecode.microbit.org still pins an October 2025 simulator build, so customers can't see them.
- **July 2026 strategy:** `hw-breakoutv3/docs/makecode-strategy.md` planned a *separate* editor, forked from pxt-maker, for the RP2040 board concept.

**Decisions made 2026-09-29**

| Question | Decision |
|---|---|
| Second board | **RP2040 boards that run the same micro:bit blocks and lessons**, added to this fork as extra boards, as Calliope did (route A in M7). Puya and WCH chips were considered. Two are in design (updated 2026-10-03): the brain (`hw-breakoutv3`), which also gets micro:bit radio and Bluetooth through an nRF52820 co-processor, and the hybrid breakout's standalone mode (`hw-breakout-hybrid`). The first release still covers only micro:bit V2 plus Forward accessories and modules. A 2-3 week spike confirms feasibility before committing; the fallback is a small sibling editor based on pxt-maker, `pxt-forward-brain` (route C). |
| Backend | Fully independent. Self-host the static editor; the browser contacts nothing of Microsoft's at runtime. Pre-built .hex combinations plus Forward's own compile service; sharing and sign-in off. |
| First release | A public online editor for all Forward customers: branding, a Forward home screen and tutorials, Forward extensions, and the Jacdac simulator with Forward widgets. |
| UI depth | Reskin through the target only. No fork of `microsoft/pxt`, the editor core. |

**Outcome:** a public editor built by CI from a lightly diverged fork.
- **Domain:** it launches at `code.forwardedu.com` and moves to **`makecode.forwardedu.com`** once Microsoft gives written permission to use the MakeCode name (decided 2026-10-03; see "Domain move" under M4).
- **Product name:** TBD. "Forward Code" until then; a MakeCode name once permitted. The same pipeline also produces the offline bundle. If the spike says go, Forward's RP2040 boards can be added later as extra boards that run the same blocks and tutorials.

## Target architecture

**Repositories**
- **`Forward-Education/pxt-forward`:** public GitHub fork of `microsoft/pxt-microbit`, tracking release tags on upstream's **`stable9.0`** branch (the live site is v9.0.12).
  - Forward code lives only under `forward/` and `.github/`.
  - Release tags are `fwd/9.0.12-1`. Never tag `v*`, which would collide with upstream.
- **`Forward-Education/fwd-compile`:** the compile API, the build worker, and the build images `fwd-codal` (V2) and `fwd-yotta` (V1), published to GHCR.
- **`Forward-Education/jacdac-docs`:** fork with branch `fwd/makecodesim`, the source of the Jacdac simulator build. Changes go upstream first.
- **`Forward-Education/pxt-fwd-simx`:** Forward's own simulators for non-Jacdac hardware (UBit, FIFA).
- **`Forward-Education/makecode-tutorials`:** tutorials migrated from `climate-action-kits/pxt-fwd-edu`.
- **`sw-makecode-offline`:** shrinks to packaging only (installers, Caddy, certificate authority, USB assembly).

**Runtime** (all requests go to Forward's own domains, and CSP `connect-src 'self'` enforces it)
```
code.forwardedu.com        (Cloudflare Pages; becomes makecode.forwardedu.com once Microsoft permits)
  /                        staticpkg output: editor, docs, /hexcache/<sha>.hex (pre-built matrix)
  /api/gh/*, /api/ghsearch/*   static GitHub-proxy snapshot of pinned extension repos
  /api/clientconfig, /api/compile/*, /compile/*   → Pages Function proxy → fwd-compile (DO App Platform)
<separate sim domain>      simulator.html, /simx/jacdac/pxt-jacdac/-/, /simx/forward-education/<repo>/-/
fwd-compile                API (TypeScript/Fastify) + isolated build worker, Postgres queue (pg-boss), DO Spaces for hex
```

**Rules** (enforced in CI)
1. **Upstream files stay unchanged in git.** `forward/scripts/check-pristine.js` fails the build if anything outside `forward/` and `.github/` differs from the upstream tag.
   - The effective `pxtarget.json` and `targetconfig.json` come from `forward/build/apply-overlay.js`, which writes them into a gitignored build copy. It combines a JSON merge patch with Forward's own targetconfig.
2. **Never edit `libs/**`, `sim/**`, `editor/**` or `package*.json`, and never bump pxt-core ahead of upstream.**
   - Every C/C++ byte is hashed into the image identity (`pxtlib/cpp.ts`), so this keeps micro:bit output unchanged and the V1 toolchain out of the loop.
   - Each replaced upstream file is recorded in `forward/divergence.json` with its upstream hash.
   - **Planned exception:** if M7 says go, the RP2040 boards need their own board views in `sim/` and a UF2 flashing path in `editor/`. Those will be the fork's first deliberate edits to upstream code, recorded in the ledger. Until then, no exceptions.
   - **The shared `libs/**` C++ should stay untouched even then.** Brain differences belong in the brain's own CODAL layer. Any shared C++ edit changes the fingerprint of every micro:bit image and forces a full rebuild, including V1 on the old yotta toolchain.
3. **Keep the target id `microbit`.** This keeps .hex/.mkcd import from Microsoft's editor working, keeps pxt-jacdac's `target:microbit` files, and keeps images identical to Microsoft's for the same inputs. The browser storage database name contains the id, so changing it later would orphan students' projects.
4. **Nothing of Microsoft's at runtime.** Build time may use GitHub, npm and a translation snapshot taken from makecode.com and committed to a Forward repo.
5. **Jacdac changes go to `jacdac/*` first.** The Forward fork only carries what's pending upstream or Forward-only.

**Stock features not in v1**, compared with makecode.microbit.org:
- share links, sign-in and cloud sync, GitHub project storage
- extension search beyond the curated set
- skillmap, teacher tool, multiplayer, kiosk
- AI error help, the micro:bit ML editor extension, and the Jacdac "Configure" panel

Projects stay in browser storage and export as .hex or .mkcd files.

## Roadmap

These are rough estimates in person-weeks (pw), refined after M0.

| # | Milestone | Estimate | Exit criteria |
|---|---|---|---|
| M0 | Foundations and spikes | ~4 pw | Fork builds v9.0.12 on staging; five decision records written |
| M1 | Independent editor on staging | 8-10 pw | Zero off-host requests in scripted flows; uncached C++ compiles through `fwd-compile` |
| M2 | Reskin and content | 2-3 pw + design | Brand sign-off; screenshot baselines; trademark checklist passes |
| M3 | Jacdac simulator with Forward widgets | 4.5-7 pw | Each Forward module shows its Forward widget when simulated |
| M4 | **Public launch** | 2.5-3.5 pw | Staging green 7 days; hardware bench passes; go-live checklist |
| (M4b) | Domain move to `makecode.forwardedu.com`, only if launch comes before Microsoft's permission | 1-1.5 pw | Projects move across in one click; old domain redirects after a term |
| M5 | Forward simulators (UBit, FIFA, custom services) | 8-11 pw | UBit sim speaks Spanish; "drive 20 cm" within 5% |
| M6 | Offline bundle from the same pipeline | 1-1.5 pw | Offline smoke test with the network cable pulled |
| M7 | RP2040 boards spike: brain and hybrid (firmware engineer) | 2-3 weeks | Go/no-go memo |

- **Launch (M0-M4):** about 21-28 pw, or 2.5-3.5 months with two to three people working in parallel on the editor, backend and simulator tracks.
- **M5-M6:** follow after launch.
- **M7:** mostly firmware work, so it can run in parallel with M1-M3 once M0 has produced the fork build and the build-image pattern.

### M0: Foundations and spikes
- **Fork setup** (Brian creates the fork; Claude never creates remote repos):
  - Delete the upstream workflows; `pxt-buildpush.yml` has `contents: write`.
  - Add `forward/upstream.json` = `{line: stable9.0, tagGlob: v9.0.*, current: v9.0.12}`.
  - Add `.github/workflows/fwd-build.yml` (Node 20; Node 26 is untested with pxt 13) deploying to a Cloudflare Pages staging project behind Cloudflare Access.
- **Spikes**, each ending in `forward/docs/decisions/NNN-*.md`:
  1. **Extension delivery.**
     - *Primary option:* a static GitHub-proxy snapshot at `/api/gh/**`. It has to answer:
       - `gh/<o>/<r>`
       - `/refs`
       - `/<tag>[/<sub>]/text`
       - `ghsearch/microbit/microbit`
     - Every response must be `application/json`.
     - Dependencies stay `github:…#vX`, so projects move freely between Forward's editor and makecode.microbit.org.
     - *Fallback:* bundling, as sw-makecode-offline does today. Incoming projects still resolve, because pxt loads any dependency whose name matches a bundled package from the bundle (`pxtlib/package.ts` `resolveVersionAsync` → `getEmbeddedScript`). But extensions added in Forward's editor get `"*"` dependencies, which break on makecode.microbit.org.
  2. **Build images.**
     - `fwd-codal` (V2): Arm GCC pinned by checksum, CMake, Ninja and Python 3, with `codal-microbit-v2@v0.3.5`, `codal-core`, `codal-nrf52` and `codal-microbit-nrf5sdk` pre-cloned at their locked SHAs. The `pext/yotta:latest` image upstream names for V2 dates from 2017 and can't be used.
     - `fwd-yotta` (V1): `pext/yotta:gcc5` mirrored by digest, with `yotta_modules` baked in.
     - Pass: builds work with `--network none`, repeat builds are byte-identical, a V2 flashes and the FIFA kit's Jacdac modules stream, and the V1 base image builds.
  3. **Simulator on a separate origin.** Rewrite `simUrl`/`partsUrl` in the page's embedded `pxtConfig` after the build (staticpkg hard-codes it). The simulator iframe uses `allow-same-origin`, so a same-origin simulator isn't isolated from the editor.
  4. **Translations.** Snapshot them into `--locs-src` and set `appTheme.disableLiveTranslations: true`.
  5. **Docfile overrides.** The target's `docfiles/` wins over pxt-core's (`cli/server.ts`, `cli/cli.ts` renderDocs), so trackers can be removed without post-build patching.
- **Brand and legal kickoff:**
  - product name, logos and colour tokens
  - a trademark checklist: no "micro:bit" in the name or domain ("works with BBC micro:bit" is fine); "MakeCode" only once Microsoft's permission is in writing; Microsoft and micro:bit logos removed
  - **Ask Microsoft for permission now**, so the answer can land before launch. Write to makecode@microsoft.com asking to use the MakeCode name and `makecode.forwardedu.com`, and to agree the attribution wording (e.g. "Powered by Microsoft MakeCode"). Forward's existing relationship helps: CodeCTRL as an Arcade hardware partner, the 2026 MakeCode 10th-anniversary blog post, and approved extensions.
  - docs licences: drop `courses/ucp-science/**`, which is CC BY-NC-SA, and review `microbit-org/*`; check the terms for the community translations
  - counsel review
  - **One brand file:** keep the product name, domain and URLs in a single overlay file, `forward/brand.json`, so the switch to MakeCode naming is a config change rather than an edit across files

### M1: Independent editor on staging
- **`forward/overlay/pxtarget.patch.json` must set:**
  - `cloud.apiRoot: "/api/"`. Without it, an offline bundle served on localhost sends compile misses to makecode.com.
  - `sharing`, `publishing`, `importing` and `thumbnails` false; `cloudProviders` removed.
  - `disableLiveTranslations`, `githubEditor: false`, and AI error help off.
  - `crowdinProject`, `socialOptions` and `preferredPackages` set to null.
  - `simulator.messageSimulators.robot` removed (it loads microsoft.github.io).
  - `compileService.dockerImage` pointing at the Forward images. Hashes don't depend on the image.
- **`forward/overlay/targetconfig.json`:**
  - galleries
  - `approvedRepoLib` pruned to Forward, Jacdac and a curated list
  - simx entries
  - empty `approvedEditorExtensionUrls`
  - no `preferred` catalogue flags (they trigger a prefetch)
- **Tracker removal as source-level docfile overrides**, replacing sw-makecode-offline step 26:
  - empty `tracking.html` and `apptracking.html`
  - a no-op `tickevent.html`
  - `apptrackingweb.html` reduced to the one `pxtweb.js` script line (dropping it broke the offline build before)
  - `macros.html` rendering video macros as links
- **What stays post-build** is in `forward/build/post-build.js`, where every patch fails the build if it doesn't apply:
  - the tutorial-tool embed URL (step 29)
  - removing the sub-apps that hard-code makecode.com: kiosk, multiplayer, authcode, skillmap, teachertool
  - the `simUrl` rewrite
  - `_headers` and `_redirects`
- **Extensions:** pins in `forward/extensions.json` plus `extensions.lock.json` (tag → SHA; CI fails if a tag moves). Port `sw-makecode-offline/build/resolve-deps.js` and `check-manifests.js` into `forward/build/gh-snapshot.js`, or into the bundler if the spike chose bundling.
- **`fwd-compile` MVP.** It speaks pxt's protocol:
  - `GET /api/clientconfig` → `{primaryCdnUrl}`
  - `POST /api/compile/extension` with `{data: base64(JSON{config, tag, replaceFiles, dependencies})}`
  - the client polls `compile/<sha>.json` every 8 s for up to 5 min, then fetches `compile/<sha>.hex`

  How it's built:
  - The server recomputes the sha itself.
  - Deduplicate on the sha: 30 students asking for the same image trigger one build.
  - Write the `.hex` before the `.json`.
  - Send real 404s with `no-store`; a fallback that returns `index.html` gets treated as a hex file.
  - All responses are JSON content type.
- **Validation:**
  - Accept only the `(mbcodal2, v0.2.13)` and `(microbit, v2.2.0-rc6)` build configurations.
  - Accept only `/pxtapp/<pkg>/*.{cpp,h,c,s}` plus the fixed generated files.
  - Reject `..`, `CMakeLists.txt`, `Makefile`, `*.mk` and unlisted `codal.json` libraries (pxt passes these through from any extension).
  - Size caps.
  - Only files whose hash is listed in a CI-generated manifest are accepted, until the GitHub proxy and hardened sandbox arrive (see "Later").
- **Worker isolation:** non-root, no network, no secrets, no shared compiler cache, 240 s / 2 GB limits.
- **Ops:** rate limits, Sentry, JSON logs with hashed IPs kept 30 days; about $70-90 a month.
- **Privacy:** requests carry only extension C/C++ and build config, never student code.
- **Pre-built image matrix:**
  - Synthetic template-project (`*prj`) directories copied in from the overlay, plus `staticpkgdirs`.
  - CI builds through `fwd-compile` (`PXT_ACCESS_TOKEN=https://<host>/?access_token=…`) with `*.makecode.com` and `pxt.azureedge.net` blocked in `/etc/hosts`, then asserts the resulting shas match `forward/hexcache.manifest.json`.
  - Tier 1 is base + one package. Tier 2 is jacdac × {none, datalogger, audio-recording, audio-samples, bitmap} and pairs of those. Both ship in `/hexcache`.
  - Tier 3 is warmed into the bucket. About 75 images, roughly 60 MB.
  - Dependency keys must equal package names, or the shas differ.
- **Zero-Microsoft audit:** extend `tools/smoke-test.js` to log requests from every frame, worker and service worker through the Chrome DevTools Protocol. CSP runs report-only at this stage.

### M2: Reskin and content
- **Colour themes:** `forward/theme/color-themes/forward-light.json` and `forward-dark.json`, plus override CSS. Keep `pxt-high-contrast`; exclude `microbit-light`/`dark`.
- **Branding in `appTheme`:**
  - name, title and description
  - `organization*` fields and all six logos
  - `homeUrl` and `embedUrl` set to the Forward domain; `shareUrl` null
  - privacy, terms and feedback URLs; `docMenu`
- **Fonts and loader:** replace `theme/site/globals/site.variables` (self-hosted fonts; the loading screen currently shows the Microsoft logo). Upstream hasn't touched this file in 24 months.
- **Replaced files:**
  - `docfiles/indexhead.html` (remove the `msvalidate` tag and Microsoft Open Graph tags)
  - `footer.html`, `thin-footer.html`, `meta.html`, `offline-app-trademarks.html`
  - favicons, `webmanifest.json`, `docs/SUMMARY.md`, `robots.txt`
- **Block colours:** keep micro:bit's core colours so every existing micro:bit teaching resource still matches; they live in C++ annotations, which rule 2 protects. Forward extensions keep their own colours.
- **Home screen:**
  - a Forward hero and Forward galleries
  - a "micro:bit Basics" gallery generated from upstream's tutorials with the videos removed
  - tutorials from `makecode-tutorials`, referencing `github:Forward-Education/pxt-all-fwd-blocks#vX`, with GIFs converted to WebP
  - `check-tutorials.js` as a CI gate; the gallery markdown generator is reused from `build/27-forward-home.sh`

### M3: Jacdac simulator with Forward widgets
- **Build pipeline:**
  - `forward/jacdac-sim.lock.json` pins `Forward-Education/jacdac-docs@fwd/makecodesim`.
  - CI checks out that SHA with submodules (fixing an ordering bug in upstream's `buildsim.yml`), builds on Node 18 (`builddocsts`, `distdocs`), and prunes videos, originals, source maps and device pages: 142 MB → about 30 MB.
  - Turn off the `gatsby-plugin-offline` service worker, scan for external references, and run a Playwright smoke test.
  - Output lands at `/simx/jacdac/pxt-jacdac/-/` on the simulator origin; the targetconfig key stays `jacdac/pxt-jacdac`.
- **Forward widgets for simulated devices.** Today simulated devices report product id 0, so students see the generic widgets.
  - Tag simulated devices bound to Forward roles with their product id (`src/components/dashboard/DashboardFwdEduWidgets.tsx`).
  - Register a FIFA brain provider (3 servos, relay and DC voltage, `0x37a2f1fb`; its catalog entry merged 2026-09-28) so its roles group into one device.
- **Upstream PRs:**
  - Catalog `makeCodeRepo` → `forward-education/pxt-all-fwd-blocks` in `jacdac/jacdac`.
  - A suggestion-filter fix in `src/components/makecode/iframebridgeclient.ts`: skip packages already present, compare case-insensitively.
  - A `buildsim.yml` fix, and a request to bump pxt-microbit's pinned simulator build so customers on the stock editor get the widgets too.
- **WebUSB Jacdac bridge** (`editor/flash.ts`): unchanged; verify on hardware.
- **Deferred:** the Configure panel. It needs a pxt-jacdac release with the `extension` block and a hard-coded jacdac.github.io URL.

### M4: Public launch
- **Hosting:**
  - Production at `code.forwardedu.com`, or straight at `makecode.forwardedu.com` if Microsoft's permission arrives before launch, which skips the domain move below. Deploys need approval through a GitHub environment, and roll back through Pages.
  - Staging at `code-staging.forwardedu.com` behind Access.
  - The simulator on its own registrable domain, as Microsoft does with `userpxt.io`.
- **Security headers:**
  - enforced CSP (`connect-src 'self'`, `frame-src` limited to the simulator origin)
  - HSTS, and `Permissions-Policy` allowing `usb`
  - CSP reports go to `/api/csp-report` and are forwarded to Sentry server-side, so browsers contact no third party.
- **Upstream sync:**
  - `fwd-upstream-sync.yml` runs daily. On a new stable tag it merges on a branch, re-applies the workflow deletions, writes a report (changelog, pxt-core change, changed keys under the overlay, ledger files touched) and opens a PR with a GitHub App token. On conflicts it opens an issue instead.
  - `fwd-lookahead.yml` runs weekly against upstream master and alerts when `stable10.0` appears.
- **Ops:**
  - Uptime Kuma: the editor, a keyword check on `/api/clientconfig`, a canary hex, and a push monitor fed by a daily forced build.
  - Sentry alerts to Slack.
  - Runbooks. If `fwd-compile` is down, Tier 1-2 combinations still compile from the static cache.
  - Register the editor and `fwd-compile` in `docs/systems-architecture-overview.md` (owner, failure behaviour, alerting).
  - A one-page network allowlist for school IT.
  - Dependabot and secret scanning on the new repos.

**Domain move to `makecode.forwardedu.com`.** Needed only if launch happens before Microsoft's written permission; about 1-1.5 pw.
- **Why it needs care:** students' projects live in browser storage, which is tied to the domain. On a new domain their saved projects would look lost. They also re-pair their micro:bits once, because WebUSB permission is per domain too.
- **Steps:**
  1. Switch `forward/brand.json` (name and URLs) and add the custom domain in Pages. Update CSP, docs and the school IT allowlist, listing both domains during the transition.
  2. Keep `code.forwardedu.com` serving the editor with a banner and a one-click "Move my projects" step. A small transfer page on the old domain reads the projects and hands them to the new domain by `postMessage`; the new domain saves them through pxt's normal storage.
  3. After a transition period (e.g. one school term), redirect `code.forwardedu.com` to the new domain. Redirecting earlier would stop the transfer page from running.
- **Verify:** projects made on the old domain appear on the new one after the move, in Chrome and Edge on Windows and ChromeOS.
- **Offline bundles** follow the same naming.

### M5: Forward simulators (after launch)
- **Structure:** `pxt-fwd-simx` is one Vite multi-page repo (`ubit/`, `fifa/`).
  - It is registered in targetconfig under the lowercase keys `forward-education/pxt-fwd-ubit`, `…/pxt-ceibal-ubit` and `…/pxt-fwd-fifa`; each key is also the message channel name.
  - It is served at `/simx/forward-education/<repo>/-/`.
- **Protocol v1:** every message is `[version][type][payload]`, origin-checked, and the view resets on init.

  | Direction | Type | Meaning |
  |---|---|---|
  | extension → simulator | `0x01` | raw 50-byte UBit packet |
  | extension → simulator | `0x10` | FIFA motor state |
  | extension → simulator | `0x11` | NeoPixel buffer |
  | extension → simulator | `0x12` | init |
  | simulator → extension | `0x20` | encoder counts |
  | simulator → extension | `0x21` | button A/B |
- **Extension hooks** are simulator-only `//% shim=TD_NOOP` functions, the pattern pxt-jacdac's `routing.ts` uses. The micro:bit simulator exposes neither I2C writes nor pin state, so the hooks are required.
  - `pxt-ceibal-ubit/ubit.ts` and `pxt-fwd-ubit/ubit.ts` route `pins.i2cWriteBuffer(7, …)` through a single `ubitWrite()`.
  - `pxt-fwd-fifa` hooks `motors.ts`, `encoders.ts` and `lights.ts`.
- **UBit view:**
  - ports the `firmware-ubit` packet parser
  - plays the bundled `*_es.mp3` prompts and uses Web Speech, preferring es-UY, then es-419, then any es voice
  - captions plus an aria-live region
  - never displays WiFi passwords
- **FIFA view:** a top-down car based on MIT-licensed `microsoft/microbit-robot` botsim, self-hosted; it already has a Forward robot spec. Encoder feedback lets "drive N cm" blocks finish.
  - **The hybrid breakout changes `pxt-fwd-fifa`** (`hw-breakout-hybrid/docs/design-brief.md` §9). One extension auto-detects the board, and on the hybrid its motor and encoder blocks become Jacdac clients.
  - So the view must accept motor state from either path. On the Jacdac path, the Jacdac simulator's motor and rotary-encoder devices can drive it.
- **Custom Jacdac service simulators** in the jacdac-docs fork, sent upstream first:
  - CSV Logger `0x1f7acc01`: an in-memory table with CSV download.
  - TTS `0x1f7acc02`: reuses `speechsynthesisserver.ts`.
  - Webhook `0x1f7acc03`: logs only.
  - Prefer standard services (dotmatrix, speechsynthesis) where they fit.
- **Board simulator:** leave it untouched in v1. Revisit theming once upstream reaches pxt-core 13.2.3 or later, which adds simulator themes.

### M6: Offline from the same pipeline
- **Fork side:** each `fwd/…` release also carries an offline profile: same-origin simulator, the complete hex cache, the snapshot, and the Jacdac simulator.
- **sw-makecode-offline side:**
  - Step 10 becomes "download the release artifact and verify its checksum".
  - Retire steps 20 and 25-29.
  - Keep the installers, the Caddyfile (adding the `/api/gh` rewrites and JSON content types), the certificate tooling and step 40.
  - Finish the Windows test with the network cable pulled, which is still outstanding.

### M7: RP2040 boards spike, brain and hybrid (can start after M0)

**Goal (decided 2026-09-29, updated 2026-10-03).**
- **What:** Forward's RP2040 boards run the same micro:bit blocks and the existing Climate Action tutorials, as extra boards in `pxt-forward` (route A below).
- **Which boards:** the brain and the hybrid breakout's standalone mode, which share one runtime.
- **Decision:** the spike confirms this is feasible; route C (`pxt-forward-brain`) is the fallback.
- **Sources for the 2026-10-03 update:** the hw-breakoutv3 session's notes and the committed docs in `hw-breakoutv3` (`docs/makecode-strategy.md` §8, `docs/architecture.md` §3.2) and `hw-breakout-hybrid` (`docs/design-brief.md` §3, §9).

**Why RP2040** (checked 2026-09-29). MakeCode compiles programs to ARM Thumb machine code *in the browser*; its only other backend is a bytecode interpreter (`pxtcompiler/emitter/backthumb.ts`, `backvm.ts`). The chip therefore has to be ARM, have a CODAL port, and be flashable from the browser.

| Candidate | Core and memory | Runs MakeCode's compiled code | CODAL today | Flashing from the browser |
|---|---|---|---|---|
| **RP2040** | 2× Cortex-M0+ 133 MHz, 264 KB RAM, external flash | yes | `codal-rp2040` + `codal-pi-pico`, already shipping in Arcade (`codal2pico`) and the pxt-maker Jacdac Brain RP2040 | UF2 bootloader in ROM |
| Puya PY32F403 | Cortex-M4F 144 MHz, up to 384 KB flash, 64 KB RAM, USB FS | yes | only Lancaster's `codal-py32`: 4 commits (Sept 2025), GPIO only, for the 3 KB-RAM PY32F002B | would need its own bootloader |
| WCH CH32F20x | Cortex-M3 144 MHz, up to 480 KB flash / 128 KB RAM, USB | yes | none | would need its own bootloader |
| WCH CH32V20x/V30x | RISC-V 144 MHz | **no.** Needs pxt's bytecode VM, which Arcade uses on ESP32 and which has had little work since 2021, in a separate pxt-common-packages target | none | would need its own bootloader |

- **Puya/WCH ARM parts:** a full CODAL port plus a bootloader before any MakeCode work starts.
- **WCH RISC-V parts:** can't live in this fork at all.
- **Keep the existing split:** Puya and WCH stay the right choice for Jacdac *modules*, as `jacdac-py32` and `jacdac-ch32` already do.
- **RP2350:** its Cortex-M33 cores would run Thumb code, but no CODAL port exists yet (still true on 2026-09-29).
- **Worth noting:** `codal-rp2040` has only had submodule updates since 2022 (pin `ca54f854`, with `codal-core` at `b95d4c21`), so Forward should expect to maintain its own fork, as the July plan already assumed.

**How this relates to MakeCode Maker** (checked 2026-09-29).
- **pxt-maker already supports RP2040** through board packages of about five files. For example, `libs/jacdac-brain-rp2040`:
  - `pxt.json` with `"core": true` and `compileServiceVariant: "rp2040"`
  - `config.ts`, `device.d.ts`, `board.json` and `board.svg`, on top of `core---rp2040`
  - It also has a board picker (`chooseBoardOnNewProject`) and a generic board simulator (`dynamicBoardDefinition`).
- **But the block languages differ.** Maker's blocks come from pxt-common-packages; micro:bit's come from its own `libs/core`.
- **MakeCode Arcade** spans micro:bit V2 (`hw---n3`) and RP2040 (`hw---rp2040`) in one editor, but only by running Arcade's own API on both. Doing that here would drop micro:bit's blocks, lessons, extensions and V1 support, so it's ruled out.

| Route | What it means | What teachers see | Cost and risk |
|---|---|---|---|
| **A. micro:bit blocks on the brain** (Calliope model) | The brain and the hybrid's standalone mode become extra boards inside `pxt-forward`, with a micro:bit-compatible CODAL layer on RP2040 | One editor and one set of blocks; micro:bit lessons and TypeScript extensions run on the brain | The most firmware work, and tied to pxt-microbit's C++ internals. This is what the spike tests. |
| **B. Merge Maker's code into the micro:bit fork** | pxt-common-packages cores, Maker's generic simulator and UF2 flashing added to `pxt-forward` | One editor, but a different set of blocks for each board | Permanent divergence in `sim/` and `editor/` from two upstreams. **Not recommended:** the cost of a merge without a shared API. |
| **C. Sibling editors, sharing everything else** (the July plan) | A small pxt-maker-based target, `pxt-forward-brain`, holding only Forward's RP2040 boards, alongside `pxt-forward` | Two editors behind one Forward landing page; lessons don't carry over between boards | The least firmware risk, since pxt-maker's Jacdac Brain RP2040 is a near-template. Shares the brand, hosting, `fwd-compile`, Jacdac simulator, simulator extensions and Forward's Jacdac-based extensions (pxt-jacdac supports `microbit`, `maker` and `arcade`). Depends on pxt-maker, which is still labelled beta and only gets version bumps. |

**What route A looks like: one editor, several boards** (Calliope does this today with mini 1, 2 and 3; checked in pxt source 2026-09-29; boards updated 2026-10-03)
- **The boards:**
  - **micro:bit** (V1 and V2), exactly as today.
  - **Forward Brain** (`hw-breakoutv3`): everything a micro:bit lesson needs, plus battery blocks and onboard CSV logging. That includes micro:bit radio and Bluetooth, through an nRF52820 co-processor, one at a time as on the micro:bit.
  - **Forward hybrid breakout** (`hw-breakout-hybrid`) in standalone mode:
    - 5×5 matrix, buttons A/B and speaker, plus the FIFA motors, encoders, servos and relay
    - no accelerometer, compass, microphone or radio, so radio lessons use its micro:bit mode
- **For teachers and students:**
  - **New project:** a "Boards" picker offers the boards above.
  - **Switching:** the gear menu's "Change board", or the download button's hardware item, switches an existing project. Both use pxt's own board dialog (`webapp/src/container.tsx` `showBoardDialog`).
  - **Same blocks everywhere.** Each board hides or flags the blocks for hardware it lacks.
  - **Download:**
    - micro:bit → the same universal .hex as today, over WebUSB/DAPLink
    - Forward boards → .uf2, also like a micro:bit: the board always appears as a USB drive (by dropping the file on it), or over WebUSB from the editor. The board's own firmware takes the download; the RP2040's ROM bootloader is recovery-only, behind a BOOTSEL button (`hw-breakoutv3/docs/architecture.md` §3.4).
  - **Simulator** shows whichever board is chosen.
  - **Jacdac modules and Forward extensions** work on every board.
  - **Existing projects:** micro:bit projects, and .hex files from makecode.microbit.org, open as micro:bit exactly as now.
- **How it's built** (the Calliope pattern, mostly new files in the overlay):
  - **Shared core untouched.** pxt-microbit's `libs/core` isn't marked `"core": true`, just like Calliope's shared core, and stays as it is.
  - **New thin board packages:**
    - `libs/microbit`: `"core": true`, depends on `core`, keeps today's V1+V2 universal hex, and carries a `board.json` copied from the current `boardDefinition`.
    - `libs/fwdbrain`: `"core": true`, `compileServiceVariant: "fwdrp2040"`, `disablesVariants: ["mbdal","mbcodal"]`, depends on `core` plus brain-only blocks, with its own `board.json` and `board.svg`.
    - `libs/fwdhybrid`: the same `fwdrp2040` variant and its own `board.json`/`board.svg`, plus the hybrid's **device-personality gate**:
      - every UF2 also carries the board's Jacdac servers: motors (GP10-13), quadrature encoders (GP6-9), servos (GP14-16, ports 1-3), relay, buttons, battery, CSV Logger
      - at boot, the micro:bit-detect line (GP22, low when a micro:bit is present) chooses servers only (micro:bit mode) or servers plus the student's program (standalone)
      - any edge on that line resets the board. After a micro:bit is removed, the board waits for button A before running the student's program; the flag lives in watchdog scratch registers SCRATCH0-3.
      - the authoritative pin table is `hw-breakout-hybrid/docs/architecture.md` §2.3 (matrix on GP5)
      - the status RGB and the "micro:bit"/"BOARD" mode LEDs are discrete LEDs, not pixels; the mode LEDs sit on the board's private XL9555, so the board view draws them from Jacdac or board state rather than pin writes
      - USB matches the brain: an always-on drive plus WebUSB through staging, and the drive refuses third-party UF2s, so only BOOTSEL recovery can remove the device personality
  - **pxtarget overlay:**
    - `variants.fwdrp2040`: UF2 built by `fwd-compile` against `codal-forward-brain`. It uses Forward's own UF2 family ID: the board accepts only Forward-family blocks addressed inside its program region.
      - **Flash layout** (provisional, on 16 MB W25Q128JV flash): a 64 KB Forward boot stage, then the program region (~4 MB from 0x010000), the staging region (4 MB at 0x400000) and the CSV partition (8 MB at 0x800000).
      - So the program links at **0x10010000**, after the boot stage, and the flash limits cover only the program region.
    - `chooseBoardOnNewProject` and `dynamicBoardDefinition`
    - one `hardwareOptions` card per board in targetconfig
  - **Radio firmware inside the UF2.** The brain's RP2040 programs the nRF52820 over SWD (GP18/GP19) at boot, so every brain UF2 embeds the radio firmware. Pin that firmware inside the `codal-forward-brain` tag. A firmware change then means a new tag and new image fingerprints, so `fwd-compile` never serves a stale cached image.
  - **The only edits to upstream code** are rule 2's planned exception: board views in `sim/`, and in `editor/` a WebUSB filter for the board's own USB ID (a product ID under Raspberry Pi's vendor ID 0x2E8A) plus a UF2/HF2 flashing path.
    - The firmware answers HF2's bootloader commands by writing to staging, so pxt's existing HF2 flasher may work unchanged. If so, the `editor/` edit shrinks to the filter and a switch on the board variant.
  - **Not enabled** until a Forward board actually ships.
- **Spike must check:**
  - After switching boards, the build variant can stick for the rest of the session (`pxtlib/package.ts` ~663). A fix would be one small upstream pxt PR.
  - micro:bit-only projects must still produce the universal hex after the board packages are added.
  - How pxt hides blocks for hardware a board lacks (board package `features`). The test case: the hybrid's missing motion sensing, sound sensing and radio.

- **Deliverables:**
  1. **A gap matrix** of the 98 `uBit.*` members and 221 native shims that pxt-microbit's C++ uses, against `codal-rp2040` and `codal-core`. It covers:
     - **The brain's hardware behind micro:bit APIs** (`hw-breakoutv3/docs/makecode-strategy.md` §8):
       - display → 5×5 NeoPixel matrix on PIO1 (RGB behind the single-colour API; brightness capped at about 20%)
       - accelerometer and compass → LIS2DH12 + MMC5603NJ on I2C0
       - sound → PAM8302 speaker on GP8; sound level → MSM261DHT006 PDM microphone
       - buttons A/B → GP2/GP3
       - P0-P2 → croc pads GP26-28 (ADC); other pin numbers → the 6-GPIO header GP9-14, or absent
       - datalogger → the 8 MB FAT partition (CSV Logger `0x1f7acc01`), shown read-only in `DATA/` on the board's USB drive
     - **Radio:** a `MicroBitRadio`-compatible proxy over UART0 (GP16/GP17) to the nRF52820, so `libs/radio` compiles unchanged.
       - The link protocol mirrors CODAL's radio calls: set group, band and power; send `{protocol, ≤32 B}`; receive `{protocol, rssi, data}`. MakeCode's datagram format is built on the RP2040 (`hw-breakoutv3/docs/radio-protocol.md` v0.1).
       - Band is clamped to 2-80 while the board relies on the radio module's certification.
     - **Bluetooth:** the nRF52820 is a generic GATT bridge, and the micro:bit Bluetooth services run on the RP2040.
       - `codal-forward-brain` provides a `MicroBitBLEManager`-compatible class and the micro:bit service classes over that bridge, so `libs/bluetooth` compiles unchanged. Any unavoidable edit counts against the 200-line budget.
       - Bluetooth partial flashing and DFU are out of scope for v1, which programs over USB only.
       - This is likely the largest new item against the GO threshold.
     - **The known `codal-rp2040` gaps** (source-verified July 2026):
       - PDM microphone (the stock library panics)
       - FAT plus runtime USB mass storage
       - MMC5603 driver
       - WS2812 over PIO
       - ADC (`getAnalogValue` is a stub, issue #3)
       - hardware UART serial
  2. A thin CODAL layer in `Forward-Education/codal-forward-brain` (forked 2026-10-04 from `lancaster-university/codal-pi-pico`), built on Forward's `codal-rp2040` fork (also created 2026-10-04). It exposes the same `MicroBit` class API, so pxt-microbit's `libs/core` C++ compiles for the brain unchanged, as Calliope's CODAL fork does for its boards.
     - **Jacdac pin:** it aliases `uBit.io.P12` to GP4, the Jacdac data pin, so pxt-jacdac's micro:bit code path works unchanged. codal-rp2040's `ZSingleWireSerial` owns PIO0 SM0/SM1 and IRQ0, so the matrix goes on PIO1.
     - **The proof:** scroll text, buttons and tone on a Pico with a 5×5 NeoPixel grid, built as a UF2 through a `fwdrp2040` variant.
  3. One STM32G030 module enumerating over Jacdac, plus a PY32F030 module once one runs on silicon.
  4. **Editor tests:**
     - switching variants within a session
     - a .uf2 dropped on the board's USB drive
     - a download over WebUSB
     - the HF2 hypothesis: whether pxt's existing HF2 flasher works unchanged when the firmware answers `BININFO`, `WRITE_FLASH_PAGE` and `RESET_INTO_APP` by writing to staging
     - blocks outside the program region are rejected
     - the ROM bootloader is never needed for a normal download
  5. A 2-3 day baseline of route C: a Forward board package cloned from `libs/jacdac-brain-rp2040`, running on the same Pico with one Jacdac module. The decision then compares two measured routes. Run it together with the hybrid board's bench spike, which starts from the same pxt-maker image.
  6. A go/no-go memo.
- **GO only if all of these hold:**
  - **micro:bit builds are unaffected.**
    - Preferred: the shared `libs/**` C++ is untouched, so the images for 5 reference projects keep identical fingerprints.
    - Acceptable: no more than 200 lines behind `#if` guards for the new variant, plus a one-time rebuild and bench test of every micro:bit image, V1 included.
  - no pxt fork (at most one small upstream PR)
  - the remaining estimate to reach the micro:bit block API on the RP2040 board is no more than 6-8 person-months, against the July plan's 8-15
  - estimate Bluetooth separately: if it alone breaks the threshold, the memo can recommend GO with radio first and Bluetooth later
- **Otherwise:** take route C, reusing this plan's hosting, compile service, simulators and Jacdac pipeline.
- **Readiness rules from now on:**
  - no Forward C++ in `libs/core`
  - no C++ in Forward extensions that only works under `MICROBIT_CODAL`
  - simulator protocols describe behaviour, not micro:bit pin numbers
  - no DAPLink-specific Forward UI
  - keep `corepkg` and `multiVariants` unchanged
  - don't enable `chooseBoardOnNewProject` until a second board exists
  - write new Forward tutorials with micro:bit core blocks and Forward's Jacdac-based blocks, and avoid micro:bit-only pins or hardware unless the lesson needs them, so they carry over to Forward's boards unchanged

### Later (unscheduled)
- **Forward GitHub proxy** (about 3-4 pw): a GitHub App token, caching and an allowlist. Before compiling arbitrary third-party C++, move the worker to a hardened droplet sandbox (`--network none --read-only --cap-drop ALL`, optionally gVisor).
- **Other:** the Configure panel; Forward share links (pxt's scripts API) after a privacy review; an analytics decision; localized docs.

## Reuse, don't rewrite
- **From `sw-makecode-offline`:**
  - `build/resolve-deps.js` (dependency closure, pins)
  - `build/check-manifests.js` (manifest invariants)
  - `tools/smoke-test.js`, `tools/scan-external-refs.sh`, `tools/check-tutorials.js`, `tools/check-updates.js`
  - the gallery generator in `build/27-forward-home.sh`
  - the tracker inventory in `docs/PHONE-HOME.md`
  - a local pxt-core 13.0.1 copy to grep, in `work/pxt-microbit/node_modules/pxt-core/built/`
- **From pxt itself:**
  - docfile override order
  - `theme/color-themes` merging
  - `*prj` templates and `staticpkgdirs` for the hex cache
  - `PXT_ACCESS_TOKEN` to point the command line at `fwd-compile`
  - bundled-name resolution
- **From Jacdac and Microsoft sample repos:**
  - `jacdac-docs`: `DashboardFwdEduWidgets.tsx`, `speechsynthesisserver.ts`, `addServiceProviderDefinition`
  - `microsoft/pxt-simx-sample` (simulator extension template)
  - `microsoft/microbit-robot` (MIT; the FIFA view)

## Ongoing cost
- **Upstream releases:** about half a day per stable tag (around 20 a year).
- **Annual major version:** 2-4 pw each June-July, starting from upstream master in May. Until Forward's port ships, projects from Microsoft's newer editor won't open in Forward's.
- **Jacdac:** merge upstream jacdac-docs monthly and rebuild the simulator.
- **fwd-compile:** about $70-90 a month.
- **Total:** roughly 0.2-0.3 FTE.

## Verification
1. **CI on every PR:**
   - the pristine-diff check
   - overlay invariants: id is `microbit`; sharing off; no sign-in providers; live translations off; no Microsoft URLs outside an allowlist; no YouTube galleries
   - manifest checks; tutorials resolve
   - the hex-cache sha set matches the manifest, with Microsoft hosts blocked
   - the ported smoke test (create → home → reopen → Extensions → compile)
2. **Zero-Microsoft audit** (fresh profile with `--host-resolver-rules`, Chrome DevTools Protocol across all frames and workers). Pass means zero off-host requests and zero CSP violations. Run nightly against production. Flows:
   - add all-fwd-blocks and download
   - compile an uncached combination through the service
   - run the Jacdac simulator
   - switch language to Spanish and French
   - open a tutorial
   - search and paste a URL (expect a graceful failure)
   - import a .hex made on makecode.microbit.org
3. **Round trip:** Forward-made .hex and .mkcd files open and compile on makecode.microbit.org, and the reverse.
4. **fwd-compile:**
   - a suite of malicious requests is rejected
   - repeat builds are byte-identical
   - with the service stopped, Tier 1-2 still compile
   - a forced failure alerts Slack
5. **Hardware bench, every release:**
   - WebUSB flashing of V1 and V2, both quick and full
   - Jacdac modules stream with Forward widgets
   - FIFA drive test, and UBit speech once M5 ships
6. **Visual:** screenshot baselines in light, dark and high contrast, plus the trademark checklist.
7. **Upstream sync:** the next stable tag merges through the automated PR, builds green and reaches staging with no manual edits.

## Risks and open decisions
- **Toolchain drift from Microsoft's cloud builds.** Jacdac's single-wire timing is sensitive to compiler output, so pin the toolchain and run hardware regression tests on every bump.
- **V1 toolchain decay** (yotta, Python 2). Pre-build every V1 combination and mirror the image and the V1 repos.
- **Jacdac depends on one maintainer, and jacdac-docs is migrating to Astro.** The Forward fork keeps the build contract simple: "a static folder at `/simx/jacdac/pxt-jacdac/-/`".
- **Post-build patches depend on pxt-core internals.** Each must fail the build if it doesn't apply, and have smoke-test coverage.
- **School networks.** A new domain won't be on school allowlists, and Chromebook WebUSB policies vary.
- **Legal:** the product name, docs licences, translation terms and attribution wording.
- **Microsoft's answer on the MakeCode name.** If permission is slow or refused, the editor simply stays on `code.forwardedu.com` under a non-MakeCode name; nothing else in the plan depends on it.
- **Open decisions:**
  - the product name (with or without "MakeCode", depending on Microsoft's answer)
  - the simulator domain
  - when to open up third-party extensions (needs the proxy and the sandbox)
  - **the brain's Bluetooth device name.** Some micro:bit apps only list devices named "BBC micro:bit …". A Forward name is trademark-safe but may hide the board from those apps (`hw-breakoutv3/docs/radio-protocol.md` §8).

## First steps after approval
1. Delete `/tmp/claude_probe_ignore`, a stray web page a research sub-agent saved by mistake.
2. Save today's decisions as a project memory.
3. Brian creates the fork, since Claude doesn't create remote repos. Claude supplies the exact `gh repo fork microsoft/pxt-microbit --org Forward-Education --fork-name pxt-forward` command.
4. Claude then scaffolds, uncommitted, for Brian to review and commit:
   - `forward/upstream.json`
   - the overlay skeletons, `apply-overlay.js` and `check-pristine.js`
   - `fwd-build.yml`
   - this plan as `forward/docs/PLAN.md`
5. Claude runs the first local overlay build of v9.0.12 to start M0.
6. Claude drafts the permission request to makecode@microsoft.com (the MakeCode name, `makecode.forwardedu.com` and attribution wording) for Brian to review and send.
