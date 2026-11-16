# "Who Rules the Remote?" S01E04 "The Break With Remote" (Topic: Henry VIII: Power, Marriage and the Break with Rome)
# Format and helpers: see common.py and WRITING.md; check with lint_episode.py.

EP = dict(topic="henry-viii", logline="Paati won't change the family streaming plan, so Dad breaks with her, makes himself Supreme Head "
          "of his own plan and dissolves the snack drawer to pay for it. Ticktock (who was possibly, unprovably, on Henry's desk) "
          "explains the Tudors, the Break with Rome, the monasteries and six wives.")

SAY.update({"Holbein": "Hole-bine"})   # audio only: "HOL-bine", not "HOL-been"

TUDORS = timeline_svg([
    (1485.6, "Bosworth\n1485"),
    (1502.3, "Arthur\ndies"),
    (1509.3, "Henry VIII\nking"),
    (1534.9, "Act of\nSupremacy"),
    (1547.1, "Henry\ndies"),
], 1480, 1550, h=190, title="The Tudors, to scale")

MATTER = cards_svg([
    ("Henry VIII", ["wants an", "annulment", "and a son"], GOLD),
    ("Pope\nClement VII", ["can't say", "yes or no,", "so he delays"], SKY),
    ("Charles V", ["Catherine's", "nephew; army", "sacks Rome", "in 1527"], ROSE),
], h=150)

BREAK = timeline_svg([
    (1533.05, "Weds Anne\nJan 1533"),
    (1533.37, "First marriage\nvoid, May"),
    (1533.7, "Elizabeth\nborn, Sept"),
    (1534.87, "Act of\nSupremacy"),
], 1533, 1535, h=200, title="The break, to scale")

WHY_CLOSE = cards_svg([
    ("Money", ["land and", "wealth for", "the Crown"], GOLD),
    ("Power", ["monks looked", "to the Pope"], SKY),
    ("Corruption?", ["reports from", "Cromwell's", "own men"], ROSE),
    ("Religion", ["reformers", "disliked relics", "and pilgrimages"], LILAC),
], h=170, title="Why close the monasteries?")

_W = [("1", "Catherine of Aragon", "annulled 1533", "Mary", GOLD),
      ("2", "Anne Boleyn", "executed 1536", "Elizabeth", ROSE),
      ("3", "Jane Seymour", "died 1537", "Edward", SKY),
      ("4", "Anne of Cleves", "annulled 1540", "", GOLD),
      ("5", "Catherine Howard", "executed 1542", "", ROSE),
      ("6", "Catherine Parr", "outlived him", "", MINT)]
WIVES = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 210" font-family="sans-serif">'
    '<text x="12" y="20" fill="#fcd34d" font-size="15">Wife</text><text x="270" y="20" fill="#fcd34d" font-size="15">What happened</text>'
    '<text x="420" y="20" fill="#fcd34d" font-size="15">Child</text>'
    '<line x1="8" y1="28" x2="512" y2="28" stroke="#f8fafc" stroke-opacity="0.5"/>'
    + "".join(f'<text x="12" y="{54 + i * 29}" fill="#f8fafc" font-size="15">{n}. {name}</text>'
              f'<text x="270" y="{54 + i * 29}" fill="{c}" font-size="15">{fate}</text>'
              f'<text x="420" y="{54 + i * 29}" fill="#86efac" font-size="15">{kid}</text>' for i, (n, name, fate, kid, c) in enumerate(_W)) +
    '</svg>')

THREE_KINGS = cards_svg([
    ("William I", ["Rose: conquest", "Church: Pope", "backed him", "Nobles: replaced", "End: very strong"], SKY),
    ("John", ["Rose: inherited,", "disputed", "Church: lost", "Barons: rebelled", "End: weak"], ROSE),
    ("Henry VIII", ["Rose: inherited", "Church: took it", "Nobles: bought", "with abbey land", "End: very strong"], GOLD),
], h=200)

# ---------------- COLD OPEN ----------------
scene("living", [("tara", 260), ("mum", 600), ("dad", 960)])
L("dad", "Eighteen years on Paati's streaming plan, and I still can't change anything.", mood="annoyed", shot="close", prop="tablet")
L("mum", "She pays for it from Chennai. Her plan, her rules.", mood="deadpan", shot="close")
L("dad", "I want my profile annulled. The algorithm thinks I'm a seventy-year-old grandmother.", mood="annoyed", shot="close", prop="tablet")
L("dad", "I asked her. She said, 'I'll think about it.' That was in March.", mood="sad", shot="close")
L("tara", "Pope Clement the Seventh did that to Henry the Eighth. For years.", mood="deadpan", shot="close")
L("dad", "Then I break with Paati! My own plan, and I'm Supreme Head of it!", mood="determined", shot="close", prop="remote")
sfx("fanfare")
wear("dad", "crown")
L("mum", "And who pays for it?", mood="eyeroll", shot="close")
L("dad", "I have ideas.", mood="smug", shot="close", prop="remote")
freeze("SUPREME HEAD OF THE TV", 2.4, narrator="Narrator: Paati was not consulted.")
confess("tara", "TARA RAO · 12 · Studying The Tudors · Guarding Her Snacks")
L("tara", "Our question: how did kings rise to power? Henry the Eighth was the spare. Like the spare remote in the sofa.", mood="deadpan", gap=0.6)

title()

# ---------------- ACT 1: THE TUDORS ----------------
scene("kitchen", [("tara", 340)])
L("tara", "I need a Tudor expert. Or the next best thing.", mood="determined", shot="wide")
sfx("drawer")
poof("ticktock", 840)
sfx("sand")
L("ticktock", "1534! I was there, you know. On King Henry's desk, when he signed the Act of Supremacy.", mood="excited", shot="close")
L("tara", "You'd have been about four hundred. So it's possible.", mood="deadpan", shot="close",
  boardClear=True, board="Possible? ✔   Proven? ✘")
L("tara", "And does any other source mention a talking hourglass?", mood="deadpan", shot="close",
  board="Corroborate: does another source agree?")
L("ticktock", "The records were lost. In a fire. Which I also witnessed.", mood="flustered", shot="close")
L("tara", "One witness, no corroboration, and a fire nobody else saw.", mood="deadpan", shot="close")
L("ticktock", "Sand never lies.", mood="flustered", shot="close", gap=0.4)

confess("ticktock", "TICKTOCK · Antique Hourglass · Tudor Enthusiast · Unverified")
L("ticktock", "Tudor preachers timed their sermons with me. Two hours. Nobody ever thanked me.", mood="smug", gap=0.5)

scene("kitchen", [("tara", 340), ("ticktock", 860)])
L("ticktock", "First, the Wars of the Roses: Lancaster against York, fighting for about thirty years.", mood="teach", shot="close",
  boardClear=True, board="Wars of the Roses: Lancaster v York", diagram=TUDORS)
L("tara", "Royal cousins fighting over one seat. So, Deepavali.", mood="deadpan", shot="close")
L("ticktock", "Henry Tudor had a weak claim. But in August 1485, at Bosworth, Richard the Third was killed, and Henry was proclaimed king.", mood="teach", shot="close")
L("ticktock", "Crowned that October as Henry VII, he married Elizabeth of York: the Tudor rose.", mood="teach", shot="close",
  board="1485: Bosworth → Henry VII")
L("tara", "A weak claim, made strong by a battle, a marriage and money.", mood="thinking", shot="close")
L("ticktock", "His heir, Arthur, died in 1502. So the spare became king in 1509, without a battle, and married Arthur's widow, Catherine of Aragon. With the Pope's permission.", mood="teach", shot="close",
  board="1509: Henry VIII marries Catherine")
L("ticktock", "Young Henry jousted, wrote songs and spoke Latin and French. Cardinal Wolsey ran the government.", mood="excited", shot="close",
  boardClear=True, board="Henry: sport + songs. Wolsey: runs it")
L("tara", "So Henry did the jousting, and Wolsey did the homework. That's Dad and Mum.", mood="deadpan", shot="close")
L("ticktock", "Wolsey staged the Field of the Cloth of Gold, 1520. And the Pope named Henry Defender of the Faith, for attacking Luther.", mood="teach", shot="close",
  board="1521: 'Defender of the Faith'")
L("tara", "The Pope's biggest fan. For now.", mood="deadpan", shot="close", gap=0.4)

confess("dad", "VIKRAM RAO · Dad · Defender Of The Remote")
L("dad", "Paati once named me Defender of the Remote. I fought off three cousins at Deepavali.", mood="smug", gap=0.6)

# ---------------- ACT 2: THE GREAT MATTER AND THE BREAK ----------------
card("MONDAY: HISTORY", "Year 8 · The King's Great Matter", 2.4)
scene("classroom", [("tara", 260), ("teacher", 640)])
L("teacher", "By the 1520s, Henry had a Great Matter. Catherine had at least six pregnancies, but only Mary survived.", mood="teach", shot="close",
  boardClear=True, board="Only child to survive: Mary (1516)")
L("tara", "Why wasn't a daughter enough?", mood="thinking", shot="close")
L("teacher", "Henry feared that without a son, civil war could return. And by about 1526, he loved Anne Boleyn.", mood="teach", shot="close",
  board="No son = civil war? + Anne Boleyn")
poof("ticktock", 1000)
L("ticktock", "And Leviticus says whoever marries his brother's wife will be childless. Henry called it God's punishment.", mood="excited", shot="close",
  board="Leviticus: brother's wife = childless")
L("teacher", "So he asked Pope Clement the Seventh for an annulment. But in 1527, the army of Charles the Fifth, Catherine's nephew, sacked Rome.", mood="teach", shot="close",
  boardClear=True, diagram=MATTER)
L("ticktock", "So the Pope couldn't say yes. He did what every committee does: he delayed.", mood="smug", shot="close")
L("tara", "Like Paati.", mood="deadpan", shot="close")
L("teacher", "In 1529 Wolsey's church court failed, and he fell from power.", mood="teach", shot="close",
  board="1529: no annulment. Wolsey falls")

L("teacher", "Two new men said: stop asking the Pope. Thomas Cromwell, Henry's chief minister, and Thomas Cranmer, Archbishop of Canterbury.", mood="teach", shot="close",
  boardClear=True, diagram=BREAK)
L("teacher", "In 1533 Henry married Anne, Cranmer declared the first marriage void, and Elizabeth was born.", mood="teach", shot="close")
L("teacher", "In 1534, the Act of Supremacy: Henry and his heirs, Supreme Head of the Church of England.", mood="teach", shot="close",
  board="1534: Henry = Supreme Head")
L("tara", "Passed by Parliament. So it was law, and everyone had to obey.", mood="thinking", shot="close", board="Made LAW by Parliament")
L("teacher", "Judgement time. Why did Henry break with Rome? Love, an heir, money, power or religion?", mood="teach", shot="close",
  boardClear=True, board="Love? Heir? Money? Power? Religion?")
L("tara", "Anne explains the timing. But the heir mattered most: only a valid marriage could give him a legitimate son.", mood="thinking", shot="close",
  board="ROOT: a legitimate son")
L("tara", "Power and money explain why it lasted. If it was only about Anne, why make his heirs Supreme Head for ever?", mood="determined", shot="close",
  board="WHY IT LASTED: power + money")
L("teacher", "A judgement, with reasons. Lovely.", mood="happy", shot="close", gap=0.4)

L("teacher", "Next, the monasteries: about 800, giving charity and caring for the sick.", mood="teach", shot="close",
  boardClear=True, board="c. 800 monasteries: charity + care")
L("teacher", "In 1535 Cromwell counted the Church's wealth, and sent visitors, who reported that monks behaved badly.", mood="teach", shot="close",
  board="1535: wealth counted, 'visitors' sent")
L("tara", "Visitors sent by Cromwell, who wanted them closed. They knew what answer he wanted.", mood="thinking", shot="close", board="Provenance: Cromwell's own men")
L("teacher", "Exactly. The smaller ones closed in 1536, the rest by 1540.", mood="teach", shot="close",
  boardClear=True, diagram=WHY_CLOSE)
L("ticktock", "The Crown took the land. Gentry bought it, so they had a stake in the break too.", mood="teach", shot="close")
L("teacher", "But in October 1536 the north rose: the Pilgrimage of Grace. Perhaps 30,000 people, led by Robert Aske.", mood="teach", shot="close")
L("teacher", "The Duke of Norfolk promised pardons and a parliament, so the rebels went home.", mood="teach", shot="close", gap=0.4)

# ---------------- MEANWHILE: THE DISSOLUTION OF THE SNACK DRAWER ----------------
card("MEANWHILE, AT HOME", "The Dissolution of the Snack Drawer", 2.2)
scene("kitchen", [("dad", 260), ("tara", 560), ("ticktock", 900)])
L("dad", "My inspector found crumbs in the snack drawer. Corruption! It is hereby dissolved.", mood="smug", shot="close", prop="scroll")
L("tara", "Your inspector was you.", mood="deadpan", shot="close")
L("dad", "Very reliable. The snacks fund my plan, and Mum gets the murukku, so she's on my side.", mood="smug", shot="close", prop="plate")
L("ticktock", "And my junk drawer? I've lived there since the nineteen nineties!", mood="worried", shot="close")
L("dad", "You'll get a small pension. One rubber band a month.", mood="smug", shot="close")
L("tara", "This is a Pilgrimage of Grace. Save the drawer!", mood="determined", shot="close", prop="placard:SAVE OUR SNACKS")
L("dad", "Fine. Go home peacefully, and I promise a family meeting. Pardons for everyone.", mood="smug", shot="close", prop="remote")
L("tara", "We are home.", mood="deadpan", shot="close")
freeze("PILGRIMAGE OF SNACKS", 2.4, narrator="Narrator: The family meeting was never held.")

# ---------------- ACT 3: FEAR, IMAGE AND THE SUCCESSION ----------------
card("SATURDAY: SCHOOL TRIP", "National Museum · Gallery 8: Power & People", 2.6)
scene("museum", [("tara", 300), ("teacher", 620), ("guide", 1000)])
L("tara", "Ms Lim, the rebels went home on a promise. Did Henry keep it?", mood="thinking", shot="close", boardClear=True)
L("teacher", "No. And this part is serious.", mood="solemn", shot="close")
solemn("The Price of Saying No",
       ["1535: Thomas More and Bishop Fisher executed.",
        "1537: about 200 Pilgrimage rebels executed.",
        "Abbots, two queens and Cromwell followed.",
        "1534 Treason Act: even words could be treason."],
       "Henry ruled through fear. Sir Thomas More would not accept Henry as head of the Church, and was executed in 1535. After a new rising in 1537, Henry broke his promises. About two hundred people were executed, including Robert Aske.",
       who="teacher", hold=2.2)
L("tara", "So Henry kept power with Parliament and money. And with fear.", mood="sad", shot="close", gap=0.6)
L("guide", "That's why this painting matters. Holbein's Henry, 1537: legs wide, staring right at you.", mood="neutral", shot="close",
  boardClear=True, board="Holbein, 1537: strong, rich, secure")
L("tara", "But he was ageing, injured and worried about an heir. So it's propaganda. Biased, but useful: it shows the image he wanted.", mood="thinking", shot="close",
  board="Propaganda, but still useful ✔")

scene("museum", [("tara", 260), ("guide", 1000)])
poof("ticktock", 620)
L("ticktock", "The six wives! Divorced, beheaded, died, divorced, beheaded, survived. I was at all six weddings.", mood="excited", shot="close",
  boardClear=True, diagram=WIVES)
L("guide", "Lovely rhyme! But strictly, two marriages were annulled, not divorced.", mood="neutral", shot="close")
sfx("scratch")
L("ticktock", "Annulled. Yes. That's what I said. Very quietly.", mood="flustered", shot="close", gap=0.3)
L("guide", "Jane Seymour finally gave Henry a son, Edward, in 1537, but died days later.", mood="neutral", shot="close")
L("tara", "In 1543 Parliament set the order: Edward, Mary, then Elizabeth. All three reigned.", mood="thinking", shot="close",
  board="1543: Edward → Mary → Elizabeth")
L("ticktock", "Henry died in 1547: ill, suspicious, and still very powerful.", mood="sad", shot="close", gap=0.4)

scene("museum", [("tara", 300), ("teacher", 760)])
L("teacher", "Final question: how did kings rise? Compare William, John and Henry.", mood="teach", shot="close",
  boardClear=True, diagram=THREE_KINGS)
L("tara", "William conquered. John inherited a disputed crown. Henry inherited, thanks to Bosworth and his brother's death.", mood="thinking", shot="close")
L("tara", "But keeping power meant controlling the Church, the nobles and money. William held all three. John lost all three.", mood="thinking", shot="close",
  board="KEEP POWER: Church + nobles + money")
L("tara", "Henry took the Church, used its wealth to win landowners, and made it law through Parliament. So Parliament grew stronger too.", mood="determined", shot="close")
L("teacher", "Circumstances to rise, strategy to stay. Enquiry answered.", mood="happy", shot="close", gap=0.4)

# ---------------- RECAP ----------------
confess("ticktock", "TICKTOCK · Recap Hourglass · Present In 1534 (Unconfirmed)")
L("ticktock", "Recap. One. 1485: Henry Tudor wins at Bosworth.", mood="teach",
  boardClear=True, board="1. 1485: Bosworth, the Tudors win")
L("ticktock", "Two. No son, and the Pope won't annul the marriage.", mood="teach", board="2. Great Matter: no son, Pope delays")
L("ticktock", "Three. 1534: Parliament makes Henry Supreme Head of the Church.", mood="teach", board="3. 1534: Act of Supremacy")
L("ticktock", "Four. Monasteries closed, for money and power.", mood="teach", board="4. Monasteries closed by 1540")
L("ticktock", "Five. Six wives, three heirs. And always check the source.", mood="smug", board="5. Six wives, three heirs, check sources", gap=0.5)

# ---------------- TAG ----------------
scene("living", [("tara", 260), ("dad", 600), ("ticktock", 960)])
L("dad", "My new plan costs twenty-five dollars a month.", mood="worried", shot="close", prop="tablet")
L("tara", "So you need money from Parliament. Which is Mum.", mood="deadpan", shot="close")
L("dad", "Amma? The plan's in crisis. Can I have emergency powers? Just temporarily?", mood="sad", shot="close", prop="phone")
L("tara", "That sentence is next term's whole topic.", mood="deadpan", shot="close")
L("ticktock", "I was four hundred and twenty-one when Henry died. A mere sandling.", mood="smug", shot="wide", gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Ticktock gives you 5 seconds. He was on Henry's desk. Allegedly.", 3.0)
challenge(1, "Which 1534 Act made Henry Supreme Head of the Church of England?", "Act of Supremacy", "Passed by Parliament: Henry and heirs 'Supreme Head'",
  "Question one. Which 1534 Act made Henry Supreme Head of the Church?",
  "The Act of Supremacy. Passed by Parliament.")
challenge(2, "Give one reason Henry closed the monasteries.", "Money (or power)", "Land and wealth for the Crown; no loyalty to the Pope",
  "Question two. Give one reason Henry closed the monasteries.",
  "Money, for the Crown. Or power: monks looked to the Pope.")
challenge(3, "Cromwell's visitors said monks behaved badly. Why might that be unreliable?", "Biased purpose", "Cromwell's own men knew what answer he wanted",
  "Question three. Cromwell's visitors said monks behaved badly. Why might that be unreliable?",
  "They knew Cromwell wanted them closed. If you said they were there, so it's true, go and sit with Dad.")
end_card()
