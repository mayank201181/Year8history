// ---------------------------------------------------------------------------
// REFERENCE EXAMPLE for content authors — shows the exact shape of the three
// per-topic files. NOT imported by the app.
//
//   lib/topics/<id>/guide.ts     → export const guide: TopicGuide
//   lib/topics/<id>/mcq.ts       → export const mcqPapers: Paper[]
//   lib/topics/<id>/practice.ts  → export const practice: TopicPractice
//
// Import types with a .ts extension and `import type` (files are also loaded
// directly by Node for validation):  import type { … } from "../../types.ts";
// ---------------------------------------------------------------------------
import type { Paper, TopicGuide, TopicPractice } from "./../types.ts";

// ============================== guide.ts ===================================
export const guide: TopicGuide = {
  id: "example",
  title: "Example Topic",
  strand: "Kings & Power",
  icon: "🏰",
  summary: "Four men, one crown, and the year that changed England.",
  intro:
    "In 1066 England had three kings in one year. This topic asks how William of Normandy — a foreigner with a weak claim — ended up on the throne, and how he kept it.",
  guide: [
    {
      id: "succession-crisis-1066",
      heading: "The succession crisis of 1066",
      discovery: {
        problem:
          "January 1066. King Edward has died with no children. Four men want the crown:\n\n- a powerful English earl who was at Edward's deathbed\n- a French duke who says Edward promised him the throne\n- a Viking king whose claim comes from an old deal\n- a 14-year-old boy who is Edward's closest blood relative\n\nBefore you read on: rank them from strongest to weakest claim. What *kind* of claim matters most to you — blood, a promise, power, or being chosen?",
        idea:
          "There was no single rule for choosing a king in 1066. Blood, promises, being chosen by the Witan and raw military power all counted — which is exactly why four men could each believe they had the best claim, and why it ended in battle.",
      },
      body:
        "Edward the Confessor died on **5 January 1066**. The next day the Witan (a council of nobles and churchmen) chose **Harold Godwinson**, Earl of Wessex, and he was crowned.\n\n| Claimant | Basis of claim |\n|---|---|\n| Harold Godwinson | Chosen by the Witan; Edward named him on his deathbed |\n| William of Normandy | Said Edward promised him the crown (1051) and Harold swore an oath (1064) |\n| Harald Hardrada | A deal between earlier Viking and English kings |\n| Edgar Ætheling | Closest blood relative of Edward |\n\n> The strongest claim on paper did not decide the matter — armies did.",
      diagram: `<svg viewBox="0 0 420 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline of January to October 1066"><line x1="20" y1="45" x2="400" y2="45" stroke="#334155" stroke-width="2"/><circle cx="30" cy="45" r="5" fill="#c7d2fe" stroke="#334155"/><text x="30" y="30" font-size="11" text-anchor="middle" font-family="sans-serif">5 Jan</text><text x="30" y="68" font-size="10" text-anchor="middle" font-family="sans-serif">Edward dies</text><circle cx="390" cy="45" r="5" fill="#fecaca" stroke="#334155"/><text x="390" y="30" font-size="11" text-anchor="middle" font-family="sans-serif">14 Oct</text><text x="390" y="68" font-size="10" text-anchor="middle" font-family="sans-serif">Hastings</text></svg>`,
      diagramCaption: "1066 began with a death and ended with a conquest.",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem: "Explain why there was a succession crisis in 1066. (4 marks)",
          steps: [
            "Identify the cause: Edward died without a child to inherit.",
            "Add the second cause: there was no fixed rule, so several men had different kinds of claim.",
            "Support each point with a specific example (Harold chosen by the Witan; William's claimed promise).",
            "Link them: no heir + no clear rule = rival claimants willing to fight.",
          ],
          answer:
            "There was a crisis because Edward the Confessor died in January 1066 without a son. Because England had no fixed rule of succession, several men claimed the throne in different ways: Harold Godwinson was chosen by the Witan, while William of Normandy said Edward had promised him the crown. With no heir and no agreed rule, rival claimants were ready to fight for it.",
          yourTurn: {
            question: "Which council chose Harold Godwinson as king in January 1066?",
            answer: { type: "text", accept: ["Witan", "the Witan", "Witenagemot"] },
            solution: "The Witan — a council of leading nobles and churchmen.",
          },
        },
      ],
      keyPoints: ["Edward died 5 Jan 1066 with no children.", "Four claimants, four kinds of claim.", "Harold crowned 6 Jan 1066."],
      whyItWorks:
        "Medieval kingship rested on several different ideas of legitimacy at once. When they pointed to different people, the question could only be settled by force — a pattern you will see again with John and the Tudors.",
      strategies: ["Compare the claims", "Ask: what kind of evidence is this?"],
      thinkDeeper: "If Edgar had been 30, not 14, would the Witan have chosen him? What does that tell you about what mattered most in 1066?",
    },
  ],
  learn: {
    flashcards: [{ front: "When did Edward the Confessor die?", back: "5 January 1066." }],
    mustKnow: ["Name the four claimants and the basis of each claim."],
    misconceptions: [{ wrong: "William had the strongest claim, so he won.", right: "His claim was weak; he won because of preparation, Harold's decisions and luck." }],
    examMistakes: ["Describing the claimants without explaining WHY that caused a crisis."],
    mnemonics: [{ topic: "The claimants", device: "Happy Williams Hate Edgar", explanation: "Harold, William, Hardrada, Edgar." }],
    realWorld: [{ title: "Succession today", detail: "Modern monarchies use fixed written rules of succession to stop crises like 1066.", emoji: "👑" }],
    videos: [{ title: "1066 succession crisis", channel: "BBC Bitesize", url: "https://www.youtube.com/results?search_query=1066+succession+crisis+claimants" }],
    keyDates: [
      { year: 1066, date: "5 Jan 1066", event: "Edward the Confessor dies", note: "No heir — the crisis begins." },
      { year: 1066, date: "14 Oct 1066", event: "Battle of Hastings", note: "Harold killed; William wins." },
    ],
    keyTerms: [{ term: "Witan", definition: "Council of leading nobles and churchmen that advised the king and helped choose a new one." }],
  },
};

// =============================== mcq.ts ====================================
export const mcqPapers: Paper[] = [
  {
    id: "example-m1",
    title: "MCQ Paper 1",
    questions: [
      {
        kind: "mcq",
        id: "example-m1-q01",
        question: "Why did Harold Godwinson have to march his army north in September 1066?",
        options: [
          "Harald Hardrada had invaded near York",
          "William had landed at Pevensey",
          "The Scots had captured London",
          "Edgar Ætheling had raised a rebellion",
        ],
        answerIndex: 0,
        explanation:
          "Hardrada landed in the north and won at Gate Fulford, so Harold marched to meet him at Stamford Bridge. William landed at Pevensey only after Harold had gone north — that is why the timing was so bad for Harold.",
        difficulty: "core",
        guideRef: "succession-crisis-1066",
        hints: ["Think about which invader arrived first.", "Where did the Vikings land?"],
        strategy: "Use the chronology",
      },
    ],
  },
];

// ============================= practice.ts =================================
export const practice: TopicPractice = {
  quiz: [
    {
      kind: "short",
      id: "example-quiz-q01",
      question: "In what year was the Battle of Hastings fought?",
      answer: { type: "number", value: 1066 },
      solution: ["The Battle of Hastings was fought on 14 October 1066."],
      difficulty: "warmup",
      guideRef: "succession-crisis-1066",
      hints: ["It is the most famous date in English history."],
    },
  ],
  papers: [
    {
      id: "example-p1",
      title: "Practice Paper 1",
      questions: [
        {
          kind: "short",
          id: "example-p1-q01",
          question: "Which Norwegian king invaded England in September 1066?",
          answer: { type: "text", accept: ["Harald Hardrada", "Hardrada", "Harald III", "Harald Sigurdsson"], display: "Harald Hardrada" },
          solution: ["Harald Hardrada, King of Norway, landed in the north with Tostig."],
          traps: [{ spec: { type: "text", accept: ["Harold Godwinson", "Harold"] }, feedback: "Harold Godwinson was the English king — the invader was Harald Hardrada of Norway." }],
          difficulty: "warmup",
          guideRef: "succession-crisis-1066",
          hints: ["His name looks very like the English king's.", "He was known as 'hard ruler'."],
        },
        {
          kind: "written",
          id: "example-p1-q02",
          question: "Explain why William won the Battle of Hastings. (4 marks)",
          marks: 4,
          modelAnswer:
            "One reason was William's preparation: he built a large fleet and brought cavalry and archers, which gave him a more flexible army than Harold's infantry. A second reason was Harold's decisions: he rushed south after Stamford Bridge with tired troops instead of waiting for reinforcements. These linked, because William's mixed army could exploit the weaknesses of a tired shield wall with feigned retreats.",
          markScheme: [
            { point: "Identifies a reason linked to William (preparation, cavalry, archers, feigned retreat, leadership)", keywords: ["cavalry", "archers", "fleet", "feigned", "prepared", "preparation"] },
            { point: "Supports it with specific detail", keywords: ["horses", "knights", "pretend", "retreat", "boats", "ships"] },
            { point: "Identifies a reason linked to Harold or luck (tired army, Stamford Bridge, rushing, wind)", keywords: ["tired", "stamford", "rushed", "exhausted", "wind", "luck"] },
            { point: "Explains how the factors link or which mattered most", keywords: ["because", "so", "linked", "most important", "therefore", "led to"] },
          ],
          commonError: "Telling the story of the battle instead of explaining reasons.",
          difficulty: "core",
          guideRef: "succession-crisis-1066",
          hints: ["Sort reasons into William's skill, Harold's mistakes and luck.", "For each reason, add a specific fact.", "Finish by linking two reasons together."],
          strategy: "Sort causes into categories",
        },
      ],
    },
  ],
  challenge: [
    {
      kind: "written",
      id: "example-ch-q01",
      question:
        "'William won the throne because of luck, not skill.' How far do you agree? (6 marks)",
      marks: 3,
      modelAnswer:
        "Luck mattered: the wind kept William in port until Harold had gone north to fight Hardrada. But William turned that luck into victory through skill — a prepared fleet, papal support and the use of feigned retreats at Hastings. Overall, skill was more important, because luck only gave William an opportunity; without his preparation and leadership he could not have taken it.",
      markScheme: [
        { point: "Argues for luck with specific evidence", keywords: ["wind", "hardrada", "stamford", "luck", "timing"] },
        { point: "Argues for skill with specific evidence", keywords: ["fleet", "pope", "banner", "feigned", "cavalry", "prepared"] },
        { point: "Reaches a supported judgement that weighs the two", keywords: ["more important", "overall", "however", "because", "outweigh"] },
      ],
      difficulty: "challenge",
      guideRef: "succession-crisis-1066",
      hints: ["List the lucky events first.", "Now list what William did to make the most of them.", "Could luck alone have won? Use that to decide."],
      strategy: "Weigh both sides, then judge",
    },
  ],
};
