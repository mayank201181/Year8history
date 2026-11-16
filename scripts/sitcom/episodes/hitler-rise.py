# "Who Rules the Remote?" S01E05 "Emergency Powers" (Topic: Hitler's Rise to Power)
# Format and helpers: see common.py and WRITING.md; check with lint_episode.py.
# Facts and figures follow lib/topics/hitler-rise/guide.ts. Serious material is in the solemn() beat (Act 3);
# the family parallel is only the MECHANISM (deadlock -> "temporary" emergency powers) and stops before Act 3.

EP = dict(topic="hitler-rise", logline="Mum's family council keeps deadlocking, so Dad declares a 'remote emergency' and takes 'temporary' powers "
          "he never hands back. Ms Lim and Ticktock show how Weimar Germany's democracy was taken apart, legally, and why we remember where it led.")

# Pronunciation for this episode's names (audio only; subtitles keep the spelling). Tested with say.py.
SAY.update({"SA": "S-A", "Röhm": "Rurm", "Stresemann": "Strayzuhmann", "Goebbels": "Gurbbels",
            "Papen": "Pah-pen", "Dachau": "Dah-cow"})

WEIMAR = cards_svg([
    ("Votes", ["all men and", "women over 20"], MINT),
    ("Reichstag", ["proportional", "representation:", "many parties,", "coalitions"], SKY),
    ("Article 48", ["President rules", "by decree in", "an 'emergency'"], ROSE),
], h=170, title="The Weimar constitution, 1919")

LAMB = cards_svg([
    ("Land", ["Alsace-", "Lorraine,", "Polish", "Corridor,", "colonies"], GOLD),
    ("Army", ["100,000 men", "no air force", "Rhineland", "demilitarised"], SKY),
    ("Money", ["reparations", "£6.6 billion", "(fixed 1921)"], MINT),
    ("Blame", ["Article 231", "'war guilt'", "clause"], ROSE),
], h=210, title="Treaty of Versailles, 1919: LAMB")

def _votes():
    data = [("May 1928", 2.6), ("Sept 1930", 18.3), ("July 1932", 37.3), ("Nov 1932", 33.1)]
    base, k = 200, 3.2                      # 50% of the vote = 160 px
    out = ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 240" font-family="sans-serif">',
           f'<text x="260" y="20" fill="{GOLD}" font-size="16" text-anchor="middle">Nazi share of the vote, Reichstag elections</text>',
           f'<line x1="30" y1="{base}" x2="500" y2="{base}" stroke="{INK}" stroke-width="2"/>',
           f'<line x1="30" y1="{base - 50 * k:.0f}" x2="500" y2="{base - 50 * k:.0f}" stroke="{ROSE}" stroke-width="2" stroke-dasharray="7 5"/>',
           f'<text x="500" y="{base - 50 * k + 18:.0f}" fill="{ROSE}" font-size="14" text-anchor="end">50% = a majority</text>']
    for i, (lab, v) in enumerate(data):
        x = 60 + i * 110; top = base - v * k
        col = SKY if i < 3 else LILAC
        out.append(f'<rect x="{x}" y="{top:.0f}" width="70" height="{v * k:.0f}" fill="{col}" fill-opacity="0.25" stroke="{col}" stroke-width="2"/>')
        out.append(f'<text x="{x + 35}" y="{top - 7:.0f}" fill="{col}" font-size="15" text-anchor="middle">{v}%</text>')
        out.append(f'<text x="{x + 35}" y="{base + 20}" fill="{INK}" font-size="14" text-anchor="middle">{lab}</text>')
    out.append("</svg>")
    return "".join(out)
VOTES = _votes()

def _steps():
    rows = [("30 Jan 1933", "Hitler appointed Chancellor"), ("27 Feb 1933", "Reichstag Fire: rights suspended"),
            ("23 Mar 1933", "Enabling Act: laws without Reichstag"), ("14 Jul 1933", "Nazis the only legal party"),
            ("30 Jun 1934", "Night of the Long Knives"), ("2 Aug 1934", "Hindenburg dies: Hitler is Führer")]
    out = ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 240" font-family="sans-serif">',
           f'<text x="260" y="20" fill="{GOLD}" font-size="16" text-anchor="middle">Chancellor to dictator: 19 months (not to scale)</text>',
           f'<line x1="140" y1="42" x2="140" y2="226" stroke="{INK}" stroke-width="2"/>']
    for i, (d, ev) in enumerate(rows):
        y = 54 + 34 * i; col = [GOLD, ROSE, ROSE, SKY, LILAC, MINT][i]
        out.append(f'<circle cx="140" cy="{y - 5}" r="6" fill="{col}"/>')
        out.append(f'<text x="124" y="{y}" fill="{col}" font-size="15" text-anchor="end">{d}</text>')
        out.append(f'<text x="156" y="{y}" fill="{INK}" font-size="15">{ev}</text>')
    out.append("</svg>")
    return "".join(out)
STEPS = _steps()

FACTORS = cards_svg([
    ("Crises", ["Versailles 1919", "hyperinflation 1923", "the Depression"], ROSE),
    ("Weak\ngovernment", ["coalitions", "Article 48", "the elites' deal"], SKY),
    ("Leadership", ["Hitler's speeches", "propaganda", "organisation"], GOLD),
], h=200, title="Why did Hitler come to power? Linked factors")

# ---------------- COLD OPEN ----------------
scene("living", [("tara", 260), ("mum", 600), ("dad", 960)])
L("mum", "Family council. One television, three shows. Votes, please.", mood="determined", shot="close", prop="ballot")
L("tara", "The Weimar documentary. It's homework.", mood="deadpan", shot="close")
L("dad", "The cricket. It's my mental health.", mood="smug", shot="close")
L("mum", "The cooking final. One vote each. Our third tie this week.", mood="annoyed", shot="close", prop="ballot")
L("tara", "Three parties, no majority. Weimar Germany had twenty cabinets in fourteen years.", mood="deadpan", shot="close")
L("dad", "Then it's an emergency. Under Family Rule 48, the head of the household decides alone.", mood="determined", shot="close",
  prop="placard:REMOTE EMERGENCY")
L("mum", "Rule 48 was for when the rice cooker caught fire!", mood="shock", shot="close")
L("dad", "Only temporary. Until the emergency is over.", mood="smug", shot="close", prop="remote")
L("tara", "And when is it over?", mood="deadpan", shot="close")
L("dad", "I'll let you know.", mood="smug", shot="close", prop="remote")
freeze("TEMPORARY POWERS", 2.4, narrator="Narrator: Dad did not let them know.")
confess("tara", "TARA RAO · 12 · Studying Weimar · Outvoted By A Rice Cooker Rule")
L("tara", "This term's question: how do dictatorships come to power? Lesson one: beware the word 'temporary'.", mood="deadpan", gap=0.6)

title()

# ---------------- ACT 1: A FRAGILE DEMOCRACY ----------------
scene("kitchen", [("tara", 340)])
L("tara", "I need help with Germany, 1918 to 1934.", mood="determined", shot="wide")
sfx("drawer")
poof("ticktock", 840)
sfx("sand")
L("ticktock", "Germany between the wars? I was there. I always said that Hitler fellow would run the country.", mood="smug", shot="close")
L("tara", "In 1928 the Nazis won 2.6% of the vote. Nobody was saying that.", mood="deadpan", shot="close",
  boardClear=True, board="1928: the Nazis win just 2.6% of the vote")
L("ticktock", "I said it quietly. To a teaspoon.", mood="flustered", shot="close")
L("tara", "That's hindsight. You know the ending, so you think everyone did. It wasn't inevitable.", mood="deadpan", shot="close",
  board="Hindsight ✘  Nobody knew the ending", gap=0.4)

confess("ticktock", "TICKTOCK · Antique Hourglass · Saw Everything Coming (Afterwards)")
L("ticktock", "I have predicted every event in history. Shortly after it happened.", mood="smug", gap=0.5)

scene("kitchen", [("tara", 340), ("ticktock", 860)])
L("ticktock", "November 1918. Germany loses the First World War. The Kaiser abdicates, and on the eleventh, the armistice.", mood="teach", shot="close",
  boardClear=True, board="11 Nov 1918: armistice · Kaiser gone", diagram=WEIMAR)
L("ticktock", "Then a new constitution, written at Weimar in 1919. Votes for all men and women over twenty.", mood="teach", shot="close")
L("tara", "And proportional representation. Lots of small parties, so every government is a coalition.", mood="thinking", shot="close")
L("ticktock", "Which quarrel. So for emergencies, Article 48: the President can rule by decree, without parliament.", mood="teach", shot="close",
  board="Article 48: President rules by DECREE")
L("tara", "So Article 48 is Family Rule 48. Fine for a fire. Dangerous if the emergency never ends.", mood="thinking", shot="close")
L("ticktock", "June 1919: the Treaty of Versailles. Land and colonies lost, a tiny army, 6.6 billion pounds of reparations, and the war guilt clause.", mood="teach", shot="close",
  boardClear=True, board="28 June 1919: a 'Diktat'", diagram=LAMB)
L("tara", "A Diktat: a peace Germany had no say in.", mood="thinking", shot="close")
L("ticktock", "Nationalists blamed 'traitors' at home: the stab-in-the-back myth. In fact, the generals had said the war was lost.", mood="teach", shot="close",
  board="'Stab in the back' = a MYTH")
L("ticktock", "Then, crisis. Revolts from left and right, and in 1923, French and Belgian troops occupy the Ruhr.", mood="teach", shot="close",
  boardClear=True, board="1919 Spartacists · 1920 Kapp Putsch")
L("tara", "And the government prints money to pay the strikers. Hyperinflation.", mood="worried", shot="close",
  board="1923: Ruhr occupied → hyperinflation")
L("ticktock", "A loaf cost 0.63 marks in 1918. By November 1923, about 201 billion. Savings were wiped out.", mood="sad", shot="close", gap=0.4,
  board="Bread, Nov 1923: 201,000,000,000 marks")

confess("dad", "VIKRAM RAO · Dad · Acting Head Of Remote (Temporary)")
L("dad", "Day three of the emergency. Anjali says emergencies should end. This one is special.", mood="smug", gap=0.6)

# ---------------- ACT 2: SCHOOL ----------------
card("MONDAY: HISTORY", "Ms Lim's classroom · Year 8", 2.4)
scene("classroom", [("tara", 260), ("teacher", 620)])
L("teacher", "Adolf Hitler. Born in Austria, 1889. A failed artist, then a soldier who refused to accept defeat.", mood="teach", shot="close",
  boardClear=True, board="Hitler: Austrian · failed artist · soldier")
L("teacher", "In 1919 he joined a tiny Munich party, renamed the Nazi Party in 1920. His talent was speaking. His stormtroopers, the SA, used violence.", mood="teach", shot="close",
  board="1920: NSDAP (Nazis) · SA = violence")
poof("ticktock", 980)
L("ticktock", "And in 1923, the Munich Putsch! The coup that made Hitler ruler of Germany!", mood="excited", shot="close")
L("teacher", "No. It collapsed in a day, and Hitler was arrested.", mood="neutral", shot="close", board="Nov 1923: Munich Putsch FAILS")
sfx("scratch")
L("ticktock", "Collapsed? I may have been watching a different putsch.", mood="flustered", shot="close")
L("teacher", "His trial made him famous. In prison he wrote Mein Kampf, and decided to win power by votes instead.", mood="teach", shot="close",
  board="LESSON: win power 'legally'")

L("teacher", "Then, recovery. Stresemann, a new currency and American loans. The Golden Years.", mood="teach", shot="close",
  boardClear=True, board="1924–29: Stresemann's 'Golden Years'", diagram=VOTES)
L("ticktock", "Then October 1929: the Wall Street Crash. American banks recall the loans the recovery depended on.", mood="worried", shot="close")
L("teacher", "By 1932, about six million were unemployed. The Nazi vote rose to 18.3%, then 37.3% in July 1932.", mood="teach", shot="close",
  board="1932: about 6 million unemployed")
L("ticktock", "The largest party. But never a majority.", mood="teach", shot="close")
L("teacher", "Parliament had stalled too. Brüning ruled by Article 48 decree. In 1932: 5 laws, 66 decrees.", mood="teach", shot="close",
  board="1932: 5 laws vs 66 decrees")
L("tara", "So Germany was ruled by decree before Hitler was even in charge.", mood="thinking", shot="close", gap=0.4)

L("teacher", "A source: a 1932 Nazi poster calling Hitler the last hope of the unemployed. How useful is it?", mood="teach", shot="close",
  boardClear=True, board="SOURCE: Nazi election poster, 1932")
L("tara", "It's propaganda, made to persuade. Not proof of what Germans felt, but good evidence of Nazi methods.", mood="thinking", shot="close",
  board="Purpose: PERSUADE, not inform")
L("teacher", "Goebbels used simple slogans, rallies and films. And lies blaming Jewish people and communists, spreading hatred.", mood="solemn", shot="close",
  board="Simple · repeated · scapegoats")

L("teacher", "In November 1932 the Nazi vote fell, to 33.1%. So how did Hitler become Chancellor?", mood="teach", shot="close",
  boardClear=True, board="Nov 1932: Nazi vote FALLS to 33.1%")
L("ticktock", "A backroom deal. Von Papen persuaded President Hindenburg to appoint him. They thought they could control him.", mood="teach", shot="close")
L("tara", "So on 30 January 1933, Hitler was appointed. Not elected, not a coup.", mood="determined", shot="close",
  board="30 Jan 1933: APPOINTED, not a coup")
L("teacher", "A judgement, Tara. Why did he become Chancellor?", mood="teach", shot="close")
L("tara", "The Depression won him votes. But the deal was decisive. His vote was falling when Hindenburg and Papen chose him.", mood="thinking", shot="close",
  board="Votes: contender · Deal: DECISIVE", gap=0.4)

# ---------------- MEANWHILE: DAY NINE ----------------
card("MEANWHILE, AT HOME", "Day nine of the remote emergency", 2.2)
scene("living", [("tara", 260), ("mum", 600), ("dad", 960)])
L("mum", "Day nine, Vikram. The rice cooker is fine. Give back the remote.", mood="annoyed", shot="close")
L("dad", "Decree number sixty-six: the emergency continues.", mood="smug", shot="close", prop="remote")
L("tara", "Then let's call a family council.", mood="determined", shot="close")
L("dad", "Decree sixty-seven: councils are cancelled. Until the emergency is over.", mood="smug", shot="close", prop="remote")
L("mum", "And who decides when it's over?", mood="eyeroll", shot="close")
L("dad", "Me. Using my emergency powers.", mood="smug", shot="close", prop="remote")
L("tara", "That's the trap. If emergency powers decide when the emergency ends, it never ends.", mood="deadpan", shot="close")
freeze("DECREE NUMBER 67", 2.4, narrator="Narrator: The family council did not meet again that week.")

# ---------------- ACT 3: CHANCELLOR TO DICTATOR (no jokes in this act) ----------------
card("BACK IN CLASS", "1933 to 1934: from Chancellor to dictator", 2.4)
scene("classroom", [("tara", 300), ("teacher", 760)])
L("teacher", "Hitler is Chancellor, but not yet a dictator. That takes him nineteen months.", mood="teach", shot="close",
  boardClear=True, diagram=STEPS)
L("teacher", "27 February: the Reichstag burns. The Nazis blame communists, and a decree suspends free speech and protection from arrest.", mood="teach", shot="close")
L("teacher", "23 March: the Enabling Act lets Hitler make laws without the Reichstag. Communists were under arrest, and SA men filled the building.", mood="teach", shot="close",
  board="Passed 444 to 94: only the SPD against")
L("tara", "So parliament voted away its own power.", mood="sad", shot="close")
L("teacher", "By July 1933 unions and other parties were banned. On 30 June 1934, the Night of the Long Knives: the SS murdered Röhm and other SA leaders.", mood="solemn", shot="close")
L("tara", "And when Hindenburg died, in August 1934, Hitler became Führer. The army swore loyalty to him personally.", mood="sad", shot="close",
  board="Aug 1934: army's oath to Hitler himself")
L("teacher", "From the start, the regime ruled through fear. Let's be serious now.", mood="solemn", shot="close", gap=0.4)
solemn("The persecution begins, 1933",
       ["March 1933: Dachau concentration camp opens.",
        "1 April 1933: a boycott of Jewish-owned shops.",
        "Jewish civil servants dismissed; books burned.",
        "Then the Holocaust: around 6 million Jewish people murdered."],
       "Opponents were sent to concentration camps, such as Dachau, opened in March 1933. In April came a boycott of Jewish-owned shops. Soon Jewish civil servants were dismissed, and books were burned. "
       "These first steps led to the Holocaust: the murder of around six million Jewish people, and of Roma and Sinti people, disabled people and many others. Each of them had a name, a family and a life.",
       who="teacher", hold=2.4)
L("teacher", "We remember them, and how it was done: step by step, by law, while many people looked away.", mood="solemn", shot="close")
L("tara", "So a democracy can be taken apart legally, unless people stop the first steps.", mood="solemn", shot="close")
L("teacher", "That's why post-war Germany, and many democracies, built safeguards into their constitutions.", mood="solemn", shot="close", gap=0.5)
L("teacher", "Last question. Why did Hitler come to power?", mood="teach", shot="close", boardClear=True, diagram=FACTORS)
L("tara", "Linked factors. Crises made people listen. Hitler's leadership and propaganda turned that into votes.", mood="thinking", shot="close")
L("tara", "And weak government, coalitions, Article 48 and the deal, turned votes into power. No single factor was enough.", mood="determined", shot="close",
  board="Crisis → votes → weak gov't → power", gap=0.6)

# ---------------- RECAP ----------------
confess("ticktock", "TICKTOCK · Recap Hourglass · No Hindsight Allowed")
L("ticktock", "Recap. One. Weimar was democratic, but fragile: coalitions, and Article 48.", mood="teach",
  boardClear=True, board="1. Weimar: coalitions + Article 48")
L("ticktock", "Two. Crises: Versailles, hyperinflation, and the Depression.", mood="teach", board="2. Versailles, 1923, the Depression")
L("ticktock", "Three. Propaganda made the Nazis the largest party. Never a majority.", mood="teach", board="3. Largest party, never a majority")
L("ticktock", "Four. January 1933: appointed in a deal, not a coup.", mood="teach", board="4. 30 Jan 1933: appointed, not a coup")
L("ticktock", "Five. In nineteen months, a democracy was dismantled, legally.", mood="teach", board="5. Fire, Enabling Act, Long Knives, Führer", gap=0.6)

# ---------------- TAG ----------------
scene("living", [("tara", 220), ("mum", 440), ("dad", 680), ("ticktock", 980)])
L("tara", "New rules, Dad. Emergencies last one day, and nobody cancels the council.", mood="determined", shot="close",
  prop="placard:RULE 48 REPEALED")
L("mum", "Checks and balances. Passed, two votes to one.", mood="smug", shot="close", prop="ballot")
L("dad", "Fine. I hand back the remote. Voluntarily. Now I shall retreat. A long march, all the way to the sofa.", mood="sad", shot="close", prop="remote")
L("ticktock", "A long march? China, 1934! I was there!", mood="excited", shot="close")
L("tara", "You were in a museum. Behind glass.", mood="deadpan", shot="close")
sfx("ding")
L("ticktock", "Very good glass.", mood="smug", shot="wide", gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Ticktock gives you 5 seconds. No hindsight allowed.", 3.0)
challenge(1, "On what date was Hitler appointed Chancellor?", "30 January 1933", "Appointed by Hindenburg, persuaded by von Papen",
  "Question one. On what date was Hitler appointed Chancellor?",
  "The thirtieth of January, 1933. If you said a coup, go and sit with Ticktock.")
challenge(2, "Why did the Great Depression boost the Nazi vote?", "Mass unemployment", "About 6 million out of work: desperate voters listened",
  "Question two. Why did the Great Depression boost the Nazi vote?",
  "Mass unemployment. Six million out of work, and desperate voters listened.")
challenge(3, "What is a 1932 Nazi election poster most useful for?", "Nazi methods", "Made to persuade, not to show what people felt",
  "Question three. What is a 1932 Nazi election poster most useful for?",
  "Nazi methods. It was made to persuade, not to show what people felt.")
end_card()
