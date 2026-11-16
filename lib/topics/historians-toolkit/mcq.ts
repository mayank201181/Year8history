import type { Paper } from "../../types.ts";

// Historian's Toolkit — MCQ papers 1–4 (15 questions each).
// Every constructed source is labelled as written for this exercise; real sources are marked (adapted).

export const mcqPapers: Paper[] = [
  // ===========================================================================
  // MCQ PAPER 1
  // ===========================================================================
  {
    id: "historians-toolkit-m1",
    title: "MCQ Paper 1",
    questions: [
      {
        kind: "mcq",
        id: "historians-toolkit-m1-q01",
        question: "The Battle of Hastings was fought in **1066**. In which century did it take place?",
        options: ["The 11th century", "The 10th century", "The 12th century", "The 1st century"],
        answerIndex: 0,
        explanation:
          "The years 1001–1100 make up the **11th century**, so 1066 is in the 11th century. The tempting wrong answer is the 10th century, which comes from reading the first two digits (10) — but the 1st century was AD 1–100, so the century number is always one more than the 'hundreds' digits.",
        difficulty: "warmup",
        guideRef: "chronology",
        hints: ["The 1st century was the years 1–100. So which years make up the 2nd century?", "Add one to the 'hundreds' part of the year: 10 + 1."],
        strategy: "Put it in chronological order",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m1-q02",
        question: "Which of these is a **primary** source for the Battle of Hastings?",
        options: [
          "A modern school textbook chapter on the Norman Conquest",
          "A television documentary about 1066 made in 2016",
          "The Bayeux Tapestry, probably made in the 1070s",
          "A biography of William the Conqueror written by a historian in 1990",
        ],
        answerIndex: 2,
        explanation:
          "A primary source comes from the time being studied. The **Bayeux Tapestry** was probably made within about ten years of the battle, so it is primary. The 1990 biography is tempting because it is about William himself, but it was written over 900 years later, so it is secondary.",
        difficulty: "warmup",
        guideRef: "sources-and-evidence",
        hints: ["Ask: when was each one made, compared with 1066?"],
        strategy: "Check the provenance (NOP)",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m1-q03",
        question: "What did the idea of the **divine right of kings** claim?",
        options: [
          "Kings had to be elected by the barons",
          "A monarch's power came from God, so subjects must obey the monarch",
          "The king had to obey the Pope in every matter",
          "Parliament could remove the king whenever it chose",
        ],
        answerIndex: 1,
        explanation:
          "Divine right meant the monarch was chosen by **God** and answerable only to God, so rebellion was a sin. The idea that Parliament could remove the king is almost the opposite — it belongs to later limited monarchy, not divine right.",
        difficulty: "warmup",
        guideRef: "power-concepts",
        hints: ["'Divine' means 'to do with God'."],
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m1-q04",
        question: "In history writing, what does **PEEL** stand for?",
        options: [
          "Point, Explain, Example, List",
          "Paragraph, Evidence, Essay, Link",
          "Prove, Evidence, Explain, Learn",
          "Point, Evidence, Explain, Link",
        ],
        answerIndex: 3,
        explanation:
          "A PEEL paragraph makes a **Point**, backs it with precise **Evidence**, **Explains** how the evidence proves the point, then **Links** back to the question. 'Point, Explain, Example, List' sounds close, but 'List' is exactly what a good paragraph avoids.",
        difficulty: "warmup",
        guideRef: "writing-like-a-historian",
        hints: ["The last step takes you back to the question you were asked."],
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m1-q05",
        question:
          "The Wall Street Crash (October 1929) helped cause mass unemployment in Germany, and many unemployed voters turned to the Nazis. In the story of Hitler's rise, what **type** of cause is the Wall Street Crash?",
        options: ["An economic cause", "A religious cause", "A consequence of Hitler becoming Chancellor", "A military cause"],
        answerIndex: 0,
        explanation:
          "A stock-market crash that leads to unemployment is an **economic** cause — it is about money, jobs and trade. It cannot be a consequence of Hitler becoming Chancellor, because the crash (1929) came more than three years before his appointment (January 1933).",
        difficulty: "core",
        guideRef: "causation",
        hints: ["Sort causes into categories: political, economic, social, religious, military, individuals.", "What was the crash about — beliefs, armies, or money and jobs?"],
        strategy: "Long-term vs short-term causes",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m1-q06",
        question:
          "**Source A** — a description, written for this exercise, of a portrait of Henry VIII painted in about 1537 by Hans Holbein, the king's court painter.\n\n> Henry stands facing us, feet planted wide apart, shoulders made enormous by padded, jewelled clothes. He looks straight out at the viewer, calm and powerful.\n\nWhy should a historian be cautious about using Source A as evidence of what Henry **really** looked like?",
        options: [
          "Holbein never actually saw Henry VIII",
          "It was painted for the king by his own court painter, so it was designed to make Henry look powerful",
          "Paintings can never be used as historical evidence",
          "It is a secondary source because it was painted after Henry became king",
        ],
        answerIndex: 1,
        explanation:
          "The **origin** (the king's own painter) and **purpose** (to display royal power) mean the image was meant to impress, not to record Henry's real appearance. That does not make it useless — it is excellent evidence of how Henry wanted to be seen. 'It is a secondary source' is wrong: it was made during Henry's reign, so it is primary.",
        difficulty: "core",
        guideRef: "provenance-nop",
        hints: ["Use NOP: who made it, and who was paying?", "Think about purpose — what would the king want a portrait to show?"],
        strategy: "Check the provenance (NOP)",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m1-q07",
        question:
          "**Source B** — written for this exercise, in the style of a Domesday Book entry (1086) for a village in Yorkshire.\n\n> In the time of King Edward it was worth 40 shillings. Now it is waste.\n\nWhat can you **infer** from Source B?",
        options: [
          "The village had grown richer since 1066",
          "The villagers wrote the Domesday Book themselves",
          "Something seriously damaged the village between 1066 and 1086",
          "King Edward visited the village in 1086",
        ],
        answerIndex: 2,
        explanation:
          "Going from 'worth 40 shillings' to 'waste' suggests the village was ruined in the twenty years after the Conquest — in Yorkshire, very likely by William's **Harrying of the North** (1069–70). 'King Edward visited in 1086' misreads the source: Edward the Confessor died in January 1066; 'in the time of King Edward' means before the Conquest.",
        difficulty: "core",
        guideRef: "sources-and-evidence",
        hints: ["Compare 'then' with 'now'. What has changed?", "'In the time of King Edward' means before 1066. 'Now' means 1086.", "Which event in the north between those dates could turn land to 'waste'?"],
        strategy: "Make an inference",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m1-q08",
        question:
          "Roger of Wendover, a monk at St Albans writing in the 1220s, described King John as wicked and cruel. Many modern historians are more balanced about John. What is the **best** explanation for the monk's harsher view?",
        options: [
          "Monks had no access to any written records",
          "Modern historians have no evidence about John at all",
          "Roger of Wendover lived in the 18th century",
          "John had quarrelled bitterly with the Church, and monks wrote from the Church's point of view",
        ],
        answerIndex: 3,
        explanation:
          "John clashed with the Pope, England suffered the **Interdict** (1208–14) and John was excommunicated — so Church writers had strong reasons to dislike him. That shapes their interpretation. 'Lived in the 18th century' is a chronology slip: the 1220s are in the **13th** century, only a few years after John's death in 1216.",
        difficulty: "core",
        guideRef: "interpretations",
        hints: ["Think about who the writer was and what his community had been through.", "What happened between John and the Church from 1208?"],
        strategy: "Think about purpose",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m1-q09",
        question:
          "The Representation of the People Act (1918) gave the vote to women over 30 who met a property qualification. Women did not get the vote on the same terms as men (from age 21) until 1928. Which statement best describes 1918?",
        options: [
          "An important change, but with continuity — many women, especially younger working women, still could not vote",
          "Complete equality between men and women voters",
          "No change at all for women",
          "A change that reduced the total number of voters",
        ],
        answerIndex: 0,
        explanation:
          "1918 was a real **change** (about 8.4 million women could now vote) but there was also **continuity**: women under 30 and those without property were still shut out until 1928. 'Complete equality' is the common mistake — that only arrived with the Equal Franchise Act of 1928.",
        difficulty: "core",
        guideRef: "change-continuity-significance",
        hints: ["Ask two questions: what changed, and what stayed the same?", "Which women were still left out after 1918?"],
        strategy: "Spot change and continuity",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m1-q10",
        question: "Which list puts these events in the correct chronological order, **earliest first**?",
        options: [
          "Battle of Hastings → Act of Supremacy → Magna Carta → Storming of the Bastille",
          "Magna Carta → Battle of Hastings → Act of Supremacy → Storming of the Bastille",
          "Battle of Hastings → Magna Carta → Act of Supremacy → Storming of the Bastille",
          "Battle of Hastings → Magna Carta → Storming of the Bastille → Act of Supremacy",
        ],
        answerIndex: 2,
        explanation:
          "Hastings **1066**, Magna Carta **1215**, Act of Supremacy **1534**, Bastille **1789**. Putting the Bastille before the Act of Supremacy mixes up the Tudors (16th century) with the French Revolution (18th century).",
        difficulty: "core",
        guideRef: "chronology",
        hints: ["Write the year next to each event first.", "Henry VIII's Act of Supremacy belongs to the 1530s; the French Revolution began in 1789."],
        strategy: "Put it in chronological order",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m1-q11",
        question:
          "Which term describes a system in which one party tries to control **every** part of life — government, work, schools, the media and even what people think?",
        options: ["Constitutional monarchy", "Totalitarianism", "Feudalism", "Direct democracy"],
        answerIndex: 1,
        explanation:
          "**Totalitarianism** means total control by the state, as historians have argued about Nazi Germany and Mao's China. Feudalism is tempting because it is also a system of control, but it was a medieval landholding system based on land in return for loyalty and service, not a modern one-party state.",
        difficulty: "core",
        guideRef: "power-concepts",
        hints: ["Look for a word that contains the idea of 'total'.", "Which option belongs to the 20th century rather than the Middle Ages?"],
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m1-q12",
        question:
          "A student is writing a PEEL paragraph.\n\n**Point:** One reason William won the Battle of Hastings was his preparation.\n**Evidence:** He brought cavalry, archers and infantry across the Channel, and he had the Pope's blessing.\n\nWhich sentence is the best **Explain** step?",
        options: [
          "This mattered because a mixed army with cavalry and archers could wear down a shield wall that foot soldiers alone could not break",
          "William was born in Normandy in about 1028",
          "Harold Godwinson was also at the battle",
          "In conclusion, William won the battle",
        ],
        answerIndex: 0,
        explanation:
          "The Explain step shows **how** the evidence proves the point — here, why a mixed army gave William an advantage. 'In conclusion, William won the battle' just repeats the outcome; it explains nothing and belongs at the end of the whole answer, if anywhere.",
        difficulty: "core",
        guideRef: "writing-like-a-historian",
        hints: ["The Explain step usually starts with words like 'This mattered because…'", "Which sentence connects the evidence back to the point about preparation?"],
        strategy: "Use precise evidence",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m1-q13",
        question:
          "**Source C** — a description, written for this exercise, of a real poster published by the Women's Social and Political Union (WSPU) in 1914.\n\n> Titled 'The Cat and Mouse Act', it shows a huge, snarling cat holding a limp suffragette in its jaws.\n\nA student says: \"Source C is biased, so it is useless.\" Which response is **strongest**?",
        options: [
          "Agree — biased sources should always be ignored",
          "Agree — only government sources are useful to historians",
          "Disagree — it was made in 1914, so everything it shows must be accurate",
          "Disagree — its bias is itself useful evidence of how the WSPU tried to win public sympathy against the government",
        ],
        answerIndex: 3,
        explanation:
          "**Reliability** and **usefulness** are different. A one-sided poster is not a neutral record of how prisoners were treated, but it is very useful for showing how the WSPU attacked the 1913 'Cat and Mouse Act' and tried to win support. 'Made in 1914 so must be accurate' is the classic mistake of thinking primary means reliable.",
        difficulty: "challenge",
        guideRef: "provenance-nop",
        hints: ["Is 'reliable' the same as 'useful'?", "Ask: useful for what question? What could this poster tell you about the WSPU itself?", "Propaganda is good evidence of what its makers wanted people to believe."],
        strategy: "Think about purpose",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m1-q14",
        question: "Which statement best **links causes together** to explain Hitler's rise to power?",
        options: [
          "Hitler was a powerful speaker. The Depression happened. The Weimar Republic had coalition governments.",
          "Hitler became Chancellor because the Nazis won more than half the votes in a free election",
          "The Depression caused mass unemployment; weak Weimar coalition governments failed to solve it; so desperate voters turned to Hitler's promises",
          "The Nazis seized power by force in the Munich Putsch of 1923",
        ],
        answerIndex: 2,
        explanation:
          "The best answer shows each cause **leading to** the next: crisis → weak government fails → charismatic leader gains support. The first option names good factors but just lists them. The Munich Putsch option is wrong: the 1923 putsch failed, and Hitler was appointed Chancellor legally in January 1933 — the Nazis never won a majority (their peak in a free election was about 37% in July 1932).",
        difficulty: "challenge",
        guideRef: "causation",
        hints: ["Look for linking words like 'so' and 'because'.", "Check each option for factual errors first.", "Remember the Term 2 model: crises + weak government + charismatic leader."],
        strategy: "Link the causes",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m1-q15",
        question:
          "**Interpretation 1** — written for this exercise.\n\n> Henry VIII broke with Rome mainly because he desperately needed a male heir.\n\n**Interpretation 2** — written for this exercise.\n\n> The Break with Rome was really about power and money: it gave the Crown control of the Church and its wealth.\n\nWhich piece of evidence best **supports Interpretation 2**?",
        options: [
          "Catherine of Aragon had no surviving son",
          "The dissolution of the monasteries (1536–40) transferred vast Church lands and wealth to the Crown",
          "Henry married Anne Boleyn in January 1533",
          "The Pope gave Henry the title 'Defender of the Faith' in 1521",
        ],
        answerIndex: 1,
        explanation:
          "The **dissolution of the monasteries** followed the Act of Supremacy (1534) and brought the Crown enormous wealth — strong support for a 'power and money' reading. 'Catherine had no surviving son' is true, but it supports Interpretation 1 (the heir), not Interpretation 2.",
        difficulty: "challenge",
        guideRef: "interpretations",
        hints: ["Read Interpretation 2 again: what two things does it say the break was about?", "Which option shows the Crown gaining money or control?", "Be careful — some options are true but support the other interpretation."],
        strategy: "Weigh factors",
      },
    ],
  },

  // ===========================================================================
  // MCQ PAPER 2
  // ===========================================================================
  {
    id: "historians-toolkit-m2",
    title: "MCQ Paper 2",
    questions: [
      {
        kind: "mcq",
        id: "historians-toolkit-m2-q01",
        question: "Which of these years is in the **20th century**?",
        options: ["1789", "1933", "1815", "2005"],
        answerIndex: 1,
        explanation:
          "The 20th century is the years 1901–2000, so **1933** (Hitler becomes Chancellor) fits. 2005 is the tempting one because it starts with '20' — but it is in the 21st century.",
        difficulty: "warmup",
        guideRef: "chronology",
        hints: ["The century number is one more than the 'hundreds' digits: 19__ is the 20th century."],
        strategy: "Put it in chronological order",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m2-q02",
        question: "Which of these is a **secondary** source about the suffragettes?",
        options: [
          "A speech given by Emmeline Pankhurst in 1913",
          "A photograph of a suffragette march taken in 1910",
          "A WSPU leaflet printed in 1908",
          "A history textbook about the suffragettes written in 2015",
        ],
        answerIndex: 3,
        explanation:
          "A secondary source is made **later**, using other evidence — like a 2015 textbook. The 1910 photograph might feel 'less official' than a speech, but it was taken at the time, so it is primary.",
        difficulty: "warmup",
        guideRef: "sources-and-evidence",
        hints: ["Which one was made long after the events, by someone looking back?"],
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m2-q03",
        question: "What does **suffrage** mean?",
        options: ["The right to vote in elections", "Suffering under a cruel ruler", "The right to a fair trial", "A tax paid to the king"],
        answerIndex: 0,
        explanation:
          "**Suffrage** (or the **franchise**) is the right to vote. 'Suffering' is a false friend — the words look alike but are unrelated. The right to a fair trial is a different human right (linked to Magna Carta's clause 39).",
        difficulty: "warmup",
        guideRef: "power-concepts",
        hints: ["Think of the suffragists and suffragettes — what were they campaigning for?"],
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m2-q04",
        question: "Historians call the Battle of Hastings a **turning point**. What does 'turning point' mean?",
        options: [
          "An event that happened exactly halfway through a period",
          "A battle in which one army turned and retreated",
          "A moment after which things changed direction in a major way",
          "An event that nobody remembers any more",
        ],
        answerIndex: 2,
        explanation:
          "A **turning point** marks a big change in direction — after 1066 England had a new ruling class, new castles, new language of power and new landholding. A retreat on the battlefield is a literal 'turn', but that is not what historians mean by the term.",
        difficulty: "warmup",
        guideRef: "change-continuity-significance",
        hints: ["Think about what England was like before and after 1066."],
        strategy: "Spot change and continuity",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m2-q05",
        question:
          "**Source A** — from *What is the Third Estate?*, a pamphlet by the Abbé Sieyès published in France in January 1789 (adapted).\n\n> What is the Third Estate? Everything. What has it been until now in the political order? Nothing. What does it want to be? Something.\n\nWhat was the most likely **purpose** of Source A?",
        options: [
          "To give a balanced account of the views of all three estates",
          "To record exact tax figures for the government",
          "To thank King Louis XVI for calling the Estates-General",
          "To persuade readers that the Third Estate deserved real political power",
        ],
        answerIndex: 3,
        explanation:
          "A pamphlet with punchy questions and answers is designed to **persuade**: Sieyès argues that the Third Estate is the whole nation yet has no power. 'A balanced account of all three estates' does not fit — the source speaks only for the Third Estate and gives no figures or other views.",
        difficulty: "core",
        guideRef: "provenance-nop",
        hints: ["NOP: think about the Nature (a pamphlet) and the Purpose.", "Is the tone neutral or arguing a case?", "Who would read this pamphlet, and what did Sieyès want them to think?"],
        strategy: "Think about purpose",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m2-q06",
        question:
          "Julius Caesar first came to Britain in **55 BC**. The Roman invasion under Emperor Claudius began in **AD 43**. Which statement is correct?",
        options: [
          "55 BC is earlier than AD 43, because BC years count down towards the year 1",
          "55 BC is later than AD 43, because 55 is a bigger number",
          "55 BC is in the 55th century BC",
          "There were exactly 12 years between the two events",
        ],
        answerIndex: 0,
        explanation:
          "BC (or BCE) years count **down** to 1 BC, then AD (or CE) years count up from AD 1. So 55 BC came first. '55 is bigger, so it is later' is the classic BC slip — in BC dates, bigger numbers are further back in time. (The gap is 97 years: there is no year 0.)",
        difficulty: "core",
        guideRef: "chronology",
        hints: ["Draw a number line with 1 BC and AD 1 next to each other in the middle.", "BC years get smaller as time moves forward."],
        strategy: "Put it in chronological order",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m2-q07",
        question:
          "**Source B** — a description, written for this exercise, of a Chinese propaganda poster from 1958, at the start of the Great Leap Forward.\n\n> Smiling peasants stand beside enormous ears of wheat taller than they are. A slogan calls on China to overtake Britain's industry within fifteen years.\n\nWhich statement is an **inference** rather than a description?",
        options: [
          "The poster shows peasants standing beside very large crops",
          "The poster suggests the government wanted people to believe the Great Leap Forward would bring plenty for everyone",
          "The poster includes a slogan about Britain",
          "The poster was made in 1958",
        ],
        answerIndex: 1,
        explanation:
          "An **inference** works out something the source does not say directly — here, the message the government wanted to send. The other options simply describe what is in the source or its date. In reality the Great Leap Forward caused a devastating famine in which tens of millions of people died, which is why historians treat posters like this as evidence of aims, not results.",
        difficulty: "core",
        guideRef: "sources-and-evidence",
        hints: ["A description says what you can see. An inference says what it suggests.", "Look for words like 'suggests' or 'wanted people to believe'."],
        strategy: "Make an inference",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m2-q08",
        question:
          "Hitler became Chancellor in January 1933. Which event was the **short-term trigger** he used to justify emergency powers and arrest opponents in February 1933?",
        options: [
          "The Treaty of Versailles (1919)",
          "The hyperinflation of 1923",
          "The Reichstag Fire (February 1933)",
          "The Wall Street Crash (1929)",
        ],
        answerIndex: 2,
        explanation:
          "After the **Reichstag Fire** (27 February 1933) Hitler persuaded President Hindenburg to sign an emergency decree suspending civil rights — a trigger he exploited at once. The Treaty of Versailles was a real cause of Weimar's problems, but it is a **long-term** cause from 1919, not a trigger in 1933.",
        difficulty: "core",
        guideRef: "causation",
        hints: ["A trigger is the event that sets things off immediately.", "Which event happened in the same month as the emergency powers?"],
        strategy: "Long-term vs short-term causes",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m2-q09",
        question: "What is the main difference between a **source** and an **interpretation**?",
        options: [
          "A source is always true; an interpretation is always false",
          "A source is always written; an interpretation is always a picture",
          "Sources are about kings; interpretations are about ordinary people",
          "A source comes from the period being studied; an interpretation is a later view of the past, built from evidence",
        ],
        answerIndex: 3,
        explanation:
          "A **source** is evidence from the time; an **interpretation** is someone's later account or judgement about the past (a historian's book, a film, a museum display). 'Sources are always true' is wrong — sources can be biased or mistaken, and interpretations can be well supported.",
        difficulty: "core",
        guideRef: "interpretations",
        hints: ["Think about *when* each one is made.", "A historian's book about King John — source or interpretation?"],
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m2-q10",
        question: "Which detail best supports the claim that **Magna Carta (1215)** was significant in the **long term**?",
        options: [
          "It was sealed in a meadow at Runnymede",
          "Its idea that the king is under the law was later used against Charles I and by American colonists",
          "King John died in October 1216",
          "It was written in Latin",
        ],
        answerIndex: 1,
        explanation:
          "Long-term significance means it **resulted in change** and stayed **resonant** for later people. Magna Carta's principle was used in the 17th century against Charles I and in the 18th century by American colonists. Runnymede is a true and memorable detail, but where it was sealed does not show long-term impact.",
        difficulty: "core",
        guideRef: "change-continuity-significance",
        hints: ["Use the significance criteria: Remembered, Resonant, Resulting in change…", "Which option is about what happened centuries later?"],
        strategy: "Judge significance",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m2-q11",
        question: "Which describes a **constitutional monarchy**, like the United Kingdom today?",
        options: [
          "The monarch is head of state, but power is limited by laws and an elected Parliament",
          "The monarch makes all laws alone and cannot be questioned",
          "The country has no head of state at all",
          "Power passes to whoever wins a battle",
        ],
        answerIndex: 0,
        explanation:
          "In a **constitutional** (limited) monarchy the monarch reigns but the laws and an elected Parliament hold real power. 'Makes all laws alone' describes **absolute** monarchy — the kind of power Louis XVI claimed before 1789.",
        difficulty: "core",
        guideRef: "power-concepts",
        hints: ["A constitution is a set of rules about how power works.", "Is the monarch's power limited or unlimited?"],
        strategy: "Compare and contrast",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m2-q12",
        question: "Which is the strongest conclusion to: *\"How far was luck the main reason William won the Battle of Hastings?\"*",
        options: [
          "In conclusion, there were lots of reasons why William won.",
          "In conclusion, luck was a reason, and so was preparation, and Harold made mistakes.",
          "In conclusion, William won the Battle of Hastings in 1066.",
          "Luck mattered — the wind changed while Harold was fighting in the north — but William's preparation mattered more, because without his cavalry and archers he could not have exploited that luck.",
        ],
        answerIndex: 3,
        explanation:
          "A strong conclusion makes a **judgement** ('mattered more'), supports it with precise evidence, and explains **why** one factor outweighs another. 'Luck was a reason, and so was preparation…' mentions the right factors but just lists them without weighing them.",
        difficulty: "core",
        guideRef: "writing-like-a-historian",
        hints: ["'How far' questions need a judgement, not a list.", "Look for the option that says which factor mattered *more* and *why*."],
        strategy: "Weigh factors",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m2-q13",
        question:
          "**Source C** — part of a student's story set in 1215, written for this exercise.\n\n> King John picked up his pen and signed Magna Carta. Outside, a printing press was already turning out copies for every town in England.\n\nWhat is the main historical problem with Source C?",
        options: [
          "Nothing — this is an accurate description",
          "Magna Carta was actually agreed in 1066",
          "It contains an anachronism: the printing press did not reach England until the 1470s, and John sealed rather than signed the charter",
          "Magna Carta was written in English, not Latin",
        ],
        answerIndex: 2,
        explanation:
          "An **anachronism** is something placed in the wrong time. Printing reached England with William Caxton in the 1470s; in 1215 copies were written out by hand, and John agreed to the charter with his **royal seal**. 'Written in English, not Latin' is itself a mistake — Magna Carta was written in Latin.",
        difficulty: "challenge",
        guideRef: "chronology",
        hints: ["Check each object in the story: did it exist in 1215?", "When did printing come to England?", "How did medieval kings approve documents — with a signature or a seal?"],
        strategy: "Avoid hindsight",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m2-q14",
        question:
          "**Source D** — written for this exercise, in the style of a Khmer Rouge radio broadcast from Democratic Kampuchea (Cambodia) in 1976.\n\n> The people work joyfully together in the fields. Everyone has enough to eat.\n\nWhat is the best way for a historian to judge how far Source D can be trusted?",
        options: [
          "Cross-reference it with other evidence, such as survivors' testimony and records found after 1979",
          "Trust it, because it was made at the time",
          "Reject it, because it was broadcast in Khmer",
          "Trust it, because a government knows best what is happening in its own country",
        ],
        answerIndex: 0,
        explanation:
          "**Cross-referencing** tests a source against other evidence. Survivors' accounts and the regime's own records (found after the Vietnamese invasion of January 1979) show forced labour, starvation and mass killing: an estimated 1.5–2 million people died under the Khmer Rouge. 'Trust it because it was made at the time' is the mistake of thinking primary means reliable — the regime's purpose was to hide the truth.",
        difficulty: "challenge",
        guideRef: "provenance-nop",
        hints: ["Who made the broadcast, and what did they want listeners to believe?", "One source on its own cannot be checked. What else could you compare it with?", "Think about what survivors later told the world."],
        strategy: "Cross-reference sources",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m2-q15",
        question:
          "A historian asks a **counterfactual** question: \"Without the Great Depression, would Hitler have become Chancellor?\" Which evidence helps most to answer it?",
        options: [
          "Hitler was born in Austria in 1889",
          "The Nazi share of the vote rose from about 2.6% in 1928 to about 37% in July 1932, as unemployment soared",
          "Hitler wrote *Mein Kampf* while in prison after 1923",
          "The Nazi Party began as the German Workers' Party",
        ],
        answerIndex: 1,
        explanation:
          "The jump in Nazi votes **after** the Depression hit suggests the crisis was crucial: before it, the Nazis were a tiny party. The other options are true facts about Hitler and the Nazis, but none shows what difference the Depression made.",
        difficulty: "challenge",
        guideRef: "causation",
        hints: ["A counterfactual asks 'what if…?'. You need evidence of 'before' and 'after' the Depression.", "Which option compares Nazi support at two dates?"],
        strategy: "Weigh factors",
      },
    ],
  },

  // ===========================================================================
  // MCQ PAPER 3
  // ===========================================================================
  {
    id: "historians-toolkit-m3",
    title: "MCQ Paper 3",
    questions: [
      {
        kind: "mcq",
        id: "historians-toolkit-m3-q01",
        question: "What does **AD** mean in a date such as 'AD 1066'?",
        options: ["After Death", "Ancient Date", "Anno Domini — Latin for 'in the year of the Lord'", "After Domesday"],
        answerIndex: 2,
        explanation:
          "**AD** stands for *Anno Domini*, counting years from the traditional date of the birth of Jesus. Many historians now write **CE** (Common Era) instead, with the same numbers. 'After Death' is a very common mistake — it would leave a gap of about 30 years with no name.",
        difficulty: "warmup",
        guideRef: "chronology",
        hints: ["It is Latin, not English."],
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m3-q02",
        question: "In the **NOP** method for analysing a source, what does **Origin** ask?",
        options: [
          "Who made the source, when and where",
          "Why the source was made",
          "What type of source it is",
          "Whether the source is true",
        ],
        answerIndex: 0,
        explanation:
          "**Origin** = who, when, where. **Nature** = what type of source; **Purpose** = why it was made. 'Why the source was made' is a key question too — but it belongs to Purpose.",
        difficulty: "warmup",
        guideRef: "provenance-nop",
        hints: ["Nature, Origin, Purpose — 'origin' means where something comes from."],
        strategy: "Check the provenance (NOP)",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m3-q03",
        question: "Which is the best definition of **propaganda**?",
        options: [
          "A fair and balanced report of events",
          "A secret police force",
          "A law passed by Parliament",
          "Information, often one-sided, spread to persuade people to think or act in a certain way",
        ],
        answerIndex: 3,
        explanation:
          "**Propaganda** is persuasive, usually one-sided information — posters, films, radio, rallies. A secret police force (like the Gestapo) is a tool of **terror**, not propaganda, though dictators often used both together.",
        difficulty: "warmup",
        guideRef: "power-concepts",
        hints: ["Think of a poster designed to make people support a leader."],
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m3-q04",
        question:
          "Henry VIII feared that without a son England might slide back into civil war, as in the Wars of the Roses. What **type** of cause of the Break with Rome is this mainly?",
        options: ["Economic", "Political", "Military", "Religious"],
        answerIndex: 1,
        explanation:
          "Securing the succession and avoiding civil war is about who holds power — a **political** (dynastic) cause. 'Religious' is tempting because Henry used a religious argument from Leviticus, but the *need* for a male heir was political; the Bible verse was his justification.",
        difficulty: "warmup",
        guideRef: "causation",
        hints: ["Is this about money, armies, beliefs — or who rules the country?"],
        strategy: "Long-term vs short-term causes",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m3-q05",
        question:
          "**Source A** — a description, written for this exercise, of an archaeological dig in northern England.\n\n> On a hill outside the town, archaeologists found a large earth mound, a deep ditch, and the post-holes of a wooden tower and fence. Pottery dates it to around 1070.\n\nWhat kind of source is this, and what does it most likely show?",
        options: [
          "An oral source showing what local people remember",
          "A secondary written source showing what historians think",
          "An archaeological primary source, probably the remains of a Norman motte-and-bailey castle",
          "An interpretation showing that the Anglo-Saxons built castles everywhere",
        ],
        answerIndex: 2,
        explanation:
          "Physical remains from the time are **archaeological** primary evidence. A mound, ditch and wooden tower from about 1070 match a **motte-and-bailey** castle, built quickly by the Normans to control the conquered population. 'An interpretation' is wrong — the remains themselves are evidence, not someone's later view.",
        difficulty: "core",
        guideRef: "sources-and-evidence",
        hints: ["Is this something written, spoken, or dug up?", "What kind of fortification was built quickly from earth and timber after 1066?"],
        strategy: "Make an inference",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m3-q06",
        question:
          "**Interpretation 1** — written for this exercise, in the style of a Victorian history book.\n\n> John was the worst king ever to sit on the English throne: cruel, cowardly and false.\n\n**Interpretation 2** — written for this exercise, in the style of a modern historian.\n\n> John was a hard-working ruler who faced a formidable rival in Philip II of France, but his cruelty and untrustworthiness cost him the loyalty of his barons.\n\nWhich is the best explanation of **why they differ**?",
        options: [
          "Interpretation 2 was written by someone who knew John personally",
          "Interpretation 1 is a primary source from 1215",
          "They are describing two different kings called John",
          "Interpretation 2 draws on a wider range of evidence, such as government records, rather than relying mainly on hostile monk chroniclers",
        ],
        answerIndex: 3,
        explanation:
          "Interpretations differ because of the **evidence** used and the **questions** asked. Modern historians use John's government records as well as the chronicles, so they see his hard work as well as his failings. 'Interpretation 1 is a primary source' is wrong — a Victorian book was written over 600 years after John's reign.",
        difficulty: "core",
        guideRef: "interpretations",
        hints: ["Interpretations differ because of evidence, timing and the historian's questions.", "Which writers did Victorians mostly rely on for John's reign?"],
        strategy: "Compare and contrast",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m3-q07",
        question: "Which is the best example of **continuity** for most ordinary people after the Norman Conquest?",
        options: [
          "Most peasants still farmed the land and owed work and dues to a lord",
          "Most Anglo-Saxon earls were replaced by Norman barons",
          "Castles were built across England",
          "Norman French became the language of the ruling class",
        ],
        answerIndex: 0,
        explanation:
          "**Continuity** means what stayed the same. For most villagers, daily life — farming, working for a lord, the seasons of the year — carried on much as before. Replacing the earls with Normans was a huge **change**, but it mostly affected the elite, not ordinary peasants.",
        difficulty: "core",
        guideRef: "change-continuity-significance",
        hints: ["Continuity = what stayed the same.", "Ask: which option is about the lives of ordinary people rather than the elite?"],
        strategy: "Spot change and continuity",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m3-q08",
        question:
          "**Source B** — a description, written for this exercise, of Singapore's first election, held in 1948 under British rule.\n\n> Only British subjects could register to vote, and only about 22,000 people did — a small fraction of the adult population. Just six seats on the Legislative Council were elected; officials and appointed members held the rest.\n\nWhat can you **infer** from Source B?",
        options: [
          "Singapore was already a fully independent country",
          "Representative democracy was only beginning: few people voted and elected members were a minority on the council",
          "Every adult in Singapore voted in 1948",
          "The British cancelled the election",
        ],
        answerIndex: 1,
        explanation:
          "Few voters and only six elected seats suggest **limited** democracy under colonial rule — a first step. Singapore gained self-government in 1959 and independence in 1965. 'Already fully independent' ignores the clue that Singapore was still under British rule in 1948.",
        difficulty: "core",
        guideRef: "sources-and-evidence",
        hints: ["Look at the numbers: how many people voted, and how many seats were elected?", "What do those numbers suggest about who held power?"],
        strategy: "Make an inference",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m3-q09",
        question: "Which statement best explains how Pol Pot's Khmer Rouge came to power in Cambodia in **1975**?",
        options: [
          "Pol Pot won a free general election in 1975",
          "Cambodia's ruler peacefully handed power to Pol Pot in 1975",
          "Most people living in Phnom Penh supported the Khmer Rouge",
          "Years of civil war and US bombing, plus a weak and corrupt Lon Nol government, helped the Khmer Rouge win support and then military victory",
        ],
        answerIndex: 3,
        explanation:
          "This links **crisis** (civil war from 1970 and US bombing, 1969–73), **weak government** (Lon Nol's regime) and a ruthless movement ready to exploit them. The Khmer Rouge captured Phnom Penh by force on 17 April 1975 — they never won an election, so the 'free general election' option is false.",
        difficulty: "core",
        guideRef: "causation",
        hints: ["Use the Term 2 model: crises + weak government + a determined leader or movement.", "Did the Khmer Rouge take power through votes or through war?"],
        strategy: "Link the causes",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m3-q10",
        question: "Which sentence uses the most **precise evidence**?",
        options: [
          "Lots of women got the vote quite a long time ago.",
          "Women got the vote after the war at some point.",
          "In 1918 the Representation of the People Act gave the vote to about 8.4 million women over 30 who met a property qualification.",
          "The suffragettes were very brave and did lots of things.",
        ],
        answerIndex: 2,
        explanation:
          "Precise evidence names **dates, laws, numbers and people**. 'After the war at some point' is roughly true but too vague to earn credit — an examiner wants the year, the act and who was included.",
        difficulty: "core",
        guideRef: "writing-like-a-historian",
        hints: ["Look for dates, names and numbers.", "Which sentence could you check in a textbook?"],
        strategy: "Use precise evidence",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m3-q11",
        question: "Which is an example of **direct** democracy?",
        options: [
          "Citizens of ancient Athens voting in person on laws in the Assembly",
          "British voters electing an MP to represent them in Parliament",
          "A king ruling by divine right",
          "A dictator holding a vote with only one candidate",
        ],
        answerIndex: 0,
        explanation:
          "In **direct** democracy citizens vote on decisions themselves, as male citizens did in Athens. Electing an MP is democracy too, but it is **representative** democracy — you choose someone to decide for you.",
        difficulty: "core",
        guideRef: "power-concepts",
        hints: ["'Direct' means without a go-between.", "Who makes the decision: the citizens themselves, or someone they elect?"],
        strategy: "Compare and contrast",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m3-q12",
        question:
          "You draw a timeline **to scale** from 1900 to 2000. The line is 50 cm long. How far from the start should you mark **1933**?",
        options: ["33 cm", "6.6 cm", "1.65 cm", "16.5 cm"],
        answerIndex: 3,
        explanation:
          "100 years fill 50 cm, so each year is 0.5 cm. 1933 is 33 years after 1900: 33 × 0.5 = **16.5 cm**. '33 cm' is tempting but treats each year as 1 cm, which would need a 100 cm line.",
        difficulty: "core",
        guideRef: "chronology",
        hints: ["How many centimetres does one year take up?", "50 cm ÷ 100 years = ? Then multiply by the years since 1900."],
        strategy: "Put it in chronological order",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m3-q13",
        question:
          "**Source C** — written for this exercise: a letter from a French noblewoman living in exile in London to her sister, dated 1793.\n\n> The mob rules Paris now. Decent people hide in their cellars and the guillotine works from morning to night.\n\nHow useful is Source C for a historian studying the Terror?",
        options: [
          "Useless, because the writer was not in Paris and is biased",
          "Completely reliable, because it was written in 1793",
          "Useful for showing how exiled nobles saw and feared the Revolution, but its claims about Paris need checking because she was not there and was hostile",
          "Useful only for finding the exact number of people executed",
        ],
        answerIndex: 2,
        explanation:
          "A strong judgement balances **usefulness** and **reliability**: the letter is valuable evidence of nobles' fear and hostility, but her description of Paris is second-hand and exaggerated in tone, so it must be cross-referenced. 'Useless because biased' throws away what the source *can* tell us.",
        difficulty: "challenge",
        guideRef: "provenance-nop",
        hints: ["Separate two questions: what is it useful for, and how reliable is it?", "Origin: where was she when she wrote it? Purpose: who was it for?", "A biased source can still be useful for studying attitudes."],
        strategy: "Check the provenance (NOP)",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m3-q14",
        question:
          "**Interpretation** — written for this exercise.\n\n> Hitler seized power in Germany through a violent revolution.\n\nWhich evidence most clearly **challenges** this interpretation?",
        options: [
          "Hitler was appointed Chancellor legally by President Hindenburg in January 1933",
          "The Munich Putsch of 1923 was an attempt to seize power by force",
          "SA stormtroopers attacked political opponents in the streets",
          "Hitler had rivals in the SA leadership killed in the Night of the Long Knives (1934)",
        ],
        answerIndex: 0,
        explanation:
          "Hitler came to power **legally**, appointed by Hindenburg after backroom deals, and then used legal-looking steps such as the Enabling Act (March 1933). The Munich Putsch was a violent attempt — but it **failed**, so it does not show he gained power that way; if anything it led him to change tactics.",
        difficulty: "challenge",
        guideRef: "interpretations",
        hints: ["'Challenges' means 'shows it is wrong'. Which option points away from violent revolution?", "Three options show Nazi violence — but did that violence win Hitler the chancellorship?", "How was Hitler actually made Chancellor?"],
        strategy: "Consider the counter-argument",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m3-q15",
        question:
          "Using the significance criteria (Remarkable, Remembered, Resonant, Resulting in change, Revealing), which argument best shows that the **Storming of the Bastille** (14 July 1789) was significant?",
        options: [
          "The Bastille held only seven prisoners on the day it was stormed",
          "It is remembered every year as France's national day, and it revealed that the king had lost control of Paris",
          "It took place in the summer",
          "The Bastille was a medieval fortress",
        ],
        answerIndex: 1,
        explanation:
          "This argument uses two criteria — **Remembered** (14 July is France's national day) and **Revealing** (royal authority had collapsed in Paris). The 'seven prisoners' fact is true and remarkable, but on its own it suggests the attack mattered as a symbol rather than proving why it was significant.",
        difficulty: "challenge",
        guideRef: "change-continuity-significance",
        hints: ["A good significance argument uses criteria, not just interesting facts.", "Which option uses more than one of the 5 Rs?"],
        strategy: "Judge significance",
      },
    ],
  },

  // ===========================================================================
  // MCQ PAPER 4
  // ===========================================================================
  {
    id: "historians-toolkit-m4",
    title: "MCQ Paper 4",
    questions: [
      {
        kind: "mcq",
        id: "historians-toolkit-m4-q01",
        question: "Hitler became Chancellor in 1933 and Mao's Communists made the Long March in 1934–35. In which **decade** did both happen?",
        options: ["The 1920s", "The 1940s", "The 1910s", "The 1930s"],
        answerIndex: 3,
        explanation:
          "A decade is ten years: the **1930s** run from 1930 to 1939. The 1920s is the slip — 1920s years start '192_'.",
        difficulty: "warmup",
        guideRef: "chronology",
        hints: ["Look at the third digit of each year."],
        strategy: "Put it in chronological order",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m4-q02",
        question: "Why is a **primary** source not automatically **reliable**?",
        options: [
          "Primary sources are always lies",
          "A primary source can still be biased, mistaken or made to persuade",
          "Only secondary sources were written down",
          "All primary sources were destroyed long ago",
        ],
        answerIndex: 1,
        explanation:
          "Being from the time does not make a source accurate: its maker might be biased, badly informed or creating propaganda. 'Primary sources are always lies' goes too far the other way — many are accurate; each must be judged with NOP.",
        difficulty: "warmup",
        guideRef: "sources-and-evidence",
        hints: ["Think of a 1930s Nazi poster. It is primary — but is it neutral?"],
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m4-q03",
        question: "In William I's **feudal system**, what did a baron (tenant-in-chief) give the king in return for land?",
        options: [
          "Nothing — the land was a free gift",
          "A vote in national elections",
          "Loyalty and military service, including knights for the king's army",
          "A copy of the Domesday Book",
        ],
        answerIndex: 2,
        explanation:
          "Feudalism was land in return for **loyalty and service**: barons swore an oath of fealty and supplied knights. 'A vote in national elections' is an anachronism — there were no national elections in Norman England.",
        difficulty: "warmup",
        guideRef: "power-concepts",
        hints: ["What did the king need most to hold on to a conquered country?"],
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m4-q04",
        question: "Which word describes change that makes things **worse** — for example, people losing rights they once had?",
        options: ["Regression", "Progress", "Continuity", "Chronology"],
        answerIndex: 0,
        explanation:
          "**Regression** means going backwards. Change is not always **progress**: the Nazis removing freedoms after 1933 is a clear example of regression.",
        difficulty: "warmup",
        guideRef: "change-continuity-significance",
        hints: ["Which word is the opposite of 'progress'?"],
        strategy: "Spot change and continuity",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m4-q05",
        question:
          "**Source A** — from a speech by Emmeline Pankhurst, leader of the Women's Social and Political Union (WSPU), given in the USA in 1913 (adapted).\n\n> I am here as a soldier who has temporarily left the field of battle to explain what civil war is like when it is waged by women.\n\nWhich detail of **provenance** best explains the fighting tone of Source A?",
        options: [
          "It was given in the 20th century",
          "The speaker led the WSPU, which used militant 'Deeds, not words' tactics, and she was trying to win support for them",
          "It was spoken aloud rather than written down",
          "It was given in the autumn",
        ],
        answerIndex: 1,
        explanation:
          "**Origin** (the WSPU's leader) and **purpose** (defending militancy to an audience) explain the language of soldiers and war. Being from the 20th century tells you nothing about the tone — plenty of 20th-century speeches were calm.",
        difficulty: "core",
        guideRef: "provenance-nop",
        hints: ["Use NOP: who was speaking, and what did she want her audience to think?", "The WSPU were the *suffragettes* — how did their methods differ from the suffragists'?"],
        strategy: "Check the provenance (NOP)",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m4-q06",
        question: "How many years passed between the Battle of Hastings (**1066**) and Magna Carta (**1215**)?",
        options: ["159", "1149", "151", "149"],
        answerIndex: 3,
        explanation:
          "1215 − 1066 = **149** years. 159 is a common slip when subtracting in your head; 1149 comes from treating 1066 as 66.",
        difficulty: "core",
        guideRef: "chronology",
        hints: ["Subtract the earlier year from the later one.", "Try counting up: 1066 → 1200 is 134 years, then add the rest."],
        strategy: "Put it in chronological order",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m4-q07",
        question: "Which is best described as a **long-term** cause of the French Revolution of 1789?",
        options: [
          "The storming of the Bastille on 14 July 1789",
          "The Tennis Court Oath in June 1789",
          "A long-standing system of three estates in which the Third Estate paid most of the taxes but had little power",
          "The execution of Louis XVI in 1793",
        ],
        answerIndex: 2,
        explanation:
          "A **long-term** cause builds up over many years — like the unfair estates system. The execution of Louis XVI (January 1793) is a tempting distractor, but it is a **consequence** of the Revolution, not a cause.",
        difficulty: "core",
        guideRef: "causation",
        hints: ["Long-term causes existed for years before the event.", "Check the dates: which options happened during or after 1789?"],
        strategy: "Long-term vs short-term causes",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m4-q08",
        question:
          "**Interpretation A** — written for this exercise, in the style of a memoir by a former suffragette in the 1930s.\n\n> It was our militant campaign that won women the vote.\n\n**Interpretation B** — written for this exercise, in the style of a modern historian.\n\n> Militancy may have hardened opposition before 1914; women's war work and the patient campaign of the suffragists did more to win the vote in 1918.\n\nWhich best explains **why they differ**?",
        options: [
          "A was written by someone who took part and wanted her movement's role remembered; B weighs a wider range of evidence from a distance",
          "B was written by someone who was at every suffragette protest",
          "A is about France and B is about Britain",
          "They agree completely, so there is nothing to explain",
        ],
        answerIndex: 0,
        explanation:
          "The **author's involvement and purpose** shape A: a participant naturally stresses her own side. B is written later, can weigh different causes and evidence, and is not defending anyone's reputation. 'B was at every protest' gets it backwards — the modern historian was not there at all.",
        difficulty: "core",
        guideRef: "interpretations",
        hints: ["Who wrote each one, and when?", "Would a former suffragette want to play down the suffragettes' role?"],
        strategy: "Think about purpose",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m4-q09",
        question:
          "**Source B** — written for this exercise, based on many memories of Germany in 1923.\n\n> In November 1923 my mother carried her wages home in a laundry basket. By the time she reached the baker's, the price of bread had gone up again.\n\nWhat can you **infer** from Source B?",
        options: [
          "German workers were paid very well in 1923",
          "Money was losing value so fast that wages and savings became almost worthless",
          "Bakers refused to sell bread to anyone",
          "The Weimar government was very popular in 1923",
        ],
        answerIndex: 1,
        explanation:
          "Wages in a basket and prices rising within hours suggest **hyperinflation**: by November 1923 a loaf of bread cost around 200 billion marks. 'Paid very well' misreads the basket — there was a huge *number* of notes because each was worth almost nothing.",
        difficulty: "core",
        guideRef: "sources-and-evidence",
        hints: ["Why would anyone need a basket for their wages?", "What happens to money when prices rise every few hours?"],
        strategy: "Make an inference",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m4-q10",
        question:
          "A student answers *\"Explain why the Communists won the Chinese Civil War\"* with this paragraph:\n\n> Mao led the Communists. The Long March was in 1934–35. The Communists won the civil war in 1949. Mao became the leader of China.\n\nWhat is the main weakness?",
        options: [
          "It has no dates in it",
          "It is too short to count as a paragraph",
          "It lists facts without explaining how each one helped the Communists win",
          "It mentions Mao too often",
        ],
        answerIndex: 2,
        explanation:
          "This is **description, not explanation**: each fact is accurate, but none is linked to *why* the Communists won. 'It has no dates' is wrong — it has 1934–35 and 1949; the problem is the missing 'this helped because…'.",
        difficulty: "core",
        guideRef: "writing-like-a-historian",
        hints: ["Does the paragraph answer the word 'why'?", "Which PEEL step is missing from every sentence?"],
        strategy: "Use precise evidence",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m4-q11",
        question: "Which feature was shared by Hitler's Germany, Mao's China and Pol Pot's Cambodia?",
        options: [
          "Free elections with several competing parties",
          "A monarch ruling by divine right",
          "An independent press free to criticise the leader",
          "A one-party state that used terror to silence opponents",
        ],
        answerIndex: 3,
        explanation:
          "All three were **one-party dictatorships** that used terror, propaganda and control of information. 'Free elections with several parties' describes democracy — exactly what each regime destroyed or never allowed.",
        difficulty: "core",
        guideRef: "power-concepts",
        hints: ["Think about what happened to opponents in each regime.", "Which option describes a dictatorship rather than a democracy or monarchy?"],
        strategy: "Compare and contrast",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m4-q12",
        question:
          "The right to vote in Britain was widened step by step by laws passed in 1832, 1867, 1884, 1918 and 1928. What does this suggest about the **rate** of change?",
        options: [
          "It was sudden — everything changed at once in a single revolution",
          "It was gradual — reform came in stages over almost a century",
          "There was no change at all",
          "It went backwards after 1884",
        ],
        answerIndex: 1,
        explanation:
          "Five reforms spread over 96 years show **gradual** change — very different from the sudden upheaval in France in 1789. 'Sudden, in a single revolution' describes the French pattern, not the British one.",
        difficulty: "core",
        guideRef: "change-continuity-significance",
        hints: ["Rate of change = how fast. Look at the gaps between the dates.", "Count the years from 1832 to 1928."],
        strategy: "Spot change and continuity",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m4-q13",
        question: "Which statement best **links two causes** of the Communist victory in China in 1949?",
        options: [
          "Japan's invasion (from 1937) badly weakened the Nationalists, while the Communists' resistance in the countryside won peasant support — so the Communists emerged stronger for the final civil war",
          "Mao was born in Hunan in 1893. The Communists won in 1949.",
          "The Nationalists lost because they did not win.",
          "The Long March took place after the Communists won in 1949",
        ],
        answerIndex: 0,
        explanation:
          "The best answer shows one cause (war with Japan weakening the Nationalists) **combining with** another (Communist peasant support) to produce the result. The Long March option has the chronology wrong: it happened in 1934–35, long before 1949.",
        difficulty: "challenge",
        guideRef: "causation",
        hints: ["Look for an answer that shows how one cause made another more powerful.", "Check the dates in each option — one has the order wrong.", "'They lost because they did not win' is circular. Avoid answers that explain nothing."],
        strategy: "Link the causes",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m4-q14",
        question:
          "**Source C** — a description, written for this exercise, of a photograph printed in a Nazi-controlled newspaper in 1934.\n\n> Huge crowds raise their arms and cheer as Hitler drives past. Every face in the front row is smiling.\n\nWhat is Source C **most useful** for?",
        options: [
          "Proving that every German supported Hitler",
          "Finding out exactly how many people belonged to the Nazi Party",
          "Showing how the Nazis wanted Hitler to be seen — as a popular leader adored by the people",
          "Proving that the photograph must have been faked",
        ],
        answerIndex: 2,
        explanation:
          "Printed under Nazi control, the photo is best evidence of the **cult of personality** the regime was building. It cannot prove *every* German supported Hitler — the newspaper chose what to show, and opponents risked arrest. Nor does bias prove it was faked; the crowd may well have been real.",
        difficulty: "challenge",
        guideRef: "provenance-nop",
        hints: ["Origin: who controlled the newspaper?", "Purpose: why would they print this picture?", "Useful for what question — public opinion, or Nazi propaganda?"],
        strategy: "Think about purpose",
      },
      {
        kind: "mcq",
        id: "historians-toolkit-m4-q15",
        question:
          "A student writes: *\"Magna Carta (1215) gave everyone in England equal rights, so it was the start of democracy.\"* Which is the best correction?",
        options: [
          "Magna Carta was actually agreed in 1066, not 1215",
          "Magna Carta gave the vote to all men",
          "Magna Carta was written by Henry VIII",
          "It mainly protected barons and 'free men' (most people were unfree villeins) and the Pope annulled it within weeks — though its idea that the king is under the law later became very important",
        ],
        answerIndex: 3,
        explanation:
          "This correction separates **myth from reality**: in 1215 Magna Carta protected a privileged minority and was annulled by Pope Innocent III in August 1215, but its principle of the rule of law grew in significance later. 'Gave the vote to all men' is another myth — Magna Carta said nothing about elections.",
        difficulty: "challenge",
        guideRef: "interpretations",
        hints: ["Who counted as a 'free man' in 1215?", "What happened to Magna Carta in the weeks after it was sealed?", "A good correction can say what is wrong *and* why Magna Carta still matters."],
        strategy: "Avoid hindsight",
      },
    ],
  },
];
