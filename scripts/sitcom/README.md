# Sitcom episodes — "Who Rules the Remote?"

Animated, voiced sitcom episodes (one per history topic) rendered to MP4 for the Year 8 History Lab.
The year's theme is Dictatorship and Democracy, so the running family gag is the power struggle over
the living-room TV remote, which each episode parallels with the real history.

Cast: Tara (12, deadpan), Mum (Anjali), Dad (Vikram, rules by "divine right"), Ms Lim (Tara's history
teacher), Uncle Hock (hawker), a museum guide, a narrator (voice only, for solemn cards) and
**Ticktock**, a pompous 900-year-old talking hourglass from the junk drawer who claims he "was there"
at every event — and gets flustered when caught out (the running source-reliability joke).

**Script writers: read [WRITING.md](WRITING.md) first.** Pronunciation checks: `python3 say.py "…"`.

Pipeline (all local, no paid APIs):

1. `episodes/<topic>.py` — the script: beats of dialogue, moods, camera shots, Time-Board lines and
   SVG diagrams, props, wearables, SFX, freeze-frames, solemn cards, pause-challenges.
2. `build.py` — Kokoro neural TTS per line (text passed through `common.spoken()`: respellings, years
   and dates to words; cached in `tts_cache/`), lip-sync envelopes, synthesized SFX + ukulele bed with
   ducking → `out/<topic>/audio.wav` + `timeline.json`.
3. `render.html` + `render.mjs` — Canvas renderer driven by `renderAt(t)`; Playwright renders every
   frame deterministically (one worker per core) → x264.
4. `asr.py` — Whisper transcription of every line to catch mispronunciations.
5. `gen_manifest.py` — writes `lib/sitcom.ts` (only episodes whose MP4 exists).

```bash
cd scripts/sitcom
python3 lint_episode.py episodes/william-i.py         # static checks (run first, always)
node check_diagrams.mjs william-i                     # contact sheet of Time-Board SVGs -> out/diagrams/
python3 build.py episodes/william-i.py out/william-i   # voices + timeline (prints duration)
node render.mjs out/william-i --stills 10,60,120      # preview frames -> out/william-i/stills/
./make_episode.sh william-i                           # everything: lint, build, ASR, render, encode, poster
python3 gen_manifest.py                               # refresh lib/sitcom.ts
```

`make_episode.sh` installs `kokoro-onnx soundfile faster-whisper` and downloads the Kokoro model files
on first run. Output: `public/videos/<topic>.mp4`, `public/videos/posters/<topic>.jpg`,
`out/<topic>/asr.txt`. On a 4-core machine the frames render at about real time (≈ 8.5 min for the 9-min pilot); a whole
`make_episode.sh` run takes ≈ 10 min with cached voices, ≈ 13 min from scratch.
