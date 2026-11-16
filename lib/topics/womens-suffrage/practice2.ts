import type { Paper } from "../../types.ts";

export const morePapers: Paper[] = [
  // ===========================================================================
  // PRACTICE PAPER 3
  // ===========================================================================
  {
    id: "womens-suffrage-p3",
    title: "Practice Paper 3",
    questions: [
      {
        kind: "short",
        id: "womens-suffrage-p3-q01",
        question:
          "In which year did Parliament pass the Prisoners (Temporary Discharge for Ill-Health) Act — better known as the 'Cat and Mouse Act'?",
        answer: { type: "number", value: 1913 },
        traps: [
          {
            spec: { type: "number", value: 1909 },
            feedback: "1909 is when suffragette hunger strikes — and the force-feeding used against them — began. The government's new law came four years later.",
          },
          {
            spec: { type: "number", value: 1918 },
            feedback: "1918 is the Representation of the People Act. The Cat and Mouse Act came before the war, at the height of militancy.",
          },
        ],
        solution: [
          "The 'Cat and Mouse Act' was passed in **April 1913**.",
          "It let the government release hunger strikers when they became dangerously weak, then re-arrest them once they recovered — so that no suffragette would die in prison and become a martyr.",
        ],
        difficulty: "warmup",
        guideRef: "suffragettes",
        hints: ["It came at the height of WSPU militancy, a few years after hunger strikes began in 1909 — but before the war."],
        strategy: "Put it in chronological order",
      },
      {
        kind: "short",
        id: "womens-suffrage-p3-q02",
        question:
          "Before 1832, what name was given to a constituency that still elected MPs even though hardly anyone lived there (Old Sarum was the most famous example)?",
        answer: {
          type: "text",
          accept: ["rotten borough", "rotten boroughs", "a rotten borough"],
          display: "a rotten borough",
        },
        traps: [
          {
            spec: { type: "text", accept: ["pocket borough", "pocket boroughs", "a pocket borough"] },
            feedback: "A pocket borough was one controlled by a powerful landowner — 'in his pocket'. The name for a borough with almost no inhabitants was different.",
          },
        ],
        solution: [
          "It was called a **rotten borough** — the town had 'rotted' away, but its right to elect MPs remained.",
          "Meanwhile big industrial towns such as Manchester had no MP of their own. The Great Reform Act of 1832 abolished most rotten boroughs.",
        ],
        difficulty: "warmup",
        guideRef: "britain-becomes-democratic",
        hints: ["The name was an insult: think about what had happened to the town itself over the centuries."],
        strategy: "Use precise evidence",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-p3-q03",
        question:
          "Which of Emmeline Pankhurst's daughters campaigned among working-class women in London's East End, wanted votes for all adults, and was expelled from the WSPU in 1914?",
        options: ["Sylvia Pankhurst", "Christabel Pankhurst", "Annie Kenney", "Millicent Fawcett"],
        answerIndex: 0,
        explanation:
          "**Sylvia Pankhurst** built the East London Federation of Suffragettes among working-class women and wanted the vote for all adults, not just better-off women; she was expelled from the WSPU in early 1914. Christabel is the tempting answer, but she stayed at the heart of the WSPU, directing militancy from Paris (1912–14) and focusing on votes for women on the same terms as men. Annie Kenney was a working-class WSPU organiser but not a Pankhurst daughter, and Millicent Fawcett led the NUWSS.",
        difficulty: "warmup",
        guideRef: "suffragettes",
        hints: ["Two of the options are not Pankhursts at all. Which of the two daughters broke with her mother?"],
        strategy: "Use precise evidence",
      },
      {
        kind: "short",
        id: "womens-suffrage-p3-q04",
        question:
          "In 1906, which country became the first in Europe to give women the vote in national elections — and in 1907 elected the world's first women MPs?",
        answer: { type: "text", accept: ["Finland", "Grand Duchy of Finland"], display: "Finland" },
        traps: [
          {
            spec: { type: "text", accept: ["New Zealand"] },
            feedback: "New Zealand (1893) was the first self-governing country in the world to give women the vote — but it is not in Europe.",
          },
          {
            spec: { type: "text", accept: ["Norway"] },
            feedback: "Norway followed in 1913. The first European country was its neighbour, then part of the Russian Empire.",
          },
        ],
        solution: [
          "**Finland** gave women the vote in 1906, and 19 women were elected to its parliament in 1907.",
          "British suffragists used examples like New Zealand (1893), Australia (1902) and Finland (1906) to show that votes for women worked and Britain was falling behind.",
        ],
        difficulty: "core",
        guideRef: "arguments-for-and-against",
        hints: [
          "It is a Nordic country that was then part of the Russian Empire.",
          "Its capital is Helsinki.",
        ],
        strategy: "Use precise evidence",
      },
      {
        kind: "short",
        id: "womens-suffrage-p3-q05",
        question:
          "From 1870, women could vote for — and be elected to — the local bodies that ran the new elementary schools in England and Wales. What were these bodies called?",
        answer: { type: "text", accept: ["school boards", "school board", "the school boards"], display: "school boards" },
        traps: [
          {
            spec: { type: "text", accept: ["Parliament", "House of Commons", "the House of Commons"] },
            feedback: "Women could not be elected to Parliament until after a new law in 1918. These were local bodies created by the 1870 Education Act.",
          },
        ],
        solution: [
          "The 1870 Education Act created elected **school boards** to run elementary schools, and women could vote for them and serve on them.",
          "Many women were elected, which gave suffragists strong evidence that women could handle public responsibilities.",
        ],
        difficulty: "core",
        guideRef: "women-in-victorian-britain",
        hints: [
          "They were created by the 1870 Education Act.",
          "The name combines what they ran with a word meaning a committee.",
        ],
        strategy: "Use precise evidence",
      },
      {
        kind: "short",
        id: "womens-suffrage-p3-q06",
        question: "What nickname was given to the women who worked in First World War factories making shells and explosives?",
        answer: {
          type: "text",
          accept: ["munitionettes", "munitionette", "the munitionettes", "munitions workers", "munition workers", "canaries"],
          display: "munitionettes",
        },
        traps: [
          {
            spec: { type: "text", accept: ["suffragettes", "suffragette"] },
            feedback: "Similar ending! But suffragettes were WSPU militants. The wartime factory workers' nickname came from the word 'munitions'.",
          },
        ],
        solution: [
          "They were called **munitionettes**; some were also nicknamed 'canaries' because handling TNT turned their skin yellow.",
          "Hundreds of thousands of women did this dangerous work — but most were young and working-class, so many were too young to vote in 1918.",
        ],
        difficulty: "core",
        guideRef: "war-and-the-vote",
        hints: [
          "The work was making munitions.",
          "Add the same ending used in 'suffragettes'.",
        ],
        strategy: "Use precise evidence",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-p3-q07",
        question: "What did the **Third Reform Act of 1884** do?",
        options: [
          "It introduced the secret ballot so that landlords could not see how tenants voted",
          "It gave the vote to women over 30 who met a property qualification",
          "It extended the vote to male householders in the countryside, so that around 60% of men could vote",
          "It abolished rotten boroughs for the first time",
        ],
        answerIndex: 2,
        explanation:
          "The 1884 Act gave rural male householders, such as farm labourers, the same voting rights that town householders had gained in **1867**, so around 60% of men could vote. The secret ballot is a tempting answer, but that came earlier with the **Ballot Act of 1872**. Most rotten boroughs were abolished in 1832, and women over 30 waited until 1918.",
        difficulty: "core",
        guideRef: "britain-becomes-democratic",
        hints: [
          "1867 gave the vote to working men in the towns. Who was left out?",
          "Match the other options to their real dates: 1832, 1872, 1918.",
        ],
        strategy: "Put it in chronological order",
      },
      {
        kind: "written",
        id: "womens-suffrage-p3-q08",
        question:
          "**Source A** — a description of the NUWSS Great Pilgrimage, summer 1913, written for this exercise and based on reports at the time.\n\n> Marchers walked for up to six weeks along routes from across England and Wales towards London. They wore sashes and badges in the NUWSS colours of red, white and green, and many carried banners describing themselves as law-abiding and non-militant. In each town they held open-air meetings. On 26 July 1913 the routes met for a great rally in Hyde Park, London.\n\nWhat can you infer from Source A about how the NUWSS wanted the public to see the suffragists in 1913? (3 marks)",
        marks: 3,
        modelAnswer:
          "Source A suggests that the NUWSS wanted to be seen as respectable and law-abiding — and clearly different from the militant suffragettes. Their banners called them 'non-militant' at a time, in 1913, when WSPU arson was making headlines, so they wanted the public not to judge all campaigners by the suffragettes. It also suggests they wanted to show that support for votes for women was nationwide and came from ordinary people: marchers came from all over England and Wales and held meetings in every town along the way, rather than only protesting in London.",
        markScheme: [
          {
            point: "Inference: they wanted to appear respectable and law-abiding, distinct from the militant WSPU",
            keywords: ["respectable", "law-abiding", "different", "not militant", "not like the suffragettes", "peaceful", "distance"],
          },
          {
            point: "Inference: they wanted to show support was nationwide and from ordinary people",
            keywords: ["nationwide", "across the country", "whole country", "support", "everywhere", "ordinary", "towns", "national"],
          },
          {
            point: "Supports with detail from the source and context (e.g. 1913 militancy)",
            keywords: ["banners", "non-militant", "sashes", "red, white and green", "meetings", "hyde park", "1913", "arson"],
          },
        ],
        commonError: "Retelling what happened on the march instead of saying what it suggests about the NUWSS's aims and image.",
        difficulty: "core",
        guideRef: "suffragists",
        hints: [
          "Ask: what message were the banners sending — and who were they being compared with?",
          "What was the WSPU doing in 1913?",
          "Why march from all over the country instead of holding one protest in London?",
        ],
        strategy: "Make an inference",
      },
      {
        kind: "written",
        id: "womens-suffrage-p3-q09",
        question:
          "**Source B** — from 'An Appeal Against Female Suffrage', published in the magazine *The Nineteenth Century* in June 1889 and signed by over 100 well-known women, including the novelist Mary Augusta Ward (adapted).\n\n> We believe that the emancipating process has now reached the limits fixed by the physical constitution of women, and by the fundamental difference which must always exist between their main occupations and those of men.\n\nHow useful is Source B for an enquiry into why some people opposed votes for women? (4 marks)",
        marks: 4,
        modelAnswer:
          "Source B is useful because it shows a key argument against the vote: that women were naturally different from men, physically and in their 'main occupations', so there were 'limits' to how far their rights should go. This is the separate-spheres idea in the opponents' own words.\n\nIts provenance makes it especially valuable: it was written at the time and signed by over 100 prominent women, which proves that opposition did not come only from men. However, it was written to persuade, and its signatories were wealthy, educated women, so they may not be typical. It also dates from 1889, before the suffragette campaign, so it cannot show later reasons for opposition such as reaction against militancy, the 'physical force' argument about war, or party-political calculations. So it is useful for one important reason, but must be cross-referenced with other sources such as the Anti-Suffrage League's material after 1908.",
        markScheme: [
          {
            point: "Uses the content: women seen as naturally different/limited — the separate-spheres argument",
            keywords: ["physical", "different", "nature", "natural", "separate spheres", "occupations", "limits"],
          },
          {
            point: "Provenance strength: contemporary, signed by prominent women — opposition was not only male",
            keywords: ["women", "signed", "not just men", "not only men", "contemporary", "1889", "prominent", "influential"],
          },
          {
            point: "Provenance limitation: written to persuade; wealthy, educated signatories may not be typical",
            keywords: ["persuade", "purpose", "wealthy", "upper-class", "educated", "typical", "one-sided", "rich"],
          },
          {
            point: "Identifies what is missing or needs cross-referencing (militancy, physical force, party politics, 1908 League)",
            keywords: ["party", "militancy", "war", "physical force", "anti-suffrage league", "1908", "other reasons", "doesn't show", "does not show", "cross-reference"],
          },
        ],
        commonError: "Assuming every anti-suffragist was a man — this source is powerful evidence that many women opposed the vote too.",
        difficulty: "core",
        guideRef: "arguments-for-and-against",
        hints: [
          "What reason for opposing the vote does the source give?",
          "Who signed it — and why is that surprising and useful?",
          "It is from 1889. What reasons for opposition came later that it cannot show?",
        ],
        strategy: "Check the provenance (NOP)",
      },
      {
        kind: "written",
        id: "womens-suffrage-p3-q10",
        question: "Explain why most suffrage campaigning was suspended when the First World War began in 1914. (4 marks)",
        marks: 4,
        modelAnswer:
          "The main reason was patriotism. Leaders such as Emmeline Pankhurst and Millicent Fawcett believed the nation's survival had to come first, so the WSPU stopped militancy and backed the war effort, while the NUWSS turned to relief work such as supporting the Scottish Women's Hospitals.\n\nIt was also a strategic choice: continuing to protest in wartime would have been very unpopular, whereas supporting the war would show women's loyalty and might earn the vote afterwards. The government helped by releasing suffragette prisoners in an amnesty in August 1914.\n\nHowever, not everyone agreed. Sylvia Pankhurst opposed the war and kept campaigning in the East End, and the NUWSS split in 1915 when some pacifist members left — so the suspension was widespread but not total.",
        markScheme: [
          {
            point: "Patriotism: leaders believed the nation must come first",
            keywords: ["patriot", "patriotic", "patriotism", "nation", "country first", "support the war", "duty"],
          },
          {
            point: "Strategy: supporting the war would show loyalty and could earn the vote; protest would be unpopular",
            keywords: ["show", "prove", "loyal", "loyalty", "earn", "reward", "unpopular", "public opinion"],
          },
          {
            point: "The government's amnesty for suffragette prisoners (August 1914)",
            keywords: ["amnesty", "released", "prisoners", "august 1914", "release"],
          },
          {
            point: "Recognises the suspension was not total (Sylvia Pankhurst, pacifists, NUWSS split, relief work)",
            keywords: ["sylvia", "pacifist", "split", "not all", "not everyone", "relief", "hospitals", "scottish women's hospitals"],
          },
        ],
        commonError: "Saying women 'gave up' wanting the vote in 1914 — campaigning was paused, not abandoned.",
        difficulty: "core",
        guideRef: "war-and-the-vote",
        hints: [
          "How did most people in Britain feel about the war in August 1914?",
          "How might supporting the war help the cause later?",
          "Did EVERY suffrage campaigner stop? Think about Sylvia Pankhurst.",
        ],
        strategy: "Think about purpose",
      },
      {
        kind: "written",
        id: "womens-suffrage-p3-q11",
        question: "Explain the most important changes AND continuities in who could vote in Britain between 1832 and 1928. (5 marks)",
        marks: 5,
        modelAnswer:
          "The biggest change was the steady widening of the male electorate. The 1832 Act gave the vote to middle-class men, 1867 to working men in the towns and 1884 to working men in the countryside, until in 1918 all men over 21 could vote. For women, the change came later but faster: women over 30 with a property qualification in 1918, then all women over 21 on equal terms in 1928. How people voted changed too: the Ballot Act of 1872 made voting secret.\n\nThere were also important continuities. Until 1918 the vote depended on property, so wealth decided who had a say for almost a century. Every change was decided by an all-male, mostly wealthy Parliament, and some men kept plural votes (for a business or university) until 1948.\n\nThe most important change was 1918, because it tripled the electorate and broke the link between voting and property for men while bringing women in for the first time.",
        markScheme: [
          {
            point: "Change: widening of the male vote (1832, 1867, 1884, all men 21+ in 1918)",
            keywords: ["1832", "1867", "1884", "all men", "working-class", "working class", "more men", "middle-class"],
          },
          {
            point: "Change: women gained the vote (over 30 in 1918; equal at 21 in 1928)",
            keywords: ["1918", "1928", "women", "over 30", "equal", "21"],
          },
          {
            point: "Change in how people voted: the secret ballot (1872)",
            keywords: ["secret ballot", "1872", "ballot act", "secret"],
          },
          {
            point: "Continuity: property link until 1918, change decided by an all-male Parliament, plural voting",
            keywords: ["continuity", "property", "plural", "all-male", "stayed the same", "until", "wealth", "house of lords"],
          },
          {
            point: "Judges which change was most important, with a reason",
            keywords: ["most important", "biggest", "overall", "turning point", "judgement", "significant"],
          },
        ],
        commonError: "Listing Acts in order without identifying any continuity or judging which change mattered most.",
        difficulty: "challenge",
        guideRef: "why-women-won",
        hints: [
          "Draw a timeline: 1832, 1867, 1872, 1884, 1918, 1928.",
          "What stayed the same until 1918 — what did you need to own to vote?",
          "Who made all these decisions? Did that change before 1918?",
          "Choose one turning point and justify it.",
        ],
        strategy: "Spot change and continuity",
      },
      {
        kind: "written",
        id: "womens-suffrage-p3-q12",
        question:
          "Historians disagree about whether the suffragettes' militancy helped or harmed the campaign for votes for women. Explain why they disagree, using evidence for both views. (6 marks)",
        marks: 6,
        modelAnswer:
          "Some historians argue militancy helped. Before 1905 newspapers largely ignored the campaign, but heckling, window smashing and arrests put votes for women in the headlines, making it impossible for politicians to ignore. Hunger strikes and force-feeding won sympathy and made the government look brutal, and NUWSS membership grew as more people became interested in the cause.\n\nOthers argue it harmed the cause. Arson alienated MPs and the public, and gave anti-suffragists an argument that women were too irrational to vote; the 1912 Conciliation Bill was narrowly defeated soon after the window-smashing raids. By 1914 militancy had not won the vote, and the Cat and Mouse Act let the government resist.\n\nThey disagree partly because the question is a counterfactual — we cannot know what would have happened without militancy — and because they weigh evidence differently: short-term publicity against long-term damage. Some early histories were written by suffragettes themselves, such as Sylvia Pankhurst. Overall, I think militancy helped at first but harmed the cause by 1912–14.",
        markScheme: [
          {
            point: "Evidence it helped: publicity, made the issue impossible to ignore",
            keywords: ["publicity", "headlines", "attention", "newspapers", "couldn't ignore", "could not ignore", "kept the issue"],
          },
          {
            point: "Evidence it helped: hunger strikes/force-feeding won sympathy; growth in support",
            keywords: ["sympathy", "force-feeding", "force fed", "hunger strike", "martyr", "brutal", "cat and mouse", "membership grew"],
          },
          {
            point: "Evidence it harmed: alienated MPs/public; 1912 Conciliation Bill defeat; 'irrational' argument",
            keywords: ["alienated", "conciliation", "1912", "defeated", "irrational", "excuse", "turned against", "backlash"],
          },
          {
            point: "Evidence it harmed: no vote by 1914; the government could resist",
            keywords: ["no vote", "by 1914", "failed", "resisted", "asquith", "didn't work", "did not work"],
          },
          {
            point: "Explains WHY historians disagree: counterfactual, different evidence/weighting, perspective of sources",
            keywords: ["can't know", "cannot know", "counterfactual", "different evidence", "interpretation", "perspective", "written by", "weigh", "short-term", "long-term"],
          },
          {
            point: "Reaches a supported judgement",
            keywords: ["overall", "judgement", "more convincing", "i think", "at first"],
          },
        ],
        solutions: [
          {
            label: "Argument: militancy helped",
            steps: [
              "It turned a neglected issue into front-page news.",
              "The government's harsh response (force-feeding, the Cat and Mouse Act) won public sympathy.",
              "Politicians feared militancy would return after the war if nothing changed.",
            ],
          },
          {
            label: "Argument: militancy harmed",
            steps: [
              "Arson and attacks on property alienated potential supporters.",
              "Opponents used it as proof that women were unfit to vote.",
              "It gave the government a reason not to appear to 'give in to violence'.",
            ],
          },
        ],
        commonError: "Giving evidence for both sides but never answering the actual question: WHY do historians disagree?",
        difficulty: "challenge",
        guideRef: "suffragettes",
        hints: [
          "Plan two columns: 'helped' and 'harmed', with evidence for each.",
          "Did militancy have the same effect in 1905 as in 1913?",
          "Can anyone prove what would have happened WITHOUT militancy?",
          "Remember to explain the reasons for the disagreement, not just the two sides.",
        ],
        strategy: "Consider the counter-argument",
      },
    ],
  },

  // ===========================================================================
  // PRACTICE PAPER 4
  // ===========================================================================
  {
    id: "womens-suffrage-p4",
    title: "Practice Paper 4",
    questions: [
      {
        kind: "short",
        id: "womens-suffrage-p4-q01",
        question: "In which year was the National Union of Women's Suffrage Societies (NUWSS) formed?",
        answer: { type: "number", value: 1897 },
        traps: [
          {
            spec: { type: "number", value: 1903 },
            feedback: "1903 is when the militant WSPU was founded. The peaceful NUWSS was older — formed in the last years of the 1800s.",
          },
          {
            spec: { type: "number", value: 1866 },
            feedback: "1866 is the year of the first mass suffrage petition, presented by John Stuart Mill. The NUWSS united local societies about 30 years later.",
          },
        ],
        solution: [
          "The NUWSS was formed in **1897**, joining together many local suffrage societies; Millicent Fawcett became its leader.",
          "It was six years older than the WSPU (1903) and remained much larger.",
        ],
        difficulty: "warmup",
        guideRef: "suffragists",
        hints: ["It was formed in the late 1890s, a few years before the Pankhursts founded the WSPU."],
        strategy: "Put it in chronological order",
      },
      {
        kind: "short",
        id: "womens-suffrage-p4-q02",
        question:
          "In 1917, with German submarines threatening Britain's food imports, the government set up an organisation of women to work on farms. What was it called?",
        answer: {
          type: "text",
          accept: ["Women's Land Army", "Womens Land Army", "the Women's Land Army", "Land Army", "the Land Army", "WLA"],
          display: "the Women's Land Army",
        },
        traps: [
          {
            spec: { type: "text", accept: ["Women's Army Auxiliary Corps", "WAAC"] },
            feedback: "The WAAC (1917) supported the army with jobs such as cooking, clerical work and driving. The farm workers' organisation had a different name.",
          },
        ],
        solution: [
          "The **Women's Land Army** was set up in 1917 to replace male farm workers who had gone to fight.",
          "It was one of many ways women's war work became visible to the public — helping to change attitudes about what women could do.",
        ],
        difficulty: "warmup",
        guideRef: "war-and-the-vote",
        hints: ["Its name made it sound like a military force — but these women never went near a battlefield. Where did they work?"],
        strategy: "Use precise evidence",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-p4-q03",
        question: "Which of these was a problem with elections in Britain around 1800?",
        options: [
          "Votes were secret, so nobody could check whether bribery was happening",
          "Voting was done in public, so landlords and employers could see how people voted and put pressure on them",
          "Every constituency had exactly the same number of voters",
          "Women could vote in general elections but working men could not",
        ],
        answerIndex: 1,
        explanation:
          "Until the **Ballot Act of 1872**, voters announced their choice in public, so landlords and employers could see — and punish — the 'wrong' vote, and bribery was common. Secret voting is the tempting distractor, but it is the opposite of the truth: secrecy was a Chartist *demand*, not the situation in 1800. Constituencies were wildly unequal (rotten boroughs with a handful of voters, big towns with no MP), and women could not vote in general elections.",
        difficulty: "warmup",
        guideRef: "britain-becomes-democratic",
        hints: ["The secret ballot was only introduced in 1872. So how did people vote before that?"],
        strategy: "Avoid hindsight",
      },
      {
        kind: "short",
        id: "womens-suffrage-p4-q04",
        question:
          "From 1909, imprisoned suffragettes protested by refusing all food. The government responded by force-feeding them. What is the two-word term for their protest?",
        answer: {
          type: "text",
          accept: ["hunger strike", "hunger strikes", "hunger-strike", "hunger striking", "hunger-striking", "a hunger strike", "going on hunger strike"],
          display: "hunger strike",
        },
        traps: [
          {
            spec: { type: "text", accept: ["force-feeding", "force feeding", "forcible feeding", "force-fed"] },
            feedback: "Force-feeding was the government's *response*. What was the suffragettes' own protest called?",
          },
        ],
        solution: [
          "Suffragettes went on **hunger strike**, starting with Marion Wallace Dunlop in 1909, to demand to be treated as political prisoners.",
          "The government's force-feeding was painful and dangerous, and won the suffragettes sympathy; the 1913 'Cat and Mouse Act' was its next answer.",
        ],
        difficulty: "core",
        guideRef: "suffragettes",
        hints: [
          "Workers who refuse to work are 'on strike'.",
          "What were the prisoners refusing?",
        ],
        strategy: "Use precise evidence",
      },
      {
        kind: "short",
        id: "womens-suffrage-p4-q05",
        question:
          "Who became the first woman to qualify as a doctor in Britain, in 1865, after being turned away by medical schools? (She was the older sister of Millicent Fawcett.) Give her surname or full name.",
        answer: {
          type: "text",
          accept: ["Elizabeth Garrett Anderson", "Garrett Anderson", "Anderson", "Elizabeth Garrett", "Garrett", "Elizabeth Anderson", "Dr Garrett Anderson"],
          display: "Elizabeth Garrett Anderson",
        },
        traps: [
          {
            spec: { type: "text", accept: ["Florence Nightingale", "Nightingale"] },
            feedback: "Florence Nightingale transformed nursing after the Crimean War, but she was not a doctor. The woman here qualified in medicine by finding a loophole in the rules.",
          },
          {
            spec: { type: "text", accept: ["Millicent Fawcett", "Fawcett", "Millicent Garrett Fawcett"] },
            feedback: "Millicent Fawcett was her younger sister, who later led the NUWSS. Which sister became a doctor?",
          },
        ],
        solution: [
          "**Elizabeth Garrett Anderson** qualified in 1865 through the Society of Apothecaries, whose rules did not specifically ban women (the rules were then changed to stop others following her).",
          "In 1908 she also became England's first woman mayor (of Aldeburgh) — evidence suffragists used to show women were capable of public responsibility.",
        ],
        difficulty: "core",
        guideRef: "women-in-victorian-britain",
        hints: [
          "She later founded a hospital for women in London and, in 1908, became England's first woman mayor.",
          "Her maiden name was the same as Millicent Fawcett's — Garrett.",
          "She took her husband's surname, Anderson, after she married.",
        ],
        strategy: "Use precise evidence",
      },
      {
        kind: "short",
        id: "womens-suffrage-p4-q06",
        question:
          "In which year did Singapore hold its first ever election, for some of the seats on its Legislative Council? (Women as well as men could vote in it.)",
        answer: { type: "number", value: 1948 },
        traps: [
          {
            spec: { type: "number", value: 1959 },
            feedback: "1959 was the general election that brought Singapore full internal self-government. Its first election, for a few Legislative Council seats, came over a decade earlier.",
          },
          {
            spec: { type: "number", value: 1965 },
            feedback: "1965 is when Singapore became an independent nation. Its first election was much earlier, soon after the Second World War.",
          },
        ],
        solution: [
          "Singapore's first election was held on **20 March 1948**, for six elected seats on the Legislative Council; most members were still appointed.",
          "Only British subjects could register, and only about 22,000 people did — but women could vote on the same terms as men from the very first election, in the same year as the Universal Declaration of Human Rights.",
        ],
        difficulty: "core",
        guideRef: "why-women-won",
        hints: [
          "It was a few years after the end of the Japanese Occupation (1942–45).",
          "It was the same year the UN adopted the Universal Declaration of Human Rights.",
        ],
        strategy: "Put it in chronological order",
      },
      {
        kind: "mcq",
        id: "womens-suffrage-p4-q07",
        question:
          "Many anti-suffragists, including leading politicians such as Lord Curzon, used a 'physical force' argument. Which statement sums it up?",
        options: [
          "Women paid rates and taxes, so they deserved a say in how the money was spent",
          "Women could already vote in local elections, so they should vote nationally too",
          "Suffragettes' attacks on property proved women could be as forceful as men",
          "Government ultimately depends on armed force, and since women could not serve as soldiers, they should not decide questions of war and empire",
        ],
        answerIndex: 3,
        explanation:
          "The 'physical force' argument said that the state rests on armed power — the army, navy and police — and since women did not fight, they should not vote on war, empire and defence. The taxes and local-elections options are real arguments, but they are arguments FOR votes for women. The suffragettes' attacks were used by opponents to say women were irrational, not to argue about who could defend the nation.",
        difficulty: "core",
        guideRef: "arguments-for-and-against",
        hints: [
          "Two of the options are arguments FOR the vote — rule them out.",
          "'Physical force' — who provided the physical force that defended the country and empire?",
        ],
        strategy: "Consider the counter-argument",
      },
      {
        kind: "written",
        id: "womens-suffrage-p4-q08",
        question:
          "**Source A** — a summary of the experiences of Lady Constance Lytton, an aristocratic suffragette, based on her book *Prisons and Prisoners* (1914). Written for this exercise.\n\n> When Lady Constance was imprisoned in 1909 under her own name, prison doctors found she had a weak heart and she was soon released without being force-fed. In 1910 she disguised herself as a working-class woman called 'Jane Warton' and was arrested again in Liverpool. This time she was force-fed several times, without any proper medical examination.\n\nWhat can you infer from Source A about how suffragette prisoners were treated? (3 marks)",
        marks: 3,
        modelAnswer:
          "Source A suggests that suffragette prisoners were treated differently according to their social class. As an aristocrat, Lady Constance was examined and released because of her weak heart, but as the working-class 'Jane Warton' she was force-fed with no proper medical check — implying that poorer prisoners received much harsher treatment.\n\nIt also suggests that force-feeding was used routinely and without real concern for prisoners' health, even though it was dangerous. Her disguise shows she deliberately set out to expose this unequal treatment, which suggests suffragettes used their prison experiences as evidence to win public sympathy.",
        markScheme: [
          {
            point: "Inference: treatment depended on social class — working-class prisoners were treated more harshly",
            keywords: ["class", "working-class", "working class", "rich", "aristocrat", "upper-class", "status", "unfair", "differently", "poorer"],
          },
          {
            point: "Inference: force-feeding was routine and harsh, with little regard for prisoners' health",
            keywords: ["force-feeding", "force fed", "force-fed", "dangerous", "harsh", "brutal", "health", "medical", "routine"],
          },
          {
            point: "Supports with detail and/or her purpose in disguising herself (to expose the injustice)",
            keywords: ["disguise", "jane warton", "expose", "prove", "weak heart", "1909", "1910", "sympathy"],
          },
        ],
        commonError: "Retelling Lady Constance's story without drawing out what it reveals about the prison system.",
        difficulty: "core",
        guideRef: "suffragettes",
        hints: [
          "Compare her two arrests. What was different about who she appeared to be?",
          "Why would the prison treat her differently the second time?",
          "Why do you think she chose to disguise herself?",
        ],
        strategy: "Make an inference",
      },
      {
        kind: "written",
        id: "womens-suffrage-p4-q09",
        question:
          "**Source B** — a British government recruiting poster from around 1916 (described). A young woman in overalls and a cap is putting on her coat outside a munitions factory, while in the background a soldier waves as he leaves for the war. The title reads 'These women are doing their bit', and underneath: 'Learn to make munitions'.\n\nHow useful is Source B for an enquiry into how attitudes to women changed during the First World War? (4 marks)",
        marks: 4,
        modelAnswer:
          "Source B is useful because it shows that by 1916 the government was actively encouraging women into factory work that had been seen as men's work, and praising them for 'doing their bit' alongside soldiers. That is a real shift in official attitudes from before 1914.\n\nHowever, it is government propaganda designed to recruit workers, so it shows an idealised, cheerful image. It does not show the reality: munitions work was dangerous (TNT turned workers' skin yellow, giving them the nickname 'canaries'), women were often paid less than men, and many were expected to give up their jobs when the men returned. It also shows official attitudes rather than what ordinary people privately thought.\n\nOverall, it is useful for showing how the government wanted the public to see women's war work, especially when cross-referenced with evidence like Asquith's change of mind in 1917, but less useful for showing whether attitudes changed permanently.",
        markScheme: [
          {
            point: "Uses the content: women encouraged into men's jobs and praised for their contribution",
            keywords: ["munitions", "doing their bit", "praised", "contribution", "factory", "men's jobs", "patriotic"],
          },
          {
            point: "Provenance: government propaganda made to recruit — shows official attitudes",
            keywords: ["government", "propaganda", "recruit", "purpose", "persuade", "official"],
          },
          {
            point: "Limitation: idealised; omits danger, unequal pay, temporary nature of the change",
            keywords: ["dangerous", "tnt", "canaries", "pay", "paid less", "after the war", "idealised", "glamorous", "reality", "temporary"],
          },
          {
            point: "Reaches a judgement on usefulness for THIS enquiry, with cross-referencing",
            keywords: ["useful for", "partly", "cross-reference", "asquith", "1917", "overall", "permanently"],
          },
        ],
        commonError: "Saying 'it's propaganda so it's useless'. Propaganda is very useful evidence of what the government wanted people to think.",
        difficulty: "core",
        guideRef: "war-and-the-vote",
        hints: [
          "Who made the poster and why? (NOP)",
          "What does the poster show — and what does it leave out about munitions work?",
          "The enquiry is about ATTITUDES. Whose attitudes does it show best?",
        ],
        strategy: "Check the provenance (NOP)",
      },
      {
        kind: "written",
        id: "womens-suffrage-p4-q10",
        question: "Explain why many people — including many women — opposed votes for women before 1914. (5 marks)",
        marks: 5,
        modelAnswer:
          "Many people believed in separate spheres: men belonged in public life and politics, women in the home and family. Voting, they argued, would distract women from their natural duties.\n\nOthers used the 'physical force' argument: government depended on armed force, and since women did not serve as soldiers, they should not decide questions of war and empire. Some claimed women were too emotional to vote sensibly, and after 1905 they pointed to suffragette militancy as 'proof'.\n\nMany women agreed. In 1908 Mary Augusta Ward and others founded the Women's National Anti-Suffrage League; they argued women already had influence through local government and the family, and that most women did not want the vote.\n\nThese views were persuasive at the time because they matched long-held traditions, religious teaching and everyday experience, and many people feared rapid change after watching what revolution had done in France.",
        markScheme: [
          {
            point: "Separate spheres: women's natural place in the home",
            keywords: ["separate spheres", "home", "family", "domestic", "natural", "duties"],
          },
          {
            point: "Physical force argument: women did not fight, so should not decide war/empire",
            keywords: ["war", "soldiers", "fight", "empire", "physical force", "army", "defend"],
          },
          {
            point: "Claimed women were too emotional; militancy used as 'proof'",
            keywords: ["emotional", "irrational", "hysterical", "militancy", "violence", "proof"],
          },
          {
            point: "Many women opposed the vote (Anti-Suffrage League 1908, Mary Ward; local influence enough)",
            keywords: ["anti-suffrage league", "mary ward", "mary augusta ward", "1908", "many women", "didn't want", "did not want", "local government", "influence"],
          },
          {
            point: "Explains why these views were convincing at the time (tradition, religion, fear of change)",
            keywords: ["tradition", "religion", "fear", "change", "widely", "believed", "at the time", "revolution"],
          },
        ],
        commonError: "Judging opponents only by today's values. Explain why their arguments convinced many people at the time.",
        difficulty: "core",
        guideRef: "arguments-for-and-against",
        hints: [
          "Group the arguments: about women's nature, about war and empire, about what women themselves wanted.",
          "Why might some women not want the vote? Think of Mary Augusta Ward.",
          "Avoid hindsight: why did these arguments seem sensible to many people then?",
        ],
        strategy: "Avoid hindsight",
      },
      {
        kind: "written",
        id: "womens-suffrage-p4-q11",
        question: "\"The Representation of the People Act of 1918 made Britain a democracy.\" How far do you agree with this statement? (6 marks)",
        marks: 6,
        modelAnswer:
          "In many ways the 1918 Act was the biggest step towards democracy in British history. All men over 21 could now vote, regardless of property (and men who had served in the war from 19), and the electorate roughly tripled to about 21 million. For the first time about 8.4 million women could vote, and a separate Act later in 1918 let women stand as MPs — Constance Markievicz was elected that December.\n\nHowever, Britain was still not a full democracy. Women had to be over 30 and meet a property qualification, so millions of younger women — including many munitions workers — were excluded until 1928. Some men still had two votes through business or university seats until 1948, and the House of Lords was unelected. Beyond Britain, hundreds of millions of people in the Empire, such as in India and Singapore, had no say in the Parliament that ruled them.\n\nOverall, I only partly agree: 1918 was a turning point, but Britain only came close to being a democracy with the equal vote in 1928 — and even then not across its Empire.",
        markScheme: [
          {
            point: "Agrees: all men over 21 could vote; the electorate tripled",
            keywords: ["all men", "21", "tripled", "21 million", "electorate", "property"],
          },
          {
            point: "Agrees: women voted for the first time and could become MPs",
            keywords: ["women", "first time", "8.4 million", "mps", "markievicz", "astor", "stand"],
          },
          {
            point: "Disagrees: women's age limit (30) and property qualification — not equal until 1928",
            keywords: ["over 30", "property qualification", "1928", "equal", "excluded", "younger women", "munitions workers"],
          },
          {
            point: "Disagrees: plural voting, unelected Lords, few women MPs",
            keywords: ["plural", "two votes", "1948", "house of lords", "unelected", "few women"],
          },
          {
            point: "Wider view: most people in the Empire had no vote",
            keywords: ["empire", "colonies", "singapore", "india", "no say"],
          },
          {
            point: "Reaches a supported overall judgement",
            keywords: ["overall", "partly", "big step", "not fully", "judgement", "turning point", "i agree", "i disagree"],
          },
        ],
        solutions: [
          {
            label: "Argument: 1918 made Britain a democracy",
            steps: [
              "For the first time, the vote no longer depended on property for men.",
              "Women entered the electorate and Parliament, ending a total male monopoly.",
              "The electorate tripled — most adults could now vote.",
            ],
          },
          {
            label: "Argument: 1918 was a step, not the finish",
            steps: [
              "Women under 30 and women without property were still shut out until 1928.",
              "Plural voting and an unelected House of Lords remained.",
              "The Empire's millions had no vote at all.",
            ],
          },
        ],
        commonError: "Treating 1918 as 'votes for all women' — check the age and property limits, and define what 'a democracy' needs.",
        difficulty: "challenge",
        guideRef: "why-women-won",
        hints: [
          "First define 'democracy': who should be able to vote, and how equally?",
          "Who gained the vote in 1918 — and who was still left out?",
          "What changed again in 1928, and what lasted until 1948?",
          "Think beyond Britain itself: who did the British Parliament govern?",
        ],
        strategy: "Weigh factors",
      },
      {
        kind: "written",
        id: "womens-suffrage-p4-q12",
        question:
          "Explain why the Chartists failed to achieve their aims in the 1840s, yet most of their six points had become law by 1918. (5 marks)",
        marks: 5,
        modelAnswer:
          "The Chartists failed in the 1840s because Parliament, elected by property owners, simply rejected their petitions in 1839, 1842 and 1848 — the MPs had no reason to give up their own power. The ruling classes also feared revolution: the Newport Rising of 1839 and the revolutions across Europe in 1848 made Chartism look dangerous, so the government prepared troops for the 1848 Kennington Common meeting. The movement was divided between 'moral force' and 'physical force' Chartists, and the 1848 petition was discredited by fake signatures such as 'Victoria Rex'. Better economic times in the 1850s reduced support.\n\nYet their ideas later succeeded because reform came gradually from above: parties began competing for new voters (Disraeli in 1867), and as each reform passed without disaster it seemed safer to go further — the secret ballot in 1872, payment of MPs in 1911, all men in 1918. So the Chartists lost in the short term but won the long-term argument.",
        markScheme: [
          {
            point: "Parliament of property owners rejected the petitions (1839, 1842, 1848)",
            keywords: ["rejected", "1839", "1842", "1848", "petition", "parliament", "property owners"],
          },
          {
            point: "Fear of revolution/violence and Chartist divisions (Newport, 1848, moral vs physical force)",
            keywords: ["newport", "violence", "physical force", "moral force", "fear", "revolution", "divided", "troops"],
          },
          {
            point: "Discredited 1848 petition / prosperity reduced support",
            keywords: ["fake", "signatures", "victoria rex", "mr punch", "discredited", "prosperity", "better times", "1850s"],
          },
          {
            point: "Later success: gradual reform from above as parties competed and reform seemed safe",
            keywords: ["gradual", "parties", "competed", "disraeli", "1867", "1872", "1884", "1911", "1918", "safe"],
          },
          {
            point: "Links short-term failure with long-term influence",
            keywords: ["long-term", "short-term", "ideas", "influence", "from above", "overall", "won the argument"],
          },
        ],
        commonError: "Calling Chartism a total failure — compare what happened in the 1840s with what had happened by 1918.",
        difficulty: "challenge",
        guideRef: "britain-becomes-democratic",
        hints: [
          "Who decided whether to accept the Chartists' petitions — and why would they refuse?",
          "What was happening across Europe in 1848?",
          "Why did later politicians agree to the same demands they once rejected?",
          "Use the phrases 'short-term' and 'long-term' in your conclusion.",
        ],
        strategy: "Long-term vs short-term causes",
      },
    ],
  },
];
