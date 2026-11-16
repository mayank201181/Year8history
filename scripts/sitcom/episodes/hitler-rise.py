# "Totally Raotional" History S01E07 "The Wrong Kind Of Popular" (Topic: Hitler's Rise to Power)
# Format and helpers: see common.py; check with lint_episode.py.
# SENSITIVE: comedy only from the school-election B-plot. Nobody impersonates Hitler.
# Persecution and the Holocaust are inside serious().

EP = dict(topic="hitler-rise", logline="A school-council candidate blames everything on the Year Sevens and promises to fix everything. Tara spots the pattern; Chrono explains how Hitler really came to power, 1919-34.")

# Nazi seats drawn to scale (288 seats = 160 px). March 1933 was held under terror: not a free election.
SEATS = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 240"><line x1="20" y1="200" x2="500" y2="200" stroke="#f8fafc" stroke-width="2"/>'
    '<rect x="40" y="193.3" width="64" height="6.7" fill="#7dd3fc"/><rect x="135" y="140.6" width="64" height="59.4" fill="#7dd3fc"/>'
    '<rect x="230" y="72.2" width="64" height="127.8" fill="#fde047"/><rect x="325" y="91.1" width="64" height="108.9" fill="#7dd3fc"/>'
    '<rect x="420" y="40" width="64" height="160" fill="#fca5a5"/><g font-family="sans-serif" font-size="18" text-anchor="middle" fill="#f8fafc">'
    '<text x="72" y="186">12</text><text x="167" y="133">107</text><text x="262" y="65">230</text><text x="357" y="84">196</text><text x="452" y="33">288</text>'
    '<text x="72" y="224">1928</text><text x="167" y="224">1930</text><text x="262" y="224">Jul 1932</text><text x="357" y="224">Nov 1932</text>'
    '<text x="452" y="222">Mar 1933</text><text x="452" y="238" font-size="13">(not free)</text></g></svg>'
)

# ---------------- COLD OPEN ----------------
scene("living", [("tara", 300), ("mum", 760)])
L("tara", "Mum. I'm running for the school council.", mood="neutral", shot="close")
L("mum", "Finally! I have a spreadsheet. I have badges. I have a clipboard!", mood="excited", shot="close", prop="ballot")
L("tara", "I told you four minutes ago.", mood="deadpan", shot="close", gap=0.4)
scene("living", [("tara", 260), ("mum", 600), ("dad", 980)])
sfx("door")
L("dad", "I'll be campaign manager. I've seen every political film. Well. The trailers.", mood="smug", shot="close")
L("tara", "Ethan's leaflet says, everything wrong with this school is the Year Sevens' fault. Vote Ethan. I'll fix everything.", mood="deadpan", shot="close", prop="newspaper", boardClear=True, board="VOTE ETHAN! It's all the Year 7s' fault!")
L("dad", "Everything? Even the wifi? Strong offer.", mood="excited", shot="close")
L("mum", "The Year Sevens did not break the wifi. They can barely open their lockers.", mood="annoyed", shot="close")
freeze("“I'LL FIX EVERYTHING”", 2.4, narrator="Narrator: He could not fix everything.")
confess("tara", "TARA RAO · 12 · Candidate · Reads The Small Print")
L("tara", "Blame one group for everything. Promise to fix everything. I've seen that pattern. In my history book.", mood="deadpan")
L("tara", "Ethan isn't a villain. He's a boy with a glue stick. But I want someone who checks his sources.", mood="deadpan", gap=0.6)

title()

# ---------------- ACT 1: THE NAZI PARTY AND THE VOTERS ----------------
scene("kitchen", [("tara", 380)])
L("tara", "Chrono. I need the nineteen thirties.", mood="determined", shot="wide")
sfx("drawer")
poof("chrono", 860)
L("chrono", "Nine hundred and fifty years old, and still on call.", mood="bored", shot="close")
L("tara", "A candidate who blames one group for everything.", mood="worried", shot="two")
L("chrono", "A Year Eight with a leaflet is not a dictator. But that pattern is why we study Hitler's rise.", mood="serious", shot="close")
L("chrono", "Nineteen nineteen. Germany has lost the war. An ex-soldier, Adolf Hitler, joins the tiny German Workers' Party.", mood="teach", shot="close", boardClear=True, board="1919  Hitler joins German Workers' Party")
L("chrono", "By nineteen twenty, it's the Nazi Party, with a twenty five point programme. Soon come the Brownshirts, the S A.", mood="teach", shot="close", board="1920  NSDAP · 25-Point Programme · then SA")
L("chrono", "Extreme nationalism. Tear up Versailles. Seize living space, Lebensraum, in the east. And racism, above all hatred of Jewish people.", mood="serious", shot="close", board="Nationalism · smash Versailles · Lebensraum")
L("chrono", "Those ideas were false and hateful. Jewish Germans were doctors, shopkeepers, neighbours. About a hundred thousand had served in the war.", mood="serious", shot="close", board="Racism, antisemitism: FALSE and hateful")
L("chrono", "In nineteen twenty three, his Munich Putsch failed. Lesson? Get voted in, then take over.", mood="teach", shot="close", board="1923  Putsch fails → win through ELECTIONS")
L("chrono", "Nineteen twenty eight. Twelve seats in the Reichstag, the parliament. Almost nobody cared.", mood="teach", shot="close", boardClear=True, board="Nazi seats in the Reichstag", diagram=SEATS)
L("chrono", "Then the Depression. By nineteen thirty two, about six million were unemployed. In July, the Nazis won two hundred and thirty seats.", mood="teach", shot="close", board="Jul 1932: 230 seats (37%), largest party")
L("tara", "Why would anyone vote for that?", mood="worried", shot="close")
L("chrono", "Sort the causes. One. The Depression. Desperate people want someone who sounds certain.", mood="teach", shot="close", boardClear=True, board="1. Depression → despair")
L("chrono", "Two. Fear of Communism. Businesses and farmers dreaded a revolution like Russia's.", mood="teach", shot="close", board="2. Fear of Communism")
L("chrono", "Three. Goebbels's propaganda. Rallies, posters, and flights so Hitler could speak in several cities a day.", mood="teach", shot="close", board="3. Propaganda (Goebbels)")
L("chrono", "Four. Hitler's speeches, promising something to everyone.", mood="teach", shot="close", board="4. Hitler's speeches + promises to all")
L("tara", "He promised to fix everything.", mood="thinking", shot="close")
L("chrono", "Five. S A violence. And note. In free elections, the Nazis never won a majority.", mood="serious", shot="close", board="5. SA violence    (no majority, ever)")

confess("dad", "VIKRAM RAO · Dad · Campaign Manager · Unelected")
L("dad", "I have designed our slogan. Tara Rao. She's fine.", mood="smug")
L("dad", "Mum says it lacks energy. So I added an exclamation mark. Tara Rao. She's fine!", mood="smug", gap=0.6)

# ---------------- ACT 2: HOW HE BECAME CHANCELLOR, AND FÜHRER ----------------
card("MEANWHILE, AT THE HAWKER CENTRE", "Campaign headquarters: table 12, next to the prata", 2.4)
scene("hawker", [("mum", 300), ("tara", 560), ("uncle", 1000)])
L("mum", "We need sixty one votes. I have made a chart.", mood="determined", shot="close", prop="tablet")
L("mum", "And Dad wants to promise free bubble tea. For everyone. Forever.", mood="annoyed", shot="close")
L("tara", "That's the other trick. I'm only promising things I can actually do.", mood="determined", shot="close")
poof("chrono", 780)
L("chrono", "People forget. Hitler didn't win power in an election. He was handed it.", mood="teach", shot="close")
L("chrono", "President Hindenburg, aged eighty four, ruled by emergency decree, through Chancellors Brüning, Papen and Schleicher.", mood="teach", shot="close", boardClear=True, board="Hindenburg: Brüning → Papen → Schleicher")
L("chrono", "Hindenburg distrusted Hitler. But Papen did a backstairs deal. Make Hitler Chancellor, me Vice Chancellor, and we'll control him.", mood="teach", shot="close", board="Papen's deal: only 3 Nazis in cabinet")
L("chrono", "So on the thirtieth of January, nineteen thirty three, Hitler became Chancellor. Appointed, not elected.", mood="serious", shot="close", board="30 Jan 1933: APPOINTED, not elected")
L("uncle", "So the old men thought they could control him, ah?", mood="thinking", shot="close")
L("chrono", "They thought he'd be their puppet. Within eighteen months, he'd cut every string.", mood="serious", shot="close", gap=0.5)

scene("library", [("tara", 380), ("chrono", 840)])
L("chrono", "Step one. February. The Reichstag burns. Hitler blames the Communists, and an emergency decree ends basic freedoms.", mood="teach", shot="close", boardClear=True, board="27 Feb 1933  Reichstag Fire")
L("chrono", "Step two. March. The Enabling Act lets Hitler make laws without parliament. Brownshirts surrounded the vote.", mood="teach", shot="close", board="23 Mar 1933  Enabling Act")
L("chrono", "Step three. Trade unions banned in May. Every other party banned in July. A one party state.", mood="teach", shot="close", board="1933  unions + other parties banned")
L("chrono", "Step four. June nineteen thirty four, the Night of the Long Knives. Hitler had Ernst Röhm and other rivals murdered. At least eighty five died.", mood="serious", shot="close", board="30 Jun 1934  Night of the Long Knives")
L("chrono", "Step five. August. Hindenburg dies. Hitler makes himself Führer, and the army swears loyalty to him.", mood="teach", shot="close", board="Aug 1934  Hindenburg dies → Führer")
L("tara", "And almost every step looked legal on paper.", mood="serious", shot="close", gap=0.5)

# ---------------- ACT 3: CONTROL, PERSECUTION, JUDGEMENT ----------------
card("THAT EVENING", "Badges printed: 400. Voters: 120.", 2.2)
scene("living", [("tara", 260), ("mum", 560), ("dad", 820), ("chrono", 1060)])
L("tara", "How did Hitler keep control?", mood="thinking", shot="close")
L("chrono", "Terror. Himmler's S S. The Gestapo, the secret police. Concentration camps, from Dachau in nineteen thirty three.", mood="serious", shot="close", boardClear=True, board="Terror: SS, Gestapo, Dachau (1933)")
L("chrono", "Propaganda. Goebbels controlled radio, press and film. Books were burned. Children joined the Hitler Youth.", mood="teach", shot="close", board="Propaganda: Goebbels · Hitler Youth")
serious()
L("chrono", "Now listen carefully. This part is not funny, and we won't pretend it is.", mood="serious", shot="wide")
L("chrono", "Jewish people were persecuted from the start. In nineteen thirty three, a boycott of Jewish shops. Jewish teachers and lawyers lost their jobs.", mood="serious", shot="close", boardClear=True, board="1933  Boycott; Jewish workers sacked")
L("chrono", "In nineteen thirty five, the Nuremberg Laws took away Jewish people's citizenship.", mood="serious", shot="close", board="1935  Nuremberg Laws")
L("chrono", "In November nineteen thirty eight, Kristallnacht. Synagogues, homes and shops were attacked across Germany. At least ninety one people were murdered.", mood="serious", shot="close", board="1938  Kristallnacht")
L("chrono", "In the Second World War, this became the Holocaust. The Nazis murdered about six million Jewish men, women and children, and Roma, disabled people and many others.", mood="sad", shot="close", board="Holocaust: about 6 million Jewish people")
L("tara", "Every one of them was a person. With a name and a family.", mood="sad", shot="close")
L("mum", "That's why we remember them. And why we learn how it started.", mood="sad", shot="close", gap=1.2)
serious(False)
L("tara", "I'm going to rewrite my speech.", mood="serious", shot="close", gap=0.8)
L("chrono", "The big question. Why did Hitler come to power? Long-term, Versailles and a weak constitution. Short-term, the Depression and fear of Communism.", mood="teach", shot="close", boardClear=True, board="Long: Versailles · Short: Depression")
L("chrono", "Nazi strengths, propaganda and Hitler himself. And the trigger, elites who thought they could use him.", mood="teach", shot="close", board="Nazi strengths · elites' miscalculation")
L("tara", "The Depression mattered most. Without it, twelve seats. But Papen's deal still handed him power.", mood="determined", shot="close")
L("chrono", "Crisis, weak government, and a leader who exploited both. That's a top answer.", mood="happy", shot="close", gap=0.5)

card("THE NEXT DAY", "Year 8 council hustings", 2.2)
scene("classroom", [("teacher", 320), ("tara", 760)])
L("tara", "I can't fix everything. Nobody can. And nothing is the Year Sevens' fault. I promise a suggestion box, longer library hours, and a fair canteen queue.", mood="determined", shot="close")
L("teacher", "Thank you, Tara. Ethan would also like to apologise to the Year Sevens.", mood="happy", shot="close")
sfx("fanfare")
L("teacher", "Our new Year Eight rep is Tara Rao. And Ethan will run the suggestion box.", mood="happy", shot="wide")
L("tara", "Okay. That's actually nice.", mood="happy", shot="close", gap=0.4)

confess("chrono", "CHRONO · 950 Years Old · Recap Hourglass")
L("chrono", "Recap. First. Hateful, racist ideas. After the failed Putsch, elections.", mood="teach", boardClear=True, board="1. Hateful ideas; Putsch → elections")
L("chrono", "Second. The Depression turned twelve seats into two hundred and thirty.", mood="teach", board="2. Depression: 12 seats → 230")
L("chrono", "Third. January nineteen thirty three. Appointed Chancellor, not elected.", mood="teach", board="3. 30 Jan 1933: appointed, NOT elected")
L("chrono", "Fourth. Reichstag Fire, Enabling Act, Long Knives, Führer. Dictator in eighteen months.", mood="teach", board="4. Fire → Enabling Act → Knives → Führer")
L("chrono", "And finally. Terror and propaganda kept control. Persecution led to the Holocaust. Remember the people.", mood="serious", board="5. Terror, propaganda; remember victims", gap=0.6)

scene("living", [("tara", 260), ("mum", 560), ("dad", 840)])
L("mum", "You printed two hundred and eighty spare badges.", mood="deadpan", shot="close")
L("dad", "Now I'm running for the condo committee. One promise. Fix the squeaky lobby door.", mood="determined", shot="close")
L("tara", "A realistic promise. I'm proud of you.", mood="happy", shot="close")
L("dad", "I'll take it.", mood="smug", shot="close")
sfx("ding")
L("chrono", "Put me back in the clock. And somebody vote for that door.", mood="bored", shot="wide", offstage=True, gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Chrono gives you 5 seconds. Then he checks your sources.", 3.0)
challenge(1, "On what date was Hitler appointed Chancellor?", "30 Jan 1933", "Papen + Hindenburg's deal: appointed, not elected",
  "Question one. On what date was Hitler appointed Chancellor?",
  "The thirtieth of January, nineteen thirty three. Appointed, after Papen's deal. Not elected.")
challenge(2, "Which 1933 law let Hitler make laws without the Reichstag?", "Enabling Act", "23 March 1933: parliament votes itself out",
  "Question two. Which law of nineteen thirty three let Hitler make laws without parliament?",
  "The Enabling Act. Parliament voted away its own power.")
challenge(3, "Nazi seats: 12 (1928) → 230 (1932). Which crisis best explains the jump?", "The Depression", "About 6 million unemployed by 1932",
  "Question three. Nazi seats rose from twelve to two hundred and thirty. Which crisis explains it best?",
  "The Great Depression. Other factors helped, but despair turned a tiny party into the biggest.")
end_card()
