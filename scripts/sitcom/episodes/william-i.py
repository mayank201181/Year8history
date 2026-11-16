# "Totally Raotional" History S01E02 "The Norman Conquest Of The Sofa" (Topic: William I & 1066)
# Format and helpers: see common.py; check with lint_episode.py.

EP = dict(topic="william-i", logline="Grandpa flies home without naming an heir to the sofa, so Dad, Mum, Tara and Cousin Harish all claim it like the rivals of 1066, while Chrono explains Stamford Bridge, Hastings, castles, the feudal system and Domesday.")

_T = '<text text-anchor="middle" font-family="sans-serif" '
TIMELINE = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 160">'
    f'{_T}x="260" y="22" font-size="20" font-weight="bold" fill="#86efac">1066</text><line x1="20" y1="80" x2="500" y2="80" stroke="#f8fafc" stroke-width="3"/>' + ''.join(
    f'<circle cx="{x}" cy="80" r="7" fill="{c}"/>{_T}x="{x}" y="60" font-size="16" fill="{c}">{d}</text>{_T}x="{x}" y="{y}" font-size="15" fill="#f8fafc">{e}</text>'
    for x, d, e, y, c in [(55, "5 Jan", "Edward dies", 110, "#fde047"), (137, "20 Sep", "Fulford", 140, "#7dd3fc"), (219, "25 Sep", "Stamford Br.", 110, "#7dd3fc"),
                          (301, "28 Sep", "Pevensey", 140, "#fde047"), (383, "14 Oct", "Hastings", 110, "#fca5a5"), (465, "25 Dec", "Crowned", 140, "#fde047")]) + '</svg>')

FEUDAL = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 230">' + ''.join(
    f'<polygon points="{p}" fill="none" stroke="{c}" stroke-width="3"/>{_T}x="260" y="{y}" font-size="15" font-weight="bold" fill="{c}">{t}</text>'
    for p, t, y, c in [("260,10 297,62 223,62", "KING", 55, "#fde047"), ("223,62 297,62 335,115 185,115", "BARONS", 95, "#7dd3fc"),
                       ("185,115 335,115 372,167 148,167", "KNIGHTS", 147, "#86efac"), ("148,167 372,167 410,220 110,220", "PEASANTS (villeins)", 200, "#fca5a5")])
    + f'<line x1="60" y1="60" x2="60" y2="188" stroke="#f8fafc" stroke-width="3"/><polygon points="60,200 54,188 66,188" fill="#f8fafc"/>{_T}x="60" y="45" font-size="15" fill="#f8fafc">LAND</text>'
    '<line x1="460" y1="200" x2="460" y2="72" stroke="#f8fafc" stroke-width="3"/><polygon points="460,60 454,72 466,72" fill="#f8fafc"/>'
    f'{_T}x="460" y="28" font-size="15" fill="#f8fafc">LOYALTY</text>{_T}x="460" y="47" font-size="15" fill="#f8fafc">+ SERVICE</text></svg>')

# ---------------- COLD OPEN ----------------
scene("living", [("tara", 300), ("mum", 760)])
L("tara", "Grandpa flew home to Chennai today. For three months, he ruled the sofa. And the remote.", mood="deadpan", shot="close")
L("mum", "And he never said who gets it next. So it's mine.", mood="smug", shot="close", gap=0.3)
scene("living", [("tara", 260), ("mum", 600), ("dad", 980)])
sfx("whoosh")
L("dad", "Too late! I'm on it, I'm wearing the crown, and Grandpa pointed at me as he left.", mood="smug", shot="close", prop="crown")
L("tara", "He was pointing at his suitcase.", mood="deadpan", shot="close")
L("mum", "Grandpa promised ME the remote. And you swore an oath to support me, Vikram. On my coupons.", mood="annoyed", shot="close")
L("dad", "That oath was made under pressure! There was a sale on!", mood="worried", shot="close")
L("tara", "Technically, I'm Grandpa's closest blood relative.", mood="neutral", shot="close")
L("mum", "You're twelve.", mood="deadpan", shot="close")
L("tara", "Also, Cousin Harish is coming down from upstairs. He says he has a claim too.", mood="deadpan", shot="close", prop="phone")
freeze("ONE SOFA. FOUR CLAIMS.", 2.6, narrator="Narrator: It was 1066 all over again.")
confess("tara", "TARA RAO · 12 · Lives In 1066 Every Saturday")
L("tara", "Four claimants. One sofa. No heir. Historians call that a succession crisis. England had one in ten sixty six.", mood="deadpan", gap=0.6)

title()

# ---------------- ACT 1: FOUR CLAIMANTS, TWO INVASIONS ----------------
scene("kitchen", [("tara", 330)])
L("tara", "Chrono! My family is re-enacting ten sixty six. On the sofa.", mood="determined", shot="wide")
sfx("tick")
poof("chrono", 860)
L("chrono", "My first job. Porridge timer for a Norman cook. I spent the Battle of Hastings in a sack. On a horse.", mood="bored", shot="close")
L("chrono", "Fifth of January, ten sixty six. Edward the Confessor dies. No children. Four men want the throne.", mood="teach", shot="close", boardClear=True, board="5 Jan 1066: Edward dies, no heir")
L("chrono", "Harold Godwinson. Richest earl in England. Says Edward named him on his deathbed, and the Witan, the council, agrees. Crowned next day.", mood="teach", shot="close", board="HAROLD: Witan + deathbed promise")
L("tara", "Sat down first. That's Dad.", mood="deadpan", shot="close")
L("chrono", "William, Duke of Normandy. Says Edward promised him the throne. And that Harold swore, in ten sixty four, to support him.", mood="teach", shot="close", board="WILLIAM: promise + Harold's 1064 oath")
L("tara", "Promise, oath, coupons. Mum.", mood="deadpan", shot="close")
L("chrono", "Harald Hardrada, King of Norway. A Viking claim from an old deal. Backed by Harold's exiled brother, Tostig.", mood="teach", shot="close", board="HARDRADA: Viking claim + Tostig")
L("tara", "Cousin Harish. Invading from the north. Well, upstairs.", mood="deadpan", shot="close")
L("chrono", "And Edgar Aetheling. Closest blood relative. About fourteen. No army.", mood="teach", shot="close", board="EDGAR: blood, but ~14 and no army")
L("tara", "Blood claim. No army. Me.", mood="sad", shot="close", gap=0.3)
L("chrono", "All summer, Harold guards the south coast. But the wind is wrong, William can't sail, and Harold's army runs out of food and goes home.", mood="teach", shot="close", boardClear=True, board="One year, three battles", diagram=TIMELINE)
L("chrono", "Then Hardrada invades, and wins at Gate Fulford. Harold races north and crushes him at Stamford Bridge, twenty fifth of September.", mood="teach", shot="close", board="Stamford Bridge: Hardrada + Tostig killed")
L("chrono", "Three days later, the wind changes. William lands at Pevensey. Harold is more than two hundred miles away.", mood="teach", shot="close", board="28 Sep: William lands at Pevensey")
L("tara", "So Dad fights Cousin Harish at the fridge. And Mum lands on the sofa.", mood="thinking", shot="close")
L("chrono", "History doesn't repeat. But in this flat, it rhymes. Loudly.", mood="smug", shot="close", gap=0.4)

confess("dad", "VIKRAM RAO · Dad · Self-Crowned King Of The Sofa")
L("dad", "People say Harold lost. I say Harold had a very busy September.", mood="smug")
L("dad", "And I know how he died. Arrow in the eye. I saw the documentary. Well. The poster.", mood="smug", gap=0.6)

# ---------------- ACT 2: THE LIBRARY ----------------
card("MEANWHILE, AT THE LIBRARY", "Dad is doing research. Mostly the pictures.", 2.4)
scene("library", [("tara", 230), ("dad", 470), ("teacher", 710)])
L("dad", "Look! The Bayeux Tapestry. Harold. Arrow. Eye. Case closed.", mood="smug", shot="close", prop="book")
L("teacher", "Maybe, Mr Rao. The word Harold sits above a group of men. And that arrow may have been altered in later repairs.", mood="teach", shot="close")
poof("chrono", 960)
L("chrono", "That's not a myth. It's worse. It's uncertain.", mood="smug", shot="close", boardClear=True, board="Arrow in the eye? UNCERTAIN")
L("chrono", "Check the provenance. Probably made in the ten seventies, for Bishop Odo, William's half-brother. So it tells the Norman story. Useless as a referee.", mood="teach", shot="close", board="Made 1070s for Odo: the NORMAN view")
L("teacher", "So. Why did William win at Hastings, on the fourteenth of October?", mood="happy", shot="close")
L("tara", "Harold's men were exhausted from marching north and back. And Harold rushed in without waiting for more troops.", mood="thinking", shot="close", boardClear=True, board="1. Harold: tired army, rushed")
L("chrono", "William's leadership. Years of planning, archers, cavalry, and the Pope's banner.", mood="teach", shot="close", board="2. William: planning, archers, cavalry")
L("chrono", "The English held a shield wall on a ridge for hours. So the Normans pretended to run away. The English chased them, and the wall broke.", mood="teach", shot="close", board="Fake retreat → shield wall breaks")
L("dad", "Pretending to run away? That's cheating!", mood="annoyed", shot="close")
L("chrono", "It's called a feigned retreat. You do one from the washing up every night.", mood="smug", shot="close")
L("tara", "And luck. The wind kept William in port until Harold was busy in the north.", mood="thinking", shot="close", board="3. Luck: the wind + Hardrada's timing")
L("chrono", "Now link them. The wind only mattered because Harold had to fight twice. Late in the day, Harold was killed, and the English collapsed.", mood="teach", shot="close")
L("dad", "Can I borrow this book? For the pictures.", mood="smug", shot="close", gap=0.4)

# ---------------- ACT 3: THE BATTLE OF THE SOFA ----------------
card("SATURDAY NIGHT", "The sofa. The remote. The reckoning.", 2.2)
scene("living", [("tara", 260), ("mum", 560), ("dad", 860)])
L("dad", "Victory! Cousin Harish is driven back upstairs! Wait. Why are you on my sofa?", mood="shock", shot="close")
L("mum", "I landed while you were at the fridge. It's called Pevensey, darling.", mood="smug", shot="close", prop="remote")
L("dad", "Then I form a shield wall!", mood="determined", shot="close", prop="cushion")
L("tara", "It's one cushion.", mood="deadpan", shot="close")
L("mum", "Oh dear. I'm so tired. I'll just go and make fresh prata.", mood="happy", shot="close")
L("dad", "Prata? Wait for me!", mood="excited", shot="close")
sfx("whoosh")
L("tara", "And he's broken the shield wall. Feigned retreat. Every time.", mood="deadpan", shot="close")
L("mum", "The remote is mine. And the crown.", mood="smug", shot="close", prop="crown")
L("tara", "William was crowned on Christmas Day, ten sixty six. Mum, before dessert.", mood="deadpan", shot="close")
freeze("QUEEN OF THE SOFA", 2.4, s="fanfare", narrator="Narrator: Long may she channel-surf.")
poof("chrono", 1080)
L("chrono", "But a battle isn't a country. William had a few thousand soldiers. England had about two million people. So, castles.", mood="teach", shot="close")
L("chrono", "Motte and bailey. An earth mound with a wooden tower, and a fenced yard. Built fast. Later, stone keeps, like the Tower of London.", mood="teach", shot="close", boardClear=True, board="MOTTE = mound + tower   BAILEY = yard")
L("mum", "Tara. Every cushion. I'm building a motte and bailey.", mood="determined", shot="close")
L("chrono", "Rebels rose anyway. Exeter, ten sixty eight. Hereward the Wake at Ely, ten seventy. So William swapped English earls for Norman lords.", mood="teach", shot="close", board="Revolts: Exeter 1068 · Ely 1070–71")

serious()
scene("kitchen", [("tara", 330), ("chrono", 800)])
L("chrono", "One part of this story, we tell plainly. In ten sixty nine, the north rebelled, with Danish help. William's answer is called the Harrying of the North.", mood="serious", shot="close", boardClear=True, board="The Harrying of the North, 1069–70")
L("chrono", "That winter, his soldiers destroyed villages, crops, animals and tools across Yorkshire and the north, so people had nothing left to live on.", mood="serious", shot="close")
L("chrono", "Many thousands of ordinary people died of hunger and cold. Nobody knows exactly how many. Years later, Domesday still listed much of the area as waste.", mood="sad", shot="close", board="Thousands died. Still 'waste' in 1086")
L("tara", "They were farming families. They didn't choose any of this.", mood="sad", shot="close")
L("chrono", "No. Even a chronicler on the Norman side condemned it. We remember them.", mood="serious", shot="close", gap=1.0)
serious(False)

scene("living", [("tara", 230), ("mum", 470), ("dad", 710), ("chrono", 960)])
L("mum", "As Queen of the Sofa, I own every cushion. Vikram, I grant you one. In return, swear loyalty, and do knight service.", mood="smug", shot="close", prop="crown")
L("dad", "What's knight service?", mood="worried", shot="close")
L("mum", "The washing up. Every night.", mood="smug", shot="close")
L("chrono", "That's the feudal system. The king owns the land. Barons get land for loyalty and knights. Knights fight. Peasants, called villeins, farm it and serve their lord.", mood="teach", shot="close", boardClear=True, board="Land down. Loyalty + service up.", diagram=FEUDAL)
L("tara", "So I'm a villein.", mood="deadpan", shot="close")
L("mum", "A villein with excellent grades.", mood="happy", shot="close")
L("chrono", "Then, in ten eighty six, the Domesday survey. Who holds what land. Ploughs, pigs, people. About thirteen thousand places. Why? Tax and control.", mood="teach", shot="close", boardClear=True, board="DOMESDAY 1086: ~13,000 places")
L("mum", "My Domesday of this flat. Fourteen cushions. One sofa. One husband. Condition, fair.", mood="smug", shot="close", prop="book", board="Why? TAX and CONTROL")
L("dad", "Fair?!", mood="shock", shot="close")
L("chrono", "So, how much changed? At the top, nearly everything. Norman lords, French at court, castles, cathedrals. For most peasants? Same fields. New lord.", mood="teach", shot="close", board="CHANGE at the top · CONTINUITY below")

# ---------------- RECAP ----------------
confess("chrono", "CHRONO · Recap Monster · Was There. In A Sack.")
L("chrono", "Recap. For anyone eating dinner. First. Edward dies in ten sixty six. Four claimants.", mood="teach", boardClear=True, board="1. 1066: Edward dies, 4 claimants")
L("chrono", "Second. Stamford Bridge, then Hastings. Fourteenth of October.", mood="teach", board="2. Stamford Bridge → Hastings, 14 Oct")
L("chrono", "Third. William won with planning, Harold's tired army, and luck. Link them.", mood="teach", board="3. Planning + Harold's choices + luck")
L("chrono", "Fourth. Control. Castles, Norman lords, and the Harrying of the North.", mood="teach", board="4. Castles, Norman lords, the Harrying")
L("chrono", "And finally. The feudal system, and the Domesday Book. Land down, loyalty up.", mood="smug", board="5. Feudal system + Domesday 1086", gap=0.5)

scene("living", [("tara", 260), ("mum", 560), ("dad", 840)])
L("dad", "At least I was king. Like Harold.", mood="sad", shot="close")
L("tara", "Harold lasted nine months. You lasted until prata.", mood="deadpan", shot="close")
L("dad", "Quality, not quantity. I'll take it.", mood="smug", shot="close")
sfx("ding")
L("chrono", "Somebody turn me over. And save me a prata.", mood="bored", shot="wide", offstage=True, gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Chrono gives you 5 seconds. Then he gets smug.", 3.0)
challenge(1, "Who won the Battle of Stamford Bridge, 25 Sept 1066?", "Harold", "Harold beat Hardrada and Tostig in the north",
  "Question one. Who won the Battle of Stamford Bridge, in September ten sixty six?",
  "Harold Godwinson. Harold with an O beat Harald with an A. Then he had to march all the way south.")
challenge(2, "Why did Hardrada's invasion help William win at Hastings?", "Tired army", "Battle + 200-mile march; south coast unguarded",
  "Question two. Why did Hardrada's invasion help William win at Hastings?",
  "Harold's army was exhausted from fighting and marching. And it was in the north when William landed.")
challenge(3, "In the feudal system, what did a baron owe the king for his land?", "Knight service", "Loyalty (fealty) + supplying knights",
  "Question three. In the feudal system, what did a baron owe the king in return for land?",
  "Loyalty, and knight service. He supplied knights to fight for the king. Like Dad, and the washing up.")
end_card()
