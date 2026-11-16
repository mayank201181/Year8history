"""Static checks for an episode script.  Usage: python3 lint_episode.py episodes/<topic>.py [...]
Exit code 1 if any ERROR.  WARNs are worth fixing but don't block.
"""
import sys, os, re
import xml.etree.ElementTree as ET

HERE = os.path.dirname(os.path.abspath(__file__))

def load(path):
    ns = {}
    exec(open(os.path.join(HERE, "common.py")).read(), ns)
    exec(open(path).read(), ns)
    return ns

# checked on the SPOKEN text (after common.spoken(): respellings, years/dates/numbers -> words)
BAD_SPOKEN = [
    (r"[0-9]", "digits left after spoken() — write this number in words"),
    (r"[/×÷=^√π<>≤≥+#@*]", "symbol in spoken text — say it in words"),
    (r"\bnought\b", "say 'zero', not 'nought' (TTS says 'not')"),
    (r"\b(Sigh|Ugh|Hmm+|Pfft|Tsk|Argh|Ahem|Shh+|Ha|Hah|Aha|Ooh|Ooo+)\b", "interjection TTS mangles — use a real word (Oh, Yes, Well)"),
    (r"\b[IVX]{2,}\b", "Roman numeral — write 'Henry the Eighth' or add it to SAY in common.py"),
    (r"\bMr\.|\bDr\.|\bSt\.", "abbreviation with a dot ends the sentence early — write it out"),
]
# food must be vegetarian (the family is vegetarian)
MEAT = r"\b(chicken|beef|pork|mutton|lamb|bacon|ham|sausages?|fish|prawns?|shrimps?|crab|satay|char siew|bak kut teh|nasi lemak|anchov\w*|turkey|duck|steak|burgers?)\b"
SERIOUS_JOKE = r"\b(lol|haha|ha ha|hilarious|joke|funny|banter|lmao)\b"

def lint(path):
    errs, warns = [], []
    try:
        ns = load(path)
    except Exception as e:
        return [f"script does not run: {e!r}"], []
    B, EP, SP = ns["B"], ns.get("EP"), ns["spoken"]
    topic = (EP or {}).get("topic")
    if not EP or "topic" not in EP: errs.append("EP = dict(topic=...) missing")
    elif not any(r[1] == EP["topic"] for r in ns["SEASON"]): errs.append(f"unknown topic {EP['topic']}")
    elif os.path.basename(path) != EP["topic"] + ".py": errs.append("file name must be <topic>.py")
    if EP and not EP.get("logline"): warns.append("EP needs a logline (shown in the app)")
    kinds = [b["type"] for b in B]
    if kinds.count("title") != 1: errs.append("call title() exactly once")
    if kinds.count("challenge") != 3: errs.append("need exactly 3 challenge() beats")
    if not B or B[-1]["type"] != "card": errs.append("finish with end_card()")
    if topic in ns.get("SERIOUS_TOPICS", set()) and "solemn" not in kinds:
        errs.append("this topic covers persecution / atrocities: include at least one solemn() beat")
    if "ticktock" not in {b.get("who") for b in B if b["type"] in ("line", "poof")}: warns.append("Ticktock never appears")
    cast = set(); spoken = 0; n_lines = 0; board_n = 0; has_diag = False; in_solemn_zone = 0
    def check_spoken(where, who, t):
        s = SP(t)
        for pat, msg in BAD_SPOKEN:
            if re.search(pat, s): errs.append(f"{where} ({who}): {msg}: {s[:80]!r}")
        if re.search(MEAT, t, re.I): warns.append(f"{where} ({who}): food must be vegetarian — check: {t[:70]!r}")
    for i, b in enumerate(B):
        k = b["type"]; where = f"beat {i}"
        if k == "scene":
            sid = b["id"]
            if not (sid in ns["SETS"] or (sid.startswith("confess_") and sid[8:] in ns["CHARACTERS"])):
                errs.append(f"{where}: unknown scene {sid}")
            cast = {w for w, x in b["cast"]}
            for w, x in b["cast"]:
                if w not in ns["CHARACTERS"]: errs.append(f"{where}: unknown character {w}")
                if w == "narrator": errs.append(f"{where}: the narrator is a voice only — use solemn(..., who='narrator') or offstage=True")
                if not (180 <= x <= 1100): warns.append(f"{where}: x={x} for {w} near edge (use 200..1080)")
            xs = sorted(x for w, x in b["cast"])
            if any(b2 - a2 < 200 for a2, b2 in zip(xs, xs[1:])): warns.append(f"{where}: characters closer than 200px")
            if sid == "hawker":
                for w, x in b["cast"]:
                    if w == "uncle" and not (950 <= x <= 1060): warns.append(f"{where}: uncle should stand at x≈1000 behind the stall")
            if sid == "museum":
                for w, x in b["cast"]:
                    if w == "guide" and not (900 <= x <= 1080): warns.append(f"{where}: guide usually stands at x≈1000 by the display case")
            board_n = 0; has_diag = False
        elif k == "poof":
            if b["who"] not in ns["CHARACTERS"]: errs.append(f"{where}: unknown poof {b['who']}")
            cast.add(b["who"])
        elif k == "wear":
            if b["who"] not in ns["CHARACTERS"]: errs.append(f"{where}: unknown character {b['who']}")
            if b.get("item") and b["item"] not in ns["WEARABLES"]: errs.append(f"{where}: unknown wearable {b['item']} (one of {sorted(ns['WEARABLES'])})")
        elif k == "sfx":
            if b["name"] not in ns["SFX_NAMES"]: errs.append(f"{where}: unknown sfx {b['name']}")
        elif k == "solemn":
            in_solemn_zone = 3
            if b["who"] not in ns["CHARACTERS"]: errs.append(f"{where}: unknown solemn voice {b['who']}")
            if len(b["lines"]) > 4: errs.append(f"{where}: solemn card has more than 4 lines")
            for ln in b["lines"]:
                if len(ln) > 60: warns.append(f"{where}: solemn line long ({len(ln)}): {ln[:40]!r}")
            if len(b["title"]) > 34: warns.append(f"{where}: solemn title long")
            check_spoken(where, b["who"], b["say"]); spoken += len(b["say"])
            if re.search(SERIOUS_JOKE, b["say"], re.I): errs.append(f"{where}: no jokes in a solemn beat")
        elif k == "line":
            n_lines += 1
            w, t = b["who"], b["text"]; spoken += len(t)
            if w not in ns["CHARACTERS"]: errs.append(f"{where}: unknown speaker {w}")
            elif w not in cast and not b.get("offstage"): errs.append(f"{where}: {w} speaks but is not on stage (add to scene, poof, or offstage=True)")
            for kk in b:
                if kk not in ("type", "who", "text", "mood", "shot", "prop", "board", "boardClear", "diagram", "gap", "offstage"):
                    errs.append(f"{where}: unknown line option {kk}")
            if b.get("mood", "neutral") not in ns["MOODS"]: errs.append(f"{where}: unknown mood {b.get('mood')}")
            if b.get("shot", "close") not in ns["SHOTS"]: errs.append(f"{where}: unknown shot {b.get('shot')}")
            pr = b.get("prop")
            if pr:
                base, _, ptxt = pr.partition(":")
                if base not in ns["PROPS"]: errs.append(f"{where}: unknown prop {pr}")
                if ptxt and base != "placard": errs.append(f"{where}: only placard takes text (placard:TEXT)")
                if len(ptxt) > 16: errs.append(f"{where}: placard text > 16 chars")
            check_spoken(where, w, t)
            if in_solemn_zone and re.search(SERIOUS_JOKE, t, re.I): warns.append(f"{where}: jokey word right after a solemn beat — check the tone")
            in_solemn_zone = max(0, in_solemn_zone - 1)
            if len(t) > 330: warns.append(f"{where}: very long line ({len(t)} chars) — split it")
            if b.get("boardClear"): board_n = 0; has_diag = False
            if b.get("board"):
                board_n += 1
                if len(b["board"]) > 44: errs.append(f"{where}: board line > 44 chars: {b['board']!r}")
            if b.get("diagram"):
                has_diag = True
                d = b["diagram"]
                try:
                    root = ET.fromstring(d)
                    vb = root.get("viewBox", "")
                    if not root.tag.endswith("svg") or not vb.startswith("0 0 520 "): errs.append(f"{where}: diagram must be <svg viewBox=\"0 0 520 H\">")
                    elif not (120 <= float(vb.split()[3]) <= 280): errs.append(f"{where}: diagram height must be 120..280")
                    if "xmlns" not in d: errs.append(f"{where}: diagram needs xmlns=\"http://www.w3.org/2000/svg\"")
                    if re.search(r"(href=|<image|<script|url\()", d): errs.append(f"{where}: no external refs/images/scripts in diagram")
                    if re.search(r"swastika|卐|卍|SS runes", d, re.I): errs.append(f"{where}: no hate symbols in diagrams")
                except ET.ParseError as e:
                    errs.append(f"{where}: diagram SVG does not parse: {e}")
            limit = 3 if has_diag else 5
            if board_n > limit: errs.append(f"{where}: board has {board_n} text lines (max {limit}{' with a diagram' if has_diag else ''}) — use boardClear=True")
        elif k == "challenge":
            for f in ("qs", "as_"):
                check_spoken(f"{where} challenge {f}", "ticktock", b[f])
            if len(b["work"]) > 60: warns.append(f"{where}: challenge work text long ({len(b['work'])})")
            if len(b["a"]) > 18: warns.append(f"{where}: challenge answer should be short (<=18 chars)")
            spoken += len(b["qs"]) + len(b["as_"])
        elif k == "freeze":
            if len(b["text"]) > 22: warns.append(f"{where}: freeze text long")
            if len(b.get("narrator", "")) > 60: warns.append(f"{where}: freeze narrator caption long (one line ≈ 60 chars)")
    if not (4500 <= spoken <= 7000): warns.append(f"spoken length {spoken} chars (aim 5000-6800 ≈ 7-9 min)")
    if n_lines < 45: warns.append(f"only {n_lines} dialogue lines")
    return errs, warns

if __name__ == "__main__":
    bad = 0
    for p in sys.argv[1:]:
        e, w = lint(p)
        print(f"== {os.path.basename(p)}: {len(e)} errors, {len(w)} warnings")
        for x in e: print("  ERROR", x)
        for x in w: print("  WARN ", x)
        bad += bool(e)
    sys.exit(1 if bad else 0)
