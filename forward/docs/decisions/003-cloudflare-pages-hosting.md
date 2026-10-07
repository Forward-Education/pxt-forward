# 003. Host on Cloudflare Pages: one project per environment, real 404s, /static rewrite

Date: 2026-10-04. Status: accepted.

## Context

The plan hosts the static editor on Cloudflare Pages, which Forward already uses for DNS. Staging
sits behind Cloudflare Access, and production is approval-gated. Before wiring CI to Pages, the
build was run through Cloudflare's local Pages emulator (`wrangler pages dev` 4.147.0) to check
routing and headers.

## Decision

1. **One Pages project per environment.**
   - `pxt-forward-staging` now, `pxt-forward` for production in M4.
   - Each environment gets its own domain, Access policy, deploy history and rollback. Nothing hinges on branch aliases.
2. **A real `404.html` in every deploy.**
   - Without it, Pages treats the site as a single-page app and answers unknown paths with `index.html` and a 200.
   - pxt fetches `/hexcache/<sha>.hex` before anything else and would read that HTML as a native image.
   - The editor itself needs no fallback: its own routes use the URL hash, and docs are real files under `/docs/`.
3. **Rewrite `/static/*` to `/docs/static/*` (status 200, `_redirects`).**
   - At v9.0.12, 273 tutorial and docs files link to `/static/...`, which Microsoft's servers map to the docs folder.
   - Without the rewrite, tutorial images such as Flashing Heart's `sim.gif` show as broken, and the `microbit-light` theme's `logo_texture.png` returns 404.
4. **Baseline headers** on every deploy: `X-Content-Type-Options: nosniff` and `Referrer-Policy: strict-origin-when-cross-origin`. Staging also gets `X-Robots-Tag: noindex`.
   - CSP stays for M1, report-only first.
5. **Deploy with a pinned Wrangler** (`npx wrangler@4.147.0`, metrics off).
   - The API token lives in the `staging` GitHub environment, so only the deploy job can read it.
   - The job is skipped until `CF_PAGES_PROJECT_STAGING` is set.

All of this is in `forward/scripts/prepare-pages.sh` and `.github/workflows/fwd-build.yml`;
`forward/docs/deploy.md` has the setup steps.

## Evidence (emulator, 2026-10-04)

| Request | Result |
|---|---|
| `/` | 200, with `noindex`, `nosniff` and the referrer policy |
| `/docs/reference/basic` | 200; `/docs/reference/basic.html` redirects there (308) |
| `/hexcache/<real sha>.hex` | 200, `application/octet-stream`, 895,090 bytes |
| `/hexcache/<missing sha>.hex` | 404 |
| `/static/mb/projects/flashing-heart/sim.gif` | 200, `image/gif` (via the rewrite) |
| `/static/does-not-exist.png`, `/some/random/path` | 404 |

In the browser:
- the home screen and galleries load;
- the Flashing Heart tutorial opens, and its image now renders;
- the simulator runs.

## Follow-ups

- **YouTube probe (M1).** Tutorial cards inherited from upstream offer "Play Video Lesson". Their video fields make the editor fetch `https://www.youtube.com/favicon.ico` to test whether videos can play, which is the one request that left the origin in this test.
  - Strip the video fields from inherited cards, as `sw-makecode-offline/build/26-strip-phone-home.sh --videos` does.
  - Or replace those galleries in M2.
- **Access.** Access must also cover the `pages.dev` names, or staging is public there.
- **Production (M4).** Same `prepare-pages.sh` with `production`, plus enforced CSP and the separate simulator origin.
