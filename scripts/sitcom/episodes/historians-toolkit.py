# "Totally Raotional" History S01E01 "The Primary Suspect" (Topic: The Historian's Toolkit)
# Format and helpers: see common.py; check with lint_episode.py.

EP = dict(topic="historians-toolkit", logline="Mum's 'Ming vase' is smashed, Dad has an alibi witnessed by himself, and Chrono the hourglass monster wakes up to crack the case with sources, provenance, interpretations, causation and centuries.")

_T = '<text text-anchor="middle" font-family="sans-serif" '
_W = 'stroke="#f8fafc" stroke-width="3"'
CAUSE_CHAIN = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 180">' + ''.join(
    f'<rect x="{x - 75}" y="15" width="150" height="80" rx="8" fill="none" stroke="{c}" stroke-width="3"/><line x1="{x}" y1="95" x2="{x}" y2="115" {_W}/>'
    f'{_T}x="{x}" y="40" font-size="16" font-weight="bold" fill="{c}">{h}</text>{_T}x="{x}" y="63" font-size="15" fill="#f8fafc">{a}</text>{_T}x="{x}" y="83" font-size="15" fill="#f8fafc">{b}</text>'
    for x, c, h, a, b in [(80, "#fde047", "LONG-TERM", "wobbly shelf", "(3 years)"), (260, "#7dd3fc", "SHORT-TERM", "vase moved", "to the edge"), (440, "#fca5a5", "TRIGGER", "badminton", "smash")])
    + f'<line x1="157" y1="55" x2="174" y2="55" {_W}/><polygon points="183,55 173,49 173,61" fill="#f8fafc"/><line x1="337" y1="55" x2="354" y2="55" {_W}/><polygon points="363,55 353,49 353,61" fill="#f8fafc"/>'
    f'<line x1="80" y1="115" x2="440" y2="115" {_W}/><line x1="260" y1="115" x2="260" y2="133" {_W}/><polygon points="260,143 254,133 266,133" fill="#f8fafc"/>'
    f'{_T}x="260" y="170" font-size="19" font-weight="bold" fill="#86efac">= VASE IN 14 PIECES</text></svg>')

# ---------------- COLD OPEN ----------------
scene("living", [("tara", 300), ("mum", 760)])
L("mum", "Family meeting! Now! Somebody has broken my Ming vase!", mood="shock", shot="close")
L("tara", "The Ming vase. From the sale.", mood="deadpan", shot="close")
L("mum", "It was six hundred years old! Ming dynasty! It said so on the sticker!", mood="annoyed", shot="two")
L("tara", "The sticker also said dishwasher safe.", mood="deadpan", shot="close", gap=0.5)
scene("living", [("tara", 260), ("mum", 600), ("dad", 980)])
sfx("door")
L("dad", "What's all the shouting? I've been asleep all afternoon. Like an innocent baby.", mood="smug", shot="close")
L("mum", "Then why is there glue on both your thumbs?", mood="annoyed", shot="close")
L("dad", "I've taken up crafts. Since about a quarter past three.", mood="worried", shot="close")
freeze("\"ASLEEP ALL AFTERNOON\"", 2.6, narrator="Narrator: He took up crafts at exactly the wrong time.")
confess("tara", "TARA RAO · 12 · Only Sane Person In This House")
L("tara", "Every family has a mystery. Ours has a vase in fourteen pieces, and one suspect with sticky thumbs.", mood="deadpan")
L("tara", "Mum wants a confession. I want evidence. Luckily, I know someone very, very old.", mood="deadpan", gap=0.6)

title()

# ---------------- ACT 1: MEET CHRONO ----------------
scene("living", [("tara", 330)])
L("tara", "Grandma said, if you ever need a historian, knock three times on the grandfather clock. And never flip him.", mood="determined", shot="wide")
sfx("tick")
poof("chrono", 860)
L("chrono", "Who knocks. Oh. A child. Still the twenty first century? Wonderful. Wake me for the twenty second.", mood="bored", shot="close")
L("tara", "Someone broke Mum's vase. I need a historian.", mood="worried", shot="close")
L("chrono", "A mystery? Finally. Last time someone opened this clock, it was to hide a durian.", mood="smug", shot="close", gap=0.4)

confess("chrono", "CHRONO · Hourglass Monster · Approx. 950 Years Old · Checks Sources")
L("chrono", "I'm Chrono. An hourglass. I'm nine hundred and fifty, give or take. I've been there for everything since ten sixty six. Well. My sand has.", mood="bored")
L("chrono", "I've watched kings, battles and empires. Now I watch this family. The battles were quieter.", mood="bored", gap=0.5)

scene("living", [("tara", 330), ("chrono", 860)])
L("chrono", "Rule one. Historians use evidence. A primary source comes from the time. A secondary source is made later, about it. Like a textbook.", mood="teach", shot="close", boardClear=True, board="PRIMARY = from the time. SECONDARY = later")
L("chrono", "And primary doesn't mean true. It just means from the time. People lied at the time too. Mostly kings.", mood="teach", shot="close", board="Primary ≠ true!")
scene("living", [("tara", 260), ("dad", 600), ("chrono", 980)])
L("dad", "Why is the clock talking?", mood="shock", shot="close")
L("chrono", "Why is the suspect talking?", mood="deadpan", shot="close")
L("dad", "My official statement. I, Vikram Rao, was asleep all afternoon, and did not play badminton indoors. Signed, Vikram Rao. Witnessed by, Vikram Rao.", mood="smug", shot="close", prop="scroll")
L("tara", "Nobody said anything about badminton.", mood="deadpan", shot="close")
L("chrono", "That's inference. What a source suggests, beyond what it says. Now, check your sources. N O P. Nature, Origin, Purpose.", mood="teach", shot="close", boardClear=True, board="INFERENCE = what it suggests, not says")
L("tara", "Nature, a signed statement. Origin, the main suspect. Purpose, to stay out of trouble.", mood="thinking", shot="close", board="NOP: Nature · Origin · Purpose")
L("chrono", "So. Reliable?", mood="teach", shot="close")
L("tara", "As reliable as the weather forecast in monsoon season.", mood="deadpan", shot="close")
L("chrono", "But useful? Very. It shows what your father wants us to believe. A biased source can still be useful. Always ask, useful for what?", mood="teach", shot="close", board="Biased ≠ useless. Useful FOR WHAT?")
L("dad", "Thank you. I'm useful.", mood="smug", shot="close")
L("chrono", "As evidence against yourself. Yes.", mood="bored", shot="close", gap=0.3)
L("tara", "Wait. Dad posted in the family chat at three fourteen. Does superglue work on porcelain? Asking for a friend.", mood="shock", shot="close", prop="phone", boardClear=True, board="Family chat, 3:14 pm: 'superglue?'")
L("chrono", "Cross-referencing. His statement says asleep. His own phone says awake, typing, and sticky. When sources disagree, somebody's wrong.", mood="teach", shot="close", board="Cross-reference: do the sources agree?")
L("dad", "My phone is biased against me.", mood="annoyed", shot="close", gap=0.4)

confess("dad", "VIKRAM RAO · Dad · Self-Described History Buff")
L("dad", "For the record, I am a history buff. I have watched a documentary.", mood="smug")
L("dad", "The first ten minutes. Then I had a very historic nap.", mood="smug", gap=0.6)

# ---------------- ACT 2: THE MUSEUM, THEN THE HAWKER CENTRE ----------------
card("MEANWHILE, AT THE MUSEUM", "Mum wants an expert opinion. And compensation.", 2.4)
scene("museum", [("mum", 260), ("dad", 560), ("tara", 860)])
L("dad", "Ming dynasty. Thirteen sixty eight to sixteen forty four. So the vase is from the thirteenth century.", mood="smug", shot="close")
sfx("buzzer")
poof("chrono", 1070)
L("chrono", "Thirteen sixty eight is in the fourteenth century. The years one to a hundred were the first century. So, add one.", mood="teach", shot="close", boardClear=True, board="1368 → 14th century (add 1)")
L("tara", "So ten sixty six is the eleventh century. And the nineteen hundreds are the twentieth.", mood="thinking", shot="close", board="1066 → 11th C.   1900s → 20th C.")
L("chrono", "Before year one, count backwards. Five hundred B C is older than one hundred B C. After year one, it's A D.", mood="teach", shot="close", board="BC/BCE ← year 1 → AD/CE")
L("dad", "And Singapore. Eighteen nineteen. A British trading post. The eighteenth century.", mood="smug", shot="close")
L("tara", "Nineteenth.", mood="deadpan", shot="close")
L("chrono", "Nineteenth. And the big periods. Ancient. Medieval, roughly five hundred to fifteen hundred. Early modern. Modern.", mood="bored", shot="close", board="Ancient · Medieval · Early modern · Modern")
L("tara", "Mum. Look underneath. There's a barcode. It says, Ming's Homeware, Tampines.", mood="deadpan", shot="close")
L("chrono", "A barcode on a Ming vase. That's an anachronism. Something in the wrong time. Like a knight with a smartphone. Or your father at the gym.", mood="smug", shot="close", boardClear=True, board="ANACHRONISM = something in the wrong time")
L("chrono", "And its provenance? Tampines.", mood="smug", shot="close", board="PROVENANCE = where it comes from")
L("mum", "Nineteen dollars ninety! Reduced from two hundred! It was a bargain!", mood="excited", shot="close")
L("dad", "I'll give you twenty. Keep the change.", mood="smug", shot="close", gap=0.4)

scene("hawker", [("tara", 300), ("chrono", 620), ("uncle", 1000)])
L("uncle", "Eh, Rao girl! Heard your mother's vase broke. My cousin's neighbour says a pigeon flew in and knocked it over.", mood="excited", shot="close")
L("uncle", "Also, talking egg timer. Kopi or teh?", mood="happy", shot="close")
L("chrono", "Neither. I don't drink. I leak.", mood="bored", shot="close", gap=0.3)
L("chrono", "And that pigeon is a terrible source. You weren't there. Your cousin's neighbour wasn't there. That's a rumour on a long holiday.", mood="eyeroll", shot="close")
L("tara", "Mum says Dad is careless. Dad says the vase was old. Uncle Hock says pigeon.", mood="thinking", shot="close")
L("chrono", "Interpretations. Arguments about the past, built from sources. They differ because of the evidence, the focus, and when and why people wrote.", mood="teach", shot="close", boardClear=True, board="INTERPRETATION = an argument about the past")
L("chrono", "Monk chroniclers hated King John, so their histories made him a monster. You'll meet him in two episodes.", mood="teach", shot="close", board="They differ: evidence, focus, when, why")
L("chrono", "So test interpretations against the evidence. The pigeon theory has no evidence. Also, no pigeon.", mood="smug", shot="close", board="Test them against the EVIDENCE")
L("uncle", "Very clever pigeon.", mood="worried", shot="close", gap=0.4)

# ---------------- ACT 3: HOME, THE VERDICT ----------------
card("THAT EVENING", "The suspect asked for a lawyer. Request denied.", 2.2)
scene("living", [("tara", 230), ("mum", 470), ("dad", 710), ("chrono", 960)])
L("tara", "The court of the living room is in session. Exhibit A. One shuttlecock. Found under the sofa.", mood="determined", shot="close")
L("dad", "Fine! I was practising my smash! But it's not entirely my fault!", mood="worried", shot="close")
L("chrono", "Annoyingly, he has a point. Events rarely have one cause. Long-term causes build for years. Short-term ones come just before. Then, the trigger.", mood="teach", shot="close", boardClear=True, board="Long-term → short-term → TRIGGER")
L("tara", "Long-term. That shelf has wobbled for three years. Dad put it up himself.", mood="thinking", shot="close")
L("mum", "With double sided tape!", mood="annoyed", shot="close")
L("tara", "Short-term. Mum moved the vase to the edge last week, to fit her new cushions.", mood="thinking", shot="close")
L("tara", "And the trigger. Dad's smash hit the shelf, and the shelf gave up.", mood="happy", shot="close", boardClear=True, board="How the vase broke", diagram=CAUSE_CHAIN)
L("chrono", "Now link them. No wobbly shelf, the smash doesn't matter. No smash, the shelf wobbles for years. Causes work together.", mood="teach", shot="close", board="Causes LINK. Then RANK them.")
L("tara", "My judgement. The shelf mattered most. It made the vase ready to fall. The smash just finished the job.", mood="determined", shot="close")
L("tara", "But Dad built the shelf. So it's still Dad.", mood="deadpan", shot="close")
sfx("trombone")
L("dad", "So I'm a long-term cause AND the trigger. I'm very significant.", mood="smug", shot="close", gap=0.3)
L("chrono", "Significant? Test it with the five Rs. Remarkable. Remembered. Resonant. Resulting in change. Revealing.", mood="teach", shot="close", boardClear=True, board="SIGNIFICANCE: the 5 Rs")
L("mum", "Resulting in change. New house rule. No badminton indoors. Ever.", mood="determined", shot="close", board="Remarkable · Remembered · Resonant")
L("tara", "Revealing. It reveals that Dad cannot put up a shelf.", mood="deadpan", shot="close", board="Resulting in change · Revealing")
L("chrono", "Remembered. This family will talk about it until the twenty second century.", mood="eyeroll", shot="close", gap=0.4)

# ---------------- RECAP ----------------
confess("chrono", "CHRONO · Recap Monster · 950 Years Of Patience, Nearly Gone")
L("chrono", "Recap. For anyone eating dinner. First. Primary sources come from the time. That doesn't make them true.", mood="teach", boardClear=True, board="1. Primary = from the time. Not = true")
L("chrono", "Second. Check the provenance. Nature, Origin, Purpose.", mood="teach", board="2. NOP: Nature, Origin, Purpose")
L("chrono", "Third. Biased can still be useful. Useful for what?", mood="teach", board="3. Biased ≠ useless. Useful for WHAT?")
L("chrono", "Fourth. Long-term, short-term, trigger. Then link them, and rank them.", mood="teach", board="4. Long-term → short-term → trigger")
L("chrono", "And finally. Centuries. Add one. Ten sixty six is in the eleventh century.", mood="smug", board="5. Centuries: add 1.  1066 = 11th C.", gap=0.5)

scene("living", [("tara", 260), ("mum", 560), ("dad", 840)])
L("mum", "Vikram. The shelf goes back up. With screws.", mood="determined", shot="close")
L("dad", "Easy. I've watched a documentary about shelves.", mood="smug", shot="close")
L("tara", "The first ten minutes?", mood="deadpan", shot="close")
L("dad", "Eleven. I'm improving. That's change. And continuity.", mood="smug", shot="close")
L("tara", "That's... actually correct.", mood="shock", shot="close")
L("dad", "I'll take it.", mood="smug", shot="close")
sfx("ding")
L("chrono", "Somebody turn me over. I've run out of patience. Literally. It's sand.", mood="bored", shot="wide", offstage=True, gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Chrono gives you 5 seconds. He has timed longer sieges.", 3.0)
challenge(1, "Singapore became a British trading post in 1819. Which century?", "19th century", "First two digits + 1:  18 + 1 = 19th",
  "Question one. Singapore became a British trading post in eighteen nineteen. Which century is that?",
  "The nineteenth. Eighteen, add one. If you said the eighteenth, go and sit next to Dad.")
challenge(2, "The Bayeux Tapestry was made in the 1070s, about 1066. Primary or secondary?", "Primary", "Made at the time, within about 10 years",
  "Question two. The Bayeux Tapestry was made in the ten seventies, about ten sixty six. Primary or secondary?",
  "Primary. It's from the time. But it was made for the winners, so check its purpose. Next episode.")
challenge(3, "A propaganda poster is very biased. Is it useless to a historian?", "No. Useful!", "Useful for what its makers wanted people to think",
  "Question three. A propaganda poster is very biased. Is it useless to a historian?",
  "No. It shows what its makers wanted people to believe. Biased doesn't mean useless.")
end_card()
