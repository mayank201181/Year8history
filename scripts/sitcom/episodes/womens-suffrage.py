# "Totally Raotional" History S01E12 "Deeds Not Words, Mum" (Topic: Votes for Women)
# Format and helpers: see common.py; check with lint_episode.py.

EP = dict(topic="womens-suffrage", logline="Mum demands a vote on Dad's Family Decisions Committee: first politely like the suffragists, then with escalating (harmless) deeds like the suffragettes. Victorian rights, NUWSS and WSPU, the war, 1918 and 1928, and why women won.")

# ---------------- COLD OPEN ----------------
scene("living", [("tara", 260), ("mum", 560), ("dad", 860)])
L("dad", "I declare open the first meeting of the Family Decisions Committee. Today's decision. The holiday.", mood="smug", shot="close", prop="scroll")
L("mum", "Lovely. Who's on it?", mood="happy", shot="close")
L("dad", "Me.", mood="smug", shot="close")
L("tara", "And who votes?", mood="deadpan", shot="close")
L("dad", "Also me. Very efficient. The committee has voted, one to nothing. This year's holiday is a documentary marathon. On the sofa.", mood="smug", shot="close")
L("mum", "I want a vote.", mood="determined", shot="close")
L("dad", "You don't need a vote, darling. You have influence. And you're so good at organising the snacks.", mood="smug", shot="two", gap=0.3)
freeze("SO GOOD AT SNACKS", 2.6, narrator="Narrator: The Victorians called this 'separate spheres'.")
confess("tara", "TARA RAO · 12 · Non-Voting Member")
L("tara", "My mother once won an argument with a vending machine. The vending machine apologised.", mood="deadpan")
L("tara", "Dad has no idea what he's started.", mood="deadpan", gap=0.6)

title()

# ---------------- ACT 1: VICTORIAN WOMEN AND THE SUFFRAGISTS ----------------
scene("kitchen", [("tara", 330), ("mum", 600)])
L("mum", "Chrono! I need history. And I need it on my side.", mood="determined", shot="wide")
sfx("tick")
poof("chrono", 900)
L("chrono", "Votes for women? That one took a while. I know. I timed it.", mood="bored", shot="close")
L("chrono", "Victorian Britain believed in separate spheres. Men in public life and politics. Women at home.", mood="teach", shot="close",
  boardClear=True, board="Victorian idea: 'separate spheres'")
L("tara", "That's Dad's snack argument.", mood="deadpan", shot="close")
L("chrono", "Until the Married Women's Property Acts of eighteen seventy and eighteen eighty two, a wife's property and earnings were controlled by her husband.", mood="teach", shot="close",
  board="Property Acts 1870 & 1882")
L("mum", "Controlled by her HUSBAND?", mood="shock", shot="close")
L("chrono", "The Reform Acts of eighteen thirty two, sixty seven and eighty four gave more men the vote. Only men. The eighteen thirty two Act actually says, male person.", mood="teach", shot="close",
  board="Reform Acts 1832, 1867, 1884: MEN only")
L("tara", "What were the arguments against women voting?", mood="thinking", shot="close")
L("chrono", "Women were too emotional. Their husbands voted for them. They didn't fight in wars.", mood="eyeroll", shot="close", board="Against: 'too emotional', 'husbands vote'")
L("mum", "Too emotional? I am perfectly CALM!", mood="annoyed", shot="close")
L("chrono", "Clearly.", mood="deadpan", shot="close", gap=0.3)
L("chrono", "Now, the campaign. First, the suffragists. The N U W S S, founded in eighteen ninety seven and led by Millicent Fawcett. Peaceful. Legal. Persistent.", mood="teach", shot="close",
  boardClear=True, board="SUFFRAGISTS: NUWSS (1897), Fawcett")
L("chrono", "Petitions, meetings, persuading MPs, and huge marches, like the Mud March of nineteen oh seven. About fifty thousand members by nineteen fourteen.", mood="teach", shot="close",
  board="Petitions · marches · lobbying MPs")
L("mum", "Peaceful and persistent. That's me. I'm starting a petition.", mood="determined", shot="close", prop="phone")

confess("chrono", "CHRONO · Hourglass Monster · Timed The Whole Campaign")
L("chrono", "Was I there? Well. My sand was. In a suffragist's egg timer. She used me to time her speeches. Three minutes each. Never a second over.", mood="bored")
L("chrono", "Her neighbour was a suffragette. Different egg timer. Very different energy.", mood="bored", gap=0.5)

# ---------------- ACT 2: PETITIONS, THEN DEEDS ----------------
card("MEANWHILE, AT THE HAWKER CENTRE", "Mum has a clipboard. Nobody is safe.", 2.4)
scene("hawker", [("tara", 300), ("mum", 600), ("uncle", 1000)])
L("mum", "Uncle Hock! Sign my petition. Votes for Mums.", mood="determined", shot="close")
L("uncle", "In my house, my wife already decides everything. Including me. I sign.", mood="smug", shot="close")
L("tara", "That's forty signatures, Mum. And the whole prata queue.", mood="happy", shot="close", gap=0.3)

scene("living", [("tara", 260), ("mum", 560), ("dad", 860)])
L("mum", "Vikram. A petition. Forty signatures. Requesting a vote.", mood="determined", shot="close", prop="scroll")
L("dad", "Wonderful. I'll read it later.", mood="smug", shot="close", prop="cushion")
L("tara", "He's put it under a cushion.", mood="deadpan", shot="close")
L("mum", "Right. Words have failed. Deeds. Not. Words.", mood="determined", shot="close")
sfx("gong")
poof("chrono", 1080)
L("chrono", "The suffragettes. The W S P U, founded in nineteen oh three by Emmeline Pankhurst, with her daughters Christabel and Sylvia. Motto, deeds not words.", mood="teach", shot="close",
  boardClear=True, board="SUFFRAGETTES: WSPU (1903), Pankhursts")
L("chrono", "A newspaper invented the word suffragette, as an insult. They wore it with pride.", mood="smug", shot="close", board="Motto: 'Deeds not words'")
L("mum", "Deed number one. Heckling. Votes for Mums! Votes for Mums!", mood="determined", shot="wide", prop="placard")
L("dad", "I'm trying to watch a documentary about bridges!", mood="annoyed", shot="close")
L("chrono", "They heckled politicians. Chained themselves to railings. Then smashed windows, set fire to empty buildings, and attacked post boxes.", mood="teach", shot="close",
  board="Heckling → railings → windows → arson")
L("mum", "Deed number two. I have chained myself to the fridge. Well. Scarfed myself.", mood="smug", shot="close")
L("dad", "I need the milk!", mood="shock", shot="close")
L("tara", "Deed number three. She's hidden every remote in the house. Including the aircon.", mood="deadpan", shot="close", gap=0.4)

serious()
L("tara", "But for the real suffragettes, the price was much higher.", mood="serious", shot="close")
L("chrono", "Many were sent to prison. Some went on hunger strike, demanding to be treated as political prisoners. The government had them force fed. It was painful and dangerous.", mood="serious", shot="close",
  boardClear=True, board="Prison → hunger strikes → force-feeding")
L("chrono", "In nineteen thirteen, the Cat and Mouse Act released hunger strikers when they became weak, then arrested them again once they recovered.", mood="serious", shot="close",
  board="1913: the 'Cat and Mouse' Act")
L("chrono", "That June, Emily Wilding Davison stepped onto the course at the Derby, in front of the King's horse. She died four days later.", mood="sad", shot="close",
  board="June 1913: Emily Wilding Davison")
L("tara", "Did she mean to die?", mood="serious", shot="close")
L("chrono", "Historians still debate it. She had a return train ticket. Some think she was trying to fix the suffragette colours to the horse. We may never know.", mood="serious", shot="close")
L("tara", "She was forty years old, and she had given years of her life to the cause.", mood="sad", shot="close", gap=1.0)
serious(False)

L("dad", "In my defence, lots of people agreed with me.", mood="worried", shot="close")
L("chrono", "They did. The Women's National Anti Suffrage League began in nineteen oh eight. One of its leaders was a woman, the novelist Mary Ward.", mood="teach", shot="close",
  boardClear=True, board="1908: Anti-Suffrage League (Mary Ward)")
L("chrono", "Prime Minister Asquith opposed it too. The Conciliation Bills, to give some women the vote, failed between nineteen ten and nineteen twelve.", mood="teach", shot="close",
  board="Asquith · Conciliation Bills fail")
L("tara", "So did the deeds help, or make it worse?", mood="thinking", shot="close")
L("chrono", "Big debate. Militancy got headlines. But opponents said, see, women can't be trusted with the vote.", mood="teach", shot="close", board="Militancy: publicity vs backlash")
L("dad", "Exactly! Look at my fridge!", mood="annoyed", shot="close", gap=0.4)

# ---------------- ACT 3: THE WAR, 1918 AND 1928 ----------------
card("THE FOLLOWING WEEK", "Dad has a cold. He calls it 'the flu'.", 2.4)
scene("living", [("tara", 260), ("mum", 560), ("dad", 860)])
L("dad", "I'm too ill to run the house. It's a very serious cold. The worst in history.", mood="sad", shot="close")
L("tara", "In one week, Mum paid the bills, fixed the tap and booked a holiday. Dad watched six documentaries.", mood="deadpan", shot="close")
poof("chrono", 1080)
L("chrono", "Nineteen fourteen. War. Suffragettes stopped militancy, suffragists backed war work. Women worked in munitions, transport and nursing.", mood="teach", shot="close",
  boardClear=True, board="WW1: munitions, transport, nursing")
L("dad", "Fine. The committee has decided. Mum gets a vote. But only if she's over thirty. And owns property.", mood="smug", shot="close")
L("mum", "I'm over thirty. And I own the car.", mood="smug", shot="close")
L("chrono", "Nineteen eighteen. The Representation of the People Act. Women over thirty with property, about eight point four million. And all men over twenty one.", mood="teach", shot="close",
  board="1918: women 30+ with property, men 21+")
L("tara", "Constance Markievicz was the first woman elected. Nancy Astor was first to take her seat, in nineteen nineteen.", mood="happy", shot="close",
  board="1919: Nancy Astor takes her seat")
L("tara", "And when do I get a vote?", mood="thinking", shot="close")
L("dad", "When you're twenty one.", mood="smug", shot="close")
L("chrono", "Nineteen twenty eight. The Equal Franchise Act. Women over twenty one. Finally, the same terms as men. Ten more years. You'll cope.", mood="teach", shot="close",
  board="1928: Equal Franchise Act, women 21+")
L("tara", "So why did women win? Was it the war?", mood="thinking", shot="close", boardClear=True, board="Why did women win the vote?")
L("chrono", "Weigh it. A fifty year campaign changed minds. Suffragettes kept it in the headlines. The war showed what women could do. And voting had to be reformed for soldiers anyway.", mood="teach", shot="close",
  board="Campaign + publicity + war + reform")
L("chrono", "The war was the final push. But the long campaign built the road.", mood="teach", shot="close")
L("tara", "And in Singapore, women voted in the very first elections, in nineteen forty eight. And the Women's Charter of nineteen sixty one protected their rights in marriage.", mood="happy", shot="close",
  board="Singapore: women vote 1948 · Charter 1961")

confess("chrono", "CHRONO · Recap Monster · Has A Vote. Uses It.")
L("chrono", "Recap. First. Victorian women had separate spheres, few legal rights, and no vote.", mood="teach",
  boardClear=True, board="1. Separate spheres · few rights · no vote")
L("chrono", "Second. Suffragists. The N U W S S and Millicent Fawcett. Peaceful and persistent.", mood="teach", board="2. Suffragists: NUWSS, Fawcett, peaceful")
L("chrono", "Third. Suffragettes. The W S P U and the Pankhursts. Deeds not words.", mood="teach", board="3. Suffragettes: WSPU, Pankhursts, deeds")
L("chrono", "Fourth. Nineteen eighteen, women over thirty with property. Nineteen twenty eight, equal votes at twenty one.", mood="teach", board="4. 1918: 30+ (property) · 1928: 21+ equal")
L("chrono", "And finally. Weigh the campaign, the war and the publicity. Then judge.", mood="smug", board="5. Weigh the factors, then JUDGE", gap=0.5)

scene("living", [("tara", 260), ("mum", 560), ("dad", 840)])
L("dad", "The Family Decisions Committee will now vote on the holiday. Documentary marathon. One vote.", mood="smug", shot="close", prop="ballot")
L("mum", "The beach. One vote.", mood="determined", shot="close", prop="ballot")
L("dad", "A tie! As chairman, I have the casting vote.", mood="smug", shot="close")
L("mum", "I know where the fridge is, Vikram.", mood="smug", shot="close")
L("dad", "The beach it is. I'll take it.", mood="worried", shot="close")
sfx("ding")
L("chrono", "Put me back in the clock. And somebody find the remotes. Next week depends on it.", mood="bored", shot="wide", offstage=True, gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Chrono gives you 5 seconds. Then he sighs.", 3.0)
challenge(1, "'Deeds not words': suffragists or suffragettes?", "Suffragettes", "WSPU, 1903, Emmeline Pankhurst",
  "Question one. Deeds not words. Was that the suffragists, or the suffragettes?", "The suffragettes. The W S P U. The suffragists were the peaceful N U W S S.")
challenge(2, "In 1918, women over what age could vote (with property)?", "30", "Men could vote at 21",
  "Question two. In nineteen eighteen, women over what age could vote, if they had property?", "Thirty. Men could vote at twenty one. So it wasn't equal yet.")
challenge(3, "In what year did women get the vote on equal terms with men?", "1928", "Equal Franchise Act: women 21+",
  "Question three. In what year did women get the vote on the same terms as men?", "Nineteen twenty eight. The Equal Franchise Act. If you said nineteen eighteen, that was only women over thirty.")
end_card()
