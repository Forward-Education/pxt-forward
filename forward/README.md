# forward/

Everything Forward Education adds to `microsoft/pxt-microbit` lives in this folder, plus
`.github/`. Upstream files stay byte-for-byte identical to the pinned upstream tag, so merging a
new upstream release never conflicts with Forward's work.

The plan behind this layout is [docs/PLAN.md](docs/PLAN.md).

## Rules (checked in CI)

1. **Upstream files stay unchanged.** Nothing outside `forward/` and `.github/` may differ from
   the upstream tag in [upstream.json](upstream.json). `node forward/scripts/check-pristine.js`
   enforces this.
2. **Hands off upstream code.**
   - Never edit `libs/**`, `sim/**`, `editor/**` or `package*.json`.
   - Every C/C++ byte feeds the native image fingerprint, so editing shared C++ invalidates
     every micro:bit image.
3. **Target id.** It stays `microbit`.
4. **Nothing of Microsoft's at runtime.** Build time may use GitHub, npm and committed snapshots.

## Layout

| Path | What it is |
|---|---|
| `upstream.json` | the upstream line, and the tag this branch is built from |
| `brand.json` | product name, domain and URLs; the only file to change for a rename or a domain move |
| `overlay/pxtarget.patch.json` | JSON merge patch (RFC 7386) applied to upstream `pxtarget.json` |
| `overlay/targetconfig.json` | Forward's own `targetconfig.json`. `$inherit` lists upstream values to copy, as JSON pointers (RFC 6901) |
| `overlay/files/**` | files copied over the build copy. Any that replace an upstream file need an entry in `divergence.json` |
| `overlay/exclude.txt` | upstream paths left out of the build (licence or Microsoft-only content) |
| `divergence.json` | ledger of replaced and overridden files, with the upstream SHA-256 each was written against |
| `build/apply-overlay.js` | writes the effective target into a separate build copy (default `forward/.build/`) |
| `extensions.json` | extensions served from the editor's origin, pinned by tag |
| `build/gh-snapshot.js` | writes the static GitHub-proxy snapshot of those extensions under `/api/gh` |
| `native-combos.json` | dependency sets whose native images are pre-built into `/hexcache` |
| `build/prebuild-natives.js` | pre-builds those images so Download works without a compile service |
| `build/check-invariants.js` | checks the effective target: id, cloud features off, hosts still referenced |
| `scripts/check-pristine.js` | enforces rule 1 |
| `scripts/build.sh` | pristine check, overlay, npm install, invariants, then `pxt staticpkg` |
| `scripts/init-fork.sh` | one-time local setup after cloning the fork |
| `scripts/prepare-pages.sh` | adds Cloudflare Pages control files (`_headers`, `_redirects`, `404.html`) before a deploy |
| `docs/` | the plan, the deploy runbook (`deploy.md`) and the decision records |

## Building locally

Run once after cloning:

```bash
bash forward/scripts/init-fork.sh
```

Then build:

```bash
bash forward/scripts/build.sh
```

- **Where it lands:** `forward/.build/built/packaged/`.
- **Serving it:** `staticpkg` emits absolute paths, so serve it from the root of an origin, for example:

  ```bash
  python3 -m http.server -d forward/.build/built/packaged 3232
  ```
- **Strict mode:** `FWD_STRICT=1` makes invariant findings fail the build. CI turns this on in M1.

### Native images (temporary)

`staticpkg` still compiles the pre-built native images with Microsoft's cloud compile service.
- **When:** at build time only. The built editor never calls the service.
- **Until:** the Forward build images and `fwd-compile` exist (plan M0 and M1).
