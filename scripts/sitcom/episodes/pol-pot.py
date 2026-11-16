# "Totally Raotional" History S01E09 "Remembering Year Zero" (Topic: Pol Pot & the Khmer Rouge)
# Format and helpers: see common.py; check with lint_episode.py.
# A "VERY SPECIAL EPISODE": mostly serious and warm, framed around Tara preparing a respectful school
# presentation. Light family moments only at the very start and end; no gags, freeze-frames or comic SFX
# in between. Nobody impersonates Pol Pot. War, genocide and the fall of the regime are inside serious().

EP = dict(topic="pol-pot", logline="A very special episode. Tara prepares a respectful presentation on Cambodia 1953-79 with help from Chrono and Mum: the war spills over, the Khmer Rouge take power, Year Zero, the genocide, justice and memory.")

TIMELINE = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 150"><line x1="20" y1="70" x2="500" y2="70" stroke="#f8fafc" stroke-width="3"/>'
    '<g fill="#fde047"><circle cx="40" cy="70" r="7"/><circle cx="150" cy="70" r="7"/><circle cx="260" cy="70" r="7"/><circle cx="370" cy="70" r="7"/><circle cx="480" cy="70" r="7"/></g>'
    '<g font-family="sans-serif" font-size="17" text-anchor="middle" fill="#f8fafc">'
    '<text x="40" y="45">1953</text><text x="150" y="45">1969</text><text x="260" y="45">1970</text><text x="370" y="45">1975</text><text x="480" y="45">1979</text></g>'
    '<g font-family="sans-serif" font-size="14" text-anchor="middle" fill="#7dd3fc">'
    '<text x="40" y="100">Independence</text><text x="150" y="100">US bombing</text><text x="260" y="100">Lon Nol coup</text>'
    '<text x="370" y="100">Khmer Rouge</text><text x="370" y="118">take power</text><text x="480" y="100">Vietnam</text><text x="480" y="118">invades</text></g></svg>'
)

# ---------------- COLD OPEN (light) ----------------
scene("living", [("tara", 300), ("mum", 640), ("dad", 980)])
L("tara", "I have a presentation for Ms Lim. Pol Pot and the Khmer Rouge.", mood="thinking", shot="close", prop="book")
L("dad", "A presentation! I can help. Star wipes. Sound effects. A drum roll.", mood="excited", shot="close", prop="tablet")
L("tara", "Dad. Not for this one.", mood="neutral", shot="close")
L("dad", "Right. Of course. Sorry, sweetheart.", mood="sad", shot="close")
L("mum", "I'll make you a plan. Research Monday, writing Tuesday, practice Wednesday. Colour coded.", mood="determined", shot="close")
L("dad", "And I'll do snacks. Calm snacks. Mango.", mood="happy", shot="close", gap=0.4)
confess("tara", "TARA RAO · 12 · Preparing Something Important")
L("tara", "Most weeks, my family is the chaos. This week, I need them calm. This one is about real people. I want to get it right.", mood="serious", gap=0.6)

title()

# ---------------- ACT 1: CAMBODIA, AND THE WAR SPILLS OVER ----------------
scene("living", [("tara", 380)])
L("tara", "Chrono? I need your help. Properly.", mood="serious", shot="wide")
poof("chrono", 860)
L("chrono", "For this one, the sarcasm stays in the clock. Let's start before the war.", mood="serious", shot="close")
L("chrono", "Cambodia is home to the Khmer people. Their empire built Angkor Wat in the twelfth century, still the largest religious monument in the world.", mood="teach", shot="close", boardClear=True, board="Khmer Empire · Angkor Wat (12th century)")
L("chrono", "France ruled Cambodia from eighteen sixty three. It became independent in nineteen fifty three, under King Norodom Sihanouk.", mood="teach", shot="close", board="1863–1953  French rule → independence")
L("chrono", "Sihanouk tried to keep Cambodia neutral in the Vietnam War. Most Cambodians were poor rice farmers, far from the capital, Phnom Penh.", mood="teach", shot="close", board="Sihanouk: neutral · rural poverty")
L("tara", "And Pol Pot?", mood="thinking", shot="close")
L("chrono", "Born Saloth Sar, he studied in Paris and became a communist. Back home he taught, then led a small, secret party in the jungle.", mood="teach", shot="close", board="Saloth Sar → 'Pol Pot': Paris, communism")
L("chrono", "Sihanouk called them the Khmer Rouge. The Red Khmers.", mood="teach", shot="close", gap=0.4)
serious()
L("chrono", "Then the Vietnam War spilled over. North Vietnam ran supply routes through eastern Cambodia. From nineteen sixty nine, the United States bombed them, at first in secret.", mood="serious", shot="close", boardClear=True, board="1953 to 1979", diagram=TIMELINE)
L("chrono", "The bombing lasted until nineteen seventy three. It devastated the countryside, and historians estimate it killed tens of thousands of people, perhaps many more.", mood="serious", shot="close")
L("chrono", "Many villagers lost homes and families. The Khmer Rouge used their anger and fear to recruit.", mood="serious", shot="close")
L("chrono", "In March nineteen seventy, while Sihanouk was abroad, General Lon Nol took power in a coup. Sihanouk then backed the Khmer Rouge, and many villagers who loved him followed.", mood="serious", shot="close", board="1970  Lon Nol's coup · civil war")
L("chrono", "Five years of civil war followed. Lon Nol's American-backed government was weak and corrupt. Refugees crowded into Phnom Penh.", mood="serious", shot="close")
L("tara", "War, a weak government, and a group ready to take advantage.", mood="serious", shot="close", gap=0.6)

# ---------------- ACT 2: THE LIBRARY — POWER, YEAR ZERO, GENOCIDE ----------------
scene("library", [("mum", 300), ("tara", 620)])
L("mum", "I found some books. And my colleague Sophea says you can ask her questions. Her mother was a child in Cambodia then.", mood="serious", shot="close", prop="book")
L("tara", "Thank you. I'll write my questions carefully.", mood="serious", shot="close")
poof("chrono", 960)
L("chrono", "Then let's be careful with the facts. On the seventeenth of April, nineteen seventy five, the Khmer Rouge captured Phnom Penh.", mood="serious", shot="close", boardClear=True, board="17 Apr 1975  Khmer Rouge take Phnom Penh")
L("chrono", "Within days, they forced the whole city out. About two million people, even the sick and the elderly. Many were told it was only for a few days.", mood="serious", shot="close", board="The whole city forced out within days")
L("chrono", "The country was renamed Democratic Kampuchea. It was ruled in secret by Angkar, the Organisation. Its leader, Pol Pot, was Brother Number One.", mood="serious", shot="close", board="'Democratic Kampuchea' · Angkar")
L("chrono", "Influenced by Mao's China and by extreme nationalism, they wanted a pure, rural, communist society. Starting from nothing. They called it Year Zero.", mood="serious", shot="close", board="Year Zero: start society from nothing")
L("chrono", "Money, markets, schools, religion and private property were abolished. Families were separated. Almost everyone was forced to work in the fields, with very little food.", mood="serious", shot="close", boardClear=True, board="No money, schools, religion, property")
L("chrono", "Villagers were called Base People. City people were New People, and treated with suspicion.", mood="serious", shot="close", board="'Base People' vs 'New People'")
L("chrono", "Anyone seen as an enemy was targeted. Teachers, doctors, monks, the educated. And ethnic minorities, including Vietnamese, Cham Muslims and Chinese Cambodians.", mood="serious", shot="close", board="Targeted: educated, monks, Cham, Vietnamese")
L("mum", "Sophea's mother was a New Person. She was nine. She told Sophea she missed school most of all.", mood="sad", shot="close", gap=0.8)
L("chrono", "Between nineteen seventy five and nineteen seventy nine, around one and a half to two million people died. About a quarter of Cambodia's population.", mood="serious", shot="close", boardClear=True, board="1975–79: about 1.5–2 million died (~1 in 4)")
L("chrono", "They died from execution, starvation, overwork and untreated disease. This was genocide, and crimes against humanity.", mood="serious", shot="close")
L("chrono", "A former high school in Phnom Penh became a prison, S twenty one, also called Tuol Sleng. Very few of the many thousands held there survived.", mood="serious", shot="close", board="S-21 (Tuol Sleng) prison")
L("chrono", "Many were killed at Choeung Ek, one of the killing fields. Today it is a memorial.", mood="serious", shot="close", board="Choeung Ek: killing field, now a memorial")
L("tara", "Every number is a person. A grandparent. A teacher. A child who missed school.", mood="sad", shot="close", gap=1.5)
L("chrono", "Yes. Always remember that.", mood="sad", shot="close", gap=1.0)
L("chrono", "The regime also attacked Vietnam across the border. In December nineteen seventy eight, Vietnam invaded. On the seventh of January, nineteen seventy nine, Phnom Penh fell.", mood="serious", shot="close", boardClear=True, board="7 Jan 1979  Vietnamese army takes Phnom Penh")
L("chrono", "The Khmer Rouge fought on from the jungle for years. Pol Pot died in nineteen ninety eight, without ever facing trial.", mood="serious", shot="close", board="1998  Pol Pot dies, never faced trial", gap=1.0)
serious(False)

# ---------------- ACT 3: HOME — JUSTICE, MEMORY, COMPARISON ----------------
card("LATER THAT WEEK", "Rehearsal night", 2.4)
scene("living", [("tara", 300), ("mum", 620), ("chrono", 960)])
L("mum", "Did anyone face justice?", mood="serious", shot="close")
L("chrono", "Some did, decades later. Cambodia and the United Nations set up a special court, the Extraordinary Chambers in the Courts of Cambodia.", mood="teach", shot="close", boardClear=True, board="ECCC: UN-backed court in Cambodia")
L("chrono", "In twenty ten it convicted Duch, the head of S twenty one. In twenty eighteen, two senior leaders, Nuon Chea and Khieu Samphan, were convicted of genocide.", mood="teach", shot="close", board="2010 Duch · 2018 Nuon Chea, Khieu Samphan")
L("mum", "Justice so late. Is it still worth it?", mood="thinking", shot="close")
L("chrono", "Survivors gave evidence and were heard. And a court creates a record that nobody can easily deny.", mood="serious", shot="close")
L("chrono", "Cambodians remember through memorials, the Tuol Sleng Genocide Museum, and survivors' stories. Vann Nath, who survived S twenty one, painted what he saw, so people would know.", mood="serious", shot="close", board="Memory: memorials, museums, survivors")
L("tara", "That's how I'll end my presentation. With why remembering matters.", mood="determined", shot="close")
L("tara", "Ms Lim also wants a comparison with Hitler and Mao.", mood="thinking", shot="close")
L("chrono", "Three headings. Crisis. Weak government. Leadership.", mood="teach", shot="close", boardClear=True, board="Comparing Hitler, Mao and Pol Pot")
L("tara", "Crisis. The Depression in Germany. Invasion and civil war in China. War and bombing in Cambodia.", mood="thinking", shot="close", board="Crisis: Depression · invasion · war, bombing")
L("tara", "Weak government. Weimar, the corrupt Nationalists, and Lon Nol.", mood="thinking", shot="close", board="Weak govt: Weimar · Nationalists · Lon Nol")
L("chrono", "Leadership is the difference. Hitler and Mao built huge personality cults. Pol Pot hid behind a secret organisation.", mood="teach", shot="close", board="Leader: speeches · peasants · secrecy")
L("chrono", "Hitler was handed power, then destroyed democracy. Mao and Pol Pot won it by war.", mood="teach", shot="close", board="Hitler appointed · Mao, Pol Pot won by war")
L("tara", "So my judgement. Crisis opened the door every time. But who walked through it, and how, made the difference.", mood="determined", shot="close")
L("chrono", "That's a real historian's answer.", mood="happy", shot="close", gap=0.6)

confess("chrono", "CHRONO · 950 Years Old · Remembering")
L("chrono", "Recap. First. Neutral, rural Cambodia was dragged into the Vietnam War, and bombed.", mood="teach", boardClear=True, board="1. War spills over · US bombing 1969–73")
L("chrono", "Second. Lon Nol's coup in nineteen seventy, then civil war, and a weak, corrupt government.", mood="teach", board="2. 1970 coup → civil war, weak Lon Nol")
L("chrono", "Third. The seventeenth of April, nineteen seventy five. The Khmer Rouge take Phnom Penh. Year Zero.", mood="teach", board="3. 17 Apr 1975 → Year Zero")
L("chrono", "Fourth. Around one and a half to two million died. Genocide. Vietnam's invasion ended it in January nineteen seventy nine.", mood="serious", board="4. ~1.5–2 million died · Jan 1979 ends it")
L("chrono", "And finally. Justice came late, through the courts and through memory. Remember the people.", mood="serious", board="5. ECCC verdicts · remember the people", gap=0.8)

# ---------------- TAG (light) ----------------
scene("living", [("tara", 260), ("mum", 560), ("dad", 860)])
L("tara", "Ms Lim said it was thoughtful and respectful. And Sophea's mother sent a thank you message.", mood="happy", shot="close")
L("mum", "I'm very proud of you.", mood="happy", shot="close")
L("dad", "I brought the mango. Completely normal mango. No drum roll.", mood="happy", shot="close", prop="plate")
L("tara", "Perfect mango, Dad.", mood="happy", shot="close")
L("dad", "I'll take it.", mood="happy", shot="close")
L("chrono", "Thank you for remembering. Goodnight, everyone.", mood="neutral", shot="wide", offstage=True, gap=0.8)

# ---------------- PAUSE AND REFLECT ----------------
card("PAUSE AND REFLECT", "Three questions to check your understanding.", 3.0)
challenge(1, "On what date did the Khmer Rouge take Phnom Penh?", "17 April 1975", "The city was emptied within days",
  "Question one. On what date did the Khmer Rouge take Phnom Penh?",
  "The seventeenth of April, nineteen seventy five. Within days, the whole city was forced out.")
challenge(2, "What did the Khmer Rouge call their plan to restart society from nothing?", "Year Zero", "No money, schools, religion or property",
  "Question two. What did the Khmer Rouge call restarting society from nothing?",
  "Year Zero. Money, schools and religion were abolished, and families split up. Around one and a half to two million people died.")
challenge(3, "Hitler was appointed. How did Pol Pot gain power?", "Civil war", "Won by force, 1970–75, against Lon Nol",
  "Question three. Hitler was appointed to power. How did Pol Pot gain power?",
  "By winning a civil war. The Khmer Rouge took power by force.")
end_card()
