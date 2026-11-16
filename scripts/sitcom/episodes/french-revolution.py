# "Who Rules the Remote?" S01E08 "Let Them Eat Kaya Toast" (Topic: the French Revolution)
# Format and helpers: see common.py and WRITING.md; check with lint_episode.py.

EP = dict(topic="french-revolution", logline="The snack fund is bankrupt, Dad claims he is exempt from chores by birth, and the Third Estate "
          "(Tara and the cousins) start a revolution in the kitchen. Ticktock (who definitely heard nobody mention cake) "
          "explains 1789, the Rights of Man and their limits, the Terror and Napoleon: did the Revolution create democracy?")

# Pronunciation for this episode's French names (audio only; subtitles keep the written text). Tested with say.py.
SAY.update({
    "Ancien Régime": "Ahn-syahn Ray-zheem",
    "Sieyès": "See-yay-ess", "Abbé": "Abbay",
    "Varennes": "Va-ren",
    "Olympe de Gouges": "Oh-lamp duh Goozh",
    "Saint-Domingue": "San Doh-mang",
    "Toussaint Louverture": "Too-san Loo-vair-toor",
    "Montesquieu": "Mon-tess-cue", "Rousseau": "Roo-so",
    "taille": "tie", "brioche": "bree-osh",
})

ESTATES = cards_svg([
    ("First\nEstate", ["clergy", "under 1%", "no taille:", "a 'free gift'"], GOLD),
    ("Second\nEstate", ["nobles", "about 2%", "almost all", "exempt"], SKY),
    ("Third\nEstate", ["everyone else", "about 97%", "taille, tithe,", "dues, salt tax"], ROSE),
], h=200, title="France in 1788: three estates")

CAUSES = cards_svg([
    ("Long-term", ["unfair estates", "Enlightenment", "ideas", "the American", "Revolution"], LILAC),
    ("Short-term", ["bankruptcy", "nobles block", "tax reform", "1788 harvest:", "bread soars"], SKY),
    ("Trigger", ["Estates-General", "called for", "May 1789", "(first since", "1614)"], GOLD),
], h=200, title="Why 1789?")

YEAR_1789 = timeline_svg([
    (5.13, "Estates meet\n5 May"),
    (6.6, "Assembly, Oath\n17–20 Jun"),
    (7.45, "Bastille\n14 Jul"),
    (8.1, "Privileges end\n4 Aug"),
    (8.84, "Rights of Man\n26 Aug"),
    (10.15, "Women's March\n5 Oct"),
], 5, 10.5, h=260, title="1789, May to October, to scale", ends=False)

TO_EMPIRE = timeline_svg([
    (1789.53, "Bastille\n1789"),
    (1791.47, "Varennes\n1791"),
    (1792.72, "Republic\n1792"),
    (1794.57, "Terror ends\n1794"),
    (1799.85, "Coup\n1799"),
    (1804.92, "Emperor\n1804"),
], 1789, 1805, h=230, title="1789–1804, to scale: king to emperor", ends=False)

VERDICT = cards_svg([
    ("Change", ["rights for citizens", "power from the nation", "equal before the law", "ideas spread abroad"], MINT),
    ("Continuity", ["women: no vote", "Terror: rights crushed", "an emperor again", "slavery back in some colonies"], ROSE),
], h=190, title="Did the Revolution create democracy?")

# ---------------- COLD OPEN ----------------
scene("living", [("tara", 260), ("mum", 600), ("dad", 960)])
L("mum", "Bad news. The snack fund is empty.", mood="worried", shot="close", prop="scroll")
L("dad", "Impossible. I am the King of the Remote.", mood="smug", shot="close", prop="remote")
L("mum", "You spent it all on that giant television.", mood="annoyed", shot="close", prop="scroll")
L("dad", "Then the Third Estate pays. Tara and the cousins: double chores.", mood="smug", shot="close", prop="remote")
L("tara", "We already do all the chores. You do none.", mood="deadpan", shot="close")
L("dad", "I am exempt. By birth.", mood="smug", shot="close")
L("mum", "Then I'm calling a family meeting. The first since 2014.", mood="determined", shot="two")
L("tara", "Like France. Louis XVI was broke, the nobles wouldn't pay, so he called the Estates-General. The first since 1614.", mood="deadpan", shot="close")
freeze("EXEMPT BY BIRTH", 2.4, narrator="Narrator: Dad has never once emptied the dishwasher.")
confess("tara", "TARA RAO · 12 · Third Estate · Does The Dishes")
L("tara", "This term's question: how and why has democracy developed? Apparently it starts at the kitchen sink.", mood="deadpan", gap=0.6)

title()

# ---------------- ACT 1: THE OLD ORDER ----------------
scene("kitchen", [("tara", 340)])
L("tara", "I need a historian.", mood="determined", shot="wide")
sfx("drawer")
poof("ticktock", 840)
sfx("sand")
L("ticktock", "France, 1789? I was there! I heard Marie Antoinette say, let them eat cake!", mood="excited", shot="close")
L("tara", "That story was written in the mid-1760s, about a great princess and brioche. Marie Antoinette was about ten, and still in Austria.", mood="deadpan", shot="close",
  boardClear=True, board="Cake story first written: mid-1760s")
L("ticktock", "Perhaps it was a different princess. Or a different cake.", mood="flustered", shot="close")
L("tara", "No reliable source records her saying it. It's a myth that suited her enemies.", mood="deadpan", shot="close", board="'Let them eat cake' = MYTH ✘", gap=0.4)

confess("ticktock", "TICKTOCK · Antique Hourglass · Ex-Versailles · Allegedly")
L("ticktock", "In 1789 I belonged to a French duke. He fled France in a hurry. He took his wig. He left me.", mood="smug", gap=0.5)

scene("kitchen", [("tara", 340), ("ticktock", 860)])
L("ticktock", "Before 1789, France was the Ancien Régime. Louis XVI ruled by divine right, with no parliament to answer to.", mood="teach", shot="close",
  boardClear=True, board="Ancien Régime: king by DIVINE RIGHT")
L("tara", "Chosen by God, answers to nobody. That's Dad.", mood="deadpan", shot="close")
L("ticktock", "Society had three estates. Clergy, under one percent. Nobles, about two percent. And everyone else, about ninety-seven percent.", mood="teach", shot="close",
  boardClear=True, diagram=ESTATES)
L("ticktock", "The Third Estate paid the taille, the main land tax, plus tithes and dues to their lord. Clergy and nobles were almost all exempt.", mood="teach", shot="close")
L("tara", "So you're the First Estate, Dad's the Second, and the cousins and I are ninety-seven percent of the washing-up.", mood="deadpan", shot="close")
L("ticktock", "Long-term: that unfair system, the American Revolution, and new ideas. Rousseau: power from the people. Montesquieu: split the powers. Voltaire: free speech.", mood="teach", shot="close",
  boardClear=True, diagram=CAUSES)
L("ticktock", "Short-term: bankruptcy, partly from helping the Americans. Nobles refused new taxes. And a bad harvest in 1788 sent bread prices soaring.", mood="teach", shot="close")
L("tara", "And the trigger: calling the Estates-General. The Abbé Sieyès asked, what is the Third Estate? Everything.", mood="determined", shot="close")

confess("dad", "VIKRAM RAO · Dad · Second Estate · Also The King")
L("dad", "Bankrupt is a strong word. I prefer, between snacks.", mood="smug", gap=0.6)

# ---------------- ACT 2: 1789 ----------------
card("MONDAY: HISTORY", "Ms Lim's class · 1789", 2.4)
scene("classroom", [("tara", 300), ("teacher", 760)])
L("teacher", "1789, to scale. In May the Estates-General met. But each estate got one vote.", mood="teach", shot="close", boardClear=True, diagram=YEAR_1789)
L("tara", "So clergy and nobles could outvote ninety-seven percent of France, two to one.", mood="annoyed", shot="close", board="Vote by ESTATE: 2 against 1 ✘")
L("teacher", "So on 17 June the Third Estate declared itself the National Assembly. Locked out, they swore on a tennis court to stay until France had a constitution.", mood="teach", shot="close")
poof("ticktock", 1040)
L("ticktock", "And on 14 July they stormed the Bastille and freed thousands of prisoners!", mood="excited", shot="close")
L("teacher", "Seven prisoners. The crowd wanted gunpowder. But the Bastille was a symbol of royal power, and the king backed down.", mood="teach", shot="close",
  board="Bastille: 7 prisoners, big SYMBOL")
L("ticktock", "Seven is thousands. In hourglass maths.", mood="flustered", shot="close", gap=0.3)
L("teacher", "Peasants rose in the Great Fear. On 4 August the Assembly abolished privilege. In October, Paris women marched on Versailles over bread.", mood="teach", shot="close")
L("teacher", "Judgement. Who mattered more in 1789: the deputies, or the crowds?", mood="teach", shot="close", boardClear=True, board="DEPUTIES or CROWDS?")
L("tara", "The deputies started it. But the crowds mattered most, because without the Bastille, the king's troops could have closed the Assembly.", mood="determined", shot="close",
  board="Crowds PROTECTED the deputies")
L("teacher", "A judgement, with reasons.", mood="happy", shot="close", gap=0.4)

# ---------------- MEANWHILE: THE KITCHEN REVOLUTION ----------------
card("MEANWHILE, AT HOME", "The Kitchen Revolution", 2.2)
scene("kitchen", [("tara", 300), ("dad", 700)])
L("tara", "Dad, we are the National Assembly of the Kitchen.", mood="determined", shot="close", prop="placard:THIRD ESTATE")
L("dad", "Then the kitchen is closed. For renovations.", mood="smug", shot="close", prop="remote")
sfx("door")
scene("park", [("tara", 380), ("mum", 780)], caption="THE BADMINTON COURT · BLOCK 42")
L("tara", "On this badminton court we swear: no washing-up until this family has a constitution!", mood="determined", shot="close", prop="placard:THIRD ESTATE")
L("mum", "I'm joining you. He just sacked me as Minister of Snacks.", mood="annoyed", shot="close")
L("tara", "Like Louis sacking Necker. Bold.", mood="deadpan", shot="close")
sfx("whoosh")
scene("kitchen", [("tara", 260), ("mum", 600), ("dad", 960)])
L("dad", "Stand back! The snack cupboard is a royal fortress!", mood="shock", shot="close")
L("tara", "Citizens! Storm the cupboard!", mood="determined", shot="two")
sfx("fanfare")
L("mum", "It contains seven biscuits. And one slice of kaya toast.", mood="deadpan", shot="close", prop="plate")
L("tara", "It's about the symbolism.", mood="smug", shot="close")
freeze("STORMING THE SNACKS", 2.4, narrator="Narrator: Dad gave up his privileges by bedtime.")

# ---------------- ACT 3: RIGHTS AND THEIR LIMITS ----------------
scene("living", [("tara", 260), ("mum", 600), ("ticktock", 960)])
L("mum", "The Rights of the Family. Article one: all members are born free and equal.", mood="determined", shot="close", prop="scroll")
L("tara", "Like the Rights of Man, August 1789. Liberty, equality before the law, free speech, and power from the nation.", mood="teach", shot="close",
  boardClear=True, board="26 Aug 1789: Rights of Man ✔")
L("mum", "Article two: only members who pay three days' pocket money in tax may vote.", mood="smug", shot="close", prop="scroll")
L("tara", "That's 1791. Active citizens voted. Poorer men were passive citizens, with no vote. And women couldn't vote at all.", mood="eyeroll", shot="close",
  board="1791: poorer men ✘  women ✘")
L("ticktock", "Passive? I am the oldest member of this household!", mood="flustered", shot="close")
L("tara", "So in 1791 Olympe de Gouges wrote the Rights of Woman. Woman is born free and lives equal to man in her rights.", mood="determined", shot="close",
  board="1791: Olympe de Gouges, Rights of WOMAN")
L("ticktock", "A source with a purpose: their own words, showing who was left out.", mood="teach", shot="close")
L("mum", "Fine. Article two is deleted.", mood="happy", shot="close", prop="scroll", gap=0.4)

card("SATURDAY: SCHOOL TRIP", "National Museum · Gallery 8: Power & People", 2.6)
scene("museum", [("tara", 300), ("teacher", 620), ("guide", 1000)])
L("guide", "Saint-Domingue, today Haiti: France's richest colony, worked by around half a million enslaved Africans.", mood="neutral", shot="close",
  boardClear=True, board="Saint-Domingue: ~500,000 enslaved")
L("teacher", "The Declaration didn't free them. In 1791 they rose in a huge revolt, later led by Toussaint Louverture. In 1794, France abolished slavery.", mood="teach", shot="close",
  board="1791 revolt → 1794 slavery abolished")
L("tara", "So rights weren't handed out. The excluded had to fight for them.", mood="thinking", shot="close")
L("teacher", "In 1791 the royal family fled in disguise and were caught at Varennes. Then came war with Austria and Prussia.", mood="teach", shot="close",
  boardClear=True, diagram=TO_EMPIRE)
L("guide", "In 1792 the king was overthrown. A Convention was elected by almost all men aged twenty-one and over, and France became a republic.", mood="excited", shot="close",
  board="1792: Republic. Almost all men 21+ vote")

# ---------------- MEANWHILE: THE FLIGHT TO THE VOID DECK ----------------
card("MEANWHILE, AT THE VOID DECK", "The Flight to Varennes", 2.2)
wear("dad", "liberty")
scene("hawker", [("dad", 420), ("uncle", 1000)])
L("dad", "One teh tarik, Uncle. Quickly. I am in disguise.", mood="worried", shot="close")
L("uncle", "Vikram, your face is on the residents' committee noticeboard, lah.", mood="deadpan", shot="close")
scene("hawker", [("tara", 300), ("dad", 600), ("uncle", 1000)])
L("tara", "Caught at Varennes. Mum says come home.", mood="deadpan", shot="two")
freeze("CAUGHT AT VARENNES", 2.4, narrator="Narrator: He got forty metres from the lift.")
wear("dad")

# ---------------- ACT 3: REPUBLIC, TERROR, EMPIRE ----------------
scene("classroom", [("tara", 320), ("teacher", 760)])
L("tara", "Ms Lim, what happened to the king?", mood="thinking", shot="close", boardClear=True)
L("teacher", "This next part is serious, so let's be quiet for a moment.", mood="solemn", shot="close")
solemn("The Terror, 1793 to 1794",
       ["21 January 1793: Louis XVI was executed.",
        "Robespierre and the Committee of Public Safety ruled.",
        "Around 17,000 people were officially executed.",
        "Most victims were ordinary people, not nobles."],
       "In January 1793, Louis XVI was executed. At war abroad and at home, the Convention gave huge power to the Committee of Public Safety, led by Robespierre. "
       "People could be arrested on suspicion. Around 17,000 were officially executed, and many more died in prison. Most were ordinary people. Olympe de Gouges was executed too.",
       who="teacher", hold=2.2)
L("teacher", "In July 1794 Robespierre himself was executed, and the Terror ended.", mood="solemn", shot="close")
L("tara", "So the widest vote France had held came with the least protection for rights.", mood="sad", shot="close")
L("teacher", "Yes. More votes did not automatically mean more rights.", mood="solemn", shot="close", gap=0.6)
L("teacher", "Then a weak government, the Directory. In 1799 a general, Napoleon Bonaparte, seized power in a coup. In 1804 he crowned himself Emperor.", mood="teach", shot="close",
  boardClear=True, board="1799 coup → 1804 EMPEROR")
L("teacher", "The Napoleonic Code kept men equal before the law. But wives had to obey, elections meant little, and in 1802 he brought back slavery in some colonies.", mood="teach", shot="close",
  board="Code: men equal ✔  wives obey ✘")
L("tara", "Not in Saint-Domingue. It beat his army and became independent Haiti in 1804.", mood="determined", shot="close")
L("teacher", "So. Did the French Revolution create democracy?", mood="teach", shot="close", boardClear=True, diagram=VERDICT)
L("tara", "Not straight away. Women never voted, the Terror crushed rights, and it ended in an empire. French women only won the vote in 1944.", mood="thinking", shot="close")
L("tara", "But it created the ideas democracy was built on: rights for every citizen, power from the nation, equality before the law.", mood="determined", shot="close")
L("teacher", "Change and continuity, weighed up. A historian's answer.", mood="happy", shot="close", gap=0.4)

# ---------------- RECAP ----------------
confess("ticktock", "TICKTOCK · Recap Hourglass · Heard Nobody Mention Cake")
L("ticktock", "Recap. One. Three estates, and the Third Estate paid.", mood="teach", boardClear=True, board="1. Ancien Régime: 3 estates, privilege")
L("ticktock", "Two. Ideas, debt and hunger, then the Estates-General.", mood="teach", board="2. Ideas + debt + bread → Estates-General")
L("ticktock", "Three. 1789: Assembly, oath, Bastille, Rights of Man.", mood="teach", board="3. 1789: Assembly, oath, Bastille, rights")
L("ticktock", "Four. Rights had limits: women, poor men, enslaved people.", mood="teach", board="4. Limits: women, poor men, enslaved")
L("ticktock", "Five. Republic, Terror, emperor. And never trust a perfect quotation.", mood="smug", board="5. Republic → Terror → Napoleon", gap=0.5)

# ---------------- TAG ----------------
scene("living", [("tara", 220), ("mum", 480), ("dad", 740), ("ticktock", 1040)])
wear("mum", "sash")
L("dad", "Fine. I am now a constitutional monarch.", mood="sad", shot="close", prop="remote")
L("mum", "Next: votes for the women of this household.", mood="determined", shot="close", prop="placard:VOTES FOR MUM")
L("ticktock", "Votes for women! 1918! I voted that year, you know.", mood="excited", shot="close")
L("tara", "You're an hourglass. And in 1918, you'd have needed property.", mood="deadpan", shot="close")
L("ticktock", "I own some sand!", mood="flustered", shot="close")
sfx("ding")
L("tara", "Next week, Ticktock.", mood="deadpan", shot="wide", gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Ticktock gives you 5 seconds. He definitely did not hear any cake.", 3.0)
challenge(1, "On what date was the Bastille stormed?", "14 July 1789", "A crowd seeking gunpowder; only 7 prisoners inside",
  "Question one. On what date was the Bastille stormed?",
  "The fourteenth of July, 1789.")
challenge(2, "Why did Louis XVI call the Estates-General in 1789?", "He was bankrupt", "War debts, and the nobles refused new taxes",
  "Question two. Why did Louis XVI call the Estates-General?",
  "He was bankrupt, and the nobles refused new taxes.")
challenge(3, "Olympe de Gouges rewrote the Rights of Man in 1791. What was her purpose?", "Rights for women", "Used its own words to show women were left out",
  "Question three. Why did Olympe de Gouges rewrite the Rights of Man?",
  "To show women had been left out. If you said copying homework, go and sit with Dad.")
end_card()
