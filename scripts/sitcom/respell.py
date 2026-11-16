"""Phonetic respellings for names Kokoro mispronounces. Applied to the TEXT SENT TO TTS only; subtitles keep the
real spelling. Used by build.py and asr.py (so the TTS cache key matches). Add entries after checking asr.txt, e.g.
    "Hardrada": "Hard-rah-dah",
Whole-word, case-sensitive match."""
import re

RESPELL = {
}

def respell(text):
    for k, v in RESPELL.items():
        text = re.sub(r"\b" + re.escape(k) + r"\b", v, text)
    return text
