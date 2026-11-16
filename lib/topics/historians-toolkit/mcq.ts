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
          "Take the 'hundreds' (10) and add one: 1066 is in the 11th century, which ran from 1001 to 1100. 'The 10th century' is the classic slip of reading the century straight off the first two digits — but the 1st century was the years 1–100, so the numbering is always one ahead.",
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
          "Hastings (1066), Magna Carta (1215), the Act of Supremacy (1534), the Bastille (1789). The tempting slip is putting the Act of Supremacy before Magna Carta — but Henry VIII lived more than 300 years after King John.",
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
          "Churchill was not alive in 1942, so he could only guess",
          "The source was written by a Japanese officer who wanted to boast",
          "Churchill was Prime Minister in 1942 and wrote with hindsight, so he may have wanted to protect his own reputation",
          "The source is too short to be about Singapore",
        ],
        answerIndex: 2,
        explanation:
          "Churchill led the British government when Singapore fell, so in memoirs written after the war he had a reason to shape how blame was shared. The other options are factually wrong about the origin: Churchill was very much alive and in charge in 1942, and the words are his, not a Japanese officer's.",
        difficulty: "challenge",
        guideRef: "utility-and-reliability",
        hints: [
          "Use Origin and Purpose: who wrote this, what was his job in 1942, and when did he write it?",
          "Would the person in charge at the time of a disaster have any reason to tell the story in a particular way?",
          "Rule out options that are simply false about the source's origin.",
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
  //@@M2@@
];
