import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // =============================== QUIZ ======================================
  quiz: [
    {
      kind: "short",
      id: "historians-toolkit-quiz-q01",
      question: "King John sealed **Magna Carta** in **1215**. In which **century** did this happen? (Answer like *15th*.)",
      answer: { type: "text", accept: ["13th", "13th century", "thirteenth", "thirteenth century", "13", "the 13th century", "the thirteenth century", "13th c"], display: "13th century" },
      traps: [
        { spec: { type: "text", accept: ["12th", "12th century", "twelfth", "twelfth century", "12"] }, feedback: "The '12' at the start is the trap. The 1200s are the **13th** century, because the 1st century was the years 1–100." },
        { spec: { type: "text", accept: ["14th", "14th century", "fourteenth", "14"] }, feedback: "Too far forward — the 1300s are the 14th century. 1215 is in the 1200s." },
      ],
      solution: ["The 1st century = years 1–100, so the century number is always one more than the 'hundreds' digits.", "1215 is in the 1200s → the **13th century**."],
      commonError: "Reading the first two digits ('12') and saying 12th century.",
      difficulty: "warmup",
      guideRef: "chronology",
      hints: ["Which century is 1066 in? Use the same rule for 1215."],
      strategy: "Put it in chronological order",
    },
    {
      kind: "mcq",
      id: "historians-toolkit-quiz-q02",
      question:
        "In the 1990s, historians recorded interviews with Cambodians who had survived the Khmer Rouge years (1975–79), describing what happened to them and their families. What **type** of source are these recordings?",
      options: [
        "An archaeological source",
        "A secondary source, because they were recorded after the events",
        "Oral history — primary evidence from people who lived through the events, even though it was recorded years later",
        "Propaganda, because they were recorded to persuade people",
      ],
      answerIndex: 2,
      explanation:
        "Spoken memories recorded from people who were there are **oral history**, and they count as **primary** evidence of those people's experiences. Calling them secondary because they were recorded later is a common slip: what matters is that the speaker lived through the events, not when the tape was made. (Memory can fade or change over time, so historians cross-reference oral testimony — but that is a question of reliability, not type.)",
      difficulty: "warmup",
      guideRef: "sources-and-evidence",
      hints: ["Who is speaking — someone who was there, or someone who studied it afterwards?"],
      strategy: "Check the provenance (NOP)",
    },
    {
      kind: "mcq",
      id: "historians-toolkit-quiz-q03",
      question:
        "In 1932 the Nazi Party used the election slogan *Arbeit und Brot* ('Work and Bread'). A student says: \"Nazi election posters are biased, so they are useless to historians.\" Which is the **best** reply?",
      options: [
        "The student is right — a biased source cannot tell historians anything",
        "It is useful because it shows what the Nazis wanted voters to believe, and that they thought jobs and food were what desperate Germans cared about in 1932",
        "It is useful because election posters are always accurate about what was happening",
        "It is useful only if the artist was an eyewitness to Hitler's speeches",
      ],
      answerIndex: 1,
      explanation:
        "Propaganda is excellent evidence of **what its makers wanted people to believe** and of **who they were targeting**. A slogan about work and bread in 1932 reveals that the Nazis were aiming at Germans hit by the Depression (about 6 million were unemployed). Saying 'biased means useless' confuses **reliability** with **usefulness** — a source can be unreliable about facts but still very useful for the right question.",
      difficulty: "core",
      guideRef: "provenance-nop",
      hints: ["Usefulness depends on the question you ask the source.", "Instead of 'Is it true?', ask 'What does it tell me about the people who made it?'", "What was happening to jobs in Germany in 1932?"],
      strategy: "Think about purpose",
    },
    {
      kind: "short",
      id: "historians-toolkit-quiz-q04",
      question:
        "William I was crowned in Westminster Abbey on Christmas Day 1066, with the Church's blessing, so that people would accept his rule as rightful. Which one-word **noun** do historians use for this quality — being accepted as the rightful ruler?",
      answer: { type: "text", accept: ["legitimacy", "legitimate", "legitimacy of rule", "legitimate rule", "legitimise", "legitimize"], display: "legitimacy" },
      traps: [
        { spec: { type: "text", accept: ["divine right", "divine right of kings"] }, feedback: "Divine right is one *argument* a king could use (God chose me). The general word for being accepted as rightful is **legitimacy**." },
        { spec: { type: "text", accept: ["power", "authority"] }, feedback: "Close, but William already had power — he won it by force. The word for power that people *accept as rightful* is **legitimacy**." },
      ],
      solution: ["Winning a battle gave William power; a coronation in the abbey, blessed by the Church, made that power look **rightful**.", "Historians call this **legitimacy** — and every ruler this year, from William to Hitler, worked hard to get it."],
      difficulty: "core",
      guideRef: "power-concepts",
      hints: ["Think of the opposite of 'illegal' or 'usurper'.", "The word starts with 'leg-', like 'legal'."],
      strategy: "Use precise evidence",
    },
    {
      kind: "short",
      id: "historians-toolkit-quiz-q05",
      question:
        "Historians often sort causes into **long-term**, **short-term** and the final spark that sets events off. What one word is usually used for that final spark?",
      answer: { type: "text", accept: ["trigger", "a trigger", "the trigger", "trigger cause", "triggers", "spark", "catalyst", "immediate cause"], display: "trigger" },
      traps: [
        { spec: { type: "text", accept: ["consequence", "result", "effect"] }, feedback: "A consequence comes *after* an event. The spark that sets it off is a cause — the **trigger**." },
      ],
      solution: ["Long-term causes build up over years, short-term causes make things worse just before, and the **trigger** sets events off.", "Example: the Reichstag Fire (February 1933) was the trigger Hitler used to bring in emergency powers."],
      difficulty: "warmup",
      guideRef: "causation",
      hints: ["Think of a gun: what do you pull to fire it?"],
      strategy: "Long-term vs short-term causes",
    },
    {
      kind: "mcq",
      id: "historians-toolkit-quiz-q06",
      question:
        "Official histories published in China while Mao was in power described the **Long March (1934–35)** as a glorious victory. Many later historians describe it as a desperate retreat in which only a small fraction of those who set out survived. Which is the **best** explanation of why these interpretations differ?",
      options: [
        "Historians writing later cannot know anything about events that happened before they were born",
        "Only one account can be based on evidence, so the other must be invented",
        "Historians from outside China always dislike communist leaders",
        "The official histories were written to glorify Mao and the Communist Party, while later historians asked different questions and used other evidence, such as the huge losses",
      ],
      answerIndex: 3,
      explanation:
        "Interpretations differ because of **purpose**, **the questions asked** and **the evidence used**. Official histories under Mao had a clear purpose — to build the Party's heroic story. Later historians looked at evidence such as the enormous losses. Both can draw on true facts: the Communists *did* survive, and they *did* lose most of their army. Saying 'one must be invented' misses that interpretations usually select and emphasise different evidence rather than making things up.",
      difficulty: "core",
      guideRef: "interpretations",
      hints: ["Who wrote the official histories, and what did they want readers to think?", "Could both interpretations be built from real facts?", "Think: purpose + evidence chosen + questions asked."],
      strategy: "Think about purpose",
    },
    {
      kind: "short",
      id: "historians-toolkit-quiz-q07",
      question:
        "One set of criteria for judging **significance** is the 5 Rs: **Remarkable**, **Remembered**, **Resonant**, **Resulting in change** and one more R — an event that tells us something important about the society of the time. What is the fifth R?",
      answer: { type: "text", accept: ["revealing", "reveals", "reveal", "revealing about the time"], display: "Revealing" },
      traps: [
        { spec: { type: "text", accept: ["relevant", "relevance"] }, feedback: "Close in meaning to *resonant*. The criterion about what an event shows us about its own time is **Revealing**." },
        { spec: { type: "text", accept: ["revolutionary", "revolution"] }, feedback: "A good word, but 'revolutionary' is really covered by *Resulting in change*. The fifth R is **Revealing**." },
      ],
      solution: ["**Revealing** = the event shows us something about the time, e.g. the 1918 Act reveals that many MPs still thought women under 30 could not be trusted with the vote."],
      difficulty: "core",
      guideRef: "change-continuity-significance",
      hints: ["What could an event *show* or *uncover* about people's attitudes at the time?", "Re-v-…"],
      strategy: "Judge significance",
    },
    {
      kind: "mcq",
      id: "historians-toolkit-quiz-q08",
      question: "Historians divide the past into **periods**. Which event falls in the period usually called **early modern** (roughly 1500–1750)?",
      options: ["Henry VIII's Break with Rome (1534)", "The Battle of Hastings (1066)", "King John sealing Magna Carta (1215)", "Hitler becoming Chancellor of Germany (1933)"],
      answerIndex: 0,
      explanation:
        "The **early modern** period runs from about 1500 to about 1750, so Henry VIII's Break with Rome (1534) fits. Hastings (1066) and Magna Carta (1215) are **medieval** (roughly 500–1500), and 1933 is in the **modern** period. Some students guess 'early modern' means 'the early 1900s' — but historians use 'modern' for the last few centuries as a whole.",
      difficulty: "core",
      guideRef: "chronology",
      hints: ["Medieval ends around 1500.", "Which date is between 1500 and 1750?"],
      strategy: "Put it in chronological order",
    },
    {
      kind: "written",
      id: "historians-toolkit-quiz-q09",
      question: "Write **one PEEL paragraph** explaining one reason why King John was forced to agree to **Magna Carta** in 1215. (4 marks)",
      marks: 4,
      modelAnswer:
        "**Point:** One reason King John was forced to agree to Magna Carta was his military failure in France. **Evidence:** John lost Normandy to King Philip II of France in 1204, and his expensive attempt to win it back ended in defeat at the Battle of Bouvines in 1214. **Explain:** To pay for these wars, John squeezed his barons with heavy taxes such as scutage, and his defeats made him look weak. This meant the barons had both a reason to rebel (anger at the taxes) and an opportunity (a weakened king). When the rebel barons captured London in May 1215, John had no choice but to negotiate. **Link:** So John's failures in France were a key reason he was forced to seal Magna Carta at Runnymede in June 1215.",
      markScheme: [
        { point: "Clear Point that states a reason (e.g. defeat in France, taxes, quarrel with the Pope)", keywords: ["one reason", "reason", "failure", "france", "taxes", "pope", "barons"] },
        { point: "Precise Evidence with dates/names (e.g. Normandy lost 1204, Bouvines 1214, scutage, interdict 1208)", keywords: ["1204", "normandy", "bouvines", "1214", "scutage", "philip", "interdict", "1208", "london"] },
        { point: "Explains HOW this led to the barons forcing John to agree (not just describing)", keywords: ["this meant", "because", "so", "angry", "weak", "rebel", "rebellion", "no choice"] },
        { point: "Links back to the question (why he agreed to Magna Carta in 1215)", keywords: ["therefore", "so", "magna carta", "1215", "runnymede", "forced", "agree"] },
      ],
      commonError: "Telling the story of John's reign without explaining how the reason *forced* him to agree.",
      difficulty: "core",
      guideRef: "writing-like-a-historian",
      hints: ["Pick one reason only: war, money or the Church.", "Your evidence needs a date or a name — e.g. 1204 or Bouvines.", "In the Explain sentence use 'This meant that…' to show how it led to Magna Carta."],
      strategy: "Use precise evidence",
    },
    {
      kind: "written",
      id: "historians-toolkit-quiz-q10",
      question:
        "Explain how a **crisis** and a **weak government** combined to help the Khmer Rouge take power in Cambodia in **1975**. (4 marks)",
      marks: 4,
      modelAnswer:
        "A major crisis was the Vietnam War spilling into Cambodia. Between 1969 and 1973 US bombing of the Cambodian countryside killed many civilians and destroyed villages, which angered peasants and drove many of them to join the Khmer Rouge. At the same time, Cambodia's government was weak. In 1970 Lon Nol overthrew Prince Sihanouk; his government was corrupt, depended on American aid and lost control of much of the countryside. Sihanouk then backed the Khmer Rouge, so peasants loyal to him supported them too. The two factors fed each other: the crisis created anger and recruits, while the weak government could neither protect people nor defeat the growing rebel army. When American support ended, Lon Nol's forces collapsed and the Khmer Rouge captured Phnom Penh on 17 April 1975.",
      markScheme: [
        { point: "Identifies the crisis with evidence (Vietnam War, US bombing 1969–73, civil war)", keywords: ["vietnam", "bombing", "bombs", "united states", "us", "america", "civil war", "1969", "1973"] },
        { point: "Identifies the weak government with evidence (Lon Nol's 1970 coup, corruption, dependence on US aid)", keywords: ["lon nol", "1970", "coup", "corrupt", "corruption", "weak", "sihanouk", "aid"] },
        { point: "Explains how each helped the Khmer Rouge (recruits, support, failure to stop them)", keywords: ["recruits", "join", "support", "angry", "anger", "could not", "unable", "peasants"] },
        { point: "Explicitly LINKS the two factors together and to 1975", keywords: ["together", "combined", "linked", "fed", "made worse", "at the same time", "1975", "phnom penh"] },
      ],
      commonError: "Writing about each factor separately without showing how they worked together.",
      difficulty: "challenge",
      guideRef: "causation",
      hints: ["What war was happening next door to Cambodia?", "Who ran Cambodia from 1970, and how did he get power?", "Use a linking phrase: 'This was made worse by…' or 'Because the government was weak, the crisis…'"],
      strategy: "Link the causes",
    },
  ],

  // ============================== PAPERS =====================================
  papers: [
    {
      id: "historians-toolkit-p1",
      title: "Practice Paper 1",
      questions: [
        {
          kind: "short",
          id: "historians-toolkit-p1-q01",
          question: "Some historians write **BCE** instead of BC. What does **BCE** stand for? Give the full phrase.",
          answer: { type: "text", accept: ["Before Common Era", "Before the Common Era", "Before Current Era", "Before the Current Era", "Before Christian Era", "Before the Christian Era"], display: "Before Common Era" },
          traps: [
            { spec: { type: "text", accept: ["Before Christ"] }, feedback: "That is what **BC** means. BCE means **Before Common Era** — the same years, but a label that doesn't depend on one religion." },
          ],
          solution: ["BCE = **Before Common Era**; CE = Common Era.", "BCE/CE use exactly the same numbers as BC/AD — only the labels change."],
          difficulty: "warmup",
          guideRef: "chronology",
          hints: ["The 'C' and 'E' together are the same as in 'CE'."],
          strategy: "Put it in chronological order",
        },
        {
          kind: "short",
          id: "historians-toolkit-p1-q02",
          question:
            "In the UK, citizens elect MPs who make laws on their behalf, rather than every citizen voting on every law. What **two-word** term describes this kind of democracy?",
          answer: { type: "text", accept: ["representative democracy", "representative", "parliamentary democracy", "a representative democracy"], display: "representative democracy" },
          traps: [
            { spec: { type: "text", accept: ["direct democracy", "direct"] }, feedback: "In a **direct** democracy citizens vote on laws themselves (as in ancient Athens). Choosing MPs to decide for you is **representative** democracy." },
            { spec: { type: "text", accept: ["constitutional monarchy"] }, feedback: "True of the UK, but that describes the monarch's limited role. The type of *democracy* — electing people to decide for you — is **representative** democracy." },
          ],
          solution: ["Voters choose **representatives** (MPs), who debate and vote on laws.", "So the UK is a **representative democracy**."],
          difficulty: "warmup",
          guideRef: "power-concepts",
          hints: ["The MPs *represent* the voters."],
          strategy: "Compare and contrast",
        },
        {
          kind: "short",
          id: "historians-toolkit-p1-q03",
          question:
            "When a historian works out something that a source **suggests** but does not directly say (\"This source suggests that…\"), the historian is making an … what? Give one word.",
          answer: { type: "text", accept: ["inference", "an inference", "inferences", "infer", "inferring", "deduction", "a deduction"], display: "inference" },
          traps: [
            { spec: { type: "text", accept: ["description", "describing", "a description"] }, feedback: "Describing is saying what the source *shows*. Working out what it *suggests* is making an **inference**." },
            { spec: { type: "text", accept: ["assumption", "guess", "an assumption"] }, feedback: "An inference isn't a guess — it must be supported by a detail in the source. The word is **inference**." },
          ],
          solution: ["An **inference** reads between the lines, and is always backed by a detail from the source.", "Description = what it says; inference = what it suggests."],
          difficulty: "warmup",
          guideRef: "sources-and-evidence",
          hints: ["The verb is 'to infer'."],
          strategy: "Make an inference",
        },
        {
          kind: "mcq",
          id: "historians-toolkit-p1-q04",
          question:
            "**Source A** — from the *Ecclesiastical History* by Orderic Vitalis, a monk born in England in 1075 to a Norman father and an English mother. He wrote it in a monastery in Normandy in about the 1120s–30s (adapted).\n\n> I have often praised William in this book, but I cannot praise him for this act, which condemned the innocent and the guilty alike to die of slow starvation.\n\nOrderic is describing the **Harrying of the North** (1069–70). Which detail of the **provenance** makes his criticism of William especially significant?",
          options: [
            "He was an eyewitness who watched the Harrying happen",
            "He had a Norman father and wrote in a Norman monastery, yet still condemned William — so his criticism is unlikely to be simple anti-Norman bias",
            "He wrote about 50 years later, so his account is useless",
            "He was a monk, and monks were bound to tell the truth",
          ],
          answerIndex: 1,
          explanation:
            "Orderic was half-Norman, lived in Normandy and says he often praised William — so when even he condemns the Harrying, it suggests the brutality was real, not just English hatred of the Normans. He was **not** an eyewitness: he was born in 1075, years after 1069–70. Writing later does not make a source useless, and being a monk did not guarantee accuracy — monks had their own loyalties and purposes.",
          difficulty: "core",
          guideRef: "provenance-nop",
          hints: ["Check the dates: when was Orderic born, and when did the Harrying happen?", "Whose side would you *expect* a Norman-educated monk to take?", "A criticism is stronger when it comes from someone who might be expected to be friendly."],
          strategy: "Check the provenance (NOP)",
        },
        {
          kind: "short",
          id: "historians-toolkit-p1-q05",
          question:
            "By 1789 the French government was almost bankrupt, partly because of the huge cost of helping the Americans in their War of Independence. Which **category** of cause is the bankruptcy: political, economic, social, religious or military?",
          answer: { type: "text", accept: ["economic", "economy", "economics", "financial", "finance", "money"], display: "economic" },
          traps: [
            { spec: { type: "text", accept: ["military", "war"] }, feedback: "The war was military, but the cause in the question is the **empty treasury** — that makes it an **economic** cause." },
            { spec: { type: "text", accept: ["political", "politics"] }, feedback: "It became a political problem, but a government running out of money is an **economic** cause." },
          ],
          solution: ["Bankruptcy is about money, debt and taxes, so it is an **economic** cause.", "Notice the link: a military cause (war) created an economic one (debt), which led to a political crisis (calling the Estates-General in 1789)."],
          difficulty: "core",
          guideRef: "causation",
          hints: ["Focus on the word 'bankrupt' — what has run out?", "Money, trade, taxes and prices belong in which category?"],
          strategy: "Link the causes",
        },
        {
          kind: "short",
          id: "historians-toolkit-p1-q06",
          question: "Mao Zedong proclaimed the **People's Republic of China** in **1949**. In which **century** was this? (Answer like *15th*.)",
          answer: { type: "text", accept: ["20th", "20th century", "twentieth", "twentieth century", "20", "the 20th century", "the twentieth century", "20th c"], display: "20th century" },
          traps: [
            { spec: { type: "text", accept: ["19th", "19th century", "nineteenth", "nineteenth century", "19"] }, feedback: "The '19' at the start is the trap. The 1900s are the **20th** century — always add one to the 'hundreds'." },
          ],
          solution: ["The 1900s are the 20th century (the years 1901–2000).", "So 1949 is in the **20th century**."],
          commonError: "Saying '19th century' because the year begins with 19.",
          difficulty: "core",
          guideRef: "chronology",
          hints: ["Which century are we living in now, in the 2000s?", "Take the first two digits and add one."],
          strategy: "Put it in chronological order",
        },
        {
          kind: "written",
          id: "historians-toolkit-p1-q07",
          question:
            "**Source B** — a description, written for this exercise, of a scene from the **Bayeux Tapestry**. The tapestry was probably made in England in the 1070s for Bishop Odo, William's half-brother.\n\n> Harold stands between two boxes of holy relics, with one hand on each. William sits on a throne, watching him. The Latin words above say: 'Where Harold made an oath to Duke William.'\n\nWhat can you **infer** from Source B about why the Normans believed William should be king of England? Give **two** inferences, each supported by a detail from the source. (4 marks)",
          marks: 4,
          modelAnswer:
            "Source B suggests that the Normans wanted to show Harold as an **oath-breaker** whose kingship was not rightful. I can infer this because the caption says 'Harold made an oath to Duke William', so when Harold took the crown in 1066 he was breaking his promise to support William's claim. Source B also suggests that the Normans saw William's claim as **backed by God**. Harold's hands rest on boxes of holy relics, so breaking this oath was a sin, which let the Normans present the invasion as a just punishment — this fits with William fighting under a banner from the Pope. Finally, William is shown sitting on a throne while Harold stands before him, which suggests the Normans saw William as the superior lord and Harold as his man.",
          markScheme: [
            { point: "Inference 1: the Normans portrayed Harold as an oath-breaker / his kingship as illegitimate", keywords: ["oath-breaker", "broke", "promise", "oath", "not rightful", "illegitimate", "lied", "betrayed"] },
            { point: "Supports inference 1 with a detail from the source (the caption / the oath scene)", keywords: ["caption", "made an oath", "the words", "latin", "hand on", "swearing"] },
            { point: "Inference 2: the claim was presented as religious / God-backed, or William shown as superior lord", keywords: ["god", "sin", "religious", "holy", "church", "pope", "superior", "lord", "throne"] },
            { point: "Supports inference 2 with a detail from the source (relics / throne)", keywords: ["relics", "boxes", "holy relics", "throne", "sits", "watching", "stands"] },
          ],
          commonError: "Describing the picture (\"Harold has his hands on boxes\") without saying what it suggests.",
          difficulty: "core",
          guideRef: "sources-and-evidence",
          hints: ["What is Harold doing — and what did he do later in 1066?", "Why would swearing on *holy relics* matter so much in the 11th century?", "Start each inference with 'Source B suggests that…' then add 'I can tell this because…'"],
          strategy: "Make an inference",
        },
        {
          kind: "written",
          id: "historians-toolkit-p1-q08",
          question:
            "**Source C** — from the *Anglo-Saxon Chronicle* entry for 1087, the year William died. It was written by an English monk who says he had seen William and once lived at his court (adapted).\n\n> He was a very wise man and very powerful… He was gentle to good men who loved God, and stern beyond all measure to those who resisted his will… He had castles built, and poor men were hard oppressed.\n\nHow **useful** is Source C to a historian studying how William kept control of England? Use the content of the source **and** its provenance (Nature, Origin, Purpose). (6 marks)",
          marks: 6,
          modelAnswer:
            "Source C is useful because its content mentions two of William's main methods of control: he 'had castles built' and he was 'stern beyond all measure' to anyone who 'resisted his will', which fits with his crushing of rebellions such as the Harrying of the North. Its origin makes it more useful: the writer was English, lived at the time and says he had seen William at court, so he had first-hand knowledge. Its nature and purpose also help: it is an obituary judging William's whole reign, and it is balanced — it praises his wisdom and power as well as criticising his harshness — which makes it more trustworthy than pure praise or pure hatred. However, it has limits. It is a general judgement with no figures, names or dates, and it gives an English monk's view of a foreign conqueror, so it may stress oppression. A historian would need to cross-reference it with evidence such as the Domesday Book, which lists many northern villages as 'waste'. Overall, it is very useful for how English people experienced William's control, but it needs other sources for the detail.",
          markScheme: [
            { point: "Uses content: castles as a method of control", keywords: ["castles", "castle", "built"] },
            { point: "Uses content: harshness towards opponents/rebels, linked to own knowledge (e.g. Harrying of the North)", keywords: ["stern", "harsh", "resisted", "rebels", "rebellion", "harrying", "oppressed", "1069"] },
            { point: "Origin: contemporary English writer with first-hand knowledge of William", keywords: ["english", "monk", "at the time", "1087", "court", "first-hand", "firsthand", "saw him", "contemporary"] },
            { point: "Nature/purpose: an obituary/judgement that is balanced (praise and criticism), affecting reliability", keywords: ["obituary", "balanced", "praise", "praises", "both", "criticises", "purpose", "judgement"] },
            { point: "Limitation: general, no detail/figures, or one English perspective", keywords: ["limit", "limitation", "general", "no figures", "no detail", "one side", "biased", "english view", "only"] },
            { point: "Cross-references other evidence and reaches a supported judgement on usefulness", keywords: ["cross-reference", "domesday", "orderic", "other sources", "overall", "useful for", "judgement", "waste"] },
          ],
          commonError: "Saying 'It is a primary source so it is reliable' — or 'it is biased so it is useless' — without explaining how the provenance affects its usefulness for *this* question.",
          difficulty: "challenge",
          guideRef: "provenance-nop",
          hints: ["Start with content: which methods of control does the source mention?", "Origin: who wrote it, when, and how did he know William?", "Purpose: what kind of writing is an entry written the year someone died? Is it all praise or all blame?", "Finish with a limit and a judgement: useful *for what*?"],
          strategy: "Check the provenance (NOP)",
        },
        {
          kind: "written",
          id: "historians-toolkit-p1-q09",
          question: "Explain why revolution broke out in France in **1789**. In your answer, show how at least two causes were **linked**. (6 marks)",
          marks: 6,
          modelAnswer:
            "One long-term cause was the unfair **Estates system**. The Third Estate — around 97% of the population — paid most of the taxes, while the clergy and nobles enjoyed privileges and paid very little. This created deep resentment. A second cause was **economic**: the government was almost bankrupt, partly because of the cost of wars such as helping the Americans in their War of Independence. These two causes were linked, because the only way to fix the debt was to tax the privileged, and when the nobles refused, Louis XVI had to call the **Estates-General** in May 1789 — the first since 1614. A short-term cause made things worse: the poor harvest of 1788 sent bread prices soaring, so ordinary Parisians were hungry and angry. Enlightenment ideas about rights and the example of the American Revolution gave people the language to demand change. When the Third Estate declared itself the National Assembly and swore the Tennis Court Oath (June 1789), and Parisians stormed the Bastille on 14 July 1789, the crisis became a revolution. Overall, the debt crisis was the key link, because it forced the king to call the meeting that let all the other grievances explode.",
          markScheme: [
            { point: "Long-term social cause: unfair Estates system/privileges/taxes on the Third Estate", keywords: ["estates", "third estate", "privilege", "privileges", "nobles", "clergy", "unfair", "taxes"] },
            { point: "Economic cause: bankruptcy and war debts (e.g. American War of Independence)", keywords: ["bankrupt", "bankruptcy", "debt", "debts", "american", "war", "money"] },
            { point: "Short-term cause: bad harvest 1788 and high bread prices", keywords: ["harvest", "bread", "1788", "prices", "hungry", "food"] },
            { point: "Ideas/trigger: Enlightenment ideas, Estates-General May 1789, Tennis Court Oath, Bastille", keywords: ["enlightenment", "ideas", "estates-general", "estates general", "tennis court", "bastille", "14 july", "national assembly"] },
            { point: "Explicitly links two causes (e.g. debt forced the king to call the Estates-General)", keywords: ["linked", "because", "this meant", "led to", "forced", "made worse", "so"] },
            { point: "Reaches a supported judgement about the key cause or link", keywords: ["overall", "most important", "key", "main", "therefore", "conclusion"] },
          ],
          commonError: "Writing a list of causes with no links, or telling the story of 1789 without explaining *why*.",
          difficulty: "core",
          guideRef: "causation",
          hints: ["Sort causes into long-term (built up for years), short-term (1788–89) and trigger.", "Why did Louis XVI need to call the Estates-General at all?", "Use a linking phrase: 'This was made worse by…' or 'Because of this…'"],
          strategy: "Link the causes",
        },
        {
          kind: "mcq",
          id: "historians-toolkit-p1-q10",
          question:
            "**Interpretation 1** — written for this exercise.\n\n> Magna Carta was a failure. It solved nothing and was cancelled within weeks.\n\n**Interpretation 2** — written for this exercise.\n\n> Magna Carta was one of the most important documents in English history.\n\nWhich is the **best** explanation of how **both** interpretations can be supported by evidence?",
          options: [
            "One of the historians must have used fake sources, because only one interpretation can be right",
            "Interpretation 1 is a primary source and Interpretation 2 is a secondary source, so the second is more reliable",
            "Magna Carta gave everyone in England equal rights, so only Interpretation 2 can be supported",
            "They judge over different timescales: in 1215 the Pope annulled it within about ten weeks and civil war followed, but it was reissued and later became a symbol of the rule of law",
          ],
          answerIndex: 3,
          explanation:
            "The historians are asking different questions over different **timescales**. In the **short term** Magna Carta failed — Pope Innocent III annulled it in August 1215 and the First Barons' War began. In the **long term** it was reissued (1216, 1217, 1225) and became a symbol that the king is under the law. The claim that it gave everyone equal rights is a misconception: it mainly protected barons and 'free men', not the unfree villeins who were most of the population.",
          difficulty: "core",
          guideRef: "interpretations",
          hints: ["What happened to Magna Carta in the months after June 1215?", "What happened to it over the following centuries?", "Could 'failure' and 'important' both be true if you look at different time periods?"],
          strategy: "Consider the counter-argument",
        },
        {
          kind: "written",
          id: "historians-toolkit-p1-q11",
          question:
            "Using **significance criteria** (such as Remarkable, Resulting in change, Revealing), explain how significant the **Representation of the People Act (1918)** was for democracy in Britain. (4 marks)",
          marks: 4,
          modelAnswer:
            "The 1918 Act was very significant because it **resulted in change** on a huge scale: it gave the vote to all men over 21 and to women over 30 who met a property qualification, so the electorate roughly tripled, from about 7–8 million to about 21 million. It was **remarkable** because, for the first time, women — around 8 million of them — could vote in a general election, and another law that year allowed women to stand as MPs. However, it was also **revealing** of the limits of change: women under 30 and those without property were still left out, showing that many MPs still did not see women as men's equals. Equal voting at 21 only came in 1928. So the 1918 Act was a major turning point, but it was a big step rather than the finishing line.",
          markScheme: [
            { point: "Uses a criterion with evidence of the scale of change (electorate roughly tripled; men over 21)", keywords: ["tripled", "21 million", "million", "men over 21", "all men", "electorate", "resulting in change"] },
            { point: "Explains the change for women (first women voters over 30 / property qualification)", keywords: ["women over 30", "over 30", "first time", "property", "8 million", "remarkable", "women"] },
            { point: "Identifies a limitation/continuity (women under 30 excluded until 1928)", keywords: ["under 30", "1928", "still", "limit", "excluded", "not equal", "revealing"] },
            { point: "Reaches a supported judgement about how significant it was", keywords: ["overall", "very significant", "turning point", "step", "judgement", "so"] },
          ],
          commonError: "Saying the 1918 Act gave 'women the vote' — it gave the vote only to *some* women over 30.",
          difficulty: "challenge",
          guideRef: "change-continuity-significance",
          hints: ["Who could vote after 1918 who couldn't before — both men and women?", "Who was still left out, and when did that change?", "Name the criterion you are using in each sentence, then finish with a judgement."],
          strategy: "Judge significance",
        },
        {
          kind: "written",
          id: "historians-toolkit-p1-q12",
          question:
            "Write a **conclusion** for this essay: *\"Religion was the main reason Henry VIII broke with Rome.\" How far do you agree?* Your conclusion should reach a clear judgement and justify it. (4 marks)",
          marks: 4,
          modelAnswer:
            "Overall, I disagree that religion was the main reason. The most important reason was Henry's need for a male heir. Catherine of Aragon had not given him a surviving son, and when Pope Clement VII refused to annul the marriage — partly because Catherine's nephew, the Emperor Charles V, controlled Rome — Henry made himself Supreme Head of the Church of England in the Act of Supremacy (1534). Religion mattered less, because Henry kept most Catholic beliefs for the rest of his life, as the Six Articles of 1539 show. However, power and money became important once the break happened: the Dissolution of the Monasteries (1536–40) made the Crown much richer. So the need for an heir was the trigger, while power and money explain why the break lasted — religion was a consequence more than a cause.",
          markScheme: [
            { point: "Gives a clear judgement that directly answers 'how far' (agree/disagree/partly)", keywords: ["i disagree", "i agree", "overall", "partly", "to some extent", "not the main", "main reason"] },
            { point: "Identifies the most important factor with precise evidence (heir, annulment, Act of Supremacy 1534)", keywords: ["heir", "son", "annulment", "catherine", "pope", "1534", "act of supremacy", "anne boleyn"] },
            { point: "Explains why religion was more/less important, with evidence (e.g. Six Articles 1539)", keywords: ["six articles", "1539", "catholic", "beliefs", "protestant", "religion"] },
            { point: "Weighs another factor or explains links between factors (power, money, Dissolution)", keywords: ["money", "power", "monasteries", "dissolution", "wealth", "trigger", "link", "however"] },
          ],
          commonError: "A conclusion that just repeats the essay ('there were many reasons and they were all important') without a judgement.",
          difficulty: "core",
          guideRef: "writing-like-a-historian",
          hints: ["Start with your verdict in the first sentence.", "Name the factor you think mattered most, with a date.", "Explain *why* it outweighs religion — what evidence shows Henry stayed largely Catholic?"],
          strategy: "Weigh factors",
          solutions: [
            {
              label: "Argument: the heir crisis mattered most",
              steps: ["No surviving son and a Pope who would not annul the marriage.", "Henry broke with Rome to marry Anne Boleyn (1533) and get an heir.", "He stayed largely Catholic (Six Articles 1539), so religion was not the driver."],
            },
            {
              label: "Argument: power and money mattered most",
              steps: ["The Act of Supremacy (1534) gave Henry control of the Church.", "The Dissolution of the Monasteries (1536–40) brought huge wealth.", "These gains explain why Henry never went back, even after Anne Boleyn's execution."],
            },
          ],
        },
      ],
    },
    {
      id: "historians-toolkit-p2",
      title: "Practice Paper 2",
      questions: [
        {
          kind: "short",
          id: "historians-toolkit-p2-q01",
          question: "In which year did Parisians storm the **Bastille**, an event often seen as the start of the French Revolution?",
          answer: { type: "number", value: 1789, display: "1789" },
          traps: [
            { spec: { type: "number", value: 1793 }, feedback: "1793 is the year Louis XVI was executed and the Terror began. The Bastille fell four years earlier." },
            { spec: { type: "number", value: 1799 }, feedback: "1799 is when Napoleon seized power — the *end* of the revolutionary decade, not the start." },
          ],
          solution: ["The Bastille fell on **14 July 1789** — still celebrated as France's national day."],
          difficulty: "warmup",
          guideRef: "chronology",
          hints: ["It's the same year the Estates-General met."],
          strategy: "Put it in chronological order",
        },
        {
          kind: "short",
          id: "historians-toolkit-p2-q02",
          question:
            "William I gave land to his barons in return for loyalty and military service, and they in turn gave land to knights. What name do historians give to this system?",
          answer: { type: "text", accept: ["feudalism", "the feudal system", "feudal system", "feudal", "the feudal pyramid", "feudal pyramid"], display: "the feudal system" },
          traps: [
            { spec: { type: "text", accept: ["monarchy", "absolute monarchy"] }, feedback: "Monarchy is rule by a king or queen. The system of land in return for loyalty and service is the **feudal system**." },
          ],
          solution: ["Land in return for loyalty and service = the **feudal system** (feudalism).", "It tied every landholder to the king through an oath of fealty."],
          difficulty: "warmup",
          guideRef: "power-concepts",
          hints: ["It is often drawn as a pyramid with the king at the top."],
          strategy: "Use precise evidence",
        },
        {
          kind: "mcq",
          id: "historians-toolkit-p2-q03",
          question:
            "An anti-suffrage newspaper article from 1913 (constructed for this exercise) claims that \"only a handful of women truly want the vote\". What is the **best** way for a historian to test this claim?",
          options: [
            "Cross-reference it with other evidence, such as the size of suffrage marches and the membership of suffrage societies",
            "Accept it, because a newspaper from 1913 is a primary source",
            "Reject it, because all newspapers are biased",
            "Check whether the article uses long, educated words",
          ],
          answerIndex: 0,
          explanation:
            "**Cross-referencing** (corroboration) means checking a claim against other, independent evidence — here, huge rallies such as Women's Sunday in Hyde Park (1908) and the tens of thousands of members of suffrage societies would challenge it. 'Primary means reliable' is a classic mistake: an article from the time can still be wrong or one-sided. Rejecting every newspaper as biased throws away useful evidence instead of testing it.",
          difficulty: "warmup",
          guideRef: "provenance-nop",
          hints: ["How could you check whether 'only a handful' is true?"],
          strategy: "Cross-reference sources",
        },
        {
          kind: "short",
          id: "historians-toolkit-p2-q04",
          question:
            "In Mao's China, posters, songs, badges and statues presented Mao as a wise, almost god-like 'Great Helmsman'. What **three-word** term describes this worship-like promotion of one leader?",
          answer: { type: "text", accept: ["cult of personality", "personality cult", "cult of the personality", "cult of the leader", "leader cult"], display: "cult of personality" },
          traps: [
            { spec: { type: "text", accept: ["propaganda"] }, feedback: "Propaganda is the *tool*. The term for the leader-worship it creates is a **cult of personality**." },
            { spec: { type: "text", accept: ["totalitarianism", "totalitarian"] }, feedback: "Totalitarianism is about controlling every part of life. Worship of one leader is a **cult of personality**." },
          ],
          solution: ["A **cult of personality** uses propaganda to make a leader seem heroic, wise and beyond criticism.", "Mao, Hitler and Stalin all had one; Pol Pot, unusually, kept himself hidden."],
          difficulty: "core",
          guideRef: "power-concepts",
          hints: ["People were encouraged to treat Mao almost like a religious figure.", "It begins with 'cult of…'"],
          strategy: "Compare and contrast",
        },
        {
          kind: "short",
          id: "historians-toolkit-p2-q05",
          question:
            "*Quotations from Chairman Mao* (the 'Little Red Book') was published in 1964 and carried by millions of Chinese people during the Cultural Revolution (1966–76). For a historian studying the Cultural Revolution, is it a **primary** or **secondary** source?",
          answer: { type: "text", accept: ["primary", "primary source", "a primary source", "primary evidence"], display: "primary" },
          traps: [
            { spec: { type: "text", accept: ["secondary", "secondary source", "a secondary source"] }, feedback: "It was made and used *during* the period being studied, so it is **primary**. A secondary source is a later account, such as a modern textbook." },
          ],
          solution: ["It was produced at the time and used by people living through the Cultural Revolution → **primary**.", "Primary doesn't mean reliable: it is propaganda — useful evidence of what the Party wanted people to think."],
          difficulty: "core",
          guideRef: "sources-and-evidence",
          hints: ["Was it made *during* the period you are studying, or long afterwards?", "Who was using it, and when?"],
          strategy: "Check the provenance (NOP)",
        },
        {
          kind: "short",
          id: "historians-toolkit-p2-q06",
          question: "In which year did women in Britain finally win the vote on the **same terms as men** (from age 21)?",
          answer: { type: "number", value: 1928, display: "1928" },
          traps: [
            { spec: { type: "number", value: 1918 }, feedback: "1918 gave the vote only to women over 30 who met a property qualification. Equal voting came ten years later." },
            { spec: { type: "number", value: 1903 }, feedback: "1903 is when Emmeline Pankhurst founded the WSPU — the campaign, not the victory." },
          ],
          solution: ["The **Equal Franchise Act of 1928** gave women the vote at 21, on the same terms as men.", "This shows gradual change: 1918 was a big step, 1928 completed it."],
          difficulty: "core",
          guideRef: "change-continuity-significance",
          hints: ["It was not 1918 — that Act only included women over 30.", "It came a decade after 1918."],
          strategy: "Spot change and continuity",
        },
        {
          kind: "written",
          id: "historians-toolkit-p2-q07",
          question:
            "**Source A** — written for this exercise, based on facts about Singapore's 1959 general election, the first for a fully elected Legislative Assembly under self-government.\n\n> For the first time, voting was compulsory for every registered citizen. More than half a million people were on the register, and about nine in ten of them voted. Queues formed outside polling stations from early morning. Party leaflets and speeches were in English, Chinese, Malay and Tamil.\n\nWhat can you **infer** from Source A about politics in Singapore in 1959? Give **two** inferences, each supported by a detail from the source. (4 marks)",
          marks: 4,
          modelAnswer:
            "Source A suggests that politics in Singapore had become **mass politics** involving ordinary people, not a small elite. I can infer this because more than half a million people were registered and about nine in ten voted — a huge number compared with earlier elections. However, I must be careful: voting was compulsory, so the high turnout does not on its own prove enthusiasm, although the early-morning queues suggest real interest. Source A also suggests that Singapore was a **multi-ethnic, multilingual** society, and that parties needed support from every community to win. I can infer this because leaflets and speeches were in English, Chinese, Malay and Tamil.",
          markScheme: [
            { point: "Inference 1: politics now involved the mass of ordinary people / democracy had widened", keywords: ["mass", "ordinary people", "many people", "widened", "democracy", "large", "everyone", "participation"] },
            { point: "Supports inference 1 with a detail (half a million registered, nine in ten voted, queues)", keywords: ["half a million", "500,000", "nine in ten", "90%", "queues", "registered", "compulsory"] },
            { point: "Inference 2: multi-ethnic, multilingual society; parties had to appeal to all communities", keywords: ["multi-ethnic", "multiracial", "multilingual", "different communities", "races", "languages", "appeal to all", "diverse"] },
            { point: "Supports inference 2 with a detail (English, Chinese, Malay and Tamil) — or shows caution about what compulsory voting proves", keywords: ["english", "chinese", "malay", "tamil", "four languages", "careful", "compulsory", "does not prove"] },
          ],
          commonError: "Copying details from the source without saying what they *suggest*.",
          difficulty: "core",
          guideRef: "sources-and-evidence",
          hints: ["What do the voter numbers suggest about *who* took part in politics?", "Why would parties use four languages?", "Be careful with 'nine in ten voted' — what else in the source might explain it?"],
          strategy: "Make an inference",
        },
        {
          kind: "mcq",
          id: "historians-toolkit-p2-q08",
          question: "Which of these was a **consequence** of Hitler becoming Chancellor in January 1933, rather than a **cause** of it?",
          options: [
            "Bitterness about the Treaty of Versailles (1919)",
            "Mass unemployment after the Wall Street Crash (1929)",
            "The Enabling Act (March 1933)",
            "Weak coalition governments ruling by emergency decree (1930–32)",
          ],
          answerIndex: 2,
          explanation:
            "The **Enabling Act** was passed in March 1933, *after* Hitler became Chancellor on 30 January 1933 — it let his government make laws without the Reichstag, turning his appointment into a dictatorship. Mixing up a consequence with a cause is a common error; checking the dates is the quickest test. Versailles (long-term), the Depression (short-term crisis) and weak government by decree all came before January 1933 and helped him rise.",
          difficulty: "core",
          guideRef: "causation",
          hints: ["A cause must come *before* the event it explains.", "Check each date against January 1933."],
          strategy: "Put it in chronological order",
        },
        {
          kind: "written",
          id: "historians-toolkit-p2-q09",
          question:
            "**Source B** — a description, written for this exercise, of a real Nazi election poster from 1932. Its slogan read *Unsere letzte Hoffnung: Hitler* ('Our last hope: Hitler').\n\n> A crowd of grey, tired-looking men and women — workers, mothers, the unemployed — stare out of the poster. Above them, in large letters, is Hitler's name.\n\nHow **useful** is Source B to a historian studying why many Germans voted for the Nazis in 1932? (4 marks)",
          marks: 4,
          modelAnswer:
            "Source B is useful because its content shows who the Nazis were targeting: desperate, ordinary Germans — workers and the unemployed — during the Depression, when about 6 million were out of work. The slogan 'Our last hope' suggests the Nazis offered themselves as the answer to despair. However, its nature limits it: it is **propaganda** made by the Nazi Party for the 1932 elections, so its purpose was to persuade. It shows what the Nazis *wanted* voters to feel, not proof of why people actually voted. To test it, a historian would cross-reference it with election results (the Nazis won about 37% of the vote in July 1932) and with evidence about other reasons, such as fear of communism. Overall, it is useful for the Nazis' methods and message, but less useful on its own for voters' real motives.",
          markScheme: [
            { point: "Content: shows the Nazis targeting desperate/unemployed Germans during the Depression", keywords: ["unemployed", "depression", "desperate", "workers", "last hope", "despair", "jobs"] },
            { point: "Nature/purpose: propaganda designed to persuade — shows what Nazis wanted people to believe", keywords: ["propaganda", "persuade", "purpose", "wanted", "nazi party", "election", "biased"] },
            { point: "Limitation: does not prove why people actually voted / other reasons (e.g. fear of communism)", keywords: ["does not prove", "doesn't show", "actually", "why people voted", "communism", "other reasons", "limit"] },
            { point: "Cross-references or reaches a supported judgement on usefulness (e.g. 37% in July 1932)", keywords: ["cross-reference", "37%", "election results", "overall", "useful for", "1932", "judgement"] },
          ],
          commonError: "Writing 'It's propaganda so it's useless' instead of explaining what propaganda *is* useful for.",
          difficulty: "core",
          guideRef: "provenance-nop",
          hints: ["Who made the poster, and what did they want it to do?", "What does the choice of people in the crowd reveal about the Nazis' target voters?", "What other evidence would tell you how people actually voted?"],
          strategy: "Think about purpose",
        },
        {
          kind: "written",
          id: "historians-toolkit-p2-q10",
          question: "Explain why Mao's Communists won the support of many Chinese **peasants** by 1949. (6 marks)",
          marks: 6,
          modelAnswer:
            "One reason was **land reform**. In areas they controlled, the Communists took land from landlords and gave it to poor peasants, who made up the vast majority of China's people, so peasants had a direct reason to back them. A second reason was the **behaviour of the Red Army**. Soldiers were ordered to treat peasants with respect — paying for food and not stealing — which was very different from many Guomindang (GMD) troops and warlord armies. Third, the Communists won support as **patriotic fighters against Japan** (1937–45), using guerrilla warfare behind Japanese lines, while the GMD seemed to save its strength for fighting the Communists. These reasons were linked to the **weakness of the GMD**: its corruption, harsh conscription and runaway inflation in the late 1940s made the Communists look like the better choice. The legend of the Long March (1934–35), spread by Communist propaganda, also built an image of heroic leadership. Overall, land reform mattered most, because it changed peasants' lives directly and gave them a stake in a Communist victory.",
          markScheme: [
            { point: "Land reform: land taken from landlords and given to peasants", keywords: ["land reform", "land", "landlords", "gave land", "redistributed"] },
            { point: "Red Army discipline/respectful treatment of peasants", keywords: ["red army", "discipline", "respect", "paid for", "did not steal", "behaviour", "eight points"] },
            { point: "Resistance to Japan 1937–45 won patriotic support", keywords: ["japan", "japanese", "1937", "guerrilla", "patriotic", "invasion"] },
            { point: "Weakness/corruption of the Guomindang (inflation, conscription) as a linked reason", keywords: ["guomindang", "kuomintang", "gmd", "kmt", "chiang", "corrupt", "corruption", "inflation", "conscription"] },
            { point: "Explains HOW each reason won support and links reasons together", keywords: ["because", "this meant", "linked", "so", "made", "better choice", "compared"] },
            { point: "Supported judgement on the most important reason", keywords: ["overall", "most important", "main reason", "mattered most", "therefore"] },
          ],
          commonError: "Telling the story of the Long March in detail without explaining how it won peasant support.",
          difficulty: "core",
          guideRef: "causation",
          hints: ["What did most peasants want more than anything? Who owned the land?", "How did Communist soldiers behave compared with other armies?", "Who invaded China in 1937, and who seemed to fight back hardest?"],
          strategy: "Weigh factors",
        },
        {
          kind: "written",
          id: "historians-toolkit-p2-q11",
          question:
            "**Interpretation A** — written for this exercise.\n\n> Hitler won power through his own brilliant speeches and campaigns. By 1932 millions of Germans were voting for him.\n\n**Interpretation B** — written for this exercise.\n\n> Hitler did not win power — he was handed it. A small group of conservative politicians around President Hindenburg made him Chancellor in January 1933, believing they could control him.\n\nExplain why historians might reach these **different** interpretations. (4 marks)",
          marks: 4,
          modelAnswer:
            "The interpretations differ partly because they focus on **different evidence**. Interpretation A looks at Hitler's mass support: in July 1932 the Nazis won about 37% of the vote and became the largest party in the Reichstag, helped by his speeches, rallies and propaganda. Interpretation B looks at the backroom deals of January 1933, when Franz von Papen persuaded President Hindenburg to appoint Hitler, thinking the conservatives could 'tame' him. B can also point out that the Nazi vote actually fell to about 33% in November 1932. They also ask **different questions**: A asks why the Nazis became so popular, while B asks how Hitler actually became Chancellor. Historians also differ in how much they stress individuals versus wider forces and elites. Both are supported by real evidence, so a full explanation probably needs both: popularity made Hitler impossible to ignore, but the elites opened the door.",
          markScheme: [
            { point: "Explains the evidence behind A (votes, 37% in July 1932, speeches, propaganda)", keywords: ["37%", "votes", "largest party", "speeches", "rallies", "propaganda", "july 1932", "popular"] },
            { point: "Explains the evidence behind B (Papen, Hindenburg, January 1933 deal, vote fell in November 1932)", keywords: ["papen", "hindenburg", "deal", "backroom", "elites", "january 1933", "33%", "november 1932", "fell"] },
            { point: "Gives a reason interpretations differ: different questions/focus/values (individual vs elites)", keywords: ["different questions", "focus", "emphasise", "individual", "elites", "values", "selected", "different evidence"] },
            { point: "Shows both can be supported / reaches a balanced conclusion", keywords: ["both", "partly", "combined", "together", "both supported", "overall"] },
          ],
          commonError: "Saying 'they disagree because they have different opinions' without explaining which evidence each uses.",
          difficulty: "challenge",
          guideRef: "interpretations",
          hints: ["What evidence would you use to argue Hitler was popular?", "What happened behind closed doors in January 1933? And what happened to the Nazi vote in November 1932?", "Are the two historians even asking the same question?"],
          strategy: "Consider the counter-argument",
        },
        {
          kind: "written",
          id: "historians-toolkit-p2-q12",
          question:
            "\"**Charismatic leadership** was the most important reason dictators came to power in the 20th century.\" How far do you agree? Refer to **at least two** of Hitler, Mao and Pol Pot. (6 marks)",
          marks: 6,
          modelAnswer:
            "Charismatic leadership clearly mattered. Hitler was a powerful speaker, and Nazi propaganda built him up as the saviour Germany needed; Mao's leadership and the legend of the Long March gave the Communists a heroic image. However, charisma alone was not enough. Hitler had been speaking since the early 1920s, yet the Nazis won only 2.6% of the vote in 1928. What changed was the **crisis** of the Depression: with about 6 million unemployed by 1932, people turned to extremes. **Weak government** mattered too — Weimar coalitions collapsed and ruled by emergency decree, and in China the corrupt Guomindang lost support through inflation. Pol Pot shows the limits of charisma most clearly: he was secretive and almost unknown, yet the Khmer Rouge still took power in 1975 because of war, US bombing and Lon Nol's weak government. Overall, I only partly agree. Charisma helped leaders exploit their opportunities, but crises and weak governments created those opportunities — so they were more important.",
          markScheme: [
            { point: "Argument FOR charisma with precise evidence (Hitler's speeches/propaganda, Mao's Long March image)", keywords: ["speeches", "speaker", "propaganda", "long march", "charisma", "charismatic", "saviour", "leadership"] },
            { point: "Argument that crises mattered more, with evidence (Depression/6 million unemployed; war; US bombing)", keywords: ["depression", "unemployed", "6 million", "crisis", "war", "bombing", "japan", "2.6%"] },
            { point: "Argument that weak government mattered, with evidence (Weimar decrees, GMD corruption, Lon Nol)", keywords: ["weak government", "weimar", "coalition", "decree", "article 48", "guomindang", "gmd", "lon nol", "corrupt"] },
            { point: "Uses a counter-example or comparison across dictators (e.g. Pol Pot not charismatic)", keywords: ["pol pot", "secretive", "unknown", "whereas", "compared", "however", "unlike"] },
            { point: "Explains links between factors (crisis gave charisma its chance)", keywords: ["linked", "because", "opportunity", "exploit", "together", "without", "made"] },
            { point: "Reaches a clear, supported judgement on 'how far'", keywords: ["overall", "partly agree", "i agree", "i disagree", "to some extent", "more important", "judgement"] },
          ],
          commonError: "Writing three separate mini-stories about each dictator instead of weighing the factor in the question against others.",
          difficulty: "challenge",
          guideRef: "writing-like-a-historian",
          hints: ["First, find evidence that supports the statement — which leaders were powerful speakers or heroes?", "Then the counter-argument: what *else* had to happen first? Think crises and weak government.", "Was Pol Pot a charismatic leader? What does that suggest?", "End with a clear verdict: agree, disagree or partly — and why."],
          strategy: "Weigh factors",
          solutions: [
            {
              label: "Argument: charismatic leadership mattered most",
              steps: [
                "Crises happened in many countries, but not all produced dictators — the leader made the difference.",
                "Hitler's speeches and propaganda turned anger into votes (37% in July 1932).",
                "Mao's leadership and the Long March legend inspired loyalty that won the civil war.",
                "Judgement: crises created a chance, but only a skilled leader could seize it.",
              ],
            },
            {
              label: "Argument: crises and weak government mattered more",
              steps: [
                "Hitler won only 2.6% in 1928 — his charisma didn't work until the Depression.",
                "The GMD's corruption and Lon Nol's weak regime opened the door for Mao and Pol Pot.",
                "Pol Pot was secretive and barely known, yet still took power in 1975.",
                "Judgement: circumstances were more important than personality.",
              ],
            },
          ],
        },
      ],
    },
  ],

  // ============================= CHALLENGE ===================================
  challenge: [
    {
      kind: "short",
      id: "historians-toolkit-ch-q01",
      question:
        "Strictly speaking, centuries are counted from AD 1, and there was **no year 0**. So the 1st century ran from AD 1 to AD 100. Using this strict rule, in which century is the year **AD 1300**? (Answer like *15th*.)",
      answer: { type: "text", accept: ["13th", "13th century", "thirteenth", "thirteenth century", "13", "the 13th century", "the thirteenth century"], display: "13th century" },
      traps: [
        { spec: { type: "text", accept: ["14th", "14th century", "fourteenth", "fourteenth century", "14"] }, feedback: "That's the everyday answer — but by the strict rule, 1201–1300 is the 13th century, so 1300 is its **last** year. The 14th century starts in 1301." },
        { spec: { type: "text", accept: ["12th", "12th century", "twelfth", "12"] }, feedback: "Too early: the 12th century ends in AD 1200." },
      ],
      solution: [
        "1st century = 1–100, 2nd = 101–200 … so the Nth century ends in the year N × 100.",
        "The 13th century = 1201–**1300**, so 1300 is its final year.",
        "This is why purists said the new millennium began on 1 January **2001**, not 2000.",
      ],
      commonError: "Assuming every century starts in a year ending '00'.",
      difficulty: "challenge",
      guideRef: "chronology",
      hints: ["Write out the first two centuries in full: 1st = 1 to 100, 2nd = 101 to …?", "Which century ends in the year 1300?", "If the 1st century ends in 100, the 13th ends in …?"],
      strategy: "Put it in chronological order",
    },
    {
      kind: "written",
      id: "historians-toolkit-ch-q02",
      question:
        "**Source A** — Article 1 of the *Declaration of the Rights of Man and of the Citizen*, passed by France's National Assembly in August 1789.\n\n> Men are born and remain free and equal in rights.\n\nHow **useful** is Source A to a historian investigating whether the French Revolution brought **equality** to all French people? Use its content, its provenance **and** your own knowledge. (6 marks)",
      marks: 6,
      modelAnswer:
        "Source A is useful for showing the **ideals** of the Revolution. Its content declares that people are 'free and equal in rights', a dramatic break from the old system of privileges for the clergy and nobles, which had been abolished that same August. Its origin makes it important: it was an official declaration by the National Assembly, the revolution's own government, so it shows what the new leaders said they stood for. However, its nature and purpose limit it: it is a statement of principles meant to inspire and justify the revolution, not evidence of what actually happened. My own knowledge shows the reality was different. The 1791 constitution divided men into 'active' and 'passive' citizens, so poorer men could not vote; women were left out entirely, and Olympe de Gouges, who wrote a *Declaration of the Rights of Woman* in 1791, was executed in 1793; and slavery continued in France's colonies until 1794. Its own wording — 'Men' — hints at this. So Source A is very useful for the revolution's aims, but a historian must cross-reference it with laws and events to judge how far equality was achieved in practice.",
      markScheme: [
        { point: "Content: proclaims equality of rights, a break with the privileges of the old regime", keywords: ["equal", "equality", "rights", "privileges", "break", "free"] },
        { point: "Origin: official declaration by the National Assembly in 1789 — shows the leaders' stated aims", keywords: ["national assembly", "official", "1789", "government", "leaders", "aims", "ideals"] },
        { point: "Nature/purpose: a statement of principles to inspire/justify — not evidence of practice", keywords: ["purpose", "principles", "ideals", "inspire", "justify", "not reality", "not what happened", "propaganda"] },
        { point: "Own knowledge of inequality that continued (active/passive citizens, women excluded, slavery until 1794)", keywords: ["active", "passive", "women", "olympe de gouges", "slavery", "1794", "1791", "poor", "could not vote"] },
        { point: "Notices a limit in the source's own wording or omissions ('Men')", keywords: ["men", "wording", "only men", "does not mention", "omits", "left out"] },
        { point: "Supported judgement: useful for aims, less for reality, needs cross-referencing", keywords: ["overall", "useful for", "cross-reference", "aims", "reality", "practice", "judgement"] },
      ],
      commonError: "Assuming that because the Declaration *said* everyone was equal, everyone *was* equal.",
      difficulty: "challenge",
      guideRef: "provenance-nop",
      hints: ["What kind of document is this — a description of what happened, or a statement of what people hoped for?", "Who was left out of 'equality' in practice? Think about women, poorer men and the colonies.", "Look closely at the first word of the article.", "Useful *for what*? Give a two-part judgement."],
      strategy: "Check the provenance (NOP)",
    },
    {
      kind: "written",
      id: "historians-toolkit-ch-q03",
      question:
        "**Interpretation A** — from *The History of the World* by Sir Walter Raleigh, written in 1614 while he was imprisoned in the Tower of London by King James I (adapted).\n\n> If all the pictures and patterns of a merciless prince were lost in the world, they might all again be painted to the life out of the story of this king [Henry VIII].\n\n**Interpretation B** — written for this exercise, in the style of a modern historian.\n\n> Henry VIII was a capable, popular king who made the monarchy stronger and the English Church independent.\n\nExplain why these interpretations differ, and decide which is **more convincing**. (6 marks)",
      marks: 6,
      modelAnswer:
        "The interpretations differ partly because of **when and why** they were written. Raleigh wrote in 1614 as a prisoner of King James I, and his *History* warned about the dangers of cruel, all-powerful kings, so he had a reason to use Henry as an example of a tyrant. A modern historian is more likely to ask what Henry *achieved* for the state. They also **select different evidence**. A focuses on Henry's cruelty: he had two wives, Anne Boleyn (1536) and Catherine Howard (1542), executed, as well as advisers such as Thomas More (1535) and Thomas Cromwell (1540). B focuses on his achievements: the Act of Supremacy (1534) made him head of the Church of England, and the Dissolution of the Monasteries (1536–40) made the Crown much richer. In my judgement, both are partly convincing, but B needs a qualification: Henry *did* strengthen royal power, yet 'popular' is weak — the Pilgrimage of Grace (1536) was a large rebellion against his religious changes. Overall, B is more convincing on his political impact, while A is a fair warning about how he used that power.",
      markScheme: [
        { point: "Explains A's provenance: written 1614 by a prisoner of James I, with a purpose of warning against tyranny", keywords: ["1614", "prisoner", "tower", "james", "raleigh", "warn", "tyrant", "tyranny", "purpose"] },
        { point: "Explains B's focus: modern historians' questions about achievements/state-building", keywords: ["modern", "achievements", "stronger", "state", "different questions", "focus"] },
        { point: "Evidence supporting A (executions of wives/advisers: Anne Boleyn, Catherine Howard, More, Cromwell)", keywords: ["executed", "execution", "anne boleyn", "catherine howard", "thomas more", "cromwell", "cruel", "merciless"] },
        { point: "Evidence supporting B (Act of Supremacy 1534, Dissolution, royal wealth/power)", keywords: ["act of supremacy", "1534", "dissolution", "monasteries", "head of the church", "richer", "wealth", "power"] },
        { point: "Tests an interpretation against evidence (e.g. 'popular' vs Pilgrimage of Grace 1536)", keywords: ["pilgrimage of grace", "1536", "rebellion", "popular", "not popular", "tests", "challenges"] },
        { point: "Reaches a supported judgement on which is more convincing", keywords: ["more convincing", "overall", "judgement", "i think", "partly", "both"] },
      ],
      commonError: "Saying A is 'more reliable because it is older' — being closer in time doesn't make an interpretation more convincing.",
      difficulty: "challenge",
      guideRef: "interpretations",
      hints: ["Who was Raleigh's own king in 1614, and where was Raleigh at the time?", "What evidence would each writer pick to support their view?", "Test a key word: was Henry really 'popular'? Think of 1536.", "Which interpretation fits more of the evidence? Say why."],
      strategy: "Consider the counter-argument",
      solutions: [
        {
          label: "Argument: Interpretation A is more convincing",
          steps: ["Henry executed two wives and loyal ministers such as More and Cromwell.", "He crushed the Pilgrimage of Grace (1536) and executed its leaders.", "Raleigh had a purpose, but his view is well supported by evidence."],
        },
        {
          label: "Argument: Interpretation B is more convincing",
          steps: ["The Act of Supremacy (1534) permanently changed who controlled the English Church.", "Monastic wealth strengthened the Crown.", "Raleigh's purpose as James I's prisoner makes his view exaggerated."],
        },
      ],
    },
    {
      kind: "written",
      id: "historians-toolkit-ch-q04",
      question:
        "Historians sometimes ask **counterfactual** questions. *\"Without the First World War, would women over 30 still have won the vote in 1918?\"* Explain your answer. (6 marks)",
      marks: 6,
      modelAnswer:
        "On one side, the war seems essential. When it began in 1914 the WSPU suspended militant action and supported the war effort, and millions of women took on vital war work, for example in munitions factories, which undermined claims that women could not serve the nation. The war also forced Parliament to redraw the voting rules anyway: many soldiers serving abroad had lost the right to vote because of residence rules, so a new law was needed, and a Speaker's Conference in 1916–17 recommended including some women. On the other side, the campaign was already strong before 1914. The NUWSS, led by Millicent Fawcett, had tens of thousands of members and many MPs supported votes for women. The Labour Party backed it too. However, the Liberal government under Asquith had blocked change, and the Conciliation Bills failed in 1910–12. Overall, I think women would probably have won the vote eventually without the war, but **not by 1918**. The war was the trigger that gave the government both a reason and a face-saving way to act — while the long campaign explains why women were included at all.",
      markScheme: [
        { point: "War as a cause: women's war work changed attitudes (e.g. munitions)", keywords: ["war work", "munitions", "factories", "contribution", "changed attitudes", "jobs"] },
        { point: "War as a cause: franchise had to be redrawn for soldiers / Speaker's Conference 1916", keywords: ["soldiers", "residence", "redraw", "new law", "speaker's conference", "speakers conference", "1916", "1917"] },
        { point: "Pre-war campaign was strong (NUWSS, Fawcett, WSPU, support from MPs/Labour)", keywords: ["nuwss", "fawcett", "suffragists", "wspu", "pankhurst", "campaign", "labour", "mps"] },
        { point: "Pre-war obstacles (Asquith/Liberal government, failed Conciliation Bills 1910–12)", keywords: ["asquith", "liberal", "conciliation", "1910", "1912", "blocked", "opposed"] },
        { point: "Uses counterfactual reasoning properly (what the war changed vs what was already happening)", keywords: ["without the war", "would have", "eventually", "already", "probably", "trigger", "timing"] },
        { point: "Reaches a supported judgement", keywords: ["overall", "i think", "judgement", "not by 1918", "conclusion", "therefore"] },
      ],
      commonError: "Answering with certainty ('they definitely would have') — counterfactuals need probabilities, backed by evidence about trends before the event.",
      difficulty: "challenge",
      guideRef: "causation",
      hints: ["List what was already happening before 1914 — was support for women's suffrage growing?", "What did the war change — both for women and for the voting system itself?", "Why did *soldiers* need a new voting law?", "Use careful words: 'probably', 'eventually', 'not by 1918'."],
      strategy: "Avoid hindsight",
      solutions: [
        {
          label: "Argument: the war was essential for 1918",
          steps: ["The franchise had to be rewritten for soldiers anyway.", "Women's war work gave MPs a face-saving reason to change their minds.", "Before 1914 the Liberal government kept blocking reform."],
        },
        {
          label: "Argument: the vote was coming anyway",
          steps: ["Decades of campaigning had built huge support and many MP allies.", "Labour backed women's suffrage and was growing.", "The war sped things up but did not create the demand."],
        },
      ],
    },
    {
      kind: "written",
      id: "historians-toolkit-ch-q05",
      question:
        "Was **Magna Carta (1215)** a **turning point** in limiting the power of English monarchs, or part of a slower, **gradual** change? Explain your answer. (6 marks)",
      marks: 6,
      modelAnswer:
        "Magna Carta can be seen as a turning point because, for the first time, a king was forced in writing to accept that he was **under the law**. Clauses such as 39 — no free man to be imprisoned except by lawful judgement or the law of the land — set out the principle that the king could not act just as he pleased. However, in the short term little changed: Pope Innocent III annulled it within about ten weeks and civil war followed. It also protected mainly barons and free men, not the unfree villeins who were most of the population. It mattered because it was **reissued** in 1216, 1217 and 1225 and kept being referred to. Real limits on royal power came slowly through later steps: Simon de Montfort's Parliament (1265) included representatives of towns, and the Bill of Rights (1689) established that the monarch must rule with Parliament. So I judge Magna Carta to be the start of a gradual change rather than a sudden turning point: it was a seed whose importance grew over centuries.",
      markScheme: [
        { point: "Turning-point case: first time a king was forced in writing to be under the law (e.g. clause 39)", keywords: ["under the law", "clause 39", "first time", "rule of law", "in writing", "forced"] },
        { point: "Short-term limits: annulled by the Pope within weeks; civil war", keywords: ["annulled", "pope", "innocent", "weeks", "civil war", "barons' war", "failed"] },
        { point: "Continuity/limits of who benefited (barons and free men, not villeins)", keywords: ["barons", "free men", "villeins", "peasants", "not everyone", "most people"] },
        { point: "Gradual change: reissues (1216, 1217, 1225) and later developments (1265 Parliament, 1689 Bill of Rights)", keywords: ["reissued", "1225", "1216", "1265", "de montfort", "parliament", "1689", "bill of rights", "gradual"] },
        { point: "Explains rate/extent of change (sudden vs slow; seed vs immediate effect)", keywords: ["slow", "gradual", "sudden", "over centuries", "rate", "extent", "grew", "long term"] },
        { point: "Reaches a supported judgement", keywords: ["overall", "i judge", "turning point", "judgement", "therefore", "conclusion"] },
      ],
      commonError: "Claiming Magna Carta gave everyone rights or created democracy in 1215.",
      difficulty: "challenge",
      guideRef: "change-continuity-significance",
      hints: ["What did a turning point need to do — change things quickly and permanently?", "What happened to Magna Carta in the months after June 1215?", "Name at least one later step in limiting royal power (1265? 1689?).", "Decide: sudden break, or the first step of a long journey?"],
      strategy: "Spot change and continuity",
      solutions: [
        {
          label: "Argument: a turning point",
          steps: ["It set the principle that even the king is under the law.", "It was reissued and became a reference point for later struggles.", "Without that principle, later limits on kings would have had no foundation."],
        },
        {
          label: "Argument: part of gradual change",
          steps: ["It was annulled within ten weeks and did not stop civil war.", "It protected only barons and free men.", "Real limits came step by step: 1265, 1689 and beyond."],
        },
      ],
    },
    {
      kind: "written",
      id: "historians-toolkit-ch-q06",
      question:
        "**William I** (from 1066) and **Mao Zedong** (from 1949) both took power by force. Compare how each tried to make his rule seem **legitimate** (rightful). Explain one similarity and one difference. (6 marks)",
      marks: 6,
      modelAnswer:
        "William claimed legitimacy through **inheritance, promises and religion**. He said Edward the Confessor had promised him the throne and that Harold had sworn an oath to support him; he invaded under a papal banner and was crowned and anointed in Westminster Abbey on Christmas Day 1066, so his rule seemed approved by God. Mao claimed legitimacy through **ideology and 'the people'**. He proclaimed the People's Republic on 1 October 1949, presented the Communist Party as the voice of workers and peasants, and used land reform and propaganda to show the revolution served ordinary people; later, a cult of personality presented him as China's wise leader. One **similarity** is that both combined claims of rightful authority with force: William built castles and carried out the Harrying of the North, while Mao's regime used violent campaigns against landlords and opponents. One **difference** is the source of legitimacy: William looked upwards to God and royal blood, whereas Mao looked to the people and to Marxist ideas — and he rejected the idea of kings altogether. Overall, both understood that force could win power, but only legitimacy could keep it.",
      markScheme: [
        { point: "William's claims: Edward's promise, Harold's oath, papal banner", keywords: ["promise", "edward", "oath", "harold", "pope", "papal", "banner"] },
        { point: "William's religious legitimacy: coronation/anointing at Westminster Abbey, Christmas Day 1066", keywords: ["coronation", "crowned", "westminster", "christmas", "1066", "anointed", "god", "church"] },
        { point: "Mao's claims: ideology, the people, proclaiming the People's Republic 1949, land reform, propaganda/cult of personality", keywords: ["ideology", "communism", "communist", "people", "peasants", "1949", "land reform", "propaganda", "cult of personality"] },
        { point: "Similarity explained (both mixed legitimacy with force/fear)", keywords: ["similarity", "both", "force", "castles", "harrying", "violence", "terror", "fear"] },
        { point: "Difference explained (God/blood vs people/ideology)", keywords: ["difference", "whereas", "however", "god", "blood", "inheritance", "the people", "ideology", "unlike"] },
        { point: "Supported overall comparison/judgement", keywords: ["overall", "both understood", "judgement", "conclusion", "therefore"] },
      ],
      commonError: "Describing each ruler separately without making a direct comparison ('both…', 'whereas…').",
      difficulty: "challenge",
      guideRef: "power-concepts",
      hints: ["For William: what arguments did he make *before* the invasion, and what ceremony followed his victory?", "For Mao: in whose name did the Communists say they ruled?", "Use comparison words: 'Both…', 'whereas…', 'unlike…'.", "Did either rely *only* on legitimacy? What else did they use?"],
      strategy: "Compare and contrast",
    },
    {
      kind: "written",
      id: "historians-toolkit-ch-q07",
      question:
        "A student wrote this conclusion to the essay *\"How far was the Treaty of Versailles the main reason Hitler came to power?\"*\n\n> In conclusion, there were lots of reasons why Hitler came to power, such as the Treaty of Versailles, the Depression, propaganda and the SA. They were all important. Hitler became Chancellor in 1933.\n\nIdentify **two** weaknesses in this conclusion, then write an **improved** conclusion. (4 marks)",
      marks: 4,
      modelAnswer:
        "**Weakness 1:** it sits on the fence — 'they were all important' gives no judgement, so it never answers 'how far'. **Weakness 2:** it is a list; it does not explain which factor mattered most or how the factors were linked, and the last sentence is just a fact. **Improved conclusion:** Overall, I disagree that the Treaty of Versailles was the main reason. It created long-term resentment, but in 1928, nine years after Versailles, the Nazis won only 2.6% of the vote. What turned resentment into mass support was the Depression: by 1932 about 6 million Germans were unemployed and the Nazis became the largest party. Versailles was the fuel, but the Depression was the spark — and without it, Hitler would probably have stayed on the fringes.",
      markScheme: [
        { point: "Identifies weakness: no judgement / sits on the fence", keywords: ["no judgement", "fence", "all important", "doesn't answer", "does not answer", "how far", "no verdict"] },
        { point: "Identifies weakness: a list with no explanation of links or weighting; ends on a fact", keywords: ["list", "no explanation", "no links", "doesn't explain", "description", "fact", "not weighed"] },
        { point: "Improved conclusion gives a clear judgement on Versailles", keywords: ["i disagree", "i agree", "overall", "partly", "main reason", "not the main"] },
        { point: "Justifies the judgement with precise evidence and links (e.g. 2.6% in 1928; Depression, 6 million unemployed)", keywords: ["2.6%", "1928", "depression", "6 million", "unemployed", "largest party", "fuel", "spark", "linked"] },
      ],
      commonError: "Improving the conclusion by adding *more* factors instead of a judgement.",
      difficulty: "challenge",
      guideRef: "writing-like-a-historian",
      hints: ["Does the student ever say *how far* Versailles was the main reason?", "Is the student explaining or listing?", "For your version: if Versailles was so important, why did so few Germans vote Nazi in 1928?"],
      strategy: "Weigh factors",
    },
    {
      kind: "written",
      id: "historians-toolkit-ch-q08",
      question:
        "**Source A** — written for this exercise, in the style of an official Chinese newspaper report from 1958, during the Great Leap Forward.\n\n> Our commune has achieved a record harvest — many times greater than last year! Thanks to the Great Leap Forward, the granaries are overflowing.\n\n**Source B** — written for this exercise, based on many survivors' memories later collected by historians.\n\n> By 1960 there was almost nothing left to eat in our village. Officials had reported huge harvests, so the state took most of our grain. Nobody dared to say the figures were false.\n\nHow far does Source B **challenge** Source A? Use the content **and** provenance of both sources. (4 marks)",
      marks: 4,
      modelAnswer:
        "Source B strongly challenges Source A's content. A claims the granaries were 'overflowing', while B describes a village with 'almost nothing left to eat' by 1960. B also **explains** why A might be false: officials exaggerated harvests because they were afraid to report failure, and the state then took grain based on those false figures. The provenance helps us decide between them. Source A is in the style of official propaganda, whose purpose was to show the Great Leap Forward succeeding, so it is likely to exaggerate. Source B is based on memories recorded later, which could be affected by time, but it is drawn from many survivors' accounts that agree with each other, and it fits historians' estimates that the famine of 1959–61 killed tens of millions of people (estimates range from about 15 to over 40 million). So Source B challenges Source A almost completely about what happened — although Source A remains useful as evidence of what the Party wanted people to believe.",
      markScheme: [
        { point: "Content: B contradicts A's claim of plenty (overflowing granaries vs nothing to eat)", keywords: ["overflowing", "nothing to eat", "contradicts", "challenges", "hunger", "famine", "record harvest"] },
        { point: "B explains why A may be false (exaggerated figures, fear, grain taken by the state)", keywords: ["exaggerated", "false figures", "afraid", "fear", "dared", "took grain", "reported"] },
        { point: "Evaluates provenance of both (A propaganda purpose; B later memories but many corroborating accounts)", keywords: ["propaganda", "purpose", "official", "memories", "later", "many survivors", "corroborate", "agree"] },
        { point: "Supported judgement on how far B challenges A, possibly noting A's remaining usefulness", keywords: ["overall", "almost completely", "strongly", "how far", "still useful", "what the party wanted", "judgement", "tens of millions"] },
      ],
      commonError: "Deciding that Source B must be unreliable because memories are 'just opinions' — when many independent memories agree, they corroborate each other.",
      difficulty: "challenge",
      guideRef: "sources-and-evidence",
      hints: ["Put the two claims side by side: what does each say about food?", "Does Source B help explain *why* Source A said what it said?", "Who produced each source, and why? How could memories collected from *many* people be checked?", "Decide: does B challenge A a little, a lot, or completely?"],
      strategy: "Cross-reference sources",
    },
  ],
};
