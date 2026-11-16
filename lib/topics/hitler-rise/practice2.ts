import type { Paper } from "../../types.ts";

export const morePapers: Paper[] = [
  // =========================================================================
  // PRACTICE PAPER 3
  // =========================================================================
  {
    id: "hitler-rise-p3",
    title: "Practice Paper 3",
    questions: [
      {
        kind: "short",
        id: "hitler-rise-p3-q01",
        question: "Under Stresemann, Germany was accepted back into international affairs. In which year did Germany join the **League of Nations**?",
        answer: { type: "number", value: 1926 },
        traps: [
          { spec: { type: "number", value: 1919 }, feedback: "The League was set up by the peace settlement in 1919–20, but Germany was not allowed to join at first. It joined after Locarno." },
          { spec: { type: "number", value: 1925 }, feedback: "1925 was the Locarno Treaties, which opened the door. Germany actually joined the following year." },
        ],
        solution: [
          "Germany signed the **Locarno Treaties** in 1925, accepting its western borders.",
          "As a result it was allowed to join the League of Nations in **1926**, with a permanent seat on its Council.",
        ],
        difficulty: "warmup",
        guideRef: "golden-years-and-depression",
        hints: ["It was the year after the Locarno Treaties of 1925."],
      },
      {
        kind: "short",
        id: "hitler-rise-p3-q02",
        question: "In which year did the **Night of the Long Knives** take place?",
        answer: { type: "number", value: 1934 },
        traps: [
          { spec: { type: "number", value: 1933 }, feedback: "1933 saw the Reichstag Fire and the Enabling Act. The purge of the SA came the following summer." },
        ],
        solution: [
          "The Night of the Long Knives took place on **30 June 1934**.",
          "It came about a month before Hindenburg's death in August 1934.",
        ],
        difficulty: "warmup",
        guideRef: "creating-a-dictatorship",
        hints: ["It was in the same year that Hindenburg died and Hitler became Führer."],
      },
      {
        kind: "short",
        id: "hitler-rise-p3-q03",
        question: "Under the Weimar constitution of 1919, from what age could German men **and women** vote? Give the age in years.",
        answer: { type: "number", value: 20 },
        traps: [
          { spec: { type: "number", value: 21 }, feedback: "21 was the voting age in many countries at the time, including Britain. Weimar Germany's was a year lower." },
          { spec: { type: "number", value: 18 }, feedback: "18 is the voting age in many countries today. In 1919 Germany's was a little higher." },
        ],
        solution: [
          "All men and women aged **20 and over** could vote.",
          "This made Weimar Germany one of the most democratic countries in the world at the time; British women only got equal voting rights in 1928.",
        ],
        difficulty: "warmup",
        guideRef: "weimar-republic",
        hints: ["It was lower than Britain's voting age of 21 at the time."],
      },
      {
        kind: "short",
        id: "hitler-rise-p3-q04",
        question: "Which famous First World War general marched alongside Hitler in the Munich Putsch of November 1923? Give his surname.",
        answer: {
          type: "text",
          accept: ["Ludendorff", "Erich Ludendorff", "General Ludendorff", "Ludendorf"],
          display: "Erich Ludendorff",
        },
        traps: [
          { spec: { type: "text", accept: ["Hindenburg", "Paul von Hindenburg", "von Hindenburg"] }, feedback: "Hindenburg was the other great wartime general, but he did not join the putsch. He became President in 1925." },
          { spec: { type: "text", accept: ["Röhm", "Rohm", "Roehm", "Ernst Röhm"] }, feedback: "Röhm took part in the putsch, but he was not a famous general. Which wartime army leader lent the putsch his prestige?" },
        ],
        solution: [
          "**Erich Ludendorff**, one of Germany's top wartime commanders, supported the putsch to give it prestige.",
          "At the trial he was acquitted, while Hitler was sentenced to five years (he served about nine months).",
        ],
        difficulty: "core",
        guideRef: "early-nazi-party",
        hints: ["He and Hindenburg had led the German army in 1916–18.", "He later spread the 'stab in the back' myth. His name begins with L."],
      },
      {
        kind: "mcq",
        id: "hitler-rise-p3-q05",
        question: "Which term of the Treaty of Versailles led **most directly** to the crisis of 1923?",
        options: [
          "Reparations, because unpaid instalments led France and Belgium to occupy the Ruhr",
          "The limit of 100,000 men on the army, because it left Germany unable to defend itself",
          "The loss of Alsace-Lorraine to France, because it angered German nationalists",
          "The ban on Germany uniting with Austria, because Hitler was Austrian",
        ],
        answerIndex: 0,
        explanation:
          "Germany fell behind with **reparations**, so in January 1923 France and Belgium occupied the Ruhr to take goods. German workers went on strike, the government printed money to pay them, and **hyperinflation** followed. The army limit is tempting because Germany could not resist the invasion, but it was the unpaid reparations that *caused* the occupation in the first place.",
        difficulty: "core",
        guideRef: "treaty-of-versailles",
        hints: [
          "What were France and Belgium trying to get when they marched into the Ruhr?",
          "Follow the chain: occupation → strike → printing money → hyperinflation. What started it?",
          "Think about the M in LAMB.",
        ],
        strategy: "Link the causes",
      },
      {
        kind: "short",
        id: "hitler-rise-p3-q06",
        question:
          "Which conservative former Chancellor persuaded President Hindenburg to appoint Hitler in January 1933, and became Vice-Chancellor himself? Give his surname.",
        answer: { type: "text", accept: ["von Papen", "Papen", "Franz von Papen"], display: "Franz von Papen" },
        traps: [
          { spec: { type: "text", accept: ["Schleicher", "von Schleicher", "Kurt von Schleicher"] }, feedback: "Schleicher was the Chancellor who was pushed out in January 1933. The man who arranged the deal was his rival." },
          { spec: { type: "text", accept: ["Brüning", "Bruning", "Bruening", "Heinrich Brüning"] }, feedback: "Brüning was Chancellor from 1930 to 1932, ruling by decree. Who replaced him and later arranged the deal with Hitler?" },
        ],
        solution: [
          "**Franz von Papen**, Chancellor in 1932, wanted revenge on Schleicher and a way back into power.",
          "He persuaded Hindenburg that he could keep Hitler under control as Vice-Chancellor.",
        ],
        difficulty: "core",
        guideRef: "road-to-chancellor",
        hints: ["He had been Chancellor himself from June to November 1932.", "His surname is often written with 'von' in front."],
        strategy: "Think about who benefited",
      },
      {
        kind: "written",
        id: "hitler-rise-p3-q07",
        question:
          "**Source A** — a description (written for this exercise) of a German poster from 1923, produced after French and Belgian troops occupied the Ruhr.\n\n> A huge French soldier with a bayonet stands over the factories and mine-heads of the Ruhr, which are silent. In front of him, German workers stand with folded arms, refusing to work. The slogan reads: *'Hands off the Ruhr!'*\n\nWhat can you infer from Source A about German reactions to the occupation of the Ruhr? (3 marks)",
        marks: 3,
        modelAnswer:
          "I can infer that many Germans saw the occupation as an **unjust foreign invasion**. The French soldier is drawn as huge and armed with a bayonet, which suggests France was seen as a bully using force against Germany.\n\nI can also infer that Germans were encouraged to resist **peacefully**. The workers stand with folded arms and the factories are silent, suggesting the policy of **passive resistance**: striking rather than working for the French.\n\nThe slogan 'Hands off the Ruhr!' suggests a sense of national anger and unity. Because the government kept paying the strikers by printing money, this resistance helped cause hyperinflation.",
        markScheme: [
          { point: "Inference: occupation seen as unjust / aggressive invasion, supported by detail (huge soldier, bayonet)", keywords: ["unjust", "unfair", "invasion", "bully", "aggressive", "bayonet", "huge", "force"] },
          { point: "Inference: Germans encouraged to resist by striking (passive resistance), supported by detail", keywords: ["passive resistance", "strike", "striking", "refusing", "folded arms", "silent", "resist"] },
          { point: "Further inference: national anger/unity, or link to hyperinflation", keywords: ["anger", "angry", "unity", "united", "national", "hyperinflation", "printing", "printed"] },
        ],
        commonError: "Forgetting that this is a German poster made to persuade: it shows how Germans were encouraged to feel, not a neutral view.",
        difficulty: "core",
        guideRef: "crises-1919-1923",
        hints: [
          "How is the French soldier drawn, and what does that suggest about how Germans saw France?",
          "What are the German workers doing, and why?",
          "Use 'This suggests that…' after each detail.",
        ],
        strategy: "Make an inference",
      },
      {
        kind: "written",
        id: "hitler-rise-p3-q08",
        question: "Explain why Chancellor Brüning's use of **Article 48** between 1930 and 1932 weakened German democracy. (4 marks)",
        marks: 4,
        modelAnswer:
          "In March 1930 the coalition government collapsed because the parties could not agree how to pay unemployment benefits during the Depression. The new Chancellor, **Heinrich Brüning**, had no majority in the Reichstag, so President Hindenburg allowed him to govern using **Article 48** emergency decrees.\n\nThis weakened democracy because laws were now made by the **President and his Chancellor**, not by elected representatives. The Reichstag met less and less often, so Germans got used to being governed without parliament.\n\nIt also made the President, Hindenburg, and his small circle of advisers extremely powerful. This mattered later: in January 1933 it was this small group, not the voters, who decided to appoint Hitler. Brüning's unpopular spending cuts by decree also made democracy look as if it had failed, pushing voters towards extremists.",
        markScheme: [
          { point: "Context: coalition collapsed in 1930, Brüning had no majority", keywords: ["coalition", "collapsed", "1930", "no majority", "unemployment benefits", "brüning", "bruning"] },
          { point: "Explains that laws were made by decree, bypassing the elected Reichstag", keywords: ["decree", "decrees", "bypass", "bypassed", "without the reichstag", "elected", "parliament"] },
          { point: "Explains that power shifted to Hindenburg and a small group of advisers", keywords: ["hindenburg", "president", "small group", "advisers", "elite", "elites", "power"] },
          { point: "Links to Hitler's rise (Germans used to rule without parliament; elites' later deal; voters turned to extremes)", keywords: ["hitler", "1933", "extremists", "extremes", "nazis", "failed", "used to"] },
        ],
        commonError: "Explaining what Article 48 *was* without explaining how its use *damaged* democracy.",
        difficulty: "core",
        guideRef: "golden-years-and-depression",
        hints: [
          "Why couldn't Brüning pass laws through the Reichstag in the normal way?",
          "If laws are made by decree, who is left out?",
          "Who gained power as a result, and how did that matter in January 1933?",
        ],
        strategy: "Long-term vs short-term causes",
      },
      {
        kind: "written",
        id: "hitler-rise-p3-q09",
        question:
          "**Source B** — Nazi results in Reichstag elections (official figures).\n\n| Election | Nazi share of the vote | Nazi seats |\n|---|---|---|\n| May 1928 | 2.6% | 12 |\n| September 1930 | 18.3% | 107 |\n| July 1932 | 37.3% | 230 |\n| November 1932 | 33.1% | 196 |\n| March 1933 | 43.9% | 288 |\n\nHow useful is Source B for explaining **why Hitler became Chancellor in January 1933**? (4 marks)",
        marks: 4,
        modelAnswer:
          "Source B is useful because it shows the Nazis' dramatic rise from a fringe party (2.6% in 1928) to the **largest party** (37.3% and 230 seats in July 1932). This explains why Hitler could not be ignored and why conservatives thought they needed his support.\n\nIt is also useful because it shows the Nazi vote **fell** in November 1932, which helps explain why Papen and Hindenburg believed Hitler was weaker and could be controlled.\n\nHowever, the table has limits. It shows **what** happened to the vote, but not **why** people voted Nazi; it says nothing about the Depression, propaganda or fear of communism. It also cannot show the **backroom deal** that actually made Hitler Chancellor. Finally, the March 1933 result came **after** his appointment, in an atmosphere of fear following the Reichstag Fire, so it is not relevant to why he was appointed and was not a fully free election.",
        markScheme: [
          { point: "Useful: shows the rise to largest party (2.6% to 37.3%), so Hitler could not be ignored", keywords: ["largest", "biggest", "rise", "rose", "2.6", "37.3", "230", "ignored"] },
          { point: "Useful: shows the fall in November 1932, linked to elites thinking they could control him", keywords: ["fell", "fall", "33.1", "november", "control", "weaker", "papen", "hindenburg"] },
          { point: "Limitation: shows what happened, not why people voted Nazi (Depression, propaganda)", keywords: ["why people voted", "why they voted", "reasons", "depression", "propaganda", "communism", "doesn't show", "does not show"] },
          { point: "Limitation: cannot show the backroom deal / March 1933 came after his appointment and was not free", keywords: ["deal", "backroom", "after", "march 1933", "not free", "fear", "reichstag fire", "intimidation"] },
        ],
        commonError: "Saying 'it is useful because it has lots of numbers' without explaining what the numbers show about the question.",
        difficulty: "core",
        guideRef: "road-to-chancellor",
        hints: [
          "What does the table show about the Nazis' position by July 1932?",
          "What happened between July and November 1932, and why might that matter?",
          "Does the table explain *why* Germans voted Nazi, or *who* decided to appoint Hitler?",
          "Check the date of the last row: was it before or after Hitler became Chancellor?",
        ],
        strategy: "Check the provenance (NOP)",
      },
      {
        kind: "written",
        id: "hitler-rise-p3-q10",
        question: "Explain why so few Germans resisted the Nazis as they took control between 1933 and 1934. (4 marks)",
        marks: 4,
        modelAnswer:
          "One reason is that the takeover **looked legal**. Hitler had been appointed by the President, and the Enabling Act was passed by the Reichstag, so many Germans accepted the changes as lawful rather than as a revolution.\n\nA second reason is **fear**. After the Reichstag Fire decree, opponents could be arrested without trial, thousands of communists and socialists were sent to camps such as Dachau, and the SA used violence on the streets. Resisting was very dangerous.\n\nA third reason is that opposition was **destroyed or divided**. The Communists and Social Democrats had refused to work together before 1933, trade unions were banned in May 1933 and all other parties by July 1933, leaving no organisation to lead resistance.\n\nFinally, some Germans **welcomed** the Nazis, hoping for jobs, order and an end to the communist threat, helped by Nazi propaganda.",
        markScheme: [
          { point: "The takeover appeared legal (appointment, Enabling Act passed by Reichstag)", keywords: ["legal", "lawful", "appointed", "enabling act", "reichstag", "president"] },
          { point: "Fear and terror (Reichstag Fire decree, arrests, camps, SA violence)", keywords: ["fear", "terror", "arrested", "dachau", "camps", "the sa", "stormtroopers", "violence", "decree"] },
          { point: "Opposition banned or divided (unions, parties banned; left divided)", keywords: ["banned", "trade unions", "parties", "divided", "one-party", "communists", "social democrats"] },
          { point: "Some genuine support / propaganda / hope for jobs and order", keywords: ["support", "welcomed", "jobs", "order", "propaganda", "communism", "hope"] },
        ],
        commonError: "Assuming that everyone who didn't resist must have supported the Nazis. Fear and the lack of any organisation also explain silence.",
        difficulty: "core",
        guideRef: "creating-a-dictatorship",
        hints: [
          "Did the Nazi takeover *look* like a revolution? Why might that matter?",
          "What could happen to someone who openly opposed the Nazis in 1933?",
          "Which organisations might have led resistance, and what happened to them?",
        ],
        strategy: "Weigh factors",
      },
      {
        kind: "written",
        id: "hitler-rise-p3-q11",
        question:
          "Counterfactual: if the Wall Street Crash had **not** happened in 1929, would Hitler still have come to power? Use evidence to support your reasoning. (5 marks)",
        marks: 5,
        modelAnswer:
          "Without the crash, Hitler probably would **not** have come to power, at least not in 1933. In the 'Golden Years' the Nazis won just **2.6%** (1928). Their breakthrough came only after the crash, when unemployment rose to about **6 million** and their vote jumped to 18% (1930) and 37% (1932). Without that mass support, conservatives like Papen would have had no reason to bring Hitler into government.\n\nHowever, some problems existed without the Depression. The Weimar system was already unstable, with proportional representation and frequent coalition collapses; many elites, judges and army officers disliked democracy; and resentment about **Versailles** remained. Hitler had also rebuilt the Nazi Party as a national organisation by 1928, ready to exploit any crisis. Another crisis could have come along later.\n\nOverall, the crash was **necessary** for Hitler's rise in 1933 but not **sufficient** on its own; without it, Weimar might have survived longer, though its long-term weaknesses would still have made it fragile.",
        markScheme: [
          { point: "Evidence the Nazis were weak before the crash (2.6% in 1928)", keywords: ["2.6", "1928", "golden years", "fringe", "small", "weak"] },
          { point: "Evidence the crash transformed Nazi support (6 million unemployed, 18%, 37%)", keywords: ["6 million", "unemployment", "18", "37", "1930", "1932", "rose", "breakthrough"] },
          { point: "Long-term weaknesses existed anyway (PR, coalitions, hostile elites, Versailles)", keywords: ["proportional representation", "coalition", "elites", "versailles", "army", "judges", "weakness", "resentment"] },
          { point: "Nazis were organised and ready / another crisis could have come", keywords: ["organised", "organisation", "ready", "rebuilt", "another crisis", "later", "1925"] },
          { point: "Reaches a reasoned judgement (e.g. necessary but not sufficient), with cautious language", keywords: ["necessary", "sufficient", "probably", "overall", "might", "judgement", "on its own"] },
        ],
        solutions: [
          {
            label: "Argument: no crash, no Hitler",
            steps: [
              "The Nazis were a fringe party in the prosperous late 1920s.",
              "Mass unemployment gave them millions of desperate voters.",
              "Without mass support, the elites would never have turned to Hitler.",
            ],
          },
          {
            label: "Argument: Weimar was doomed anyway",
            steps: [
              "Weimar's constitution and enemies made it unstable from 1919.",
              "The recovery depended on American loans and could have collapsed for other reasons.",
              "Hitler's organised party could have exploited a different crisis later.",
            ],
          },
        ],
        difficulty: "challenge",
        guideRef: "why-hitler-rose",
        hints: [
          "What was the Nazi vote before the crash? And after?",
          "Which of Weimar's weaknesses had nothing to do with the economy?",
          "Was the Nazi Party ready to exploit a crisis by 1929?",
          "Try the phrase 'necessary but not sufficient' in your judgement.",
        ],
        strategy: "Consider the counter-argument",
      },
      {
        kind: "written",
        id: "hitler-rise-p3-q12",
        question:
          "**Interpretation 1** (constructed for this exercise): *'The Treaty of Versailles doomed the Weimar Republic from the moment it was signed.'*\n\n**Interpretation 2** (constructed for this exercise): *'Versailles was resented, but by 1929 Germany had recovered, so the Treaty cannot explain why democracy collapsed.'*\n\nWhich interpretation is more convincing? Use your own knowledge to support your answer. (5 marks)",
        marks: 5,
        modelAnswer:
          "Interpretation 1 has some strong evidence. The Republic's politicians signed the hated **Diktat**, so they were branded the 'November Criminals' and blamed through the **stab in the back** myth. **Reparations** led to the Ruhr occupation and hyperinflation in 1923, and the Treaty gave nationalists like Hitler a powerful grievance.\n\nHowever, Interpretation 2 is supported by the **Golden Years**. Under Stresemann reparations were eased by the Dawes Plan (1924) and the Young Plan (1929), Germany joined the League of Nations in 1926, and the Nazis won only **2.6%** in 1928. If Versailles had doomed the Republic, it should have collapsed by then.\n\nOverall, Interpretation 2 is more convincing, because democracy only collapsed after the **Depression**. But it goes too far in saying the Treaty 'cannot explain' anything: Versailles weakened the Republic's legitimacy from the start, so when the Depression hit, many Germans had little loyalty to defend it. It was a long-term cause, not a death sentence.",
        markScheme: [
          { point: "Supports Interpretation 1: Diktat, November Criminals, stab-in-the-back myth", keywords: ["diktat", "november criminals", "stab in the back", "blamed", "humiliation", "signed"] },
          { point: "Supports Interpretation 1: reparations led to the Ruhr and hyperinflation / gave Hitler a grievance", keywords: ["reparations", "ruhr", "hyperinflation", "1923", "grievance", "hitler", "nationalists"] },
          { point: "Supports Interpretation 2: recovery in the Golden Years (Dawes, Young, League, 2.6%)", keywords: ["golden years", "dawes", "young", "league", "1926", "2.6", "1928", "stresemann", "recovered"] },
          { point: "Identifies the Depression as the trigger that Interpretation 2 implies", keywords: ["depression", "wall street", "crash", "1929", "unemployment", "trigger"] },
          { point: "Reaches a nuanced judgement (e.g. long-term cause, not a death sentence)", keywords: ["more convincing", "overall", "long-term", "too far", "partly", "judgement", "weakened"] },
        ],
        solutions: [
          {
            label: "Argument: Interpretation 1 is more convincing",
            steps: [
              "From 1919 the Republic was linked to defeat and humiliation.",
              "Reparations caused the 1923 crisis, which destroyed middle-class trust for good.",
              "Hitler's whole message was built on overturning Versailles.",
            ],
          },
          {
            label: "Argument: Interpretation 2 is more convincing",
            steps: [
              "The Republic survived 1919–23 and recovered.",
              "By 1928 the Nazis were tiny; Versailles had not made Germans vote for extremists.",
              "Only the Depression after 1929 brought mass support for Hitler.",
            ],
          },
        ],
        commonError: "Agreeing with an interpretation without testing it against what happened between 1924 and 1929.",
        difficulty: "challenge",
        guideRef: "treaty-of-versailles",
        hints: [
          "Find two ways Versailles damaged the Republic.",
          "If the Treaty 'doomed' Weimar, what should have happened by 1928? What actually happened?",
          "Is there a middle position: a long-term cause that needed a trigger?",
          "Make your judgement clear: which interpretation is stronger, and why?",
        ],
        strategy: "Weigh factors",
      },
    ],
  },

  // =========================================================================
  // PRACTICE PAPER 4
  // =========================================================================
  {
    id: "hitler-rise-p4",
    title: "Practice Paper 4",
    questions: [
      {
        kind: "short",
        id: "hitler-rise-p4-q01",
        question: "In which year was the Treaty of Versailles signed?",
        answer: { type: "number", value: 1919 },
        traps: [
          { spec: { type: "number", value: 1918 }, feedback: "1918 was the armistice that stopped the fighting. The peace treaty was signed the next year." },
          { spec: { type: "number", value: 1920 }, feedback: "The Treaty came into force in January 1920, but it was signed earlier, on 28 June of the previous year." },
        ],
        solution: [
          "The Treaty was signed on **28 June 1919** in the Hall of Mirrors at Versailles, near Paris.",
        ],
        difficulty: "warmup",
        guideRef: "treaty-of-versailles",
        hints: ["It was signed the year after the armistice of November 1918."],
      },
      {
        kind: "short",
        id: "hitler-rise-p4-q02",
        question: "What name is given to the extremely rapid rise in prices in Germany in 1923, when money became almost worthless?",
        answer: {
          type: "text",
          accept: ["hyperinflation", "hyper-inflation", "hyper inflation", "hyperinflation crisis"],
          display: "Hyperinflation",
        },
        traps: [
          { spec: { type: "text", accept: ["inflation"] }, feedback: "Close, but ordinary inflation is a gradual rise in prices. 1923 needs a stronger word, with a prefix meaning 'over' or 'extreme'." },
          { spec: { type: "text", accept: ["Depression", "the Depression", "Great Depression", "the Great Depression"] }, feedback: "The Great Depression came after 1929 and caused mass unemployment. 1923's crisis was about prices and money." },
        ],
        solution: [
          "**Hyperinflation**: prices rose so fast that a loaf of bread cost billions of marks by November 1923.",
        ],
        difficulty: "warmup",
        guideRef: "crises-1919-1923",
        hints: ["It is 'inflation' with a prefix meaning 'extreme'."],
      },
      {
        kind: "short",
        id: "hitler-rise-p4-q03",
        question: "In which year did Hitler join the small German Workers' Party (DAP) in Munich?",
        answer: { type: "number", value: 1919 },
        traps: [
          { spec: { type: "number", value: 1921 }, feedback: "1921 is when Hitler became the party's leader. He had joined two years earlier." },
          { spec: { type: "number", value: 1923 }, feedback: "1923 was the Munich Putsch. By then Hitler had led the party for two years." },
        ],
        solution: [
          "Hitler joined the DAP in **September 1919**, sent by the army to report on it.",
          "It became the NSDAP in 1920, and Hitler became its leader in 1921.",
        ],
        difficulty: "warmup",
        guideRef: "early-nazi-party",
        hints: ["It was the same year as the Treaty of Versailles and the Weimar constitution."],
      },
      {
        kind: "short",
        id: "hitler-rise-p4-q04",
        question: "A young Dutch communist was arrested inside the burning Reichstag building on 27 February 1933. What was his surname?",
        answer: {
          type: "text",
          accept: ["van der Lubbe", "Van der Lubbe", "Marinus van der Lubbe", "Lubbe", "der Lubbe", "vanderlubbe"],
          display: "Marinus van der Lubbe",
        },
        traps: [
          { spec: { type: "text", accept: ["Röhm", "Rohm", "Roehm", "Ernst Röhm"] }, feedback: "Röhm was the SA leader killed in the Night of the Long Knives in 1934, not a communist." },
          { spec: { type: "text", accept: ["Thälmann", "Thalmann", "Thaelmann", "Ernst Thälmann"] }, feedback: "Thälmann was the German Communist Party leader, arrested soon after the fire. The man found inside the building was a young Dutchman." },
        ],
        solution: [
          "**Marinus van der Lubbe** was arrested at the scene and later executed.",
          "Hitler used the fire as 'proof' of a communist plot. Historians still debate whether van der Lubbe acted alone.",
        ],
        commonError: "Stating as fact that the Nazis started the fire themselves. Some historians suspect it, but it has never been proved.",
        difficulty: "core",
        guideRef: "creating-a-dictatorship",
        hints: ["His surname has three parts, which is common in Dutch names.", "Marinus van der …"],
        strategy: "Use precise evidence",
      },
      {
        kind: "short",
        id: "hitler-rise-p4-q05",
        question:
          "In 1922 Germany's foreign minister, a Jewish industrialist, was murdered by right-wing extremists. What was his surname?",
        answer: { type: "text", accept: ["Rathenau", "Walther Rathenau", "Walter Rathenau", "Ratenau"], display: "Walther Rathenau" },
        traps: [
          { spec: { type: "text", accept: ["Erzberger", "Matthias Erzberger"] }, feedback: "Erzberger, who signed the armistice, was murdered in 1921. The foreign minister killed in 1922 was someone else." },
          { spec: { type: "text", accept: ["Stresemann", "Gustav Stresemann"] }, feedback: "Stresemann was a later foreign minister (1923–29) and died of a stroke, not murder." },
        ],
        solution: [
          "**Walther Rathenau** was assassinated in June 1922 by members of a right-wing terrorist group.",
          "His murder showed both the danger of political violence and the antisemitism already present in the far right.",
        ],
        difficulty: "core",
        guideRef: "crises-1919-1923",
        hints: ["He was murdered the year after Erzberger.", "His surname begins with R."],
      },
      {
        kind: "mcq",
        id: "hitler-rise-p4-q06",
        question: "Why was the Weimar Republic linked with **defeat and humiliation** from the very start?",
        options: [
          "It was set up by the Allies and its leaders were chosen by Britain and France",
          "It began during the hyperinflation of 1923, so it was blamed for poverty",
          "Hitler was one of its founders, and he later turned against it",
          "Its politicians agreed to the armistice and signed the Treaty of Versailles, so nationalists called them the 'November Criminals'",
        ],
        answerIndex: 3,
        explanation:
          "The new government agreed the armistice in November 1918 and signed Versailles in 1919, so nationalists blamed it for defeat, calling its leaders the **'November Criminals'** and spreading the **stab in the back** myth. The idea that the Allies set it up is a common misconception; Germans elected the National Assembly in January 1919. Hyperinflation came four years *after* the Republic began.",
        difficulty: "core",
        guideRef: "weimar-republic",
        hints: [
          "Check the dates: when did the Republic begin, and when was hyperinflation?",
          "Who signed the armistice and the peace treaty on Germany's behalf?",
          "What insulting nickname did nationalists give those politicians?",
        ],
        strategy: "Avoid hindsight",
      },
      {
        kind: "short",
        id: "hitler-rise-p4-q07",
        question: "By 1932, roughly how many Germans were unemployed? Give your answer as a number of **millions** (for example, write 3 for 3 million).",
        answer: { type: "number", value: 6, tolerance: 1, display: "About 6 million" },
        traps: [
          { spec: { type: "number", value: 3 }, feedback: "About 3 million was the figure in 1930. Unemployment kept climbing for two more years." },
          { spec: { type: "number", value: 1.4 }, feedback: "About 1.4 million was the 1928 figure, before the Depression." },
        ],
        solution: [
          "Unemployment reached about **6 million** in 1932, roughly one in three workers.",
          "Many more were on short hours or reduced wages.",
        ],
        difficulty: "core",
        guideRef: "golden-years-and-depression",
        hints: ["It was about double the 1930 figure of 3 million.", "Textbooks usually give a round figure between 5 and 7 million."],
        strategy: "Use precise evidence",
      },
      {
        kind: "written",
        id: "hitler-rise-p4-q08",
        question: "Explain why the **'stab in the back' myth** damaged the Weimar Republic. (4 marks)",
        marks: 4,
        modelAnswer:
          "The myth claimed that the German army had **not really been defeated** in 1918 but had been betrayed at home by socialists, democrats and other 'traitors'. In fact, army leaders Hindenburg and Ludendorff had told the government the war was lost.\n\nIt damaged the Republic because it made the new democratic leaders look like **traitors** from the start. They were labelled the 'November Criminals' for signing the armistice and Versailles, so many Germans, especially in the army and among nationalists, never accepted the Republic as legitimate.\n\nIt also gave **extremists** like Hitler a powerful story. Nazi speeches blamed the 'November Criminals', and antisemites also falsely blamed Jewish Germans, even though many had fought for Germany. This weakened loyalty to democracy, so when crises came, fewer people were willing to defend it.",
        markScheme: [
          { point: "Explains what the myth claimed (army not defeated, betrayed at home)", keywords: ["not defeated", "betrayed", "betrayal", "stabbed", "home", "traitors", "undefeated"] },
          { point: "Notes it was false (army leaders admitted defeat)", keywords: ["false", "myth", "untrue", "hindenburg", "ludendorff", "admitted", "lost"] },
          { point: "Explains it made Weimar leaders look like traitors (November Criminals), undermining legitimacy", keywords: ["november criminals", "traitors", "legitimate", "never accepted", "blamed", "armistice"] },
          { point: "Explains extremists (Nazis) exploited it, weakening loyalty to democracy", keywords: ["hitler", "nazis", "extremists", "propaganda", "loyalty", "scapegoat", "jewish", "antisemitism"] },
        ],
        commonError: "Treating the myth as true. It was a lie: the army's own leaders had told the government the war could not be won.",
        difficulty: "core",
        guideRef: "treaty-of-versailles",
        hints: [
          "First explain what the myth claimed, and why it was false.",
          "Who did it blame, and what nickname were they given?",
          "How could a story like this be used by Hitler later on?",
        ],
        strategy: "Think about purpose",
      },
      {
        kind: "written",
        id: "hitler-rise-p4-q09",
        question:
          "**Source C** — an imagined example (written for this exercise) of the kind of painting made in Nazi Germany in the 1930s to celebrate the Munich Putsch.\n\n> Hitler marches calmly at the front of a column of brave, determined men carrying flags. Bullets fly around them, but Hitler stands tall and unafraid. The title is *'The Heroes of 9 November'*.\n\nHow useful is a source like this for a historian studying **what actually happened** in the Munich Putsch? (4 marks)",
        marks: 4,
        modelAnswer:
          "A source like this is **not very useful** for what actually happened. It was made in the **1930s**, more than ten years later, by artists in Nazi Germany, where art was controlled by the regime. Its **purpose** was propaganda: to turn a failure into a heroic legend. In reality, when the police opened fire, sixteen Nazis and four policemen were killed; Hitler was pulled to the ground, dislocated his shoulder and **fled**, and he was arrested two days later. The painting shows the opposite.\n\nHowever, it is **very useful** for a different enquiry: how the Nazis later used the putsch in propaganda. It shows they presented the dead as martyrs and Hitler as a fearless leader, and 9 November became a Nazi day of remembrance. So its usefulness depends on the question being asked.",
        markScheme: [
          { point: "Provenance: made in the 1930s, years later, in Nazi Germany", keywords: ["1930s", "later", "years later", "nazi germany", "controlled", "not at the time"] },
          { point: "Purpose: propaganda to turn failure into a heroic legend", keywords: ["propaganda", "purpose", "heroic", "legend", "glorify", "myth", "persuade"] },
          { point: "Own knowledge contradicts the content (Hitler fled, injured, arrested; 16 Nazis killed)", keywords: ["fled", "ran away", "shoulder", "arrested", "16", "sixteen", "failed", "police"] },
          { point: "Judgement: useful for how the Nazis remembered/used the putsch, not for what happened", keywords: ["useful for", "how the nazis", "remembered", "martyrs", "depends", "different enquiry", "propaganda value"] },
        ],
        commonError: "Saying 'it is useless because it is biased'. It is weak evidence for events, but strong evidence for Nazi propaganda.",
        difficulty: "core",
        guideRef: "early-nazi-party",
        hints: [
          "When and where was a painting like this made? Who controlled art there?",
          "Compare the painting with what you know happened to Hitler on 9 November 1923.",
          "For what *other* question might this source be very useful?",
        ],
        strategy: "Check the provenance (NOP)",
      },
      {
        kind: "written",
        id: "hitler-rise-p4-q10",
        question: "Explain why Nazi propaganda was so effective in winning votes between 1930 and 1932. (5 marks)",
        marks: 5,
        modelAnswer:
          "First, it was **well organised**. Joseph Goebbels ran propaganda from 1930 and used every method available: posters, newspapers, mass rallies, films, records and, in 1932, aeroplanes that let Hitler speak in several cities in one day. This made the Nazis seem modern and everywhere.\n\nSecond, its messages were **simple and emotional**. Slogans like 'work and bread' promised solutions without details, which appealed to desperate people during the Depression.\n\nThird, it was **targeted** at different groups: jobs for the unemployed, help with debts for farmers, protection from communism for the middle classes and business owners, and national pride for everyone who resented Versailles.\n\nFourth, it built up **Hitler as a saviour**, a strong leader above the squabbling parties, at a time when Weimar's coalitions seemed to have failed. Propaganda worked because it matched what millions of frightened Germans wanted to hear in a crisis.",
        markScheme: [
          { point: "Organisation and methods (Goebbels, rallies, posters, film, aeroplane tours)", keywords: ["goebbels", "rallies", "posters", "film", "aeroplane", "plane", "radio", "newspapers"] },
          { point: "Simple, emotional messages (e.g. 'work and bread')", keywords: ["simple", "emotional", "slogan", "slogans", "work and bread", "no details"] },
          { point: "Targeted different groups (farmers, unemployed, middle classes, business)", keywords: ["farmers", "unemployed", "middle class", "business", "workers", "different groups", "targeted", "young"] },
          { point: "Presented Hitler as a strong leader / saviour above party squabbles", keywords: ["saviour", "strong leader", "hitler", "leader", "above", "unity", "charismatic"] },
          { point: "Links effectiveness to the crisis context (Depression, fear of communism, failing coalitions)", keywords: ["depression", "desperate", "crisis", "communism", "communist", "fear", "coalitions"] },
        ],
        commonError: "Listing propaganda methods without explaining why they persuaded people at that particular time.",
        difficulty: "core",
        guideRef: "road-to-chancellor",
        hints: [
          "Who ran Nazi propaganda, and what methods did he use?",
          "What was special about the Nazis' slogans?",
          "Think about different groups: farmers, workers, the middle classes. What did each fear or want?",
          "Why did the timing (the Depression) make propaganda more effective?",
        ],
        strategy: "Think about purpose",
      },
      {
        kind: "written",
        id: "hitler-rise-p4-q11",
        question: "Explain why Hitler was able to turn himself from Chancellor into dictator in only **eighteen months** (January 1933 to August 1934). (6 marks)",
        marks: 6,
        modelAnswer:
          "Hitler moved quickly by **using legal powers to destroy democracy**. When the **Reichstag** burned on 27 February 1933, he blamed the communists and persuaded Hindenburg to sign an emergency decree suspending free speech and a free press. Thousands of opponents were arrested.\n\nThis atmosphere of fear helped him pass the **Enabling Act** on 23 March 1933. With Communist deputies barred and the Centre Party given promises, he won the two-thirds majority, which let him make laws without the Reichstag. This was the key step, because everything after it could be done 'legally'.\n\nHe then **removed all opposition**: trade unions were banned in May 1933 and all other parties by July 1933, making Germany a one-party state.\n\nIn the **Night of the Long Knives** (June 1934) he killed Röhm and other rivals, which reassured the army. When **Hindenburg died** in August 1934, he became Führer and the army swore loyalty to him.\n\nIt was quick because each step built on the last, opponents were divided, and the takeover looked legal.",
        markScheme: [
          { point: "Reichstag Fire and emergency decree used against communists / freedoms", keywords: ["reichstag fire", "decree", "communists", "free speech", "arrested", "february 1933"] },
          { point: "Enabling Act: how it was passed and why it was crucial", keywords: ["enabling act", "two-thirds", "march 1933", "without the reichstag", "centre party", "make laws"] },
          { point: "One-party state: unions and parties banned (1933)", keywords: ["trade unions", "unions", "banned", "parties", "one-party", "july 1933", "may 1933"] },
          { point: "Night of the Long Knives secured the army's support", keywords: ["night of the long knives", "röhm", "rohm", "the sa", "army", "june 1934"] },
          { point: "Hindenburg's death: Führer and the army oath", keywords: ["hindenburg", "died", "death", "führer", "fuhrer", "oath", "august 1934"] },
          { point: "Explains why it was so fast (legal appearance, each step building on the last, divided opposition, fear)", keywords: ["legal", "legally", "built on", "each step", "divided", "fear", "quickly", "so fast"] },
        ],
        commonError: "Narrating the events in order without explaining *why* they allowed Hitler to move so fast.",
        difficulty: "challenge",
        guideRef: "creating-a-dictatorship",
        hints: [
          "List the main steps from February 1933 to August 1934.",
          "Which step gave Hitler the power to make laws himself? Why did that matter for everything after?",
          "Who was the last powerful group that could stop him, and how did he win them over?",
          "Finish with *why* it was so quick: what did the steps have in common?",
        ],
        strategy: "Put it in chronological order",
      },
      {
        kind: "written",
        id: "hitler-rise-p4-q12",
        question:
          "'Hitler's own leadership and the Nazis' propaganda were the main reasons he became Chancellor in 1933.' How far do you agree? Explain your answer. (6 marks)",
        marks: 6,
        modelAnswer:
          "There is a strong case for **Hitler's leadership**. He was a powerful speaker who could move huge audiences. After 1923 he chose a legal strategy and rebuilt the Nazi Party into a national organisation, and with **Goebbels' propaganda** (rallies, posters, flights across Germany and simple slogans like 'work and bread') the Nazis won 37% in July 1932.\n\nHowever, the same leader and party won only **2.6%** in 1928. What changed was the **Depression**: about 6 million unemployed made voters desperate and open to extreme ideas. The **weakness of the Weimar system** (proportional representation, collapsing coalitions and rule by Article 48) made democracy look useless. Finally, Hitler did not win a majority; he was **appointed** by Hindenburg after a backroom deal by von Papen, at a time when the Nazi vote was falling, because the elites feared communism and thought they could control him.\n\nOverall, I only partly agree. Hitler's leadership made the Nazis the party that profited from the crisis, but without the Depression and the elites' miscalculation he would not have become Chancellor in 1933.",
        markScheme: [
          { point: "Supports the statement: Hitler's speaking, legal strategy and party organisation", keywords: ["speaker", "speeches", "speech", "organisation", "legal", "strategy", "charisma", "charismatic", "leader"] },
          { point: "Supports the statement: propaganda (Goebbels, rallies, slogans) and its effect on votes (37%)", keywords: ["goebbels", "propaganda", "rallies", "posters", "work and bread", "37", "flights"] },
          { point: "Counter: the same leadership won only 2.6% in 1928, so the Depression was needed", keywords: ["2.6", "1928", "depression", "6 million", "unemployment", "desperate", "wall street"] },
          { point: "Counter: weakness of Weimar (PR, coalitions, Article 48)", keywords: ["article 48", "proportional representation", "coalition", "coalitions", "weak", "weakness", "decree"] },
          { point: "Counter: appointed through a backroom deal (Papen, Hindenburg, fear of communism, vote falling)", keywords: ["papen", "hindenburg", "deal", "backroom", "appointed", "communism", "control", "fell"] },
          { point: "Reaches a supported judgement on 'how far'", keywords: ["overall", "how far", "partly", "to some extent", "most important", "without", "judgement", "conclusion"] },
        ],
        solutions: [
          {
            label: "Argument: yes, Hitler's leadership mattered most",
            steps: [
              "Other parties also faced the Depression, but the Nazis captured the protest vote.",
              "Hitler's speeches, the legal strategy and Goebbels' propaganda made that possible.",
              "His mass support is what made the elites turn to him in the first place.",
            ],
          },
          {
            label: "Argument: no, circumstances mattered more",
            steps: [
              "Hitler's leadership was the same in 1928, when the Nazis won only 2.6%.",
              "The Depression and Weimar's weaknesses created the desperate voters.",
              "The final decision was made by Hindenburg and Papen, not by Hitler or the voters.",
            ],
          },
        ],
        commonError: "Writing a strong paragraph about propaganda and then stopping, without weighing it against the other factors.",
        difficulty: "challenge",
        guideRef: "why-hitler-rose",
        hints: [
          "Start with the evidence for the statement: what was special about Hitler and Nazi propaganda?",
          "Was Hitler any less charismatic in 1928? Why didn't it work then?",
          "Who actually made Hitler Chancellor, and why?",
          "End with 'Overall…' and make clear how far you agree.",
        ],
        strategy: "Weigh factors",
      },
    ],
  },
];
