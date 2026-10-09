# 007. Home galleries from learn.forwardedu.com, built from a committed snapshot

Date: 2026-10-08. Status: accepted for staging (plan M2, "Home screen"). Categories signed off by Brian on 2026-10-08.

## Context

The home page had no galleries: the micro:bit sample galleries were removed on 2026-10-07. Forward's coding projects and tutorials live on learn.forwardedu.com (WordPress with LifterLMS), in three forms:
- **Posts:** 97 public posts in the Projects (65) and Tutorials (32) categories. 47 of them link to 81 MakeCode share projects on makecode.microbit.org.
- **Courses:** 62 LifterLMS courses. Their 1,307 lessons need an enrolment, so the public API returns none of them.
- **Extension tutorials:** the in-editor tutorials that the lessons open are already in Forward's extensions, with French copies under `_locales/fr`:
  - pxt-climate-action: 31 lessons, each with a Use and a Modify tutorial
  - pxt-coding-for-good: 23 lessons
  - pxt-smart-solar: 3 tutorials
  - pxt-robot-tour: 1 tutorial

Neither form works on our origin as it stands:
- **Share links** load from makecode.com.
- **GitHub tutorials:** the editor asks makecode.com's `ghtutorial` endpoint for them, which the extension snapshot (004) didn't serve. Their pictures load from `raw.githubusercontent.com`, from the `main` branch.

The site is in English. Spanish exists only as slide decks attached to 11 posts; French exists in the extension tutorials.

## Decision

**Rows:** eight, in the order Brian chose:
1. Climate Action Kit
2. Coding for Good Kit
3. Smart Hydroponics
4. CHARGE for micro:bit
5. Smart Sensors
6. Smart Solar
7. Smart Soldering
8. Robot Tour

Both the Use and the Modify tutorial of each lesson get a card, named "Use: ..." and "Modify: ..." so that a truncated card name still tells them apart.

**Two scripts, and the build reads only what's committed:**
- `forward/build/learn-fetch.js` (by hand, needs the network) reads `forward/content/learn/catalog.json` and refreshes the snapshot in `forward/content/learn/`:
  - the posts, through the public WordPress REST API (read-only, no credentials)
  - each share project's files, from makecode.com
  - each extension tutorial at a pinned tag
  - every picture, resized and re-encoded into `forward/overlay/files/docs/static/forward/learn/`: cards 480 px wide and tutorial pictures 720 px, as WebP (GIFs become animated WebP); formulas stay SVG
- `forward/build/learn-gallery.js` (offline, deterministic) generates:
  - one gallery page per row (`docs/forward/home/<row>.md`)
  - one tutorial per share project (`docs/forward/projects/<slug>.md`)
  - the `galleries` entry in `forward/overlay/targetconfig.json`
  
  `build.sh` runs it with `--check` first, so stale output fails the build. After `gh-snapshot.js` it runs with `--site` to write the GitHub-tutorial responses.

**Share links become finished-project tutorials hosted in this repo** (Brian, 2026-10-08; they may move into the extensions later).
- Each share project becomes a one-step tutorial with the post's picture and summary, plus a link back to the post. The share's `main.ts` is the tutorial's `template`. This is the format pxt-coding-for-good already uses for its finished-code files.
- **Re-pinned:** each dependency moves to the current release of its extension (`extensions` in the catalog), so the project opens on makecode.microbit.org too and downloads with a pre-built image. Two retired extensions are replaced:
  - `climate-action-kits/pxt-fwd-edu` becomes pxt-climate-action
  - `pxt-fwd-all` becomes pxt-all-fwd-blocks
- **Renamed blocks:** projects that used a retired extension get its block renames (`LEGACY_RENAMES`). The list extends sw-makecode-offline's list with pxt-climate-action's MIGRATION.md and the older names that only had a `fwd` prefix.

**GitHub tutorials are served the way makecode.com serves them.**
- `--site` writes `api/ghtutorial/<owner>/<repo>/<path>.json`, in the same shape as makecode.com's response (`{path, markdown: {filename, repo: {repo, files, sha, version}}, dependencies}`; checked 2026-10-08).
  - `files` holds only the tutorial and its translations, so a response is about 20 KB rather than the whole repo.
  - Pictures point at our copies, and YouTube lines are removed.
- **Request path:** a static build sends this request from the site root (`webConfig.relprefix` is "/"), not under `/api/`. So `redirects.txt` gets `/ghtutorial/*  /api/ghtutorial/:splat.json  200`.
- **Source and pin:** the markdown comes from the extension's latest release, which has the fixes. The card opens it at the version its own `package` block pins.
  - The editor adds the tutorial's own repo, at the card's tag, as a dependency of the new project. Using the pinned version keeps that to one version of the extension.
  - Climate Action Kit example: the markdown is from v2.0.3, and the card opens `#v2.0.2`. At the v2.0.2 tag the tutorials still pin v1.1.0 and lack the migration fixes.
- **`extensions.json`** gains `tutorialDependencies`: the versions the galleries need, served by `gh-snapshot.js` but left out of extension search. `--check` fails if one is missing.

**Re-pinned tutorials (`tutorialRepins`):**
- **Which:** 24 Coding for Good tutorials pin v1.0.6 or v1.0.7, and 3 Smart Solar tutorials pin v1.2.0. Those releases pull pxt-jacdac 1.9.38 or 1.9.40, which has no pre-built image.
- **Change:** our copy pins Coding for Good v1.1.4 and Smart Solar v2.0.3, which use pxt-jacdac 1.9.41.
- **Check:** each tutorial's final program was compiled with `mkc` under both pins.
  - 26 compile under both.
  - 24 fail under both with identical errors: their last code block is a partial step that uses names from earlier steps.
  - None compiles under the old pin and fails under the new one.

**Left out** (`forward/content/learn/inventory.csv` lists every item and the reason):
- MicroChat (9): no MakeCode code; it uses app.microchat.co.
- micro:bit Foundation lessons (11): the code and slides are the Foundation's, on microbit.org.
- MicroCode and Arcade (7): other editors.
- CreateAI (5): needs microbit.org's CreateAI tool, and its `machine-learning` extension has native code that isn't pre-built.
- Design-only, video and unboxing posts: no code.

**Hidden** (`hidden` in the catalog, kept in the snapshot):
- **Driving lessons:** electric car, wildfire, autonomous delivery, tree seeder and mobile irrigation, 10 tutorials. Their driving blocks were rewritten to `drive(left, right, 1000 ms)` without hardware calibration, and three of them lost their calibration bias (pxt-climate-action MIGRATION.md).
- **One duplicate CHARGE card:** the Hot-Cold Game post links the Rock-Paper-Scissors program.

## Evidence (2026-10-08)

- **Snapshot:** 45 posts, 75 share projects, 111 tutorials (with French) and 452 pictures, 10.4 MB in all. The source pictures in pxt-climate-action alone are 316 MB. The text snapshot is 3.2 MB.
- **Compile (`mkc build -j`):**
  - All 80 converted projects compile against the current releases.
  - The first run had 8 failures, all from retired-extension names; the rename list fixes them.
- **Build:** `build.sh` passes:
  - check-pristine and the gallery check
  - check-invariants: 0 errors, and the same 4 findings as before
  - gh-snapshot: 14 repos and 124 packages
  - 111 tutorial responses
- **Home page (Pages emulator):** all eight rows render, with 64, 46, 19, 12, 17, 9, 11 and 2 cards, grade or level ribbons, and no broken pictures.
- **Tutorials open:**
  - A Climate Action GitHub tutorial (Coral Reef, Use) opened from `/ghtutorial/...`, with its pictures from `/static/forward/learn/`. The new project depends on pxt-climate-action v2.0.2 alone, whose modules use pxt-jacdac 1.9.41.
  - A re-pinned Coding for Good tutorial (Mood Light, Use; it pinned v1.0.6) opened. The new project depends on pxt-coding-for-good v1.1.4 alone, whose modules (v1.1.11) use pxt-jacdac 1.9.41.
  - Converted projects (LCD Screen, Kick Strength, Robot Tour) opened with their blocks.
- **Download** (the deploy step replaced so that no file was saved, and pairing skipped):
  - LCD Screen used the two pre-built images (`/hexcache/949fbd03...` and `ac2cabee...`).
  - Kick Strength (plain micro:bit with datalogger) used `/hexcache/8dca226e...`.
  - Robot Tour asked for `/api/compile/extension` and failed, as expected for pxt-jacdac 1.9.38.
- **Network:** every request went to the editor's own origin.

## Consequences and open items

1. **Robot Tour doesn't download.** Both cards depend on pxt-robot-tour, whose latest release (v1.0.4) still uses pxt-fwd-base v1.0.12 and pxt-jacdac 1.9.38. It needs a release on pxt-jacdac 1.9.41. Its driving code uses the pre-v1.1 API, so moving it isn't a simple re-pin. pxt-robot-tour also has no licence file.
2. **Hardware:** nothing here has been run on a micro:bit V2 with the kits yet. The converted projects compile, but block renames can still change behaviour; for example, legacy event handlers moved to `onReadingChangedBy`. These belong on the hardware checklist.
3. **Fixes to make in the extensions** (needs Brian's OK):
   - re-pin the 27 tutorials listed under `tutorialRepins`
   - fix pxt-smart-solar's picture links to its old repo name, `pxt-solar` (broken on makecode.microbit.org too)
   - release pxt-robot-tour on pxt-jacdac 1.9.41
   
   Each of these can then be removed from the catalog.
4. **Course lessons:** the public API doesn't show which tutorial each lesson opens. Read-only WordPress access would let us check that coverage and give every card a grade. The grades on Climate Action cards come from the file names.
5. **Licences:** Forward's extension repos are MIT. Posts and pictures are Forward's own. Before production, confirm that the AISES partner projects (Wampum Belt, Monitoring the Ha:shañ) may be redistributed.
6. **Animated WebPs** already in pxt-climate-action are copied as they are, up to 1.8 MB each. Nothing installed here can decode them to resize them.
7. **Browser cache:** the editor keeps gallery pages in its IndexedDB markdown cache (`__pxt_translations_microbit`). A browser that has already opened the home page can keep showing an older gallery after a deploy that doesn't change the target version; in the emulator that took deleting the cache. Check this on staging before relying on gallery updates reaching returning users.
8. **Refresh:** edit `catalog.json`, run `learn-fetch.js`, then `learn-gallery.js`, and commit. A post edited on WordPress shows up only after a refresh, which is deliberate.
