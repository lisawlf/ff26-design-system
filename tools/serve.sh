#!/usr/bin/env bash
# Serve the design system on http://localhost:8777
#
# The templates load CSS, fonts and images by relative path, so they need a real
# origin — opening an .html straight from Finder gives you an unstyled page.
#
#   ./tools/serve.sh          # foreground
#   ./tools/serve.sh &        # background, then run check.sh / export.sh
set -euo pipefail

PORT="${FF26_PORT:-8777}"
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

if curl -sf -o /dev/null "http://localhost:${PORT}/tokens/tokens.css"; then
  echo "Already serving on http://localhost:${PORT}"
  exit 0
fi

echo "Serving ${ROOT} on http://localhost:${PORT}"
echo "  styleguide → http://localhost:${PORT}/preview/index.html"
exec python3 -m http.server "${PORT}" --directory "${ROOT}"
