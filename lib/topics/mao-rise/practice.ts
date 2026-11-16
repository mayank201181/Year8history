import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // ================================ QUIZ ====================================
  quiz: [
    {
      kind: "short",
      id: "mao-rise-quiz-q01",
      question:
        "In 1919 thousands of students protested in Beijing against the peace settlement at the end of the First World War. In which year did this **May Fourth Movement** begin?",
      answer: { type: "number", value: 1919 },
      traps: [
        { spec: { type: "number", value: 1911 }, feedback: "1911 is the revolution against the Qing emperor. The May Fourth protests came eight years later." },
        { spec: { type: "number", value: 1921 }, feedback: "1921 is when the Chinese Communist Party was founded — partly inspired by May Fourth, which came two years earlier." },
      ],
      solution: [
        "The protests began on **4 May 1919** — the name of the movement gives you the day and month.",
        "They followed news from the Paris Peace Conference (Versailles), which gave Germany's rights in Shandong to Japan.",
      ],
      difficulty: "warmup",
      guideRef: "china-in-crisis",
      hints: ["The question itself tells you the year — read it carefully, then check it against the First World War peace talks."],
      strategy: "Put it in chronological order",
    },
    {
      kind: "mcq",
      id: "mao-rise-quiz-q02",
      question: "Why was the **Whampoa Military Academy**, set up in 1924 with Soviet help, so important for Chiang Kai-shek's rise?",
      options: [
        "It was where the Chinese Communist Party held its first meeting.",
        "It was the Japanese base from which the 1937 invasion was launched.",
        "It trained officers for the Guomindang army, and Chiang, as its commandant, built a loyal following among them.",
        "It was the palace where Sun Yat-sen proclaimed the end of the Qing dynasty.",
      ],
      answerIndex: 2,
      explanation:
        "Chiang ran Whampoa, so the young officers it trained became his personal power base — this helped him take over the Guomindang after Sun Yat-sen died in 1925. The tempting distractor about the Communist Party's first meeting mixes it up with Shanghai (1921), where the CCP was founded.",
      difficulty: "core",
      guideRef: "nationalists-and-communists",
      hints: ["What does a military academy produce?", "Chiang was its commandant. How might the officers feel about him later?"],
      strategy: "Think about who benefited",
    },
    {
      kind: "short",
      id: "mao-rise-quiz-q03",
      question:
        "Mao's famous rules for guerrilla warfare begin: *\"The enemy advances, we ______.\"* What is the missing word?",
      answer: { type: "text", accept: ["retreat", "retreats", "we retreat", "withdraw", "pull back", "fall back"], display: "retreat" },
      traps: [
        { spec: { type: "text", accept: ["attack", "we attack", "fight", "advance"] }, feedback: "Not yet! A weak army that attacks a strong one head-on gets destroyed. Mao only attacked when 'the enemy tires'." },
      ],
      solution: [
        "The full saying: *\"The enemy advances, we retreat; the enemy camps, we harass; the enemy tires, we attack; the enemy retreats, we pursue.\"*",
        "A small, poorly armed army survives by avoiding big battles and striking only when it has the advantage.",
      ],
      difficulty: "warmup",
      guideRef: "mao-and-the-peasants",
      hints: ["The Red Army was much weaker than the Guomindang army. What should a weaker force do when a stronger one comes at it?"],
      strategy: "Think about purpose",
    },
    {
      kind: "mcq",
      id: "mao-rise-quiz-q04",
      question: "Which statement about the **distance** covered by the Long March (1934–35) is most accurate?",
      options: [
        "The communists claimed it was about 12,500 km, but some researchers who later retraced the route argue the main column walked much less — the figure is debated.",
        "It was exactly 6,000 km, a figure the Red Army measured precisely at the time.",
        "It was under 1,000 km, because the marchers stayed inside Jiangxi province.",
        "It was 12,500 km, and every historian accepts this figure without question.",
      ],
      answerIndex: 0,
      explanation:
        "The Communist Party claimed about 25,000 *li* (roughly 12,500 km), and that number became part of the legend. Later researchers retracing the route suggested a shorter figure, so a careful historian says the distance is debated. The option saying every historian accepts 12,500 km is tempting because it is the famous number — but it ignores the debate.",
      difficulty: "core",
      guideRef: "long-march",
      hints: ["Who first published the famous figure — and might they want it to sound impressive?", "A careful historian avoids false precision when evidence is disputed."],
      strategy: "Check the provenance (NOP)",
    },
    {
      kind: "short",
      id: "mao-rise-quiz-q05",
      question: "In which year did Mao Zedong proclaim the People's Republic of China, after the communists won the Civil War?",
      answer: { type: "number", value: 1949 },
      traps: [
        { spec: { type: "number", value: 1945 }, feedback: "1945 is when Japan surrendered. The Civil War between the communists and the Guomindang then carried on for several more years." },
        { spec: { type: "number", value: 1946 }, feedback: "1946 is when full civil war broke out, not when it ended." },
      ],
      solution: ["Mao proclaimed the People's Republic in Beijing on **1 October 1949**.", "Chiang Kai-shek and the Guomindang government fled to Taiwan."],
      difficulty: "warmup",
      guideRef: "japan-and-civil-war",
      hints: ["It is the year the Civil War (which began in 1946) ended — three years later."],
    },
    {
      kind: "mcq",
      id: "mao-rise-quiz-q06",
      question: "Which of these helps explain why many **middle-class people in China's cities** turned against the Guomindang in the late 1940s?",
      options: [
        "Communist land reform took their farmland away.",
        "Runaway inflation wiped out the value of their wages and savings.",
        "The Long March had destroyed most of China's cities.",
        "Japan's surrender in 1945 made them lose their jobs in the Japanese army.",
      ],
      answerIndex: 1,
      explanation:
        "Under the Guomindang, prices rose so fast that money became almost worthless — teachers, clerks and shopkeepers saw their savings vanish and blamed the government. Land reform is a tempting distractor, but it was a *communist* policy that affected landlords in the countryside, not the urban middle class's reason for abandoning the Guomindang.",
      difficulty: "core",
      guideRef: "japan-and-civil-war",
      hints: ["Who governed the cities in the late 1940s — and so got the blame?", "What happens to your savings if prices double again and again?"],
      strategy: "Think about who benefited",
    },
    {
      kind: "short",
      id: "mao-rise-quiz-q07",
      question:
        "During the Cultural Revolution (1966–76), groups of young students attacked teachers, officials and old traditions in Mao's name. What were these groups called?",
      answer: { type: "text", accept: ["Red Guards", "Red Guard", "the Red Guards", "Hongweibing"], display: "Red Guards" },
      traps: [
        { spec: { type: "text", accept: ["Red Army", "the Red Army", "PLA", "People's Liberation Army"] }, feedback: "The Red Army (later the People's Liberation Army) was the communist fighting force. The student groups had a different name." },
      ],
      solution: [
        "They were the **Red Guards** — mostly teenagers and students, encouraged by Mao to attack 'old ideas' and people labelled enemies.",
        "Many teachers and officials were humiliated, beaten or killed; schools and universities closed for years.",
      ],
      commonError: "Confusing the Red Guards (1960s students) with the Red Army (1920s–40s soldiers).",
      difficulty: "core",
      guideRef: "mao-in-power",
      hints: ["The name includes the communist colour.", "They saw themselves as protecting Mao and his revolution."],
    },
    {
      kind: "written",
      id: "mao-rise-quiz-q08",
      question: "Explain **two** ways the weakness of the Guomindang government helped the communists come to power. (3 marks)",
      marks: 3,
      modelAnswer:
        "One weakness was **corruption and inflation**. In the late 1940s prices rose so quickly that wages and savings became almost worthless, while some officials grew rich. This turned many city people against the Guomindang, so fewer were willing to defend it.\n\nA second weakness was **military failure**. The Guomindang lost huge areas to Japan after 1937 and then lost major battles in the Civil War, where many of its soldiers surrendered or changed sides. This made it look unable to protect China.\n\nTogether these weaknesses meant that by 1949 many Chinese people saw the communists as the better — or at least the only — alternative.",
      markScheme: [
        { point: "Identifies and describes one weakness, e.g. corruption, inflation or bribery", keywords: ["corrupt", "corruption", "inflation", "prices", "savings", "bribe", "money"] },
        { point: "Identifies and describes a second weakness, e.g. military defeats, losing land to Japan, unpopularity with peasants", keywords: ["defeat", "lost", "japan", "battle", "soldiers", "desert", "surrender", "landlords", "peasants", "taxes"] },
        { point: "Explains the link: the weakness lost the government support so people turned to (or did not resist) the communists", keywords: ["support", "turned to", "trust", "so", "because", "alternative", "lost support", "unpopular"] },
      ],
      commonError: "Describing the Guomindang without explaining how its weakness helped the communists.",
      difficulty: "core",
      guideRef: "why-mao-rose",
      hints: ["Think about money, and think about war.", "For each weakness, finish the sentence: '…and this helped the communists because…'"],
      strategy: "Link the causes",
    },
    {
      kind: "mcq",
      id: "mao-rise-quiz-q09",
      question: "Why did the Treaty of Versailles (1919) make so many Chinese students angry?",
      options: [
        "It forced China to pay huge reparations to Britain and France.",
        "It put the Qing emperor back on the throne.",
        "It gave Hong Kong to Britain for the first time.",
        "It handed Germany's rights in Shandong province to Japan instead of returning them to China.",
      ],
      answerIndex: 3,
      explanation:
        "China had joined the Allies, yet the peace conference gave the former German concessions in Shandong to Japan. This felt like another foreign humiliation and sparked the May Fourth Movement. Hong Kong is a tempting distractor because it was a real loss — but Britain took it in 1842 after the First Opium War, not in 1919.",
      difficulty: "core",
      guideRef: "china-in-crisis",
      hints: ["The anger was about land and foreign powers.", "Which Asian neighbour gained from the peace treaty?"],
      strategy: "Use precise evidence",
    },
    {
      kind: "written",
      id: "mao-rise-quiz-q10",
      question: "Explain why the Long March (1934–35) helped the communists in the long run, even though most of the marchers did not survive. (3 marks)",
      marks: 3,
      modelAnswer:
        "The Long March was a military disaster: about 86,000 set out and only around 8,000 reached Shaanxi. However, it helped the communists in the long run. First, the party **survived** and found a safe base at Yan'an, far from Chiang's armies. Second, Mao emerged as a leading figure after the **Zunyi Conference** (1935), so the party was now guided by his peasant-based strategy. Third, the March became a **heroic legend** in communist propaganda — stories such as the crossing of Luding Bridge attracted young recruits and made the communists look brave and determined. So a retreat was turned into a source of strength.",
      markScheme: [
        { point: "The communists survived and reached a safe base (Yan'an / Shaanxi)", keywords: ["survive", "survived", "yan'an", "yanan", "shaanxi", "base", "escape"] },
        { point: "Mao rose to leadership (Zunyi Conference) and his strategy took over", keywords: ["zunyi", "leader", "leadership", "mao took", "control"] },
        { point: "It became propaganda / a heroic legend that won recruits and support", keywords: ["propaganda", "legend", "hero", "heroic", "story", "recruits", "luding", "inspire", "myth"] },
      ],
      commonError: "Only describing the hardships of the March without explaining how it helped.",
      difficulty: "core",
      guideRef: "long-march",
      hints: ["Think about three things: survival, leadership, and the story told afterwards.", "Which conference happened during the March?", "How did the party use the March in its propaganda?"],
      strategy: "Judge significance",
    },
  ],

  // ================================ PAPERS ==================================
  papers: [
    {
      id: "mao-rise-p1",
      title: "Practice Paper 1",
      questions: [
        {
          kind: "short",
          id: "mao-rise-p1-q01",
          question: "In which year did the last emperor of China abdicate, ending more than 2,000 years of rule by emperors?",
          answer: { type: "number", value: 1912 },
          traps: [
            { spec: { type: "number", value: 1911 }, feedback: "The revolution *began* in October 1911, but the boy emperor Puyi did not abdicate until February of the following year." },
            { spec: { type: "number", value: 1949 }, feedback: "1949 is when the communists took power. The emperors had already gone decades earlier." },
          ],
          solution: [
            "The revolution broke out in **October 1911**.",
            "The child emperor **Puyi** abdicated in **February 1912**, and China became a republic.",
          ],
          commonError: "Giving 1911 — the year the revolution started, not the year the emperor stepped down.",
          difficulty: "warmup",
          guideRef: "china-in-crisis",
          hints: ["The revolution started in late 1911. Did the emperor step down immediately?"],
          strategy: "Put it in chronological order",
        },
        {
          kind: "short",
          id: "mao-rise-p1-q02",
          question: "Give the Chinese name of the **Nationalist Party**, founded by Sun Yat-sen and later led by Chiang Kai-shek.",
          answer: {
            type: "text",
            accept: ["Guomindang", "Kuomintang", "GMD", "KMT", "Guomindang (GMD)", "Kuomintang (KMT)", "Kuo-min-tang", "Guo min dang"],
            display: "Guomindang (GMD) / Kuomintang (KMT)",
          },
          traps: [
            { spec: { type: "text", accept: ["CCP", "Chinese Communist Party", "Communist Party", "the communists"] }, feedback: "That is the Nationalists' great rival. The question wants the Nationalists' own party." },
          ],
          solution: [
            "The Nationalist Party is the **Guomindang (GMD)** in modern pinyin spelling, or **Kuomintang (KMT)** in the older Wade–Giles spelling.",
            "Both spellings name the same party — you will see both in books.",
          ],
          difficulty: "warmup",
          guideRef: "nationalists-and-communists",
          hints: ["Its initials are GMD (or KMT in older books)."],
        },
        {
          kind: "short",
          id: "mao-rise-p1-q03",
          question:
            "From 1931 to 1934 the communists ran their own state in the hills of south-east China, with its capital at Ruijin. What was this communist-run area called?",
          answer: {
            type: "text",
            accept: ["Jiangxi Soviet", "the Jiangxi Soviet", "Jiangxi", "Kiangsi Soviet", "Kiangsi", "Chinese Soviet Republic", "Jiangxi Soviet Republic"],
            display: "the Jiangxi Soviet",
          },
          traps: [
            { spec: { type: "text", accept: ["Yan'an", "Yanan", "Yenan", "Shaanxi"] }, feedback: "Yan'an in Shaanxi was the communists' base *after* the Long March. Where did the March start from?" },
          ],
          solution: [
            "It was the **Jiangxi Soviet** (officially the Chinese Soviet Republic), named after Jiangxi province.",
            "Here Mao tried out land reform and guerrilla warfare, until Chiang's fifth encirclement campaign forced the communists out in 1934.",
          ],
          difficulty: "core",
          guideRef: "mao-and-the-peasants",
          hints: ["It was named after the province it was in.", "'Soviet' means a council — the communists borrowed the word from Russia.", "The Long March began when the communists broke out of this base."],
        },
        {
          kind: "short",
          id: "mao-rise-p1-q04",
          question:
            "After the Long March, the communists made their headquarters in a small town in Shaanxi province, where they stayed until 1947. Name the town.",
          answer: { type: "text", accept: ["Yan'an", "Yanan", "Yenan", "Yan an", "Yan-an"], display: "Yan'an (Yenan)" },
          traps: [
            { spec: { type: "text", accept: ["Ruijin", "Jiangxi", "Juichin"] }, feedback: "Ruijin, in Jiangxi, was where the March *started*. Where did the communists settle at the end?" },
            { spec: { type: "text", accept: ["Beijing", "Peking"] }, feedback: "The communists did not hold Beijing until 1949. Their wartime base was a remote town in the north-west." },
          ],
          solution: [
            "The communists based themselves at **Yan'an** (older spelling Yenan) from late 1936/early 1937.",
            "Its remoteness protected them from Guomindang attacks, and it became the centre of their wartime government and propaganda.",
          ],
          difficulty: "core",
          guideRef: "long-march",
          hints: ["It was in the remote north-west, far from Chiang's armies.", "Older books spell it Yenan."],
        },
        {
          kind: "short",
          id: "mao-rise-p1-q05",
          question: "Japan surrendered in 1945. In which year did full-scale civil war break out between the Guomindang and the communists?",
          answer: { type: "number", value: 1946 },
          traps: [
            { spec: { type: "number", value: 1949 }, feedback: "1949 is when the Civil War *ended* with the communist victory. When did it start?" },
            { spec: { type: "number", value: 1927 }, feedback: "The two sides first turned on each other in 1927, but the full-scale Civil War after Japan's defeat began later." },
          ],
          solution: [
            "After Japan's surrender in 1945, American-sponsored peace talks failed.",
            "Full-scale civil war began in **1946** and ended with the communist victory in 1949.",
          ],
          difficulty: "warmup",
          guideRef: "japan-and-civil-war",
          hints: ["It was the year after Japan's surrender."],
          strategy: "Put it in chronological order",
        },
        {
          kind: "mcq",
          id: "mao-rise-p1-q06",
          question:
            "After 1949, Mao's portrait hung everywhere, songs praised him and millions carried his 'Little Red Book'. What was the main **purpose** of this cult of personality?",
          options: [
            "To make loyalty to Mao feel the same as loyalty to China, so that criticising him seemed like betraying the nation.",
            "To prepare Chinese people for free, multi-party elections.",
            "To encourage open public debate about Mao's mistakes.",
            "To celebrate Sun Yat-sen as the founder of the People's Republic.",
          ],
          answerIndex: 0,
          explanation:
            "A cult of personality presents a leader as almost god-like and wise in everything, so opposing him seems unthinkable — a powerful tool of control. The option about debating Mao's mistakes is the opposite of the truth: criticism of Mao was dangerous, especially in the Hundred Flowers backlash of 1957 and the Cultural Revolution.",
          difficulty: "core",
          guideRef: "mao-in-power",
          hints: ["Think about purpose: why would a ruler want his face everywhere?", "What happens to critics when a leader is treated as always right?"],
          strategy: "Think about purpose",
        },
        {
          kind: "written",
          id: "mao-rise-p1-q07",
          question:
            "**Source A** — two slogans shouted and written on banners by student protesters in Beijing on 4 May 1919 (translated).\n\n> \"Struggle for sovereignty abroad, throw out the traitors at home!\"\n\n> \"Give us back Qingdao!\"\n\n*(Qingdao is the main port of Shandong province.)*\n\nWhat can you infer from Source A about the attitudes of Chinese students in 1919? (3 marks)",
          marks: 3,
          modelAnswer:
            "I can infer that the students were **angry with foreign powers**. The demand \"Give us back Qingdao!\" shows they felt Chinese land had been taken away — at Versailles, Germany's rights in Shandong had been handed to Japan.\n\nI can also infer that they were **angry with their own government**. \"Throw out the traitors at home\" suggests they believed Chinese officials had betrayed the country by failing to stand up to foreign powers.\n\nTogether, this suggests a strong new **nationalism**: the students wanted a China that was independent (\"sovereignty\") and strong enough to defend itself. This feeling later fed into both the Guomindang and the new Communist Party.",
          markScheme: [
            { point: "Inference: anger at foreign powers / Japan, supported by 'Give us back Qingdao' or 'sovereignty'", keywords: ["japan", "foreign", "qingdao", "shandong", "versailles", "sovereignty", "taken"] },
            { point: "Inference: anger at China's own weak or 'traitorous' government, supported by 'traitors at home'", keywords: ["traitor", "traitors", "government", "officials", "betray", "weak"] },
            { point: "Uses context or draws a wider inference, e.g. growing nationalism / desire for a strong, independent China", keywords: ["nationalism", "nationalist", "patriotic", "independent", "strong", "pride", "humiliation", "communist"] },
          ],
          commonError: "Copying the slogans out without saying what they *suggest* — an inference goes beyond what the source literally says.",
          difficulty: "core",
          guideRef: "china-in-crisis",
          hints: ["Read each slogan: who is the target of the anger?", "'Abroad' and 'at home' point to two different targets.", "Link 'Qingdao' to what happened at Versailles."],
          strategy: "Make an inference",
        },
        {
          kind: "written",
          id: "mao-rise-p1-q08",
          question: "Explain why the First United Front between the Guomindang and the Communists collapsed in 1927. (4 marks)",
          marks: 4,
          modelAnswer:
            "The First United Front collapsed mainly because the two parties had **different aims**. They had joined together to defeat the warlords, but the Guomindang wanted a united nationalist China and was supported by landowners and businessmen, while the communists wanted a revolution of workers and peasants that threatened those same people.\n\nThe death of **Sun Yat-sen in 1925** also mattered. Sun had held the alliance together; his successor **Chiang Kai-shek** distrusted the communists, who were growing fast in the trade unions of cities like Shanghai.\n\nOnce the Northern Expedition had reached Shanghai, Chiang no longer needed communist help. In **April 1927** he struck first in the **Shanghai Massacre**, killing thousands of communists and union members. So the alliance broke because it was a marriage of convenience that ended once the common enemy, the warlords, was weakened.",
          markScheme: [
            { point: "Different aims / supporters of the two parties (nationalism and landowners vs class revolution)", keywords: ["different aims", "landlords", "landowners", "business", "revolution", "workers", "class", "different"] },
            { point: "Sun Yat-sen's death (1925) and Chiang's distrust of the communists", keywords: ["sun yat-sen", "died", "death", "1925", "chiang", "distrust", "suspicious"] },
            { point: "Shanghai Massacre (April 1927) as the trigger", keywords: ["shanghai", "massacre", "1927", "killed", "purge", "white terror"] },
            { point: "Explains why: once the warlords were weakened the alliance was no longer needed (marriage of convenience)", keywords: ["no longer needed", "convenience", "common enemy", "warlords", "northern expedition", "because"] },
          ],
          commonError: "Only describing the Shanghai Massacre — it was the trigger, but you also need the deeper reasons the alliance was fragile.",
          difficulty: "core",
          guideRef: "nationalists-and-communists",
          hints: ["Why had the two parties joined together in the first place?", "What did each party want China to become — and who supported each?", "Which leader died in 1925, and who replaced him?"],
          strategy: "Long-term vs short-term causes",
        },
        {
          kind: "written",
          id: "mao-rise-p1-q09",
          question:
            "**Source B** — described for this exercise: a large, brightly coloured painting made by a Chinese artist in the 1950s for display in the People's Republic of China. It shows Red Army soldiers crawling across the bare iron chains of **Luding Bridge** in May 1935 under heavy enemy fire, with flames rising behind them and the soldiers' faces calm and determined.\n\nHow useful is Source B to a historian studying the Long March? Use the source and your own knowledge. (4 marks)",
          marks: 4,
          modelAnswer:
            "Source B is useful for showing **how the Communist Party wanted the Long March to be remembered**. The calm, determined soldiers crossing the chains under fire present the Red Army as heroic and unstoppable.\n\nHowever, its **provenance** limits its usefulness as evidence of what actually happened. It was painted in the 1950s, about twenty years after the event, in the People's Republic, where art was used as **propaganda** to glorify the party that now ruled China. The artist did not witness the crossing.\n\nMy own knowledge also suggests caution: some historians argue the fighting at Luding was much smaller than the legend claims, and a few question whether a real battle took place at all. So Source B is of limited use for the facts of the Long March, but very useful for studying **communist propaganda and the Long March legend**.",
          markScheme: [
            { point: "Content: identifies what the source shows (heroic, determined Red Army at Luding Bridge)", keywords: ["heroic", "hero", "brave", "determined", "luding", "chains", "under fire"] },
            { point: "Provenance: painted in the 1950s in the PRC, after the event, not an eyewitness", keywords: ["1950s", "after", "later", "years", "not there", "eyewitness", "artist", "people's republic"] },
            { point: "Purpose: propaganda to glorify the Communist Party, so likely exaggerated", keywords: ["propaganda", "glorify", "exaggerate", "biased", "purpose", "communist party", "legend"] },
            { point: "Judgement: limited for facts but useful for how the party wanted the March remembered; uses knowledge of doubts about Luding", keywords: ["useful for", "useful", "limited", "doubt", "myth", "remembered", "image", "debated"] },
          ],
          commonError: "Saying the source is 'biased so useless'. A biased source is very useful for studying the views and propaganda of the people who made it.",
          difficulty: "core",
          guideRef: "long-march",
          hints: ["Use NOP: Nature, Origin, Purpose.", "When was it painted, and who was in charge of China then?", "Ask: useful for *what*? Facts about the battle, or how the party told the story?"],
          strategy: "Check the provenance (NOP)",
        },
        {
          kind: "written",
          id: "mao-rise-p1-q10",
          question: "Describe **two** features of the guerrilla tactics used by Mao's Red Army. (3 marks)",
          marks: 3,
          modelAnswer:
            "One feature was **avoiding big battles** against a stronger enemy. Mao's rule was \"The enemy advances, we retreat; the enemy camps, we harass; the enemy tires, we attack; the enemy retreats, we pursue.\" Small units made surprise attacks, then melted away.\n\nA second feature was **relying on the support of local peasants**. The Red Army followed strict rules, such as paying for what it took, so villagers would give food, shelter and information about enemy movements.\n\nThese tactics suited a small, poorly armed army fighting a much larger one.",
          markScheme: [
            { point: "Feature 1: hit-and-run / avoiding pitched battles / retreat when the enemy advances", keywords: ["hit and run", "hit-and-run", "retreat", "ambush", "surprise", "harass", "small", "avoid"] },
            { point: "Feature 2: relying on peasant support (food, shelter, information) and good discipline", keywords: ["peasants", "villagers", "support", "information", "food", "shelter", "discipline", "pay", "fish"] },
            { point: "Developed description: explains how it suited a weaker army", keywords: ["weaker", "weak", "stronger", "smaller", "outnumbered", "suited", "survive"] },
          ],
          difficulty: "core",
          guideRef: "mao-and-the-peasants",
          hints: ["Think about how a small army fights a big one.", "Who did the guerrillas depend on for food and information?"],
          strategy: "Use precise evidence",
        },
        {
          kind: "written",
          id: "mao-rise-p1-q11",
          question:
            "In 1946 the Guomindang had a much larger army than the communists, plus American aid. Explain why the communists had nevertheless won the Civil War by 1949. (6 marks)",
          marks: 6,
          modelAnswer:
            "The communists won partly because of **Guomindang weaknesses**. Runaway inflation and corruption turned city people against the government, and many of its conscripted soldiers were poorly fed and badly treated, so whole units **surrendered or changed sides**, taking their American weapons with them.\n\nSecond, the communists had **mass support in the countryside**. During the war with Japan they had grown from about 40,000 members (1937) to about 1.2 million (1945), and their land reform gave peasants a reason to fight for them and supply their armies.\n\nThird, **communist military strategy** was effective. In 1945 the Soviet Union occupied Manchuria and let the communists take over captured Japanese weapons. Commanders such as Lin Biao then won huge battles in Manchuria and at Huaihai (1948–49).\n\nThese factors were linked: Guomindang weakness lost it support, which the communists were organised to win. Overall the most important reason was that the communists had the **support of the peasants**, because that turned the Guomindang's numbers into a disadvantage it could not keep supplied or loyal.",
          markScheme: [
            { point: "Guomindang weaknesses: corruption, inflation, low morale", keywords: ["corrupt", "corruption", "inflation", "morale", "prices", "unpopular"] },
            { point: "Guomindang soldiers surrendered / defected / deserted", keywords: ["surrender", "defect", "desert", "changed sides", "switched"] },
            { point: "Communist peasant support, land reform, growth in membership", keywords: ["peasants", "land reform", "support", "1.2 million", "membership", "countryside"] },
            { point: "Communist military factors: strategy, Manchuria, Soviet help, big victories (Huaihai)", keywords: ["manchuria", "soviet", "weapons", "huaihai", "lin biao", "strategy", "pla", "battles"] },
            { point: "Links factors together (e.g. GMD weakness created the support the communists won)", keywords: ["linked", "link", "led to", "because", "therefore", "combined", "together"] },
            { point: "Reaches a supported judgement about the most important reason", keywords: ["most important", "main reason", "overall", "mainly", "key reason", "judgement"] },
          ],
          commonError: "Writing a story of the Civil War battles instead of explaining *why* the weaker side won.",
          difficulty: "challenge",
          guideRef: "japan-and-civil-war",
          hints: [
            "Split your answer: Guomindang weaknesses, and communist strengths.",
            "What happened to the value of money in Guomindang cities? What did many of its soldiers do in battle?",
            "Why would peasants want the communists to win? Think about land.",
            "Finish with a judgement — which factor made the others matter?",
          ],
          strategy: "Weigh factors",
        },
        {
          kind: "mcq",
          id: "mao-rise-p1-q12",
          question:
            "A historian argues: *\"The communists did not so much win the Civil War as the Guomindang lost it.\"* Which piece of evidence **best supports** this interpretation?",
          options: [
            "Communist Party membership grew from about 40,000 in 1937 to about 1.2 million in 1945.",
            "Mao's guerrilla tactics allowed small communist units to beat larger forces.",
            "Inflation and corruption turned people against the Guomindang even in cities the communists had never controlled.",
            "Edgar Snow's book *Red Star Over China* made the communists famous around the world.",
          ],
          answerIndex: 2,
          explanation:
            "The interpretation stresses the Guomindang's *own failures*, so the best evidence shows support collapsing because of what the government did — inflation and corruption in its own cities. The membership figure is tempting because it is accurate and important, but it shows communist *strength*, which supports the opposite argument.",
          difficulty: "challenge",
          guideRef: "why-mao-rose",
          hints: ["Read the interpretation carefully: whose actions does it say decided the war?", "Three options are true facts — but which one is about the Guomindang's own failures?"],
          strategy: "Consider the counter-argument",
        },
      ],
    },
    {
      id: "mao-rise-p2",
      title: "Practice Paper 2",
      questions: [
        {
          kind: "short",
          id: "mao-rise-p2-q01",
          question: "In which year did Chiang Kai-shek turn on his communist allies in the **Shanghai Massacre**?",
          answer: { type: "number", value: 1927 },
          traps: [
            { spec: { type: "number", value: 1921 }, feedback: "1921 is when the Communist Party was founded. The massacre came six years later." },
            { spec: { type: "number", value: 1934 }, feedback: "1934 is when the Long March began. The Shanghai Massacre was several years earlier." },
          ],
          solution: [
            "The Shanghai Massacre took place in **April 1927**.",
            "It ended the First United Front and began years of war between the Guomindang and the communists.",
          ],
          difficulty: "warmup",
          guideRef: "nationalists-and-communists",
          hints: ["It happened during the Northern Expedition (1926–28), when Chiang's army reached Shanghai."],
          strategy: "Put it in chronological order",
        },
        {
          kind: "short",
          id: "mao-rise-p2-q02",
          question:
            "From about 1916 to 1928, China had no effective central government and was divided between regional military strongmen with private armies. What name is given to this period?",
          answer: {
            type: "text",
            accept: ["warlord era", "the warlord era", "warlord period", "age of warlords", "era of warlords", "warlordism", "warlords", "warlord years"],
            display: "the warlord era",
          },
          traps: [
            { spec: { type: "text", accept: ["Qing dynasty", "Qing", "Manchu"] }, feedback: "The Qing were the emperors who fell in 1911–12. Who held power in the provinces after that?" },
          ],
          solution: [
            "This was the **warlord era**.",
            "Warlords taxed peasants heavily, fought one another and left China weak and divided — one reason both the Guomindang and the communists promised to reunite the country.",
          ],
          difficulty: "warmup",
          guideRef: "china-in-crisis",
          hints: ["The name comes from the military strongmen themselves."],
        },
        {
          kind: "short",
          id: "mao-rise-p2-q03",
          question: "In which city did Mao proclaim the People's Republic of China on 1 October 1949?",
          answer: { type: "text", accept: ["Beijing", "Peking", "Peiping", "Beiping", "Tiananmen", "Tiananmen Square"], display: "Beijing (Peking)" },
          traps: [
            { spec: { type: "text", accept: ["Nanjing", "Nanking"] }, feedback: "Nanjing was the Guomindang's capital. Mao made a different city the capital of the People's Republic." },
            { spec: { type: "text", accept: ["Shanghai"] }, feedback: "Shanghai was China's biggest port, but the proclamation was made in the old imperial capital." },
          ],
          solution: [
            "Mao spoke from the Gate of Heavenly Peace (Tiananmen) in **Beijing**.",
            "Making Beijing the capital again linked the new state to China's long history as a great power.",
          ],
          difficulty: "warmup",
          guideRef: "japan-and-civil-war",
          hints: ["It was the old capital of the emperors, home of the Forbidden City."],
        },
        {
          kind: "short",
          id: "mao-rise-p2-q04",
          question:
            "In January 1935, during the Long March, communist leaders met and blamed the Soviet-trained commanders for their heavy losses. Mao gained a leading role. In which town did this conference take place?",
          answer: { type: "text", accept: ["Zunyi", "Tsunyi", "Zunyi Conference", "Tsun-yi"], display: "Zunyi" },
          traps: [
            { spec: { type: "text", accept: ["Yan'an", "Yanan", "Yenan"] }, feedback: "Yan'an was where the March ended. The conference happened in Guizhou province, early in the March." },
            { spec: { type: "text", accept: ["Luding", "Luding Bridge"] }, feedback: "Luding Bridge was the scene of a famous river crossing in May 1935, not a conference." },
          ],
          solution: [
            "The **Zunyi Conference** (Guizhou province, January 1935) criticised the leaders whose head-on tactics had lost the Jiangxi Soviet.",
            "Mao became one of the party's key military leaders — the start of his rise to the top.",
          ],
          difficulty: "core",
          guideRef: "long-march",
          hints: ["It happened in a town in Guizhou province, early in the March.", "The name of the town begins with Z."],
        },
        {
          kind: "short",
          id: "mao-rise-p2-q05",
          question:
            "What was the name of Mao's campaign of 1958–62 to transform China's farming and industry at high speed, which caused a devastating famine?",
          answer: { type: "text", accept: ["Great Leap Forward", "the Great Leap Forward", "Great Leap", "GLF"], display: "the Great Leap Forward" },
          traps: [
            { spec: { type: "text", accept: ["Cultural Revolution", "the Cultural Revolution"] }, feedback: "The Cultural Revolution began in 1966. The 1958–62 campaign has a different name." },
            { spec: { type: "text", accept: ["Long March", "the Long March"] }, feedback: "The Long March was 1934–35, long before Mao ruled China." },
          ],
          solution: [
            "It was the **Great Leap Forward**.",
            "Peasants were forced into huge communes and pushed to make steel in backyard furnaces; false harvest reports and grain taken by the state led to a famine in which tens of millions died (estimates commonly range from 15 to 45 million).",
          ],
          difficulty: "core",
          guideRef: "mao-in-power",
          hints: ["The name suggests China would jump ahead very quickly.", "It began in 1958, eight years before the Cultural Revolution."],
        },
        {
          kind: "mcq",
          id: "mao-rise-p2-q06",
          question:
            "In the areas they controlled in the 1930s and 1940s, the communists carried out **land reform**, taking land from landlords and sharing it out. Why did this win them support?",
          options: [
            "It made the landlords richer, and landlords then paid for the Red Army.",
            "Most peasants were poor tenants or landless labourers, so getting land of their own changed their lives.",
            "It was ordered by the Japanese, so peasants hoped it would keep them safe.",
            "It mainly helped factory workers in the big coastal cities.",
          ],
          answerIndex: 1,
          explanation:
            "Most Chinese people were peasants, and many paid huge rents to landlords. Owning land gave them security — and a reason to defend the communists who had given it. The option about factory workers is tempting if you are thinking of the Russian model, but land reform was about the countryside, which is exactly why Mao's peasant strategy suited China.",
          difficulty: "core",
          guideRef: "mao-and-the-peasants",
          hints: ["Who made up most of China's population?", "What did a poor tenant farmer want most?"],
          strategy: "Think about who benefited",
        },
        {
          kind: "written",
          id: "mao-rise-p2-q07",
          question:
            "**Source A** — from Mao Zedong's *Report on an Investigation of the Peasant Movement in Hunan*, written in 1927 (translated).\n\n> \"In a very short time, in China's central, southern and northern provinces, several hundred million peasants will rise like a mighty storm, like a hurricane, a force so swift and violent that no power, however great, will be able to hold it back.\"\n\nWhat can you infer from Source A about Mao's ideas on how a revolution in China would happen? (3 marks)",
          marks: 3,
          modelAnswer:
            "I can infer that Mao believed **the peasants, not city workers, would make the revolution**. He talks about \"several hundred million peasants\" rising, not factory workers as in the Russian model.\n\nI can also infer that he thought the revolution would be **huge and unstoppable** once it began. Comparing it to \"a mighty storm\" and \"a hurricane\" suggests he saw the peasants' numbers as their great strength — \"no power, however great\" could stop them.\n\nFinally, the words \"swift and violent\" suggest Mao accepted that the revolution would involve **force**. This fits his later strategy of building a peasant army in the countryside.",
          markScheme: [
            { point: "Inference: the peasants would be the main revolutionary force (not urban workers), supported from the source", keywords: ["peasants", "peasant", "countryside", "not workers", "not cities", "hundred million"] },
            { point: "Inference: the revolution would be massive / unstoppable, supported by 'storm' or 'hurricane'", keywords: ["storm", "hurricane", "unstoppable", "huge", "powerful", "numbers", "hold it back"] },
            { point: "Inference: it would be violent / links to Mao's later strategy or differs from the Soviet model", keywords: ["violent", "violence", "force", "soviet", "russia", "army", "guerrilla", "strategy"] },
          ],
          commonError: "Saying 'Mao liked peasants' — say what the source suggests he believed about *how* revolution would happen, and quote the words that show it.",
          difficulty: "core",
          guideRef: "mao-and-the-peasants",
          hints: ["Which group does Mao expect to rise up?", "What is he suggesting by comparing them to a storm or a hurricane?", "Compare this with the Russian Revolution of 1917 — who led that?"],
          strategy: "Make an inference",
        },
        {
          kind: "written",
          id: "mao-rise-p2-q08",
          question:
            "**Source B** — from *Red Star Over China* by Edgar Snow, published in 1937. Snow was an American journalist who in 1936 became the first Western reporter to visit the communist base in north-west China and interview Mao at length (adapted).\n\n> Mao seemed to me a very interesting and complex man. He had the simplicity and naturalness of the Chinese peasant, with a lively sense of humour. The young Red Army soldiers I met were disciplined and believed deeply in what they were fighting for.\n\nHow reliable is Source B as evidence about Mao and the communists in the 1930s? (4 marks)",
          marks: 4,
          modelAnswer:
            "Source B has some strengths. Snow was an **eyewitness** who actually lived with the communists in 1936 and talked to Mao for many hours, which few outsiders had done. As a foreign journalist he was not a member of the Communist Party.\n\nHowever, there are reasons for caution. Snow saw only **what his hosts chose to show him**, and much of his story — including his account of the Long March — came from Mao and other leaders themselves, who wanted to present themselves well. His tone is clearly **sympathetic** (\"simplicity\", \"believed deeply\"), and the book was published in 1937 when the communists wanted support against Japan. It was translated into Chinese and inspired many young people to join them.\n\nSo Source B is reliable as evidence of how the communists **presented themselves** and how they impressed a sympathetic visitor, but less reliable as a balanced picture of Mao.",
          markScheme: [
            { point: "Strength: Snow was an eyewitness who met Mao and visited the base", keywords: ["eyewitness", "visited", "met", "interview", "there", "first-hand", "saw"] },
            { point: "Limitation: he saw only what the communists showed him / relied on their own accounts", keywords: ["shown", "showed", "chose", "controlled", "told by", "mao told", "hosts", "guided", "their own"] },
            { point: "Limitation: sympathetic tone / purpose — the book helped communist propaganda", keywords: ["sympathetic", "positive", "admired", "praise", "biased", "propaganda", "one-sided", "favourable"] },
            { point: "Judgement: reliable for how the communists presented themselves, less so as a balanced view", keywords: ["reliable for", "partly reliable", "less reliable", "how they presented", "image", "judgement", "overall"] },
          ],
          commonError: "Assuming that because Snow was an outsider (not Chinese, not a communist) he must be neutral.",
          difficulty: "core",
          guideRef: "long-march",
          hints: ["Use NOP: Nature, Origin, Purpose.", "Who arranged Snow's visit — and who told him the story of the Long March?", "Look at the tone of his words: neutral, critical or admiring?"],
          strategy: "Check the provenance (NOP)",
        },
        {
          kind: "written",
          id: "mao-rise-p2-q09",
          question: "Explain why foreign interference made many Chinese people angry in the early 20th century. (4 marks)",
          marks: 4,
          modelAnswer:
            "Many Chinese people were angry because foreign powers had **humiliated China** for decades. After defeats such as the **Opium Wars** (1839–42 and 1856–60), China was forced to sign **unequal treaties** that gave foreigners ports such as Hong Kong and special rights, including being tried in their own courts rather than Chinese ones.\n\nBy around 1900, powers such as Britain, France, Germany, Russia and Japan had carved out **spheres of influence** where they controlled trade and railways. This made China look like a country that could not govern itself.\n\nThe anger peaked in **1919**, when the Treaty of Versailles gave Germany's rights in Shandong to Japan, sparking the **May Fourth Movement**. People blamed both the foreigners and their own weak rulers, which is why new parties promising a strong, independent China — the Guomindang and the communists — attracted support.",
          markScheme: [
            { point: "Unequal treaties / Opium Wars / loss of land such as Hong Kong", keywords: ["unequal treaties", "unequal", "opium", "hong kong", "treaty ports", "treaty"] },
            { point: "Spheres of influence / foreign control of trade, ports and railways", keywords: ["spheres of influence", "sphere", "concessions", "railways", "trade", "control"] },
            { point: "Versailles 1919 and Shandong / May Fourth Movement", keywords: ["versailles", "shandong", "may fourth", "1919", "japan"] },
            { point: "Explains why this caused anger: humiliation, national pride, blame on weak government, support for new parties", keywords: ["humiliation", "humiliated", "pride", "nationalism", "weak", "blamed", "independent", "because"] },
          ],
          difficulty: "core",
          guideRef: "china-in-crisis",
          hints: ["Start in the 1800s: which wars did China lose to Britain?", "What were treaty ports and spheres of influence?", "Which 1919 decision sparked student protests?"],
          strategy: "Long-term vs short-term causes",
        },
        {
          kind: "written",
          id: "mao-rise-p2-q10",
          question: "Describe **two** differences between the aims of the Guomindang and the Chinese Communist Party in the 1920s. (4 marks)",
          marks: 4,
          modelAnswer:
            "One difference was about **class and land**. The Guomindang wanted national unity and modernisation, and much of its support came from landowners, merchants and businessmen, so it did not want to take land or property from them. The Communist Party wanted a **class revolution** in which workers and peasants would take power, and land would be taken from landlords.\n\nA second difference was about **what kind of state China should become**. The Guomindang followed Sun Yat-sen's Three Principles of the People — nationalism, democracy (after a period of party rule) and the people's livelihood — in a nationalist republic. The communists wanted a **communist state** on Marxist lines, with links to the Soviet Union and the Comintern.",
          markScheme: [
            { point: "Difference 1 identified: attitude to landlords, class and property", keywords: ["landlords", "landowners", "land", "property", "class", "business", "merchants"] },
            { point: "Difference 1 developed with supporting detail (who backed each party / what each wanted)", keywords: ["workers", "peasants", "revolution", "support", "supported by", "rich"] },
            { point: "Difference 2 identified: type of state (nationalist republic vs communist state)", keywords: ["three principles", "nationalism", "republic", "communist state", "marx", "marxist", "communism"] },
            { point: "Difference 2 developed with supporting detail (e.g. Sun Yat-sen's principles, Soviet/Comintern links)", keywords: ["sun yat-sen", "soviet", "comintern", "russia", "democracy", "livelihood"] },
          ],
          commonError: "Describing each party separately without making the *difference* clear — use words such as 'whereas' or 'however'.",
          difficulty: "core",
          guideRef: "nationalists-and-communists",
          hints: ["Who supported each party — the rich, or the poor?", "What did each party want to do about land?", "Remember Sun Yat-sen's Three Principles of the People."],
          strategy: "Compare and contrast",
        },
        {
          kind: "written",
          id: "mao-rise-p2-q11",
          question: "\"The Japanese invasion was the main reason the Communists won power in China.\" How far do you agree? (6 marks)",
          marks: 6,
          modelAnswer:
            "I partly agree. The Japanese invasion of **1937** was very important. It **weakened the Guomindang**: Japan captured the coastal cities that were its strongholds, its best troops were lost and it retreated to Chongqing, where corruption and inflation grew. Meanwhile the communists fought a guerrilla war behind Japanese lines and were seen as **patriots**. Party membership rose from about 40,000 in 1937 to about 1.2 million in 1945.\n\nHowever, other factors mattered too. The **Guomindang's own weaknesses** — corruption, harsh conscription and neglect of the peasants — existed before the war and became worse after it. **Mao's leadership** also mattered: his peasant strategy, land reform and guerrilla tactics meant the communists were ready to use the chances the war created.\n\nOverall, the invasion was the most important single factor because it turned a small, hunted party into a mass movement and weakened its enemy. But it only led to victory because Mao's strategy allowed the communists to exploit it.",
          markScheme: [
            { point: "Agree: the invasion weakened the GMD (lost cities, troops, retreat to Chongqing, inflation)", keywords: ["weakened", "lost", "chongqing", "cities", "inflation", "troops", "1937"] },
            { point: "Agree: communists gained support as patriotic guerrilla fighters (membership growth, base areas)", keywords: ["patriot", "patriotic", "guerrilla", "behind japanese lines", "1.2 million", "40,000", "membership", "support"] },
            { point: "Disagree: GMD's own weaknesses (corruption, neglect of peasants, conscription)", keywords: ["corrupt", "corruption", "conscription", "landlords", "peasants", "weakness", "unpopular"] },
            { point: "Disagree: Mao's leadership / peasant strategy / land reform", keywords: ["mao", "leadership", "land reform", "strategy", "peasant", "propaganda", "long march"] },
            { point: "Links factors (e.g. war created chances that Mao's strategy exploited)", keywords: ["linked", "link", "exploit", "because", "led to", "combined", "allowed"] },
            { point: "Reaches a clear, supported judgement on 'how far'", keywords: ["overall", "agree", "disagree", "partly", "most important", "to a large extent", "main reason"] },
          ],
          commonError: "Writing only about Japan. A 'how far' question needs the other side and a clear judgement at the end.",
          solutions: [
            {
              label: "Argument: the Japanese invasion mattered most",
              steps: [
                "Before 1937 the communists were a small, hunted party that had barely survived the Long March.",
                "The war shattered the Guomindang's armies and economy, and drove it from its coastal strongholds.",
                "Communist guerrillas won a reputation as patriots and spread their base areas; membership grew about thirty-fold by 1945.",
                "Judgement: without the invasion, Chiang would probably have finished off the communists.",
              ],
            },
            {
              label: "Argument: Guomindang weakness mattered most",
              steps: [
                "Corruption, inflation and brutal conscription made the government unpopular even in areas Japan never reached.",
                "In the Civil War (1946–49) whole Guomindang armies surrendered or changed sides despite American aid.",
                "Judgement: the Guomindang lost the war as much as the communists won it.",
              ],
            },
            {
              label: "Argument: Mao's leadership mattered most",
              steps: [
                "Other crises also hit China, but only the communists had a strategy built on peasant support and land reform.",
                "Mao's guerrilla tactics and propaganda turned the war and the Long March into recruiting tools.",
                "Judgement: crises created the chance, but Mao's leadership turned it into victory.",
              ],
            },
          ],
          difficulty: "challenge",
          guideRef: "why-mao-rose",
          hints: [
            "Plan two sides: how the invasion helped the communists, and what else helped them.",
            "Think about what the war did to the Guomindang — and what it let the communists do in the countryside.",
            "Other factors: Guomindang weaknesses, and Mao's strategy and leadership.",
            "End with a judgement that explains *why* your main factor matters most.",
          ],
          strategy: "Weigh factors",
        },
        {
          kind: "mcq",
          id: "mao-rise-p2-q12",
          question:
            "In 1981, five years after Mao's death, the Chinese Communist Party officially judged that his achievements outweighed his mistakes (often summed up as '70% right, 30% wrong'). Why should a historian treat this verdict with **caution**?",
          options: [
            "It was written by Mao himself just before he died.",
            "It was written by Guomindang historians in Taiwan who wanted to praise Mao.",
            "It was based on Japanese wartime documents that were later proved to be forgeries.",
            "It was made by the party Mao had led, which needed to admit some mistakes without weakening its own right to rule.",
          ],
          answerIndex: 3,
          explanation:
            "The verdict came from the Chinese Communist Party, whose authority rested on Mao's revolution. It had a purpose: to move on from the Cultural Revolution without rejecting Mao completely. That is a reason for caution about its balance. The option about Mao writing it himself is tempting but impossible — the question says it came five years after his death.",
          difficulty: "challenge",
          guideRef: "mao-in-power",
          hints: ["Check the provenance: who made this verdict, and when?", "What would the party lose if it said Mao had been mostly wrong?"],
          strategy: "Think about purpose",
        },
      ],
    },
  ],

  // ============================== CHALLENGE ================================
  challenge: [
    {
      kind: "written",
      id: "mao-rise-ch-q01",
      question:
        "\"China was ripe for revolution long before Mao became important.\" Explain how the crises of 1911–1927 made a communist victory **possible**, but not **certain**. (5 marks)",
      marks: 5,
      modelAnswer:
        "The crises of 1911–27 made a communist victory **possible**. The fall of the Qing in 1911–12 ended over 2,000 years of imperial rule, leaving no accepted authority. The **warlord era** that followed left China divided and the peasants — most of the population — crushed by rents and taxes. Foreign humiliation, especially **Versailles in 1919**, created angry nationalism, and the May Fourth Movement helped spread Marxist ideas; the Communist Party was founded in 1921.\n\nBut these crises did **not make victory certain**. They benefited the **Guomindang** first: by 1928 Chiang had reunited much of China, and in 1927 the **Shanghai Massacre** almost destroyed the communists. In 1934 they were driven out of Jiangxi.\n\nSo the crises created a vacuum that *someone* would fill, but whether it would be the communists depended on later events — the Japanese invasion and Mao's peasant strategy. Thinking it was inevitable is hindsight.",
      markScheme: [
        { point: "Crises that made revolution possible: fall of the Qing, no stable authority", keywords: ["qing", "emperor", "1911", "1912", "vacuum", "collapse"] },
        { point: "Warlords and peasant poverty created grievances", keywords: ["warlord", "warlords", "peasants", "poverty", "rents", "taxes", "landlords"] },
        { point: "Foreign humiliation / May Fourth spread nationalism and Marxist ideas", keywords: ["versailles", "may fourth", "1919", "foreign", "humiliation", "marxism", "nationalism", "1921"] },
        { point: "Not certain: the Guomindang benefited first; communists nearly destroyed in 1927/1934", keywords: ["guomindang", "gmd", "kmt", "chiang", "shanghai", "1927", "nearly destroyed", "jiangxi", "not certain"] },
        { point: "Judgement avoiding hindsight: crises created opportunity; later factors decided who took it", keywords: ["hindsight", "inevitable", "opportunity", "depended", "later", "japan", "mao's strategy", "not certain"] },
      ],
      commonError: "Writing as if the communist victory was bound to happen. In 1927 or 1934 almost nobody would have predicted it.",
      difficulty: "challenge",
      guideRef: "china-in-crisis",
      hints: [
        "First list the crises: political, foreign, social.",
        "Who benefited from those crises first — the communists or the Guomindang?",
        "Where were the communists in 1927 and in 1934? Did victory look likely?",
        "Use the idea of 'avoiding hindsight' in your judgement.",
      ],
      strategy: "Avoid hindsight",
    },
    {
      kind: "written",
      id: "mao-rise-ch-q02",
      question:
        "Compare how Hitler and Mao came to power. Explain **one similarity** and **one difference**, and judge which leader depended more on crises. (6 marks)",
      marks: 6,
      modelAnswer:
        "One **similarity** is that both rose because of **crises and weak governments**. Hitler benefited from the Great Depression after 1929, when unemployment in Germany reached about six million and the Weimar governments looked powerless. Mao benefited from the warlord era, the Japanese invasion of 1937 and the Guomindang's corruption and inflation. Both also used **propaganda** to build an image of the leader.\n\nThe biggest **difference** is the **route** to power. After his failed Munich Putsch of 1923, Hitler chose a **legal route**: the Nazis became the largest party in the Reichstag in July 1932 (about 37% of the vote), and President Hindenburg appointed him Chancellor on 30 January 1933. Mao won through **armed struggle** — 22 years of guerrilla and civil war from 1927 to 1949 — ending with a military victory.\n\nI judge that **Hitler depended more on crises**: without the Depression the Nazis had only about 3% of the vote in 1928. Mao also needed crises, but his peasant army had been built over decades and could seize the opportunity by force.",
      markScheme: [
        { point: "Similarity: both exploited crises / weak governments (Depression, Weimar; warlords, Japan, GMD)", keywords: ["crisis", "crises", "depression", "weimar", "weak government", "japan", "warlords", "inflation", "unemployment"] },
        { point: "Similarity supported, or a second similarity (e.g. propaganda, cult of the leader)", keywords: ["propaganda", "image", "cult", "charisma", "charismatic", "leader"] },
        { point: "Difference: Hitler's legal route (elections, appointed Chancellor 1933)", keywords: ["legal", "elections", "votes", "chancellor", "hindenburg", "1933", "appointed", "reichstag"] },
        { point: "Difference: Mao's revolutionary route (civil war, guerrilla army, 1949 victory)", keywords: ["civil war", "army", "guerrilla", "force", "war", "1949", "military", "gun"] },
        { point: "Uses precise evidence for both (e.g. 37% July 1932, Munich Putsch, 1927–49)", keywords: ["37", "1932", "1923", "putsch", "six million", "1927", "1937"] },
        { point: "Reaches a supported judgement on which leader depended more on crises", keywords: ["more on crises", "depended more", "judgement", "overall", "hitler depended", "mao depended", "more dependent"] },
      ],
      commonError: "Saying Hitler 'seized power in a coup'. His 1923 coup failed; he was appointed Chancellor legally in 1933.",
      solutions: [
        {
          label: "Argument: Hitler depended more on crises",
          steps: [
            "In 1928, before the Depression, the Nazis won only about 3% of the vote.",
            "Mass unemployment from 1929 drove their vote to about 37% by July 1932.",
            "Mao had a long-term peasant base and army that existed whatever happened to the economy.",
            "Judgement: take away the Depression and Hitler probably stays on the fringe.",
          ],
        },
        {
          label: "Argument: Mao depended more on crises",
          steps: [
            "In 1934–35 the communists were almost wiped out on the Long March.",
            "Only the Japanese invasion (1937) stopped Chiang's campaigns against them and weakened his government.",
            "Judgement: without Japan the communists might never have recovered — Mao needed an even bigger crisis than Hitler did.",
          ],
        },
      ],
      difficulty: "challenge",
      guideRef: "why-mao-rose",
      hints: [
        "Use the Term 2 enquiry headings: crises, weakness of government, leadership.",
        "Hitler and Mao took very different routes — think ballot box versus battlefield.",
        "Hitler's 1923 putsch failed. How did he actually become Chancellor?",
        "For the judgement: imagine each story without its biggest crisis. Who still rises?",
      ],
      strategy: "Compare and contrast",
    },
    {
      kind: "written",
      id: "mao-rise-ch-q03",
      question:
        "Read two interpretations (both written for this exercise).\n\n**Interpretation 1:** *\"The Long March was a heroic victory. Against impossible odds, the Red Army escaped encirclement, crossed rivers and mountains, and arrived in the north-west ready to lead China.\"*\n\n**Interpretation 2:** *\"The Long March was a desperate retreat. Around nine out of ten marchers were lost, and the party survived mainly because Chiang's armies failed to finish it off.\"*\n\nWhich interpretation is more convincing? Use your knowledge to explain your answer. (5 marks)",
      marks: 5,
      modelAnswer:
        "Interpretation 2 is more convincing **as a description of what happened militarily**. About 86,000 people set out in October 1934 and only around 8,000 reached Shaanxi a year later. The communists had been forced out of the Jiangxi Soviet by Chiang's fifth encirclement campaign, so the March began as a retreat, not an attack.\n\nHowever, Interpretation 1 has some support. The survivors did escape, and at the **Zunyi Conference** (1935) Mao gained a leading role, so the party emerged with new leadership. The March also became a powerful **legend**, spread by communist propaganda and by Edgar Snow's *Red Star Over China*. But words like \"ready to lead China\" use **hindsight** — in 1935 the party was tiny and isolated.\n\nOverall, Interpretation 2 is more accurate about the March itself, while Interpretation 1 reflects how the March was later **used** — a disaster turned into a propaganda triumph.",
      markScheme: [
        { point: "Supports Interpretation 2 with evidence of losses (about 86,000 to 8,000) / retreat from Jiangxi", keywords: ["86,000", "8,000", "losses", "retreat", "jiangxi", "encirclement", "nine out of ten", "died"] },
        { point: "Supports Interpretation 1 with evidence (survival, escape, Zunyi, Mao's leadership)", keywords: ["zunyi", "survived", "escaped", "leadership", "mao", "yan'an", "shaanxi"] },
        { point: "Recognises legend/propaganda shaped the heroic view (Luding, Snow)", keywords: ["propaganda", "legend", "myth", "snow", "luding", "story", "heroic"] },
        { point: "Identifies hindsight or exaggeration in an interpretation", keywords: ["hindsight", "exaggerate", "exaggerated", "ready to lead", "impossible odds"] },
        { point: "Clear judgement explaining which is more convincing and why", keywords: ["more convincing", "overall", "judgement", "interpretation 2", "interpretation 1", "more accurate"] },
      ],
      commonError: "Agreeing with one interpretation without using any evidence, or simply summarising both.",
      solutions: [
        {
          label: "Argument: Interpretation 2 is more convincing",
          steps: [
            "The numbers show catastrophic losses: roughly 86,000 set out, about 8,000 arrived.",
            "The March started because the communists had lost Jiangxi — it was forced, not chosen.",
            "Judgement: militarily it was a near-disaster; the heroic version came later.",
          ],
        },
        {
          label: "Argument: Interpretation 1 is more convincing",
          steps: [
            "The party survived when Chiang aimed to destroy it — that is a victory of a kind.",
            "Zunyi brought Mao and his strategy to the leadership, which later won the war.",
            "Judgement: judged by long-term results rather than losses, the March was a turning point that saved the revolution.",
          ],
        },
      ],
      difficulty: "challenge",
      guideRef: "long-march",
      hints: [
        "Test each interpretation against facts: numbers, causes, results.",
        "How many set out, and how many arrived?",
        "Which conference during the March changed the party's leadership?",
        "Is either interpretation using hindsight — knowing what happened in 1949?",
      ],
      strategy: "Evaluate interpretations",
    },
    {
      kind: "written",
      id: "mao-rise-ch-q04",
      question:
        "**What if?** Suppose Chiang Kai-shek had **not** turned on the communists in 1927, and the First United Front had survived. Explain how this might have changed Mao's path to power. (4 marks)",
      marks: 4,
      modelAnswer:
        "If the United Front had survived, the communists would probably have **stayed in the cities**, working in trade unions as junior partners of the Guomindang and following Soviet advice. The Shanghai Massacre of 1927 destroyed that city-based strategy and forced the survivors into the **countryside**, where Mao developed his peasant revolution in Hunan and Jiangxi.\n\nWithout that shock, Mao's ideas might never have been tested, and the **Soviet-trained leaders** — not Mao — would probably have kept control of the party. There would have been no Jiangxi Soviet, no Long March and no Zunyi Conference to raise him up.\n\nOn the other hand, the alliance was fragile because the two parties had **opposite aims** over land and class, so a split might only have been delayed. So the 1927 break was a key turning point: it made Mao's route to power possible, even if conflict was likely sooner or later.",
      markScheme: [
        { point: "Communists would likely have stayed city-based, under GMD / Soviet direction", keywords: ["cities", "city", "trade unions", "workers", "junior", "soviet", "comintern"] },
        { point: "The massacre pushed communists to the countryside where Mao's peasant strategy developed", keywords: ["countryside", "peasants", "hunan", "jiangxi", "rural", "forced"] },
        { point: "Mao might not have risen (no Long March / Zunyi; other leaders kept control)", keywords: ["zunyi", "long march", "other leaders", "not risen", "never", "leadership"] },
        { point: "Balanced judgement: split might only have been delayed because of opposite aims", keywords: ["delayed", "anyway", "fragile", "opposite aims", "sooner or later", "turning point", "however"] },
      ],
      commonError: "Writing a story without explaining the causal links between the 1927 break and Mao's later rise.",
      difficulty: "challenge",
      guideRef: "nationalists-and-communists",
      hints: [
        "Where were most communists working before 1927 — cities or villages?",
        "What did the Shanghai Massacre force the survivors to do?",
        "Without that, would Mao's peasant ideas have taken over the party?",
        "Consider the counter-argument: were the two parties likely to split anyway?",
      ],
      strategy: "Link the causes",
    },
    {
      kind: "written",
      id: "mao-rise-ch-q05",
      question:
        "Historians sometimes argue that the way a dictator **gains** power shapes how he **uses** it. How far do Mao's actions after 1949 support this idea? Give at least two links. (5 marks)",
      marks: 5,
      modelAnswer:
        "There are strong links. Mao had said that \"political power grows out of the barrel of a gun\", and he won power through **war**. After 1949 he used force against 'enemies' — for example in the **land reform** campaigns of the early 1950s, when landlords were denounced at mass meetings and many were killed.\n\nSecond, the **cult of personality** grew out of the Yan'an years, when the Long March legend and party propaganda built up Mao's image. After 1949 this became portraits everywhere, the Little Red Book and the Red Guards' devotion in the **Cultural Revolution**.\n\nThird, Mao's faith in **mass peasant mobilisation**, which had won the Civil War, led to the **Great Leap Forward** (1958–62). Pushing millions into communes produced a famine in which tens of millions died.\n\nHowever, not everything followed from his rise: Soviet influence and Cold War pressures also shaped his policies. Overall the idea is largely supported — the methods that won power were turned on China itself.",
      markScheme: [
        { point: "Link 1: power won by force / violence continued against 'enemies' (land reform, campaigns)", keywords: ["barrel of a gun", "gun", "force", "violence", "war", "land reform", "landlords", "enemies"] },
        { point: "Link 2: propaganda/cult of personality from Yan'an grew into Little Red Book / Cultural Revolution", keywords: ["cult", "propaganda", "little red book", "cultural revolution", "red guards", "yan'an", "long march"] },
        { point: "Link 3: mass mobilisation of peasants carried into the Great Leap Forward, with famine", keywords: ["great leap forward", "communes", "famine", "mobilisation", "mobilise", "peasants", "millions"] },
        { point: "Counter-argument: other influences (Soviet model, Cold War, his own later decisions)", keywords: ["however", "soviet", "cold war", "other factors", "not only", "korea", "stalin"] },
        { point: "Supported judgement on 'how far'", keywords: ["overall", "largely", "to a large extent", "partly", "judgement", "supports"] },
      ],
      commonError: "Listing what Mao did after 1949 without linking each action back to how he won power.",
      difficulty: "challenge",
      guideRef: "mao-in-power",
      hints: [
        "How did Mao win power — by votes or by force? What happened to 'enemies' after 1949?",
        "Where did the image of Mao as a great hero come from before 1949?",
        "What had mass peasant mobilisation achieved in the Civil War — and what happened when it was used in 1958?",
        "Is there anything that does not fit the idea?",
      ],
      strategy: "Spot change and continuity",
    },
    {
      kind: "short",
      id: "mao-rise-ch-q06",
      question:
        "Communist Party membership is usually estimated at about **40,000** in 1937 and about **1,200,000** in 1945. Roughly how many **times** larger was the party in 1945 than in 1937?",
      answer: { type: "number", value: 30, display: "about 30 times" },
      traps: [
        { spec: { type: "number", value: 1160000 }, feedback: "That is how many members were *added*. The question asks how many times bigger: divide, don't subtract." },
        { spec: { type: "number", value: 3 }, feedback: "Check your zeros: 1,200,000 ÷ 40,000 — count them carefully." },
      ],
      solution: [
        "1,200,000 ÷ 40,000 = 30.",
        "So the party grew about **thirty-fold** during the war with Japan — powerful evidence that the war transformed the communists' position.",
        "A historian would still ask: how were these figures produced, and by whom? Party statistics may be rounded or flattering.",
      ],
      commonError: "Subtracting instead of dividing.",
      difficulty: "challenge",
      guideRef: "japan-and-civil-war",
      hints: ["'How many times larger' means divide the bigger number by the smaller.", "Cancel the zeros: 1,200,000 ÷ 40,000 is the same as 120 ÷ 4."],
      strategy: "Use precise evidence",
    },
    {
      kind: "short",
      id: "mao-rise-ch-q07",
      question:
        "Put these events in **chronological order**, earliest first. Type the numbers only (e.g. 1 2 3 4 5).\n\n1. The Zunyi Conference\n2. Japan launches full-scale invasion of China\n3. The Shanghai Massacre\n4. The Jiangxi Soviet is set up\n5. The Xi'an Incident — Chiang is kidnapped by his own generals and pressed to fight Japan",
      answer: { type: "text", accept: ["34152", "3 4 1 5 2", "3, 4, 1, 5, 2", "3-4-1-5-2"], display: "3, 4, 1, 5, 2" },
      traps: [
        { spec: { type: "text", accept: ["34125"] }, feedback: "Close — but the Xi'an Incident (December 1936) pushed Chiang towards fighting Japan, so it came *before* the invasion of 1937." },
        { spec: { type: "text", accept: ["43152"] }, feedback: "The Jiangxi Soviet was set up after the communists were driven out of the cities — by what event?" },
      ],
      solution: [
        "3. Shanghai Massacre — April **1927**.",
        "4. Jiangxi Soviet — **1931** (to 1934).",
        "1. Zunyi Conference — January **1935**, during the Long March.",
        "5. Xi'an Incident — December **1936**.",
        "2. Full-scale Japanese invasion — July **1937**.",
      ],
      difficulty: "challenge",
      guideRef: "why-mao-rose",
      hints: [
        "Find the earliest event first: which one ended the First United Front?",
        "The Long March (1934–35) began when the communists were driven out of their base — so which comes before Zunyi?",
        "The Xi'an Incident led to the Second United Front against Japan.",
      ],
      strategy: "Put it in chronological order",
    },
    {
      kind: "written",
      id: "mao-rise-ch-q08",
      question:
        "Spot the flaws. A student wrote:\n\n> *\"Mao came to power in 1949 because, like Hitler, he was a brilliant speaker who won elections. Peasants voted for him because he promised them jobs in new factories, and he copied the Russian Revolution exactly.\"*\n\nIdentify **three** errors and rewrite the explanation correctly. (4 marks)",
      marks: 4,
      modelAnswer:
        "**Error 1:** Mao did not win elections. He came to power by winning a **civil war** (1946–49) with the Red Army / People's Liberation Army — there was no national election.\n\n**Error 2:** Peasants did not support him for factory jobs. They supported the communists because of **land reform** — taking land from landlords and giving it to poor peasants — and because the Red Army treated them fairly.\n\n**Error 3:** Mao did **not** copy the Russian Revolution exactly. Russia's 1917 revolution was based on workers in the cities; Mao adapted Marxism to China by making the **peasants** the main revolutionary force, using guerrilla war in the countryside.\n\n**Correct explanation:** Mao came to power in 1949 by force, after a long civil war. He won because his peasant-based strategy, land reform and guerrilla tactics gained mass rural support, while the Guomindang was weakened by the Japanese invasion, corruption and inflation.",
      markScheme: [
        { point: "Error 1 corrected: no elections — Mao won a civil war by force", keywords: ["civil war", "no election", "not elections", "war", "force", "army", "military"] },
        { point: "Error 2 corrected: peasants wanted land (land reform), not factory jobs", keywords: ["land", "land reform", "landlords", "not factories", "farm"] },
        { point: "Error 3 corrected: he adapted Marxism to peasants, not copying Russia's worker-led revolution", keywords: ["adapted", "peasants", "not copy", "workers", "cities", "countryside", "russia"] },
        { point: "Rewrites a correct explanation linking Mao's strategy and Guomindang weakness", keywords: ["guomindang", "gmd", "kmt", "weak", "japan", "corruption", "inflation", "strategy", "guerrilla"] },
      ],
      commonError: "Spotting an error without explaining what actually happened.",
      difficulty: "challenge",
      guideRef: "mao-and-the-peasants",
      hints: [
        "Check each claim against how Mao actually took power.",
        "Was there a national election in China in 1949?",
        "What did poor peasants want most — and who was the 1917 Russian revolution based on?",
      ],
      strategy: "Spot the flaw in an argument",
    },
  ],
};
