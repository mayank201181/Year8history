"""Build audio + timeline for a sitcom episode.
Usage: python3 build.py episodes/<topic>.py out/<topic>
Produces outdir/timeline.json and outdir/audio.wav
"""
import sys, os, json, hashlib, re, subprocess
import numpy as np, soundfile as sf

SR = 24000
FPS = 24
HERE = os.path.dirname(os.path.abspath(__file__))
script_path, out = sys.argv[1], sys.argv[2]
os.makedirs(out, exist_ok=True)
cache = os.path.join(HERE, "tts_cache"); os.makedirs(cache, exist_ok=True)

ns = {}
exec(open(os.path.join(HERE, "common.py")).read(), ns)
exec(open(script_path).read(), ns)
BEATS, VOICES, EP = ns["B"], ns["VOICES"], ns["EP"]

_k = None
def kokoro():
    global _k
    if _k is None:
        from kokoro_onnx import Kokoro
        _k = Kokoro(os.path.join(HERE, "kokoro-v1.0.onnx"), os.path.join(HERE, "voices-v1.0.bin"))
    return _k

sys.path.insert(0, HERE)
from respell import respell

def tts(who, text):
    text = respell(text)          # phonetic fixes for TTS only (subtitles use the original text)
    v = VOICES[who]
    key = hashlib.sha1(json.dumps([v, text]).encode()).hexdigest()[:16]
    f = os.path.join(cache, f"{who}_{key}.wav")
    if not os.path.exists(f):
        s, sr = kokoro().create(text, voice=v["voice"], speed=v["speed"], lang=v["lang"])
        assert sr == SR
        raw = f + ".raw.wav"; sf.write(raw, s, sr)
        if v.get("pitch"):
            ratio = 2 ** (v["pitch"] / 12)
            subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", raw, "-af",
                            f"rubberband=pitch={ratio:.4f}:formant=preserved", "-ar", str(SR), f], check=True)
            os.remove(raw)
        else:
            os.replace(raw, f)
    a, sr = sf.read(f, dtype="float32")
    if a.ndim > 1: a = a.mean(1)
    # trim silence edges
    idx = np.where(np.abs(a) > 0.01)[0]
    if len(idx): a = a[max(0, idx[0] - 600): idx[-1] + 1200]
    return a

def envelope(a):
    hop = SR // FPS
    n = int(np.ceil(len(a) / hop))
    e = np.array([np.sqrt(np.mean(a[i*hop:(i+1)*hop] ** 2)) if len(a[i*hop:(i+1)*hop]) else 0 for i in range(n)])
    p = np.percentile(e, 90) if len(e) else 1
    e = np.clip(e / (p + 1e-6), 0, 1)
    e = np.where(e < 0.12, 0, e)
    return [round(float(x), 2) for x in e]

# ---------------- synthesized sound effects ----------------
rng = np.random.default_rng(7)
def t_(d): return np.arange(int(d * SR)) / SR
def adsr(n, a=0.005, r=0.2):
    env = np.ones(n); na = int(a*SR); nr = min(int(r*SR), n)
    if na: env[:na] = np.linspace(0, 1, na)
    env[-nr:] *= np.linspace(1, 0, nr); return env
def pluck(freq, dur, bright=0.5, decay=0.996):
    N = int(SR / freq); buf = rng.uniform(-1, 1, N) * bright
    out = np.zeros(int(dur * SR))
    for i in range(len(out)):
        out[i] = buf[i % N]
        buf[i % N] = decay * 0.5 * (buf[i % N] + buf[(i + 1) % N])
    return out
NOTE = lambda n: 440 * 2 ** ((n - 69) / 12)

def sfx_ding():
    t = t_(1.2); return 0.5*(np.sin(2*np.pi*1318*t) + 0.5*np.sin(2*np.pi*2637*t) + 0.25*np.sin(2*np.pi*1975*t)) * np.exp(-t*4)
def sfx_buzzer():
    t = t_(0.7); w = np.sign(np.sin(2*np.pi*110*t)) * 0.3 + np.sign(np.sin(2*np.pi*116*t)) * 0.3
    return w * adsr(len(t), 0.01, 0.1)
def sfx_scratch():
    t = t_(0.55); f = 900 * np.exp(-t*4) + 200
    ph = np.cumsum(f) / SR; n = rng.uniform(-1, 1, len(t))
    return (0.5 * np.sin(2*np.pi*ph) * n + 0.3*n) * adsr(len(t), 0.005, 0.2) * 0.8
def sfx_trombone():
    out = []
    for i, (n, d) in enumerate([(58, .45), (57, .45), (56, .45), (55, 1.3)]):
        t = t_(d); f = NOTE(n) * (1 + (0.012*np.sin(2*np.pi*6*t) if i == 3 else 0))
        ph = np.cumsum(f) / SR
        w = sum(np.sin(2*np.pi*k*ph)/k for k in range(1, 8))
        out.append(w * adsr(len(t), 0.03, 0.12) * 0.25)
    return np.concatenate(out)
def sfx_poof():
    t = t_(0.6); n = rng.uniform(-1, 1, len(t))
    # crude lowpass sweep
    y = np.zeros_like(n); a = 0.0
    for i in range(len(n)):
        c = 0.02 + 0.3 * np.exp(-t[i]*6); a += c * (n[i] - a); y[i] = a
    return y * np.exp(-t*5) * 2.2 + 0.25*np.sin(2*np.pi*(300 + 900*t)*t) * np.exp(-t*8)
def sfx_whoosh():
    t = t_(0.5); n = rng.uniform(-1, 1, len(t)); y = np.zeros_like(n); a = 0
    for i in range(len(n)):
        c = 0.03 + 0.15*np.sin(np.pi*t[i]/0.5); a += c*(n[i]-a); y[i] = a
    return y * np.sin(np.pi*t/0.5) * 1.6
def sfx_tick():
    t = t_(0.08); return np.sin(2*np.pi*1800*t) * np.exp(-t*60) * 0.5
def sfx_door():
    t = t_(0.5); return (np.sin(2*np.pi*90*t)*np.exp(-t*12) + rng.uniform(-1,1,len(t))*np.exp(-t*30)*0.3) * 0.8
def sfx_drawer():
    t = t_(0.45); n = rng.uniform(-1, 1, len(t)); return n * (0.15 + 0.1*np.sin(2*np.pi*30*t)) * adsr(len(t), 0.05, 0.1)
def _brass(freq, d, vib=0.0):
    t = t_(d); f = freq * (1 + vib * np.sin(2*np.pi*5.5*t) * np.clip((t - 0.15) / 0.2, 0, 1))
    ph = np.cumsum(f) / SR
    bright = np.clip(t / 0.05, 0, 1)                      # brass "opens up" during the attack
    w = sum(np.sin(2*np.pi*k*ph) * (1/k) * np.exp(-(k-1) * (0.9 - 0.6*bright)) for k in range(1, 11))
    w += rng.uniform(-1, 1, len(t)) * 0.15 * np.exp(-t*60)  # lip buzz at the onset
    return w * adsr(len(t), 0.02, min(0.12, d*0.4))
def sfx_fanfare():
    # short 3-note brass fanfare: ta-ta-TAAA (G G C) over a lower harmony (E E G)
    out = np.zeros(int(1.45*SR)); pos = 0.0
    for (top, low, d) in [(67, 64, .15), (67, 64, .15), (72, 67, .95)]:
        v = 0.006 if d > .5 else 0.0
        a = _brass(NOTE(top), d, v) * 0.22 + _brass(NOTE(low), d, v) * 0.16 + _brass(NOTE(low - 12), d, 0) * 0.08
        i = int(pos*SR); out[i:i+len(a)] += a[:len(out)-i]; pos += d + 0.03
    return out
def sfx_gong():
    # low inharmonic partials that bloom then decay slowly, plus a soft mallet thump
    t = t_(4.0); f0 = 98.0
    parts = [(1.0, 1.0, 0.9), (1.47, 0.6, 1.1), (1.98, 0.5, 1.3), (2.53, 0.35, 1.6), (3.11, 0.25, 2.0), (4.17, 0.15, 2.6), (5.43, 0.08, 3.2)]
    y = sum(a * np.sin(2*np.pi*f0*r*t + 0.3*np.sin(2*np.pi*0.7*t*k)) * np.exp(-t*dec) for k, (r, a, dec) in enumerate(parts))
    y *= np.clip(t / 0.06, 0, 1) * (1 + 0.25*np.sin(2*np.pi*3.1*t) * np.exp(-t*0.8))
    thump = np.sin(2*np.pi*60*t) * np.exp(-t*18)
    return (y * 0.32 + thump * 0.4) * adsr(len(t), 0.003, 0.6)
def sfx_poof_soft():
    # poof without the comic rising sting (used in serious mode)
    t = t_(0.6); n = rng.uniform(-1, 1, len(t)); y = np.zeros_like(n); a = 0.0
    for i in range(len(n)):
        c = 0.02 + 0.2 * np.exp(-t[i]*6); a += c * (n[i] - a); y[i] = a
    return y * np.exp(-t*5) * 1.4
def jingle():
    # bouncy ukulele-ish tune, C major
    mel = [(72,.18),(76,.18),(79,.18),(84,.36),(81,.18),(79,.18),(76,.36),(77,.18),(79,.18),(81,.18),(83,.18),(84,.8)]
    out = np.zeros(int(4.6*SR)); pos = 0.15
    for n, d in mel:
        p = pluck(NOTE(n), 1.0, 0.6, 0.995); i = int(pos*SR); out[i:i+len(p)] += p[:len(out)-i] * 0.5; pos += d
    for k, (ch, at) in enumerate([([48,55,64], 0.15), ([53,57,65], 1.05), ([55,59,67], 1.95), ([48,55,64,72], 2.85)]):
        for j, n in enumerate(ch):
            p = pluck(NOTE(n), 1.6, 0.5, 0.996); i = int((at + j*0.015)*SR); out[i:i+len(p)] += p[:len(out)-i]*0.35
    return out
def music_bed(dur):
    # gentle strummed loop C-G-Am-F at 100bpm, offbeat strums
    beat = 60/100; bar = 4*beat
    chords = [[60,64,67,72],[55,59,62,67],[57,60,64,69],[53,57,60,65]]
    loop = np.zeros(int(4*bar*SR) + SR)
    for b, ch in enumerate(chords):
        for s, (off, vel) in enumerate([(0,1.0),(1.5,.6),(2,.8),(3,.6),(3.5,.5)]):
            at = b*bar + off*beat
            for j, n in enumerate(ch if s % 2 == 0 else ch[::-1]):
                p = pluck(NOTE(n), 0.9, 0.35*vel, 0.993); i = int((at + j*0.012)*SR)
                loop[i:i+len(p)] += p
        bp = pluck(NOTE(ch[0]-12), 1.2, 0.5, 0.996); i = int(b*bar*SR); loop[i:i+len(bp)] += bp*0.8
    L = int(4*bar*SR); loop = loop[:L] + np.pad(loop[L:], (0, L - len(loop[L:])))
    reps = int(np.ceil(dur*SR / L)) + 1
    return np.tile(loop, reps)[:int(dur*SR)]

SFX = dict(ding=sfx_ding, buzzer=sfx_buzzer, scratch=sfx_scratch, trombone=sfx_trombone, poof=sfx_poof,
           whoosh=sfx_whoosh, tick=sfx_tick, door=sfx_door, drawer=sfx_drawer,
           fanfare=sfx_fanfare, gong=sfx_gong, poof_soft=sfx_poof_soft)
COMIC_SFX = {"trombone", "scratch", "buzzer"}   # dropped while serious(True) is in force
_sfx_cache = {}
def get_sfx(n):
    if n not in _sfx_cache: _sfx_cache[n] = SFX[n]().astype(np.float32)
    return _sfx_cache[n]

# ---------------- subtitles ----------------
def chunks(text, maxlen=95):
    parts = re.split(r'(?<=[.!?])\s+', text.strip())
    out, cur = [], ""
    for p in parts:
        if len(cur) + len(p) + 1 <= maxlen: cur = (cur + " " + p).strip()
        else:
            if cur: out.append(cur)
            cur = p
    if cur: out.append(cur)
    return out

def display_text(text):
    # spoken -> display tweaks
    return text.replace("G S T", "GST").replace("Banana Coin", "BananaCoin")

# ---------------- timeline assembly ----------------
segs, sfx_events, dialog = [], [], []
t = 0.6
scene = None; cast = []; caption = None; moods = {}; board = []
SERIOUS = False
# music bed: (time, target gain 0/1, fade seconds) events, rendered as one continuous bed + envelope
music_ev = []; music_want = False

def comic(name): return SERIOUS and name in COMIC_SFX

def push(kind, dur, **kw):
    global t
    seg = dict(kind=kind, t0=round(t, 3), t1=round(t + dur, 3), scene=scene, caption=caption,
               cast=[dict(c) for c in cast], moods=dict(moods), board=[dict(b) for b in board], **kw)
    if SERIOUS: seg["serious"] = True
    segs.append(seg); t += dur; return seg

def set_music(on, fade=None):
    """Scene-level wish for the ukulele bed; serious mode overrides it to off."""
    global music_want
    music_want = on
    eff = on and not SERIOUS
    if not music_ev or music_ev[-1][1] != eff:
        music_ev.append((t, 1.0 if eff else 0.0, fade if fade is not None else 0.6))

for b in BEATS:
    k = b["type"]
    if k == "scene":
        new_loc = b["id"]
        if scene and not scene.startswith("confess") and not new_loc.startswith("confess") and new_loc != scene:
            sfx_events.append((t, "whoosh", 0.5)); push("gap", 0.6)
        scene = new_loc; caption = b.get("caption"); board = []
        cast = [dict(who=w, x=x, appear=-10) for w, x in b["cast"]]
        moods = {w: moods.get(w, "neutral") for w, _ in b["cast"]}
        set_music(not scene.startswith("confess"))
        caption_t = t
        if caption: push("gap", 0.4)
        continue
    if k == "poof":
        sfx_events.append((t, "poof_soft", 0.7) if SERIOUS else (t, "poof", 0.9))
        cast = [c for c in cast if c["who"] != b["who"]] + [dict(who=b["who"], x=b["x"], appear=round(t, 3))]
        moods[b["who"]] = "bored"
        push("poof", 0.7, who=b["who"])
        continue
    if k == "serious":
        if b["on"] != SERIOUS:
            SERIOUS = b["on"]
            if music_want:   # fade the bed out (1.5 s) on serious(True), back in (2 s) on serious(False)
                music_ev.append((t, 0.0 if SERIOUS else 1.0, 1.5 if SERIOUS else 2.0))
            if SERIOUS: push("gap", 0.5)   # a short breath before the serious segment
        continue
    if k == "sfx":
        if not comic(b["name"]): sfx_events.append((t, b["name"], 0.9))
        push("gap", 0.35 + b.get("gap", 0)); continue
    if k == "freeze":
        if b["sfx"] and not comic(b["sfx"]): sfx_events.append((t, b["sfx"], 1.0))
        hold = segs[-1]["t1"] - 0.35
        push("freeze", b["dur"], text=b["text"], narrator=b.get("narrator", ""), hold=round(hold, 3), ref=len(segs) - 1); continue
    if k == "title":
        set_music(False)
        sfx_events.append((t, "jingle", 0.8)); push("title", b["dur"], title=b["title"], sub=b["sub"]); continue
    if k == "card":
        set_music(False)
        sfx_events.append((t, "whoosh", 0.6)); push("card", b["dur"], text=b["text"], sub=b.get("sub", "")); continue
    if k == "challenge":
        set_music(False)
        for phase in ("q", "count", "a"):
            if phase == "count":
                for i in range(5): sfx_events.append((t + i, "tick", 1.0))
                push("challenge", 5.2, phase="count", n=b["n"], q=b["q"], a=b["a"], work=b["work"]); continue
            text = b["qs"] if phase == "q" else b["as_"]
            a = tts("chrono", text)
            if phase == "a": sfx_events.append((t, "ding", 0.7))
            st = t + 0.3; dialog.append((st, a))
            d = len(a)/SR
            push("challenge", 0.3 + d + 0.9, phase=phase, n=b["n"], q=b["q"], a=b["a"], work=b["work"],
                 who="chrono", say0=round(st, 3), env=envelope(a), subs=[], text=display_text(text))
        continue
    if k == "line":
        who = b["who"]
        if b.get("boardClear"): board = []
        a = tts(who, b["text"]); d = len(a) / SR
        st = t + 0.22
        if b.get("board"): board.append(dict(text=b["board"], t=round(st + 0.15, 3)))
        if b.get("diagram"):
            board = [x for x in board if "svg" not in x]
            board.append(dict(svg=b["diagram"], t=round(st + 0.15, 3)))
        moods[who] = b.get("mood", moods.get(who, "neutral"))
        dialog.append((st, a))
        cs = chunks(display_text(b["text"])); tot = sum(len(c) for c in cs); acc = 0; subs = []
        for c in cs:
            subs.append(dict(t=round(st + d * acc / tot, 3), text=c)); acc += len(c)
        push("line", 0.22 + d + 0.38 + b.get("gap", 0), who=who, say0=round(st, 3), env=envelope(a), mood=moods[who],
             shot=b.get("shot", "close"), prop=b.get("prop"), subs=subs, offstage=b.get("offstage", False))
        continue
    raise ValueError(k)
set_music(False)
total = t + 0.8

# ---------------- mix ----------------
mix = np.zeros(int((total + 6) * SR), dtype=np.float32)
def add(at, a, g):
    i = int(at * SR); n = min(len(a), len(mix) - i); mix[i:i+n] += a[:n] * g
voice = np.zeros_like(mix)
for st, a in dialog:
    i = int(st*SR); voice[i:i+len(a)] += a
# normalise voice to ~ -16 LUFS-ish peak
voice *= 0.85 / (np.percentile(np.abs(voice[voice != 0]), 99.5) + 1e-6)
mix += voice
for st, name, g in sfx_events:
    add(st, jingle() if name == "jingle" else get_sfx(name), g)
# music bed with ducking under speech
venv = np.convolve(np.abs(voice), np.ones(2400)/2400, mode="same")
duck = 1 - 0.65 * np.clip(venv / 0.05, 0, 1)
menv = np.zeros(len(mix), dtype=np.float32); cur = 0.0; ev = sorted(music_ev, key=lambda e: e[0])
for k, (at, target, fd) in enumerate(ev):
    i0 = int(at*SR); i1 = int(ev[k+1][0]*SR) if k + 1 < len(ev) else len(menv)
    if i1 <= i0: continue
    nf = max(1, int(fd*SR)); n = i1 - i0
    ramp = cur + (target - cur) * np.clip(np.arange(n) / nf, 0, 1)
    menv[i0:i1] = ramp; cur = float(ramp[-1])
if menv.any():
    m = music_bed(len(mix) / SR).astype(np.float32)[:len(mix)]
    mix[:len(m)] += m * menv[:len(m)] * 0.075 * duck[:len(m)]
mix = mix[:int(total*SR)]
mix /= max(1.0, np.abs(mix).max() / 0.97)
sf.write(os.path.join(out, "audio.wav"), mix, SR)

title_t = next((x["t0"] for x in segs if x["kind"] == "title"), 5.0)
json.dump(dict(fps=FPS, duration=round(total, 3), topic=EP["topic"], poster_t=round(title_t + 3.6, 2), segments=segs), open(os.path.join(out, "timeline.json"), "w"))
print(f"segments={len(segs)} duration={total:.1f}s ({total/60:.1f} min)")
if os.environ.get("SITCOM_DEBUG"):
    print("music events (t, gain, fade):", [(round(x, 2), g, f) for x, g, f in music_ev])
    print("sfx events:", [(round(x, 2), n) for x, n, _ in sfx_events])
