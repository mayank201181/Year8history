import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "mao-china",
  title: "Mao and Communist China",
  strand: "Dictatorships",
  icon: "⭐",
  summary: "Humiliation, invasion and civil war — how Mao Zedong came to rule China, and what his power cost.",
  intro:
    "In 1911 China's last emperor was overthrown. In 1949 Mao Zedong, the son of a peasant farmer from Hunan, stood on Tiananmen Gate in Beijing as ruler of the most populous country on Earth.\n\nThis topic tests the Term 2 enquiry question — *under what circumstances did dictatorships come to power?* — on China. Look for three kinds of cause: **crisis** (foreign humiliation, invasion, civil war, inflation), **weak and corrupt government** (the late Qing, then Chiang Kai-shek's Guomindang) and **leadership** (Mao's peasant strategy and the legend of the Long March). Then follow what Mao did with that power, from land reform to the Great Leap Forward and the Cultural Revolution — and how historians judge him.",
  guide: [
    // ------------------------------------------------------------------ 1
    {
      id: "china-in-crisis",
      heading: "China in crisis, 1839–1927",
      discovery: {
        problem:
          "Imagine you are a young Chinese patriot around 1910. In your parents' and grandparents' lifetimes:\n\n- Britain (joined by France the second time) has won two wars to keep selling opium in China and taken Hong Kong.\n- Foreigners in the treaty ports are tried in their own courts, not Chinese ones.\n- Japan, a much smaller country, has beaten China in war (1895) and taken Taiwan.\n- An eight-nation foreign army has marched into Beijing (1900).\n\nYou want China to be strong again. Before you read on: is the real enemy the foreigners — or your own government? Write one sentence explaining your choice.",
        idea:
          "Many patriots decided that the problem began at home. Defeat after defeat convinced them that the **Qing dynasty** was too weak and old-fashioned to protect China, so the country needed a new kind of government before it could stand up to foreigners. That is how foreign humiliation turned into revolution: crisis abroad exposed weakness at home.",
      },
      body:
        "For centuries China's emperors saw their country as the centre of the civilised world. In the 19th century that confidence was shattered.\n\n- **The Opium Wars (1839–42 and 1856–60):** Britain fought to keep selling opium from British India in China. China lost, and in the **Treaty of Nanjing (1842)** gave **Hong Kong** to Britain and opened ports to foreign trade.\n- **Unequal treaties:** foreign powers won special rights, such as being tried in their own courts.\n- **More defeats:** Japan beat China in 1894–95 and took Taiwan; the anti-foreign **Boxer Rebellion** was crushed by an eight-nation army in 1900.\n\nChinese nationalists later called this the **'century of humiliation'**, and many blamed the **Qing dynasty**, which seemed too weak to protect China.\n\nOn **10 October 1911** an army revolt at Wuchang spread across the provinces. **Sun Yat-sen**, a revolutionary who had raised money from overseas Chinese — including in Singapore — became provisional president, and the six-year-old emperor **Puyi** abdicated in February 1912. More than 2,000 years of imperial rule were over.\n\nBut the new **Republic** was weak. General **Yuan Shikai** took over, and after his death in 1916 China split among rival **warlords** with private armies.\n\nOn **4 May 1919** students in Beijing protested because the Treaty of Versailles handed Germany's rights in Shandong province to Japan instead of returning them to China. The **May Fourth Movement** sent young Chinese searching for new ideas. Some, inspired by Russia's 1917 revolution, turned to communism: the **Chinese Communist Party (CCP)** was founded in Shanghai in **July 1921**, with Mao Zedong among its first members. Sun Yat-sen rebuilt his own Nationalist Party, the **Guomindang (GMD — also spelled Kuomintang, KMT)**, based on his 'Three Principles of the People': nationalism, democracy and the people's livelihood.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cause diagram: foreign humiliation, a weak Qing dynasty and poverty and revolt lead to the 1911 Revolution, then the warlord era, then the May Fourth Movement and the founding of new parties"><defs><marker id="mcArr1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#334155"/></marker></defs><rect x="10" y="12" width="145" height="62" rx="6" fill="#fecaca" stroke="#334155"/><text x="82" y="28" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Foreign humiliation</text><text x="82" y="43" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Opium Wars 1839–60</text><text x="82" y="55" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">unequal treaties</text><text x="82" y="67" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">defeat by Japan 1895</text><rect x="167" y="12" width="145" height="62" rx="6" fill="#fde68a" stroke="#334155"/><text x="239" y="28" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Weak Qing dynasty</text><text x="239" y="43" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Manchu emperors</text><text x="239" y="55" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">reforms too little, too late</text><text x="239" y="67" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">too weak to resist</text><rect x="324" y="12" width="145" height="62" rx="6" fill="#c7d2fe" stroke="#334155"/><text x="396" y="28" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Poverty and revolt</text><text x="396" y="43" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">peasant poverty</text><text x="396" y="55" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Taiping Rebellion 1850–64</text><text x="396" y="67" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Boxer Rebellion 1900</text><line x1="82" y1="74" x2="170" y2="99" stroke="#334155" stroke-width="1.5" marker-end="url(#mcArr1)"/><line x1="239" y1="74" x2="239" y2="99" stroke="#334155" stroke-width="1.5" marker-end="url(#mcArr1)"/><line x1="396" y1="74" x2="310" y2="99" stroke="#334155" stroke-width="1.5" marker-end="url(#mcArr1)"/><rect x="110" y="100" width="260" height="40" rx="6" fill="#bbf7d0" stroke="#334155"/><text x="240" y="117" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">1911 Revolution: the Qing fall</text><text x="240" y="132" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Puyi abdicates, February 1912</text><line x1="240" y1="140" x2="240" y2="159" stroke="#334155" stroke-width="1.5" marker-end="url(#mcArr1)"/><rect x="110" y="160" width="260" height="38" rx="6" fill="#fde68a" stroke="#334155"/><text x="240" y="176" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Weak Republic, then warlord era</text><text x="240" y="191" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Yuan Shikai dies 1916; China splits</text><line x1="200" y1="198" x2="140" y2="221" stroke="#334155" stroke-width="1.5" marker-end="url(#mcArr1)"/><line x1="280" y1="198" x2="340" y2="221" stroke="#334155" stroke-width="1.5" marker-end="url(#mcArr1)"/><rect x="40" y="222" width="190" height="52" rx="6" fill="#bae6fd" stroke="#334155"/><text x="135" y="240" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">May Fourth Movement 1919</text><text x="135" y="256" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">students seek new ideas</text><rect x="250" y="222" width="190" height="52" rx="6" fill="#bae6fd" stroke="#334155"/><text x="345" y="240" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">New parties</text><text x="345" y="254" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">CCP founded 1921</text><text x="345" y="267" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">GMD rebuilt by Sun Yat-sen</text><text x="240" y="292" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Crisis + weak government = an opening for new movements</text></svg>`,
      diagramCaption: "Humiliation abroad and weakness at home fed each other — and the collapse of the old order left a vacuum that new parties competed to fill.",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem: "Explain why the Qing dynasty collapsed in 1911. (4 marks)",
          steps: [
            "Sort causes into categories first: foreign humiliation, weak government, internal unrest.",
            "Pick two causes and give each a precise piece of evidence (e.g. Treaty of Nanjing 1842; defeat by Japan 1895).",
            "Explain HOW each cause weakened the Qing — don't just name it. Defeats made the dynasty look unfit to rule.",
            "Link the factors: foreign defeats exposed Qing weakness, which turned patriots into revolutionaries.",
          ],
          answer:
            "One reason the Qing collapsed was repeated humiliation by foreign powers. China lost the Opium Wars, signed the Treaty of Nanjing in 1842 giving Hong Kong to Britain, and was defeated by Japan in 1895. Each defeat made the dynasty look too weak to protect China. A second reason was that the Qing government itself was weak and slow to reform, so patriots such as Sun Yat-sen concluded that China needed a new kind of government, not a new emperor. These factors were linked: foreign humiliation exposed the Qing's weakness, so when an army revolt broke out at Wuchang in October 1911, few provinces would fight to save the dynasty, and Puyi abdicated in 1912.",
          yourTurn: {
            question: "In what year was the Chinese Communist Party founded?",
            answer: { type: "number", value: 1921 },
            solution: "The CCP held its first congress in Shanghai in July 1921. Mao Zedong was one of the delegates.",
          },
        },
      ],
      keyPoints: [
        "The 'century of humiliation' began with the Opium Wars (1839–42, 1856–60) and the unequal treaties.",
        "Many Chinese blamed the weak Qing dynasty; it fell in the 1911 Revolution and Puyi abdicated in 1912.",
        "Sun Yat-sen's Republic was weak; after 1916 China split among warlords.",
        "The May Fourth Movement (1919) pushed young people towards new ideas, including communism.",
        "The CCP was founded in Shanghai in July 1921; Sun Yat-sen rebuilt the Guomindang (GMD/KMT).",
      ],
      whyItWorks:
        "Humiliation abroad and weakness at home fed each other: every defeat made the Qing look less fit to rule, and every failed reform made it harder to resist foreigners. When the Qing fell, nothing strong replaced it. That vacuum — warlords, poverty, foreign pressure — is exactly the kind of crisis in which people start to look for a disciplined movement that promises to unite and rescue the country.",
      strategies: ["Use the chronology", "Sort causes into categories", "Link the factors"],
      thinkDeeper:
        "The CCP had only about 50 members in 1921. What would have to happen for such a tiny party to rule all of China 28 years later? Write down three conditions — then test them against the next two sections.",
    },
    // ------------------------------------------------------------------ 2
    {
      id: "nationalists-vs-communists",
      heading: "Nationalists vs Communists",
      discovery: {
        problem:
          "It is 1927. You are a Communist leader. Your Nationalist allies have just turned on you, killing thousands of your supporters in the cities. In Russia, the 1917 revolution was won by factory workers in the cities — and Marx said that is where revolution comes from. But most Chinese people (well over 80%) are peasants farming the land.\n\nWhere do you rebuild your movement: the cities or the countryside? Decide, and give one reason.",
        idea:
          "Mao chose the **countryside**. He argued that China's revolution would be made by **peasants**, not factory workers — an idea that went against the advice of the Soviet Union and many in his own party. In the cities the Communists were easy to hunt down; in remote rural areas they could hide, grow and win support by giving land to poor farmers. This peasant strategy became the key to Mao's rise.",
      },
      body:
        "Sun Yat-sen died in 1925. In the **First United Front** (1923–27), the Soviet Union helped the GMD and the CCP work together against the warlords. Sun's successor, **Chiang Kai-shek**, led the **Northern Expedition** (1926–28) to reunite China. Then, in **April 1927**, Chiang turned on his Communist allies. In the **Shanghai Massacre** his troops and allied gangsters killed thousands of Communists and trade unionists. A long civil war had begun.\n\nMao drew a blunt lesson:\n\n> \"Political power grows out of the barrel of a gun.\" — Mao Zedong, August 1927\n\nHe built a base in the mountains and then the **Jiangxi Soviet** (from 1931), where Communists took land from landlords and gave it to poor peasants. Chiang launched five 'encirclement campaigns'. The fifth (1933–34) surrounded the base with lines of fortified blockhouses, so in **October 1934** about 86,000 soldiers and officials of the Communist **Red Army** broke out.\n\nThis was the **Long March** (1934–35): a year-long retreat of roughly 10,000 km (the official figure is 12,500 km) over mountains, rivers and swamps, under constant attack. Only about **8,000** of those who left Jiangxi reached Shaanxi in October 1935 — roughly 1 in 10.\n\nAt the **Zunyi Conference** (January 1935) Mao won a leading role in military strategy. When the survivors settled at **Yan'an**, he was well on the way to becoming the party's undisputed leader (Chairman from 1943).\n\nThe Communists retold the march as a heroic legend. Its most famous episode, the crossing of the **Luding Bridge** (May 1935), became a symbol of courage — though historians still argue about how much fighting really happened there. The American journalist **Edgar Snow**, who interviewed Mao at the Communist base in 1936, spread the story worldwide in *Red Star Over China* (1937). Mao himself saw its propaganda value:\n\n> \"The Long March is a manifesto… a propaganda force… a seeding-machine.\" — Mao Zedong, speech, December 1935",
      diagram: `<svg viewBox="0 0 480 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schematic map of the Long March from Ruijin in Jiangxi, west across the Xiang River, through Zunyi, south-west to the Jinsha River, north via the Luding Bridge, the Snowy Mountains and the Grasslands, then north-east to Wuqi and Yan'an in Shaanxi"><defs><marker id="mcArr2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#b91c1c"/></marker></defs><text x="16" y="20" font-size="12" font-weight="bold" font-family="sans-serif" fill="#1f2937">The Long March, Oct 1934 – Oct 1935</text><polyline points="366,54 395,90 460,92 420,130 428,164 453,200 447,245 410,299 385,330" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/><text x="472" y="270" font-size="10" text-anchor="end" font-family="sans-serif" fill="#334155">coast</text><polyline points="343,290 244,295 170,259 87,285 81,220 89,200 92,164 113,146 195,94 220,99" fill="none" stroke="#b91c1c" stroke-width="2.5" marker-end="url(#mcArr2)"/><circle cx="343" cy="290" r="5" fill="#fecaca" stroke="#334155"/><text x="343" y="308" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Ruijin (Jiangxi Soviet)</text><circle cx="244" cy="295" r="3.5" fill="#fde68a" stroke="#334155"/><text x="244" y="315" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Xiang River</text><circle cx="170" cy="259" r="3.5" fill="#fde68a" stroke="#334155"/><text x="180" y="256" font-size="10" font-family="sans-serif" fill="#1f2937">Zunyi (Jan 1935)</text><circle cx="87" cy="285" r="3.5" fill="#fde68a" stroke="#334155"/><text x="96" y="294" font-size="10" font-family="sans-serif" fill="#1f2937">Jinsha River</text><circle cx="81" cy="220" r="3.5" fill="#fde68a" stroke="#334155"/><text x="92" y="229" font-size="10" font-family="sans-serif" fill="#1f2937">Luding Bridge (May 1935)</text><circle cx="89" cy="200" r="3.5" fill="#fde68a" stroke="#334155"/><text x="99" y="203" font-size="10" font-family="sans-serif" fill="#1f2937">Snowy Mountains</text><circle cx="92" cy="164" r="3.5" fill="#fde68a" stroke="#334155"/><text x="102" y="168" font-size="10" font-family="sans-serif" fill="#1f2937">Grasslands (swamps)</text><circle cx="195" cy="94" r="3.5" fill="#fde68a" stroke="#334155"/><text x="190" y="82" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Wuqi (Oct 1935)</text><circle cx="220" cy="99" r="5" fill="#bbf7d0" stroke="#334155"/><text x="230" y="112" font-size="10" font-family="sans-serif" fill="#1f2937">Yan'an (base from 1937)</text><circle cx="351" cy="40" r="4" fill="#c7d2fe" stroke="#334155"/><text x="340" y="44" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">Beijing</text><circle cx="396" cy="182" r="4" fill="#c7d2fe" stroke="#334155"/><text x="390" y="170" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">Nanjing (GMD capital)</text><circle cx="448" cy="196" r="4" fill="#c7d2fe" stroke="#334155"/><text x="440" y="214" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">Shanghai</text><line x1="16" y1="40" x2="40" y2="40" stroke="#b91c1c" stroke-width="2.5"/><text x="46" y="44" font-size="10" font-family="sans-serif" fill="#1f2937">route of Mao's First Front Army</text><text x="16" y="334" font-size="10" font-family="sans-serif" fill="#334155">Schematic — positions approximate</text></svg>`,
      diagramCaption: "The Long March was a retreat, not an advance: the route zig-zagged west and north to escape the GMD, across some of China's hardest terrain. About 86,000 set out; roughly 8,000 arrived.",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem: "Explain how the Long March helped Mao become leader of the Chinese Communist Party. (4 marks)",
          steps: [
            "Start with the paradox: the march was a disastrous retreat — so how could it help anyone?",
            "Point 1 (inside the party): the Zunyi Conference, January 1935, gave Mao a leading military role after the old leaders' tactics had failed.",
            "Point 2 (outside the party): survival against the odds became a heroic legend that Mao used as propaganda.",
            "Link and judge: defeat removed his rivals' credibility; the legend turned survival into authority.",
          ],
          answer:
            "The Long March helped Mao in two linked ways. First, it changed the leadership inside the party. The defeat in Jiangxi discredited the leaders who had fought Chiang's fifth campaign head-on, and at the Zunyi Conference in January 1935 Mao gained a leading role in military strategy. Second, the march became a legend. Although only about 8,000 of roughly 86,000 marchers reached Shaanxi, the Communists presented it as a heroic victory — Mao called it a 'manifesto' and a 'seeding-machine'. Because Mao was the leader who had brought the survivors through, the legend gave him great prestige, and by the time the CCP settled at Yan'an he was its dominant figure.",
          yourTurn: {
            question: "In what year did the survivors of the Long March reach Shaanxi province?",
            answer: { type: "number", value: 1935 },
            solution: "The march began in October 1934 and the survivors reached Shaanxi in October 1935. From early 1937 the CCP made its base at Yan'an, in Shaanxi.",
          },
        },
      ],
      keyPoints: [
        "Chiang Kai-shek led the GMD after Sun Yat-sen died in 1925.",
        "The Shanghai Massacre (April 1927) ended the First United Front and began the civil war.",
        "Mao's big idea: a revolution based on peasants in the countryside, not workers in the cities.",
        "The Long March (Oct 1934 – Oct 1935): about 86,000 set out, about 8,000 arrived — roughly 1 in 10.",
        "The Zunyi Conference (Jan 1935) and the Long March legend raised Mao to the top of the CCP.",
      ],
      whyItWorks:
        "A defeat became the foundation of Mao's power. The march destroyed the credibility of the leaders whose tactics had lost Jiangxi, and it filtered the party down to a hardened core loyal to the men who had led them through. Then propaganda did the rest: a story of heroism and sacrifice gave the CCP a recruiting legend and gave Mao an authority no rival could match.",
      strategies: ["Use the chronology", "Myth vs evidence: ask who told the story and why", "Ask \"who benefits?\""],
      thinkDeeper:
        "Mao said the Long March was 'a propaganda force'. If 9 out of 10 marchers did not arrive, what did the CCP have to leave out to make it a story of victory? Does knowing it was used as propaganda make it less important — or more?",
    },
    // ------------------------------------------------------------------ 3
    {
      id: "war-and-communist-victory",
      heading: "War and Communist victory, 1937–1949",
      discovery: {
        problem:
          "In 1946 Chiang Kai-shek's Nationalists had an army of several million, American aid, aircraft, and control of China's big cities. The Communists had perhaps a third as many regular troops, few heavy weapons and almost no air force.\n\nThree years later the Communists had won. Before reading on, write down three possible explanations — at least one about the GMD's weaknesses and at least one about the CCP's strengths.",
        idea:
          "Armies and equipment were not enough. Twelve years of crisis — Japanese invasion, then **inflation** and corruption — drained the GMD of money, morale and popular support, while the CCP used the same years to win over peasants with **land reform** and discipline. Historians usually explain 1949 as GMD weakness and CCP strength *working together*: neither alone explains the result.",
      },
      body:
        "Japan seized Manchuria in 1931 and in **July 1937** launched a full-scale invasion of China. Japanese forces took the coast and the big cities and committed terrible atrocities, including the **Nanjing Massacre** (December 1937), in which very large numbers of civilians and prisoners were killed. The Xi'an Incident of December 1936 had already forced Chiang into a **Second United Front** with the Communists, but trust between them stayed thin.\n\nThe war changed the balance of power:\n\n- **The GMD** did most of the large-scale fighting and suffered enormous losses. Its government retreated inland to **Chongqing**. Corruption, brutal conscription and heavy grain taxes — even during the Henan famine of 1942–43 — cost it support.\n- **The CCP** fought a **guerrilla war** behind Japanese lines from Yan'an. It cut rents and taxes for peasants and kept strict discipline: its soldiers were told not to take 'a single needle or piece of thread' from the people. Its patriotic image grew, and party membership rose from about 40,000 in 1937 to about 1.2 million in 1945.\n\nAfter Japan surrendered in August 1945, the **Civil War** resumed (1946–49). The GMD still had more troops and US aid, but **inflation** wrecked its economy — by 1948 its money was almost worthless — and whole units deserted or changed sides. The Communists' **People's Liberation Army (PLA)** won huge battles in Manchuria and at **Huaihai** (1948–49), carrying out land reform as they advanced.\n\nOn **1 October 1949** Mao proclaimed the **People's Republic of China** in Beijing. Chiang retreated to the island of **Taiwan**, where his Republic of China government continued.\n\n*Singapore link:* Chinese communities in Singapore, led by Tan Kah Kee, raised money for China's war against Japan. When Japan occupied Singapore (1942–45), its forces targeted Chinese men in the Sook Ching massacre.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of Guomindang and Chinese Communist Party strengths and weaknesses in the Civil War, 1946 to 1949"><rect x="10" y="10" width="225" height="236" rx="8" fill="#ffffff" stroke="#334155"/><rect x="10" y="10" width="225" height="38" rx="8" fill="#bae6fd" stroke="#334155"/><text x="122" y="27" font-size="12" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Guomindang (Nationalists)</text><text x="122" y="42" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">leader: Chiang Kai-shek</text><text x="22" y="66" font-size="11" font-weight="bold" font-family="sans-serif" fill="#1f2937">Strengths</text><text x="22" y="84" font-size="11" font-family="sans-serif" fill="#1f2937">+ bigger army, more weapons</text><text x="22" y="100" font-size="11" font-family="sans-serif" fill="#1f2937">+ US aid and recognition</text><text x="22" y="116" font-size="11" font-family="sans-serif" fill="#1f2937">+ held the big cities</text><text x="22" y="156" font-size="11" font-weight="bold" font-family="sans-serif" fill="#1f2937">Weaknesses</text><text x="22" y="174" font-size="11" font-family="sans-serif" fill="#1f2937">− corruption and inflation</text><text x="22" y="190" font-size="11" font-family="sans-serif" fill="#1f2937">− brutal conscription, high taxes</text><text x="22" y="206" font-size="11" font-family="sans-serif" fill="#1f2937">− worn down by war with Japan</text><text x="22" y="222" font-size="11" font-family="sans-serif" fill="#1f2937">− lost peasant support</text><rect x="245" y="10" width="225" height="236" rx="8" fill="#ffffff" stroke="#334155"/><rect x="245" y="10" width="225" height="38" rx="8" fill="#fecaca" stroke="#334155"/><text x="357" y="27" font-size="12" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Chinese Communist Party</text><text x="357" y="42" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">leader: Mao Zedong</text><text x="257" y="66" font-size="11" font-weight="bold" font-family="sans-serif" fill="#1f2937">Strengths</text><text x="257" y="84" font-size="11" font-family="sans-serif" fill="#1f2937">+ land reform won peasants</text><text x="257" y="100" font-size="11" font-family="sans-serif" fill="#1f2937">+ strict discipline and unity</text><text x="257" y="116" font-size="11" font-family="sans-serif" fill="#1f2937">+ patriotic image vs Japan</text><text x="257" y="132" font-size="11" font-family="sans-serif" fill="#1f2937">+ guerrilla tactics, morale</text><text x="257" y="156" font-size="11" font-weight="bold" font-family="sans-serif" fill="#1f2937">Weaknesses</text><text x="257" y="174" font-size="11" font-family="sans-serif" fill="#1f2937">− smaller army in 1946</text><text x="257" y="190" font-size="11" font-family="sans-serif" fill="#1f2937">− few heavy weapons at first</text><text x="257" y="206" font-size="11" font-family="sans-serif" fill="#1f2937">− almost no air force</text><text x="257" y="222" font-size="11" font-family="sans-serif" fill="#1f2937">− weak in the cities</text><rect x="60" y="256" width="360" height="36" rx="8" fill="#fde68a" stroke="#334155"/><text x="240" y="278" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">1949: GMD weaknesses + CCP strengths = Communist victory</text></svg>`,
      diagramCaption: "On paper the GMD was stronger in 1946. But its weaknesses were the kind that grow over time, while the CCP's strengths — peasant support and discipline — grew too.",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem: "'The Communists won the Civil War because of the Guomindang's weaknesses.' How far do you agree? (5 marks)",
          steps: [
            "Weigh both sides: list GMD weaknesses (corruption, inflation, war losses) and CCP strengths (land reform, discipline, guerrilla tactics).",
            "Give precise evidence for each side: inflation made money almost worthless by 1948; CCP membership grew from about 40,000 (1937) to about 1.2 million (1945).",
            "Link them: GMD weakness pushed peasants and soldiers towards a CCP that offered land and order.",
            "Judge: which mattered more, and why? A counterfactual helps — would a strong, honest GMD have lost?",
          ],
          answer:
            "I largely agree. The GMD was badly weakened by the war with Japan, in which it did most of the heavy fighting and lost its richest cities. Corruption, brutal conscription and runaway inflation — by 1948 its money was almost worthless — destroyed support among peasants and even the middle classes, and many GMD units deserted. However, GMD weakness only mattered because the CCP was ready to exploit it. Its land reform gave peasants a reason to fight for the Communists, its discipline contrasted with GMD looting, and its membership grew from about 40,000 in 1937 to about 1.2 million in 1945. Overall, GMD weakness was the more important factor, because it turned a stronger army into a collapsing one — but it was the CCP's strengths that made the Communists, not someone else, the winners.",
          yourTurn: {
            question: "To which island did Chiang Kai-shek's government retreat in 1949?",
            answer: { type: "text", accept: ["Taiwan", "Formosa"], display: "Taiwan" },
            solution: "Chiang and about two million followers retreated to Taiwan, where the Republic of China government continued.",
          },
        },
      ],
      keyPoints: [
        "Japan's full-scale invasion (July 1937) forced the Second United Front between GMD and CCP.",
        "The GMD did most of the heavy fighting against Japan and was badly weakened; corruption and inflation followed.",
        "The CCP won peasant support through land reform, lower rents and discipline; membership rose to about 1.2 million by 1945.",
        "The Civil War (1946–49) ended in Communist victory; Mao proclaimed the PRC on 1 October 1949.",
        "Chiang Kai-shek's government retreated to Taiwan.",
      ],
      whyItWorks:
        "War is a stress test for governments. Japan's invasion drained the GMD's armies and money, and its answer — printing money, conscripting by force, taxing starving peasants — turned weakness into unpopularity. The CCP used the same crisis to build exactly what the GMD was losing: trust in the villages. When the Civil War came, that trust became recruits, food, intelligence and defections.",
      strategies: ["Weigh both sides, then judge", "Link the factors", "Consider the counterfactual"],
      thinkDeeper:
        "Consider the counterfactual: if Japan had never invaded in 1937, would the Communists still have won? Use what you know about the Long March survivors at Yan'an to argue your answer.",
    },
    // ------------------------------------------------------------------ 4
    {
      id: "maos-new-china",
      heading: "Building Mao's China in the 1950s",
      discovery: {
        problem:
          "Spring 1957. Mao has invited China's educated people to criticise the Communist Party: 'Let a hundred flowers bloom, let a hundred schools of thought contend.' You are a university lecturer. You think some local Party officials are arrogant and that other parties should have a real say.\n\nDo you speak up? Write one reason to speak and one reason to stay silent.",
        idea:
          "Many did speak up — and the criticism went far further than Mao expected, questioning the Party's right to rule alone. Within weeks the policy was reversed. The **Anti-Rightist Campaign** labelled about 550,000 people 'rightists'; many lost their jobs or were sent to labour camps. The lesson for everyone watching: in a one-party state, an invitation to criticise could be withdrawn at any moment.",
      },
      body:
        "Mao's China was a **one-party state**: the CCP controlled the government, army, courts, newspapers and schools.\n\n**Land reform (1950–52).** Party work teams went into the villages, sorted people into classes and held 'speak bitterness' meetings where peasants accused landlords. Land was taken and shared out among hundreds of millions of peasants. Many landlords were beaten or killed. Estimates vary widely, but historians generally put the number killed in land reform and the campaigns against 'counter-revolutionaries' (1950–53) at well over a million, with some estimates several times higher.\n\nThe 1950s also brought changes that many Chinese welcomed. The **Marriage Law (1950)** banned forced marriages and allowed women to divorce, and literacy and public-health campaigns reached the countryside.\n\n**The First Five-Year Plan (1953–57).** With Soviet loans and thousands of Soviet advisers, China built steelworks, mines and power stations. Steel output rose from about 1.35 million tonnes (1952) to about 5.35 million tonnes (1957). Peasants were pushed into **collective farms** (cooperatives), and by the end of 1956 almost all farming households had joined.\n\n**The Hundred Flowers Campaign (1956–57).** Mao invited intellectuals to criticise the Party. In May–June 1957 critics attacked the Party's monopoly of power. Mao changed course: the **Anti-Rightist Campaign** (from June 1957) labelled about 550,000 people 'rightists'. Mao later claimed the campaign had been a way to draw enemies into the open; many historians think he was shocked by the criticism and reacted. Either way, educated Chinese learned that criticising the Party was dangerous — which mattered enormously when the Great Leap Forward began the next year.",
      diagram: `<svg viewBox="0 0 480 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flow diagram of the Hundred Flowers Campaign: Mao invites criticism in 1956, critics speak out in May and June 1957, the Anti-Rightist Campaign labels about 550,000 people rightists, and intellectuals fall silent"><defs><marker id="mcArr4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#334155"/></marker></defs><text x="240" y="18" font-size="12" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">From 'Hundred Flowers' to silence, 1956–57</text><rect x="8" y="30" width="104" height="90" rx="6" fill="#bbf7d0" stroke="#334155"/><text x="60" y="48" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">1956</text><text x="60" y="64" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Mao invites</text><text x="60" y="78" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">criticism: ‘let a</text><text x="60" y="92" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">hundred flowers</text><text x="60" y="106" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">bloom’</text><line x1="113" y1="75" x2="127" y2="75" stroke="#334155" stroke-width="1.5" marker-end="url(#mcArr4)"/><rect x="128" y="30" width="104" height="90" rx="6" fill="#fde68a" stroke="#334155"/><text x="180" y="48" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">May–June 1957</text><text x="180" y="64" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">critics attack</text><text x="180" y="78" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">the Party's</text><text x="180" y="92" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">monopoly of</text><text x="180" y="106" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">power</text><line x1="233" y1="75" x2="247" y2="75" stroke="#334155" stroke-width="1.5" marker-end="url(#mcArr4)"/><rect x="248" y="30" width="104" height="90" rx="6" fill="#fecaca" stroke="#334155"/><text x="300" y="48" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">From June 1957</text><text x="300" y="64" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Anti-Rightist</text><text x="300" y="78" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Campaign: about</text><text x="300" y="92" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">550,000 labelled</text><text x="300" y="106" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">‘rightists’</text><line x1="353" y1="75" x2="367" y2="75" stroke="#334155" stroke-width="1.5" marker-end="url(#mcArr4)"/><rect x="368" y="30" width="104" height="90" rx="6" fill="#c7d2fe" stroke="#334155"/><text x="420" y="48" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Result</text><text x="420" y="64" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">critics silenced</text><text x="420" y="78" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">just before the</text><text x="420" y="92" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Great Leap</text><text x="420" y="106" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Forward (1958)</text><text x="240" y="142" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Invitation → criticism → crackdown → silence</text></svg>`,
      diagramCaption: "The Hundred Flowers taught China's educated people that honest criticism could ruin a career — a lesson with deadly consequences during the Great Leap Forward.",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem: "Describe two ways the Communist Party changed life in China's villages between 1950 and 1956. (4 marks)",
          steps: [
            "'Describe' means: say what happened and add precise detail — you don't need to argue a judgement.",
            "Change 1: land reform (1950–52) — land taken from landlords and given to peasants, through 'speak bitterness' meetings.",
            "Change 2: collectivisation — peasants pushed into cooperatives (collective farms); almost all households by the end of 1956.",
            "Add one precise detail to each: who was affected, and how.",
          ],
          answer:
            "First, land reform (1950–52) took land from landlords and shared it among poor peasants. Party work teams held 'speak bitterness' meetings where villagers accused landlords; many landlords were beaten or killed. Second, from the mid-1950s peasants were pushed into collective farms (cooperatives), where land, animals and tools were shared and the Party decided what was grown. By the end of 1956 almost all farming households had joined, so the land peasants had just been given was, in effect, taken back under collective control.",
          yourTurn: {
            question: "In what year did China's First Five-Year Plan begin?",
            answer: { type: "number", value: 1953 },
            solution: "The First Five-Year Plan ran from 1953 to 1957, copying the Soviet model of state-planned heavy industry.",
          },
        },
      ],
      keyPoints: [
        "Mao's China was a one-party state: the CCP controlled government, army, courts and media.",
        "Land reform (1950–52) gave land to peasants; landlords were denounced and many were killed.",
        "The First Five-Year Plan (1953–57) used Soviet help to build heavy industry; steel output roughly quadrupled.",
        "The Hundred Flowers Campaign (1956–57) invited criticism; the Anti-Rightist Campaign then punished about 550,000 'rightists'.",
      ],
      whyItWorks:
        "Land reform did two jobs at once: it rewarded the peasants who had backed the revolution, and it destroyed the landlord class that might have opposed it — binding villagers to the Party, because they had taken part. The Hundred Flowers and Anti-Rightist campaigns then showed that the Party alone would decide what could be said. Together they explain how a one-party state can be both popular with many and frightening to many at the same time.",
      strategies: ["Look for change AND continuity", "Ask \"who benefits?\"", "Weigh both sides, then judge"],
      thinkDeeper:
        "Was the Hundred Flowers Campaign a trap from the start, or a mistake Mao covered up afterwards? What kind of evidence would you need to decide — and why is it hard to find?",
    },
    // ------------------------------------------------------------------ 5
    {
      id: "great-leap-forward",
      heading: "The Great Leap Forward",
      discovery: {
        problem:
          "1958. You are the Party leader of a rural commune. Beijing has set a grain target far above your best-ever harvest. Officials who miss targets are being called 'rightists'. The commune next door has just reported a record harvest that you suspect is invented.\n\nWhat figure do you report? Now zoom out: what happens if **every** commune makes the same choice — and the state collects grain based on those figures?",
        idea:
          "Fear made almost everyone exaggerate. The state then took grain from the villages based on the inflated reports, leaving too little for the people who grew it. Because the Anti-Rightist Campaign had taught people that honest criticism was dangerous, the bad news did not travel upwards. The famine that followed was driven mainly by policy and fear, not by nature.",
      },
      body:
        "In 1957 Mao declared that China would overtake Britain's industrial output within 15 years. The **Great Leap Forward** (1958–62) aimed to turn China into an industrial power through the mass mobilisation of its people rather than slow Soviet-style planning.\n\n- **People's communes:** by the end of 1958 almost all peasants were in about 25,000 giant communes, each of thousands of households, sharing land, work and communal kitchens. Private plots were abolished.\n- **Backyard furnaces:** millions of people melted down pots, tools and door handles to make steel. Much of it was useless, low-quality iron, and crops were left unharvested while farmers tended furnaces.\n- **Bad science:** close planting and campaigns such as killing sparrows (one of the 'Four Pests') damaged harvests; with fewer sparrows, insect pests multiplied.\n\nFear drove **false reporting**. Officials claimed the 1958 grain harvest was 375 million tonnes; the real figure was about 200 million. The state took grain based on the inflated claims, and China kept exporting grain. When Marshal **Peng Dehuai** criticised the policies at the **Lushan Conference** (1959), Mao purged him, so few others dared to speak.\n\nThe result was the **Great Famine (1959–61)**, widely described as the deadliest famine in recorded history. Historians' estimates of the deaths range from about 15 million to 45 million; around 30 million is a commonly cited figure. The figures are estimates because records were incomplete or hidden. Most victims were peasants in the countryside, who died of hunger and related disease — the people the revolution had promised to help.\n\nMao stepped down as head of state in 1959, though he stayed Party Chairman. **Liu Shaoqi** and **Deng Xiaoping** led a recovery in the early 1960s, allowing private plots again. In 1962 Liu told a Party conference that the disaster was mostly man-made, not natural — a judgement Mao did not forget.",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart of China's grain output in million tonnes: 195 in 1957; 375 claimed but about 200 actual in 1958; 170 in 1959; 144 in 1960; 148 in 1961"><text x="20" y="18" font-size="12" font-weight="bold" font-family="sans-serif" fill="#1f2937">Grain output, million tonnes: claims vs reality</text><rect x="300" y="28" width="12" height="10" fill="#fde68a" stroke="#334155" stroke-dasharray="3 2"/><text x="316" y="37" font-size="10" font-family="sans-serif" fill="#1f2937">claimed</text><rect x="370" y="28" width="12" height="10" fill="#bae6fd" stroke="#334155"/><text x="386" y="37" font-size="10" font-family="sans-serif" fill="#1f2937">actual</text><line x1="60" y1="220" x2="460" y2="220" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="160" x2="460" y2="160" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="100" x2="460" y2="100" stroke="#cbd5e1" stroke-width="1"/><text x="54" y="284" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">0</text><text x="54" y="224" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">100</text><text x="54" y="164" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">200</text><text x="54" y="104" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">300</text><text x="54" y="44" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">400</text><line x1="60" y1="40" x2="60" y2="280" stroke="#334155" stroke-width="1.5"/><line x1="60" y1="280" x2="460" y2="280" stroke="#334155" stroke-width="1.5"/><rect x="75" y="163" width="50" height="117" fill="#bae6fd" stroke="#334155"/><text x="100" y="157" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">195</text><rect x="145" y="55" width="50" height="225" fill="#fde68a" stroke="#334155" stroke-dasharray="4 2"/><text x="170" y="49" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">375 claimed</text><rect x="205" y="160" width="50" height="120" fill="#bae6fd" stroke="#334155"/><text x="230" y="154" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">about 200</text><rect x="275" y="178" width="50" height="102" fill="#bae6fd" stroke="#334155"/><text x="300" y="172" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">170</text><rect x="335" y="194" width="50" height="86" fill="#bae6fd" stroke="#334155"/><text x="360" y="188" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">144</text><rect x="395" y="191" width="50" height="89" fill="#bae6fd" stroke="#334155"/><text x="420" y="185" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">148</text><text x="100" y="295" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">1957</text><text x="170" y="295" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">1958</text><text x="230" y="295" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">1958</text><text x="300" y="295" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">1959</text><text x="360" y="295" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">1960</text><text x="420" y="295" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">1961</text><text x="260" y="314" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#334155">Actual figures: official statistics published later (approximate)</text></svg>`,
      diagramCaption: "Drawn to scale. The 1958 claim was almost double the real harvest — and grain was collected as if the claim were true. Output then fell for three years as the famine took hold.",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem: "Explain why the Great Leap Forward led to famine. (5 marks)",
          steps: [
            "Sort causes into categories: policy (communes, furnaces, bad science), information (false reports), politics (fear, Lushan).",
            "Give precise evidence: 375 million tonnes claimed in 1958 vs about 200 million real.",
            "Explain the mechanism: inflated reports → the state took too much grain → villages starved.",
            "Link to politics: why didn't anyone stop it? Peng Dehuai purged at Lushan (1959); the Anti-Rightist Campaign had taught people to stay silent.",
            "Handle the death toll carefully: give a range and say it is an estimate.",
          ],
          answer:
            "The Great Leap Forward led to famine mainly because of policy, not weather. Peasants were forced into huge communes and many were taken off the fields to work backyard furnaces, so harvests suffered. Worse, officials afraid of being called 'rightists' exaggerated their results: the 1958 harvest was claimed as 375 million tonnes when it was really about 200 million. Because the state collected grain based on these false figures — and even kept exporting grain — villages were left without enough to eat. The famine continued because criticism was crushed: when Peng Dehuai criticised the policies at the Lushan Conference in 1959, Mao purged him. Historians estimate that between about 15 and 45 million people died in 1959–61, with around 30 million a commonly cited figure.",
          yourTurn: {
            question: "In what year did the Great Leap Forward begin?",
            answer: { type: "number", value: 1958 },
            solution: "The Great Leap Forward was launched in 1958; the communes were set up across China that summer and autumn.",
          },
        },
      ],
      keyPoints: [
        "Aim (1958): overtake Britain's industrial output within 15 years through mass mobilisation.",
        "People's communes, backyard furnaces and pseudo-science disrupted farming.",
        "Fear produced false harvest reports; the state took grain based on them.",
        "The Great Famine (1959–61): historians estimate roughly 15–45 million deaths; about 30 million is commonly cited.",
        "Peng Dehuai was purged at Lushan (1959); Liu Shaoqi and Deng Xiaoping led the recovery in the early 1960s.",
      ],
      whyItWorks:
        "The famine shows how a dictatorship's strengths can become its deadliest weakness. The same power that let Mao mobilise hundreds of millions of people also silenced the feedback that would have warned him: no free press, no opposition, and officials who feared punishment more than failure. When information only flows upwards as good news, a policy mistake can grow into a catastrophe before anyone at the top admits it.",
      strategies: ["Sort causes into categories", "Link the factors", "Use precise evidence"],
      thinkDeeper:
        "The economist Amartya Sen argued that major famines do not happen in functioning democracies with a free press. Use the Great Leap Forward to explain why he might think that. Can you think of any problems with his argument?",
    },
    // ------------------------------------------------------------------ 6
    {
      id: "cultural-revolution",
      heading: "The Cultural Revolution and the cult of Mao",
      discovery: {
        problem:
          "Two pieces of evidence about the Cultural Revolution:\n\n- **Source A:** a 1960s Chinese poster showing a smiling Mao glowing like a red sun above cheering crowds who hold up the Little Red Book.\n- **Source B:** *Wild Swans* (1991), a memoir by Jung Chang, written in Britain, about her family. Her parents, both Communist officials, were persecuted during the Cultural Revolution.\n\nWhich source is more useful for understanding the Cultural Revolution? Before you answer — ask: useful *for what*?",
        idea:
          "Neither wins outright: it depends on the question. The poster is excellent evidence of how the regime wanted Mao seen — the **cult of personality** in action — but tells you nothing about the suffering. The memoir gives a vivid inside view of persecution, but it was written decades later, outside China, by someone whose family were victims, and covers one family's story. Good historians use both, for different purposes.",
      },
      body:
        "After the Great Leap, Mao feared he was being sidelined and that the Party was becoming a privileged elite that would abandon the revolution. In **1966** he launched the **Great Proletarian Cultural Revolution** to restore his authority and purge 'capitalist roaders' — including **Liu Shaoqi** and **Deng Xiaoping**.\n\n- **Red Guards:** millions of students formed units loyal to Mao. In 1966 he reviewed huge rallies of Red Guards in Tiananmen Square.\n- **The 'Four Olds':** Red Guards attacked old customs, old culture, old habits and old ideas, smashing temples, books and art.\n- **Persecution:** teachers, writers, officials and people with 'bad' class backgrounds were humiliated at 'struggle sessions', beaten, imprisoned or driven to suicide. Liu Shaoqi died in custody in 1969. Estimates of deaths vary widely, from several hundred thousand to around two million.\n- **Education stopped:** schools closed in 1966 and universities stopped normal entry for years (entrance exams returned only in 1977). From 1968, about 17 million young people were 'sent down' to the countryside — officially to learn from peasants, but also to get rebellious Red Guards out of the cities.\n\nThe **cult of personality** reached its peak. Mao's portrait was everywhere; people wore Mao badges, sang 'The East is Red' and carried the **Little Red Book** (*Quotations from Chairman Mao*), printed in enormous numbers.\n\nWhen the violence grew out of control, Mao used the army to rein in the Red Guards from 1968. He died on **9 September 1976**; weeks later his widow **Jiang Qing** and her allies, the **'Gang of Four'**, were arrested.\n\nIn 1981 the CCP judged that Mao had made serious mistakes, especially the Cultural Revolution, but that his achievements came first — a verdict often summed up as **'70% right, 30% wrong'**. Historians outside China disagree about the balance: some stress his role in uniting China; others, such as Frank Dikötter, emphasise the enormous human cost of his rule.",
      diagram: `<svg viewBox="0 0 480 208" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline of China from 1911 to 1976: Qing falls 1911, CCP founded 1921, Shanghai Massacre 1927, Long March 1934 to 1935, Japan invades 1937, People's Republic proclaimed 1949, Great Leap Forward 1958 to 1962, Cultural Revolution 1966 to 1976, Mao dies 1976"><text x="20" y="22" font-size="12" font-weight="bold" font-family="sans-serif" fill="#1f2937">From empire to People's Republic: China 1911–1976</text><g transform="translate(0,-62)"><line x1="20" y1="170" x2="455" y2="170" stroke="#334155" stroke-width="2"/><line x1="20" y1="170" x2="20" y2="154" stroke="#334155"/><circle cx="20" cy="170" r="4" fill="#fecaca" stroke="#334155"/><text x="20" y="150" font-size="10" font-family="sans-serif" fill="#1f2937">1911 Qing falls</text><line x1="86" y1="170" x2="86" y2="182" stroke="#334155"/><circle cx="86" cy="170" r="4" fill="#c7d2fe" stroke="#334155"/><text x="86" y="193" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">1921 CCP founded</text><line x1="126" y1="170" x2="126" y2="124" stroke="#334155"/><circle cx="126" cy="170" r="4" fill="#fecaca" stroke="#334155"/><text x="126" y="120" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">1927 Shanghai Massacre</text><line x1="172" y1="170" x2="172" y2="205" stroke="#334155"/><rect x="172" y="166" width="7" height="8" fill="#fde68a" stroke="#334155"/><text x="172" y="216" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">1934–35 Long March</text><line x1="192" y1="170" x2="192" y2="154" stroke="#334155"/><circle cx="192" cy="170" r="4" fill="#fecaca" stroke="#334155"/><text x="192" y="150" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">1937 Japan invades</text><line x1="271" y1="170" x2="271" y2="182" stroke="#334155"/><circle cx="271" cy="170" r="5" fill="#bbf7d0" stroke="#334155"/><text x="271" y="193" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">1949 PRC proclaimed</text><line x1="330" y1="170" x2="330" y2="124" stroke="#334155"/><rect x="330" y="166" width="26" height="8" fill="#fde68a" stroke="#334155"/><text x="330" y="120" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">1958–62 Great Leap Forward</text><line x1="383" y1="170" x2="383" y2="205" stroke="#334155"/><rect x="383" y="166" width="66" height="8" fill="#fecaca" stroke="#334155"/><text x="383" y="216" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">1966–76 Cultural Revolution</text><line x1="449" y1="170" x2="449" y2="154" stroke="#334155"/><circle cx="449" cy="170" r="4" fill="#c7d2fe" stroke="#334155"/><text x="449" y="150" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">1976 Mao dies</text><rect x="27" y="232" width="244" height="22" fill="#bae6fd" stroke="#334155"/><text x="149" y="247" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Republic of China (mainland) 1912–49</text><rect x="271" y="232" width="184" height="22" fill="#fde68a" stroke="#334155"/><text x="363" y="247" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">People's Republic of China</text></g></svg>`,
      diagramCaption: "Drawn to scale: Mao's 27 years in power (1949–76) were as eventful as the 38 years of crisis and war that brought him there.",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem: "Explain why Mao launched the Cultural Revolution in 1966. (4 marks)",
          steps: [
            "Ask 'who benefits?' — what did Mao personally gain?",
            "Reason 1 (power): after the Great Leap, Liu Shaoqi and Deng Xiaoping ran the economy; Mao wanted to restore his authority and remove them.",
            "Reason 2 (ideas): Mao feared the Party was becoming a privileged elite and China would abandon revolution, as he believed the Soviet Union had.",
            "Link them: Mao used young Red Guards, outside the Party machine, to attack the Party leaders who had sidelined him.",
          ],
          answer:
            "One reason was power. After the disaster of the Great Leap Forward, Mao had stepped back as head of state and Liu Shaoqi and Deng Xiaoping were running the country's recovery. The Cultural Revolution let Mao purge them as 'capitalist roaders' — Liu died in custody in 1969. A second reason was ideological: Mao feared that the Party was becoming a privileged elite and that China would lose its revolutionary spirit, as he believed had happened in the Soviet Union. The two reasons were linked, because by mobilising millions of young Red Guards loyal to him personally, Mao could go around the Party machine and attack the very leaders who had sidelined him.",
          yourTurn: {
            question: "What was the popular name for the book *Quotations from Chairman Mao* carried by Red Guards?",
            answer: { type: "text", accept: ["Little Red Book", "The Little Red Book", "Red Book"], display: "the Little Red Book" },
            solution: "The 'Little Red Book' — a pocket-sized collection of Mao's sayings, printed in enormous numbers and waved at rallies.",
          },
        },
      ],
      keyPoints: [
        "Mao launched the Cultural Revolution in 1966 to regain power and renew revolutionary spirit.",
        "Red Guards attacked the 'Four Olds' and persecuted teachers, officials and 'class enemies'.",
        "Schools and universities were disrupted for years; about 17 million youths were 'sent down' to the countryside.",
        "The cult of personality: portraits, badges, songs and the Little Red Book.",
        "Mao died on 9 September 1976; the CCP's 1981 verdict is often summed up as '70% right, 30% wrong'.",
      ],
      whyItWorks:
        "The cult of personality is what made the Cultural Revolution possible. Because Mao was presented as almost god-like, his word could override the Party, the law and even parents and teachers — so he could use millions of young people as a weapon against his rivals. Once loyalty to one man outranks every institution, there is nothing left to stop him.",
      strategies: ["Check the provenance (NOP)", "Ask \"useful for what?\"", "Ask \"who benefits?\""],
      thinkDeeper:
        "The CCP's verdict says '70% right, 30% wrong'. Is it possible to give a percentage score to a ruler at all? What would you need to count — and who gets to decide what counts?",
    },
  ],
  learn: {
    flashcards: [
      { front: "What was the 'century of humiliation'?", back: "The period from the Opium Wars (1839) to the mid-20th century when China was defeated, forced into unequal treaties and partly controlled by foreign powers." },
      { front: "What did the Treaty of Nanjing (1842) give Britain?", back: "Hong Kong, plus the opening of ports to British trade — after China lost the First Opium War." },
      { front: "When did the 1911 Revolution begin, and who was the last emperor?", back: "With the Wuchang uprising on 10 October 1911. The last emperor, the six-year-old Puyi, abdicated in February 1912." },
      { front: "Who was Sun Yat-sen?", back: "The revolutionary who founded the Nationalist movement, became provisional president of the Republic in 1912 and rebuilt the Guomindang. He died in 1925." },
      { front: "What was the May Fourth Movement (1919)?", back: "Student protests against the Treaty of Versailles giving Germany's rights in Shandong to Japan; it pushed young Chinese towards new ideas, including communism." },
      { front: "When and where was the CCP founded?", back: "July 1921, in Shanghai. Mao Zedong was one of the delegates." },
      { front: "What happened in the Shanghai Massacre (April 1927)?", back: "Chiang Kai-shek turned on his Communist allies; thousands of Communists and trade unionists were killed, ending the First United Front." },
      { front: "What was Mao's big strategic idea?", back: "That China's revolution would be led by peasants in the countryside, not factory workers in the cities." },
      { front: "Long March: dates, distance, survivors?", back: "October 1934 – October 1935; roughly 10,000 km (official figure 12,500 km); about 86,000 set out and about 8,000 arrived." },
      { front: "Why does the Zunyi Conference (January 1935) matter?", back: "Mao won a leading role in military strategy there — a key step towards leading the CCP." },
      { front: "Why did the Communists win the Civil War (1946–49)?", back: "GMD weaknesses (corruption, inflation, war losses, unpopularity) combined with CCP strengths (land reform, peasant support, discipline, guerrilla tactics)." },
      { front: "When was the People's Republic of China proclaimed?", back: "1 October 1949, by Mao in Beijing. Chiang Kai-shek's government retreated to Taiwan." },
      { front: "What was the Hundred Flowers Campaign?", back: "Mao's 1956–57 invitation to criticise the Party, followed by the Anti-Rightist Campaign (from June 1957), which labelled about 550,000 people 'rightists'." },
      { front: "What were the main features of the Great Leap Forward (1958–62)?", back: "People's communes, backyard steel furnaces, unrealistic targets, false harvest reports and grain requisitions — leading to the Great Famine (1959–61)." },
      { front: "How many people died in the Great Famine?", back: "It is an estimate: historians suggest roughly 15–45 million; around 30 million is a commonly cited figure." },
      { front: "Who were the Red Guards?", back: "Students and young people who formed groups loyal to Mao in the Cultural Revolution (from 1966), attacking the 'Four Olds' and persecuting teachers and officials." },
      { front: "What were the 'Four Olds'?", back: "Old customs, old culture, old habits and old ideas — targets of the Red Guards." },
      { front: "When did Mao die, and what happened next?", back: "9 September 1976. A month later the 'Gang of Four', including his widow Jiang Qing, were arrested." },
    ],
    mustKnow: [
      "Can you explain how the 'century of humiliation' weakened the Qing dynasty?",
      "Can you describe the 1911 Revolution and the warlord era that followed?",
      "Can you explain why the Shanghai Massacre (1927) split the GMD and the CCP?",
      "Can you explain Mao's peasant strategy and why it differed from the Soviet model?",
      "Can you give the dates and key numbers of the Long March, and explain how it helped Mao?",
      "Can you explain at least three reasons why the CCP won the Civil War — from both GMD weakness and CCP strength?",
      "Can you describe land reform, the First Five-Year Plan and the Hundred Flowers Campaign?",
      "Can you explain why the Great Leap Forward caused famine, giving the death toll as an estimate?",
      "Can you explain why Mao launched the Cultural Revolution and how the cult of personality worked?",
      "Can you link China's case to the enquiry: crisis, weak government and leadership?",
    ],
    misconceptions: [
      { wrong: "Mao led the 1911 Revolution that overthrew the emperor.", right: "Mao was only 17 in 1911. The revolution is linked with Sun Yat-sen's movement; Mao rose to power decades later." },
      { wrong: "The Long March was a great Communist victory.", right: "It was a desperate retreat in which about 9 out of 10 marchers did not arrive. It became a victory *legend* through Communist propaganda." },
      { wrong: "The Communists did most of the fighting against Japan.", right: "The GMD did most of the large-scale fighting and suffered huge losses; the CCP mainly fought a guerrilla war while building support. CCP propaganda later exaggerated its role." },
      { wrong: "The Guomindang and the Communists were the same party.", right: "The Guomindang (GMD/KMT) were the Nationalists led by Chiang Kai-shek; the CCP were the Communists led by Mao. They cooperated twice but fought a civil war." },
      { wrong: "The Great Famine was caused by bad weather.", right: "Weather played a part, but historians agree the main causes were policies: communes, false reports, grain requisitions, exports and fear of speaking up. In 1962 even Liu Shaoqi said it was mostly man-made." },
      { wrong: "We know exactly how many people died in the famine.", right: "All figures are estimates — roughly 15–45 million, with about 30 million commonly cited — because records were incomplete or hidden." },
      { wrong: "Mao came to power by winning an election.", right: "The CCP won power through civil war; the PRC was a one-party state with no free elections." },
    ],
    examMistakes: [
      "Telling the story of the Long March instead of explaining how it helped Mao gain power.",
      "Explaining the Communist victory only through CCP strengths and forgetting GMD weaknesses (or the reverse).",
      "Giving a famine death toll as an exact fact instead of an estimate with a range.",
      "Mixing up the Guomindang (Nationalists, Chiang Kai-shek) with the Communists (Mao).",
      "Confusing the Great Leap Forward (1958–62) with the Cultural Revolution (1966–76).",
      "Answering a 'how useful' source question without using its provenance (who made it, when, why).",
      "Listing causes without linking them back to the enquiry: crisis, weak government and leadership.",
    ],
    mnemonics: [
      { topic: "Why the CCP won the Civil War", device: "LIPS", explanation: "**L**and reform won peasants · **I**nflation and corruption ruined the GMD · **P**easant support and discipline · **S**ino-Japanese War wore down the GMD." },
      { topic: "Mao's China in order (1950–1966)", device: "Lazy Pandas Find Leaves Crunchy", explanation: "**L**and reform (1950) → five-year **P**lan (1953) → Hundred **F**lowers (1956–57) → Great **L**eap (1958) → **C**ultural Revolution (1966)." },
      { topic: "The 'Four Olds'", device: "Old CCHI: 'Cats Can Hide Inside'", explanation: "**C**ustoms, **C**ulture, **H**abits, **I**deas." },
    ],
    realWorld: [
      { title: "Sun Yat-sen in Singapore", detail: "Sun Yat-sen visited Singapore several times to raise support from overseas Chinese. The villa where the Singapore branch of his revolutionary alliance met is now the Sun Yat Sen Nanyang Memorial Hall in Balestier.", emoji: "🏛️" },
      { title: "Hong Kong: 1842 to 1997", detail: "Hong Kong was handed to Britain after the First Opium War in 1842 and returned to China in 1997. The 'century of humiliation' still shapes how China talks about its history today.", emoji: "🌉" },
      { title: "Mao's image today", detail: "Mao's portrait still hangs over Tiananmen Gate in Beijing and appears on Chinese banknotes. How a country remembers a leader is itself part of history.", emoji: "🖼️" },
      { title: "Famines, information and democracy", detail: "Economist Amartya Sen argued that major famines do not happen in functioning democracies with a free press, because governments are forced to hear bad news. The Great Leap Forward is one of his key examples — a link to Term 3's democracy enquiry.", emoji: "📰" },
      { title: "China and Taiwan", detail: "Since 1949 Taiwan has had a separate government that grew from Chiang Kai-shek's Republic of China. Its status remains a sensitive international issue today.", emoji: "🗺️" },
    ],
    videos: [
      { title: "Mao Zedong's rise to power", channel: "YouTube search", url: "https://www.youtube.com/results?search_query=Mao+Zedong+rise+to+power+history+explained" },
      { title: "The Long March explained", channel: "YouTube search", url: "https://www.youtube.com/results?search_query=the+Long+March+1934+explained" },
      { title: "Why the Communists won the Chinese Civil War", channel: "YouTube search", url: "https://www.youtube.com/results?search_query=why+did+the+communists+win+the+chinese+civil+war" },
      { title: "The Great Leap Forward", channel: "YouTube search", url: "https://www.youtube.com/results?search_query=Great+Leap+Forward+history+explained" },
      { title: "The Cultural Revolution", channel: "YouTube search", url: "https://www.youtube.com/results?search_query=Cultural+Revolution+China+history+explained" },
    ],
    keyDates: [
      { year: 1839, date: "1839–42", event: "First Opium War", note: "Start of the 'century of humiliation'." },
      { year: 1842, date: "1842", event: "Treaty of Nanjing: Hong Kong given to Britain", note: "The first of the 'unequal treaties'." },
      { year: 1911, date: "10 Oct 1911", event: "Wuchang uprising begins the 1911 Revolution", note: "Puyi abdicates in February 1912, ending imperial rule." },
      { year: 1919, date: "4 May 1919", event: "May Fourth Movement", note: "Student protests push young Chinese towards new ideas." },
      { year: 1921, date: "July 1921", event: "Chinese Communist Party founded in Shanghai", note: "Mao is one of the delegates." },
      { year: 1927, date: "April 1927", event: "Shanghai Massacre", note: "Chiang Kai-shek turns on the Communists; civil war begins." },
      { year: 1934, date: "Oct 1934 – Oct 1935", event: "The Long March", note: "Disastrous retreat that became the legend of Mao's leadership." },
      { year: 1937, date: "July 1937", event: "Japan's full-scale invasion of China", note: "Weakens the GMD; lets the CCP grow." },
      { year: 1949, date: "1 Oct 1949", event: "Mao proclaims the People's Republic of China", note: "Chiang's government retreats to Taiwan." },
      { year: 1950, date: "1950–52", event: "Land reform", note: "Land shared out; landlords denounced and many killed." },
      { year: 1957, date: "1957", event: "Hundred Flowers ends; Anti-Rightist Campaign", note: "About 550,000 labelled 'rightists'." },
      { year: 1958, date: "1958–62", event: "Great Leap Forward", note: "Leads to the Great Famine of 1959–61." },
      { year: 1966, date: "1966–76", event: "Cultural Revolution", note: "Red Guards, persecution, the cult of Mao at its height." },
      { year: 1976, date: "9 Sep 1976", event: "Mao dies", note: "The Gang of Four are arrested a month later." },
    ],
    keyTerms: [
      { term: "Century of humiliation", definition: "Chinese name for the period from the Opium Wars to the mid-20th century when foreign powers defeated and exploited China." },
      { term: "Unequal treaties", definition: "Treaties forced on China by foreign powers after defeats, giving them land, trade rights and legal privileges." },
      { term: "Qing dynasty", definition: "China's last imperial dynasty (1644–1912), ruled by Manchu emperors." },
      { term: "Warlord", definition: "A military commander who ruled a region with a private army; China was divided among warlords from 1916 to 1928." },
      { term: "Guomindang (GMD / Kuomintang, KMT)", definition: "The Nationalist Party, founded by Sun Yat-sen and later led by Chiang Kai-shek." },
      { term: "Chinese Communist Party (CCP)", definition: "The party founded in 1921 that, under Mao, won the Civil War and has ruled mainland China since 1949." },
      { term: "United Front", definition: "An alliance between the GMD and the CCP: the first (1923–27) against the warlords, the second (1937–45) against Japan." },
      { term: "Long March", definition: "The Communists' 1934–35 retreat from Jiangxi to Shaanxi; only about 1 in 10 of those who set out arrived." },
      { term: "Guerrilla warfare", definition: "Fighting in small, mobile groups using surprise attacks rather than big battles, relying on support from local people." },
      { term: "Land reform", definition: "Taking land from landlords and giving it to peasants — used by the CCP to win support and destroy the landlord class." },
      { term: "One-party state", definition: "A country where only one political party is allowed to hold power." },
      { term: "People's commune", definition: "A huge collective farm and local government unit of thousands of households, set up in 1958 during the Great Leap Forward." },
      { term: "Rightist", definition: "A label used against people accused of opposing the Party, especially in the 1957 Anti-Rightist Campaign." },
      { term: "Red Guards", definition: "Young people mobilised by Mao during the Cultural Revolution to attack his opponents and the 'Four Olds'." },
      { term: "Cult of personality", definition: "Using propaganda to present a leader as heroic, wise and almost god-like, so that loyalty is to him personally." },
    ],
  },
};
