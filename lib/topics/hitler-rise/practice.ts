import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // =========================================================================
  // QUICK-CHECK QUIZ (10)
  // =========================================================================
  quiz: [
    {
      kind: "mcq",
      id: "hitler-rise-quiz-q01",
      question: "What happened in Germany on **9 November 1918**?",
      options: [
        "The armistice was signed and the fighting on the Western Front stopped",
        "Kaiser Wilhelm II abdicated and Germany was declared a republic",
        "The Treaty of Versailles was signed in the Hall of Mirrors",
        "Hitler launched the Munich (Beer Hall) Putsch",
      ],
      answerIndex: 1,
      explanation:
        "On 9 November 1918 the Kaiser **abdicated** and a republic was proclaimed in Berlin. The armistice is the tempting answer, but it came two days later, on **11 November 1918**. The Munich Putsch also happened on 8–9 November, but in **1923**, which is why Nazis later treated 9 November as a special date.",
      difficulty: "warmup",
      guideRef: "weimar-republic",
      hints: ["The armistice date is 11 November. What had to happen *before* Germany could make peace as a new state?"],
      strategy: "Put it in chronological order",
    },
    {
      kind: "short",
      id: "hitler-rise-quiz-q02",
      question:
        "Under the Treaty of Versailles, Germany had to give a strip of land to the new state of Poland. It cut East Prussia off from the rest of Germany. What was this strip of land called?",
      answer: {
        type: "text",
        accept: ["Polish Corridor", "the Polish Corridor", "Polish corridor", "corridor", "the corridor", "West Prussia", "Danzig corridor"],
        display: "The Polish Corridor",
      },
      traps: [
        { spec: { type: "text", accept: ["Alsace-Lorraine", "Alsace Lorraine", "Alsace", "Lorraine"] }, feedback: "Alsace-Lorraine went back to France, in the west. Which land went to Poland, in the east?" },
        { spec: { type: "text", accept: ["Danzig", "Gdansk"] }, feedback: "Danzig became a Free City run by the League of Nations. The strip of land around it had a different name." },
      ],
      solution: [
        "Versailles recreated Poland and gave it a route to the sea.",
        "This strip of land, the **Polish Corridor**, split East Prussia from the rest of Germany, which angered many Germans.",
      ],
      difficulty: "warmup",
      guideRef: "treaty-of-versailles",
      hints: ["Think about the L in LAMB (Land): which new country in the east gained German land?"],
      strategy: "Use precise evidence",
    },
    {
      kind: "mcq",
      id: "hitler-rise-quiz-q03",
      question: "Why did the German government print huge amounts of money in 1923?",
      options: [
        "To pay back the American loans of the Dawes Plan",
        "To pay for a secret rebuilding of the German army",
        "To keep paying workers in the Ruhr who were on strike against the French occupation, and to cover its debts",
        "Because the Wall Street Crash had wiped out the value of German banks",
      ],
      answerIndex: 2,
      explanation:
        "When France and Belgium occupied the Ruhr in January 1923, the government told workers to use **passive resistance** (strike) and kept paying them. With little tax coming in, it printed money, causing **hyperinflation**. The Dawes Plan is a tempting distractor, but it came in **1924**, as part of the *solution*, and the Wall Street Crash came even later, in 1929.",
      difficulty: "core",
      guideRef: "crises-1919-1923",
      hints: [
        "Check the dates of each option: which ones happened *after* 1923?",
        "The crisis started when foreign troops arrived in Germany's main industrial region in January 1923.",
        "If workers stop working but the government keeps paying them, where does the money come from?",
      ],
      strategy: "Link the causes",
    },
    {
      kind: "short",
      id: "hitler-rise-quiz-q04",
      question: "In which German city did Hitler launch his failed Beer Hall Putsch in November 1923?",
      answer: { type: "text", accept: ["Munich", "München", "Munchen", "Muenchen"], display: "Munich" },
      traps: [
        { spec: { type: "text", accept: ["Berlin"] }, feedback: "Berlin was the capital Hitler hoped to march on later. Where did the putsch actually start, in a beer hall in Bavaria?" },
        { spec: { type: "text", accept: ["Weimar"] }, feedback: "Weimar is where the constitution was written in 1919. The putsch began in Bavaria's capital." },
      ],
      solution: [
        "The putsch began in a beer hall in **Munich**, the capital of Bavaria, on 8 November 1923.",
        "It is also called the **Munich Putsch**.",
      ],
      difficulty: "warmup",
      guideRef: "early-nazi-party",
      hints: ["Its other name is the ______ Putsch, after the capital of Bavaria."],
    },
    {
      kind: "mcq",
      id: "hitler-rise-quiz-q05",
      question: "Why do historians say that Germany's recovery in the 'Golden Years' of 1924–29 was **fragile**?",
      options: [
        "It depended heavily on short-term loans from American banks, which could be called back",
        "The Nazis were part of the government and blocked reforms",
        "Reparations had been cancelled, so Germany had no reason to stay friendly with France",
        "Stresemann had taken Germany out of the League of Nations",
      ],
      answerIndex: 0,
      explanation:
        "Under the **Dawes Plan (1924)** Germany borrowed heavily from the USA. That money could be **recalled**, and after the Wall Street Crash in 1929 it was. The other options are false: the Nazis won just 2.6% in 1928 and were not in government, reparations were reduced (Young Plan, 1929) but not cancelled, and Germany *joined* the League in 1926.",
      difficulty: "core",
      guideRef: "golden-years-and-depression",
      hints: [
        "'Fragile' means it could break easily. What was the recovery built on?",
        "Where did much of the money for new factories and jobs come from after 1924?",
        "What could happen if the lender suddenly needed its money back?",
      ],
      strategy: "Long-term vs short-term causes",
    },
    {
      kind: "short",
      id: "hitler-rise-quiz-q06",
      question: "In which year did the Nazis **first** become the largest party in the Reichstag?",
      answer: { type: "number", value: 1932 },
      traps: [
        { spec: { type: "number", value: 1933 }, feedback: "1933 is when Hitler became Chancellor. The Nazis were already the largest party before that. Which election?" },
        { spec: { type: "number", value: 1930 }, feedback: "In September 1930 the Nazis jumped to 18% and became the *second*-largest party. When did they become the largest?" },
      ],
      solution: [
        "In the **July 1932** election the Nazis won 37.3% of the vote and 230 seats.",
        "That made them the largest party, though still short of a majority.",
      ],
      commonError: "Confusing the year the Nazis became the largest party (1932) with the year Hitler became Chancellor (1933).",
      difficulty: "core",
      guideRef: "road-to-chancellor",
      hints: ["The Nazis were the largest party *before* Hitler was appointed in January 1933.", "There were two Reichstag elections in that year, in July and November."],
      strategy: "Put it in chronological order",
    },
    {
      kind: "written",
      id: "hitler-rise-quiz-q07",
      question:
        "Explain how the **Spartacist uprising (1919)** and the **Kapp Putsch (1920)** show that the Weimar Republic faced threats from both the left and the right. (4 marks)",
      marks: 4,
      modelAnswer:
        "The Spartacist uprising of January 1919 was a threat from the **left**. The Spartacists, led by Rosa Luxemburg and Karl Liebknecht, were communists who wanted a revolution like Russia's, so they wanted to replace the Republic with workers' councils. The government only defeated them by using the Freikorps.\n\nThe Kapp Putsch of March 1920 was a threat from the **right**. Wolfgang Kapp and Freikorps troops took over Berlin because they hated the Treaty of Versailles and wanted a strong nationalist government. The army refused to fire on them, and the putsch was only defeated by a general strike of workers.\n\nTogether they show the Republic was attacked from both sides and depended on unreliable allies to survive.",
      markScheme: [
        { point: "Identifies the Spartacists as a left-wing / communist threat", keywords: ["left", "communist", "communists", "spartacist", "luxemburg", "liebknecht", "revolution", "russia"] },
        { point: "Explains what the Spartacists wanted or how they were defeated (Freikorps)", keywords: ["freikorps", "workers' councils", "councils", "crushed", "overthrow", "1919"] },
        { point: "Identifies the Kapp Putsch as a right-wing / nationalist threat", keywords: ["right", "right-wing", "nationalist", "kapp", "freikorps", "versailles", "army"] },
        { point: "Explains how the Kapp Putsch was defeated (general strike, army would not act) and links to the Republic's weakness", keywords: ["general strike", "strike", "workers", "army refused", "would not", "weak", "unreliable", "both sides"] },
      ],
      commonError: "Mixing up the sides: the Spartacists were left-wing communists, while Kapp and the Freikorps were right-wing nationalists.",
      difficulty: "core",
      guideRef: "crises-1919-1923",
      hints: [
        "Sort them first: which group was communist and which was nationalist?",
        "For each, say what they wanted and how it was stopped.",
        "Who stopped the Kapp Putsch, the army or ordinary workers? What does that tell you about the army's loyalty?",
      ],
      strategy: "Compare and contrast",
    },
    {
      kind: "mcq",
      id: "hitler-rise-quiz-q08",
      question: "Which list puts these events in the correct **chronological order**?",
      options: [
        "Enabling Act → Reichstag Fire → death of Hindenburg → Night of the Long Knives",
        "Reichstag Fire → Night of the Long Knives → Enabling Act → death of Hindenburg",
        "Night of the Long Knives → Reichstag Fire → Enabling Act → death of Hindenburg",
        "Reichstag Fire → Enabling Act → Night of the Long Knives → death of Hindenburg",
      ],
      answerIndex: 3,
      explanation:
        "Reichstag Fire (**27 February 1933**) → Enabling Act (**23 March 1933**) → Night of the Long Knives (**30 June 1934**) → death of Hindenburg (**2 August 1934**). A common slip is putting the Enabling Act first, but Hitler used the fire and the emergency decree that followed to create the atmosphere in which the Enabling Act was passed.",
      difficulty: "core",
      guideRef: "creating-a-dictatorship",
      hints: [
        "Two of these happened in 1933 and two in 1934.",
        "Hitler used the fire to whip up fear of communism before the vote on the Enabling Act.",
        "Hindenburg's death allowed Hitler to become Führer, the final step.",
      ],
      strategy: "Put it in chronological order",
    },
    {
      kind: "short",
      id: "hitler-rise-quiz-q09",
      question: "After President Hindenburg died in August 1934, Hitler combined the posts of Chancellor and President. What title did he then use?",
      answer: {
        type: "text",
        accept: ["Führer", "Fuhrer", "Fuehrer", "the Führer", "the Fuhrer", "Der Führer", "Der Fuhrer", "Führer und Reichskanzler", "Leader", "the Leader"],
        display: "Führer (leader)",
      },
      traps: [
        { spec: { type: "text", accept: ["Kaiser", "Emperor"] }, feedback: "There was no Kaiser after 1918. Hitler chose a new title meaning 'leader'." },
        { spec: { type: "text", accept: ["President", "Reichspräsident", "Reichsprasident"] }, feedback: "He took over the President's powers, but he did not use that title. Which word, meaning 'leader', did he use?" },
      ],
      solution: [
        "Hitler merged the two offices and called himself **Führer** (leader).",
        "The army then swore an oath of loyalty to Hitler personally.",
      ],
      difficulty: "core",
      guideRef: "creating-a-dictatorship",
      hints: ["It is a German word.", "It simply means 'leader'."],
    },
    {
      kind: "written",
      id: "hitler-rise-quiz-q10",
      question:
        "The Term 2 enquiry names three types of cause: **crises**, **weakness of government** and **charismatic leadership**. Give one example of each from Hitler's rise to power and explain briefly how it helped him. (3 marks)",
      marks: 3,
      modelAnswer:
        "**Crisis:** the Great Depression left about 6 million Germans unemployed by 1932, so desperate voters turned to extreme parties like the Nazis, who promised work and bread.\n\n**Weakness of government:** proportional representation meant no party had a majority, so coalitions kept collapsing and from 1930 Chancellors ruled using Article 48, making democracy look useless.\n\n**Charismatic leadership:** Hitler was a powerful speaker, and with Goebbels' propaganda he presented himself as a strong saviour who would unite Germany, which won over millions of voters.",
      markScheme: [
        { point: "A crisis (e.g. Depression, hyperinflation, Versailles) with how it helped Hitler", keywords: ["depression", "unemployment", "unemployed", "hyperinflation", "versailles", "wall street", "crash", "desperate"] },
        { point: "A weakness of government (e.g. PR, coalitions, Article 48, elites' deal) with how it helped Hitler", keywords: ["proportional representation", "coalition", "coalitions", "article 48", "decree", "papen", "hindenburg", "weak", "unstable"] },
        { point: "An example of Hitler's leadership (speeches, propaganda, organisation) with how it helped him", keywords: ["speaker", "speeches", "speech", "propaganda", "goebbels", "rallies", "charismatic", "leader", "saviour"] },
      ],
      commonError: "Naming three factors without saying *how* each one helped Hitler.",
      difficulty: "core",
      guideRef: "why-hitler-rose",
      hints: [
        "Pick one event that made life hard for Germans, one feature of the Weimar system, and one thing about Hitler himself.",
        "For each, add 'which helped Hitler because…'.",
      ],
      strategy: "Weigh factors",
    },
  ],

  // =========================================================================
  // PRACTICE PAPERS 1–2
  // =========================================================================
  papers: [
    {
      id: "hitler-rise-p1",
      title: "Practice Paper 1",
      questions: [
        {
          kind: "short",
          id: "hitler-rise-p1-q01",
          question: "In which year was the Weimar constitution drawn up, creating Germany's new democracy?",
          answer: { type: "number", value: 1919 },
          traps: [
            { spec: { type: "number", value: 1918 }, feedback: "1918 is when the war ended and the Kaiser abdicated. The new constitution was agreed the following year." },
            { spec: { type: "number", value: 1933 }, feedback: "1933 is when Hitler became Chancellor, the beginning of the end for the Weimar constitution, not its start." },
          ],
          solution: [
            "Elections for a National Assembly were held in **January 1919**.",
            "It met in Weimar and the constitution was agreed in the summer of **1919**.",
          ],
          difficulty: "warmup",
          guideRef: "weimar-republic",
          hints: ["It came in the year after the armistice of 11 November 1918."],
        },
        {
          kind: "short",
          id: "hitler-rise-p1-q02",
          question: "The 'war guilt clause' of the Treaty of Versailles forced Germany to accept the blame for the war. Give the **number** of this article.",
          answer: { type: "text", accept: ["231", "Article 231", "Art 231", "Art. 231", "clause 231"], display: "Article 231" },
          traps: [
            { spec: { type: "text", accept: ["48", "Article 48", "Art 48"] }, feedback: "Article 48 is from the Weimar constitution: the President's emergency powers. The war guilt clause is in the Treaty." },
          ],
          solution: [
            "**Article 231** made Germany accept responsibility for the war's loss and damage.",
            "It is the B (Blame) in LAMB, and it was the legal basis for reparations.",
          ],
          difficulty: "warmup",
          guideRef: "treaty-of-versailles",
          hints: ["It is a three-digit number, the 'B' for Blame in LAMB."],
        },
        {
          kind: "short",
          id: "hitler-rise-p1-q03",
          question: "In 1920 the German Workers' Party changed its name. What was its new name? (Give the full name or its initials.)",
          answer: {
            type: "text",
            accept: [
              "NSDAP",
              "National Socialist German Workers' Party",
              "National Socialist German Workers Party",
              "Nationalsozialistische Deutsche Arbeiterpartei",
              "Nazi Party",
              "the Nazi Party",
              "Nazis",
              "the Nazis",
              "National Socialists",
              "National Socialist Party",
            ],
            display: "NSDAP — the National Socialist German Workers' Party (Nazi Party)",
          },
          traps: [
            { spec: { type: "text", accept: ["DAP", "German Workers' Party", "German Workers Party"] }, feedback: "That was its name when Hitler joined in 1919. Two words were added to the front in 1920." },
          ],
          solution: [
            "In February 1920 the DAP became the **National Socialist German Workers' Party (NSDAP)**.",
            "'Nazi' is a short form of the German word for National Socialist.",
          ],
          difficulty: "warmup",
          guideRef: "early-nazi-party",
          hints: ["'Nazi' is short for the first word of the new name."],
        },
        {
          kind: "mcq",
          id: "hitler-rise-p1-q04",
          question: "Why did French and Belgian troops occupy the **Ruhr** in January 1923?",
          options: [
            "To crush a communist rising like the Spartacist revolt",
            "To punish Germany for the Munich Putsch",
            "Because Germany had failed to pay a reparations instalment, so they took goods such as coal instead",
            "To enforce the demilitarisation of the Rhineland",
          ],
          answerIndex: 2,
          explanation:
            "Germany fell behind with **reparations** payments, so France and Belgium sent troops to take coal and goods from the Ruhr, Germany's main industrial area. The Rhineland option is a true fact about Versailles, but it does not explain *this* invasion. The Munich Putsch came later, in November 1923, so it cannot be the cause.",
          difficulty: "core",
          guideRef: "crises-1919-1923",
          hints: [
            "Check the chronology: which option happened *after* January 1923?",
            "Think about the M in LAMB (Money).",
            "The Ruhr was full of coal mines and factories. What did France want from it?",
          ],
          strategy: "Avoid hindsight",
        },
        {
          kind: "short",
          id: "hitler-rise-p1-q05",
          question:
            "Which 1924 agreement, named after an American banker, reorganised Germany's reparations payments and brought in large American loans? Give its name.",
          answer: { type: "text", accept: ["Dawes Plan", "the Dawes Plan", "Dawes", "Dawes Plan 1924"], display: "The Dawes Plan" },
          traps: [
            { spec: { type: "text", accept: ["Young Plan", "the Young Plan", "Young"] }, feedback: "The Young Plan came later, in 1929, and reduced the total. Which plan came first, in 1924?" },
            { spec: { type: "text", accept: ["Locarno", "Locarno Treaties", "Locarno Pact", "Treaty of Locarno"] }, feedback: "Locarno (1925) was about Germany's borders with France and Belgium, not money." },
          ],
          solution: [
            "The **Dawes Plan (1924)**, worked out by the American Charles Dawes, spread reparations payments out.",
            "It also arranged loans of about 800 million gold marks from the USA, which helped fund the recovery.",
          ],
          difficulty: "core",
          guideRef: "golden-years-and-depression",
          hints: ["There were two plans named after Americans: one in 1924 and one in 1929.", "The 1924 plan's name begins with D."],
        },
        {
          kind: "written",
          id: "hitler-rise-p1-q06",
          question:
            "**Source A** — a description (written for this exercise) of a well-known photograph taken in Germany in 1923.\n\n> Several children are playing in a street. They are stacking thick bundles of banknotes like building blocks, making towers almost as tall as themselves. Nobody seems to be guarding the money.\n\nWhat can you infer from Source A about the effects of hyperinflation in 1923? Use the source to support your answer. (3 marks)",
          marks: 3,
          modelAnswer:
            "I can infer that German money had become almost **worthless** by 1923. The children are using bundles of banknotes as toys, and nobody is guarding them, which suggests the notes would not buy anything useful. I can also infer that people needed **enormous quantities** of notes, because the bundles are so thick and there are so many of them; prices had risen so fast that the government was printing more and more money. This suggests that anyone with savings in the bank would have been ruined, because their money had lost its value, which helps explain why many middle-class Germans lost faith in the Republic.",
          markScheme: [
            { point: "Inference that money had become worthless / lost its value", keywords: ["worthless", "no value", "lost its value", "useless", "nothing", "valueless"] },
            { point: "Supports the inference with a detail from the source (toys, not guarded, bundles)", keywords: ["toys", "playing", "building blocks", "towers", "not guarded", "nobody", "bundles", "stacking"] },
            { point: "A further inference about wider effects (printing money, savings wiped out, loss of faith)", keywords: ["savings", "printing", "printed", "prices", "middle class", "ruined", "faith", "trust"] },
          ],
          commonError: "Just describing the photograph ('children are playing with money') instead of saying what it *suggests*.",
          difficulty: "core",
          guideRef: "crises-1919-1923",
          hints: [
            "Ask: why would anyone let children play with money?",
            "Use the phrase 'This suggests that…' to move from what you see to what it means.",
            "Think about who would be hurt most if money became worthless: people with debts or people with savings?",
          ],
          strategy: "Make an inference",
        },
        {
          kind: "short",
          id: "hitler-rise-p1-q07",
          question: "In the **July 1932** Reichstag election, what percentage of the vote did the Nazis win? Give your answer to the nearest whole number.",
          answer: { type: "number", value: 37, tolerance: 0.5, display: "37% (37.3%)" },
          traps: [
            { spec: { type: "number", value: 18 }, feedback: "18% was the Nazi vote in September 1930. It roughly doubled by July 1932." },
            { spec: { type: "number", value: 44 }, feedback: "About 44% was the March 1933 election, held after Hitler was already Chancellor, in an atmosphere of fear." },
          ],
          solution: [
            "The Nazis won **37.3%** in July 1932, their best result in a free election.",
            "That made them the largest party, but still short of a majority.",
          ],
          commonError: "Thinking most Germans voted Nazi. Even at their peak in a free election, nearly two-thirds of voters chose other parties.",
          difficulty: "core",
          guideRef: "road-to-chancellor",
          hints: ["It was the Nazis' best result in a free election, but less than half.", "It was a little over a third of the vote."],
          strategy: "Use precise evidence",
        },
        {
          kind: "written",
          id: "hitler-rise-p1-q08",
          question:
            "**Source B** — a description (written for this exercise) of a typical Nazi election poster from 1932.\n\n> A strong, smiling worker in shirtsleeves holds a hammer and looks towards a bright horizon. Behind him are factory chimneys with smoke rising again. Across the top, in bold letters, is the slogan *'Work, freedom and bread!'* and at the bottom, *'Vote Hitler'*. There are no details of how the jobs will be created.\n\nHow useful is Source B for a historian investigating **why so many Germans voted for the Nazis in 1932**? Use the source and your own knowledge. (4 marks)",
          marks: 4,
          modelAnswer:
            "Source B is useful because it shows **what the Nazis promised** voters. The slogan 'Work, freedom and bread' and the smoking chimneys were aimed at Germans suffering in the Depression, when about 6 million were unemployed by 1932, so it helps explain why desperate people were attracted.\n\nIt is also useful as evidence of **Nazi propaganda methods**: the message is simple and emotional and there are no detailed policies, which fits what we know about Goebbels' approach.\n\nHowever, its **provenance** limits it. It was made by the Nazis to persuade, so it shows what they *wanted* people to think, not what voters actually felt or why they chose the Nazis. It also says nothing about other reasons, such as fear of communism. So it is useful for the Nazis' message, but needs other evidence, like election results, to show why people voted.",
          markScheme: [
            { point: "Useful: shows Nazi promises aimed at the unemployed / the Depression", keywords: ["work", "bread", "jobs", "unemployed", "unemployment", "depression", "6 million", "promise"] },
            { point: "Useful: shows Nazi propaganda methods (simple, emotional, no detailed policies)", keywords: ["propaganda", "simple", "slogan", "emotional", "goebbels", "no details", "no policies"] },
            { point: "Limitation from provenance: made by the Nazis to persuade, so shows their message not voters' motives", keywords: ["nazi", "made by", "persuade", "purpose", "biased", "one-sided", "not what voters", "propaganda"] },
            { point: "Limitation of content / judgement: misses other reasons (e.g. fear of communism) and needs other evidence", keywords: ["communism", "communist", "other reasons", "other evidence", "election results", "only", "partly", "overall"] },
          ],
          commonError: "Saying 'it is biased so it is useless'. A biased source can be very useful for showing what its makers wanted people to believe.",
          difficulty: "core",
          guideRef: "road-to-chancellor",
          hints: [
            "Use NOP: Nature (a poster), Origin (who made it?), Purpose (why?).",
            "What does the slogan tell you about what voters wanted in 1932?",
            "Is a poster evidence of what the Nazis *said* or of what voters *thought*? Say how useful it is for each.",
          ],
          strategy: "Check the provenance (NOP)",
        },
        {
          kind: "written",
          id: "hitler-rise-p1-q09",
          question: "Explain why the Weimar constitution made it difficult to have strong, stable government. (4 marks)",
          marks: 4,
          modelAnswer:
            "One reason was **proportional representation**. Parties got seats in exact proportion to their votes, so many small parties won seats and no single party ever had a majority. This meant governments had to be **coalitions** of several parties, which often argued and collapsed; Germany had about 20 different governments between 1919 and 1933.\n\nA second reason was **Article 48**. It let the President rule by emergency decree without the Reichstag. This was meant for emergencies, but from 1930 Chancellors used it to govern, so the Reichstag was bypassed and democracy was weakened. It also gave huge power to one man, the President, which later helped Hitler.",
          markScheme: [
            { point: "Identifies proportional representation leading to many parties", keywords: ["proportional representation", "pr", "many parties", "small parties", "proportion"] },
            { point: "Explains the result: no majority, coalitions, frequent collapse of governments", keywords: ["coalition", "coalitions", "no majority", "collapsed", "unstable", "20 governments", "argued"] },
            { point: "Identifies Article 48 (emergency decree powers)", keywords: ["article 48", "emergency", "decree", "president"] },
            { point: "Explains why Article 48 weakened democracy (Reichstag bypassed, power in one person's hands, used from 1930)", keywords: ["bypass", "bypassed", "without the reichstag", "one man", "1930", "bruning", "brüning", "undemocratic", "dictator"] },
          ],
          commonError: "Describing the constitution's features (votes for women, a President, a Reichstag) without explaining why they made government weak.",
          difficulty: "core",
          guideRef: "weimar-republic",
          hints: [
            "Think about how seats were shared out, and what that meant for majorities.",
            "Which article let the President govern without the Reichstag?",
            "For each feature, finish the sentence: 'This made government weak because…'.",
          ],
          strategy: "Long-term vs short-term causes",
        },
        {
          kind: "written",
          id: "hitler-rise-p1-q10",
          question: "Describe **two** ways in which Hitler removed or silenced opposition between February 1933 and July 1934. (4 marks)",
          marks: 4,
          modelAnswer:
            "First, after the **Reichstag Fire** on 27 February 1933, Hitler blamed the communists and persuaded Hindenburg to sign an emergency decree. This suspended rights such as free speech and a free press, and thousands of communists were arrested, so his main rivals on the left were silenced.\n\nSecond, in the **Night of the Long Knives** on 30 June 1934, Hitler had the SA leader Ernst Röhm and other possible rivals, including the former Chancellor von Schleicher, killed. This removed threats from inside his own movement and from the old elite. (Other valid examples: banning trade unions in May 1933; banning all other parties in July 1933.)",
          markScheme: [
            { point: "Identifies a first method (e.g. Reichstag Fire decree, Enabling Act, banning unions, banning parties)", keywords: ["reichstag fire", "decree", "enabling act", "trade unions", "unions", "banned", "parties", "one-party"] },
            { point: "Develops the first method with detail (arrests of communists, rights suspended, dates)", keywords: ["communists", "arrested", "free speech", "press", "1933", "rights", "suspended"] },
            { point: "Identifies a second, different method (e.g. Night of the Long Knives)", keywords: ["night of the long knives", "röhm", "rohm", "sa", "1934", "purge"] },
            { point: "Develops the second method with detail (who was targeted and why it silenced opposition)", keywords: ["killed", "murdered", "rivals", "schleicher", "threat", "army", "removed"] },
          ],
          difficulty: "core",
          guideRef: "creating-a-dictatorship",
          hints: [
            "Think of one event in 1933 and one in 1934.",
            "For each, say what happened and who was silenced.",
            "Include a precise date or name for each to make your description strong.",
          ],
          strategy: "Use precise evidence",
        },
        {
          kind: "written",
          id: "hitler-rise-p1-q11",
          question:
            "Explain how **crises** and the **weakness of the Weimar government** worked *together* to help Hitler become Chancellor. Show the links between the factors. (6 marks)",
          marks: 6,
          modelAnswer:
            "The **Great Depression** was the crisis that turned the Nazis into a mass party. After the Wall Street Crash in 1929, American loans were recalled and unemployment reached about 6 million by 1932.\n\nThis crisis exposed the **weakness of the Weimar system**. Because of proportional representation, the government was a coalition, and in 1930 it collapsed when the parties could not agree on cutting unemployment benefits. From then on, Chancellor Brüning governed using **Article 48** decrees, so the Reichstag was sidelined and democracy already looked like it was failing.\n\nThe two factors fed each other: the worse the crisis got, the more voters turned to extremes, which made the Reichstag even harder to manage, so the President relied on decrees and a small circle of advisers. That is why, in January 1933, a **backroom deal** by von Papen and Hindenburg could make Hitler Chancellor. Without the crisis, Hitler would not have had 37% of the vote; without the weak system, that vote would not have been turned into power. The link between them is what mattered most.",
          markScheme: [
            { point: "Explains a crisis (Depression / unemployment) with precise detail", keywords: ["depression", "wall street", "crash", "1929", "unemployment", "6 million", "loans"] },
            { point: "Explains a weakness of government (PR, coalitions collapsing)", keywords: ["proportional representation", "coalition", "coalitions", "collapsed", "1930", "no majority"] },
            { point: "Explains rule by Article 48 decree sidelining the Reichstag", keywords: ["article 48", "decree", "brüning", "bruning", "bypassed", "sidelined"] },
            { point: "Makes an explicit link: the crisis made the weakness worse (or vice versa)", keywords: ["because", "led to", "which meant", "made worse", "fed", "linked", "link", "so"] },
            { point: "Explains the backroom deal (Papen, Hindenburg) as the outcome of the weakened system", keywords: ["papen", "hindenburg", "deal", "backroom", "appointed", "january 1933", "control"] },
            { point: "Reaches a supported judgement about how the factors combined", keywords: ["without", "together", "combination", "most important", "overall", "judgement", "conclusion"] },
          ],
          commonError: "Writing two separate paragraphs (one on the Depression, one on the constitution) with no sentence linking them.",
          difficulty: "challenge",
          guideRef: "why-hitler-rose",
          hints: [
            "Start with the crisis: what happened in 1929 and what did it do to jobs?",
            "What happened to the coalition government in 1930, and how did Germany get governed after that?",
            "Use linking phrases: 'This made…worse because…', 'As a result…'.",
            "End with a judgement: could either factor have brought Hitler to power on its own?",
          ],
          strategy: "Link the causes",
        },
        {
          kind: "written",
          id: "hitler-rise-p1-q12",
          question:
            "**Source C** — Reichstag election results, 1932 (share of the vote).\n\n| Party | July 1932 | November 1932 |\n|---|---|---|\n| Nazis (NSDAP) | 37.3% | 33.1% |\n| Social Democrats (SPD) | 21.6% | 20.4% |\n| Communists (KPD) | 14.3% | 16.9% |\n| Centre Party | 12.5% | 11.9% |\n| Nationalists (DNVP) | 5.9% | 8.3% |\n\nUse Source C and your own knowledge to explain why some conservative politicians in late 1932 thought it was both **necessary** and **safe** to bring Hitler into government. (5 marks)",
          marks: 5,
          modelAnswer:
            "Source C shows the Nazis were still the **largest party** in November 1932, with 33.1%. No government could get support in the Reichstag without them, and ruling by Article 48 decree without any popular backing could not last, so conservatives like von Papen thought it was **necessary** to use Hitler's mass support.\n\nThe Communist vote rose from 14.3% to **16.9%**. Conservatives, landowners and industrialists feared a communist revolution, so they wanted a strong anti-communist movement on their side.\n\nAt the same time, the Nazi vote **fell** by over 4 points, and the party was short of money. Conservatives thought Hitler was past his peak and would be grateful for power, so it seemed **safe**: only three Nazis were in the new cabinet, and Papen as Vice-Chancellor believed he could control him.\n\nThe source cannot show the backroom meetings themselves, so it explains the reasoning but not the deal.",
          markScheme: [
            { point: "Uses the source: Nazis still the largest party, so needed for a majority / popular support", keywords: ["largest", "biggest", "33", "33.1", "needed", "majority", "support"] },
            { point: "Uses the source: Communist vote rising, fear of communism", keywords: ["communist", "communists", "kpd", "16.9", "rising", "rose", "revolution", "fear"] },
            { point: "Uses the source: Nazi vote falling, so Hitler seemed weaker / past his peak", keywords: ["fell", "fall", "falling", "37.3", "dropped", "peak", "weaker", "declining"] },
            { point: "Own knowledge: Papen and Hindenburg believed they could control Hitler (few Nazis in cabinet)", keywords: ["papen", "hindenburg", "control", "three nazis", "vice-chancellor", "cabinet", "deal"] },
            { point: "Links evidence to 'necessary' and 'safe' explicitly, or notes what the source cannot show", keywords: ["necessary", "safe", "cannot show", "doesn't show", "backroom", "limitation"] },
          ],
          commonError: "Only describing the numbers ('the Nazis went down, the Communists went up') without explaining what conservatives concluded from them.",
          difficulty: "challenge",
          guideRef: "road-to-chancellor",
          hints: [
            "Look at three rows: Nazis, Communists, and the Nazis' change between July and November.",
            "Why would conservatives be frightened by one of these trends?",
            "Why might a *falling* Nazi vote make Hitler look easier to control?",
            "Remember how many Nazis were in Hitler's first cabinet, and who was Vice-Chancellor.",
          ],
          strategy: "Think about who benefited",
        },
      ],
    },
    {
      id: "hitler-rise-p2",
      title: "Practice Paper 2",
      questions: [
        {
          kind: "short",
          id: "hitler-rise-p2-q01",
          question: "In which year did the Munich (Beer Hall) Putsch take place?",
          answer: { type: "number", value: 1923 },
          traps: [
            { spec: { type: "number", value: 1933 }, feedback: "1933 is when Hitler became Chancellor, legally. The violent putsch was ten years earlier, and it failed." },
            { spec: { type: "number", value: 1920 }, feedback: "1920 was the Kapp Putsch, a different right-wing attempt in Berlin. Hitler's came during the crisis year of hyperinflation." },
          ],
          solution: [
            "The Munich Putsch took place on **8–9 November 1923**, at the height of the hyperinflation crisis.",
          ],
          difficulty: "warmup",
          guideRef: "early-nazi-party",
          hints: ["It happened in the same year as hyperinflation and the occupation of the Ruhr."],
        },
        {
          kind: "short",
          id: "hitler-rise-p2-q02",
          question:
            "Under the Treaty of Versailles, which area of western Germany, along the border with France, had to be **demilitarised** (no German troops allowed)?",
          answer: { type: "text", accept: ["Rhineland", "the Rhineland", "Rhine", "the Rhine", "Rhine land"], display: "The Rhineland" },
          traps: [
            { spec: { type: "text", accept: ["Ruhr", "the Ruhr", "Ruhr valley"] }, feedback: "The Ruhr is the industrial area occupied by France and Belgium in 1923. The demilitarised zone had another name." },
            { spec: { type: "text", accept: ["Alsace-Lorraine", "Alsace Lorraine", "Alsace"] }, feedback: "Alsace-Lorraine was handed back to France altogether. Which German area stayed German but could have no troops?" },
          ],
          solution: [
            "The **Rhineland** had to be demilitarised so that Germany could not easily attack France.",
            "It is part of the A (Army) in LAMB.",
          ],
          difficulty: "warmup",
          guideRef: "treaty-of-versailles",
          hints: ["It is named after the great river that runs through western Germany."],
        },
        {
          kind: "short",
          id: "hitler-rise-p2-q03",
          question: "Which German emperor (Kaiser) abdicated on 9 November 1918? Give his name.",
          answer: {
            type: "text",
            accept: ["Wilhelm II", "Wilhelm", "Kaiser Wilhelm II", "Kaiser Wilhelm", "William II", "Kaiser William II", "Kaiser William", "Kaiser Bill", "Wilhelm the Second"],
            display: "Kaiser Wilhelm II",
          },
          traps: [
            { spec: { type: "text", accept: ["Ebert", "Friedrich Ebert"] }, feedback: "Ebert led the new republic that replaced the Kaiser, and became its first President. Who abdicated?" },
            { spec: { type: "text", accept: ["Hindenburg", "Paul von Hindenburg"] }, feedback: "Hindenburg was the army's commander in 1918, not the emperor. He became President later, in 1925." },
          ],
          solution: [
            "**Kaiser Wilhelm II** abdicated on 9 November 1918 and fled to the Netherlands.",
            "A republic was declared, and the armistice followed on 11 November.",
          ],
          difficulty: "warmup",
          guideRef: "weimar-republic",
          hints: ["He was the grandson of Queen Victoria; his name is the German form of 'William'."],
        },
        {
          kind: "short",
          id: "hitler-rise-p2-q04",
          question:
            "The Weimar government used private armies of right-wing ex-soldiers to crush the Spartacist uprising in January 1919. What were these units called?",
          answer: { type: "text", accept: ["Freikorps", "the Freikorps", "Free Corps", "the Free Corps", "Freecorps", "Freikorp"], display: "The Freikorps" },
          traps: [
            { spec: { type: "text", accept: ["SA", "the SA", "Stormtroopers", "Brownshirts", "Sturmabteilung"] }, feedback: "The SA were the Nazis' stormtroopers, set up in 1921. The 1919 units were older, and the government used them." },
            { spec: { type: "text", accept: ["Reichswehr", "the army"] }, feedback: "The regular army was tiny and unreliable in 1919. The government turned to unofficial units of ex-soldiers. What were they called?" },
          ],
          solution: [
            "The **Freikorps** ('Free Corps') were right-wing volunteer units of ex-soldiers.",
            "The government relied on them against the left in 1919, yet many of them backed the right-wing Kapp Putsch in 1920, a sign of how weak the Republic was.",
          ],
          commonError: "Thinking the Freikorps were loyal to democracy. They hated communism, but many also hated the Republic.",
          difficulty: "core",
          guideRef: "crises-1919-1923",
          hints: ["It is a German name meaning 'free corps'.", "Many of these same men joined the Kapp Putsch the next year."],
        },
        {
          kind: "mcq",
          id: "hitler-rise-p2-q05",
          question: "In the May 1928 election the Nazis won only **2.6%** of the vote. What is the best explanation?",
          options: [
            "The Nazi Party was still banned after the Munich Putsch",
            "The economy had recovered under Stresemann, so most Germans were less desperate and less drawn to extremists",
            "Hitler was still in Landsberg prison, so he could not campaign",
            "Women were not allowed to vote until 1930, and many women later voted Nazi",
          ],
          answerIndex: 1,
          explanation:
            "In the 'Golden Years' of 1924–29, the currency was stable, American loans funded jobs and Germany was accepted back into international affairs, so extreme parties had little appeal. The other options are false: the party was refounded in **1925**; Hitler was released in **December 1924**; and women had voted since **1919**.",
          difficulty: "core",
          guideRef: "golden-years-and-depression",
          hints: [
            "Check each option's facts: when was Hitler released, and when did women get the vote?",
            "What was the economy like in 1928 compared with 1923 or 1932?",
            "Extremist parties tend to grow when people are desperate.",
          ],
          strategy: "Link the causes",
        },
        {
          kind: "short",
          id: "hitler-rise-p2-q06",
          question: "Who was in charge of Nazi propaganda from 1930, organising rallies, posters and Hitler's election campaigns? Give his surname.",
          answer: {
            type: "text",
            accept: ["Goebbels", "Joseph Goebbels", "Josef Goebbels", "Göbbels", "Dr Goebbels", "Goebels", "Gobbels"],
            display: "Joseph Goebbels",
          },
          traps: [
            { spec: { type: "text", accept: ["Göring", "Goering", "Gorring", "Hermann Göring", "Hermann Goering"] }, feedback: "Göring was a leading Nazi who became Reichstag President in 1932, but propaganda was run by someone else." },
            { spec: { type: "text", accept: ["Röhm", "Rohm", "Roehm", "Ernst Röhm"] }, feedback: "Röhm led the SA, the stormtroopers. Who ran the posters, rallies and campaigns?" },
          ],
          solution: [
            "**Joseph Goebbels** became head of Nazi propaganda in 1930.",
            "He used simple slogans, mass rallies, posters, film and new technology such as aeroplanes for Hitler's 1932 campaigns.",
          ],
          difficulty: "core",
          guideRef: "road-to-chancellor",
          hints: ["He later became Minister of Propaganda in 1933.", "His surname begins with G, and he is not Göring."],
        },
        {
          kind: "written",
          id: "hitler-rise-p2-q07",
          question:
            "**Source A** — from the front page of the German newspaper *Deutsche Zeitung*, 28 June 1919, the day the Treaty of Versailles was signed (adapted).\n\n> Vengeance! German nation! Today in the Hall of Mirrors the disgraceful treaty is being signed. Do not forget it! The German people will push forward again to regain their place among the nations of the world.\n\nWhat can you infer from Source A about German attitudes to the Treaty of Versailles? (3 marks)",
          marks: 3,
          modelAnswer:
            "I can infer that many Germans felt **angry and humiliated** by the treaty. The newspaper calls it 'disgraceful', which suggests they saw it as unfair and shameful, not as a just peace.\n\nI can also infer that some Germans wanted **revenge** and to overturn the treaty. The headline 'Vengeance!' and 'Do not forget it!' suggest the writer expected Germans to fight back one day.\n\nFinally, 'regain their place' suggests Germans felt they had lost their status as a great power. This anger was later used by Hitler, who promised to tear up the treaty.",
          markScheme: [
            { point: "Inference: Germans felt angry, humiliated or that the treaty was unfair", keywords: ["angry", "anger", "humiliated", "humiliation", "unfair", "shameful", "disgraceful", "diktat"] },
            { point: "Inference: some Germans wanted revenge / to overturn the treaty, supported by a quotation", keywords: ["revenge", "vengeance", "do not forget", "overturn", "fight back", "tear up"] },
            { point: "Inference about lost status or a link to later events (e.g. Hitler exploiting resentment)", keywords: ["status", "regain", "great power", "place among", "hitler", "nazis", "later"] },
          ],
          commonError: "Copying out the source without saying what it suggests ('The source says vengeance').",
          difficulty: "core",
          guideRef: "treaty-of-versailles",
          hints: [
            "Pick out the strongest words in the source.",
            "What feelings do 'Vengeance!' and 'disgraceful' reveal?",
            "Use 'This suggests that…' after each quotation.",
          ],
          strategy: "Make an inference",
        },
        {
          kind: "written",
          id: "hitler-rise-p2-q08",
          question: "Explain **two** lessons Hitler learned from the failure of the Munich Putsch in 1923. (4 marks)",
          marks: 4,
          modelAnswer:
            "The first lesson was that **force would not work**. The army and police stayed loyal to the government and fired on the marchers; sixteen Nazis were killed and the putsch collapsed. So Hitler decided to win power **legally**, through elections, even if this was slower; he would use democracy to destroy democracy.\n\nThe second lesson was that the party needed **better organisation and publicity**. His trial had given him national headlines, showing the power of propaganda. After his release in December 1924 he refounded the party in 1925, set up local branches across Germany, created the SS as a loyal bodyguard and built a propaganda machine, so the party was ready when the Depression came.",
          markScheme: [
            { point: "Lesson 1 identified: force/armed revolt would fail (army and police loyal)", keywords: ["force", "violence", "army", "police", "fired", "failed", "armed"] },
            { point: "Explains the change: win power legally through elections", keywords: ["legal", "legally", "elections", "votes", "reichstag", "democracy"] },
            { point: "Lesson 2 identified: need for organisation / propaganda (shown by the trial's publicity)", keywords: ["organisation", "organise", "propaganda", "publicity", "trial", "newspapers", "headlines"] },
            { point: "Explains what he did: refounded the party (1925), branches, SS, propaganda machine", keywords: ["1925", "refounded", "branches", "ss", "mein kampf", "rebuilt", "nationwide"] },
          ],
          commonError: "Narrating what happened in the putsch instead of explaining what Hitler learned and how he changed.",
          difficulty: "core",
          guideRef: "early-nazi-party",
          hints: [
            "Why did the putsch fail? What does that tell Hitler about using force?",
            "What did the trial show him about publicity?",
            "For each lesson, say what Hitler did differently after 1924.",
          ],
          strategy: "Spot change and continuity",
        },
        {
          kind: "written",
          id: "hitler-rise-p2-q09",
          question:
            "**Source B** — a description (written for this exercise) of a famous photograph taken in Germany in 1923 and printed in newspapers around the world.\n\n> A woman stands by a kitchen stove, feeding bundles of banknotes into the fire. The caption explains that the notes were cheaper to burn than the wood or coal they could buy.\n\nHow useful is Source B for a historian studying the effects of **hyperinflation** on ordinary Germans? (4 marks)",
          marks: 4,
          modelAnswer:
            "Source B is useful because it shows clearly how **worthless** money had become: it was literally cheaper to burn notes than to buy fuel with them. This fits my own knowledge that a loaf of bread cost about 200 billion marks by November 1923.\n\nAs a photograph from **1923** it is a primary source taken at the time, and it shows an **ordinary person** at home, so it suggests the crisis affected daily life, not just banks and governments.\n\nHowever, there are limits. A photographer may have **posed** the scene to create a dramatic image for newspapers, so it may not be typical. It shows only one moment and one household; it does not show that some people, such as those with debts, actually **gained**, or how people felt about the government. So it is useful as a vivid illustration but needs other evidence, such as price statistics, to show how typical it was.",
          markScheme: [
            { point: "Useful content: shows money was worthless / cheaper to burn than to spend", keywords: ["worthless", "cheaper", "burn", "value", "no value", "useless"] },
            { point: "Uses own knowledge to support (e.g. bread prices, printing money, savings wiped out)", keywords: ["bread", "billion", "billions", "savings", "printing", "printed", "prices"] },
            { point: "Provenance: photograph from 1923, shows everyday life (strength) or may be posed / for newspapers (weakness)", keywords: ["1923", "photograph", "posed", "staged", "newspaper", "dramatic", "at the time", "primary"] },
            { point: "Limitation of content and judgement: one moment, not typical, ignores who gained, needs other evidence", keywords: ["typical", "one moment", "one person", "gained", "debts", "other evidence", "statistics", "only"] },
          ],
          commonError: "Assuming a photograph cannot be biased. Photographers choose what to show, and some scenes are posed.",
          difficulty: "core",
          guideRef: "crises-1919-1923",
          hints: [
            "What does the photo tell you directly about the value of money?",
            "Who took it and why? Who would publish such a striking image?",
            "Is one household typical of all Germans? Who actually did well out of hyperinflation?",
          ],
          strategy: "Check the provenance (NOP)",
        },
        {
          kind: "written",
          id: "hitler-rise-p2-q10",
          question: "Explain why the death of President Hindenburg in **August 1934** was important for Hitler. (4 marks)",
          marks: 4,
          modelAnswer:
            "Hindenburg's death removed the **last person with the power to dismiss Hitler**. As President he could, in theory, have sacked the Chancellor, and the army respected him more than Hitler.\n\nHitler immediately **combined the offices** of Chancellor and President and called himself **Führer**. This meant there was no longer any separate, higher authority in the state, so his power was complete.\n\nThe **army** then swore an oath of personal loyalty to Hitler, not to Germany or the constitution. This was vital, because the army was the only force strong enough to remove him; after the Night of the Long Knives a month earlier, its leaders felt Hitler was on their side. A vote in August 1934 approved the change, giving it a legal-looking stamp. From this point Hitler was a dictator.",
          markScheme: [
            { point: "Hindenburg was the last check on Hitler (could dismiss him; respected by army)", keywords: ["dismiss", "sack", "check", "last", "remove", "respected", "only person"] },
            { point: "Hitler combined Chancellor and President into one post", keywords: ["combined", "merged", "president", "chancellor", "both"] },
            { point: "He became Führer with no higher authority (complete power / dictator)", keywords: ["führer", "fuhrer", "dictator", "complete", "total", "no one above"] },
            { point: "The army swore a personal oath of loyalty to Hitler, explained as important", keywords: ["army", "oath", "loyalty", "swore", "personal", "night of the long knives"] },
          ],
          difficulty: "core",
          guideRef: "creating-a-dictatorship",
          hints: [
            "Before August 1934, who in Germany could still sack Hitler?",
            "What did Hitler do with the post of President?",
            "Which powerful organisation swore a new oath, and to whom?",
          ],
          strategy: "Judge significance",
        },
        {
          kind: "written",
          id: "hitler-rise-p2-q11",
          question:
            "**Interpretation A** (constructed for this exercise): *'Hitler won power because millions of ordinary Germans voted for him.'*\n\n**Interpretation B** (constructed for this exercise): *'Hitler was handed power by a small group of conservative politicians who thought they could use him.'*\n\nWhich interpretation is more convincing as an explanation of **how Hitler became Chancellor in January 1933**? Use your own knowledge. (5 marks)",
          marks: 5,
          modelAnswer:
            "Interpretation A has strong evidence. The Nazis won **37.3%** in July 1932, making them the largest party, and without this mass support Hitler would never have been considered for Chancellor.\n\nHowever, votes alone did not make him Chancellor. In November 1932 the Nazi vote **fell** to 33.1%, and Hindenburg had refused to appoint Hitler in August 1932. The Nazis never won a majority in a free election.\n\nInterpretation B explains the **final step**. Von Papen, who wanted to return to power, persuaded Hindenburg in January 1933 to appoint Hitler with Papen as Vice-Chancellor and only three Nazis in the cabinet. They believed they could control him.\n\nOverall, B is more convincing for **how** Hitler became Chancellor, because the decision was made by a few men behind closed doors at a moment when the Nazi vote was falling. But A explains **why** they turned to him: his mass support made him impossible to ignore. The best answer combines them.",
          markScheme: [
            { point: "Supports A with evidence (37.3% July 1932, largest party)", keywords: ["37", "37.3", "largest", "biggest", "votes", "millions", "1932"] },
            { point: "Challenges A (no majority; vote fell in November 1932; Hindenburg refused him)", keywords: ["majority", "fell", "33", "november", "refused", "never won"] },
            { point: "Supports B with evidence (Papen, Hindenburg, backroom deal, three Nazis in cabinet)", keywords: ["papen", "hindenburg", "deal", "backroom", "three nazis", "vice-chancellor", "control", "use him"] },
            { point: "Recognises how the interpretations connect (votes made Hitler impossible to ignore)", keywords: ["both", "combine", "connect", "why they turned", "impossible to ignore", "because of his support"] },
            { point: "Reaches a clear, justified judgement on which is more convincing", keywords: ["more convincing", "overall", "therefore", "judgement", "conclusion", "most"] },
          ],
          solutions: [
            {
              label: "Argument: B is more convincing (the backroom deal)",
              steps: [
                "Hitler was appointed, not elected: the decision was Hindenburg's.",
                "The Nazi vote was falling when the deal was made in January 1933.",
                "Papen and Hindenburg chose him to use his support against the left, believing they could control him.",
              ],
            },
            {
              label: "Argument: A is more convincing (mass support)",
              steps: [
                "No other politician had a mass movement: 37.3% and 230 seats in July 1932.",
                "Papen and Hindenburg only considered Hitler *because* of those votes.",
                "So the voters created the situation; the deal was just the final step.",
              ],
            },
          ],
          commonError: "Agreeing with one interpretation and ignoring the other entirely.",
          difficulty: "challenge",
          guideRef: "road-to-chancellor",
          hints: [
            "Find one fact that supports each interpretation.",
            "Was Hitler's vote rising or falling when he was appointed?",
            "Separate *how* he got the job (who decided?) from *why* he was considered at all.",
            "Finish with a judgement that explains why one is stronger.",
          ],
          strategy: "Weigh factors",
        },
        {
          kind: "written",
          id: "hitler-rise-p2-q12",
          question: "'The Great Depression was the main reason Hitler became Chancellor in 1933.' How far do you agree? Explain your answer. (6 marks)",
          marks: 6,
          modelAnswer:
            "I agree to a large extent. The **Depression** transformed Nazi support. In 1928, during the 'Golden Years', the Nazis won just 2.6%. After the Wall Street Crash in 1929, American loans were recalled and unemployment rose to about **6 million** by 1932. Desperate voters turned to extremes, and the Nazi vote rose to 18% in 1930 and **37%** in July 1932.\n\nHowever, the Depression did not make Hitler Chancellor by itself. Other countries suffered the Depression without becoming dictatorships. **Hitler's leadership and propaganda** mattered: Goebbels' simple messages of 'work and bread' and Hitler's speeches turned anger into Nazi votes. The **weakness of the Weimar system** also mattered: coalitions collapsed and Article 48 rule sidelined the Reichstag. Finally, the **backroom deal** by von Papen and Hindenburg actually gave Hitler the job, when the Nazi vote was falling.\n\nOverall, the Depression was the most important **trigger**, because without it the Nazis would have stayed a fringe party. But it worked only in combination with Weimar's weaknesses, Hitler's skills, and the elites' miscalculation.",
          markScheme: [
            { point: "Supports the statement with evidence (2.6% in 1928, crash 1929, 6 million unemployed)", keywords: ["2.6", "1928", "1929", "wall street", "crash", "6 million", "unemployment", "loans"] },
            { point: "Links the Depression to the rise in the Nazi vote (18% 1930, 37% July 1932)", keywords: ["18", "37", "1930", "1932", "vote", "votes", "desperate", "extremes"] },
            { point: "Counter-argument: Hitler's leadership / propaganda", keywords: ["propaganda", "goebbels", "speeches", "speaker", "leadership", "charisma", "charismatic", "rallies"] },
            { point: "Counter-argument: weakness of Weimar (PR, coalitions, Article 48)", keywords: ["article 48", "proportional representation", "coalition", "weak", "weakness", "decree"] },
            { point: "Counter-argument: backroom deal by Papen and Hindenburg / fear of communism", keywords: ["papen", "hindenburg", "deal", "backroom", "communism", "communist", "control"] },
            { point: "Reaches a supported judgement on 'how far' (e.g. trigger vs combination)", keywords: ["overall", "how far", "most important", "trigger", "combination", "on its own", "to a large extent", "conclusion"] },
          ],
          solutions: [
            {
              label: "Argument: yes, the Depression was the main reason",
              steps: [
                "Before the Depression the Nazis were a fringe party (2.6% in 1928).",
                "Unemployment of about 6 million made voters desperate, and the Nazi vote rose to 37%.",
                "Every other factor (propaganda, Weimar's weakness) already existed in 1928 but did not bring success; the Depression was the difference.",
              ],
            },
            {
              label: "Argument: no, the backroom deal was the main reason",
              steps: [
                "Hitler was appointed, not elected; he never won a majority in a free election.",
                "When he was appointed the Nazi vote was falling (33.1% in November 1932).",
                "Papen and Hindenburg chose him, thinking they could control him, so the elites' decision was decisive.",
              ],
            },
            {
              label: "Argument: Hitler's leadership was the main reason",
              steps: [
                "Many parties competed for desperate voters, including the Communists.",
                "Hitler's speeches, Goebbels' propaganda and the party's organisation turned anger into Nazi votes.",
                "Without the Nazis' leadership the Depression might have helped other parties instead.",
              ],
            },
          ],
          commonError: "Writing only about the Depression, or listing other factors without coming back to the question 'how far?'.",
          difficulty: "challenge",
          guideRef: "why-hitler-rose",
          hints: [
            "Compare the Nazi vote before and after 1929. What changed?",
            "Now think of at least two other factors: something about Hitler, and something about the Weimar system or its leaders.",
            "Did the Depression make Hitler Chancellor *by itself*? Who actually appointed him?",
            "Finish with 'Overall…' and say how important the Depression was compared with the others.",
          ],
          strategy: "Weigh factors",
        },
      ],
    },
  ],

  // =========================================================================
  // CHALLENGE (8)
  // =========================================================================
  challenge: [
    {
      kind: "short",
      id: "hitler-rise-ch-q01",
      question:
        "Hitler was appointed Chancellor in January 1933 after the Nazi vote had **fallen**. In the November 1932 election, what percentage of the vote did the Nazis win? Give your answer to the nearest whole number.",
      answer: { type: "number", value: 33, tolerance: 0.5, display: "33% (33.1%)" },
      traps: [
        { spec: { type: "number", value: 37 }, feedback: "37% was July 1932, their peak. The question asks about November 1932, when their vote went down." },
        { spec: { type: "number", value: 44 }, feedback: "About 44% was March 1933, after Hitler was already Chancellor. Look at the election before his appointment." },
      ],
      solution: [
        "In November 1932 the Nazis won **33.1%**, down from 37.3% in July, losing about 2 million votes.",
        "So Hitler became Chancellor not at the height of his popularity but as it was slipping, which is why the backroom deal mattered so much.",
      ],
      commonError: "Assuming the Nazi vote rose steadily all the way to Hitler's appointment.",
      difficulty: "challenge",
      guideRef: "road-to-chancellor",
      hints: [
        "July 1932 was 37.3%. The vote fell by about 4 percentage points.",
        "It was roughly one-third of the vote.",
      ],
      strategy: "Avoid hindsight",
    },
    {
      kind: "short",
      id: "hitler-rise-ch-q02",
      question:
        "When the Reichstag voted on the Enabling Act on 23 March 1933, only one party voted **against** it. Name that party (full name or initials).",
      answer: {
        type: "text",
        accept: ["SPD", "the SPD", "Social Democrats", "the Social Democrats", "Social Democratic Party", "Social Democratic Party of Germany", "Social Democrat Party", "Sozialdemokratische Partei Deutschlands"],
        display: "The Social Democrats (SPD)",
      },
      traps: [
        { spec: { type: "text", accept: ["KPD", "Communists", "the Communists", "Communist Party", "Communist"] }, feedback: "The Communists would have voted against, but their deputies had been arrested or forced into hiding after the Reichstag Fire, so they could not vote." },
        { spec: { type: "text", accept: ["Centre Party", "the Centre Party", "Centre", "Zentrum", "Center Party"] }, feedback: "The Catholic Centre Party voted *for* the Act after Hitler promised to respect the Church's rights." },
      ],
      solution: [
        "The **Social Democrats (SPD)** cast all 94 votes against the Act; some of their own deputies had already been arrested.",
        "The Communists were barred, and the Centre Party voted in favour, giving Hitler more than the two-thirds majority he needed.",
      ],
      difficulty: "challenge",
      guideRef: "creating-a-dictatorship",
      hints: [
        "One left-wing party was missing altogether because its deputies had been arrested. Which one remained?",
        "It was the party of Friedrich Ebert, Germany's first President.",
      ],
      strategy: "Use precise evidence",
    },
    {
      kind: "written",
      id: "hitler-rise-ch-q03",
      question:
        "Counterfactual: Gustav Stresemann died in **October 1929**, just weeks before the Wall Street Crash. If he had lived, could the Weimar Republic have survived the Depression? Explain your reasoning. (5 marks)",
      marks: 5,
      modelAnswer:
        "There is a case that Stresemann might have helped. He had already rescued Germany once, in 1923, by ending passive resistance and introducing the **Rentenmark**, and he was skilled at building **coalitions** and winning international help, such as the **Dawes Plan** and **Young Plan**. He might have held the government together in 1930 or negotiated an end to reparations sooner.\n\nHowever, the problems were bigger than one man. The Depression was **worldwide**: American banks needed their money back whatever Stresemann did, and unemployment would still have soared. The Weimar system's weaknesses (proportional representation, coalitions and **Article 48**) would still have existed, and Hindenburg and the conservative elites still disliked democracy. Stresemann was also seriously ill; he died aged 51 of a stroke.\n\nOverall, Stresemann might have slowed the collapse, but probably could not have prevented the crisis, because its causes were economic and structural. This shows the danger of explaining history only through individuals.",
      markScheme: [
        { point: "Argues he could have helped, using evidence of his past achievements (1923, Rentenmark, Dawes, Young, Locarno)", keywords: ["rentenmark", "1923", "dawes", "young plan", "locarno", "league", "skilled", "achievements"] },
        { point: "Explains his skill in coalition-building or diplomacy as relevant to 1930", keywords: ["coalition", "coalitions", "diplomacy", "negotiate", "foreign", "held together", "compromise"] },
        { point: "Argues the Depression was beyond any one leader (worldwide, US loans recalled)", keywords: ["worldwide", "world", "global", "america", "loans", "recalled", "unemployment"] },
        { point: "Argues structural weaknesses and hostile elites would remain (PR, Article 48, Hindenburg)", keywords: ["article 48", "proportional representation", "hindenburg", "elites", "structure", "system", "weakness"] },
        { point: "Reaches a reasoned judgement, aware of the limits of counterfactuals", keywords: ["overall", "probably", "might", "slowed", "judgement", "individual", "cannot know"] },
      ],
      solutions: [
        {
          label: "Argument: yes, he might have saved it",
          steps: [
            "He had solved an even worse crisis in 1923.",
            "His international reputation could have won quicker help, e.g. ending reparations.",
            "His coalition skills might have avoided the 1930 collapse and rule by Article 48.",
          ],
        },
        {
          label: "Argument: no, the crisis was too big",
          steps: [
            "The Depression was global and Germany depended on American loans.",
            "The constitution's weaknesses and the elites' hostility to democracy would remain.",
            "One man cannot stop structural problems, and he was already very ill.",
          ],
        },
      ],
      difficulty: "challenge",
      guideRef: "golden-years-and-depression",
      hints: [
        "List what Stresemann achieved between 1923 and 1929.",
        "Was the Depression caused inside Germany or outside it?",
        "Which weaknesses of Weimar had nothing to do with who was in charge?",
        "Use cautious language ('might', 'probably'), since counterfactuals can't be proved.",
      ],
      strategy: "Consider the counter-argument",
    },
    {
      kind: "written",
      id: "hitler-rise-ch-q04",
      question:
        "Spot the flaws. Arjun writes:\n\n> *'Hitler seized power in 1933 in a violent coup, just like the Munich Putsch. Most Germans had voted for him, so he was able to make himself dictator straight away.'*\n\nIdentify **three** mistakes in Arjun's argument and correct each one with evidence. (6 marks)",
      marks: 6,
      modelAnswer:
        "**Mistake 1:** Hitler did not seize power in a coup. He was **appointed Chancellor** by President Hindenburg on 30 January 1933, legally, after a backroom deal arranged by von Papen. After the failed Munich Putsch of 1923, Hitler deliberately chose a legal route.\n\n**Mistake 2:** Most Germans had not voted for him. The Nazis' best result in a free election was **37.3%** in July 1932, and the vote had **fallen** to 33.1% by November 1932. Even in March 1933, with opponents intimidated, they won only about 44%.\n\n**Mistake 3:** He did not become dictator straight away. It took **eighteen months**: the Reichstag Fire decree (February 1933), the Enabling Act (March 1933), banning trade unions and other parties (1933), the Night of the Long Knives (June 1934) and finally becoming Führer after Hindenburg's death in **August 1934**.\n\nArjun's argument matters because it hides the real lesson: a democracy can be dismantled using legal methods.",
      markScheme: [
        { point: "Identifies the coup error", keywords: ["not a coup", "coup", "seized", "putsch", "violent"] },
        { point: "Corrects it: appointed legally by Hindenburg, 30 January 1933 / backroom deal", keywords: ["appointed", "hindenburg", "legal", "legally", "30 january", "papen", "deal"] },
        { point: "Identifies the 'most Germans voted' error", keywords: ["most germans", "majority", "never", "not most", "minority"] },
        { point: "Corrects it with figures (37.3% peak, 33.1% Nov 1932, about 44% March 1933)", keywords: ["37", "37.3", "33", "33.1", "44", "43.9", "per cent", "%"] },
        { point: "Identifies the 'straight away' error", keywords: ["straight away", "not immediately", "gradual", "took time", "18 months", "eighteen months"] },
        { point: "Corrects it with the steps 1933–34 (Fire, Enabling Act, bans, Night of the Long Knives, Führer)", keywords: ["enabling act", "reichstag fire", "night of the long knives", "führer", "fuhrer", "august 1934", "trade unions", "parties"] },
      ],
      commonError: "Spotting a mistake but not correcting it with precise evidence.",
      difficulty: "challenge",
      guideRef: "road-to-chancellor",
      hints: [
        "Take the paragraph one claim at a time: how he got power, how many voted for him, how fast he became dictator.",
        "What happened to Hitler's approach after 1923?",
        "What was the Nazis' highest vote in a free election? Is that 'most'?",
        "List the steps from January 1933 to August 1934.",
      ],
      strategy: "Avoid hindsight",
    },
    {
      kind: "written",
      id: "hitler-rise-ch-q05",
      question:
        "In August 1934, after Hindenburg's death, the Nazis held a national vote asking Germans to approve Hitler combining the posts of Chancellor and President. About **90%** voted 'yes'.\n\nHow far does this result prove that Germans genuinely supported Hitler by 1934? Consider the circumstances in which the vote was held. (5 marks)",
      marks: 5,
      modelAnswer:
        "The result suggests Hitler had **real popularity**. Many Germans welcomed what they saw as order after years of chaos, falling unemployment and a strong leader who promised to restore national pride, so some of the 'yes' votes were genuine.\n\nHowever, the circumstances make it unreliable as proof. By August 1934 Germany was a **one-party state**: all other parties and trade unions had been banned in 1933, so no one could campaign for 'no'. The press was controlled and **propaganda** dominated. Opponents had been sent to camps such as Dachau, and the **Night of the Long Knives** just weeks earlier showed the regime would kill. Many voters may have feared that their vote was not secret, so voting 'no' felt dangerous.\n\nAlso, about 10% still voted no or spoiled their papers despite the risks, which shows support was not total.\n\nOverall, the result shows Hitler had substantial support, but it cannot prove *genuine* support, because the vote was not free or fair.",
      markScheme: [
        { point: "Acknowledges evidence of genuine support (order, national pride, strong leader)", keywords: ["popular", "genuine", "order", "pride", "strong leader", "welcomed", "support"] },
        { point: "No real choice: one-party state, other parties and unions banned", keywords: ["one-party", "one party", "banned", "no opposition", "parties", "unions", "no choice"] },
        { point: "Fear and intimidation (camps, Night of the Long Knives, not secret)", keywords: ["fear", "afraid", "intimidation", "dachau", "camps", "night of the long knives", "secret", "dangerous"] },
        { point: "Propaganda / controlled press shaping opinion", keywords: ["propaganda", "press", "newspapers", "controlled", "censorship", "goebbels"] },
        { point: "Reaches a judgement on 'how far' (substantial support, but not proof of genuine support)", keywords: ["overall", "how far", "not free", "not fair", "cannot prove", "partly", "judgement", "10%"] },
      ],
      commonError: "Taking an official result in a dictatorship at face value, or dismissing it completely as 'all fake'.",
      difficulty: "challenge",
      guideRef: "creating-a-dictatorship",
      hints: [
        "Could anyone campaign for a 'no' vote in August 1934? Why not?",
        "What had happened to opponents of the Nazis by then?",
        "Some support was probably real. Why might some Germans have liked Hitler's government?",
        "Decide: does 90% show support, fear, or both?",
      ],
      strategy: "Ask \"how typical?\"",
    },
    {
      kind: "written",
      id: "hitler-rise-ch-q06",
      question:
        "Many Germans called the Treaty of Versailles unbearably harsh. Yet in **March 1918**, Germany had forced defeated Russia to sign the Treaty of Brest-Litovsk, which took away huge areas including Poland, the Baltic lands and Ukraine, far more land and people than Germany lost in 1919.\n\nWas the Treaty of Versailles **too harsh**? Use this comparison and your own knowledge to reach a judgement. (5 marks)",
      marks: 5,
      modelAnswer:
        "There is a strong case that Versailles was harsh. Germany lost about **13% of its land**, all its colonies and Alsace-Lorraine; its army was cut to **100,000** men; it had to accept blame in **Article 231**; and reparations were set at **£6.6 billion** in 1921. Germany was not allowed to negotiate, so it felt like a *Diktat*.\n\nHowever, the comparison with **Brest-Litovsk** suggests that Germany's own leaders imposed even harsher terms when they won, so the complaint that Versailles was uniquely cruel is weak. Germany also remained united, kept most of its industry and was still potentially the strongest country in Europe, and reparations were later reduced (Dawes 1924, Young 1929).\n\nOverall, Versailles was harsh enough to cause lasting **resentment**, which Hitler exploited, but probably not as crushing as many Germans believed. Perhaps the real problem was that it was harsh enough to anger Germany but not strong enough to stop it recovering.",
      markScheme: [
        { point: "Evidence it was harsh: land, army, war guilt, reparations (LAMB)", keywords: ["13%", "land", "colonies", "alsace-lorraine", "100,000", "army", "231", "reparations", "6.6 billion"] },
        { point: "Explains the German view: no negotiation, Diktat, humiliation", keywords: ["diktat", "dictated", "not allowed", "negotiate", "humiliation", "humiliated", "unfair"] },
        { point: "Uses the Brest-Litovsk comparison to challenge the 'too harsh' view", keywords: ["brest-litovsk", "brest", "russia", "harsher", "worse", "double standard", "own leaders"] },
        { point: "Further counter-evidence: Germany stayed united, kept industry, reparations reduced", keywords: ["united", "industry", "recovered", "strongest", "reduced", "dawes", "young"] },
        { point: "Reaches a nuanced judgement (harsh enough to anger, not enough to cripple)", keywords: ["overall", "judgement", "resentment", "not as", "enough", "both", "conclusion"] },
      ],
      solutions: [
        {
          label: "Argument: yes, too harsh",
          steps: [
            "Losses of land, people, colonies and army, plus huge reparations.",
            "Article 231 blamed Germany alone, though many countries shared responsibility.",
            "The resentment it caused helped destroy Weimar democracy and helped Hitler.",
          ],
        },
        {
          label: "Argument: not too harsh",
          steps: [
            "Brest-Litovsk shows Germany planned similar or worse terms for defeated enemies.",
            "Germany remained united, industrial and able to recover by the mid-1920s.",
            "France had been invaded and devastated; it wanted security, which was understandable.",
          ],
        },
      ],
      difficulty: "challenge",
      guideRef: "treaty-of-versailles",
      hints: [
        "Use LAMB to list the terms of Versailles.",
        "What does Brest-Litovsk tell you about what Germany would have done if it had won?",
        "Was Germany still potentially strong after 1919?",
        "Your judgement can be in between: 'harsh enough to… but not enough to…'.",
      ],
      strategy: "Compare and contrast",
    },
    {
      kind: "written",
      id: "hitler-rise-ch-q07",
      question:
        "Which was the more important **turning point** in Hitler's rise to power: **1923** (hyperinflation and the Munich Putsch) or **1929** (Stresemann's death and the Wall Street Crash)? Explain your answer. (6 marks)",
      marks: 6,
      modelAnswer:
        "A case can be made for **1923**. Hyperinflation wiped out the **savings** of the middle classes, and many never trusted the Republic again; they later voted Nazi in large numbers. The failed **Munich Putsch** taught Hitler to win power **legally**, and his trial made him famous. Without these lessons, the Nazis might not have been ready to exploit the next crisis.\n\nHowever, in the short term 1923 did not bring Hitler closer to power: he was in prison, the party was banned, and the Republic recovered under **Stresemann**. In 1928 the Nazis won only **2.6%**.\n\n**1929** was the real turning point. The Wall Street Crash led to the recall of American loans and unemployment of about **6 million**, while Stresemann's death removed the Republic's most skilful politician. Within a year the coalition collapsed, rule by Article 48 began, and the Nazi vote leapt to 18% in 1930 and 37% in 1932.\n\nOverall, 1929 was more important because it directly turned the Nazis into a mass party, but 1923 laid the foundations: the anger and the legal strategy that 1929 then activated.",
      markScheme: [
        { point: "Explains 1923's importance: middle-class savings destroyed, lasting loss of trust", keywords: ["savings", "middle class", "middle-class", "trust", "faith", "hyperinflation"] },
        { point: "Explains 1923's importance: Putsch led to legal strategy / trial publicity", keywords: ["putsch", "legal", "legally", "trial", "publicity", "mein kampf", "lessons"] },
        { point: "Limits of 1923: Republic recovered, Nazis only 2.6% in 1928", keywords: ["recovered", "golden years", "2.6", "1928", "prison", "banned", "stresemann"] },
        { point: "Explains 1929's importance: crash, loans recalled, unemployment, Stresemann's death", keywords: ["wall street", "crash", "loans", "6 million", "unemployment", "stresemann", "death"] },
        { point: "Shows 1929's direct effect on the Nazi vote / collapse of democracy (18%, 37%, Article 48)", keywords: ["18", "37", "1930", "1932", "article 48", "collapse", "mass party"] },
        { point: "Reaches a judgement that weighs the two (e.g. foundations vs trigger)", keywords: ["overall", "more important", "foundations", "trigger", "short-term", "long-term", "judgement"] },
      ],
      solutions: [
        {
          label: "Argument: 1929 mattered more",
          steps: [
            "The Nazis were tiny until the Depression (2.6% in 1928).",
            "The crash caused mass unemployment and the collapse of parliamentary government.",
            "The Nazi vote then rose sharply; this is the direct link to 1933.",
          ],
        },
        {
          label: "Argument: 1923 mattered more",
          steps: [
            "Hyperinflation destroyed middle-class faith in democracy for good.",
            "The Putsch's failure gave Hitler the legal strategy that worked in 1930–33.",
            "Without these foundations, the Depression might have helped other parties instead.",
          ],
        },
      ],
      difficulty: "challenge",
      guideRef: "crises-1919-1923",
      hints: [
        "For each year, ask two questions: what damage did it do to democracy, and what did it do for the Nazis?",
        "What happened to the Nazi vote between 1924 and 1928?",
        "Think in terms of long-term foundations and short-term triggers.",
        "Your judgement must compare the two years directly.",
      ],
      strategy: "Long-term vs short-term causes",
    },
    {
      kind: "written",
      id: "hitler-rise-ch-q08",
      question:
        "Historians stress that Hitler dismantled democracy step by step, mostly using legal methods. Identify **three** warning signs from 1930–1934 that German democracy was being destroyed, and for each explain what safeguard might have protected it. Why does remembering this matter today? (6 marks)",
      marks: 6,
      modelAnswer:
        "**Warning sign 1:** from 1930, governments ruled by **Article 48** decrees instead of laws passed by the Reichstag. A safeguard would have been strict limits on emergency powers, for example a time limit and approval by parliament.\n\n**Warning sign 2:** after the **Reichstag Fire** in February 1933, a decree suspended free speech and a free press, and political opponents were arrested without trial. Independent courts that protect basic rights could have checked this.\n\n**Warning sign 3:** the **Enabling Act** (March 1933) let Hitler make laws without the Reichstag, and by July 1933 all other parties were banned. A constitution that could not be suspended, even by a two-thirds vote, might have protected it. In April 1933 Jewish Germans also faced a boycott of their businesses and dismissal from jobs, an early sign that a whole group was losing its rights; persecution later led to the Holocaust.\n\nRemembering this matters because it shows that democracy can be lost **legally and gradually**, not just through coups. It reminds us to protect free elections, a free press, the rule of law and the rights of minorities, and to remember the millions of victims.",
      markScheme: [
        { point: "Warning sign: rule by Article 48 decree from 1930, with a safeguard", keywords: ["article 48", "decree", "1930", "emergency", "time limit", "brüning", "bruning"] },
        { point: "Warning sign: Reichstag Fire decree, loss of free speech/press, arrests, with a safeguard (courts, rights)", keywords: ["reichstag fire", "free speech", "press", "arrested", "courts", "rights", "without trial"] },
        { point: "Warning sign: Enabling Act / banning parties and unions, with a safeguard", keywords: ["enabling act", "banned", "parties", "one-party", "trade unions", "constitution", "two-thirds"] },
        { point: "Recognises persecution of minorities/opponents as a warning sign, described humanely", keywords: ["jewish", "jews", "boycott", "persecution", "minorities", "dachau", "opponents", "camps"] },
        { point: "Explains that democracy was dismantled legally and gradually", keywords: ["legal", "legally", "gradual", "step by step", "not a coup", "slowly"] },
        { point: "Explains why remembering matters today (protecting rights, press, elections, remembering victims)", keywords: ["today", "remember", "remembering", "protect", "victims", "holocaust", "free press", "rule of law"] },
      ],
      commonError: "Listing events without explaining why each was a danger sign, or what could have prevented it.",
      difficulty: "challenge",
      guideRef: "why-hitler-rose",
      hints: [
        "Think about three stages: governing without parliament, removing freedoms, removing opposition.",
        "For each, ask: which part of a healthy democracy was being switched off?",
        "Safeguards could be laws, courts, a free press, or limits on emergency powers.",
        "Finish by explaining what this teaches us about protecting democracy now.",
      ],
      strategy: "Judge significance",
    },
  ],
};
