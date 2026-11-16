# "Who Rules the Remote?" S01E09 "Deeds Not Words, Dad" (Topic: Women's Suffrage in Britain) — season finale
# Format and helpers: see common.py and WRITING.md; check with lint_episode.py.

EP = dict(topic="womens-suffrage", logline="Season finale. Dad declares the remote a democracy with one voter (him), so Mum petitions politely "
          "and Tara chains herself to the sofa. Ticktock (who did not vote in 1918) helps untangle the Reform Acts, suffragists, "
          "suffragettes, the war, 1918 and 1928, and the family holds its first fair election.")

# Episode-only respellings (audio only; subtitles keep the normal spelling). Tested with say.py.
SAY.update({"Markievicz": "Mar-keev-itch", "NUWSS": "N U W S S", "WSPU": "W S P U",
            "Astor": "Aster", "Asquith": "Ask-with", "Derby": "Darby"})

REFORM_BARS = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220" font-family="sans-serif">'
    '<text x="260" y="18" fill="#fcd34d" font-size="17" text-anchor="middle">Roughly how many could vote for an MP?</text>'
    '<line x1="450" y1="30" x2="450" y2="200" stroke="#f8fafc" stroke-width="1.5" stroke-dasharray="5 5"/>'
    '<text x="450" y="214" fill="#94a3b8" font-size="13" text-anchor="middle">all men</text>'
    '<text x="82" y="54" fill="#f8fafc" font-size="15" text-anchor="end">1832</text>'
    '<rect x="90" y="36" width="72" height="26" rx="4" fill="#7dd3fc" fill-opacity="0.25" stroke="#7dd3fc" stroke-width="2"/>'
    '<text x="172" y="54" fill="#7dd3fc" font-size="15">about 1 in 5 men</text>'
    '<text x="82" y="94" fill="#f8fafc" font-size="15" text-anchor="end">1867</text>'
    '<rect x="90" y="76" width="120" height="26" rx="4" fill="#7dd3fc" fill-opacity="0.25" stroke="#7dd3fc" stroke-width="2"/>'
    '<text x="220" y="94" fill="#7dd3fc" font-size="15">about 1 in 3 men</text>'
    '<text x="82" y="134" fill="#f8fafc" font-size="15" text-anchor="end">1884</text>'
    '<rect x="90" y="116" width="216" height="26" rx="4" fill="#7dd3fc" fill-opacity="0.25" stroke="#7dd3fc" stroke-width="2"/>'
    '<text x="316" y="134" fill="#7dd3fc" font-size="15">about 6 in 10 men</text>'
    '<text x="82" y="180" fill="#fca5a5" font-size="15" text-anchor="end">Women</text>'
    '<line x1="90" y1="162" x2="90" y2="194" stroke="#fca5a5" stroke-width="3"/>'
    '<text x="100" y="180" fill="#fca5a5" font-size="15">none, after every one of these Acts</text>'
    '</svg>')

TWO_CAMPS = cards_svg([
    ("Suffragists\nNUWSS · 1897", ["Millicent Fawcett", "peaceful, legal", "petitions, marches", "50,000+ members"], MINT),
    ("Suffragettes\nWSPU · 1903", ["Emmeline Pankhurst", "'Deeds not words'", "windows, arson", "prison, hunger strikes"], LILAC),
], h=150)

ACT_1918 = cards_svg([
    ("1918\nMen", ["all over 21", "(19 if they", "served in the war)"], SKY),
    ("1918\nWomen", ["over 30, with a", "property rule", "about 8.4 million"], GOLD),
    ("1928\nEveryone", ["men and women", "over 21,", "equal terms"], MINT),
], h=130)

FACTORS = cards_svg([
    ("Long-term\nchange", ["education,", "work, laws,", "local votes"], SKY),
    ("Suffragists\nNUWSS", ["50 years of", "persuasion;", "MPs won over"], MINT),
    ("Suffragettes\nWSPU", ["impossible", "to ignore;", "but gave foes", "an excuse"], LILAC),
    ("First\nWorld War", ["war work;", "new rules for", "soldiers;", "Asquith out"], GOLD),
], h=200, title="Why did (some) women win the vote in 1918?")

WHO_COUNTS = timeline_svg([
    (1789, "Rights of Man\n1789"),
    (1832, "Reform Act\n1832"),
    (1918, "Women 30+\n1918"),
    (1928, "Equal votes\n1928"),
    (1948, "Singapore\n1948"),
    (1969, "Votes at 18\n1969"),
], 1780, 1980, h=230, title="Who counts as a voter? To scale")

# ---------------- COLD OPEN ----------------
scene("living", [("tara", 260), ("mum", 600), ("dad", 960)])
L("dad", "From today, the remote is a democracy. Every Friday, an election.", mood="smug", shot="close", prop="remote")
L("mum", "Wonderful. Who gets to vote?", mood="happy", shot="close")
L("dad", "Me. And my armchair cushion. It gets two votes.", mood="smug", shot="close", prop="cushion")
L("tara", "That's Old Sarum. A grassy hill where almost nobody lived, and it elected two MPs.", mood="deadpan", shot="close")
L("mum", "And Tara and me?", mood="annoyed", shot="two")
L("dad", "Remote politics is the public sphere. You two stick to the private sphere.", mood="smug", shot="close", prop="remote")
L("tara", "Separate spheres. Very 1850.", mood="deadpan", shot="close")
freeze("CUSHION GETS 2 VOTES", 2.4, narrator="Narrator: The cushion voted for Dad. Twice.")
confess("tara", "TARA RAO · 12 · Season Finale · Still Can't Vote")
L("tara", "Our last question of the year: how has democracy developed? In this flat, it hasn't.", mood="deadpan", gap=0.6)

title()

# ---------------- ACT 1: WHO COULD VOTE? ----------------
scene("kitchen", [("tara", 340)])
L("tara", "Mum's writing a petition. I'm making a placard.", mood="determined", shot="wide", prop="placard:VOTES FOR TARA")
sfx("drawer")
poof("ticktock", 840)
sfx("sand")
L("ticktock", "Votes? I voted in 1918, you know.", mood="excited", shot="close")
L("tara", "Did you. Who was allowed to vote in 1918?", mood="deadpan", shot="close", boardClear=True, board="1918: who could vote?")
L("ticktock", "Every man over 21, and women over 30 who met a property qualification. I was 792, with property. A drawer.", mood="smug", shot="close",
  board="Men 21+ ✔   Women 30+ with property ✔")
L("tara", "You're an hourglass. Never on the electoral register. Check claims against the rules.", mood="deadpan", shot="close",
  board="Hourglasses ✘")
L("ticktock", "I may have watched somebody vote. Through a window.", mood="flustered", shot="close", gap=0.4)

confess("ticktock", "TICKTOCK · Antique Hourglass · Not A Registered Voter")
L("ticktock", "In my day, nobody asked me to vote. They asked me to time the tea.", mood="smug", gap=0.5)

scene("kitchen", [("tara", 340), ("ticktock", 860)])
L("ticktock", "1800. Only about 3% of adults could vote, all men with property. And no secret ballot, so landlords watched.", mood="teach", shot="close",
  boardClear=True, board="1800: about 3% of adults vote")
L("tara", "And huge Manchester had no MP. So, one man and a cushion. Like Dad.", mood="deadpan", shot="close",
  board="Open voting · rotten boroughs")
L("ticktock", "In 1819, about 60,000 people met peacefully in Manchester to demand reform. Cavalry charged. Around 15 to 18 were killed.", mood="solemn", shot="close")
L("tara", "Peterloo. People died for asking for a vote.", mood="sad", shot="close", gap=0.4)
L("ticktock", "Then the Great Reform Act, 1832. Yet only about 1 in 5 adult men in England and Wales could vote. And voters had to be a 'male person'.", mood="teach", shot="close",
  boardClear=True, diagram=REFORM_BARS)
L("tara", "Then the Chartists, more Reform Acts in 1867 and 1884, and a secret ballot in 1872. And women?", mood="thinking", shot="close")
L("ticktock", "By 1884, about 6 in 10 men could vote. Women? None. Not one.", mood="sad", shot="close", gap=0.4)

confess("dad", "VIKRAM RAO · Dad · Member For Armchair Cushion")
L("dad", "I'm not against votes for women. Just votes for anyone who isn't me. That's equality.", mood="smug", gap=0.6)

# ---------------- ACT 2: SUFFRAGISTS AND SUFFRAGETTES ----------------
scene("classroom", [("tara", 300), ("teacher", 640)])
L("teacher", "Victorians believed in 'separate spheres': men in public life, women at home. Under coverture, a wife's property was her husband's.", mood="teach", shot="close",
  boardClear=True, board="Separate spheres · coverture")
L("tara", "Until the Married Women's Property Acts, 1870 and 1882. And working-class women always worked.", mood="thinking", shot="close",
  board="Property Acts 1870, 1882")
L("teacher", "From 1869, some women could vote for town councils, and from 1870 sit on school boards. Not Parliament.", mood="teach", shot="close",
  board="Local votes ✔   Parliament ✘")
L("tara", "So, run a school, but not choose an MP. Like trusting me with dishes, but not the remote.", mood="deadpan", shot="close", gap=0.3)
L("teacher", "In 1897, women's societies joined to form the NUWSS, led by Millicent Fawcett. The suffragists: petitions, lobbying, peaceful marches.", mood="teach", shot="close",
  boardClear=True, diagram=TWO_CAMPS)
L("tara", "Polite, organised, very good at petitions. That's Mum.", mood="thinking", shot="close")
poof("ticktock", 960)
L("ticktock", "And in 1903, Emmeline Pankhurst and her daughters founded the WSPU. Motto: 'Deeds not words'.", mood="excited", shot="close", prop="placard:DEEDS NOT WORDS")
L("tara", "The suffragettes. Heckling, smashing windows, chaining themselves to railings, later arson. That's me. Minus arson.", mood="deadpan", shot="close")
L("teacher", "Provenance question. Who first called them 'suffragettes', and why?", mood="teach", shot="close",
  boardClear=True, board="'Suffragette': who said it? Why?")
L("tara", "The Daily Mail, in 1906, as an insult. So the WSPU proudly took the name.", mood="deadpan", shot="close",
  board="Daily Mail 1906: an insult, adopted")
L("teacher", "Against: separate spheres, 'too emotional', women don't fight wars. Some women agreed, like Mary Augusta Ward.", mood="teach", shot="close",
  boardClear=True, board="AGAINST: spheres, 'emotional', war")
L("tara", "For: women paid taxes, ran local affairs, and New Zealand let women vote in 1893. Dad's arguments are older than Dad.", mood="annoyed", shot="close",
  board="FOR: taxes, local work, NZ 1893")
L("teacher", "And party politics. Prime Minister Asquith opposed it, and Liberals feared women with property would vote Conservative.", mood="teach", shot="close",
  board="Hidden reason: party advantage", gap=0.4)

# ---------------- MEANWHILE: DEEDS NOT WORDS ----------------
card("MEANWHILE, AT HOME", "Deeds not words", 2.2)
scene("living", [("mum", 260), ("dad", 600), ("tara", 960)])
wear("tara", "sash")
L("mum", "Vikram. A petition. Signed by me, Tara, Paati, and Uncle Hock.", mood="determined", shot="close", prop="scroll")
L("dad", "Uncle Hock doesn't live here. Received, and ignored.", mood="smug", shot="close", prop="remote")
L("tara", "Deeds not words, Dad. I've chained myself to your sofa with Mum's yoga strap.", mood="determined", shot="close", prop="placard:DEEDS NOT WORDS")
L("dad", "That's my seat!", mood="shock", shot="close")
L("mum", "Tara! We agreed. Polite and law-abiding.", mood="worried", shot="two")
L("tara", "The suffragists were polite for nearly forty years, Mum.", mood="deadpan", shot="close")
L("dad", "You see? Far too emotional to hold the remote!", mood="smug", shot="close", prop="remote")
L("mum", "Vikram, you cried at a cooking show last night.", mood="eyeroll", shot="close")
freeze("DEEDS NOT WORDS", 2.4, narrator="Narrator: Dad watched TV from the floor for a week.")

# ---------------- ACT 3: THE COST, THE WAR AND THE VOTE ----------------
wear("tara")
scene("classroom", [("tara", 320), ("teacher", 760)])
L("tara", "Ms Lim, did the suffragettes' violence help or harm the cause?", mood="thinking", shot="close", boardClear=True)
L("teacher", "Historians disagree. Martin Pugh says it hardened opposition. June Purvis says it made the cause impossible to ignore.", mood="teach", shot="close",
  board="Pugh: it harmed   Purvis: it helped")
L("teacher", "But first, what it cost. This part is serious.", mood="solemn", shot="close")
solemn("Prison, Protest and a Death",
       ["Hundreds of suffragettes were sent to prison.",
        "From 1909 many hunger-struck and were force-fed.",
        "1913 'Cat and Mouse Act': freed when weak, re-arrested.",
        "4 June 1913: Emily Wilding Davison, Epsom Derby."],
       "Hundreds of suffragettes went to prison. From 1909 many refused food, and were force-fed: painful, dangerous, and widely condemned. The 1913 Cat and Mouse Act freed hunger strikers when weak, then re-arrested them. That June, at the Epsom Derby, Emily Wilding Davison stepped in front of the King's horse. She died of her injuries four days later.",
       who="teacher", hold=2.2)
L("teacher", "She carried a return ticket, and historians still debate whether she meant to die. Thousands lined the streets for her funeral.", mood="solemn", shot="close")
L("tara", "People paid a real price for a right we take for granted.", mood="sad", shot="close", gap=0.6)
L("teacher", "In 1914 war came, and both groups paused their campaigns. Around 900,000 women made munitions. Others drove buses, nursed and farmed.", mood="teach", shot="close",
  boardClear=True, board="1914–18: war work changes minds")
poof("ticktock", 1060)
L("ticktock", "Soldiers abroad would lose their votes, so the rules needed rewriting. And Lloyd George replaced Asquith.", mood="teach", shot="close",
  board="Soldiers' votes → new rules needed")
L("teacher", "1918: the Representation of the People Act. All men over 21. Women over 30 with a property qualification. About 8.4 million women.", mood="teach", shot="close",
  boardClear=True, diagram=ACT_1918)
L("teacher", "Constance Markievicz was the first woman elected, in 1918. Nancy Astor first took her seat, in 1919. And in 1928, women voted at 21, equal with men.", mood="teach", shot="close",
  board="Markievicz 1918 · Astor 1919")
L("teacher", "So. Why did women win the vote? Judgement, please.", mood="teach", shot="close", boardClear=True, diagram=FACTORS)
L("tara", "Long-term change weakened the old arguments. Suffragists won over MPs; suffragettes made it impossible to ignore.", mood="thinking", shot="close")
L("tara", "But the war mattered most. The campaigns had won the argument; the war gave opponents a reason to change their minds.", mood="determined", shot="close")
L("teacher", "A judgement that links the factors. Excellent.", mood="happy", shot="close", gap=0.4)

# ---------------- THE BIG PICTURE ----------------
card("SATURDAY", "Uncle Hock's stall · the last homework of the year", 2.4)
scene("hawker", [("tara", 400), ("uncle", 1000)])
L("uncle", "Two teh tarik. Why so serious, Tara?", mood="happy", shot="close", prop="teacup")
L("tara", "Last homework: how has democracy developed? From 1789, France's Rights of Man. Man being the key word.", mood="deadpan", shot="close",
  boardClear=True, diagram=WHO_COUNTS)
L("uncle", "Singapore's first election, 1948! Women and men voted on equal terms. But only British subjects 21 and over could register. About 22,000 did.", mood="teach", shot="close")
L("tara", "So it wasn't steady progress. It came in bursts, after crises, through compromises.", mood="thinking", shot="close")
L("tara", "This year, kings took power with armies, and dictators used crises. Democracy had to be won by ordinary people, step by step. And kept.", mood="determined", shot="close", gap=0.5)

# ---------------- THE FIRST FAIR ELECTION ----------------
card("FRIDAY NIGHT", "The family's first fair election", 2.4)
scene("living", [("tara", 220), ("mum", 480), ("dad", 740), ("ticktock", 1020)])
L("dad", "While I was away, you two ran everything. So I grant the vote. To family members over 30 who pay bills.", mood="smug", shot="close", prop="remote")
L("tara", "That's 1918. I'm still left out.", mood="deadpan", shot="close")
L("mum", "Equal terms, Vikram. That's 1928. And a secret ballot, in the teapot.", mood="determined", shot="close", prop="ballot")
L("ticktock", "Do hourglasses get a vote?", mood="worried", shot="close")
L("tara", "Who counts keeps widening. Fine.", mood="happy", shot="close")
L("ticktock", "My first real vote! Nine hundred years I've waited!", mood="excited", shot="close", prop="ballot")
sfx("tick")
L("mum", "A weekly remote rota? Yes: four. No: one.", mood="happy", shot="close", prop="scroll")
L("dad", "I demand a recount!", mood="shock", shot="close")
L("mum", "Still four to one. Paati sent a postal vote.", mood="smug", shot="close", prop="scroll")
sfx("fanfare")
freeze("FOUR VOTES TO ONE", 2.4, narrator="Narrator: The cushion was not allowed to vote.")

# ---------------- RECAP ----------------
confess("ticktock", "TICKTOCK · Recap Hourglass · Registered Voter Since Friday")
L("ticktock", "Recap. One. In 1800, about 3% of adults voted. Reform Acts widened it, for men.", mood="teach",
  boardClear=True, board="1. 1800: 3% vote → Reform Acts, men only")
L("ticktock", "Two. Fawcett's suffragists campaigned peacefully.", mood="teach", board="2. Suffragists: Fawcett, NUWSS, peaceful")
L("ticktock", "Three. Pankhurst's suffragettes chose deeds, not words.", mood="teach", board="3. Suffragettes: Pankhurst, WSPU, militant")
L("ticktock", "Four. 1918: women over 30. 1928: equal votes.", mood="teach", board="4. 1918: women 30+ · 1928: equal at 21")
L("ticktock", "Five. Democracy was won step by step. And check who was allowed to vote.", mood="smug", board="5. Democracy: won step by step", gap=0.5)

# ---------------- TAG ----------------
scene("living", [("tara", 260), ("dad", 600), ("ticktock", 960)])
L("dad", "Tuesday. My rota night. I hold the remote by democratic consent.", mood="smug", shot="close", prop="remote")
L("tara", "Power given by votes, limited by rules. Well done, Dad.", mood="deadpan", shot="close")
L("ticktock", "What a year. Kings, charters, revolutions, votes. I was there for all of it.", mood="smug", shot="close")
L("tara", "You were in a drawer for all of it.", mood="deadpan", shot="close")
L("ticktock", "A drawer with a very good view! And now, a vote. For the next nine hundred years.", mood="flustered", shot="wide", gap=0.8)
sfx("ding")

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Ticktock gives you 5 seconds. He voted on all of them. Allegedly.", 3.0)
challenge(1, "Who founded the WSPU, the suffragettes, in 1903?", "Emmeline Pankhurst", "With daughters Christabel and Sylvia: 'Deeds not words'",
  "Question one. Who founded the W S P U, in 1903?",
  "Emmeline Pankhurst, with her daughters.")
challenge(2, "Give one reason the First World War helped women win the vote.", "War work", "War work changed minds; soldiers needed new voting rules",
  "Question two. Give one reason the First World War helped women win the vote.",
  "War work changed minds, and the voting rules needed rewriting.")
challenge(3, "The Daily Mail first called them 'suffragettes' in 1906. Why?", "To mock them", "A hostile source; the WSPU proudly adopted the name",
  "Question three. Why did the Daily Mail first call them suffragettes?",
  "To mock them. If you said it was a compliment, go and sit with Dad.")
end_card()
