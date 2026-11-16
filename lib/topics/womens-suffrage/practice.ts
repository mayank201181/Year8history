import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // ===========================================================================
  // QUICK-CHECK QUIZ (10)
  // ===========================================================================
  quiz: [
    {
      kind: "short",
      id: "womens-suffrage-quiz-q01",
      question:
        "In which year was the Great Reform Act passed, removing many rotten boroughs and giving MPs to new industrial towns such as Manchester and Birmingham?",
      answer: { type: "number", value: 1832 },
      traps: [
        {
          spec: { type: "number", value: 1867 },
          feedback: "1867 was the *Second* Reform Act, which gave the vote to many working men in the towns. The first, 'Great', Reform Act came 35 years earlier.",
        },
        {
          spec: { type: "number", value: 1884 },
          feedback: "1884 was the *Third* Reform Act, which gave the vote to male householders in the countryside. The 'Great' one was the first of the three.",
        },
      ],
      solution: [
        "The Great Reform Act was passed in **1832**.",
        "It gave seats to growing towns and the vote to men who owned or rented property worth £10 a year — but still fewer than one adult man in five could vote, and the Act said 'male persons', shutting women out in law.",
      ],
      commonError: "Mixing up the three Reform Acts: 1832 (middle-class men), 1867 (town working men), 1884 (country working men).",
      difficulty: "warmup",
      guideRef: "britain-becomes-democratic",
      hints: [
        "It was the first of three Reform Acts in the 1800s, and it came just over a decade after Peterloo (1819).",
      ],
      strategy: "Put it in chronological order",
    },
    {
      kind: "mcq",
      id: "womens-suffrage-quiz-q02",
      question: "Which of these methods was used by the WSPU suffragettes but NOT by the law-abiding NUWSS suffragists?",
      options: [
        "Lobbying MPs to support a women's suffrage bill",
        "Smashing shop windows and setting fire to empty buildings",
        "Collecting signatures for petitions to Parliament",
        "Holding large, peaceful public meetings and marches",
      ],
      answerIndex: 1,
      explanation:
        "Under the motto **\"Deeds not words\"**, the WSPU moved on to **window smashing (1912) and arson (1912–14)** — attacks on property that broke the law. The NUWSS refused to break the law. Lobbying MPs is tempting because the WSPU also targeted politicians, but lobbying, petitions and peaceful marches were the suffragists' core methods, so they do not separate the two groups.",
      difficulty: "warmup",
      guideRef: "suffragettes",
      hints: ["Which method breaks the law?"],
      strategy: "Compare and contrast",
    },
    {
      kind: "short",
      id: "womens-suffrage-quiz-q03",
      question:
        "In 1906 the *Daily Mail* newspaper invented a mocking nickname for the militant women of the WSPU. They proudly adopted it. What was the nickname?",
      answer: { type: "text", accept: ["suffragettes", "suffragette", "the suffragettes"], display: "suffragettes" },
      traps: [
        {
          spec: { type: "text", accept: ["suffragists", "suffragist", "the suffragists"] },
          feedback: "Suffragists were the peaceful, law-abiding campaigners of the NUWSS. The newspaper's nickname for the militants had a different ending — '-ette', which suggested something small or silly.",
        },
      ],
      solution: [
        "*Suffragette* was a newspaper nickname for WSPU militants; the '-ette' ending was meant to belittle them.",
        "The WSPU turned the insult into a badge of pride — from 1912 its own newspaper was called *The Suffragette*.",
      ],
      commonError: "Confusing suffragists (NUWSS, peaceful, from 1897) with suffragettes (WSPU, militant, from 1903).",
      difficulty: "warmup",
      guideRef: "suffragettes",
      hints: ["The word ends in a way that suggested 'small' or 'silly' — like 'kitchenette'."],
      strategy: "Use precise evidence",
    },
    {
      kind: "mcq",
      id: "womens-suffrage-quiz-q04",
      question: "What was the **Great Pilgrimage** of 1913?",
      options: [
        "A WSPU campaign of arson attacks on empty country houses",
        "A march by women munition workers demanding equal pay",
        "A weeks-long NUWSS march from towns across Britain to a huge rally in Hyde Park, London",
        "The Chartists' final procession to deliver their petition to Parliament",
      ],
      answerIndex: 2,
      explanation:
        "In summer 1913 thousands of NUWSS suffragists walked for up to six weeks along routes from across England and Wales, holding meetings in every town, before a mass rally in **Hyde Park on 26 July**. It was designed to show that suffragists were **law-abiding**. The arson answer is tempting because 1913 was also the peak of WSPU arson — which is exactly why the NUWSS wanted to show the public a peaceful alternative. There were no munition workers yet: the war began in 1914.",
      difficulty: "core",
      guideRef: "suffragists",
      hints: [
        "'Pilgrimage' suggests a long, peaceful journey.",
        "Which group wanted to show it was law-abiding in 1913, when militancy was at its height?",
      ],
      strategy: "Use precise evidence",
    },
    {
      kind: "short",
      id: "womens-suffrage-quiz-q05",
      question: "In which year did women vote in a UK general election for the first time?",
      answer: { type: "number", value: 1918 },
      traps: [
        {
          spec: { type: "number", value: 1928 },
          feedback: "1928 is when women won the vote on *equal* terms with men, at 21. Some women — those over 30 who met a property qualification — had first voted ten years earlier.",
        },
        {
          spec: { type: "number", value: 1919 },
          feedback: "1919 is when Nancy Astor became the first woman to take her seat as an MP. Women had already voted in a general election the year before.",
        },
      ],
      solution: [
        "The Representation of the People Act (February 1918) gave the vote to about 8.4 million women over 30 who met a property qualification.",
        "They used it for the first time in the general election of **December 1918**, a month after the war ended.",
      ],
      difficulty: "core",
      guideRef: "war-and-the-vote",
      hints: [
        "Think about the end of the First World War.",
        "The Act was passed in February of that year and a general election followed in December.",
      ],
      strategy: "Put it in chronological order",
    },
    {
      kind: "mcq",
      id: "womens-suffrage-quiz-q06",
      question:
        "From 1869 some single women who paid rates could vote in town council elections, and from 1870 women could be elected to school boards. Which argument FOR votes for women did this strengthen?",
      options: [
        "Most women did not want to vote in national elections",
        "Women paid less in rates than men, so they deserved less say",
        "Local councils mainly dealt with war, trade and the empire",
        "Women had already shown they could take part responsibly in elected government",
      ],
      answerIndex: 3,
      explanation:
        "If women could vote for — and serve on — local bodies without disaster, it was hard to claim they were incapable of political judgement. \"Most women did not want to vote\" was a real argument, but it was an *anti*-suffrage one. And local bodies dealt with schools, poor relief and sanitation, not war and empire — which is exactly why anti-suffragists said local politics suited women but national politics did not.",
      difficulty: "core",
      guideRef: "arguments-for-and-against",
      hints: [
        "Only one option is an argument FOR the vote.",
        "What had women already proved by voting and serving locally?",
      ],
      strategy: "Make an inference",
    },
    {
      kind: "short",
      id: "womens-suffrage-quiz-q07",
      question:
        "On 18 November 1910, suffragettes marching to Parliament were met with hours of rough treatment and violence from police and bystanders. What name was given to that day?",
      answer: { type: "text", accept: ["Black Friday", "Black Friday 1910"], display: "Black Friday" },
      traps: [
        {
          spec: { type: "text", accept: ["Bloody Sunday"] },
          feedback: "'Bloody Sunday' is the name of several other events (in London in 1887, in Russia in 1905, in Derry in 1972). The 1910 suffragette protest was on a different day of the week.",
        },
        {
          spec: { type: "text", accept: ["Peterloo", "Peterloo Massacre"] },
          feedback: "Peterloo was in Manchester in 1819, when cavalry charged a crowd demanding reform for men. The 1910 suffragette day had a different name.",
        },
      ],
      solution: [
        "It became known as **Black Friday**.",
        "The WSPU was protesting because Prime Minister Asquith had dropped the Conciliation Bill, a compromise that would have given some women the vote.",
        "Many women reported being assaulted; afterwards some suffragettes turned from mass marches to smaller acts such as window smashing.",
      ],
      difficulty: "core",
      guideRef: "suffragettes",
      hints: [
        "It's named after a colour and a day of the week.",
        "18 November 1910 was a Friday.",
      ],
      strategy: "Use precise evidence",
    },
    {
      kind: "mcq",
      id: "womens-suffrage-quiz-q08",
      question: "Which of these developments in democracy happened MOST RECENTLY?",
      options: [
        "The UK voting age was lowered from 21 to 18",
        "The Equal Franchise Act gave women the vote on the same terms as men",
        "Singapore held its first election, for some seats on its Legislative Council",
        "The United Nations adopted the Universal Declaration of Human Rights",
      ],
      answerIndex: 0,
      explanation:
        "The voting age fell to 18 under the Representation of the People Act of **1969**. The Equal Franchise Act was **1928** — a tempting answer because it feels like the 'end' of the suffrage story, but democracy kept developing afterwards. Singapore's first election and the Universal Declaration of Human Rights both came in **1948**.",
      difficulty: "core",
      guideRef: "why-women-won",
      hints: [
        "Put a date next to each one before choosing.",
        "Two of them happened in the same year, 1948.",
        "The suffrage story did not stop in 1928 — what changed for young people later?",
      ],
      strategy: "Put it in chronological order",
    },
    {
      kind: "written",
      id: "womens-suffrage-quiz-q09",
      question: "Explain two ways in which the position of women in Britain improved between 1860 and 1900. (4 marks)",
      marks: 4,
      modelAnswer:
        "One improvement was in the law. Under coverture, a wife's property and earnings belonged to her husband, but the Married Women's Property Acts of 1870 and 1882 let married women keep their own earnings and then own property in their own right. This mattered because it gave married women a legal identity and some independence from their husbands for the first time.\n\nA second improvement was in education and public life. Colleges such as Girton (1869) let women study at university level, Elizabeth Garrett Anderson qualified as a doctor in 1865, and from 1869–70 some women could vote in local elections and sit on school boards. This was important because it proved women were capable of responsible public work, which strengthened the argument that they should also vote for Parliament.",
      markScheme: [
        {
          point: "Identifies a legal improvement, e.g. the Married Women's Property Acts (1870/1882) let wives keep earnings and property",
          keywords: ["married women's property", "property act", "1870", "1882", "earnings", "own property", "keep their money", "wages", "coverture"],
        },
        {
          point: "Explains why it mattered — e.g. wives gained a legal identity and independence from their husbands",
          keywords: ["independent", "independence", "legal identity", "husband", "control", "their own", "no longer"],
        },
        {
          point: "Identifies a second improvement: education, professions or local politics",
          keywords: ["university", "girton", "college", "education", "teacher", "nurse", "doctor", "garrett anderson", "school board", "local elections", "1869", "council"],
        },
        {
          point: "Explains its significance — e.g. it proved women's ability and strengthened the case for the vote",
          keywords: ["capable", "proved", "showed", "argument", "case for the vote", "responsible", "experience", "strengthened"],
        },
      ],
      commonError: "Listing changes without explaining why each one was an improvement — or claiming women could vote in general elections before 1918.",
      difficulty: "core",
      guideRef: "women-in-victorian-britain",
      hints: [
        "Think about three areas: the law, education and work, and local politics.",
        "What did the Married Women's Property Acts change for wives?",
        "For each change, add a sentence beginning 'This mattered because…'.",
      ],
      strategy: "Spot change and continuity",
    },
    {
      kind: "written",
      id: "womens-suffrage-quiz-q10",
      question:
        "**Source A** — Herbert Asquith, Liberal Prime Minister from 1908 to 1916 and for years an opponent of votes for women, speaking in the House of Commons in March 1917 (adapted).\n\n> Some years ago I used the expression, 'Let the women work out their own salvation.' Well, they have worked it out during this war.\n\nWhat can you infer from Source A about why some politicians changed their minds about votes for women? (3 marks)",
      marks: 3,
      modelAnswer:
        "Source A suggests that women's war work changed the minds of former opponents. Asquith says women have \"worked it out during this war\", which implies he now believes they have earned or proved they deserve the vote through their service on the home front. It also suggests that the war gave politicians a convenient, face-saving reason to change position: Asquith had blocked women's suffrage for years, and by praising war work rather than pre-war campaigning he could change his mind without seeming to give in to suffragette militancy.",
      markScheme: [
        {
          point: "Makes a valid inference: women's war work persuaded opponents that women had earned/deserved the vote",
          keywords: ["war work", "earned", "deserved", "proved", "contribution", "changed his mind", "service", "worked it out"],
        },
        {
          point: "Supports the inference with detail quoted or paraphrased from the source",
          keywords: ["salvation", "worked it out", "during this war", "the source says", "asquith says", "he says"],
        },
        {
          point: "Makes a second inference, e.g. the war gave opponents a face-saving reason to change without giving in to militancy",
          keywords: ["face", "give in", "giving in", "militancy", "suffragettes", "excuse", "opponent", "u-turn", "without looking weak", "reward"],
        },
      ],
      commonError: "Copying the quotation or describing what it says, instead of explaining what it suggests.",
      difficulty: "core",
      guideRef: "war-and-the-vote",
      hints: [
        "An inference is something the source suggests but does not state outright.",
        "Asquith had opposed votes for women for years. What does he say has changed?",
        "Why might the war give a long-time opponent a convenient reason to change his mind?",
      ],
      strategy: "Make an inference",
    },
  ],

  // ===========================================================================
  // PRACTICE PAPERS 1–2 (12 each)
  // ===========================================================================
  papers: [
    {
      id: "womens-suffrage-p1",
      title: "Practice Paper 1",
      questions: [
        {
          kind: "short",
          id: "womens-suffrage-p1-q01",
          question: "In which year did the Peterloo Massacre take place in Manchester?",
          answer: { type: "number", value: 1819 },
          traps: [
            {
              spec: { type: "number", value: 1832 },
              feedback: "1832 is the Great Reform Act, passed 13 years later — partly because pressure for reform kept growing after Peterloo.",
            },
            {
              spec: { type: "number", value: 1815 },
              feedback: "1815 is the Battle of Waterloo. 'Peterloo' was a bitter joke comparing the attack on the crowd with that battle, a few years later.",
            },
          ],
          solution: [
            "Peterloo happened on **16 August 1819** at St Peter's Field, Manchester.",
            "Cavalry charged a peaceful crowd of around 60,000 who had come to hear Henry Hunt demand parliamentary reform; about 15–18 people were killed and hundreds injured.",
            "The name mocked the soldiers by comparing the attack with the Battle of Waterloo (1815).",
          ],
          difficulty: "warmup",
          guideRef: "britain-becomes-democratic",
          hints: ["The name is a bitter joke based on the Battle of Waterloo (1815) — it happened four years after that battle."],
          strategy: "Put it in chronological order",
        },
        {
          kind: "short",
          id: "womens-suffrage-p1-q02",
          question:
            "Millicent Fawcett led a union of local suffrage societies, formed in 1897, that campaigned peacefully and within the law. Give its name or its initials.",
          answer: {
            type: "text",
            accept: [
              "NUWSS",
              "N.U.W.S.S.",
              "National Union of Women's Suffrage Societies",
              "National Union of Womens Suffrage Societies",
              "the National Union of Women's Suffrage Societies",
            ],
            display: "NUWSS (National Union of Women's Suffrage Societies)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["WSPU", "W.S.P.U.", "Women's Social and Political Union"] },
              feedback: "The WSPU was the Pankhursts' militant group, founded in 1903. Fawcett's peaceful union was older and much bigger.",
            },
          ],
          solution: [
            "The **National Union of Women's Suffrage Societies (NUWSS)** was formed in 1897 by joining together many local societies.",
            "Its members were **suffragists**: they used petitions, meetings, lobbying and marches, and stayed within the law.",
          ],
          difficulty: "warmup",
          guideRef: "suffragists",
          hints: ["It united many smaller societies into one 'National Union'."],
          strategy: "Use precise evidence",
        },
        {
          kind: "mcq",
          id: "womens-suffrage-p1-q03",
          question: "What did the **Married Women's Property Act of 1882** change?",
          options: [
            "Married women gained the right to vote in general elections",
            "Married women were allowed to keep their own wages, but no other property",
            "Married women could own and control property in their own right, just as single women could",
            "Married women were allowed to stand for election as MPs",
          ],
          answerIndex: 2,
          explanation:
            "The 1882 Act ended the rule (part of **coverture**) that a wife's property passed to her husband: she could now own, buy, sell and inherit property herself. Keeping her own wages is tempting, but that was the narrower **1870** Act — the 1882 Act went much further. Women could not vote in general elections until 1918, and could not stand as MPs until a separate Act later in 1918.",
          difficulty: "warmup",
          guideRef: "women-in-victorian-britain",
          hints: ["Look at the Act's name — what was it about? And remember there was an earlier, narrower Act in 1870."],
          strategy: "Use precise evidence",
        },
        {
          kind: "short",
          id: "womens-suffrage-p1-q04",
          question:
            "Which suffragette stepped onto the course at the Epsom Derby on 4 June 1913, was struck by the King's horse, and died four days later? Give her surname.",
          answer: {
            type: "text",
            accept: ["Davison", "Emily Wilding Davison", "Emily Davison", "Wilding Davison", "Miss Davison"],
            display: "Emily Wilding Davison",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Pankhurst", "Emmeline Pankhurst", "Christabel Pankhurst", "Sylvia Pankhurst"] },
              feedback: "The Pankhursts led the WSPU, but none of them died at the Derby. The woman at Epsom was a long-serving WSPU activist who had been imprisoned and force-fed many times.",
            },
          ],
          solution: [
            "**Emily Wilding Davison** stepped onto the track at Tattenham Corner and was hit by Anmer, King George V's horse.",
            "Historians still debate what she intended: she had a return rail ticket, and she may have been trying to attach the WSPU colours to the horse rather than meaning to die.",
          ],
          difficulty: "core",
          guideRef: "suffragettes",
          hints: [
            "She was a WSPU member who had been imprisoned and force-fed many times.",
            "Her first name was Emily; thousands of women marched at her funeral in London.",
          ],
          strategy: "Use precise evidence",
        },
        {
          kind: "short",
          id: "womens-suffrage-p1-q05",
          question:
            "Roughly how many women gained the vote under the 1918 Representation of the People Act? Give your answer in millions, to the nearest million.",
          answer: { type: "number", value: 8, tolerance: 0.5, display: "about 8.4 million (8 million to the nearest million)" },
          traps: [
            {
              spec: { type: "number", value: 21, tolerance: 0.5 },
              feedback: "About 21 million was the size of the *whole* electorate after 1918 — men and women together. How many of those were women?",
            },
          ],
          solution: [
            "About **8.4 million** women gained the vote in 1918 — 8 million to the nearest million.",
            "The electorate roughly tripled, from about 7.7 million to about 21.4 million. Because women had to be over 30 and meet a property qualification, they made up only about two-fifths of voters.",
          ],
          commonError: "Assuming all adult women got the vote in 1918 — the age limit (30) and property qualification left millions out until 1928.",
          difficulty: "core",
          guideRef: "war-and-the-vote",
          hints: [
            "Women had to be over 30 and meet a property qualification, so not all adult women qualified.",
            "Women were roughly two-fifths of the new electorate of about 21 million.",
          ],
          strategy: "Use precise evidence",
        },
        {
          kind: "short",
          id: "womens-suffrage-p1-q06",
          question: "Which Liberal Prime Minister (1908–1916) opposed votes for women for most of his time in office? Give his surname.",
          answer: {
            type: "text",
            accept: ["Asquith", "Herbert Asquith", "H. H. Asquith", "HH Asquith", "H.H. Asquith", "Herbert Henry Asquith"],
            display: "Herbert Asquith",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Lloyd George", "David Lloyd George"] },
              feedback: "Lloyd George was Chancellor before 1914 and said he supported votes for women in principle. He only became Prime Minister in December 1916 — who was PM before him?",
            },
          ],
          solution: [
            "**Herbert Asquith** was Liberal Prime Minister from 1908 to 1916 and opposed votes for women.",
            "His government let the Conciliation Bills (1910–12) fail, which is why the WSPU targeted Liberal politicians.",
            "He changed his mind publicly in 1917, pointing to women's war work.",
          ],
          difficulty: "core",
          guideRef: "arguments-for-and-against",
          hints: [
            "He was Prime Minister when the First World War began in 1914.",
            "His surname begins with A.",
          ],
          strategy: "Think about who benefited",
        },
        {
          kind: "mcq",
          id: "womens-suffrage-p1-q07",
          question: "Why did the **Great Reform Act of 1832** disappoint many working-class campaigners?",
          options: [
            "It gave the vote mainly to middle-class men with property, leaving most working men without one",
            "It abolished the secret ballot, so voters could be bribed more easily",
            "It gave the vote to women householders instead of to working men",
            "It took away the House of Commons' power to set taxes",
          ],
          answerIndex: 0,
          explanation:
            "The Act gave the vote to men who owned or rented property worth £10 a year in the towns — mostly the middle classes — so most working men were still excluded. This disappointment helped create **Chartism** in 1838. There was no secret ballot to abolish: voting was done in public until the Ballot Act of 1872. And far from giving women the vote, the Act wrote 'male persons' into the law.",
          difficulty: "core",
          guideRef: "britain-becomes-democratic",
          hints: [
            "Who got the vote in 1832 — and who was left out?",
            "The new voters had to own or rent property worth £10 a year. How many factory workers could afford that?",
          ],
          strategy: "Think about who benefited",
        },
        {
          kind: "written",
          id: "womens-suffrage-p1-q08",
          question:
            "**Source A** — a description of a typical anti-suffrage picture postcard sold in Britain around 1908–1912 (described for this exercise).\n\n> A tired-looking husband in an apron stands in a messy kitchen, holding a crying baby while a pot boils over. On the wall a calendar is marked 'Suffrage meeting tonight'. The caption asks: 'Votes for Women? Then who will mind the home?'\n\nWhat can you infer from Source A about the arguments used against votes for women? (3 marks)",
          marks: 3,
          modelAnswer:
            "Source A suggests that opponents believed a woman's proper place was in the home — the 'separate spheres' idea. The husband in an apron struggling with the baby and the boiling pot implies that if women became involved in politics, they would neglect their families and homes would fall apart. It also suggests that anti-suffragists used ridicule and humour to make the campaign look absurd: showing a man forced into 'women's work' presents votes for women as a threat to the natural order, and cheap postcards spread this message to a mass audience.",
          markScheme: [
            {
              point: "Inference: opponents believed women belonged in the home ('separate spheres') and would neglect their duties",
              keywords: ["home", "separate spheres", "neglect", "domestic", "housework", "children", "duties", "mother", "wife", "family"],
            },
            {
              point: "Supports the inference with detail from the source",
              keywords: ["apron", "baby", "kitchen", "pot", "husband", "caption", "mind the home", "calendar"],
            },
            {
              point: "Second inference: anti-suffragists used mockery to present votes for women as absurd or a threat to the natural order",
              keywords: ["mock", "ridicule", "humour", "joke", "ridiculous", "threat", "role reversal", "upside down", "men's role", "popular", "absurd"],
            },
          ],
          commonError: "Describing the picture ('there is a man with a baby') without saying what it suggests about the anti-suffrage argument.",
          difficulty: "core",
          guideRef: "arguments-for-and-against",
          hints: [
            "Ask: what does the artist want the viewer to feel about votes for women?",
            "Who is doing the housework in the picture — and why is that meant to be funny?",
            "Link the picture to the 'separate spheres' idea.",
          ],
          strategy: "Make an inference",
        },
        {
          kind: "written",
          id: "womens-suffrage-p1-q09",
          question:
            "**Source B** — part of a newspaper report of the Epsom Derby, published the next day, 5 June 1913 (a constructed teaching source, written in the style of 1913 reports).\n\n> A woman, said to be a well-known suffragette, darted from the rails at Tattenham Corner into the path of the King's horse, Anmer. Horse, jockey and woman fell heavily. The jockey, Herbert Jones, was badly shaken. The sympathy of the crowd was overwhelmingly with the jockey, and many spectators loudly condemned the outrage.\n\nHow useful is Source B for an enquiry into how people reacted to Emily Wilding Davison's protest at the Derby? Use the source and its provenance. (4 marks)",
          marks: 4,
          modelAnswer:
            "Source B is useful because it shows one immediate reaction: the crowd's sympathy was with the jockey and many spectators 'condemned the outrage'. As a report published the very next day, it captures how the event was presented to the public at the time, and newspapers reached a huge audience.\n\nHowever, its usefulness is limited. Many newspapers were hostile to the suffragettes, and words like 'outrage' show the writer's disapproval. It was written before the facts were clear ('said to be'), and it shows only one newspaper's view. It leaves out other reactions: when Davison died, thousands of suffragettes marched at her funeral in London on 14 June, treating her as a martyr. So Source B is useful for showing hostile public reaction, but must be cross-referenced to see the full picture.",
          markScheme: [
            {
              point: "Uses the content: the source shows hostile reactions — sympathy for the jockey, condemnation of Davison",
              keywords: ["crowd", "sympathy", "jockey", "condemned", "outrage", "reaction", "angry", "hostile"],
            },
            {
              point: "Provenance strength: written the next day / at the time, reaching a wide public",
              keywords: ["next day", "1913", "at the time", "contemporary", "eyewitness", "immediate", "newspaper", "public"],
            },
            {
              point: "Provenance limitation: possible bias of the press, loaded language, uncertain facts, only one paper's view",
              keywords: ["bias", "biased", "hostile", "outrage", "language", "one newspaper", "said to be", "not sure", "sell papers", "sensational"],
            },
            {
              point: "Identifies what is missing using own knowledge, e.g. supporters treated her as a martyr at her funeral",
              keywords: ["funeral", "martyr", "supporters", "other reactions", "not everyone", "cross-reference", "only shows", "suffragettes"],
            },
          ],
          commonError: "Writing 'it is biased so it is useless'. A biased source is still useful evidence of attitudes — say what it IS useful for.",
          difficulty: "core",
          guideRef: "suffragettes",
          hints: [
            "Use NOP: Nature, Origin, Purpose — what kind of source is it, when was it written, and why?",
            "What does the word 'outrage' tell you about the writer's attitude?",
            "Whose reactions are missing? Think about her funeral procession in London ten days later.",
          ],
          strategy: "Check the provenance (NOP)",
        },
        {
          kind: "written",
          id: "womens-suffrage-p1-q10",
          question: "Explain why Millicent Fawcett and the NUWSS chose to campaign using peaceful, law-abiding methods. (4 marks)",
          marks: 4,
          modelAnswer:
            "The NUWSS chose peaceful methods partly to prove that women were responsible and rational enough to vote. Opponents claimed women were too emotional for politics, so breaking the law would only confirm their argument.\n\nThe suffragists also believed that the vote could only be won by persuading MPs to pass a bill, so they lobbied MPs, organised petitions and held meetings to build public opinion step by step. After the WSPU turned militant, staying law-abiding became even more important: events like the 1913 Great Pilgrimage, with banners saying 'law-abiding', were designed to show the public that most campaigners were not suffragettes, so that militancy would not damage the whole cause.",
          markScheme: [
            {
              point: "To prove women were responsible/rational and fit to vote",
              keywords: ["responsible", "rational", "sensible", "fit to vote", "prove", "show", "capable", "respectable"],
            },
            {
              point: "Explains that violence would confirm opponents' claims (e.g. 'too emotional')",
              keywords: ["opponents", "anti-suffragists", "confirm", "excuse", "emotional", "hysterical", "argument against"],
            },
            {
              point: "To persuade MPs and public opinion, since a law had to pass through Parliament",
              keywords: ["mps", "persuade", "public opinion", "lobbying", "petition", "win support", "parliament", "bill"],
            },
            {
              point: "To distance themselves from WSPU militancy, e.g. the 1913 Great Pilgrimage",
              keywords: ["wspu", "suffragettes", "militancy", "distance", "great pilgrimage", "law-abiding", "1913", "different"],
            },
          ],
          commonError: "Describing NUWSS methods (petitions, marches) without explaining WHY the suffragists chose them.",
          difficulty: "core",
          guideRef: "suffragists",
          hints: [
            "What did opponents claim about women's character?",
            "Who actually had to vote for a change in the law — and how do you win them over?",
            "Why might peaceful methods matter even more after 1905, once the WSPU became militant?",
          ],
          strategy: "Think about purpose",
        },
        {
          kind: "written",
          id: "womens-suffrage-p1-q11",
          question: "Explain why some women won the vote in 1918. (6 marks)",
          marks: 6,
          modelAnswer:
            "One reason was the long campaign of the suffragists. Since the 1866 petition, and especially after the NUWSS formed in 1897, they built a huge, respectable movement; by 1914 a majority of MPs supported votes for women in principle, so the idea was ready to be acted on.\n\nA second reason was women's war work. Women worked in munitions factories, on the land, in transport and as nurses. This undermined the argument that women could not serve the nation, and gave former opponents such as Asquith a face-saving reason to change their minds in 1917 without seeming to give in to militancy.\n\nThe trigger was political necessity. Residency rules meant millions of soldiers would lose their votes, so Parliament had to pass a new law; the Speaker's Conference (1916–17) recommended including women, and the wartime coalition made agreement easier. Politicians may also have feared a return of suffragette militancy after the war.\n\nThese factors were linked: the pre-war campaigns made the case, the war changed attitudes, and the need for a new law created the moment to act.",
          markScheme: [
            {
              point: "Identifies the long suffragist campaign as a factor",
              keywords: ["suffragists", "nuwss", "fawcett", "petitions", "campaign", "decades", "1866", "1897"],
            },
            {
              point: "Explains how the campaign helped, e.g. won majority support among MPs before 1914",
              keywords: ["kept the issue", "persuaded", "majority", "mps", "public support", "ready", "in principle"],
            },
            {
              point: "Identifies women's war work as a factor, with examples",
              keywords: ["war work", "munitions", "munitionettes", "land army", "nurses", "transport", "jobs", "contribution"],
            },
            {
              point: "Explains how war work helped, e.g. undermined anti arguments / gave opponents a face-saving reason",
              keywords: ["changed attitudes", "proved", "argument", "face", "excuse", "without giving in", "asquith", "1917"],
            },
            {
              point: "Identifies the short-term trigger: soldiers' votes / need for a new law / coalition / fear of renewed militancy",
              keywords: ["soldiers", "residency", "new law", "coalition", "speaker's conference", "militancy", "return", "suffragettes"],
            },
            {
              point: "Links the factors or reaches a judgement about their relative importance",
              keywords: ["link", "linked", "together", "combined", "most important", "overall", "without", "trigger"],
            },
          ],
          solutions: [
            {
              label: "Argument: the war was decisive",
              steps: [
                "Before 1914 every bill had failed and Asquith blocked reform.",
                "War work changed attitudes and the soldiers' vote problem forced Parliament to rewrite the rules.",
                "So the war turned support in principle into an actual law.",
              ],
            },
            {
              label: "Argument: the long campaign was the real foundation",
              steps: [
                "By 1914 the NUWSS was large and a majority of MPs backed the idea.",
                "The war only provided the timing — the case had already been won.",
                "Without 50 years of campaigning, war work alone would not have produced the vote.",
              ],
            },
          ],
          commonError: "Writing about only one factor, or describing war work without explaining HOW it led to the 1918 Act.",
          difficulty: "challenge",
          guideRef: "why-women-won",
          hints: [
            "Plan three factors: the long campaign, the war, and political necessity.",
            "For each factor, explain HOW it led to the law — don't just describe it.",
            "Why did Parliament *have* to pass a new voting law in 1916–18, even for men?",
            "Finish by linking the factors: which made the others matter?",
          ],
          strategy: "Link the causes",
        },
        {
          kind: "written",
          id: "womens-suffrage-p1-q12",
          question: "How democratic was Britain after the Third Reform Act of 1884? Explain your answer. (5 marks)",
          marks: 5,
          modelAnswer:
            "In some ways Britain was much more democratic than in 1800. After the Reform Acts of 1867 and 1884, around 60% of men could vote, including working-class householders in towns and the countryside. The Ballot Act of 1872 meant voting was secret, so landlords and employers could no longer bully or bribe voters as easily.\n\nHowever, Britain was still far from a democracy. No women could vote in general elections, so about half of adults were excluded completely. Around 40% of men — lodgers, servants and sons living with their parents — still had no vote because they were not householders, while some wealthy men had more than one vote. The House of Lords was unelected and MPs were unpaid until 1911, making it hard for working men to stand.\n\nOverall, Britain was more democratic but only partly so: probably fewer than a third of adults could vote.",
          markScheme: [
            {
              point: "Progress: about 60% of men could vote, including working-class men (1867, 1884)",
              keywords: ["60%", "most men", "working-class", "working class", "1867", "1884", "countryside", "householders"],
            },
            {
              point: "Progress: the secret ballot (1872) reduced bribery and intimidation",
              keywords: ["secret ballot", "1872", "ballot act", "bribery", "intimidation", "landlords", "secret"],
            },
            {
              point: "Limit: no women could vote in general elections",
              keywords: ["women", "no women", "half", "excluded"],
            },
            {
              point: "Limit: many men still excluded / plural voting / unelected Lords / unpaid MPs",
              keywords: ["40%", "not householders", "lodgers", "servants", "plural", "more than one vote", "house of lords", "unpaid", "paid"],
            },
            {
              point: "Reaches a supported judgement",
              keywords: ["partly", "more democratic", "not a democracy", "overall", "judgement", "limited", "far from"],
            },
          ],
          commonError: "Saying Britain was 'a democracy' after 1884 because 'everyone' could vote — no women and around 40% of men still could not.",
          difficulty: "challenge",
          guideRef: "britain-becomes-democratic",
          hints: [
            "Make two lists: what had become more democratic, and what still wasn't.",
            "What did the 1872 Ballot Act change about HOW people voted?",
            "Who was still left out — think about women, and men who were not householders.",
          ],
          strategy: "Spot change and continuity",
        },
      ],
    },
    {
      id: "womens-suffrage-p2",
      title: "Practice Paper 2",
      questions: [
        {
          kind: "short",
          id: "womens-suffrage-p2-q01",
          question: "In which year did Emmeline Pankhurst found the Women's Social and Political Union (WSPU) in Manchester?",
          answer: { type: "number", value: 1903 },
          traps: [
            {
              spec: { type: "number", value: 1897 },
              feedback: "1897 is when the peaceful NUWSS was formed. The Pankhursts' WSPU came six years later.",
            },
            {
              spec: { type: "number", value: 1913 },
              feedback: "1913 was the peak of WSPU militancy (arson, the Cat and Mouse Act, the Derby). The WSPU itself was founded ten years earlier.",
            },
          ],
          solution: [
            "Emmeline Pankhurst founded the WSPU in Manchester in **October 1903**.",
            "Frustrated by decades of slow progress, it promised 'Deeds not words'; militancy began in 1905 when Christabel Pankhurst and Annie Kenney were arrested after heckling a Liberal minister.",
          ],
          difficulty: "warmup",
          guideRef: "suffragettes",
          hints: ["It was early in the 20th century — a couple of years after Queen Victoria died in 1901."],
          strategy: "Put it in chronological order",
        },
        {
          kind: "short",
          id: "womens-suffrage-p2-q02",
          question:
            "In 1838 the Chartists set out their six demands — including votes for all men over 21 and a secret ballot — in a document. What was it called?",
          answer: {
            type: "text",
            accept: ["The People's Charter", "People's Charter", "Peoples Charter", "The Peoples Charter", "the Charter", "Charter"],
            display: "the People's Charter",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Magna Carta", "Magna Charta"] },
              feedback: "Magna Carta (1215) was the charter King John was forced to agree to, limiting royal power. It said nothing about votes. The Chartists named themselves after their own 1838 document.",
            },
          ],
          solution: [
            "The Chartists' demands were set out in the **People's Charter** (1838), which gave the movement its name.",
            "Millions signed petitions supporting it in 1839, 1842 and 1848, but Parliament rejected all three.",
          ],
          difficulty: "warmup",
          guideRef: "britain-becomes-democratic",
          hints: ["The movement was named after the document — what does 'Chartist' come from?"],
          strategy: "Use precise evidence",
        },
        {
          kind: "mcq",
          id: "womens-suffrage-p2-q03",
          question: "Who was the first woman to take her seat as an MP in the House of Commons, in 1919?",
          options: ["Constance Markievicz", "Emmeline Pankhurst", "Millicent Fawcett", "Nancy Astor"],
          answerIndex: 3,
          explanation:
            "**Nancy Astor** won a by-election in Plymouth Sutton in November 1919 and took her seat that December. Constance Markievicz is the tempting answer: she was the first woman *elected*, in December 1918, but as a Sinn Féin MP she refused to take her seat at Westminster. Emmeline Pankhurst and Millicent Fawcett led the campaigns but were never MPs.",
          difficulty: "warmup",
          guideRef: "war-and-the-vote",
          hints: ["Being the first woman *elected* and the first to *take her seat* are two different things."],
          strategy: "Use precise evidence",
        },
        {
          kind: "short",
          id: "womens-suffrage-p2-q04",
          question:
            "In 1869 Emily Davies opened England's first residential college offering university-level education to women. In 1873 it moved to a village just outside Cambridge, which gave the college its name. What is it called?",
          answer: { type: "text", accept: ["Girton", "Girton College"], display: "Girton College" },
          traps: [
            {
              spec: { type: "text", accept: ["Newnham", "Newnham College"] },
              feedback: "Newnham (1871) was the second women's college at Cambridge. Emily Davies's college was founded two years earlier.",
            },
          ],
          solution: [
            "**Girton College** began in 1869 at Hitchin and moved to Girton, near Cambridge, in 1873.",
            "Women could study and sit exams there, but Cambridge did not give women full degrees until 1948 — a sign of how slowly equality came.",
          ],
          difficulty: "core",
          guideRef: "women-in-victorian-britain",
          hints: [
            "It was the first of the Cambridge women's colleges.",
            "Its name begins with G.",
          ],
          strategy: "Use precise evidence",
        },
        {
          kind: "short",
          id: "womens-suffrage-p2-q05",
          question:
            "Which philosopher and MP presented the first mass petition for women's suffrage (about 1,500 signatures) to Parliament in 1866? Give his surname.",
          answer: {
            type: "text",
            accept: ["Mill", "John Stuart Mill", "J.S. Mill", "JS Mill", "J. S. Mill"],
            display: "John Stuart Mill",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Disraeli", "Benjamin Disraeli"] },
              feedback: "Disraeli steered the Conservatives' Second Reform Act through Parliament in 1867. The 1866 petition was presented by a Liberal philosopher-MP who later wrote *The Subjection of Women* (1869).",
            },
          ],
          solution: [
            "**John Stuart Mill**, Liberal MP and philosopher, presented the 1866 petition.",
            "In 1867 he proposed changing the word 'man' to 'person' in the Reform Bill; it was defeated by 196 votes to 73, but it showed women's suffrage was now a serious political issue.",
          ],
          difficulty: "core",
          guideRef: "suffragists",
          hints: [
            "He wrote a famous book, *The Subjection of Women* (1869).",
            "His initials were J. S.",
          ],
          strategy: "Use precise evidence",
        },
        {
          kind: "short",
          id: "womens-suffrage-p2-q06",
          question: "Which 1928 Act gave women the vote on the same terms as men, from the age of 21? Give its usual short name.",
          answer: {
            type: "text",
            accept: [
              "Equal Franchise Act",
              "the Equal Franchise Act",
              "Equal Franchise Act 1928",
              "Representation of the People (Equal Franchise) Act",
              "Representation of the People (Equal Franchise) Act 1928",
            ],
            display: "the Equal Franchise Act (1928)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Representation of the People Act", "Representation of the People Act 1918"] },
              feedback: "Close — that is the usual name of the 1918 Act. The 1928 law's short name stresses that women and men were now treated the same: the ____ Franchise Act.",
            },
          ],
          solution: [
            "The **Equal Franchise Act** (full title: the Representation of the People (Equal Franchise) Act) was passed in 1928.",
            "It gave the vote to all women over 21 on the same terms as men. Emmeline Pankhurst died just weeks before it became law.",
          ],
          difficulty: "core",
          guideRef: "war-and-the-vote",
          hints: [
            "'Franchise' means the right to vote.",
            "What did the 1928 Act make women's voting rights, compared with men's?",
          ],
          strategy: "Use precise evidence",
        },
        {
          kind: "mcq",
          id: "womens-suffrage-p2-q07",
          question:
            "Anti-suffragists often argued that women should not vote because they could not fight to defend the country. Why did the First World War weaken this argument?",
          options: [
            "Women were conscripted into the army from 1916",
            "Women's work in munitions, nursing, transport and farming showed that they also served the nation in wartime",
            "The war ended the idea of separate spheres completely",
            "Women MPs in the wartime coalition voted to declare war",
          ],
          answerIndex: 1,
          explanation:
            "Women's war work on the **home front** — munitions, nursing, transport, the Land Army — showed they served the nation too, so the 'they cannot defend the country' argument lost force. Conscription in 1916 applied only to men. The war did not end separate-spheres thinking completely: many women were pushed out of their jobs after 1918. And there were no women MPs until after the war.",
          difficulty: "core",
          guideRef: "arguments-for-and-against",
          hints: [
            "Which option is actually true?",
            "The argument was about serving the nation — how did women serve it between 1914 and 1918?",
          ],
          strategy: "Consider the counter-argument",
        },
        {
          kind: "written",
          id: "womens-suffrage-p2-q08",
          question:
            "**Source A** — Emmeline Pankhurst, leader of the WSPU, speaking to suffragettes in February 1912, shortly before a mass window-smashing raid in London's West End.\n\n> The argument of the broken pane of glass is the most valuable argument in modern politics.\n\nWhat can you infer from Source A about the WSPU's attitude to militant methods by 1912? (3 marks)",
          marks: 3,
          modelAnswer:
            "Source A suggests that by 1912 the WSPU believed breaking the law was not just acceptable but necessary. Pankhurst calls the 'broken pane of glass' the 'most valuable argument', implying that damaging property achieved more than speeches or petitions. It also suggests deep frustration that peaceful arguments had failed: after the Conciliation Bills were dropped, she believed politicians only responded to pressure they could not ignore. This fits the WSPU motto 'Deeds not words'.",
          markScheme: [
            {
              point: "Inference: the WSPU believed militancy/damaging property was justified, effective or necessary",
              keywords: ["justified", "necessary", "only way", "worked", "effective", "willing", "law-breaking", "breaking the law"],
            },
            {
              point: "Inference: frustration that peaceful words had failed; politicians only respond to pressure",
              keywords: ["frustrated", "frustration", "words had failed", "peaceful", "ignored", "conciliation", "only listen", "pressure", "deeds not words"],
            },
            {
              point: "Supports with detail from the source and/or context",
              keywords: ["broken pane", "glass", "window", "most valuable", "modern politics", "1912", "west end"],
            },
          ],
          commonError: "Simply saying 'she liked breaking windows' — explain what the quotation suggests about WSPU thinking and why.",
          difficulty: "core",
          guideRef: "suffragettes",
          hints: [
            "Why would someone call a broken window an 'argument'?",
            "What had happened to peaceful methods and the Conciliation Bills by 1912?",
            "Link the quotation to the WSPU motto.",
          ],
          strategy: "Make an inference",
        },
        {
          kind: "written",
          id: "womens-suffrage-p2-q09",
          question:
            "**Source B** — a WSPU poster from 1914 (described). It shows a huge, snarling cat, standing for the Liberal government, holding a limp and injured suffragette in its jaws. The text attacks the 'Cat and Mouse Act' passed by the Liberal government and urges electors to vote against the Liberal candidate: 'Keep the Liberal out!'\n\nHow useful is Source B for an enquiry into how the government treated suffragette prisoners? (4 marks)",
          marks: 4,
          modelAnswer:
            "Source B is useful because it refers to a real policy: under the 1913 'Cat and Mouse Act', hunger-striking suffragettes were released when they became weak and re-arrested once they recovered — like a cat playing with a mouse. However, it is WSPU propaganda made to persuade electors to vote against the Liberals, so it is deliberately one-sided and exaggerated: it shows the government as a cruel beast and does not explain the government's reasons, such as not wanting suffragettes to die and become martyrs, or to keep force-feeding them.\n\nIt is very useful for a different purpose: showing how the WSPU presented themselves as victims to win sympathy. To judge the actual treatment of prisoners I would need to cross-reference it with prison records and accounts of force-feeding.",
          markScheme: [
            {
              point: "Uses content with knowledge: the Cat and Mouse Act released weakened hunger strikers and re-arrested them",
              keywords: ["cat and mouse", "released", "re-arrested", "rearrested", "hunger strike", "weak", "1913", "recovered"],
            },
            {
              point: "Provenance: WSPU propaganda made to persuade voters, so one-sided/exaggerated",
              keywords: ["propaganda", "wspu", "purpose", "persuade", "election", "one-sided", "exaggerate", "biased", "vote against"],
            },
            {
              point: "Explains what it IS useful for, e.g. WSPU attitudes and tactics, presenting suffragettes as victims",
              keywords: ["attitudes", "how they felt", "victims", "sympathy", "shows the wspu", "tactics", "useful for"],
            },
            {
              point: "Uses own knowledge of what is missing or to cross-reference (force-feeding, government's reasons, martyrs)",
              keywords: ["force-feeding", "force fed", "force-fed", "martyr", "government's reasons", "cross-reference", "doesn't show", "does not show", "prison records"],
            },
          ],
          commonError: "Treating a poster as a photograph of reality. Ask who made it, when and why — then say what it is useful for.",
          difficulty: "core",
          guideRef: "suffragettes",
          hints: [
            "Who made the poster, and what did they want viewers to do?",
            "What did the Cat and Mouse Act really allow the government to do?",
            "A one-sided source can still be useful — useful for what?",
          ],
          strategy: "Check the provenance (NOP)",
        },
        {
          kind: "written",
          id: "womens-suffrage-p2-q10",
          question: "Explain why the idea of 'separate spheres' made it difficult for women to win the vote in the nineteenth century. (4 marks)",
          marks: 4,
          modelAnswer:
            "'Separate spheres' was the belief that men naturally belonged to the public world of work and politics, while women belonged to the private world of home and family. This made the vote seem unnatural for women: politics was 'men's business', and many argued that women who took part would neglect their homes and children.\n\nThe idea was very hard to challenge because it was so widely accepted — by the Church, by most politicians, by Queen Victoria herself and by many women. It was also built into the law: under coverture a married woman's legal identity and property belonged to her husband, and since the vote depended on property, most women could not qualify anyway.",
          markScheme: [
            {
              point: "Explains the idea: men in the public world (work, politics), women in the private world (home, family)",
              keywords: ["public", "private", "home", "family", "politics", "men", "domestic"],
            },
            {
              point: "Explains why this blocked the vote: politics seen as unnatural for women / they would neglect their families",
              keywords: ["unsuitable", "unnatural", "neglect", "not their place", "proper place", "men's business", "suffer"],
            },
            {
              point: "Explains it was widely accepted, including by many women, so hard to challenge",
              keywords: ["queen victoria", "many women", "widely", "church", "accepted", "everyone", "normal"],
            },
            {
              point: "Links to law/property, e.g. coverture meant wives lacked property needed to vote",
              keywords: ["coverture", "property", "husband", "legal", "law", "qualification"],
            },
          ],
          commonError: "Defining 'separate spheres' but not explaining HOW it made winning the vote harder.",
          difficulty: "core",
          guideRef: "women-in-victorian-britain",
          hints: [
            "Start by explaining which 'sphere' belonged to men and which to women.",
            "Where did politics fit in that picture?",
            "Who believed in separate spheres — only men?",
          ],
          strategy: "Link the causes",
        },
        {
          kind: "written",
          id: "womens-suffrage-p2-q11",
          question: "\"Women won the vote in 1918 mainly because of their war work.\" How far do you agree with this statement? (6 marks)",
          marks: 6,
          modelAnswer:
            "There is strong evidence for the statement. Hundreds of thousands of women worked in munitions factories, while others joined the Land Army, drove buses and nursed the wounded. This undermined the claim that women could not serve the nation, and in 1917 Asquith, a long-time opponent, said women had 'worked out their own salvation' during the war.\n\nHowever, the women who did most war work — young, working-class munitionettes — were mostly under 30 and did not get the vote in 1918, which suggests the vote was not simply a reward. The pre-war campaigns had already won majority support among MPs, and the war gave politicians a way to act without seeming to give in to militancy. The real trigger was political necessity: residency rules meant soldiers would lose their votes, so a new law was needed anyway, and the Speaker's Conference added women.\n\nOverall, I only partly agree. War work changed attitudes, but the vote was won by the combination of fifty years of campaigning and the political need for a new law.",
          markScheme: [
            {
              point: "Supports the statement with precise examples of war work",
              keywords: ["munitions", "munitionettes", "land army", "nurses", "war work", "transport", "factories", "buses"],
            },
            {
              point: "Explains how war work changed attitudes, e.g. Asquith's change of mind in 1917",
              keywords: ["asquith", "changed his mind", "attitudes", "face", "proved", "deserved", "reward", "1917"],
            },
            {
              point: "Challenges: the main war workers (young, working-class) were under 30 and excluded",
              keywords: ["under 30", "young", "working-class", "working class", "didn't get", "did not get", "over 30", "property qualification"],
            },
            {
              point: "Challenges: the pre-war campaigns of the suffragists/suffragettes had built support",
              keywords: ["suffragists", "suffragettes", "nuwss", "wspu", "before the war", "pre-war", "campaign", "majority of mps"],
            },
            {
              point: "Other factor: soldiers' votes/new law needed, Speaker's Conference, coalition, fear of renewed militancy",
              keywords: ["soldiers", "residency", "speaker's conference", "coalition", "lloyd george", "militancy", "new law"],
            },
            {
              point: "Reaches a supported overall judgement on 'mainly'",
              keywords: ["overall", "partly", "to some extent", "most important", "judgement", "i agree", "i disagree", "mainly"],
            },
          ],
          solutions: [
            {
              label: "Argument: war work was the main reason",
              steps: [
                "Before 1914 every bill had failed — the war is what changed.",
                "War work destroyed the 'women cannot serve the nation' argument.",
                "Opponents like Asquith publicly changed their minds because of it in 1917.",
              ],
            },
            {
              label: "Argument: the pre-war campaigns mattered more",
              steps: [
                "By 1914 the NUWSS was huge and most MPs supported women's suffrage in principle.",
                "The young munitionettes did not get the vote, so it was not a 'reward' for war work.",
                "The war only provided the timing for a case already won.",
              ],
            },
            {
              label: "Argument: political necessity was the trigger",
              steps: [
                "Residency rules meant soldiers would lose their votes, so a new law had to be passed.",
                "The Speaker's Conference (1916–17) and the coalition made a compromise possible.",
                "The age limit of 30 shows politicians shaping the law to suit themselves, not rewarding war workers.",
              ],
            },
          ],
          commonError: "Only agreeing, or describing war work without weighing it against other factors and reaching a judgement on 'mainly'.",
          difficulty: "challenge",
          guideRef: "why-women-won",
          hints: [
            "Plan: one paragraph agreeing, one or two disagreeing, then a judgement.",
            "Who did most munitions work — and were they old enough to vote in 1918?",
            "Why did Parliament need a new voting law in 1916–18 anyway?",
            "Your judgement must answer the word 'mainly'.",
          ],
          strategy: "Weigh factors",
        },
        {
          kind: "written",
          id: "womens-suffrage-p2-q12",
          question:
            "Compare the methods of the NUWSS and the WSPU. Which do you think did more to win public support for votes for women before 1914? (5 marks)",
          marks: 5,
          modelAnswer:
            "The NUWSS used peaceful, law-abiding methods: petitions, meetings, lobbying MPs and marches such as the 1907 Mud March and the 1913 Great Pilgrimage. From 1912 its Election Fighting Fund backed Labour candidates. The WSPU, under the motto 'Deeds not words', heckled ministers, chained themselves to railings, smashed windows (1912) and set fire to property (1912–14), and its prisoners went on hunger strike.\n\nThe WSPU won enormous publicity, and force-feeding won some sympathy, but by 1912–14 arson alienated many MPs and members of the public. The NUWSS grew steadily, to over 50,000 members, and its respectable image won support among MPs and the Labour Party.\n\nOverall, I think the NUWSS did more to win lasting public support, though the WSPU's publicity made the issue impossible to ignore — and some people joined the NUWSS because militancy had made them think about the vote.",
          markScheme: [
            {
              point: "Describes NUWSS methods accurately",
              keywords: ["petitions", "meetings", "lobbying", "marches", "great pilgrimage", "mud march", "peaceful", "law-abiding", "election fighting fund"],
            },
            {
              point: "Describes WSPU methods accurately",
              keywords: ["heckling", "window", "arson", "hunger strike", "deeds not words", "militant", "chained", "railings"],
            },
            {
              point: "Explains the effect of NUWSS methods on support",
              keywords: ["membership", "grew", "respectable", "won support", "labour", "mps", "50,000"],
            },
            {
              point: "Explains the effect of WSPU methods on support (publicity vs alienation)",
              keywords: ["publicity", "headlines", "attention", "alienated", "backlash", "turned against", "sympathy", "force-feeding"],
            },
            {
              point: "Reaches a supported judgement on which did more",
              keywords: ["overall", "more effective", "judgement", "i think", "did more", "both"],
            },
          ],
          solutions: [
            {
              label: "Argument: the NUWSS did more",
              steps: [
                "It was far bigger and kept growing up to 1914.",
                "Its law-abiding image won over MPs and the Labour Party.",
                "WSPU arson gave opponents an excuse to say women were unfit to vote.",
              ],
            },
            {
              label: "Argument: the WSPU did more",
              steps: [
                "Before 1903 the issue was often ignored by the press.",
                "Militancy, prison and hunger strikes put votes for women in the headlines.",
                "Publicity drew new members to both organisations.",
              ],
            },
          ],
          commonError: "Describing each group's methods separately without comparing their EFFECTS on public support.",
          difficulty: "challenge",
          guideRef: "suffragists",
          hints: [
            "Make a two-column table of methods first.",
            "For each group, ask: did this win people over, or put them off?",
            "Think about timing — WSPU militancy changed a lot between 1905 and 1914.",
          ],
          strategy: "Compare and contrast",
        },
      ],
    },
  ],

  // ===========================================================================
  // CHALLENGE (8)
  // ===========================================================================
  challenge: [
    {
      kind: "written",
      id: "womens-suffrage-ch-q01",
      question:
        "\"Both the French Revolution and the campaign for women's suffrage in Britain show that democracy is won from below by ordinary people, not given from above by those in power.\" How far do you agree? Use examples from both topics. (6 marks)",
      marks: 6,
      modelAnswer:
        "There is strong evidence that democracy was won from below. In France, crowds stormed the Bastille in 1789 and women marched on Versailles, forcing the king to accept the National Assembly. In Britain, the Chartists, the suffragists' petitions and the suffragettes' militancy kept pressure on Parliament for decades.\n\nHowever, in both countries the final decisions were made from above, by those in power and often for their own reasons. In 1918 an all-male Parliament gave women the vote partly because soldiers' votes forced a new law, and set the age at 30 so that women would not be a majority. In France, the revolutionaries who proclaimed the Rights of Man excluded women entirely: Olympe de Gouges was executed in 1793 and French women did not vote until 1944 — pressure from below did not guarantee rights for everyone.\n\nOverall, I partly agree: pressure from below was essential to force change, but those above decided how far it went and who was included.",
      markScheme: [
        {
          point: "Evidence of pressure from below in France",
          keywords: ["bastille", "sans-culottes", "march on versailles", "third estate", "tennis court oath", "crowd", "peasants", "great fear"],
        },
        {
          point: "Evidence of pressure from below in Britain",
          keywords: ["chartists", "peterloo", "petition", "nuwss", "wspu", "suffragettes", "suffragists", "campaign", "marches", "militancy"],
        },
        {
          point: "Evidence that change came from above (Parliament, politicians, assemblies)",
          keywords: ["parliament", "politicians", "government", "speaker's conference", "lloyd george", "asquith", "national assembly", "reform act", "decided"],
        },
        {
          point: "Explains the limits, e.g. French revolutionaries excluded women; 1918 Act shaped by politicians' interests",
          keywords: ["excluded", "olympe de gouges", "soldiers", "self-interest", "all-male", "property qualification", "over 30", "1944", "majority"],
        },
        {
          point: "Explains how the two interacted — pressure from below pushed those above to act",
          keywords: ["pressure", "forced", "fear", "made them", "combination", "both", "interaction", "pushed"],
        },
        {
          point: "Reaches a supported overall judgement",
          keywords: ["overall", "i agree", "i disagree", "to a large extent", "partly", "judgement"],
        },
      ],
      solutions: [
        {
          label: "Argument: democracy was won from below",
          steps: [
            "The Bastille, the march on Versailles and the sans-culottes drove the French Revolution forward.",
            "In Britain, 50+ years of petitions, marches and militancy made votes for women impossible to ignore.",
            "Those in power only gave way when pressure became too great.",
          ],
        },
        {
          label: "Argument: democracy was given from above",
          steps: [
            "In 1918 Parliament acted mainly because of the soldiers' vote problem.",
            "Politicians chose the terms — women over 30 with property — to protect their own interests.",
            "In France the leaders decided women would not be citizens, despite women's activism.",
          ],
        },
        {
          label: "Argument: it was an interaction",
          steps: [
            "Pressure from below created the demand; crises (revolution, war) created the moment.",
            "Those in power then shaped the reform to limit how far it went.",
          ],
        },
      ],
      commonError: "Writing two separate stories (France, then Britain) without comparing them or answering 'how far'.",
      difficulty: "challenge",
      guideRef: "why-women-won",
      hints: [
        "Make a grid: France / Britain × 'from below' / 'from above'.",
        "Who actually passed the 1918 Act — and what were their own reasons?",
        "Did pressure from below in France bring rights for women? Think of Olympe de Gouges.",
        "Your judgement could argue the two worked together — but say which mattered more.",
      ],
      strategy: "Compare and contrast",
    },
    {
      kind: "written",
      id: "womens-suffrage-ch-q02",
      question:
        "In the 1790s, Olympe de Gouges in France (1791) and Mary Wollstonecraft in Britain (1792) both argued that the new ideas about 'the rights of man' should apply to women too. Yet British women did not vote in national elections until 1918. Explain why it took so long for these ideas to win women the vote in Britain. (5 marks)",
      marks: 5,
      modelAnswer:
        "First, the French Revolution made Britain's rulers afraid of radical ideas. After the Terror, demands for rights were linked with violence and revolution, so the government repressed reformers — as at Peterloo in 1819 — and even men had to wait.\n\nSecond, the ideology of separate spheres taught that women belonged in the home, not in politics. This was accepted by most men and many women, including Queen Victoria, so the idea of women voting seemed unnatural.\n\nThird, the law held women back. Under coverture a wife's property belonged to her husband, and since the vote depended on property, most women could not qualify even in principle.\n\nFourth, reform came step by step for men first (1832, 1867, 1884), and many politicians saw that as the priority.\n\nThe most important reason was separate spheres, because deep attitudes changed much more slowly than laws — it took decades of education, work and campaigning, and finally a world war, to shift them.",
      markScheme: [
        {
          point: "Fear of revolution after 1789/the Terror made reform seem dangerous; repression (e.g. Peterloo)",
          keywords: ["fear", "revolution", "terror", "peterloo", "radical", "violence", "dangerous", "guillotine", "repression"],
        },
        {
          point: "Separate spheres ideology: women's place in the home, not politics",
          keywords: ["separate spheres", "home", "domestic", "private", "public", "wife", "mother"],
        },
        {
          point: "Women's legal position: coverture and the property basis of the vote",
          keywords: ["coverture", "property", "husband", "legal", "married women's property", "law"],
        },
        {
          point: "Reform came gradually and for men first (1832, 1867, 1884)",
          keywords: ["men first", "1832", "1867", "1884", "most men", "reform act", "chartists", "even men", "gradual"],
        },
        {
          point: "Explains which mattered most or how the causes linked",
          keywords: ["most important", "attitudes", "slowly", "overall", "took time", "linked", "because"],
        },
      ],
      commonError: "Assuming that once an idea is written down (1791–92), change follows quickly. Explain what blocked it.",
      difficulty: "challenge",
      guideRef: "women-in-victorian-britain",
      hints: [
        "How did British rulers react to the French Revolution — welcome or fear?",
        "What did most Victorians believe was a woman's proper 'sphere'?",
        "The vote depended on property. Who owned a married woman's property before 1882?",
        "Even most men could not vote until 1884 — what does that tell you about the pace of change?",
      ],
      strategy: "Long-term vs short-term causes",
    },
    {
      kind: "short",
      id: "womens-suffrage-ch-q03",
      question:
        "Olympe de Gouges demanded equal political rights for French women in 1791. In which year were French women finally given the right to vote?",
      answer: { type: "number", value: 1944 },
      traps: [
        {
          spec: { type: "number", value: 1945 },
          feedback: "1945 is when French women first actually voted. The right itself was granted by decree the year before.",
        },
        {
          spec: { type: "number", value: 1918 },
          feedback: "1918 is when some British women won the vote. France was much later — after another world war.",
        },
      ],
      solution: [
        "French women were given the vote by General de Gaulle's provisional government in **1944**, as France was being liberated in the Second World War.",
        "They first voted in 1945 — more than 150 years after de Gouges's *Declaration of the Rights of Woman*, and long after British women. The country of the 'Rights of Man' was slow to include women.",
      ],
      commonError: "Assuming revolutionary France gave women the vote early. The Revolution excluded women, and de Gouges was executed in 1793.",
      difficulty: "challenge",
      guideRef: "why-women-won",
      hints: [
        "It was later than Britain — after another world war.",
        "Think of France being liberated from German occupation.",
        "It was the year of D-Day.",
      ],
      strategy: "Compare and contrast",
    },
    {
      kind: "written",
      id: "womens-suffrage-ch-q04",
      question:
        "Some historians (for example Martin Pugh) argue that the patient work of the suffragists mattered more than suffragette militancy, and that some women would probably have won the vote around 1918 even if there had been no war. How convincing is this interpretation? (5 marks)",
      marks: 5,
      modelAnswer:
        "There is evidence to support this interpretation. By 1914 the NUWSS was much larger than the WSPU, and its Election Fighting Fund (1912) had won the Labour Party's backing. A majority of MPs supported votes for women in principle. Meanwhile, militancy gave opponents an excuse: the 1912 Conciliation Bill was narrowly defeated soon after the window-smashing raids.\n\nHowever, the interpretation has weaknesses. In 1914 there was still no law, and Asquith, the Prime Minister, continued to block reform; we cannot know he would have given way without the war. The war changed politics dramatically: the need to give soldiers the vote, a coalition government and women's war work all made the 1918 Act possible, and Asquith himself credited the war.\n\nOverall, the interpretation is convincing about the suffragists' importance, but less convincing about the counterfactual: it is impossible to prove the vote would have come by 1918 without the war.",
      markScheme: [
        {
          point: "Supports the interpretation with evidence of NUWSS strength (size, Labour alliance, majority of MPs)",
          keywords: ["nuwss", "election fighting fund", "labour", "membership", "larger", "great pilgrimage", "majority of mps", "support"],
        },
        {
          point: "Supports with evidence that militancy harmed the cause (e.g. 1912 Conciliation Bill)",
          keywords: ["militancy", "violence", "arson", "alienated", "harmed", "excuse", "turned against", "1912", "window"],
        },
        {
          point: "Challenges: by 1914 there was still no law and Asquith blocked reform",
          keywords: ["asquith", "failed", "no law", "conciliation", "blocked", "still", "by 1914"],
        },
        {
          point: "Challenges: the war transformed politics (soldiers' votes, coalition, war work, Asquith's change)",
          keywords: ["war", "soldiers", "1916", "1917", "coalition", "speaker's conference", "war work"],
        },
        {
          point: "Judges how convincing, recognising the counterfactual cannot be proved",
          keywords: ["convincing", "partly", "overall", "unconvincing", "judgement", "can't know", "cannot know", "impossible to prove", "counterfactual"],
        },
      ],
      solutions: [
        {
          label: "Argument: convincing",
          steps: [
            "The NUWSS was the larger, growing movement with Labour Party support.",
            "Most MPs already backed the principle; militancy only delayed it.",
            "An election was due by 1915 and suffrage would have been a major issue.",
          ],
        },
        {
          label: "Argument: unconvincing",
          steps: [
            "Every bill had failed by 1914 and Asquith was still opposed.",
            "The war created the soldiers' vote problem that forced a new law.",
            "The war also gave opponents a face-saving reason to change their minds.",
          ],
        },
      ],
      commonError: "Agreeing or disagreeing without testing the interpretation against evidence — or forgetting that a 'what if' can never be proved.",
      difficulty: "challenge",
      guideRef: "suffragists",
      hints: [
        "Split the interpretation into two claims: (1) suffragists mattered more; (2) the vote would have come without war.",
        "What evidence shows NUWSS strength by 1914? What shows militancy backfiring?",
        "What still stood in the way in 1914 — and who was Prime Minister?",
        "Can a counterfactual ever be proved? Say so in your judgement.",
      ],
      strategy: "Consider the counter-argument",
    },
    {
      kind: "written",
      id: "womens-suffrage-ch-q05",
      question:
        "Spot the flaws. A student writes:\n\n> The suffragettes were violent from the start in 1903, so the government refused to give any women the vote until the suffragists won it in 1918 by their peaceful campaign alone.\n\nIdentify and explain TWO flaws in this argument, using precise evidence. (4 marks)",
      marks: 4,
      modelAnswer:
        "The first flaw is chronological: the suffragettes were not violent from the start. From 1903 to 1905 the WSPU held meetings like other groups; militancy began with heckling and arrests in 1905, window smashing came in 1908 and on a mass scale in 1912, and arson only in 1912–14. Militancy escalated gradually, partly because peaceful methods seemed to be failing.\n\nThe second flaw is that it gives one cause ('alone'). The 1918 Act was not won by the suffragists alone: the war changed attitudes through women's war work, and the need to give soldiers the vote forced Parliament to pass a new law. The suffragettes had also suspended their campaign in 1914. The government's refusal before 1914 was also about party politics and Asquith's personal opposition, not only violence.",
      markScheme: [
        {
          point: "Identifies flaw 1: the suffragettes were not violent from the start",
          keywords: ["not violent", "from the start", "1903", "escalated", "gradually", "later", "at first"],
        },
        {
          point: "Supports with chronology of militancy (1905 heckling, 1908/1912 windows, 1912–14 arson)",
          keywords: ["1905", "heckling", "window", "1908", "1912", "arson", "1913", "meetings"],
        },
        {
          point: "Identifies flaw 2: single-cause explanation ('alone') ignores other factors",
          keywords: ["alone", "only", "one cause", "other factors", "single", "ignores"],
        },
        {
          point: "Supports with evidence of other factors (war work, soldiers' votes, Asquith, party politics)",
          keywords: ["war", "war work", "soldiers", "munitions", "asquith", "party", "speaker's conference", "suspended", "1914"],
        },
      ],
      commonError: "Just saying 'the student is wrong' — name each flaw, then prove it with dates and evidence.",
      difficulty: "challenge",
      guideRef: "suffragettes",
      hints: [
        "Check each claim against your timeline. When did WSPU window smashing and arson actually begin?",
        "Look for words like 'alone', 'only' and 'from the start' — they often signal a flaw.",
        "What else happened between 1914 and 1918 that helped women win the vote?",
      ],
      strategy: "Avoid hindsight",
    },
    {
      kind: "written",
      id: "womens-suffrage-ch-q06",
      question: "Explain why party-political calculations, as well as beliefs about women, delayed votes for women before 1914. (5 marks)",
      marks: 5,
      modelAnswer:
        "Party self-interest was a major obstacle. Many Liberals feared that giving the vote to women on the same property terms as men would mainly enfranchise better-off women who might vote Conservative, handing their rivals an advantage. Some Conservatives, on the other hand, worried that once any women had the vote it would lead to votes for all adults, which could help Labour.\n\nThe Prime Minister mattered too. Asquith (PM 1908–16) personally opposed women's suffrage and controlled parliamentary time; the Conciliation Bills of 1910–12 were shelved or defeated, so a majority of MPs supporting the idea in principle was not enough. Parliament was also busy with other crises — the battle with the House of Lords, Irish Home Rule — so suffrage was pushed aside.\n\nThese calculations meant that although many MPs agreed with women's suffrage in principle, no government would risk passing it until the war changed the political situation.",
      markScheme: [
        {
          point: "Liberals feared a property-based female franchise would help the Conservatives",
          keywords: ["liberal", "liberals", "conservative", "conservatives", "property", "wealthy", "better-off", "middle-class", "advantage"],
        },
        {
          point: "Fears that it would lead to adult suffrage/help Labour or radicals",
          keywords: ["labour", "working-class", "adult suffrage", "all adults", "all women", "socialist", "radical"],
        },
        {
          point: "Asquith's opposition and control of parliamentary time; failure of the Conciliation Bills",
          keywords: ["asquith", "prime minister", "conciliation", "parliamentary time", "government bill", "blocked", "shelved"],
        },
        {
          point: "Other political priorities pushed it aside (Lords crisis, Irish Home Rule)",
          keywords: ["ireland", "irish", "home rule", "house of lords", "parliament act", "budget", "other issues", "priorities"],
        },
        {
          point: "Explains the link: majority support in principle but no party would risk it",
          keywords: ["majority", "in principle", "no party", "risk", "self-interest", "most important", "overall"],
        },
      ],
      commonError: "Writing only about beliefs ('women are too emotional') and ignoring what this question asks: party advantage.",
      difficulty: "challenge",
      guideRef: "arguments-for-and-against",
      hints: [
        "Ask 'who benefited?' — which women would have got the vote on the same property terms as men, and how might they vote?",
        "Why could a supportive majority of MPs still fail to pass a law?",
        "What other big political crises filled Parliament's time in 1909–14?",
      ],
      strategy: "Think about who benefited",
    },
    {
      kind: "short",
      id: "womens-suffrage-ch-q07",
      question:
        "By 1918, most of the Chartists' six points had been achieved — for example the secret ballot (1872) and payment of MPs (1911). Which ONE of the six points has never been adopted in Britain?",
      answer: {
        type: "text",
        accept: [
          "annual parliaments",
          "annual parliament",
          "annual elections",
          "annual general elections",
          "yearly elections",
          "yearly parliaments",
          "elections every year",
          "a general election every year",
          "an election every year",
        ],
        display: "annual parliaments (a general election every year)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["secret ballot", "the secret ballot", "ballot", "voting by ballot"] },
          feedback: "The secret ballot came in with the Ballot Act of 1872 — the question even mentions it. Look for a point about how OFTEN elections are held.",
        },
        {
          spec: { type: "text", accept: ["payment of MPs", "paying MPs", "pay for MPs", "MPs paid"] },
          feedback: "MPs have been paid since 1911. Think about how often the Chartists wanted general elections.",
        },
      ],
      solution: [
        "The six points: votes for all men over 21; the secret ballot; no property qualification for MPs; payment of MPs; equal-sized constituencies; **annual parliaments**.",
        "The property qualification for MPs went in 1858, the secret ballot in 1872, payment of MPs in 1911 and votes for all men over 21 in 1918; constituencies were made far more equal in 1885 and 1918.",
        "Only **annual parliaments** (a general election every year) never happened — a parliament can last up to five years today.",
      ],
      commonError: "Thinking the Chartists 'failed' completely — most of their demands became law, just decades later.",
      difficulty: "challenge",
      guideRef: "britain-becomes-democratic",
      hints: [
        "List all six points first.",
        "Put a date next to each one you know: Ballot Act 1872, MPs paid 1911, all men 21+ in 1918…",
        "How often are UK general elections held today?",
      ],
      strategy: "Spot change and continuity",
    },
    {
      kind: "written",
      id: "womens-suffrage-ch-q08",
      question:
        "\"From 1789 to 1928, democracy developed through steady progress.\" How far do you agree? Use examples from France and Britain. (6 marks)",
      marks: 6,
      modelAnswer:
        "There was certainly progress. The Declaration of the Rights of Man (1789) proclaimed that sovereignty belonged to the nation, and in Britain the Reform Acts of 1832, 1867 and 1884, the Ballot Act (1872) and the Acts of 1918 and 1928 widened the vote until all adults could vote.\n\nBut the progress was not steady. In France, near-universal male suffrage in 1792 was followed by the Terror, property qualifications returned in 1795, and Napoleon crowned himself emperor in 1804 — democracy went backwards. In Britain, Peterloo (1819) and the rejection of the Chartist petitions show reform was resisted. Big changes often came suddenly, in crises: revolution in 1789–92 and world war in 1914–18.\n\nThere was also strong continuity: women were excluded throughout the French Revolution and did not vote in France until 1944, while British women waited until 1918, and then only over 30.\n\nOverall, I disagree. Democracy did develop, but unevenly, through struggle and crisis, with setbacks along the way.",
      markScheme: [
        {
          point: "Evidence of progress in both countries",
          keywords: ["1789", "rights of man", "1832", "1867", "1884", "1872", "1918", "1928", "progress", "more people"],
        },
        {
          point: "Evidence of setbacks or reversals (Terror, 1795, Napoleon, Peterloo, Chartists rejected)",
          keywords: ["terror", "napoleon", "emperor", "1795", "peterloo", "chartists", "rejected", "setback", "backwards"],
        },
        {
          point: "Shows change came in sudden leaps driven by crises (revolution, war), not steadily",
          keywords: ["sudden", "war", "crisis", "jump", "leap", "uneven", "revolution"],
        },
        {
          point: "Identifies continuity, e.g. long exclusion of women (France 1944; Britain over-30 limit)",
          keywords: ["continuity", "excluded", "women", "1944", "over 30", "still", "de gouges"],
        },
        {
          point: "Explains that progress required struggle and campaigning, not inevitability",
          keywords: ["struggle", "campaign", "fought", "not automatic", "inevitable", "pressure", "resisted"],
        },
        {
          point: "Reaches a supported judgement on 'steady'",
          keywords: ["overall", "i disagree", "i agree", "partly", "uneven", "judgement", "not steady"],
        },
      ],
      solutions: [
        {
          label: "Argument: progress was real and lasting",
          steps: [
            "Each British Reform Act widened the vote and none was reversed.",
            "By 1928 every adult in Britain could vote — an enormous change since 1800.",
            "Even France's setbacks did not stop the ideas of 1789 spreading.",
          ],
        },
        {
          label: "Argument: progress was uneven, not steady",
          steps: [
            "France swung from revolution to Terror to an emperor within 15 years.",
            "Britain's reforms came in bursts, often after crises or pressure.",
            "Women were excluded for most of the period, so 'steady progress' ignores half the population.",
          ],
        },
      ],
      commonError: "Using hindsight to tell the story as inevitable — focus on the word 'steady' and look for setbacks and sudden leaps.",
      difficulty: "challenge",
      guideRef: "why-women-won",
      hints: [
        "Focus on the word 'steady': was progress smooth, or did it jump and slip back?",
        "What happened to French democracy between 1792 and 1804?",
        "Which group stayed excluded for most of this period in both countries?",
        "Decide your judgement first, then choose evidence that tests it.",
      ],
      strategy: "Spot change and continuity",
    },
  ],
};
