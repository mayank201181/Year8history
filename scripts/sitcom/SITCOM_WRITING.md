# Writing an episode — "Totally Raotional: The History Season"

One animated, voiced ~6–8 minute sitcom episode per topic, rendered to MP4 and shown in the topic's
**Watch** tab ("perfect for dinner"). Same family and engine as the Maths season (see
`reference/percentages.py` and `reference/ratio-proportion.py` for the exact format and comic rhythm —
read both fully before writing). Helpers and the allowed characters / sets / moods / props / SFX are in
`common.py`. Check with `python3 lint_episode.py episodes/<topic>.py` — **0 errors** required; fix
warnings where sensible.

## Cast (Indian-origin family in Singapore)
- **Tara Rao** (12, deadpan, the only sane person in the house, secretly loves history). Narrates
  confessionals. Voice of reason.
- **Mum** (Priya Rao — deal hunter, competitive, organises everything, fierce about fairness; great for
  suffrage/rights episodes).
- **Dad** (Vikram Rao — "self-described history buff" who learned everything from movies, memes and one
  documentary he half-watched; confidently wrong, keeps declaring himself king of the house; never cruel).
- **Chrono** (`chrono`) — the new sidekick: a grumpy, ~950-year-old talking **hourglass monster** who lives
  in the grandfather clock / junk drawer and appears with `poof("chrono", x)`. Claims to have "been there"
  for everything since 1066 ("Well. My sand was."), bored and sarcastic but a brilliant, precise teacher.
  Has opinions about historians who don't check provenance. Catchphrases you may use sparingly: "Check
  your sources." / "That's a myth. Next." He replaces Centi from the Maths season.
- Bit parts: `teacher` (Ms Lim, history teacher), `uncle` (Uncle Hock, hawker-stall uncle with strong
  opinions), `cashier` (Kai).
- No historical figures appear as characters. Dad may *re-enact* a king (with the `crown` prop) for
  comedy in the Kings episodes. **Nobody ever re-enacts or impersonates Hitler, Mao or Pol Pot.**

## Teaching content
- The episode must teach the topic's core content (see `lib/topics/meta.ts` for its sections; cover the
  must-know points: key dates, people, causes/consequences, the enquiry question and a judgement), using
  the holo-**board** for dates, names, timelines, cause chains, tables (≤44 chars per board line; ≤5 lines
  then `boardClear=True`; optional `diagram=` SVG `viewBox="0 0 520 H"` with H 120–280).
- Historically **accurate**: every date and fact must be right; estimates said as estimates; myths named
  as myths ("That's a myth. Next.").
- Exactly **three** `challenge()` pause-challenges (the viewer pauses and answers): short answer (≤14
  chars) on screen, spoken question `qs` and spoken answer `as_` with a one-line why.
- Structure like the reference: cold open (family situation that mirrors the history — e.g. Dad conquers
  the sofa / remote), `title()`, Act 1 Chrono teaches, Act 2 out in Singapore (hawker centre, mall,
  museum, library, classroom, park), Act 3 home with the payoff, Chrono's recap confessional (5 numbered
  points), tag scene, `end_card()`.

## Spoken-text rules (TTS)
- **No digits** in spoken text. Years as people say them: "ten sixty six", "twelve fifteen", "fifteen
  thirty four", "nineteen thirty three", "seventeen eighty nine", "nineteen eighteen", "nineteen forty
  eight"; centuries in words ("the eleventh century"). Boards/freeze/challenge `q`/`a` may use digits.
- Keep real spellings of names in spoken text (Hardrada, Hindenburg, Stresemann, Robespierre, Pankhurst).
  The engine owner may later add phonetic respellings in `build.py` if the TTS mispronounces them.
- No interjections like "Ugh", "Hmm". Short lines (≤ ~250 chars). 110–150 lines total; aim for 4,500–6,500
  spoken characters.

## Tone and sensitivity — read carefully
- Comedy comes from the **family** (Dad's confident wrongness, Mum's competitiveness, Tara's deadpan,
  Chrono's sarcasm) and from everyday Singapore life — **never from victims, atrocities or suffering**.
- For atrocities (Harrying of the North, the Terror, Nazi persecution and the Holocaust, the Great Famine,
  the Khmer Rouge genocide): call `serious()` before and `serious(False)` after; moods `serious`/`sad`;
  no SFX gags, no freeze-frame jokes, no puns inside that segment; facts stated plainly and
  age-appropriately (no graphic detail); a respectful beat afterwards before comedy resumes.
- `hitler-rise`, `pol-pot` (and the Holocaust part of any episode): the B-plot comedy must be gentle and
  clearly separate (e.g. a school-council election, a family argument about fairness). `pol-pot` is a
  **"very special episode"**: mostly serious, framed around Tara preparing a respectful school
  presentation, with warmth rather than gags; lighter family moments only at the start and end.
- No present-day party politics or opinions on current governments (Singapore, China, Cambodia, UK).
- Vegetarian household: any food is vegetarian (prata, dosa, kaya toast, mango, biryani with paneer…).
