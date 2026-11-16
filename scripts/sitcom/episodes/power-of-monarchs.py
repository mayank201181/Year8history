# "Totally Raotional" History Season Ep 5 "The Divine Right Of Dads" (Topic: How Kings Kept Power)
# Format and helpers: see common.py; check with lint_episode.py.

EP = dict(topic="power-of-monarchs", logline="Dad claims Divine Right over the household with the crown prop. Routes to the throne, tools of control, limits on power, William v John v Henry, the Mandate of Heaven, Sang Nila Utama and the enquiry essay.")

_T = '<text x="{}" y="{}" text-anchor="middle" font-family="sans-serif" font-size="{}" fill="{}">{}</text>'
_R = '<rect x="{}" y="{}" width="{}" height="{}" rx="8" fill="none" stroke="{}" stroke-width="3"/>'
_A = '<line x1="{}" y1="64" x2="{}" y2="128" stroke="#fde047" stroke-width="3"/>'
ROUTES = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 230">'
    + "".join(_R.format(10 + 127 * i, 20, 116, 44, "#7dd3fc") + _T.format(68 + 127 * i, 48, 17, "#7dd3fc", w)
              for i, w in enumerate(["BLOOD", "CHOSEN", "CONQUEST", "CHURCH"]))
    + "".join(_A.format(68 + 127 * i, 200 + 40 * i) for i in range(4))
    + _R.format(180, 128, 160, 48, "#86efac") + _T.format(260, 159, 20, "#86efac", "THE CROWN")
    + _T.format(260, 212, 17, "#fca5a5", "later: Divine Right (answer only to God)")
    + '</svg>')

# ---------------- COLD OPEN ----------------
scene("living", [("tara", 260), ("mum", 560), ("dad", 880)])
sfx("fanfare")
L("dad", "Family. From today, I rule this household by Divine Right.", mood="smug", shot="close", prop="crown")
L("mum", "By what?", mood="deadpan", shot="close")
L("dad", "God made me the Dad. So I answer only to God. Not to Mum. And not to the family WhatsApp.", mood="smug", shot="close")
L("mum", "Does Divine Right include washing the dishes?", mood="annoyed", shot="close")
L("dad", "Kings don't wash dishes. It's in the Bible.", mood="smug", shot="close")
L("tara", "It's not.", mood="deadpan", shot="close")
L("dad", "It's implied.", mood="smug", shot="close")
freeze("\"IT'S IMPLIED.\"", 2.4, narrator="Narrator: It was not implied.")
confess("tara", "TARA RAO · 12 · Essay Due Monday")
L("tara", "My essay question is, under what circumstances did kings rise to power? And my father has just volunteered as a case study.", mood="deadpan")
L("tara", "A bad one. But a case study.", mood="deadpan", gap=0.6)

title()

# ---------------- ACT 1: ROUTES TO THE CROWN ----------------
scene("kitchen", [("tara", 300), ("dad", 600)])
sfx("drawer")
poof("chrono", 900)
L("chrono", "Divine Right? In a kitchen? How did anyone become king? Route one. Inheritance. The crown goes down the bloodline, usually to the eldest son.", mood="bored", shot="close", boardClear=True, board="1. INHERITANCE: eldest son")
L("dad", "I'm the eldest son!", mood="smug", shot="close")
L("tara", "Uncle Ravi is two years older than you.", mood="deadpan", shot="close")
L("dad", "Details.", mood="smug", shot="close", gap=0.3)
L("chrono", "Route two. Being chosen. In ten sixty six, the Witan, England's great council, chose Harold Godwinson.", mood="teach", shot="close", board="2. CHOSEN: the Witan picks Harold")
L("chrono", "Route three. Conquest. Right by the sword. William won at Hastings and took the lot.", mood="teach", shot="close", board="3. CONQUEST: William at Hastings")
L("chrono", "Route four. The Church. At the coronation the king was anointed with holy oil. A sign that God approved.", mood="teach", shot="close", board="4. CHURCH: crowned and anointed")
L("dad", "Anointing! Priya, where's the coconut oil?", mood="excited", shot="close")
L("mum", "Already on your head, Vikram.", mood="deadpan", shot="close", offstage=True, gap=0.3)
L("chrono", "Divine Right goes further. The king answers only to God, so rebellion is a sin. Kings always claimed God's favour, but James the First pushed the full theory around sixteen hundred.", mood="teach", shot="close", boardClear=True, board="Divine Right: answer only to God", diagram=ROUTES)
L("tara", "So Dad is using a seventeenth century idea in a twenty first century flat.", mood="deadpan", shot="close")
L("chrono", "And remember. Legitimacy is people accepting you SHOULD rule. Power is being able to MAKE them. A king needs both.", mood="teach", shot="close", boardClear=True, board="LEGITIMACY: they accept you should rule")
L("tara", "Dad has a crown and the remote. That's power. Legitimacy?", mood="thinking", shot="close", board="POWER: you can make them obey")
L("mum", "Zero.", mood="deadpan", shot="close", offstage=True, gap=0.3)

# ---------------- TOOLS OF CONTROL ----------------
scene("living", [("tara", 260), ("dad", 600), ("chrono", 940)])
L("chrono", "Getting the crown is the easy bit. Keeping it needs tools. Armies and castles. William's Normans built hundreds of castles.", mood="teach", shot="close", boardClear=True, board="TOOLS: armies · castles")
L("dad", "Castle complete. Motte and bailey. The sofa is the motte.", mood="smug", shot="close", prop="cushion")
L("tara", "And the laundry basket is the bailey.", mood="deadpan", shot="close")
L("chrono", "Land and patronage. Reward loyal nobles with land, and they owe you service.", mood="teach", shot="close", board="land + patronage (reward loyalty)")
L("dad", "Tara. Loyalty to the crown earns you the Wi-Fi password.", mood="smug", shot="close")
L("tara", "I changed it this morning. I'm the patron now.", mood="smug", shot="close")
L("chrono", "Then law and taxes. Royal courts, and money. John squeezed the barons. Henry grabbed the monasteries. And the Church, preaching obedience.", mood="teach", shot="close", board="law · taxes · the Church")
L("chrono", "And propaganda. The Bayeux Tapestry. Coins with the king's face. Holbein's portraits of Henry.", mood="teach", shot="close", board="propaganda: tapestry · coins · portraits")
L("dad", "I've edited the family photo. I'm now the tallest.", mood="smug", shot="close", prop="phone")
L("tara", "You're taller than the door.", mood="deadpan", shot="close", gap=0.4)

confess("chrono", "CHRONO · ~950 Years Old · Hourglass · Seen A Lot Of Crowns")
L("chrono", "People ask, did kings really believe in Divine Right? Some did. Most believed in castles.", mood="bored")
L("chrono", "Castles are very convincing. Nobody argues with a moat.", mood="bored", gap=0.5)

# ---------------- ACT 2: HAWKER CENTRE ----------------
card("MEANWHILE, AT THE HAWKER CENTRE", "Royal decree: the king gets the crispiest prata", 2.4)
scene("hawker", [("tara", 300), ("dad", 560), ("uncle", 1000)])
L("dad", "Uncle! Prata for the king. And Tara, the crown takes one of yours. Royal tax.", mood="smug", shot="close", prop="crown")
L("tara", "No tax without the common counsel of the realm. Magna Carta, clause twelve.", mood="deadpan", shot="close")
L("uncle", "Wah. Your daughter got lawyer.", mood="shock", shot="close")
L("dad", "I rule by Divine Right!", mood="determined", shot="close")
L("uncle", "My grandfather said Chinese rulers ruled by the Mandate of Heaven. Rule badly, Heaven takes it back.", mood="teach", shot="close")
poof("chrono", 790)
L("chrono", "Correct. The Zhou dynasty used it to justify overthrowing the Shang, about three thousand years ago. Floods, famine or rebellion could mean Heaven had withdrawn it.", mood="teach", shot="close", boardClear=True, board="CHINA: Mandate of Heaven (Zhou)")
L("chrono", "So, unlike Divine Right, it could justify a rebellion. As long as you won.", mood="smug", shot="close", board="Bad ruler → Heaven withdraws it")
L("uncle", "Same as hawker. Food bad, queue disappear. The queue is my Mandate of Heaven.", mood="smug", shot="close")
L("dad", "My queue is one daughter. And she's leaving.", mood="sad", shot="close")
L("tara", "With my prata.", mood="smug", shot="close", gap=0.4)

# ---------------- FORT CANNING ----------------
card("SATURDAY, FORT CANNING PARK", "Formerly known as the Forbidden Hill", 2.4)
scene("park", [("tara", 300), ("mum", 620)])
L("mum", "Your essay needs Singapore. So, culture. And free parking.", mood="excited", shot="close", prop="map")
poof("chrono", 940)
L("chrono", "This hill was Bukit Larangan. The Forbidden Hill. Malay tradition says the early kings of Singapura lived here.", mood="teach", shot="close", boardClear=True, board="Bukit Larangan = the Forbidden Hill")
L("chrono", "The Malay Annals tell a legend. Sang Nila Utama, a prince from Palembang, hit a storm at sea. He threw his crown overboard, and the storm stopped.", mood="teach", shot="close", board="LEGEND: Sang Nila Utama (Malay Annals)")
L("mum", "A whole crown, overboard? Without even checking the resale value?", mood="shock", shot="close")
L("chrono", "On the island he saw a strange beast, said to be a lion. So he named it Singapura. Lion City.", mood="teach", shot="close", board="saw a 'lion' → named it Singapura")
L("tara", "There have never been wild lions in Singapore.", mood="thinking", shot="close")
L("chrono", "Exactly. A legend, written down centuries later. Check your sources. But archaeologists have found fourteenth century remains here. A real port town.", mood="smug", shot="close")
L("chrono", "Malay rulers had daulat, a sacred royal power. Treason, derhaka, was a terrible crime. But the Annals also tell of a deal. The ruler never shames his people, and they never rebel.", mood="teach", shot="close", boardClear=True, board="Daulat = sacred power · derhaka = treason")
L("mum", "Terms and conditions. Even for kings. I like these people.", mood="happy", shot="close")
L("chrono", "Mughal emperors like Akbar used the same mix. Bloodline, a huge army, a dazzling court. Lineage, force and the sacred. Everywhere.", mood="teach", shot="close", board="Everywhere: lineage + force + sacred")

# ---------------- ACT 3: THE RAO MAGNA CARTA ----------------
card("SUNDAY NIGHT", "Essay due tomorrow. Dad due a reality check.", 2.4)
scene("living", [("tara", 260), ("mum", 560), ("dad", 860)])
L("dad", "Royal decree number nine. The remote belongs to the king. Forever.", mood="smug", shot="close", prop="remote")
L("mum", "The barons have met. This is the Magna Carta of the Rao household. Sign it.", mood="determined", shot="close", prop="scroll")
L("dad", "Never! Divine Right means I don't sign things. It's implied.", mood="determined", shot="close")
L("mum", "Then no dinner.", mood="deadpan", shot="close")
L("dad", "Where's the pen?", mood="sad", shot="close", gap=0.3)
poof("chrono", 1060)
L("chrono", "John sealed Magna Carta. He didn't sign it. Check your sources. Now, limits on kings. Barons. The Pope, who excommunicated John. Rebellions, like the Pilgrimage of Grace.", mood="teach", shot="close", boardClear=True, board="LIMITS: barons · the Pope · rebels")
L("chrono", "Magna Carta, twelve fifteen. And Parliament. Even Henry the Eighth used Parliament to pass his laws breaking with Rome.", mood="teach", shot="close", board="Magna Carta 1215 · Parliament")
L("tara", "So kingship was a bargain. Even for Henry.", mood="thinking", shot="close", board="Kingship = a BARGAIN")
L("chrono", "Now the essay. Three kings, three circumstances. William, ten sixty six. A succession crisis, then conquest.", mood="teach", shot="close", boardClear=True, board="William 1066: crisis + conquest")
L("chrono", "John, eleven ninety nine. Inheritance, but disputed. His nephew Arthur had a claim too.", mood="teach", shot="close", board="John 1199: disputed inheritance")
L("chrono", "Henry the Eighth, fifteen oh nine. A peaceful inheritance. But only because his father won by battle.", mood="teach", shot="close", board="Henry VIII 1509: peaceful inheritance")
L("tara", "So Henry was most secure at the start. No serious rival, a full treasury. William had to fight for years. John lost Normandy.", mood="determined", shot="close", board="Most secure at the start: Henry VIII")
L("chrono", "The plan. One PEEL paragraph per factor. Inheritance, conquest, crisis, the Church, personal qualities. Then link them, and judge.", mood="teach", shot="close", boardClear=True, board="Factors → PEEL paragraphs → link → judge")
L("tara", "My judgement. A crisis or a battle opened the door. But to stay king, you had to bargain. With barons, the Church and Parliament.", mood="determined", shot="close", board="Judgement: won by crisis, kept by bargain")
L("dad", "And my judgement is that I've lost the remote.", mood="sad", shot="close")
L("mum", "Clause one. The remote is shared.", mood="smug", shot="close", gap=0.4)

# ---------------- RECAP ----------------
confess("chrono", "CHRONO · Recap Hourglass · Speaking Slowly For Dad")
L("chrono", "Recap. First. Four routes to the crown. Blood, being chosen, conquest, and the Church.", mood="teach", boardClear=True, board="1. Blood · chosen · conquest · Church")
L("chrono", "Second. Legitimacy is the right to rule. Power is the ability. You need both.", mood="teach", board="2. Legitimacy + power")
L("chrono", "Third. Tools of control. Armies, castles, land, law, taxes, propaganda.", mood="teach", board="3. Castles · land · law · tax · propaganda")
L("chrono", "Fourth. Limits. Barons, Popes, rebels, Magna Carta and Parliament.", mood="teach", board="4. Barons · Pope · Magna Carta · Parliament")
L("chrono", "And finally. Everywhere, from China to Singapura, kings mixed lineage, force and the sacred.", mood="smug", board="5. Mandate of Heaven · daulat", gap=0.5)
# ---------------- TAG ----------------
scene("living", [("tara", 260), ("mum", 560), ("dad", 860)])
L("dad", "Fine. I abdicate. Tara, the crown is yours.", mood="sad", shot="close", prop="crown")
L("tara", "I accept. By the Mandate of Heaven.", mood="smug", shot="close")
L("dad", "So what's my job now?", mood="worried", shot="close")
L("mum", "Dishes. Clause two.", mood="smug", shot="close")
L("dad", "Is that implied?", mood="worried", shot="close")
L("mum", "It's written down.", mood="smug", shot="close")
sfx("ding")
L("chrono", "A written constitution. In this flat. I need to lie down. Which, for an hourglass, stops time.", mood="bored", shot="wide", offstage=True, gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Chrono gives you 5 seconds. Then he gets smug.", 3.0)
challenge(1, "Which king rose to power by conquest in 1066?", "William I", "Battle of Hastings, 14 Oct 1066",
  "Question one. Which king rose to power by conquest in ten sixty six?",
  "William the First. He won at Hastings and was crowned on Christmas Day. If you said Harold, he was chosen by the Witan. Then he lost.")
challenge(2, "In what year did King John agree to Magna Carta?", "1215", "Runnymede, 15 June 1215",
  "Question two. In what year did King John agree to Magna Carta?",
  "Twelve fifteen, at Runnymede. The Pope cancelled it within months, but the idea of limits on a king survived.")
challenge(3, "Which body did Henry VIII use to pass the laws that broke with Rome?", "Parliament", "e.g. the Act of Supremacy, 1534",
  "Question three. Which body did Henry the Eighth use to pass the laws that broke with Rome?",
  "Parliament. Even the mightiest Tudor used it, to make the break lawful. Not the family WhatsApp.")
end_card()
