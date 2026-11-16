import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // =========================================================================
  // MCQ PAPER 1
  // =========================================================================
  {
    id: "womens-suffrage-m1",
    title: "MCQ Paper 1",
    questions: [
      {
        kind: "mcq",
        id: "womens-suffrage-m1-q01",
        question: "Roughly what proportion of adults in Britain could vote in general elections in 1800?",
        options: ["About 3%", "About 30%", "About 60%", "About half of all men, but no women"],
        answerIndex: 0,
        explanation:
          "Only about **3%** of adults could vote in 1800 — mostly wealthy, property-owning men. \"About 60%\" is a tempting answer, but that is roughly the share of *men* who could vote after the Third Reform Act of **1884**, almost a century later.",
        difficulty: "warmup",
        guideRef: "britain-becomes-democratic",
        hints: ["Voting depended on owning property, and very few people owned enough of it."],
        strategy: "Use precise evidence",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m1-q02",
        question: "What was the motto of the Women's Social and Political Union (WSPU)?",
        options: ["Votes for all, by law alone", "Deeds not words", "Liberty, equality, fraternity", "No taxation without representation"],
        answerIndex: 1,
        explanation:
          "The WSPU's motto was **\"Deeds not words\"** — it believed decades of polite petitions had achieved nothing, so action was needed. \"Liberty, equality, fraternity\" is the slogan of the **French Revolution**, not the British suffrage movement.",
        difficulty: "warmup",
        guideRef: "suffragettes",
        hints: ["The WSPU was impatient with talking — it wanted action."],
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m1-q03",
        question: "Which women were given the vote in general elections by the Representation of the People Act of 1918?",
        options: [
          "All women over 21",
          "All women over 18",
          "Women over 30 who met a property qualification (or were university graduates)",
          "Only women who had done war work",
        ],
        answerIndex: 2,
        explanation:
          "The 1918 Act gave the vote to women **over 30** who met a **property qualification** (or whose husbands did, or who were graduates) — about **8.4 million** women. \"All women over 21\" is what happened later, in **1928**. War work was not itself a qualification.",
        difficulty: "warmup",
        guideRef: "war-and-the-vote",
        hints: ["1918 was only a partial victory — there was an age limit and a property test."],
        strategy: "Put it in chronological order",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m1-q04",
        question: "Who led the National Union of Women's Suffrage Societies (NUWSS)?",
        options: ["Emmeline Pankhurst", "Emily Wilding Davison", "Mary Augusta Ward", "Millicent Garrett Fawcett"],
        answerIndex: 3,
        explanation:
          "**Millicent Garrett Fawcett** led the peaceful, law-abiding NUWSS (the **suffragists**). **Emmeline Pankhurst** is the classic wrong answer: she led the militant WSPU (the **suffragettes**). Mary Augusta Ward actually *opposed* votes for women.",
        difficulty: "warmup",
        guideRef: "suffragists",
        hints: ["Suffragists and suffragettes had different leaders — which one led the peaceful group?"],
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m1-q05",
        question: "What was the most important change made by the Great Reform Act of 1832?",
        options: [
          "It gave the vote to all men over 21",
          "It removed many rotten boroughs and gave MPs to new industrial towns such as Manchester",
          "It introduced the secret ballot",
          "It gave some property-owning women the vote",
        ],
        answerIndex: 1,
        explanation:
          "The 1832 Act scrapped many **rotten boroughs** and gave seats to growing towns like **Manchester** and **Birmingham**; the electorate grew, but still only about 1 man in 7 (or fewer) could vote. The **secret ballot** came later, in **1872**. Far from helping women, the 1832 Act was the first to say voters must be **\"male persons\"**.",
        difficulty: "core",
        guideRef: "britain-becomes-democratic",
        hints: [
          "Think about the biggest unfairness in the old system: where MPs came from.",
          "Towns that had boomed in the Industrial Revolution had no MPs, while near-empty places had two.",
          "The Act redistributed seats — it did not create votes for all men.",
        ],
        strategy: "Spot change and continuity",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m1-q06",
        question: "Under the Victorian legal idea of **coverture**, what happened to a woman when she married?",
        options: [
          "Her legal identity was absorbed into her husband's, so her property and earnings belonged to him",
          "She gained full control of her own earnings for the first time",
          "She became able to vote in local elections",
          "Her property passed to her father rather than her husband",
        ],
        answerIndex: 0,
        explanation:
          "Under **coverture**, husband and wife were treated as one person in law — and that person was the husband, who controlled her property and earnings. Gaining control of her own earnings is the *opposite*: that came with the **Married Women's Property Act of 1870**. And it was *unmarried* women ratepayers who could vote in local elections from 1869.",
        difficulty: "core",
        guideRef: "women-in-victorian-britain",
        hints: [
          "The word comes from the idea of a wife being \"covered\" by her husband.",
          "Ask: in law, was a married woman treated as a separate person?",
          "Later Acts in 1870 and 1882 were passed to *change* this system.",
        ],
        strategy: "Use precise evidence",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m1-q07",
        question: "What did the government's \"Cat and Mouse Act\" (1913) allow it to do?",
        options: [
          "Ban the WSPU and close its offices",
          "Force-feed prisoners for the first time",
          "Give suffragettes shorter sentences for good behaviour",
          "Release hunger strikers when they became weak, then re-arrest them once they had recovered",
        ],
        answerIndex: 3,
        explanation:
          "The **Prisoners (Temporary Discharge for Ill-Health) Act 1913** let the government release hunger strikers before they became dangerously ill, then re-arrest them — like a cat playing with a mouse. It did *not* begin force-feeding: that had been used since **1909** and had caused public outrage.",
        difficulty: "core",
        guideRef: "suffragettes",
        hints: [
          "Think about the nickname: how does a cat treat a mouse it has caught?",
          "The government's problem was hunger strikers who might die in prison and become martyrs.",
          "Force-feeding had already been happening for about four years before 1913.",
        ],
        strategy: "Think about purpose",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m1-q08",
        question:
          "**Source A** — a description of a pro-suffrage poster produced around 1912.\n\n> One half shows a woman in many roles: mayor, nurse, mother, doctor or teacher, and factory worker — none of whom can vote. The other half shows men who are convicts, drunkards or declared unfit, who may still keep the vote.\n\nWhich argument for votes for women is the poster making?",
        options: [
          "Women should be kept out of public life to protect them",
          "Women deserved the vote as a reward for their war work",
          "It was unfair that capable women who served society had no vote while some unworthy men did",
          "Only women with university degrees should be allowed to vote",
        ],
        answerIndex: 2,
        explanation:
          "The poster contrasts **useful, responsible women** with **unworthy men** to show how unjust the system was. The \"reward for war work\" argument is a chronology trap — the poster dates from about **1912**, before the First World War began in **1914**. The doctor is only one of many roles shown, so it is not arguing only for graduates.",
        difficulty: "core",
        guideRef: "arguments-for-and-against",
        hints: [
          "Look at the contrast between the two halves of the poster.",
          "Check the date — what had *not* happened yet in 1912?",
          "The poster asks: is it fair that *these* women cannot vote while *those* men can?",
        ],
        strategy: "Make an inference",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m1-q09",
        question: "Why did the government need to pass a new law about voting during the First World War, even before deciding about women?",
        options: [
          "Women had threatened to strike in munitions factories",
          "The 1884 Reform Act was due to expire",
          "Residency rules meant many soldiers serving abroad would lose their right to vote",
          "The King insisted that women be given the vote",
        ],
        answerIndex: 2,
        explanation:
          "To vote, men had to have lived at an address for a set period. Millions of soldiers away fighting would be **disqualified** — politically impossible. Once Parliament had to rewrite the rules anyway (the **Speaker's Conference**, 1916–17), it was the obvious moment to include some women. There was no organised munitions strike threat over the vote, and Reform Acts did not \"expire\".",
        difficulty: "core",
        guideRef: "war-and-the-vote",
        hints: [
          "Think about the men, not the women, for a moment.",
          "Where were millions of voters in 1916, and what did the old rules say about where you lived?",
          "The voting rules depended on residence — soldiers in France could not meet them.",
        ],
        strategy: "Long-term vs short-term causes",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m1-q10",
        question: "Which piece of evidence best SUPPORTS the view that the First World War was the main reason women won the vote in 1918?",
        options: [
          "The NUWSS had tens of thousands of members by 1914",
          "Emily Wilding Davison died after the Epsom Derby in 1913",
          "New Zealand had given women the vote in 1893",
          "Many MPs who had opposed women's suffrage before 1914 voted for the 1918 Act, often saying women's war work had changed their minds",
        ],
        answerIndex: 3,
        explanation:
          "If former opponents switched sides *because of* women's war work, that links the war directly to the result. The NUWSS's membership is true, but it supports a different interpretation (the suffragists mattered most). Davison's death is evidence about the suffragettes, not the war.",
        difficulty: "core",
        guideRef: "why-women-won",
        hints: [
          "You need evidence that links the war to the vote — not just any true fact.",
          "Which option shows people changing their minds *during or after* 1914?",
          "Ask of each option: which factor does this support — suffragists, suffragettes, or the war?",
        ],
        strategy: "Weigh factors",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m1-q11",
        question: "In the 1890s, which kind of work employed the largest number of women in Britain?",
        options: ["Domestic service (working as servants in other people's homes)", "Textile mills", "Teaching", "Munitions factories"],
        answerIndex: 0,
        explanation:
          "**Domestic service** was the largest single employer of women in Victorian Britain — well over a million women worked as maids, cooks and servants. Textile mills employed many women too, especially in Lancashire, but fewer overall. Munitions factories are a chronology trap: that mass employment came in the **First World War**.",
        difficulty: "core",
        guideRef: "women-in-victorian-britain",
        hints: [
          "Think about who cooked and cleaned in middle- and upper-class Victorian homes.",
          "Munitions work belongs to a later period — check the date in the question.",
        ],
        strategy: "Ask \"how typical?\"",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m1-q12",
        question:
          "**Source B** — During the NUWSS **Great Pilgrimage** of summer 1913, thousands of suffragists marched from all over Britain to a rally in Hyde Park, London. Many marchers carried banners and wore sashes with the words **\"Law-abiding\"**.\n\nWhy did they choose to stress that they were \"law-abiding\"?",
        options: [
          "Because the government had made all marches illegal",
          "To show the public and MPs that they were different from the militant suffragettes, whose campaign was at its height",
          "Because the WSPU had ordered all suffrage groups to stop breaking the law",
          "To show support for the suffragettes' window-smashing campaign",
        ],
        answerIndex: 1,
        explanation:
          "In 1913 the WSPU's **arson and window-smashing** campaign was at its peak, and many people lumped all campaigners together. The NUWSS wanted to show that most supporters of votes for women were peaceful and respectable. Marches were not banned — the Pilgrimage itself proves that.",
        difficulty: "core",
        guideRef: "suffragists",
        hints: [
          "Think about what else was happening in the suffrage campaign in 1913.",
          "Who might the public confuse the suffragists with?",
          "The word \"Law-abiding\" is a way of drawing a contrast.",
        ],
        strategy: "Think about purpose",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m1-q13",
        question:
          "**Source C** — a cartoon called \"The Shrieking Sister\", published in *Punch* in January 1906. *Punch* was a popular humorous magazine read mainly by middle- and upper-class men. The cartoon shows a calm, dignified woman turning to a woman who is screaming and waving her arms, and saying (caption adapted):\n\n> You help our cause? Why, you're its worst enemy!\n\nWhat is the best judgement about this source's purpose?",
        options: [
          "It proves that most suffragists hated the suffragettes",
          "It was drawn by a suffragette to criticise the NUWSS",
          "It shows the WSPU gave up militant methods in 1906",
          "It tries to persuade readers that militant methods damaged the women's cause, by praising the \"respectable\" campaigner and mocking the militant",
        ],
        answerIndex: 3,
        explanation:
          "The cartoon contrasts a sensible woman with a \"shrieking\" one to argue that **militancy hurt the cause** — a message that suited *Punch*'s mainly male, comfortable readers. It cannot *prove* what most suffragists felt: it is one magazine's view, not a survey. And militancy grew after 1906 rather than stopping.",
        difficulty: "challenge",
        guideRef: "suffragettes",
        hints: [
          "Use NOP: Nature (a cartoon), Origin (*Punch*, 1906), Purpose (to persuade or amuse?).",
          "Who was *Punch* written for, and how might they react to screaming protesters?",
          "A cartoon gives an opinion — can it prove what thousands of women thought?",
        ],
        strategy: "Check the provenance (NOP)",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m1-q14",
        question: "Before 1914, some Liberal leaders were reluctant to give women the vote on the same property terms as men. Which political calculation best explains this?",
        options: [
          "They believed women already voted in general elections",
          "They feared it would mainly give the vote to better-off, property-owning women, who might vote Conservative",
          "The Labour Party had a majority in Parliament and blocked every bill",
          "Queen Victoria was still on the throne and would refuse to sign it",
        ],
        answerIndex: 1,
        explanation:
          "A property qualification would have enfranchised mostly **wealthier women**, and many Liberals feared they would vote **Conservative** — so self-interest, not just principle, shaped the debate. Labour was a small party before 1914 and actually supported women's suffrage. Queen Victoria (who did oppose \"women's rights\") died in **1901**.",
        difficulty: "challenge",
        guideRef: "arguments-for-and-against",
        hints: [
          "Think about who benefited: which women would a *property* qualification enfranchise?",
          "Parties want to win elections. How might new voters change the result?",
          "Check the dates: who was monarch, and how big was Labour, before 1914?",
        ],
        strategy: "Think about who benefited",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m1-q15",
        question: "Which is the most accurate judgement about how democratic Britain was by the end of 1928?",
        options: [
          "Men and women could vote on equal terms from 21 — but some people still had more than one vote, and 18-year-olds could not vote until 1969",
          "Britain had already been fully democratic since 1832",
          "Women gained equality in every area of life in 1928, including equal pay",
          "Change had come steadily every few years, without any protest or campaigning",
        ],
        answerIndex: 0,
        explanation:
          "1928 brought **equal franchise** at 21, a huge change — but there was continuity too: **plural voting** (extra votes for business owners and university graduates) lasted until 1948, and the voting age fell to **18** only in **1969**. Equal voting did not mean equal pay or equal rights everywhere, and the story was full of protest, from Peterloo to the suffragettes.",
        difficulty: "challenge",
        guideRef: "why-women-won",
        hints: [
          "Look for the answer that shows *both* change and continuity.",
          "Was voting the only kind of equality people wanted?",
          "Think about later dates in the story of democracy — did changes stop in 1928?",
        ],
        strategy: "Spot change and continuity",
      },
    ],
  },

  // =========================================================================
  // MCQ PAPER 2
  // =========================================================================
  {
    id: "womens-suffrage-m2",
    title: "MCQ Paper 2",
    questions: [
      {
        kind: "mcq",
        id: "womens-suffrage-m2-q01",
        question: "What did the Victorian idea of **\"separate spheres\"** mean?",
        options: [
          "Men and women should have equal roles in Parliament",
          "Rich and poor girls should be educated in separate schools",
          "Men belonged in public life (work and politics) and women in the private world of home and family",
          "Women should live separately from men until they married",
        ],
        answerIndex: 2,
        explanation:
          "**Separate spheres** said men's \"sphere\" was the public world and women's was the home. It was a powerful argument *against* votes for women, because politics was seen as part of men's sphere. It was about roles, not about schooling for rich and poor.",
        difficulty: "warmup",
        guideRef: "women-in-victorian-britain",
        hints: ["A \"sphere\" here means an area of life — which areas were seen as men's and which as women's?"],
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m2-q02",
        question: "Which of these was one of the six points of the Chartists' People's Charter (1838)?",
        options: ["A vote for every man over 21", "A vote for every woman over 30", "An end to the monarchy", "The abolition of the House of Lords"],
        answerIndex: 0,
        explanation:
          "The Charter demanded a vote for **every man over 21**, a secret ballot, no property qualification for MPs, payment of MPs, equal constituencies and annual Parliaments. \"A vote for every woman over 30\" mixes up the Chartists with the **1918** Act — the Charter did not demand votes for women, though many women supported Chartism.",
        difficulty: "warmup",
        guideRef: "britain-becomes-democratic",
        hints: ["The Chartists were mostly working men who wanted the vote for themselves."],
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m2-q03",
        question: "In which year was the voting age in the UK lowered from 21 to 18?",
        options: ["1918", "1928", "1948", "1969"],
        answerIndex: 3,
        explanation:
          "The **Representation of the People Act 1969** lowered the voting age to **18**. 1928 is the year women won the vote at **21**, on equal terms with men — a common mix-up.",
        difficulty: "warmup",
        guideRef: "why-women-won",
        hints: ["The story of democracy did not stop in 1928 — this change came about forty years later."],
        strategy: "Put it in chronological order",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m2-q04",
        question: "In 1893, which became the first self-governing country to give all adult women the vote in national elections?",
        options: ["Britain", "New Zealand", "France", "The United States"],
        answerIndex: 1,
        explanation:
          "**New Zealand** led the way in **1893**; suffragists in Britain used it as evidence that women voting worked. Britain did not give women equal votes until **1928**, the USA in **1920** and France not until **1944**.",
        difficulty: "warmup",
        guideRef: "arguments-for-and-against",
        hints: ["It was a country in the British Empire on the other side of the world."],
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m2-q05",
        question: "Why are the years 1866–67 important in the history of the suffragists?",
        options: [
          "Emmeline Pankhurst founded the WSPU",
          "Women over 30 were given the vote",
          "Parliament passed the first Married Women's Property Act",
          "John Stuart Mill presented a women's suffrage petition to Parliament, then proposed giving women the vote in the 1867 Reform Bill — and was defeated",
        ],
        answerIndex: 3,
        explanation:
          "In **1866** MP **John Stuart Mill** presented a petition signed by about 1,500 women, and in **1867** proposed changing \"man\" to \"person\" in the Reform Bill. MPs voted it down, but the organised suffrage campaign had begun. The WSPU was not founded until **1903**, and women over 30 voted only from **1918**.",
        difficulty: "core",
        guideRef: "suffragists",
        hints: [
          "This is about the *start* of organised campaigning, long before the suffragettes.",
          "A male MP and philosopher took up women's cause in Parliament.",
          "Think of the Second Reform Act (1867) — could women have been added to it?",
        ],
        strategy: "Put it in chronological order",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m2-q06",
        question:
          "**Source A** — a photograph published on the front page of the *Daily Mirror*, a popular newspaper, the day after **Black Friday** (18 November 1910). It shows a suffragette lying on the ground in Parliament Square, surrounded by police officers and onlookers.\n\nWhat is the most useful thing this source tells a historian?",
        options: [
          "It proves that every police officer that day deliberately attacked women",
          "It shows that women had won the vote by the end of 1910",
          "It shows that clashes between police and protesters on Black Friday were rough, and that a popular newspaper chose to show this to its readers",
          "It shows that the woman on the ground was a member of the NUWSS",
        ],
        answerIndex: 2,
        explanation:
          "The photograph is good evidence that the clashes were **physical and rough**, and that the press made them **public** — itself important for shaping opinion. But one photograph cannot prove what *every* officer did. Black Friday was a **WSPU** deputation, so the woman was a suffragette, not an NUWSS suffragist.",
        difficulty: "core",
        guideRef: "suffragettes",
        hints: [
          "A source can tell you about the event *and* about the people who published it.",
          "Be careful with words like \"every\" and \"proves\" — how much can one photo show?",
          "Black Friday was a deputation of the militant group, not the peaceful one.",
        ],
        strategy: "Check the provenance (NOP)",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m2-q07",
        question: "Who was the first woman elected as an MP, in December 1918, although she did not take her seat?",
        options: ["Constance Markievicz", "Nancy Astor", "Millicent Fawcett", "Christabel Pankhurst"],
        answerIndex: 0,
        explanation:
          "**Constance Markievicz** won a Dublin seat for **Sinn Féin**, which refused to sit at Westminster. **Nancy Astor** is the famous distractor: she was the first woman to *take* her seat, in **1919**. Christabel Pankhurst did stand in 1918, but lost.",
        difficulty: "core",
        guideRef: "war-and-the-vote",
        hints: [
          "\"First elected\" and \"first to take her seat\" are two different women.",
          "She was an Irish nationalist whose party refused to sit in the Westminster Parliament.",
        ],
        strategy: "Use precise evidence",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m2-q08",
        question: "Why was the Ballot Act of 1872 an important step towards democracy?",
        options: [
          "It gave the vote to working men in the countryside",
          "Votes were cast in secret, making bribery and intimidation by landlords and employers much harder",
          "It abolished the rotten boroughs",
          "It allowed unmarried women to vote in local elections",
        ],
        answerIndex: 1,
        explanation:
          "Before 1872 voting was **open** — people declared their choice publicly, so a landlord or employer could see and punish them. The **secret ballot** let voters choose freely. Votes for countryside workers came with the **1884** Act, and rotten boroughs were mostly removed in **1832**.",
        difficulty: "core",
        guideRef: "britain-becomes-democratic",
        hints: [
          "\"Ballot\" is about *how* people voted, not *who* could vote.",
          "Imagine having to say your vote out loud in front of your landlord.",
        ],
        strategy: "Judge significance",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m2-q09",
        question: "Which methods were typical of the NUWSS?",
        options: [
          "Petitions, public meetings, peaceful marches and lobbying MPs",
          "Setting fire to empty buildings and postboxes",
          "Going on hunger strike in prison",
          "Smashing shop windows in London's West End",
        ],
        answerIndex: 0,
        explanation:
          "The NUWSS (**suffragists**) used **lawful persuasion**: petitions, meetings, marches and lobbying. Arson, hunger strikes and window-smashing were tactics of the militant WSPU (**suffragettes**) — confusing the two groups is the most common mistake in this topic.",
        difficulty: "core",
        guideRef: "suffragists",
        hints: [
          "The NUWSS was the law-abiding group.",
          "Three of the options would lead to arrest — which one would not?",
        ],
        strategy: "Compare and contrast",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m2-q10",
        question:
          "**Source B** — a description of a typical anti-suffrage postcard from around 1909.\n\n> A tired-looking man in an apron stirs a pot while holding a crying baby. On the wall behind him is a \"Votes for Women\" poster. His wife is nowhere to be seen.\n\nWhat message is the postcard trying to give?",
        options: [
          "Men should share the housework equally with women",
          "If women got the vote they would neglect their homes and families, turning the natural order upside down",
          "Suffragettes were dangerous criminals who should be in prison",
          "Women were already doing important war work",
        ],
        answerIndex: 1,
        explanation:
          "The joke depends on **separate spheres**: a man doing \"women's work\" was meant to look ridiculous, warning that votes for women would wreck family life. It is mocking, not supporting, shared housework. War work is a chronology trap — the war did not begin until **1914**.",
        difficulty: "core",
        guideRef: "arguments-for-and-against",
        hints: [
          "Is the man meant to look happy and admirable, or miserable and silly?",
          "Where is the wife — and what does the poster suggest she is doing?",
          "Which anti-suffrage argument says women belong at home?",
        ],
        strategy: "Make an inference",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m2-q11",
        question:
          "**Source C** — from a speech in the House of Commons by H. H. Asquith in March 1917 (adapted). Asquith had been Prime Minister from 1908 to 1916 and had long opposed votes for women.\n\n> Some years ago I used the expression, \"Let the women work out their own salvation.\" Well, they have worked it out during this war.\n\nWhat does the source suggest?",
        options: [
          "Asquith had always supported votes for women",
          "The suffragettes' arson campaign continued throughout the war",
          "Women had already won the vote by 1914",
          "Women's contribution to the war effort helped persuade even former opponents like Asquith to back votes for women",
        ],
        answerIndex: 3,
        explanation:
          "The provenance makes this powerful: a **long-standing opponent** admits that women's war work changed his mind. That supports the \"war\" interpretation. It does not show he *always* supported the cause — the speech says the opposite — and the WSPU **suspended militancy** in August 1914.",
        difficulty: "core",
        guideRef: "war-and-the-vote",
        hints: [
          "Read the provenance: who is speaking, and what had he believed before?",
          "\"Worked it out during this war\" — what had women been doing since 1914?",
          "Why is it significant when an *opponent* changes his mind?",
        ],
        strategy: "Check the provenance (NOP)",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m2-q12",
        question: "By 1900, in which kind of election could some women already vote and stand as candidates?",
        options: ["General elections for MPs", "Elections for the House of Lords", "Local elections, such as for town councils and school boards", "Elections for Prime Minister"],
        answerIndex: 2,
        explanation:
          "From **1869** unmarried women ratepayers could vote in town council elections, and from **1870** women could vote for and sit on **school boards**. Suffragists used this: if women could run local affairs, why not vote for Parliament? Britain has never directly elected the Prime Minister, and women could not vote for MPs until **1918**.",
        difficulty: "core",
        guideRef: "women-in-victorian-britain",
        hints: [
          "Think about matters seen as close to home — schools, local streets, the poor.",
          "This was used as an argument: \"women already do this, so…\"",
        ],
        strategy: "Use precise evidence",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m2-q13",
        question: "In 1912 the NUWSS set up an **Election Fighting Fund** to support Labour Party candidates in some elections. What does this suggest about the suffragists?",
        options: [
          "They had become militant like the WSPU",
          "They were willing to use political pressure — backing the one party officially committed to women's suffrage — to squeeze the Liberal government",
          "They had given up hope of winning the vote",
          "Labour had a majority in Parliament in 1912, so supporting it was the easy option",
        ],
        answerIndex: 1,
        explanation:
          "Labour had committed itself to women's suffrage in 1912, so the NUWSS used its money and organisers to **hurt the Liberals** at elections. That is clever, *lawful* political pressure — not militancy. Labour was still a small party in 1912, so this was a strategic gamble, not an easy option.",
        difficulty: "challenge",
        guideRef: "suffragists",
        hints: [
          "Peaceful does not have to mean passive. What kind of pressure is this?",
          "Which party was in government in 1912 — and which party would lose votes if suffragists backed Labour?",
          "Check how big Labour was before 1914.",
        ],
        strategy: "Think about who benefited",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m2-q14",
        question: "A student claims: \"The suffragettes' militancy definitely harmed the cause.\" Which evidence most strongly CHALLENGES this claim?",
        options: [
          "The Conciliation Bills of 1910–12 failed while militancy was increasing",
          "The Cat and Mouse Act let the government wear down hunger strikers",
          "Militancy kept votes for women in the newspapers and in front of politicians, and NUWSS membership grew strongly in the same years",
          "Some MPs said they could not be seen to give in to violence",
        ],
        answerIndex: 2,
        explanation:
          "If militancy brought **publicity** and the peaceful movement *grew* at the same time, it is hard to say militancy simply harmed the cause. The other three options are true but *support* the student's claim — failed bills, government control of prisoners and MPs refusing to \"give in\" all suggest militancy backfired.",
        difficulty: "challenge",
        guideRef: "suffragettes",
        hints: [
          "You need evidence on the *other* side of the argument.",
          "Sort the options: which ones support the claim, and which one pushes against it?",
          "Think about attention: did people talk about votes for women more or less after 1905?",
        ],
        strategy: "Consider the counter-argument",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m2-q15",
        question:
          "Read two interpretations, both written for this exercise.\n\n> **Interpretation 1:** Without the war, women would have waited many more years for the vote.\n\n> **Interpretation 2:** The war only sped up a victory that fifty years of campaigning had already made almost certain.\n\nWhat best explains why these interpretations differ?",
        options: [
          "Interpretation 1 must be based on primary sources, so it is more reliable",
          "Interpretation 2 does not accept that women won the vote in 1918",
          "They are describing different countries",
          "They weigh the same factors differently: one stresses the short-term trigger of war, the other long-term campaigning and changes in women's roles",
        ],
        answerIndex: 3,
        explanation:
          "Both agree women won the vote in 1918; they disagree about **which factor mattered most** — the short-term **war** or the long-term **campaign**. Interpretations differ because historians weigh evidence differently, not because one is \"primary\" (and being primary does not automatically make a source reliable anyway).",
        difficulty: "challenge",
        guideRef: "why-women-won",
        hints: [
          "Do the two interpretations disagree about *what* happened, or about *why*?",
          "Think about short-term versus long-term causes.",
          "Watch out for the myth that primary sources are automatically more reliable.",
        ],
        strategy: "Long-term vs short-term causes",
      },
    ],
  },

  // =========================================================================
  // MCQ PAPER 3
  // =========================================================================
  {
    id: "womens-suffrage-m3",
    title: "MCQ Paper 3",
    questions: [
      {
        kind: "mcq",
        id: "womens-suffrage-m3-q01",
        question: "In which year could women in Britain first vote on exactly the same terms as men, from the age of 21?",
        options: ["1918", "1928", "1906", "1969"],
        answerIndex: 1,
        explanation:
          "The **Equal Franchise Act 1928** gave women the vote at **21**, like men. 1918 is the tempting wrong answer: that Act only gave the vote to women **over 30** with a property qualification.",
        difficulty: "warmup",
        guideRef: "war-and-the-vote",
        hints: ["1918 was a partial victory — equality came ten years later."],
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m3-q02",
        question: "Members of the NUWSS, who campaigned peacefully and within the law, are usually called…",
        options: ["suffragettes", "Chartists", "anti-suffragists", "suffragists"],
        answerIndex: 3,
        explanation:
          "NUWSS members were **suffragists**. **Suffragettes** were members of the militant WSPU — the word was first used by the *Daily Mail* in 1906 to mock them. Mixing up the two is the most common error in this topic.",
        difficulty: "warmup",
        guideRef: "suffragists",
        hints: ["One name was originally a newspaper insult for the militants — this is the other one."],
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m3-q03",
        question: "What did the Married Women's Property Act of 1870 allow?",
        options: [
          "Married women could keep the money they earned themselves",
          "Married women could vote in general elections",
          "Women could divorce their husbands on exactly the same terms as men",
          "Women could become MPs",
        ],
        answerIndex: 0,
        explanation:
          "The **1870** Act let married women keep their own **earnings**; the **1882** Act went further and let them keep all their property. Divorce on equal terms did not come until **1923**, and women could not stand as MPs until **1918**.",
        difficulty: "warmup",
        guideRef: "women-in-victorian-britain",
        hints: ["The clue is in the name of the Act — it was about property and money."],
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m3-q04",
        question: "Sophia Duleep Singh — daughter of the last Maharaja of the Sikh Empire and goddaughter of Queen Victoria — is significant in suffrage history because she…",
        options: [
          "led the Women's National Anti-Suffrage League",
          "was the first woman to take her seat in the House of Commons",
          "was an active suffragette who joined the Black Friday protest (1910), sold *The Suffragette* newspaper and refused to pay her taxes",
          "founded the NUWSS in 1897",
        ],
        answerIndex: 2,
        explanation:
          "**Sophia Duleep Singh** used her royal connections and fame to support the WSPU, and joined the **Women's Tax Resistance League** (\"no vote, no tax\"). She shows the movement included women from across the British Empire. The first woman to take her seat was **Nancy Astor** (1919).",
        difficulty: "warmup",
        guideRef: "suffragettes",
        hints: ["She campaigned with the WSPU and used the slogan \"no vote, no tax\"."],
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m3-q05",
        question:
          "**Source A** — a description written for this exercise, based on well-known facts about Britain before 1832.\n\n> Old Sarum, a grassy hill with almost no houses, sent two MPs to Parliament. Manchester, a booming industrial town of well over 100,000 people, sent none.\n\nWhat problem with the old electoral system does this reveal?",
        options: [
          "Seats in Parliament did not match where people lived, because they had not been redrawn as industrial towns grew",
          "Too many people in the countryside were allowed to vote",
          "Manchester had refused to send an MP to Parliament",
          "Voting was secret, so results could easily be faked",
        ],
        answerIndex: 0,
        explanation:
          "Old Sarum was a famous **rotten borough**: seats had been fixed centuries earlier and never updated, while new industrial towns had **no MPs**. Voting was *not* secret before **1872** — open voting was itself a problem, but it is not what this source shows.",
        difficulty: "core",
        guideRef: "britain-becomes-democratic",
        hints: [
          "Compare the number of people with the number of MPs in each place.",
          "What had happened to towns like Manchester during the Industrial Revolution?",
          "The map of seats was old — had anyone redrawn it?",
        ],
        strategy: "Make an inference",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m3-q06",
        question: "Mary Augusta Ward (who wrote as Mrs Humphry Ward) is significant in this topic because she…",
        options: [
          "led the NUWSS's Great Pilgrimage in 1913",
          "was the first woman elected to Parliament",
          "was force-fed in Holloway prison",
          "was a leader of the Women's National Anti-Suffrage League (1908), showing that some women opposed votes for women",
        ],
        answerIndex: 3,
        explanation:
          "**Mary Augusta Ward**, a best-selling novelist, helped lead the **Women's National Anti-Suffrage League**, founded in **1908**. She is important because she shows the debate was not simply \"women versus men\": many women were against the vote, which anti-suffragists used as an argument.",
        difficulty: "core",
        guideRef: "arguments-for-and-against",
        hints: [
          "Not every famous woman of this period was a supporter of votes for women.",
          "Look for the option that names an organisation *opposed* to the vote.",
        ],
        strategy: "Judge significance",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m3-q07",
        question: "Why did the 1918 Act give the vote to most women only at 30, when most men could vote at 21?",
        options: [
          "Women under 30 had done no war work",
          "The suffragettes had asked for the age to be set at 30",
          "MPs did not want women to become a majority of voters, after so many men had been killed in the war",
          "Women under 30 were not allowed to own property",
        ],
        answerIndex: 2,
        explanation:
          "About **three-quarters of a million** British servicemen had been killed, and there were more women than men. Setting the age at **30** (plus a property test) kept women a **minority** of voters — about two in every five. In fact many war workers were *young* women, which is why \"women under 30 had done no war work\" is wrong.",
        difficulty: "core",
        guideRef: "war-and-the-vote",
        hints: [
          "Think about the numbers of men and women in Britain in 1918.",
          "What were some MPs nervous about if all adult women could vote at once?",
          "Who would be the majority of voters if both sexes voted at 21?",
        ],
        strategy: "Think about who benefited",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m3-q08",
        question: "Which of these is a LONG-TERM cause of women winning the vote?",
        options: [
          "Women's growing role in education, paid work and local government during the later 1800s",
          "The passing of the Representation of the People Act in February 1918",
          "Emily Wilding Davison's death in June 1913",
          "The government's need to fix soldiers' votes in 1916",
        ],
        answerIndex: 0,
        explanation:
          "Changes over **decades** — education, work and local government experience — made it steadily harder to argue women were unfit to vote. Davison's death and the soldiers' vote problem are **short-term** events, and the 1918 Act is the *result* being explained, not a cause.",
        difficulty: "core",
        guideRef: "why-women-won",
        hints: [
          "Long-term causes build up over many years, not in a single moment.",
          "One option is the outcome itself — you cannot use the result as its own cause.",
        ],
        strategy: "Long-term vs short-term causes",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m3-q09",
        question:
          "**Source B** — a poster published by the WSPU in 1914, titled \"The Cat and Mouse Act\". It shows a huge, snarling cat holding a limp, exhausted suffragette in its jaws, and urges voters to turn against the Liberal government (wording described).\n\nWhat was the main purpose of this poster?",
        options: [
          "To explain the details of the new prison law in a neutral way",
          "To turn public opinion against the Liberal government by showing the Cat and Mouse Act as cruel to women prisoners",
          "To persuade suffragettes to stop hunger striking",
          "To praise the Liberal government for releasing sick prisoners",
        ],
        answerIndex: 1,
        explanation:
          "The **WSPU** made this poster, so it is **propaganda**: the giant cat and helpless woman are designed to make readers feel outrage and blame the **Liberals**. It is not neutral — the images are deliberately emotional. It certainly does not praise the government.",
        difficulty: "core",
        guideRef: "suffragettes",
        hints: [
          "Who made the poster? What did they want people to think?",
          "How is the cat drawn — friendly or frightening? Who does the cat stand for?",
          "Posters aim to change minds — whose minds, and about whom?",
        ],
        strategy: "Think about purpose",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m3-q10",
        question:
          "**Source C** — an official government photograph from 1917 showing women in overalls filling shells in a munitions factory, all hard at work and smiling.\n\nA historian wants to know how women's war work changed opinions about the vote. Why must this photograph be used with care?",
        options: [
          "Photographs can never be trusted, so it is useless",
          "It proves that women won the vote because of munitions work",
          "It was taken officially, partly to encourage support for the war effort, so the scene may be posed and it cannot show what MPs thought",
          "It was taken after 1928, so it is irrelevant",
        ],
        answerIndex: 2,
        explanation:
          "An **official** photograph had a purpose — to boost morale and recruit workers — so it may show a cheerful, staged scene. It is still useful evidence that women did this work, but it cannot by itself show **why MPs voted** for the 1918 Act. Saying photographs are \"useless\" is too extreme: every source is useful for *something*.",
        difficulty: "core",
        guideRef: "war-and-the-vote",
        hints: [
          "Who took the photo, and why might the government want pictures like this?",
          "Is the question about what women did, or about what politicians thought?",
          "Avoid extreme answers — sources are rarely totally useless or totally proof.",
        ],
        strategy: "Check the provenance (NOP)",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m3-q11",
        question: "Which development in the later 1800s gave some middle-class women strong evidence that they were capable of political responsibility?",
        options: [
          "Women were given equal pay with men",
          "Women's colleges such as Girton (founded 1869) opened, and women began to gain a university education",
          "Women were allowed to stand as MPs",
          "Women could join the army as soldiers",
        ],
        answerIndex: 1,
        explanation:
          "Colleges such as **Girton** at Cambridge showed women could study at the highest level — even though Cambridge did not award women full degrees until **1948**. Equal pay was not law until **1970**, and women could not stand as MPs until **1918**.",
        difficulty: "core",
        guideRef: "women-in-victorian-britain",
        hints: [
          "Which option actually happened in the 1800s?",
          "Think about education: what did suffragists mean by \"educated women vs uneducated men\"?",
        ],
        strategy: "Use precise evidence",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m3-q12",
        question: "Suffragists pointed out that many women paid rates and taxes. Which principle were they appealing to?",
        options: [
          "Separate spheres",
          "The divine right of kings",
          "Deeds not words",
          "No taxation without representation — people who pay taxes should have a say in how they are spent",
        ],
        answerIndex: 3,
        explanation:
          "**No taxation without representation** was an old and respected idea; suffragists used it to show that excluding taxpaying women was unfair. \"Separate spheres\" was an *anti*-suffrage idea, and \"Deeds not words\" was the WSPU motto, not a principle about taxes.",
        difficulty: "core",
        guideRef: "arguments-for-and-against",
        hints: [
          "Link paying money to the government with having a say in that government.",
          "One option is the slogan of a famous earlier revolution against British taxes.",
        ],
        strategy: "Make an inference",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m3-q13",
        question: "Which puts these events in the correct chronological order?\n\n- the Great Reform Act\n- the Ballot Act\n- Peterloo\n- the Chartists' great meeting at Kennington Common\n- the Second Reform Act",
        options: [
          "Great Reform Act → Peterloo → Kennington Common → Ballot Act → Second Reform Act",
          "Peterloo → Kennington Common → Great Reform Act → Second Reform Act → Ballot Act",
          "Peterloo → Great Reform Act → Kennington Common → Second Reform Act → Ballot Act",
          "Peterloo → Great Reform Act → Second Reform Act → Kennington Common → Ballot Act",
        ],
        answerIndex: 2,
        explanation:
          "**Peterloo 1819 → Great Reform Act 1832 → Kennington Common 1848 → Second Reform Act 1867 → Ballot Act 1872.** A common slip is putting the Chartists before 1832 — but Chartism grew partly out of *disappointment* with the 1832 Act, which left working men without the vote.",
        difficulty: "challenge",
        guideRef: "britain-becomes-democratic",
        hints: [
          "Start by fixing the dates you are most sure of: 1819 and 1832.",
          "The Chartists were angry that one of these Acts had *not* given working men the vote — so they must come after it.",
          "The secret ballot came after skilled working men in towns got the vote in 1867.",
        ],
        strategy: "Put it in chronological order",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m3-q14",
        question:
          "**Source D** — a description written for this exercise, summarising a view often associated with Millicent Fawcett, leader of the NUWSS.\n\n> The women's movement is like a glacier: slow-moving, but unstoppable.\n\nWhat does this suggest about how Fawcett saw the suffragists' strategy?",
        options: [
          "She believed patient, steady, lawful campaigning would win in the end, even if progress looked slow",
          "She thought the cause was hopeless",
          "She believed militant action was needed to speed things up",
          "She knew the First World War would win women the vote",
        ],
        answerIndex: 0,
        explanation:
          "A glacier moves slowly but cannot be stopped — a picture of **steady, lawful pressure** winning in the end. As NUWSS leader, Fawcett had a reason to defend slow methods against WSPU criticism. Saying she \"knew\" about the war is **hindsight**: nobody before 1914 could know what the war would bring.",
        difficulty: "challenge",
        guideRef: "suffragists",
        hints: [
          "Think about what a glacier is like: speed and power.",
          "Who is speaking, and what might she want to defend against the impatient WSPU?",
          "Avoid hindsight — what could she know at the time?",
        ],
        strategy: "Avoid hindsight",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m3-q15",
        question: "How did Britain's road to democracy (1832–1928) mainly differ from France's in 1789?",
        options: [
          "Britain gave women the vote before revolutionary France gave it to men",
          "In both countries women won the vote in the 1790s",
          "Britain's path to democracy involved no protest or violence at all",
          "Britain changed mostly through a series of Acts of Parliament over nearly a century, while France saw a sudden revolution that overthrew the old order",
        ],
        answerIndex: 3,
        explanation:
          "Britain's democracy was built **gradually, through Parliament** — 1832, 1867, 1884, 1918, 1928 — while France's **Revolution** swept away the old system much more suddenly. But \"no protest or violence\" is wrong: Peterloo, the Chartists and the suffragettes show change in Britain was fought over too. French women did not vote until 1944.",
        difficulty: "challenge",
        guideRef: "why-women-won",
        hints: [
          "Compare *how* change happened in each country: suddenly or step by step?",
          "Be careful of extreme words like \"no protest at all\".",
          "When did women in France actually gain the vote?",
        ],
        strategy: "Compare and contrast",
      },
    ],
  },

  // =========================================================================
  // MCQ PAPER 4
  // =========================================================================
  {
    id: "womens-suffrage-m4",
    title: "MCQ Paper 4",
    questions: [
      {
        kind: "mcq",
        id: "womens-suffrage-m4-q01",
        question: "Which of these was an argument used AGAINST votes for women before 1914?",
        options: [
          "Women paid taxes, so they should have a say",
          "Women already voted in some local elections",
          "New Zealand had given women the vote without disaster",
          "Women's proper place was the home, and politics would distract them from family duties",
        ],
        answerIndex: 3,
        explanation:
          "The **separate spheres** argument said women belonged at home. The other three were all arguments *for* votes for women — taxes, local voting and New Zealand were favourite suffragist points.",
        difficulty: "warmup",
        guideRef: "arguments-for-and-against",
        hints: ["Three of these were used by suffragists — which one would an anti-suffragist say?"],
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m4-q02",
        question: "Which document of 1948 states that everyone has the right to take part in the government of their country?",
        options: [
          "Magna Carta",
          "The People's Charter",
          "The Universal Declaration of Human Rights",
          "The Declaration of the Rights of Man and of the Citizen",
        ],
        answerIndex: 2,
        explanation:
          "The **Universal Declaration of Human Rights** was adopted by the United Nations in **1948**; Article 21 sets out the right to take part in government through free elections. The **Declaration of the Rights of Man** is a tempting distractor, but it comes from the French Revolution in **1789**.",
        difficulty: "warmup",
        guideRef: "why-women-won",
        hints: ["It was agreed by the United Nations after the Second World War."],
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m4-q03",
        question: "What happened at **Peterloo** in Manchester in 1819?",
        options: [
          "The Chartists presented their final petition to Parliament",
          "Cavalry charged a peaceful crowd at a meeting calling for parliamentary reform, killing around 15–18 people",
          "Parliament passed the Great Reform Act",
          "Suffragettes set fire to a racecourse stand",
        ],
        answerIndex: 1,
        explanation:
          "At **St Peter's Field** a crowd of tens of thousands gathered to hear speeches demanding reform. Mounted yeomanry and soldiers charged; around **15–18** people were killed and hundreds injured. The name mocked the victory at Waterloo four years earlier. The Chartists came later (from **1838**).",
        difficulty: "warmup",
        guideRef: "britain-becomes-democratic",
        hints: ["The name is a bitter joke on a famous British battle of 1815."],
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m4-q04",
        question: "What was Emily Wilding Davison doing when she was fatally injured in June 1913?",
        options: [
          "She ran onto the course at the Epsom Derby and was struck by the King's horse",
          "She was being force-fed in Holloway prison",
          "She was leading the NUWSS Great Pilgrimage",
          "She was chaining herself to railings outside Downing Street",
        ],
        answerIndex: 0,
        explanation:
          "At the **Epsom Derby** on 4 June 1913 Davison stepped onto the course and was hit by **Anmer**, the King's horse; she died four days later. Historians still debate whether she meant to die or to attach a WSPU scarf to the horse. She was a militant **suffragette**, so she would not have led the NUWSS Pilgrimage.",
        difficulty: "warmup",
        guideRef: "suffragettes",
        hints: ["It happened at a famous horse race, in front of large crowds and newsreel cameras."],
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m4-q05",
        question:
          "**Source A** — from *Mrs Beeton's Book of Household Management* (1861), a best-selling guide for middle-class wives.\n\n> As with the commander of an army, or the leader of any enterprise, so is it with the mistress of a house.\n\nWhat does this suggest about how many Victorians saw middle-class women's role?",
        options: [
          "Women were expected to join the army",
          "Women were seen as men's equals in politics",
          "Running the home was seen as a woman's important duty — her \"sphere\" — rather than public life",
          "Every woman in Britain had servants to command",
        ],
        answerIndex: 2,
        explanation:
          "Mrs Beeton compares running a home to commanding an army: the home is a woman's serious, important **sphere**. The army comparison is a metaphor, not a real job. And it was written for **middle-class** readers — millions of working-class women *were* the servants, so it is not typical of all women.",
        difficulty: "core",
        guideRef: "women-in-victorian-britain",
        hints: [
          "The army comparison is a metaphor — what is being compared to what?",
          "Who was the book written for? Ask \"how typical?\"",
          "Which Victorian idea divided life into a men's world and a women's world?",
        ],
        strategy: "Ask \"how typical?\"",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m4-q06",
        question: "The NUWSS **\"Mud March\"** of February 1907 is significant because…",
        options: [
          "it was the first suffragette arson attack",
          "it was one of the first large public processions for women's suffrage, with over 3,000 women marching through London in rain and mud",
          "it led directly to women winning the vote in 1907",
          "it was organised by the WSPU to protest against force-feeding",
        ],
        answerIndex: 1,
        explanation:
          "In the **Mud March**, more than **3,000** women walked through wet London streets — a brave act when \"respectable\" women marching in public was unusual. It showed that peaceful suffragists could make a public spectacle too. Force-feeding did not begin until **1909**, and the vote was not won until **1918**.",
        difficulty: "core",
        guideRef: "suffragists",
        hints: [
          "The name tells you about the weather, not the methods.",
          "Was it the peaceful or militant group — and was it lawful?",
        ],
        strategy: "Judge significance",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m4-q07",
        question: "Why did British suffragists often point to New Zealand (1893), Australia (1902) and Finland (1906)?",
        options: [
          "Because women there had won the vote through violent militancy",
          "To show that women voting had worked elsewhere without disaster, undermining opponents' fears",
          "Because Britain ruled Finland",
          "To prove that women in those countries did not really want the vote",
        ],
        answerIndex: 1,
        explanation:
          "These examples showed that letting women vote did **not** wreck families or government — weakening anti-suffrage warnings. (Australia's 1902 law excluded most Aboriginal women, a reminder that \"votes for women\" did not always mean *all* women.) Finland was ruled by Russia, not Britain.",
        difficulty: "core",
        guideRef: "arguments-for-and-against",
        hints: [
          "Anti-suffragists warned of terrible consequences. How could suffragists answer that?",
          "What does a real example from another country prove that theory cannot?",
        ],
        strategy: "Compare and contrast",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m4-q08",
        question:
          "**Source B** — a description written for this exercise.\n\n> The word \"suffragette\" was first used by the *Daily Mail* in 1906 to mock the militant campaigners. The WSPU proudly adopted it, and from 1912 called its own newspaper *The Suffragette*.\n\nWhat can you infer about the WSPU from this source?",
        options: [
          "The *Daily Mail* supported militancy from the very start",
          "The word \"suffragette\" was first used for members of the NUWSS",
          "The WSPU tried to avoid newspaper attention",
          "It was skilled at publicity, turning an insult into a badge of pride",
        ],
        answerIndex: 3,
        explanation:
          "Taking a newspaper's sneer and wearing it with pride is clever **publicity** — the WSPU was brilliant at attracting attention (colours of purple, white and green, processions, its own paper). The *Daily Mail* used the word to **mock**, not to support, and it described the militants, not the NUWSS.",
        difficulty: "core",
        guideRef: "suffragettes",
        hints: [
          "The word began as an insult. What did the WSPU do with it?",
          "Would a group that hated attention name its own newspaper after an insult?",
        ],
        strategy: "Make an inference",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m4-q09",
        question: "Which of these shows CONTINUITY (something that did not change) for women after the 1918 Act?",
        options: [
          "Women still could not stand as MPs",
          "Men still needed to own property to vote",
          "No women could vote in general elections",
          "Women under 30, and many poorer women without property, still could not vote in general elections",
        ],
        answerIndex: 3,
        explanation:
          "About **8.4 million** women gained the vote in 1918, but millions of younger and poorer women were still left out until **1928**. The other options are wrong: the **Parliament (Qualification of Women) Act 1918** let women stand as MPs, and the 1918 Act gave the vote to almost all men over 21 regardless of property.",
        difficulty: "core",
        guideRef: "why-women-won",
        hints: [
          "Continuity means something stayed the same despite a big change.",
          "Which women did the 1918 Act leave out?",
        ],
        strategy: "Spot change and continuity",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m4-q10",
        question: "Why did the suffragists make slow progress in Parliament before 1914?",
        options: [
          "Women's suffrage bills, including the Conciliation Bills of 1910–12, kept failing, and the Liberal Prime Minister Asquith opposed votes for women",
          "The NUWSS had almost no members",
          "No MPs at all supported votes for women",
          "The NUWSS only campaigned in Scotland",
        ],
        answerIndex: 0,
        explanation:
          "Many MPs supported women's suffrage in principle, but bills kept being **blocked, delayed or talked out**, and **Asquith**, Prime Minister from 1908, opposed it. The NUWSS was actually the **largest** suffrage group, with tens of thousands of members, so lack of support is the wrong explanation.",
        difficulty: "core",
        guideRef: "suffragists",
        hints: [
          "The problem was not a lack of supporters in the country.",
          "Think about who controlled what Parliament debated and passed.",
          "Who was Prime Minister from 1908, and what was his view?",
        ],
        strategy: "Weigh factors",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m4-q11",
        question: "Which group gained the vote in the Second Reform Act of 1867?",
        options: [
          "All men over 21",
          "Women householders",
          "Many working men who were householders in towns (boroughs)",
          "Farm labourers in the countryside",
        ],
        answerIndex: 2,
        explanation:
          "The **1867** Act gave the vote to male **householders in towns**, roughly doubling the electorate to about 2 million. Countryside workers such as farm labourers had to wait until the **Third Reform Act of 1884**, and all men over 21 only got the vote in **1918**.",
        difficulty: "core",
        guideRef: "britain-becomes-democratic",
        hints: [
          "The 1867 and 1884 Acts did similar things in different places — towns or countryside.",
          "Which came first: the towns or the counties?",
        ],
        strategy: "Put it in chronological order",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m4-q12",
        question:
          "**Source C** — approximate figures for the UK electorate.\n\n| Election | Total voters | Women voters |\n|---|---|---|\n| December 1910 | about 7.7 million | none |\n| December 1918 | about 21.4 million | about 8.4 million |\n\nWhat does the table show about the 1918 Act?",
        options: [
          "The electorate nearly tripled, and women made up roughly two in every five voters",
          "Women became the majority of voters",
          "The number of voters fell because so many soldiers were away",
          "Only women gained the vote in 1918",
        ],
        answerIndex: 0,
        explanation:
          "From about 7.7 million to 21.4 million is nearly **three times** as many voters, and 8.4 out of 21.4 million is about **40%**. Women were deliberately kept a **minority** by the age-30 rule. Men gained too: about 13 million male voters in 1918 is far more than in 1910, because property rules for men were swept away.",
        difficulty: "core",
        guideRef: "war-and-the-vote",
        hints: [
          "Compare the two totals — roughly how many times bigger is the second?",
          "Work out roughly what fraction of 21.4 million is 8.4 million.",
          "Subtract the women from the 1918 total — did men's numbers rise too?",
        ],
        strategy: "Use precise evidence",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m4-q13",
        question: "A historian claims: \"Victorian women were confined to the home.\" Which evidence best shows the LIMITS of this claim?",
        options: [
          "Millions of working-class women worked for wages — in domestic service, textile mills and other jobs — because their families needed the money",
          "Middle-class guidebooks told wives to run the household carefully",
          "Before 1870, a married woman's earnings belonged to her husband",
          "Queen Victoria privately opposed the campaign for \"women's rights\"",
        ],
        answerIndex: 0,
        explanation:
          "The claim fits **middle-class ideals**, but most women were working-class, and huge numbers of them **worked outside their own homes** for wages. The guidebook evidence *supports* the claim rather than limiting it, and the 1870 earnings point shows women *did* earn money but is about legal control, not where women worked.",
        difficulty: "challenge",
        guideRef: "women-in-victorian-britain",
        hints: [
          "Ask \"how typical?\" — which women is the claim really describing?",
          "Sort the options: which ones support the claim and which one challenges it?",
          "Think about class: did poorer families have the choice to keep women at home?",
        ],
        strategy: "Ask \"how typical?\"",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m4-q14",
        question: "Many \"munitionettes\" who worked in wartime factories did NOT get the vote in 1918. Why — and why does this matter for explaining why women won the vote?",
        options: [
          "Their work was secret, so they could not register — which shows the government did not value them",
          "Many were young working-class women under 30 without property — which weakens the idea that the vote was simply a reward for war work",
          "Most had been suffragettes and were banned from voting — which shows militancy harmed the cause",
          "They were not British citizens — which shows the war made no difference at all",
        ],
        answerIndex: 1,
        explanation:
          "The 1918 rules (over **30** and a **property** qualification) excluded many of the young, working-class women who had done the most visible war work. If the vote were purely a **reward**, they would have been first in line — so the war's role was more complicated: it gave MPs a reason and an opportunity to change, but older, propertied women benefited most.",
        difficulty: "challenge",
        guideRef: "war-and-the-vote",
        hints: [
          "Remember the two conditions women had to meet in 1918.",
          "What age and class were most munitions workers?",
          "If the vote was a reward for war work, who would you expect to get it first?",
        ],
        strategy: "Consider the counter-argument",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-m4-q15",
        question: "Which evidence most strongly CHALLENGES the view that British democracy developed through steady, peaceful progress?",
        options: [
          "Parliament passed Reform Acts in 1832, 1867 and 1884",
          "The 1918 and 1928 Acts were passed by Parliament without a revolution",
          "The deaths at Peterloo, the rejected Chartist petitions, and suffragette arson met by force-feeding show change was fought over and often resisted",
          "The voting age fell to 18 in 1969",
        ],
        answerIndex: 2,
        explanation:
          "Peterloo, the Chartists and the suffragettes show that reform was **demanded, resisted and fought over**, not simply handed down. The other three options are true, but they *support* the \"steady progress\" view — they show orderly change through Parliament.",
        difficulty: "challenge",
        guideRef: "why-women-won",
        hints: [
          "You need evidence *against* the view, not for it.",
          "Look for moments of conflict, protest or refusal in the story.",
          "Three options describe calm change through Parliament — which one doesn't?",
        ],
        strategy: "Consider the counter-argument",
      },
    ],
  },
];
