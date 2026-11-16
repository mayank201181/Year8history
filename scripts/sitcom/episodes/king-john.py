# "Who Rules the Remote?" S01E03 "Bad King Dad" (Topic: King John and Magna Carta)
# Format and helpers: see common.py and WRITING.md; check with lint_episode.py.

SAY.update({"Runnymede": "Runny-meed", "Bouvines": "Boo-veen"})
EP = dict(topic="king-john", logline="Dad taxes screen time to win back the bedroom TV, so the barons of the flat seize the sofa "
          "and make him seal a Family Charter. Ticktock (who was eighty-nine in 1215, and possibly there) explains King John, "
          "Magna Carta and whether John really was a bad king.")

SONS = cards_svg([
    ("Henry the\nYoung King", ["died 1183"], GOLD),
    ("Richard I", ["king 1189–99", "no children"], SKY),
    ("Geoffrey", ["died 1186", "son: Arthur", "(born 1187)"], MINT),
    ("John", ["born 1166", "youngest:", "'Lackland'"], ROSE),
], h=170, title="Henry II + Eleanor of Aquitaine: four sons")

NORMANDY = timeline_svg([
    (1199.4, "Crowned\nMay 1199"),
    (1200.4, "Le Goulet:\n'Softsword'"),
    (1202.6, "Arthur\ncaptured"),
    (1203.3, "Arthur\nvanishes"),
    (1204.45, "Normandy\nlost"),
], 1199, 1205, h=200, title="From crowned to 'Softsword', to scale")

MONEY = cards_svg([
    ("Scutage", ["'shield", "money'", "11 times"], GOLD),
    ("1207 tax", ["a thirteenth", "of income", "and goods"], SKY),
    ("Fines", ["to inherit,", "to marry,", "to be", "forgiven"], ROSE),
    ("Offices", ["jobs like", "sheriff,", "sold"], MINT),
], h=190, title="Paying to win Normandy back")

CHURCH = timeline_svg([
    (1207.45, "Pope picks\nLangton"),
    (1208.2, "Interdict\nbegins"),
    (1209.85, "John excom-\nmunicated"),
    (1213.37, "John submits\nto the Pope"),
    (1214.57, "Bouvines"),
    (1215.45, "Magna\nCarta"),
], 1206, 1216, h=220, title="John v the Pope, then the barons, to scale")

CHARTER = cards_svg([
    ("Clause 12", ["no scutage", "without common", "counsel"], GOLD),
    ("Clause 39", ["no free man", "imprisoned", "without lawful", "judgement"], SKY),
    ("Clause 40", ["justice not", "sold, denied", "or delayed"], MINT),
    ("Clause 61", ["25 barons", "can enforce it:", "security", "clause"], ROSE),
], h=200, title="Magna Carta, 15 June 1215")

LEGACY = timeline_svg([
    (1215, "1215 sealed,\n1225 reissued"),
    (1265, "Parliament\n1265"),
    (1628, "Petition of\nRight 1628"),
    (1791, "US Bill of\nRights 1791"),
    (1948, "UN rights\n1948"),
], 1200, 2026, h=240, title="Most of its fame came much later (to scale)", ends=False)

VIEWS = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 230" font-family="sans-serif">'
    '<text x="260" y="20" fill="#fcd34d" font-size="17" text-anchor="middle">Was John a bad king? Who says so, and when?</text>'
    '<line x1="30" y1="120" x2="490" y2="120" stroke="#f8fafc" stroke-width="3"/>'
    '<path d="M30,112 L14,120 L30,128 Z" fill="#fca5a5"/><path d="M490,112 L506,120 L490,128 Z" fill="#86efac"/>'
    '<text x="20" y="152" fill="#fca5a5" font-size="15">WICKED</text>'
    '<text x="500" y="104" fill="#86efac" font-size="15" text-anchor="end">ABLE, UNLUCKY</text>'
    '<circle cx="70" cy="120" r="7" fill="#fca5a5"/><line x1="70" y1="113" x2="70" y2="72" stroke="#fca5a5" stroke-width="2"/>'
    '<text x="40" y="50" fill="#fca5a5" font-size="15">Monks, 1220s–1250s</text>'
    '<text x="40" y="67" fill="#fca5a5" font-size="14">Wendover, Paris</text>'
    '<circle cx="130" cy="120" r="7" fill="#c4b5fd"/><line x1="130" y1="127" x2="130" y2="168" stroke="#c4b5fd" stroke-width="2"/>'
    '<text x="90" y="186" fill="#c4b5fd" font-size="15">Victorians, 1870s</text>'
    '<text x="90" y="203" fill="#c4b5fd" font-size="14">+ Robin Hood stories</text>'
    '<circle cx="290" cy="120" r="7" fill="#7dd3fc"/><line x1="290" y1="113" x2="290" y2="72" stroke="#7dd3fc" stroke-width="2"/>'
    '<text x="290" y="50" fill="#7dd3fc" font-size="15" text-anchor="middle">Morris, Church, 2015</text>'
    '<text x="290" y="67" fill="#7dd3fc" font-size="14" text-anchor="middle">able, but untrustworthy</text>'
    '<circle cx="420" cy="120" r="7" fill="#86efac"/><line x1="420" y1="127" x2="420" y2="168" stroke="#86efac" stroke-width="2"/>'
    '<text x="500" y="186" fill="#86efac" font-size="15" text-anchor="end">Warren, 1961</text>'
    '<text x="500" y="203" fill="#86efac" font-size="14" text-anchor="end">used government records</text>'
    '</svg>')

# ---------------- COLD OPEN ----------------
scene("living", [("tara", 260), ("mum", 600), ("dad", 960)])
wear("dad", "crown")
L("dad", "Royal announcement. Every hour of TV now costs one chore. The screen tax.", mood="smug", shot="close", prop="remote")
L("mum", "Monday, a cartoon tax. Tuesday, a sofa fee. Wednesday, he fined me for laughing.", mood="annoyed", shot="close", prop="scroll")
L("dad", "I need funds, Anjali. I'm winning back the bedroom TV.", mood="smug", shot="close", prop="remote")
L("tara", "You lost it to Mum. You went out for prata and she walked in.", mood="deadpan", shot="close")
L("tara", "Lose your best land, then tax everyone to win it back. That's King John.", mood="deadpan", shot="close")
freeze("FINED FOR LAUGHING", 2.4, narrator="Narrator: The fine was two packets of murukku.")
confess("tara", "TARA RAO · 12 · Taxpayer · Future Baron")
L("tara", "Our question: how did kings rise to power? Bonus question: how do you stop one?", mood="deadpan", gap=0.6)

title()

# ---------------- ACT 1: THE YOUNGEST SON ----------------
scene("kitchen", [("tara", 340)])
L("tara", "I need King John. Fast.", mood="determined", shot="wide")
sfx("drawer")
poof("ticktock", 840)
sfx("sand")
L("ticktock", "King John! I was there, you know. I watched him sign Magna Carta. Lovely handwriting.", mood="excited", shot="close")
L("tara", "You were made around 1126. In 1215 you were eighty nine. So, possible.", mood="thinking", shot="close",
  boardClear=True, board="Could he have been there? ✔ possible")
L("tara", "But John didn't sign it. He sealed it, with his Great Seal, in wax.", mood="deadpan", shot="close", board="Signed? ✘   Sealed? ✔")
L("ticktock", "Sealed! Yes. That's what I said. A very... signy sort of seal.", mood="flustered", shot="close")
L("tara", "Possible isn't proven. You need another source.", mood="deadpan", shot="close", board="Possible is NOT proven: corroborate")
L("ticktock", "The spoon in my drawer remembers it exactly the same way.", mood="flustered", shot="close", gap=0.4)

confess("ticktock", "TICKTOCK · Hourglass · Aged 89 In 1215 · Possibly There")
L("ticktock", "I spent 1215 in a monastery cupboard. Very busy year. For the cupboard.", mood="smug", gap=0.5)

scene("kitchen", [("tara", 340), ("ticktock", 860)])
L("ticktock", "Henry II and Eleanor of Aquitaine ruled England and half of France: the Angevin empire.", mood="teach", shot="close",
  boardClear=True, diagram=SONS)
L("ticktock", "John was their youngest son, and the land was promised to his brothers. So, Lackland.", mood="teach", shot="close")
L("tara", "Youngest son, inherits nothing, wants everything. That's Dad.", mood="deadpan", shot="close")
L("ticktock", "His brother Richard I went on crusade and was captured. While England paid the ransom, John plotted.", mood="teach", shot="close")
L("ticktock", "In 1199 Richard died, childless. John moved fast, won his mother's support, and was crowned.", mood="teach", shot="close",
  board="1199: John crowned")
L("ticktock", "His rival was his twelve-year-old nephew, Arthur of Brittany, backed by the King of France.", mood="teach", shot="close",
  board="Rival: nephew Arthur, aged 12")
L("tara", "So John won with speed and support, not a battle.", mood="thinking", shot="close", board="John: speed + support, NOT conquest", gap=0.4)

confess("dad", "VIKRAM RAO · Dad · Youngest Son · Lackland")
L("dad", "My brothers got the flat and the car. I got a stapler. Now look at me.", mood="smug", gap=0.6)

# ---------------- ACT 2: SCHOOL ----------------
card("MONDAY: HISTORY", "Ms Lim's class · How to lose a duchy", 2.4)
scene("classroom", [("tara", 260), ("teacher", 600)])
L("teacher", "Right, Year Eight. John's family had ruled Normandy since before 1066. He lost it within five years.", mood="teach", shot="close",
  boardClear=True, diagram=NORMANDY)
L("teacher", "His rival, Philip II of France, was clever, patient, and right next door.", mood="teach", shot="close")
L("tara", "Patient rival, next door. Mum and the bedroom TV.", mood="deadpan", shot="close")
L("teacher", "Arthur vanished in John's prison in 1203, and lords in France turned against John.", mood="teach", shot="close")
L("teacher", "Critics called him Softsword after a peace deal in 1200. When Normandy fell in 1204, the name stuck.", mood="teach", shot="close")
poof("ticktock", 940)
L("ticktock", "He lost because he stayed in bed with his young queen! I read it in a chronicle.", mood="excited", shot="close")
L("teacher", "Written by a monk who disliked him. We'll test that later.", mood="neutral", shot="close")
sfx("scratch")
L("ticktock", "Test me? I'm nine hundred.", mood="flustered", shot="close", gap=0.3)

L("teacher", "To win it back, John needed money. Scutage, shield money from barons: eleven times. A huge tax in 1207. Fines. Jobs for sale.", mood="teach", shot="close",
  boardClear=True, diagram=MONEY)
L("tara", "So the screen tax is scutage, and the laughing fine is a fine. Dad is historically accurate.", mood="deadpan", shot="close", gap=0.4)

L("teacher", "Then he fought Pope Innocent III, who chose Stephen Langton as Archbishop of Canterbury. John refused to let him in.", mood="teach", shot="close",
  boardClear=True, diagram=CHURCH)
L("teacher", "In 1208 the Pope put England under an Interdict: most church services stopped for six years. In 1209, John was excommunicated.", mood="teach", shot="close")
L("ticktock", "And John simply took Church lands and money. The monks were furious.", mood="shock", shot="close")
L("teacher", "In 1213, with France about to invade, John submitted. He made England the Pope's fief.", mood="teach", shot="close")
L("tara", "A powerful ruler, far away, who overrules everyone. Paati.", mood="deadpan", shot="close", gap=0.4)

L("teacher", "27 July 1214. Bouvines. Philip crushed John's allies. Ten years of plans and money, gone.", mood="teach", shot="close",
  boardClear=True, board="27 July 1214: Bouvines. John is WEAK")
L("teacher", "The barons were already angry: taxes, fines, hostages, unfair justice. And something worse.", mood="solemn", shot="close")
solemn("Cruelty and fear",
       ["1203: Arthur, John's teenage nephew, vanished.",
        "Most historians think John had him killed.",
        "1210: a baron's wife and son died in John's prison.",
        "Barons feared they could be next."],
       "Some of the anger was fear. In 1203, John's teenage nephew Arthur disappeared in prison. Most historians believe John had him killed. In 1210, a baron's wife and son died in John's prison. Barons wondered who would be next.",
       who="teacher", hold=2.0)
L("teacher", "Tara. Was Bouvines the main cause of the revolt?", mood="neutral", shot="close")
L("tara", "Bouvines explains when: it made John weak. Years of taxes, unfair justice and cruelty explain why. Those mattered most.", mood="thinking", shot="close",
  board="Grievances = WHY.   Bouvines = WHEN.")
L("teacher", "Good. In May 1215 the rebels renounced their homage and took London. John had to negotiate.", mood="happy", shot="close",
  board="May 1215: homage renounced, London taken", gap=0.4)

# ---------------- MEANWHILE: THE BARONS' REVOLT ----------------
card("MEANWHILE, AT HOME", "The Barons' Revolt", 2.2)
scene("living", [("tara", 260), ("mum", 600), ("dad", 960)])
L("tara", "Dad. We, the barons of this flat, renounce our homage.", mood="determined", shot="close", prop="placard:NO SCREEN TAX")
L("mum", "And we've taken the sofa. Richest territory in the flat.", mood="smug", shot="close", prop="cushion")
L("dad", "You can't just walk in and take it!", mood="shock", shot="close", prop="remote")
L("mum", "That's what you said about the bedroom TV.", mood="smug", shot="close")
freeze("THE SOFA HAS FALLEN", 2.4, narrator="Narrator: Dad agreed to talks on neutral ground.")

card("SUNDAY: THE PARK", "A meadow by a river. Sound familiar?", 2.4)
scene("park", [("tara", 260), ("mum", 600), ("dad", 960)])
L("tara", "Runnymede, by the River Thames. The charter was dated 15 June 1215.", mood="teach", shot="close",
  boardClear=True, diagram=CHARTER)
L("mum", "Clause 12. No scutage without the common counsel of the kingdom. No screen tax unless we agree.", mood="determined", shot="close", prop="scroll")
L("tara", "Clause 39. No free man imprisoned except by the lawful judgement of his equals, or the law of the land. No grounding without a hearing.", mood="teach", shot="close", prop="scroll")
L("mum", "Clause 40. To no one will we sell, deny or delay justice. Or the remote.", mood="smug", shot="close")
L("tara", "And clause 61, the security clause. Twenty-five barons can seize your castles if you break it.", mood="determined", shot="close")
L("dad", "There are only three of us!", mood="shock", shot="close")
L("tara", "Two barons and twenty-three soft toys. We voted.", mood="deadpan", shot="close")
L("mum", "Now seal it, Vikram. Thumb in the kaya.", mood="smug", shot="close", prop="plate")
sfx("gavel")
wear("dad")
freeze("SEALED IN KAYA", 2.4, narrator="Narrator: It took Dad two days to find a loophole.")

# ---------------- ACT 3: IT FAILS. THEN IT DOESN'T ----------------
scene("kitchen", [("tara", 340), ("ticktock", 860)])
L("dad", "Paati says your charter is null and void! I asked her on video call!", mood="smug", offstage=True)
L("tara", "He went to the Pope, like John. The Pope annulled Magna Carta in August 1215.", mood="deadpan", shot="close",
  boardClear=True, board="Aug 1215: the Pope annuls it")
L("ticktock", "Civil war followed. The rebels even invited Prince Louis of France to be king.", mood="teach", shot="close",
  board="1215–17: First Barons' War")
L("ticktock", "And it didn't give everyone rights. Clause 39 meant free men, not villeins: most people.", mood="teach", shot="close",
  board="Rights for all? ✘   Barons, free men ✔")
L("ticktock", "In October 1216 John lost baggage crossing the Wash. Legend says his crown jewels sank. He died days later.", mood="teach", shot="close")
L("dad", "Has anyone seen the remote? It was in my trousers. Which are now in the wash.", mood="worried", offstage=True)
sfx("trombone")
L("ticktock", "What John lost is unknown. The jewels are legend. The remote is not.", mood="smug", shot="close", board="Jewels in the Wash = LEGEND", gap=0.4)

scene("classroom", [("tara", 260), ("teacher", 600)])
L("teacher", "So it failed. But after John died it was reissued: 1216, 1217 and 1225. The big idea survived: the king is under the law.", mood="teach", shot="close",
  boardClear=True, diagram=LEGACY)
L("teacher", "In 1265 Simon de Montfort's Parliament included townsmen. Later, Magna Carta inspired the US Bill of Rights.", mood="teach", shot="close")
L("tara", "But only three clauses are still law, and it didn't invent juries. Much of its fame is myth.", mood="thinking", shot="close", gap=0.4)

poof("ticktock", 940)
L("teacher", "Now. Was John a bad king?", mood="teach", shot="close", boardClear=True, diagram=VIEWS)
L("ticktock", "Dreadful! A monk wrote that Hell itself is made fouler by the presence of John!", mood="excited", shot="close")
L("teacher", "Matthew Paris, writing after John died. He copied an earlier monk, Roger of Wendover. Queen story too.", mood="teach", shot="close")
L("tara", "The Church suffered in the Interdict. The monks had reasons to hate John.", mood="thinking", shot="close")
L("ticktock", "I trusted that monk! We shared a cupboard!", mood="flustered", shot="close")
L("teacher", "Victorians believed the monks. Robin Hood stories made John a villain, but no evidence links him to a real Robin Hood.", mood="teach", shot="close")
L("teacher", "In 1961 a historian, Warren, studied the records: John was clever, hard-working, and unlucky. Recent historians add: cruel and untrustworthy.", mood="teach", shot="close")
L("tara", "Some of his reputation is unfair. But he lost Normandy, and his cruelty and broken promises cost him his barons' trust. So, a bad king.", mood="thinking", shot="close")
L("tara", "William rose by conquest and stayed strong. John rose by inheritance, then lost his barons. His weakness produced a written limit on a king.", mood="determined", shot="close", gap=0.5)

# ---------------- RECAP ----------------
confess("ticktock", "TICKTOCK · Recap Hourglass · Shares A Cupboard With Monks")
L("ticktock", "Recap. One. 1199: Lackland becomes king.", mood="teach",
  boardClear=True, board="1. 1199: Lackland crowned, rival Arthur")
L("ticktock", "Two. 1204: Normandy lost. Then he squeezes England for money.", mood="teach", board="2. 1204: Normandy lost, money squeezed")
L("ticktock", "Three. The Interdict and Bouvines leave him weak.", mood="teach", board="3. Interdict + Bouvines = weak king")
L("ticktock", "Four. 1215: Magna Carta. It fails, then it lasts.", mood="teach", board="4. 1215: Magna Carta sealed, not signed")
L("ticktock", "Five. Ask who wrote it, and why. Especially my cupboard friends.", mood="smug", board="5. Who wrote it? Why? Monks hated John", gap=0.5)

# ---------------- TAG ----------------
scene("living", [("tara", 260), ("dad", 600), ("ticktock", 960)])
L("tara", "The charter's on the fridge. Reissued by Mum, minus the soft toys.", mood="happy", shot="close", prop="scroll")
L("dad", "Paati keeps overruling me. What if I made my own Church of the Remote?", mood="thinking", shot="close", prop="remote")
L("tara", "That's Henry the Eighth. The break with Rome.", mood="deadpan", shot="close")
L("ticktock", "1534! I was four hundred and eight!", mood="excited", shot="close")
L("tara", "Okay. That one actually checks out.", mood="shock", shot="close")
sfx("ding")
L("ticktock", "I'm also extremely handsome. Feel free to corroborate.", mood="smug", shot="wide", gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Ticktock gives you 5 seconds. He was eighty-nine for all of them.", 3.0)
challenge(1, "Where was Magna Carta agreed in June 1215?", "Runnymede", "15 June 1215, by the Thames. Sealed, not signed!",
  "Question one. Where was Magna Carta agreed?",
  "Runnymede, by the Thames.")
challenge(2, "Which 1214 defeat left John weak enough for the barons to rebel?", "Bouvines", "27 July 1214: allies crushed, Normandy plan over",
  "Question two. Which defeat in 1214 left John weak?",
  "Bouvines.")
challenge(3, "Roger of Wendover, a monk, called John wicked. Why might he be biased?", "Church suffered", "Monk, wrote after John died; the Interdict hurt the Church",
  "Question three. Why might the monk Roger of Wendover be biased against John?",
  "The Interdict hurt his Church. If you said primary means true, sit with Dad.")
end_card()
