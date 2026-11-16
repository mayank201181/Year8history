# "Totally Raotional" History S01E03 "Bad King Dad" (Topic: King John & Magna Carta)
# Format and helpers: see common.py; check with lint_episode.py.

EP = dict(topic="king-john", logline="With Mum away, Dad crowns himself, taxes the pocket money, loses the family's hawker-centre 'Normandy' and fights Grandma, until Mum and Tara make him seal a household Magna Carta with kaya.")

_T = '<text text-anchor="middle" font-family="sans-serif" '
TIMELINE = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 160">'
    f'{_T}x="260" y="22" font-size="20" font-weight="bold" fill="#86efac">KING JOHN</text><line x1="15" y1="80" x2="505" y2="80" stroke="#f8fafc" stroke-width="3"/>' + ''.join(
    f'<circle cx="{x}" cy="80" r="7" fill="{c}"/>{_T}x="{x}" y="60" font-size="15" fill="{c}">{d}</text>{_T}x="{x}" y="{y}" font-size="14" fill="#f8fafc">{e}</text>'
    for x, d, e, y, c in [(40, "1199", "King", 110, "#fde047"), (113, "1204", "Normandy lost", 140, "#fca5a5"), (186, "1208", "Interdict", 110, "#7dd3fc"),
                          (259, "1213", "Submits", 140, "#7dd3fc"), (332, "1214", "Bouvines", 110, "#fca5a5"), (405, "1215", "Magna Carta", 140, "#86efac"),
                          (478, "1216", "Dies", 110, "#fde047")]) + '</svg>')

# ---------------- COLD OPEN ----------------
scene("living", [("tara", 300), ("mum", 760)])
L("mum", "I'm in Bangkok for work all week. Your father's in charge. I've left him the money jar. What's left of it.", mood="worried", shot="close", prop="phone")
L("tara", "Last time Dad was in charge, we had cereal for dinner. Three nights running.", mood="deadpan", shot="close", gap=0.3)
scene("living", [("tara", 260), ("mum", 600), ("dad", 980)])
L("dad", "Go, my love. The kingdom is in safe hands.", mood="smug", shot="close", prop="crown")
sfx("door")
L("dad", "She's gone. First royal decree. A ten percent tax on pocket money.", mood="smug", shot="close", prop="crown")
L("tara", "On what grounds?", mood="deadpan", shot="close")
L("dad", "Royal grounds. Second decree. The balcony is now a royal forest.", mood="smug", shot="close")
freeze("KING DAD: DAY ONE", 2.6, narrator="Narrator: Mum's taxi had not yet left the car park.")
confess("tara", "TARA RAO · 12 · Taxpayer, Unwilling")
L("tara", "Mum's been gone ninety seconds. We have two new laws and a royal forest. The forest is one potted plant.", mood="deadpan", gap=0.6)

title()

# ---------------- ACT 1: WHAT JOHN INHERITED ----------------
scene("kitchen", [("tara", 330)])
L("tara", "Chrono. Dad's crowned himself and invented a tax.", mood="worried", shot="wide")
sfx("tick")
poof("chrono", 860)
L("chrono", "A king, a tax, and an empty treasury? King John. This ends with a very long document.", mood="bored", shot="close")
L("chrono", "John's father, Henry the Second, built the Angevin Empire. England, plus huge lands in France. Normandy, Anjou, Aquitaine.", mood="teach", shot="close", boardClear=True, board="Henry II: the Angevin Empire", diagram=TIMELINE)
L("chrono", "Then John's brother, Richard the Lionheart. Barely in England. He spent a fortune on a crusade, got captured coming home, and England paid a huge ransom.", mood="teach", shot="close", board="Richard I: crusade + huge ransom")
L("tara", "So Mum spent the money jar on Bangkok, and Dad inherited it empty.", mood="thinking", shot="close")
L("chrono", "Exactly. Richard died in eleven ninety nine. John became king, ahead of his twelve year old nephew, Arthur of Brittany.", mood="teach", shot="close", board="1199: John king, not nephew Arthur")
L("chrono", "John captured Arthur. By twelve oh three, Arthur had vanished in his prison. People believed John had him killed. Likely, but unproven.", mood="serious", shot="close")
L("chrono", "Trust is like sand. Very hard to put back in the glass.", mood="teach", shot="close", gap=0.4)

# ---------------- ACT 2: LOSING NORMANDY ----------------
card("SUNDAY, THE HAWKER CENTRE", "The family table. Held by the Raos since 2015.", 2.4)
scene("hawker", [("tara", 300), ("dad", 600), ("uncle", 1000)])
L("uncle", "Mr Rao! Your family's table, under the fan. Somebody took it already.", mood="worried", shot="close")
L("dad", "Impossible. I reserved it with a tissue packet at seven. That's the law.", mood="shock", shot="close")
L("uncle", "Uncle Philip from next door moved your tissue. Put down an umbrella, two newspapers and his whole grandmother.", mood="smug", shot="close")
L("tara", "We've held that table for ten years. That was our Normandy.", mood="deadpan", shot="close")
poof("chrono", 800)
L("chrono", "And Uncle Philip is Philip the Second of France. In twelve oh four, he took Normandy from John. People mocked John as Softsword.", mood="teach", shot="close", boardClear=True, board="1204: Philip II takes Normandy")
L("uncle", "Your father, Mister Soft Tissue.", mood="smug", shot="close", board="Nickname: 'John Softsword'")
L("dad", "That's not funny.", mood="annoyed", shot="close")
L("tara", "It's a bit funny.", mood="deadpan", shot="close")
L("chrono", "It mattered. Lost land, lost money, barons lost estates, and John looked weak. So he taxed England for ten years to win it back.", mood="teach", shot="close", board="Lost: land, money, estates, pride")
L("chrono", "Then, in twelve fourteen, his allies lost at Bouvines. Very expensive. Very pointless.", mood="bored", shot="close", board="1214: allies crushed at Bouvines", gap=0.4)

confess("dad", "VIKRAM RAO · Dad · Softsword, Allegedly")
L("dad", "I didn't lose the table. I strategically lent it to Uncle Philip.", mood="smug")
L("dad", "And to win it back, I need money. From my loyal subjects. Subject.", mood="smug", gap=0.6)

# ---------------- ACT 2: MONEY, FEAR AND THE POPE ----------------
scene("living", [("tara", 260), ("dad", 600), ("chrono", 980)])
L("dad", "Royal announcement. To fund Operation Table, you may skip the washing up. For two dollars.", mood="smug", shot="close", prop="crown")
L("chrono", "Scutage. Shield money, paid instead of fighting. John charged it far more often than kings before him.", mood="teach", shot="close", boardClear=True, board="SCUTAGE: pay instead of fighting")
L("tara", "We had cereal. There is no washing up.", mood="deadpan", shot="close")
L("dad", "Then it's a cereal scutage.", mood="smug", shot="close")
L("chrono", "Reliefs. Huge fees to inherit land.", mood="teach", shot="close", board="RELIEFS: huge fees to inherit")
L("dad", "You inherited Grandma's old comics. Five dollars.", mood="smug", shot="close")
L("chrono", "Fines. Harsh forest law. And justice, for sale.", mood="teach", shot="close", board="FINES · FOREST LAW · JUSTICE FOR SALE")
L("dad", "You touched the royal plant. Three dollars. And justice is two dollars. Fast justice, five.", mood="smug", shot="close")
L("tara", "And free justice?", mood="deadpan", shot="close")
L("dad", "Next Tuesday. Possibly.", mood="smug", shot="close", gap=0.5)
serious()
L("chrono", "There was a darker side. John took barons' sons as hostages. When a baron, William de Braose, fell out with him, John imprisoned his wife Matilda and their son. Both died in his prison.", mood="serious", shot="close")
L("tara", "So the barons weren't just angry. They were afraid.", mood="serious", shot="close")
L("chrono", "Unfair taxes, and fear. That's how rebellions start.", mood="serious", shot="close", gap=1.0)
serious(False)

card("WEDNESDAY", "Grandma has entered the chat.", 2.2)
scene("living", [("tara", 260), ("dad", 600), ("chrono", 980)])
L("dad", "Grandma made Tara admin of the family chat? No. I'm king. I choose the admin. I choose me.", mood="annoyed", shot="close", prop="crown")
L("chrono", "The Church. John and Pope Innocent the Third clashed over the Archbishop of Canterbury. The Pope chose Stephen Langton. John refused him.", mood="teach", shot="close", boardClear=True, board="Pope picks Stephen Langton. John: NO.")
L("tara", "Grandma says, if you refuse, Sunday dosa at her flat is cancelled. For everyone.", mood="deadpan", shot="close", prop="phone")
L("chrono", "An interdict. Twelve oh eight. The Pope stopped most church services in England, for six years.", mood="teach", shot="close", board="1208: INTERDICT")
L("tara", "And she's removed you from the family group chat.", mood="deadpan", shot="close", prop="phone")
L("chrono", "Excommunicated. Twelve oh nine. John was thrown out of the Church. So he grabbed Church money instead.", mood="teach", shot="close", board="1209: excommunicated. Takes Church money")
L("dad", "I'm out of the group chat?! I'll apologise!", mood="shock", shot="close")
L("chrono", "So did John. In twelve thirteen, he accepted Langton, and made England a fief of the Pope.", mood="teach", shot="close", board="1213: submits. England a papal fief")
L("tara", "Grandma says she owns the flat now. Rent is payable in mangoes.", mood="deadpan", shot="close", prop="phone", gap=0.4)

# ---------------- ACT 3: THE HOUSEHOLD MAGNA CARTA ----------------
card("SATURDAY", "Mum is home. The barons are organised.", 2.2)
scene("living", [("tara", 260), ("mum", 560), ("dad", 860)])
sfx("door")
L("mum", "I'm home! Why does Tara owe you forty three dollars? And why is the plant wearing a sign?", mood="shock", shot="close")
L("dad", "Royal forest.", mood="smug", shot="close", prop="crown")
L("tara", "Mum, he lost our table, fought Grandma, and taxed everything. The barons are rebelling.", mood="determined", shot="close")
L("mum", "Then the barons take the kitchen. Nobody eats until the king negotiates.", mood="determined", shot="close")
poof("chrono", 1080)
L("chrono", "In May twelve fifteen, rebel barons captured London. Control the capital, control the snacks.", mood="smug", shot="close", boardClear=True, board="May 1215: rebel barons take London")
L("chrono", "Then Runnymede, a meadow by the Thames. Fifteenth of June, twelve fifteen. John agrees to Magna Carta. The Great Charter.", mood="teach", shot="close", board="15 June 1215: Magna Carta, Runnymede")
L("mum", "Clause twelve. No new taxes unless the family council agrees.", mood="determined", shot="close", prop="scroll", board="12: no tax without common counsel")
L("chrono", "The real one. No scutage or aid without the common counsel of the kingdom.", mood="teach", shot="close")
L("tara", "Clause thirty nine. No phone locked away without a fair hearing.", mood="determined", shot="close", board="39: no jail without lawful judgement")
L("chrono", "Real one. No free man imprisoned, except by the lawful judgement of his peers, or the law of the land.", mood="teach", shot="close")
L("mum", "Clause forty. Justice is free.", mood="smug", shot="close", board="40: justice not sold, denied, delayed")
L("chrono", "To no one will we sell, to no one deny or delay, right or justice.", mood="teach", shot="close")
L("dad", "There goes fast justice.", mood="sad", shot="close")
L("tara", "Clause sixty one. The real one had twenty five barons to make the king obey. Ours has two. And an hourglass.", mood="smug", shot="close", boardClear=True, board="61: 25 barons to enforce it")
L("dad", "Fine. I'll sign it.", mood="sad", shot="close", prop="quill")
L("chrono", "Kings didn't sign. They sealed. In wax.", mood="teach", shot="close")
L("mum", "Use the kaya.", mood="deadpan", shot="close")
freeze("SEALED WITH KAYA", 2.6, narrator="Narrator: Legally binding. Slightly sticky.")
L("dad", "Grandma? Please cancel this charter. You own the flat.", mood="worried", shot="close", prop="phone")
L("chrono", "John did that. The Pope annulled Magna Carta that August, and the First Barons' War began.", mood="teach", shot="close", board="Aug 1215: Pope annuls it → war")
L("dad", "Grandma said no. She's on Mum's side.", mood="sad", shot="close")
L("chrono", "Kinder than Innocent the Third. John died in October twelve sixteen, mid war. But Magna Carta was reissued in twelve sixteen, twelve seventeen and twelve twenty five.", mood="teach", shot="close", board="Oct 1216: John dies, mid-war")
L("tara", "So was John really that bad?", mood="thinking", shot="close", boardClear=True, board="Reissued: 1216, 1217, 1225")
L("chrono", "Check your sources. Monks like Roger of Wendover and Matthew Paris wrote his story after he died. And John had shut their churches and taken their money.", mood="teach", shot="close", boardClear=True, board="Monks: Roger of Wendover, Matthew Paris")
L("dad", "But I've seen the Robin Hood cartoon. Bad Prince John. It's basically a documentary.", mood="smug", shot="close")
L("chrono", "That's a myth. Next. The Robin Hood stories came much later. There's no good evidence he even existed.", mood="eyeroll", shot="close")
L("chrono", "Modern historians see a hard-working king with debts and a clever enemy. But he lost Normandy, and he was cruel. Most still judge him a poor king.", mood="teach", shot="close", board="Modern view: hard-working, but failed")
L("chrono", "And Magna Carta failed in weeks. But it became a symbol. Even the king is under the law. It inspired Parliament, the American Bill of Rights, and the Universal Declaration of Human Rights.", mood="teach", shot="close", board="Big idea: the king is UNDER the law")

# ---------------- RECAP ----------------
confess("chrono", "CHRONO · Recap Monster · Sealed, Not Signed")
L("chrono", "Recap. For anyone eating dinner. First. John inherited an empire, debts, and a rival, Arthur.", mood="teach", boardClear=True, board="1. 1199: empire, debts, rival Arthur")
L("chrono", "Second. He lost Normandy in twelve oh four.", mood="teach", board="2. 1204: Normandy lost to Philip II")
L("chrono", "Third. He fought the Pope. Interdict, then surrender in twelve thirteen.", mood="teach", board="3. Interdict 1208 → submits 1213")
L("chrono", "Fourth. Taxes and cruelty made the barons rebel. Magna Carta, twelve fifteen.", mood="teach", board="4. Taxes + cruelty → Magna Carta 1215")
L("chrono", "And finally. Bad King John? Check who wrote the story.", mood="smug", board="5. Bad King John? Check the sources", gap=0.5)

scene("living", [("tara", 260), ("mum", 560), ("dad", 840)])
L("dad", "So. Am I still king?", mood="worried", shot="close")
L("mum", "Of the washing up. It's a limited monarchy.", mood="smug", shot="close")
L("dad", "A limited monarchy. Very modern. Very significant. I'll take it.", mood="smug", shot="close")
sfx("ding")
L("chrono", "Somebody turn me over. And wipe the kaya off the charter.", mood="bored", shot="wide", offstage=True, gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Chrono gives you 5 seconds. No fast justice.", 3.0)
challenge(1, "In which year did John lose Normandy?", "1204", "Philip II of France took it → 'Softsword'",
  "Question one. In which year did John lose Normandy to Philip the Second of France?",
  "Twelve oh four. Not twelve fifteen. That's Magna Carta. Losing Normandy came first, and it's why John needed all that money.")
challenge(2, "Which Magna Carta clause: no free man imprisoned without lawful judgement?", "Clause 39", "39: lawful judgement of peers / law of the land",
  "Question two. Which clause of Magna Carta says no free man shall be imprisoned without lawful judgement?",
  "Clause thirty nine. The ancestor of the right to a fair trial. Clause forty is the one about selling justice.")
challenge(3, "A monk, Roger of Wendover, called John wicked. Why be careful?", "Monk = biased", "Wrote after John died; John attacked the Church",
  "Question three. A monk, Roger of Wendover, called John wicked. Why should a historian be careful?",
  "Provenance. He wrote after John died, and monks hated John for the interdict. Biased. But still useful for what monks thought.")
end_card()
