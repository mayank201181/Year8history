# "Totally Raotional" History S01E11 "Let Them Eat Kaya Toast" (Topic: The French Revolution)
# Format and helpers: see common.py; check with lint_episode.py.

EP = dict(topic="french-revolution", logline="Dad claims breakfast privileges, so Tara and Mum, the Third Estate, revolt. The Ancien Regime, the causes, 1789, the Republic and the Terror, Napoleon, and who the Revolution left out.")

ESTATES = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 200">'
    '<polygon points="200,12 160,60 240,60" fill="none" stroke="#fde047" stroke-width="3"/>'
    '<polygon points="160,60 240,60 280,110 120,110" fill="none" stroke="#7dd3fc" stroke-width="3"/>'
    '<polygon points="120,110 280,110 340,186 60,186" fill="none" stroke="#86efac" stroke-width="3"/>'
    '<text x="255" y="46" font-family="sans-serif" font-size="18" fill="#fde047">1st: clergy ~0.5%</text>'
    '<text x="292" y="94" font-family="sans-serif" font-size="18" fill="#7dd3fc">2nd: nobles ~1.5%</text>'
    '<text x="200" y="156" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#86efac">3rd: ~97%</text>'
    '<text x="352" y="160" font-family="sans-serif" font-size="18" fill="#fca5a5">PAYS THE TAXES</text>'
    '</svg>'
)

# ---------------- COLD OPEN ----------------
scene("kitchen", [("tara", 260), ("mum", 560), ("dad", 860)])
L("dad", "Breakfast is served. Thick kaya toast for the head of the household. Crusts for everyone else.", mood="smug", shot="close", prop="plate")
L("mum", "Why do you get the thick toast?", mood="annoyed", shot="close")
L("dad", "Ancient family tradition. Since Tuesday.", mood="smug", shot="close")
L("tara", "And who washes up?", mood="deadpan", shot="close")
L("dad", "You two. I'm exempt. Head of household. Far too important for sponges.", mood="smug", shot="close")
L("mum", "Vikram. There's no toast left for us.", mood="annoyed", shot="two")
L("dad", "No toast? Then let them eat kaya toast!", mood="excited", shot="close")
L("tara", "Dad. That's what we're asking for.", mood="deadpan", shot="close", gap=0.3)
freeze("LET THEM EAT TOAST", 2.6, narrator="Narrator: Nobody said this in 1789 either.")
confess("tara", "TARA RAO · 12 · Proud Member Of The Third Estate")
L("tara", "One man gets all the privileges. Everyone else pays the taxes. Sorry. Does the washing up.", mood="deadpan")
L("tara", "My father has rebuilt eighteenth century France. In our kitchen. With one toaster.", mood="deadpan", gap=0.6)

title()

# ---------------- ACT 1: THE ANCIEN REGIME ----------------
scene("kitchen", [("tara", 330), ("mum", 600)])
L("tara", "Chrono. We have a king problem.", mood="determined", shot="wide")
sfx("drawer")
poof("chrono", 900)
L("chrono", "Another one? This family goes through kings faster than I go through sand.", mood="bored", shot="close")
L("mum", "He gets the thick toast and does no washing up. We get crusts and do all the work.", mood="annoyed", shot="two")
L("chrono", "Ah. The Ancien Regime. France before seventeen eighty nine. King Louis the Sixteenth, with absolute power. Given by God, he said. Divine Right.", mood="teach", shot="close", boardClear=True, board="ANCIEN RÉGIME: absolute monarchy")
L("chrono", "Below him, three estates. The clergy. The nobles. And everyone else. About ninety seven percent of France.", mood="teach", shot="close", boardClear=True, board="The Three Estates", diagram=ESTATES)
L("tara", "And the Third Estate paid the taxes.", mood="annoyed", shot="close")
L("chrono", "The taille, a land tax. The tithe, to the Church. The gabelle, a tax on salt. The clergy and nobles were mostly exempt.", mood="teach", shot="close", board="Taille · tithe · gabelle (salt tax)")
L("mum", "So Dad is the king, AND the nobility, AND exempt from washing up.", mood="annoyed", shot="close")
L("chrono", "And the First Estate is the grandfather clock. Does nothing. Gets polished every Sunday. I live in it. I approve.", mood="smug", shot="close", gap=0.4)
L("tara", "And Queen Marie Antoinette said, let them eat cake.", mood="neutral", shot="close", boardClear=True)
sfx("buzzer")
L("chrono", "That's a myth. Next. It's from a book by Rousseau, about an unnamed great princess, written when Marie Antoinette was a child in Austria.", mood="teach", shot="close", board="'Let them eat cake' = MYTH")
L("chrono", "Check your sources. People believed it because Versailles was so expensive.", mood="teach", shot="close", board="Rousseau, 1760s · she was a child")

confess("chrono", "CHRONO · Hourglass Monster · Was At Versailles (His Sand Was)")
L("chrono", "Was I at Versailles? Well. My sand was. On a nobleman's desk. He used me to time how long he could avoid paying tax.", mood="bored")
L("chrono", "The answer was forever. Well. Until seventeen eighty nine.", mood="bored", gap=0.5)

# ---------------- ACT 2: CAUSES AT THE HAWKER CENTRE ----------------
card("MEANWHILE, AT THE HAWKER CENTRE", "Kaya toast: a basic human right", 2.4)
scene("hawker", [("tara", 300), ("mum", 600), ("uncle", 1000)])
L("uncle", "Kaya toast now one dollar more. Coconut harvest very bad this year.", mood="annoyed", shot="close")
L("mum", "One dollar MORE? For bread?", mood="shock", shot="close")
L("uncle", "Bad harvest, high price. Blame the coconuts.", mood="smug", shot="close")
poof("chrono", 800)
L("chrono", "Seventeen eighty eight. A terrible harvest in France. Bread prices soared. A loaf could cost more than half a worker's daily wage.", mood="teach", shot="close", boardClear=True, board="SHORT-TERM: bad harvest 1788, bread prices")
L("tara", "And the government was broke. France spent a fortune helping the Americans fight Britain.", mood="thinking", shot="close", board="Royal debt: wars, esp. helping America")
L("chrono", "They paid for Americans to win their freedom. Then French soldiers came home with ideas. Awkward.", mood="smug", shot="close")
L("chrono", "Long term, the Enlightenment. Voltaire, Rousseau and Montesquieu said power should come from the people, and be limited by law.", mood="teach", shot="close", board="LONG-TERM: Enlightenment + unfair estates")
L("chrono", "The trigger. The nobles refused new taxes, so in May seventeen eighty nine, Louis called the Estates General. First meeting since sixteen fourteen.", mood="teach", shot="close", board="TRIGGER: Estates-General, May 1789")
L("mum", "And the Third Estate had ninety seven percent of the people. So they won every vote.", mood="happy", shot="close")
L("chrono", "No. Each estate got one vote. Clergy and nobles, two. Third Estate, one.", mood="teach", shot="close", board="Vote by estate: 2 vs 1, every time")
L("uncle", "Two against one? Even my coconuts get a fairer deal.", mood="shock", shot="close")
L("mum", "Right. Tara. We are the Third Estate. And we declare ourselves the National Assembly.", mood="determined", shot="close", boardClear=True, board="17 June 1789: National Assembly")
L("tara", "And we swear not to leave this table until breakfast has a constitution.", mood="determined", shot="close", board="20 June: the Tennis Court Oath")
L("uncle", "Also not leaving until you pay for the toast.", mood="annoyed", shot="close", gap=0.3)
freeze("THE HAWKER TABLE OATH", 2.6, narrator="Narrator: The original was sworn on a tennis court.")

# ---------------- ACT 3: STORMING THE TOASTER ----------------
card("BACK HOME", "The toaster is heavily guarded", 2.2)
scene("kitchen", [("tara", 260), ("mum", 520), ("dad", 820)])
L("dad", "Halt! The toaster belongs to the Crown.", mood="smug", shot="close")
L("mum", "It's the fourteenth of July, Vikram.", mood="determined", shot="close")
L("tara", "We're storming the toaster.", mood="determined", shot="wide")
sfx("whoosh")
L("dad", "Not the toaster!", mood="shock", shot="close")
poof("chrono", 1060)
L("chrono", "The Bastille. Fourteenth of July, seventeen eighty nine. A royal fortress and prison, and a symbol of the king's power. Crowds stormed it for gunpowder.", mood="teach", shot="close", boardClear=True, board="14 July 1789: Storming of the Bastille")
L("chrono", "There were only seven prisoners inside. Your toaster had two slices. Equally symbolic.", mood="smug", shot="close")
L("chrono", "In August, the Assembly abolished feudal privileges. Then it issued the Declaration of the Rights of Man and of the Citizen.", mood="teach", shot="close", board="Aug: privileges abolished, Rights of Man")
L("tara", "Article one. Men are born and remain free and equal in rights.", mood="happy", shot="close", board="'Men are born and remain free and equal'")
L("mum", "And in October, thousands of women marched to Versailles over bread, and brought the royal family back to Paris.", mood="determined", shot="close", board="Oct 1789: Women's March on Versailles")
L("dad", "Fine. I'm popping out for kopi. In this hat and sunglasses. Nobody follow me.", mood="worried", shot="close")
L("chrono", "The Flight to Varennes. June seventeen ninety one. The royal family fled in disguise, got caught, and after that nobody trusted the king.", mood="eyeroll", shot="close", boardClear=True, board="June 1791: Flight to Varennes")

serious()
L("tara", "Then it got darker.", mood="serious", shot="close")
L("chrono", "War with Austria and Prussia, from seventeen ninety two. That September, the monarchy was abolished. France became a Republic.", mood="serious", shot="close", board="Sept 1792: France becomes a Republic")
L("chrono", "Louis was put on trial, and executed by guillotine on the twenty first of January, seventeen ninety three. Marie Antoinette was executed that October.", mood="serious", shot="close", board="21 Jan 1793: Louis XVI executed")
L("chrono", "Then the Terror. Robespierre and the Committee of Public Safety treated anyone suspected of opposing the Revolution as an enemy.", mood="serious", shot="close", board="1793–94: the Terror (Robespierre)")
L("chrono", "About seventeen thousand people were officially executed. Many more died in prison. In July seventeen ninety four, Robespierre himself was executed.", mood="sad", shot="close")
L("tara", "A revolution for liberty, that ended up killing thousands of its own people.", mood="sad", shot="close", gap=1.0)
serious(False)

L("mum", "Right. This kitchen needs order. I'm in charge now. First Consul of Breakfast.", mood="determined", shot="close")
L("chrono", "Like Napoleon. A general who seized power in a coup in seventeen ninety nine. First Consul. Then, in eighteen oh four, Emperor.", mood="teach", shot="close", boardClear=True, board="1799 coup → 1804 Emperor Napoleon")
L("mum", "Do I get a crown?", mood="excited", shot="close")
L("chrono", "He crowned himself. With the Pope watching.", mood="smug", shot="close")
L("chrono", "His Napoleonic Code made men equal before the law. But no real democracy. And wives had to obey their husbands.", mood="teach", shot="close", board="Code: equal law for men, NOT for women")
L("mum", "Obey their husbands? I'm abolishing myself.", mood="annoyed", shot="close", gap=0.4)
L("dad", "I've written the Declaration of the Rights of Breakfast. Article one. All men are born free and equal in toast.", mood="smug", shot="close", prop="scroll")
L("tara", "All MEN?", mood="annoyed", shot="close")
L("chrono", "Same problem in seventeen eighty nine. Women were left out. In seventeen ninety one, Olympe de Gouges answered with the Declaration of the Rights of Woman.", mood="teach", shot="close", boardClear=True, board="1791: de Gouges, Rights of Woman")
L("chrono", "In Saint Domingue, enslaved people rose up. France abolished slavery in seventeen ninety four. Napoleon brought it back in eighteen oh two.", mood="serious", shot="close", board="Slavery: abolished 1794, restored 1802")
L("tara", "But Saint Domingue fought on, and became independent Haiti in eighteen oh four.", mood="determined", shot="close", board="1804: Haiti independent")

confess("chrono", "CHRONO · Recap Monster · Still The First Estate")
L("chrono", "Recap. First. The Ancien Regime. An absolute king, and three estates. The Third paid the taxes.", mood="teach", boardClear=True, board="1. Absolute king · 3 estates · unfair tax")
L("chrono", "Second. Causes. Unfair estates, Enlightenment ideas, debt, bread prices. Trigger, the Estates General.", mood="teach", board="2. Ideas + debt + bread → Estates-General")
L("chrono", "Third. Seventeen eighty nine. Tennis Court Oath, the Bastille, the Rights of Man.", mood="teach", board="3. 1789: Oath · Bastille · Rights of Man")
L("chrono", "Fourth. A Republic, the king executed, the Terror. Then Napoleon.", mood="teach", board="4. Republic · Terror · Napoleon")
L("chrono", "And finally. Change and continuity. Men gained rights. Women and enslaved people were mostly left out.", mood="smug", board="5. Who gained rights? Who didn't?", gap=0.5)

scene("kitchen", [("tara", 260), ("mum", 560), ("dad", 840)])
L("dad", "I've made breakfast. Toast for everyone. Equal toast!", mood="excited", shot="close", prop="plate")
L("mum", "It's burnt.", mood="deadpan", shot="close")
L("dad", "Equally burnt. Liberty. Equality. Charcoal.", mood="smug", shot="close")
L("tara", "That's... actually fair.", mood="shock", shot="close")
L("dad", "I'll take it.", mood="smug", shot="close")
sfx("ding")
L("chrono", "Put me back in the clock. The First Estate needs its nap.", mood="bored", shot="wide", offstage=True, gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Chrono gives you 5 seconds. Then he sighs.", 3.0)
challenge(1, "Which estate made up about 97% of France?", "Third Estate", "1st clergy · 2nd nobles · 3rd everyone else",
  "Question one. Which estate made up about ninety seven percent of France?", "The Third Estate. Everyone who wasn't clergy or noble. And they paid most of the taxes.")
challenge(2, "On what date was the Bastille stormed?", "14 July 1789", "Still France's national day",
  "Question two. On what date was the Bastille stormed?", "The fourteenth of July, seventeen eighty nine. France still celebrates it every year.")
challenge(3, "France abolished slavery in 1794. Who brought it back in 1802?", "Napoleon", "Change, then continuity",
  "Question three. France abolished slavery in seventeen ninety four. Who brought it back in eighteen oh two?", "Napoleon. Rights won in the Revolution could be taken away again. If you said Robespierre, he'd been dead for eight years.")
end_card()
