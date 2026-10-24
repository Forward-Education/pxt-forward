# Device picker: plan and status

Status: built behind `FWD_BOARDS=1`, 2026-10-24. It extends plan M7 (route A); see `PLAN.md`. The
default build is unchanged: without the flag it's exactly the micro:bit editor.

## How it works

- **Device first.** New Project asks "Choose your device" (micro:bit, MicroRGB, Raspberry Pi Pico), then pxt's own name dialog. The project is created on that device.
- **The device is fixed for the life of the project.** There's no switching inside a project (see "Ideas for later" for "Duplicate as...").
- **Above the simulator:** "Device: <name>", read-only, plus "Downloads aren't available for this device yet" while a device has no native images.
- **My Projects:** each project card has a small label in its bottom-left corner with its device (grey "micro:bit", green for Forward's boards).
- **Opening a project for a different device** than the page is set up for reloads the page once, straight back into the project. This works around a pxt bug (below).
- **Each device's simulator and blocks:** the Pico has its own picture and hides the blocks for hardware it lacks. MicroRGB uses the micro:bit simulator view and all the blocks for now.
- **micro:bit only:** when micro:bit is the only device, the picker never shows and nothing changes. That's every build without `FWD_BOARDS=1`, which includes production today.

Decided 2026-10-24 (Brian): device first, fixed per project. This replaced the dropdown that switched a project's device in place. That dropdown worked (history below), but changing hardware under existing code was the hardest part to make safe.

## Devices

| Device | Package | Variant | Simulator | Blocks | Downloads |
|---|---|---|---|---|---|
| micro:bit (V1, V2) | none (on purpose) | universal `.hex` (`mbdal` + `mbcodal`) | micro:bit | all | yes, as today |
| MicroRGB (`hw-microbit-clone`, nRF52833, working name) | `board-microrgb` | `fwdmicrorgb` | micro:bit view (`fwdSimView`): same edge connector and on-board parts | all | once its own CODAL target exists |
| Raspberry Pi Pico | `board-pico` | `fwdpico` | Pico picture (pxt-maker, MIT) | missing hardware hidden (`toolboxFilter`) | after M7 |
| Forward Brain (`hw-breakoutv3`, RP2040) and the hybrid breakout's standalone mode | later | an RP2040 variant like `fwdpico` | later | later | after M7 |

- **Why micro:bit has no board package:** a project depending on a `board-microbit` package wouldn't open on makecode.microbit.org. So "no board package" means micro:bit.
- **MicroRGB** (confirmed with the hw-microbit-clone session, 2026-10-24): Forward's micro:bit-compatible board on the nRF52833, the micro:bit V2's chip, with no interface chip. REV_A is in layout; no hardware or firmware yet.
  - **Same as a micro:bit V2 for students:** the edge connector pinout, buttons A and B, touch logo, microphone, speaker, radio (works with real micro:bits), Bluetooth, temperature and the 2 x AAA battery socket. So it uses the micro:bit simulator view and all the blocks.
  - **Different underneath:** a 5x5 RGB NeoPixel display, a separate light sensor, a different accelerometer (SC7A20H) and compass (MMC5603NJ), and different chip pins behind the edge connector. It therefore needs its own CODAL target forked from `codal-microbit-v2`, which the hw-microbit-clone session estimates at 4 to 7 person-months (`docs/firmware-plan.md` there).
  - **Downloads:** a UF2 drive on the chip's native USB, plus WebUSB/HF2 from the runtime. There's no DAPLink, so the editor's micro:bit WebUSB flasher doesn't apply. The Jacdac bridge must go through HF2, because pxt-microbit's reads RAM over the debug port, which MicroRGB doesn't expose over USB.
  - **Open there:** USB VID/PID, drive name, Bluetooth name and the product name, which must not contain "micro:bit".
  - Its `board.svg` is a placeholder for the picker and the project cards.

## Tutorials on every device

**Yes, tutorials work on every device.** A tutorial chooses its device the same way a project does.
- **The device comes from its dependencies.** A tutorial's markdown lists its dependencies (its `package` section). Starting it creates a new project with them, without going through New Project or the device picker.
  - **micro:bit tutorials** list no board package. Every existing micro:bit tutorial keeps working unchanged.
  - **Pico or MicroRGB tutorials** add `board-pico` or `board-microrgb`.
- **Tutorials in the Forward extensions** (as planned, 2026-10-08) work the same way. They also list their extension, for example `github:forward-education/pxt-all-fwd-blocks#vX`, which the editor serves from its GitHub snapshot.
- **Write each tutorial for the blocks its device has.** A tutorial's own block filters take precedence over a board's hidden blocks. So a Pico tutorial can only show a display block if its author puts it there, and the step wouldn't work on a Pico.
- **Most Forward content travels well.** Content that only uses shared blocks (pins, loops, logic, variables, Jacdac modules through the Forward extensions) runs on every device. Such a tutorial can be published once per device, or picked per device later (see "Ideas for later").
- **Limit:** a tutorial that lists `board-pico` or `board-microrgb` only works in Forward's editor, because makecode.microbit.org doesn't have those packages. micro:bit tutorials stay portable.

## Ideas for later

1. **"Duplicate as..." on a project card:** copies the code into a new project on another device and leaves the original untouched. It's safer than switching in place. A notice lists blocks the new device can't run.
2. **Device-neutral tutorials:** a tutorial marked as device-neutral (for example a metadata line such as `### @fwdAnyDevice`, to be designed) asks "Choose your device" when started, then adds that board package. Starting a tutorial doesn't go through New Project, so this needs its own hook.
3. **A browser smoke test in CI.** It would create a project on each device, check the label and the simulator, and open a project for another device. Today the build only checks that the picker code is in `editor.js`. This fits the smoke-test port planned for M1.
4. **Pico pins in the simulator,** once `codal-forward-brain` decides which Pico GPIO each micro:bit pin name (P0 to P20) maps to.
5. **MicroRGB artwork** for the simulator, replacing the micro:bit view, and **colour blocks** for its RGB display.
6. **Review the hidden-block lists** with someone who teaches with the micro:bit blocks.
7. **Edge and Chromebook testing.**
8. **An upstream pxt PR** for the stuck compile variant (`pxtlib/package.ts`, below), which would remove the reload.

## What pxt gives us

Checked in pxt v13.0.9 and pxt-microbit v9.0.12, 2026-10-24.

- **Board packages:** a bundled package with `"core": true`, a `board.json`, an optional `board.svg` and a compile variant (`compileServiceVariant`). With `simulator.dynamicBoardDefinition`, a project's board package sets the simulator's board definition, the board name, the drive name and the compile variant. Calliope and MakeCode Maker work this way.
- **Creating a project with its board:** `projectView.newProject(options)` takes `dependencies` (`pxt.editor.ProjectCreationOptions`).
- **The New Project card** calls `newUserCreatedProject`, which asks for the name (`nameProjectFirst`), then calls `newProject`.
- **A project's board:** pxt records it on the project header when the project saves (`header.board`, `webapp/src/workspace.ts`; typed in `localtypings/projectheader.d.ts`). The My Projects card then shows that board's picture.
- **Hidden blocks:** `toolboxFilter` in a package's `pxt.json` (`localtypings/pxtpackage.d.ts`), merged by the editor from every dependency.
- **pxt's own board choice doesn't fit.** `appTheme.chooseBoardOnNewProject` opens a board dialog after the project has loaded, and that dialog lists only board packages, so it can't offer micro:bit.
- **Known pxt bug:** pxt resets the compile variant on project load only when the target has no `multiVariants`, and pxt-microbit has them (`pxtlib/package.ts:663`; `multiVariants` and `alwaysMultiVariant` in `pxtarget.json`). After a Pico or MicroRGB project, a micro:bit project would still build a `.uf2` until the page reloads. Hence the one reload.

## Where the code lives

Everything is in `forward/overlay/boards/` and only applies with `FWD_BOARDS=1`:

| File | What it does |
|---|---|
| `pxtarget.patch.json` | `dynamicBoardDefinition`, plus the `fwdpico` and `fwdmicrorgb` variants (placeholders until their CODAL targets build) |
| `libs/board-pico/`, `libs/board-microrgb/` | Board packages: `pxt.json` (variant, hidden blocks), `board.json` (simulator definition plus Forward's `fwdShortName`, `fwdSummary`, `fwdDownloads`, `fwdSimView`), `board.svg` |
| `files/editor/fwd-boards.ts` | Device picker, device label, project card labels, reload. It runs next to upstream's `editor/extension.tsx` without changing it. |
| `files/sim/visuals/boardview.ts` | Replaces upstream's: a board with its own picture gets pxtsim's generic board view, unless `fwdSimView` asks for the micro:bit view. Ledger: `replacedWithBoards` in `forward/divergence.json`. |

- **Build:** `forward/build/apply-overlay.js` copies these in. `forward/build/inject-boards.js` bundles the board packages after `staticpkg` (staticpkg would try to build every board package's native image, which doesn't exist yet) and fails the build if `editor.js` lacks the picker.
- **pxt internals relied on:** `projectView.newUserCreatedProject` and `newProject` (typed), `header.board` (typed), the card markup on My Projects (`.ui.card.file.board` and its `.fileimage`) and the simulator panel (`#boardview` in `.simPanel`). Re-check them on every pxt-core upgrade. If the markup changes, the labels disappear; projects and the picker keep working.

## Same blocks on every board

- **micro:bit blocks everywhere.** Teachers and lessons move between devices, and "Duplicate as..." (later) relies on it. So every device runs the micro:bit blocks: MicroRGB through its own CODAL target forked from `codal-microbit-v2`, and Pico boards through Forward's RP2040 CODAL layer (`codal-forward-brain`). The Pico does not use Maker's different Pico blocks.
- **The Pico is the development board.** M7's proof of concept already targets a Pico with a 5x5 NeoPixel grid. So the Pico can stand in for Forward's RP2040 boards, and the picker, simulator and compile pipeline can be built and tested before they ship.
- **Hidden blocks:** each board package hides the blocks for hardware it lacks, with pxt's `toolboxFilter`. Hiding happens per device, so a project never mixes devices.

## Compiling and downloading

| Device | Output | Download | Notes |
|---|---|---|---|
| micro:bit | universal `.hex` | WebUSB (DAPLink) or drag to MICROBIT | Unchanged |
| Pico | `.uf2`, ROM family `0xe48bff56`, linked at the start of flash | Drag to the RPI-RP2 drive (hold BOOTSEL when plugging in) | No WebUSB in v1; the ROM speaks PICOBOOT, not HF2 |
| MicroRGB | `.uf2`, nRF52833 family `0x621e937a`, flash layout to match its UF2 bootloader | Drag to its USB drive, or WebUSB through HF2 | No DAPLink. USB VID/PID and drive name not decided yet. |
| Forward Brain (RP2040) | `.uf2`, Forward family (open decision 23 in hw-breakoutv3), linked at `0x10010000` | Drag to the FORWARD drive, or WebUSB through HF2 to staging | USB ID `0x2E8A:0x115C`. Whether pxt's HF2 flasher works unchanged is M7 deliverable 4. |

- **Native images:** each RP2040 board needs its own. Forward has no compile service yet, so the base combinations (plain, plus Jacdac) must be pre-built like today's micro:bit ones. That means:
  - for Pico boards, a `fwd-rp2040` build image with `codal-forward-brain`
  - for MicroRGB, its CODAL target in the same `fwd-codal` image as micro:bit V2 (same chip and toolchain)
  - new entries in `native-combos.json`
  - extending `prebuild-natives.js` to UF2

  Check early that pxt's hex cache serves UF2 images the same way.
- **Download wiring:** micro:bit's WebUSB flasher must only be used for micro:bit projects. pxt re-runs its download setup when the variant changes, so this can follow the project's device.

## Phases

| # | Phase | Status |
|---|---|---|
| 1 | Board packages and variants behind `FWD_BOARDS=1` | Done 2026-10-24 |
| 2 | Choosing the device: the dropdown (done, then replaced), now the device picker at New Project | Done 2026-10-24 (Chrome) |
| 3 | Simulator views and hidden blocks: Pico done; MicroRGB uses the micro:bit view until its artwork | Done 2026-10-24 for the Pico |
| 4 | **Pico compiles for real:** build image, pre-built native images, drag-and-drop download | Waits for the M7 CODAL layer ("scroll text, buttons, tone"); about 1.5 to 2 pw beyond the firmware |
| 5 | **MicroRGB:** native images from its CODAL target, UF2 and HF2 WebUSB download, colour blocks, its own artwork | Waits for MicroRGB's CODAL target (hw-microbit-clone, 4 to 7 person-months) and REV_A boards; about 1.5 pw beyond the firmware |
| 6 | **Forward Brain (RP2040):** its own board package and variant | Waits for M7 GO |

**Shipping:** nothing reaches students until a second device really downloads. Until then the boards stay behind `FWD_BOARDS=1`.

## Decisions

1. **Every device runs micro:bit blocks:** MicroRGB through its own CODAL target, Pico boards through `codal-forward-brain`, not Maker's Pico blocks (2026-10-24).
2. **Device first, fixed per project,** chosen at New Project (2026-10-24). This replaced switching in place.
3. **Pico downloads by drag and drop only** in v1. WebUSB to the Pico ROM would need a new flasher.
4. **The picker is hidden while micro:bit is the only device.**
5. **The Forward micro:bit clone is called MicroRGB** for now (2026-10-24). It's the nRF52833 board from hw-microbit-clone, not an RP2040 board. Pico boards are part of the strategy too.

## Risks

- **Route C.** If M7 says no-go, Forward's boards move to a separate pxt-maker editor, and the picker would only link between editors.
- **Upgrades.** The picker and the labels rely on pxt internals (listed above), and the simulator change is a real divergence. Each needs a test that fails loudly on an upstream upgrade.
- **micro:bit safety.** Every change must keep micro:bit image fingerprints identical. Every build so far has checked this (`/hexcache` byte-identical).

## Device picker results (2026-10-24)

**Checked in Chrome,** in the Pages emulator with `FWD_BOARDS=1`:

| Check | Result |
|---|---|
| New Project | "Choose your device" with micro:bit, MicroRGB and Raspberry Pi Pico, each with its picture and summary |
| Choose MicroRGB, name it | Project created with `board-microrgb`; micro:bit simulator view, all blocks, `.uf2`; "Device: MicroRGB" and the downloads note above the simulator. (Tested with an RP2040 variant before MicroRGB was confirmed as nRF52833; the variant is now `fwdmicrorgb`.) |
| My Projects | MicroRGB, Pico and micro:bit labels on the right cards |
| Cancel (button, Escape, or a click outside) | No project created, no name dialog |
| Keyboard | Enter on New Project opens the picker with focus on the first device; Escape closes it and focus returns to New Project |
| New micro:bit project while the page is set up for MicroRGB | The project has no board package; one reload, straight into it; `.hex` |
| micro:bit native images | Byte-identical to the build without the flag |

**Known quirks:**
- **The project carousel moves one card after a mouse click on New Project.** That's pxt's own carousel: on pointer release it moves to the card under the pointer (`webapp/src/carousel.tsx`, `dragEnd`). It only shows if you cancel the picker, because you're still on the home screen. Opening the picker from the keyboard doesn't move it.
- **The reload runs on a short timer,** so it also happens in a background tab. A first version used animation frames, which browsers pause while a page isn't shown.

## History

### Phase 1: board packages and variants (2026-10-24)

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

### Phase 2: the dropdown, since replaced by the device picker (2026-10-24)

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

### Phase 3: Pico simulator view, hidden blocks, project labels (2026-10-24)

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

