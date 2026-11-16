#!/usr/bin/env bash
# Build + render several episodes in a row (thin wrapper around render_episode.sh).
#   scripts/sitcom/make_episode.sh <topic-id> [<topic-id> ...]
# Output: public/videos/<topic>.mp4 and public/videos/posters/<topic>.jpg (+ out/<topic>/asr.txt QA report)
set -euo pipefail
cd "$(dirname "$0")"
for T in "$@"; do ./render_episode.sh "$T"; done
python3 gen_manifest.py
