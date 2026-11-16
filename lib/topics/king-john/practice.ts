import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // =========================================================================
  // QUICK-CHECK QUIZ
  // =========================================================================
  quiz: [
    {
      kind: "mcq",
      id: "king-john-quiz-q01",
      question: "Who was King of England **immediately before** John?",
      options: ["Henry II", "William I", "Richard I", "Henry III"],
      answerIndex: 2,
      explanation:
        "John's older brother **Richard I** (the Lionheart) reigned 1189–1199; when he died in 1199, John became king. **Henry II** was their father, who died in 1189 — he reigned before Richard, not directly before John. Henry III was John's son, who reigned *after* him.",
      difficulty: "warmup",
      guideRef: "becoming-king",
      hints: ["John took the throne in 1199 when a brother of his died of a crossbow wound."],
      strategy: "Put it in chronological order",
    },
    {
      kind: "short",
      id: "king-john-quiz-q02",
      question: "In which year was John crowned King of England?",
      answer: { type: "number", value: 1199 },
      traps: [
        { spec: { type: "number", value: 1189 }, feedback: "1189 is when **Richard I** was crowned. John had to wait another ten years." },
        { spec: { type: "number", value: 1215 }, feedback: "1215 is Magna Carta — near the *end* of John's reign, not the start." },
      ],
      solution: ["Richard I died in April 1199 from a crossbow wound at Châlus in France.", "John was crowned at Westminster Abbey on 27 May **1199**."],
      difficulty: "warmup",
      guideRef: "becoming-king",
      hints: ["It was the very end of the 12th century — the year Richard I died."],
      commonError: "Mixing up John's coronation (1199) with Richard's (1189).",
    },
    {
      kind: "short",
      id: "king-john-quiz-q03",
      question: "Which King of France conquered Normandy from John in 1204? Give his name.",
      answer: {
        type: "text",
        accept: ["Philip II", "Philip", "Philip Augustus", "Philippe Auguste", "Philip II of France", "King Philip", "Philip 2", "Philippe II", "Philippe"],
        display: "Philip II (Philip Augustus)",
      },
      traps: [
        { spec: { type: "text", accept: ["Louis", "Prince Louis", "Louis VIII"] }, feedback: "Louis was Philip's **son**, who invaded England in 1216. Who was king of France in 1204?" },
      ],
      solution: ["**Philip II** (also called Philip Augustus) was King of France 1180–1223.", "He took Château Gaillard and then Rouen in 1204, completing the conquest of Normandy."],
      difficulty: "warmup",
      guideRef: "losing-normandy",
      hints: ["He was John's great rival — and Richard I's before that."],
    },
    {
      kind: "mcq",
      id: "king-john-quiz-q04",
      question: "In 1207 Pope Innocent III chose a new **Archbishop of Canterbury**, which John refused to accept. Who did the Pope choose?",
      options: ["Thomas Becket", "Hubert Walter", "John de Gray", "Stephen Langton"],
      answerIndex: 3,
      explanation:
        "Innocent III consecrated **Stephen Langton** in 1207. **John de Gray** was John's own candidate, which is exactly why John was furious. Hubert Walter was the archbishop whose death in 1205 started the dispute, and Thomas Becket was murdered under Henry II back in 1170.",
      difficulty: "core",
      guideRef: "john-and-the-church",
      hints: ["Rule out the archbishop who died in 1205 and the one murdered in 1170.", "Of the two left, one was the king's choice and one was the Pope's.", "The Pope's choice later helped negotiate Magna Carta."],
      strategy: "Think about who benefited",
    },
    {
      kind: "short",
      id: "king-john-quiz-q05",
      question: "Magna Carta was agreed in June 1215 in a meadow beside the River Thames. Name the meadow.",
      answer: { type: "text", accept: ["Runnymede", "Runnymead", "Runnimede", "Runneymede", "Runnymede meadow", "Runny Mede"], display: "Runnymede" },
      traps: [
        { spec: { type: "text", accept: ["Windsor", "Windsor Castle"] }, feedback: "Close — John rode out from **Windsor** Castle, but the meeting was held in the meadow between Windsor and Staines. What is it called?" },
      ],
      solution: ["The king and the rebel barons met at **Runnymede**, a meadow by the Thames between Windsor and Staines.", "Neutral, open ground suited both sides, who did not trust each other."],
      difficulty: "warmup",
      guideRef: "magna-carta",
      hints: ["The name sounds a little like 'running meadow'."],
    },
    {
      kind: "mcq",
      id: "king-john-quiz-q06",
      question: "In May 1215 the rebel barons **renounced their homage** to John. What did this mean?",
      options: [
        "They formally withdrew their loyalty to him as their lord",
        "They refused to pay money to the Pope",
        "They agreed to fight for him in France one last time",
        "They handed their castles over to the Church",
      ],
      answerIndex: 0,
      explanation:
        "**Homage** was the ceremony in which a vassal swore loyalty to his lord. Renouncing it meant the barons no longer accepted John as their lord — open rebellion. Refusing to pay the Pope is wrong: John, not the barons, had promised the Pope money, in 1213.",
      difficulty: "core",
      guideRef: "barons-revolt",
      hints: ["Think back to the feudal system: what did a vassal promise his lord?", "To 'renounce' something is to give it up formally."],
      strategy: "Use precise evidence",
    },
    {
      kind: "written",
      id: "king-john-quiz-q07",
      question:
        "**Source A** — clause 39 of Magna Carta, 1215 (modern translation).\n\n> No free man shall be seized or imprisoned, or stripped of his rights or possessions, or outlawed or exiled, or deprived of his standing in any other way, nor will we proceed with force against him, or send others to do so, except by the lawful judgement of his equals or by the law of the land.\n\nWhat can you infer from Source A about how the barons felt John had treated people? (2 marks)",
      marks: 2,
      modelAnswer:
        "I can infer that the barons believed John had been punishing people **without a fair trial** — imprisoning them or taking their lands simply because he chose to. The clause lists seizing, imprisoning, outlawing and taking possessions, which suggests these things had actually been happening, otherwise the barons would not have needed to ban them. It also says this must only happen by the 'lawful judgement of his equals', which tells me the barons wanted the king to be bound by the law rather than acting on his own will.",
      markScheme: [
        { point: "Makes a valid inference: John had punished or imprisoned people without trial / arbitrarily", keywords: ["without trial", "without a trial", "unfair", "arbitrary", "whenever he wanted", "imprisoned", "seized", "no trial", "punished"] },
        { point: "Supports the inference with detail from the source (e.g. 'lawful judgement of his equals', the list of punishments)", keywords: ["lawful judgement", "equals", "law of the land", "free man", "outlawed", "exiled", "possessions"] },
      ],
      difficulty: "core",
      guideRef: "magna-carta",
      hints: ["People rarely write a rule against something that has never happened.", "Look at the list of things the king must not do. What had John probably been doing?", "Use the phrase 'lawful judgement of his equals' as your evidence."],
      strategy: "Make an inference",
      commonError: "Just copying out the clause instead of saying what it *suggests* about John.",
    },
    {
      kind: "short",
      id: "king-john-quiz-q08",
      question: "Magna Carta (1215) had 63 clauses. How many clauses of Magna Carta are **still law** in England and Wales today?",
      answer: { type: "number", value: 3 },
      traps: [
        { spec: { type: "number", value: 63 }, feedback: "Most clauses were about medieval problems — fish weirs, forests, scutage — and were repealed long ago. Only a handful survive." },
        { spec: { type: "number", value: 0 }, feedback: "Not quite none: a few clauses (from the later 1297 version) are still on the statute book." },
      ],
      solution: ["Only **three** clauses remain law: the freedom of the English Church, the liberties of the City of London, and the clause combining the old clauses 39 and 40 (no imprisonment without lawful judgement; justice not sold, denied or delayed)."],
      difficulty: "core",
      guideRef: "legacy-of-magna-carta",
      hints: ["Most of the clauses dealt with medieval problems that no longer exist.", "The number is very small — fewer than five."],
      commonError: "Assuming Magna Carta is still a working rulebook — its fame today is mostly symbolic.",
    },
    {
      kind: "mcq",
      id: "king-john-quiz-q09",
      question: "Roger of Wendover described John as cruel and godless. Why should historians treat his account with **caution**?",
      options: [
        "He was a Victorian writer living centuries after John",
        "He was one of the rebel barons who fought against John in 1215",
        "He was a monk writing after John's death, and the Church had suffered badly under John",
        "He wrote in French, so his chronicle cannot be translated accurately",
      ],
      answerIndex: 2,
      explanation:
        "Roger of Wendover was a **monk at St Albans**, writing in the 1220s–30s. The Church had suffered from John's seizure of its lands and money during the Interdict, so a monk had good reason to be hostile. He was not a Victorian — the 'bad King John' of Victorian historians came much later — and he was a churchman, not one of the rebel barons.",
      difficulty: "core",
      guideRef: "bad-king-john",
      hints: ["Use NOP: Nature, Origin, Purpose. Who was Roger of Wendover?", "Think about what John did to Church property during the Interdict."],
      strategy: "Check the provenance (NOP)",
    },
    {
      kind: "written",
      id: "king-john-quiz-q10",
      question: "Explain **one** way in which losing Normandy in 1204 caused problems between John and his barons. (3 marks)",
      marks: 3,
      modelAnswer:
        "Losing Normandy meant John needed huge sums of money to raise armies and win it back. He squeezed his English barons with **frequent scutage** (payments instead of military service), high fines and taxes such as the 1207 tax on income and goods. This angered the barons because they were paying more and more for wars that kept failing — so losing Normandy led to the money grievances that fuelled their rebellion in 1215. Many barons who had lost lands in Normandy also blamed John personally, which damaged their trust in him.",
      markScheme: [
        { point: "Identifies a problem: John needed much more money to win Normandy back", keywords: ["money", "taxes", "tax", "scutage", "fines", "pay", "win it back", "army", "armies"] },
        { point: "Explains how this affected the barons (heavier demands, or lost lands/humiliation)", keywords: ["barons", "angry", "angered", "resent", "lost lands", "more and more", "heavy", "squeezed"] },
        { point: "Links the problem to the later conflict/rebellion of 1215", keywords: ["rebel", "rebellion", "1215", "magna carta", "revolt", "distrust", "trust"] },
      ],
      difficulty: "core",
      guideRef: "losing-normandy",
      hints: ["What would John need in order to try to win Normandy back?", "Who would he get that from?", "Now link it forward: what did the barons do in 1215?"],
      strategy: "Link the causes",
      commonError: "Describing the loss of Normandy without explaining how it affected the barons.",
    },
  ],

  // =========================================================================
  // PRACTICE PAPERS
  // =========================================================================
  papers: [
    // -----------------------------------------------------------------------
    // PRACTICE PAPER 1
    // -----------------------------------------------------------------------
    {
      id: "king-john-p1",
      title: "Practice Paper 1",
      questions: [
        {
          kind: "short",
          id: "king-john-p1-q01",
          question: "As the youngest son of Henry II, with no great lands of his own to inherit, John was given a nickname. What was it?",
          answer: { type: "text", accept: ["Lackland", "Lack Land", "Lack-land", "John Lackland", "Sans Terre", "Jean sans Terre", "Lackeland"], display: "Lackland" },
          traps: [
            { spec: { type: "text", accept: ["Softsword", "Soft Sword", "Soft-sword"] }, feedback: "'Softsword' came later, after he *lost* Normandy in 1204. Which nickname did he have as a young man with no lands?" },
          ],
          solution: ["Henry II's lands were meant for John's older brothers.", "So young John 'lacked land' — he was nicknamed **Lackland** (in French, *sans Terre*)."],
          difficulty: "warmup",
          guideRef: "becoming-king",
          hints: ["The nickname describes what he did *not* have."],
        },
        {
          kind: "short",
          id: "king-john-p1-q02",
          question: "In which year did John lose Normandy to Philip II of France?",
          answer: { type: "number", value: 1204 },
          traps: [
            { spec: { type: "number", value: 1214 }, feedback: "1214 is the Battle of **Bouvines**, when John's plan to win Normandy *back* failed. When was it lost in the first place?" },
            { spec: { type: "number", value: 1066 }, feedback: "1066 is when the Duke of Normandy conquered England. When did England's king lose Normandy?" },
          ],
          solution: ["Château Gaillard fell in March **1204** and Rouen surrendered that summer.", "Normandy, held by English kings since 1066, was gone."],
          difficulty: "warmup",
          guideRef: "losing-normandy",
          hints: ["It was five years after John became king in 1199."],
        },
        {
          kind: "mcq",
          id: "king-john-p1-q03",
          question: "In 1209 Pope Innocent III **excommunicated** John. What did this mean?",
          options: [
            "John was personally cut off from the Church and its sacraments",
            "Church services were banned across the whole of England",
            "John had to pay the Pope 1,000 marks every year",
            "John was removed from the throne and replaced by Prince Louis",
          ],
          answerIndex: 0,
          explanation:
            "**Excommunication** was a personal punishment: John was shut out of the Church and its sacraments, putting his soul in danger in medieval eyes and giving others an excuse to disobey him. The ban on church services across England was the **Interdict** (from 1208) — a punishment on the whole country. The 1,000 marks a year came later, when John submitted in 1213.",
          difficulty: "warmup",
          guideRef: "john-and-the-church",
          hints: ["Excommunication hit one person; the Interdict hit a whole country."],
          strategy: "Use precise evidence",
        },
        {
          kind: "short",
          id: "king-john-p1-q04",
          question: "Which Pope placed England under the Interdict in 1208?",
          answer: { type: "text", accept: ["Innocent III", "Innocent 3", "Pope Innocent III", "Innocent", "Pope Innocent", "Innocent the Third", "Pope Innocent 3"], display: "Innocent III" },
          traps: [
            { spec: { type: "text", accept: ["Stephen Langton", "Langton"] }, feedback: "Langton was the archbishop at the centre of the quarrel. Who was the **Pope** who chose him?" },
          ],
          solution: ["**Innocent III** (Pope 1198–1216) was one of the most powerful medieval popes.", "When John refused to accept Stephen Langton as Archbishop of Canterbury, Innocent placed England under an Interdict in 1208."],
          difficulty: "core",
          guideRef: "john-and-the-church",
          hints: ["He was Pope for John's whole reign.", "His name sounds like a word meaning 'not guilty'."],
        },
        {
          kind: "short",
          id: "king-john-p1-q05",
          question: "In May 1215 the rebel barons captured a city, which forced John to negotiate. Which city?",
          answer: { type: "text", accept: ["London", "the City of London", "City of London"], display: "London" },
          traps: [
            { spec: { type: "text", accept: ["Runnymede"] }, feedback: "Runnymede is where they *negotiated* in June. Which city did they seize in May?" },
          ],
          solution: ["The rebels entered **London** on 17 May 1215.", "Holding the kingdom's richest city meant John could not simply crush them, so he agreed to talks at Runnymede."],
          difficulty: "core",
          guideRef: "barons-revolt",
          hints: ["Think about which city would give the rebels the most money and power.", "It was the largest and richest city in England."],
        },
        {
          kind: "short",
          id: "king-john-p1-q06",
          question: "Which numbered clause of Magna Carta (1215) says no free man may be imprisoned except 'by the lawful judgement of his equals or by the law of the land'? Give the clause number.",
          answer: { type: "number", value: 39 },
          traps: [
            { spec: { type: "number", value: 40 }, feedback: "Clause 40 is the next one: justice will not be sold, denied or delayed. Which clause is about imprisonment?" },
            { spec: { type: "number", value: 61 }, feedback: "Clause 61 is the security clause (the 25 barons). Try again." },
          ],
          solution: ["It is **clause 39**.", "Together with clause 40, it is the most famous part of Magna Carta and the root of the idea of a fair trial."],
          difficulty: "core",
          guideRef: "magna-carta",
          hints: ["It comes just before the clause promising justice won't be sold, denied or delayed.", "It is in the late thirties."],
        },
        {
          kind: "written",
          id: "king-john-p1-q07",
          question:
            "**Source A** — clause 12 of Magna Carta, 1215 (modern translation).\n\n> No 'scutage' or 'aid' may be levied in our kingdom without its general consent, unless it is for the ransom of our person, to make our eldest son a knight, and (once) to marry our eldest daughter. For these purposes only a reasonable 'aid' may be levied.\n\nWhat can you infer from Source A about the barons' complaints against John? (3 marks)",
          marks: 3,
          modelAnswer:
            "I can infer that the barons were angry that John had been demanding **scutage** too often and without asking them. The clause says scutage can only be taken 'with general consent', which suggests John had been taking it whenever he liked — in fact he levied it eleven times in his reign, often at high rates, to pay for his wars in France. The exceptions (ransom, knighting his son, marrying his daughter) were the traditional, accepted reasons, which suggests the barons felt John had broken old customs. So the source shows that the barons wanted a say over taxation.",
          markScheme: [
            { point: "Infers that John had been taking scutage/taxes too often or without agreement", keywords: ["too often", "without consent", "without asking", "whenever he liked", "scutage", "taxes", "taxed"] },
            { point: "Supports with detail from the source (e.g. 'general consent', the listed exceptions)", keywords: ["general consent", "consent", "ransom", "eldest son", "eldest daughter", "reasonable aid"] },
            { point: "Uses own knowledge to explain the context (wars in France / Normandy / frequent scutage)", keywords: ["normandy", "france", "wars", "eleven", "11 times", "philip", "bouvines", "army"] },
          ],
          difficulty: "core",
          guideRef: "magna-carta",
          hints: ["What does the clause *forbid*? That is a clue about what had been happening.", "Notice the words 'general consent' — who had not been consulted?", "Add what you know: why did John need so much scutage after 1204?"],
          strategy: "Make an inference",
          commonError: "Explaining what scutage is without making an inference about the barons' complaints.",
        },
        {
          kind: "written",
          id: "king-john-p1-q08",
          question:
            "**Source B** — from the *Chronica Majora* by **Matthew Paris**, a monk at St Albans Abbey, written in the 1240s–1250s, over thirty years after John's death (as commonly translated).\n\n> Foul as it is, Hell itself is made fouler by the presence of John.\n\nHow useful is Source B for an enquiry into what kind of king John was? (4 marks)",
          marks: 4,
          modelAnswer:
            "Source B is useful because it shows how **John was remembered** by monks in the decades after his death: as so wicked that he made Hell worse. It fits with some known facts, such as John's seizing of Church property during the Interdict. However, its usefulness for judging what kind of king John *actually was* is limited by its provenance. Matthew Paris was a monk, and the Church had suffered badly under John, so he had a motive to exaggerate. He was writing over thirty years later, partly copying Roger of Wendover, so he was not an eyewitness. It is also a dramatic insult, not evidence about John's government — it says nothing about his hard work on justice and finance shown in royal records. Overall, it is more useful as evidence of the Church's hostile view than as a balanced judgement on John.",
          markScheme: [
            { point: "Explains what the source is useful for (e.g. how John was seen/remembered by monks)", keywords: ["remembered", "reputation", "monks", "church view", "hated", "how he was seen", "attitude"] },
            { point: "Uses the origin: a monk, and the Church had suffered under John, so likely biased", keywords: ["monk", "church", "biased", "bias", "interdict", "church lands", "hostile", "st albans"] },
            { point: "Uses the date/nature: written 30+ years later, not an eyewitness, copied Wendover", keywords: ["later", "30 years", "thirty", "after his death", "not an eyewitness", "wendover", "copied", "1240s", "1250s"] },
            { point: "Reaches a supported judgement on usefulness (useful for attitudes, limited for a balanced picture)", keywords: ["overall", "limited", "more useful", "partly useful", "however", "judgement", "royal records", "administrator"] },
          ],
          difficulty: "core",
          guideRef: "bad-king-john",
          hints: ["Useful for *what*? A source can be poor evidence of one thing and great evidence of another.", "Use NOP: who wrote it, when, and why might he dislike John?", "Finish with a judgement: useful for showing how monks saw John, limited as a fair verdict."],
          strategy: "Check the provenance (NOP)",
          commonError: "Saying 'it is biased so it is useless' — biased sources are still useful evidence of attitudes.",
        },
        {
          kind: "written",
          id: "king-john-p1-q09",
          question: "Explain why John needed to raise so much money between 1204 and 1214. (4 marks)",
          marks: 4,
          modelAnswer:
            "The main reason was that John was determined to **win back Normandy** after losing it to Philip II in 1204. Armies of knights and paid soldiers, ships and alliances with princes such as Otto IV were enormously expensive, so he levied scutage again and again and in 1207 demanded a tax of a thirteenth of people's income and goods. A second reason was **prices and the cost of war were rising**, and he no longer had the rich revenues of Normandy itself, so England had to pay for everything. These pressures led him to sell offices, charge huge fines to heirs and widows, and squeeze the Jewish community. All of this was aimed at one goal — the great campaign of 1214, which ended in defeat at Bouvines.",
          markScheme: [
            { point: "Explains the main reason: to win back Normandy / fight Philip II", keywords: ["win back", "normandy", "philip", "france", "reconquer", "war", "wars"] },
            { point: "Explains the cost of armies, ships, allies (e.g. Otto IV)", keywords: ["army", "armies", "soldiers", "mercenaries", "ships", "allies", "otto", "expensive"] },
            { point: "Explains a second reason: loss of Normandy's income / rising prices", keywords: ["income", "revenue", "rising prices", "inflation", "lost income", "no longer"] },
            { point: "Supports with precise methods/examples (scutage, 1207 tax, fines, selling offices) and links them to the goal", keywords: ["scutage", "1207", "thirteenth", "fines", "selling offices", "widows", "heirs", "bouvines", "1214"] },
          ],
          difficulty: "core",
          guideRef: "losing-normandy",
          hints: ["What did John lose in 1204, and what did he spend the next ten years trying to do?", "Armies, ships and allies all cost money. Who were John's allies in 1214?", "Bring in a second reason: Normandy had also been a *source* of income."],
          strategy: "Long-term vs short-term causes",
          commonError: "Listing ways John raised money instead of explaining *why* he needed it.",
        },
        {
          kind: "written",
          id: "king-john-p1-q10",
          question: "Explain why the disappearance of **Arthur of Brittany** in 1203 damaged John. (3 marks)",
          marks: 3,
          modelAnswer:
            "Arthur, John's teenage nephew, had a rival claim to the throne and was captured by John at Mirebeau in 1202. When he vanished in John's custody in 1203, people widely believed John had **had him murdered** — some said he killed him with his own hands. This damaged John because it made him seem cruel and untrustworthy, so barons in Brittany, Anjou and Normandy turned against him and helped Philip II. That made the loss of Normandy in 1204 more likely, and the rumour stuck to John's reputation for good.",
          markScheme: [
            { point: "Explains that Arthur was a rival claimant held prisoner by John", keywords: ["rival", "claim", "nephew", "prisoner", "captured", "mirebeau", "custody"] },
            { point: "Explains that people believed John had him murdered, making John seem cruel/untrustworthy", keywords: ["murder", "murdered", "killed", "cruel", "untrustworthy", "rumour", "reputation"] },
            { point: "Links to consequences: lords turned against John, helping Philip take Normandy", keywords: ["turned against", "deserted", "philip", "normandy", "brittany", "anjou", "support", "1204"] },
          ],
          difficulty: "core",
          guideRef: "becoming-king",
          hints: ["Who was Arthur, and why was he dangerous to John?", "What did people suspect had happened to him?", "How might lords in France react to a king suspected of killing his nephew?"],
          strategy: "Think about who benefited",
          commonError: "Stating as fact that John killed Arthur — we don't know for certain; say 'probably' or 'people believed'.",
        },
        {
          kind: "written",
          id: "king-john-p1-q11",
          question: "Aisha writes: *'Magna Carta gave rights and freedom to all English people in 1215.'* Explain **two** ways in which her statement is inaccurate. (4 marks)",
          marks: 4,
          modelAnswer:
            "First, Magna Carta did **not apply to everyone**. Most of its clauses protected barons, the Church and other free men; clause 39 only protected a 'free man', and most English people were unfree villeins who gained very little. Most clauses dealt with barons' grievances such as scutage, reliefs and widows' remarriage. Second, it did **not last in 1215**: within about ten weeks Pope Innocent III declared it null and void, and the First Barons' War broke out. Its importance came later, when it was reissued in 1216, 1217 and 1225 and later generations reinterpreted it as a charter of everyone's liberties. So Aisha is reading a later meaning back into 1215.",
          markScheme: [
            { point: "Identifies that it mainly protected barons/free men, not everyone", keywords: ["barons", "free men", "free man", "not everyone", "church", "rich", "nobles"] },
            { point: "Explains with evidence: villeins (unfree peasants) gained little; clause 39 says 'free man'", keywords: ["villeins", "villein", "peasants", "unfree", "clause 39", "majority"] },
            { point: "Identifies that it failed in 1215: annulled by the Pope / war broke out", keywords: ["annulled", "pope", "null and void", "cancelled", "war", "barons' war", "ten weeks", "august"] },
            { point: "Explains that its importance came later (reissues/later reinterpretation) — avoiding hindsight", keywords: ["reissued", "1216", "1217", "1225", "later", "hindsight", "symbol", "reinterpreted"] },
          ],
          difficulty: "challenge",
          guideRef: "legacy-of-magna-carta",
          hints: ["Check two words in her sentence: 'all' and '1215'.", "Who does clause 39 actually protect? Who were most English people in 1215?", "What happened to the charter a few weeks after Runnymede — and when did it become important?"],
          strategy: "Avoid hindsight",
          commonError: "Agreeing with the statement because Magna Carta is famous today.",
        },
        {
          kind: "written",
          id: "king-john-p1-q12",
          question: "Explain how John's quarrel with the Church (1207–1213) and his defeat at **Bouvines** (1214) were **linked** in causing the crisis of 1215. (4 marks)",
          marks: 4,
          modelAnswer:
            "The two causes are linked by **money and timing**. During the Interdict John seized Church lands and income, which made him richer than ever and paid for his plans to reconquer Normandy. In 1213 he submitted to the Pope so that Philip II could not invade England with the Pope's blessing and so he could go ahead with his great 1214 campaign. But when his allies were crushed at Bouvines in July 1214, all that money had been wasted. John came home **without victory, without the Church's wealth** (he had to repay some of it) and still demanding scutage, so the barons saw he was both weak and grasping. The Church quarrel had made the campaign possible; the defeat turned the barons' long-running anger into open rebellion.",
          markScheme: [
            { point: "Explains that the Church quarrel gave John money (seized Church lands/income)", keywords: ["seized", "church lands", "church money", "income", "richer", "wealth", "interdict"] },
            { point: "Explains that submission in 1213 cleared the way for the 1214 campaign / stopped a French invasion", keywords: ["1213", "submitted", "submission", "pope", "invasion", "philip", "campaign"] },
            { point: "Explains the impact of Bouvines: wasted money, humiliation, no hope of Normandy", keywords: ["bouvines", "1214", "defeat", "wasted", "humiliated", "weak", "otto"] },
            { point: "Makes an explicit link showing how the causes combined to produce rebellion in 1215", keywords: ["linked", "together", "combined", "led to", "because", "so", "rebellion", "1215", "chain"] },
          ],
          difficulty: "challenge",
          guideRef: "barons-revolt",
          hints: ["Don't explain each cause separately — look for the thread connecting them.", "What did John gain from seizing Church property, and what did he spend it on?", "Why did John make peace with the Pope in 1213, just before his big campaign?"],
          strategy: "Link the causes",
          commonError: "Writing two separate mini-essays without showing how one cause affected the other.",
        },
      ],
    },

    // -----------------------------------------------------------------------
    // PRACTICE PAPER 2
    // -----------------------------------------------------------------------
    {
      id: "king-john-p2",
      title: "Practice Paper 2",
      questions: [
        {
          kind: "short",
          id: "king-john-p2-q01",
          question: "Which of John's brothers became king in 1189 and spent most of his reign on crusade and fighting in France? Give his name.",
          answer: {
            type: "text",
            accept: ["Richard", "Richard I", "Richard the Lionheart", "Richard Lionheart", "Richard the Lion Heart", "Richard Coeur de Lion", "King Richard", "Richard 1", "Richard the First"],
            display: "Richard I (the Lionheart)",
          },
          traps: [
            { spec: { type: "text", accept: ["Henry II", "Henry", "Henry 2"] }, feedback: "Henry II was their **father**, who died in 1189. Which brother succeeded him?" },
            { spec: { type: "text", accept: ["Geoffrey", "Geoffrey of Brittany"] }, feedback: "Geoffrey died in 1186 and never became king — but his son Arthur would later rival John." },
          ],
          solution: ["**Richard I**, the Lionheart, reigned 1189–1199.", "He spent only about six months of his reign in England."],
          difficulty: "warmup",
          guideRef: "becoming-king",
          hints: ["He was famous for his courage on the Third Crusade."],
        },
        {
          kind: "short",
          id: "king-john-p2-q02",
          question: "In which year did King John die?",
          answer: { type: "number", value: 1216 },
          traps: [
            { spec: { type: "number", value: 1215 }, feedback: "1215 is Magna Carta. John lived for over a year after it, fighting the barons' war." },
            { spec: { type: "number", value: 1199 }, feedback: "1199 is when John *became* king (and when Richard died)." },
          ],
          solution: ["John died of dysentery at Newark in October **1216**, in the middle of the First Barons' War.", "His nine-year-old son became Henry III."],
          difficulty: "warmup",
          guideRef: "magna-carta",
          hints: ["It was the year after Magna Carta."],
        },
        {
          kind: "short",
          id: "king-john-p2-q03",
          question: "In which year was the Battle of **Bouvines**, where Philip II defeated John's allies?",
          answer: { type: "number", value: 1214 },
          traps: [
            { spec: { type: "number", value: 1204 }, feedback: "1204 is when Normandy was *lost*. Bouvines was John's failed attempt to win it back ten years later." },
          ],
          solution: ["Bouvines was fought on 27 July **1214**.", "It was the year before Magna Carta, and it destroyed John's hopes of recovering Normandy."],
          difficulty: "warmup",
          guideRef: "barons-revolt",
          hints: ["It came just one year before Magna Carta."],
        },
        {
          kind: "mcq",
          id: "king-john-p2-q04",
          question: "How did many **American colonists** use the ideas of Magna Carta in the 1760s and 1770s?",
          options: [
            "To claim that the colonists had the right to choose the King of England",
            "To argue that the Pope, not the king, should rule the colonies",
            "To show that slavery had been abolished in 1215",
            "To argue that, as free Englishmen, they could not be taxed without their consent",
          ],
          answerIndex: 3,
          explanation:
            "Colonists argued that the rights of free Englishmen, going back to Magna Carta, meant **no taxation without consent** — echoing the idea in clause 12 that scutage needed 'general consent'. Magna Carta said nothing about abolishing slavery or electing kings, and the Pope plays no part in the colonists' arguments.",
          difficulty: "core",
          guideRef: "legacy-of-magna-carta",
          hints: ["Think about the famous slogan of the American Revolution about taxes.", "Which clause of Magna Carta was about consent to scutage?"],
          strategy: "Spot change and continuity",
        },
        {
          kind: "short",
          id: "king-john-p2-q05",
          question: "When John submitted to the Pope in 1213 and made England a papal fief, how many marks a year did he promise to pay the Pope?",
          answer: { type: "number", value: 1000, display: "1,000 marks" },
          traps: [
            { spec: { type: "number", value: 10000 }, feedback: "Too much — that would have been ruinous every year. The payment was large but symbolic." },
          ],
          solution: ["John promised **1,000 marks** a year (700 for England and 300 for Ireland).", "A mark was two-thirds of a pound, so this was about £667 — a sign of England's new status as a fief of the Pope."],
          difficulty: "core",
          guideRef: "john-and-the-church",
          hints: ["It was a round number in the thousands.", "700 marks were for England and 300 for Ireland."],
        },
        {
          kind: "short",
          id: "king-john-p2-q06",
          question: "What phrase do historians use for the idea, linked to Magna Carta, that **even the king must obey the law**? (Three words.)",
          answer: { type: "text", accept: ["rule of law", "the rule of law", "rule-of-law"], display: "the rule of law" },
          traps: [
            { spec: { type: "text", accept: ["divine right", "divine right of kings"] }, feedback: "Divine right is almost the *opposite*: the belief that the king answers only to God. Which phrase puts the law above the king?" },
          ],
          solution: ["The **rule of law** means everyone, including the ruler, is subject to the law.", "Magna Carta is seen as an early statement of this idea, even though John ignored it at once."],
          difficulty: "core",
          guideRef: "legacy-of-magna-carta",
          hints: ["The law 'rules' — not the king.", "The phrase is '___ of law'."],
        },
        {
          kind: "written",
          id: "king-john-p2-q07",
          question:
            "**Source A** — a description written for this exercise, based on chronicle accounts of England during the Interdict (1208–1214).\n\n> The church doors are locked. No bells ring for Mass. Babies may still be baptised and the dying may still confess, but marriages take place at the church door, and the dead are buried in ditches and fields outside the churchyard, with no priest to pray over them.\n\nWhat can you infer from Source A about the effects of the Interdict on ordinary people? (3 marks)",
          marks: 3,
          modelAnswer:
            "I can infer that the Interdict caused **fear and distress** for ordinary people. Medieval people believed proper burial and church services were essential to reach Heaven, so the source's detail that the dead were 'buried in ditches and fields' suggests families feared for their loved ones' souls. I can also infer that the Pope used ordinary people's suffering to **put pressure on John**: the punishment was aimed at the king, but it hit everyone. However, baptism and confession were still allowed, so the Church did not completely abandon people.",
          markScheme: [
            { point: "Infers that ordinary people suffered fear/distress about their souls", keywords: ["fear", "afraid", "worried", "souls", "heaven", "hell", "distress", "upset"] },
            { point: "Supports with detail from the source (burials outside churchyards, no Mass, marriages at the door)", keywords: ["buried", "ditches", "fields", "no mass", "bells", "church door", "locked"] },
            { point: "Infers a wider point: pressure on John / limits of the ban (baptism, confession allowed)", keywords: ["pressure", "john", "blame", "baptism", "confession", "still allowed", "punish the king"] },
          ],
          difficulty: "core",
          guideRef: "john-and-the-church",
          hints: ["Remember how important religion was to medieval people.", "What would it mean to a family if a relative was buried without a priest?", "Who was the Interdict really aimed at — and why make everyone suffer?"],
          strategy: "Make an inference",
          commonError: "Re-describing the source instead of saying what it suggests about people's feelings.",
        },
        {
          kind: "written",
          id: "king-john-p2-q08",
          question:
            "**Source B** — clause 61 of Magna Carta, 1215, the 'security clause' (modern translation, adapted).\n\n> The barons shall elect twenty-five of their number to keep, and cause to be observed with all their might, the peace and liberties granted… If we… offend in any respect against any man… the twenty-five barons… may distrain upon and assail us in every way possible… by seizing our castles, lands, possessions…\n\nHow useful is Source B for showing how far the barons **trusted** John in 1215? (4 marks)",
          marks: 4,
          modelAnswer:
            "Source B is very useful because it is part of the actual agreement of June 1215, so it shows directly what the barons demanded. It reveals deep **distrust**: they would not rely on John's promise but set up a committee of 25 barons with the right to seize his castles and lands if he broke the charter. No king would accept such a clause unless forced, which shows the barons expected John to cheat. My own knowledge supports this — John had broken promises before and quickly asked the Pope to annul the charter. A limit is that the clause shows the *rebels'* view; it does not tell us how far other barons, many of whom stayed loyal to John, trusted him. Overall it is strong evidence of the rebels' distrust.",
          markScheme: [
            { point: "Uses the content: a committee of 25 who could seize castles/lands shows distrust", keywords: ["25", "twenty-five", "committee", "seize", "castles", "force", "distrust", "did not trust"] },
            { point: "Uses the nature/origin: part of the actual 1215 agreement, a primary record of demands", keywords: ["primary", "actual", "agreement", "1215", "official", "charter itself", "written at the time"] },
            { point: "Supports with own knowledge (broken promises, John asking the Pope to annul it)", keywords: ["broke", "broken promises", "pope", "annul", "annulled", "arthur", "hostages", "war"] },
            { point: "Notes a limitation and reaches a judgement (rebels' view, not all barons)", keywords: ["rebels", "not all", "loyal", "only shows", "limitation", "however", "overall"] },
          ],
          difficulty: "core",
          guideRef: "magna-carta",
          hints: ["Why would the barons need a 'security' clause at all?", "What does it say they could do if John broke the charter?", "Whose view does the clause represent — every baron's, or the rebels'?"],
          strategy: "Check the provenance (NOP)",
          commonError: "Summarising the clause without judging how useful it is for the question about trust.",
        },
        {
          kind: "written",
          id: "king-john-p2-q09",
          question: "Explain why John was able to become king in 1199, even though his nephew **Arthur of Brittany** also had a claim. (4 marks)",
          marks: 4,
          modelAnswer:
            "One reason is that **Richard I named John as his heir** on his deathbed in 1199, which gave John a strong argument. Arthur was the son of John's older brother Geoffrey, so by some customs he had a better claim, but there were no fixed rules of succession and a dying king's wishes counted. A second reason is that John **acted fast and had powerful backing**: he seized the royal treasure at Chinon and was supported by his mother Eleanor of Aquitaine and by leading English figures such as Archbishop Hubert Walter and William Marshal, who preferred an adult to a twelve-year-old. Arthur, by contrast, was a boy backed by Philip II, which made him look like a French puppet to many English barons. So John's adulthood, Richard's choice and quick action outweighed Arthur's claim.",
          markScheme: [
            { point: "Explains that Richard I named John as heir", keywords: ["richard", "named", "heir", "deathbed", "chose", "wishes"] },
            { point: "Explains that there were no fixed succession rules / Arthur's claim through Geoffrey", keywords: ["no fixed rules", "geoffrey", "older brother", "nephew", "custom", "son of"] },
            { point: "Explains John's support and quick action (Eleanor, Hubert Walter, William Marshal, treasure)", keywords: ["eleanor", "mother", "hubert walter", "william marshal", "treasure", "chinon", "quickly", "fast", "support"] },
            { point: "Explains Arthur's weaknesses (a boy, backed by Philip II)", keywords: ["boy", "child", "young", "twelve", "12", "philip", "french", "puppet"] },
          ],
          difficulty: "core",
          guideRef: "becoming-king",
          hints: ["Who did Richard want to succeed him?", "Compare the two rivals: how old was each, and who backed them?", "Which powerful people in England chose John — and why might they fear a child king?"],
          strategy: "Weigh factors",
          commonError: "Assuming eldest-son-inherits rules were fixed in 1199 — succession was still open to argument.",
        },
        {
          kind: "written",
          id: "king-john-p2-q10",
          question: "Give **two** methods John used to raise money from his barons, and explain why **one** of them made the barons especially angry. (3 marks)",
          marks: 3,
          modelAnswer:
            "John raised money through **scutage** (a payment instead of military service) and through **fines and reliefs** — for example charging heirs huge sums to inherit their land and charging widows to avoid being forced to remarry. The fines made barons especially angry because they were **arbitrary and personal**: there was no fixed rate, so John could set them as high as he liked and use the debts to control barons he distrusted. Nicholas de Stuteville, for example, was asked for 10,000 marks to inherit his lands. Barons felt their families' security depended on the king's whim.",
          markScheme: [
            { point: "Identifies one valid method (e.g. scutage)", keywords: ["scutage", "taxes", "tax", "1207", "thirteenth", "tallage"] },
            { point: "Identifies a second valid method (e.g. fines, reliefs, selling offices, widows, wardships)", keywords: ["fines", "reliefs", "relief", "widows", "inherit", "inheritance", "selling offices", "wardship", "marriage"] },
            { point: "Explains why one caused particular anger (frequent, arbitrary, used to control barons, broke custom)", keywords: ["arbitrary", "no fixed", "as high as", "control", "debt", "custom", "too often", "unfair", "whim"] },
          ],
          difficulty: "core",
          guideRef: "losing-normandy",
          hints: ["Think of payments linked to war and payments linked to families.", "Which payments had no fixed amount?", "Why would a baron fear owing the king a huge debt?"],
          strategy: "Use precise evidence",
        },
        {
          kind: "written",
          id: "king-john-p2-q11",
          question: "**'John was a bad king.'** How far do you agree with this statement? (6 marks)",
          marks: 6,
          modelAnswer:
            "There is strong evidence that John was a bad king. He **lost Normandy** in 1204 and failed to win it back at Bouvines in 1214, and he was **cruel and untrustworthy** — Arthur of Brittany probably died on his orders, and Matilda de Braose and her son were starved to death in his prison in 1210. His harsh fines and scutage drove his barons into rebellion, and he broke Magna Carta within weeks.\n\nHowever, there is a case that he was a capable ruler in difficult circumstances. Royal records show he was **hard-working**, travelled constantly hearing court cases, and built up an efficient system for collecting money. He faced Philip II, one of the strongest French kings, and inherited debts from Richard's crusade and ransom. Much of his bad reputation comes from monks like Roger of Wendover, who were biased after the Interdict.\n\nOverall, I mostly agree. John had real skills as an administrator, but a king had to win wars and keep his barons' trust, and John failed at both because of his own suspicion and cruelty.",
          markScheme: [
            { point: "Argues for 'bad': military failure (Normandy 1204, Bouvines 1214)", keywords: ["normandy", "1204", "bouvines", "1214", "lost", "softsword", "defeat"] },
            { point: "Argues for 'bad': cruelty/untrustworthiness (Arthur, Matilda de Braose, hostages, broke Magna Carta)", keywords: ["cruel", "arthur", "braose", "hostages", "untrustworthy", "broke", "murder", "starved"] },
            { point: "Argues against: hard-working, skilled administrator, justice and finance", keywords: ["hard-working", "administrator", "records", "justice", "courts", "efficient", "travelled"] },
            { point: "Argues against: difficult circumstances (Philip II, Richard's debts, inflation) / bad luck", keywords: ["philip", "debts", "ransom", "crusade", "inflation", "unlucky", "luck", "circumstances"] },
            { point: "Evaluates the evidence for his reputation (biased monastic chroniclers, Victorian view)", keywords: ["monks", "chroniclers", "wendover", "matthew paris", "biased", "victorian", "reputation"] },
            { point: "Reaches a clear, supported overall judgement", keywords: ["overall", "i agree", "i disagree", "mostly", "to a large extent", "partly", "judgement", "conclusion"] },
          ],
          solutions: [
            {
              label: "Argument: John was a bad king — his own failings caused disaster",
              steps: [
                "Point: John lost almost all his French lands, the biggest failure of any English king in the period.",
                "Evidence: Normandy fell in 1204; the 1214 campaign ended at Bouvines; rebels and a French prince controlled much of England by 1216.",
                "Explain: his cruelty (Arthur, the de Braose family) and suspicion meant barons would not fight for him.",
                "Judgement: whatever his skills, a king who loses his lands and his barons' loyalty has failed.",
              ],
            },
            {
              label: "Argument: John was an able king with a bad reputation",
              steps: [
                "Point: much of the 'bad King John' image comes from biased monks and later Victorian writers.",
                "Evidence: royal records show a hard-working king who heard cases himself and organised government finance efficiently.",
                "Explain: he faced a brilliant rival in Philip II, inherited debts from Richard's crusade and ransom, and suffered rising prices.",
                "Judgement: John was unlucky and unpopular with those who wrote history, rather than simply a bad king.",
              ],
            },
          ],
          difficulty: "challenge",
          guideRef: "bad-king-john",
          hints: ["Plan two sides: the case for 'bad' and the case against.", "For 'bad': think about Normandy, Bouvines, Arthur and Matilda de Braose. For 'not so bad': think about royal records, Philip II and Richard's debts.", "Ask *who* gave John his bad reputation — and could they be biased?", "End with a judgement that says 'how far' and why."],
          strategy: "Weigh factors",
          commonError: "Writing a one-sided list of bad things John did with no counter-argument or judgement.",
        },
        {
          kind: "written",
          id: "king-john-p2-q12",
          question: "Explain why Magna Carta **failed to bring peace** in 1215. (5 marks)",
          marks: 5,
          modelAnswer:
            "First, **neither side trusted the other**. Magna Carta was a peace treaty forced on John, not something he believed in, and the security clause allowing 25 barons to seize his lands was something no king would accept for long. Second, John quickly **asked the Pope for help**. Since 1213 England had been a papal fief, so Innocent III supported his vassal and in August 1215 declared the charter 'null and void'. Third, the **extreme rebels did not want peace** either: some, like Robert Fitzwalter, kept hold of London and wanted to replace John. Within months the First Barons' War had begun, and in 1216 the rebels invited Prince Louis of France to be king. These reasons linked together: John's submission to the Pope gave him a way out, and the barons' distrust meant they were ready to fight again.",
          markScheme: [
            { point: "Explains mutual distrust / the charter was forced on John", keywords: ["trust", "distrust", "forced", "did not believe", "unwilling", "pressure"] },
            { point: "Explains the security clause (25 barons) was unacceptable to John", keywords: ["security clause", "25", "twenty-five", "clause 61", "seize"] },
            { point: "Explains the Pope annulled it (England a papal fief since 1213)", keywords: ["pope", "innocent", "annulled", "null and void", "fief", "1213", "august"] },
            { point: "Explains that extreme rebels wanted to replace John (Fitzwalter, London, Prince Louis)", keywords: ["rebels", "fitzwalter", "london", "louis", "replace", "extreme", "invited"] },
            { point: "Shows links between reasons or the outcome (First Barons' War)", keywords: ["war", "barons' war", "first barons' war", "linked", "led to", "because", "1216"] },
          ],
          difficulty: "challenge",
          guideRef: "magna-carta",
          hints: ["Think about both sides: did John *want* to keep it? Did all the rebels want peace?", "Who did John turn to for help — and why would that person support him after 1213?", "Which clause would any king find impossible to live with?"],
          strategy: "Link the causes",
          commonError: "Treating Magna Carta as a success in 1215 — in the short term it failed completely.",
        },
      ],
    },
  ],

  // =========================================================================
  // CHALLENGE SET
  // =========================================================================
  challenge: [
    {
      kind: "written",
      id: "king-john-ch-q01",
      question: "**Counterfactual:** Suppose Arthur of Brittany, not John, had become king in 1199. Would something like Magna Carta still have happened? Explain your reasoning. (5 marks)",
      marks: 5,
      modelAnswer:
        "Some of the pressures behind Magna Carta had nothing to do with John personally, so something similar might still have happened. Any king in 1199 faced **Philip II**, an ambitious French king determined to take Angevin lands, plus debts from Richard's crusade and ransom and rising prices. Arthur, a twelve-year-old dependent on Philip, might even have lost Normandy faster. Whoever ruled would have needed heavy taxation, and barons resented that.\n\nOn the other hand, Magna Carta also came from **John's own choices**: his quarrel with the Pope, his cruelty (Arthur's death, the de Braose family), his use of hostages and arbitrary fines. A different king might have kept his barons' trust and avoided rebellion.\n\nOverall, I think a crisis between king and barons was likely, but the *specific* charter of 1215 depended on John's personality and the defeat at Bouvines. Counterfactuals help us separate long-term pressures from short-term, personal causes.",
      markScheme: [
        { point: "Identifies pressures that any king would have faced (Philip II, debts, inflation, cost of war)", keywords: ["philip", "debts", "ransom", "crusade", "inflation", "prices", "any king", "pressures"] },
        { point: "Considers Arthur's own weaknesses (a boy, controlled by Philip)", keywords: ["boy", "child", "young", "twelve", "controlled", "puppet", "philip"] },
        { point: "Identifies causes specific to John (cruelty, Church quarrel, fines, hostages, untrustworthy)", keywords: ["cruel", "pope", "church", "interdict", "hostages", "fines", "personality", "untrustworthy"] },
        { point: "Distinguishes long-term/structural causes from short-term/personal ones", keywords: ["long-term", "short-term", "structural", "personal", "trigger", "underlying"] },
        { point: "Reaches a reasoned judgement", keywords: ["overall", "likely", "probably", "judgement", "i think", "conclusion"] },
      ],
      solutions: [
        {
          label: "Argument: yes — the pressures would have produced a crisis anyway",
          steps: [
            "Philip II wanted Normandy whoever was king, and Arthur was his ally, not his rival.",
            "War, debts and rising prices meant heavy demands on barons under any ruler.",
            "Barons were already used to demanding rights: Henry I had issued a Charter of Liberties in 1100.",
          ],
        },
        {
          label: "Argument: no — Magna Carta was John's personal creation",
          steps: [
            "The Interdict, hostage-taking and murders were John's choices.",
            "A trusted king can tax heavily without rebellion — Richard did.",
            "So remove John, and the 1215 crisis probably looks very different.",
          ],
        },
      ],
      difficulty: "challenge",
      guideRef: "becoming-king",
      hints: ["Sort the causes of Magna Carta into two piles: 'any king would face this' and 'this was John's fault'.", "Would Arthur, a boy backed by Philip II, have kept Normandy?", "Richard I also taxed heavily. Why didn't his barons rebel?"],
      strategy: "Long-term vs short-term causes",
      commonError: "Simply saying 'no, because John was bad' without testing which causes depended on him.",
    },
    {
      kind: "short",
      id: "king-john-ch-q02",
      question: "Magna Carta was reissued several times after John's death. In which year was it reissued **alongside the Charter of the Forest**?",
      answer: { type: "number", value: 1217 },
      traps: [
        { spec: { type: "number", value: 1225 }, feedback: "1225 is the reissue that became the definitive version under Henry III. The Charter of the Forest first appeared two years earlier." },
        { spec: { type: "number", value: 1216 }, feedback: "The first reissue (November 1216) came without a forest charter. Look a year later, after the rebels were defeated." },
      ],
      solution: ["After the royalist victory at Lincoln and peace with Prince Louis, the regents reissued Magna Carta in **1217**.", "The forest clauses were taken out and expanded into a separate **Charter of the Forest**, protecting people's rights to use royal forests."],
      difficulty: "challenge",
      guideRef: "legacy-of-magna-carta",
      hints: ["There were reissues in 1216, 1217 and 1225.", "The forest charter came after the war against Prince Louis ended.", "The Battle of Lincoln was in May of that year."],
      strategy: "Put it in chronological order",
    },
    {
      kind: "written",
      id: "king-john-ch-q03",
      question:
        "**Spot the flaws.** Ethan wrote this paragraph:\n\n> *Magna Carta created democracy in England in 1215. King John agreed to it because he wanted to give his people more rights. Clause 39 meant that from then on everybody got a fair trial, and Parliament was set up at Runnymede to make sure the king obeyed.*\n\nIdentify and correct **four** historical errors in Ethan's paragraph. (4 marks)",
      marks: 4,
      modelAnswer:
        "1. Magna Carta **did not create democracy**: nobody voted, and power stayed with the king and a small group of barons and churchmen.\n2. John did not agree willingly — he was **forced** by rebel barons who had captured London, and he asked the Pope to annul it within weeks.\n3. Clause 39 protected only **free men**; most people were unfree villeins, and John ignored the charter anyway, so 'everybody got a fair trial' is wrong.\n4. **Parliament was not set up at Runnymede**. The charter created a committee of 25 barons (the security clause); Parliament grew later, with Simon de Montfort's Parliament of 1265 an important step.",
      markScheme: [
        { point: "Corrects 'democracy': no voting; power stayed with king/barons", keywords: ["not democracy", "no voting", "no votes", "democracy", "barons", "elite", "nobody voted"] },
        { point: "Corrects motive: John was forced by rebels, not generous", keywords: ["forced", "rebels", "london", "unwilling", "did not want", "pressure", "annul"] },
        { point: "Corrects clause 39: only free men; villeins excluded; not enforced", keywords: ["free men", "free man", "villeins", "peasants", "unfree", "not everyone", "ignored"] },
        { point: "Corrects 'Parliament set up at Runnymede': 25 barons; Parliament developed later (1265)", keywords: ["25", "twenty-five", "security clause", "parliament", "later", "1265", "de montfort", "montfort"] },
      ],
      difficulty: "challenge",
      guideRef: "magna-carta",
      hints: ["Check every claim against what you know: who, why, who benefited, and what was set up.", "Did anyone vote in 1215? Did John *want* to agree?", "What did clause 61 set up — and when did Simon de Montfort's Parliament meet?"],
      strategy: "Avoid hindsight",
    },
    {
      kind: "written",
      id: "king-john-ch-q04",
      question:
        "**Source C** — a summary, written for this exercise, of a story told by **Matthew Paris**, a monk of St Albans, in his *Chronica Majora* (written c. 1240s–1250s).\n\n> Matthew Paris claims that in about 1213, during his quarrel with the Pope, John secretly sent envoys to the Muslim ruler of Morocco, offering to convert to Islam and hand over his kingdom in return for help. Matthew says he heard the story from a clerk who was on the journey.\n\nMost historians do not believe this story. Using the provenance of Source C and your own knowledge, explain why they are sceptical. (5 marks)",
      marks: 5,
      modelAnswer:
        "Historians are sceptical first because of **who wrote it**: Matthew Paris was a monk, and the Church had suffered under John during the Interdict, so he had a motive to portray John as godless — and offering to abandon Christianity is the worst charge a monk could make. Second, **when** it was written: about 30–40 years after the events, so Matthew was not an eyewitness, and he is known to have exaggerated and added colourful details to Roger of Wendover's earlier chronicle. Third, the **evidence is weak**: it rests on one clerk's story that no other source or royal record confirms. Fourth, it does **not fit what we know**: in 1213 John actually submitted to the Pope and became his vassal, the opposite of rejecting Christianity. So the story tells us more about how monks remembered John than about what John did.",
      markScheme: [
        { point: "Origin: a monk with reason to dislike John (Interdict, Church losses)", keywords: ["monk", "church", "interdict", "biased", "hostile", "motive", "st albans"] },
        { point: "Date: written decades later, not an eyewitness", keywords: ["later", "decades", "30", "40", "not an eyewitness", "1240s", "1250s", "after his death"] },
        { point: "Reliability of the author: Matthew Paris exaggerated / embellished Wendover", keywords: ["exaggerated", "embellished", "added", "wendover", "dramatic", "colourful", "stories"] },
        { point: "Weak corroboration: a single second-hand witness, no other records confirm it", keywords: ["one clerk", "single", "second-hand", "no other", "corroborate", "records", "uncorroborated", "hearsay"] },
        { point: "Uses own knowledge: in 1213 John submitted to the Pope, contradicting the story", keywords: ["1213", "submitted", "pope", "vassal", "fief", "contradict", "opposite"] },
      ],
      difficulty: "challenge",
      guideRef: "bad-king-john",
      hints: ["Use NOP: who, when, why — then check it against what else we know.", "How many people supposedly witnessed this, and is there any record of it?", "What did John *actually* do about his quarrel with the Pope in 1213?"],
      strategy: "Cross-reference sources",
      commonError: "Saying 'it is biased' without explaining *why* a monk would invent or believe this particular story.",
    },
    {
      kind: "written",
      id: "king-john-ch-q05",
      question: "**Compare** William I and John. Why was William able to keep control of his barons, while John faced a rebellion? (6 marks)",
      marks: 6,
      modelAnswer:
        "William and John both demanded a lot from their barons, but their situations were very different. William **won England by conquest** in 1066, so the barons owed their new lands entirely to him; loyalty brought rewards, rebellion meant losing everything. John **inherited** a kingdom whose barons held their lands by long family right and were used to customary limits on the king.\n\nSecondly, William was a **successful war leader**: victory at Hastings and crushing revolts such as the Harrying of the North made him feared. John was 'Softsword', who lost Normandy in 1204 and failed again at Bouvines in 1214, so fear and respect drained away.\n\nThirdly, William kept **the Church on his side** — the Pope gave his invasion a papal banner and Lanfranc supported him — whereas John's quarrel with Innocent III brought the Interdict and gave rebels the name 'Army of God'.\n\nOverall, military success was the key difference: William's victories made his harshness acceptable, but John's defeats made his heavy demands unbearable.",
      markScheme: [
        { point: "Contrasts how they gained power: conquest and land grants vs inheritance", keywords: ["conquest", "conquered", "1066", "inherited", "inheritance", "gave land", "rewards", "new lands"] },
        { point: "Contrasts military success: Hastings/Harrying vs Normandy 1204 and Bouvines", keywords: ["hastings", "harrying", "victory", "normandy", "bouvines", "softsword", "defeat", "lost"] },
        { point: "Contrasts relations with the Church (papal banner, Lanfranc vs Interdict, Army of God)", keywords: ["pope", "papal banner", "lanfranc", "church", "interdict", "excommunicated", "army of god"] },
        { point: "Considers a similarity (both harsh/ demanding) to sharpen the comparison", keywords: ["both", "similar", "harsh", "cruel", "taxes", "domesday", "demanded"] },
        { point: "Explains why the differences mattered for barons' loyalty", keywords: ["loyal", "loyalty", "feared", "respect", "trust", "rebel", "rebellion"] },
        { point: "Reaches a judgement on the most important difference", keywords: ["overall", "most important", "key difference", "main reason", "judgement"] },
      ],
      solutions: [
        {
          label: "Argument: military success was the key difference",
          steps: [
            "Medieval barons followed a winner who could protect and reward them.",
            "William's victories brought land and plunder; John's defeats brought only bills.",
            "So the same harshness was tolerated under William but resisted under John.",
          ],
        },
        {
          label: "Argument: how they came to power was the key difference",
          steps: [
            "A conqueror creates a new nobility that owes him everything.",
            "An heir inherits barons with their own family rights and expectations.",
            "So John had to work within customs that William could simply override.",
          ],
        },
      ],
      difficulty: "challenge",
      guideRef: "barons-revolt",
      hints: ["Use a comparison grid: how they got power, war record, the Church, how they treated barons.", "Where did William's barons' lands come from? Where did John's barons' lands come from?", "Which king had the Pope on his side?", "Finish by choosing the single biggest difference."],
      strategy: "Compare and contrast",
      commonError: "Writing about William, then about John, without ever directly comparing them.",
    },
    {
      kind: "written",
      id: "king-john-ch-q06",
      question:
        "Read these two interpretations (both written for this exercise to sum up common views).\n\n**Interpretation A** (in the style of a Victorian historian): *John was the very worst of our kings — a tyrant, a liar and a coward, whose wickedness forced good men to rise up for English liberty.*\n\n**Interpretation B** (in the style of a modern historian): *John was a clever, energetic ruler, but suspicious and cruel. Faced with a formidable French king and empty coffers, his methods made enemies faster than his abilities could win friends.*\n\nExplain **why** these interpretations differ, and say which you find more convincing. (6 marks)",
      marks: 6,
      modelAnswer:
        "The interpretations differ partly because of the **evidence** each relies on. Victorian historians such as William Stubbs leaned heavily on the hostile monastic chronicles of Roger of Wendover and Matthew Paris. Modern historians like W. L. Warren have also studied John's government records — the rolls of letters, charters and accounts — which show a hard-working king who heard cases himself.\n\nThey also differ because of **the time they were written**. Victorians were proud of Parliament and English liberty and told Magna Carta's story as heroes against a villain, so John had to be the tyrant. Modern historians try to judge rulers in their own context, considering pressures such as Philip II's power and inflation.\n\nInterpretation B is more convincing because it uses a wider range of evidence and still accepts John's genuine cruelty, such as the death of Arthur and the de Braose family. Interpretation A is weakened by its reliance on biased sources and its moral, story-telling purpose.",
      markScheme: [
        { point: "Explains the difference in evidence used: chronicles vs government records", keywords: ["chronicles", "chroniclers", "wendover", "matthew paris", "records", "rolls", "documents", "evidence"] },
        { point: "Explains the influence of the time/context of writing (Victorian pride in liberty and Parliament)", keywords: ["victorian", "liberty", "parliament", "stubbs", "proud", "heroes", "villain", "context"] },
        { point: "Explains the modern approach: judging John in context (Philip II, money problems)", keywords: ["modern", "warren", "context", "philip", "money", "coffers", "pressures", "circumstances"] },
        { point: "Uses precise knowledge to test Interpretation A", keywords: ["coward", "softsword", "normandy", "bouvines", "biased", "exaggerated", "liar", "arthur"] },
        { point: "Uses precise knowledge to test Interpretation B", keywords: ["hard-working", "administrator", "justice", "cruel", "braose", "arthur", "hostages", "suspicious"] },
        { point: "Reaches a supported judgement on which is more convincing", keywords: ["more convincing", "overall", "judgement", "i find", "stronger", "better supported"] },
      ],
      solutions: [
        {
          label: "Argument: Interpretation B is more convincing",
          steps: [
            "It is based on a wider range of evidence, including government records.",
            "It still accepts John's cruelty, so it is balanced rather than a whitewash.",
            "Interpretation A depends on biased monks and a Victorian 'heroes and villains' story.",
          ],
        },
        {
          label: "Argument: Interpretation A has more truth than it seems",
          steps: [
            "Even balanced modern historians accept John's cruelty, broken promises and military failure.",
            "His contemporaries — barons, not just monks — rebelled against him, which suggests real tyranny.",
            "But its language ('very worst', 'coward') goes beyond the evidence, so it is still less convincing overall.",
          ],
        },
      ],
      difficulty: "challenge",
      guideRef: "bad-king-john",
      hints: ["Interpretations differ for two main reasons: the evidence used and when (and why) they were written.", "Which sources did Victorian historians trust? What else can modern historians use?", "Test each interpretation against facts you know before choosing."],
      strategy: "Consider the counter-argument",
      commonError: "Just describing what each interpretation says, without explaining *why* they differ.",
    },
    {
      kind: "written",
      id: "king-john-ch-q07",
      question: "Explain the **chain of events** that links the loss of Normandy in 1204 to Magna Carta in 1215. (5 marks)",
      marks: 5,
      modelAnswer:
        "1. Losing Normandy in 1204 humiliated John ('Softsword') and cost him its income, so he resolved to **win it back**.\n2. Reconquest needed a huge war chest, so John **squeezed his barons** for ten years with scutage, the 1207 tax, huge fines for inheritances and marriages, and he took hostages to ensure loyalty.\n3. He also spent far more time in England than earlier kings, so his barons felt his **government directly and constantly**, which bred resentment.\n4. In 1214 the great campaign failed at **Bouvines**: the money had been wasted and John looked weak.\n5. Angry barons now had both **grievances and opportunity**: they renounced homage, took London in May 1215 and forced John to agree Magna Carta at Runnymede. Each link made the next more likely, so the loss of Normandy was the long-term starting point of the crisis.",
      markScheme: [
        { point: "Link 1: loss of Normandy led John to plan reconquest / lost income and prestige", keywords: ["win back", "reconquer", "income", "humiliated", "softsword", "1204"] },
        { point: "Link 2: reconquest required heavy taxes, fines, scutage, hostages", keywords: ["scutage", "taxes", "fines", "1207", "hostages", "money", "squeezed"] },
        { point: "Link 3: John was now based in England, so barons felt his rule directly", keywords: ["in england", "present", "directly", "always there", "stayed", "close", "travelled"] },
        { point: "Link 4: failure at Bouvines (1214) wasted the money and made John look weak", keywords: ["bouvines", "1214", "defeat", "wasted", "weak", "failed"] },
        { point: "Link 5: rebellion (homage renounced, London taken) forced Magna Carta; explicit chain reasoning", keywords: ["rebellion", "london", "homage", "runnymede", "forced", "led to", "chain", "so"] },
      ],
      difficulty: "challenge",
      guideRef: "losing-normandy",
      hints: ["Start with John's reaction to losing Normandy: what did he want to do next?", "What did that plan need, and who paid for it?", "What happened in 1214 that turned resentment into revolt?", "Use 'this led to…' between each step."],
      strategy: "Link the causes",
    },
    {
      kind: "written",
      id: "king-john-ch-q08",
      question: "Pope Innocent III had placed England under the Interdict and excommunicated John. Yet in August 1215 he sided with John and **annulled Magna Carta**. Explain why. (4 marks)",
      marks: 4,
      modelAnswer:
        "The key reason is John's **submission in 1213**. By making England a papal fief and becoming the Pope's vassal, John turned Innocent from an enemy into his **feudal lord and protector**. A lord was expected to defend his vassal, and in 1215 John also took a vow to go on crusade, which the Pope valued greatly. Innocent also saw Magna Carta as **an attack on lawful authority**: rebel barons had forced their king, under threat, to give up royal rights — and that king was now the Pope's own vassal, so the charter seemed to insult papal authority too. He called it 'shameful and demeaning' and declared it null and void. So John's 1213 surrender, which looked humiliating, paid off by giving him the Pope's backing against the barons.",
      markScheme: [
        { point: "Explains the 1213 submission made England a papal fief and John the Pope's vassal", keywords: ["1213", "submitted", "fief", "vassal", "papal fief", "surrender"] },
        { point: "Explains the Pope's duty as lord to protect his vassal / John's crusade vow", keywords: ["protect", "lord", "duty", "defend", "crusade", "vow", "ally"] },
        { point: "Explains the Pope saw the charter as forced on a lawful king / attack on authority", keywords: ["forced", "force", "rebels", "authority", "lawful", "threat", "shameful", "demeaning"] },
        { point: "Concludes with how the 1213 decision paid off for John (links cause and consequence)", keywords: ["paid off", "clever", "backing", "support", "null and void", "annulled", "so"] },
      ],
      difficulty: "challenge",
      guideRef: "john-and-the-church",
      hints: ["What changed in John's relationship with the Pope in 1213?", "In feudal terms, what did a lord owe his vassal?", "How would the Pope view barons forcing a king to sign away rights?"],
      strategy: "Think about who benefited",
      commonError: "Thinking the Pope and John were still enemies in 1215.",
    },
  ],
};
