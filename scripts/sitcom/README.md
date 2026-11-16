# Sitcom episodes: "Totally Raotional: The History Season"

These are animated, voiced sitcom episodes, one per topic (13 episodes of about 6 to 8 minutes each), rendered to MP4 and shown in each
topic's **Watch** tab. They use the same family and engine as the Maths season. The running order is in `common.SEASON`. For how to
write an episode, read `SITCOM_WRITING.md`. Full example scripts are in `reference/` (these are Maths episodes, so their format is
right but their cast is the old one).

## Cast
- **Tara Rao** (12): deadpan, the only sane person in the house. Narrates the confessionals.
- **Mum** (Priya): deal hunter, competitive, fierce about fairness.
- **Dad** (Vikram): a self-described history buff who learned everything from movies. Confidently wrong, and keeps crowning himself.
- **Chrono** (`chrono`): a grumpy hourglass monster, about 950 years old. He has a wooden and brass frame, glass bulbs with
  sand that trickles slowly, big eyes, a brass monocle, a white moustache and rolled-scroll arms. He lives in the grandfather clock (in
  the living room) or the junk drawer, and appears with `poof("chrono", x)`. He replaces Centi. His challenge voice-over, the holo-board
  ("CHRONO'S HOLO-BOARD"), the title card and the end card all use him.
- Bit parts: `teacher` (Ms Lim), `uncle` (Uncle Hock), `cashier` (Kai).

## What the engine supports (names are fixed in `common.py`)
| | |
|---|---|
| Sets | `living` (now has a grandfather clock), `kitchen`, `mall`, `checkout`, `classroom`, `hawker`, `park`, **`museum`** (display cases with a Norman helmet and a vase, a framed monarch portrait, a rope barrier, an info placard, spotlights), **`library`** (bookcases, ladder, arched window, reading table with a banker's lamp), `confess_<who>` (Chrono's has a parchment and clock-face backdrop) |
| Moods | neutral happy excited deadpan annoyed shock smug thinking worried sad determined teach bored eyeroll **serious** (calm, neutral face) |
| Props | phone tablet cushion book plate map dice calculator compass paintroller **crown** (worn on the head; Chrono wears it on his cap) **scroll quill ballot** (paper going into a ballot box) **placard** (VOTES FOR WOMEN, on a pole) **newspaper remote**. Chrono holds props in his right scroll-arm. |
| SFX | ding buzzer scratch trombone poof whoosh tick door drawer **fanfare** (3-note brass) **gong** |
| Beats | `scene confess L sfx freeze poof card challenge title end_card` and **`serious(on=True)`** |

**`serious()` / `serious(False)`** is for atrocities, persecution and famine. While it is on:
- The ukulele music bed fades out over 1.5 s and stays off. After `serious(False)` it fades back in over 2 s.
- The comic SFX `trombone`, `scratch` and `buzzer` are dropped. The beat's pause is kept.
- `poof` plays a soft version with no comic sting.
- A freeze-frame still works, but without the scratch sound, and its banner is slate grey instead of red.
- A 0.5 s breath is inserted when the segment starts. Segments carry `serious: true` in `timeline.json`, and the renderer fades in a
  gentle dark vignette for them.
- `ding`, `tick`, `whoosh`, `door`, `drawer`, `gong` and `fanfare` are left alone. Don't put `fanfare` inside a serious segment.

## Pipeline (all local, no paid APIs)
1. `episodes/<topic>.py` is the script.
2. `build.py` makes the audio and the timeline. It runs Kokoro TTS for each line (cached in `tts_cache/`), builds lip-sync envelopes,
   and mixes in the synthesized SFX and the ukulele bed (with ducking and serious-mode fades). Output: `out/<topic>/audio.wav` and
   `timeline.json`.
3. `asr.py` is optional QA. It runs Whisper over every line to catch mispronunciations (`out/<topic>/asr.txt`).
4. `render.html` and `render.mjs` render the video. The Canvas renderer is driven by `renderAt(t)`, Playwright renders every frame
   with 4 workers, and the frames are encoded with x264.

## Render one episode end to end (fresh container OK)
```bash
cd scripts/sitcom
./render_episode.sh william-i          # -> public/videos/william-i.mp4 + public/videos/posters/william-i.jpg
python3 gen_manifest.py                # -> lib/sitcom.ts (lists every episode whose MP4 exists)
```
`render_episode.sh <topic> [script.py]` does the following:
1. Installs whatever is missing: ffmpeg with rubberband; `kokoro-onnx`, `soundfile` and `faster-whisper` from pip; Playwright and
   Chromium only if `require('playwright')` fails.
2. Downloads `kokoro-v1.0.onnx` and `voices-v1.0.bin` if they are missing. Both are git-ignored, as are `out/` and `tts_cache/`.
3. Lints the episode, builds the audio, runs ASR QA (not fatal) and renders the frames with `WORKERS=4`.
4. Muxes the video with loudnorm, 48 kHz AAC and faststart into `public/videos/<topic>.mp4`.
5. Grabs a poster frame at `POSTER_T=25` s into `public/videos/posters/<topic>.jpg`.
6. Prints the render speed.

Env options: `WORKERS`, `POSTER_T`, `VIDEOS_DIR` (to write somewhere other than `public/videos`) and `SKIP_ASR=1`.
`make_episode.sh t1 t2 …` runs it for several topics in a row and then regenerates the manifest.

These are the same steps done by hand:
```bash
cd scripts/sitcom
pip install kokoro-onnx soundfile faster-whisper
REL=https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0
curl -fLO $REL/kokoro-v1.0.onnx; curl -fLO $REL/voices-v1.0.bin
export NODE_PATH=$(npm root -g)                   # Playwright is installed globally
python3 lint_episode.py episodes/william-i.py      # must be 0 errors
python3 build.py episodes/william-i.py out/william-i
python3 asr.py episodes/william-i.py               # optional QA
node render.mjs out/william-i --stills 10,60,120   # preview frames -> out/william-i/stills/*.jpg
node render.mjs out/william-i --workers 4          # -> out/william-i/part*.mp4 + parts.txt
ffmpeg -y -f concat -safe 0 -i out/william-i/parts.txt -i out/william-i/audio.wav -c:v copy \
  -af loudnorm=I=-16:TP=-1.5:LRA=11 -ar 48000 -c:a aac -b:a 128k -movflags +faststart -shortest \
  ../../public/videos/william-i.mp4
mkdir -p ../../public/videos/posters
ffmpeg -y -ss 25 -i ../../public/videos/william-i.mp4 -frames:v 1 -q:v 3 ../../public/videos/posters/william-i.jpg
python3 gen_manifest.py
```
`SITCOM_DEBUG=1 python3 build.py …` also prints the music-bed events and the SFX list, which is handy for checking `serious()`.
`node check_diagrams.mjs <topic>` writes a contact sheet of an episode's holo-board SVGs.

## Speed (4-core container, `--workers 4`)
- Frame rendering runs at about **186 s of video per wall-clock minute** (about 3x realtime). A 7-minute episode takes about 2.5 min.
- TTS takes about 1.3 s per line on the first build and nothing after that, because it is cached. A 130-line episode takes about 3 min.
- ASR takes about 1 to 2 min.
- In total, expect about 7 to 9 min per episode, or about 1.5 to 2 h for all 13 episodes run one after another. Run them one at a
  time: each episode already uses every core.

Canvas `ctx.filter` is applied per draw call, which made freeze-frames take about 2.4 s per frame and confessionals about 0.7 s per
frame. The renderer now caches the blurred confession backdrops and applies the freeze grayscale in one pass, so both cost about the
same as a normal frame (about 15 to 35 ms). Avoid adding per-draw `ctx.filter` in new art.

## TTS tips (from both seasons)
- Write numbers as words. Say years the way people say them ("ten sixty six").
- Say "zero point seven", not "nought".
- Avoid interjections ("Ugh", "Hmm").
- If Kokoro mispronounces a name, add a phonetic respelling for the spoken text in `build.py` and keep the real spelling in the
  subtitles. Then check `out/<topic>/asr.txt`.
