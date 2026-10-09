# Decision records

One file per decision, named `NNN-short-title.md`, written when a spike or a review settles
something. Superseded records stay, marked as superseded.

## Template

```markdown
# NNN. Title

Date: YYYY-MM-DD. Status: proposed | accepted | superseded by NNN.

## Context
## Decision
## Evidence
## Consequences
```

## Open in M0 (from ../PLAN.md)

1. **Extension delivery.** A static GitHub-proxy snapshot at `/api/gh/**`, or bundling. **Settled:** [004](004-extension-delivery-static-snapshot.md), the static snapshot.
2. **Build images.** `fwd-codal` (V2) and `fwd-yotta` (V1): offline, reproducible builds.
3. **Simulator on a separate origin.** A post-build rewrite of `simUrl`.
4. **Translations.** A `--locs-src` snapshot, with live translations off.
5. **Docfile overrides.** Trackers removed through `forward/overlay/files/docfiles/` rather than by patching the built output. **Settled:** [001](001-tracker-removal-through-docfile-overrides.md).

Also recorded:
- [002](002-first-overlay-build.md): results and follow-ups from the first overlay build.
- [003](003-cloudflare-pages-hosting.md): Cloudflare Pages hosting, with one project per environment, real 404s and the `/static` rewrite.
- [005](005-prebuilt-jacdac-native-images.md): pre-built native images so Download works for projects using Jacdac.
- [006](006-self-hosted-jacdac-simulator.md): the Jacdac simulator served from our origin, ahead of the Forward-widget build.
- [007](007-home-galleries.md): home galleries from learn.forwardedu.com, built from a committed snapshot, with GitHub tutorials served at `/ghtutorial/`.
