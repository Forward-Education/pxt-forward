# Device switcher: plan

Status: draft for Brian's review, 2026-10-24. It extends plan M7 (route A); see `PLAN.md`.

## What we want

- **A dropdown above the simulator** in the code editor, listing the devices:
  - micro:bit (V1 and V2, as today)
  - Raspberry Pi Pico
  - Forward Brain (`hw-breakoutv3`), later the hybrid breakout's standalone mode
- **One choice swaps three things:** the simulator board, the compiler output (micro:bit `.hex` or RP2040 `.uf2`) and the download path.
- **The choice belongs to the project.** It's saved with the project, so reopening a Pico project opens it as a Pico.

## What pxt gives us today

Checked in pxt v13.0.9 and pxt-microbit v9.0.12, 2026-10-24.

- **Board switching exists.** pxt calls this "core board packages":
  - each board is a bundled package marked `"core": true`, with its own `board.json`, `board.svg` and compile variant
  - switching rewrites the project's `pxt.json` dependency and reloads the project in place
  - the simulator board and the compile variant follow
  - Calliope uses this for mini 1, 2 and 3, and MakeCode Maker uses it for its boards, including the Pico
- **But pxt only offers it in a modal dialog**, opened from the download button's "Choose Hardware" item or when starting a new project. No MakeCode editor has a picker above the simulator.
- **A dropdown is possible without forking pxt.** The target's editor extension gets a live handle to the editor (`projectView`, typed in `localtypings/pxteditor.d.ts`). It can:
  - mount a small control above the simulator
  - perform the same core-package swap the dialog does
- **Known pxt bug to work around:** pxt only resets the compile variant on project load when the target has no `multiVariants`, and pxt-microbit has them (`pxtlib/package.ts:663`; `pxtarget.json`: `multiVariants` and `alwaysMultiVariant`).
  - So after switching to an RP2040 board and back, micro:bit builds stay on the RP2040 variant until the page reloads.
  - **Our fix:** reload the page on every switch (simple and robust). Then send a small upstream PR to pxt.

## Design

### Where the code lives

All of these are Forward files in the overlay. Points 3 and 4 are the first deliberate edits to upstream code, which plan rule 2 already allows for M7. Each one is recorded in `forward/divergence.json`.

1. **Board packages** in `forward/overlay/files/libs/`:
   - `board-microbit`: `"core": true`, depends on upstream `core`, keeps today's universal hex (V1 and V2), and carries today's board definition.
   - `board-pico`: `"core": true`, variant `fwdpico`.
   - `board-fwdbrain`: `"core": true`, variant `fwdrp2040`.

   Upstream `libs/core` stays untouched, so micro:bit images keep their fingerprints.
2. **Variants** in `pxtarget.patch.json`:
   - `fwdpico` and `fwdrp2040`, each with `useUF2`, its UF2 family and its flash layout, plus `webUSB` set per board.
   - Neither goes into `multiVariants`, so the universal hex stays micro:bit only.
   - `dynamicBoardDefinition: true`.
3. **The dropdown** as a component in the target's editor extension.
   - **Behaviour:**
     - it shows the project's current board and lists the core board packages
     - picking one swaps the core package, saves, and reloads the page
     - if the new board lacks hardware the project uses (radio on the Pico, say), it shows a warning first
   - **Integration:** it wraps upstream's `editor/extension.tsx` rather than replacing it.
   - **Main upgrade risk:** where it attaches in the page (`#boardview` inside `.simPanel`). Pin that with a smoke test that fails the build if the dropdown is missing.
4. **Simulator:** pxt-microbit's simulator always draws a micro:bit (`sim/visuals/boardview.ts`).
   - **Generic path:** add one that draws `board.json` and `board.svg` for other boards (pxtsim's `GenericBoardSvg`, as pxt-maker does).
   - **The brain:** its 5x5 matrix and A/B buttons match micro:bit state, so it can reuse the micro:bit's display and button logic with its own artwork.
   - **The Pico:** a board picture, pins and the onboard LED. Blocks for hardware it lacks are hidden or flagged.

### Same blocks on every board

- **micro:bit blocks everywhere.** The dropdown only makes sense if a project keeps working when the board changes. So the Pico runs micro:bit blocks through Forward's CODAL layer (`codal-forward-brain`), just like the brain. It does not use Maker's different Pico blocks.
- **The Pico is the development board.** M7's proof of concept already targets a Pico with a 5x5 NeoPixel grid. So the Pico can stand in while brain hardware is scarce, and the switcher, simulator and compile pipeline can be built and tested before the brain ships.
- **Hidden blocks:** board packages declare which hardware they have, and the editor hides blocks for the rest. The test case is the Pico's missing display, motion sensing, sound sensing and radio. How pxt does this is an M7 spike question.

### Compiling and downloading

| Device | Output | Download | Notes |
|---|---|---|---|
| micro:bit | universal `.hex` | WebUSB (DAPLink) or drag to MICROBIT | Unchanged |
| Pico | `.uf2`, ROM family `0xe48bff56`, linked at the start of flash | Drag to the RPI-RP2 drive (hold BOOTSEL when plugging in) | No WebUSB in v1; the ROM speaks PICOBOOT, not HF2 |
| Forward Brain | `.uf2`, Forward family (open decision 23 in hw-breakoutv3), linked at `0x10010000` | Drag to the FORWARD drive, or WebUSB through HF2 to staging | USB ID `0x2E8A:0x115C`. Whether pxt's HF2 flasher works unchanged is M7 deliverable 4. |

- **Native images:** each RP2040 board needs its own. Forward has no compile service yet, so the base combinations (plain, plus Jacdac) must be pre-built like today's micro:bit ones. That means:
  - a `fwd-rp2040` build image with `codal-forward-brain`
  - new entries in `native-combos.json`
  - extending `prebuild-natives.js` to UF2

  Check early that pxt's hex cache serves UF2 images the same way.
- **Download wiring:** the editor extension uses micro:bit's WebUSB flasher only for the micro:bit board. pxt re-runs its download setup when the variant changes, so this switch works.

## Phases

| # | Phase | Depends on | Estimate | Done when |
|---|---|---|---|---|
| 1 | **Switching plumbing**: board packages and variants behind `FWD_BOARDS=1` | nothing | about 1.5 pw | Switching between micro:bit and Pico changes the board name, the variant and the file type; micro:bit images keep identical fingerprints; switching back gives a universal hex. **Done 2026-10-24**, see below. |
| 2 | **The dropdown** above the simulator, with the hardware warning and a smoke test | 1 | about 1 pw | Works in Chrome and Edge; survives reload; projects reopen on their board. **Done 2026-10-24** (Chrome), see below. |
| 3 | **Simulator board views**: the generic path, Pico artwork, brain artwork reusing micro:bit state | 1 | 1.5 to 2 pw | Each board draws, and blocks for missing hardware are flagged. **Pico done 2026-10-24**, see below; brain artwork waits for the board's design. |
| 4 | **Pico compiles for real**: build image, pre-built natives, drag-and-drop download | M7 CODAL layer reaching "scroll text, buttons, tone" | 1.5 to 2 pw, beyond the firmware itself | A micro:bit blocks project runs on a Pico from the editor |
| 5 | **Forward Brain**: its variant, HF2 WebUSB download, battery and logging blocks | M7 GO and brain hardware | about 1.5 pw, beyond the firmware itself | The checklist passes on a brain |

- **Phases 1 to 3** are editor work and could start now.
- **Phases 4 and 5** wait on the firmware. The CODAL layer is the bulk of the cost and is M7's question.
- **Shipping:** nothing reaches students until a second board really works. Until then the dropdown stays behind a flag, or lists only the micro:bit.

## Phase 1 results (2026-10-24)

**What was built:**
- **The Pico board package:** `forward/overlay/boards/libs/board-pico`, with `board.json`, the `fwdpico` variant, and no code.
- **The flag:** `forward/overlay/boards/pxtarget.patch.json` applies only with `FWD_BOARDS=1`.
  - `apply-overlay.js` copies the board packages in.
  - `forward/build/inject-boards.js` bundles them after `staticpkg`.
- **Without the flag** the effective `pxtarget.json` is byte-identical to before, and no board package is built.

**Checked with `FWD_BOARDS=1`,** in a local build in the Pages emulator:

| Check | Result |
|---|---|
| micro:bit native images (`/hexcache`) | Same 24 files, byte-identical to the build without the flag |
| New micro:bit project, Download | Universal `.hex` (1.3 MB), both images (V1 `949fbd03`, V2 `354b97da`) served from `/hexcache` |
| Download menu, "Choose Hardware", pick the Pico | The project gains one dependency, `"board-pico": "*"`. The editor shows board "Raspberry Pi Pico", drive RPI-RP2, variant `fwdpico`, output `binary.uf2`, UF2 family `0xe48bff56`, no WebUSB. |
| Pico download | Fails as expected: `/hexcache/<sha>.hex` 404, then `/api/compile/extension` (no service). All requests stay on our origin. **The student sees no error message.** |
| Remove the Pico dependency, no reload | Still `fwdpico` and `.uf2`: the stuck-variant bug, confirmed |
| Then reload | micro:bit, no variant, universal `.hex` again |

**What phase 1 taught us:**
- **No placeholder Pico image is possible.** Any Pico image is built from `codal-forward-brain`, so Pico downloads wait for the M7 firmware layer. The earlier draft of this plan promised a placeholder; that was wrong.
- **staticpkg can't build board packages yet.** With `dynamicBoardDefinition`, staticpkg test-compiles every `"core": true` package as a project, which needs that board's native image. Board packages therefore carry no code and are bundled after the build. Once Forward builds RP2040 images, they can move back into `bundleddirs`.
- **pxt's board dialog can't switch back to micro:bit.** It lists only board packages, and micro:bit deliberately has none: a dependency on a `board-microbit` package would stop projects opening on makecode.microbit.org. Phase 2's dropdown handles "micro:bit" by removing the board package, then reloading.
- **Phase 2 also needs a clear message** when a board has no native image yet ("Pico downloads aren't available yet").
- **Hidden blocks:** the Pico still shows every micro:bit category (Radio, LED, ...). Hiding blocks for missing hardware is phase 3.

## Phase 2 results (2026-10-24)

**What was built:** `forward/overlay/boards/files/editor/fwd-boards.ts`. With `FWD_BOARDS=1`, `apply-overlay.js` copies it into `editor/`.
- **How it's loaded:** pxt bundles every file in the target's editor folder, so it runs next to upstream's `extension.tsx` without changing it. It wraps `pxt.editor.initExtensionsAsync`.
- **The dropdown:** "Device", above `#boardview` in the simulator panel. It lists micro:bit plus every bundled `"core": true` package that has a `board.json`.
- **Switching:**
  - A confirmation names what the board lacks (`fwdLacks` in its `board.json`) and whether downloads work yet (`fwdDownloads`).
  - It then rewrites the project's `pxt.json` dependencies through `projectView.updateFileAsync`, saves, and reloads.
  - **micro:bit** means no board package at all.
- **Under the dropdown:** "Downloads aren't available for this device yet" when `fwdDownloads` is false.
- **Opening a project from the home screen** whose board differs from the page's also reloads the page once. The reload is limited to once per project in 10 seconds.
- **Narrow screens:** hidden where pxt floats a small simulator over the code (`#root.miniSim`).
- **Build check:** `inject-boards.js` fails the build if `editor.js` lacks the switcher.
- **pxt internals used:** it reads `pxt.json` through `window.E.pkg`, which pxt exposes for console use (`webapp/src/app.tsx`). It mounts next to `#boardview` inside `.simPanel`. Both are pxt internals to re-check on every pxt-core upgrade. If `window.E` disappears, the dropdown stays hidden (it can't read the project) rather than breaking the editor.

**Checked in Chrome,** in the Pages emulator with `FWD_BOARDS=1`:

| Check | Result |
|---|---|
| Dropdown on a micro:bit project | Shows "micro:bit" above the simulator |
| Pick the Pico, then Cancel | Nothing changes; the dropdown shows micro:bit again |
| Pick the Pico, then Switch | Reloads; board Raspberry Pi Pico, variant `fwdpico`, `.uf2`, with the note under the dropdown |
| Pick micro:bit, then Switch | Reloads; no variant, `.hex` |
| Pico project, then a new micro:bit project from the home screen | One automatic reload (logged); micro:bit, `.hex` |
| Phone width (375 px) | Dropdown hidden with the floating simulator |

**Still to do:**
- **Edge:** not tested yet.
- **A browser smoke test** that fails CI when the dropdown is missing. Today the build only checks that the code is in `editor.js`. This fits the smoke-test port planned for M1.
- **Phone users can't switch boards.** That's acceptable while only the Pico exists.

## Phase 3 results (2026-10-24, Pico)

**What was built:**
- **Simulator:** `forward/overlay/boards/files/sim/visuals/boardview.ts` replaces upstream's. A board whose `board.json` has its own picture (`visual` is an object) is drawn with pxtsim's `GenericBoardSvg`, as pxt-maker does. micro:bit keeps `MicrobitBoardSvg`.
  - This is the fork's first deliberate edit to upstream code.
  - It's in the ledger under `replacedWithBoards` in `forward/divergence.json`, and `forward/overlay/boards/files/**` is only applied with `FWD_BOARDS=1`.
  - The simulator is JavaScript, so native images are unaffected: still byte-identical.
- **Pico picture:** `board.svg` and its layout come from pxt-maker's `libs/rpi-pico` (MIT, Microsoft), credited in the board's README.
- **Hidden blocks:** pxt's own `toolboxFilter` in the board package's `pxt.json`. It's a supported package option (`localtypings/pxtpackage.d.ts`), merged by the editor from every dependency.
  - **Hidden on the Pico:** the LED, Radio, Images, Game and Bluetooth categories, plus the display, button, gesture, motion, compass, light, sound, touch and built-in speaker blocks.
  - **Still shown:** forever, on start, pause, temperature, pins, music on pins, serial, Loops, Logic, Variables, Math and Extensions.
  - **Tutorials:** a tutorial's own filters take precedence.
- **My Projects labels:** each project card gets a small corner label ("micro:bit" grey, Forward boards green, `fwdShortName` in `board.json`).
  - pxt records a project's board package on its header when the project saves, and shows that board's picture on the card. The label reads the board from that picture, so it needs no extra storage.
  - A project with no board package is a micro:bit project.
- **Reload fix:** reloading for a project opened from the home screen now switches the address to `#editor` first. Before, the student landed back on the home screen.

**Checked in Chrome,** in the Pages emulator with `FWD_BOARDS=1`:

| Check | Result |
|---|---|
| Pico project | Pico picture in the simulator; toolbox as listed above; Variables and Extensions present |
| Program with pins, temperature, serial and a tone, on the Pico | Runs. Console: "Unable to find coord for pin: P0", because the Pico picture has no pins for the micro:bit pin names yet. |
| micro:bit project | micro:bit picture and the full toolbox |
| My Projects | "micro:bit" and "Pico" labels on the right cards; a new Pico project is labelled straight away |
| Pico project, then a micro:bit project from the home screen | One reload, straight into the micro:bit project |

**Still open:**
- **Pico pins in the simulator.** Drawing the pins and mapping the micro:bit pin names (P0 to P20) onto the Pico's GPIOs is a firmware-layer decision (`codal-forward-brain`), so it waits for M7. Until then pin blocks run without showing on the picture.
- **Forward Brain artwork,** once the board's design settles.
- **Hidden-block list:** worth a review by someone who teaches with the micro:bit blocks.
- **Edge:** not tested yet.

## Decisions for Brian

1. **Pico runs micro:bit blocks** through Forward's CODAL layer, not Maker's Pico blocks. Recommended, because it's what makes the dropdown worth having.
2. **Reload the page on every switch.** Recommended: simple, and it avoids the stuck-variant bug.
3. **Pico downloads by drag and drop only** in v1. Recommended: WebUSB to the Pico ROM would need a new flasher.
4. **When to start:** phases 1 to 3 now, while hardware testing continues. Or after M7's go/no-go, which avoids building a switcher that route C would replace. Recommended: phase 1 now, because it's small and also answers spike questions (fingerprints, variant switching). Then decide on 2 and 3.

## Risks

- **Route C.** If M7 says no-go, Forward's boards move to a separate pxt-maker editor, and the switcher would only switch editors (a link to the other editor). Phase 1 is still useful evidence for that decision.
- **Upgrades.** The dropdown attaches to pxt's page layout, and the simulator change is a real divergence. Both need tests that fail loudly on an upstream upgrade.
- **micro:bit safety.** Every phase must keep micro:bit image fingerprints identical. Phase 1's done-when criterion checks this.
