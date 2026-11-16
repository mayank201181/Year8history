# "Totally Raotional" History S01E13 "One Person, One Vote, One Remote" (Topic: Democracy & Human Rights)
# Format and helpers: see common.py; check with lint_episode.py.  Season finale.

EP = dict(topic="democracy-rights", logline="Season finale. The family writes a fair constitution for the TV remote. Athens, Magna Carta and Parliament, the Bill of Rights, natural rights, widening the vote, the Universal Declaration of Human Rights and democracy in Singapore.")

# ---------------- COLD OPEN ----------------
scene("living", [("tara", 260), ("mum", 560), ("dad", 860)])
L("dad", "By the Divine Right of Dads, I claim the remote. Tonight we watch a documentary about concrete.", mood="smug", shot="close", prop="remote")
L("mum", "I found all the remotes I hid last week. You're welcome.", mood="smug", shot="close")
L("tara", "Can't we just vote on what to watch?", mood="neutral", shot="close")
L("dad", "Votes? Remember the committee? The karaoke? The fridge?", mood="worried", shot="close")
L("mum", "Then we need rules everyone agrees to. A constitution.", mood="determined", shot="two")
L("dad", "A constitution? For a remote?", mood="shock", shot="close", gap=0.3)
freeze("A REMOTE CONSTITUTION", 2.6, narrator="Narrator: Humanity took 2,500 years. The Raos had one evening.")
confess("tara", "TARA RAO · 12 · Founding Mother")
L("tara", "Thirteen episodes. Kings, dictators, revolutions. And it all comes down to who holds the remote.", mood="deadpan")
L("tara", "Honestly? That's history in one sentence.", mood="deadpan", gap=0.6)

title()

# ---------------- ACT 1: FROM ATHENS TO THE BILL OF RIGHTS ----------------
scene("living", [("tara", 260), ("mum", 520), ("dad", 780)])
L("tara", "Chrono. It's the season finale. We're writing a constitution.", mood="determined", shot="wide")
sfx("tick")
poof("chrono", 1040)
L("chrono", "A constitution? Finally. Something in this house worth my sand.", mood="excited", shot="close")
L("chrono", "Start with Athens, in the fifth century B C. Direct democracy. Citizens met and voted on decisions themselves.", mood="teach", shot="close",
  boardClear=True, board="ATHENS (5th c. BC): direct democracy")
L("dad", "We vote on every channel change? We'd never watch anything.", mood="annoyed", shot="close")
L("chrono", "Also, only adult male citizens could vote. No women. No enslaved people. No foreigners.", mood="teach", shot="close", board="Citizens = adult free men ONLY")
L("mum", "So. Exactly like Dad's committee.", mood="smug", shot="close")
L("chrono", "Magna Carta, twelve fifteen. The barons made King John accept that even a king is under the law.", mood="teach", shot="close", board="1215: Magna Carta, king under the law")
L("chrono", "Then parliaments. Simon de Montfort's in twelve sixty five included men from the towns. Then Edward the First's Model Parliament, twelve ninety five.", mood="teach", shot="close",
  board="1265 de Montfort · 1295 Model Parliament")
L("tara", "But only rich men were represented.", mood="thinking", shot="close")
L("chrono", "Always ask who was left out.", mood="teach", shot="close")
L("dad", "Fine. But as king of the remote, I can overrule your parliament.", mood="smug", shot="close", prop="remote")
L("chrono", "Charles the First tried that. He ruled without Parliament for eleven years. Civil war came in sixteen forty two. Parliament won, and in sixteen forty nine, Charles was executed.", mood="teach", shot="close",
  boardClear=True, board="1642–51 Civil War · 1649 Charles I executed")
L("dad", "Let's skip ahead to a calmer century.", mood="worried", shot="close")
L("chrono", "Sixteen eighty eight, the Glorious Revolution. Sixteen eighty nine, the Bill of Rights. Kings needed Parliament's consent for laws and taxes.", mood="teach", shot="close",
  board="1689 Bill of Rights: constitutional monarchy")
L("tara", "A constitutional monarch. The king keeps the crown. Parliament makes the rules.", mood="happy", shot="close")
L("dad", "So I still get to hold the remote?", mood="thinking", shot="close")
L("chrono", "You hold it. You don't decide. Like a very expensive coaster.", mood="smug", shot="close", gap=0.4)

confess("chrono", "CHRONO · Hourglass Monster · Season Finale Edition")
L("chrono", "People ask, which revolution was your favourite? Well. My sand was at all of them. Mostly hiding.", mood="bored")
L("chrono", "Sixteen eighty eight. Hardly any fighting in England. Very relaxing for an hourglass.", mood="happy", gap=0.5)

# ---------------- ACT 2a: THE LIBRARY ----------------
card("MEANWHILE, AT THE LIBRARY", "Drafting the constitution. Quietly.", 2.2)
scene("library", [("tara", 300), ("mum", 580)])
L("tara", "First draft. Everyone has natural rights. Life, liberty and the pursuit of snacks.", mood="smug", shot="close", prop="quill")
poof("chrono", 900)
L("chrono", "Borrowed from John Locke, in the late sixteen hundreds. Natural rights to life, liberty and property. If a government won't protect them, people can replace it.", mood="teach", shot="close",
  boardClear=True, board="Locke: life, liberty, property")
L("chrono", "America, seventeen seventy six. Life, liberty and the pursuit of happiness. France, seventeen eighty nine. The Rights of Man. You did that one with a toaster.", mood="teach", shot="close",
  board="1776 US Declaration · 1789 Rights of Man")
L("tara", "But some of the men who wrote all men are created equal owned enslaved people.", mood="serious", shot="close")
L("chrono", "The great contradiction. Britain abolished the slave trade in eighteen oh seven, and slavery in its empire in eighteen thirty three. Campaigners and enslaved people's resistance forced it.", mood="serious", shot="close",
  board="Abolition: trade 1807 · slavery 1833")
L("mum", "And who gets a vote on the remote?", mood="thinking", shot="close")
L("chrono", "In Britain, slowly. After the Great Reform Act of eighteen thirty two, still only about one man in five could vote.", mood="teach", shot="close",
  boardClear=True, board="1832 Great Reform Act: ~1 man in 5")
L("tara", "So in eighteen thirty eight, the Chartists made six demands. Votes for all men. A secret ballot. Pay for MPs. No property rule for MPs. Equal constituencies. Yearly elections.", mood="determined", shot="close",
  board="1838: the Chartists' six points")
L("chrono", "All of them came true, except elections every year. Nobody wants that. Not even me, and I love time.", mood="smug", shot="close")
L("chrono", "More men voted after eighteen sixty seven and eighty four. Secret ballot, eighteen seventy two. Women, nineteen eighteen and twenty eight. Voting at eighteen, from nineteen sixty nine.", mood="teach", shot="close",
  board="1867 · 1872 ballot · 1884 · 1918 · 1928")
L("mum", "And no property rule. You don't have to own the sofa to vote.", mood="determined", shot="close", board="1969: voting age 21 → 18")

# ---------------- ACT 2b: THE MUSEUM ----------------
card("MEANWHILE, AT THE MUSEUM", "Ms Lim volunteers here on Saturdays. Of course she does.", 2.4)
scene("museum", [("tara", 300), ("mum", 560), ("teacher", 860)])
L("teacher", "Tara! Mrs Rao! Welcome to my favourite gallery. Democracy in Singapore.", mood="excited", shot="close")
L("teacher", "Nineteen forty eight. Singapore's first elections, for the Legislative Council. Only six seats were elected. And women voted from the start.", mood="teach", shot="close",
  boardClear=True, board="1948: first elections (6 elected seats)")
L("teacher", "Nineteen fifty five. The Rendel Constitution. Most seats now elected, and voters registered automatically.", mood="teach", shot="close", board="1955: Rendel Constitution election")
L("tara", "Nineteen fifty nine, full internal self government. And voting became compulsory.", mood="thinking", shot="close", board="1959: self-government, compulsory vote")
L("teacher", "Merger with Malaysia in nineteen sixty three. Then independence, on the ninth of August, nineteen sixty five.", mood="teach", shot="close", board="1963 merger · 9 Aug 1965 independence")
L("teacher", "Today, Singapore is a parliamentary democracy. Voting is compulsory, from twenty one. There's an elected President, group constituencies, and non constituency MPs.", mood="teach", shot="close",
  boardClear=True, board="Today: compulsory voting, age 21")
L("mum", "Compulsory voting. I love it. Nobody gets out of it.", mood="happy", shot="close")
poof("chrono", 1080)
L("chrono", "Nineteen forty eight was a big year everywhere.", mood="teach", shot="close")
serious()
L("chrono", "After the Second World War, and the Holocaust, the world said, never again. The new United Nations, founded in nineteen forty five, set out rights for every human being.", mood="serious", shot="close")
L("chrono", "The Universal Declaration of Human Rights. Adopted on the tenth of December, nineteen forty eight. Eleanor Roosevelt chaired the committee that drafted it.", mood="serious", shot="close",
  board="10 Dec 1948: Universal Declaration")
serious(False)
L("tara", "Article one. All human beings are born free and equal in dignity and rights.", mood="happy", shot="close", board="'All human beings are born free and equal'")
L("chrono", "Equality. No torture. Fair trials. A say in government. Promises that people still had to fight for.", mood="teach", shot="close",
  board="Equality · no torture · fair trial · vote")
L("tara", "Like civil rights in America. And South Africa's first election for all races, in nineteen ninety four.", mood="determined", shot="close", board="US civil rights · 1994 South Africa")

# ---------------- ACT 3: THE CONVENTION ----------------
card("THAT EVENING", "The Remote Constitutional Convention", 2.4)
scene("living", [("tara", 260), ("mum", 520), ("dad", 780)])
L("tara", "We, the family, present the Remote Constitution. Article one. One person, one vote, one remote.", mood="determined", shot="close", prop="scroll")
L("mum", "Article two. Secret ballot. Article three. Dad holds the remote, but doesn't decide.", mood="smug", shot="close")
L("dad", "Article four. The constitutional monarch gets the comfy cushion.", mood="thinking", shot="close", prop="cushion")
L("mum", "Accepted. We're not monsters.", mood="happy", shot="close")
poof("chrono", 1040)
L("chrono", "Article five. The hourglass gets a vote.", mood="smug", shot="close")
L("dad", "You're nine hundred and fifty years old. You're not even a citizen.", mood="annoyed", shot="close")
L("tara", "Universal Declaration, Dad. Everyone counts.", mood="happy", shot="close")
sfx("tick")
L("mum", "Four votes. All four for... Tara's history documentary?", mood="shock", shot="close", prop="ballot")
L("tara", "Dad. You voted for my documentary?", mood="shock", shot="close")
L("dad", "I've learned a lot this season. Mostly that I was wrong. Very confidently. About everything.", mood="happy", shot="close", gap=0.4)

confess("chrono", "CHRONO · Recap Monster · See You Next Season")
L("chrono", "Recap. First. Athens invented democracy. But only for adult free men.", mood="teach",
  boardClear=True, board="1. Athens: democracy, for free men only")
L("chrono", "Second. Magna Carta, Parliament and the Bill of Rights put kings under the law.", mood="teach", board="2. 1215 · 1265 · 1689: limits on kings")
L("chrono", "Third. Natural rights. Locke, America, France. And the contradiction of slavery.", mood="teach", board="3. Natural rights · slavery contradiction")
L("chrono", "Fourth. Britain widened the vote, step by step.", mood="teach", board="4. Vote widened: 1832 → 1928 → 1969")
L("chrono", "And finally. The Universal Declaration, and Singapore's road to democracy.", mood="smug", board="5. UDHR 1948 · Singapore 1948–1965")
L("chrono", "That's the season. Kings who took power. Dictators who seized it. Ordinary people who slowly won it back. Check your sources. And use your vote.", mood="happy", gap=0.6)

scene("living", [("tara", 260), ("mum", 560), ("dad", 840)])
L("dad", "By the will of the people, I now press play.", mood="happy", shot="close", prop="remote")
L("mum", "Pass the kaya toast.", mood="happy", shot="close")
L("tara", "Dad. That's actually a good constitution.", mood="happy", shot="close")
L("dad", "I'll take it.", mood="smug", shot="close")
sfx("ding")
L("chrono", "Put me back in the clock. Wake me up next season.", mood="bored", shot="wide", offstage=True, gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Chrono gives you 5 seconds. One last time.", 3.0)
challenge(1, "Name one group that could NOT vote in Athens.", "Women", "Also enslaved people and foreigners",
  "Question one. Name one group of people who could not vote in ancient Athens.", "Women. Also enslaved people, and foreigners. Democracy, but only for adult male citizens.")
challenge(2, "Which 1838 movement made six demands, incl. a secret ballot?", "The Chartists", "Five of the six points came true",
  "Question two. Which movement, in eighteen thirty eight, made six demands, including a secret ballot?", "The Chartists. Every point came true except elections every year. Thank goodness.")
challenge(3, "In what year was the Universal Declaration of Human Rights adopted?", "1948", "Same year as Singapore's first election",
  "Question three. In what year was the Universal Declaration of Human Rights adopted?", "Nineteen forty eight. The same year as Singapore's first election. If you said ten sixty six, that's a different season.")
end_card()
