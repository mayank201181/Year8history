# Shared cast, season list and beat helpers for "Totally Raotional: The History Season".
# build.py / lint_episode.py exec this file, then the episode file, in one namespace.
# Episode files set EP = dict(topic=..., title=...) and call the helpers below.

VOICES = {
    "tara":    dict(voice="af_heart", speed=1.06, lang="en-us"),
    "mum":     dict(voice="bf_emma", speed=1.08, lang="en-gb"),
    "dad":     dict(voice="bm_george", speed=1.0, lang="en-gb"),
    "chrono":  dict(voice="am_fenrir", speed=0.95, lang="en-us", pitch=-2.5),
    "cashier": dict(voice="am_puck", speed=1.12, lang="en-us"),
    "teacher": dict(voice="af_sarah", speed=1.02, lang="en-us"),
    "uncle":   dict(voice="am_michael", speed=1.0, lang="en-us", pitch=-1.0),
}

# Season 1 running order = the app's topic order.  (num, topic id, short topic name, episode title)
SEASON = [
    (1, "historians-toolkit", "The Historian's Toolkit", "The Primary Suspect"),
    (2, "william-i", "William I & 1066", "The Norman Conquest Of The Sofa"),
    (3, "king-john", "King John & Magna Carta", "Bad King Dad"),
    (4, "henry-viii", "Henry VIII & the Tudors", "The Great Matter Of The Missing Mango"),
    (5, "power-of-monarchs", "How Kings Kept Power", "The Divine Right Of Dads"),
    (6, "weimar-germany", "Weimar Germany", "A Billion Marks For A Bread Roll"),
    (7, "hitler-rise", "Hitler's Rise to Power", "The Wrong Kind Of Popular"),
    (8, "mao-china", "Mao's China", "The Great Leap Backwards"),
    (9, "pol-pot", "Pol Pot & the Khmer Rouge", "Remembering Year Zero"),
    (10, "why-dictatorships", "Why Dictatorships Rise", "Crisis, Weakness And A Microphone"),
    (11, "french-revolution", "The French Revolution", "Let Them Eat Kaya Toast"),
    (12, "womens-suffrage", "Votes for Women", "Deeds Not Words, Mum"),
    (13, "democracy-rights", "Democracy & Human Rights", "One Person, One Vote, One Remote"),
]

CHARACTERS = set(VOICES)
SETS = {"living", "kitchen", "mall", "checkout", "classroom", "hawker", "park", "museum", "library"}  # + confess_<character>
MOODS = {"neutral", "happy", "excited", "deadpan", "annoyed", "shock", "smug", "thinking", "worried", "sad",
         "determined", "teach", "bored", "eyeroll", "serious"}
SHOTS = {"close", "two", "wide"}
PROPS = {"phone", "tablet", "cushion", "book", "plate", "map", "dice", "calculator", "compass", "paintroller",
         "crown", "scroll", "quill", "ballot", "placard", "newspaper", "remote"}
SFX_NAMES = {"ding", "buzzer", "scratch", "trombone", "poof", "whoosh", "tick", "door", "drawer", "fanfare", "gong"}

B = []
def scene(id, cast, caption=None): B.append(dict(type="scene", id=id, cast=cast, caption=caption))
def L(who, text, **kw): B.append(dict(type="line", who=who, text=text, **kw))
def sfx(name, gap=0.0): B.append(dict(type="sfx", name=name, gap=gap))
def freeze(text, dur=2.6, s="scratch", narrator=""): B.append(dict(type="freeze", text=text, dur=dur, sfx=s, narrator=narrator))
def poof(who, x): B.append(dict(type="poof", who=who, x=x))
def card(text, sub="", dur=2.5): B.append(dict(type="card", text=text, sub=sub, dur=dur))
def challenge(n, q, a, work, qs, as_): B.append(dict(type="challenge", n=n, q=q, a=a, work=work, qs=qs, as_=as_))
def confess(who, caption): scene("confess_" + who, [(who, 640)], caption)
# Sensitive history: serious(True) fades the music bed out and suppresses comic SFX/freeze-frames
# until serious(False). Use it for atrocities, genocide, persecution, famine.
def serious(on=True): B.append(dict(type="serious", on=bool(on)))

def _ep():
    ep = globals().get("EP") or {}
    row = next(r for r in SEASON if r[1] == ep["topic"])
    return row
def title(dur=5.0):
    num, _, _, t = _ep()
    B.append(dict(type="title", title="TOTALLY RAOTIONAL", sub=f"The History Season · Episode {num} · “{t}”", dur=dur))
def end_card(dur=4.0):
    num = _ep()[0]
    nxt = next((r for r in SEASON if r[0] == num + 1), None)
    sub = f"Next time: {nxt[2]} — “{nxt[3]}”" if nxt else "That's a wrap on the History Season!"
    B.append(dict(type="card", text="TOTALLY RAOTIONAL", sub=sub, dur=dur))
