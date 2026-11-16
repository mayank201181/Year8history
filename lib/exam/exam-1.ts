import type { ExamPaper } from "../types.ts";

// Big Exam — Paper 1: Kings & Power (Term 1).
// Enquiry: Under what circumstances did kings rise to power?
// Order: warmup (q01–q08) → core (q09–q20) → challenge (q21–q26).
export const paper: ExamPaper = {
  id: "exam-1",
  title: "Paper 1: Kings & Power (Term 1)",
  minutes: 50,
  questions: [
    // ------------------------------ WARMUP ------------------------------
    {
      kind: "short",
      id: "exam-1-q01",
      topicId: "king-john",
      guideRef: "magna-carta",
      difficulty: "warmup",
      question: "In what year did King John agree to Magna Carta at Runnymede?",
      answer: { type: "number", value: 1215 },
      traps: [
        { spec: { type: "number", value: 1225 }, feedback: "1225 is Henry III's reissue — the version that stayed in force for centuries. John sealed the original ten years earlier." },
        { spec: { type: "number", value: 1216 }, feedback: "John died in October 1216, in the middle of the war that followed. The charter itself was sealed the year before." },
      ],
      solution: [
        "John met the rebel barons at Runnymede, beside the Thames, on 15 June 1215.",
        "The Pope annulled it within weeks, but it was reissued in 1216, 1217 and 1225 under John's son, Henry III.",
      ],
      hints: ["It is 149 years after the Battle of Hastings."],
      strategy: "Use the chronology",
      commonError: "Mixing up 1215 (John's original charter) with 1225 (Henry III's reissue).",
    },
    {
      kind: "mcq",
      id: "exam-1-q02",
      topicId: "william-i",
      guideRef: "succession-crisis-1066",
      difficulty: "warmup",
      question: "Harold Godwinson was crowned king on 6 January 1066. What was the main basis of his claim to the throne?",
      options: [
        "He was Edward the Confessor's closest blood relative",
        "He was chosen by the Witan and, English sources say, named by the dying Edward",
        "Edward had promised him the crown back in 1051",
        "He inherited a claim from an old deal between Viking and English kings",
      ],
      answerIndex: 1,
      explanation:
        "Harold was chosen by the Witan — the council of leading nobles and churchmen — and English sources say Edward named him on his deathbed. The closest blood relative was actually the teenage Edgar Ætheling; the promise of 1051 was William's claim; the old Viking deal was Harald Hardrada's.",
      hints: ["Think about who was at Edward's deathbed, and which council met straight after his death."],
      strategy: "Use precise evidence",
    },
    {
      kind: "short",
      id: "exam-1-q03",
      topicId: "henry-viii",
      guideRef: "young-henry",
      difficulty: "warmup",
      question:
        "Soon after becoming king in 1509, Henry VIII married a Spanish princess who had been the wife of his elder brother, Prince Arthur. What was her name?",
      answer: { type: "text", accept: ["Catherine of Aragon", "Katherine of Aragon", "Katharine of Aragon", "Catalina of Aragon"], display: "Catherine of Aragon" },
      traps: [
        { spec: { type: "text", accept: ["Catherine", "Katherine", "Kathryn"] }, feedback: "Which Catherine? Henry married three women called Catherine (of Aragon, Howard and Parr). Say where this one came from." },
        { spec: { type: "text", accept: ["Anne Boleyn", "Boleyn", "Anne"] }, feedback: "Anne Boleyn was Henry's second wife (married 1533). His first wife was his brother Arthur's widow." },
      ],
      solution: [
        "Catherine of Aragon was the daughter of Ferdinand and Isabella of Spain.",
        "She married Prince Arthur in 1501; after Arthur died in 1502 she married Henry in 1509.",
      ],
      hints: ["She was the daughter of the King and Queen of Spain."],
      commonError: "Writing just “Catherine” — Henry had three wives with that name.",
    },
    {
      kind: "mcq",
      id: "exam-1-q04",
      topicId: "historians-toolkit",
      guideRef: "chronology-and-periods",
      difficulty: "warmup",
      question:
        "Put these events in chronological order, earliest first: the Act of Supremacy; the Battle of Hastings; Magna Carta; the Battle of Bosworth.",
      options: [
        "Hastings → Bosworth → Magna Carta → Act of Supremacy",
        "Magna Carta → Hastings → Act of Supremacy → Bosworth",
        "Hastings → Magna Carta → Bosworth → Act of Supremacy",
        "Hastings → Magna Carta → Act of Supremacy → Bosworth",
      ],
      answerIndex: 2,
      explanation:
        "Hastings was 1066, Magna Carta 1215, Bosworth 1485 and the Act of Supremacy 1534. The tempting slip is putting the Act of Supremacy before Bosworth — but Henry VIII could only make himself Head of the Church because his father had first won the crown at Bosworth.",
      hints: ["Write the year next to each event before you choose."],
      strategy: "Use the chronology",
    },
    {
      kind: "short",
      id: "exam-1-q05",
      topicId: "william-i",
      guideRef: "feudal-system-domesday",
      difficulty: "warmup",
      question:
        "At Christmas 1085 William I ordered a great survey of England, recording who held the land, how many people lived on it and what it was worth. What is the record of this survey called?",
      answer: { type: "text", accept: ["Domesday Book", "Domesday", "Domesday survey", "Doomsday Book", "Doomsday", "Great Domesday"], display: "the Domesday Book" },
      traps: [
        { spec: { type: "text", accept: ["Bayeux Tapestry", "Bayeux"] }, feedback: "The Bayeux Tapestry tells the story of 1066 in pictures. The survey of land and wealth was the Domesday Book." },
        { spec: { type: "text", accept: ["Magna Carta"] }, feedback: "Magna Carta came 130 years later, under King John. William's survey was the Domesday Book." },
      ],
      solution: [
        "The survey was carried out in 1086 and written up as the Domesday Book.",
        "It told William what he could tax and who owed him service — a powerful tool of control.",
      ],
      hints: ["People said its judgements were as final as the Day of Judgement."],
      commonError: "Confusing the Domesday Book (a survey of land) with the Bayeux Tapestry (a picture story of the Conquest).",
    },
    {
      kind: "mcq",
      id: "exam-1-q06",
      topicId: "king-john",
      guideRef: "john-and-the-church",
      difficulty: "warmup",
      question:
        "In 1208 a pope placed England under an interdict, stopping most church services, because King John refused to accept Stephen Langton as Archbishop of Canterbury. Which pope was this?",
      options: ["Innocent III", "Clement VII", "Gregory VII", "Urban II"],
      answerIndex: 0,
      explanation:
        "Innocent III was one of the most powerful medieval popes: he placed England under an interdict in 1208 and excommunicated John in 1209. Clement VII is the tempting wrong answer — he was the pope who refused Henry VIII's annulment, more than 300 years later.",
      hints: ["This pope also annulled Magna Carta in 1215."],
      strategy: "Use the chronology",
    },
    {
      kind: "short",
      id: "exam-1-q07",
      topicId: "historians-toolkit",
      guideRef: "chronology-and-periods",
      difficulty: "warmup",
      question:
        "Henry VIII's Act of Supremacy was passed in 1534. Which century is that? Give the number only (for example, 12 for the 12th century).",
      answer: { type: "number", value: 16, display: "16th century" },
      traps: [
        { spec: { type: "number", value: 15 }, feedback: "1534 starts with 15, but the 1500s are the 16th century. Centuries are always one ahead of their first two digits." },
      ],
      solution: [
        "The 1st century AD covers years 1–100, so the century number is one ahead of the first digits.",
        "1501–1600 is the 16th century, so 1534 is in the 16th century.",
      ],
      hints: ["Which century is 1066 in? It is the 11th — use the same rule."],
      strategy: "Use the chronology",
      commonError: "Reading the first two digits (15) as the century.",
    },
    {
      kind: "mcq",
      id: "exam-1-q08",
      topicId: "power-of-monarchs",
      guideRef: "claims-to-the-throne",
      difficulty: "warmup",
      question: "What did the idea of the “Divine Right of Kings” claim?",
      options: [
        "The eldest son of a king must always inherit the throne",
        "A king must be elected by a council of nobles",
        "A king can rule only with the agreement of Parliament",
        "A king's authority comes from God, so he is answerable to God alone",
      ],
      answerIndex: 3,
      explanation:
        "Divine Right said kings were chosen by God, so rebelling against a king was a sin and only God could judge him. The rule that the eldest son inherits is primogeniture — a rule about *who* inherits, not about where a king's authority comes from.",
      hints: ["“Divine” means to do with God."],
      strategy: "Use precise evidence",
    },

    // ------------------------------- CORE -------------------------------
    {
      kind: "mcq",
      id: "exam-1-q09",
      topicId: "william-i",
      guideRef: "securing-control",
      difficulty: "core",
      question:
        "The Domesday Book (1086) records many places in Yorkshire as “waste” — land with little or no value. Which event do historians most often link to this?",
      options: [
        "The Harrying of the North, 1069–70",
        "Harald Hardrada's victory at Gate Fulford in 1066",
        "Hereward the Wake's revolt at Ely",
        "The Pilgrimage of Grace",
      ],
      answerIndex: 0,
      explanation:
        "After a northern rebellion in 1069, William's soldiers deliberately destroyed crops, animals and homes across the North; many people died in the famine that followed. Sixteen years later Domesday still shows much of Yorkshire as waste (historians debate exactly how much of this was caused by the Harrying). Gate Fulford was a single battle near York, not a campaign of destruction across a region; Ely is in the Fens, and the Pilgrimage of Grace happened in 1536.",
      hints: ["Which event was a deliberate campaign across a whole region, not one battle?", "It followed a rebellion in the North in 1069."],
      strategy: "Use the chronology",
    },
    {
      kind: "short",
      id: "exam-1-q10",
      topicId: "william-i",
      guideRef: "securing-control",
      difficulty: "core",
      question:
        "Wei Ling visits an early Norman castle site: a tall earth mound with a flat-topped yard next to it, both surrounded by a ditch. The Normans first built this design quickly out of earth and timber. What name is given to this type of castle?",
      answer: { type: "text", accept: ["motte and bailey", "motte-and-bailey", "motte and bailey castle", "motte-and-bailey castle", "motte and bailey castles"], display: "motte and bailey" },
      traps: [
        { spec: { type: "text", accept: ["stone keep", "keep", "square keep"] }, feedback: "Stone keeps came later, once the Normans had time and money. The quick earth-and-timber design was the motte and bailey." },
        { spec: { type: "text", accept: ["concentric castle", "concentric"] }, feedback: "Concentric castles (rings of walls) were built much later, in the 1200s. Think of the mound and the yard." },
      ],
      solution: [
        "The motte was the earth mound with a wooden tower on top; the bailey was the fenced yard below.",
        "They could be built in a few weeks, which let a small Norman army control a large, hostile population.",
      ],
      hints: ["The design has two named parts: the mound and the yard.", "The mound was called the motte."],
      strategy: "Use precise evidence",
      commonError: "Describing the later stone keep instead of the first, quick motte-and-bailey design.",
    },
    {
      kind: "mcq",
      id: "exam-1-q11",
      topicId: "king-john",
      guideRef: "magna-carta",
      difficulty: "core",
      question:
        "Ravi reads this extract:\n\n> “No free man shall be seized or imprisoned, or stripped of his rights or possessions … except by the lawful judgement of his equals or by the law of the land.” — Magna Carta, clause 39, 1215 (modern English translation)\n\nWhich principle does this clause most clearly support?",
      options: [
        "No taxes should be raised without the agreement of the kingdom",
        "Every adult man should have the right to vote",
        "Even the king must follow the law before punishing a free man",
        "The English Church shall be free",
      ],
      answerIndex: 2,
      explanation:
        "Clause 39 says a free man can only be punished by lawful judgement or the law of the land — so the king himself is under the law (the rule of law). No taxes without the kingdom's agreement is a real Magna Carta idea too, but it comes from clause 12, not this extract. Magna Carta gave nobody a vote.",
      hints: ["Read the last line of the extract carefully: what must happen before a man is punished?", "Who was doing the seizing and imprisoning that the barons complained about?"],
      strategy: "Use precise evidence",
    },
    {
      kind: "short",
      id: "exam-1-q12",
      topicId: "henry-viii",
      guideRef: "the-great-matter",
      difficulty: "core",
      question:
        "Which cardinal and Lord Chancellor failed to persuade the Pope to annul Henry VIII's first marriage, and fell from power in 1529?",
      answer: { type: "text", accept: ["Thomas Wolsey", "Wolsey", "Cardinal Wolsey", "Cardinal Thomas Wolsey"], display: "Cardinal Thomas Wolsey" },
      traps: [
        { spec: { type: "text", accept: ["Thomas Cromwell", "Cromwell"] }, feedback: "Thomas Cromwell rose to power after this man fell, and organised the Break with Rome in the 1530s." },
        { spec: { type: "text", accept: ["Thomas More", "Sir Thomas More", "More"] }, feedback: "Thomas More replaced this man as Lord Chancellor in 1529 — he opposed the divorce and was executed in 1535." },
      ],
      solution: [
        "Thomas Wolsey had run the government for Henry since about 1515.",
        "When he could not get the annulment, Henry stripped him of power in 1529; he died in 1530 on his way to face charges of treason.",
      ],
      hints: ["Three famous Thomases served Henry. This one was a churchman.", "He was Henry's chief minister from about 1515."],
      strategy: "Use the chronology",
      commonError: "Mixing up the three Thomases: Wolsey (fell 1529), More (executed 1535) and Cromwell (executed 1540).",
    },
    {
      kind: "written",
      id: "exam-1-q13",
      topicId: "henry-viii",
      guideRef: "the-great-matter",
      difficulty: "core",
      question: "Explain why Pope Clement VII would not grant Henry VIII an annulment of his marriage to Catherine of Aragon. (3 marks)",
      marks: 3,
      modelAnswer:
        "The main reason was that the Pope was under the control of Emperor Charles V, Catherine of Aragon's nephew. Charles's troops had sacked Rome in 1527, so Clement could not risk angering the most powerful ruler in Europe by declaring his aunt's marriage invalid. There was also a religious problem: an earlier pope, Julius II, had given special permission (a dispensation) for Henry to marry his brother's widow. Annulling the marriage would mean admitting that the papacy had been wrong.",
      markScheme: [
        { point: "Explains that Catherine's nephew, Emperor Charles V, controlled the Pope after his troops sacked Rome in 1527", keywords: ["charles", "emperor", "nephew", "sacked", "1527", "prisoner"] },
        { point: "Explains why this mattered: Clement could not risk angering the most powerful ruler in Europe", keywords: ["afraid", "anger", "angry", "powerful", "risk", "control"] },
        { point: "Explains a second reason: an earlier pope (Julius II) had given a dispensation for the marriage, so annulling it would admit the papacy had been wrong", keywords: ["dispensation", "permission", "julius", "earlier pope", "wrong", "mistake", "admit"] },
      ],
      hints: ["Who was Catherine of Aragon related to?", "What happened to Rome in 1527?", "Also ask: who had allowed the marriage in the first place?"],
      strategy: "Ask “who benefits?”",
      commonError: "Saying the Pope refused because divorce was forbidden — Henry asked for an annulment (a declaration that the marriage had never been valid), which popes did sometimes grant.",
    },
    {
      kind: "short",
      id: "exam-1-q14",
      topicId: "king-john",
      guideRef: "losing-normandy",
      difficulty: "core",
      question: "In what year did King John lose Normandy to King Philip II of France?",
      answer: { type: "number", value: 1204 },
      traps: [
        { spec: { type: "number", value: 1214 }, feedback: "1214 is the Battle of Bouvines — John's failed attempt to win Normandy back. He lost it ten years earlier." },
        { spec: { type: "number", value: 1199 }, feedback: "1199 is when John became king. Normandy was lost five years later." },
      ],
      solution: [
        "Philip II's armies took Normandy's capital, Rouen, in June 1204.",
        "The loss earned John the nickname “Softsword” and cost the barons their Norman estates.",
      ],
      hints: ["It was five years after John became king in 1199.", "It was ten years before the Battle of Bouvines."],
      strategy: "Use the chronology",
      commonError: "Confusing the loss of Normandy (1204) with the defeat at Bouvines (1214).",
    },
    {
      kind: "mcq",
      id: "exam-1-q15",
      topicId: "historians-toolkit",
      guideRef: "utility-and-reliability",
      difficulty: "core",
      question:
        "Read this source:\n\n> “…we will write of him as we, who have looked upon him and once lived at his court, perceived him. … He was gentle to the good men who loved God, and stern beyond all measure to those who resisted his will.” — The Anglo-Saxon Chronicle, entry for 1087, the year William I died; written by an unnamed English chronicler (modern translation, abridged)\n\nWhy is this source especially valuable to a historian studying what William I was like?",
      options: [
        "It is a primary source, so everything it says must be true",
        "The writer says he saw William and lived at his court, and as an Englishman he is not simply repeating Norman propaganda",
        "It was written by William himself, so it shows his true intentions",
        "It was written centuries after William's death, so the writer could look back calmly",
      ],
      answerIndex: 1,
      explanation:
        "The provenance is the strength: the writer claims first-hand knowledge of William, and he is English — one of the conquered — yet gives a balanced verdict, praising William's piety while condemning his harshness. That makes it a useful check on Norman sources such as the Bayeux Tapestry. Being a primary source does not make a source true — that is a classic mistake; it is still one churchman's view. The writer was not William, and he wrote in the year William died, not centuries later.",
      hints: ["Use NOP: Nature, Origin, Purpose. Who wrote it, when, and how did he know?", "Most sources about William were Norman. Why does an English view matter?"],
      strategy: "Check the provenance (NOP)",
    },
    {
      kind: "written",
      id: "exam-1-q16",
      topicId: "power-of-monarchs",
      guideRef: "limits-on-power",
      difficulty: "core",
      question: "Explain two ways in which the Church could limit a king's power. Use examples from the kings you have studied. (4 marks)",
      marks: 4,
      modelAnswer:
        "First, the Pope could punish a disobedient king. When John refused to accept Stephen Langton as Archbishop of Canterbury, Pope Innocent III placed England under an interdict in 1208 and excommunicated John in 1209. This weakened John so much that in 1213 he had to submit, accept Langton and make England a papal fief. Second, the Pope could refuse a king something he needed. Clement VII would not annul Henry VIII's marriage to Catherine of Aragon, which blocked Henry's hopes of a legitimate son. Henry only got round this limit by breaking with Rome in the 1530s — which shows how strong the Church's limit had been.",
      markScheme: [
        { point: "Identifies the Pope's power to punish a king with an interdict or excommunication", keywords: ["interdict", "excommunicated", "excommunication", "excommunicate", "pope"] },
        { point: "Supports it with John's case: interdict 1208, excommunication 1209, submission 1213", keywords: ["1208", "1209", "1213", "john", "langton", "submit", "submitted"] },
        { point: "Identifies a second way, e.g. the Pope refusing Henry VIII's annulment (or the Church's role in crowning and approving kings)", keywords: ["annulment", "clement", "divorce", "refused", "coronation", "anointed", "papal banner"] },
        { point: "Explains the effect on the king's power (John forced to make England a papal fief; Henry blocked until he broke with Rome)", keywords: ["fief", "forced", "had to", "break with rome", "blocked", "so"] },
      ],
      hints: ["What weapons did a pope have against a king?", "Think of John in 1208–13 and Henry VIII in 1527–33.", "For each way, add what it forced the king to do."],
      strategy: "Compare case studies",
      commonError: "Describing the quarrels without explaining how they actually limited what the king could do.",
    },
    {
      kind: "mcq",
      id: "exam-1-q17",
      topicId: "power-of-monarchs",
      guideRef: "tools-of-control",
      difficulty: "core",
      question: "Which of these is the clearest example of a king using *patronage* to keep control?",
      options: [
        "Henry VIII had Hans Holbein paint grand portraits of him",
        "John charged scutage to barons who did not fight for him",
        "William I was anointed with holy oil at his coronation",
        "William I gave English estates to Norman barons in return for loyalty and knights",
      ],
      answerIndex: 3,
      explanation:
        "Patronage means rewarding supporters — with land, titles or jobs — so that they stay loyal. William's grants of English land to his barons, in return for knight service, are a perfect example. Holbein's portraits are propaganda; scutage is a tax; anointing is about the Church making a king legitimate.",
      hints: ["A patron is someone who gives rewards.", "Which option involves the king giving something away in return for loyalty?"],
      strategy: "Sort causes into categories",
    },
    {
      kind: "short",
      id: "exam-1-q18",
      topicId: "power-of-monarchs",
      guideRef: "monarchy-beyond-england",
      difficulty: "core",
      question:
        "Chinese emperors claimed that Heaven gave them the right to rule — but that Heaven could take this right away from an unjust ruler, which could justify a rebellion against him. What was this idea called?",
      answer: { type: "text", accept: ["Mandate of Heaven", "Tianming", "Tian Ming"], display: "the Mandate of Heaven" },
      traps: [
        { spec: { type: "text", accept: ["Divine Right", "Divine Right of Kings", "Divine Right of Kings and Emperors"] }, feedback: "Close — both say a ruler's power comes from above. But Divine Right said subjects could never lawfully remove a king, whereas this Chinese idea said a bad ruler could lose Heaven's approval." },
      ],
      solution: [
        "The Mandate of Heaven (tianming) dates back to the Zhou dynasty, about 3,000 years ago.",
        "Disasters, famine or successful rebellion could be read as signs that a dynasty had lost the Mandate.",
      ],
      hints: ["A “mandate” is permission or authority to act.", "Who gave the permission? Not God, but…"],
      strategy: "Compare case studies",
      commonError: "Treating it as the same as Divine Right — the Mandate could be lost.",
    },
    {
      kind: "written",
      id: "exam-1-q19",
      topicId: "william-i",
      guideRef: "battles-of-1066",
      difficulty: "core",
      question:
        "Study Source A.\n\n> A scene from the Bayeux Tapestry shows Harold Godwinson touching two holy relics while William sits on a throne. The Latin caption says “Where Harold made an oath to Duke William.” — The Bayeux Tapestry, probably made in England in the 1070s, most likely for Bishop Odo of Bayeux, William's half-brother\n\nHow useful is Source A to a historian studying how William justified his claim to the English throne? Use the source and your own knowledge. (4 marks)",
      marks: 4,
      modelAnswer:
        "Source A is very useful for this enquiry. Its content shows Harold swearing an oath on holy relics to William — the central Norman argument that Harold was an oath-breaker and William the rightful king. Its provenance makes it even more useful for this purpose: it was probably made for Bishop Odo, William's half-brother, in the 1070s, after the Conquest, so it shows exactly how the Normans wanted the story told. However, it is one-sided. English sources say the dying Edward named Harold and that the Witan chose him, and we cannot be sure whether Harold's oath in 1064 was given freely or under pressure. So it is highly useful for the Norman justification, but not as proof that William's claim was actually stronger.",
      markScheme: [
        { point: "Uses the content: it shows Harold swearing an oath to William — the Norman case that Harold was an oath-breaker", keywords: ["oath", "relics", "swore", "swear", "promise", "oath-breaker"] },
        { point: "Uses the provenance: made for Odo, William's half-brother, after the Conquest — a Norman view designed to justify the invasion", keywords: ["odo", "half-brother", "norman", "1070s", "after", "propaganda"] },
        { point: "Explains that this bias makes it useful for this enquiry — it shows how the Normans justified William's claim", keywords: ["useful because", "justify", "justified", "shows how", "norman view", "purpose"] },
        { point: "Uses own knowledge to show its limits (Harold named by Edward/chosen by the Witan; the 1064 oath may have been forced)", keywords: ["deathbed", "witan", "forced", "1064", "pressure", "english sources"] },
      ],
      hints: [
        "Ask “useful for what?” — the question is about how William *justified* his claim.",
        "Who paid for the Tapestry, and when was it made?",
        "What would an English source have said about Harold's claim?",
      ],
      strategy: "Ask “useful for what?”",
      commonError: "Saying the source is useless because it is biased — for studying the Norman justification, its bias is exactly what makes it useful.",
    },
    {
      kind: "written",
      id: "exam-1-q20",
      topicId: "henry-viii",
      guideRef: "henrys-power-and-image",
      difficulty: "core",
      question: "Describe two ways Henry VIII used images or ceremony to show his power, and explain why this mattered to a Tudor king. (3 marks)",
      marks: 3,
      modelAnswer:
        "Henry used portraits by Hans Holbein, which showed him standing with legs apart, broad-shouldered and richly dressed, as a strong and magnificent ruler. He also used grand ceremonies such as the Field of the Cloth of Gold in 1520, a spectacular meeting with Francis I of France, to show off England's wealth. This mattered because the Tudors had only won the crown at Bosworth in 1485, so their claim was recent; looking powerful and legitimate discouraged rivals and rebels.",
      markScheme: [
        { point: "Describes one method, e.g. Holbein's portraits showing a strong, magnificent king", keywords: ["holbein", "portrait", "painting", "picture"] },
        { point: "Describes a second method, e.g. the Field of the Cloth of Gold (1520), coins, palaces, or the Great Bible title page showing Henry as Head of the Church", keywords: ["field of the cloth of gold", "1520", "coins", "ceremony", "palace", "hampton court", "bible"] },
        { point: "Explains why it mattered: the Tudor claim was recent (Bosworth 1485), so a powerful image discouraged rivals and rebels", keywords: ["bosworth", "1485", "rivals", "rebels", "weak claim", "legitimate", "pretenders"] },
      ],
      hints: ["Think about how ordinary people and foreign kings would *see* Henry.", "How had the Tudors got the throne in the first place?"],
      strategy: "Ask “who benefits?”",
      commonError: "Describing the images without explaining why a Tudor king needed them.",
    },

    // ----------------------------- CHALLENGE ----------------------------
    {
      kind: "mcq",
      id: "exam-1-q21",
      topicId: "power-of-monarchs",
      guideRef: "limits-on-power",
      difficulty: "challenge",
      question:
        "Henry VIII did not simply announce that he was Head of the Church. Instead, the Act of Supremacy (1534) and the other Reformation laws were passed by Parliament. What is the best explanation for this?",
      options: [
        "Laws made in Parliament carried the backing of the landowners and the force of law, so resisting the changes could be punished as treason",
        "Magna Carta said a king needed Parliament's permission for every decision",
        "Parliament had elected Henry as king in 1509, so he had to obey it",
        "The Pope had ordered Henry to consult Parliament before making any changes",
      ],
      answerIndex: 0,
      explanation:
        "Acts of Parliament bound the whole kingdom and showed that the political nation backed the King; the Treason Act (1534) then made it treason to deny Henry's supremacy, which is how Thomas More was executed. Magna Carta said nothing like “every decision” needs Parliament; Henry inherited the crown rather than being elected; and the Pope opposed the whole break. In the long run, though, using Parliament gave it a bigger role — a future limit on royal power.",
      hints: ["Which option makes Henry *stronger*, not weaker?", "Think about what happened to people who refused to accept the new laws, such as Thomas More."],
      strategy: "Ask “who benefits?”",
    },
    {
      kind: "short",
      id: "exam-1-q22",
      topicId: "power-of-monarchs",
      guideRef: "limits-on-power",
      difficulty: "challenge",
      question:
        "In 1525 Henry VIII and Cardinal Wolsey demanded a heavy new tax, without asking Parliament, to pay for war in France. There was widespread refusal and protest — thousands gathered at Lavenham in Suffolk — and Henry backed down. What was this demand called?",
      answer: { type: "text", accept: ["Amicable Grant", "the Amicable Grant"], display: "the Amicable Grant" },
      traps: [
        { spec: { type: "text", accept: ["scutage"] }, feedback: "Scutage (“shield money”) was a tax King John charged barons in the 1200s. Henry's 1525 demand pretended to be a friendly gift." },
        { spec: { type: "text", accept: ["Pilgrimage of Grace"] }, feedback: "The Pilgrimage of Grace was the northern rebellion of 1536 against religious changes. The 1525 protest was against a tax." },
      ],
      solution: [
        "The Amicable Grant was presented as a “friendly” (amicable) gift to the King, but it was really a forced tax.",
        "When people refused to pay, Henry dropped it and pardoned the protesters — evidence that even a powerful Tudor king needed his subjects' cooperation.",
      ],
      hints: ["Its name pretended that people were giving the money willingly, as friends.", "It was organised by Wolsey and is a key example of the limits on Henry's power."],
      strategy: "Use precise evidence",
      commonError: "Thinking a strong Tudor king could tax whatever he liked — the Amicable Grant shows he could not.",
    },
    {
      kind: "written",
      id: "exam-1-q23",
      topicId: "power-of-monarchs",
      guideRef: "comparing-three-kings",
      difficulty: "challenge",
      question: "Compare how William I and Henry VIII came to the throne. Which of them was more secure at the start of his reign? Explain your judgement. (5 marks)",
      marks: 5,
      modelAnswer:
        "William came to power through a disputed claim and conquest: he said Edward had promised him the crown, invaded, and won at Hastings in 1066. Henry VIII, by contrast, inherited peacefully in 1509 as the only surviving son of Henry VII, after his brother Arthur died in 1502. William was very insecure at first: he was a foreign ruler of a hostile population, and he faced rebellions from 1067 to 1071 that he could only crush with castles and the Harrying of the North. Henry VIII was far more secure: his claim was undisputed, his father had already defeated rival claimants and left a full treasury, and he was a popular young king. The Tudor claim was still fairly recent, but overall Henry VIII was clearly more secure, because he did not have to fight for his crown — William had to keep fighting for years to hold on to his.",
      markScheme: [
        { point: "Describes William's route to power: a disputed claim, then conquest at Hastings (1066)", keywords: ["hastings", "1066", "conquest", "invaded", "battle", "claim"] },
        { point: "Describes Henry VIII's route: peaceful inheritance in 1509 after Arthur's death", keywords: ["inherited", "1509", "father", "henry vii", "arthur", "peaceful"] },
        { point: "Explains why William was insecure (foreign ruler, rebellions 1067–71, needed castles and the Harrying)", keywords: ["rebellion", "rebellions", "castles", "harrying", "foreign", "exeter", "ely"] },
        { point: "Explains why Henry was secure (undisputed heir, rivals already defeated, full treasury, popular) — or a limit to this (recent Tudor claim)", keywords: ["undisputed", "treasury", "money", "popular", "rivals", "tudor", "bosworth"] },
        { point: "Reaches a supported judgement that compares the two directly", keywords: ["more secure", "whereas", "overall", "therefore", "by contrast", "however"] },
      ],
      hints: [
        "Start with the *circumstances*: inheritance or conquest?",
        "What did each king have to do in the first five years of his reign?",
        "Finish with a judgement word: “more secure because…”",
      ],
      strategy: "Compare case studies",
      commonError: "Writing two separate stories instead of comparing the kings point by point and reaching a judgement.",
    },
    {
      kind: "written",
      id: "exam-1-q24",
      topicId: "king-john",
      guideRef: "johns-reputation",
      difficulty: "challenge",
      question:
        "Monastic chroniclers such as Roger of Wendover described John as a cruel tyrant, while many modern historians give a more balanced view of him as a hard-working but distrusted king. Explain why these interpretations differ. (4 marks)",
      marks: 4,
      modelAnswer:
        "The chroniclers were monks, and the Church had suffered badly under John: during the interdict he seized Church income, so monks had reasons to see him as wicked. They also wrote after his death, often repeating rumours, such as stories about Arthur's murder. Modern historians use different evidence, especially government records like the Pipe Rolls, which show John working hard on justice and royal finances. They also focus on the difficult circumstances he inherited — Richard I's debts, rising prices and a powerful enemy in Philip II. So the interpretations differ because they rest on different sources and were written with different purposes and values.",
      markScheme: [
        { point: "Explains the chroniclers' position: monks whose Church suffered under John (interdict, Church income seized)", keywords: ["monk", "monks", "church", "interdict", "church money", "church income"] },
        { point: "Explains the chroniclers' timing/evidence: written after his death, relying on stories and rumours", keywords: ["after he died", "after his death", "rumour", "rumours", "stories", "later"] },
        { point: "Explains modern historians' evidence and focus: government records (e.g. Pipe Rolls) and the difficult circumstances John inherited (Richard's debts, inflation, Philip II)", keywords: ["records", "pipe rolls", "government", "richard", "debts", "inflation", "philip", "circumstances"] },
        { point: "Links the difference to how interpretations are made (sources available, purpose, values)", keywords: ["evidence", "purpose", "values", "different sources", "because", "depends"] },
      ],
      hints: [
        "Who were the chroniclers, and what had John done to their Church?",
        "What kinds of evidence can a modern historian use that a monk in the 1230s did not?",
        "Finish by naming the *reason* interpretations differ: sources, purpose, values.",
      ],
      strategy: "Check the provenance (NOP)",
      commonError: "Just saying who was right about John instead of explaining *why* the interpretations differ.",
    },
    {
      kind: "written",
      id: "exam-1-q25",
      topicId: "henry-viii",
      guideRef: "dissolution-of-the-monasteries",
      difficulty: "challenge",
      question: "Why did Henry VIII dissolve the monasteries between 1536 and 1540? Was money the most important reason? Explain your answer. (5 marks)",
      marks: 5,
      modelAnswer:
        "Money was a major reason. The Valor Ecclesiasticus of 1535 showed how rich the monasteries were, and their lands, buildings and treasures passed to the Crown, which Henry needed for wars and spending. Power was another reason: after the Break with Rome, monks and nuns might stay loyal to the Pope, so closing their houses removed a source of opposition to Henry as Supreme Head. Thomas Cromwell's visitors also reported corruption, which gave a religious excuse. The motives were linked: Henry sold much of the land to gentry and nobles, which raised money *and* gave powerful families a stake in keeping the Reformation. Overall money was the most important reason, because Henry kept dissolving houses that had shown no disloyalty at all — but it worked hand in hand with his need to secure his new power over the Church.",
      markScheme: [
        { point: "Explains the money motive (Valor Ecclesiasticus 1535 showed their wealth; land and treasure went to the Crown)", keywords: ["money", "wealth", "rich", "valor ecclesiasticus", "land", "treasure", "war"] },
        { point: "Explains the power/loyalty motive (monks loyal to the Pope; removing opposition to the Supreme Head)", keywords: ["pope", "loyal", "loyalty", "opposition", "supreme head", "power"] },
        { point: "Explains another motive (rewarding supporters, reports of corruption from the visitations, Protestant ideas)", keywords: ["gentry", "supporters", "reward", "corrupt", "corruption", "visitations", "protestant", "cromwell"] },
        { point: "Links the motives (e.g. selling land raised money and tied powerful families to the Reformation)", keywords: ["linked", "both", "at the same time", "stake", "also"] },
        { point: "Reaches a supported judgement on whether money was the most important reason", keywords: ["most important", "main reason", "overall", "therefore", "judgement"] },
      ],
      hints: [
        "Sort the motives into categories: money, power, religion.",
        "What did the Valor Ecclesiasticus (1535) reveal?",
        "Find a link: who bought the monastery lands, and why did that matter?",
      ],
      strategy: "Link the factors",
      commonError: "Listing motives without linking them or deciding which mattered most.",
    },
    {
      kind: "written",
      id: "exam-1-q26",
      topicId: "power-of-monarchs",
      guideRef: "writing-a-causation-essay",
      difficulty: "challenge",
      question:
        "“Kings rose to power mainly because of military strength.” How far do you agree? Refer to at least two of William I, John and Henry VIII. (6 marks)",
      marks: 6,
      modelAnswer:
        "Military strength was decisive for William I. His claim was weak, but his fleet, cavalry and archers won at Hastings in 1066, and he kept the throne with castles and the Harrying of the North. Even Henry VIII's peaceful inheritance rested on force, because his father had won the crown at Bosworth in 1485.\n\nHowever, the other two kings rose mainly through inheritance. John became king in 1199 as Richard I's brother and chosen heir, beating his nephew Arthur's claim, without a great battle. Henry VIII simply inherited in 1509 at 17 after Arthur's death. Legitimacy mattered too: William needed a claim (Edward's promise, Harold's oath) and the Pope's banner to make his conquest look lawful, and every king was crowned and anointed by the Church.\n\nThe factors were linked: military strength could *win* a throne, but inheritance and Church approval were what made a king accepted and helped him *keep* it. Overall I partly agree: military strength was the key factor in moments of crisis such as 1066 and 1485, but in normal times kings rose by inheritance.",
      markScheme: [
        { point: "Agrees using William: won at Hastings (1066) and held the throne with castles and the Harrying of the North", keywords: ["hastings", "1066", "castles", "harrying", "army", "cavalry", "conquest"] },
        { point: "Uses the Tudor example: Henry VII won at Bosworth (1485), so even Henry VIII's inheritance rested on earlier force", keywords: ["bosworth", "1485", "henry vii", "father", "won the crown"] },
        { point: "Disagrees with evidence of inheritance: John in 1199 (over Arthur) and/or Henry VIII in 1509", keywords: ["inherited", "inheritance", "1199", "1509", "arthur", "richard", "heir"] },
        { point: "Disagrees with evidence of legitimacy and the Church (William's claim and papal banner; coronation and anointing)", keywords: ["claim", "promise", "oath", "papal banner", "pope", "coronation", "anointed", "church"] },
        { point: "Links the factors (e.g. force could win a throne but legitimacy was needed to keep it)", keywords: ["linked", "but", "keep", "because", "combined", "together"] },
        { point: "Reaches a substantiated overall judgement about how far military strength was the main reason", keywords: ["overall", "partly agree", "to a large extent", "judgement", "therefore", "most important"] },
      ],
      hints: [
        "Plan by factors, not by kings: military strength, inheritance, Church/legitimacy.",
        "For each king, ask: did he need to fight to *get* the throne, or only to *keep* it?",
        "Your conclusion should say *how far* — fully, mostly, partly — and why.",
      ],
      strategy: "Weigh both sides, then judge",
      commonError: "Telling the story of each king without weighing military strength against other factors.",
    },
  ],
};
