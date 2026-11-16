import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // =========================================================== MCQ PAPER 1
  {
    id: "historians-toolkit-m1",
    title: "MCQ Paper 1",
    questions: [
      {
        kind: "mcq",
        id: "historians-toolkit-m1-q01",
        question: "Which century was the Battle of Hastings (1066) fought in?",
        options: ["The 11th century", "The 10th century", "The 12th century", "The 16th century"],
        answerIndex: 0,
        explanation:
          "Take the 'hundreds' (10) and add one: 1066 is in the 11th century, which ran from 1001 to 1100. 'The 10th century' is the classic slip of reading the century straight off the first two digits — but the 1st century was the years 1–100, so for a year like 1066 the century number is one ahead of the hundreds.",
        difficulty: "warmup",
        guideRef: "chronology-and-periods",
        hints: ["There was no year 0 — the 1st century was the years 1 to 100. So which hundred years contains 1066?"],
        strategy: "Use the chronology",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m1-q02",
        question: "Which list puts these events in the correct chronological order (earliest first)?",
        options: [
          "Magna Carta → Battle of Hastings → Act of Supremacy → storming of the Bastille",
          "Battle of Hastings → Magna Carta → Act of Supremacy → storming of the Bastille",
          "Battle of Hastings → Act of Supremacy → Magna Carta → storming of the Bastille",
          "Battle of Hastings → Magna Carta → storming of the Bastille → Act of Supremacy",
        ],
        answerIndex: 1,
        explanation:
          "Hastings (1066), Magna Carta (1215), the Act of Supremacy (1534), the Bastille (1789). The tempting slip is putting the Act of Supremacy before Magna Carta — but the Act of Supremacy came more than 300 years after Magna Carta.",
        difficulty: "warmup",
        guideRef: "chronology-and-periods",
        hints: ["Write the year next to each event first: 1066, 1215, 1534, 1789."],
        strategy: "Use the chronology",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m1-q03",
        question: "Which of these is a **primary** source for the Norman Conquest of 1066?",
        options: [
          "A school textbook about 1066 written in 2015",
          "A Victorian painting of the Battle of Hastings made in 1880",
          "The Bayeux Tapestry, embroidered within about 10–15 years of 1066",
          "A television documentary about William the Conqueror",
        ],
        answerIndex: 2,
        explanation:
          "The Bayeux Tapestry was made close to the time, so it is primary. The Victorian painting is tempting because it is old — but 1880 is more than 800 years after 1066, so for the Conquest it is a later, secondary account.",
        difficulty: "warmup",
        guideRef: "sources-and-evidence",
        hints: ["Primary means made at the time of the events (or by someone involved). Which item was made closest to 1066?"],
        strategy: "Check the provenance (NOP)",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m1-q04",
        question:
          "Study the source.\n\n> “What is the Third Estate? Everything. What has it been until now in the political order? Nothing. What does it want to be? Something.” — Abbé Sieyès, pamphlet *What is the Third Estate?*, January 1789\n\nWhich is the best **inference** from this source?",
        options: [
          "The Third Estate already controlled the French government in 1789",
          "Sieyès wanted the Third Estate to be abolished",
          "Every person in France agreed with Sieyès",
          "Many in the Third Estate felt they were vital to France but had been shut out of political power",
        ],
        answerIndex: 3,
        explanation:
          "Sieyès says the Third Estate is 'everything' but has been 'nothing' in politics — so he suggests it was essential yet powerless, and wanted a real say. 'Every person in France agreed' is tempting but goes too far: one pamphlet shows what its author (and his readers) argued, not what everyone thought.",
        difficulty: "core",
        guideRef: "sources-and-evidence",
        hints: [
          "An inference goes beyond the words but must still be backed by them.",
          "Compare 'Everything' with 'Nothing' — what complaint is Sieyès making?",
          "Reject any option that contradicts the source or claims more than one pamphlet could prove.",
        ],
        strategy: "Use precise evidence",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m1-q05",
        question: "In NOP, which question belongs to **Purpose**?",
        options: [
          "Why was the source made, and who was meant to see it?",
          "What kind of source is it — a diary, a poster, a law?",
          "Who made the source, and when?",
          "Does the source agree with other sources?",
        ],
        answerIndex: 0,
        explanation:
          "Purpose asks why the source was made and for whom. 'Who made it, and when?' is Origin, and 'what kind of source' is Nature. Checking it against other sources is corroboration — a different skill altogether.",
        difficulty: "warmup",
        guideRef: "sources-and-evidence",
        hints: ["N = Nature, O = Origin, P = Purpose. Which question is about the reason a source exists?"],
        strategy: "Check the provenance (NOP)",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m1-q06",
        question:
          "A 1932 Nazi poster shows a crowd of tired, poor-looking Germans under the slogan “Our last hope: Hitler”. A historian calls it “unreliable but useful”. Which explanation best supports that view?",
        options: [
          "It was made in 1932, so it must give an accurate picture of Germany",
          "It is propaganda that exaggerates to win votes, but it shows how the Nazis appealed to desperate Germans during the Depression",
          "It is a primary source, so it is automatically both reliable and useful",
          "A source can only be useful if it is reliable",
        ],
        answerIndex: 1,
        explanation:
          "The poster is designed to persuade, so it cannot be trusted as a neutral picture — but that persuasion is itself evidence of Nazi methods and of who they targeted. 'It is a primary source, so it is automatically reliable' is the classic trap: being made at the time does not make a source trustworthy.",
        difficulty: "core",
        guideRef: "utility-and-reliability",
        hints: [
          "Reliability and utility are different questions.",
          "Ask: useful FOR what? What does a piece of propaganda reveal, even if it exaggerates?",
        ],
        strategy: "Ask \"useful for what?\"",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m1-q07",
        question:
          "Study the source.\n\n> “…the worst disaster and largest capitulation in British history.” — Winston Churchill describing the fall of Singapore (February 1942), in his war memoirs *The Second World War*, published after the war\n\nWhich point about provenance most limits this source's reliability as a judgement on **who was to blame** for the fall of Singapore?",
        options: [
          "Churchill was Prime Minister in 1942, so he had access to official reports about the defeat",
          "It is a primary source written by Britain's wartime leader, so it must be accurate about blame",
          "Churchill was Prime Minister in 1942 and wrote with hindsight, so he may have wanted to protect his own reputation",
          "It was published after the war, so it cannot tell us anything about 1942",
        ],
        answerIndex: 2,
        explanation:
          "Churchill led the British government when Singapore fell, so in memoirs written after the war he had a reason to shape how blame was shared. 'Access to official reports' is tempting, but it is a strength of the provenance, not a limitation; 'cannot tell us anything' goes too far — hindsight weakens a source without making it worthless; and being primary never guarantees accuracy.",
        difficulty: "challenge",
        guideRef: "utility-and-reliability",
        hints: [
          "Use Origin and Purpose: who wrote this, what was his job in 1942, and when did he write it?",
          "Would the person in charge at the time of a disaster have any reason to tell the story in a particular way?",
          "Rule out options that describe a strength rather than a limitation, or that claim far too much.",
        ],
        strategy: "Ask \"who benefits?\"",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m1-q08",
        question: "What is the difference between a **source** and an **interpretation**?",
        options: [
          "A source is always true; an interpretation is always false",
          "Sources are written documents; interpretations are pictures",
          "An interpretation is any source made by a king or government",
          "A source comes from the period being studied; an interpretation is a later account of the past built from sources",
        ],
        answerIndex: 3,
        explanation:
          "Sources are traces left by the past; interpretations are later accounts (books, films, displays) that historians build from them. 'A source is always true' is wrong — sources can be biased or mistaken, and interpretations can be well supported.",
        difficulty: "warmup",
        guideRef: "interpretations",
        hints: ["Think about WHEN each was made — during the period, or later, looking back?"],
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m1-q09",
        question: "The chronicler Matthew Paris was very hostile to King John. Which is the best explanation for his hostility?",
        options: [
          "He was a monk, and John had quarrelled bitterly with the Church, leading to the Interdict of 1208",
          "He was one of the barons who forced John to seal Magna Carta",
          "He was a 20th-century historian with access to government records",
          "He had lost his own lands when Normandy fell in 1204",
        ],
        answerIndex: 0,
        explanation:
          "Matthew Paris was a monk at St Albans, and the Church had suffered under the Interdict John provoked — so his purpose and context pushed him towards a harsh view. 'A 20th-century historian with government records' describes the modern historians whose view of John is often kinder, not Paris, who wrote in the mid-1200s.",
        difficulty: "core",
        guideRef: "interpretations",
        hints: [
          "Use Origin: what was Matthew Paris's job?",
          "What happened between John and the Church in 1208–1213?",
        ],
        strategy: "Check the provenance (NOP)",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m1-q10",
        question: "Which of these is best described as the **trigger** for Hitler's appointment as Chancellor in January 1933?",
        options: [
          "The Treaty of Versailles, 1919",
          "Franz von Papen persuading President Hindenburg to appoint Hitler",
          "The Wall Street Crash, 1929",
          "Hyperinflation in Germany, 1923",
        ],
        answerIndex: 1,
        explanation:
          "The trigger is the final event that sets the outcome off: in January 1933 Papen and other conservatives persuaded Hindenburg to appoint Hitler. The Wall Street Crash is tempting because it was very important, but it is a short-term cause — it happened over three years earlier and made Nazi success possible rather than directly producing the appointment.",
        difficulty: "core",
        guideRef: "causation-and-consequence",
        hints: [
          "A trigger is the LAST step, right before the event.",
          "Which option happened closest to 30 January 1933?",
        ],
        strategy: "Use the chronology",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m1-q11",
        question: "Which sentence best **links** two causes of the Nazis' rise, rather than just listing them?",
        options: [
          "The Wall Street Crash happened in 1929 and Hitler became Chancellor in 1933.",
          "There were many causes, such as the Depression and propaganda.",
          "The Wall Street Crash led to mass unemployment, which made more Germans willing to vote for a party promising work.",
          "Hitler was a powerful speaker and the SA used violence.",
        ],
        answerIndex: 2,
        explanation:
          "Linking means showing how one cause produced or strengthened another — 'led to… which made…'. The sentence about Hitler's speeches and SA violence names two causes, which is tempting, but it only lists them with 'and'; it never shows how one affected the other.",
        difficulty: "core",
        guideRef: "causation-and-consequence",
        hints: [
          "Look for connecting words such as 'led to', 'which', 'so', 'because'.",
          "Naming two causes is not the same as linking them.",
        ],
        strategy: "Link the factors",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m1-q12",
        question:
          "The Nazi Party won about 2.6% of the vote in the 1928 election, before the Depression, and about 37% in July 1932, when around six million Germans were unemployed. What does this evidence most strongly suggest?",
        options: [
          "Hitler's speeches alone explain the rise of the Nazis",
          "The Treaty of Versailles played no part because it came in 1919",
          "The Nazis won a majority of the votes in July 1932",
          "The Depression was probably a necessary condition for Nazi success: before it, they were a small fringe party",
        ],
        answerIndex: 3,
        explanation:
          "Hitler was already a skilled speaker in 1928, yet the Nazis won only 2.6% — their vote rose sharply only once the Depression hit. That suggests the Depression was necessary (though not the only cause). 'The Nazis won a majority' is a tempting misreading: 37% made them the largest party, but it was not a majority.",
        difficulty: "challenge",
        guideRef: "causation-and-consequence",
        hints: [
          "Ask the counterfactual: what was Nazi support like BEFORE the Depression?",
          "Was Hitler a good speaker in 1928 too? What does that tell you about speeches as the only cause?",
          "Check the numbers carefully — is 37% more than half?",
        ],
        strategy: "Consider the counterfactual",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m1-q13",
        question:
          "“Magna Carta is significant because people campaigning for rights centuries later compared their own struggles to it.” Which of Counsell's 5 Rs is this argument using?",
        options: ["Resonant", "Remarkable", "Revealing", "Remembered"],
        answerIndex: 0,
        explanation:
          "Resonant means people in later times connect it to their own situations and make comparisons with it — exactly what the argument describes. 'Remembered' is close, but simply being remembered does not mean people draw parallels with their own struggles; Revealing is about what it tells us about its own time.",
        difficulty: "core",
        guideRef: "significance-and-change",
        hints: [
          "The 5 Rs: Remarkable, Remembered, Resonant, Resulting in change, Revealing.",
          "Which R is about people in other times and places comparing their situation with the event?",
        ],
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m1-q14",
        question:
          "The French Revolution abolished the monarchy in 1792, yet in 1804 Napoleon crowned himself Emperor of the French. This is best described as evidence of…",
        options: [
          "a trigger cause",
          "continuity — rule by one powerful man returned",
          "corroboration between two sources",
          "an anachronism",
        ],
        answerIndex: 1,
        explanation:
          "A crowned ruler with enormous power returning after a revolution is continuity: something stayed the same despite dramatic change. It is not an anachronism — an emperor in 1804 is not out of place in time; it is simply a sign that the Revolution changed less than it first seemed to.",
        difficulty: "core",
        guideRef: "significance-and-change",
        hints: [
          "Did France move away from one-man rule permanently?",
          "Change = what is different; continuity = what stays the same.",
        ],
        strategy: "Look for change AND continuity",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m1-q15",
        question: "Which is the best **substantiated judgement** on the significance of the 1918 Representation of the People Act?",
        options: [
          "It was significant because it is famous.",
          "It was the most significant event ever, because it ended all inequality between men and women.",
          "It was highly significant because it gave about 8.4 million women the vote, but its significance was limited because women only gained equal voting rights in 1928.",
          "It was not significant, because Emily Wilding Davison's death in 1913 is better known.",
        ],
        answerIndex: 2,
        explanation:
          "A substantiated judgement gives a clear verdict, backs it with precise evidence and weighs a limitation. 'It ended all inequality' sounds strong but is factually wrong — women under 30 and many without property still could not vote, and other inequalities continued. Fame is not a criterion of significance.",
        difficulty: "challenge",
        guideRef: "significance-and-change",
        hints: [
          "'Substantiated' means backed by evidence and reasoning.",
          "Is each option accurate? Cross out any that overclaim.",
          "The best judgement weighs both sides and still reaches a verdict.",
        ],
        strategy: "Weigh both sides, then judge",
      },
    ],
  },
  // =========================================================== MCQ PAPER 2
  {
    id: "historians-toolkit-m2",
    title: "MCQ Paper 2",
    questions: [
      {
        kind: "mcq",
        id: "historians-toolkit-m2-q01",
        question: "What does **AD** stand for?",
        options: ["After Death", "Ancient Date", "After Domesday", "Anno Domini — 'in the year of the Lord'"],
        answerIndex: 3,
        explanation:
          "AD is Latin: Anno Domini, 'in the year of the Lord', counting from the traditional date of Jesus's birth. 'After Death' is a common guess, but if it were true there would be a gap of about 30 years between BC and AD — there isn't.",
        difficulty: "warmup",
        guideRef: "chronology-and-periods",
        hints: ["It is Latin, not English, and it is about the year Jesus was traditionally thought to be born."],
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m2-q02",
        question: "Which century is the year **1900** in?",
        options: ["The 20th century", "The 18th century", "The 19th century", "The 21st century"],
        answerIndex: 2,
        explanation:
          "There was no year 0, so each century ends on a year ending 00: the 19th century ran from 1801 to 1900. 'The 20th century' is the tempting answer, but that began in 1901 and ended in 2000.",
        difficulty: "core",
        guideRef: "chronology-and-periods",
        hints: [
          "The 1st century was years 1–100. So the 2nd century began in which year?",
          "Follow the pattern: which century ends with the year 1900?",
        ],
        strategy: "Use the chronology",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m2-q03",
        question: "Which detail would be an **anachronism** in a painting of the Battle of Hastings?",
        options: [
          "Knights on horseback",
          "A soldier firing a musket",
          "Archers with bows",
          "Soldiers carrying kite-shaped shields",
        ],
        answerIndex: 1,
        explanation:
          "Muskets were developed centuries after 1066, so a musket at Hastings is out of its time — an anachronism. Knights, archers and kite-shaped shields all appear in the Bayeux Tapestry and fit 1066.",
        difficulty: "warmup",
        guideRef: "chronology-and-periods",
        hints: ["Which of these did not exist yet in 1066?"],
        strategy: "Spot the anachronism",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m2-q04",
        question: "What is **corroboration**?",
        options: [
          "Checking whether a source agrees with other sources",
          "Working out what a source suggests but does not say",
          "Finding out who made a source",
          "Proving that a source is biased",
        ],
        answerIndex: 0,
        explanation:
          "Corroboration (cross-referencing) means comparing a source with others to see if they agree. 'Working out what a source suggests' is inference — a different skill.",
        difficulty: "warmup",
        guideRef: "sources-and-evidence",
        hints: ["It is also called cross-referencing."],
        strategy: "Cross-reference sources",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m2-q05",
        question:
          "Study the source.\n\n> “We are here, not because we are law-breakers; we are here in our efforts to become law-makers.” — Emmeline Pankhurst, leader of the WSPU, speaking at her trial in 1908\n\nWhat can you infer from this source?",
        options: [
          "Pankhurst admitted the suffragettes had no aim except causing trouble",
          "Women already had the vote in Britain in 1908",
          "Pankhurst was standing for election as an MP in 1908",
          "Pankhurst wanted the court to see the suffragettes as people seeking a fair say in making laws, not as ordinary criminals",
        ],
        answerIndex: 3,
        explanation:
          "By contrasting 'law-breakers' with 'law-makers', Pankhurst presents the suffragettes' actions as a struggle for a voice in Parliament. 'Pankhurst was standing for election as an MP' is a tempting over-reading of 'law-makers' — in 1908 women could not vote in general elections or sit in Parliament, which is exactly what she was protesting about.",
        difficulty: "core",
        guideRef: "sources-and-evidence",
        hints: [
          "What contrast does she make between two kinds of people?",
          "Who makes laws in Britain — and could women vote for them in 1908?",
        ],
        strategy: "Use precise evidence",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m2-q06",
        question:
          "A historian is investigating **how people in Victorian Britain imagined 1066**. She studies a painting of the Battle of Hastings made in 1880. For THIS enquiry, the painting is best described as…",
        options: [
          "a secondary source, because it was made long after 1066",
          "useless, because the painter was not at Hastings",
          "a primary source, because it was made in the period she is studying",
          "an anachronism that cannot be used as evidence",
        ],
        answerIndex: 2,
        explanation:
          "Whether a source is primary or secondary depends on the enquiry. For the battle itself, an 1880 painting is secondary — but this enquiry is about Victorian ideas, and the painting was made by a Victorian, so it is primary evidence of how they imagined the past. 'Secondary, because it was made long after 1066' would be right only for an enquiry into 1066 itself.",
        difficulty: "challenge",
        guideRef: "sources-and-evidence",
        hints: [
          "Read the enquiry question very carefully — what period is she actually studying?",
          "Primary = produced during the period you are studying.",
          "When was the painting made, and is that the period of her enquiry?",
        ],
        strategy: "Ask \"useful for what?\"",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m2-q07",
        question: "Which word means “how useful a source is for a particular enquiry”?",
        options: ["Reliability", "Utility", "Provenance", "Chronology"],
        answerIndex: 1,
        explanation:
          "Utility means usefulness. 'Reliability' is the tempting mix-up — it means how far a source can be trusted, which is a different question.",
        difficulty: "warmup",
        guideRef: "utility-and-reliability",
        hints: ["It comes from the same root as the word 'use'."],
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m2-q08",
        question: "The Bayeux Tapestry was made for the Norman side. Which enquiry would it be **most** useful for?",
        options: [
          "What weapons, armour and ships were used in 1066",
          "What ordinary English peasants thought of William",
          "How many people died in the Harrying of the North",
          "Why King John lost Normandy in 1204",
        ],
        answerIndex: 0,
        explanation:
          "Its Norman viewpoint matters less for physical details: it shows mail armour, kite-shaped shields, spears, bows and ships in detail. It is far less useful on what English peasants thought — it was made for Norman patrons and tells the winners' story — and it ends before the Harrying of the North and long before King John.",
        difficulty: "core",
        guideRef: "utility-and-reliability",
        hints: [
          "Ask 'useful for what?' — and check the dates each enquiry covers.",
          "Bias affects opinions and blame more than it affects pictures of equipment.",
        ],
        strategy: "Ask \"useful for what?\"",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m2-q09",
        question: "Why do historians doubt that Marie Antoinette ever said “Let them eat cake”?",
        options: [
          "She could not speak French",
          "She was executed before the Revolution began",
          "The phrase was invented by Napoleon in 1804",
          "A similar line appears in Rousseau's *Confessions*, written when she was still a child in Austria, and no reliable source records her saying it",
        ],
        answerIndex: 3,
        explanation:
          "The story fails a provenance check: Rousseau had already written the line down, attributed to an unnamed 'great princess', before Marie Antoinette came to France in 1770, and no reliable source has her saying it. 'She was executed before the Revolution began' is false — she was executed in October 1793, during the Revolution.",
        difficulty: "core",
        guideRef: "utility-and-reliability",
        hints: [
          "Think about the ORIGIN of the story: when was the line first written down?",
          "Where was Marie Antoinette when that book was written?",
        ],
        strategy: "Check the provenance (NOP)",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m2-q10",
        question: "Why do historians disagree about whether suffragette militancy helped women win the vote?",
        options: [
          "Militancy began only after women had won the vote, so its effect cannot be measured",
          "The evidence points both ways: militancy kept the issue in the news, but some MPs said it hardened their opposition",
          "There are no surviving sources about the suffragettes",
          "Historians do not know when women first got the vote",
        ],
        answerIndex: 1,
        explanation:
          "Interpretations differ when the evidence can reasonably be read in more than one way — here, publicity against a backlash among MPs. 'Militancy began only after women had won the vote' is false: WSPU militancy ran from about 1905 to 1914 (at its most intense in 1912–14), before the 1918 Act.",
        difficulty: "core",
        guideRef: "interpretations",
        hints: [
          "Check each option against the chronology first: when was militancy, and when did women win the vote?",
          "Interpretations usually differ because the evidence can be read in different ways.",
        ],
        strategy: "Weigh both sides, then judge",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m2-q11",
        question: "Which of these is an **interpretation** of the French Revolution rather than a source from it?",
        options: [
          "The Declaration of the Rights of Man and of the Citizen (August 1789)",
          "A historian's book about the Revolution published in 1989",
          "Sieyès's pamphlet *What is the Third Estate?* (January 1789)",
          "A diary kept by a Parisian in July 1789",
        ],
        answerIndex: 1,
        explanation:
          "A book written 200 years later by a historian is a later account — an interpretation. The Declaration of the Rights of Man might feel like a set of ideas or opinions, but it was produced during the Revolution, so it is a source from the time.",
        difficulty: "warmup",
        guideRef: "interpretations",
        hints: ["Which item was made long after the events, looking back on them?"],
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m2-q12",
        question: "Which of these was a **long-term** cause of the French Revolution?",
        options: [
          "The unfair system of three estates, in which the Third Estate paid most of the taxes",
          "The storming of the Bastille, 14 July 1789",
          "The bad harvest of 1788",
          "The Tennis Court Oath, June 1789",
        ],
        answerIndex: 0,
        explanation:
          "The estate system had shaped French society for centuries, building resentment over a long period. 'The bad harvest of 1788' is tempting, but it is a short-term cause: it pushed up bread prices in the year or so before the Revolution.",
        difficulty: "core",
        guideRef: "causation-and-consequence",
        hints: [
          "Long-term causes build up over many years or even centuries.",
          "Which option describes a situation that existed long before 1788–89?",
        ],
        strategy: "Sort causes into categories",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m2-q13",
        question:
          "Mao's Great Leap Forward (1958–62) aimed to turn China into an industrial power very quickly. It led to a famine in which tens of millions of people died. The famine is best described as…",
        options: [
          "an intended consequence",
          "a long-term cause of the Great Leap Forward",
          "a trigger",
          "an unintended consequence",
        ],
        answerIndex: 3,
        explanation:
          "The policy aimed at rapid industrial growth; mass famine was not its goal, so the famine was an unintended consequence (made far worse by the regime's policies and refusal to change course). It cannot be a cause of the Great Leap Forward, because it came after the policy began.",
        difficulty: "core",
        guideRef: "causation-and-consequence",
        hints: [
          "Did the famine come before or after the policy? That decides cause or consequence.",
          "Was the famine what the policy set out to achieve?",
        ],
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m2-q14",
        question:
          "In 2019 Singapore's Bicentennial marked 200 years since Raffles' arrival in 1819, but deliberately placed it within a 700-year history. What does this show about historical significance?",
        options: [
          "1819 is no longer significant at all",
          "Significance is a fixed fact that never changes",
          "Judgements of significance can change over time and depend on who is judging and why",
          "Raffles first arrived in Singapore in 1299",
        ],
        answerIndex: 2,
        explanation:
          "1819 was still commemorated — but set within a longer story, showing that how significant an event seems depends on the questions and values of the present. 'Significance is a fixed fact' is the misconception this example disproves. (1299 is the date traditionally given for the founding of Singapura, not Raffles' arrival.)",
        difficulty: "core",
        guideRef: "significance-and-change",
        hints: [
          "Did the Bicentennial ignore 1819, or reframe it?",
          "Is significance something you look up, or a judgement people make?",
        ],
        strategy: "Zoom out to the big picture",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m2-q15",
        question: "A student writes: “The 1918 Representation of the People Act changed everything for women.” Which evidence best **challenges** this claim?",
        options: [
          "About 8.4 million women gained the vote in 1918",
          "Women under 30, and many women without property, still could not vote until 1928",
          "Emily Wilding Davison died after the Epsom Derby in 1913",
          "Millicent Fawcett led the suffragists of the NUWSS",
        ],
        answerIndex: 1,
        explanation:
          "To challenge 'changed everything' you need evidence of continuity — and millions of women were still excluded until 1928. '8.4 million women gained the vote' is tempting because it is about 1918, but it supports the claim of change rather than challenging it.",
        difficulty: "challenge",
        guideRef: "significance-and-change",
        hints: [
          "To challenge a claim of change, look for evidence of continuity.",
          "Which option is about 1918 but shows what did NOT change?",
          "Cross out options that support the claim or are about a different date.",
        ],
        strategy: "Look for change AND continuity",
      },
    ],
  },
  // =========================================================== MCQ PAPER 3
  {
    id: "historians-toolkit-m3",
    title: "MCQ Paper 3",
    questions: [
      {
        kind: "mcq",
        id: "historians-toolkit-m3-q01",
        question: "Henry VIII reigned from 1509 to 1547. Which period of history is his reign usually placed in?",
        options: ["Early modern", "Ancient", "Medieval", "Modern"],
        answerIndex: 0,
        explanation:
          "Historians usually call roughly 1500–1750 the early modern period, and the Tudors are a classic example. 'Medieval' is tempting because Henry was a king with castles and knights, but the Middle Ages are usually said to end around 1500.",
        difficulty: "warmup",
        guideRef: "chronology-and-periods",
        hints: ["The Middle Ages are usually said to end around 1500. What comes next?"],
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m3-q02",
        question:
          "Julius Caesar's first expedition to Britain was in 55 BC. The Roman invasion under Emperor Claudius was in AD 43. How many years apart were they?",
        options: ["98 years", "97 years", "12 years", "88 years"],
        answerIndex: 1,
        explanation:
          "Count 55 years from 55 BC to the end of 1 BC, then 42 more from AD 1 to AD 43: 55 + 43 − 1 = 97, because there was no year 0. '98 years' is the trap of simply adding 55 + 43 as if a year 0 existed.",
        difficulty: "challenge",
        guideRef: "chronology-and-periods",
        hints: [
          "BC dates count backwards towards 1 BC; AD dates count forwards from AD 1.",
          "Adding the two numbers is close — but think about what comes between 1 BC and AD 1.",
          "There was no year 0, so subtract one from 55 + 43.",
        ],
        strategy: "Use the chronology",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m3-q03",
        question: "A speech made by Emmeline Pankhurst in 1908 is an example of…",
        options: [
          "a secondary source about the suffragettes",
          "an interpretation written by a historian",
          "a primary source for the suffragette campaign",
          "an anachronism",
        ],
        answerIndex: 2,
        explanation:
          "It was made at the time by someone directly involved, so it is a primary source. It is not an interpretation — interpretations are later accounts, such as a historian's book about the campaign.",
        difficulty: "warmup",
        guideRef: "sources-and-evidence",
        hints: ["Was Pankhurst involved in the campaign, and did she speak at the time?"],
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m3-q04",
        question: "Which fact about the Bayeux Tapestry belongs to the **Origin** part of NOP?",
        options: [
          "It is an embroidered cloth about 70 metres long",
          "It was probably meant to justify William's conquest",
          "It shows Harold swearing an oath to William",
          "It was probably made in the decade or so after 1066, for Bishop Odo, William's half-brother",
        ],
        answerIndex: 3,
        explanation:
          "Origin is about who made a source, when and where — the years after 1066 and Bishop Odo. 'Meant to justify William's conquest' is tempting because it also concerns the Normans, but it is about WHY it was made, which is Purpose. Its form is Nature; what it shows is content.",
        difficulty: "core",
        guideRef: "sources-and-evidence",
        hints: [
          "Sort each option: is it about what it is, who/when, why, or what it shows?",
          "Origin answers 'who made it, and when?'",
        ],
        strategy: "Check the provenance (NOP)",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m3-q05",
        question:
          "The Bayeux Tapestry shows a figure under the name 'Harold' with what may be an arrow near his eye. Another early account, the *Carmen de Hastingae Proelio*, says Harold was cut down by knights. What is the best conclusion?",
        options: [
          "Harold definitely died from an arrow in the eye, because the Tapestry is a primary source",
          "The sources do not corroborate each other, so exactly how Harold died remains uncertain",
          "Harold survived the Battle of Hastings",
          "The *Carmen* must be right, because it uses words rather than pictures",
        ],
        answerIndex: 1,
        explanation:
          "When two early sources disagree, a careful historian says the matter is uncertain — and the Tapestry has been restored over the centuries, so even its picture is debated. 'Definitely an arrow, because it is primary' is the trap: being primary does not settle a disagreement.",
        difficulty: "core",
        guideRef: "sources-and-evidence",
        hints: [
          "Do the two sources agree?",
          "If they do not, can either one alone prove what happened?",
        ],
        strategy: "Cross-reference sources",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m3-q06",
        question: "What is the best definition of **reliability**?",
        options: [
          "How far a source can be trusted to be accurate",
          "How useful a source is for a particular question",
          "How old a source is",
          "Whether a source is primary or secondary",
        ],
        answerIndex: 0,
        explanation:
          "Reliability is about trust and accuracy. 'How useful a source is for a particular question' is utility — the word students most often confuse it with.",
        difficulty: "warmup",
        guideRef: "utility-and-reliability",
        hints: ["Think of the word 'rely': can you rely on what it says?"],
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m3-q07",
        question:
          "Hans Holbein's portraits of Henry VIII show him standing broad-shouldered, richly dressed and powerful. Which enquiry are they **most** useful for?",
        options: [
          "Exactly what Henry looked like on an ordinary day",
          "What poor people in Tudor England thought of Henry",
          "Why the Pope refused to annul Henry's first marriage",
          "How Henry VIII wanted his power and majesty to be seen",
        ],
        answerIndex: 3,
        explanation:
          "Royal portraits were carefully designed images of power, so they are excellent evidence of how Henry wished to be seen. They are less useful for 'exactly what Henry looked like', because a court painter flattered and posed his subject.",
        difficulty: "core",
        guideRef: "utility-and-reliability",
        hints: [
          "Who were the portraits made for, and why?",
          "A source that flatters is still useful — useful for what?",
        ],
        strategy: "Ask \"useful for what?\"",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m3-q08",
        question:
          "Enquiry: **Why did many people in Edwardian Britain oppose votes for women?**\n\n- Source A: a speech by Emmeline Pankhurst, 1908, demanding the vote.\n- Source B: an anti-suffrage postcard from around 1910 that mocks suffragettes as unwomanly and ridiculous.\n\nWhich judgement is best?",
        options: [
          "Source A is more useful, because it is a primary source and Source B is not",
          "Neither is useful, because both are biased",
          "Source B is more useful, because its one-sided mockery reveals the attitudes of opponents — its bias is the evidence",
          "Source A is more useful, because Pankhurst was the most famous suffragette",
        ],
        answerIndex: 2,
        explanation:
          "The enquiry is about opponents, so a source made by opponents shows their attitudes directly; its bias is exactly what you want to study. 'Neither is useful because both are biased' is the classic trap — bias does not make a source useless. Both sources are primary, so that cannot separate them.",
        difficulty: "challenge",
        guideRef: "utility-and-reliability",
        hints: [
          "Read the enquiry: whose views does it ask about?",
          "Is bias a reason to throw a source away — or can it be the evidence?",
          "Check the claim about primary and secondary: when was each made?",
        ],
        strategy: "Ask \"useful for what?\"",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m3-q09",
        question: "Which of these is a genuine reason why interpretations of the same event can differ?",
        options: [
          "The dates of past events keep changing",
          "Historians may have different evidence available to them",
          "Only one historian is allowed to write about each event",
          "All sources are completely neutral",
        ],
        answerIndex: 1,
        explanation:
          "New evidence (or access to different evidence) changes interpretations — modern historians of King John used government records that the monks who wrote about him did not study. 'All sources are completely neutral' is false; if it were true, interpretations would differ far less.",
        difficulty: "warmup",
        guideRef: "interpretations",
        hints: ["Think about King John: what could modern historians read that Matthew Paris did not?"],
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m3-q10",
        question:
          "Interpretation: “Hitler did not seize power — he was handed it by a small group of conservative politicians.” Which evidence best **supports** this interpretation?",
        options: [
          "Von Papen persuaded President Hindenburg to appoint Hitler Chancellor in January 1933, believing he could control him",
          "The Nazis won about 37% of the vote in July 1932",
          "Around six million Germans were unemployed in 1932",
          "The Treaty of Versailles had angered many Germans",
        ],
        answerIndex: 0,
        explanation:
          "The interpretation stresses a backroom deal by a few powerful men — Papen's persuasion and Hindenburg's decision fit it exactly. The 37% vote is tempting, but it supports a different interpretation that stresses mass popular support.",
        difficulty: "core",
        guideRef: "interpretations",
        hints: [
          "Identify the key claim: WHO gave Hitler power, according to this view?",
          "Which option is about a small group's decision rather than millions of voters?",
        ],
        strategy: "Use precise evidence",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m3-q11",
        question:
          "A student argues that the Depression was the most important cause of Hitler's rise. Which argument would give the strongest support?",
        options: [
          "It came first in time, before all the other causes",
          "It is the most famous cause",
          "It began with the Wall Street Crash in America",
          "Before it the Nazis won only 2.6% of the vote, and it fed other causes such as unemployment and fear of communism",
        ],
        answerIndex: 3,
        explanation:
          "A strong 'most important' argument uses criteria: was it necessary (Nazi support was tiny before it) and did it strengthen other causes? 'It came first in time' is false — the Treaty of Versailles (1919) and hyperinflation (1923) came earlier — and coming first would not prove importance anyway.",
        difficulty: "core",
        guideRef: "causation-and-consequence",
        hints: [
          "What tests can show a cause was the most important? (Necessary? Affected other causes?)",
          "Check each option for accuracy — did the Depression really come before everything else?",
        ],
        strategy: "Consider the counterfactual",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m3-q12",
        question: "Which type of cause is described as “conditions that build up over many years”?",
        options: ["A trigger", "A short-term cause", "A long-term cause", "A consequence"],
        answerIndex: 2,
        explanation:
          "Long-term causes build up over years, like the unfair estate system in France. A trigger is the opposite — the final, sudden spark.",
        difficulty: "warmup",
        guideRef: "causation-and-consequence",
        hints: ["Which kind of cause takes the most time to build up?"],
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m3-q13",
        question:
          "Many historians argue that Japan's capture of Singapore in February 1942 badly damaged British prestige in Asia and encouraged later demands for independence. In this argument, the growth of demands for independence is…",
        options: [
          "a long-term consequence of the fall of Singapore",
          "a long-term cause of the fall of Singapore",
          "an anachronism",
          "an example of corroboration",
        ],
        answerIndex: 0,
        explanation:
          "The fall came first and the independence demands grew afterwards, over years — so they are a long-term consequence. 'A long-term cause of the fall' reverses the chronology: something that happened later cannot cause something earlier.",
        difficulty: "core",
        guideRef: "causation-and-consequence",
        hints: [
          "Which came first: the fall of Singapore or the growth of independence demands?",
          "Results that come years later are what kind of consequence?",
        ],
        strategy: "Use the chronology",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m3-q14",
        question: "Which statement best describes the **rate** of change in women's voting rights in Britain?",
        options: [
          "Women won equal votes with men in one step in 1918",
          "Nothing changed at all between 1897 and 1928",
          "Women won the vote before most men did",
          "It came in two big steps, in 1918 and 1928, after decades of campaigning",
        ],
        answerIndex: 3,
        explanation:
          "Rate is about speed and pattern: long campaigning with no change in the law, then a big step in 1918 (many women over 30) and another in 1928 (equal votes at 21). 'Equal votes in one step in 1918' is the common 1918/1928 confusion.",
        difficulty: "core",
        guideRef: "significance-and-change",
        hints: [
          "Rate = how fast, and in what pattern, change happened.",
          "What was the difference between 1918 and 1928?",
        ],
        strategy: "Look for change AND continuity",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m3-q15",
        question:
          "A PEEL paragraph argues that the Depression helped Hitler. Which sentence is the **Explain** step?",
        options: [
          "The Depression was an important reason for Hitler's rise.",
          "By 1932 about six million Germans were unemployed.",
          "This mattered because desperate, jobless Germans were more willing to vote for a party that promised work and strong leadership.",
          "Therefore the Depression was a key reason why Hitler became Chancellor.",
        ],
        answerIndex: 2,
        explanation:
          "The Explain step shows HOW the evidence proves the point — 'this mattered because…'. The unemployment figure is tempting because it is precise, but it is the Evidence step; the opening sentence is the Point, and the 'Therefore…' sentence is the Link.",
        difficulty: "challenge",
        guideRef: "significance-and-change",
        hints: [
          "Label each sentence P, E, E or L.",
          "Evidence gives facts; Explain shows why those facts prove the point.",
          "Look for the sentence that answers 'so what?'",
        ],
      },
    ],
  },
];
