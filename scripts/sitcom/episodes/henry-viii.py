# "Totally Raotional" History Season Ep 4 "The Great Matter Of The Missing Mango" (Topic: Henry VIII & the Tudors)
# Format and helpers: see common.py; check with lint_episode.py.

EP = dict(topic="henry-viii", logline="Dad wants a male heir for his fantasy-cricket dynasty and breaks with the 'Pope' of the residents' committee over one mango. Bosworth, the Great Matter, the Break with Rome, the Dissolution and six wives.")

_T = '<text x="{}" y="{}" text-anchor="middle" font-family="sans-serif" font-size="{}" fill="{}">{}</text>'
_L = '<line x1="{}" y1="{}" x2="{}" y2="{}" stroke="#fde047" stroke-width="3"/>'
TUDOR_TREE = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 200">'
    + _T.format(130, 28, 18, "#fca5a5", "LANCASTER") + _T.format(390, 28, 18, "#f8fafc", "YORK")
    + _T.format(130, 60, 19, "#fca5a5", "Henry VII") + _T.format(390, 60, 19, "#f8fafc", "Elizabeth of York")
    + _L.format(185, 54, 292, 54) + _T.format(240, 84, 15, "#fde047", "married 1486") + _L.format(240, 92, 240, 112)
    + _L.format(140, 112, 370, 112) + _L.format(140, 112, 140, 132) + _L.format(370, 112, 370, 132)
    + _T.format(140, 156, 18, "#7dd3fc", "Arthur") + _T.format(140, 180, 15, "#7dd3fc", "died 1502")
    + _T.format(370, 156, 18, "#86efac", "Henry VIII") + _T.format(370, 180, 15, "#86efac", "king 1509, aged 17")
    + '</svg>')

# ---------------- COLD OPEN ----------------
scene("living", [("tara", 300), ("dad", 760)])
L("dad", "Tara. Eighteen seasons of fantasy cricket. And no male heir to inherit the Rao Royals.", mood="worried", shot="close", prop="tablet")
L("tara", "I'm right here. I picked your last three captains.", mood="deadpan", shot="close")
L("dad", "Tradition! Henry the Eighth needed a son. And he was a VERY successful king.", mood="smug", shot="close")
L("tara", "He had six wives and fell out with the entire Catholic Church.", mood="deadpan", shot="close")
L("dad", "Commitment.", mood="smug", shot="close", gap=0.3)
scene("living", [("tara", 260), ("mum", 560), ("dad", 900)])
sfx("door")
L("mum", "Mr Tan from the residents' committee has ruled. The mango downstairs belongs to the whole block.", mood="annoyed", shot="close", prop="phone")
L("dad", "I watered that tree! Mr Tan thinks he's the Pope? Then I break with the committee. I am Supreme Head of that mango.", mood="determined", shot="close", prop="crown")
freeze("SUPREME HEAD OF MANGO", 2.6, narrator="Narrator: The mango had not been consulted.")
confess("tara", "TARA RAO · 12 · Heir To Nothing, Apparently")
L("tara", "My father wants a son to run an imaginary cricket team. And he's broken with a residents' committee.", mood="deadpan")
L("tara", "Somewhere, Henry the Eighth feels very understood.", mood="deadpan", gap=0.6)

title()

# ---------------- ACT 1: CHRONO AND THE TUDORS ----------------
scene("kitchen", [("tara", 360)])
L("tara", "This needs an expert. Or something very old.", mood="determined", shot="wide")
sfx("tick")
poof("chrono", 860)
L("chrono", "Who opened the clock? I was busy being nine hundred and fifty. Fine. Start with Henry's father.", mood="bored", shot="close")
L("chrono", "Lancaster and York fought on and off for thirty years over the crown. The Wars of the Roses. A name nobody used then. Check your sources.", mood="teach", shot="close", boardClear=True, board="1455–1485: Wars of the Roses")
L("chrono", "Twenty second of August, fourteen eighty five. Bosworth. Henry Tudor defeats Richard the Third, who dies in battle. Henry becomes Henry the Seventh.", mood="teach", shot="close", board="22 Aug 1485: Bosworth → Henry VII")
L("chrono", "His blood claim was weak. So he married Elizabeth of York. Red rose plus white rose. The Tudor rose. Then he crushed rebels, tamed the nobles, and got rich.", mood="teach", shot="close", boardClear=True, board="Weak claim → marry York → Tudor rose", diagram=TUDOR_TREE)
L("tara", "He married the other team. Like Dad marrying Mum to end the remote war.", mood="deadpan", shot="close", board="Beat pretenders · tame nobles · get rich")
scene("kitchen", [("tara", 300), ("dad", 600), ("chrono", 900)])
L("dad", "I'll do Henry! I am Henry the Eighth! I had eight wives!", mood="excited", shot="close", prop="crown")
sfx("buzzer")
L("chrono", "Six. Eight is his NUMBER. Not his wife count.", mood="eyeroll", shot="close")
L("chrono", "His older brother Arthur died in fifteen oh two. In fifteen oh nine Henry became king at seventeen, and married Arthur's widow, Catherine of Aragon.", mood="teach", shot="close", boardClear=True, board="1502: Arthur dies   1509: Henry VIII king")
L("dad", "Seventeen! Athletic. Handsome. Musical. Basically me.", mood="smug", shot="close")
L("tara", "You pulled a muscle opening a jar of mango pickle.", mood="deadpan", shot="close")
L("chrono", "A Renaissance prince. Jousting, music, languages. Cardinal Wolsey did the real work. In fifteen twenty, the Field of the Cloth of Gold.", mood="teach", shot="close", board="Wolsey runs govt · 1520 Cloth of Gold")
L("chrono", "The Great Matter. Only one of Catherine's children survived. A girl, Mary. Henry feared no son meant civil war again.", mood="teach", shot="close", boardClear=True, board="Only child to survive: Mary → no son")
L("dad", "See? He NEEDED a male heir. Like me.", mood="smug", shot="close")
L("tara", "For a fantasy cricket team.", mood="deadpan", shot="close")
L("dad", "The stakes are similar.", mood="smug", shot="close", gap=0.3)
L("chrono", "Then he fell for Anne Boleyn, and found a verse in Leviticus. Marry your brother's widow and you'll be childless. So, cancel the marriage.", mood="teach", shot="close", board="Leviticus: brother's widow → childless")
L("tara", "But they HAD a child.", mood="thinking", shot="close")
L("chrono", "His experts said it meant no sons. Only the Pope could annul it, and Pope Clement the Seventh was controlled by Emperor Charles the Fifth. Catherine's nephew.", mood="eyeroll", shot="close", board="Pope Clement VII ← Charles V (her nephew)")
L("tara", "So Henry was asking Catherine's nephew if he could dump his auntie.", mood="deadpan", shot="close")
L("chrono", "The answer was no. Wolsey failed, and fell in fifteen twenty nine.", mood="teach", shot="close", board="1529: Wolsey fails and falls")

confess("chrono", "CHRONO · ~950 Years Old · Hourglass · Has Seen It All")
L("chrono", "The Field of the Cloth of Gold? I was there. They used me to time the speeches.", mood="bored")
L("chrono", "I ran out four times. Nobody turned me over. I've never forgiven France.", mood="bored", gap=0.5)

# ---------------- ACT 2: THE HAWKER CENTRE ----------------
card("MEANWHILE, AT THE HAWKER CENTRE", "Mango season: open. Committee: closed.", 2.4)
scene("hawker", [("tara", 300), ("dad", 560), ("uncle", 1000)])
L("dad", "Uncle Hock! One mango juice. The committee stole my mango.", mood="annoyed", shot="close")
L("uncle", "Mr Tan, ah? My cousin. Very strict. He fined me for parking my own trolley.", mood="annoyed", shot="close")
L("dad", "The Pope is your COUSIN?", mood="shock", shot="close")
L("uncle", "Every Pope is somebody's cousin.", mood="smug", shot="close", gap=0.3)
poof("chrono", 790)
L("chrono", "Henry's helpers: Thomas Cromwell, the fixer, and Thomas Cranmer, the new Archbishop of Canterbury.", mood="teach", shot="close", boardClear=True, board="Cromwell: fixer · Cranmer: archbishop")
L("chrono", "Fifteen thirty three. Henry marries Anne, Cranmer annuls the first marriage, and Anne has a girl. Elizabeth.", mood="teach", shot="close", board="1533: marries Anne · Elizabeth born")
L("dad", "Another GIRL? The dynasty!", mood="shock", shot="close")
L("tara", "Dad. Elizabeth became one of England's most successful monarchs.", mood="deadpan", shot="close")
L("chrono", "Fifteen thirty four. Parliament's Act of Supremacy makes Henry, not the Pope, Supreme Head of the Church of England. Denying it becomes treason.", mood="teach", shot="close", board="1534: Act of Supremacy + Treason Act")
L("chrono", "Sir Thomas More would not accept it. He was executed in fifteen thirty five.", mood="serious", shot="close", board="1535: Thomas More executed")
L("tara", "So it wasn't just paperwork. People died for refusing.", mood="serious", shot="close", gap=0.8)
L("chrono", "Motives? The heir. Money, the Church was rich. Power, no Pope above him. Religion, as Protestant ideas spread.", mood="teach", shot="close", boardClear=True, board="Motives: HEIR · MONEY · POWER · RELIGION")
L("dad", "I've passed my own Act of Supremacy. In the family WhatsApp. One vote to zero.", mood="smug", shot="close", prop="phone")
L("tara", "You're the only admin. Mum muted that group years ago.", mood="deadpan", shot="close")
L("uncle", "Aiyo. Mr Tan says somebody picked the mango. It's gone!", mood="shock", shot="close", prop="phone")
L("dad", "The mango is MISSING? This is treason!", mood="shock", shot="close", gap=0.4)

# ---------------- ACT 3: DISSOLVING THE SNACK CUPBOARDS ----------------
card("THAT EVENING", "The mango is still missing", 2.2)
scene("kitchen", [("mum", 260), ("tara", 520), ("dad", 780)])
L("dad", "Next Act. I'm dissolving the snack cupboards. Full of treasure. Loyal to a foreign power.", mood="determined", shot="close", prop="crown")
L("mum", "The foreign power is me.", mood="annoyed", shot="close")
poof("chrono", 1040)
L("chrono", "The Dissolution of the Monasteries, fifteen thirty six to forty. Cromwell's men valued their wealth, hunted for scandal, and closed around eight hundred religious houses.", mood="teach", shot="close", boardClear=True, board="1536–40: ~800 religious houses closed")
L("chrono", "The wealth went to the crown, and much land to the gentry. If you own an old abbey, you don't want the Pope back.", mood="smug", shot="close", board="Wealth → crown · land → loyal gentry")
L("tara", "But monasteries helped the poor and sick. Who did that afterwards?", mood="worried", shot="close")
L("chrono", "Often, nobody.", mood="serious", shot="close")
L("mum", "Right. I'm marching to the sofa. A Pilgrimage of Grace.", mood="determined", shot="close", prop="placard")
L("chrono", "Fifteen thirty six. Around thirty thousand rose in the north, led by Robert Aske. Henry promised a pardon.", mood="teach", shot="close", board="1536: Pilgrimage of Grace (Robert Aske)")
L("chrono", "Then, after new risings, he broke that promise. Around two hundred people were executed, including Aske.", mood="serious", shot="close", board="Promise broken · ~200 executed")
L("mum", "They were promised they'd be heard. And then they weren't.", mood="serious", shot="close", gap=0.9)
L("mum", "I'll stage a sit in instead. With the snacks hidden in the rice bin.", mood="smug", shot="close")
L("dad", "There's an EIGHTH cupboard?", mood="shock", shot="close", gap=0.4)

# ---------------- THE NEXT DAY: WIVES AND IMAGE ----------------
card("THE NEXT DAY, AT SCHOOL", "Ms Lim has a rhyme", 2.2)
scene("classroom", [("teacher", 300), ("tara", 700)])
L("teacher", "Tara. The six wives.", mood="teach", shot="close")
L("tara", "Divorced, beheaded, died. Divorced, beheaded, survived. Catherine of Aragon, Anne Boleyn, Jane Seymour, Anne of Cleves, Catherine Howard, Catherine Parr.", mood="neutral", shot="close", boardClear=True, board="Divorced · Beheaded · Died")
L("teacher", "Good. Real women, and two were executed. The rhyme is for the order, not the joke.", mood="serious", shot="close", board="Divorced · Beheaded · Survived")
poof("chrono", 1000)
L("chrono", "Also, the divorces were really annulments. Historians hate that rhyme.", mood="eyeroll", shot="close")
L("teacher", "Tara. Who is THAT?", mood="shock", shot="close")
L("tara", "My study buddy. He's an hourglass.", mood="deadpan", shot="close")
L("teacher", "Of course he is.", mood="deadpan", shot="close", gap=0.3)
L("tara", "Three children became monarchs. Mary, Elizabeth, and Edward, Jane Seymour's son.", mood="neutral", shot="close", board="Heirs: Mary · Elizabeth · Edward")
L("chrono", "Holbein painted Henry legs apart, shoulders huge. By then he had a bad leg and a big waistline. Propaganda.", mood="smug", shot="close", boardClear=True, board="Holbein portraits · coins = propaganda")
L("tara", "When he died in fifteen forty seven, the crown controlled the Church and its wealth. Through Parliament.", mood="determined", shot="close", board="1547: dies · crown far stronger")

# ---------------- RECAP ----------------
confess("chrono", "CHRONO · Recap Hourglass · Speaking Slowly For Dad")
L("chrono", "Recap. First. Fourteen eighty five. Bosworth. Won by battle, secured by marriage.", mood="teach", boardClear=True, board="1. 1485 Bosworth → Henry VII, Tudor rose")
L("chrono", "Second. Fifteen oh nine. Henry the Eighth inherits, aged seventeen.", mood="teach", board="2. 1509 Henry VIII king, aged 17")
L("chrono", "Third. The Great Matter. No son, and the Pope says no.", mood="teach", board="3. Great Matter: no son, Pope says no")
L("chrono", "Fourth. Fifteen thirty four, Act of Supremacy. Then the Dissolution.", mood="teach", board="4. 1534 Supremacy · 1536 Dissolution")
L("chrono", "And finally. Six wives, three heirs, lots of portraits. A stronger crown.", mood="smug", board="5. Six wives · propaganda · stronger crown", gap=0.5)

# ---------------- TAG ----------------
scene("living", [("tara", 260), ("mum", 560), ("dad", 860)])
L("dad", "My final Act. Whoever took my mango is grounded for life.", mood="determined", shot="close", prop="crown")
L("mum", "I took it. Made mango lassi for the committee. We get first pick next season. If you water the tree.", mood="smug", shot="close", prop="plate")
L("tara", "She didn't break with the Pope. She negotiated. Very un-Tudor.", mood="deadpan", shot="close")
L("dad", "Fine. The Rao Royals go to my heir. Tara. Like Elizabeth.", mood="happy", shot="close")
L("tara", "Elizabeth reigned forty four years. I only want the captaincy.", mood="smug", shot="close")
sfx("ding")
L("chrono", "Back in the clock. Before he discovers the Spanish Armada.", mood="bored", shot="wide", offstage=True, gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Chrono gives you 5 seconds. Then he gets smug.", 3.0)
challenge(1, "In 1485, at which battle did Henry Tudor win the crown?", "Bosworth", "22 Aug 1485 · Richard III killed · Henry VII",
  "Question one. In fourteen eighty five, at which battle did Henry Tudor win the crown?",
  "Bosworth. Henry Tudor beat Richard the Third. Say Hastings and you're about four centuries early.")
challenge(2, "Which 1534 Act made Henry Supreme Head of the Church of England?", "Supremacy", "Act of Supremacy, passed by Parliament, 1534",
  "Question two. Which Act of fifteen thirty four made Henry head of the Church of England?",
  "The Act of Supremacy, passed by Parliament. Not the Act of Mango. That was Dad's.")
challenge(3, "Which wife gave birth to Prince Edward in 1537?", "Jane Seymour", "Wife no. 3 · the 'died' in the rhyme",
  "Question three. Which wife gave birth to Prince Edward in fifteen thirty seven?",
  "Jane Seymour. Wife number three. She died days after the birth.")
end_card()
