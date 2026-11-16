# "Totally Raotional" History S01E10 "Crisis, Weakness And A Microphone" (Topic: Why Dictatorships Rise)
# Format and helpers: see common.py; check with lint_episode.py.

EP = dict(topic="why-dictatorships", logline="The condo lift breaks, the water goes off, the residents' committee collapses and Dad grabs the microphone. Chrono compares how Hitler, Mao and Pol Pot came to power: crisis, weak government, leadership and control.")

# ---------------- COLD OPEN ----------------
scene("living", [("tara", 300), ("mum", 760)])
L("mum", "Condo emergency! The lift is broken and the water pump has failed. No lift. No water.", mood="worried", shot="close", prop="phone")
L("tara", "We live on the twenty third floor.", mood="deadpan", shot="close")
L("mum", "The committee chat has four hundred messages. The chairman just resigned. By voice note. From the stairwell.", mood="shock", shot="two", prop="phone")
L("tara", "Four hundred messages. Nobody has phoned the lift company.", mood="deadpan", shot="close", gap=0.4)
scene("living", [("tara", 260), ("mum", 600), ("dad", 980)])
sfx("door")
L("dad", "Family. I just climbed twenty three floors with two buckets of water. On the fourteenth floor, I had a vision.", mood="determined", shot="close")
L("dad", "This condo doesn't need a committee. It needs one strong leader. One man. One microphone. And I know where they keep it.", mood="smug", shot="close")
freeze("ONE MAN. ONE MIC.", 2.6, narrator="Narrator: He did know where they kept the microphone.")
confess("tara", "TARA RAO · 12 · Lives On The Twenty Third Floor")
L("tara", "A crisis. A committee that can't decide. A man who wants the microphone. We studied that pattern all term.", mood="deadpan")
L("tara", "In history, it ended terribly. In our condo, it'll probably end in karaoke.", mood="deadpan", gap=0.6)

title()

# ---------------- ACT 1: DEFINITIONS AND CRISIS ----------------
scene("kitchen", [("tara", 380)])
L("tara", "Chrono. Wake up. Dad has found a microphone.", mood="determined", shot="wide")
sfx("tick")
poof("chrono", 860)
L("chrono", "Nine hundred and fifty years. Nothing good ever followed the words, Dad has found a microphone.", mood="bored", shot="close")
L("chrono", "Crisis. Weak government. Someone saying, only I can fix it. That recipe made some of history's worst dictators. Definitions first.", mood="teach", shot="close",
  boardClear=True, board="DEMOCRACY vs DICTATORSHIP")
L("chrono", "Democracy. Free elections, and you can vote the government OUT. Opposition parties, a free press, independent courts.", mood="teach", shot="close",
  board="Democracy: free elections, can vote them OUT")
L("chrono", "Dictatorship. One person or party rules. No free elections, no legal opposition, and a press that prints what it's told.", mood="teach", shot="close",
  board="Dictatorship: one person/party, no free vote")
L("tara", "And totalitarian is the extreme version. The state controls everything. Jobs, schools, even what you think.", mood="thinking", shot="close",
  board="Totalitarian: controls ALL of life")
L("chrono", "Driven by an ideology. A big idea about how society must be. Nazism for Hitler. Communism for Mao and Pol Pot.", mood="teach", shot="close",
  board="Ideology: Nazism · Communism")
L("tara", "So, is Dad a dictator?", mood="worried", shot="close")
L("chrono", "Your father is a man in a lanyard who wants to read announcements. That's not a dictator. That's karaoke night.", mood="eyeroll", shot="close", gap=0.4)

confess("chrono", "CHRONO · Hourglass Monster · Approx. 950 Years Old")
L("chrono", "Was I there for all of history? Well. My sand was. Including one terrible decade inside a board game. Nobody read the rules. Everybody argued about them. Then someone flipped the table.", mood="bored", gap=0.5)

scene("kitchen", [("tara", 380), ("chrono", 860)])
L("chrono", "Factor one. Crisis. When people are hungry and scared, they stop asking, is this fair? They ask, who can fix this, fast?", mood="teach", shot="close",
  boardClear=True, board="FACTOR 1: CRISIS")
L("chrono", "Germany. Defeat in nineteen eighteen. Versailles. Hyperinflation in nineteen twenty three. Then the Depression, with about six million unemployed.", mood="teach", shot="close",
  board="Germany: defeat, 1923, Depression")
L("tara", "China. The emperor fell in nineteen twelve. Then warlords, civil war and a Japanese invasion.", mood="thinking", shot="close",
  board="China: warlords, civil war, Japan invades")
L("chrono", "Cambodia. American bombing from nineteen sixty nine. Civil war from nineteen seventy. Refugees pouring into the capital.", mood="teach", shot="close",
  board="Cambodia: US bombing, civil war, refugees")

# ---------------- ACT 2: THE CONDO GARDEN ----------------
card("MEANWHILE, IN THE CONDO GARDEN", "Emergency meeting. The agenda is 47 pages.", 2.4)
scene("park", [("tara", 240), ("mum", 480), ("uncle", 740), ("dad", 1000)])
L("uncle", "Order! Order! As treasurer, I propose we vote. On whether to have a vote. About the lift.", mood="annoyed", shot="close")
L("mum", "Uncle Hock, we voted on that yesterday. It was a tie. Because you voted twice.", mood="annoyed", shot="close")
L("uncle", "Once for me. Once for my wife. She's at the hawker centre.", mood="smug", shot="close")
L("dad", "Neighbours! Fellow bucket carriers! I promise a working lift, running water and free kaya toast!", mood="determined", shot="wide")
sfx("fanfare")
L("dad", "Elect me! Actually, skip the election. I'll just start.", mood="smug", shot="close")
L("tara", "Dad. You can't just start.", mood="deadpan", shot="close")
L("uncle", "But he has the microphone.", mood="thinking", shot="close")
L("mum", "And he did bring buckets.", mood="thinking", shot="close")
freeze("THE BUCKET VOTE", 2.4, narrator="Narrator: Never underestimate a man with buckets.")

scene("park", [("tara", 320)], "Behind the condo barbecue pit")
poof("chrono", 820)
L("chrono", "Factor two. Weak government. Your committee couldn't fix the lift, so people turned to the man with buckets.", mood="teach", shot="close",
  boardClear=True, board="FACTOR 2: WEAK GOVERNMENT")
L("chrono", "Weimar. Coalitions kept collapsing, so from nineteen thirty, chancellors ruled by emergency decree under Article forty eight.", mood="teach", shot="close",
  board="Weimar: weak coalitions, Article 48")
L("tara", "The Nazis never won a majority in a free election. Their best was about thirty seven percent.", mood="thinking", shot="close",
  board="Nazis' best free vote: 37% (July 1932)")
L("chrono", "In January nineteen thirty three, President Hindenburg appointed Hitler Chancellor. Powerful men thought they could control him. Wrong.", mood="teach", shot="close",
  board="30 Jan 1933: Hitler APPOINTED Chancellor")
L("tara", "In China, the G M D government was seen as corrupt. In Cambodia, Lon Nol's government was corrupt and losing the war.", mood="thinking", shot="close",
  board="China: corrupt GMD · Cambodia: Lon Nol")
L("chrono", "Crisis is the fuel. Weak government is the open door. Factor three is who walks through it.", mood="teach", shot="close")
L("chrono", "Leadership. Hitler was a powerful speaker, with a propaganda machine promising work and bread.", mood="teach", shot="close",
  boardClear=True, board="FACTOR 3: LEADERSHIP")
L("tara", "Mao won over the peasants. And the Long March of nineteen thirty four became a legend, retold for decades.", mood="thinking", shot="close",
  board="Mao: peasants + Long March legend")
L("chrono", "Pol Pot is different. Most Cambodians didn't know his face. They obeyed Angkar. The Organisation. Secrecy, not charisma.", mood="teach", shot="close",
  board="Pol Pot: secret 'Angkar', no public face")
L("chrono", "Man or moment? Without the crisis, these men stay on the fringe. Without them, it might have gone another way. Link them.", mood="teach", shot="close",
  board="Individual + circumstances: LINK them")

serious()
L("tara", "How did they keep power?", mood="serious", shot="close")
L("chrono", "This part is not funny, so I'll say it plainly. Terror. The Gestapo and the S S. Red Guards in China. Angkar's purges in Cambodia.", mood="serious", shot="close",
  boardClear=True, board="CONTROL: terror · propaganda · youth")
L("chrono", "Propaganda and a cult of personality. Control of schools and young people. Rivals removed. The press silenced.", mood="serious", shot="close",
  board="Cult of personality · rivals removed")
L("chrono", "The Nazis murdered six million Jews in the Holocaust, and millions of others. In China, historians estimate tens of millions died in the famine after the Great Leap Forward.", mood="sad", shot="close")
L("chrono", "In Cambodia, around one and a half to two million people died. About a quarter of the population.", mood="sad", shot="close")
L("tara", "Every one of those numbers was a person. With a name, and a family.", mood="sad", shot="close", gap=1.0)
serious(False)

# ---------------- ACT 3: HOME, THE ELECTION AND THE ESSAY ----------------
card("THREE DAYS LATER", "Lift: fixed. Water: back. Microphone: confiscated.", 2.6)
scene("living", [("tara", 260), ("mum", 560), ("dad", 860)])
L("dad", "Good news. The lift is fixed. Thanks to my strong leadership.", mood="smug", shot="close")
L("mum", "It's fixed because I phoned the lift company. Four minutes.", mood="annoyed", shot="close")
L("tara", "Four hundred messages, Dad. One phone call.", mood="deadpan", shot="close")
L("mum", "And we held a proper election. Secret ballot. One vote each. Even Uncle Hock.", mood="determined", shot="close", prop="ballot")
L("dad", "I accept the will of the people. Who won?", mood="worried", shot="close")
L("mum", "Me. Your term as Head of Microphone has ended.", mood="smug", shot="close")
L("tara", "That's democracy, Dad. You can lose. And then you just go home and eat kaya toast.", mood="happy", shot="two", gap=0.4)

scene("living", [("tara", 300), ("chrono", 820)], "That night. Homework.")
L("tara", "Essay. Crisis was the main reason dictators came to power. How far do you agree?", mood="thinking", shot="close",
  boardClear=True, board="'Crisis was the main reason.' How far?")
L("chrono", "Step one. For. All three countries had a deep crisis.", mood="teach", shot="close",
  board="FOR: a crisis in all three countries")
L("tara", "Step two. Against. Britain and the USA had the Depression too, and stayed democracies.", mood="thinking", shot="close",
  board="AGAINST: UK & USA had crises too")
L("chrono", "Step three. Link. Crisis made people desperate. Weak governments couldn't cope. A ruthless leader walked in.", mood="teach", shot="close",
  board="Crisis → weak govt → leader + party")
L("tara", "Judgement. Crisis was the essential starting point. But it only led to dictatorship when weak government let a leader exploit it.", mood="determined", shot="close",
  board="Crisis: necessary, but not enough alone")
L("chrono", "A substantiated judgement. Ms Lim will weep. With joy. Probably.", mood="smug", shot="close", gap=0.5)

confess("chrono", "CHRONO · Recap Monster · Older Than Microphones")
L("chrono", "Recap. First. In a democracy, you can vote them out. In a dictatorship, you can't.", mood="teach",
  boardClear=True, board="1. Democracy: you can vote them OUT")
L("chrono", "Second. Crisis. War, defeat and economic collapse made people desperate.", mood="teach", board="2. Crisis: war, defeat, collapse")
L("chrono", "Third. Weak government. Weimar, the G M D and Lon Nol couldn't cope.", mood="teach", board="3. Weak govt: Weimar, GMD, Lon Nol")
L("chrono", "Fourth. Leadership got them in. Terror and propaganda kept them there.", mood="teach", board="4. Leaders in; terror + propaganda kept")
L("chrono", "And finally. No single cause. Link the factors. Then judge.", mood="smug", board="5. Link the factors, then JUDGE", gap=0.5)

scene("living", [("tara", 260), ("mum", 560), ("dad", 840)])
L("dad", "Exciting news. I've been elected Chair of the karaoke sub committee.", mood="excited", shot="close")
L("tara", "How many votes?", mood="deadpan", shot="close")
L("dad", "One. Mine. There were no other candidates. It was still very tense.", mood="smug", shot="close")
L("dad", "I'll take it.", mood="smug", shot="close")
sfx("ding")
L("chrono", "Put me back in the clock. And somebody hide that microphone.", mood="bored", shot="wide", offstage=True, gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Chrono gives you 5 seconds. Then he sighs.", 3.0)
challenge(1, "A state that tries to control ALL of life, even thoughts, is called…?", "Totalitarian", "More extreme than 'authoritarian'",
  "Question one. A state that controls every part of life, even what people think, is called what?", "Totalitarian. It goes further than authoritarian, and tries to control everything.")
challenge(2, "Which article of the Weimar constitution let the President rule by decree?", "Article 48", "Used by chancellors from 1930 onwards",
  "Question two. Which Weimar article let the President rule by emergency decree?", "Article forty eight. Ruling by decree instead of through parliament. A sign of weak government.")
challenge(3, "Britain and the USA had the Depression but stayed democracies. What does that show about crisis?", "Not enough", "Crisis + weak govt + leader → dictatorship",
  "Question three. Britain and the USA also had the Depression, but stayed democracies. What does that show about crisis?", "Crisis alone wasn't enough. It needed weak government and a ruthless leader too. If you said crisis explains everything, go and sit with Dad.")
end_card()
