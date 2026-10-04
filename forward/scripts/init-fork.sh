#!/usr/bin/env bash
# One-time setup for a fresh local clone of Forward-Education/pxt-forward. Makes no commits.
#
#   1. adds the upstream remote, and fetches upstream tags into refs/upstream-tags/*,
#      kept apart from the fork's own tags (Forward never creates v* tags)
#   2. removes upstream's workflows, which publish with Microsoft's secrets and tag on every push
#
#   bash forward/scripts/init-fork.sh
set -euo pipefail
cd "$(dirname "${BASH_SOURCE[0]}")/../.."

UPSTREAM_URL="$(node -p 'require("./forward/upstream.json").repo')"
git remote get-url upstream >/dev/null 2>&1 || git remote add upstream "$UPSTREAM_URL"
git config remote.upstream.tagOpt --no-tags
git fetch upstream '+refs/tags/*:refs/upstream-tags/*'

for f in .github/workflows/*; do
    [ -e "$f" ] || continue
    case "$(basename "$f")" in
        fwd-*) ;;
        *)
            if git ls-files --error-unmatch "$f" >/dev/null 2>&1; then git rm -q "$f"; else rm -f "$f"; fi
            echo "removed upstream workflow $f"
            ;;
    esac
done

echo "init-fork: done. Review 'git status', then commit."
