#!/usr/bin/env bash
# Render templates to PNG at exact canvas size.
#
#   ./tools/export.sh                    # all templates → export/
#   ./tools/export.sh 12-speaker-card    # one template (name or fragment)
#
# Needs tools/serve.sh running and Chrome installed.
set -euo pipefail

PORT="${FF26_PORT:-8777}"
BASE="http://localhost:${PORT}"
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CHROME="${CHROME_BIN:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
OUT="${ROOT}/export"
SCALE="${FF26_SCALE:-1}"     # set to 2 for @2x retina exports

if ! curl -sf -o /dev/null "${BASE}/tokens/tokens.css"; then
  echo "No server on ${BASE} — start one with ./tools/serve.sh &" >&2
  exit 2
fi
if [ ! -x "${CHROME}" ]; then
  echo "Chrome not found at ${CHROME}. Set CHROME_BIN to your browser binary." >&2
  exit 2
fi

mkdir -p "${OUT}"
FILTER="${1:-}"

# Canvas size per template. Keep in sync with the class on each .ff-canvas.
size_for() {
  case "$1" in
    13-quote.html|15-square-announce.html) echo "1080,1080" ;;
    14-story-9x16.html)                    echo "1080,1920" ;;
    16-linkedin-cover.html)                echo "1584,396"  ;;
    *)                                     echo "1080,1350" ;;
  esac
}

count=0
for path in "${ROOT}"/templates/*.html; do
  file="$(basename "${path}")"
  [ -n "${FILTER}" ] && [[ "${file}" != *"${FILTER}"* ]] && continue

  "${CHROME}" --headless --disable-gpu --no-sandbox --hide-scrollbars \
    --force-device-scale-factor="${SCALE}" \
    --window-size="$(size_for "${file}")" \
    --virtual-time-budget=9000 \
    --screenshot="${OUT}/${file%.html}.png" \
    "${BASE}/templates/${file}" >/dev/null 2>&1

  echo "  → export/${file%.html}.png"
  count=$((count + 1))
done

if [ "${count}" -eq 0 ]; then
  echo "No template matched '${FILTER}'." >&2
  exit 1
fi
echo "Exported ${count} file(s) to ${OUT}"
