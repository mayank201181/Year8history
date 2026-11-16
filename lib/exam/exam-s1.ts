// The Big Exam — Paper 2: Sources & Judgement (cross-topic, 20 questions, ~60 minutes).
import type { ExamPaper } from "../types.ts";

export const paper: ExamPaper = {
  id: "exam-s1",
  title: "Paper 2: Sources & Judgement",
  kind: "sources",
  minutes: 60,
  questions: [
    {
      kind: "mcq",
      id: "exam-s1-q01",
      topicId: "william-i",
      guideRef: "domesday-and-church",
      difficulty: "warmup",
      question:
        "A historian wants to find out how much land, how many ploughs and how many people a Yorkshire village had in **1086** — and what it had been worth before 1066. Which source would be **most useful**?",
      options: ["The Bayeux Tapestry", "The *Anglo-Saxon Chronicle*", "Domesday Book", "Orderic Vitalis's *Ecclesiastical History*"],
      answerIndex: 2,
      explanation:
        "**Domesday Book** recorded, village by village, the land, ploughs, people and animals in 1086, and often what the place had been worth 'in the time of King Edward' (before 1066). The *Chronicle* and Orderic tell the story of events — useful for explaining *why* a village was laid waste, but they do not count ploughs. How useful a source is always depends on the question being asked.",
      hints: ["Which of these sources was designed to record exactly this kind of information?"],
      strategy: "Think about purpose",
    },
    {
      kind: "short",
      id: "exam-s1-q02",
      topicId: "historians-toolkit",
      guideRef: "provenance-nop",
      difficulty: "warmup",
      question:
        "A historian checks a source against other evidence to see whether they agree. If they do, the first source is supported. What is this process called? (One word or hyphenated term beginning with **c**.)",
      answer: {
        type: "text",
        accept: [
          "corroboration",
          "corroborating",
          "corroborate",
          "corroborated",
          "corroborating evidence",
          "cross-referencing",
          "cross referencing",
          "crossreferencing",
          "cross-reference",
          "cross reference",
          "cross-checking",
          "cross checking",
        ],
        display: "corroboration (cross-referencing)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["comparison", "comparing", "compare"] },
          feedback: "Close — comparing is part of it, but the term for one source *supporting* another is more specific. Think of a detective checking that two witnesses back each other up.",
        },
      ],
      solution: [
        "**Corroboration** (or cross-referencing) means checking a source against other evidence.",
        "If independent sources agree we can be more confident — e.g. Domesday Book's 'waste' entries in Yorkshire corroborate chroniclers' accounts of the Harrying of the North.",
      ],
      hints: ["It's what a detective does when two separate witnesses tell the same story."],
      strategy: "Cross-reference sources",
    },
    {
      kind: "mcq",
      id: "exam-s1-q03",
      topicId: "king-john",
      guideRef: "bad-king-john",
      difficulty: "core",
      question:
        "For centuries King John was remembered as a villain, largely because of chronicles written by monks. Since the mid-20th century many historians have judged him more fairly. Which kind of evidence did they rely on that earlier writers had mostly ignored?",
      options: [
        "The Robin Hood ballads and stories",
        "The surviving records of John's government, such as the Pipe Rolls",
        "Victorian paintings of the sealing of Magna Carta",
        "Shakespeare's play *King John*",
      ],
      answerIndex: 1,
      explanation:
        "Royal records such as the **Pipe Rolls** (the Exchequer's accounts) and the Chancery rolls were produced by John's own government while he reigned. They show a hard-working king who travelled constantly and took a close interest in justice and finance. Ballads, plays and paintings were created long after John's death — they are later works of imagination, not evidence from his reign.",
      hints: [
        "Which evidence was actually produced by John's own government while he was king?",
        "Chroniclers told stories; royal officials kept accounts.",
        "Think about records of money and justice.",
      ],
      strategy: "Check the provenance (NOP)",
    },
    {
      kind: "written",
      id: "exam-s1-q04",
      topicId: "henry-viii",
      guideRef: "break-with-rome",
      difficulty: "core",
      question:
        "**Source A** — the words Sir Thomas More is reported to have spoken on the scaffold in July 1535, as recorded in a newsletter published in Paris a few weeks later.\n\n> [I die] the King's good servant, but God's first.\n\nWhat can you infer from Source A about why More refused to accept Henry VIII's supremacy over the Church? Use the source and your own knowledge. (3 marks)",
      marks: 3,
      modelAnswer:
        "I can infer that More put his loyalty to God above his loyalty to the king. He calls himself 'the King's good servant', which suggests he did not see himself as a rebel or traitor in ordinary matters — but 'God's first' shows that, in matters of religion, his conscience came before any law the king made.\n\nThis fits what I know. The Act of Supremacy (1534) made Henry Supreme Head of the Church of England. More was a devout Catholic who believed that only the Pope could lead the Church, so he would not accept the king's new title. He was convicted of treason and executed in 1535. The source shows that his refusal came from religious conscience, not political ambition.",
      markScheme: [
        {
          point: "Makes a valid inference: More put his duty to God (his faith and conscience) above his duty to the king",
          keywords: ["god first", "god's first", "god before", "god came first", "conscience", "faith", "religion", "religious", "more important", "above the king", "loyal to god"],
        },
        {
          point: "Uses the source: he still saw himself as the king's loyal servant, not a rebel",
          keywords: ["good servant", "servant", "loyal", "not a rebel", "not a traitor", "still loyal", "obeyed the king"],
        },
        {
          point: "Own knowledge: the Act of Supremacy (1534) made Henry Supreme Head; More, a Catholic, believed the Pope led the Church and was executed for treason (1535)",
          keywords: ["supreme head", "act of supremacy", "1534", "pope", "catholic", "treason", "executed", "1535", "oath", "head of the church"],
        },
      ],
      commonError: "Describing what the source says ('he says he is the king's servant') without inferring what it reveals about his reasons.",
      hints: [
        "What two loyalties does More mention — and which one comes first?",
        "What did the Act of Supremacy say about who led the Church in England?",
        "Link his words to his Catholic belief that the Pope was head of the Church.",
      ],
      strategy: "Make an inference",
    },
    {
      kind: "written",
      id: "exam-s1-q05",
      topicId: "william-i",
      guideRef: "securing-the-kingdom",
      difficulty: "core",
      question:
        "Compare how **William I** dealt with the northern rebellion of 1069 and how **Henry VIII** dealt with the **Pilgrimage of Grace** (1536). Explain one similarity and one difference. (4 marks)",
      marks: 4,
      modelAnswer:
        "One similarity is that both kings used ruthless force to crush a rebellion in the north and to frighten others into obedience. William answered the rising of 1069 with the Harrying of the North (1069–70), and Henry had about 200 rebels executed, including the leader Robert Aske. In both cases the point was to make an example, so that no one would dare rebel again.\n\nOne difference is who suffered. William destroyed a whole region — villages, crops and animals — so ordinary people starved, and Domesday Book still recorded much of Yorkshire as 'waste' in 1086. Henry first promised the rebels a pardon, then, after new risings in early 1537, broke that promise: leaders such as Aske were tried for treason and executed, along with many ordinary rebels. This difference reflects their positions: William was a foreign conqueror with no secure hold on the north, while Henry was an established king who could use the law and the courts to punish rebels.",
      markScheme: [
        {
          point: "Identifies a similarity: both used ruthless force or fear to crush northern rebels and deter future revolt",
          keywords: ["both", "ruthless", "fear", "terror", "crushed", "brutal", "violence", "deter", "example", "warning", "frighten"],
        },
        {
          point: "Supports the similarity with evidence from both cases",
          keywords: ["harrying", "1069", "1070", "executed", "executions", "aske", "about 200", "villages", "burned", "hanged"],
        },
        {
          point: "Identifies a difference: William devastated a whole region and its people; Henry promised pardons, then punished rebels through trials and executions",
          keywords: ["whole region", "crops", "animals", "livestock", "famine", "starved", "ordinary people", "promised", "pardon", "tricked", "broke his promise", "trials", "leaders"],
        },
        {
          point: "Explains the difference, e.g. a new foreign conqueror versus an established king who could use the law",
          keywords: ["conqueror", "foreign", "new king", "established", "legitimate", "law", "trial", "treason", "courts"],
        },
      ],
      commonError: "Describing each rebellion separately without making a direct comparison ('both…', 'whereas…').",
      hints: [
        "Start with what both kings wanted: to stop the north rebelling again.",
        "Who suffered most in each case — a whole population, or the rebels themselves?",
        "William burned villages and crops; Henry promised a pardon, then executed about 200 people, including Robert Aske.",
      ],
      strategy: "Compare and contrast",
    },
    {
      kind: "written",
      id: "exam-s1-q06",
      topicId: "french-revolution",
      guideRef: "rights-of-man",
      difficulty: "core",
      question:
        "Compare the campaign of **Olympe de Gouges**, who wrote the *Declaration of the Rights of Woman and of the Female Citizen* (1791), with the campaign of the **suffragettes** in Britain (1903–1914). Explain one similarity and one difference. (4 marks)",
      marks: 4,
      modelAnswer:
        "One similarity is that both demanded equal political rights for women and attacked the idea that rights belonged only to men. De Gouges answered the 1789 Declaration of the Rights of Man, which left women out, by arguing that if a woman has the right to mount the scaffold she must also have the right to speak in public life. The suffragettes similarly argued that women obeyed the law and paid taxes, so they should have a say in making the law.\n\nOne difference is in their methods and results. De Gouges was largely a lone writer whose weapon was the pamphlet; she was executed in 1793 after attacking the Jacobins, and French women did not win the vote until 1944. The suffragettes were a mass organisation, the WSPU, which used 'deeds not words' — window smashing, arson and hunger strikes — and British women won the vote in 1918 and on equal terms in 1928.",
      markScheme: [
        {
          point: "Identifies a similarity: both demanded equal political rights or citizenship for women",
          keywords: ["both", "equal", "equality", "rights", "vote", "citizens", "citizenship", "same as men", "excluded"],
        },
        {
          point: "Supports the similarity, e.g. de Gouges's 'scaffold' argument or the suffragettes' tax and law arguments",
          keywords: ["scaffold", "rostrum", "taxes", "pay tax", "laws", "obey", "punished", "rights of man", "left out"],
        },
        {
          point: "Identifies a difference in methods: one writer using a pamphlet versus a mass militant organisation",
          keywords: ["pamphlet", "writing", "wrote", "writer", "alone", "individual", "organisation", "wspu", "pankhurst", "militant", "window", "arson", "hunger strike", "deeds not words"],
        },
        {
          point: "Develops the difference with context or outcome: de Gouges executed (1793), French women win the vote only in 1944; British women win it in 1918/1928",
          keywords: ["executed", "guillotine", "guillotined", "1793", "1944", "1918", "1928", "won the vote", "failed", "outcome"],
        },
      ],
      hints: [
        "What did both campaigns want for women?",
        "How did each try to get it — one person's writing, or an organised movement?",
        "What happened to de Gouges, and when did French and British women actually vote?",
      ],
      strategy: "Compare and contrast",
    },
    {
      kind: "written",
      id: "exam-s1-q07",
      topicId: "hitler-rise",
      guideRef: "early-nazi-party",
      difficulty: "core",
      question:
        "**Source B** — from an article by Joseph Goebbels in the Nazi newspaper *Der Angriff* ('The Attack'), April 1928, before the Reichstag election in which he won a seat (adapted translation).\n\n> We are going into the Reichstag to arm ourselves with the weapons of democracy… We come not as friends, nor even as neutrals. We come as enemies! As the wolf breaks into the flock of sheep, that is how we come.\n\nWhat can you infer from Source B about the Nazis' attitude to democracy? Use the source and your own knowledge. (4 marks)",
      marks: 4,
      modelAnswer:
        "Source B suggests the Nazis saw themselves as enemies of democracy who wanted to destroy it. Goebbels says they come 'as enemies' and compares them to a wolf attacking sheep, which implies democracy was weak prey to be devoured, not a system to be respected.\n\nThe source also suggests they planned to use democracy's own tools against it. 'The weapons of democracy' means elections and seats in the Reichstag. This fits Hitler's change of tactics after the failed Munich Putsch of 1923: instead of seizing power by force, the Nazis would win votes and gain power legally.\n\nWhat happened next shows the inference is accurate. Once Hitler was Chancellor, the Enabling Act (March 1933) let him make laws without the Reichstag, and by July 1933 Germany was a one-party state — democracy was destroyed from the inside.",
      markScheme: [
        {
          point: "Inference: the Nazis were enemies of democracy and intended to destroy it",
          keywords: ["enemies", "enemy", "destroy", "against democracy", "hated", "end democracy", "wolf", "attack", "prey"],
        },
        {
          point: "Inference: they would use democracy's own tools (elections, Reichstag seats) to gain power legally",
          keywords: ["weapons of democracy", "use democracy", "elections", "votes", "legal", "legally", "seats", "tool", "from inside", "from the inside"],
        },
        {
          point: "Own knowledge: after the failed Munich Putsch (1923) Hitler decided to win power through elections",
          keywords: ["putsch", "1923", "prison", "legal route", "ballot box", "mein kampf", "change of tactics"],
        },
        {
          point: "Own knowledge confirming the inference: the Enabling Act (1933) and one-party state",
          keywords: ["enabling act", "1933", "dictatorship", "banned", "one-party", "one party", "reichstag fire", "abolished"],
        },
      ],
      commonError: "Copying out the quotation instead of explaining what it suggests ('this shows that…').",
      hints: [
        "What animal does Goebbels compare the Nazis to — and what, then, is democracy?",
        "What could 'the weapons of democracy' be? Which democratic tools could a party use?",
        "Link the source to Hitler's lesson from 1923 and to the Enabling Act of 1933.",
      ],
      strategy: "Make an inference",
    },
    {
      kind: "written",
      id: "exam-s1-q08",
      topicId: "hitler-rise",
      guideRef: "creating-a-dictatorship",
      difficulty: "challenge",
      question:
        "**Source C** — written for this exercise, in the style of a report by a British journalist in Berlin during the Reichstag election of **5 March 1933**, five weeks after Hitler became Chancellor.\n\n> Outside the polling station two men in SA uniform stand on either side of the door, holding a placard that reads 'Vote for Hitler!'. Every voter must walk between them. The Communist newspapers have been banned and many Communist leaders are under arrest. Few people here dare to talk openly about politics.\n\nHow useful would a report like Source C be for a historian studying how Hitler turned his position as Chancellor into a dictatorship? Use the content, the provenance and your own knowledge. (6 marks)",
      marks: 6,
      modelAnswer:
        "Source C is useful because its content shows two methods Hitler used in early 1933. First, intimidation: SA men stand at the polling station door, so voters felt watched and afraid. Second, the silencing of opponents: Communist newspapers are banned and leaders arrested.\n\nMy own knowledge explains why. After the Reichstag Fire (27 February 1933), Hindenburg signed an emergency decree that suspended civil rights, allowing the arrest of thousands of Communists before the election.\n\nThe provenance adds to its usefulness: a foreign journalist was outside Nazi control and could report what Germans were afraid to say. However, he saw only one city on one day, and as an outsider he may have exaggerated or misunderstood.\n\nThe source also shows only part of the story. Even with this pressure, the Nazis won only about 44% of the vote. Hitler still needed the Enabling Act (23 March 1933), the ban on other parties (July 1933) and Hindenburg's death (August 1934) to become a dictator. Overall, Source C is very useful for the methods of intimidation in 1933, but limited for the full process.",
      markScheme: [
        {
          point: "Content: shows intimidation of voters by the SA",
          keywords: ["intimidation", "intimidate", "intimidated", "sa", "stormtroopers", "fear", "afraid", "threat", "pressure", "polling station"],
        },
        {
          point: "Content: shows opponents (Communists) being silenced",
          keywords: ["communist", "communists", "arrested", "banned", "opponents", "kpd", "silenced", "newspapers"],
        },
        {
          point: "Own knowledge of context: the Reichstag Fire (27 February 1933) and the emergency decree allowed the arrests",
          keywords: ["reichstag fire", "emergency decree", "decree", "27 february", "28 february", "civil rights", "civil liberties", "hindenburg"],
        },
        {
          point: "Provenance: a foreign journalist is outside Nazi control, but sees only one place at one moment and may misunderstand",
          keywords: ["journalist", "foreign", "british", "outsider", "censorship", "eyewitness", "one city", "one day", "snapshot", "typical", "bias", "exaggerate"],
        },
        {
          point: "Own knowledge of limits: the Nazis still lacked a majority (about 44%); the Enabling Act and later steps were needed",
          keywords: ["43", "44", "44%", "43.9", "no majority", "not a majority", "enabling act", "23 march", "one-party", "night of the long knives", "hindenburg died", "1934", "only part"],
        },
        {
          point: "Reaches a supported judgement on how useful the source is for this enquiry",
          keywords: ["very useful", "partly useful", "useful for", "limited", "overall", "however", "to some extent", "judgement"],
        },
      ],
      commonError: "Saying a source is 'not useful because it is biased' — even a one-sided source is useful if you know what it can and cannot show.",
      solutions: [
        {
          label: "Argument: very useful for methods of control",
          steps: [
            "The content shows two key methods — SA intimidation and the arrest of Communists.",
            "It fits the known context of the Reichstag Fire decree (28 February 1933).",
            "A foreign journalist could report what Germans could not, so the account is not Nazi propaganda.",
          ],
        },
        {
          label: "Argument: useful but limited",
          steps: [
            "It is one snapshot of one city on one day — how typical was it?",
            "It cannot show the legal steps that really created the dictatorship: the Enabling Act, the ban on parties and Hindenburg's death.",
            "So it is useful for the atmosphere of fear, but must be combined with other evidence.",
          ],
        },
      ],
      hints: [
        "Usefulness = what the content shows + what the provenance adds or limits + what is missing.",
        "What had happened on 27 February 1933 that allowed mass arrests of Communists?",
        "Did this pressure give the Nazis a majority? What else did Hitler need afterwards?",
      ],
      strategy: "Check the provenance (NOP)",
    },
    {
      kind: "written",
      id: "exam-s1-q09",
      topicId: "mao-rise",
      guideRef: "long-march",
      difficulty: "core",
      question:
        "The **Munich Putsch** (1923) and the **Long March** (1934–35) were both failures in military terms, but each was turned into a propaganda success. Explain how Hitler and Mao each turned failure into success. (4 marks)",
      marks: 4,
      modelAnswer:
        "Hitler turned the failed Munich Putsch into publicity. At his trial in 1924 he made long speeches attacking the Weimar government and the Treaty of Versailles, and newspapers reported them across Germany, making him a national figure. He served only about nine months of a five-year sentence and used the time to write *Mein Kampf*; he also decided to win power legally, through elections.\n\nMao turned the Long March into a heroic legend. Of roughly 86,000 people who set out, only about 8,000 reached Shaanxi — a disaster — but the Communists told it as an epic of courage and survival, with stories like the crossing of Luding Bridge. Along the route they spread communist ideas among the peasants, and at the Zunyi Conference (1935) Mao rose to the leadership. In both cases a defeat became a story that won supporters.",
      markScheme: [
        {
          point: "Putsch: Hitler used his trial (1924) to win national publicity",
          keywords: ["trial", "1924", "newspapers", "publicity", "famous", "speeches", "court", "national figure"],
        },
        {
          point: "Putsch: further gains — Mein Kampf written in prison, short sentence, lesson to win power legally",
          keywords: ["mein kampf", "prison", "landsberg", "nine months", "legal", "legally", "elections", "lesson", "martyrs"],
        },
        {
          point: "Long March: presented as a heroic epic of survival (e.g. Luding Bridge), despite huge losses",
          keywords: ["heroic", "heroes", "legend", "luding", "survived", "survival", "epic", "brave", "story", "86,000", "86000", "8,000", "8000"],
        },
        {
          point: "Long March: spread communist ideas among peasants and made Mao leader (Zunyi)",
          keywords: ["peasants", "spread", "ideas", "recruit", "recruits", "zunyi", "leader", "leadership", "propaganda"],
        },
      ],
      hints: [
        "For each event, ask: what did the leader *gain*, even though he lost the fight?",
        "Hitler: think about his trial and his time in prison.",
        "Mao: think about how the story was told and what happened at Zunyi.",
      ],
      strategy: "Compare and contrast",
    },
    {
      kind: "written",
      id: "exam-s1-q10",
      topicId: "mao-rise",
      guideRef: "japan-and-civil-war",
      difficulty: "core",
      question:
        "**Source D** — written for this exercise, based on reports by foreign journalists in Nationalist-controlled cities in 1947–48.\n\n> In Shanghai the shopkeeper changes his prices twice a day. Clerks are paid in bundles of banknotes and run to buy rice before the price rises again. People whisper that officials and generals close to the government are growing rich, while ordinary soldiers go hungry and unpaid.\n\nWhat can you infer from Source D about why the Nationalists (Guomindang) lost support by 1948? Use the source and your own knowledge. (4 marks)",
      marks: 4,
      modelAnswer:
        "Source D suggests that runaway inflation was ruining ordinary people. Prices changed 'twice a day', so wages and savings lost their value almost at once, and families struggled to buy rice. People who could not feed themselves were unlikely to stay loyal to the government that let this happen.\n\nIt also suggests the government looked corrupt and unfair: officials and generals were 'growing rich' while soldiers went 'hungry and unpaid'. Unpaid soldiers had little reason to fight, and in the Civil War many Nationalist units deserted or went over to the Communists.\n\nFrom my own knowledge, the Nationalists had already been badly weakened by the war against Japan (1937–45). By contrast, the Communists offered land reform to the peasants and their soldiers were disciplined, so support shifted towards Mao, who won the Civil War in 1949.",
      markScheme: [
        {
          point: "Inference: runaway inflation ruined people's wages and savings, turning them against the government",
          keywords: ["inflation", "prices", "worthless", "savings", "wages", "rice", "poverty", "angry", "hardship", "money"],
        },
        {
          point: "Inference: corruption made the Nationalist government look selfish and unfair",
          keywords: ["corrupt", "corruption", "officials", "generals", "rich", "greed", "greedy", "unfair"],
        },
        {
          point: "Inference or knowledge: unpaid soldiers lost morale, deserted or changed sides",
          keywords: ["soldiers", "unpaid", "morale", "deserted", "desert", "defected", "changed sides", "surrendered", "went over"],
        },
        {
          point: "Own knowledge: the war with Japan weakened the Nationalists, while the Communists' land reform and discipline won peasants' support",
          keywords: ["land reform", "peasants", "communists", "civil war", "1949", "japan", "1937", "discipline", "taiwan"],
        },
      ],
      hints: [
        "What does 'prices change twice a day' tell you about money?",
        "Who is getting rich in the source, and who is going hungry?",
        "What were the Communists offering the peasants at the same time?",
      ],
      strategy: "Make an inference",
    },
    {
      kind: "written",
      id: "exam-s1-q11",
      topicId: "pol-pot",
      guideRef: "year-zero",
      difficulty: "core",
      question:
        "In 1793 the French revolutionaries brought in a new calendar that counted years from the founding of the Republic, so that September 1792 became the start of 'Year I'. After April 1975 the Khmer Rouge tried to wipe out Cambodia's past and start again from what became known as **'Year Zero'**. Explain one similarity and one difference between these two attempts to restart history. (4 marks)",
      marks: 4,
      modelAnswer:
        "One similarity is that both revolutionary governments wanted a complete break with a past they saw as corrupt and unjust. The French revolutionaries wanted to sweep away the monarchy and the power of the Church, so even the calendar was renamed; the Khmer Rouge rejected religion, the old elites and foreign influence. Both were linked to periods of terror against people labelled 'enemies'.\n\nOne difference is how far the break went and what it cost. The French calendar was largely symbolic: people kept their homes, money, markets and schools, and Napoleon abolished the calendar in 1806. The Khmer Rouge emptied the cities and abolished money, markets, schools and private property, forcing people into collective farms. An estimated 1.5–2 million Cambodians — roughly a quarter of the population — died from execution, starvation, overwork and disease, a far greater human cost than the French Terror, in which about 17,000 people were officially executed.",
      markScheme: [
        {
          point: "Similarity: both wanted a total break with a past they saw as corrupt or unjust",
          keywords: ["both", "break with the past", "fresh start", "start again", "restart", "wipe out", "new society", "corrupt", "old ways", "clean slate"],
        },
        {
          point: "Supports the similarity, e.g. attacks on monarchy and Church in France; on religion, the educated and foreign influence in Cambodia; terror against 'enemies'",
          keywords: ["monarchy", "king", "church", "religion", "terror", "enemies", "educated", "foreign", "elites"],
        },
        {
          point: "Difference: the French calendar was largely symbolic, whereas the Khmer Rouge abolished money, markets and schools and emptied the cities",
          keywords: ["symbolic", "money", "markets", "schools", "cities", "emptied", "abolished", "private property", "forced labour", "collective"],
        },
        {
          point: "Develops the difference in consequences or scale (estimated 1.5–2 million deaths in Cambodia; French calendar abolished by Napoleon; Terror about 17,000 official executions)",
          keywords: ["1.5", "2 million", "million", "genocide", "died", "quarter", "napoleon", "1806", "17,000", "17000", "scale"],
        },
      ],
      commonError: "Treating the two as the same — the scale and the human cost were completely different.",
      hints: [
        "Why would any revolution want to start counting the years again?",
        "What did daily life look like in Paris in Year II, compared with Cambodia after April 1975?",
        "Think about money, markets, schools and cities — and about the human cost.",
      ],
      strategy: "Compare and contrast",
    },
    {
      kind: "written",
      id: "exam-s1-q12",
      topicId: "womens-suffrage",
      guideRef: "suffragettes",
      difficulty: "challenge",
      question:
        "**Source E** — written for this exercise, in the style of a letter to a newspaper from a member of the NUWSS, 1912.\n\n> Every broken window sets our cause back. Members of Parliament who once supported us now say they cannot be seen to reward violence. For almost fifty years we have shown that women can argue, organise and persuade. Patience and reason will win in the end.\n\n**Source F** — written for this exercise, in the style of a speech by a WSPU leader, 1912.\n\n> For almost fifty years women have politely petitioned, and for almost fifty years they have been ignored. Men won the vote by making trouble — so shall we. A window can be replaced; our patience cannot.\n\nHow far do Sources E and F differ in their views about militant methods? Explain why they might differ, using their provenance and your own knowledge. (6 marks)",
      marks: 6,
      modelAnswer:
        "The sources differ sharply about methods. Source E argues that militancy harms the cause: 'every broken window sets our cause back' and MPs will not 'reward violence', so 'patience and reason' are the way forward. Source F argues the opposite: peaceful petitions have been 'ignored' for almost fifty years, so women must 'make trouble' like men did, and attacking property is justified because 'a window can be replaced'.\n\nHowever, they share the same aim — votes for women — and both point to the long, frustrating campaign since the 1860s.\n\nThe provenance explains the difference. Source E comes from a member of the NUWSS, the law-abiding suffragists led by Millicent Fawcett, who believed in winning over MPs and public opinion. Source F comes from the WSPU, the Pankhursts' militant suffragettes, whose motto was 'deeds not words'. The date matters too: in March 1912 the WSPU smashed shop windows in London, and soon afterwards a Conciliation Bill that would have given some women the vote was defeated, which some MPs blamed on militancy.\n\nOverall, the sources differ completely on methods but agree on the goal.",
      markScheme: [
        {
          point: "Identifies Source E's view: militancy harms the cause; peaceful persuasion will win",
          keywords: ["sets our cause back", "harms", "damage", "damages", "violence", "patience", "reason", "peaceful", "persuade", "persuasion"],
        },
        {
          point: "Identifies Source F's view: peaceful methods have failed, so militancy is necessary and justified",
          keywords: ["ignored", "failed", "trouble", "militant", "militancy", "necessary", "justified", "property", "window can be replaced"],
        },
        {
          point: "Notes common ground: both want votes for women and refer to the long campaign",
          keywords: ["both", "agree", "same aim", "same goal", "vote", "fifty years", "long campaign", "petitions"],
        },
        {
          point: "Explains the difference using provenance: NUWSS suffragists (Fawcett) versus WSPU suffragettes (Pankhursts)",
          keywords: ["nuwss", "suffragist", "suffragists", "fawcett", "wspu", "suffragette", "suffragettes", "pankhurst", "law-abiding", "deeds not words"],
        },
        {
          point: "Uses contextual knowledge of 1912, e.g. window smashing, the defeat of the Conciliation Bill, MPs' reactions",
          keywords: ["1912", "window smashing", "windows", "conciliation bill", "mps", "arson", "hunger strike", "public opinion"],
        },
        {
          point: "Reaches a judgement on how far they differ (completely on methods, not on the aim)",
          keywords: ["differ completely", "differ greatly", "to a large extent", "partly", "overall", "however", "judgement", "but agree"],
        },
      ],
      commonError: "Only describing each source in turn without directly comparing them or explaining *why* they differ.",
      solutions: [
        {
          label: "Argument: they differ completely",
          steps: [
            "On methods the sources are opposites: persuasion versus 'making trouble'.",
            "Each reflects its organisation — the NUWSS's law-abiding approach and the WSPU's 'deeds not words'.",
            "Their view of MPs is opposite too: E thinks MPs can be won over; F thinks they only respond to pressure.",
          ],
        },
        {
          label: "Argument: they differ only on means, not on ends",
          steps: [
            "Both demand the vote and both are frustrated by decades of failure.",
            "Both see the campaign as a long struggle in which women have proved themselves.",
            "So the disagreement is about tactics within one movement, not about whether women deserve the vote.",
          ],
        },
      ],
      hints: [
        "Find one phrase in each source that sums up its view of militancy.",
        "Is there anything the two writers agree on?",
        "Who led the NUWSS and who led the WSPU — and what happened in 1912?",
      ],
      strategy: "Cross-reference sources",
    },
    {
      kind: "written",
      id: "exam-s1-q13",
      topicId: "womens-suffrage",
      guideRef: "war-and-the-vote",
      difficulty: "warmup",
      question: "The **Representation of the People Act (1918)** gave about 8.4 million women the vote. Give **two** ways in which it still treated women and men unequally. (2 marks)",
      marks: 2,
      modelAnswer:
        "First, women had to be over 30 to vote, while men could vote at 21 (or at 19 if they had served in the war). Second, women had to meet a property qualification — they, or their husbands, had to own or occupy property of a certain value — whereas men needed no property qualification at all.",
      markScheme: [
        { point: "Age: women had to be over 30; men could vote at 21", keywords: ["30", "thirty", "21", "age", "older", "over 30"] },
        {
          point: "Property: women (or their husbands) had to meet a property qualification; men did not",
          keywords: ["property", "qualification", "own", "householder", "husband", "occupy", "rent", "land"],
        },
      ],
      hints: ["Compare the voting ages for men and women.", "What did a woman (or her husband) need to own or occupy?"],
      strategy: "Use precise evidence",
    },
    {
      kind: "written",
      id: "exam-s1-q14",
      topicId: "king-john",
      guideRef: "becoming-king",
      difficulty: "core",
      question:
        "In both **1066** and **1199** someone with a strong blood claim to the throne was passed over: **Edgar Ætheling** in 1066 and **Arthur of Brittany** in 1199. Explain why Harold Godwinson (1066) and John (1199) were able to become king instead. (4 marks)",
      marks: 4,
      modelAnswer:
        "In 1066 Edgar Ætheling had royal blood, but he was a teenager with no army and few powerful supporters, at a time when England faced threats of invasion. Harold Godwinson, by contrast, was Earl of Wessex, the richest and most powerful man in England after the king, and an experienced war leader. He claimed that the dying Edward the Confessor had named him as successor, and the Witan chose him, so he was crowned on 6 January 1066, the day of Edward's funeral.\n\nIn 1199 Arthur of Brittany was the son of John's older brother Geoffrey, so by blood his claim was stronger. But Arthur was only 12, had been brought up in Brittany and was backed by Philip II of France. John was an adult; Richard I had named him heir on his deathbed, and he had the support of his mother, Eleanor of Aquitaine, and leading men such as Archbishop Hubert Walter and William Marshal.\n\nIn both cases, power, support and a believable promise mattered more than blood alone.",
      markScheme: [
        {
          point: "1066: Edgar was a teenager with no army or powerful support at a dangerous time",
          keywords: ["teenager", "young", "boy", "child", "14", "15", "no army", "no support", "inexperienced", "threat", "invasion"],
        },
        {
          point: "1066: Harold was the most powerful earl, chosen by the Witan and (he claimed) named by the dying Edward",
          keywords: ["witan", "earl", "wessex", "powerful", "deathbed", "edward", "godwin", "chosen", "experienced", "army"],
        },
        {
          point: "1199: Arthur was only 12, brought up in Brittany and backed by Philip II of France",
          keywords: ["arthur", "12", "twelve", "brittany", "boy", "philip", "french", "france", "young"],
        },
        {
          point: "1199: John was an adult, named heir by Richard and backed by Eleanor of Aquitaine and leading barons/churchmen — so power and support beat blood",
          keywords: ["adult", "richard", "named", "heir", "eleanor", "mother", "barons", "william marshal", "hubert walter", "support", "more than blood"],
        },
      ],
      commonError: "Explaining only one of the two successions, or listing facts without saying why they gave the winner the advantage.",
      hints: [
        "For each pair, compare age, experience and who supported them.",
        "What did the Witan decide in January 1066?",
        "Who did Richard I name as his heir in 1199, and which powerful people backed that choice?",
      ],
      strategy: "Compare and contrast",
    },
    {
      kind: "written",
      id: "exam-s1-q15",
      topicId: "henry-viii",
      guideRef: "break-with-rome",
      difficulty: "core",
      question:
        "**Interpretation A** — written for this exercise.\n\n> Henry VIII broke with Rome mainly to get his hands on the Church's wealth.\n\nExplain **one** piece of evidence that supports Interpretation A and **one** piece of evidence that challenges it. (4 marks)",
      marks: 4,
      modelAnswer:
        "One piece of evidence that supports Interpretation A is the dissolution of the monasteries. Once Henry was Supreme Head of the Church, Thomas Cromwell's officials valued the Church's wealth in the *Valor Ecclesiasticus* (1535), and between 1536 and 1540 every monastery was closed and its land and treasures taken by the Crown. Henry had spent heavily on wars with France, so he badly needed this money.\n\nOne piece of evidence that challenges it is the timing. The break itself (1533–34) came because Henry wanted his marriage to Catherine of Aragon annulled so that he could marry Anne Boleyn and have a male heir; Anne was already pregnant early in 1533. The Dissolution came *after* the break, so the money looks more like a result of the break than its main cause.",
      markScheme: [
        {
          point: "Support: the Dissolution (1536–40) brought the Crown huge wealth and land",
          keywords: ["dissolution", "monasteries", "1536", "1540", "land", "wealth", "money", "valor ecclesiasticus", "treasure", "rich"],
        },
        {
          point: "Explains how this supports the interpretation, e.g. Henry was short of money after wars",
          keywords: ["needed money", "wars", "war", "france", "debt", "short of money", "income", "paid for"],
        },
        {
          point: "Challenge: the break (1533–34) was driven by the annulment and the need for a male heir",
          keywords: ["heir", "son", "annulment", "annul", "catherine", "anne boleyn", "pregnant", "1533", "1534", "great matter", "male heir"],
        },
        {
          point: "Explains how this challenges it, e.g. the Dissolution came after the break, so wealth was a result rather than the main cause",
          keywords: ["after", "later", "timing", "came first", "result", "consequence", "not the cause", "catholic", "six articles"],
        },
      ],
      hints: [
        "What did Henry gain from the monasteries after 1536?",
        "Check the dates: which came first, the break or the Dissolution?",
        "What did Henry want in 1533 that the Pope would not give him?",
      ],
      strategy: "Consider the counter-argument",
    },
    {
      kind: "written",
      id: "exam-s1-q16",
      topicId: "historians-toolkit",
      guideRef: "causation",
      difficulty: "core",
      question:
        "Using examples from **two different topics** you have studied this year, explain the difference between a **long-term cause** and a **trigger**. (4 marks)",
      marks: 4,
      modelAnswer:
        "A long-term cause is a problem or condition that builds up over years or decades and makes an event possible. A trigger is the immediate event that sets it off at a particular moment.\n\nIn the French Revolution, a long-term cause was the unfair estate system: the Third Estate, about 97% of people, paid most of the taxes while nobles and clergy were largely exempt. The trigger was Louis XVI calling the Estates-General in 1789 because the government was bankrupt — the meeting gave the Third Estate a stage to challenge the king.\n\nIn Hitler's creation of a dictatorship, a long-term cause was the weakness of the Weimar Republic, which many Germans blamed for Versailles and economic crisis. The trigger was the Reichstag Fire of February 1933, which Hitler used to justify emergency powers. In both cases the trigger only worked because the long-term causes had already prepared the ground.",
      markScheme: [
        {
          point: "Defines a long-term cause: a condition building up over years that makes an event possible",
          keywords: ["years", "decades", "building up", "built up", "background", "over time", "conditions", "makes it possible", "underlying"],
        },
        {
          point: "Defines a trigger: the immediate event that sets it off",
          keywords: ["spark", "immediate", "sets off", "set off", "last straw", "final", "moment", "starts", "started"],
        },
        {
          point: "Gives an accurate first example with both a long-term cause and a trigger",
          keywords: ["estates", "taxes", "debt", "bankrupt", "estates-general", "1789", "enlightenment", "male heir", "anne", "versailles", "depression", "war"],
        },
        {
          point: "Gives an accurate second example from a different topic, showing the trigger worked only because of the long-term cause",
          keywords: ["reichstag fire", "1933", "weimar", "only because", "would not have", "without", "already", "prepared", "link", "linked", "together"],
        },
      ],
      commonError: "Giving two examples from the same topic, or calling something 'long-term' just because it is important.",
      hints: [
        "Imagine a bonfire: what is the dry wood, and what is the match?",
        "French Revolution: what had been unfair for decades, and what happened in May 1789?",
        "Pick a second topic — e.g. Hitler in 1933 or Henry VIII's break with Rome — and find its 'match'.",
      ],
      strategy: "Long-term vs short-term causes",
    },
    // ------------------------------------------------------------- judgements
    {
      kind: "written",
      id: "exam-s1-q17",
      topicId: "henry-viii",
      guideRef: "henry-power",
      difficulty: "challenge",
      question:
        "'Kings rose to power mainly through **force**.' How far do you agree? Use evidence from at least **two** of William I, John and Henry VIII (you may also use Henry VII). (8 marks)",
      marks: 8,
      modelAnswer:
        "There is strong evidence that force mattered. William I won the throne by invading and winning at Hastings in 1066, and Henry VII became king by defeating Richard III, who was killed at Bosworth in 1485. Force was also needed to *keep* power: William built castles and carried out the Harrying of the North (1069–70), and Henry VIII used executions to frighten opponents.\n\nHowever, force was rarely enough on its own. William also claimed Edward had promised him the throne, fought under a papal banner and was crowned and anointed in Westminster Abbey on Christmas Day 1066, which made his rule look lawful. Henry VII married Elizabeth of York to unite the rival families. John became king in 1199 because Richard named him heir and powerful people, including his mother Eleanor, backed him — even though he went on to fight his nephew Arthur. Henry VIII used no force at all to gain the throne: he simply inherited it in 1509.\n\nOverall, I partly agree. Force explains the conquests of 1066 and 1485, but legitimacy — inheritance, Church approval, the support of nobles and marriage — explains how kings were accepted, and force was more important for keeping power than for gaining it.",
      markScheme: [
        { point: "Agrees with evidence: William's conquest at Hastings (1066)", keywords: ["hastings", "1066", "conquest", "conquered", "invasion", "invaded", "battle", "army"] },
        { point: "Agrees with further evidence: Henry VII's victory at Bosworth (1485)", keywords: ["bosworth", "1485", "henry vii", "henry tudor", "richard iii"] },
        {
          point: "Shows force was needed to keep power (castles, Harrying of the North, executions, John's war with Arthur)",
          keywords: ["harrying", "castles", "rebellion", "executions", "executed", "arthur", "fear", "terror", "keep power", "keeping"],
        },
        { point: "Disagrees: inheritance (Henry VIII in 1509, John in 1199)", keywords: ["inherit", "inherited", "inheritance", "1509", "1199", "richard", "father", "brother", "heir", "named"] },
        {
          point: "Disagrees: legitimacy from the Church and coronation, and the support of nobles",
          keywords: ["pope", "papal", "banner", "church", "crowned", "coronation", "anointed", "legitimate", "legitimacy", "support", "barons", "eleanor", "witan"],
        },
        {
          point: "Disagrees: other factors such as claims and promises, marriage or luck",
          keywords: ["luck", "lucky", "wind", "hardrada", "promise", "promised", "oath", "marriage", "married", "elizabeth of york", "claim"],
        },
        {
          point: "Analyses the link between factors, e.g. gaining versus keeping power, or force working only alongside legitimacy",
          keywords: ["keep", "keeping", "gaining", "together", "link", "combined", "alongside", "not enough on its own", "on its own"],
        },
        {
          point: "Reaches a clear, supported judgement on 'how far'",
          keywords: ["overall", "judgement", "to a large extent", "partly agree", "agree", "disagree", "most important", "conclude", "therefore"],
        },
      ],
      commonError: "Writing one paragraph per king without answering 'how far' — or ignoring the difference between gaining and keeping power.",
      solutions: [
        {
          label: "Argument: force mattered most",
          steps: [
            "Two new dynasties began on the battlefield: Hastings (1066) and Bosworth (1485).",
            "Even inherited kings relied on force — John fought Arthur and Philip II; Henry VIII executed opponents.",
            "Claims and coronations followed victory, so force came first and legitimacy was added afterwards.",
          ],
        },
        {
          label: "Argument: legitimacy mattered most",
          steps: [
            "Henry VIII (1509) and John (1199) became king by inheritance, not by fighting for the crown.",
            "Even William needed a claim, a papal banner and a coronation to be accepted as king.",
            "John shows the limits of force: he lost Normandy and was forced to accept Magna Carta when the barons turned against him.",
          ],
        },
        {
          label: "Argument: force to gain, legitimacy to keep — or the reverse",
          steps: [
            "Separate *gaining* the throne from *keeping* it.",
            "Conquerors gained power by force but needed legitimacy to be accepted; heirs gained power by law but needed force or fear to keep it.",
            "So the best judgement is that force and legitimacy worked together.",
          ],
        },
      ],
      hints: [
        "Make two lists: kings who fought for the crown and kings who inherited it.",
        "Did William rely only on his army? Think about the Pope, his claim and his coronation.",
        "Is gaining power the same as keeping it? Use that distinction to reach your judgement.",
      ],
      strategy: "Weigh factors",
    },
    {
      kind: "written",
      id: "exam-s1-q18",
      topicId: "pol-pot",
      guideRef: "comparing-dictators",
      difficulty: "challenge",
      question:
        "'**Crises** were more important than **leadership** in the rise of dictators.' How far do you agree? Use evidence from at least **two** of Hitler, Mao and Pol Pot. (8 marks)",
      marks: 8,
      modelAnswer:
        "Crises were vital in all three cases. In Germany, the Treaty of Versailles, hyperinflation in 1923 and the Great Depression after 1929 — with about 6 million unemployed by 1932 — destroyed faith in democracy. The Nazi vote rose from 2.6% in 1928 to 37% in July 1932, exactly as the Depression deepened. In China, the Japanese invasion of 1937 and runaway inflation weakened the Nationalists. In Cambodia, the Vietnam War spilled over the border and US bombing (1969–73) drove angry peasants towards the Khmer Rouge.\n\nHowever, leadership turned these crises into power. Hitler's speeches and Goebbels' propaganda gave desperate voters a simple message, and Mao's peasant strategy and guerrilla tactics won the countryside. Leadership was not always charismatic: Pol Pot stayed hidden behind 'Angkar', but his secretive, disciplined organisation exploited the war.\n\nWeak government links the two: Weimar's Article 48 and Hindenburg's decision to appoint Hitler, the corruption of Chiang Kai-shek's government and Lon Nol's unpopular regime all gave these leaders their chance.\n\nOverall, I largely agree: in 1928, after the stable 'Golden Years', the same Hitler won only 2.6% of the vote, so crises created the opportunity. But crises alone did not decide *who* took power — leaders and organisations that could exploit them did.",
      markScheme: [
        {
          point: "Crises in Germany: Versailles, hyperinflation (1923), the Depression (about 6 million unemployed)",
          keywords: ["versailles", "hyperinflation", "1923", "depression", "wall street", "1929", "unemployment", "unemployed", "6 million", "six million"],
        },
        { point: "Links the crisis to rising support, e.g. the Nazi vote from 2.6% (1928) to 37% (1932)", keywords: ["2.6", "2.6%", "37", "37%", "1928", "1932", "votes", "vote rose", "largest party"] },
        {
          point: "Crises in China or Cambodia: Japanese invasion, inflation, civil war; the Vietnam War, US bombing, Lon Nol's coup",
          keywords: ["japan", "japanese", "1937", "inflation", "civil war", "vietnam war", "bombing", "lon nol", "1970", "warlords"],
        },
        {
          point: "Leadership: Hitler's speeches and propaganda; Mao's peasant strategy, guerrilla tactics, the Long March",
          keywords: ["speeches", "speaker", "charisma", "charismatic", "propaganda", "goebbels", "peasant strategy", "peasants", "long march", "guerrilla", "zunyi"],
        },
        {
          point: "Shows leadership took different forms, e.g. Pol Pot's secrecy, organisation and ideology rather than charisma",
          keywords: ["secret", "secretive", "angkar", "organisation", "ideology", "discipline", "not charismatic", "hidden"],
        },
        {
          point: "Considers a third factor: weak government (Weimar, Article 48, Hindenburg and Papen; Nationalist corruption; Lon Nol)",
          keywords: ["weak", "weakness", "weimar", "article 48", "proportional representation", "hindenburg", "papen", "corrupt", "corruption", "nationalists", "guomindang", "chiang"],
        },
        {
          point: "Links factors: crises created the opportunity which leaders exploited (e.g. low Nazi vote in the 'Golden Years')",
          keywords: ["opportunity", "exploited", "exploit", "took advantage", "golden years", "without", "link", "together", "combined", "chance"],
        },
        {
          point: "Reaches a clear, supported judgement on 'how far'",
          keywords: ["overall", "judgement", "agree", "disagree", "more important", "most important", "conclude", "to a large extent", "largely"],
        },
      ],
      commonError: "Writing about only one dictator, or listing factors without weighing which mattered more.",
      solutions: [
        {
          label: "Argument: crises mattered most",
          steps: [
            "The same Hitler won only 2.6% of the vote in 1928, before the Depression, and 37% in July 1932.",
            "Japan's invasion wrecked the Nationalists; the Vietnam War and US bombing gave the Khmer Rouge recruits.",
            "Without these crises, none of the three would have had a chance to take power.",
          ],
        },
        {
          label: "Argument: leadership mattered most",
          steps: [
            "Many countries suffered the Depression without becoming dictatorships — what was different was the leader and his party.",
            "Hitler's propaganda and Mao's peasant strategy turned discontent into votes or soldiers.",
            "Even secretive Pol Pot built a disciplined organisation that could exploit chaos when others could not.",
          ],
        },
        {
          label: "Argument: weak government was the key link",
          steps: [
            "Crises only toppled governments that were already weak: Weimar, Chiang's Nationalists, Lon Nol.",
            "In Germany the elites' decision to appoint Hitler mattered as much as his votes.",
            "So crises + weak government opened the door, and leaders walked through it.",
          ],
        },
      ],
      hints: [
        "For each dictator, list the crises and then the leadership factors.",
        "Use the Nazi vote in 1928 compared with 1932 as a test: what changed — the leader, or the situation?",
        "Don't forget weak government as a link — and remember that not every dictator was charismatic.",
      ],
      strategy: "Weigh factors",
    },
    {
      kind: "written",
      id: "exam-s1-q19",
      topicId: "french-revolution",
      guideRef: "napoleon-and-legacy",
      difficulty: "challenge",
      question: "'The French Revolution did more to **damage** democracy than to develop it.' How far do you agree? (6 marks)",
      marks: 6,
      modelAnswer:
        "There is evidence that the Revolution damaged democracy. During the Terror (1793–94) Robespierre's Committee of Public Safety suspended normal rights, and about 17,000 people were officially executed. Then in 1799 Napoleon seized power in a coup and in 1804 crowned himself Emperor — the Revolution ended in a dictatorship.\n\nHowever, the Revolution also created ideas that democracy still depends on. The Declaration of the Rights of Man (1789) proclaimed popular sovereignty, equality before the law and free speech. Absolute monarchy and feudal privileges were abolished, France became a republic in 1792 with an assembly elected under universal male suffrage, and slavery was abolished in 1794.\n\nThere were limits: women were excluded, as Olympe de Gouges protested, and Napoleon later restored slavery in 1802. But the Napoleonic Code kept equality before the law, and revolutionary ideas spread across Europe.\n\nOverall, I disagree. In the short term the Revolution damaged democracy through the Terror and Napoleon, but in the long term its ideas of rights and the sovereignty of the people did far more to develop democracy.",
      markScheme: [
        {
          point: "Agrees: the Terror (1793–94), with about 17,000 official executions and rights suspended",
          keywords: ["terror", "robespierre", "guillotine", "17,000", "17000", "committee of public safety", "executions", "executed", "1793", "1794"],
        },
        { point: "Agrees: the Revolution ended in Napoleon's dictatorship (coup 1799, Emperor 1804)", keywords: ["napoleon", "1799", "coup", "1804", "emperor", "dictator", "dictatorship"] },
        {
          point: "Disagrees: the Declaration of the Rights of Man (1789) — popular sovereignty, equality before the law, free speech",
          keywords: ["rights of man", "declaration", "1789", "equality", "sovereignty", "free speech", "liberty", "rights"],
        },
        {
          point: "Disagrees: ended absolute monarchy and feudal privilege; republic and universal male suffrage (1792); slavery abolished (1794)",
          keywords: ["absolute", "feudal", "4 august", "privileges", "republic", "1792", "male suffrage", "slavery", "1794"],
        },
        {
          point: "Shows limits or continuity: women excluded, active and passive citizens, slavery restored (1802), the Napoleonic Code",
          keywords: ["women", "de gouges", "passive", "active", "1802", "napoleonic code", "spread", "ideas", "inspired"],
        },
        {
          point: "Reaches a supported judgement, e.g. damage in the short term but development in the long term",
          keywords: ["short term", "short-term", "long term", "long-term", "overall", "judgement", "agree", "disagree", "to some extent", "conclude"],
        },
      ],
      commonError: "Treating 'the Revolution' as one event — 1789, 1793 and 1804 point in very different directions.",
      solutions: [
        {
          label: "Argument: it damaged democracy more",
          steps: [
            "Within four years, the language of rights was used to justify the Terror.",
            "The Revolution ended with Napoleon as Emperor — power concentrated in one man, as before 1789.",
            "Women and the poor were excluded for most of the period, so 'democracy' was never real.",
          ],
        },
        {
          label: "Argument: it developed democracy more",
          steps: [
            "The Declaration of 1789 made the people, not the king, the source of authority.",
            "Universal male suffrage (1792) and the abolition of slavery (1794) went far beyond anything in Britain at the time.",
            "Even Napoleon kept equality before the law, and the ideas inspired later democratic movements.",
          ],
        },
      ],
      hints: [
        "Split the Revolution into stages: 1789, 1792–94 and 1799–1804. Which stages helped democracy and which harmed it?",
        "Which documents and laws of the Revolution still sound democratic today?",
        "Try a short-term versus long-term judgement.",
      ],
      strategy: "Spot change and continuity",
    },
    {
      kind: "written",
      id: "exam-s1-q20",
      topicId: "womens-suffrage",
      guideRef: "why-women-won",
      difficulty: "challenge",
      question:
        "'**Democracy** developed mainly through **peaceful campaigning**.' How far do you agree? Use evidence from at least **two** topics you have studied this year (for example Magna Carta, the French Revolution and votes for women in Britain). (8 marks)",
      marks: 8,
      modelAnswer:
        "In Britain peaceful campaigning achieved a great deal. The vote was widened by Acts of Parliament in 1832, 1867 and 1884, the Ballot Act (1872) won one of the Chartists' demands, and the suffragists of the NUWSS, led by Millicent Fawcett, built a huge law-abiding movement through petitions, lobbying and marches such as the Great Pilgrimage of 1913. Their patient work helped to persuade many MPs before 1914.\n\nHowever, force and crisis often made the breakthroughs. Magna Carta (1215) happened only because rebel barons took up arms and captured London. In France, rights and a republic came through revolution — the storming of the Bastille in 1789 and the overthrow of the monarchy in 1792. The suffragettes' militancy kept votes for women in the headlines, and the First World War — women's war work and the need to give soldiers the vote — led directly to the 1918 Act.\n\nYet violence could also damage democracy: the Terror and Napoleon's dictatorship followed the Revolution, and some MPs said suffragette violence made them oppose reform.\n\nOverall, I partly agree. Peaceful campaigning built the case for democracy and made change lasting, but it was usually force or a great crisis that created the moment when change actually happened.",
      markScheme: [
        {
          point: "Agrees: the suffragists (NUWSS, Fawcett) used petitions, lobbying and marches to build support",
          keywords: ["suffragists", "nuwss", "fawcett", "petitions", "petition", "lobbying", "pilgrimage", "marches", "peaceful", "law-abiding"],
        },
        {
          point: "Agrees: other peaceful or parliamentary change, e.g. the Reform Acts, the Chartists' petitions, the Ballot Act (1872), the Equal Franchise Act (1928)",
          keywords: ["chartists", "reform act", "reform acts", "1832", "1867", "1884", "parliament", "1872", "ballot act", "1928"],
        },
        {
          point: "Disagrees: force created landmarks — barons rebelled to force Magna Carta; revolution in France (Bastille 1789, republic 1792)",
          keywords: ["bastille", "1789", "revolution", "barons", "rebel", "rebelled", "rebellion", "forced", "london", "runnymede", "violence", "1792"],
        },
        {
          point: "Disagrees: suffragette militancy (WSPU) kept the issue in the news",
          keywords: ["suffragettes", "wspu", "pankhurst", "militant", "militancy", "window", "arson", "hunger strike", "deeds not words"],
        },
        {
          point: "Disagrees: the First World War — women's war work and soldiers' votes led to the 1918 Act",
          keywords: ["war", "first world war", "munitions", "war work", "1918", "soldiers", "representation of the people"],
        },
        {
          point: "Shows violence could also set democracy back (the Terror, Napoleon, militancy alienating MPs)",
          keywords: ["terror", "napoleon", "set back", "backfired", "alienated", "conciliation", "dictatorship", "harmed", "damaged"],
        },
        {
          point: "Links factors, e.g. peaceful campaigns built support while force or crisis provided the moment of change",
          keywords: ["together", "combined", "link", "built", "pressure", "opportunity", "moment", "both", "alongside"],
        },
        {
          point: "Reaches a clear, supported judgement on 'how far'",
          keywords: ["overall", "judgement", "agree", "disagree", "mainly", "to a large extent", "partly", "conclude", "therefore"],
        },
      ],
      commonError: "Writing only about votes for women — the question asks about democracy across at least two topics.",
      solutions: [
        {
          label: "Argument: peaceful campaigning mattered most",
          steps: [
            "Every widening of the British franchise (1832–1928) was passed by Parliament, not won on a battlefield.",
            "The NUWSS built a mass movement and won over MPs; by 1914 votes for women had wide support.",
            "Violent change often went wrong: the French Revolution produced the Terror and then Napoleon.",
          ],
        },
        {
          label: "Argument: force and crisis mattered most",
          steps: [
            "Magna Carta was forced on John by armed barons; French rights came out of revolution in 1789.",
            "Decades of peaceful petitions for women's votes failed until militancy and the war changed the situation.",
            "The 1918 Act followed the war, suggesting crisis rather than persuasion created the breakthrough.",
          ],
        },
        {
          label: "Argument: the two worked together",
          steps: [
            "Peaceful campaigners built the arguments and the support.",
            "Force or crisis created the moment when change could happen.",
            "Lasting democracy needed both: the Revolution's gains survived where ideas had been widely accepted.",
          ],
        },
      ],
      hints: [
        "Sort your evidence into two columns: peaceful change and change through force or crisis.",
        "Think beyond Britain: how was Magna Carta won? How did France become a republic?",
        "Did violence always help? Consider the Terror and the reaction of some MPs to militancy.",
      ],
      strategy: "Weigh factors",
    },
  ],
};
