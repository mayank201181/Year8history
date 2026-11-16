import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // =========================================================================
  // MCQ PAPER 1
  // =========================================================================
  {
    id: "king-john-m1",
    title: "MCQ Paper 1",
    questions: [
      {
        kind: "mcq",
        id: "king-john-m1-q01",
        question: "As a young man, John was nicknamed **'Lackland'**. Why?",
        options: [
          "He sold off royal lands to pay for the Third Crusade",
          "He had lost Normandy and his other French lands to Philip II",
          "As the youngest son of Henry II, he was not expected to inherit any great lands",
          "The Pope took away his lands when he was excommunicated",
        ],
        answerIndex: 2,
        explanation:
          "John was Henry II's **youngest son**, so his older brothers were due to inherit the great Angevin lands, leaving him 'lacking land'. His critics later gave him a *different* nickname, 'Softsword', for giving up and then losing French lands to Philip II. Raising money for the crusade by selling offices and lands was something **Richard** did.",
        difficulty: "warmup",
        guideRef: "becoming-king",
        hints: ["Think about John's place in the family: how many older brothers did he have?"],
        strategy: "Avoid hindsight",
      },
      {
        kind: "mcq",
        id: "king-john-m1-q02",
        question: "In which year did King John agree to Magna Carta at Runnymede?",
        options: ["1215", "1216", "1066", "1265"],
        answerIndex: 0,
        explanation:
          "Magna Carta was sealed at Runnymede on **15 June 1215**. 1216 is the year John died (and the charter was first reissued); 1265 is Simon de Montfort's Parliament; 1066 is the Norman Conquest.",
        difficulty: "warmup",
        guideRef: "magna-carta",
        hints: ["It was the year after the Battle of Bouvines (1214)."],
        strategy: "Put it in chronological order",
      },
      {
        kind: "mcq",
        id: "king-john-m1-q03",
        question: "Which French king conquered **Normandy** from John in 1204?",
        options: ["Louis VII", "Prince Louis (later Louis VIII)", "Emperor Otto IV", "Philip II (Philip Augustus)"],
        answerIndex: 3,
        explanation:
          "**Philip II** of France took Normandy in 1204. Prince Louis was Philip's son, who invaded England in **1216** at the barons' invitation. Otto IV was John's nephew and **ally**, defeated by Philip at Bouvines in 1214.",
        difficulty: "warmup",
        guideRef: "losing-normandy",
        hints: ["He was John's great rival throughout his reign — and Richard's before that."],
      },
      {
        kind: "mcq",
        id: "king-john-m1-q04",
        question: "What was the **Interdict** that hit England from 1208 to 1214?",
        options: [
          "John's ban on letters from the Pope entering England",
          "A ban by the Pope on most church services in England",
          "A special tax on church lands to pay for the war in France",
          "An order expelling every bishop from England",
        ],
        answerIndex: 1,
        explanation:
          "Pope **Innocent III** placed England under an Interdict: most church services stopped (though babies could still be baptised and the dying could confess). It was the Pope's punishment for John refusing to accept Stephen Langton. John's own response was to **seize church lands and money** — not a tax voted on the Church.",
        difficulty: "warmup",
        guideRef: "john-and-the-church",
        hints: ["It was a punishment from Rome aimed at the whole kingdom, to put pressure on the king."],
      },
      {
        kind: "mcq",
        id: "king-john-m1-q05",
        question: "Which list puts these events in the correct **chronological order**?",
        options: [
          "John crowned → Richard captured returning from crusade → Arthur disappears → Normandy lost",
          "Richard captured returning from crusade → John crowned → Arthur disappears → Normandy lost",
          "Richard captured returning from crusade → Arthur disappears → John crowned → Normandy lost",
          "Richard captured returning from crusade → John crowned → Normandy lost → Arthur disappears",
        ],
        answerIndex: 1,
        explanation:
          "Richard was captured in **1192**, John was crowned in **1199**, Arthur disappeared in John's custody in **1203**, and Normandy fell in **1204**. A common slip is putting Normandy before Arthur — but Arthur's disappearance helped turn Norman and Breton lords against John *before* the collapse.",
        difficulty: "core",
        guideRef: "becoming-king",
        hints: [
          "Start with Richard: he had to be king and away on crusade before anything else could happen.",
          "John could only be crowned once Richard was dead (1199).",
          "Arthur vanished in 1203; Normandy was lost the following year.",
        ],
        strategy: "Put it in chronological order",
      },
      {
        kind: "mcq",
        id: "king-john-m1-q06",
        question: "When Richard I died in 1199, why did some people think **Arthur of Brittany** had a better claim to the throne than John?",
        options: [
          "Arthur was Richard I's only son",
          "Arthur had already been crowned by the Pope",
          "Arthur was the eldest son of Philip II of France",
          "Arthur was the son of Geoffrey, John's older brother",
        ],
        answerIndex: 3,
        explanation:
          "Arthur's father **Geoffrey** was older than John, so by one rule of inheritance Geoffrey's son came before a younger brother. Richard had **no legitimate children**, so Arthur was not his son. Philip II *backed* Arthur, but Arthur was not Philip's son.",
        difficulty: "core",
        guideRef: "becoming-king",
        hints: [
          "Henry II had four sons who grew up: Henry, Richard, Geoffrey and John.",
          "Ask: whose child was Arthur, and where did that parent come in the family order?",
        ],
        strategy: "Think about who benefited",
      },
      {
        kind: "mcq",
        id: "king-john-m1-q07",
        question:
          "**Source A** — Clause 8 of Magna Carta, 1215 (modern translation).\n\n> No widow shall be compelled to marry, so long as she wishes to remain without a husband.\n\nWhat can you **infer** from Source A about John's rule before 1215?",
        options: [
          "John had been pressuring wealthy widows to remarry, or to pay him to avoid it, as a way of making money",
          "Widows were not allowed to own land before 1215",
          "The barons wanted women to have the same rights as men",
          "John had banned widows from marrying again",
        ],
        answerIndex: 0,
        explanation:
          "Clauses were written to stop things that had been happening, so this one suggests John had **forced or sold** the remarriage of rich widows — a known way he raised money and rewarded followers. It does not show the barons wanted equality for women (an anachronism), and the clause protects a widow's choice *not* to marry, so John had not banned remarriage.",
        difficulty: "core",
        guideRef: "barons-revolt",
        hints: [
          "Why would anyone write a rule against something that was not happening?",
          "A rich widow's lands went with her new husband. Who could profit from choosing that husband?",
        ],
        strategy: "Make an inference",
      },
      {
        kind: "mcq",
        id: "king-john-m1-q08",
        question: "Why did losing Normandy in 1204 lead John to demand **more money** from his English barons?",
        options: [
          "Parliament voted him extra taxes to punish the barons who had lost Normandy",
          "Magna Carta allowed him to collect as much scutage as he wanted",
          "He had lost Normandy's income and needed huge sums to pay for armies to win it back",
          "The Pope ordered him to pay compensation to Philip II",
        ],
        answerIndex: 2,
        explanation:
          "Normandy had been a rich source of money and soldiers. To recover it John needed armies and allies, so he squeezed England harder. There was **no Parliament** in 1204 (that comes later in the century), and Magna Carta (1215) actually **limited** scutage — it is a consequence of these demands, not a cause.",
        difficulty: "core",
        guideRef: "losing-normandy",
        hints: [
          "Two problems at once: less money coming in, and a big new cost.",
          "Check the dates — could Magna Carta or Parliament explain something in 1204?",
        ],
        strategy: "Link the causes",
      },
      {
        kind: "mcq",
        id: "king-john-m1-q09",
        question: "Why did John quarrel with **Pope Innocent III** from 1207?",
        options: [
          "John wanted the Pope to grant him a divorce",
          "The Pope ordered John to hand Normandy to Philip II",
          "John refused to go on crusade",
          "The Pope made Stephen Langton Archbishop of Canterbury instead of John's choice",
        ],
        answerIndex: 3,
        explanation:
          "After Archbishop Hubert Walter died in 1205, the choice of a successor was disputed; Innocent III had **Stephen Langton** made archbishop in 1207 and John refused to let him into England. The divorce quarrel with the Pope belongs to **Henry VIII**, over three centuries later.",
        difficulty: "core",
        guideRef: "john-and-the-church",
        hints: [
          "The argument was about a job — the most important one in the English Church.",
          "Be careful not to mix John up with a later king who also fell out with Rome.",
        ],
        strategy: "Compare and contrast",
      },
      {
        kind: "mcq",
        id: "king-john-m1-q10",
        question: "Why was the **Battle of Bouvines** (1214) so damaging for John?",
        options: [
          "John was captured there and had to pay a huge ransom",
          "His allies' defeat ended his hopes of recovering Normandy and left him with huge debts and angry barons",
          "The rebel barons beat John's army there and forced him to agree to Magna Carta",
          "Losing the battle led the Pope to excommunicate him",
        ],
        answerIndex: 1,
        explanation:
          "At Bouvines Philip II crushed John's allies (including Emperor Otto IV). John had spent a fortune on the campaign and came home with nothing — the trigger for the barons' rebellion. John was not even at Bouvines (he was campaigning in Poitou), and being captured for ransom happened to **Richard**. The excommunication came earlier, in **1209**.",
        difficulty: "core",
        guideRef: "barons-revolt",
        hints: [
          "Bouvines was fought in France against Philip II, not in England against the barons.",
          "Think about what John had spent, what he had hoped to gain, and how the barons felt when he got nothing.",
        ],
        strategy: "Long-term vs short-term causes",
      },
      {
        kind: "mcq",
        id: "king-john-m1-q11",
        question:
          "**Source B** — Clause 39 of Magna Carta, 1215 (modern translation).\n\n> No free man shall be seized or imprisoned, or stripped of his rights or possessions, or outlawed or exiled, or deprived of his standing in any other way, nor will we proceed with force against him, or send others to do so, except by the lawful judgement of his equals or by the law of the land.\n\nWhat does Source B mainly show?",
        options: [
          "The king could no longer punish free men just as he pleased — he had to follow the law",
          "Every person in England, including unfree villeins, now had a right to trial by jury",
          "Parliament had to approve every tax the king wanted to raise",
          "The Church would be free from royal interference",
        ],
        answerIndex: 0,
        explanation:
          "Clause 39 says the king must act through **lawful judgement** or **the law of the land** — he is not above the law. It covers only **'free men'**; many peasants were unfree villeins, so it did not give everyone rights in 1215. Taxation is clause 12 (and mentions 'general consent', not Parliament); the Church's freedom is clause 1.",
        difficulty: "core",
        guideRef: "magna-carta",
        hints: [
          "Look closely at who the clause is about: which two words begin it?",
          "What does the king now need before he can imprison or punish someone?",
        ],
        strategy: "Make an inference",
      },
      {
        kind: "mcq",
        id: "king-john-m1-q12",
        question: "After John's death, why was Magna Carta **reissued** in 1216 and 1217?",
        options: [
          "John had changed his mind and ordered it reissued in his will",
          "Parliament insisted on it before it would crown Henry III",
          "The young Henry III's supporters used it to win barons back from Prince Louis and the rebels",
          "Pope Innocent III demanded it as the price of lifting the Interdict",
        ],
        answerIndex: 2,
        explanation:
          "Henry III was only **nine** and a French prince held London. His regent, **William Marshal**, reissued the charter to show the new government would rule fairly, tempting rebels back. The Interdict had already ended in 1214, and the Pope had **annulled** the 1215 charter rather than demanding it.",
        difficulty: "core",
        guideRef: "legacy-of-magna-carta",
        hints: [
          "Think about the situation in late 1216: a child king and a civil war still going on.",
          "What would persuade rebel barons to change sides?",
        ],
        strategy: "Think about purpose",
      },
      {
        kind: "mcq",
        id: "king-john-m1-q13",
        question:
          "**Source C** — Matthew Paris, a monk at St Albans Abbey, writing in the mid-1200s, decades after John's death (adapted translation).\n\n> Foul as it is, hell itself is made fouler by the presence of John.\n\nWhat is the **best reason** to treat Source C with caution?",
        options: [
          "It is a secondary source, so it has no value",
          "Matthew Paris knew John personally and was his enemy at court",
          "It was written in the Victorian period, long after John's reign",
          "Paris was a monk writing after John's death, and the Church had suffered badly under John during the Interdict",
        ],
        answerIndex: 3,
        explanation:
          "Check the **provenance**: Paris was a monk, monks had seen John seize church property, and he wrote decades later, partly copying Roger of Wendover. That gives him a motive to exaggerate. He was not at John's court (he was still young when John died and only became a monk in 1217), and a hostile source still has value — it shows how churchmen remembered John.",
        difficulty: "challenge",
        guideRef: "bad-king-john",
        hints: [
          "Use NOP: who was the author, what was their job, and when did they write?",
          "How had John treated the Church between 1208 and 1213?",
          "A biased source is not useless — but you must explain *why* it might be biased.",
        ],
        strategy: "Check the provenance (NOP)",
      },
      {
        kind: "mcq",
        id: "king-john-m1-q14",
        question: "How did John's route to the throne in 1199 **differ** from William I's in 1066?",
        options: [
          "John was elected by the Witan, while William inherited the crown from Edward the Confessor",
          "John inherited as Henry II's son despite a rival claimant, while William won the crown by conquest",
          "Both men seized the crown by defeating a rival king in battle",
          "John was chosen by the Pope, while William was chosen by the English earls",
        ],
        answerIndex: 1,
        explanation:
          "John came to the throne by **inheritance**, backed by his mother Eleanor and leading barons, even though his nephew Arthur had a rival claim. William won his crown by **conquest** at Hastings. The Witan chose **Harold**, not William, in 1066 — and John was not elected.",
        difficulty: "challenge",
        guideRef: "bad-king-john",
        hints: [
          "For each king ask: did he fight a battle *to get* the crown?",
          "William had a claim, but what actually made him king in 1066?",
        ],
        strategy: "Compare and contrast",
      },
      {
        kind: "mcq",
        id: "king-john-m1-q15",
        question:
          "A student writes: *'Magna Carta was a failure because the Pope cancelled it within weeks.'* Which is the **strongest counter-argument**?",
        options: [
          "It was reissued in 1216, 1217 and 1225 and became accepted as law limiting the king's power",
          "The Pope cancelled it only because John had already broken every clause",
          "It immediately gave every English person the vote",
          "John kept to it loyally until his death in 1216",
        ],
        answerIndex: 0,
        explanation:
          "The 1215 charter did fail in the short term (annulled in August 1215, then civil war), but its **reissues** — especially the 1225 version — turned it into lasting law and the idea that the king is **under the law**. John did *not* keep to it, and no one got the vote from Magna Carta.",
        difficulty: "challenge",
        guideRef: "legacy-of-magna-carta",
        hints: [
          "Accept what is true in the student's point — then look at the longer term.",
          "What happened to the charter after John died?",
        ],
        strategy: "Consider the counter-argument",
      },
    ],
  },

  // =========================================================================
  // MCQ PAPER 2
  // =========================================================================
  {
    id: "king-john-m2",
    title: "MCQ Paper 2",
    questions: [
      {
        kind: "mcq",
        id: "king-john-m2-q01",
        question: "Who was John's **mother**?",
        options: ["Isabella of Angoulême", "Eleanor of Aquitaine", "Empress Matilda", "Catherine of Aragon"],
        answerIndex: 1,
        explanation:
          "**Eleanor of Aquitaine**, wife of Henry II, brought the huge duchy of Aquitaine into the Angevin empire and strongly supported John in 1199. Isabella of Angoulême was John's second **wife**; Empress Matilda was Henry II's mother; Catherine of Aragon was Henry VIII's first wife.",
        difficulty: "warmup",
        guideRef: "becoming-king",
        hints: ["She was one of the most powerful women of the Middle Ages, and Duchess of a large region of France."],
      },
      {
        kind: "mcq",
        id: "king-john-m2-q02",
        question: "Which of these was a **monk** whose chronicle described John very negatively?",
        options: ["William Marshal", "Thomas Becket", "Bede", "Roger of Wendover"],
        answerIndex: 3,
        explanation:
          "**Roger of Wendover**, a monk of St Albans, wrote a hostile account of John in the 1220s–30s, later copied and expanded by Matthew Paris. Bede was a monk-historian too, but he died in **735**. William Marshal was a loyal knight who served John, and Becket was murdered in 1170.",
        difficulty: "warmup",
        guideRef: "bad-king-john",
        hints: ["He lived at St Albans Abbey and wrote in the years soon after John's death."],
        strategy: "Check the provenance (NOP)",
      },
      {
        kind: "mcq",
        id: "king-john-m2-q03",
        question: "Which king reissued Magna Carta in **1225**, producing its best-known final version?",
        options: ["Henry III", "John", "Edward I", "Richard I"],
        answerIndex: 0,
        explanation:
          "**Henry III**, John's son, reissued the charter in 1225 in return for a tax — this version became the one later treated as law. John had died in 1216. **Edward I** confirmed the charter in 1297, but he was not even born in 1225.",
        difficulty: "warmup",
        guideRef: "legacy-of-magna-carta",
        hints: ["John died in 1216. Who succeeded him?"],
      },
      {
        kind: "mcq",
        id: "king-john-m2-q04",
        question: "What was **scutage**?",
        options: [
          "A fee paid to the king by an heir before inheriting land",
          "A yearly payment from England to the Pope",
          "Money paid by a landholder instead of providing knights to serve in the king's army",
          "A tax on every peasant household",
        ],
        answerIndex: 2,
        explanation:
          "Scutage ('shield money') let a landholder pay instead of sending knights to fight. John charged it far more often than earlier kings — eleven times in his reign. The fee to inherit was a **relief**, and the yearly payment to the Pope only began after John's submission in 1213.",
        difficulty: "warmup",
        guideRef: "losing-normandy",
        hints: ["The name comes from the Latin word *scutum*, meaning shield."],
      },
      {
        kind: "mcq",
        id: "king-john-m2-q05",
        question: "What happened to **Richard I** on his way home from the Third Crusade in 1192?",
        options: [
          "He was captured and held for a huge ransom, while John plotted with Philip II",
          "He was killed by a crossbow bolt during a siege",
          "He was shipwrecked and drowned in the Channel",
          "He handed the crown to John and became a monk",
        ],
        answerIndex: 0,
        explanation:
          "Richard was captured in Austria and handed to the Holy Roman Emperor, who demanded **150,000 marks**. While he was a prisoner, John plotted with Philip II to take his lands. Richard was released in 1194 and forgave John. The crossbow wound killed him later, in **1199**, in France.",
        difficulty: "core",
        guideRef: "becoming-king",
        hints: [
          "Richard reigned until 1199, so he must have survived 1192.",
          "What did John try to do while his brother was out of the way?",
        ],
        strategy: "Put it in chronological order",
      },
      {
        kind: "mcq",
        id: "king-john-m2-q06",
        question: "Why was John given the mocking nickname **'Softsword'**?",
        options: [
          "He refused to go on crusade with Richard",
          "He agreed to Magna Carta instead of fighting the barons",
          "He gave up land to Philip II in a peace treaty and then lost Normandy, looking weak in war",
          "His sword broke during the Battle of Bouvines",
        ],
        answerIndex: 2,
        explanation:
          "The jibe is first recorded after John gave up land to Philip II in the Treaty of Le Goulet (1200); losing Normandy (1204) seemed to confirm it, making John look weak beside his warrior brother Richard. He was not at Bouvines himself, and the nickname is about his record in France, not Runnymede — he **did** fight the barons after 1215.",
        difficulty: "core",
        guideRef: "losing-normandy",
        hints: [
          "A 'soft sword' is one that is not used well in war. Which war went badly early in his reign?",
          "Who was John always being compared with?",
        ],
        strategy: "Make an inference",
      },
      {
        kind: "mcq",
        id: "king-john-m2-q07",
        question: "How did John respond to the Pope's **Interdict** (1208)?",
        options: [
          "He made himself Supreme Head of the Church in England",
          "He accepted Stephen Langton at once to end the quarrel",
          "He closed and sold off all the monasteries",
          "He seized church lands and income, taking the money for the Crown",
        ],
        answerIndex: 3,
        explanation:
          "John hit back by **taking over church property** and its income — which made him richer for several years. Becoming 'Supreme Head of the Church' and dissolving the monasteries are **Henry VIII**'s actions in the 1530s. John held out against Langton until 1213.",
        difficulty: "core",
        guideRef: "john-and-the-church",
        hints: [
          "John was always short of money. How could a quarrel with the Church help with that?",
          "Watch out for actions that belong to a later king.",
        ],
        strategy: "Compare and contrast",
      },
      {
        kind: "mcq",
        id: "king-john-m2-q08",
        question: "Why did John **submit to the Pope** in 1213 and make England a papal fief?",
        options: [
          "The barons forced him to do it at Runnymede",
          "Philip II was preparing to invade England with the Pope's support, and John needed the Pope on his side",
          "Stephen Langton had defeated John's army in battle",
          "The Interdict had caused him to lose Normandy",
        ],
        answerIndex: 1,
        explanation:
          "By 1213 Philip II was gathering an invasion force and claiming the Pope's blessing. Submitting turned Innocent III from an enemy into a **protector**. Normandy was lost in 1204, *before* the Interdict began, so it cannot be a consequence of it; and Runnymede was two years later.",
        difficulty: "core",
        guideRef: "john-and-the-church",
        hints: [
          "Look for a threat from outside England in 1213.",
          "Check the order: which came first, the loss of Normandy or the Interdict?",
        ],
        strategy: "Think about who benefited",
      },
      {
        kind: "mcq",
        id: "king-john-m2-q09",
        question:
          "**Source A** — Clause 12 of Magna Carta, 1215 (modern translation).\n\n> No 'scutage' or 'aid' may be levied in our kingdom without its general consent, unless it is for the ransom of our person, to make our eldest son a knight, and (once) to marry our eldest daughter.\n\nWhat does Source A suggest the barons had complained about?",
        options: [
          "John had refused to pay the ransom for Richard I",
          "John had not made his eldest son a knight",
          "John had demanded scutage too often without asking them",
          "John had been taxing the Church instead of the barons",
        ],
        answerIndex: 2,
        explanation:
          "The clause stops the king raising scutage or aids **without general consent**, except in three traditional cases — so the barons must have felt John had raised them too often and without asking. The ransom and the knighting are the *allowed* exceptions, not complaints.",
        difficulty: "core",
        guideRef: "barons-revolt",
        hints: [
          "The exceptions describe what was still allowed. Focus on what the clause *forbids*.",
          "Whose consent is the king now supposed to get?",
        ],
        strategy: "Make an inference",
      },
      {
        kind: "mcq",
        id: "king-john-m2-q10",
        question: "Which list puts these events in the correct **chronological order**?",
        options: [
          "Battle of Bouvines → barons renounce their homage → rebels capture London → Magna Carta agreed at Runnymede",
          "Barons renounce their homage → Battle of Bouvines → rebels capture London → Magna Carta agreed at Runnymede",
          "Battle of Bouvines → rebels capture London → Magna Carta agreed at Runnymede → barons renounce their homage",
          "Battle of Bouvines → barons renounce their homage → Magna Carta agreed at Runnymede → rebels capture London",
        ],
        answerIndex: 0,
        explanation:
          "Bouvines (**July 1214**) wrecked John's plans; the rebels renounced their homage in **early May 1215**, captured London on **17 May 1215**, and John agreed terms at Runnymede on **15 June 1215**. Losing London is what pushed John to negotiate — so it must come before Runnymede.",
        difficulty: "core",
        guideRef: "barons-revolt",
        hints: [
          "Which event happened in 1214? The rest are 1215.",
          "Barons had to break their loyalty before they could openly fight the king.",
          "Why would John agree to negotiate — what had he just lost?",
        ],
        strategy: "Put it in chronological order",
      },
      {
        kind: "mcq",
        id: "king-john-m2-q11",
        question: "What was the **'security clause'** (clause 61) of Magna Carta?",
        options: [
          "A promise that the Pope would protect the charter",
          "A council of 25 barons could take action against the king, even seizing his lands, if he broke the charter",
          "The king's right to keep the barons' sons as hostages for security",
          "A guarantee that every free man could carry weapons",
        ],
        answerIndex: 1,
        explanation:
          "Clause 61 set up **25 barons** to enforce the charter — a remarkable limit on a king, and one reason John and the Pope rejected it. The Pope did the opposite of protecting it: he **annulled** it in August 1215. Magna Carta actually promised to *return* hostages (clause 49).",
        difficulty: "core",
        guideRef: "magna-carta",
        hints: [
          "'Security' here means making sure the king kept his promises.",
          "Who would do the enforcing in 1215, when there was no Parliament?",
        ],
      },
      {
        kind: "mcq",
        id: "king-john-m2-q12",
        question: "Which statement about Magna Carta **today** is accurate?",
        options: [
          "It is the written constitution of the United Kingdom",
          "It was abolished completely in 1689",
          "All 63 clauses are still law in England",
          "Only a few clauses, such as the one about lawful judgement, are still law in England",
        ],
        answerIndex: 3,
        explanation:
          "Only **three** clauses (from the reissued versions) remain law in England and Wales: the freedom of the Church, the liberties of the City of London, and the clause on lawful judgement and justice (1215's clauses 39 and 40). The UK has **no single written constitution**, and most clauses — about scutage, fish-weirs, forests — were repealed long ago.",
        difficulty: "core",
        guideRef: "legacy-of-magna-carta",
        hints: [
          "Many clauses dealt with medieval problems like scutage and fish-weirs. Would they still be needed?",
          "Does the UK have one single written constitution?",
        ],
        strategy: "Spot change and continuity",
      },
      {
        kind: "mcq",
        id: "king-john-m2-q13",
        question: "Why have many **modern historians** (for example W. L. Warren, writing in 1961) given a more positive view of John than the monastic chroniclers?",
        options: [
          "They believe Magna Carta was John's own idea for giving rights to the people",
          "They found that Roger of Wendover had really admired John",
          "They studied government records showing a hard-working king who travelled widely and heard legal cases himself",
          "They discovered John's personal diary, in which he explained his actions",
        ],
        answerIndex: 2,
        explanation:
          "John's reign is the first from which the government kept regular **rolls** copying out its letters and orders. These show a busy, skilled ruler — very different from the lazy king of the chronicles. Magna Carta was *forced* on John, Wendover was hostile, and no diary of John exists.",
        difficulty: "challenge",
        guideRef: "bad-king-john",
        hints: [
          "Historians' views change when they use **different evidence**.",
          "What kind of documents would a king's government produce every day?",
        ],
        strategy: "Cross-reference sources",
      },
      {
        kind: "mcq",
        id: "king-john-m2-q14",
        question:
          "**Source B** — Clause 20 of Magna Carta, 1215 (modern translation, shortened).\n\n> For a trivial offence, a free man shall be fined only in proportion to the degree of his offence... In the same way, a merchant shall be spared his merchandise, and a villein the implements of his husbandry.\n\nA student says Source B proves Magna Carta was written to protect ordinary peasants. Which is the **best response**?",
        options: [
          "Only partly: villeins are mentioned, but sparing their tools also protected their lords' income, and clause 39 covered only free men",
          "Correct: the clause shows that peasants were the barons' main concern",
          "Wrong: villeins are never mentioned anywhere in Magna Carta",
          "Correct: after 1215 villeins could no longer be fined at all",
        ],
        answerIndex: 0,
        explanation:
          "A villein's tools kept the lord's land farmed, so protecting them helped the **lord** as much as the peasant. Most of the charter dealt with barons' grievances, and clause 39 protected only **free men**. The source itself disproves 'never mentioned', and it limits fines rather than banning them.",
        difficulty: "challenge",
        guideRef: "magna-carta",
        hints: [
          "Read the source carefully: does it mention villeins at all? Does it ban fines?",
          "Who owned the land that a villein farmed — and who lost out if his plough was taken?",
          "A good answer often begins 'only partly…'",
        ],
        strategy: "Think about who benefited",
      },
      {
        kind: "mcq",
        id: "king-john-m2-q15",
        question:
          "**Source C** — from the *Annals of Margam*, a chronicle kept by monks in Wales. Historians think its information may have come from William de Briouze, the lord who had guarded Arthur and who later became John's bitter enemy (adapted).\n\n> At length, in the castle of Rouen, after dinner on the Thursday before Easter, when he was drunk... King John slew Arthur with his own hand, and tying a heavy stone to the body cast it into the Seine.\n\nWhat is the **best judgement** about Source C's reliability?",
        options: [
          "It is completely reliable, because monks recorded events honestly",
          "It may be well informed, but its likely informant became John's enemy, so it needs cross-referencing",
          "It proves John was innocent, because it was written in Wales",
          "It is useless, because the monks were not in Rouen to see it",
        ],
        answerIndex: 1,
        explanation:
          "Briouze was close to events, which could make the account **well informed**; but he later fell out bitterly with John, which gives a motive to blacken him. A balanced judgement weighs both. Not being an eyewitness does not make a source useless, and monks were not automatically neutral.",
        difficulty: "challenge",
        guideRef: "becoming-king",
        hints: [
          "Ask two questions: was the informant in a position to *know*? Did he have a reason to *lie or exaggerate*?",
          "Most sources are neither 'completely reliable' nor 'useless'.",
          "What would a historian do next to test the claim?",
        ],
        strategy: "Check the provenance (NOP)",
      },
    ],
  },

  // =========================================================================
  // MCQ PAPER 3
  // =========================================================================
  {
    id: "king-john-m3",
    title: "MCQ Paper 3",
    questions: [
      {
        kind: "mcq",
        id: "king-john-m3-q01",
        question: "In which language was Magna Carta originally written?",
        options: ["English", "French", "Greek", "Latin"],
        answerIndex: 3,
        explanation:
          "Like most official documents of the time, Magna Carta was written in **Latin**, the language of the Church and of royal government. The barons often *spoke* French, which makes it a tempting choice, but formal charters were written in Latin.",
        difficulty: "warmup",
        guideRef: "magna-carta",
        hints: ["Which language did clerks and churchmen use for official writing in the Middle Ages?"],
      },
      {
        kind: "mcq",
        id: "king-john-m3-q02",
        question: "In which year was John **crowned** King of England?",
        options: ["1189", "1199", "1204", "1215"],
        answerIndex: 1,
        explanation:
          "Richard I died in April **1199** and John was crowned at Westminster in May 1199. 1189 is when **Richard** was crowned; 1204 is the loss of Normandy; 1215 is Magna Carta.",
        difficulty: "warmup",
        guideRef: "becoming-king",
        hints: ["It was the year Richard the Lionheart died."],
        strategy: "Put it in chronological order",
      },
      {
        kind: "mcq",
        id: "king-john-m3-q03",
        question: "Which battle in **1214** wrecked John's plan to win back his lands in France?",
        options: ["Hastings", "Lincoln", "Bouvines", "Agincourt"],
        answerIndex: 2,
        explanation:
          "At **Bouvines** (July 1214) Philip II defeated John's allies. Lincoln (1217) was a victory for Henry III's supporters over Prince Louis's forces; Hastings was 1066 and Agincourt 1415.",
        difficulty: "warmup",
        guideRef: "barons-revolt",
        hints: ["It was fought in Flanders, in northern France, against Philip II."],
      },
      {
        kind: "mcq",
        id: "king-john-m3-q04",
        question: "In the 1600s, who used Magna Carta as an argument against **King Charles I**?",
        options: [
          "Members of Parliament and lawyers such as Sir Edward Coke",
          "The Pope and his bishops",
          "Barons led by Simon de Montfort",
          "American colonists declaring independence",
        ],
        answerIndex: 0,
        explanation:
          "MPs and lawyers like **Edward Coke** used Magna Carta to argue that even the king must obey the law — for example in the **Petition of Right (1628)**. Simon de Montfort lived in the 1200s, and the American colonists used Magna Carta later, in the 1760s–70s, against George III.",
        difficulty: "warmup",
        guideRef: "legacy-of-magna-carta",
        hints: ["Charles I's great quarrel was with Parliament."],
        strategy: "Put it in chronological order",
      },
      {
        kind: "mcq",
        id: "king-john-m3-q05",
        question: "Which list puts John's quarrel with the Church in the correct **chronological order**?",
        options: [
          "Interdict begins → Pope chooses Stephen Langton → John excommunicated → John submits to the Pope",
          "Pope chooses Stephen Langton → John excommunicated → Interdict begins → John submits to the Pope",
          "Pope chooses Stephen Langton → Interdict begins → John excommunicated → John submits to the Pope",
          "Pope chooses Stephen Langton → Interdict begins → John submits to the Pope → John excommunicated",
        ],
        answerIndex: 2,
        explanation:
          "Langton was made archbishop in **1207**; when John refused him, the Interdict followed in **1208**; John was personally excommunicated in **1209**; he submitted in **1213**. The punishments got heavier step by step — a whole kingdom first, then the king himself.",
        difficulty: "core",
        guideRef: "john-and-the-church",
        hints: [
          "What caused the quarrel in the first place? That must come first.",
          "The Pope punished England first, then increased the pressure on John personally.",
        ],
        strategy: "Put it in chronological order",
      },
      {
        kind: "mcq",
        id: "king-john-m3-q06",
        question: "Why did it matter so much to a medieval king who was **Archbishop of Canterbury**?",
        options: [
          "The archbishop was the most powerful churchman in England, with great lands and influence, and crowned kings",
          "The archbishop commanded the royal army when the king was abroad",
          "The archbishop collected all the king's taxes",
          "The archbishop chose who would be the next king",
        ],
        answerIndex: 0,
        explanation:
          "The archbishop led the English Church, held huge estates, advised the king and **crowned** him. A hostile archbishop could cause real trouble — as Becket had for Henry II. He did not command armies, collect taxes or choose kings.",
        difficulty: "core",
        guideRef: "john-and-the-church",
        hints: [
          "Think about the archbishop's role at a coronation.",
          "Remember what happened between Henry II and Thomas Becket.",
        ],
        strategy: "Judge significance",
      },
      {
        kind: "mcq",
        id: "king-john-m3-q07",
        question: "Which of these was a way **John** raised money from his barons?",
        options: [
          "Dissolving the monasteries and selling their lands",
          "Collecting an income tax approved by Parliament",
          "Charging a poll tax on every adult",
          "Charging heirs large fees to inherit and selling the right to marry rich widows and heiresses",
        ],
        answerIndex: 3,
        explanation:
          "John squeezed his feudal rights hard: huge **reliefs** (inheritance fees), selling **wardships** and marriages, fines and scutage. Dissolving the monasteries was **Henry VIII**, the famous poll tax came in **1377–81**, and income tax only began in **1799**.",
        difficulty: "core",
        guideRef: "losing-normandy",
        hints: [
          "Three of these belong to much later periods. Check each one's century.",
          "John made money from his rights as feudal lord — for example over inheritance and marriage.",
        ],
        strategy: "Avoid hindsight",
      },
      {
        kind: "mcq",
        id: "king-john-m3-q08",
        question:
          "**Source A** — Roger of Wendover, a monk at St Albans, writing in the 1220s–30s (adapted).\n\n> While the French king was capturing his castles, King John feasted every day with his queen and lay in bed until dinner time.\n\nWhat does Source A suggest Wendover believed was the cause of the loss of Normandy?",
        options: [
          "Philip II's larger army",
          "John's own laziness",
          "The Pope's Interdict",
          "A rebellion by the English barons",
        ],
        answerIndex: 1,
        explanation:
          "Wendover pictures John feasting and lying in bed while castles fall — he blames **John's laziness**. Notice he does not mention Philip's resources at all; a historian would test this hostile, later claim against other evidence. The Interdict and the barons' rebellion came years *after* 1204.",
        difficulty: "core",
        guideRef: "losing-normandy",
        hints: [
          "What is John doing in the source while the castles are being lost?",
          "Check dates: could the Interdict (1208) or the barons' revolt (1215) explain 1204?",
        ],
        strategy: "Make an inference",
      },
      {
        kind: "mcq",
        id: "king-john-m3-q09",
        question: "What did the rebel barons do in **May 1215** that forced John to negotiate?",
        options: [
          "They captured John at the Battle of Bouvines",
          "They invited Prince Louis of France, who captured London",
          "They forced the Pope to excommunicate John",
          "They captured London",
        ],
        answerIndex: 3,
        explanation:
          "The rebels took **London** on 17 May 1215 — the kingdom's richest city — leaving John little choice but to talk. Inviting Prince Louis came **later**, after the civil war began; he landed in 1216. John was not at Bouvines.",
        difficulty: "core",
        guideRef: "barons-revolt",
        hints: [
          "Which place in England would be the biggest prize for rebels?",
          "Prince Louis is part of the story — but did he arrive before or after Magna Carta?",
        ],
        strategy: "Put it in chronological order",
      },
      {
        kind: "mcq",
        id: "king-john-m3-q10",
        question:
          "**Source B** — Clause 40 of Magna Carta, 1215 (modern translation).\n\n> To no one will we sell, to no one deny or delay right or justice.\n\nWhat can you **infer** from Source B about justice under John?",
        options: [
          "People had sometimes had to pay the king to get justice, or faced long delays",
          "Everyone in England had been given a free lawyer",
          "The king had been banned from the law courts",
          "John had shut down all the law courts in England",
        ],
        answerIndex: 0,
        explanation:
          "A promise not to **sell, deny or delay** justice suggests these things had happened — John was known for taking payments ('fines') to speed up or settle cases. The clause does not give free lawyers, and kings kept running the courts.",
        difficulty: "core",
        guideRef: "magna-carta",
        hints: [
          "Clauses were written to stop real problems. What three things does the king promise not to do?",
          "If justice can be 'sold', what had people been doing to get it?",
        ],
        strategy: "Make an inference",
      },
      {
        kind: "mcq",
        id: "king-john-m3-q11",
        question: "What happened in the months **after** Magna Carta was agreed in June 1215?",
        options: [
          "John and the barons kept the peace until John's death",
          "The first Parliament met to put the charter into practice",
          "Pope Innocent III annulled the charter and civil war broke out",
          "John abdicated in favour of his son Henry",
        ],
        answerIndex: 2,
        explanation:
          "John asked the Pope for help, and in **August 1215** Innocent III declared the charter void. The **First Barons' War** followed. Parliament developed later in the 1200s, and John did not abdicate — he died, still fighting, in October 1216.",
        difficulty: "core",
        guideRef: "magna-carta",
        hints: [
          "By 1213 the Pope had become John's ally. What might John ask him to do?",
          "Did the peace of June 1215 last?",
        ],
        strategy: "Link the causes",
      },
      {
        kind: "mcq",
        id: "king-john-m3-q12",
        question: "Why is **Simon de Montfort's Parliament** of 1265 seen as significant?",
        options: [
          "It was the first time Magna Carta was written down",
          "It was elected by all adult men and women",
          "It abolished the monarchy for a time",
          "It included knights from the shires and, for the first time, representatives of towns",
        ],
        answerIndex: 3,
        explanation:
          "De Montfort summoned not only great lords but **knights** from each shire and **burgesses** from towns — an early step towards the House of Commons. Votes for all adults came in the **20th century**, and Magna Carta had been written fifty years earlier.",
        difficulty: "core",
        guideRef: "legacy-of-magna-carta",
        hints: [
          "Think about *who* was invited for the first time.",
          "Votes for everyone are a much later idea — check your century.",
        ],
        strategy: "Judge significance",
      },
      {
        kind: "mcq",
        id: "king-john-m3-q13",
        question:
          "**Source C** — from the Barnwell chronicle, written by an unknown writer at Barnwell Priory in the 1220s (adapted).\n\n> John was a great prince, certainly, but hardly a happy one. Like Marius, he experienced the ups and downs of fortune.\n\nHow does Source C's view differ from Matthew Paris's claim that hell was 'made fouler' by John's presence, and why does that matter?",
        options: [
          "It is more balanced, seeing John as able but unlucky, which shows not all writers of the time condemned him",
          "It agrees with Paris that John was evil, so the chroniclers must be right",
          "It praises John as a perfect king, so it must be royal propaganda",
          "It is less useful than Paris because its author is unknown",
        ],
        answerIndex: 0,
        explanation:
          "Barnwell calls John **great** but **unlucky** — a mixed verdict. Cross-referencing it with hostile chroniclers warns us that the 'bad King John' image was not shared by everyone. It is not praise for a 'perfect king', and an unknown author does not make a source less useful in itself.",
        difficulty: "challenge",
        guideRef: "bad-king-john",
        hints: [
          "Pick out the two halves of the verdict: what is positive, and what is not?",
          "Why is it valuable to find a source that disagrees with the majority?",
          "Does not knowing an author's name automatically weaken a source?",
        ],
        strategy: "Cross-reference sources",
      },
      {
        kind: "mcq",
        id: "king-john-m3-q14",
        question:
          "A writer claims: *'John lost Normandy because he was lazy.'* Which piece of evidence **most challenges** this claim?",
        options: [
          "Roger of Wendover wrote that John lay in bed until dinner time",
          "John was given the nickname 'Softsword'",
          "For ten years John raised huge sums and armies to win Normandy back, ending with the costly 1214 campaign",
          "Normandy fell to Philip II in 1204",
        ],
        answerIndex: 2,
        explanation:
          "A lazy king would not have spent a decade raising money, hiring troops and building alliances to recover his lands. Wendover's story and the nickname **support** the claim rather than challenge it, and the date of the loss is a fact that does not test it either way.",
        difficulty: "challenge",
        guideRef: "bad-king-john",
        hints: [
          "Two options actually *support* the claim. Which?",
          "What would a hard-working king do after losing his lands?",
        ],
        strategy: "Consider the counter-argument",
      },
      {
        kind: "mcq",
        id: "king-john-m3-q15",
        question: "Which combination of circumstances **best explains** how John became king in 1199?",
        options: [
          "John defeated Richard in battle and the Pope then crowned him",
          "Richard died without a legitimate son; John was an adult backed by his mother Eleanor and leading barons, while his rival Arthur was 12",
          "The barons elected John in Parliament because he promised to grant Magna Carta",
          "Henry II had named John as his heir before he died in 1189",
        ],
        answerIndex: 1,
        explanation:
          "Several circumstances came together: **no son** of Richard, John's **powerful backers** (Eleanor of Aquitaine, William Marshal, Archbishop Hubert Walter) and a rival who was only a boy and backed by the French king. John never fought Richard for the crown, there was no Parliament, and Henry II was succeeded by **Richard** in 1189.",
        difficulty: "challenge",
        guideRef: "becoming-king",
        hints: [
          "The enquiry asks about *circumstances*: look for the answer that combines several factors.",
          "Who succeeded Henry II in 1189?",
          "Why might powerful nobles prefer an adult to a 12-year-old?",
        ],
        strategy: "Link the causes",
      },
    ],
  },

  // =========================================================================
  // MCQ PAPER 4
  // =========================================================================
  {
    id: "king-john-m4",
    title: "MCQ Paper 4",
    questions: [
      {
        kind: "mcq",
        id: "king-john-m4-q01",
        question: "Why was **Richard I** away from England for most of his reign (1189–1199)?",
        options: [
          "He was on the Third Crusade and then fighting to defend his lands in France",
          "He was imprisoned in Rome after a quarrel with the Pope",
          "He had been driven into exile by rebel barons",
          "He lived in Ireland as its lord",
        ],
        answerIndex: 0,
        explanation:
          "Richard spent only a few months of his reign in England: he went on the **Third Crusade**, was captured on the way back, then fought Philip II in France until his death. It was **John** whom Henry II made Lord of Ireland.",
        difficulty: "warmup",
        guideRef: "becoming-king",
        hints: ["His nickname was 'the Lionheart' — where did he win that reputation?"],
      },
      {
        kind: "mcq",
        id: "king-john-m4-q02",
        question: "In many **later Robin Hood stories**, how does John appear?",
        options: [
          "As Robin's loyal friend and protector",
          "As the Sheriff of Nottingham himself",
          "As a greedy villain ruling while Richard is away",
          "As the hero who returns to save England",
        ],
        answerIndex: 2,
        explanation:
          "Later versions of the legend — Tudor plays, novels such as Scott's *Ivanhoe* (1819) and films — made Prince John the **villain**. The earliest Robin Hood ballads don't mention John at all; he was added centuries later. These stories reflect John's reputation, so they are not evidence for what he did.",
        difficulty: "warmup",
        guideRef: "bad-king-john",
        hints: ["In these stories, who is the 'good' king that Robin stays loyal to?"],
        strategy: "Ask \"how typical?\"",
      },
      {
        kind: "mcq",
        id: "king-john-m4-q03",
        question: "Which **Archbishop of Canterbury** helped to negotiate between John and the barons in 1215?",
        options: ["Thomas Becket", "Stephen Langton", "Thomas Cranmer", "Hubert Walter"],
        answerIndex: 1,
        explanation:
          "**Stephen Langton**, the archbishop John had once refused to accept, acted as a go-between in 1215. Becket was murdered in 1170, Hubert Walter died in 1205, and Cranmer was **Henry VIII**'s archbishop.",
        difficulty: "warmup",
        guideRef: "magna-carta",
        hints: ["He was the Pope's choice for archbishop — the man at the centre of John's quarrel with Rome."],
      },
      {
        kind: "mcq",
        id: "king-john-m4-q04",
        question: "Which great castle, built by Richard I, fell to Philip II in **1204** shortly before Normandy was lost?",
        options: ["Dover Castle", "Rochester Castle", "The Tower of London", "Château Gaillard"],
        answerIndex: 3,
        explanation:
          "**Château Gaillard**, Richard's mighty fortress guarding the way to Rouen, fell in March 1204; Rouen surrendered a few months later. Rochester was besieged by John in 1215 and Dover by Prince Louis in 1216 — both in England, during the civil war.",
        difficulty: "warmup",
        guideRef: "losing-normandy",
        hints: ["It was in Normandy itself, overlooking the River Seine."],
      },
      {
        kind: "mcq",
        id: "king-john-m4-q05",
        question: "Arthur of Brittany **disappeared** in 1203 while John's prisoner. Why did this harm John?",
        options: [
          "It meant John had no heir to succeed him",
          "The Pope excommunicated John as a punishment",
          "It gave Arthur's family a claim written into Magna Carta",
          "Rumours that John had murdered his nephew turned many lords in France against him",
        ],
        answerIndex: 3,
        explanation:
          "The rumour that John had killed his own nephew damaged his reputation and loyalty among lords in Brittany, Anjou and Normandy — just as Philip II attacked. John's son Henry was born in **1207**, so Arthur's fate didn't decide the heir, and John's excommunication (1209) was over **Stephen Langton**.",
        difficulty: "core",
        guideRef: "becoming-king",
        hints: [
          "Think about how lords would feel about serving a king rumoured to have killed a teenage relative.",
          "What happened in Normandy the year after Arthur disappeared?",
        ],
        strategy: "Link the causes",
      },
      {
        kind: "mcq",
        id: "king-john-m4-q06",
        question: "In 1207 John collected a tax of **one-thirteenth** of people's income and goods. What does this show?",
        options: [
          "Parliament was now voting taxes for the king",
          "How determined John was to raise money to recover his lands in France",
          "Richard I's ransom still had to be paid",
          "John needed money to pay the yearly tribute to the Pope",
        ],
        answerIndex: 1,
        explanation:
          "The Thirteenth raised a vast sum — part of John's war chest for winning back Normandy. Richard's ransom belonged to the **1190s**, the payment to the Pope only began after **1213**, and there was no Parliament yet.",
        difficulty: "core",
        guideRef: "losing-normandy",
        hints: [
          "What was John's biggest goal after 1204?",
          "Check each option's date against 1207.",
        ],
        strategy: "Think about purpose",
      },
      {
        kind: "mcq",
        id: "king-john-m4-q07",
        question: "During the **Interdict**, what were ordinary people mostly unable to do?",
        options: [
          "Pay any taxes to the king",
          "Read the Bible in English",
          "Attend most church services or be buried in consecrated ground, though babies could still be baptised",
          "Travel to France on business",
        ],
        answerIndex: 2,
        explanation:
          "For six years most **church services** stopped and the dead were buried without the usual rites — frightening for people who believed it affected their souls. Reading the Bible in English is a **Reformation** issue of the 1500s, and taxes certainly did not stop.",
        difficulty: "core",
        guideRef: "john-and-the-church",
        hints: [
          "The Interdict was a punishment by the *Church*. What could the Church stop?",
          "A few services were still allowed for babies and the dying.",
        ],
        strategy: "Make an inference",
      },
      {
        kind: "mcq",
        id: "king-john-m4-q08",
        question:
          "**Source A** — a summary written for this exercise of John's agreement with the Pope in May 1213.\n\n> John accepted Stephen Langton as archbishop, promised to repay the Church, and handed England and Ireland to the Pope, receiving them back as the Pope's vassal for 1,000 marks a year.\n\nWhich judgement about this agreement is **best supported** by what happened next?",
        options: [
          "It was a shrewd move: the Pope became John's ally, and in 1215 he annulled Magna Carta for him",
          "It was a total humiliation that brought John no benefits at all",
          "It made John Supreme Head of the Church in England",
          "It ended the Interdict that same day",
        ],
        answerIndex: 0,
        explanation:
          "Though it looks humiliating, submission turned Innocent III into John's **protector**: Philip's papal-backed invasion lost its excuse, and in **August 1215** the Pope annulled Magna Carta. The Interdict was not lifted until **1214**, and 'Supreme Head' is Henry VIII's title.",
        difficulty: "core",
        guideRef: "john-and-the-church",
        hints: [
          "Don't judge only from the source — look at what the Pope did in 1215.",
          "Was John better or worse off with the Pope on his side?",
        ],
        strategy: "Weigh factors",
      },
      {
        kind: "mcq",
        id: "king-john-m4-q09",
        question: "Who led the rebel barons in 1215, calling himself **'Marshal of the Army of God'**?",
        options: ["William Marshal", "Simon de Montfort", "Robert Fitzwalter", "Stephen Langton"],
        answerIndex: 2,
        explanation:
          "**Robert Fitzwalter** led the rebels and used the title to make the revolt sound holy. **William Marshal** — despite his surname — stayed loyal to John and later became regent for Henry III. Simon de Montfort's rebellion came in the **1260s**.",
        difficulty: "core",
        guideRef: "barons-revolt",
        hints: [
          "Don't be fooled by a surname: one famous knight in this list stayed loyal to John.",
          "Simon de Montfort belongs to the reign of John's son.",
        ],
      },
      {
        kind: "mcq",
        id: "king-john-m4-q10",
        question:
          "**Source B** — Clause 51 of Magna Carta, 1215 (modern translation).\n\n> As soon as peace is restored, we will banish from the kingdom all the foreign knights, bowmen, their attendants, and the mercenaries that have come to it, to its harm, with horses and arms.\n\nWhat **grievance** of the barons does Source B suggest?",
        options: [
          "John had banned trade with foreign merchants",
          "The barons wanted more soldiers to defend England from France",
          "The barons wanted to invade France themselves",
          "John relied on foreign soldiers and mercenaries, whom the barons resented",
        ],
        answerIndex: 3,
        explanation:
          "The barons demanded the removal of John's **foreign fighters**, who had been used to enforce his will — 'to its harm'. They wanted fewer of these soldiers, not more, and the clause says nothing about trade or invading France.",
        difficulty: "core",
        guideRef: "barons-revolt",
        hints: [
          "Who are the people being sent away, and whose side were they on?",
          "Notice the words 'to its harm'.",
        ],
        strategy: "Make an inference",
      },
      {
        kind: "mcq",
        id: "king-john-m4-q11",
        question: "How did John's reign **end**?",
        options: [
          "He was killed in battle at Runnymede",
          "He died of illness in October 1216, during the civil war, while Prince Louis held London",
          "He was put on trial and executed by the barons",
          "He abdicated in favour of his nephew Arthur",
        ],
        answerIndex: 1,
        explanation:
          "John died of **dysentery** at Newark in October 1216, with the war unresolved; legend says he lost his treasure crossing the Wash days before. Being tried and executed is **Charles I** (1649), and Arthur had disappeared back in 1203.",
        difficulty: "core",
        guideRef: "magna-carta",
        hints: [
          "Runnymede was a peace meeting, not a battle.",
          "Which English king was put on trial and executed — and in which century?",
        ],
        strategy: "Put it in chronological order",
      },
      {
        kind: "mcq",
        id: "king-john-m4-q12",
        question:
          "**Source C** — Eleanor Roosevelt, speaking at the United Nations in December 1948 about the new Universal Declaration of Human Rights.\n\n> This Universal Declaration of Human Rights may well become the international Magna Carta for all men everywhere.\n\nWhat does Source C suggest about Magna Carta's **reputation** by 1948?",
        options: [
          "It had become a worldwide symbol of rights and of limits on power",
          "It was still the law in every country in the world",
          "Roosevelt believed it had been a failure",
          "It had been forgotten outside England",
        ],
        answerIndex: 0,
        explanation:
          "Roosevelt uses Magna Carta as shorthand for a **great charter of rights**, expecting a world audience to understand — so its reputation had spread far beyond England. That is a symbol, not a law in every country, and she clearly admires it.",
        difficulty: "core",
        guideRef: "legacy-of-magna-carta",
        hints: [
          "Why would she compare a new document to Magna Carta at all?",
          "Her audience came from many countries. What did she assume they knew?",
        ],
        strategy: "Judge significance",
      },
      {
        kind: "mcq",
        id: "king-john-m4-q13",
        question: "Why did many **Victorian historians**, such as William Stubbs, judge John so harshly?",
        options: [
          "They had newly found government records proving his cruelty",
          "They relied on the monastic chronicles and admired Magna Carta and Parliament, so cast John as the tyrant",
          "They were influenced by Hollywood Robin Hood films",
          "They were paid by the French government to criticise English kings",
        ],
        answerIndex: 1,
        explanation:
          "Victorian historians celebrated the growth of English **liberty and Parliament**, so the king who resisted Magna Carta fitted the role of villain — and they trusted the hostile chroniclers. Close study of the government **records** later led historians to *soften* this view, and films came in the 20th century.",
        difficulty: "challenge",
        guideRef: "bad-king-john",
        hints: [
          "An interpretation reflects the sources used **and** the values of the time it was written.",
          "What did Victorians proudly see as the great English achievement?",
          "Check the date: could a Victorian have watched a film?",
        ],
        strategy: "Think about purpose",
      },
      {
        kind: "mcq",
        id: "king-john-m4-q14",
        question:
          "A tourist poster says: *'In 1215 King John signed Magna Carta, giving every English person freedom and the right to a jury trial.'* What is the **most important correction**?",
        options: [
          "The date is wrong — it was 1216",
          "It was Richard I, not John, who agreed to it",
          "Parliament wrote it, not the barons",
          "John was forced to agree to a peace deal that mainly protected barons and free men — and it was sealed, not signed",
        ],
        answerIndex: 3,
        explanation:
          "The poster repeats a **myth**: Magna Carta was forced on John, protected mainly barons, the Church and 'free men' (not unfree villeins), and was sealed with the royal seal. It did not create jury trials as we know them. The date 1215 and the king (John) are correct, and there was no Parliament yet.",
        difficulty: "challenge",
        guideRef: "legacy-of-magna-carta",
        hints: [
          "Two parts of the poster are actually correct. Which?",
          "Who was protected by clause 39 — every person, or 'free men'?",
          "Did John *give* Magna Carta willingly?",
        ],
        strategy: "Avoid hindsight",
      },
      {
        kind: "mcq",
        id: "king-john-m4-q15",
        question:
          "**Enquiry:** which conclusion best links John's **weaknesses** to the limits placed on royal power?",
        options: [
          "John was so strong that he chose to share power with the barons",
          "Magna Carta was the Pope's idea, so John's weaknesses made no difference",
          "Military failure and heavy, unfair demands united the barons, who forced John to accept that the king is under the law",
          "John's weaknesses mattered little, because Magna Carta was annulled and forgotten",
        ],
        answerIndex: 2,
        explanation:
          "Losing Normandy and Bouvines, endless money demands and arbitrary justice drove the barons together; a weak, distrusted king had to accept **limits** written down in law. The Pope actually **opposed** the charter, and it was reissued and remembered, not forgotten.",
        difficulty: "challenge",
        guideRef: "bad-king-john",
        hints: [
          "Link the chain: failure in France → money demands → angry barons → ?",
          "Did the Pope support or oppose Magna Carta?",
          "Was Magna Carta really forgotten after 1215?",
        ],
        strategy: "Link the causes",
      },
    ],
  },
];
