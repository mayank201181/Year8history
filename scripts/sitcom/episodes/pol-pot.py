# "Who Rules the Remote?" S01E07 "Why We Remember" (Topic: Pol Pot and the Khmer Rouge)
# Format and helpers: see common.py and WRITING.md; check with lint_episode.py.
# The most sensitive episode of the season (WRITING.md §5, §7): family humour only in the cold open and
# the tag; Ticktock does not claim to have been there; the genocide is handled only in solemn() beats.

EP = dict(topic="pol-pot", logline="For once, Dad puts down the remote: Tara's class is visiting a museum gallery about Cambodia, "
          "1975 to 1979, and the whole family goes. Ticktock, who was never there, hands over to the survivors.")

# Audio-only respellings for this episode's names (tested with say.py; subtitles keep the real spelling).
SAY.update({"Tuol Sleng": "Tool Sleng", "Choeung Ek": "Chung Ek", "Ho Chi Minh": "Ho Chee Minh", "Duch": "Doik"})

LONG_PAST = timeline_svg([
    (802, "Khmer Empire\nc. 802"),
    (1120, "Angkor Wat\nearly 1100s"),
    (1431, "Angkor\nattacked 1431"),
    (1863, "French rule\n1863"),
    (1953, "Independence\n1953"),
], 800, 2000, h=210, title="Cambodia before 1953, to scale")

# Schematic map (not to scale), simplified from the guide's map: polygons scaled into the 520-wide board.
WAR_MAP = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 260" font-family="sans-serif">'
    '<text x="260" y="18" fill="#fcd34d" font-size="15" text-anchor="middle">Cambodia and the Vietnam War (schematic, not to scale)</text>'
    '<g transform="translate(10,-5) scale(0.88)" stroke-width="2">'
    '<polygon points="20,40 150,40 150,95 200,115 200,150 120,170 130,230 100,255 20,255" fill="#f8fafc" fill-opacity="0.08" stroke="#94a3b8"/>'
    '<polygon points="150,40 262,40 292,150 250,152 200,150 200,115 150,95" fill="#c4b5fd" fill-opacity="0.12" stroke="#c4b5fd"/>'
    '<polygon points="262,40 332,40 322,70 292,95 330,150 350,200 330,250 262,300 222,292 242,265 290,226 300,190 292,150" fill="#7dd3fc" fill-opacity="0.15" stroke="#7dd3fc"/>'
    '<polygon points="120,170 200,150 250,152 292,150 300,190 290,226 242,265 170,262 130,230" fill="#86efac" fill-opacity="0.2" stroke="#86efac" stroke-width="3"/>'
    '<ellipse cx="276" cy="196" rx="20" ry="44" fill="#fca5a5" fill-opacity="0.25" stroke="#fca5a5" stroke-dasharray="4 3"/>'
    '<polyline points="300,62 282,95 270,125 272,155 280,180 272,215 262,248" fill="none" stroke="#fcd34d" stroke-width="3.5" stroke-dasharray="8 5"/>'
    '</g>'
    '<text x="80" y="118" fill="#94a3b8" font-size="14" text-anchor="middle">THAILAND</text>'
    '<text x="186" y="72" fill="#c4b5fd" font-size="14" text-anchor="middle">LAOS</text>'
    '<text x="180" y="168" fill="#86efac" font-size="15" font-weight="bold" text-anchor="middle">CAMBODIA</text>'
    '<text x="318" y="118" fill="#7dd3fc" font-size="14">VIETNAM</text>'
    '<line x1="193" y1="209" x2="160" y2="238" stroke="#f8fafc" stroke-width="1.5"/>'
    '<circle cx="196" cy="205" r="5" fill="#f8fafc"/>'
    '<text x="146" y="252" fill="#f8fafc" font-size="14" text-anchor="middle">Phnom Penh</text>'
    '<rect x="342" y="170" width="172" height="78" rx="8" fill="#0f172a" fill-opacity="0.25" stroke="#94a3b8"/>'
    '<line x1="352" y1="190" x2="382" y2="190" stroke="#fcd34d" stroke-width="3.5" stroke-dasharray="8 5"/>'
    '<text x="390" y="195" fill="#fcd34d" font-size="14">Ho Chi Minh Trail</text>'
    '<rect x="355" y="208" width="24" height="16" rx="4" fill="#fca5a5" fill-opacity="0.25" stroke="#fca5a5" stroke-dasharray="4 3"/>'
    '<text x="390" y="220" fill="#fca5a5" font-size="14">US bombing,</text>'
    '<text x="390" y="238" fill="#fca5a5" font-size="14">heaviest 1969–73</text>'
    '</svg>')

TIMELINE_KR = timeline_svg([
    (1969.2, "Secret US\nbombing 1969"),
    (1970.2, "Lon Nol coup\n18 Mar 1970"),
    (1975.3, "Phnom Penh falls\n17 Apr 1975"),
    (1979.02, "Vietnam takes it\n7 Jan 1979"),
], 1965, 1980, h=200, title="1969 to 1979, to scale")

YEAR_ZERO = cards_svg([
    ("Abolished", ["money, markets", "schools", "religion", "private property", "family life"], ROSE),
    ("'New people'", ["from the towns", "trusted least", "harshest work"], GOLD),
    ("'Base people'", ["villagers under", "Khmer Rouge rule", "before 1975"], SKY),
], h=200, title="Year Zero: trying to restart history")

COMPARE = cards_svg([
    ("Hitler", ["Crisis: Depression", "Weak: Weimar", "Leader: speeches", "Appointed, 1933"], GOLD),
    ("Mao", ["Crisis: invasion", "Weak: Nationalists", "Leader: a cult", "Civil war, 1949"], SKY),
    ("Pol Pot", ["Crisis: war, bombs", "Weak: Lon Nol", "Leader: hidden", "Civil war, 1975"], MINT),
], h=200, title="Term 2: three roads to dictatorship")

# ---------------- COLD OPEN ----------------
scene("living", [("tara", 260), ("mum", 600), ("dad", 960)])
L("dad", "Seven o'clock. By the ancient law of the sofa, whoever holds the remote at seven rules all week.", mood="smug", shot="close", prop="remote")
L("mum", "Vikram, you made that law up two minutes ago.", mood="eyeroll", shot="close")
freeze("THE ANCIENT SOFA LAW", 2.4, narrator="Narrator: The ancient law was two minutes old.")
L("dad", "Tara? No protest? Not even a placard?", mood="worried", shot="close", prop="remote")
L("tara", "Not tonight, Dad. You can have it.", mood="sad", shot="close")
L("mum", "That's not like you. What's wrong?", mood="worried", shot="close")
L("tara", "Our last Term 2 topic is Cambodia, and Pol Pot. Ms Lim says to take it slowly. Families can come on our museum visit on Saturday.", mood="solemn", shot="close")
L("dad", "Then we'll all go. The remote can wait.", mood="determined", shot="close")
L("mum", "Did your father just put the remote down? Voluntarily?", mood="shock", shot="two")
confess("tara", "TARA RAO · 12 · Term 2 · The Last Case")
L("tara", "Our question is how dictatorships came to power. Ms Lim says this case is also about the people we remember.", mood="thinking", gap=0.6)

title()

# ---------------- ACT 1: BEFORE THE KHMER ROUGE ----------------
scene("kitchen", [("tara", 260), ("dad", 560)])
L("tara", "Ticktock? I need help with this one.", mood="neutral", shot="wide")
sfx("drawer")
poof("ticktock", 900)
sfx("sand")
L("ticktock", "Tara. And Vikram, without the remote. Something serious, then.", mood="worried", shot="close")
L("tara", "Cambodia, 1975 to 1979. Were you there?", mood="neutral", shot="close")
L("ticktock", "No. I was never in Cambodia, and I won't pretend. Not for this. Listen to the people who were: the survivors.", mood="solemn", shot="close",
  boardClear=True, board="Was this source there?  NO")
L("dad", "But memories change over the years. Can you trust them?", mood="thinking", shot="close")
L("ticktock", "It's called oral history. Historians cross-check it with other evidence, and when thousands of accounts agree, it is very strong.", mood="teach", shot="close",
  board="Survivors' testimony + cross-checking ✔")

confess("ticktock", "TICKTOCK · Antique Hourglass · Not An Eyewitness")
L("ticktock", "Most weeks, I exaggerate. This week, I step aside for the people who know.", mood="solemn", gap=0.5)

scene("kitchen", [("tara", 260), ("dad", 560), ("ticktock", 900)])
L("ticktock", "From about 802, Khmer kings ruled a great empire from Angkor, and built Angkor Wat. It is still on Cambodia's flag.", mood="teach", shot="close",
  boardClear=True, board="Khmer Empire, c. 802–1431", diagram=LONG_PAST)
L("ticktock", "From 1863, France ruled. Then, on 9 November 1953, Cambodia became independent under Norodom Sihanouk.", mood="teach", shot="close",
  board="1863 French rule; 1953 independence")
L("tara", "A proud past, and a prince the villagers revered.", mood="thinking", shot="close")
L("ticktock", "Next door raged the Vietnam War. Sihanouk stayed neutral, but let North Vietnamese troops use the Ho Chi Minh Trail through Cambodia.", mood="teach", shot="close",
  boardClear=True, board="Neutral... but the war came anyway", diagram=WAR_MAP)
L("ticktock", "From 1969 to 1973, the United States secretly bombed eastern Cambodia. Villages were destroyed, and refugees fled to the capital.", mood="solemn", shot="close",
  board="1969–73: secret US bombing")
L("dad", "That would make people very angry.", mood="sad", shot="close")
L("ticktock", "It did. Then, in March 1970, General Lon Nol removed Sihanouk. His new government was pro-American, and corrupt.", mood="teach", shot="close",
  board="1970: Lon Nol's coup")
L("tara", "So Sihanouk joined the communists he'd once hunted. He'd even nicknamed them the Khmer Rouge. Villagers followed their prince into civil war.", mood="teach", shot="close")
L("tara", "A crisis from outside, and a weak government inside. Two of our three ingredients.", mood="thinking", shot="close", gap=0.4)

confess("dad", "VIKRAM RAO · Dad · Listening, For Once")
L("dad", "I usually do the talking. This week, Tara knows more than I do. So I'm listening.", mood="thinking", gap=0.6)

# ---------------- ACT 2: THE MUSEUM ----------------
card("SATURDAY: CLASS VISIT", "National Museum · Gallery 8: Why We Remember", 2.6)
scene("museum", [("tara", 280), ("teacher", 620), ("guide", 1000)])
L("teacher", "Thank you for coming, families too. We'll take our time. If anything upsets you, it's fine to step out.", mood="solemn", shot="close")
L("teacher", "Pol Pot was born Saloth Sar. He studied in Paris from 1949, became a communist, and later worked as a teacher.", mood="teach", shot="close",
  boardClear=True, board="Saloth Sar: Paris 1949, communist")
L("guide", "In secret, by 1963, he led the communist party. Its ideas: poor peasants were 'pure'; cities, foreigners and the educated were enemies.", mood="teach", shot="close",
  board="Villages 'pure'; cities, the enemy")
L("tara", "A teacher whose government would close every school.", mood="thinking", shot="close")
L("guide", "And it was all secret. People had to obey 'Angkar', 'the Organisation'. Most had never heard the name Pol Pot.", mood="teach", shot="close",
  board="'Angkar' = the Organisation")
L("teacher", "On 17 April 1975, the Khmer Rouge marched into Phnom Penh. Many cheered, hoping for peace. Tara, what mattered most in their rise?", mood="teach", shot="close",
  boardClear=True, board="17 Apr 1975: Phnom Penh falls", diagram=TIMELINE_KR)
L("tara", "Crisis. The war and the bombing created recruits, and broke Lon Nol's weak government.", mood="thinking", shot="close",
  board="CRISIS: war, bombing → recruits")
L("tara", "But others opposed Lon Nol too. The Khmer Rouge won because their secret, disciplined party turned the crisis into victory.", mood="determined", shot="close",
  board="LEADERSHIP: secret, disciplined")
L("teacher", "A judgement, with reasons and a counter-argument.", mood="happy", shot="close", gap=0.4)

L("guide", "Within days, they forced perhaps two million people out of Phnom Penh. They were told it was for three days.", mood="solemn", shot="close",
  boardClear=True, diagram=YEAR_ZERO)
L("teacher", "A French priest, François Ponchaud, called his 1977 book 'Cambodia: Year Zero'. They were trying to restart history.", mood="teach", shot="close",
  board="'Year Zero': Ponchaud's phrase, 1977")
L("guide", "Money, schools and religion were abolished, families split up, and the country sealed off. Almost everyone was sent to the fields, with impossible rice targets.", mood="solemn", shot="close",
  board="Abolished: money, schools, religion")
L("teacher", "Now the hardest part. Let's be quiet for a moment.", mood="solemn", shot="close", boardClear=True, gap=0.6)
solemn("The Cambodian genocide, 1975–1979",
       ["An estimated 1.5–2 million people died.",
        "That is about a quarter of Cambodia's people.",
        "Execution, starvation, overwork, disease.",
        "Each one a person, with a name and a family."],
       "Between 1975 and 1979, an estimated one and a half to two million people died. That is about a quarter of everyone in Cambodia. "
       "They died from execution, starvation, overwork and disease, all caused by the regime's choices. "
       "Educated people, minorities such as the Vietnamese and the Cham Muslims, Buddhist monks, and anyone suspected of being an enemy were targeted.",
       who="teacher", hold=2.4)
L("tara", "Every one of them had a name.", mood="solemn", shot="close", gap=0.5)
solemn("Tuol Sleng and Choeung Ek",
       ["A Phnom Penh high school became prison S-21.",
        "Very few of its prisoners survived.",
        "Most were killed at Choeung Ek, outside the city.",
        "Both places are now memorials."],
       "In Phnom Penh, a high school called Tuol Sleng became a secret prison, S-21. Very few of its prisoners survived. "
       "Most were taken to Choeung Ek, outside the city, and killed. Today both places are memorials.",
       who="guide", hold=2.2)
L("teacher", "How do we know, when Cambodia was sealed off?", mood="solemn", shot="close",
  boardClear=True, board="How do we know?")
L("tara", "Survivors' testimony. The regime's own records. Maps of graves. Population studies.", mood="solemn", shot="close",
  board="Testimony ✔  Regime records ✔  Grave maps ✔")
L("guide", "The painter Vann Nath survived the prison, and spent his life making sure the world knew.", mood="solemn", shot="close")
L("tara", "So remembering gives people back their names.", mood="solemn", shot="close", gap=0.6)

# ---------------- ACT 3: DOWNFALL, JUSTICE AND THE ENQUIRY ----------------
card("MONDAY", "Ms Lim's classroom", 2.2)
scene("classroom", [("tara", 320), ("teacher", 760)])
L("teacher", "After Khmer Rouge raids across the border, Vietnam invaded. On 7 January 1979, its army captured Phnom Penh.", mood="teach", shot="close",
  boardClear=True, board="7 Jan 1979: Vietnam captures Phnom Penh")
L("tara", "But the Khmer Rouge fought on from the jungle, and kept Cambodia's seat at the United Nations for years. Cold War politics.", mood="thinking", shot="close",
  board="Fought on; kept the UN seat (Cold War)")
L("teacher", "Pol Pot died in 1998, never tried. But a tribunal convicted Duch, head of the prison, in 2010, and two senior leaders of genocide in 2018.", mood="teach", shot="close",
  board="Convictions: 2010 and 2018")
L("tara", "Late, and only a few. But the truth is now set down in law.", mood="thinking", shot="close", gap=0.4)
L("teacher", "Last question of Term 2. How did dictatorships come to power? Compare Hitler, Mao and Pol Pot.", mood="teach", shot="close",
  boardClear=True, diagram=COMPARE)
L("tara", "All three rose out of crisis, against a weak government. But leadership differed: Hitler gave speeches, Mao built a cult, Pol Pot hid.", mood="thinking", shot="close",
  board="✔ Crisis   ✔ Weak government")
L("tara", "So a dictatorship came when a crisis met a weak government, and a ruthless group with a clear ideology was ready to use it.", mood="determined", shot="close",
  board="Leadership: loud, worshipped, HIDDEN", gap=0.5)

# ---------------- THAT EVENING: WHY WE REMEMBER ----------------
card("THAT EVENING, AT HOME", "Why we remember", 2.4)
scene("living", [("tara", 260), ("mum", 600), ("dad", 960)])
L("dad", "Tara, why does your class study something so painful?", mood="thinking", shot="close")
L("tara", "Because the people who died should be remembered as people. Because survivors asked us to listen. And to learn the warning signs.", mood="solemn", shot="close")
L("mum", "The leaflet said Cambodia remembers them every year, on 20 May.", mood="solemn", shot="close")
L("dad", "Then that's what we agree. We remember, we listen, and we watch for the warning signs.", mood="determined", shot="close")
L("tara", "Agreed.", mood="solemn", shot="close")
L("mum", "Agreed.", mood="solemn", shot="close", gap=0.6)
solemn("Why we remember",
       ["Victims: real people, with names and families.",
        "Survivors: their testimony is our evidence.",
        "Justice: late and limited, but the truth is known.",
        "Warning signs: crisis, blame, attacks on courts."],
       "Today, Tuol Sleng and Choeung Ek are World Heritage sites, so that the world keeps remembering.",
       who="narrator", hold=2.2)

# ---------------- RECAP ----------------
confess("ticktock", "TICKTOCK · Recap Hourglass · Listening Carefully")
L("ticktock", "Recap. One. Crisis: the Vietnam War, US bombing, and Lon Nol's coup.", mood="teach",
  boardClear=True, board="1. War, bombing, coup: a crisis")
L("ticktock", "Two. 17 April 1975: Phnom Penh falls. Then Year Zero.", mood="teach", board="2. 17 Apr 1975, then 'Year Zero'")
L("ticktock", "Three. An estimated one and a half to two million people died. We remember them.", mood="solemn", board="3. 1.5–2 million died: remember them")
L("ticktock", "Four. Overthrown in 1979. Leaders convicted in 2010 and 2018.", mood="teach", board="4. Ended 1979; convictions 2010, 2018")
L("ticktock", "Five. Listen to survivors, and cross-check every source.", mood="teach", board="5. Listen to survivors; cross-check", gap=0.5)

# ---------------- TAG ----------------
scene("living", [("tara", 260), ("dad", 600), ("ticktock", 960)])
L("dad", "Tara. You choose tonight.", mood="happy", shot="close", prop="remote")
L("tara", "Who are you, and what have you done with Dad?", mood="shock", shot="close")
L("ticktock", "Enjoy it. Next term is the French Revolution, where the people tell the king what to do.", mood="excited", shot="close")
L("dad", "Then I'll be a generous king. Let them eat kaya toast!", mood="smug", shot="close", prop="remote")
L("tara", "Marie Antoinette almost certainly never said 'let them eat cake'.", mood="deadpan", shot="close")
L("ticktock", "In 1789, I was a sprightly six hundred and sixty-three. Practically a teenager.", mood="smug", shot="close")
sfx("ding")
L("tara", "For an hourglass.", mood="deadpan", shot="wide", gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Ticktock gives you 5 seconds. Take your time.", 3.0)
challenge(1, "On what date did the Khmer Rouge capture Phnom Penh?", "17 April 1975", "Within days, the towns and cities were emptied",
  "Question one. On what date did the Khmer Rouge capture Phnom Penh?",
  "17 April 1975. Within days, the cities were emptied.")
challenge(2, "Why did Lon Nol's coup in 1970 help the Khmer Rouge?", "Sihanouk's support", "He joined them; villagers who revered him followed",
  "Question two. Why did Lon Nol's coup help the Khmer Rouge?",
  "It pushed Sihanouk to join them, and villagers who revered him followed.")
challenge(3, "Testimony was recorded years later. How do historians test it?", "Cross-reference", "Check it against records, grave maps, population studies",
  "Question three. Survivors' testimony was recorded years later. How do historians test it?",
  "They cross-check it with records, grave maps and population studies.")
end_card()
