# 004. Deliver extensions as a static GitHub-proxy snapshot

Date: 2026-10-07. Status: accepted for staging; open items below.

## Context

M0 spike 1 had to choose between two ways of getting Forward's extensions into the editor without
makecode.com:
- **Bundling**, as sw-makecode-offline does. Extensions added in Forward's editor get `"*"` dependencies, which break on makecode.microbit.org.
- **A static copy** of the GitHub-proxy responses on our own origin. Projects keep their normal `github:...#tag` dependencies.

## Decision

Use the static snapshot.
- **Generator:** `forward/build/gh-snapshot.js` runs after `staticpkg`.
  - It starts from the pinned roots in `forward/extensions.json`.
  - It follows every `github:` and `file:` dependency.
  - It writes the responses under `api/`.
- **Rewrites:** Pages maps the editor's `/api/gh/...` and `/api/ghsearch/...` requests onto those files (`api/redirects.txt`, merged into `_redirects` by `prepare-pages.sh`).

What the editor requests, and what is served (shapes checked against makecode.com's proxy, 2026-10-07):

| Request | Served from |
|---|---|
| `gh/<owner>/<repo>` | `meta.json`: `{kind, id, name, description, version, defaultBranch}` |
| `gh/<owner>/<repo>/refs` | `refs.json`: `{refs: {"refs/tags/vX": sha, HEAD: sha}}` |
| `gh/<owner>/<repo>/<tag>[/<sub>]/text` | `text.json`: `pxt.json` plus its `files` and `testFiles` |
| `ghsearch/microbit/microbit?q=` | `ghsearch.json`: the root extensions, for any query |

## Evidence (Pages emulator, 2026-10-07)

- **Snapshot size:** 8 repos and 53 packages; 2 minutes from a cold cache, seconds when cached.
  - It includes both `pxt-jacdac` v1.9.41 and v1.9.42, because Forward's released extensions pin different versions.
- **In the editor:** new project, then Extensions > Robotics > fwd-fifa. The FIFA blocks (Sensors, Motors, Lights) and Jacdac's Modules appeared.
  - That took 20 `/api/` requests, all answered from the snapshot.
  - Nothing left the origin.
- **Letter case:** the editor asks for lowercase slugs (`forward-education`). The generator writes every spelling it sees. macOS merges them on disk, but Linux CI keeps both.

## Consequences and open items

1. **Downloads need native images.** Any project with Jacdac links its C++, so a Download needs a core+jacdac image, which `staticpkg` doesn't pre-build. Until the pre-built matrix and `fwd-compile` exist (plan M1), downloads of such projects fail on staging.
2. **Card pictures.** `gh/<repo>/icon` isn't served, so extension cards show a placeholder picture. Add the repo's icon (or a Forward default) to the snapshot.
3. **Search.** Search returns the whole curated list for any query. That's fine while it has four entries.
4. **Pasted URLs.** Pasting a non-snapshot GitHub URL makes pxt fall back to api.github.com. CSP (M1) will block that, so it fails cleanly.
5. **Configure panel.** The Jacdac Configure panel needs pxt-jacdac as an approved GitHub dependency, which this approach keeps possible (plan M3).
6. **Jacdac simulator.** The simulator frame (`/simx/jacdac/pxt-jacdac/-/`) shows the 404 page until M3 hosts it.
