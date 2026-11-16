import type { Paper } from "../../types.ts";

export const morePapers: Paper[] = [
  {
    id: "mao-rise-p3",
    title: "Practice Paper 3",
    questions: [
      {
        kind: "short",
        id: "mao-rise-p3-q01",
        question:
          "Britain fought two wars against China (1839–42 and 1856–60) partly to force the Chinese government to allow the trade in a harmful drug. Which drug?",
        answer: { type: "text", accept: ["opium"], display: "opium" },
        traps: [
          { spec: { type: "text", accept: ["tea", "silk"] }, feedback: "Britain *bought* tea and silk from China. The wars were about what British merchants were *selling* to China." },
        ],
        solution: [
          "These were the **Opium Wars**. British merchants sold opium grown in India to China; when the Chinese government tried to stop the trade, Britain went to war.",
          "China's defeats led to the **unequal treaties** — the start of a century of foreign humiliation.",
        ],
        difficulty: "warmup",
        guideRef: "china-in-crisis",
        hints: ["The two wars are named after the drug."],
      },
      {
        kind: "short",
        id: "mao-rise-p3-q02",
        question:
          "Who founded the Guomindang (Nationalist Party), set out the 'Three Principles of the People', and is still honoured as the 'Father of the Nation' in Taiwan and as a 'forerunner of the revolution' in mainland China? Give his name.",
        answer: {
          type: "text",
          accept: ["Sun Yat-sen", "Sun Yatsen", "Sun Yat sen", "Sun Zhongshan", "Sun Yixian", "Dr Sun Yat-sen", "Sun", "Dr Sun"],
          display: "Sun Yat-sen",
        },
        traps: [
          { spec: { type: "text", accept: ["Chiang Kai-shek", "Chiang", "Chiang Kaishek", "Jiang Jieshi"] }, feedback: "Chiang led the Guomindang *after* its founder died in 1925. Who founded it?" },
          { spec: { type: "text", accept: ["Mao", "Mao Zedong", "Mao Tse-tung"] }, feedback: "Mao led the rival Communist Party. The Nationalists' founder was someone else." },
        ],
        solution: [
          "**Sun Yat-sen** founded the Guomindang and briefly became the first (provisional) president of the Republic of China in 1912.",
          "Both the Communists and the Nationalists honour him as a founder of modern China — a sign of how important he was.",
        ],
        difficulty: "warmup",
        guideRef: "nationalists-and-communists",
        hints: ["He died in 1925, before the Nationalists and Communists split."],
      },
      {
        kind: "short",
        id: "mao-rise-p3-q03",
        question: "In which year did the communists break out of the Jiangxi Soviet and begin the Long March?",
        answer: { type: "number", value: 1934 },
        traps: [
          { spec: { type: "number", value: 1935 }, feedback: "The March *ended* in Shaanxi in October 1935. It began a year earlier." },
          { spec: { type: "number", value: 1927 }, feedback: "1927 is the Shanghai Massacre. The Long March came seven years later." },
        ],
        solution: ["The breakout began in **October 1934**.", "About a year later, in October 1935, the survivors reached Shaanxi in the north-west."],
        difficulty: "warmup",
        guideRef: "long-march",
        hints: ["Chiang's fifth encirclement campaign began in late 1933 and took about a year to squeeze the communists out of Jiangxi."],
        strategy: "Put it in chronological order",
      },
      {
        kind: "short",
        id: "mao-rise-p3-q04",
        question: "Complete Mao's famous statement: *\"Political power grows out of the barrel of a ______.\"*",
        answer: { type: "text", accept: ["gun", "a gun", "guns", "rifle", "a rifle"], display: "gun" },
        traps: [
          { spec: { type: "text", accept: ["the people", "people", "ballot box", "ballot", "vote", "votes"] }, feedback: "That would describe a democracy. Mao's point was that real power comes from armed force." },
        ],
        solution: [
          "*\"Political power grows out of the barrel of a gun.\"* This famous wording comes from a speech Mao gave in 1938 (*Problems of War and Strategy*); he had first made the same point to party leaders in August 1927.",
          "Mao believed the communists could only win by building their own army — a sharp contrast with Hitler, who came to power through elections and appointment.",
        ],
        difficulty: "core",
        guideRef: "mao-and-the-peasants",
        hints: ["Mao believed power came from force, not from votes.", "A 'barrel' here is part of a weapon."],
        strategy: "Compare and contrast",
      },
      {
        kind: "short",
        id: "mao-rise-p3-q05",
        question:
          "After the Xi'an Incident (1936), the Guomindang and the communists agreed in 1937 to stop fighting each other and resist Japan together. What was this alliance called?",
        answer: {
          type: "text",
          accept: ["Second United Front", "the Second United Front", "2nd United Front", "United Front", "the United Front", "Second Front"],
          display: "the Second United Front",
        },
        traps: [
          { spec: { type: "text", accept: ["First United Front", "the First United Front", "1st United Front"] }, feedback: "The First United Front (1923–27) was against the warlords and ended with the Shanghai Massacre. This was another one." },
        ],
        solution: [
          "It was the **Second United Front** (1937).",
          "It gave the communists breathing space: Chiang's campaigns against them stopped and they could expand behind Japanese lines.",
        ],
        difficulty: "core",
        guideRef: "japan-and-civil-war",
        hints: ["There had been an earlier alliance between the two parties in the 1920s.", "If the 1920s alliance was the first, this one is…"],
      },
      {
        kind: "mcq",
        id: "mao-rise-p3-q06",
        question: "Around 1900, foreign powers such as Britain, Germany, Russia and Japan had **'spheres of influence'** in China. What were they?",
        options: [
          "Areas where a foreign power held special trading, railway and mining rights, even though the land was still officially Chinese.",
          "Provinces ruled by Chinese warlords with their own private armies.",
          "Mountain bases controlled by the Red Army.",
          "Villages where land had been shared out among the peasants.",
        ],
        answerIndex: 0,
        explanation:
          "Spheres of influence let foreign powers dominate the economy of large regions without formally governing them — a clear sign of China's weakness. Warlord provinces are a tempting distractor because they also show China was divided, but warlords were Chinese military rulers, and they rose after 1916, not foreign powers around 1900.",
        difficulty: "core",
        guideRef: "china-in-crisis",
        hints: ["The question says *foreign* powers.", "'Influence' suggests control without official ownership."],
        strategy: "Use precise evidence",
      },
      {
        kind: "written",
        id: "mao-rise-p3-q07",
        question:
          "**Source A** — described for this exercise: a brightly coloured poster published in China in the late 1960s. Mao's face glows like a rising sun above huge crowds of smiling workers, peasants and soldiers, who are all holding up copies of the Little Red Book. The slogan reads: *\"Chairman Mao is the red sun in our hearts.\"*\n\nWhat can you infer from Source A about how Mao was presented to the Chinese people in the 1960s? (3 marks)",
        marks: 3,
        modelAnswer:
          "I can infer that Mao was presented as **almost god-like**. Showing his face as a glowing sun suggests he was the source of life and light for China, far above ordinary people.\n\nI can also infer that people were expected to show **total loyalty and devotion** to him. Every worker, peasant and soldier is holding the Little Red Book of his quotations, suggesting that his words were treated as the guide to everything.\n\nFinally, the smiling crowds suggest the poster's **purpose** was to show the whole nation united and happy under Mao. This was part of his **cult of personality**, which made criticising him seem like betraying China — especially during the Cultural Revolution.",
        markScheme: [
          { point: "Inference: Mao shown as god-like / all-powerful, supported by the sun imagery", keywords: ["god", "god-like", "sun", "worship", "light", "above", "superhuman"] },
          { point: "Inference: people expected to show loyalty/devotion, supported by the Little Red Book", keywords: ["loyal", "loyalty", "devotion", "little red book", "follow", "obey", "quotations"] },
          { point: "Identifies purpose / cult of personality, linked to context (Cultural Revolution, control)", keywords: ["cult", "cult of personality", "propaganda", "cultural revolution", "control", "united", "purpose"] },
        ],
        commonError: "Describing the poster ('it shows Mao as a sun') without saying what that *suggests*.",
        difficulty: "core",
        guideRef: "mao-in-power",
        hints: ["What does the sun do for living things? Why compare a leader to it?", "Look at what everyone in the crowd is holding.", "Who made this poster, and why?"],
        strategy: "Make an inference",
      },
      {
        kind: "written",
        id: "mao-rise-p3-q08",
        question:
          "**Source B** — a remark widely attributed to Chiang Kai-shek in the years of conflict with Japan, quoted in many histories (translated).\n\n> \"The Japanese are a disease of the skin; the communists are a disease of the heart.\"\n\nHow useful is Source B for understanding why the Guomindang lost support in the 1930s and 1940s? (4 marks)",
        marks: 4,
        modelAnswer:
          "Source B is useful because it seems to reveal **Chiang's priorities**: he saw the communists as a deeper danger than the Japanese invaders. This fits what he did — in the early 1930s he kept attacking the communists in Jiangxi even after Japan had seized Manchuria (1931), until he was forced into the Second United Front after the Xi'an Incident of 1936.\n\nThis helps explain the Guomindang's loss of support, because many patriotic Chinese, especially students, believed the government should fight **Japan** first, and saw the communists as the more patriotic side.\n\nHowever, there are limits. The remark is **attributed** — we cannot be sure of the exact wording or date, and opponents may have repeated it to make Chiang look unpatriotic. It also shows only Chiang's view; it does not tell us directly what **ordinary people** thought. So it is useful evidence of Chiang's thinking, but needs cross-referencing with other evidence about public opinion.",
        markScheme: [
          { point: "Content: shows Chiang saw the communists as a bigger threat than Japan", keywords: ["bigger threat", "priority", "priorities", "more dangerous", "heart", "communists first"] },
          { point: "Own knowledge: links to Chiang attacking communists rather than Japan (Jiangxi, Manchuria 1931, Xi'an 1936) and the patriotic anger this caused", keywords: ["manchuria", "1931", "xi'an", "1936", "encirclement", "jiangxi", "patriotic", "unpatriotic", "students"] },
          { point: "Provenance: attributed remark — exact wording/date uncertain; may be repeated by opponents", keywords: ["attributed", "uncertain", "not sure", "wording", "opponents", "date", "provenance", "repeated"] },
          { point: "Judgement on usefulness: useful for Chiang's view but not public opinion; needs cross-referencing", keywords: ["useful for", "limited", "only chiang", "ordinary people", "cross-reference", "other sources", "public opinion", "judgement"] },
        ],
        commonError: "Treating a famous quotation as certain fact without asking where it comes from.",
        difficulty: "core",
        guideRef: "nationalists-and-communists",
        hints: ["What does the comparison between 'skin' and 'heart' tell you about Chiang's priorities?", "How might patriotic Chinese react to a leader who fights fellow Chinese while Japan invades?", "Notice the word 'attributed' — what problem does that create?"],
        strategy: "Check the provenance (NOP)",
      },
      {
        kind: "written",
        id: "mao-rise-p3-q09",
        question: "Explain why Mao was able to become one of the Communist Party's main leaders by 1935. (6 marks)",
        marks: 6,
        modelAnswer:
          "Mao rose partly because of **his record in the countryside**. After the Shanghai Massacre of 1927 drove the communists out of the cities, Mao built a base among the peasants in Jiangxi, using land reform and guerrilla tactics. These tactics helped defeat the Guomindang's first encirclement campaigns.\n\nSecond, **the failure of his rivals** helped him. The party's Soviet-trained leaders, such as Bo Gu and the Comintern adviser Otto Braun, sidelined Mao and fought Chiang's **fifth encirclement campaign** head-on. They lost, and the communists had to abandon Jiangxi in 1934.\n\nThird, the disastrous early stages of the **Long March** gave Mao his chance. After heavy losses, leaders met at the **Zunyi Conference** in January 1935, blamed Bo Gu and Braun, and gave Mao a leading military role.\n\nThese reasons link together: his rivals' failure made his own ideas look right. The most important reason was the failure of the Soviet-style approach, because it proved that Mao's peasant and guerrilla strategy was the only way the party could survive.",
        markScheme: [
          { point: "Mao's peasant base and land reform in Jiangxi", keywords: ["jiangxi", "peasants", "land reform", "countryside", "base", "soviet"] },
          { point: "Success of guerrilla tactics against early encirclement campaigns", keywords: ["guerrilla", "encirclement", "tactics", "hit and run", "defeated"] },
          { point: "Failure of rival Soviet-trained leaders (Bo Gu, Otto Braun, head-on fighting)", keywords: ["bo gu", "braun", "otto braun", "soviet-trained", "comintern", "head-on", "rivals", "failed"] },
          { point: "Loss of Jiangxi and heavy early losses on the Long March", keywords: ["fifth", "1934", "long march", "losses", "abandon", "retreat", "xiang"] },
          { point: "Zunyi Conference (January 1935) gave Mao a leading role", keywords: ["zunyi", "1935", "conference", "leading role", "leader"] },
          { point: "Links reasons and makes a judgement about the most important", keywords: ["most important", "linked", "because", "therefore", "overall", "proved", "judgement"] },
        ],
        commonError: "Saying Mao 'became leader at the start of the Long March' — he was sidelined in 1934 and only gained a leading role at Zunyi in 1935.",
        difficulty: "core",
        guideRef: "long-march",
        hints: [
          "What had Mao been doing in Jiangxi before 1934?",
          "Who led the party in 1934 — and why did they lose Jiangxi?",
          "Which conference during the Long March changed the leadership?",
          "Which reason made the others matter? Say why.",
        ],
        strategy: "Link the causes",
      },
      {
        kind: "written",
        id: "mao-rise-p3-q10",
        question: "Describe the problems faced by China's peasants in the early 20th century. (4 marks)",
        marks: 4,
        modelAnswer:
          "Peasants made up the vast majority of China's population, and most were very poor. Many did not own their land and had to pay **high rents to landlords** — often half or more of the harvest.\n\nThey also suffered from **heavy taxes**. During the warlord era, local warlords collected taxes to pay for their armies, sometimes years in advance, and soldiers took food and forced men to serve.\n\nPeasants were also exposed to **natural disasters**, such as floods and droughts, which caused famines, and many fell into **debt** to moneylenders.\n\nBecause governments did little to help, many peasants had strong reasons to support anyone who promised them land and fair treatment — which Mao later did.",
        markScheme: [
          { point: "High rents / landlords / not owning land", keywords: ["rent", "rents", "landlords", "landlord", "land", "tenants", "half"] },
          { point: "Heavy taxes and abuse by warlords and soldiers", keywords: ["tax", "taxes", "warlords", "soldiers", "armies", "conscription"] },
          { point: "Famine, floods, droughts or debt", keywords: ["famine", "flood", "floods", "drought", "debt", "moneylenders", "starve", "hunger"] },
          { point: "Developed description showing the scale (majority of population) or why it mattered later", keywords: ["majority", "most", "80", "90", "support", "mao", "communists", "promise"] },
        ],
        difficulty: "core",
        guideRef: "china-in-crisis",
        hints: ["Who owned most of the land, and what did peasants pay them?", "What did warlords need money for?", "What could nature do to a farming family?"],
        strategy: "Use precise evidence",
      },
      {
        kind: "written",
        id: "mao-rise-p3-q11",
        question:
          "Your Term 2 enquiry identifies three types of cause for the rise of dictators: **crises**, **weakness of government** and **leadership**. Explain how these three factors **linked together** to bring Mao to power. (5 marks)",
        marks: 5,
        modelAnswer:
          "**Crises** created the opportunity. The collapse of imperial rule in 1911–12, the warlord era and above all the **Japanese invasion of 1937** caused chaos, poverty and anger.\n\nThese crises exposed the **weakness of the Guomindang government**. The war drove it from its coastal cities and wrecked its finances, causing inflation and corruption. It also failed to help the peasants, so it lost support.\n\n**Mao's leadership** turned this weakness into communist strength. His peasant strategy, land reform and guerrilla tactics won rural support, while propaganda, such as the Long March legend, made the communists look like heroic patriots. Communist membership grew from about 40,000 in 1937 to about 1.2 million in 1945.\n\nThe factors were linked like a chain: crises weakened the government, and Mao's leadership filled the gap. Without the crises Mao would have had no opening; without Mao's strategy, another group might have taken advantage of them.",
        markScheme: [
          { point: "Crises explained with evidence (1911–12, warlords, Japanese invasion)", keywords: ["crisis", "crises", "japan", "1937", "invasion", "warlords", "1911", "qing"] },
          { point: "Weakness of government explained (GMD corruption, inflation, defeats, neglect of peasants)", keywords: ["weak", "weakness", "corruption", "corrupt", "inflation", "guomindang", "gmd", "kmt", "defeats"] },
          { point: "Leadership explained (Mao's peasant strategy, guerrilla tactics, land reform, propaganda)", keywords: ["mao", "leadership", "peasant", "guerrilla", "land reform", "propaganda", "long march"] },
          { point: "Explicit link between two factors (e.g. crisis exposed weakness)", keywords: ["exposed", "led to", "caused", "because", "so", "linked", "made worse"] },
          { point: "Explains how all three work together / judgement about their interaction", keywords: ["chain", "together", "without", "combined", "interaction", "all three", "filled the gap"] },
        ],
        commonError: "Writing three separate paragraphs with no links. The question asks how the factors *connect*.",
        difficulty: "challenge",
        guideRef: "why-mao-rose",
        hints: [
          "Take one example of a crisis. What did it do to the Guomindang government?",
          "How did Mao take advantage of the Guomindang's weakness?",
          "Use linking words: 'this led to…', 'which allowed…', 'without this…'.",
        ],
        strategy: "Link the causes",
      },
      {
        kind: "mcq",
        id: "mao-rise-p3-q12",
        question:
          "During the war against Japan (1937–45), the Guomindang fought most of the big battles and suffered far more casualties than the communists. Why, then, did the communists gain **more** popular support from the war?",
        options: [
          "The communists actually fought most of the major battles against the Japanese army.",
          "Communist guerrillas lived among villagers behind Japanese lines, ran local government, cut rents and publicised their resistance, so peasants saw them as their defenders.",
          "The Guomindang refused to fight Japan at any point during the war.",
          "Japan attacked only Guomindang areas and left communist areas completely alone.",
        ],
        answerIndex: 1,
        explanation:
          "The communists' strength was not the size of their battles but their presence in the villages: they organised, protected and reformed local life, and their propaganda made the most of every action. The option claiming the Guomindang never fought is tempting because of its poor reputation, but it is false — it fought huge battles such as Shanghai (1937) and lost vast numbers of soldiers.",
        difficulty: "challenge",
        guideRef: "japan-and-civil-war",
        hints: ["Fighting the most battles is not the same as winning the most support.", "Where were communist guerrillas based, and who did they live among?"],
        strategy: "Consider the counter-argument",
      },
    ],
  },
  {
    id: "mao-rise-p4",
    title: "Practice Paper 4",
    questions: [
      {
        kind: "short",
        id: "mao-rise-p4-q01",
        question:
          "In which year did Japan surrender, ending both its war in China and the Japanese Occupation of Singapore?",
        answer: { type: "number", value: 1945 },
        traps: [
          { spec: { type: "number", value: 1942 }, feedback: "1942 is when Japan captured Singapore. The surrender came three and a half years later." },
          { spec: { type: "number", value: 1949 }, feedback: "1949 is the communist victory in China's Civil War, which followed Japan's surrender." },
        ],
        solution: [
          "Japan surrendered in **August 1945**, after the atomic bombings and the Soviet attack on Manchuria (the formal surrender was signed in September).",
          "In China, the end of the war against Japan quickly led to civil war between the Guomindang and the communists.",
        ],
        difficulty: "warmup",
        guideRef: "japan-and-civil-war",
        hints: ["It is the year the Second World War ended."],
      },
      {
        kind: "short",
        id: "mao-rise-p4-q02",
        question: "In which year did Mao launch the **Cultural Revolution**?",
        answer: { type: "number", value: 1966 },
        traps: [
          { spec: { type: "number", value: 1958 }, feedback: "1958 is the start of the Great Leap Forward. The Cultural Revolution came later." },
          { spec: { type: "number", value: 1976 }, feedback: "1976 is when the Cultural Revolution ended, with Mao's death." },
        ],
        solution: ["The Cultural Revolution began in **1966** and lasted until Mao's death in **1976**.", "Mao used it to attack rivals in the party and restore his own authority after the failure of the Great Leap Forward."],
        difficulty: "warmup",
        guideRef: "mao-in-power",
        hints: ["It began in the mid-1960s, a few years after the Great Leap Forward famine had ended."],
        strategy: "Put it in chronological order",
      },
      {
        kind: "short",
        id: "mao-rise-p4-q03",
        question: "In which city was the Chinese Communist Party founded in 1921?",
        answer: { type: "text", accept: ["Shanghai"], display: "Shanghai" },
        traps: [
          { spec: { type: "text", accept: ["Beijing", "Peking"] }, feedback: "Beijing (Peking University) was a centre of Marxist ideas after 1919, but the founding meeting was held in China's biggest port city." },
          { spec: { type: "text", accept: ["Yan'an", "Yanan", "Yenan"] }, feedback: "Yan'an was the communist base from the late 1930s — long after the party's founding." },
        ],
        solution: [
          "The first congress of the CCP met in **Shanghai** in July 1921, with Mao as one of the delegates (its final session moved to a boat on a lake at nearby Jiaxing to avoid the police).",
          "Shanghai was China's biggest industrial city — fitting, because at first the party followed the Soviet idea of a revolution led by city workers.",
        ],
        difficulty: "warmup",
        guideRef: "nationalists-and-communists",
        hints: ["It was China's largest port and industrial city, full of foreign-run districts and factory workers."],
      },
      {
        kind: "short",
        id: "mao-rise-p4-q04",
        question:
          "The most famous episode of the Long March was the crossing of Luding Bridge in May 1935, a bridge of iron chains over a fast-flowing river. Name the river.",
        answer: { type: "text", accept: ["Dadu", "Dadu River", "the Dadu", "the Dadu River", "Tatu", "Tatu River", "Dadu He"], display: "the Dadu River" },
        traps: [
          { spec: { type: "text", accept: ["Yangtze", "Yangtse", "Chang Jiang", "Jinsha", "Yellow River", "Huang He"] }, feedback: "The marchers crossed many rivers, but the chain bridge at Luding spans a different one, in western Sichuan." },
        ],
        solution: [
          "Luding Bridge crosses the **Dadu River** in western Sichuan.",
          "Communist accounts tell of a heroic charge across the chains under fire; some historians argue the fighting was much smaller than the legend claims.",
        ],
        difficulty: "core",
        guideRef: "long-march",
        hints: ["It is in western Sichuan province.", "It begins with D (older spelling: T)."],
      },
      {
        kind: "short",
        id: "mao-rise-p4-q05",
        question: "Name the dynasty of emperors that ruled China from 1644 until it was overthrown in 1911–12.",
        answer: {
          type: "text",
          accept: ["Qing", "Qing dynasty", "the Qing", "the Qing dynasty", "Ching", "Ch'ing", "Manchu", "Manchu dynasty", "Qing Empire"],
          display: "the Qing dynasty",
        },
        traps: [
          { spec: { type: "text", accept: ["Ming", "Ming dynasty", "the Ming"] }, feedback: "The Ming ruled before 1644. The dynasty that replaced them, and fell in 1911–12, was a different one." },
        ],
        solution: [
          "The **Qing** (Manchu) dynasty ruled from 1644 to 1912.",
          "Its failure to resist foreign powers or modernise helped cause the 1911 revolution.",
        ],
        difficulty: "core",
        guideRef: "china-in-crisis",
        hints: ["Its rulers came from Manchuria, north of China.", "The name is short — just four letters in pinyin."],
      },
      {
        kind: "mcq",
        id: "mao-rise-p4-q06",
        question:
          "In *On Guerrilla Warfare* (1937), Mao compared the people to water and guerrilla soldiers to the fish who live in it. His idea is often summed up in the saying: *\"The guerrilla must move amongst the people as a fish swims in the sea.\"* What did he mean?",
        options: [
          "Guerrillas should travel by river and sea to avoid the enemy.",
          "Guerrillas should keep away from ordinary people so that villagers are not harmed.",
          "Guerrillas depend on ordinary people to hide, feed and inform them, just as a fish depends on water.",
          "The communist army should grow until it was as large as the sea.",
        ],
        answerIndex: 2,
        explanation:
          "The 'sea' is the people: guerrillas survive only if the local population supports and shelters them. That is why the Red Army was ordered to treat peasants fairly. Keeping away from villagers is tempting if you are thinking about protecting civilians, but it is the opposite of Mao's idea — a fish out of water dies.",
        difficulty: "core",
        guideRef: "mao-and-the-peasants",
        hints: ["Work out the metaphor: if the guerrilla is the fish, what is the sea?", "What happens to a fish taken out of water?"],
        strategy: "Make an inference",
      },
      {
        kind: "written",
        id: "mao-rise-p4-q07",
        question:
          "**Source A** — a constructed teaching source, written for this exercise and based on real accounts of Shanghai in 1948.\n\n> Wei Ling's father is a schoolteacher. He is paid on the first day of the month and rushes straight to the market, because by the evening prices will have risen again. He carries his wages in a bag, as the notes are almost worthless. \"We did not suffer like this even under the Japanese,\" he says. \"What is the government doing?\"\n\nWhat can you infer from Source A about the Guomindang government in 1948? (3 marks)",
        marks: 3,
        modelAnswer:
          "I can infer that the Guomindang government had **lost control of the economy**. Prices rising within a single day and wages carried in a bag show severe **inflation**, which the government had failed to stop.\n\nI can also infer that it was **losing the support of the middle classes** in its own cities. A teacher is an educated, respectable person, yet he blames the government (\"What is the government doing?\") and even compares it unfavourably with the Japanese occupation.\n\nThis suggests the Guomindang was weakening from within, which helps explain why it collapsed so quickly in the Civil War of 1946–49.",
        markScheme: [
          { point: "Inference: the government had lost control of the economy / severe inflation, supported from the source", keywords: ["inflation", "prices", "worthless", "economy", "money", "wages", "bag"] },
          { point: "Inference: losing the support of city people / the middle class, supported by the teacher's words", keywords: ["support", "middle class", "teacher", "blame", "angry", "unpopular", "lost support"] },
          { point: "Links to wider context: weakness helped the communists win the Civil War", keywords: ["civil war", "communists", "collapse", "weak", "1949", "lost the war"] },
        ],
        commonError: "Writing about what the source says ('prices went up') without inferring what it shows about the *government*.",
        difficulty: "core",
        guideRef: "japan-and-civil-war",
        hints: ["What does carrying wages in a bag tell you about the value of money?", "Who does the teacher blame?", "Why does it matter that even a teacher feels this way?"],
        strategy: "Make an inference",
      },
      {
        kind: "written",
        id: "mao-rise-p4-q08",
        question:
          "**Source B** — described for this exercise: a colourful poster published by the Chinese government in 1958. Smiling peasants stand beside ears of wheat taller than they are, while factory chimneys smoke in the background. The slogan urges people to build socialism \"greater, faster, better and more economically\".\n\nHow useful is Source B for a historian studying the Great Leap Forward (1958–62)? (4 marks)",
        marks: 4,
        modelAnswer:
          "Source B is useful for showing the **aims and propaganda** of the Great Leap Forward. The giant wheat and smoking chimneys show the government's promise that China would rapidly increase both farm and industrial production, and the slogan \"greater, faster, better\" shows the pressure to achieve impossible targets.\n\nHowever, its **provenance** limits it as evidence of what really happened. It was made by the government in **1958**, at the very start of the campaign, to persuade people to work harder. It shows what the government *wanted* people to believe.\n\nMy own knowledge shows the reality was very different: false harvest reports, grain taken by the state and backyard steel furnaces led to a **famine** in which tens of millions died (estimates commonly range from 15 to 45 million). So Source B is very useful for studying propaganda and the government's plans, but of little use for the actual results.",
        markScheme: [
          { point: "Content: shows the promised abundance / aims of the Great Leap", keywords: ["wheat", "harvest", "production", "factories", "aims", "promise", "abundance", "targets"] },
          { point: "Provenance: government poster, 1958, start of campaign, purpose to persuade", keywords: ["government", "1958", "propaganda", "persuade", "purpose", "start", "official"] },
          { point: "Own knowledge: the reality was famine / false reports / tens of millions died", keywords: ["famine", "died", "starved", "millions", "false", "exaggerated", "communes", "furnaces"] },
          { point: "Judgement: useful for propaganda and aims, not for the real results", keywords: ["useful for", "propaganda", "limited", "not useful", "reality", "judgement", "overall"] },
        ],
        commonError: "Saying the poster is 'useless because it is propaganda'. Propaganda is excellent evidence of what a government wanted people to think.",
        difficulty: "core",
        guideRef: "mao-in-power",
        hints: ["Use NOP: who made the poster, when, and why?", "What actually happened to China's harvests between 1958 and 1962?", "Useful for *what*? The government's aims, or the real results?"],
        strategy: "Check the provenance (NOP)",
      },
      {
        kind: "written",
        id: "mao-rise-p4-q09",
        question:
          "Explain why the communists were able to survive in the Jiangxi Soviet from 1931, and why they were finally forced to leave in 1934. (5 marks)",
        marks: 5,
        modelAnswer:
          "The communists survived in Jiangxi at first because of **geography and peasant support**. The base was in remote, hilly country far from Guomindang strongholds. Mao's **land reform** gave poor peasants land, so many supported the communists with food, recruits and information.\n\nThey also survived because of **guerrilla tactics**. Using hit-and-run attacks, the Red Army defeated Chiang's first encirclement campaigns between 1930 and 1933.\n\nThey were forced out because Chiang changed his methods in the **fifth encirclement campaign** (1933–34). With German military advisers, he surrounded the area with lines of fortified **blockhouses** and an economic blockade, slowly squeezing the communists. At the same time, the party's new Soviet-trained leaders sidelined Mao and abandoned guerrilla tactics for head-on battles, which the smaller Red Army lost.\n\nSo the communists survived while they used Mao's methods, and lost Jiangxi when Chiang adapted and the communists abandoned them — a lesson that later helped Mao at Zunyi.",
        markScheme: [
          { point: "Survival: remote hilly base / far from Guomindang strongholds", keywords: ["remote", "hills", "mountains", "geography", "far", "isolated"] },
          { point: "Survival: land reform won peasant support", keywords: ["land reform", "peasants", "support", "land", "recruits"] },
          { point: "Survival: guerrilla tactics beat the early encirclement campaigns", keywords: ["guerrilla", "encirclement", "hit and run", "first", "defeated"] },
          { point: "Forced out: fifth campaign — blockhouses, blockade, German advisers", keywords: ["fifth", "blockhouses", "blockade", "german", "surrounded", "squeeze", "1934"] },
          { point: "Forced out: new leaders sidelined Mao and fought head-on; links back to Mao's later rise", keywords: ["sidelined", "head-on", "soviet-trained", "braun", "bo gu", "abandoned", "zunyi"] },
        ],
        commonError: "Explaining only why they left and forgetting the first half of the question — why they survived for several years.",
        difficulty: "core",
        guideRef: "mao-and-the-peasants",
        hints: [
          "Split the question in two: survival, then defeat.",
          "Why would peasants in Jiangxi help the Red Army?",
          "How did Chiang's fifth campaign differ from the first four?",
          "Who was in charge of the Red Army's tactics in 1934 — and what did they change?",
        ],
        strategy: "Long-term vs short-term causes",
      },
      {
        kind: "written",
        id: "mao-rise-p4-q10",
        question: "Describe the key events of the Long March, 1934–1935. (4 marks)",
        marks: 4,
        modelAnswer:
          "In **October 1934** about 86,000 communist soldiers and followers broke out of the Jiangxi Soviet, which was surrounded by Guomindang forces. They suffered heavy losses early on, especially crossing the **Xiang River** in late 1934.\n\nIn **January 1935** the leaders met at the **Zunyi Conference**, where the old leadership was blamed and Mao gained a leading role. The marchers then twisted through south-west China to escape their pursuers. In **May 1935** came the famous crossing of **Luding Bridge** over the Dadu River.\n\nAfter crossing snow-covered mountains and dangerous swampy grasslands, the survivors reached **Shaanxi** in the north-west in **October 1935**. Only around 8,000 of those who set out arrived; the communists claimed they had covered about 12,500 km, though researchers who retraced the main route estimate roughly 6,000 km.",
        markScheme: [
          { point: "Start: breakout from Jiangxi, October 1934, about 86,000 people", keywords: ["october 1934", "1934", "jiangxi", "86,000", "breakout", "broke out"] },
          { point: "Zunyi Conference (January 1935) — Mao gains leading role", keywords: ["zunyi", "january 1935", "conference", "mao"] },
          { point: "Hardships and episodes: Luding Bridge, mountains, grasslands, Xiang River", keywords: ["luding", "dadu", "mountains", "snow", "grasslands", "swamps", "xiang", "bridge"] },
          { point: "End: reached Shaanxi (October 1935), around 8,000 survivors, claimed distance", keywords: ["shaanxi", "october 1935", "8,000", "yan'an", "12,500", "survivors"] },
        ],
        difficulty: "core",
        guideRef: "long-march",
        hints: ["Organise it chronologically: start, middle, end.", "Where did it start, and when? Which conference happened early in 1935?", "Where did it finish — and how many arrived?"],
        strategy: "Put it in chronological order",
      },
      {
        kind: "written",
        id: "mao-rise-p4-q11",
        question: "\"Mao's leadership was the main reason the communists came to power in China in 1949.\" How far do you agree? (6 marks)",
        marks: 6,
        modelAnswer:
          "I partly agree. **Mao's leadership** was very important. His idea of a **peasant revolution** suited China, where most people were peasants, and his **land reform** gave them a reason to support the communists. His guerrilla tactics kept a weak army alive, and after **Zunyi** (1935) he led the party through the Long March, which became a powerful propaganda legend.\n\nHowever, Mao's leadership alone could not have won. **Crises** created the opportunity: the **Japanese invasion of 1937** stopped Chiang's campaigns against the communists and allowed them to grow from about 40,000 members to about 1.2 million by 1945. The **Guomindang's weaknesses** — corruption, inflation and soldiers who deserted or surrendered in 1946–49 — also handed the communists victory.\n\nOverall, I think Mao's leadership was **necessary but not sufficient**. The crises and the Guomindang's weakness created the opening, but Mao's strategy made sure it was the communists, not another group, who took it. In 1934, before the Japanese war, the communists were driven out of Jiangxi and nearly destroyed: Mao's ideas already existed, but they could not win power until the war changed the situation.",
        markScheme: [
          { point: "Agree: Mao's peasant strategy and land reform won mass support", keywords: ["peasant", "peasants", "land reform", "strategy", "support"] },
          { point: "Agree: Mao's guerrilla tactics, Zunyi leadership and the Long March legend / propaganda", keywords: ["guerrilla", "zunyi", "long march", "propaganda", "legend", "leadership"] },
          { point: "Disagree: crises, especially the Japanese invasion (1937), created the opportunity", keywords: ["japan", "japanese", "invasion", "1937", "crisis", "crises", "1.2 million", "40,000"] },
          { point: "Disagree: Guomindang weakness (corruption, inflation, desertions)", keywords: ["corrupt", "corruption", "inflation", "guomindang", "gmd", "kmt", "desert", "surrender", "weak"] },
          { point: "Links factors (e.g. crises created the chance that Mao exploited)", keywords: ["linked", "exploit", "opening", "opportunity", "because", "without", "combined"] },
          { point: "Clear, supported judgement on 'how far'", keywords: ["overall", "partly agree", "agree", "disagree", "necessary", "sufficient", "most important", "main reason"] },
        ],
        commonError: "Treating Mao as the whole story. Remember the communists were nearly wiped out in 1934–35 — what changed between then and 1949?",
        solutions: [
          {
            label: "Argument: Mao's leadership mattered most",
            steps: [
              "China faced crises for decades, but only Mao built a strategy around the peasants, who were most of the population.",
              "Land reform, disciplined guerrilla warfare and propaganda turned the communists into a mass movement.",
              "Judgement: crises are common; it took Mao's leadership to turn crisis into revolution.",
            ],
          },
          {
            label: "Argument: the Japanese invasion mattered most",
            steps: [
              "In 1934–35 the communists were nearly wiped out despite Mao's ideas.",
              "From 1937 the war stopped Chiang's attacks, shattered his government and let the communists expand behind Japanese lines.",
              "Judgement: without Japan, Mao's leadership might never have had a chance to succeed.",
            ],
          },
          {
            label: "Argument: Guomindang weakness mattered most",
            steps: [
              "Corruption and inflation drove even the urban middle classes away from Chiang.",
              "In 1946–49 the larger, American-armed Guomindang armies collapsed through surrenders and desertions.",
              "Judgement: the Guomindang lost the war as much as Mao won it.",
            ],
          },
        ],
        difficulty: "challenge",
        guideRef: "why-mao-rose",
        hints: [
          "Plan two sides: what Mao's leadership achieved, and what else helped the communists.",
          "Use the enquiry headings: crises, weakness of government, leadership.",
          "Test the claim: in 1934 Mao's ideas existed (though he had been sidelined), but the communists were losing. What changed?",
          "Finish with a judgement — is leadership 'necessary', 'sufficient', or both?",
        ],
        strategy: "Weigh factors",
      },
      {
        kind: "mcq",
        id: "mao-rise-p4-q12",
        question:
          "A historian calls the Shanghai Massacre of 1927 \"the making of Mao\". Which reasoning **best supports** this view?",
        options: [
          "It made Mao the leader of the Guomindang.",
          "It caused Japan to invade Manchuria in 1931.",
          "It ended the warlord era and reunited China under communist rule.",
          "It destroyed the communists' city-based movement, discrediting the Soviet-style urban strategy and pushing survivors into the countryside, where Mao's peasant approach could prove itself.",
        ],
        answerIndex: 3,
        explanation:
          "The massacre wiped out the communists' strength among Shanghai's workers. Driven into the countryside, the party had to rely on the peasants — exactly what Mao argued for — so in the long run it made his ideas central. The option about ending the warlord era is tempting because the Northern Expedition did weaken the warlords, but China was reunited under the *Guomindang* in 1928, not the communists.",
        difficulty: "challenge",
        guideRef: "nationalists-and-communists",
        hints: ["Where were the communists strongest before 1927 — and what happened to them there?", "Where did the survivors go, and whose ideas suited that place?"],
        strategy: "Link the causes",
      },
    ],
  },
];
