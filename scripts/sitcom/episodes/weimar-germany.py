# "Totally Raotional" History Season Ep 6 "A Billion Marks For A Bread Roll" (Topic: Weimar Germany)
# Format and helpers: see common.py; check with lint_episode.py.

EP = dict(topic="weimar-germany", logline="Dad prints 'Rao Marks' pocket money and causes hyperinflation at Uncle Hock's stall. Germany after WW1, Versailles, the Weimar constitution, 1923, Stresemann's recovery and the Depression that opened the door to Hitler.")

_T = '<text x="260" y="{}" text-anchor="middle" font-family="sans-serif" font-size="{}" fill="{}">{}</text>'
RUHR_CHAIN = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220">'
    + _T.format(28, 18, "#f8fafc", "Germany falls behind on reparations")
    + _T.format(56, 20, "#fde047", "↓")
    + _T.format(84, 18, "#7dd3fc", "Jan 1923: French + Belgian troops take the Ruhr")
    + _T.format(112, 20, "#fde047", "↓")
    + _T.format(140, 18, "#86efac", "Workers strike · government prints money")
    + _T.format(168, 20, "#fde047", "↓")
    + _T.format(200, 24, "#fca5a5", "HYPERINFLATION")
    + '</svg>')

# ---------------- COLD OPEN ----------------
scene("living", [("tara", 300), ("dad", 760)])
L("tara", "Dad. Can we talk about my pocket money? Everything costs more now.", mood="neutral", shot="close")
L("dad", "Say no more. Behold.", mood="smug", shot="close")
sfx("whoosh")
L("dad", "Rao Marks! Fresh from the printer. Uncle Hock accepts them, and I swap them for real dollars at month end.", mood="excited", shot="close", prop="newspaper")
L("tara", "How many did you print?", mood="deadpan", shot="close")
L("dad", "A thousand. And when we need more, I print more. Infinite pocket money. Basic economics.", mood="smug", shot="close")
freeze("\"BASIC ECONOMICS.\"", 2.4, narrator="Narrator: It was the opposite of basic economics.")
confess("tara", "TARA RAO · 12 · Has Read Ahead In The Textbook")
L("tara", "My father has discovered printing money. In history, we have a name for this. Nineteen twenty three.", mood="deadpan")
L("tara", "Germany tried it. It went very badly. And Germany had a central bank. We have an inkjet.", mood="deadpan", gap=0.6)

title()

# ---------------- ACT 1: A REPUBLIC IS BORN ----------------
scene("kitchen", [("tara", 300), ("mum", 620)])
L("tara", "Chrono. Weimar Germany. Before Dad prints us into nineteen twenty three.", mood="worried", shot="wide")
sfx("tick")
poof("chrono", 940)
L("chrono", "November, nineteen eighteen. Germany is losing the First World War. People are hungry, sailors mutiny, and the Kaiser abdicates.", mood="teach", shot="close", boardClear=True, board="Nov 1918: Kaiser abdicates")
L("chrono", "On the eleventh of November the armistice is signed. Friedrich Ebert leads a new republic, with a constitution written in Weimar in nineteen nineteen.", mood="teach", shot="close", board="11 Nov 1918: armistice · Ebert")
L("chrono", "Nationalists called the men who signed it the November Criminals, and claimed the army was stabbed in the back.", mood="teach", shot="close", board="'November Criminals' · stab in the back")
L("chrono", "That's a myth. Next. The army was beaten. Its own generals asked for peace.", mood="eyeroll", shot="close")
L("chrono", "It was attacked from left and right. The communist Spartacists in nineteen nineteen. The Kapp Putsch in nineteen twenty. Both failed.", mood="teach", shot="close", board="1919 Spartacists · 1920 Kapp Putsch")
L("chrono", "The Treaty of Versailles, twenty eighth of June, nineteen nineteen. Remember it with LAMB.", mood="teach", shot="close", boardClear=True, board="Versailles, 28 June 1919: L·A·M·B")
L("chrono", "Land. Alsace Lorraine to France, the Polish Corridor to Poland, every colony. About thirteen percent of its land.", mood="teach", shot="close", board="LAND: Alsace-Lorraine · Polish Corridor")
L("chrono", "Army. A hundred thousand men. No tanks, no air force, no troops in the Rhineland.", mood="teach", shot="close", board="ARMY: 100,000 · no tanks · no air force")
L("chrono", "Money. Reparations, fixed in nineteen twenty one at six point six billion pounds. Blame. Article two thirty one, the War Guilt clause.", mood="teach", shot="close", board="MONEY: £6.6bn · BLAME: Article 231")
L("tara", "Germany wasn't allowed to negotiate. So Germans called it a Diktat. A dictated peace.", mood="thinking", shot="close")
L("mum", "Like the treaty your father signed after he lost at badminton. Dishes until Deepavali.", mood="smug", shot="close")
L("tara", "He still calls it a Diktat.", mood="deadpan", shot="close", gap=0.3)
L("chrono", "The constitution? Very democratic. Votes for men and women over twenty, and real freedoms.", mood="teach", shot="close", boardClear=True, board="+ votes for all over 20 · freedoms")
L("chrono", "But. Proportional representation meant many small parties, and wobbly coalitions.", mood="teach", shot="close", board="– PR → many parties → weak coalitions")
L("chrono", "Article forty eight let the President rule by decree in an emergency. And many judges, officers and civil servants still missed the Kaiser.", mood="teach", shot="close", board="– Article 48 · – old judges and army")
L("mum", "So in an emergency, one person decides everything?", mood="thinking", shot="close")
L("tara", "Mum. Don't give Dad ideas.", mood="worried", shot="close", gap=0.4)

confess("chrono", "CHRONO · ~950 Years Old · Hourglass · Has Seen Every Kind Of Money")
L("chrono", "I've seen money made of gold, silver, shells and salt. Paper is the only one you can make at home.", mood="bored")
L("chrono", "That's the whole problem.", mood="bored", gap=0.5)

# ---------------- ACT 2: HAWKER CENTRE, 1923 ----------------
card("ONE WEEK LATER, AT THE HAWKER CENTRE", "Rao Marks in circulation: far too many", 2.4)
scene("hawker", [("tara", 300), ("dad", 560), ("uncle", 1000)])
L("dad", "Uncle Hock! One prata, please. Two Rao Marks, as usual.", mood="happy", shot="close")
L("uncle", "Last week, two. Today, two hundred.", mood="deadpan", shot="close", boardClear=True, board="Prata: 2 Rao Marks → 200 Rao Marks")
L("dad", "Two HUNDRED? Fine. I'll print more.", mood="shock", shot="close")
L("uncle", "Tomorrow, twenty thousand. Everybody got stacks of paper, but same prata. More paper, price go up.", mood="annoyed", shot="close", board="Tomorrow: 20,000 Rao Marks")
poof("chrono", 790)
L("chrono", "That's inflation. More money, same goods. In nineteen twenty three, Germany did it to a whole country.", mood="teach", shot="close", boardClear=True, board="More money, same goods → prices soar", diagram=RUHR_CHAIN)
L("chrono", "Germany fell behind on reparations. So in January, French and Belgian troops occupied the Ruhr, its industrial heartland.", mood="teach", shot="close", board="Jan 1923: Ruhr occupied")
L("chrono", "The government told the workers to strike. Passive resistance. And it paid them by printing money.", mood="teach", shot="close", board="Strike paid with printed money")
L("chrono", "A loaf of bread cost about two hundred and fifty marks in January. By November, about two hundred billion.", mood="teach", shot="close", boardClear=True, board="Loaf: 250 marks → 200,000,000,000")
L("dad", "A billion marks for a bread roll!", mood="shock", shot="close")
L("chrono", "By November, a billion marks bought you a crumb. Workers were paid twice a day and ran to the shops.", mood="teach", shot="close")
L("tara", "Who lost out?", mood="thinking", shot="close")
L("chrono", "Savers and pensioners. Lifetime savings became worthless. Many middle class families were ruined, and never forgave the republic.", mood="serious", shot="close", board="LOST: savers, pensioners, middle class")
L("chrono", "Winners? People with debts, who paid them off with worthless paper. And some businessmen.", mood="teach", shot="close", board="GAINED: debtors, some businessmen")
L("dad", "So I'm a winner! I owe Uncle Hock loads!", mood="excited", shot="close")
L("uncle", "From today, Uncle Hock takes only real dollars. Before you eat.", mood="smug", shot="close")
L("dad", "Then I'm ruined.", mood="sad", shot="close", gap=0.5)
L("chrono", "In the chaos, in November nineteen twenty three, Adolf Hitler and the Nazis tried to seize power in Munich. The Beer Hall Putsch. It failed.", mood="serious", shot="close", boardClear=True, board="Nov 1923: Munich Putsch fails")
L("chrono", "At his trial, Hitler got national publicity. The judges were lenient. He served about nine months, and wrote Mein Kampf in prison.", mood="serious", shot="close", board="Trial = publicity · Mein Kampf", gap=0.8)

confess("dad", "VIKRAM RAO · Dad · Former Central Banker")
L("dad", "In my defence, every time I printed money, I felt richer. For about a minute.", mood="smug")
L("dad", "Then the prata cost more. So I printed more. A very efficient way to become poor.", mood="sad", gap=0.6)

# ---------------- ACT 3: RECOVERY AND CRASH ----------------
card("THAT NIGHT", "Emergency family finance meeting", 2.2)
scene("living", [("tara", 260), ("mum", 560), ("dad", 860)])
L("mum", "Right. I'm taking over the economy. Rao Marks are cancelled.", mood="determined", shot="close", prop="calculator")
poof("chrono", 1060)
L("chrono", "Very Stresemann. Gustav Stresemann, Chancellor in nineteen twenty three, ended the strike and restarted payments.", mood="teach", shot="close", boardClear=True, board="Stresemann: end strike, pay again")
L("mum", "New currency. Mum Marks. Backed by something real. The rice bin.", mood="smug", shot="close")
L("chrono", "He did that too. The Rentenmark, November nineteen twenty three, backed by land and industry. Prices calmed down.", mood="teach", shot="close", board="Nov 1923: new Rentenmark")
L("chrono", "Then the Dawes Plan, nineteen twenty four. Reparations rescheduled, and big loans from America.", mood="teach", shot="close", board="1924 Dawes Plan: US loans")
L("dad", "Loans! Uncle Hock lent me fifty dollars! We eat out every night!", mood="excited", shot="close")
L("chrono", "Locarno, nineteen twenty five. The League of Nations, nineteen twenty six. The Young Plan, nineteen twenty nine. The Golden Twenties.", mood="teach", shot="close", board="1925 Locarno · 1926 League · 1929 Young")
L("tara", "But it was all built on borrowed American money.", mood="thinking", shot="close", board="…built on borrowed US money")
L("uncle", "Mr Rao! My cousin's business crashed. I need my fifty dollars back. Today!", mood="worried", shot="close", offstage=True)
L("dad", "But I spent it on prata! Can I pay in Rao Marks?", mood="shock", shot="close", gap=0.4)
L("chrono", "October, nineteen twenty nine. The Wall Street Crash. American banks recalled their loans, and German businesses collapsed.", mood="teach", shot="close", boardClear=True, board="Oct 1929: Wall St Crash → loans recalled")
L("chrono", "By nineteen thirty two, about six million were unemployed. The coalition had collapsed, and Brüning ruled by Article forty eight decrees.", mood="serious", shot="close", board="1932: ~6 million unemployed")
serious()
L("tara", "So people stopped trusting democracy. It seemed to fail them twice in ten years.", mood="serious", shot="close")
L("chrono", "Desperate voters turned to extremists. The Communists grew. The Nazis went from under three percent of the vote in nineteen twenty eight, to thirty seven percent in July nineteen thirty two.", mood="serious", shot="close", board="Nazi vote: 2.6% (1928) → 37% (Jul 1932)")
L("chrono", "That is how these crises opened the door to Hitler. Hyperinflation, the Depression, and a constitution with an emergency switch. Next time, how he walked through it.", mood="serious", shot="close", gap=1.0)
serious(False)

# ---------------- RECAP ----------------
confess("chrono", "CHRONO · Recap Hourglass · Speaking Slowly For Dad")
L("chrono", "Recap. First. Nineteen eighteen. Armistice, a new republic, and the stab in the back myth.", mood="teach", boardClear=True, board="1. 1918: armistice · new republic")
L("chrono", "Second. Versailles. Land, Army, Money, Blame.", mood="teach", board="2. Versailles = LAMB")
L("chrono", "Third. A democratic constitution, weakened by coalitions and Article forty eight.", mood="teach", board="3. PR coalitions · Article 48")
L("chrono", "Fourth. Nineteen twenty three. The Ruhr, hyperinflation, the Munich Putsch. Then Stresemann's recovery.", mood="teach", board="4. 1923 crisis → Stresemann recovery")
L("chrono", "And finally. The Depression. Loans vanish, six million lose their jobs, extremists grow.", mood="teach", board="5. 1929 Depression → extremists grow", gap=0.5)

# ---------------- TAG ----------------
scene("living", [("tara", 260), ("mum", 560), ("dad", 860)])
L("tara", "So. My pocket money?", mood="neutral", shot="close")
L("mum", "One real dollar a week. And the printer is confiscated.", mood="smug", shot="close", prop="calculator")
L("dad", "Is this an Article forty eight emergency?", mood="worried", shot="close")
L("mum", "It's an Article Mum.", mood="smug", shot="close")
L("chrono", "In November nineteen twenty three, a dollar was worth about four trillion marks. Take the dollar.", mood="bored", shot="wide", offstage=True)
L("tara", "I'll take the dollar.", mood="happy", shot="close", gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Chrono gives you 5 seconds. Then he gets smug.", 3.0)
challenge(1, "In which year did German hyperinflation peak?", "1923", "Ruhr occupied Jan 1923 · loaf = 200 billion marks by Nov",
  "Question one. In which year did hyperinflation peak in Germany?",
  "Nineteen twenty three. By November, a loaf cost about two hundred billion marks.")
challenge(2, "Which article let the President rule by decree?", "Article 48", "Emergency powers — used by Brüning from 1930",
  "Question two. Which article let the Weimar President rule by decree?",
  "Article forty eight. Meant for emergencies, used constantly from nineteen thirty. Dad is banned from reading it.")
challenge(3, "Which 1924 plan rescheduled reparations and brought US loans?", "Dawes Plan", "Stresemann's recovery — built on US loans",
  "Question three. Which plan of nineteen twenty four brought American loans to Germany?",
  "The Dawes Plan. It rescued the economy, but tied Germany to American money.")
end_card()
