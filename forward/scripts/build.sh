#!/usr/bin/env bash
# Builds the Forward editor in a separate build copy:
#   pristine check, overlay, npm install, invariants, then pxt staticpkg.
#
#   bash forward/scripts/build.sh [extra staticpkg flags]
#
#   FWD_BUILD_DIR   build copy location (default: forward/.build)
#   FWD_STRICT=1    invariant findings fail the build, not just errors
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
OUT="${FWD_BUILD_DIR:-$ROOT/forward/.build}"
STRICT=()
if [ "${FWD_STRICT:-0}" = "1" ]; then STRICT=(--strict); fi

node "$ROOT/forward/scripts/check-pristine.js"
node "$ROOT/forward/build/apply-overlay.js" --out "$OUT"

# pxt-microbit pins pxt-core and pxt-common-packages to exact versions but ships no lockfile.
(cd "$OUT" && npm install --no-audit --no-fund --loglevel=error)

node "$ROOT/forward/build/check-invariants.js" --build "$OUT" ${STRICT[@]+"${STRICT[@]}"}

# Always the target's own pxt-core, never a globally installed pxt.
(cd "$OUT" && node node_modules/pxt-core/built/pxt.js staticpkg "$@")

# Native images for Forward's extension combinations (forward/native-combos.json), so Download
# works for projects using Jacdac.
node "$ROOT/forward/build/prebuild-natives.js" "$OUT" "$OUT/built/packaged"

# Forward's extensions as a static GitHub-proxy snapshot under /api/gh (forward/extensions.json).
node "$ROOT/forward/build/gh-snapshot.js" "$OUT/built/packaged"

echo "build.sh: static editor at $OUT/built/packaged"
