# Writing an episode of "Who Rules the Remote?" — brief for script writers

One episode per history topic, ~7–9 minutes, rendered by this pipeline. The pilot
`episodes/william-i.py` is the reference: copy its shape, rhythm and helper usage.
Before writing, read your topic's entry in `lib/topics/meta.ts` (sections + what they must cover) and
`docs/CONTENT.md` (accuracy, balance, sensitivity). Then:

```bash
cd scripts/sitcom
python3 lint_episode.py episodes/<topic>.py     # must show 0 errors (fix warnings too)
node check_diagrams.mjs <topic>                 # look at out/diagrams/<topic>.png — nothing overlapping
python3 say.py --voice ticktock "Any new name"  # pronunciation check (phonemes + Whisper)
./make_episode.sh <topic>                       # build + ASR + render + encode (~13 min for 9 min of video)
```

## 1. The show

The year's theme is **Dictatorship and Democracy**. The running family gag is **the power struggle
over the living-room TV remote**: Dad claims it by divine right, the kids want a family charter, Mum
calls elections, Paati (Dad's mother, in Chennai, never seen) is the old power. Each episode's remote
plot **parallels the real history**, while the cast teach the real history accurately. Set in a
Singapore HDB flat (living room with the TV, kitchen with the junk drawer), Tara's school, Uncle Hock's
hawker stall, a park, Sofa Kingdom at the mall, and the National Museum's Gallery 8.

## 2. Cast (ids are what you pass to `L()` / `scene()`)

| id | who | voice & personality |
|---|---|---|
| `tara` | Tara Rao, 12 | Deadpan, sharp, the show's historian. Draws the remote/history parallels. Confessional lower third: `TARA RAO · 12 · …` |
| `mum` | Anjali Rao | Practical, organised, counts everything, calls votes and councils. Not a pushover. |
| `dad` | Vikram Rao | Self-appointed King of the Remote. Grand claims, "divine right", schemes, always smug, always loses in the end. Lovable, never cruel. |
| `ticktock` | Ticktock | 900-year-old antique hourglass from the kitchen junk drawer (made c. 1126). Pompous, old-fashioned British, loves "In my day…". Sand flows when he talks. Claims he "was there" at everything; gets **flustered** when caught. Reads the pause challenges. Appears with `poof()` (sand burst). |
| `teacher` | Ms Lim | Tara's history teacher. Warm, precise, asks for judgements. **Handles every serious moment.** |
| `uncle` | Uncle Hock | Hawker, stands behind his stall (x≈1000 in `hawker`). Light Singlish ("can", "lah" sparingly). |
| `guide` | Museum guide | Enthusiastic, corrects Ticktock with facts. Stands at x≈1000 in `museum`. |
| `narrator` | Narrator (voice only) | Never on stage. Use in `solemn(..., who="narrator")` or `L(..., offstage=True)`. |

Positions: x from 200 to 1080, at least 200 apart. Ticktock is wide: give him ≥ 260 px from neighbours.

## 3. Script format (helpers from `common.py`)

```python
EP = dict(topic="king-john", logline="One or two sentences shown in the app.")
scene(set_id, [("tara", 260), ("dad", 620)], caption=None)   # sets: living kitchen classroom hawker park mall museum
L(who, "Normal spelling, digits for years OK.", mood="deadpan", shot="close",
  prop="remote", board="Time-Board line ≤ 44 chars", boardClear=True, diagram=SVG, gap=0.4, offstage=False)
poof("ticktock", 840)                 # sand-burst entrance (after sfx("drawer") in the kitchen)
wear("dad", "crown")  /  wear("dad")  # put on / take off: crown helmet sash liberty (persists across scenes)
sfx("fanfare")                        # ding buzzer scratch trombone poof whoosh tick door drawer fanfare bell sand gavel
freeze("CROWNED IN ONE DAY", 2.4, narrator="Narrator: one line, ≤ 60 chars.")   # text ≤ 22 chars
confess("dad", "VIKRAM RAO · Dad · Duke Of The Sofa")     # talking-head confessional
card("MEANWHILE, AT HOME", "subtitle", 2.2)                # scene-change title card
solemn("Title", ["≤ 4 short facts on screen"], "What Ms Lim says.", who="teacher")   # see §7
title() / end_card()                  # exactly once each; end_card() is the last beat
challenge(n, q, a, work, qs, as_)     # exactly 3, at the end (q/a/work shown; qs/as_ spoken)
```

- **moods**: neutral happy excited deadpan annoyed shock smug thinking worried sad determined teach bored
  eyeroll **flustered** (blush + sweat; Ticktock's monocle pops off) **solemn** (quiet, respectful).
- **shots**: `close` (default; speaker framed, shifts aside when the board is up), `two`, `wide`.
- **props** (held while speaking): remote crown scroll quill ballot book map phone tablet plate cushion
  teacup, and `placard:YOUR TEXT` (≤ 16 chars, e.g. `placard:DEEDS NOT WORDS`).
- **wearables** (persist until removed): `crown` (also fits Ticktock), `helmet` (Norman, nasal guard),
  `sash` (purple/white/green suffrage sash), `liberty` (red revolutionary cap with cockade).
  **Never** dress anyone as Hitler, Mao or Pol Pot or in any uniform/armband of their regimes.

## 4. Structure and comedic rhythm (≈ 65–80 lines)

1. **Cold open** (living room, 8–12 lines): a remote-power crisis that mirrors the topic's core idea.
   Tara names the parallel in one dry line. **Freeze-frame** on the absurd claim + a Narrator caption.
   Tara confessional (1–2 lines). Then `title()`.
2. **Act 1** (kitchen): `sfx("drawer")` → `poof("ticktock", 840)` → `sfx("sand")`. Ticktock claims he
   was there; Tara catches him; he is flustered (**the source-reliability gag**, §5). Ticktock
   confessional (one funny biography line). Then Ticktock teaches the background with the Time-Board,
   Tara mapping each historical person to a family member. A Dad confessional (deluded, smug).
3. **Act 2** (school / museum / hawker / park, the main teaching): Ms Lim or the guide + Ticktock
   teach the core events with timelines and diagrams; at least one source/provenance moment; one
   **judgement** question answered by Tara as a model historian ("X mattered most because…").
4. **MEANWHILE, AT HOME** (short): the family plot plays out the same move the history just showed
   (feigned retreat, a charter, a break with Rome…). Freeze-frame + Narrator caption.
5. **Act 3**: consequences and how power was kept/limited; any **serious material in its own beat**
   (§7). Finish the enquiry: Tara states the episode's answer to the strand question.
6. **Recap**: Ticktock confessional, five numbered board lines (`1.`–`5.`), one sentence each.
7. **Tag** (living room, 5–7 lines): teases next episode (the end card names it). Ticktock's age joke
   lands here when it can.
8. `card("PAUSE CHALLENGE", "Ticktock gives you 5 seconds. …", 3.0)` + 3 challenges + `end_card()`.
   Challenges: one recall (date/name), one cause/consequence, one source or interpretation question.
   `a` ≤ 18 chars; `work` ≤ 60 chars; answers can end with a Dad-burn ("go and sit with Dad").

Rhythm: setup → teach → family punchline every 3–4 lines; nobody talks for more than ~3 lines in a row
except in recap; keep most lines under 180 characters (split longer ones). Confessionals are short.

**Length**: 5,000–6,800 spoken characters (lint counts them) ≈ 7–9 minutes. The pilot is ~6,900 → 9.0 min (its upper limit).

## 5. Ticktock's running gag = a source-reliability lesson

He is ~900 years old (made c. 1126; 89 in 1215). Every episode he claims to have witnessed something;
Tara (or Ms Lim / the guide) tests the claim like a historian, he gets `flustered`, sand pours. Rotate:
- **Wasn't born yet** (1066): eyewitness vs hearsay ("My grandfather was a sundial").
- **Could have been there, but…** (1215, 1534): possible ≠ proven; corroborate with other sources.
- **Details wrong**: John *sealed* Magna Carta, he didn't sign it; it's embroidery, not tapestry.
- **Myth repeated**: "let them eat cake" (Marie Antoinette almost certainly never said it), Luding
  Bridge heroics, arrow-in-the-eye → legend vs evidence.
- **Biased witness**: he was owned by a king/duke, so whose side is his story on? (provenance, purpose).
- **Hindsight**: "Everyone knew it would happen!" — they didn't.
- **Can't vote**: claims he voted in 1918 → who was allowed to vote? (franchise).
In the Hitler, Mao and Pol Pot episodes his exaggeration gag happens **only before** the serious
material and never about victims; in Pol Pot he does not claim to have been there at all (§7).

## 6. The Time-Board

`board=` adds a text line (≤ 44 chars; ✔ shows green, ✘/NOT red); `boardClear=True` wipes it first.
Max 5 lines, or 3 with a diagram. Clear the board at each new idea. The board covers the top half of
one side of the frame (the renderer picks the side that hides fewest faces, never the speaker's): in
board-heavy teaching scenes keep the cast to two or three, with the teacher/Ticktock speaking. `diagram=` shows an SVG under the
lines (one at a time). Helpers (light ink on the dark walnut board, already styled):

```python
timeline_svg([(1066.01, "Edward dies\n5 Jan"), (1066.785, "Hastings\n14 Oct")], 1066, 1067,
             h=180, title="1066, to scale")     # to scale; labels auto-placed above/below
# timeline labels: ≤ 2 lines of ≤ ~16 chars; events closer than ~60 px need short labels or a taller h
cards_svg([("Harold\nGodwinson", ["Earl of Wessex", "chosen by", "the Witan"]), ...], h=200)  # 2–4 boxes
```

Hand-made SVG: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 H">` with H 120–280,
`font-family="sans-serif"`, font-size 13–15, light colours (`#f8fafc #fcd34d #7dd3fc #86efac #fca5a5
#c4b5fd`, fills with `fill-opacity` ≤ 0.25), no images, scripts or `href`. Timelines to scale (or say
"not to scale"); maps schematic and honest; real figures only; **no swastikas or other hate symbols, no
pictures of real people.** Always check `out/diagrams/<topic>.png` for overlaps and clipping.

## 7. Tone rules (non-negotiable)

- **Accurate history** to the `docs/CONTENT.md` standard: textbook dates and facts, uncertain numbers as
  ranges ("an estimated 1.5 to 2 million"), myths labelled as myths, no invented quotations, balanced
  where historians disagree (say so). Cover your topic's `meta.ts` sections at the level a Year 8 needs.
- **Comedy comes from the family, never from atrocities, victims or suffering.** Dad's tyranny stays
  domestic and silly (remote, snacks, chores). Dad is never compared to Hitler, Mao or Pol Pot as a
  person; the parallel is the *mechanism* (a crisis, a weak "government", a big promise, "temporary"
  emergency powers that are never handed back) — and it **stops** before persecution is discussed.
- **Hitler, Mao, Pol Pot episodes** (lint requires a `solemn()` beat): persecution, the Holocaust,
  the Great Leap Forward famine, the Cambodian genocide are handled by **Ms Lim (or the Narrator) in a
  `solemn()` card**: music stops, a bell, a candle, short factual lines, victims' humanity and *why we
  remember*. Use mood `solemn` around it; no punchline for at least the next three lines; no gags,
  freeze-frames or `flustered` in that act. No graphic detail. Never reproduce propaganda slogans in a
  persuasive way; describe their purpose. Never draw hate symbols. Pol Pot ("Why We Remember") is the
  most serious: keep the family humour to the cold open and tag, gentle and unrelated to Cambodia;
  Ticktock says plainly he wasn't there and that survivors' testimony matters (oral history).
  Other violent moments (e.g. the Harrying of the North, executions in 1793) also get a straight,
  respectful treatment — see the pilot's `solemn()`.
- **Vegetarian food only** (prata, thosai, kaya toast, murukku, vegetable bee hoon, teh tarik…). Lint warns
  on meat words.
- **Singapore setting**: HDB flat, hawker centre, MRT, Deepavali/CNY/Hari Raya; Singapore history links
  only where natural and true (1942–45 Occupation, 1948 Legislative Council election, 1959, 1965).
- Subtitles show your text exactly: **British spelling**, proper punctuation, no slang spellings.
  Warm and clever, never babyish; the viewer is a capable 12–13-year-old.

## 8. Pronunciation (Kokoro TTS) — tested rules

Write **normal spelling**. `common.spoken()` fixes the audio only (subtitles keep your text):

- **Years**: write digits. `1066` → "ten sixty-six", `1215` → "twelve fifteen", `1933` → "nineteen
  thirty-three", `1905` → "nineteen oh five", `2005` → "two thousand and five", `2026` → "twenty
  twenty-six". Without this Kokoro says "one thousand and sixty-six".
- **Dates**: `14 October 1066` → "the fourteenth of October ten sixty-six". `11th century` → "eleventh
  century". `1930s` → "nineteen thirties". `1069–1070` (en dash) → "to". Other numbers: digits are
  read as words (`20,000`, `1.5`); small numbers read better written as words.
- **Respellings already in `SAY`** (tested with phonemes + Whisper): Ætheling→Atheling,
  Robespierre→Robes-pee-air, Zedong→Zuh-dong, Khmer→Kuh-mair, Phnom Penh→Puh-nom Pen,
  Guomindang→Gwo-min-dang, Kuomintang→Kwo-min-tang, Bayeux→Bye-yur, Pevensey→Pev-un-zee,
  Domesday→Doomsday, Versailles→Vair-sigh, Bastille→Bah-steel, Bouvines→Boo-veen, Weimar→Vy-mar,
  Sihanouk→See-a-nook, Emmeline→Emma-leen, Führer→Few-rer, Gestapo→Guh-stah-po,
  sans-culottes→sahn-koo-lot, Yan'an→Yen-ahn, Mein Kampf→Mine Kampf, Lanfranc→Lanfrank, Ms→Miss
  (Kokoro says "em ess"; "Miz Lim" was heard as "Muslim"), thosai→toe-sigh, Aiyoh→Eye-yo.
  **Fine as written**: Hardrada, Harald/Harold, Godwinson, Tostig, Harthacnut, Witan, Hastings, Stamford
  Bridge, Normandy, Pankhurst, Fawcett, Emily Wilding Davison, suffragette/suffragist, Magna Carta,
  Runnymede, Hindenburg, Reichstag, Kristallnacht, Nazi, Chiang Kai-shek, Pol Pot, Lon Nol, Tuol Sleng,
  Saloth Sar, Danton, guillotine, Marie Antoinette, Anne Boleyn, murukku, kaya.
- **Regnal numbers**: `Henry VIII`, `Louis XVI`, `William I`, `Richard I`, `Pope Innocent III` etc. are
  in `SAY`. Others: add them, or write "the Eighth". Lint errors on bare Roman numerals. Beware
  `William I` before a word like "think" (it becomes "William the First think") — rephrase.
- New names: `python3 say.py --voice <who> "Name in a sentence"`; if the phonemes look wrong, add a
  respelling to `SAY` (hyphens split syllables; it changes only the audio). Whisper can't spell
  respelled foreign names, so asr.txt flags them harmlessly — listen to anything else it flags.
- Avoid: "nought" (heard "not"), interjections (Ugh, Hmm, Ahem, Pfft; "Ha!" came out as "Half",
  "Ooh" as "Ua" — use Oh, Yes, Well), abbreviations with dots (Mr., St.), symbols (/, +, =),
  ALL-CAPS words you don't want spelled out.

## 9. Before you hand over

- [ ] `lint_episode.py` 0 errors, 0 warnings; spoken length 5,000–6,800.
- [ ] `check_diagrams.mjs` sheet looked at; no overlaps or clipped labels.
- [ ] Every fact checked against `meta.ts`/`CONTENT.md`-level sources; uncertain numbers as ranges.
- [ ] Serious material in `solemn()`; no jokes near it; no hate symbols; no dictator costumes.
- [ ] After rendering: read `out/<topic>/asr.txt`; extract frames
      (`ffmpeg -ss 120 -i public/videos/<topic>.mp4 -frames:v 1 f.jpg`) and look for overlaps/cut-offs;
      then `python3 gen_manifest.py`.

## 10. Season plan (suggested remote parallels — check every fact against `meta.ts` / the topic guide)

| # | topic · title | family/remote parallel | must-teach highlights | Ticktock gag |
|---|---|---|---|---|
| 1 | historians-toolkit · *Sources Say Dad Did It* | The remote vanishes; Tara investigates Dad, Mum and the crumbs like a historian. Introduces the remote war: absolute vs limited power, votes. | Chronology (BC/AD, 1066 = 11th century), primary vs secondary, inference, NOP provenance, interpretations, causation, significance, PEEL, key concepts (monarchy, dictatorship, democracy). | First meeting: his own "testimony" is put through NOP. |
| 2 | william-i · *1066 And All That Remote* | **Done (pilot).** Paati leaves without an heir; Mum crowned by family council; Dad's feigned retreat; feudal channels; Mum's Domesday. | — | Wasn't born yet (hearsay). |
| 3 | king-john · *Bad King Dad* | Dad loses battles, taxes pocket money, fights "the Pope" (Paati on video call: no TV for anyone = interdict); the family barons force a charter at the void deck; Dad breaks it. | Angevins, Arthur, loss of Normandy 1204, taxes/scutage, Interdict 1208–14, excommunication 1209, Bouvines 1214, Magna Carta 15 June 1215 (sealed, not signed; for free men; annulled within weeks; reissued 1216/1217/1225), First Barons' War, John dies 1216; "Bad King John" vs modern view. | Could have been there (age 89) — but says John "signed" it. |
| 4 | henry-viii · *The Break With Remote* | Dad wants a new TV, Paati says no, so Dad declares himself Supreme Head of the Remote and "dissolves" the snack cupboard. | Need for a male heir, Catherine of Aragon, Anne Boleyn, break with Rome, Act of Supremacy 1534, Dissolution of the Monasteries 1536–41, Pilgrimage of Grace, Cromwell, six wives (mnemonic fine; no gore jokes about executions). | Claims he was Henry's favourite hourglass — owned by the king, so a biased witness. |
| 5 | hitler-rise · *Emergency Powers* | Power cut: Dad demands "temporary emergency powers" over the remote and never hands them back; Mum invokes house rules. Parallel **stops** before persecution. | Weimar weaknesses, Versailles, 1923 hyperinflation, 1929 Depression, Nazi vote share (real figures), appointed Chancellor 30 Jan 1933 (legal, not a coup), Reichstag Fire, Enabling Act March 1933, Night of the Long Knives 1934, Hindenburg dies → Führer; propaganda analysed, not reproduced. `solemn()`: persecution of Jewish people, Nuremberg Laws 1935, Kristallnacht 1938, leading to the Holocaust (about six million Jewish people murdered). | Only early, about something harmless (exaggerates a 1923 bread price; corroborate). |
| 6 | mao-rise · *The Long March To The Sofa* | The kids' long detour around the flat to reach the sofa while Dad blockades it. | 1911 revolution, warlords, Guomindang vs CCP, 1927 Shanghai massacre, Jiangxi, Long March 1934–35 (most who set out did not complete it), Yan'an, Japan 1937–45 (Singapore's Occupation 1942–45 as context), civil war, PRC 1 October 1949, peasant support, cult of personality. `solemn()`: Great Leap Forward famine (tens of millions died; estimates vary). | Luding Bridge "heroics": legend vs evidence. |
| 7 | pol-pot · *Why We Remember* | Gentle family moment only at the start and end (e.g. Tara preparing a remembrance assembly); no remote gags about Cambodia. | French colony to 1953, Sihanouk, Vietnam War spillover and US bombing, Lon Nol 1970, Khmer Rouge take Phnom Penh 17 April 1975, cities emptied, "Year Zero", forced labour, persecution of the educated and minorities, Tuol Sleng (S-21); an estimated 1.5–2 million died (about a quarter of the population); Vietnam invades January 1979; later trials. Several `solemn()` beats. | None: he says he wasn't there and survivors' testimony is the evidence that matters. |
| 8 | french-revolution · *Let Them Eat Kaya Toast* | Breakfast at the hawker centre: Dad the absolute monarch, the kids (Third Estate) pay all the chores; a hawker-table "Tennis Court Oath"; storming the snack cupboard. Liberty caps (`wear(..., "liberty")`). | Estates, debt and bread prices, Estates-General, Tennis Court Oath, Bastille 14 July 1789, Declaration of the Rights of Man, march to Versailles, constitutional monarchy, republic 1792, Louis XVI executed 1793 (factual, no gore), the Terror and Robespierre (a `solemn()`-style straight beat), Napoleon 1799; who still couldn't vote (women). | Swears he heard Marie Antoinette say "let them eat cake" — a myth. |
| 9 | womens-suffrage · *Deeds Not Words, Dad* | Mum and Tara campaign for votes in the family remote election Dad says is "men only"; sashes and placards. Season finale: a real family constitution. | Suffragists (NUWSS 1897, Fawcett, peaceful) vs suffragettes (WSPU 1903, Pankhurst, militant), Emily Wilding Davison 1913 (respectfully), hunger strikes and force-feeding, Cat and Mouse Act 1913, First World War, 1918 Act (women over 30 meeting a property qualification; almost all men over 21), 1928 equal franchise; Singapore's 1948 election as a link. | Claims he voted in 1918 — hourglasses (and most women) couldn't. |
