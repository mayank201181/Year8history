# "Who Rules the Remote?" S01E01 "Sources Say Dad Did It" (Topic: The Historian's Toolkit)
# Format and helpers: see common.py and WRITING.md; check with lint_episode.py.

EP = dict(topic="historians-toolkit", logline="The TV remote is found broken at breakfast, and Dad declares himself innocent. "
          "Tara investigates like a historian, with a source from every family member and a 900-year-old hourglass who was "
          "definitely, almost, an eyewitness.")

# This year's topics on one line, to scale, with the centuries shaded.
def _centuries():
    X = lambda y: 20 + (y - 1000) * 480 / 1100.0
    out = ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 190" font-family="sans-serif">',
           f'<text x="260" y="18" fill="{GOLD}" font-size="17" text-anchor="middle">1000 to 2100, to scale, by century</text>']
    for i, c in enumerate(range(11, 22)):
        x0, x1 = X(1000 + i * 100), X(1100 + i * 100)
        out.append(f'<rect x="{x0:.1f}" y="104" width="{x1 - x0:.1f}" height="26" fill="{LILAC if i % 2 else SKY}" fill-opacity="{0.22 if i % 2 else 0.12}"/>'
                   f'<text x="{(x0 + x1) / 2:.1f}" y="122" fill="{INK}" font-size="13" text-anchor="middle">{c}th</text>'.replace(">21th<", ">21st<"))
    ev = [  # (year, label, colour, label y, anchor, label x)
        (1066, "Hastings 1066", GOLD, 62, "start", 22),
        (1126, "Ticktock made 1126", ROSE, 166, "start", 22),
        (1215, "Magna Carta 1215", MINT, 84, "start", 108),
        (1534, "Supremacy 1534", SKY, 166, "middle", None),
        (1789, "Revolution 1789", LILAC, 62, "middle", None),
        (1933, "Hitler 1933", ROSE, 166, "middle", None),
        (2026, "Now 2026", GOLD, 90, "end", 500),
    ]
    for y, label, col, ly, anchor, lx in ev:
        x = X(y)
        tip = ly + 5 if ly < 104 else ly - 15
        out.append(f'<line x1="{x:.1f}" y1="{104 if ly < 104 else 130}" x2="{x:.1f}" y2="{tip}" stroke="{col}" stroke-width="2"/>'
                   f'<circle cx="{x:.1f}" cy="{104 if ly < 104 else 130}" r="5" fill="{col}"/>'
                   f'<text x="{lx if lx is not None else x:.1f}" y="{ly}" fill="{col}" font-size="15" text-anchor="{anchor}">{label}</text>')
    out.append("</svg>")
    return "".join(out)
CENTURIES = _centuries()

SOURCES = cards_svg([
    ("Dad's\nstatement", ["written", "this morning", "by the", "suspect"], GOLD),
    ("TV\nhistory", ["a record", "made by", "the TV", "at the time"], SKY),
    ("Kaya on\nthe button", ["physical", "evidence:", "sticky"], MINT),
    ("Ticktock", ["oral:", "heard a", "thud"], ROSE),
], h=180, title="Exhibits A to D")

NOP = cards_svg([
    ("Nature", ["what is it?", "a written", "statement"], GOLD),
    ("Origin", ["who? when?", "Dad, 7 am,", "chief suspect"], SKY),
    ("Purpose", ["why made?", "to keep", "the remote"], ROSE),
], h=150, title="Dad's statement: N.O.P.")

NIGHT = timeline_svg([
    (22, "Mum: bed\n10 pm"),
    (22.5, "Tara: bed\n10.30 pm"),
    (23.75, "Late supper\n11.45 pm"),
    (25.2, "TV last used\n1.10 am"),
    (31, "Remote found\n7 am"),
], 21, 31, h=230, title="Friday night, to scale (9 pm to 7 am)", ends=False)

CAUSES = cards_svg([
    ("Long-term", ["bought 2014", "worn buttons", "old batteries"], LILAC),
    ("Short-term", ["football", "after midnight", "sticky kaya"], SKY),
    ("Trigger", ["Dad dozes off,", "remote slides", "onto the tiles"], ROSE),
], h=150, title="Why did the remote break?")

# ---------------- COLD OPEN ----------------
scene("living", [("tara", 260), ("mum", 600), ("dad", 960)])
L("mum", "Seven in the morning. The remote is dead: back off, batteries gone, volume button sticky.", mood="annoyed", shot="close", prop="remote")
L("dad", "A terrible crime. Clearly the work of outsiders.", mood="shock", shot="close")
L("tara", "We live on the fourteenth floor. Outsiders would need a very long ladder.", mood="deadpan", shot="close")
L("dad", "Then I'll lead the investigation. I'm King of the Remote, by divine right.", mood="smug", shot="close")
L("mum", "Divine right means God chose the king. Your mother chose you. All in favour of Tara investigating?", mood="determined", shot="two")
L("tara", "Two votes to one. I'll do it like a historian. No verdict without evidence.", mood="determined", shot="close")
L("dad", "Excellent. Then I'm safe. There is no evidence.", mood="smug", shot="close")
L("tara", "Dad, there's kaya on the volume button.", mood="deadpan", shot="close", prop="remote")
L("dad", "Planted.", mood="smug", shot="close")
freeze("NO EVIDENCE, NO CRIME", 2.4, narrator="Narrator: there was quite a lot of evidence.")
confess("tara", "TARA RAO · 12 · Historian · Lead Investigator")
L("tara", "This year's history: monarchy, dictatorship and democracy. Our remote has been all three. Before breakfast.", mood="deadpan", gap=0.6)

title()

# ---------------- ACT 1: THE DRAWER ----------------
scene("kitchen", [("tara", 340)])
L("tara", "First, the missing batteries. Everything ends up in the junk drawer.", mood="determined", shot="wide")
sfx("drawer")
poof("ticktock", 840)
sfx("sand")
L("ticktock", "Light! At last! Do you know how long I've been in there?", mood="excited", shot="close")
L("tara", "A talking hourglass. Fine. Did you see who broke the remote?", mood="deadpan", shot="two")
L("ticktock", "See it? I witnessed everything! I am an eyewitness of the highest quality.", mood="smug", shot="close")
L("tara", "You were in a shut drawer. In the kitchen. The remote broke in the living room.", mood="deadpan", shot="close",
  boardClear=True, board="Was the source in a position to know?")
L("ticktock", "I heard things! Through the cutlery! A thud, at about one in the morning.", mood="flustered", shot="close")
L("tara", "So you saw nothing, and heard a thud. Possible, but not proven.", mood="thinking", shot="close", board="Saw it? ✘   Heard a thud? Maybe")

confess("ticktock", "TICKTOCK · Antique Hourglass · Made c. 1126")
L("ticktock", "I am Ticktock. Made in 1126, in the eleventh century. Tara says it was the twelfth. Tara is a pedant.", mood="smug", gap=0.5)

scene("kitchen", [("tara", 340), ("ticktock", 860)])
L("tara", "It was the twelfth. Years 1 to 100 were the first century, so it's one more than the hundreds.", mood="teach", shot="close",
  boardClear=True, board="1066 = 11th century   1126 = 12th", diagram=CENTURIES)
L("tara", "And there's no year zero: 1 BC is followed by AD 1. Some write BCE and CE.", mood="teach", shot="close", board="No year 0: 1 BC → AD 1")
L("ticktock", "Very well. In my day, we caught criminals with fingerprints.", mood="smug", shot="close")
L("tara", "Not until the 1890s. That's an anachronism: something put in the wrong time.", mood="deadpan", shot="close",
  boardClear=True, board="Anachronism = in the wrong time")
L("ticktock", "Then you need sources: written, visual, archaeological, oral. Primary ones were made at the time, like Domesday Book.", mood="teach", shot="close",
  boardClear=True, board="Written · visual · archaeological · oral")
L("tara", "And secondary ones were made later, looking back. Like my textbook.", mood="thinking", shot="close", board="PRIMARY: then   SECONDARY: later")

confess("dad", "VIKRAM RAO · Dad · Chief Suspect · Totally Relaxed")
L("dad", "My statement is a primary source. I wrote it myself. So it's extremely reliable.", mood="smug", gap=0.6)

# ---------------- ACT 2: THE CLASSROOM ----------------
card("MONDAY: HISTORY", "Exhibits A to D", 2.4)
scene("classroom", [("tara", 300), ("teacher", 760)])
L("teacher", "Tara. Why is there a broken remote on my desk?", mood="shock", shot="close")
L("tara", "It's a case study. Someone at home broke it, and I have four sources.", mood="determined", shot="close", prop="remote",
  boardClear=True, diagram=SOURCES)
L("teacher", "Your dad's statement is a primary source. So it must be reliable?", mood="teach", shot="close")
L("tara", "No. Primary only means made at the time. And he's the main suspect.", mood="deadpan", shot="close")
L("teacher", "So check where it came from. Nature: what is it? Origin: who made it, and when? Purpose: why?", mood="teach", shot="close",
  boardClear=True, diagram=NOP)
L("tara", "A written statement, by Dad, at seven this morning. To keep the remote.", mood="thinking", shot="close")
L("teacher", "Biased, then. But useless? Henry VIII had this portrait painted in 1537, by his own court painter.", mood="teach", shot="close",
  boardClear=True, board="Henry VIII by Holbein, 1537: paid by Henry")
L("tara", "So he was never going to paint the king as short and grumpy.", mood="deadpan", shot="close")
L("teacher", "Right. It isn't reliable about Henry's real looks. But it's very useful for how he wanted to be seen.", mood="teach", shot="close",
  board="Reliable? ✘   Useful? ✔")
L("tara", "Like propaganda: poor evidence of the truth, good evidence of what rulers wanted believed. Like Dad's statement.", mood="deadpan", shot="close",
  board="Propaganda: what rulers WANTED believed")
L("teacher", "Now, inference. Magna Carta, clause 39: no free man shall be imprisoned except by the lawful judgement of his equals, or the law of the land.", mood="teach", shot="close",
  boardClear=True, board="Clause 39: no prison without judgement")
L("tara", "It suggests King John had been locking people up without fair trials. Otherwise, why ban it?", mood="thinking", shot="close",
  board="Describe = what it SHOWS")
poof("ticktock", 1040)
L("ticktock", "My turn! I infer it was a burglar. A tall one.", mood="excited", shot="close", board="Infer = what it SUGGESTS")
L("tara", "That's a guess. An inference needs support: kaya on the volume button suggests someone snacked while turning it up.", mood="deadpan", shot="close")
L("teacher", "And who in your family eats kaya toast in front of the football?", mood="smug", shot="close")
L("tara", "One person. But one source is never enough.", mood="determined", shot="close", gap=0.4)

# ---------------- MEANWHILE: THE OFFICIAL HISTORY ----------------
card("MEANWHILE, AT HOME", "The Official History of the Remote", 2.2)
scene("living", [("mum", 300), ("dad", 700)])
L("dad", "I've written a history of Friday night. Chapter One: Vikram goes nobly to bed at ten.", mood="smug", shot="close", prop="book")
L("mum", "That's not a source, Vikram. It's an interpretation. Written by the suspect.", mood="eyeroll", shot="close")
L("dad", "My mother agrees with me. Paati says: my Vikram would never break anything.", mood="smug", shot="close", prop="phone")
L("mum", "Scroll down. She also says you broke three remotes in 1989.", mood="smug", shot="close")
L("dad", "That was a different remote. And a different me.", mood="flustered", shot="close", prop="phone")
freeze("THE OFFICIAL HISTORY", 2.4, narrator="Narrator: Chapter Two was called 'Kaya Is Not Evidence'.")

# ---------------- ACT 3: CORROBORATION AND INTERPRETATIONS ----------------
card("SUNDAY: THE HAWKER CENTRE", "Cross-checking, with teh tarik", 2.4)
scene("hawker", [("tara", 280), ("ticktock", 620), ("uncle", 1000)])
L("tara", "Uncle Hock, was my dad here on Friday night?", mood="neutral", shot="close")
L("uncle", "Of course lah. Quarter to twelve. Kaya toast, extra kaya, takeaway.", mood="happy", shot="close", prop="plate")
L("uncle", "It's all in my order book. I write it to count my bread, not to win arguments.", mood="neutral", shot="close", prop="book")
L("tara", "Written at the time, for another purpose. No reason to lie about Dad.", mood="thinking", shot="close",
  boardClear=True, board="Order book: no reason to lie")
L("ticktock", "And the TV history says football at ten past one. I heard my thud at about one!", mood="excited", shot="close", diagram=NIGHT)
L("tara", "Three independent sources that agree. That's corroboration.", mood="determined", shot="close", board="Sources AGREE = corroboration ✔")
L("ticktock", "I am corroborated! Nine hundred years, and finally corroborated!", mood="excited", shot="close")
L("tara", "But Paati backs Dad's official history. Why do people disagree about the same night?", mood="thinking", shot="close")
L("ticktock", "Like King John! A source comes from the past. An interpretation is a later view of it.", mood="teach", shot="close",
  boardClear=True, board="Source = from then. Interpretation = later")
L("ticktock", "Monks like Roger of Wendover, writing in the 1220s and 1230s, called John a cruel tyrant. He had quarrelled with the Pope.", mood="teach", shot="close",
  board="1220s monks: John = tyrant")
L("ticktock", "Since the 1960s, historians using his government records see a hard-working, unlucky king. Still cruel and untrustworthy.", mood="teach", shot="close",
  board="1960s on, from records: hard-working, cruel")
L("tara", "So views differ with the evidence, when they're written, and the writer's values. Paati is Dad's mum: values.", mood="deadpan", shot="close",
  board="Why they differ: evidence · when · values")

# ---------------- ACT 3: THE VERDICT ----------------
card("MONDAY: THE VERDICT", "Causes, consequences and a judgement", 2.2)
scene("classroom", [("tara", 300), ("teacher", 760)])
L("teacher", "So, why did the remote break? Historians rarely accept just one cause.", mood="teach", shot="close", boardClear=True, diagram=CAUSES)
L("tara", "Long-term: it's from 2014, worn out, with old batteries. Short-term: football after midnight and sticky kaya toast.", mood="thinking", shot="close")
L("tara", "The trigger: Dad dozed off, and the remote slid onto the tiles. Ticktock's thud.", mood="deadpan", shot="close")
L("teacher", "Like France in 1789. Long-term, unfair taxes. Short-term, near-bankruptcy and a bad harvest. Trigger, Louis XVI calling the Estates-General. So, how far was Dad to blame?", mood="teach", shot="close",
  board="Long-term → short-term → trigger")
L("tara", "Point: Dad was mostly to blame. Evidence: the order book, TV history and kaya put him with the remote after midnight.", mood="determined", shot="close",
  boardClear=True, board="P: Dad mostly to blame")
L("tara", "Explain: old batteries made it weak. But if Dad had gone to bed at ten, it would have survived the night.", mood="thinking", shot="close",
  board="E: order book, TV history, kaya")
L("tara", "Link: so the old remote was a cause, but Dad's nap mattered most.", mood="determined", shot="close",
  board="E: what if? No nap, no thud")
L("teacher", "Point, Evidence, Explain, Link, and a 'what if' to weigh the causes. A proper historian's answer.", mood="happy", shot="close",
  board="L: so Dad's nap mattered most")
L("teacher", "Was the Great Remote Disaster significant? Use the five Rs.", mood="teach", shot="close",
  boardClear=True, board="5 Rs: Remarkable · Remembered · Resonant")
L("tara", "Resulting in change: the new remote lives in a tray. Revealing: we had no rule of law. Continuity: Dad sits next to it.", mood="deadpan", shot="close",
  board="Resulting in change · Revealing")
L("teacher", "Real significance is bigger. The 1918 Representation of the People Act took voters from about 8 to about 21 million.", mood="teach", shot="close",
  boardClear=True, board="1918: about 8 million → 21 million voters")

# ---------------- RECAP ----------------
confess("ticktock", "TICKTOCK · Recap Hourglass · Officially Corroborated")
L("ticktock", "Recap. One. Chronology: 1066 is the eleventh century, and there is no year zero.", mood="teach",
  boardClear=True, board="1. 1066 = 11th century; no year 0")
L("ticktock", "Two. Primary means made at the time. It does not mean reliable.", mood="teach", board="2. Primary ≠ reliable")
L("ticktock", "Three. Check nature, origin and purpose. A biased source can still be useful.", mood="teach", board="3. Nature, Origin, Purpose. Biased ≠ useless")
L("ticktock", "Four. Infer, then cross-check. Interpretations differ with evidence, time and values.", mood="teach", board="4. Infer, corroborate, compare views")
L("ticktock", "Five. Causes come long-term, short-term and trigger. Weigh them in a PEEL paragraph.", mood="smug", board="5. Causes → judgement in PEEL", gap=0.5)

# ---------------- TAG ----------------
scene("living", [("tara", 260), ("dad", 600), ("ticktock", 960)])
L("dad", "Fine. The sources say I did it. I accept the verdict of history. And I'll buy the batteries.", mood="sad", shot="close", prop="remote")
L("mum", "Good. And Paati lands tomorrow, for a month. She rules the television.", mood="smug", shot="close", offstage=True)
L("ticktock", "And when she leaves, who gets the remote? No heir, lots of claimants. That's 1066!", mood="excited", shot="close")
L("tara", "Let me guess. You were there.", mood="deadpan", shot="close")
L("ticktock", "I was minus sixty. But I was very nearly there.", mood="flustered", shot="close")
L("tara", "Nine hundred years old, and still sixty years too young.", mood="deadpan", shot="wide", gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Ticktock gives you 5 seconds. He was nearly there for all of them.", 3.0)
challenge(1, "The Battle of Hastings was in 1066. Which century is that?", "11th century", "Take the hundreds (10) and add one: 1066 → 11th",
  "Question one. The Battle of Hastings was in 1066. Which century is that?",
  "The eleventh century. Take the hundreds, and add one.")
challenge(2, "Dad dozed off and the remote hit the tiles. Long-term, short-term or trigger?", "Trigger", "The final spark; the old batteries were long-term",
  "Question two. Dad dozed off, and the remote hit the tiles. Long-term, short-term, or trigger?",
  "The trigger. The old batteries were the long-term cause.")
challenge(3, "Henry VIII paid for his 1537 portrait. Is it reliable about his looks? Is it useful?", "Biased but useful", "Not his real looks, but how he wanted to be seen",
  "Question three. Henry the Eighth paid for his 1537 portrait. Is it reliable about his looks? Is it useful?",
  "Not reliable for his looks, but useful for how he wanted to be seen. If you said biased means useless, go and sit with Dad.")
end_card()
