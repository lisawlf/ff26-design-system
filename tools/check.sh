#!/usr/bin/env bash
# Content-fit check for every template.
#
# Canvases are `overflow: hidden`, so copy that runs too long does not error —
# it silently vanishes off the bottom edge. This loads each template in headless
# Chrome, measures every element against the canvas box and reports overruns.
#
#   ./tools/check.sh
#
# Exits non-zero if any template overflows. Needs tools/serve.sh running.
set -uo pipefail

PORT="${FF26_PORT:-8777}"
BASE="http://localhost:${PORT}"
CHROME="${CHROME_BIN:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"

if ! curl -sf -o /dev/null "${BASE}/tokens/tokens.css"; then
  echo "No server on ${BASE} — start one with ./tools/serve.sh &" >&2
  exit 2
fi
if [ ! -x "${CHROME}" ]; then
  echo "Chrome not found at ${CHROME}. Set CHROME_BIN to your browser binary." >&2
  exit 2
fi

REPORT="$("${CHROME}" --headless --disable-gpu --no-sandbox \
  --virtual-time-budget=40000 --dump-dom "${BASE}/tools/check.html" 2>/dev/null \
  | sed -n '/<pre id="report"/,/<\/pre>/p' \
  | sed 's/<[^>]*>//g' \
  | grep -E '^(OK|BAD|PASS|FAIL)')"

echo "${REPORT}"
echo "${REPORT}" | grep -q '^PASS' || exit 1
