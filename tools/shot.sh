#!/bin/sh
# Headless screenshot of a wallpaper page: tools/shot.sh <out.png> "<query>" [index|viola]   e.g. tools/shot.sh /tmp/a.png "t=30&alt=8" viola
# (freeze=1 renders a few frames and stops; the first headless run after a rebuild is sometimes black, so it retries once)
OUT="$1"; Q="$2"; PAGE="${3:-index}"
ROOT="$(cd "$(dirname "$0")/.." && pwd -W 2>/dev/null || pwd)"
for try in 1 2; do
  "C:/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --disable-gpu-sandbox --use-angle=d3d11 --ignore-gpu-blocklist \
    --hide-scrollbars --window-size=1600,900 --virtual-time-budget=15000 --run-all-compositor-stages-before-draw \
    --screenshot="$OUT" "file:///$ROOT/$PAGE.html?freeze=1&hud=1&$Q" >/dev/null 2>&1
  [ "$(wc -c < "$OUT")" -gt 100000 ] && break
done
echo "$OUT $(wc -c < "$OUT") bytes"
