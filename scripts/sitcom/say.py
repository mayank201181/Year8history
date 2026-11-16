"""Pronunciation check for writers.
  python3 say.py "Harald Hardrada landed in 1066."            -> spoken text + phonemes (en-gb and en-us)
  python3 say.py --voice ticktock "Robespierre" "Pankhurst"   -> also synthesise with that cast voice and
                                                                 transcribe with Whisper (writes out/say/*.wav)
If the phonemes or the transcript look wrong, add a respelling to SAY in common.py.
"""
import os, sys
HERE = os.path.dirname(os.path.abspath(__file__))
ns = {}
exec(open(os.path.join(HERE, "common.py")).read(), ns)
args = sys.argv[1:]
voice = None
if args[:1] == ["--voice"]:
    voice, args = args[1], args[2:]
from kokoro_onnx import Kokoro
k = Kokoro(os.path.join(HERE, "kokoro-v1.0.onnx"), os.path.join(HERE, "voices-v1.0.bin"))
model = None
for i, text in enumerate(args):
    sp = ns["spoken"](text)
    print(f"TEXT   {text}\nSPOKEN {sp}\n  gb   {k.tokenizer.phonemize(sp, 'en-gb')}\n  us   {k.tokenizer.phonemize(sp, 'en-us')}")
    if voice:
        import soundfile as sf, numpy as np
        from faster_whisper import WhisperModel
        v = ns["VOICES"][voice]
        a, sr = k.create(sp, voice=v["voice"], speed=v["speed"], lang=v["lang"])
        os.makedirs(os.path.join(HERE, "out", "say"), exist_ok=True)
        f = os.path.join(HERE, "out", "say", f"{voice}_{i}.wav"); sf.write(f, a, sr)
        model = model or WhisperModel("base.en", device="cpu", compute_type="int8", cpu_threads=2)
        a16 = np.interp(np.arange(0, len(a), sr / 16000), np.arange(len(a)), a).astype("float32")
        segs, _ = model.transcribe(a16, language="en", beam_size=1)
        print(f"  ASR  {' '.join(s.text for s in segs).strip()}   ({f})")
