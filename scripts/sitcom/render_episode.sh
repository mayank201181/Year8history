#!/usr/bin/env bash
# Render ONE "Totally Raotional: The History Season" episode end to end, from a fresh container.
#
#   scripts/sitcom/render_episode.sh <topic> [episode-script.py]
#
#   <topic>            topic id from common.SEASON, e.g. william-i  (script defaults to episodes/<topic>.py)
# Env overrides:
#   WORKERS=4          parallel Chromium pages for frame rendering
#   VIDEOS_DIR=...     where <topic>.mp4 and posters/<topic>.jpg go (default <repo>/public/videos)
#   POSTER_T=25        poster frame time in seconds
#   SKIP_ASR=1         skip the Whisper speech QA pass (out/<topic>/asr.txt)
#
# Steps: install deps if missing -> download Kokoro models if missing -> lint -> build.py (TTS + mix +
# timeline) -> asr.py QA (non-fatal) -> render.mjs frames -> mux MP4 -> poster JPG -> tidy up.
# Afterwards run:  python3 scripts/sitcom/gen_manifest.py
set -euo pipefail
cd "$(dirname "$0")"
ROOT="$(cd ../.. && pwd)"
T="${1:?usage: render_episode.sh <topic> [episode-script.py]}"
SCRIPT="$(realpath "${2:-episodes/$T.py}")"
WORKERS="${WORKERS:-4}"
VIDEOS="${VIDEOS_DIR:-$ROOT/public/videos}"
POSTER_T="${POSTER_T:-25}"
OUT="out/$T"
log() { echo "=== [$T] $* (${SECONDS}s)"; }
[ -f "$SCRIPT" ] || { echo "no episode script: $SCRIPT" >&2; exit 1; }

# ---- dependencies ----
if ! command -v ffmpeg >/dev/null || ! ffmpeg -hide_banner -filters 2>/dev/null | grep rubberband >/dev/null; then
  log "installing ffmpeg"; (apt-get update -qq && apt-get install -y -qq ffmpeg) >/dev/null
fi
python3 -c "import kokoro_onnx, soundfile, numpy" 2>/dev/null || { log "pip install kokoro-onnx soundfile"; pip install -q kokoro-onnx soundfile; }
if [ -z "${SKIP_ASR:-}" ]; then python3 -c "import faster_whisper" 2>/dev/null || pip install -q faster-whisper || true; fi
export NODE_PATH="${NODE_PATH:-$(npm root -g)}"
if ! node -e "require('playwright')" 2>/dev/null; then
  log "installing playwright + chromium"; npm i -g playwright >/dev/null && npx playwright install --with-deps chromium >/dev/null
fi
REL=https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0
for f in kokoro-v1.0.onnx voices-v1.0.bin; do
  if [ ! -s "$f" ]; then log "downloading $f"; curl -fsSL -o "$f.part" "$REL/$f" && mv "$f.part" "$f"; fi
done

# ---- build ----
if [ -z "${2:-}" ]; then log "lint"; python3 lint_episode.py "$SCRIPT"; fi
log "voices + mix + timeline"; python3 build.py "$SCRIPT" "$OUT"
if [ -z "${SKIP_ASR:-}" ]; then
  log "speech QA -> $OUT/asr.txt"; python3 asr.py "$SCRIPT" > "$OUT/asr.txt" 2>/dev/null || echo "asr skipped (whisper unavailable)"
  tail -1 "$OUT/asr.txt" 2>/dev/null || true
fi

# ---- render ----
log "frames ($WORKERS workers)"; rm -f "$OUT"/part*.mp4
R0=$SECONDS; node render.mjs "$OUT" --workers "$WORKERS"; RENDER_S=$((SECONDS - R0))
mkdir -p "$VIDEOS/posters"
MP4="$VIDEOS/$T.mp4"; JPG="$VIDEOS/posters/$T.jpg"
log "mux -> $MP4"
ffmpeg -y -loglevel error -f concat -safe 0 -i "$OUT/parts.txt" -i "$OUT/audio.wav" \
  -c:v copy -af "loudnorm=I=-16:TP=-1.5:LRA=11" -ar 48000 -c:a aac -b:a 128k -movflags +faststart -shortest "$MP4"
log "poster @${POSTER_T}s -> $JPG"
ffmpeg -y -loglevel error -ss "$POSTER_T" -i "$MP4" -frames:v 1 -q:v 3 "$JPG"
rm -f "$OUT"/part*.mp4

DUR=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$MP4")
python3 - "$DUR" "$RENDER_S" <<'EOF'
import sys; d, r = float(sys.argv[1]), max(1, int(sys.argv[2]))
print(f"render speed: {d:.0f}s of video in {r}s wall = {d / r * 60:.0f}s of video per wall-clock minute")
EOF
log "done: $(du -h "$MP4" | cut -f1) ${DUR}s  ->  now run: python3 scripts/sitcom/gen_manifest.py"
