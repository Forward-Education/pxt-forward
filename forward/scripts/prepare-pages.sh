#!/usr/bin/env bash
# Adds Cloudflare Pages control files to a built editor before it is deployed.
#
#   bash forward/scripts/prepare-pages.sh <site-dir> <staging|production>
#
# _headers  baseline response headers. Staging also gets X-Robots-Tag: noindex.
# 404.html  makes unknown paths return a real 404. Without it Pages falls back to index.html with
#           a 200, and pxt would read that page as a pre-built native image whenever one is missing.
# _redirects serves /static/* from /docs/static/*. Tutorials and docs (273 files at v9.0.12) link
#           to /static/..., which Microsoft's servers map to the docs folder; a static build doesn't.
set -euo pipefail

SITE="${1:?usage: prepare-pages.sh <site-dir> <staging|production>}"
ENVIRONMENT="${2:?usage: prepare-pages.sh <site-dir> <staging|production>}"

case "$ENVIRONMENT" in
    staging | production) ;;
    *) echo "prepare-pages: environment must be staging or production, not '$ENVIRONMENT'" >&2; exit 1 ;;
esac
[ -f "$SITE/index.html" ] || { echo "prepare-pages: $SITE has no index.html" >&2; exit 1; }

{
    echo "/*"
    echo "  X-Content-Type-Options: nosniff"
    echo "  Referrer-Policy: strict-origin-when-cross-origin"
    if [ "$ENVIRONMENT" = "staging" ]; then echo "  X-Robots-Tag: noindex"; fi
} > "$SITE/_headers"

if [ ! -f "$SITE/404.html" ]; then
    cat > "$SITE/404.html" <<'EOF'
<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><title>Not found</title></head>
<body><h1>Not found</h1><p><a href="/">Open the editor</a></p></body>
</html>
EOF
fi

{
    echo "/static/*  /docs/static/:splat  200"
    # Extension snapshot rewrites from forward/build/gh-snapshot.js, when present.
    if [ -f "$SITE/api/redirects.txt" ]; then cat "$SITE/api/redirects.txt"; fi
} > "$SITE/_redirects"

echo "prepare-pages: wrote _headers ($ENVIRONMENT), _redirects and 404.html in $SITE"
