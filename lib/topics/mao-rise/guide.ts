import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "mao-rise",
  title: "Mao Zedong and the Communist Victory in China",
  strand: "Dictatorship",
  icon: "⭐",
  summary: "How a peasant's son from Hunan turned forty years of crisis into a communist victory — and what it cost.",
  intro:
    "Between 1911 and 1949 China went from an empire, to a broken republic, to a battlefield, to a communist state. At the end of it stood **Mao Zedong**, a peasant's son from Hunan who would rule a country of more than 500 million people (over 900 million by the 1970s) until his death in 1976.\n\nThis topic tackles the Term 2 enquiry: **Under what circumstances did dictatorships come to power?** As you work through it, sort the evidence into three boxes: **crises** (revolution, warlords, invasion, inflation), **weakness of government** (the failures of the Nationalist government) and **leadership** (Mao's ideas, tactics and the legends built around him).\n\nYou will meet stories shaped by propaganda — like the Long March — and terrible events after 1949, including a famine in which tens of millions died. Good historians test legends against evidence, give honest ranges when figures are uncertain, and remember that behind every statistic were real people.",
  guide: [
    // ------------------------------------------------------------------ 1
    {
      id: "china-in-crisis",
      heading: "China in crisis, 1911–1927",
      discovery: {
        problem:
          "In 1900 China had been ruled by emperors for more than 2,000 years. By 1920 it had no emperor, a government in Beijing whose orders were widely ignored, and private armies run by generals called **warlords**.\n\nImagine you are a 20-year-old student in Beijing in May 1919. You have just heard that the peace conference at Versailles — where China sat on the *winning* side of the First World War — has handed German-held rights in your country to Japan.\n\nList three feelings you might have and one thing you might *do*. Then predict: would people like you become more or less likely to listen to radical new ideas?",
        idea:
          "On **4 May 1919** about 3,000 students did exactly this. They marched in Beijing, burned the house of a minister they blamed, and sparked protests and strikes across China — the **May Fourth Movement**. When a state is weak and humiliated, many people stop trusting the old order and search for radical answers. Some May Fourth students, including a young **Mao Zedong** in Hunan, turned to communism. This is the first Term 2 'circumstance': **crisis plus weak government creates an opening**.",
      },
      body:
        "**The end of the emperors.** The **Qing dynasty** had ruled China since 1644, and emperors had ruled for more than 2,000 years. In **October 1911** an army mutiny at Wuchang set off revolts across the provinces. A **Republic of China** was declared on 1 January 1912 with **Sun Yat-sen** as provisional president, and the six-year-old emperor **Puyi** abdicated in February 1912. The old system collapsed faster than a new one could be built.\n\n**Humiliation by foreign powers.** Since the **Opium Wars** (1839–42 and 1856–60), Britain, France, Russia, Germany, Japan and others had forced China to sign **unequal treaties**. These handed over Hong Kong, opened **treaty ports** where foreigners lived under their own laws, and carved China into **spheres of influence**. Defeat by Japan in 1895 cost China Taiwan. Many Chinese spoke of their country being 'carved up like a melon'.\n\n**The warlord era (1916–1928).** General **Yuan Shikai** took over as president, then tried to make himself emperor. When he died in 1916, real power fell to regional generals — **warlords** — with private armies. They taxed peasants heavily and fought each other. The government in Beijing was a government in name only.\n\n**The May Fourth Movement (1919).** China joined the First World War on the Allied side and sent around 140,000 labourers to Europe. Yet the **Treaty of Versailles** gave Germany's rights in **Shandong** province to Japan. Student protests on **4 May 1919** grew into a nationwide movement against foreign bullying and against 'old' China. Young people debated science, democracy — and, after Russia's 1917 revolution, communism.\n\n**The peasants.** China had roughly 400–500 million people, and around **80–90%** were peasants. Most farmed tiny plots; many rented land from landlords and could hand over around half their harvest as rent. Debt, taxes, floods and famine made life precarious.\n\n| Crisis | Effect |\n|---|---|\n| Fall of the Qing (1911–12) | No accepted authority |\n| Foreign humiliation | Anger and nationalism |\n| Warlords (1916–28) | No effective government |\n| Peasant poverty | Millions with little to lose |",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schematic map of China's coast showing nine foreign footholds before 1920: Manchuria, Port Arthur, Weihaiwei, Qingdao, Shanghai, Hong Kong, Macau, Guangzhouwan and Taiwan" font-family="sans-serif" font-size="11"><rect width="480" height="300" fill="#ffffff"/><text x="10" y="16" font-size="13" font-weight="bold" fill="#1f2937">Foreign footholds in China, c. 1900–1919</text><ellipse cx="240" cy="55" rx="32" ry="28" fill="#fde68a" stroke="#334155" stroke-dasharray="4 3"/><polyline points="239.6,88.9 227,91.6 214.4,97.9 210.8,98.8 216.2,91.6 219.8,81.7 209.9,78.1 198.2,88 186.5,95.2 179.3,97 186.5,105.1 190.1,111.4 199.1,113.2 212.6,110.5 218.9,110.5 224.3,111.4 214.4,115.9 203.6,123.1 195.5,129.4 192.8,136.6 202.7,147.4 208.1,154.6 217.1,162.7 217.1,169 209,172.6 216.2,178 217.1,181.6 213.5,190.6 206.3,196 196.4,214 191.9,219.4 182.9,227.5 170.3,237.4 158.6,242.8 147.8,247.3 141.5,248.2 128,251.8 113.6,257.2 111.8,265.3 107.3,259 101.9,254.5 92,254.5" fill="none" stroke="#334155" stroke-width="1.5"/><ellipse cx="209" cy="234.7" rx="7" ry="16" fill="#fecaca" stroke="#334155"/><ellipse cx="108.2" cy="275.2" rx="9" ry="6" fill="none" stroke="#334155"/><text x="95" y="140" font-size="14" font-weight="bold" fill="#475569" letter-spacing="3">CHINA</text><text x="226" y="150" font-style="italic" fill="#64748b">Yellow Sea</text><text x="150" y="294" font-style="italic" fill="#64748b" text-anchor="middle">South China Sea</text><g fill="#1f2937"><circle cx="167.6" cy="88.9" r="2.5"/><text x="163" y="92" text-anchor="end">Beijing</text><circle cx="189.2" cy="159.1" r="2.5"/><text x="185" y="163" text-anchor="end">Nanjing</text><circle cx="148.7" cy="172.6" r="2.5"/><text x="144" y="176" text-anchor="end">Wuhan</text><circle cx="137" cy="194.2" r="2.5"/><text x="133" y="198" text-anchor="end">Changsha (Hunan)</text></g><g stroke="#334155" stroke-width="1"><line x1="210.8" y1="98.8" x2="232" y2="100"/><line x1="218.9" y1="110.5" x2="240" y2="114"/><line x1="203.6" y1="123.1" x2="225" y2="130"/><line x1="217.1" y1="166" x2="238" y2="168"/><line x1="147.8" y1="247.3" x2="160" y2="266"/><line x1="141.5" y1="248.2" x2="136" y2="266"/><line x1="113.6" y1="257.2" x2="90" y2="264"/><line x1="216" y1="234.7" x2="232" y2="234.7"/></g><g fill="#ffffff" stroke="#1f2937"><circle cx="240" cy="55" r="7"/><circle cx="232" cy="100" r="7"/><circle cx="240" cy="114" r="7"/><circle cx="225" cy="130" r="7"/><circle cx="238" cy="168" r="7"/><circle cx="160" cy="268" r="7"/><circle cx="136" cy="268" r="7"/><circle cx="88" cy="264" r="7"/><circle cx="239" cy="234.7" r="7"/></g><g font-weight="bold" text-anchor="middle" fill="#1f2937"><text x="240" y="59">1</text><text x="232" y="104">2</text><text x="240" y="118">3</text><text x="225" y="134">4</text><text x="238" y="172">5</text><text x="160" y="272">6</text><text x="136" y="272">7</text><text x="88" y="268">8</text><text x="239" y="238.7">9</text></g><g fill="#1f2937"><text x="300" y="40" font-weight="bold">1 Manchuria</text><text x="300" y="52">Russian, then Japanese sphere</text><text x="300" y="68" font-weight="bold">2 Port Arthur</text><text x="300" y="80">Russia 1898; Japan 1905</text><text x="300" y="96" font-weight="bold">3 Weihaiwei</text><text x="300" y="108">Britain 1898–1930</text><text x="300" y="124" font-weight="bold">4 Qingdao, Shandong</text><text x="300" y="136">Germany 1898; Japan 1914–22</text><text x="300" y="152" font-weight="bold">5 Shanghai</text><text x="300" y="164">International Settlement</text><text x="300" y="180" font-weight="bold">6 Hong Kong</text><text x="300" y="192">Britain from 1842</text><text x="300" y="208" font-weight="bold">7 Macau</text><text x="300" y="220">Portugal</text><text x="300" y="236" font-weight="bold">8 Guangzhouwan</text><text x="300" y="248">France 1898–1945</text><text x="300" y="264" font-weight="bold">9 Taiwan</text><text x="300" y="276">Japan 1895–1945</text><text x="300" y="294" font-style="italic" fill="#475569">Schematic map, not to scale</text></g></svg>`,
      diagramCaption:
        "Schematic map, not to scale: foreign footholds on China's coast before 1920. Relative positions are approximate. Shandong (4) is the province Versailles handed to Japan in 1919.",
      workedExamples: [
        {
          title: "Describing problems",
          problem: "Describe two problems facing China between 1911 and 1927. (4 marks)",
          steps: [
            "**Plan:** pick two *different* problems and support each with a specific detail. Describe questions reward precise knowledge, not long stories.",
            "**Problem 1:** \"One problem was the warlords. After President Yuan Shikai died in 1916, regional generals with private armies controlled much of China and fought each other, so the government in Beijing had little real power.\"",
            "**Problem 2:** \"A second problem was foreign humiliation. Unequal treaties had given foreign powers treaty ports and spheres of influence, and in 1919 the Treaty of Versailles handed Germany's rights in Shandong to Japan, sparking the May Fourth protests.\"",
            "**Check:** each paragraph names the problem *and* gives a supporting fact (a date, a name, a place). That supporting detail earns the second mark for each problem.",
          ],
          answer:
            "Two well-supported problems: warlord rule after 1916, and foreign humiliation shown by Versailles and the May Fourth Movement (1919).",
          yourTurn: {
            question: "Your turn: in which year did the May Fourth Movement begin?",
            answer: { type: "number", value: 1919 },
            solution: "On 4 May 1919 students protested in Beijing against the Treaty of Versailles giving Germany's rights in Shandong to Japan.",
          },
        },
      ],
      keyPoints: [
        "The Qing dynasty fell in 1911–12, ending more than 2,000 years of rule by emperors.",
        "Unequal treaties, treaty ports and spheres of influence left many Chinese feeling humiliated by foreign powers.",
        "From 1916 to 1928 warlords with private armies held real power; the central government was weak.",
        "The May Fourth Movement (1919) began as a protest against Versailles giving Shandong to Japan, and spread new ideas including communism.",
        "Around 80–90% of Chinese people were poor peasants — a huge group with real grievances.",
      ],
      whyItWorks:
        "Why does this matter for the enquiry? Dictatorships rarely grow in calm, well-governed countries. China after 1911 showed *all* the warning signs historians look for: no accepted government, wounded national pride, violence as normal politics, and a vast population of poor people. These crises discredited moderate solutions — when the Republic and the warlords failed, more people were willing to listen to parties promising total change. Notice the link with Germany: the Treaty of Versailles fuelled anger in *both* countries.",
      strategies: ["Long-term vs short-term causes", "Link the causes", "Make an inference"],
      thinkDeeper:
        "Which was the more dangerous crisis for China's future: foreign humiliation or the warlords? Could either have been solved without solving the other?",
    },
    // ------------------------------------------------------------------ 2
    {
      id: "nationalists-and-communists",
      heading: "Nationalists vs Communists",
      discovery: {
        problem:
          "In 1924 two parties formed an alliance: the large **Guomindang (GMD, the Nationalists)** and the tiny **Chinese Communist Party (CCP)**. Communists even joined the GMD as individual members. Three years later the GMD's army turned its guns on the communists in Shanghai.\n\nBefore reading on: what could two very different parties gain from working together? And what might make one of them decide the alliance had become a threat?",
        idea:
          "Both parties wanted the same *first* thing — to defeat the warlords and the foreign powers and reunite China — so an alliance made sense, and both received Soviet advice and money. But they wanted very different *second* things. Many GMD supporters, such as businessmen and landlords, wanted order and their property protected; the communists wanted a social revolution. Once the warlords were being beaten, the alliance's purpose faded and the rivalry exploded. **Alliances of convenience often break once the common enemy weakens.**",
      },
      body:
        "**Sun Yat-sen and the Guomindang.** **Sun Yat-sen** (1866–1925), a doctor trained in Hong Kong, spent years raising money and support among overseas Chinese — including in **Singapore** — for revolution against the Qing. In 1912 his followers formed the **Guomindang** (**GMD**, also spelled **Kuomintang, KMT**), the Nationalist Party. His **Three Principles of the People** were:\n\n1. **Nationalism** — end foreign domination and unite China.\n2. **Democracy** — government by the people, after a period of 'tutelage' (guidance) by the party.\n3. **People's livelihood** — a fairer economy and land for farmers.\n\n**The Chinese Communist Party.** Inspired by Russia's revolution and the May Fourth Movement, a small group founded the **CCP** in **Shanghai in July 1921**, with help from the Comintern (the Soviet-led Communist International). It had only around 50 members. **Mao Zedong**, then a teacher in Hunan, was one of about a dozen delegates at the first congress.\n\n**The First United Front (1924–27).** Western powers refused to help Sun, but the Soviet Union would. Moscow sent advisers and weapons, helped reorganise the GMD and told the communists to join it. At the **Whampoa Military Academy** near Guangzhou, the GMD trained a new army under **Chiang Kai-shek**.\n\n**Chiang Kai-shek and the Northern Expedition.** Sun died in **1925** and Chiang, the army commander, rose to the top. In **1926** he launched the **Northern Expedition** to defeat the warlords. Communist organisers helped by stirring up peasants and workers ahead of the army; in March 1927 communist-led workers took control of Shanghai.\n\n**The Shanghai Massacre (April 1927).** Chiang feared the communists were becoming too strong, and his backers — businessmen, landlords and foreign interests in Shanghai — feared revolution. On **12 April 1927** GMD troops and Shanghai gangsters attacked communists and trade unionists. A 'White Terror' spread to other cities. Estimates of the dead vary widely, from several hundred in the first days in Shanghai to many thousands across China. CCP membership collapsed, the First United Front was over, and surviving communists fled to the countryside.\n\n| | GMD (Nationalists) | CCP (Communists) |\n|---|---|---|\n| Founded | 1912 | 1921 |\n| Leader in 1927 | Chiang Kai-shek | Chen Duxiu (until mid-1927) |\n| Main support | Army, cities, business | Workers, then peasants |\n| Aim | United, modern nation | Communist revolution |",
      diagram: `<svg viewBox="0 0 480 312" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Vertical timeline from 1911 to 1949, drawn to scale, showing the GMD and CCP as allies 1924 to 1927, at war 1927 to 1937, in an uneasy truce 1937 to 1945 and in civil war 1946 to 1949, with key events marked" font-family="sans-serif" font-size="11"><rect width="480" height="312" fill="#ffffff"/><g fill="#1f2937"><text x="10" y="22" font-size="13" font-weight="bold">GMD and CCP,</text><text x="10" y="38" font-size="13" font-weight="bold">1911–1949</text><text x="10" y="54" font-style="italic" fill="#475569">Drawn to scale</text></g><rect x="10" y="64" width="10" height="10" fill="#bbf7d0" stroke="#334155"/><text x="24" y="73" fill="#1f2937">allies</text><rect x="62" y="64" width="10" height="10" fill="#fecaca" stroke="#334155"/><text x="76" y="73" fill="#1f2937">at war</text><rect x="10" y="80" width="10" height="10" fill="#fde68a" stroke="#334155"/><text x="24" y="89" fill="#1f2937">uneasy truce</text><rect x="128" y="118.3" width="18" height="23.8" fill="#bbf7d0" stroke="#334155"/><rect x="128" y="142.1" width="18" height="72.8" fill="#fecaca" stroke="#334155"/><rect x="128" y="214.9" width="18" height="58.5" fill="#fde68a" stroke="#334155"/><rect x="128" y="279.7" width="18" height="23.5" fill="#fecaca" stroke="#334155"/><g fill="#1f2937" text-anchor="end"><text x="122" y="127">First United Front</text><text x="122" y="140">1924–27</text><text x="122" y="172">GMD attacks CCP</text><text x="122" y="185">1927–37</text><text x="122" y="238">Second United Front</text><text x="122" y="251">1937–45 (uneasy)</text><text x="122" y="288">Civil War</text><text x="122" y="301">1946–49</text></g><line x1="150" y1="25" x2="150" y2="305" stroke="#1f2937" stroke-width="2"/><g stroke="#334155" stroke-width="1"><line x1="150" y1="25" x2="162" y2="25"/><line x1="150" y1="60.9" x2="162" y2="61"/><line x1="150" y1="82.4" x2="162" y2="82"/><line x1="150" y1="96.8" x2="162" y2="97"/><line x1="150" y1="125.5" x2="162" y2="117"/><line x1="150" y1="132.7" x2="162" y2="131"/><line x1="150" y1="139.9" x2="162" y2="146"/><line x1="150" y1="168.6" x2="162" y2="168"/><line x1="150" y1="190.1" x2="162" y2="186"/><line x1="150" y1="211.3" x2="162" y2="202"/><line x1="150" y1="214.9" x2="162" y2="218"/><line x1="150" y1="273.4" x2="162" y2="269"/><line x1="150" y1="279.7" x2="162" y2="284"/><line x1="150" y1="303.2" x2="162" y2="299"/></g><g fill="#1f2937"><circle cx="150" cy="25" r="3"/><circle cx="150" cy="60.9" r="3"/><circle cx="150" cy="82.4" r="3"/><circle cx="150" cy="96.8" r="3"/><circle cx="150" cy="125.5" r="3"/><circle cx="150" cy="132.7" r="3"/><circle cx="150" cy="139.9" r="3"/><circle cx="150" cy="168.6" r="3"/><circle cx="150" cy="190.1" r="3"/><circle cx="150" cy="211.3" r="3"/><circle cx="150" cy="214.9" r="3"/><circle cx="150" cy="273.4" r="3"/><circle cx="150" cy="279.7" r="3"/><circle cx="150" cy="303.2" r="3"/><text x="165" y="29">1911–12 Qing dynasty falls; Republic and GMD founded</text><text x="165" y="65">1916–28 Warlord era</text><text x="165" y="86">1919 May Fourth Movement</text><text x="165" y="101">1921 CCP founded in Shanghai</text><text x="165" y="121">1925 Sun Yat-sen dies</text><text x="165" y="135">1926 Northern Expedition begins</text><text x="165" y="150" font-weight="bold">April 1927 Shanghai Massacre</text><text x="165" y="172">1931 Japan seizes Manchuria; Jiangxi Soviet</text><text x="165" y="190" font-weight="bold">1934–35 Long March</text><text x="165" y="206">Dec 1936 Xi'an Incident</text><text x="165" y="222">July 1937 Japan's full-scale invasion</text><text x="165" y="273">Aug 1945 Japan surrenders</text><text x="165" y="288">1946 full civil war begins</text><text x="165" y="303" font-weight="bold">1 Oct 1949 People's Republic proclaimed</text></g></svg>`,
      diagramCaption:
        "GMD–CCP relations 1911–1949, drawn to scale: two short, uneasy alliances and two long wars. The Shanghai Massacre of 1927 began more than twenty years of hostility.",
      workedExamples: [
        {
          title: "Explaining a collapse",
          problem: "Explain why the First United Front collapsed in 1927. (6 marks)",
          steps: [
            "**Plan:** two causes in separate PEEL paragraphs, then link them. Cause 1 = different aims; cause 2 = Chiang's fear of communist strength and pressure from his backers.",
            "**Paragraph 1 (Point–Evidence):** \"One reason was that the two parties had very different aims. The GMD under Chiang Kai-shek wanted a united, orderly China, while the CCP wanted a revolution of workers and peasants against landlords and factory owners.\"",
            "**Paragraph 1 (Explain–Link):** \"While they faced a common enemy, the warlords, these differences could be hidden. Once the Northern Expedition (1926) began winning, the reason to cooperate weakened, so the alliance was likely to break.\"",
            "**Paragraph 2:** \"A second reason was Chiang's fear of communist power. Communist-led workers had taken control of Shanghai in March 1927, and Chiang's supporters — businessmen and landlords — feared losing their property. So on 12 April 1927 his forces attacked the communists in what became known as the Shanghai Massacre.\"",
            "**Judgement:** \"Different aims made a split likely, but Chiang's decision to strike first in Shanghai turned tension into a violent break.\"",
          ],
          answer:
            "Different aims made a split likely once the warlords were weakening; Chiang's fear of communist power triggered it in April 1927.",
          yourTurn: {
            question: "Your turn: name the GMD leader whose forces attacked the communists in Shanghai in April 1927.",
            answer: {
              type: "text",
              accept: ["Chiang Kai-shek", "Chiang Kai shek", "Chiang Kaishek", "Chiang", "Jiang Jieshi", "Jiang Zhongzheng", "Generalissimo Chiang"],
              display: "Chiang Kai-shek",
            },
            solution: "Chiang Kai-shek, commander of the GMD army, turned on his communist allies on 12 April 1927.",
          },
        },
      ],
      keyPoints: [
        "Sun Yat-sen's GMD aimed at nationalism, democracy and people's livelihood (the Three Principles of the People).",
        "The CCP was founded in Shanghai in July 1921; Mao was one of the delegates.",
        "Soviet help created the First United Front (1924–27), uniting the GMD and CCP against the warlords.",
        "After Sun's death (1925), Chiang Kai-shek led the Northern Expedition (from 1926).",
        "The Shanghai Massacre (12 April 1927) ended the alliance and drove the communists into the countryside.",
      ],
      whyItWorks:
        "Why did the alliance collapse? Because it was held together by a shared enemy, not shared aims. The Northern Expedition's success removed the reason to cooperate and exposed the clash between a party backed by property-owners and a party calling for class revolution. The massacre had a long-term consequence that matters for our enquiry: it pushed the CCP out of the cities, forcing it to find a new strategy among the peasants — the strategy that Mao would make his own.",
      strategies: ["Think about who benefited", "Compare and contrast", "Put it in chronological order"],
      thinkDeeper:
        "Was the Shanghai Massacre a disaster for the communists or, in the long run, a turning point that helped Mao? Think about what the CCP might have become if it had stayed in the cities.",
    },
    // ------------------------------------------------------------------ 3
    {
      id: "mao-and-the-peasants",
      heading: "Mao's idea: a peasant revolution",
      discovery: {
        problem:
          "**Source A** — from Mao Zedong, *Report on an Investigation of the Peasant Movement in Hunan*, March 1927 (official English translation, extract).\n\n> In a very short time, in China's central, southern and northern provinces, several hundred million peasants will rise like a mighty storm, like a hurricane, a force so swift and violent that no power, however great, will be able to hold it back.\n\nKarl Marx had argued that revolutions would be led by **factory workers** in cities. In 1920s China, industrial workers were well under 1% of the population.\n\nWhat is Mao suggesting instead — and why might many communists, and their Soviet advisers, have disagreed with him?",
        idea:
          "Mao is arguing that China's revolution would come from the **countryside**, led by the **peasants** — the vast majority of the people. That broke with Soviet-style thinking, which expected revolution to start among city workers and saw peasants as backward. After the Shanghai Massacre wrecked the party in the cities, Mao's idea began to look less like a heresy and more like the only option. **A leader's ideas matter most when circumstances make them fit.**",
      },
      body:
        "**Who was Mao?** **Mao Zedong** was born in **1893** in Shaoshan, **Hunan** province, the son of a peasant who became a fairly prosperous farmer and grain dealer. Mao clashed with his strict father, trained as a **teacher** in Changsha, and in 1918–19 worked as an assistant in the **Peking University library**, where the head librarian, Li Dazhao, introduced him to Marxism. He was a founding member of the CCP in 1921.\n\n**A peasant revolution.** In early 1927 Mao studied peasant uprisings in Hunan and concluded that the peasants, not city workers, were China's revolutionary force. He was not the only one — the organiser Peng Pai had built peasant unions in Guangdong earlier — but Mao pushed the idea furthest. After the Shanghai Massacre and the failure of his **Autumn Harvest Uprising** (September 1927), he retreated with about 1,000 followers to the **Jinggang Mountains**, where the commander **Zhu De** joined him in 1928. In August 1927 Mao told party leaders that political power is won 'from the barrel of a gun' — an idea he repeated in its famous form, 'political power grows out of the barrel of a gun', in 1938.\n\n**The Jiangxi Soviet (1931–34).** In 1931 the communists declared a **Chinese Soviet Republic** based at Ruijin in Jiangxi province, with Mao as its chairman. Its **land reform** took land from landlords and gave it to poor peasants, winning support. But it was also violent: landlords were attacked, and in the **Futian Incident** (1930) and the purges that followed, thousands of Red Army soldiers and party members accused of being traitors were killed.\n\n**Guerrilla warfare.** The Red Army was too weak to fight big battles, so Mao and Zhu De used **guerrilla tactics**, summed up in sixteen Chinese characters:\n\n> The enemy advances, we retreat; the enemy camps, we harass; the enemy tires, we attack; the enemy retreats, we pursue.\n\n**Discipline and the people.** Mao compared guerrillas to fish and the people to the water they swim in. Red Army soldiers learned the **Three Main Rules of Discipline and Eight Points for Attention**, first set out from 1928 and later standardised — for example: speak politely; pay fairly for what you buy; return what you borrow; do not damage crops; do not ill-treat captives. Warlord and many GMD troops often looted villages, so this discipline made a powerful impression — even though the rules were not always kept.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cycle diagram of Mao's guerrilla formula: the enemy advances, we retreat; the enemy camps, we harass; the enemy tires, we attack; the enemy retreats, we pursue" font-family="sans-serif" font-size="12"><rect width="480" height="300" fill="#ffffff"/><defs><marker id="maoRiseGArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#334155"/></marker></defs><g fill="none" stroke="#334155" stroke-width="2" marker-end="url(#maoRiseGArrow)"><path d="M315 48 Q395 48 395 118"/><path d="M395 178 Q395 252 319 252"/><path d="M165 252 Q85 252 85 182"/><path d="M85 122 Q85 48 161 48"/></g><g stroke="#334155" stroke-width="1.5"><rect x="165" y="20" width="150" height="56" rx="8" fill="#fecaca"/><rect x="320" y="122" width="150" height="56" rx="8" fill="#fde68a"/><rect x="165" y="224" width="150" height="56" rx="8" fill="#bae6fd"/><rect x="10" y="122" width="150" height="56" rx="8" fill="#c7d2fe"/></g><g fill="#1f2937" text-anchor="middle"><text x="240" y="42">The enemy advances</text><text x="240" y="62" font-weight="bold">we retreat</text><text x="395" y="144">The enemy camps</text><text x="395" y="164" font-weight="bold">we harass</text><text x="240" y="246">The enemy tires</text><text x="240" y="266" font-weight="bold">we attack</text><text x="85" y="144">The enemy retreats</text><text x="85" y="164" font-weight="bold">we pursue</text></g><circle cx="240" cy="150" r="60" fill="#bbf7d0" stroke="#334155" stroke-width="1.5"/><g fill="#1f2937" text-anchor="middle" font-size="11"><text x="240" y="126">Small, fast army</text><text x="240" y="141">avoids big battles,</text><text x="240" y="156">wears the enemy</text><text x="240" y="171">down and wins</text><text x="240" y="186">the villages</text></g></svg>`,
      diagramCaption:
        "Mao and Zhu De's sixteen-character guerrilla formula as a cycle: avoid the enemy's strength, strike at its weakness, and rely on local people for food and information.",
      workedExamples: [
        {
          title: "Judging a source's usefulness",
          problem:
            "**Source A** is from Mao's 1927 *Report on an Investigation of the Peasant Movement in Hunan*. How useful is Source A for understanding why Mao thought the peasants were the key to revolution? (6 marks)",
          steps: [
            "**Plan (NOP):** Nature — a report written by Mao; Origin — 1927, after he toured Hunan; Purpose — to persuade the Communist Party to back the peasant movement. Then judge content *and* provenance.",
            "**Content:** \"Source A is useful because it shows Mao's belief that the peasants were an unstoppable force: he says 'several hundred million peasants will rise like a mighty storm'. The huge number reflects the fact that most Chinese people were peasants.\"",
            "**Provenance:** \"It is especially useful for Mao's *views* because he wrote it himself in 1927, at the very moment he was developing the idea. However, it was written to persuade sceptical party leaders, so he may exaggerate how ready the peasants were to revolt.\"",
            "**Limits:** \"It cannot tell us whether Mao was right — the peasant movement in Hunan was crushed later in 1927 — so I would cross-reference it with evidence of what happened in the Jiangxi Soviet.\"",
            "**Judgement:** \"Very useful for understanding Mao's thinking and purpose; less useful as evidence of what peasants themselves actually felt.\"",
          ],
          answer:
            "Highly useful for Mao's ideas and motives because he wrote it to persuade the party; limited as evidence of peasants' real attitudes.",
          yourTurn: {
            question: "Your turn: in which Chinese province was Mao born?",
            answer: { type: "text", accept: ["Hunan", "Hunan province", "Hunan Province"], display: "Hunan" },
            solution: "Mao was born in Shaoshan, Hunan province, in 1893.",
          },
        },
      ],
      keyPoints: [
        "Mao (born 1893, Hunan) was a peasant's son, a trained teacher and a library assistant before becoming a communist.",
        "He argued that China's revolution would be led by peasants in the countryside, not by city workers as in Soviet thinking.",
        "The Jiangxi Soviet (1931–34) won peasant support with land reform, but also used violence and purges.",
        "Guerrilla tactics let a weak army survive against a much stronger one.",
        "Strict discipline (the Eight Points for Attention) helped the Red Army win villagers' trust.",
      ],
      whyItWorks:
        "Why did Mao's ideas work? Because they matched China's circumstances. With 80–90% of people living on the land, a party that could win the peasants could find soldiers, food and information almost everywhere. Guerrilla war turned the communists' weaknesses (few soldiers, poor weapons) into strengths (speed, local knowledge, support from villagers). This is the 'leadership' strand of our enquiry: Mao did not create China's crises, but he found a way to use them.",
      strategies: ["Make an inference", "Check the provenance (NOP)", "Think about purpose"],
      thinkDeeper:
        "The Eight Points for Attention were partly designed as propaganda. Does that make them less important as a reason for communist success? Can something be both propaganda *and* genuinely effective?",
    },
    // ------------------------------------------------------------------ 4
    {
      id: "long-march",
      heading: "The Long March, 1934–1935",
      discovery: {
        problem:
          "Official Chinese accounts say the Long March covered **25,000 *li*** — about **12,500 km** — crossing 18 mountain ranges and 24 rivers. In 2002–03 two British researchers, Ed Jocelyn and Andrew McEwen, walked the main route themselves and estimated it at roughly **6,000 km**.\n\nAlso: about **86,000** people set out in October 1934; roughly **8,000** of them reached northern Shaanxi a year later.\n\nTwo puzzles: (1) Why might the distance figures be so different — and who might prefer the bigger one? (2) How could a retreat in which around 90% of the marchers did not arrive become one of the proudest stories in Chinese Communist history?",
        idea:
          "Distances depend on what you count (which army, every detour and back-track), but official figures also served a purpose: a longer, harder march made a more heroic story. That is the key insight. Militarily, the Long March was a desperate retreat and a near-disaster. Politically, it became a **propaganda triumph** — proof of endurance and of Mao's leadership. Historians must separate the **event** from the **legend** built around it.",
      },
      body:
        "**Encirclement.** Between 1930 and 1934 Chiang Kai-shek launched **five 'encirclement campaigns'** against the Jiangxi Soviet. The communists beat off the early ones with mobile guerrilla tactics. But by the fifth campaign (1933–34) the party's leaders, advised by the Comintern's German agent Otto Braun, had sidelined Mao and were fighting head-on battles. Chiang's huge armies built rings of fortified **blockhouses** and slowly strangled the soviet.\n\n**The breakout (October 1934).** Around **86,000** soldiers and party workers broke out westwards, carrying heavy equipment such as printing presses. At the **Xiang River** in late 1934 they were caught and lost perhaps half their strength.\n\n**The Zunyi Conference (January 1935).** At **Zunyi** in Guizhou, party leaders blamed the defeats on Braun and the party leader Bo Gu. Mao returned to the top military leadership. Zunyi is usually seen as the **turning point in Mao's rise** — although his full control of the party took until the 1940s.\n\n**The march.** The Red Army twisted and turned to escape: back and forth across the Chishui River, over the **Jinsha River**, across the **Dadu River**, over snowy mountains and through the **grasslands** — bogs where many died. In **October 1935** roughly **8,000** of the original marchers reached **northern Shaanxi**; other communist armies arrived in 1936. From early 1937 **Yan'an** was their headquarters. Many marchers died in battle or from cold, hunger and disease; others deserted or were left behind, and new recruits joined along the way.\n\n**Luding Bridge — legend and doubts.** The official story says that on **29 May 1935** about 22 volunteers crawled along the iron chains of **Luding Bridge** over the Dadu River, under heavy fire after the planks had been removed, and captured the far side. Some historians, using local testimony and the lack of reliable records, argue the fighting was much smaller, or that the bridge was barely defended. Others accept a real crossing but see the details as embellished. We cannot be sure, so we say: **the legend says…**\n\n| The Long March as… | Evidence |\n|---|---|\n| Military disaster | Roughly 90% of those who left Jiangxi did not arrive |\n| Political turning point | Mao rose at Zunyi; the party survived |\n| Propaganda | Heroic stories spread by the party and by journalist Edgar Snow |\n\nIn December 1935 Mao himself called the Long March 'a manifesto… a propaganda force… a seeding-machine'.",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schematic map, not to scale, of the main Long March route from Ruijin in Jiangxi west past the Xiang River and Zunyi, south-west to the Jinsha River, north via Luding Bridge, the snowy mountains and the grasslands, and north-east to Wuqi and Yan'an in Shaanxi" font-family="sans-serif" font-size="11"><rect width="480" height="320" fill="#ffffff"/><text x="10" y="16" font-size="12" font-weight="bold" fill="#1f2937">The Long March, Oct 1934 – Oct 1935 (main route, simplified)</text><polyline points="314,48.2 295.8,57.3 290.6,58.6 298.4,48.2 303.6,33.9 289.3,28.7 272.4,43 255.5,53.4 245.1,56 255.5,67.7 260.7,76.8 273.7,79.4 293.2,75.5 302.3,75.5 310.1,76.8 295.8,83.3 280.2,93.7 268.5,102.8 264.6,113.2 278.9,128.8 286.7,139.2 299.7,150.9 299.7,160 288,165.2 298.4,173 299.7,178.2 294.5,191.2 284.1,199 269.8,225 263.3,232.8 250.3,244.5 232.1,258.8 215.2,266.6 199.6,273.1 190.5,274.4 171,279.6 150.2,287.4 147.6,299.1 141.1,290 133.3,283.5 119,283.5" fill="none" stroke="#94a3b8" stroke-width="1.5"/><ellipse cx="288" cy="254.9" rx="10" ry="23" fill="none" stroke="#94a3b8"/><g fill="#64748b"><circle cx="228.2" cy="44.3" r="2.5"/><text x="224" y="48" text-anchor="end">Beijing</text><circle cx="259.4" cy="145.7" r="2.5"/><text x="255" y="143" text-anchor="end">Nanjing (GMD capital)</text><circle cx="294.5" cy="157.4" r="2.5"/><text x="286" y="166" text-anchor="end">Shanghai</text><circle cx="187.9" cy="262.7" r="2.5"/><text x="183" y="266" text-anchor="end">Guangzhou</text><circle cx="99.5" cy="178.2" r="2.5"/><text x="104" y="174">Chongqing</text></g><polyline points="223,226.3 200,232 159.3,226.3 130,215 104.7,202.9 89,194 100,212 70,234 47.5,223.7 45,191 43.6,174.3 50.1,162.6 46,160 52.7,130.1 65.7,117.1 95.6,100.2 121.6,83.3" fill="none" stroke="#b91c1c" stroke-width="3" stroke-linejoin="round"/><line x1="121.6" y1="83.3" x2="138.5" y2="87.2" stroke="#b91c1c" stroke-width="2" stroke-dasharray="4 3"/><g fill="#ffffff" stroke="#1f2937"><circle cx="223" cy="226.3" r="7"/><circle cx="159.3" cy="226.3" r="7"/><circle cx="104.7" cy="202.9" r="7"/><circle cx="47.5" cy="223.7" r="7"/><circle cx="43.6" cy="174.3" r="7"/><circle cx="62" cy="156" r="7"/><circle cx="52.7" cy="130.1" r="7"/><circle cx="121.6" cy="83.3" r="7"/><circle cx="140" cy="88" r="7"/></g><g font-weight="bold" text-anchor="middle" fill="#1f2937"><text x="223" y="230.3">1</text><text x="159.3" y="230.3">2</text><text x="104.7" y="206.9">3</text><text x="47.5" y="227.7">4</text><text x="43.6" y="178.3">5</text><text x="62" y="160">6</text><text x="52.7" y="134.1">7</text><text x="121.6" y="87.3">8</text><text x="140" y="92">9</text></g><g fill="#1f2937"><text x="325" y="40" font-weight="bold">1 Ruijin (Jiangxi)</text><text x="325" y="52">breakout, Oct 1934</text><text x="325" y="68" font-weight="bold">2 Xiang River</text><text x="325" y="80">heavy losses, late 1934</text><text x="325" y="96" font-weight="bold">3 Zunyi Conference</text><text x="325" y="108">Jan 1935: Mao rises</text><text x="325" y="124" font-weight="bold">4 Jinsha River</text><text x="325" y="136">crossed May 1935</text><text x="325" y="152" font-weight="bold">5 Luding Bridge</text><text x="325" y="164">May 1935: story disputed</text><text x="325" y="180" font-weight="bold">6 Snowy mountains</text><text x="325" y="192">June 1935</text><text x="325" y="208" font-weight="bold">7 Grasslands</text><text x="325" y="220">swamps, Aug 1935</text><text x="325" y="236" font-weight="bold">8 Wuqi, N. Shaanxi</text><text x="325" y="248">arrival, Oct 1935</text><text x="325" y="264" font-weight="bold">9 Yan'an</text><text x="325" y="276">CCP base 1937–47</text></g><line x1="325" y1="292" x2="350" y2="292" stroke="#b91c1c" stroke-width="3"/><text x="356" y="296" fill="#1f2937">route (simplified)</text><text x="325" y="314" font-style="italic" fill="#475569">Schematic, not to scale</text></svg>`,
      diagramCaption:
        "Schematic map, not to scale: the main route of the Red Army's First Front Army, 1934–35, greatly simplified — the real route doubled back many times. Grey dots are cities shown only for reference.",
      workedExamples: [
        {
          title: "A 'how far do you agree' judgement",
          problem: "'The Long March was a disaster for the Chinese Communist Party.' How far do you agree? (8 marks)",
          steps: [
            "**Plan:** agree (military losses) → disagree (leadership and propaganda) → a judgement that weighs short-term against long-term effects.",
            "**Agree:** \"In the short term the Long March was a disaster. About 86,000 people left Jiangxi in October 1934, but only roughly 8,000 reached northern Shaanxi a year later. The party had lost its base, most of its army and much of its equipment.\"",
            "**Disagree (leadership):** \"However, the March also brought gains. At the Zunyi Conference in January 1935 Mao returned to the leadership, giving the party a leader whose guerrilla strategy suited its situation. The party survived in a remote base that Chiang found hard to reach.\"",
            "**Disagree (propaganda):** \"Most importantly, the March became a powerful legend. Stories such as the crossing of Luding Bridge — even if exaggerated — and Edgar Snow's *Red Star Over China* (1937) presented the communists as heroic patriots, helping them win recruits.\"",
            "**Judgement:** \"I partly agree. Militarily it was a disaster, but politically it was a turning point, because survival plus the legend made Mao and the CCP far stronger in the long run.\"",
          ],
          answer:
            "Partly agree: a military disaster in the short term, but a political and propaganda success that made Mao's leadership possible.",
          yourTurn: {
            question: "Your turn: name the town where the January 1935 conference that brought Mao back into the leadership was held.",
            answer: { type: "text", accept: ["Zunyi", "Zunyi Conference", "Tsunyi"], display: "Zunyi" },
            solution: "At Zunyi, in Guizhou province, party leaders blamed Bo Gu and Otto Braun for the defeats, and Mao returned to the military leadership.",
          },
        },
      ],
      keyPoints: [
        "Chiang's fifth encirclement campaign (1933–34) forced the communists to abandon the Jiangxi Soviet.",
        "About 86,000 broke out in October 1934; roughly 8,000 reached northern Shaanxi in October 1935.",
        "At the Zunyi Conference (January 1935) Mao returned to the leadership — a turning point in his rise.",
        "Distances are disputed: official accounts claim about 12,500 km; researchers retracing the main route estimated about 6,000 km.",
        "Heroic episodes such as Luding Bridge are partly legend; historians question how much fighting took place.",
        "A military disaster became a propaganda triumph that built Mao's reputation.",
      ],
      whyItWorks:
        "Why does the Long March matter for the enquiry? Not because it won territory — it lost almost everything. It matters because it changed **who led** the communists (Mao, after Zunyi) and **how people saw them**. Survival against the odds became 'proof' that the communists were tough, patriotic and destined to win. A dictator's rise often depends on a story about the leader as much as on the events themselves: the Long March legend became a foundation of Mao's later personality cult.",
      strategies: ["Think about purpose", "Cross-reference sources", "Judge significance"],
      thinkDeeper:
        "If the Luding Bridge battle was much smaller than the legend, does it matter? Who gains when a story is exaggerated — and what does a historian lose by believing it?",
    },
    // ------------------------------------------------------------------ 5
    {
      id: "japan-and-civil-war",
      heading: "War with Japan and Civil War, 1937–1949",
      discovery: {
        problem:
          "In 1937 the communists controlled a poor, remote area around Yan'an and had about **40,000** party members. By 1945 the party had around **1.2 million** members and ruled areas with tens of millions of people. In the same years the much larger Nationalist government fought Japan's main armies.\n\nPredict: how could a war against a foreign invader make one Chinese party stronger and the other weaker?",
        idea:
          "The **Japanese invasion** was the great crisis that changed everything. The GMD fought — and lost — most of the big battles, losing its richest cities, many of its best soldiers and much of its tax income, so it paid for the war by printing money. The CCP fought mainly a **guerrilla war** behind Japanese lines, spreading its organisation through the villages and presenting itself as the true patriotic party. **War can destroy the government that bears its full weight and strengthen the opposition that survives it.**",
      },
      body:
        "**Japan invades.** Japan seized **Manchuria in 1931**. Chiang's policy was 'first internal pacification, then external resistance' — defeat the communists before fighting Japan — which angered many patriotic Chinese. In December 1936 one of his own generals held him captive in the **Xi'an Incident** until he agreed to cooperate with the CCP. After fighting at the Marco Polo Bridge on **7 July 1937**, full-scale war began and a **Second United Front** was formed.\n\n**The war's impact (1937–45).** Japan quickly captured China's coast and main cities, including the capital, Nanjing, where Japanese troops carried out the **Nanjing Massacre** (1937–38). Chiang moved his government inland to **Chongqing**. China suffered terribly: estimates of Chinese deaths in the war commonly range from about 14 to 20 million.\n\n- **The GMD** fought most of the large battles and lost huge numbers of soldiers. Cut off from its richest areas, it printed money, causing soaring **inflation**. **Corruption**, brutal conscription and a famine in Henan (1942–43) cost it support.\n- **The CCP** fought mainly as guerrillas behind Japanese lines, with occasional big offensives such as the Hundred Regiments Offensive (1940). It cut rents and interest rates in its areas and won a reputation for being **patriotic and honest**. Membership grew from about 40,000 (1937) to about 1.2 million (1945). In Yan'an Mao also tightened his own control through the **Rectification Movement** (1942–44), which forced critics to confess their 'errors'.\n\nThe United Front never meant real trust: in January 1941 GMD forces attacked the communist New Fourth Army.\n\n**Civil War (1946–49).** Japan surrendered in **August 1945**. American attempts to arrange a peace failed, and full civil war began in 1946. The GMD started with far more troops and received US aid, but the communists took over much of **Manchuria**, where the Soviet Union, which had occupied it in 1945, let them take large stocks of captured Japanese weapons. In 1948–49 huge campaigns such as **Huaihai** destroyed GMD armies, and whole units changed sides. Hyperinflation wrecked GMD cities — a new currency launched in August 1948 became almost worthless within months.\n\n**Victory.** On **1 October 1949** Mao proclaimed the **People's Republic of China** in Beijing. Chiang retreated to **Taiwan** with perhaps 1–2 million soldiers and civilians, where his Republic of China government continued.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison grid of the Nationalists and the Communists in 1945 to 1949 across leader, main base, troops, foreign help, war with Japan, economy and army morale" font-family="sans-serif" font-size="11"><rect width="480" height="300" fill="#ffffff"/><text x="10" y="18" font-size="13" font-weight="bold" fill="#1f2937">Nationalists vs Communists, 1945–49</text><g stroke="#334155" stroke-width="1"><rect x="10" y="28" width="120" height="26" fill="#f1f5f9"/><rect x="130" y="28" width="170" height="26" fill="#bae6fd"/><rect x="300" y="28" width="170" height="26" fill="#fecaca"/><rect x="10" y="54" width="120" height="210" fill="#f1f5f9"/><rect x="130" y="54" width="170" height="210" fill="#ffffff"/><rect x="300" y="54" width="170" height="210" fill="#ffffff"/><line x1="10" y1="84" x2="470" y2="84"/><line x1="10" y1="114" x2="470" y2="114"/><line x1="10" y1="144" x2="470" y2="144"/><line x1="10" y1="174" x2="470" y2="174"/><line x1="10" y1="204" x2="470" y2="204"/><line x1="10" y1="234" x2="470" y2="234"/></g><g fill="#1f2937"><text x="215" y="45" text-anchor="middle" font-weight="bold">Nationalists (GMD)</text><text x="385" y="45" text-anchor="middle" font-weight="bold">Communists (CCP)</text><g font-weight="bold"><text x="16" y="73">Leader</text><text x="16" y="103">Main base</text><text x="16" y="133">Troops, 1946*</text><text x="16" y="163">Foreign help</text><text x="16" y="193">War with Japan</text><text x="16" y="223">Economy</text><text x="16" y="253">Army morale</text></g><text x="138" y="73">Chiang Kai-shek</text><text x="308" y="73">Mao Zedong</text><text x="138" y="103">Cities, landlords, business</text><text x="308" y="103">Villages, poor peasants</text><text x="138" y="133">about 4 million</text><text x="308" y="133">about 1.2 million</text><text x="138" y="163">US aid: over $2 billion</text><text x="308" y="163">Soviet help in Manchuria</text><text x="138" y="193">Fought most big battles</text><text x="308" y="193">Guerrillas, patriotic image</text><text x="138" y="223">Hyperinflation, corruption</text><text x="308" y="223">Land reform, rent cuts</text><text x="138" y="253">Conscription, desertion</text><text x="308" y="253">Discipline, propaganda</text><text x="10" y="280" fill="#475569">* Approximate figures. These are generalisations:</text><text x="10" y="294" fill="#475569">the picture varied from place to place and year to year.</text></g></svg>`,
      diagramCaption:
        "A comparison grid for 1945–49. The GMD began the Civil War with more troops and US aid, but its weaknesses ran deep.",
      workedExamples: [
        {
          title: "Explaining a defeat",
          problem: "Explain why the Nationalists lost the Civil War of 1946–49. (8 marks)",
          steps: [
            "**Plan:** three causes — GMD weaknesses, communist strengths, the impact of the war with Japan — then link them and judge.",
            "**Paragraph 1 (GMD weakness):** \"One reason was the Nationalists' own weakness. Inflation spiralled so fast that a new currency introduced in August 1948 was almost worthless within months, so city people who had supported Chiang turned against him. Corruption and brutal conscription made things worse, and whole units changed sides.\"",
            "**Paragraph 2 (CCP strength):** \"Another reason was communist strength in the countryside. Land reform and strict discipline won peasant support, which provided recruits, food and information. By 1948 the communists could fight huge battles, such as the Huaihai campaign, which destroyed whole GMD armies.\"",
            "**Paragraph 3 (link to Japan):** \"These factors were linked by the war with Japan (1937–45). It drained the GMD, which fought most of the big battles, while the CCP grew from about 40,000 to about 1.2 million members as patriotic guerrillas.\"",
            "**Judgement:** \"The most important reason was the GMD's weakness, because the CCP's strengths only became decisive once the Nationalists had lost people's trust — and the war with Japan is what deepened that collapse.\"",
          ],
          answer:
            "The GMD's own weakness, deepened by the war with Japan, mattered most; CCP strengths turned that weakness into defeat.",
          yourTurn: {
            question: "Your turn: in which year did Mao proclaim the People's Republic of China?",
            answer: { type: "number", value: 1949 },
            solution: "On 1 October 1949 Mao proclaimed the People's Republic of China in Beijing.",
          },
        },
      ],
      keyPoints: [
        "Japan's invasion (Manchuria in 1931, then full-scale war from 1937) was the biggest crisis of all for the Nationalist government.",
        "The GMD fought most of the big battles and was weakened by losses, inflation, corruption and conscription.",
        "The CCP grew from about 40,000 members (1937) to about 1.2 million (1945) as patriotic guerrillas and reformers.",
        "In the Civil War (1946–49) the communists won key campaigns in Manchuria and at Huaihai.",
        "Mao proclaimed the People's Republic of China on 1 October 1949; Chiang retreated to Taiwan.",
      ],
      whyItWorks:
        "Why did the war decide the contest? Wars test governments. The Japanese invasion exposed every weakness of the GMD — corruption, inflation, harsh conscription — while giving the CCP a cause (national resistance) that attracted people who were not communists at all. The historian Chalmers Johnson called this 'peasant nationalism'. Others, such as Rana Mitter, stress that the Nationalists were weakened precisely *because* they did so much of the fighting. Either way, crisis and weak government combined to open the door.",
      strategies: ["Weigh factors", "Compare and contrast", "Consider the counter-argument"],
      thinkDeeper:
        "Without the Japanese invasion, would the communists ever have come to power? Use the state of the CCP in 1936 as evidence.",
    },
    // ------------------------------------------------------------------ 6
    {
      id: "mao-in-power",
      heading: "Mao in power: control and its costs",
      discovery: {
        problem:
          "In 1958 Mao launched the **Great Leap Forward**, promising that China would overtake Britain's steel production within about fifteen years. Villagers were organised into huge communes. Millions melted down pots and tools in 'backyard furnaces'. Local officials, afraid of being labelled 'rightists', reported grain harvests far bigger than the real ones — and the state took its share based on those false figures.\n\nThink like a historian: in a one-party state where criticising the leader is dangerous, what happens to bad news? Predict the consequence of the false harvest reports.",
        idea:
          "When nobody dares to report failure, mistakes are not corrected — they grow. The state took grain that did not exist, leaving villages without food. The result was the **Great Famine (1959–61)**: historians' estimates of the deaths commonly range from **15 to 45 million** people. When Marshal **Peng Dehuai** criticised the policy in 1959, he was purged. The disaster shows how the power Mao gained in 1949 — with no free press, no free elections and no legal opposition — removed the checks that might have stopped it.",
      },
      body:
        "**A one-party state.** After 1949 the Communist Party controlled the government, army, courts, newspapers, schools and trade unions. A few small parties were allowed only if they accepted communist leadership.\n\n**Land reform and campaigns.** Under the **Agrarian Reform Law (1950)**, landlords' land was shared out among hundreds of millions of peasants. At village meetings peasants were urged to 'speak bitterness' against landlords, many of whom were beaten or killed; historians' estimates of the deaths range from around 1 million to several million. Further campaigns targeted 'counter-revolutionaries', corrupt officials and business owners. In the **Hundred Flowers** campaign (1956–57) Mao invited criticism — then the **Anti-Rightist Campaign** (1957) punished hundreds of thousands who had spoken out.\n\n**Cult of personality.** Mao's portrait hung in homes, schools and over Tiananmen Gate. From **1964** the army printed *Quotations from Chairman Mao* — the **Little Red Book** — and hundreds of millions of copies circulated. Mao was presented as the 'Great Helmsman' who had led the Long March and saved China.\n\n**The Great Leap Forward (1958–62).** Mao aimed to transform industry and farming at incredible speed through **people's communes** and backyard steel furnaces. False reports, grain requisitioning and the diversion of labour away from farming led to the **Great Famine (1959–61)**, one of the deadliest famines in history; estimates of deaths commonly range from **15 to 45 million**. Behind each number were families. The Chinese journalist Yang Jisheng, whose father died of hunger in 1959, spent years researching the famine for his book *Tombstone*.\n\n**The Cultural Revolution (1966–76) — overview.** Mao launched a campaign against 'capitalist' influences and his rivals in the party. Millions of young **Red Guards** attacked teachers, officials and 'old' culture; schools closed; millions of young people were later 'sent down' to the countryside. Estimates of deaths range widely, from several hundred thousand to around 2 million. It ended only with Mao's death in **1976**.\n\n**Debating Mao's legacy.** In 1981 the Communist Party judged that Mao's achievements were 'primary' and his mistakes 'secondary'. Supporters point to national unity, independence from foreign powers, land reform, rising literacy and life expectancy, and new legal rights for women. Many historians, such as Frank Dikötter, emphasise the enormous human cost. An honest account includes both.",
      diagram: `<svg viewBox="0 0 480 256" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline of Mao's China from 1949 to 1976, drawn to scale, showing land reform 1950 to 1952, the Anti-Rightist Campaign 1957, the Great Leap Forward 1958 to 1962 with famine 1959 to 1961, the Little Red Book 1964, the Cultural Revolution 1966 to 1976 and Mao's death in 1976" font-family="sans-serif" font-size="11"><rect width="480" height="256" fill="#ffffff"/><text x="10" y="16" font-size="13" font-weight="bold" fill="#1f2937">Mao's China, 1949–1976 (drawn to scale)</text><g stroke="#334155" stroke-width="1"><line x1="41.6" y1="150" x2="41.6" y2="28"/><line x1="45.5" y1="150" x2="45.5" y2="46"/><line x1="154" y1="150" x2="154" y2="64"/><line x1="262" y1="150" x2="262" y2="82"/><line x1="448.5" y1="150" x2="448.5" y2="100"/></g><g fill="#1f2937"><text x="45.6" y="38">1 Oct 1949: PRC proclaimed</text><text x="49" y="56">1950: Land reform law; Korean War</text><text x="158" y="74">1957: Anti-Rightist Campaign</text><text x="266" y="92">1964: Little Red Book</text><text x="444" y="110" text-anchor="end">1976: Mao dies</text></g><line x1="30" y1="150" x2="450" y2="150" stroke="#1f2937" stroke-width="2"/><g fill="#1f2937"><circle cx="41.6" cy="150" r="3"/><circle cx="45.5" cy="150" r="3"/><circle cx="154" cy="150" r="3"/><circle cx="262" cy="150" r="3"/><circle cx="448.5" cy="150" r="3"/></g><g stroke="#334155"><line x1="45.5" y1="150" x2="45.5" y2="155"/><line x1="123" y1="150" x2="123" y2="155"/><line x1="200.5" y1="150" x2="200.5" y2="155"/><line x1="278" y1="150" x2="278" y2="155"/><line x1="355.5" y1="150" x2="355.5" y2="155"/><line x1="433" y1="150" x2="433" y2="155"/></g><g fill="#475569" text-anchor="middle"><text x="45.5" y="166">1950</text><text x="123" y="166">1955</text><text x="200.5" y="166">1960</text><text x="278" y="166">1965</text><text x="355.5" y="166">1970</text><text x="433" y="166">1975</text></g><g stroke="#334155"><rect x="45.5" y="174" width="31" height="24" fill="#bbf7d0"/><rect x="169.5" y="174" width="62" height="24" fill="#fde68a"/><rect x="185" y="186" width="31" height="12" fill="#fecaca"/><rect x="293.5" y="174" width="155" height="24" fill="#c7d2fe"/></g><g fill="#1f2937"><text x="371" y="190" text-anchor="middle" font-weight="bold">Cultural Revolution</text><text x="30" y="214">Land reform 1950–52</text><text x="371" y="214" text-anchor="middle">1966–76: Red Guards; schools closed</text><text x="150" y="230">Great Leap Forward 1958–62</text><text x="150" y="246">Famine 1959–61: est. 15–45 million deaths</text></g></svg>`,
      diagramCaption:
        "Mao's China, 1949–1976, drawn to scale. Death tolls are given as ranges because records are incomplete and historians' estimates differ.",
      workedExamples: [
        {
          title: "Explaining a consequence",
          problem: "Explain why the Great Leap Forward led to famine. (6 marks)",
          steps: [
            "**Plan:** cause 1 = unrealistic targets and false reports; cause 2 = fear and the lack of criticism in a one-party state; then link them.",
            "**Paragraph 1:** \"One reason was unrealistic targets. Mao wanted China to industrialise at incredible speed, so peasants were pulled away from farming to work on projects such as backyard steel furnaces, and local officials, under pressure, reported far bigger harvests than they actually grew. The state then took grain based on these false figures, leaving villages short of food.\"",
            "**Paragraph 2:** \"A second reason was fear. In a one-party state with a cult of personality, criticising Mao was dangerous: when Peng Dehuai raised concerns in 1959, he was purged. As a result officials kept hiding the truth, and the policies continued while people starved.\"",
            "**Judgement:** \"The two causes were linked: false reports created the shortage, but the political system stopped anyone from correcting it, turning a failed policy into a famine in which an estimated 15–45 million people died.\"",
          ],
          answer:
            "Unrealistic targets and false harvest reports caused the shortage; fear in a one-party state stopped the truth from changing policy.",
          yourTurn: {
            question: "Your turn: in which year did the Great Leap Forward begin?",
            answer: { type: "number", value: 1958 },
            solution: "Mao launched the Great Leap Forward in 1958; it lasted until about 1962.",
          },
        },
      ],
      keyPoints: [
        "After 1949 China became a one-party state: the Communist Party controlled government, media, courts and schools.",
        "Land reform gave land to peasants but involved violent attacks on landlords; estimates of deaths range from about 1 million to several million.",
        "A cult of personality presented Mao as an all-wise leader (portraits, the Little Red Book from 1964).",
        "The Great Leap Forward (1958–62) caused a famine (1959–61) in which an estimated 15–45 million people died.",
        "The Cultural Revolution (1966–76) turned Red Guards against teachers, officials and Mao's rivals.",
        "Historians still debate Mao's legacy; honest accounts weigh achievements against enormous human costs.",
      ],
      whyItWorks:
        "Why study what Mao did *after* 1949 in an enquiry about coming to power? Because the way a leader rises shapes the way he rules. Mao won through war, so violence and military-style discipline became normal politics. His cult — built partly on the Long March legend — made it dangerous to contradict him. With no free elections, press or independent courts to check him, a mistaken policy like the Great Leap could become a catastrophe. Term 3 picks up this lesson: rights such as free speech and fair representation exist to stop exactly this.",
      strategies: ["Judge significance", "Use precise evidence", "Consider the counter-argument"],
      thinkDeeper:
        "Can a leader's 'achievements' and 'mistakes' be weighed on a single scale? What problems arise when we try to set land reform or rising literacy against millions of deaths?",
    },
    // ------------------------------------------------------------------ 7
    {
      id: "why-mao-rose",
      heading: "Enquiry: why did Mao come to power?",
      discovery: {
        problem:
          "Two dictators, two routes:\n\n| | Hitler | Mao |\n|---|---|---|\n| Joined his party | 1919 | 1921 (founder member) |\n| Came to power | 30 January 1933 | 1 October 1949 |\n| How | Appointed Chancellor by President Hindenburg | Won a civil war |\n| Party to power | about 14 years | about 28 years |\n\nBoth men's countries were angered by the **Treaty of Versailles**, both suffered **hyperinflation**, and both had governments that lost people's trust.\n\nWhich of the three Term 2 factors — crises, weak government or the leader's methods — best explains why the two *routes* to power were so different?",
        idea:
          "Crises and weak government appear in **both** stories: they are the shared *circumstances*. What differs most is the **method**. Hitler used elections, propaganda and back-room deals to be appointed **legally**; Mao built an army among the peasants and won through **guerrilla war and civil war**. This is why historians link causes rather than list them: the circumstances opened the door, but each leader walked through it in his own way.",
      },
      body:
        "Use the Term 2 framework: **crises + weak government + leadership**.\n\n**1. Crises.** China lurched from one crisis to the next: the fall of the Qing (1911–12), warlord chaos (1916–28), foreign humiliation, the Japanese invasion (1937–45) and hyperinflation (1947–49). Each crisis made ordinary life harder and discredited those in charge.\n\n**2. Weakness of the Nationalist government.** Chiang's GMD never fully controlled China. It was linked to landlords and corruption, did little for the peasants and was drained by eight years of war against Japan. Defeats in 1948–49 and runaway inflation turned even city supporters against it.\n\n**3. Mao's leadership and ideas.** Mao's **peasant strategy** fitted a country where most people were farmers. **Guerrilla warfare** kept a weak army alive; **land reform** and **discipline** won villages; **propaganda** — including the **Long March legend** and Edgar Snow's *Red Star Over China* (1937) — made the communists look heroic and patriotic. In Yan'an Mao also built a ruthless party machine and the beginnings of a cult around himself.\n\n**4. Outside factors.** Japan's invasion did much of the CCP's work by wrecking the GMD, and Soviet help in Manchuria in 1945–46 mattered too.\n\n**How historians disagree**\n\n| Historian | Main argument |\n|---|---|\n| Chalmers Johnson (1962) | Japan's invasion created 'peasant nationalism' that the CCP led |\n| Mark Selden (1971) | Social reforms in Yan'an won peasant support |\n| Lloyd Eastman (1984) | The GMD's own failures caused its defeat |\n| Rana Mitter (2013) | The war with Japan exhausted the Nationalists |\n\n**Comparing with Hitler.** Both rose amid national humiliation (Versailles angered Germans *and* Chinese), economic chaos and weak governments, and both were presented by propaganda as their nation's saviour. But Hitler's route was **legal**: he was appointed Chancellor in **January 1933** after the Nazis became the largest party in the Reichstag, then dismantled democracy from inside. Mao's route was **revolutionary**: 28 years of organising, retreating and fighting ended in victory in a **civil war**. Hitler won votes from many groups, especially the middle classes; Mao's base was above all the peasants. Charisma worked differently too: Hitler's came largely from speeches and rallies, while Mao's was built over years through stories of endurance and victory.\n\n**Avoid hindsight.** In 1934, or even in 1945, a communist victory was not inevitable.",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Factor web: crises, weak government, Mao's leadership and outside factors all connect to the communist victory of 1949, with links between them" font-family="sans-serif" font-size="11"><rect width="480" height="320" fill="#ffffff"/><g stroke="#334155" stroke-width="1.5"><line x1="170" y1="70" x2="196" y2="134"/><line x1="310" y1="70" x2="284" y2="134"/><line x1="170" y1="250" x2="196" y2="186"/><line x1="310" y1="250" x2="284" y2="186"/></g><g stroke="#334155" stroke-width="1.2" stroke-dasharray="5 3"><line x1="170" y1="40" x2="310" y2="40"/><line x1="390" y1="84" x2="390" y2="236"/><line x1="90" y1="84" x2="90" y2="236"/><line x1="170" y1="284" x2="310" y2="284"/></g><g stroke="#334155" stroke-width="1.5"><rect x="10" y="10" width="160" height="74" rx="8" fill="#fecaca"/><rect x="310" y="10" width="160" height="74" rx="8" fill="#fde68a"/><rect x="310" y="236" width="160" height="74" rx="8" fill="#bbf7d0"/><rect x="10" y="236" width="160" height="74" rx="8" fill="#bae6fd"/><ellipse cx="240" cy="160" rx="80" ry="34" fill="#c7d2fe"/></g><g fill="#1f2937"><text x="18" y="28" font-weight="bold" font-size="12">CRISES</text><text x="18" y="46">Qing collapse, warlords</text><text x="18" y="61">Japan's invasion 1937–45</text><text x="18" y="76">Hyperinflation 1947–49</text><text x="318" y="28" font-weight="bold" font-size="12">WEAK GOVERNMENT</text><text x="318" y="46">GMD corruption</text><text x="318" y="61">Defeats, conscription</text><text x="318" y="76">Lost peasants' trust</text><text x="318" y="254" font-weight="bold" font-size="12">MAO'S LEADERSHIP</text><text x="318" y="272">Peasant strategy</text><text x="318" y="287">Guerrillas, land reform</text><text x="318" y="302">Long March legend</text><text x="18" y="254" font-weight="bold" font-size="12">OUTSIDE FACTORS</text><text x="18" y="272">Japan wrecked the GMD</text><text x="18" y="287">Soviet help, Manchuria</text><text x="18" y="302">US aid could not save GMD</text><text x="240" y="156" text-anchor="middle" font-weight="bold" font-size="12">Mao and the CCP</text><text x="240" y="173" text-anchor="middle" font-weight="bold" font-size="12">win power, 1949</text></g><g fill="#334155" font-style="italic"><text x="240" y="33" text-anchor="middle">exposed GMD flaws</text><text x="396" y="150">Mao used</text><text x="396" y="164">GMD failures</text><text x="84" y="143" text-anchor="end">Japan's</text><text x="84" y="157" text-anchor="end">invasion fits</text><text x="84" y="171" text-anchor="end">both boxes</text><text x="240" y="262" text-anchor="middle">invasion gave CCP</text><text x="240" y="276" text-anchor="middle">a patriotic cause</text></g></svg>`,
      diagramCaption:
        "A factor web. Solid lines lead to the outcome; dashed lines show how the factors fed each other. The strongest answers explain these links, not just the boxes.",
      workedExamples: [
        {
          title: "A full judgement on causes",
          problem: "'The weakness of the Nationalist government was the main reason Mao came to power in 1949.' How far do you agree? (12 marks)",
          steps: [
            "**Plan:** a paragraph on GMD weakness (agree) → crises, especially Japan → Mao's leadership → a linked judgement with a clear criterion: which factor made the *biggest difference*?",
            "**Agree:** \"GMD weakness was very important. Corruption, harsh conscription and hyperinflation — a new currency in 1948 lost almost all its value within months — turned peasants and even city people against Chiang. By 1948–49 whole GMD units were changing sides.\"",
            "**Counter (crisis):** \"However, much of that weakness was caused by a crisis: the Japanese invasion of 1937–45. The GMD fought most of the big battles and lost its richest cities, while the CCP grew from about 40,000 to about 1.2 million members as patriotic guerrillas.\"",
            "**Counter (leadership):** \"Mao's leadership turned these circumstances into victory. His peasant strategy, guerrilla tactics, land reform and the Long March legend gave the CCP support in the countryside, where most Chinese people lived.\"",
            "**Judgement:** \"I largely agree, with a qualification. GMD weakness was the main reason, because even a skilful leader like Mao had nearly been destroyed in 1934 when the GMD was stronger. But that weakness was deepened by the Japanese invasion, and Mao's strategy was needed to exploit it — the factors worked together.\"",
          ],
          answer:
            "Largely agree: GMD weakness, made far worse by the Japanese invasion, was decisive — but Mao's strategy was needed to exploit it.",
          yourTurn: {
            question: "Your turn (comparison): in which year was Hitler appointed Chancellor of Germany?",
            answer: { type: "number", value: 1933 },
            solution: "Hitler was appointed Chancellor on 30 January 1933 — legally, by President Hindenburg — whereas Mao won power through civil war in 1949.",
          },
        },
      ],
      keyPoints: [
        "Crises — the fall of the Qing, the warlords, Japan's invasion and hyperinflation — created the opening.",
        "The Nationalist government's weakness (corruption, defeats, losing the peasants) meant it could not close that opening.",
        "Mao's leadership — peasant strategy, guerrilla war, land reform, propaganda — let the CCP exploit it.",
        "The factors were linked: the war with Japan both weakened the GMD and strengthened the CCP.",
        "Unlike Hitler's legal appointment in 1933, Mao came to power through revolution and civil war.",
        "Historians disagree about which factor mattered most — so support your judgement with evidence.",
      ],
      whyItWorks:
        "Why link the factors instead of listing them? Because none worked alone. Without crises, Mao's ideas would have stayed on the fringe, as they nearly did in 1934. Without GMD weakness, the crises might have been survived. Without Mao's strategy, the communists might not have been able to use the chaos. The strongest answers show *how* one factor made another more powerful: the Japanese invasion (crisis) deepened GMD corruption and inflation (weak government), which made peasants more willing to trust the communists (leadership).",
      strategies: ["Link the causes", "Weigh factors", "Avoid hindsight"],
      thinkDeeper:
        "Was Mao 'charismatic' in the same way as Hitler? Can a leader's charisma be created *after* the events that made him powerful — for example, by retelling the Long March?",
    },
  ],
  learn: {
    flashcards: [
      { front: "Qing dynasty", back: "China's last imperial dynasty (1644–1912). It fell in the 1911 revolution; the boy emperor Puyi abdicated in February 1912." },
      { front: "Unequal treaties", back: "Treaties forced on China from the 1840s (after the Opium Wars) that gave foreign powers ports, territory and legal privileges." },
      { front: "Warlord era", back: "1916–1928: regional generals with private armies held real power in China; the central government was weak." },
      { front: "May Fourth Movement", back: "Protests from 4 May 1919 against the Treaty of Versailles giving Germany's rights in Shandong to Japan; spread nationalist and communist ideas." },
      { front: "Guomindang (GMD / Kuomintang, KMT)", back: "The Nationalist Party, founded by Sun Yat-sen in 1912; led by Chiang Kai-shek from the mid-1920s." },
      { front: "Three Principles of the People", back: "Sun Yat-sen's ideas: nationalism, democracy and people's livelihood." },
      { front: "Chinese Communist Party (CCP)", back: "Founded in Shanghai in July 1921 with about 50 members; Mao was one of the delegates at the first congress." },
      { front: "First United Front", back: "The Soviet-backed GMD–CCP alliance of 1924–27 against the warlords." },
      { front: "Northern Expedition", back: "Chiang Kai-shek's campaign (from 1926) to defeat the warlords and reunite China." },
      { front: "Shanghai Massacre", back: "12 April 1927: Chiang's forces and gangsters attacked communists and trade unionists, ending the First United Front." },
      { front: "Jiangxi Soviet", back: "The communist-run area (1931–34), with Mao as chairman, based at Ruijin; it carried out land reform." },
      { front: "Guerrilla warfare", back: "Fighting in small, mobile units that avoid big battles: 'The enemy advances, we retreat; the enemy camps, we harass; the enemy tires, we attack; the enemy retreats, we pursue.'" },
      { front: "Long March", back: "The Red Army's retreat, October 1934 – October 1935: about 86,000 set out; roughly 8,000 reached northern Shaanxi." },
      { front: "Zunyi Conference", back: "January 1935, during the Long March: Mao returned to the military leadership — a turning point in his rise." },
      { front: "Luding Bridge", back: "Chain bridge over the Dadu River, crossed on 29 May 1935. The heroic official story is disputed by some historians." },
      { front: "Yan'an", back: "Town in Shaanxi that was the CCP's headquarters from 1937 to 1947." },
      { front: "Xi'an Incident", back: "December 1936: Chiang was held captive by one of his own generals until he agreed to unite with the CCP against Japan." },
      { front: "Second United Front", back: "The GMD–CCP truce against Japan from 1937; it broke down in practice after the GMD attacked the New Fourth Army in 1941." },
      { front: "People's Republic of China (PRC)", back: "Proclaimed by Mao in Beijing on 1 October 1949." },
      { front: "Great Leap Forward", back: "Mao's 1958–62 drive to industrialise at great speed; it caused the famine of 1959–61 (estimated 15–45 million deaths)." },
      { front: "Cultural Revolution", back: "1966–76: Mao's campaign against 'capitalist' influences and rivals, carried out by young Red Guards." },
      { front: "Cult of personality", back: "Propaganda that presents a leader as heroic and all-wise, e.g. Mao's portraits and the Little Red Book (from 1964)." },
    ],
    mustKnow: [
      "Can you explain how the fall of the Qing (1911–12) and the warlord era created a crisis of government?",
      "Can you describe the May Fourth Movement (1919) and link it to the Treaty of Versailles?",
      "Can you compare the aims and supporters of the GMD and the CCP?",
      "Can you explain why the First United Front collapsed in 1927?",
      "Can you explain Mao's idea of a peasant revolution and why it broke with Soviet thinking?",
      "Can you give the key numbers for the Long March and explain why the distance is disputed?",
      "Can you separate the Luding Bridge legend from the evidence?",
      "Can you explain how the war with Japan weakened the GMD and strengthened the CCP?",
      "Can you give the date the People's Republic of China was proclaimed (1 October 1949)?",
      "Can you explain why the Great Leap Forward caused famine, giving a range for the death toll?",
      "Can you reach a linked judgement on crises, weak government and leadership as causes of Mao's rise, and compare his route to power with Hitler's?",
    ],
    misconceptions: [
      {
        wrong: "Mao led the Communist Party from its founding in 1921.",
        right: "Mao was one of about a dozen delegates in 1921. He was sidelined in 1932–34, returned to the leadership at Zunyi in 1935 and only gained full control of the party in the 1940s.",
      },
      {
        wrong: "The Long March was a great military victory.",
        right: "It was a retreat in which roughly 90% of those who left Jiangxi did not arrive. Its 'victory' was political survival and propaganda.",
      },
      {
        wrong: "The Luding Bridge battle definitely happened exactly as the official story says.",
        right: "The legend says about 22 heroes crossed the chains under heavy fire; some historians doubt there was much fighting at all. Treat it as a disputed story.",
      },
      {
        wrong: "The communists did most of the fighting against Japan.",
        right: "The Nationalists fought most of the big battles and suffered the heaviest losses; the CCP fought mainly as guerrillas — but gained a strong patriotic reputation.",
      },
      {
        wrong: "Mao, like Hitler, came to power legally.",
        right: "Hitler was appointed Chancellor legally in January 1933; Mao won power by winning a civil war in 1949.",
      },
      {
        wrong: "Mao said 'The Chinese people have stood up!' when he proclaimed the PRC on 1 October 1949.",
        right: "He said it in a speech on 21 September 1949, at the conference that prepared the new state — a very common mix-up.",
      },
      {
        wrong: "Chiang Kai-shek founded the Guomindang.",
        right: "Sun Yat-sen's followers founded the GMD in 1912; Chiang rose to lead it after Sun died in 1925.",
      },
      {
        wrong: "China was a colony, like India under British rule.",
        right: "China was never fully colonised. Foreign powers held treaty ports, concessions and spheres of influence, and Japan took Taiwan (1895) and later Manchuria (1931).",
      },
    ],
    examMistakes: [
      "Telling the story of the Long March instead of explaining its significance for Mao's rise.",
      "Giving the famine death toll as one exact number instead of a range of historians' estimates (commonly 15–45 million).",
      "Mixing up the First United Front (1924–27) and the Second United Front (from 1937).",
      "Presenting Luding Bridge or the official Long March distance as certain facts without saying they are disputed.",
      "Listing crises, weak government and leadership without linking them or reaching a judgement.",
      "Forgetting the Japanese invasion — the biggest single crisis for the Nationalist government.",
      "Confusing the GMD (Nationalists, Chiang Kai-shek) with the CCP (Communists, Mao Zedong).",
      "Using hindsight — writing as if a communist victory was certain from 1921.",
    ],
    mnemonics: [
      {
        topic: "Mao's guerrilla rules",
        device: "ARCH–TARP: Advance→Retreat, Camp→Harass, Tire→Attack, Retreat→Pursue",
        explanation: "Each pair is what the enemy does, then what the Red Army does: the enemy advances, we retreat; the enemy camps, we harass; the enemy tires, we attack; the enemy retreats, we pursue.",
      },
      {
        topic: "Sun Yat-sen's Three Principles",
        device: "Nation, Vote, Rice bowl",
        explanation: "Nationalism (free and unite China), democracy (the people's vote) and people's livelihood (a full rice bowl — land and a fairer economy).",
      },
      {
        topic: "Mao's road to power",
        device: "Some Journeys Last Years, Brother: Shanghai → Jiangxi → Long March → Yan'an → Beijing",
        explanation: "1921 party founded in Shanghai; 1931–34 Jiangxi Soviet; 1934–35 Long March; 1937–47 Yan'an base; 1 October 1949 People's Republic proclaimed in Beijing.",
      },
    ],
    realWorld: [
      {
        title: "Sun Yat-sen in Singapore",
        detail: "Sun Yat-sen visited Singapore several times. The villa Wan Qing Yuan in Balestier became the Southeast Asian base of his revolutionary Tongmenghui from 1906; today it is the Sun Yat Sen Nanyang Memorial Hall.",
        emoji: "🏛️",
      },
      {
        title: "Guerrilla war in Malaya",
        detail: "Mao's guerrilla ideas spread across Asia. The Malayan Communist Party used guerrilla warfare against British rule during the Malayan Emergency (1948–60), a conflict that shaped the history of Singapore and Malaysia.",
        emoji: "🌴",
      },
      {
        title: "China and Taiwan",
        detail: "The Civil War's end in 1949 left two governments: the People's Republic in Beijing and the Republic of China on Taiwan. Their relationship remains one of the most sensitive questions in world politics today.",
        emoji: "🌏",
      },
      {
        title: "Spotting legends today",
        detail: "The Long March legend shows how governments build heroic national stories. Asking who made a claim, when and why is exactly the skill you need to judge viral posts and political adverts.",
        emoji: "📱",
      },
      {
        title: "How nations remember founders",
        detail: "Mao's portrait still hangs over Tiananmen Gate and appears on Chinese banknotes. How a country remembers a leader who brought both national unity and great suffering is debated in many nations.",
        emoji: "🖼️",
      },
    ],
    videos: [
      { title: "Communists, Nationalists and China's Revolutions", channel: "Crash Course World History", url: "https://www.youtube.com/results?search_query=crash+course+communists+nationalists+china%27s+revolutions" },
      { title: "The Long March explained", channel: "Simple History", url: "https://www.youtube.com/results?search_query=simple+history+long+march+china" },
      { title: "The Chinese Civil War", channel: "Kings and Generals", url: "https://www.youtube.com/results?search_query=kings+and+generals+chinese+civil+war" },
      { title: "Mao Zedong's rise to power", channel: "BBC Bitesize", url: "https://www.youtube.com/results?search_query=bbc+bitesize+mao+zedong+rise+to+power" },
    ],
    formulas: [
      { name: "1911–12", formula: "Qing dynasty overthrown; Republic of China declared (1 January 1912); Puyi abdicates.", note: "End of more than 2,000 years of emperors." },
      { name: "1916–28", formula: "Warlord era: regional generals with private armies hold real power." },
      { name: "4 May 1919", formula: "May Fourth Movement: protests against Versailles giving Shandong to Japan." },
      { name: "July 1921", formula: "Chinese Communist Party founded in Shanghai; Mao a delegate." },
      { name: "1924–27", formula: "First United Front between the GMD and CCP." },
      { name: "12 April 1927", formula: "Shanghai Massacre: Chiang Kai-shek turns on the communists." },
      { name: "1931–34", formula: "Jiangxi Soviet; Japan seizes Manchuria (September 1931)." },
      { name: "Oct 1934 – Oct 1935", formula: "Long March: about 86,000 set out, roughly 8,000 arrive; Zunyi Conference (January 1935).", note: "Official distance about 12,500 km; researchers estimate about 6,000 km for the main route." },
      { name: "7 July 1937", formula: "Full-scale Japanese invasion; Second United Front." },
      { name: "1946–49", formula: "Civil War between the Nationalists and the Communists." },
      { name: "1 October 1949", formula: "Mao proclaims the People's Republic of China; Chiang retreats to Taiwan." },
      { name: "1958–62", formula: "Great Leap Forward; famine 1959–61 (estimated 15–45 million deaths)." },
      { name: "1966–76", formula: "Cultural Revolution; Mao dies on 9 September 1976." },
    ],
  },
};
