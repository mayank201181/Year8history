# "Who Rules the Remote?" S01E06 "The Long March To The Sofa" (Topic: Mao Zedong and the Communist Victory in China)
# Format and helpers: see common.py and WRITING.md; check with lint_episode.py.
# Serious topic (WRITING.md §5, §7): the famine is handled by Ms Lim in a solemn() beat, with no family humour in
# that act; nobody is dressed as Mao; the family parallel is only the *mechanism* (retreat to the countryside, win
# support one village at a time, return to take the capital) and it stops before Mao in power is discussed.

EP = dict(topic="mao-rise", logline="Outvoted two to one at home, Tara retreats to the 'countryside' (Uncle Hock's stall) to win over her cousins one by one. "
          "Ticktock (who definitely crawled across Luding Bridge, allegedly) helps explain how Mao Zedong came to power, and what that power cost.")

# Audio-only respellings for this episode (tested with say.py; subtitles keep the normal spelling).
SAY.update({"Zunyi": "Zoon-yee", "Jiangxi": "Jahng-shee", "Shaanxi": "Shahn-shee", "Qing": "Ching"})

CRISIS = cards_svg([
    ("Qing falls\n1911–12", ["2,000+ years", "of emperors", "come to", "an end"], GOLD),
    ("Foreign\npowers", ["unequal", "treaties;", "Shandong", "to Japan"], ROSE),
    ("Warlords\n1916–28", ["private", "armies;", "government", "in name only"], SKY),
    ("Peasants\n80–90%", ["poor, in debt", "up to half", "the harvest", "as rent"], MINT),
], h=200, title="China in crisis, 1911–1927")

MARCH_MAP = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 270" font-family="sans-serif">'
    '<text x="260" y="18" fill="#fcd34d" font-size="16" text-anchor="middle">The Long March, 1934–35 (schematic, not to scale)</text>'
    '<text x="28" y="52" fill="#94a3b8" font-size="14" text-anchor="middle">N</text>'
    '<path d="M28,78 L28,58" stroke="#94a3b8" stroke-width="2"/><path d="M22,64 L28,54 L34,64 Z" fill="#94a3b8"/>'
    '<path d="M455,232 C380,222 300,196 240,200 C180,204 140,236 110,238 C92,226 90,190 95,160 '
    'L110,130 L120,95 C180,60 250,52 300,52" stroke="#fca5a5" stroke-width="3" stroke-dasharray="8 5" fill="none"/>'
    '<path d="M298,44 L312,52 L298,60 Z" fill="#fca5a5"/>'
    '<circle cx="455" cy="232" r="7" fill="#fcd34d"/>'
    '<text x="508" y="260" fill="#fcd34d" font-size="14" text-anchor="end">Jiangxi, Oct 1934: about 86,000 set out</text>'
    '<circle cx="240" cy="200" r="6" fill="#7dd3fc"/>'
    '<text x="250" y="184" fill="#7dd3fc" font-size="14" text-anchor="middle">Zunyi, Jan 1935</text>'
    '<circle cx="110" cy="238" r="5" fill="#f8fafc"/>'
    '<text x="110" y="261" fill="#f8fafc" font-size="14" text-anchor="middle">Jinsha River</text>'
    '<circle cx="95" cy="160" r="6" fill="#c4b5fd"/>'
    '<text x="108" y="165" fill="#c4b5fd" font-size="14">Luding Bridge, May 1935</text>'
    '<circle cx="110" cy="130" r="5" fill="#f8fafc"/>'
    '<text x="122" y="134" fill="#f8fafc" font-size="14">snowy mountains</text>'
    '<circle cx="120" cy="95" r="5" fill="#86efac"/>'
    '<text x="132" y="99" fill="#86efac" font-size="14">grasslands (bogs)</text>'
    '<circle cx="320" cy="52" r="7" fill="#fcd34d"/>'
    '<text x="332" y="48" fill="#fcd34d" font-size="14">N. Shaanxi, Oct 1935:</text>'
    '<text x="332" y="66" fill="#fcd34d" font-size="14">about 8,000 arrive</text>'
    '<circle cx="350" cy="92" r="4" fill="#86efac"/>'
    '<text x="362" y="96" fill="#86efac" font-size="13">Yan\'an: base from 1937</text>'
    '</svg>')

WAR = cards_svg([
    ("Nationalists\n(GMD)", ["fought most of the", "big battles", "printed money:", "inflation", "corruption"], ROSE),
    ("Communists\n(CCP)", ["guerrillas behind", "Japanese lines", "cut rents", "members: 40,000", "→ 1.2 million"], MINT),
], h=210, title="War with Japan, 1937–1945")

ROAD = timeline_svg([
    (1911.8, "Qing falls\n1911"),
    (1921.5, "CCP founded\n1921"),
    (1927.3, "Shanghai\n1927"),
    (1934.8, "Long March\n1934"),
    (1937.5, "Japan\ninvades 1937"),
    (1949.75, "PRC\n1 Oct 1949"),
], 1910, 1952, h=220, title="1911–1949, to scale: a long road")

COMPARE = cards_svg([
    ("Hitler", ["crisis: defeat,", "Depression", "LEGAL route:", "appointed", "Chancellor 1933"], SKY),
    ("Both", ["national", "humiliation,", "weak govts,", "propaganda,", "'saviour' image"], GOLD),
    ("Mao", ["crisis: wars,", "invasion", "REVOLUTION:", "civil war won,", "1 Oct 1949"], ROSE),
], h=190, title="Enquiry: two routes to power")

# ---------------- COLD OPEN ----------------
scene("living", [("tara", 260), ("mum", 600), ("dad", 960)])
L("dad", "Family council. The remote belongs to whoever pays the electricity bill.", mood="smug", shot="close", prop="remote")
L("mum", "Yes. Cooking show at seven, cricket at eight. Two votes to one.", mood="happy", shot="close")
L("tara", "Fine. Keep the capital. I'm taking my campaign to the countryside.", mood="determined", shot="close")
L("mum", "Tara, this is Singapore. There is no countryside.", mood="eyeroll", shot="close")
L("tara", "There's Uncle Hock's stall. My cousins are there every day. Nobody asks them anything.", mood="deadpan", shot="close")
L("dad", "The cousins? They're eight. They don't even have phones.", mood="smug", shot="two", prop="remote")
L("tara", "In 1927, Mao had about a thousand followers in the mountains. Twenty-two years later, he ruled China.", mood="deadpan", shot="close")
freeze("RETREAT TO THE STALL", 2.4, narrator="Narrator: Dad had never heard of the Long March. Yet.")
confess("tara", "TARA RAO · 12 · Outvoted · Going Rural")
L("tara", "This term: how did dictatorships come to power? Today, Mao Zedong. I'm borrowing one strategy. Just one. The rest of his record is a warning.", mood="deadpan", gap=0.6)

title()

# ---------------- ACT 1: CHINA IN CRISIS ----------------
scene("kitchen", [("tara", 340)])
L("tara", "I need a historian. Or the drawer.", mood="determined", shot="wide")
sfx("drawer")
poof("ticktock", 840)
sfx("sand")
L("ticktock", "Who disturbs my nap? Oh. Tara.", mood="bored", shot="close")
L("ticktock", "Easy. Everyone knew the communists would win. I said so in 1912!", mood="excited", shot="close")
L("tara", "The Communist Party was founded in 1921. In 1912, it didn't exist.", mood="deadpan", shot="close",
  boardClear=True, board="Hindsight: nobody knew the ending")
L("ticktock", "Then I predicted it early. Very early.", mood="flustered", shot="close", gap=0.4)

confess("ticktock", "TICKTOCK · Antique Hourglass · Predicts Everything · Afterwards")
L("ticktock", "I have predicted every great event in history. Usually the next Tuesday.", mood="smug", gap=0.5)

scene("kitchen", [("tara", 340), ("ticktock", 860)])
L("ticktock", "China, 1911. Revolts everywhere, and the Qing dynasty falls. Two thousand years of emperors, gone. Then foreign bullying, and warlords.", mood="teach", shot="close",
  boardClear=True, board="1911–12: the last emperor goes", diagram=CRISIS)
L("tara", "In 1919, Versailles gave Germany's rights in Shandong to Japan. Students protested on 4 May.", mood="thinking", shot="close",
  board="4 May 1919: students protest")
L("ticktock", "And most Chinese were poor peasants, paying up to half their harvest in rent.", mood="sad", shot="close")
L("ticktock", "Two parties stepped forward. Sun Yat-sen's Nationalists, the Guomindang. And the tiny Communist Party, including Mao.", mood="teach", shot="close",
  boardClear=True, board="GMD: Sun Yat-sen, then Chiang Kai-shek")
L("tara", "The big party, holding the cities: Dad on the sofa. The tiny one nobody listens to: me.", mood="deadpan", shot="close",
  board="CCP: founded 1921, about 50 members")
L("ticktock", "They worked together against the warlords. But in April 1927, Chiang Kai-shek's forces turned on the communists in Shanghai, and killed many.", mood="sad", shot="close",
  board="12 April 1927: Shanghai Massacre")
L("tara", "So the survivors fled to the countryside.", mood="sad", shot="close", gap=0.4)

confess("dad", "VIKRAM RAO · Dad · Holds The Capital (The Sofa)")
L("dad", "Let her go. Nobody ever took power from a hawker centre.", mood="smug", gap=0.6)

# ---------------- ACT 2: THE COUNTRYSIDE ----------------
card("SATURDAY: THE COUNTRYSIDE", "Uncle Hock's stall · Cousins: three · Teh tarik: one", 2.6)
scene("hawker", [("tara", 300), ("uncle", 1000)])
L("uncle", "Tara! Alone ah? Your cousins are at table six.", mood="happy", shot="close")
poof("ticktock", 640)
L("ticktock", "Mao's big idea. Soviet communists said revolution starts with city workers. Mao said: in China, it's the peasants.", mood="teach", shot="close",
  boardClear=True, board="Mao: PEASANTS lead, not city workers")
L("uncle", "Aiyoh. The hourglass talks.", mood="shock", shot="close")
L("ticktock", "Mao, a peasant's son and teacher from Hunan, said power grows out of the barrel of a gun.", mood="teach", shot="close")
L("tara", "Careful. That idea is from 1927, but the famous wording is from 1938.", mood="deadpan", shot="close",
  board="'Barrel of a gun': idea 1927, words 1938")
L("ticktock", "From 1931, the Jiangxi Soviet gave landlords' land to poor peasants. That won support. But it was violent: purges killed thousands.", mood="teach", shot="close",
  board="1931–34 Jiangxi Soviet: land + violence")
L("ticktock", "And guerrilla war. The enemy advances, we retreat. The enemy camps, we harass.", mood="teach", shot="close",
  boardClear=True, board="Advances → retreat · Camps → harass")
L("uncle", "The enemy tires, we attack. Like the pigeons at my stall.", mood="smug", shot="close", board="Tires → attack · Retreats → pursue")
L("tara", "And rules: speak politely, pay fairly, return what you borrow. Warlord armies looted. These soldiers mostly didn't.", mood="thinking", shot="close",
  board="Eight Points: polite, pay, return")
L("tara", "Right. I return Arjun's charger. I pay for Zara's teh tarik. Fairly.", mood="determined", shot="close", prop="phone")
L("uncle", "Arjun's with you. Zara also. Ravi wants murukku.", mood="happy", shot="close", prop="plate")
L("uncle", "Then Ravi also. Three cousins, one teh tarik. Cheap revolution, lah.", mood="happy", shot="close", gap=0.4)

# ---------------- ACT 2b: THE LONG MARCH ----------------
card("SUNDAY: SCHOOL TRIP", "National Museum · Gallery 8: Power & People", 2.6)
scene("museum", [("tara", 220), ("teacher", 480), ("guide", 1040)])
L("teacher", "In 1934, Chiang's armies surrounded the Jiangxi Soviet. So in October, about 86,000 broke out.", mood="teach", shot="close",
  boardClear=True, diagram=MARCH_MAP)
L("guide", "The Long March! In January 1935, at Zunyi, Mao returned to the top leadership. His turning point!", mood="excited", shot="close",
  board="Jan 1935, Zunyi: Mao back at the top")
poof("ticktock", 760)
L("ticktock", "Then Luding Bridge! I crawled across the chains myself, under fire!", mood="excited", shot="close")
L("tara", "You're an hourglass. You'd have rolled into the river.", mood="deadpan", shot="close")
L("guide", "That's the official story. Some historians think the fight was much smaller.", mood="neutral", shot="close",
  board="Luding Bridge: legend or evidence?")
sfx("scratch")
L("ticktock", "I was very small. Possibly in someone's pocket.", mood="flustered", shot="close", gap=0.3)
L("teacher", "So we say: the legend says. In October 1935, about 8,000 reached northern Shaanxi.", mood="teach", shot="close",
  boardClear=True, board="Oct 1934: about 86,000 set out")
L("tara", "So about nine in ten didn't arrive. Many died; others deserted or were left behind.", mood="sad", shot="close",
  board="Oct 1935: about 8,000 reach Shaanxi")
L("guide", "Claims range from 9,000 to 12,500 kilometres. Two researchers who walked it estimated about 6,000.", mood="neutral", shot="close",
  board="Claimed: 9,000–12,500 km. Walked: ~6,000")
L("teacher", "Provenance. Who told the world this story?", mood="teach", shot="close", boardClear=True)
L("guide", "The party. And Edgar Snow, an American who interviewed Mao, in Red Star Over China, 1937.", mood="teach", shot="close",
  board="Told by: the party + Edgar Snow (1937)")
L("teacher", "Mao called it a propaganda force. So: disaster, or triumph?", mood="teach", shot="close")
L("tara", "Militarily, a disaster. They lost their base and most marchers.", mood="thinking", shot="close",
  board="Military: base lost, ~90% gone")
L("tara", "But it mattered most as a political triumph: the party survived, Mao rose, the legend won recruits.", mood="determined", shot="close",
  board="Political: party survives, Mao rises")
L("teacher", "A judgement, with reasons. Excellent.", mood="happy", shot="close", gap=0.4)

# ---------------- WAR AND CIVIL WAR ----------------
scene("hawker", [("tara", 300), ("ticktock", 640), ("uncle", 1000)])
L("ticktock", "Then the biggest crisis. In 1937, Japan invaded China, and the parties formed a second United Front.", mood="teach", shot="close",
  boardClear=True, diagram=ROAD)
L("uncle", "Japan occupied Singapore too, from 1942 to 1945. My grandmother never forgot it.", mood="solemn", shot="close")
L("ticktock", "The Nationalists fought most big battles and lost huge armies. Then inflation and corruption.", mood="teach", shot="close",
  boardClear=True, diagram=WAR)
L("tara", "The communists fought as guerrillas, cut rents, and grew from about 40,000 members to about 1.2 million.", mood="thinking", shot="close")
L("ticktock", "Then civil war, 1946 to 1949. On 1 October 1949, Mao proclaimed the People's Republic of China.", mood="teach", shot="close",
  board="1 Oct 1949: People's Republic of China")
L("tara", "Right. Time to march home.", mood="determined", shot="close", gap=0.4)

# ---------------- MEANWHILE: THE CAPITAL FALLS ----------------
card("MEANWHILE, AT HOME", "The capital is printing coupons", 2.2)
scene("living", [("tara", 260), ("mum", 600), ("dad", 960)])
L("mum", "Vikram printed four hundred remote coupons for snacks. One hour of television now costs fifty.", mood="annoyed", shot="close")
L("dad", "That's just inflation. It's fine.", mood="worried", shot="close", prop="scroll")
L("tara", "Arjun, Zara and Ravi are on the sofa. They're with me.", mood="determined", shot="close")
L("mum", "And so am I. I'm changing sides.", mood="smug", shot="close")
L("dad", "Fine! I'll take the armchair. On the balcony.", mood="sad", shot="close")
L("tara", "Chiang retreated to Taiwan. Dad retreated to the balcony.", mood="deadpan", shot="close", prop="remote")
freeze("SOFA: CAPTURED", 2.4, narrator="Narrator: Marched eleven metres. Claimed twelve kilometres.")

# ---------------- ACT 3: MAO IN POWER (SERIOUS) ----------------
scene("classroom", [("tara", 320), ("teacher", 760)])
L("tara", "Ms Lim, so Mao won. What did he do with all that power?", mood="thinking", shot="close", boardClear=True)
L("teacher", "This part is serious. China became a one-party state. In land reform, many landlords were killed: estimates range from about 1 million to several million.", mood="solemn", shot="close",
  board="One-party state; violent land reform")
L("teacher", "And a cult of personality: portraits everywhere, and from 1964 the Little Red Book, to make one man seem beyond criticism.", mood="solemn", shot="close",
  board="Cult: portraits, Little Red Book (1964)")
solemn("The Great Famine, 1959–1961",
       ["1958: the Great Leap Forward. Communes, backyard furnaces.",
        "False harvest reports. The state took grain anyway.",
        "An estimated 15 to 45 million people died.",
        "Behind every number was a family."],
       "In 1958, Mao launched the Great Leap Forward, to transform China at incredible speed. Officials feared reporting failure, so they sent false harvest figures, and the state took grain villages needed. From 1959 to 1961, a terrible famine followed. Historians estimate that between 15 and 45 million people died. Farmers, children, parents, grandparents. That is why we remember.",
       who="teacher", hold=2.4)
L("teacher", "Then the Cultural Revolution, from 1966 until Mao died in 1976. Historians weigh his achievements against an enormous human cost.", mood="solemn", shot="close")
L("tara", "So why did he rise? Crises. A weak Nationalist government. And Mao's leadership and propaganda.", mood="thinking", shot="close",
  boardClear=True, diagram=COMPARE)
L("tara", "They were linked, but Japan's invasion mattered most: it wrecked the Nationalists and made communists look like patriots.", mood="determined", shot="close",
  board="Japan's invasion: the key link")
L("teacher", "And compared with Hitler?", mood="teach", shot="close")
L("tara", "Both rose through crisis and weak government. But Hitler was legally appointed Chancellor, in January 1933. Mao won a civil war.", mood="thinking", shot="close",
  board="Hitler: legal route. Mao: revolution")
L("teacher", "Exactly. Hitler took over the system from inside. Mao defeated it from outside.", mood="teach", shot="close", gap=0.5)

# ---------------- RECAP ----------------
confess("ticktock", "TICKTOCK · Recap Hourglass · Not Actually On Luding Bridge")
L("ticktock", "Recap. One. From 1911: crisis after crisis.", mood="teach",
  boardClear=True, board="1. Crisis: Qing falls, warlords, peasants")
L("ticktock", "Two. Mao's idea: a peasant revolution and guerrilla war.", mood="teach", board="2. Peasants + guerrillas + discipline")
L("ticktock", "Three. The Long March: about 86,000 out, 8,000 in. Then, the legend.", mood="teach", board="3. Long March: ~86,000 out, ~8,000 in")
L("ticktock", "Four. Japan weakened the Nationalists. In 1949, Mao won the civil war.", mood="teach", board="4. Japan + Civil War → PRC, 1 Oct 1949")
L("ticktock", "Five. Test every legend. And remember the people behind the numbers.", mood="solemn", board="5. Test the legend. Remember the people.", gap=0.5)

# ---------------- TAG ----------------
scene("living", [("tara", 260), ("dad", 600), ("ticktock", 960)])
L("dad", "So. Supreme Ruler of the Sofa now, are we?", mood="annoyed", shot="close")
L("tara", "No. I've seen where that goes. A sofa rota. Anyone can vote me off.", mood="determined", shot="close", prop="placard:SOFA ROTA")
L("dad", "Even me?", mood="shock", shot="close")
L("tara", "Even you. Thursdays.", mood="deadpan", shot="close")
L("ticktock", "A rota! In my day we had one for the sundial. My grandfather did nights.", mood="smug", shot="close")
sfx("ding")
L("tara", "A sundial on nights. That explains a lot.", mood="deadpan", shot="wide", gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Ticktock gives you 5 seconds. He predicted all the answers. Afterwards.", 3.0)
challenge(1, "On what date did Mao proclaim the People's Republic of China?", "1 October 1949", "In Beijing; Chiang Kai-shek retreated to Taiwan",
  "Question one. On what date did Mao proclaim the People's Republic of China?",
  "The first of October, 1949.")
challenge(2, "Give one way the war with Japan helped the communists.", "Weakened the GMD", "GMD: losses, inflation. CCP: patriots, 1.2m members",
  "Question two. Give one way the war with Japan helped the communists.",
  "It wrecked the Nationalists, and made the communists look like patriots.")
challenge(3, "Early Long March stories came from the party and Edgar Snow. Why be careful?", "Propaganda", "Winners built a legend, e.g. Luding Bridge",
  "Question three. Early Long March stories came from the party and Edgar Snow. Why be careful?",
  "The winners built a legend. If you said famous means true, go and sit with Dad.")
end_card()
