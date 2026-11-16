# "Who Rules the Remote?" S01E02 "1066 And All That Remote" (Topic: William I and the Norman Conquest)
# Format and helpers: see common.py and WRITING.md; check with lint_episode.py.

EP = dict(topic="william-i", logline="Paati flies home without naming an heir to the TV remote, and four claimants pounce. "
          "Ticktock (who was definitely, possibly, not at Hastings) untangles 1066, the Bayeux Tapestry and how William held on to power.")

CLAIMANTS = cards_svg([
    ("Harold\nGodwinson", ["Earl of Wessex", "chosen by", "the Witan", "Edward's", "deathbed pick"], GOLD),
    ("William of\nNormandy", ["Duke, cousin", "'promised'", "in 1051", "Harold's oath", "in 1064"], SKY),
    ("Harald\nHardrada", ["King of", "Norway", "old Viking", "deal; backed", "by Tostig"], ROSE),
    ("Edgar\nÆtheling", ["closest", "blood relative", "about 14", "no army,", "no backers"], MINT),
], h=200)

YEAR_1066 = timeline_svg([
    (1066.01, "Edward dies\n5 Jan"),
    (1066.73, "Stamford Bridge\n25 Sept"),
    (1066.785, "Hastings\n14 Oct"),
    (1066.98, "Crowned\n25 Dec"),
], 1066, 1067, h=200, title="1066, to scale: a quiet spring, a violent autumn")

AUTUMN = timeline_svg([
    (5, "Fulford\n20 Sept"),
    (10, "Stamford Bridge\n25 Sept"),
    (13, "Pevensey\n28 Sept"),
    (29, "Hastings\n14 Oct"),
], 0, 36, h=180, title="Autumn 1066: Harold's two marches", ends=False)

HASTINGS = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220" font-family="sans-serif">'
    '<path d="M0,200 L120,200 C200,200 230,70 330,70 C420,70 450,120 520,130 L520,220 L0,220 Z" fill="#86efac" fill-opacity="0.18" stroke="#86efac" stroke-width="2"/>'
    '<text x="380" y="55" fill="#86efac" font-size="16" text-anchor="middle">Senlac Hill</text>'
    + "".join(f'<circle cx="{262 + i * 14}" cy="{70 + ((330 - 262 - i * 14) / 70) ** 2 * 22 - 2:.0f}" r="6" fill="#fcd34d"/>' for i in range(9)) +
    '<text x="330" y="104" fill="#fcd34d" font-size="16" text-anchor="middle">English shield wall</text>'
    + "".join(f'<rect x="{30 + i * 18}" y="176" width="10" height="10" fill="#7dd3fc"/>' for i in range(6)) +
    '<text x="70" y="168" fill="#7dd3fc" font-size="16" text-anchor="middle">archers</text>'
    + "".join(f'<path d="M{36 + i * 22},{150} l8,-14 l8,14 z" fill="#fca5a5"/>' for i in range(5)) +
    '<text x="80" y="130" fill="#fca5a5" font-size="16" text-anchor="middle">cavalry</text>'
    '<path d="M250,110 C210,150 180,160 150,160" stroke="#f8fafc" stroke-width="2.5" stroke-dasharray="6 5" fill="none"/>'
    '<path d="M150,160 l10,-8 l0,16 z" fill="#f8fafc"/>'
    '<text x="250" y="182" fill="#f8fafc" font-size="15" text-anchor="middle">feigned retreat: English chase,</text>'
    '<text x="250" y="199" fill="#f8fafc" font-size="15" text-anchor="middle">break the wall, get surrounded</text>'
    '</svg>')

PYRAMID = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 230" font-family="sans-serif">'
    '<path d="M180,10 L240,10 L270,60 L150,60 Z" fill="#fcd34d" fill-opacity="0.25" stroke="#fcd34d" stroke-width="2"/>'
    '<text x="210" y="42" fill="#fcd34d" font-size="15" text-anchor="middle" font-weight="bold">KING</text>'
    '<path d="M150,64 L270,64 L305,120 L115,120 Z" fill="#7dd3fc" fill-opacity="0.2" stroke="#7dd3fc" stroke-width="2"/>'
    '<text x="210" y="98" fill="#7dd3fc" font-size="16" text-anchor="middle">barons and bishops</text>'
    '<path d="M115,124 L305,124 L340,170 L80,170 Z" fill="#c4b5fd" fill-opacity="0.2" stroke="#c4b5fd" stroke-width="2"/>'
    '<text x="210" y="152" fill="#c4b5fd" font-size="16" text-anchor="middle">knights</text>'
    '<path d="M80,174 L340,174 L370,222 L50,222 Z" fill="#86efac" fill-opacity="0.2" stroke="#86efac" stroke-width="2"/>'
    '<text x="210" y="203" fill="#86efac" font-size="16" text-anchor="middle">peasants (villeins)</text>'
    '<path d="M392,40 L392,200" stroke="#fca5a5" stroke-width="3"/><path d="M384,190 L392,206 L400,190 Z" fill="#fca5a5"/>'
    '<text x="402" y="95" fill="#fca5a5" font-size="16">LAND</text><text x="402" y="112" fill="#fca5a5" font-size="16">goes down</text>'
    '<path d="M505,200 L505,40" stroke="#86efac" stroke-width="3"/><path d="M497,50 L505,34 L513,50 Z" fill="#86efac"/>'
    '<text x="497" y="150" fill="#86efac" font-size="16" text-anchor="end">LOYALTY,</text><text x="497" y="167" fill="#86efac" font-size="16" text-anchor="end">service, food</text>'
    '<text x="497" y="184" fill="#86efac" font-size="16" text-anchor="end">go up</text>'
    '</svg>')

# ---------------- COLD OPEN ----------------
scene("living", [("tara", 260), ("mum", 600), ("dad", 960)])
L("mum", "Paati's gone back to Chennai.", mood="sad", shot="close")
L("dad", "For a whole month, my mother ruled that television.", mood="worried", shot="close")
L("tara", "And she left without saying who gets it next.", mood="deadpan", shot="close", prop="remote")
L("dad", "Actually, she promised it to me. Deepavali, 2015. I remember it clearly.", mood="smug", shot="close")
L("mum", "She did not. Family council. All in favour of Mum?", mood="determined", shot="two")
L("tara", "She does make dinner.", mood="deadpan", shot="close")
L("mum", "Two votes to one. I accept.", mood="happy", shot="close", prop="remote")
sfx("fanfare")
wear("mum", "crown")
L("dad", "You can't crown yourself the same day she leaves!", mood="shock", shot="close")
L("tara", "Harold Godwinson did. Edward the Confessor died, and Harold was crowned the next day.", mood="deadpan", shot="close")
freeze("CROWNED IN ONE DAY", 2.4, narrator="Narrator: Dad began planning an invasion.")
confess("tara", "TARA RAO · 12 · Studying 1066 · Currently Living It")
L("tara", "Our history question this term is: how did kings rise to power? So far the answer is: whenever somebody leaves a remote unattended.", mood="deadpan", gap=0.6)

title()

# ---------------- ACT 1: THE CLAIMANTS ----------------
scene("kitchen", [("tara", 340)])
L("tara", "I need a historian. Or the next best thing.", mood="determined", shot="wide")
sfx("drawer")
poof("ticktock", 840)
sfx("sand")
L("ticktock", "Who dares open my drawer? Oh. Tara. I was napping.", mood="bored", shot="close")
L("tara", "History emergency. 1066.", mood="neutral", shot="two")
L("ticktock", "1066! My favourite year! I was there, you know. At Hastings. Front row.", mood="excited", shot="close")
L("tara", "It's 2026. Hastings was nine hundred and sixty years ago. You're nine hundred.", mood="deadpan", shot="close",
  boardClear=True, board="Was the source actually THERE?")
L("ticktock", "I was there... in spirit. My grandfather was a sundial. He told me all about it.", mood="flustered", shot="close")
L("tara", "So you're not an eyewitness. You're hearsay.", mood="deadpan", shot="close", board="Eyewitness? ✘   Second-hand story? ✔")
L("ticktock", "Hearsay is a very respected form of evidence. Among sundials.", mood="flustered", shot="close", gap=0.4)

confess("ticktock", "TICKTOCK · Antique Hourglass · 900 Years Old · Allegedly")
L("ticktock", "I am Ticktock. Junk drawer since the nineteen nineties. Before that, a museum. Before that, a pirate ship. Probably.", mood="smug", gap=0.5)

scene("kitchen", [("tara", 340), ("ticktock", 860)])
L("ticktock", "5 January 1066. King Edward the Confessor dies, with no children. No heir. And four people want the crown.", mood="teach", shot="close",
  boardClear=True, board="5 Jan 1066: Edward dies — NO heir", diagram=CLAIMANTS)
L("ticktock", "Harold Godwinson. The most powerful earl in England. The Witan, the king's council, chose him. He said Edward named him on his deathbed.", mood="teach", shot="close")
L("tara", "Chosen by the council, and already in charge. That's Mum.", mood="thinking", shot="close")
L("ticktock", "William, Duke of Normandy. Edward's cousin. He said Edward promised him the throne in 1051, and that Harold swore an oath to support him in 1064.", mood="teach", shot="close")
L("tara", "An old promise nobody else remembers. That's Dad.", mood="deadpan", shot="close")
L("ticktock", "Harald Hardrada, the Viking king of Norway, with an old claim of his own. And Harold's brother Tostig on his side.", mood="teach", shot="close")
L("tara", "Basically the neighbour's cat. Walks in from the north and takes the warmest seat.", mood="deadpan", shot="close")
L("ticktock", "And Edgar Ætheling. Edward's closest blood relative. But only about fourteen, with no army.", mood="sad", shot="close")
L("tara", "Blood, a promise, the council's choice, or an army. Which wins?", mood="thinking", shot="close")
L("ticktock", "In 1066? The army. A claim is only as strong as the swords behind it.", mood="smug", shot="close", board="Claim: blood? promise? chosen? ARMY!")

confess("dad", "VIKRAM RAO · Dad · Duke Of The Sofa")
L("dad", "Anjali once swore an oath to support me. On the rice cooker. That's basically holy relics.", mood="smug", gap=0.6)

# ---------------- ACT 2: THE MUSEUM ----------------
card("SATURDAY: SCHOOL TRIP", "National Museum · Gallery 8: Power & People", 2.6)
scene("museum", [("tara", 300), ("teacher", 620), ("guide", 1000)])
L("teacher", "Right, Year Eight. 1066 on a timeline, to scale. Notice something?", mood="teach", shot="close", boardClear=True, diagram=YEAR_1066)
L("tara", "Nothing happens for months. Then everything happens in three weeks.", mood="thinking", shot="close")
poof("ticktock", 820)
L("ticktock", "Three weeks in 1066? I have notes.", mood="excited", shot="close", boardClear=True, diagram=AUTUMN)
L("tara", "Sorry, Ms Lim. He's my emotional support hourglass.", mood="deadpan", shot="close")
L("ticktock", "Hardrada and Tostig land in the north. Harold races two hundred miles north in about four days, and on 25 September, at Stamford Bridge, both invaders are killed.", mood="teach", shot="close")
L("teacher", "Three days later, the wind changes, and William lands at Pevensey.", mood="teach", shot="close")
L("tara", "So Harold has to march all the way back south. With a tired army.", mood="worried", shot="close")
L("teacher", "14 October 1066. Hastings. Harold's men make a shield wall on a hill. William attacks with archers, foot soldiers and knights on horseback.", mood="teach", shot="close",
  boardClear=True, diagram=HASTINGS)
L("ticktock", "The wall holds for hours. So the Normans pretend to run away. Some English chase them, break the wall, and get surrounded. A feigned retreat.", mood="teach", shot="close")
L("ticktock", "And late in the day, Harold is killed. An arrow, straight in the eye. I remember it vividly.", mood="smug", shot="close")
L("guide", "Actually, historians argue about that arrow. On the tapestry it's not clear which figure is Harold.", mood="neutral", shot="close")
sfx("scratch")
L("ticktock", "It was a very small arrow. Easy to miss.", mood="flustered", shot="close", gap=0.3)

L("guide", "This is our replica of the Bayeux Tapestry! Which is actually embroidery. Seventy metres of it.", mood="excited", shot="close",
  boardClear=True, board="Made: 1070s   For: Bishop Odo")
L("teacher", "Now the key question. Who made it? Probably made in the 1070s, for Bishop Odo. William's half-brother.", mood="teach", shot="close")
L("tara", "So it was made for the winners. It shows Harold breaking his oath, so William looks like the rightful king.", mood="thinking", shot="close", board="Purpose: William = rightful king")
L("teacher", "Exactly. Biased. But still useful: it shows how the Normans wanted the story told, and real armour and ships.", mood="teach", shot="close",
  board="Biased ✔   Still useful ✔")
L("tara", "So it's like Dad telling the story of how he won the remote.", mood="deadpan", shot="close", gap=0.3)
L("teacher", "Last one. Why did William win? Give me a judgement.", mood="teach", shot="close", boardClear=True,
  board="LUCK: the wind, Hardrada attacks first")
L("tara", "Luck helped, and Harold rushed in with a tired army. But William planned for months, got the Pope's blessing, and brought archers and cavalry.", mood="thinking", shot="close",
  board="SKILL: planning, Pope, archers, horses")
L("tara", "So William's preparation mattered most. It let him use the luck when it came.", mood="determined", shot="close", board="MISTAKES: Harold rushed in")
L("teacher", "A proper historian's answer. A judgement, with reasons.", mood="happy", shot="close", gap=0.4)

# ---------------- MEANWHILE: THE BATTLE OF THE SOFA ----------------
card("MEANWHILE, AT HOME", "The Battle of the Sofa", 2.2)
scene("living", [("mum", 300), ("dad", 700)])
L("dad", "Fine, Anjali. You win. Keep the remote. I'm going to bed.", mood="sad", shot="close")
L("mum", "Vikram? Are you okay? Wait!", mood="worried", shot="close", prop="remote")
sfx("whoosh")
scene("living", [("dad", 300), ("mum", 700)])
wear("mum", None)
wear("dad", "crown")
L("dad", "Yes! Feigned retreat! Never leave your shield wall, Anjali!", mood="excited", shot="close", prop="remote")
sfx("fanfare")
L("mum", "You learned that from Tara's homework.", mood="annoyed", shot="close")
L("dad", "I learned it from the Normans.", mood="smug", shot="close", prop="remote")
freeze("FEIGNED RETREAT", 2.4, narrator="Narrator: Mum's shield wall held for four minutes.")

# ---------------- ACT 3: HOLDING ON TO POWER ----------------
card("ONE WEEK LATER", "The Norman Conquest of the living room", 2.4)
scene("living", [("tara", 260), ("dad", 620), ("ticktock", 980)])
L("tara", "Dad. Why is there a fort made of cushions around the sofa?", mood="deadpan", shot="close")
L("dad", "It's a castle. Conquering is easy. Keeping it is the hard part.", mood="smug", shot="close", prop="remote")
L("ticktock", "Quite right. William built castles everywhere. Motte and bailey: an earth mound with a wooden tower, and a fenced yard. Up in weeks. Later, stone, like the White Tower in London.", mood="teach", shot="close",
  boardClear=True, board="Motte + bailey: quick, then STONE")
L("dad", "Next, the channels. The king owns everything. Anjali gets the cooking channel, in return for loyalty. Tara gets documentaries, in return for washing up.", mood="smug", shot="close")
L("ticktock", "And what do I get?", mood="neutral", shot="close")
L("dad", "You get to watch. From the drawer.", mood="smug", shot="close")
L("ticktock", "I'm a peasant! Nine hundred years old and I'm a villein!", mood="flustered", shot="close", diagram=PYRAMID)
L("ticktock", "Well. That is the feudal system. The king owns all the land. Barons get land in return for loyalty, called fealty, and knights. Peasants farm, and feed everyone.", mood="teach", shot="close")
L("tara", "And by 1086, almost all the big landowners were Normans.", mood="thinking", shot="close", gap=0.3)

scene("living", [("tara", 260), ("mum", 620), ("dad", 960)])
L("mum", "Fine, Your Majesty. Then I'm counting everything. Every snack you've hidden.", mood="determined", shot="close", prop="scroll")
L("dad", "Every snack?", mood="shock", shot="close")
L("mum", "Fourteen. Including the ones in the piano.", mood="smug", shot="close", prop="scroll")
L("tara", "That's the Domesday Book. William's survey of England: who held the land, how many people, even how many pigs. So he knew what he owned, and what to tax.", mood="teach", shot="close",
  boardClear=True, board="Domesday Book 1086: who owns what?")
L("mum", "Knowledge is control. Vikram, you owe the household three packets of murukku.", mood="smug", shot="close", board="→ TAX + CONTROL", gap=0.4)

# ---------------- THE SERIOUS PART ----------------
scene("classroom", [("tara", 320), ("teacher", 760)])
L("tara", "Ms Lim, was all that really enough to stop the English rebelling?", mood="thinking", shot="close", boardClear=True)
L("teacher", "No. And this part isn't a joke, so let's be serious for a moment.", mood="solemn", shot="close")
solemn("The Harrying of the North",
       ["1069: the north rebelled, helped by a Danish fleet.",
        "William's soldiers burned villages, crops and animals.",
        "Famine followed. Many thousands of people died.",
        "In 1086, much of Yorkshire was still listed as 'waste'."],
       "In 1069 the north of England rebelled. William's answer was to destroy it. His soldiers burned villages, crops and animals across Yorkshire. In the famine that followed, many thousands of ordinary people died. Most of them had never fought anyone.",
       who="teacher", hold=2.2)
L("teacher", "One monk, writing more than fifty years later, said over one hundred thousand died. Historians think that may be too high. But they agree the suffering was terrible.", mood="solemn", shot="close")
L("tara", "So William kept power with castles, land and records. And with fear.", mood="sad", shot="close", gap=0.6)

# ---------------- RECAP ----------------
confess("ticktock", "TICKTOCK · Recap Hourglass · Definitely Not At Hastings")
L("ticktock", "Recap. One. 1066: no heir, four claimants.", mood="teach",
  boardClear=True, board="1. 1066: Edward dies, 4 claimants")
L("ticktock", "Two. Harold won at Stamford Bridge, then lost at Hastings.", mood="teach", board="2. Stamford Bridge → Hastings (14 Oct)")
L("ticktock", "Three. William won through luck, preparation, and Harold's mistakes.", mood="teach", board="3. Luck + preparation + Harold's mistakes")
L("ticktock", "Four. He kept power with castles, feudalism, Domesday, and force.", mood="teach", board="4. Castles, feudalism, Domesday, force")
L("ticktock", "Five. Always ask who made a source, and why. Even a very handsome hourglass.", mood="smug", board="5. Who made the source? Why?", gap=0.5)

# ---------------- TAG ----------------
scene("living", [("tara", 260), ("dad", 600), ("ticktock", 960)])
wear("dad", "crown")
L("tara", "Dad. The rest of this family wants limits on the King of the Remote. In writing.", mood="determined", shot="close", prop="placard:FAMILY CHARTER")
L("dad", "Never! I rule by divine right!", mood="smug", shot="close", prop="remote")
L("ticktock", "Oh, a charter! That's 1215. King John. I was there, you know.", mood="excited", shot="close")
L("tara", "You were not there.", mood="deadpan", shot="close")
L("ticktock", "I was eighty nine! I could have been there!", mood="flustered", shot="close")
L("tara", "Okay. That one's actually possible.", mood="shock", shot="close")
sfx("ding")
L("ticktock", "Finally. Some respect.", mood="smug", shot="wide", gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Ticktock gives you 5 seconds. He was there for all of them.", 3.0)
challenge(1, "Who did the Witan choose as king in January 1066?", "Harold Godwinson", "Most powerful earl + Edward's deathbed choice",
  "Question one. Who did the Witan choose as king, in January 1066?",
  "Harold Godwinson. The most powerful earl in England.")
challenge(2, "Harold won one battle in 1066 before Hastings. Which one?", "Stamford Bridge", "25 Sept 1066: beat Hardrada and Tostig",
  "Question two. Harold won one battle in 1066, before Hastings. Which one?",
  "Stamford Bridge, against Harald Hardrada and Tostig.")
challenge(3, "The Bayeux Tapestry was probably made for Bishop Odo. Why might it be one-sided?", "Norman view", "Made for William's family: shows him as rightful king",
  "Question three. The Bayeux Tapestry was probably made for Bishop Odo. Why might it be one sided?",
  "Odo was William's half-brother, so it tells the winners' story. If you said primary means reliable, go and sit with Dad.")
end_card()
