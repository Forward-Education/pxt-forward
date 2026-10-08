#!/usr/bin/env bash
# Builds the Jacdac simulator from jacdac-docs' makecodesim branch (which carries Forward's device
# widgets) at a pinned commit, the way jacdac/pxt-jacdac's buildsim.yml does, with two changes:
# submodules are checked out at the pinned commit's own pins (upstream checks them out on main
# first), and the output is packed as a tarball instead of pushed to gh-pages.
#
#   bash forward/build/build-jacdac-sim.sh <jacdac-docs-sha> <out.tgz>
#
# Needs Node 14 and yarn 1 on x86_64, as upstream (CI: fwd-jacdac-sim.yml). jacdac-docs' Gatsby 4
# dependencies only have prebuilt native binaries for that. On Apple silicon, neither an arm64
# container (no prebuilt @parcel/watcher) nor an emulated x86 one (Gatsby segfaults) works, so build in CI.
set -euo pipefail

SHA="${1:?usage: build-jacdac-sim.sh <jacdac-docs-sha> <out.tgz>}"
OUT="$(cd "$(dirname "${2:?usage: build-jacdac-sim.sh <jacdac-docs-sha> <out.tgz>}")" && pwd)/$(basename "$2")"
WORK="${JDSIM_WORK:-$(mktemp -d)}"

echo "build-jacdac-sim: jacdac-docs $SHA in $WORK"
if [ ! -d "$WORK/jacdac-docs/.git" ]; then
    git clone --quiet --filter=blob:none https://github.com/jacdac/jacdac-docs "$WORK/jacdac-docs"
fi
cd "$WORK/jacdac-docs"
git fetch --quiet origin "$SHA" || true
git checkout --quiet --force "$SHA"
git submodule update --init --recursive --quiet

yarn install --frozen-lockfile --network-timeout 600000
yarn builddocsts
GATSBY_GITHUB_REPOSITORY="jacdac/jacdac-docs" GATSBY_GITHUB_SHA="$SHA" \
    NODE_OPTIONS="--max-old-space-size=6144" yarn distdocs

[ -f public/index.html ] || { echo "build-jacdac-sim: no public/index.html" >&2; exit 1; }
grep -q '/simx/jacdac/pxt-jacdac/-/' public/index.html || { echo "build-jacdac-sim: build is not prefixed for /simx/jacdac/pxt-jacdac/-/" >&2; exit 1; }

tar -czf "$OUT" -C public .
echo "build-jacdac-sim: wrote $OUT ($(du -h "$OUT" | cut -f1))"
