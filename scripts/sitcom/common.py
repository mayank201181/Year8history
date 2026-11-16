# Shared cast, season list, pronunciation rules and beat helpers for "Who Rules the Remote?".
# build.py / lint_episode.py / asr.py exec this file, then the episode file, in one namespace.
# Episode files set EP = dict(topic=..., logline=...) and call the helpers below.
# Writers: read WRITING.md first.
import re as _re

SHOW = "Who Rules the Remote?"
SHOW_CAPS = "WHO RULES THE REMOTE?"

VOICES = {
    "tara":     dict(voice="af_heart", speed=1.06, lang="en-us"),
    "mum":      dict(voice="bf_emma", speed=1.08, lang="en-gb"),
    "dad":      dict(voice="bm_george", speed=1.0, lang="en-gb"),
    "ticktock": dict(voice="bm_fable", speed=0.96, lang="en-gb", pitch=-1.0),
    "teacher":  dict(voice="af_sarah", speed=1.02, lang="en-us"),
    "uncle":    dict(voice="am_michael", speed=1.0, lang="en-us", pitch=-1.0),
    "guide":    dict(voice="am_puck", speed=1.1, lang="en-us"),
    "narrator": dict(voice="bf_isabella", speed=0.95, lang="en-gb"),
}
CHALLENGE_VOICE = "ticktock"   # who reads the pause challenges

# Season 1 running order = the app's topic order (lib/topics/meta.ts).  (num, topic id, short topic name, episode title)
SEASON = [
    (1, "historians-toolkit", "Historian's Toolkit", "Sources Say Dad Did It"),
    (2, "william-i", "William I", "1066 And All That Remote"),
    (3, "king-john", "King John", "Bad King Dad"),
    (4, "henry-viii", "Henry VIII", "The Break With Remote"),
    (5, "hitler-rise", "Hitler's Rise", "Emergency Powers"),
    (6, "mao-rise", "Mao's Rise", "The Long March To The Sofa"),
    (7, "pol-pot", "Pol Pot", "Why We Remember"),
    (8, "french-revolution", "French Revolution", "Let Them Eat Kaya Toast"),
    (9, "womens-suffrage", "Women's Suffrage", "Deeds Not Words, Dad"),
]
# Episodes that must handle persecution / genocide / famine: lint insists on a solemn() beat.
SERIOUS_TOPICS = {"hitler-rise", "mao-rise", "pol-pot"}

CHARACTERS = set(VOICES)
SETS = {"living", "kitchen", "classroom", "hawker", "park", "mall", "museum"}  # + confess_<character>
MOODS = {"neutral", "happy", "excited", "deadpan", "annoyed", "shock", "smug", "thinking", "worried", "sad",
         "determined", "teach", "bored", "eyeroll", "flustered", "solemn"}
SHOTS = {"close", "two", "wide"}
# placard may carry its own text: prop="placard:DEEDS NOT WORDS" (max 16 chars)
PROPS = {"phone", "tablet", "book", "plate", "map", "crown", "scroll", "quill", "ballot", "remote", "placard",
         "cushion", "teacup"}
WEARABLES = {"crown", "helmet", "sash", "liberty"}
SFX_NAMES = {"ding", "buzzer", "scratch", "trombone", "poof", "whoosh", "tick", "door", "drawer", "fanfare", "bell", "sand", "gavel"}

# ---------------------------------------------------------------------------
# Pronunciation.  Write NORMAL spelling in L(...) text (subtitles show it as written);
# spoken() rewrites it for Kokoro: respellings below, then numbers/years/dates to words.
# Add new names here (test with:  python3 say.py "Name in a sentence").
# ---------------------------------------------------------------------------
SAY = {
    # people
    "Ætheling": "Atheling", "Aetheling": "Atheling",
    "Robespierre": "Robes-pee-air",
    "Zedong": "Zuh-dong",
    "Sihanouk": "See-a-nook",
    "Emmeline": "Emma-leen",
    "Führer": "Few-rer", "Fuhrer": "Few-rer",
    "Lanfranc": "Lanfrank",
    "Ms": "Miz",
    "Henry VIII": "Henry the Eighth", "Henry VII": "Henry the Seventh", "Henry II": "Henry the Second",
    "Louis XVI": "Louis the Sixteenth", "Louis XIV": "Louis the Fourteenth",
    "William I": "William the First", "Richard I": "Richard the First", "Philip II": "Philip the Second",
    "Edward VI": "Edward the Sixth", "Elizabeth I": "Elizabeth the First", "Elizabeth II": "Elizabeth the Second",
    "George V": "George the Fifth", "Pope Innocent III": "Pope Innocent the Third",
    # places & groups
    "Bayeux": "Bye-yur",
    "Pevensey": "Pev-un-zee",
    "Domesday": "Doomsday",
    "Khmer": "Kuh-mair",
    "Phnom Penh": "Puh-nom Pen",
    "Guomindang": "Gwo-min-dang", "Kuomintang": "Kwo-min-tang",
    "Versailles": "Vair-sigh",
    "Bastille": "Bah-steel",
    "Bouvines": "Boo-veen",
    "Weimar": "Vy-mar",
    "sans-culottes": "sahn-koo-lot", "Sans-culottes": "Sahn-koo-lot",
    "Yan'an": "Yen-ahn", "Yanan": "Yen-ahn",
    "Mein Kampf": "Mine Kampf",
    "Gestapo": "Guh-stah-po",
    "fyrd": "feerd",
    # Singlish / food
    "Aiyoh": "Eye-yo", "Aiyah": "Eye-yah", "thosai": "toe-sigh", "Thosai": "Toe-sigh",
    "Vive": "Veev",
}

_ONES = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split()
_TENS = "_ _ twenty thirty forty fifty sixty seventy eighty ninety".split()
_ORD = {"one": "first", "two": "second", "three": "third", "five": "fifth", "eight": "eighth", "nine": "ninth", "twelve": "twelfth"}
_MONTHS = "January|February|March|April|May|June|July|August|September|October|November|December"

def _n2w(n):
    n = int(n)
    if n < 20: return _ONES[n]
    if n < 100: return _TENS[n // 10] + ("-" + _ONES[n % 10] if n % 10 else "")
    if n < 1000: return _ONES[n // 100] + " hundred" + (" and " + _n2w(n % 100) if n % 100 else "")
    for div, name in ((10**9, "billion"), (10**6, "million"), (1000, "thousand")):
        if n >= div:
            r = n % div
            return _n2w(n // div) + " " + name + ((" and " if r < 100 else " ") + _n2w(r) if r else "")
def _ordinal(n):
    w = _n2w(n)
    sep = "-" if "-" in w else " "
    head, _, last = w.rpartition(sep)
    last = _ORD.get(last) or (last[:-1] + "ieth" if last.endswith("y") else last + "th")
    return (head + sep if head else "") + last
def _year(n):
    n = int(n)
    if 2000 <= n <= 2009: return "two thousand" + (" and " + _n2w(n % 100) if n % 100 else "")
    if n < 1000 or n > 2099: return _n2w(n)
    hi, lo = divmod(n, 100)
    if lo == 0: return _n2w(hi) + " hundred"
    return _n2w(hi) + " " + ("oh " + _ONES[lo] if lo < 10 else _n2w(lo))
def _decade(m):
    w = _year(m[1])
    return (w[:-1] + "ies") if w.endswith("y") else (w + "s")

def spoken(text):
    """Display text -> what Kokoro is asked to say."""
    s = text
    for k in sorted(SAY, key=len, reverse=True):
        s = _re.sub(r"(?<![\w-])" + _re.escape(k) + r"(?![\w-])", SAY[k], s)
    s = s.replace("–", " to ").replace("—", ", ").replace("&", " and ").replace("%", " percent")
    s = _re.sub(r"\bc\. ?(?=\d)", "about ", s)
    s = _re.sub(r"\b(\d{1,2}) (" + _MONTHS + r")\b", lambda m: "the " + _ordinal(m[1]) + " of " + m[2], s)
    s = _re.sub(r"\b(\d{1,2})(st|nd|rd|th)\b", lambda m: _ordinal(m[1]), s)
    s = _re.sub(r"\b(1\d\d0|20\d0)s\b", _decade, s)                             # 1930s
    s = _re.sub(r"\b(\d{1,3}(?:,\d{3})+)\b", lambda m: _n2w(m[1].replace(",", "")), s)
    s = _re.sub(r"\b(\d+)\.(\d+)\b", lambda m: _n2w(m[1]) + " point " + " ".join(_ONES[int(d)] for d in m[2]), s)
    s = _re.sub(r"\b(1\d\d\d|20\d\d)\b", lambda m: _year(m[1]), s)              # years 1000-2099
    s = _re.sub(r"\b(\d+)\b", lambda m: _n2w(m[1]), s)
    return s

# ---------------------------------------------------------------------------
# Time-Board diagram helpers (return an SVG string for diagram=...).  The board is dark: light ink.
# ---------------------------------------------------------------------------
INK, GOLD, SKY, MINT, ROSE, LILAC = "#f8fafc", "#fcd34d", "#7dd3fc", "#86efac", "#fca5a5", "#c4b5fd"
def _esc(s): return str(s).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")

def timeline_svg(events, start, end, h=170, title=None, ends=True):
    """events: [(when, "label" or "two\nlines", colour?) ...] in time order. Drawn TO SCALE between start and
    end (plain numbers: years, or day counts). Labels go above/below the axis, stepping further out when
    they would collide. Keep labels short (<= ~16 chars per line); check with check_diagrams.mjs."""
    x0, x1 = 40, 480
    ay = (h + (20 if title else 0)) // 2 + 4
    X = lambda v: x0 + (x1 - x0) * (v - start) / float(end - start)
    out = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 {h}" font-family="sans-serif">']
    if title: out.append(f'<text x="260" y="17" fill="{GOLD}" font-size="15" text-anchor="middle">{_esc(title)}</text>')
    out.append(f'<line x1="{x0-14}" y1="{ay}" x2="{x1+16}" y2="{ay}" stroke="{INK}" stroke-width="3"/>'
               f'<path d="M{x1+14},{ay-7} L{x1+26},{ay} L{x1+14},{ay+7} Z" fill="{INK}"/>')
    if ends:
        for v in (start, end):
            out.append(f'<text x="{X(v):.1f}" y="{ay+18}" fill="#94a3b8" font-size="11" text-anchor="middle">{_esc(v)}</text>')
    placed = []   # (side, tier, xa, xb)
    for i, ev in enumerate(events):
        v, label = ev[0], str(ev[1]); col = ev[2] if len(ev) > 2 else [GOLD, SKY, MINT, ROSE, LILAC][i % 5]
        x = X(v); lines = label.split("\n"); wpx = max(len(l) for l in lines) * 7.6
        anchor = "start" if x - wpx / 2 < 8 else "end" if x + wpx / 2 > 512 else "middle"
        xa = x - 4 if anchor == "start" else x + 4 - wpx if anchor == "end" else x - wpx / 2
        xb = xa + wpx
        prefer = ["up", "down"] if i % 2 == 0 else ["down", "up"]
        choice = None
        for tier in (0, 1):
            for side in prefer:
                step = tier * (16 * len(lines) + 6)
                top = ay - 36 - step - (len(lines) - 1) * 16 if side == "up" else ay + 30 + step
                bot = ay - 18 - step if side == "up" else ay + 46 + step + (len(lines) - 1) * 16
                if top < (24 if title else 2) or bot > h - 2: continue
                if all(not (sd == side and tr == tier and xa < pb + 6 and pa < xb + 6) for sd, tr, pa, pb in placed):
                    choice = (side, tier); break
            if choice: break
        side, tier = choice or (prefer[0], 1)
        placed.append((side, tier, xa, xb))
        up = side == "up"; step = tier * (16 * len(lines) + 6)
        tip = ay + (-16 - step if up else 26 + step)
        out.append(f'<line x1="{x:.1f}" y1="{ay}" x2="{x:.1f}" y2="{tip}" stroke="{col}" stroke-width="2"/>'
                   f'<circle cx="{x:.1f}" cy="{ay}" r="6" fill="{col}"/>')
        tx = x - 4 if anchor == "start" else x + 4 if anchor == "end" else x
        for j, ln in enumerate(lines):
            yy = (ay - 22 - step - (len(lines) - 1 - j) * 16) if up else (ay + 42 + step + j * 16)
            out.append(f'<text x="{tx:.1f}" y="{yy}" fill="{col}" font-size="14" text-anchor="{anchor}">{_esc(ln)}</text>')
    out.append("</svg>")
    return "".join(out)

def cards_svg(cards, h=190, title=None):
    """cards: [("Heading" or "Two\\nlines", ["short line", ...], colour?) ...] — 2 to 4 side-by-side
    boxes (claimants, causes, before/after). Keep lines <= ~14 chars when there are 4 cards."""
    n = len(cards); gap = 10; w = (500 - gap * (n - 1)) / n; top = 28 if title else 4
    out = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 {h}" font-family="sans-serif">']
    if title: out.append(f'<text x="260" y="17" fill="{GOLD}" font-size="15" text-anchor="middle">{_esc(title)}</text>')
    for i, c in enumerate(cards):
        head, lines = str(c[0]).split("\n"), c[1]; col = c[2] if len(c) > 2 else [GOLD, SKY, MINT, ROSE][i % 4]
        x = 10 + i * (w + gap)
        out.append(f'<rect x="{x:.1f}" y="{top}" width="{w:.1f}" height="{h-top-4}" rx="10" fill="{col}" fill-opacity="0.12" stroke="{col}" stroke-width="2"/>')
        for j, hl in enumerate(head):
            out.append(f'<text x="{x+w/2:.1f}" y="{top+22+j*17}" fill="{col}" font-size="15" font-weight="bold" text-anchor="middle">{_esc(hl)}</text>')
        hy = top + 22 + 17 * (len(head) - 1)
        for j, ln in enumerate(lines):
            out.append(f'<text x="{x+w/2:.1f}" y="{hy+24+j*18}" fill="{INK}" font-size="13" text-anchor="middle">{_esc(ln)}</text>')
    out.append("</svg>")
    return "".join(out)

# ---------------------------------------------------------------------------
# Beats
# ---------------------------------------------------------------------------
B = []
def scene(id, cast, caption=None): B.append(dict(type="scene", id=id, cast=cast, caption=caption))
def L(who, text, **kw): B.append(dict(type="line", who=who, text=text, **kw))
def sfx(name, gap=0.0): B.append(dict(type="sfx", name=name, gap=gap))
def freeze(text, dur=2.6, s="scratch", narrator=""): B.append(dict(type="freeze", text=text, dur=dur, sfx=s, narrator=narrator))
def poof(who, x): B.append(dict(type="poof", who=who, x=x))
def wear(who, item=None): B.append(dict(type="wear", who=who, item=item))   # item=None takes it off
def card(text, sub="", dur=2.5): B.append(dict(type="card", text=text, sub=sub, dur=dur))
def solemn(title, lines, say, who="teacher", hold=2.0):
    """A quiet, respectful card for persecution / genocide / famine: no music, no jokes, no images.
    title: short heading; lines: up to 4 short facts shown on screen; say: what `who` says (voiced)."""
    B.append(dict(type="solemn", title=title, lines=list(lines), say=say, who=who, hold=hold))
def challenge(n, q, a, work, qs, as_): B.append(dict(type="challenge", n=n, q=q, a=a, work=work, qs=qs, as_=as_))
def confess(who, caption): scene("confess_" + who, [(who, 640)], caption)

def _ep():
    ep = globals().get("EP") or {}
    return next(r for r in SEASON if r[1] == ep["topic"])
def title(dur=5.0):
    num, _, _, t = _ep()
    B.append(dict(type="title", title=SHOW_CAPS, sub=f"Episode {num} · “{t}”", dur=dur))
def end_card(dur=4.0):
    num = _ep()[0]
    nxt = next((r for r in SEASON if r[0] == num + 1), None)
    sub = f"Next time: {nxt[2]} — “{nxt[3]}”" if nxt else "That's a wrap on Season 1!"
    B.append(dict(type="card", text=SHOW_CAPS, sub=sub, dur=dur))
