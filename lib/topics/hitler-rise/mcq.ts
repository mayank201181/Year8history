import type { Paper } from "../../types.ts";

// Hitler's Rise to Power, 1918–1934 — four MCQ papers of 15 questions each.
// Term 2 enquiry: under what circumstances did dictatorships come to power?
// (crises · weakness of government · charismatic leadership)

export const mcqPapers: Paper[] = [
  // =========================================================================
  // MCQ PAPER 1
  // =========================================================================
  {
    id: "hitler-rise-m1",
    title: "MCQ Paper 1",
    questions: [
      {
        kind: "mcq",
        id: "hitler-rise-m1-q01",
        question: "On what date did the armistice end the fighting of the First World War?",
        options: ["28 June 1919", "9 November 1918", "11 November 1918", "11 August 1919"],
        answerIndex: 2,
        explanation:
          "The armistice (ceasefire) began at 11 a.m. on **11 November 1918**. 9 November 1918 is a tempting date, but that is when the Kaiser abdicated and a republic was declared, two days *before* the armistice. 28 June 1919 is when the Treaty of Versailles was signed, and 11 August 1919 is when the Weimar constitution was signed.",
        difficulty: "warmup",
        guideRef: "weimar-republic",
        hints: ["Remember the phrase 'the eleventh hour of the eleventh day of the eleventh month'."],
        strategy: "Put it in chronological order",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m1-q02",
        question: "Under the Treaty of Versailles, how large could the German army be?",
        options: ["100,000 men", "500,000 men", "1 million men", "No army at all, only police"],
        answerIndex: 0,
        explanation:
          "The army was limited to **100,000 men** (the 'A' in LAMB), with no tanks and no air force. 'No army at all' goes too far: Germany kept a small army. Germany had had millions of soldiers in 1914–18, so the cut felt humiliating.",
        difficulty: "warmup",
        guideRef: "treaty-of-versailles",
        hints: ["Think of LAMB: the 'A' stands for Army. It was a six-figure number."],
        strategy: "Use precise evidence",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m1-q03",
        question: "What was the SA?",
        options: [
          "The Nazi Party's propaganda department, run by Joseph Goebbels",
          "The name of the German army after 1919",
          "The Nazi Party's official newspaper",
          "The Nazi Party's uniformed stormtroopers ('Brownshirts'), who guarded meetings and attacked opponents",
        ],
        answerIndex: 3,
        explanation:
          "The **SA** (*Sturmabteilung*, 'storm division'), set up in 1921, were the Nazis' brown-shirted stormtroopers. They protected Nazi meetings and broke up opponents' meetings with violence. Goebbels ran propaganda, not the SA, and the army after 1919 was the *Reichswehr*.",
        difficulty: "warmup",
        guideRef: "early-nazi-party",
        hints: ["Their nickname came from the colour of their uniform."],
        strategy: "Use precise evidence",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m1-q04",
        question: "Which politician is most closely linked with Germany's recovery between 1923 and 1929?",
        options: ["Friedrich Ebert", "Gustav Stresemann", "Paul von Hindenburg", "Heinrich Brüning"],
        answerIndex: 1,
        explanation:
          "**Gustav Stresemann** was Chancellor in late 1923 and then Foreign Minister until his death in October 1929. He brought in the Rentenmark and agreed the Dawes Plan, Locarno and League membership. Brüning is a tempting wrong answer, but he was Chancellor from 1930, during the Depression, ruling by emergency decree.",
        difficulty: "warmup",
        guideRef: "golden-years-and-depression",
        hints: ["He died in October 1929, just weeks before the Wall Street Crash."],
        strategy: "Use precise evidence",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m1-q05",
        question: "The Weimar constitution used **proportional representation** (PR): parties got seats in the Reichstag in proportion to their share of the vote. What was the main political effect of this?",
        options: [
          "Only two large parties won seats, so debates were quick and simple",
          "Many parties won seats, so governments were usually coalitions that often fell apart",
          "The President chose all the members of the Reichstag",
          "Women could stand for election but could not vote",
        ],
        answerIndex: 1,
        explanation:
          "PR was very fair, but it meant even small parties won seats. No party ever won a majority, so every government was a **coalition**, and these frequently collapsed (there were around 20 governments between 1919 and 1933). 'Only two large parties' describes a first-past-the-post system like Britain's, not PR. Women could vote: the constitution gave the vote to men and women over 20.",
        difficulty: "core",
        guideRef: "weimar-republic",
        hints: [
          "If a party wins 3% of the votes under PR, what happens?",
          "Could any single party easily win more than half the seats?",
          "Governments needed several parties to agree. What happens when they fall out?",
        ],
        strategy: "Think about consequences",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m1-q06",
        question:
          "**Source A**: the price of a loaf of bread in Berlin (figures commonly given in textbooks).\n\n| Date | Price of a loaf (marks) |\n|---|---|\n| 1918 | 0.63 |\n| January 1923 | 250 |\n| July 1923 | 3,465 |\n| September 1923 | 1,512,000 |\n| November 1923 | 201,000,000,000 |\n\nWhat is the best inference from Source A?",
        options: [
          "Prices rose steadily, by about the same amount each month, during 1923",
          "The price of bread fell after French troops occupied the Ruhr in January 1923",
          "Bread was too expensive for anyone to buy in 1918",
          "Prices spiralled out of control in the second half of 1923, so money saved earlier became almost worthless",
        ],
        answerIndex: 3,
        explanation:
          "The jumps get bigger and bigger: from thousands in July to over a million in September, then 201 billion in November. That is **hyperinflation**, and anyone who had saved money in marks saw it become worthless. 'Rose steadily' misreads the table: the rise was not steady but explosive. Prices *rose*, not fell, after the Ruhr was occupied, as the government printed money to pay striking workers.",
        difficulty: "core",
        guideRef: "crises-1919-1923",
        hints: [
          "Compare the size of each jump, not just the direction.",
          "Look at July to September, then September to November.",
          "What happens to a bank account of, say, 10,000 marks when a loaf costs billions?",
        ],
        strategy: "Make an inference",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m1-q07",
        question:
          "**Source B**: Philipp Scheidemann, the Social Democrat head of the new German government, speaking to the National Assembly about the Allies' peace terms, May 1919 (translated).\n\n> What hand would not wither that bound itself and us in these fetters?\n\nWhat does Source B suggest, and why does its provenance make it useful?",
        options: [
          "Even the leader of the new democratic government saw the terms as unacceptable, which shows that anger at the treaty was not limited to extreme nationalists",
          "Scheidemann welcomed the treaty because it finally ended the war",
          "The treaty had already been signed when he spoke, so he was describing how it worked in practice",
          "Only army generals opposed the treaty; politicians accepted it",
        ],
        answerIndex: 0,
        explanation:
          "Scheidemann was a moderate, pro-democracy Social Democrat, not a nationalist, yet he called the terms 'fetters' (chains) and resigned in June 1919 rather than sign. That tells us opposition to Versailles ran right across German politics. He spoke in **May**; the treaty was signed on **28 June 1919**, so he was reacting to the proposed terms, not describing how they worked.",
        difficulty: "core",
        guideRef: "treaty-of-versailles",
        hints: [
          "What are 'fetters'? What image is he creating?",
          "Check the provenance (NOP): which party did Scheidemann belong to? Was he an extremist?",
          "Why is it significant when a *moderate* says something this strong?",
        ],
        strategy: "Check the provenance (NOP)",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m1-q08",
        question: "Why did the Munich (Beer Hall) Putsch of 8–9 November 1923 fail?",
        options: [
          "Hitler called it off because the French had left the Ruhr",
          "The army joined the Nazis, but the Communists defeated them in street fighting",
          "Bavarian leaders such as Gustav von Kahr withdrew their support, and armed police fired on the marchers the next day",
          "The French army crossed the border to stop the march on Berlin",
        ],
        answerIndex: 2,
        explanation:
          "Hitler forced Bavarian leader **Gustav von Kahr** to agree to the putsch at gunpoint in the beer hall, but Kahr turned against him once released. On 9 November armed police blocked the Nazi march in Munich and opened fire; 16 Nazis and 4 policemen were killed, and Hitler fled. The army did *not* join the Nazis, and the French played no part (the Ruhr occupation actually lasted until 1925).",
        difficulty: "core",
        guideRef: "early-nazi-party",
        hints: [
          "Hitler needed the support of powerful people in Bavaria. Did he keep it?",
          "Promises made at gunpoint are not worth much once the gun is gone.",
          "What happened when the marchers met the police on 9 November?",
        ],
        strategy: "Explain causes",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m1-q09",
        question: "Why did the Wall Street Crash of October 1929 hit Germany especially hard?",
        options: [
          "The Treaty of Versailles made Germany pay for any damage to the American economy",
          "German banks had caused the crash by lending too much to American companies",
          "Germany's recovery depended on loans from the USA, and American banks now demanded them back",
          "The crash led France to occupy the Ruhr for a second time",
        ],
        answerIndex: 2,
        explanation:
          "Since the **Dawes Plan (1924)** Germany had borrowed heavily from American banks. After the crash those banks needed their money and recalled the loans. German businesses closed and unemployment soared, reaching about **6 million by 1932**. The crash started in the USA, not in German banks, and there was no second Ruhr occupation.",
        difficulty: "core",
        guideRef: "golden-years-and-depression",
        hints: [
          "Where had the money for Germany's 'Golden Years' come from?",
          "Think about the Dawes Plan of 1924.",
          "If a lender suddenly wants the money back, what happens to the borrower?",
        ],
        strategy: "Link the causes",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m1-q10",
        question:
          "**Source C**: results of the Reichstag election of July 1932 (608 seats in total).\n\n| Party | Share of vote | Seats |\n|---|---|---|\n| Nazis (NSDAP) | 37.3% | 230 |\n| Social Democrats (SPD) | 21.6% | 133 |\n| Communists (KPD) | 14.3% | 89 |\n| Centre Party | 12.4% | 75 |\n\nWhat does Source C show about the Nazis in July 1932?",
        options: [
          "They were the largest party, but with 230 of 608 seats they did not have a majority",
          "They had won a majority, so President Hindenburg was forced to make Hitler Chancellor",
          "They had fewer seats than the Social Democrats and Communists put together",
          "They were already in a coalition government with the Communists",
        ],
        answerIndex: 0,
        explanation:
          "A majority needs more than half: over 304 of 608 seats. The Nazis' 230 made them by far the **largest party**, but not a majority. That is why Hindenburg was *not* forced to appoint Hitler, and in fact refused to in August 1932. SPD + KPD = 222 seats, which is fewer than 230. The Nazis and Communists were bitter enemies, not coalition partners.",
        difficulty: "core",
        guideRef: "road-to-chancellor",
        hints: [
          "How many seats would a party need for a majority of 608?",
          "Add up the SPD and KPD seats and compare.",
          "Largest party and majority party are not the same thing.",
        ],
        strategy: "Use precise evidence",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m1-q11",
        question: "Why was the **Enabling Act** of 23 March 1933 so important?",
        options: [
          "It made Hitler Chancellor for the first time",
          "It allowed Hitler's government to make laws without the Reichstag's approval, for four years",
          "It took the vote away from all women",
          "It combined the offices of President and Chancellor",
        ],
        answerIndex: 1,
        explanation:
          "The Enabling Act let the Cabinet, in effect Hitler, **pass laws without the Reichstag** for four years, so democracy could be dismantled using the law itself. Hitler had already been Chancellor since 30 January 1933. Combining President and Chancellor came later, after Hindenburg died in August 1934.",
        difficulty: "core",
        guideRef: "creating-a-dictatorship",
        hints: [
          "Who normally passes laws in a democracy?",
          "If the government can make laws on its own, what is the Reichstag still for?",
          "Hitler was already Chancellor by March 1933, so it wasn't about getting the job.",
        ],
        strategy: "Judge significance",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m1-q12",
        question:
          "**Source D**: a description (written for this exercise) of a real Nazi election poster from 1932 titled *'Our last hope: Hitler'*. The poster shows a large crowd of tired, grey-faced ordinary men and women, many of them clearly poor or out of work, beneath the slogan in large letters. It contains no detailed policies.\n\nWhich group was this poster mainly designed to persuade, and how?",
        options: [
          "Wealthy industrialists, by promising them lower taxes and bigger profits",
          "Army officers, by promising to rebuild the navy",
          "Communist Party members, by praising the Soviet Union",
          "Ordinary Germans hit by the Depression, by suggesting that everything else had failed and only Hitler could rescue them",
        ],
        answerIndex: 3,
        explanation:
          "The crowd of poor, weary people is meant to look like the voters themselves. The words 'last hope' suggest that all other parties had failed, and the lack of detailed policy is typical of Nazi propaganda's **simple, emotional messages**. It is propaganda, made to persuade rather than inform. Industrialists were targeted in other ways, such as private meetings and anti-communist promises, not through images of the poor.",
        difficulty: "core",
        guideRef: "road-to-chancellor",
        hints: [
          "Who is shown in the poster? Propaganda often shows its audience to itself.",
          "What does the word 'last' imply about every other party?",
          "Think about who was most desperate in 1932.",
        ],
        strategy: "Think about purpose",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m1-q13",
        question:
          "A student says the Great Depression was a **crisis**, not a weakness of government. A classmate replies that the crisis *exposed* the weakness of Weimar's government. Which example best supports the classmate's point?",
        options: [
          "Chancellor Brüning could not get a Reichstag majority for his policies, so from 1930 he governed through President Hindenburg's emergency decrees under Article 48",
          "Hitler flew from city to city to speak at rallies in 1932",
          "Reparations were set at £6.6 billion in 1921",
          "Share prices on Wall Street collapsed in October 1929",
        ],
        answerIndex: 0,
        explanation:
          "This example **links** the two factors. The Depression (crisis) split the coalition, and because no majority could be found, government came to depend on the President's emergency powers (weakness). Democracy was being bypassed even before Hitler arrived. The Wall Street collapse is a crisis on its own and shows nothing about how the German government coped. Hitler's flights are an example of leadership.",
        difficulty: "challenge",
        guideRef: "why-hitler-rose",
        hints: [
          "You need an example that contains BOTH a crisis AND a sign that the system stopped working.",
          "Which option describes how the German government responded to the Depression?",
          "Article 48 let the President rule by decree. Why is government by decree a sign of weakness in a democracy?",
        ],
        strategy: "Link the causes",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m1-q14",
        question:
          "Which sequence puts these events in the correct chronological order?\n\n- Night of the Long Knives\n- Enabling Act\n- Death of President Hindenburg\n- Reichstag Fire\n- Other political parties banned",
        options: [
          "Reichstag Fire → Night of the Long Knives → Enabling Act → other parties banned → death of Hindenburg",
          "Enabling Act → Reichstag Fire → other parties banned → death of Hindenburg → Night of the Long Knives",
          "Reichstag Fire → Enabling Act → other parties banned → Night of the Long Knives → death of Hindenburg",
          "Reichstag Fire → Enabling Act → Night of the Long Knives → other parties banned → death of Hindenburg",
        ],
        answerIndex: 2,
        explanation:
          "Reichstag Fire (27 February 1933) → Enabling Act (23 March 1933) → other parties banned (July 1933) → Night of the Long Knives (30 June 1934) → Hindenburg's death (2 August 1934). The most tempting wrong order puts the Night of the Long Knives before the ban on parties, but the purge of the SA came a year later, in 1934, once the opposition parties had already gone.",
        difficulty: "challenge",
        guideRef: "creating-a-dictatorship",
        hints: [
          "Split the events into 1933 and 1934.",
          "The Fire was used to justify the emergency decree, *before* the election and the Enabling Act.",
          "Hindenburg's death let Hitler become Führer. Hitler had dealt with the SA just weeks before.",
        ],
        strategy: "Put it in chronological order",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m1-q15",
        question:
          "**Interpretation A**: the British historian Alan Bullock, writing in 1952, argued that Hitler did not seize power but was 'jobbed into office by a backstairs intrigue'.\n\nWhich piece of evidence best supports Interpretation A?",
        options: [
          "The Nazis won 37.3% of the vote in July 1932, more than any other party",
          "In January 1933 Franz von Papen persuaded President Hindenburg to appoint Hitler, believing he and other conservatives in the Cabinet could control him",
          "Hitler's speeches attracted huge, enthusiastic crowds",
          "Hyperinflation in 1923 destroyed the savings of many middle-class families",
        ],
        answerIndex: 1,
        explanation:
          "'Jobbed into office by a backstairs intrigue' means Hitler got the job through a **secret deal among a few powerful people**, which is exactly what the Papen–Hindenburg arrangement was. The 37.3% vote is tempting, but it supports a *different* emphasis: genuine mass support. Bullock is stressing the backroom deal over the votes.",
        difficulty: "challenge",
        guideRef: "why-hitler-rose",
        hints: [
          "Work out what 'backstairs intrigue' means: is it public or secret, many people or few?",
          "Which option describes a decision made by a small group of people behind closed doors?",
          "Mass votes and big crowds support a different interpretation.",
        ],
        strategy: "Evaluate interpretations",
      },
    ],
  },

  // =========================================================================
  // MCQ PAPER 2
  // =========================================================================
  {
    id: "hitler-rise-m2",
    title: "MCQ Paper 2",
    questions: [
      {
        kind: "mcq",
        id: "hitler-rise-m2-q01",
        question: "Which part of the Treaty of Versailles is known as the 'war guilt clause'?",
        options: ["Article 48", "Article 231", "The Dawes Plan", "The 25-Point Programme"],
        answerIndex: 1,
        explanation:
          "**Article 231** made Germany accept responsibility for the loss and damage caused by the war, and it was used to justify reparations (the 'B' for Blame in LAMB). Article 48 is easy to confuse with it, but that is part of the *Weimar constitution*: the President's emergency powers.",
        difficulty: "warmup",
        guideRef: "treaty-of-versailles",
        hints: ["It is an article of the treaty, not of the Weimar constitution."],
        strategy: "Use precise evidence",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m2-q02",
        question: "Under the Weimar constitution of 1919, who could vote?",
        options: [
          "Only men over 25 who owned property",
          "Only men over 21",
          "Men and women over 25 who paid taxes",
          "All men and women aged 20 and over",
        ],
        answerIndex: 3,
        explanation:
          "The constitution gave the vote to **all men and women over 20**, which made Germany one of the most democratic countries in the world in 1919. Women over 30 had only just won the vote in Britain in 1918, so a men-only answer may feel likely, but German women voted from January 1919.",
        difficulty: "warmup",
        guideRef: "weimar-republic",
        hints: ["Weimar was unusually democratic for its time, so think 'everyone', with a low age limit."],
        strategy: "Use precise evidence",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m2-q03",
        question: "In January 1923, which country sent troops, together with Belgium, to occupy the Ruhr industrial region?",
        options: ["France", "Britain", "The USA", "Poland"],
        answerIndex: 0,
        explanation:
          "When Germany fell behind with reparation payments, **French and Belgian** troops occupied the Ruhr to take goods such as coal instead. Britain disapproved of the occupation and did not take part.",
        difficulty: "warmup",
        guideRef: "crises-1919-1923",
        hints: ["Which neighbour of Germany had suffered most damage in the war and wanted reparations most?"],
        strategy: "Use precise evidence",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m2-q04",
        question: "Which book did Hitler write while he was in Landsberg prison in 1924?",
        options: ["*The Communist Manifesto*", "*Work and Bread*", "*Mein Kampf* ('My Struggle')", "*The 25-Point Programme*"],
        answerIndex: 2,
        explanation:
          "In prison Hitler dictated the first part of ***Mein Kampf***, which set out his ideas, including his antisemitism and his aim of winning 'living space' in the East. *The Communist Manifesto* was written by Marx and Engels in 1848. 'Work and bread' was a later Nazi election slogan, and the 25-Point Programme was the party's 1920 manifesto.",
        difficulty: "warmup",
        guideRef: "early-nazi-party",
        hints: ["Its title means 'My Struggle'."],
        strategy: "Use precise evidence",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m2-q05",
        question: "What did **Article 48** of the Weimar constitution allow?",
        options: [
          "The Chancellor to dismiss the President",
          "The army to choose the government in wartime",
          "Germany to stop paying reparations in an emergency",
          "The President to issue emergency decrees without the Reichstag's approval",
        ],
        answerIndex: 3,
        explanation:
          "Article 48 let the **President rule by decree in an emergency**. It was meant as a safety valve, but from 1930 it was used again and again, so democracy was bypassed and later Hitler's government could use the President's power too. Reparations had nothing to do with the constitution; they came from the Treaty of Versailles.",
        difficulty: "core",
        guideRef: "weimar-republic",
        hints: [
          "Article 48 is about emergency powers. Whose powers?",
          "The President was elected every seven years and was meant to be a strong figure above party politics.",
        ],
        strategy: "Use precise evidence",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m2-q06",
        question: "How was the **Kapp Putsch** of March 1920 defeated?",
        options: [
          "Workers in Berlin went on a general strike, so the rebels could not run the city",
          "The army fired on Kapp's Freikorps troops and drove them out of Berlin",
          "The French army marched into Berlin to restore the government",
          "Hitler's SA defended the government buildings",
        ],
        answerIndex: 0,
        explanation:
          "Kapp's right-wing Freikorps took over Berlin and the government fled. The army **refused to act** against them. A **general strike** by workers stopped gas, water, electricity and transport, and the putsch collapsed within days. The tempting idea that the army fired on the rebels is the reverse of what happened, and that refusal showed how little the army could be relied on to defend democracy.",
        difficulty: "core",
        guideRef: "crises-1919-1923",
        hints: [
          "The army did not help the government. So who did?",
          "Think about what happens to a city if nobody goes to work.",
        ],
        strategy: "Explain causes",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m2-q07",
        question:
          "**Source A**: Gustav Stresemann, Germany's Foreign Minister, warning about the economy in the late 1920s (adapted).\n\n> Germany is dancing on a volcano. If the short-term loans are called back, a large section of our economy would collapse.\n\nWhat was Stresemann warning about?",
        options: [
          "That a volcano in the Rhineland threatened German farms",
          "That the Nazis were about to take power",
          "That Germany's recovery was built on borrowed American money, which could be withdrawn at any time",
          "That France was preparing to occupy the Ruhr again",
        ],
        answerIndex: 2,
        explanation:
          "The 'volcano' is a **metaphor**: the prosperity looked fine on the surface, but it rested on **short-term US loans** that could be recalled, which is exactly what happened after the Wall Street Crash in 1929. 'The Nazis were about to take power' is a hindsight trap: in the late 1920s the Nazis were a tiny party with 2.6% of the vote in 1928.",
        difficulty: "core",
        guideRef: "golden-years-and-depression",
        hints: [
          "'Dancing on a volcano' is a metaphor. Is everything as safe as it looks?",
          "What exactly could be 'called back'?",
          "Avoid hindsight: how strong were the Nazis in the late 1920s?",
        ],
        strategy: "Make an inference",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m2-q08",
        question:
          "**Source B**: Nazi results in two Reichstag elections.\n\n| Election | Nazi share of vote | Nazi seats |\n|---|---|---|\n| May 1928 | 2.6% | 12 |\n| September 1930 | 18.3% | 107 |\n\nWhich is the best explanation for this change?",
        options: [
          "The Munich Putsch had made Hitler famous the year before",
          "The Depression that followed the Wall Street Crash brought mass unemployment, and many voters turned to a party promising radical change",
          "The Nazis had already banned the other parties",
          "Women were allowed to vote for the first time in 1930",
        ],
        answerIndex: 1,
        explanation:
          "Between these elections came the **Wall Street Crash (October 1929)** and the start of the Depression. Desperate voters deserted the moderate parties. The Munich Putsch was in 1923, years earlier, and in 1928, after it, the Nazis were still tiny. Other parties were banned only in 1933, and women had voted since 1919.",
        difficulty: "core",
        guideRef: "road-to-chancellor",
        hints: [
          "What major event happened between May 1928 and September 1930?",
          "Check the dates of each distractor: are they in the right period?",
          "People vote for extremes when ordinary politics seems to have failed them.",
        ],
        strategy: "Link the causes",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m2-q09",
        question:
          "**Source C**: Communist Party (KPD) results in Reichstag elections.\n\n| Election | KPD share of vote | KPD seats |\n|---|---|---|\n| May 1928 | 10.6% | 54 |\n| July 1932 | 14.3% | 89 |\n| November 1932 | 16.9% | 100 |\n\nHow does Source C help explain why many business leaders and middle-class Germans backed the Nazis?",
        options: [
          "It shows the Communists had won a majority in 1932",
          "It shows the Nazis and Communists had joined forces against the Republic",
          "It shows Communist support was falling, so people felt safe",
          "Communist support was rising, which frightened people who feared a revolution like Russia's in 1917, and the Nazis presented themselves as the strongest barrier to communism",
        ],
        answerIndex: 3,
        explanation:
          "The KPD's vote **rose steadily**, reaching 100 seats in November 1932. Property owners, businessmen and many middle-class families feared a communist revolution that could take their land, factories and savings. The Nazis exploited this **fear of communism**. 100 seats out of over 580 is nowhere near a majority, and the Nazis and Communists fought each other in the streets.",
        difficulty: "core",
        guideRef: "road-to-chancellor",
        hints: [
          "Is the KPD vote going up or down?",
          "What had communists done to property owners in Russia after 1917?",
          "Who would a frightened factory owner turn to for protection?",
        ],
        strategy: "Think about who benefited",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m2-q10",
        question: "Why was the **Reichstag Fire** of 27 February 1933 so useful to Hitler?",
        options: [
          "It destroyed records of illegal Nazi election spending",
          "A young Dutch communist, Marinus van der Lubbe, was arrested at the scene, so Hitler claimed a communist plot and persuaded Hindenburg to sign an emergency decree suspending civil rights",
          "It killed many Communist members of the Reichstag",
          "It allowed Hitler to become President straight away",
        ],
        answerIndex: 1,
        explanation:
          "Hitler used the fire as 'proof' of a **communist uprising**. The next day Hindenburg signed a decree suspending freedoms such as free speech and a free press, and thousands of communists were arrested before the March 1933 election. Historians still debate whether van der Lubbe acted alone. No deputies died in the fire, and Hitler did not combine the roles of President and Chancellor until August 1934.",
        difficulty: "core",
        guideRef: "creating-a-dictatorship",
        hints: [
          "Who was arrested at the scene, and which political group did he belong to?",
          "How could Hitler use a 'communist threat' to get emergency powers?",
          "Which article of the constitution allowed the President to issue emergency decrees?",
        ],
        strategy: "Think about who benefited",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m2-q11",
        question:
          "**Source D**: Kurt Lüdecke, an early Nazi supporter, recalling what Hitler told him in Landsberg prison in 1924. From Lüdecke's book *I Knew Hitler*, published in 1937 after he had fallen out with the Nazis and left Germany (adapted).\n\n> Instead of working to achieve power by armed coup, we shall have to hold our noses and enter the Reichstag... Sooner or later we shall have a majority.\n\nWhat is the main reason a historian should treat Source D with care, and what makes it still useful?",
        options: [
          "Lüdecke had never met Hitler, so he could know nothing about him",
          "It was written in 1924, too early to know what would happen",
          "Lüdecke was recalling a private conversation from memory more than ten years later, after turning against the Nazis; but what it says matches what Hitler actually did after 1924",
          "It is a secondary source, so it cannot be used as evidence at all",
        ],
        answerIndex: 2,
        explanation:
          "**Provenance:** a memoir written 13 years later, recalling a private conversation from memory, by a man who now had reasons to dislike Hitler. The words may not be exact. But it can be **cross-referenced**: after 1925 Hitler really did rebuild the party to win power through elections. The source was *published* in 1937, not written in 1924. It is still a primary source about Lüdecke's experience, and no source is automatically useless.",
        difficulty: "core",
        guideRef: "early-nazi-party",
        hints: [
          "Check the provenance (NOP): when was it published compared with the conversation?",
          "Did Lüdecke's attitude to the Nazis change before he wrote?",
          "Can you cross-reference his claim with what Hitler did after 1925?",
        ],
        strategy: "Check the provenance (NOP)",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m2-q12",
        question: "Why did many Germans call the Treaty of Versailles a **'Diktat'** (a dictated peace)?",
        options: [
          "Germany was not allowed to take part in the negotiations and had to sign or face a renewed war",
          "It was written by a dictator",
          "Germany dictated the terms to France and Britain",
          "It was signed by Hitler on behalf of Germany",
        ],
        answerIndex: 0,
        explanation:
          "The terms were drawn up by the victors. Germany was **not invited to negotiate** and was told to sign or face a renewed war. This sense of being *forced* made the treaty easier to hate, and the politicians who signed it were blamed. Hitler had nothing to do with signing it; in 1919 he was an unknown ex-soldier.",
        difficulty: "core",
        guideRef: "treaty-of-versailles",
        hints: [
          "'Dictated' means imposed without discussion.",
          "Was Germany allowed a say in the terms?",
        ],
        strategy: "Explain causes",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m2-q13",
        question: "Why did Hitler order the killing of Ernst Röhm and other SA leaders in the **Night of the Long Knives** (30 June 1934)?",
        options: [
          "Röhm had started the Reichstag Fire",
          "The SA had voted against the Enabling Act",
          "Röhm was plotting with the Communists to bring back the Kaiser",
          "Army leaders feared Röhm's plans to merge the SA with the army under his control, and Hitler needed the army's support to succeed the dying Hindenburg",
        ],
        answerIndex: 3,
        explanation:
          "The SA had about 3 million members, and Röhm wanted it to absorb the army. The army's generals were alarmed, and Hitler needed them on his side as Hindenburg's death approached. Hitler had Röhm and other SA leaders murdered, along with other opponents such as former Chancellor von Schleicher. Estimates of the number killed range from about 85 to several hundred. The army then swore an oath of loyalty to Hitler. The 'communist plot to restore the Kaiser' makes no sense: communists opposed the monarchy.",
        difficulty: "challenge",
        guideRef: "creating-a-dictatorship",
        hints: [
          "Which powerful institution did Hitler need to keep happy in 1934?",
          "What did Röhm want to happen to the SA and the army?",
          "Who would decide who replaced Hindenburg as head of state, and who could stop it?",
        ],
        strategy: "Think about who benefited",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m2-q14",
        question: "Which sentence best **links** two factors in Hitler's rise, rather than just listing them?",
        options: [
          "The Depression caused unemployment. Hitler was also a good speaker.",
          "Because the Depression left about 6 million people unemployed and desperate, Nazi propaganda promising 'work and bread' reached a far bigger, more receptive audience, so the crisis made Hitler's leadership far more effective.",
          "Hitler became Chancellor in January 1933, and the Enabling Act was passed in March 1933.",
          "The most important factor was Hitler's leadership because he was the leader of the Nazis.",
        ],
        answerIndex: 1,
        explanation:
          "A linking sentence shows how one factor **made another more powerful**, using connectives such as 'because', 'so' and 'which meant'. The first sentence names two factors but does not connect them, the third just describes chronology, and the fourth goes round in a circle without explaining anything.",
        difficulty: "challenge",
        guideRef: "why-hitler-rose",
        hints: [
          "Look for connectives like 'because', 'so', 'which meant'.",
          "Does the sentence explain HOW one factor affected the other?",
          "Watch out for sentences that only describe events or repeat themselves.",
        ],
        strategy: "Link the causes",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m2-q15",
        question: "Historians debate how 'golden' the years 1924–29 really were. Which evidence most **weakens** the idea that they were golden for all Germans?",
        options: [
          "Germany joined the League of Nations in 1926",
          "The Rentenmark stabilised the currency after 1923",
          "Farmers faced falling food prices and growing debts, and the whole recovery depended on short-term loans from the USA",
          "Germany signed the Locarno Treaties with France and Belgium in 1925",
        ],
        answerIndex: 2,
        explanation:
          "Many **farmers** struggled throughout the 1920s, and the boom rested on **borrowed American money**, so the recovery was fragile and uneven. The League, the Rentenmark and Locarno are all real *achievements* of the period. They support the 'golden' view rather than weaken it.",
        difficulty: "challenge",
        guideRef: "golden-years-and-depression",
        hints: [
          "Three options are genuine successes. You want the evidence that points the other way.",
          "Ask 'how typical?': did every group in society share the recovery?",
          "What was the recovery built on, and how secure was it?",
        ],
        strategy: "Consider the counter-argument",
      },
    ],
  },

  // =========================================================================
  // MCQ PAPER 3
  // =========================================================================
  {
    id: "hitler-rise-m3",
    title: "MCQ Paper 3",
    questions: [
      {
        kind: "mcq",
        id: "hitler-rise-m3-q01",
        question: "In which country was Adolf Hitler born, in 1889?",
        options: ["Austria (then part of Austria-Hungary)", "Germany", "Switzerland", "Poland"],
        answerIndex: 0,
        explanation:
          "Hitler was born in **Braunau am Inn, Austria**, in 1889. He moved to Munich in 1913, served in the German (Bavarian) army in the First World War, and only became a German citizen in 1932. Many people assume he was German-born because he led Germany.",
        difficulty: "warmup",
        guideRef: "early-nazi-party",
        hints: ["He moved to Munich in 1913 from Vienna."],
        strategy: "Use precise evidence",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m3-q02",
        question: "Who were the **Spartacists**?",
        options: [
          "Right-wing ex-soldiers who tried to seize Berlin in 1920",
          "Nazi stormtroopers who fought in the streets",
          "Communists who tried to start a revolution in Berlin in January 1919",
          "French soldiers who occupied the Ruhr",
        ],
        answerIndex: 2,
        explanation:
          "The Spartacists, led by **Rosa Luxemburg and Karl Liebknecht**, were communists who rose up in Berlin in January 1919. The government used the right-wing *Freikorps* to crush them. Right-wing ex-soldiers seizing Berlin in 1920 describes the **Kapp Putsch**, a threat from the opposite side.",
        difficulty: "warmup",
        guideRef: "crises-1919-1923",
        hints: ["They were named after Spartacus, who led a slave revolt in ancient Rome. Think left-wing revolution."],
        strategy: "Use precise evidence",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m3-q03",
        question: "How did Stresemann's government end hyperinflation in late 1923?",
        options: [
          "By leaving the League of Nations",
          "By printing even more banknotes",
          "By sending troops to occupy the Ruhr",
          "By replacing the worthless mark with a new currency, the Rentenmark",
        ],
        answerIndex: 3,
        explanation:
          "In November 1923 the government introduced the **Rentenmark**, a new currency issued in strictly limited amounts, which restored confidence. Printing more money was the *cause* of hyperinflation, not the cure. Germany only joined the League in 1926, so it could not leave it in 1923.",
        difficulty: "warmup",
        guideRef: "golden-years-and-depression",
        hints: ["If old money has become worthless, what might you replace it with?"],
        strategy: "Explain causes",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m3-q04",
        question: "Whose death in August 1934 allowed Hitler to combine the posts of Chancellor and President and call himself **Führer**?",
        options: ["Ernst Röhm", "President Paul von Hindenburg", "Gustav Stresemann", "Friedrich Ebert"],
        answerIndex: 1,
        explanation:
          "**Hindenburg** died on 2 August 1934, and Hitler merged the two offices. The army then swore an oath of personal loyalty to him. Röhm had been killed a month earlier in the Night of the Long Knives, but he was SA leader, not President.",
        difficulty: "warmup",
        guideRef: "creating-a-dictatorship",
        hints: ["Who was President of Germany from 1925 to 1934?"],
        strategy: "Put it in chronological order",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m3-q05",
        question:
          "**Source A**: from the front page of *Deutsche Zeitung*, a German nationalist newspaper, on 28 June 1919, the day the treaty was signed (translated, adapted).\n\n> Vengeance! German nation! Today in the Hall of Mirrors the disgraceful treaty is being signed. Do not forget it! The German people will press forward to regain their place among the nations.\n\nWhat was the main purpose of Source A?",
        options: [
          "To explain the terms of the treaty calmly and accurately",
          "To persuade Germans to accept the treaty and move on",
          "To stir up anger and keep alive the desire for revenge against the treaty",
          "To report the views of the French government",
        ],
        answerIndex: 2,
        explanation:
          "Exclamation marks, the word 'Vengeance!', calling the treaty 'disgraceful' and repeating 'Do not forget it!' all show a newspaper trying to **stir emotion**, not inform. The provenance fits: a *nationalist* paper on the day of signing. It gives no terms at all, so it is not a calm explanation, and it urges Germans never to accept the treaty.",
        difficulty: "core",
        guideRef: "treaty-of-versailles",
        hints: [
          "Look at the language: is it calm or emotional?",
          "Check the provenance: what kind of newspaper was this?",
          "What does it want readers to *do* or *feel*?",
        ],
        strategy: "Think about purpose",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m3-q06",
        question: "Why was the new constitution drawn up in the small town of **Weimar** in 1919, rather than in Berlin?",
        options: [
          "Berlin was too violent and unstable, with street fighting such as the Spartacist uprising",
          "The Allies had occupied Berlin after the war",
          "Weimar was already the capital of Germany",
          "The Kaiser was still living in his palace in Berlin",
        ],
        answerIndex: 0,
        explanation:
          "In early 1919 Berlin was gripped by **unrest and street fighting**, including the Spartacist uprising, so the National Assembly met in quiet Weimar, a town also famous as the home of the writers Goethe and Schiller. The Kaiser had already fled to the Netherlands in November 1918, and Allied troops did not occupy Berlin.",
        difficulty: "core",
        guideRef: "weimar-republic",
        hints: [
          "What was happening on the streets of Berlin in January 1919?",
          "Where was the Kaiser by then?",
        ],
        strategy: "Explain causes",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m3-q07",
        question: "Hyperinflation in 1923 ruined many Germans, but some gained. Who was **most likely to benefit**?",
        options: [
          "A pensioner living on a fixed monthly pension",
          "A family with savings in the bank",
          "A clerk whose salary was paid once a month",
          "A farmer or businessman with a large loan or mortgage, which could now be paid off with almost worthless money",
        ],
        answerIndex: 3,
        explanation:
          "Debts were fixed in marks, so as the mark collapsed, **borrowers could repay their loans** for next to nothing. Savers and pensioners lost almost everything, and anyone paid monthly found their pay worthless before they could spend it (many workers began to be paid daily). It is a common mistake to think hyperinflation hurt *everyone* equally.",
        difficulty: "core",
        guideRef: "crises-1919-1923",
        hints: [
          "Think about who *owes* money and who is *owed* money.",
          "If a debt is 10,000 marks and a loaf costs billions, how hard is that debt to repay?",
        ],
        strategy: "Think about who benefited",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m3-q08",
        question: "Why was Hitler's **trial** in early 1924 a success for him, even though the Munich Putsch had failed?",
        options: [
          "He was found not guilty and released at once",
          "Newspapers across Germany reported his speeches from the dock, making him nationally famous, and sympathetic judges gave him a light sentence",
          "The trial was held in secret, which protected his reputation",
          "As a result of the trial, the judges banned the Communist Party",
        ],
        answerIndex: 1,
        explanation:
          "Hitler used the courtroom as a **stage**: his long nationalist speeches were reported nationwide, turning a local Bavarian agitator into a national figure. He was found *guilty* of treason but received only **five years**, and he served about **nine months**. The trial was public, not secret, which is exactly why it helped him.",
        difficulty: "core",
        guideRef: "early-nazi-party",
        hints: [
          "Was the trial public or secret? Who was listening?",
          "Treason is a very serious crime. Was his sentence harsh or light?",
          "How could a failure be turned into publicity?",
        ],
        strategy: "Judge significance",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m3-q09",
        question: "Why did Franz von Papen and other conservatives persuade President Hindenburg to appoint Hitler Chancellor in January 1933?",
        options: [
          "They wanted the Nazis' mass support behind their own government and believed they could control Hitler, as only three of the eleven Cabinet members would be Nazis",
          "Hitler had won an overall majority in the November 1932 election",
          "Hitler had threatened another armed putsch, and the army had promised to support him",
          "Hindenburg admired Hitler and had campaigned for him in the 1932 presidential election",
        ],
        answerIndex: 0,
        explanation:
          "The conservative elites lacked popular support. Hitler led the largest party. Papen thought Hitler could be 'tamed' by surrounding him with conservatives, which turned out to be a catastrophic **miscalculation**. The Nazis never won a majority in a free election. Hindenburg had actually *defeated* Hitler in the 1932 presidential election and had disliked him.",
        difficulty: "core",
        guideRef: "road-to-chancellor",
        hints: [
          "What did Papen and the conservatives lack that Hitler had?",
          "How many Nazis were in Hitler's first Cabinet?",
          "Who stood against Hitler in the 1932 presidential election?",
        ],
        strategy: "Think about who benefited",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m3-q10",
        question:
          "**Source B**: a description (written for this exercise) of the Nazi campaign for the presidential election of April 1932. Hitler hired an aeroplane and flew from city to city under the slogan *'Hitler over Germany'*, sometimes speaking at several huge rallies in a single day. The Nazis also used loudspeaker vans, films and gramophone records.\n\nWhat image of Hitler was this campaign designed to create?",
        options: [
          "A cautious, traditional politician who respected the old elites",
          "A former soldier who wanted to bring back the Kaiser",
          "A modern, energetic leader who could reach every part of Germany, unlike the 'old' politicians",
          "A humble man of the people who travelled third class by train",
        ],
        answerIndex: 2,
        explanation:
          "In 1932 air travel was new and exciting. Flying between rallies made Hitler seem **modern, dynamic and everywhere at once**, a contrast to elderly politicians. Using new technology (planes, loudspeakers, film) was a hallmark of Goebbels's propaganda. The campaign was the opposite of 'cautious' or 'traditional', and the Nazis did not campaign to restore the Kaiser.",
        difficulty: "core",
        guideRef: "road-to-chancellor",
        hints: [
          "How common was air travel in 1932?",
          "What impression does someone give if they appear in several cities in one day?",
          "Compare this with how traditional politicians campaigned.",
        ],
        strategy: "Think about purpose",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m3-q11",
        question:
          "**Source C**: from the Decree for the Protection of People and State, signed by President Hindenburg on 28 February 1933, the day after the Reichstag Fire (translated, adapted).\n\n> Restrictions on personal liberty, on the right of free expression of opinion, including freedom of the press, on the rights of assembly and association... are permissible beyond the legal limits otherwise prescribed.\n\nWhat can you infer from Source C?",
        options: [
          "The Nazis had already abolished the Reichstag",
          "Germans now had more freedom of speech than before",
          "The decree applied only to foreigners living in Germany",
          "Basic rights protected by the Weimar constitution could now be set aside, allowing the police to arrest opponents and shut down newspapers",
        ],
        answerIndex: 3,
        explanation:
          "'Restrictions... beyond the legal limits' means the government could **override constitutional rights**: free speech, a free press and the right to meet. Thousands of communists were soon arrested and opposition newspapers banned, all just before the March 1933 election. The Reichstag still existed; it passed the Enabling Act in March.",
        difficulty: "core",
        guideRef: "creating-a-dictatorship",
        hints: [
          "Which freedoms does the decree mention?",
          "What does 'beyond the legal limits otherwise prescribed' mean in plain English?",
          "Think about how this would help the Nazis in the election a week later.",
        ],
        strategy: "Make an inference",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m3-q12",
        question:
          "**Source D**: unemployment and the Nazi vote (approximate unemployment figures).\n\n| Election | Unemployed in Germany | Nazi share of vote |\n|---|---|---|\n| May 1928 | about 1.4 million | 2.6% |\n| September 1930 | about 3 million | 18.3% |\n| July 1932 | about 5.5–6 million | 37.3% |\n\nWhat is the most careful conclusion from Source D?",
        options: [
          "Every unemployed German voted for the Nazis",
          "The rising Nazi vote caused unemployment to rise",
          "Unemployment fell as the Nazi vote rose",
          "As unemployment grew, so did the Nazi vote, suggesting the Depression helped the Nazis, although the table alone cannot prove who voted for them",
        ],
        answerIndex: 3,
        explanation:
          "The two columns rise together, a strong sign that the **Depression** helped the Nazis. But a historian should be careful: the table does not show *who* voted Nazi. In fact many unemployed workers voted Communist, while much Nazi support came from the middle classes and farmers. 'Every unemployed German voted Nazi' goes far beyond the evidence.",
        difficulty: "core",
        guideRef: "golden-years-and-depression",
        hints: [
          "Do the two columns move in the same direction?",
          "Does a table of totals tell you which individuals voted for which party?",
          "Choose the conclusion that matches the evidence without claiming too much.",
        ],
        strategy: "Make an inference",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m3-q13",
        question:
          "**Interpretation A** (written for this exercise): 'Hitler came to power because millions of Germans were won over by his speeches and by brilliant Nazi propaganda.'\n\n**Interpretation B** (written for this exercise): 'Hitler came to power because a small group of conservative politicians around President Hindenburg handed him the job.'\n\nWhy might two historians reach such different interpretations?",
        options: [
          "One of the historians must have invented their evidence",
          "They focus on different evidence and moments: A on the mass votes of 1930–32, B on the backroom decisions of January 1933",
          "Interpretation B was written before 1933, so it could not know the facts",
          "Interpretation A is a primary source, so it must be more reliable",
        ],
        answerIndex: 1,
        explanation:
          "Both interpretations can rest on **real evidence**. A emphasises the election results (37.3% in July 1932); B emphasises the deal of January 1933, when Hitler was appointed after his vote had *fallen*. Different interpretations usually come from **different emphasis and focus**, not invented facts. Both are later interpretations, not primary sources, and neither is dated before 1933.",
        difficulty: "challenge",
        guideRef: "why-hitler-rose",
        hints: [
          "Is there real evidence that could support each interpretation?",
          "Which period or event is each one looking at?",
          "Historians rarely disagree because one is lying; think about emphasis.",
        ],
        strategy: "Evaluate interpretations",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m3-q14",
        question: "Some historians argue that the Treaty of Versailles was **less crushing** than most Germans believed. Which fact best supports that view?",
        options: [
          "Germany kept most of its territory and its industrial heartland, remained a united country, and in practice paid only a fraction of the reparations total",
          "The German army was cut to 100,000 men",
          "Germany lost all of its overseas colonies",
          "Article 231 blamed Germany for the war",
        ],
        answerIndex: 0,
        explanation:
          "Germany lost about **13%** of its European land but stayed united, kept the Ruhr's industry, and, after the Dawes and Young Plans, actually paid only part of what was demanded. That supports the 'less crushing' view. The army limits, lost colonies and war guilt clause are all real terms, but they support the *opposite* view that the treaty was harsh.",
        difficulty: "challenge",
        guideRef: "treaty-of-versailles",
        hints: [
          "Three options are real terms that Germans resented. Which one points the other way?",
          "Consider the counter-argument: what did Germany *keep*?",
          "Compare the reparations demanded with what was actually paid after the Dawes and Young Plans.",
        ],
        strategy: "Consider the counter-argument",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m3-q15",
        question: "The Enabling Act was passed on 23 March 1933 by **444 votes to 94**. Which statement describes how it was passed most accurately?",
        options: [
          "It was passed freely after a fair debate, so it was fully democratic",
          "It was passed with Nazi votes alone, because every other party boycotted the vote",
          "It gained the two-thirds majority needed, but Communist deputies had been arrested or kept away, SA men surrounded the chamber, and the Centre Party voted for it after being given promises",
          "It failed in the Reichstag, so Hindenburg passed it by decree instead",
        ],
        answerIndex: 2,
        explanation:
          "Legally the Act got the **two-thirds majority** a change to the constitution needed. But the vote took place amid **intimidation**: Communist deputies had been arrested or had fled, the SA filled the building, and the Catholic Centre Party backed it after promises to protect the Church. Only the Social Democrats voted against (the 94). So 'legal' is not the same as 'fair and free'. Other parties did vote for it, so it was not passed with Nazi votes alone.",
        difficulty: "challenge",
        guideRef: "creating-a-dictatorship",
        hints: [
          "444 to 94 is more than two-thirds. So it was legally passed, but how freely?",
          "Where were the Communist deputies in March 1933, after the Reichstag Fire decree?",
          "Which party voted against, and why might the Centre Party have voted for it?",
        ],
        strategy: "Avoid hindsight",
      },
    ],
  },

  // =========================================================================
  // MCQ PAPER 4
  // =========================================================================
  {
    id: "hitler-rise-m4",
    title: "MCQ Paper 4",
    questions: [
      {
        kind: "mcq",
        id: "hitler-rise-m4-q01",
        question: "When was Hitler appointed Chancellor of Germany?",
        options: ["9 November 1923", "27 February 1933", "2 August 1934", "30 January 1933"],
        answerIndex: 3,
        explanation:
          "President Hindenburg appointed Hitler Chancellor on **30 January 1933**. 9 November 1923 was the failed Munich Putsch, 27 February 1933 was the Reichstag Fire, and 2 August 1934 was Hindenburg's death, when Hitler became Führer.",
        difficulty: "warmup",
        guideRef: "road-to-chancellor",
        hints: ["It happened at the very start of 1933, a few weeks before the Reichstag Fire."],
        strategy: "Put it in chronological order",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m4-q02",
        question: "Who became the first President of the Weimar Republic in 1919?",
        options: ["Paul von Hindenburg", "Friedrich Ebert", "Kaiser Wilhelm II", "Gustav Stresemann"],
        answerIndex: 1,
        explanation:
          "**Friedrich Ebert**, leader of the Social Democrats, was President from 1919 until his death in 1925. Hindenburg is the tempting answer, but he became President only in 1925, after Ebert died.",
        difficulty: "warmup",
        guideRef: "weimar-republic",
        hints: ["He was a Social Democrat who died in office in 1925."],
        strategy: "Put it in chronological order",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m4-q03",
        question: "Under the Treaty of Versailles, which territory did Germany have to return to **France**?",
        options: ["Alsace-Lorraine", "The Rhineland", "The Ruhr", "The Polish Corridor"],
        answerIndex: 0,
        explanation:
          "**Alsace-Lorraine**, taken by Germany in 1871, went back to France. The Rhineland stayed German but was demilitarised (no troops allowed), the Ruhr stayed German (France occupied it only in 1923), and the Polish Corridor went to Poland.",
        difficulty: "warmup",
        guideRef: "treaty-of-versailles",
        hints: ["Germany had taken this region from France in 1871."],
        strategy: "Use precise evidence",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m4-q04",
        question:
          "Our enquiry sorts the causes of dictatorship into **crises**, **weakness of government** and **charismatic leadership**. Where does the hyperinflation of 1923 belong?",
        options: ["Charismatic leadership", "A result of Nazi policies", "Crisis", "Propaganda"],
        answerIndex: 2,
        explanation:
          "Hyperinflation was an **economic crisis** that wiped out savings and damaged trust in the Republic. 'A result of Nazi policies' is a hindsight trap: in 1923 the Nazis were a small Bavarian party with no power at all.",
        difficulty: "warmup",
        guideRef: "why-hitler-rose",
        hints: ["Who was in government in 1923, and was it a person, an event or a system failure?"],
        strategy: "Weigh factors",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m4-q05",
        question: "What did the **'stab in the back'** myth claim?",
        options: [
          "That the German army had not really been defeated in 1918 but had been betrayed by politicians at home, the 'November Criminals'",
          "That France had attacked Germany first in 1914",
          "That the Kaiser had been murdered by communists",
          "That the Allies had broken the armistice by invading Germany",
        ],
        answerIndex: 0,
        explanation:
          "The myth claimed the army was **'stabbed in the back'** by the socialist and democratic politicians who signed the armistice. In fact army leaders Hindenburg and Ludendorff had themselves asked for an armistice because Germany could not go on fighting. The Kaiser was not murdered; he abdicated and lived in exile in the Netherlands until 1941.",
        difficulty: "core",
        guideRef: "treaty-of-versailles",
        hints: [
          "A 'stab in the back' is a betrayal by someone on your own side.",
          "Who signed the armistice in November 1918, and what were they called by their enemies?",
        ],
        strategy: "Avoid hindsight",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m4-q06",
        question:
          "**Source A**: political murders in Germany, 1919–1922, from figures collected at the time by the statistician Emil Julius Gumbel (as commonly quoted in textbooks, simplified).\n\n| | Murders by left-wing groups | Murders by right-wing groups |\n|---|---|---|\n| Number of murders | 22 | 354 |\n| Murders left unpunished | 4 | 326 |\n| Murderers executed | 10 | 0 |\n\nWhat is the best inference from Source A?",
        options: [
          "Left-wing groups committed more murders than right-wing groups",
          "The courts treated both sides equally",
          "The killers of right-wing victims were punished more harshly",
          "The courts, whose judges had mostly served under the Kaiser, were far harsher on the left than the right, which weakened the Republic's ability to defend itself",
        ],
        answerIndex: 3,
        explanation:
          "Right-wing groups committed far **more** murders (354 against 22), yet almost all went unpunished and none were executed. Left-wing killers were punished severely. Many judges were conservatives left over from the Kaiser's time who sympathised with the right, so the **legal system did not protect democracy**. Victims included the politicians Matthias Erzberger (1921) and Walther Rathenau (1922). 'Left-wing groups committed more murders' simply misreads the table.",
        difficulty: "core",
        guideRef: "crises-1919-1923",
        hints: [
          "First compare the number of murders on each side.",
          "Then compare how each side was punished.",
          "What does this suggest about the judges' attitudes?",
        ],
        strategy: "Make an inference",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m4-q07",
        question: "Which of these was one of the demands in the Nazis' **25-Point Programme** of 1920?",
        options: [
          "Bringing back the Kaiser",
          "Abolishing the Treaty of Versailles",
          "Proportional representation for all elections",
          "Equal citizenship for all religious and ethnic groups",
        ],
        answerIndex: 1,
        explanation:
          "The programme demanded the **abolition of the Treaty of Versailles**, a union of all German-speaking people, and land for Germany's population. Far from equal citizenship, it stated that Jewish people could not be German citizens, an early sign of the antisemitism at the heart of Nazism. The Nazis did not want the Kaiser back; they wanted a new kind of state.",
        difficulty: "core",
        guideRef: "early-nazi-party",
        hints: [
          "Which treaty did nationalists most hate?",
          "Was the Nazi Party for or against democracy and equality?",
        ],
        strategy: "Use precise evidence",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m4-q08",
        question: "In 1929 the **Young Plan** reduced Germany's reparations. Why did it nevertheless help Hitler?",
        options: [
          "Hitler joined the nationalist media owner Alfred Hugenberg in a campaign against it, and Hugenberg's newspapers gave Hitler national publicity and respectability",
          "It made the Nazis the largest party in the Reichstag straight away",
          "It forced Stresemann to resign and join the Nazis",
          "It cancelled American loans and so caused the Wall Street Crash",
        ],
        answerIndex: 0,
        explanation:
          "The Young Plan cut the total but still meant payments until **1988**. Nationalists campaigned against it, and Hugenberg's newspaper and film empire gave Hitler nationwide coverage and contacts with wealthy conservatives. The Nazis became the largest party only in July 1932. Stresemann supported the plan and died in October 1929.",
        difficulty: "core",
        guideRef: "golden-years-and-depression",
        hints: [
          "The Nazis were tiny in 1929. What did they need most?",
          "Who was Alfred Hugenberg, and what did he own?",
          "Check the dates: when did the Nazis become the largest party?",
        ],
        strategy: "Think about who benefited",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m4-q09",
        question: "The Nazis aimed different messages at different groups of voters. Which message was aimed especially at **farmers**?",
        options: [
          "Promises of 'work and bread' for the unemployed in the cities",
          "Promises of cheaper food for city shoppers",
          "Promises to restore the Kaiser's power",
          "Praise for country people as the heart of the nation and promises to help farmers struggling with debt and low prices",
        ],
        answerIndex: 3,
        explanation:
          "Farmers had suffered falling prices and debts since the late 1920s. Nazi propaganda praised rural Germans as the nation's 'blood and soil' and **promised help with debts and prices**. 'Work and bread' was aimed at unemployed workers, and 'cheaper food' would actually have *hurt* farmers, who needed higher prices.",
        difficulty: "core",
        guideRef: "road-to-chancellor",
        hints: [
          "What problems did German farmers face in the late 1920s?",
          "Would a farmer want food prices to go up or down?",
          "'Work and bread' was aimed at a different group. Which one?",
        ],
        strategy: "Think about purpose",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m4-q10",
        question:
          "**Source B**: Nazi results in the two Reichstag elections of 1932.\n\n| Election | Nazi share of vote | Nazi seats |\n|---|---|---|\n| July 1932 | 37.3% | 230 |\n| November 1932 | 33.1% | 196 |\n\nWhy does this change matter when explaining how Hitler became Chancellor in January 1933?",
        options: [
          "It proves that most Germans had turned against Hitler by 1933",
          "It shows the Nazis won a majority in November 1932",
          "Nazi support had started to fall, which suggests Hitler did not ride into office on rising votes but was appointed through a deal two months later",
          "It shows the Nazis had been overtaken by the Communists",
        ],
        answerIndex: 2,
        explanation:
          "The Nazis **lost about 2 million votes and 34 seats** in November 1932, and the party was short of money. Yet two months later Hitler was Chancellor. That shows the **backroom deal** with Papen and Hindenburg was decisive. 'Most Germans had turned against Hitler' goes too far: a third of voters still backed him, and the Nazis remained the largest party, well ahead of the Communists.",
        difficulty: "core",
        guideRef: "road-to-chancellor",
        hints: [
          "Did the Nazi vote go up or down?",
          "If votes were falling, how did Hitler become Chancellor two months later?",
          "Be careful not to over-claim: was 33.1% still a large share?",
        ],
        strategy: "Use precise evidence",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m4-q11",
        question: "What happened to German **trade unions** in May 1933?",
        options: [
          "They were given seats in Hitler's Cabinet",
          "They were banned, their offices were seized, and workers were placed in the Nazi-controlled German Labour Front",
          "They merged with the SA",
          "They organised a general strike that forced Hitler to resign",
        ],
        answerIndex: 1,
        explanation:
          "On **2 May 1933** the SA occupied trade union offices, union leaders were arrested and the unions were abolished. They were replaced by the **German Labour Front (DAF)**, controlled by the Nazis. Unlike during the Kapp Putsch of 1920, there was no successful general strike, and workers lost their independent voice.",
        difficulty: "core",
        guideRef: "creating-a-dictatorship",
        hints: [
          "Independent organisations could organise opposition. What would a dictator do about them?",
          "What replaced the unions?",
        ],
        strategy: "Spot change and continuity",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m4-q12",
        question:
          "**Source C**: a constructed teaching source (written for this exercise), based on the experiences of many middle-class families in 1923.\n\n> My father worked for thirty years and saved carefully for his old age. By November the money in his bank account would not buy a single loaf of bread. He says the government has robbed him and he will never trust these democrats again.\n\nWhat does Source C help a historian explain about the longer-term effects of hyperinflation?",
        options: [
          "Many middle-class Germans lost their savings and blamed the Weimar Republic, damaging their trust in democracy, and extremists could later exploit those memories",
          "Hyperinflation mainly hurt people who had large debts",
          "The government soon paid back everyone's lost savings",
          "Middle-class families welcomed the Rentenmark because it gave them back their lost savings",
        ],
        answerIndex: 0,
        explanation:
          "The key phrase is 'never trust these democrats again'. The crisis left a **lasting loss of faith** in the Republic among the middle classes, who later voted in large numbers for the Nazis in the Depression. The Rentenmark stopped prices rising but did **not** restore lost savings. People with debts actually *gained* from hyperinflation.",
        difficulty: "core",
        guideRef: "crises-1919-1923",
        hints: [
          "Find the phrase that is about the future, not just 1923.",
          "Did the new currency give people their savings back?",
          "Which group voted Nazi in large numbers after 1930?",
        ],
        strategy: "Make an inference",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m4-q13",
        question: "Historians stress that the Nazi regime showed its true nature **within months** of taking power in 1933. Which evidence best supports this?",
        options: [
          "The Nazis won 43.9% of the vote in the March 1933 election",
          "Hitler was appointed Chancellor through the legal process",
          "Hindenburg remained President until 1934",
          "Political opponents were held without trial in new camps such as Dachau (opened March 1933), and in April Jewish Germans faced an organised boycott of their shops and were dismissed from government jobs",
        ],
        answerIndex: 3,
        explanation:
          "Within weeks, opponents such as communists, socialists and trade unionists were locked up **without trial** at Dachau and other camps. On **1 April 1933** the SA stood outside Jewish-owned shops to stop customers entering, and from April Jewish civil servants and teachers lost their jobs. These were real people: doctors, shopkeepers, teachers, neighbours. Remembering how quickly their rights were taken away helps us recognise the warning signs today. The March 1933 vote and the legal appointment show *how* Hitler gained power, not what his regime was like.",
        difficulty: "challenge",
        guideRef: "creating-a-dictatorship",
        hints: [
          "The question asks about the regime's *nature*: how it treated people.",
          "Which option describes the regime's actions, rather than how it got power?",
          "Look for evidence of rights being removed from opponents and Jewish Germans.",
        ],
        strategy: "Use precise evidence",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m4-q14",
        question:
          "A student writes: *'Hitler seized power in 1933 by force, just as he had tried to do in 1923.'* What is the strongest correction?",
        options: [
          "Hitler never used or encouraged violence at any point",
          "After the Munich Putsch failed, Hitler deliberately chose a legal route: he was appointed Chancellor by President Hindenburg, though SA violence and intimidation were used alongside elections",
          "Hitler actually won the 1923 putsch and was already in power",
          "The army put Hitler in power in a military coup in January 1933",
        ],
        answerIndex: 1,
        explanation:
          "This is a classic misconception. Hitler was **legally appointed** Chancellor on 30 January 1933 after learning from 1923 that a putsch would fail. But the correction must stay accurate: the SA's street violence and intimidation were part of the Nazi rise, so 'never used violence' overcorrects. The army did not stage a coup, and the 1923 putsch failed.",
        difficulty: "challenge",
        guideRef: "early-nazi-party",
        hints: [
          "What lesson did Hitler learn from the failure in 1923?",
          "How exactly did Hitler become Chancellor in January 1933?",
          "Beware of an answer that over-corrects: was there no violence at all?",
        ],
        strategy: "Avoid hindsight",
      },
      {
        kind: "mcq",
        id: "hitler-rise-m4-q15",
        question:
          "Counterfactual: if the Wall Street Crash had **not** happened in 1929, what is the most reasonable judgement, based on the evidence of 1924–28?",
        options: [
          "Hitler would certainly have become Chancellor in 1933 anyway, because his speeches were so powerful",
          "The Nazis would have won a majority by 1930 because of the Treaty of Versailles",
          "The Nazis would probably have stayed a small fringe party, as they were in 1928 with 2.6% of the vote, though Weimar's weaknesses would not have disappeared",
          "Germany would have become a communist state",
        ],
        answerIndex: 2,
        explanation:
          "In the relatively stable years Hitler was the same speaker, yet the Nazis won only **2.6% (1928)**. That suggests the **Depression was a necessary condition**: leadership needed a crisis to work on. A careful judgement still notes that weaknesses such as proportional representation and Article 48 remained. 'Certainly become Chancellor anyway' ignores the 1928 evidence, and no counterfactual can be 'certain'.",
        difficulty: "challenge",
        guideRef: "why-hitler-rose",
        hints: [
          "What was the Nazi vote when times were good?",
          "Was Hitler a worse speaker in 1928 than in 1932? So what changed?",
          "A good counterfactual uses evidence and avoids words like 'certainly'.",
        ],
        strategy: "Weigh factors",
      },
    ],
  },
];
