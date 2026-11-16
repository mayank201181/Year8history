import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "womens-suffrage",
  title: "Votes for Women: Suffrage in Britain",
  strand: "Democracy",
  icon: "🗳️",
  summary:
    "In 1800 about 3 in 100 adults could vote — all men. By 1928 every adult could. Who changed that, and how?",
  intro:
    "Our Term 3 enquiry asks: **How and why has democracy developed?** Britain is often called the ‘mother of parliaments’, yet in 1800 only about **3% of adults** could vote — and not one of them was a woman. By **1928** every man and woman over 21 had the vote on equal terms.\n\nThis topic tracks that journey. First you will see how undemocratic Britain was, and how reformers — from the crowd at **Peterloo** to the **Chartists** — forced Parliament to widen the vote for men. Then you will meet the women who demanded the same: the patient **suffragists** of Millicent Fawcett's NUWSS and the militant **suffragettes** of Emmeline Pankhurst's WSPU. Finally you will weigh up why some women won the vote in **1918**, and how far the story from **1789 to 1928 and beyond** is one of change or continuity.\n\nAs you go, track three threads: **equality** (who counts as a full citizen?), **representation** (who gets a say in Parliament?) and **rights** (what protects people from those in power?). Keep asking a historian's question, too: was any of this *inevitable* — or did people have to fight for every step?",
  guide: [
    // ------------------------------------------------------------------ 1
    {
      id: "britain-becomes-democratic",
      heading: "How democratic was Britain in 1800?",
      discovery: {
        problem:
          "Here are two true facts about Britain before 1832.\n\n- **Old Sarum**, a grassy hill near Salisbury with almost nobody living on it, elected **two MPs**.\n- **Manchester**, a booming industrial town of well over 100,000 people, elected **none**.\n\nPredict: who do you think benefited from a system like this — and who would be angriest about it? What might the angry people do?",
        idea:
          "The system was built around **land and property**, not people. Wealthy landowners who controlled places like Old Sarum held power out of all proportion to their numbers, while the new industrial middle and working classes had almost no voice. Unrepresented people did exactly what you might predict: they **protested, petitioned and pressured** — and step by step, between 1832 and 1884, Parliament gave way. But notice who was still left out at the end of the story: **every single woman**.",
      },
      body:
        "In 1800 Britain had a Parliament, elections and a proud tradition of liberty — but it was **not a democracy**. Only around **3% of adults** could vote, and every one of them was a man.\n\n**Why the old system was unfair**\n- **Property rules:** in the counties, men owning land worth 40 shillings a year could vote; in towns (boroughs) the rules varied wildly.\n- **Rotten boroughs:** places with hardly any voters still sent MPs — Old Sarum had two.\n- **Pocket boroughs:** a landowner controlled the few voters, so the seat was ‘in his pocket’.\n- **No MPs for new towns:** **Manchester, Birmingham and Leeds** had no MPs of their own.\n- **Open voting:** there was **no secret ballot**. Voters declared their choice in public, so landlords and employers could watch — and bribery, ‘treating’ (free food and drink) and intimidation were common.\n\n**Pressure for change**\nOn **16 August 1819**, around **60,000 people** gathered peacefully at St Peter's Field, Manchester, to hear the radical Henry Hunt demand reform. Armed cavalry charged the crowd: around **15–18 people were killed** and hundreds injured. Newspapers called it **Peterloo**, mocking the victory at Waterloo. The government cracked down, but Peterloo became a rallying memory for reformers.\n\nAfter riots and a political crisis, the Whig government passed the **Great Reform Act (1832)**. It took MPs away from the worst rotten boroughs, gave seats to industrial towns and let middle-class men with property worth **£10 a year** vote. Yet only about **1 in 5 adult men** in England and Wales could now vote — and the Act said voters must be a **‘male person’**, the first law to shut women out in so many words.\n\nWorking men felt betrayed. The **Chartists** (1838–1850s) drew up the **People's Charter** with **six points**: votes for all men over 21; a secret ballot; no property qualification for MPs; payment of MPs; equal constituencies; annual elections. Parliament rejected their giant petitions (1839, 1842, 1848) and the movement faded — but five of the six points later became law.\n\n| Act | Who gained the vote | Roughly who could vote |\n|---|---|---|\n| 1832 Great Reform Act | Middle-class men | about 1 in 5 men |\n| 1867 Second Reform Act | Male householders in towns | about 1 in 3 men |\n| 1872 Secret Ballot Act | Voting becomes private | — |\n| 1884 Third Reform Act | Male householders in the countryside | about 6 in 10 men |\n\nBy **1884** around 60% of men could vote. The number of women who could vote for an MP? **Zero.**",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart of the approximate number of people who could vote in UK parliamentary elections: about 0.5 million before 1832, 0.8 million after 1832, 2.5 million after 1867, 5.7 million after 1884 (all men), 21.4 million after 1918 including about 8.4 million women, and about 28.9 million after 1928 with women a majority."><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><text x="240" y="16" font-size="13" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#1f2937">Who could vote? UK electorate, millions (approx.)</text><rect x="300" y="24" width="10" height="10" fill="#bae6fd" stroke="#334155" stroke-width="0.8"/><text x="314" y="33" font-size="11" font-family="sans-serif" fill="#1f2937">Men</text><rect x="350" y="24" width="10" height="10" fill="#fecaca" stroke="#334155" stroke-width="0.8"/><text x="364" y="33" font-size="11" font-family="sans-serif" fill="#1f2937">Women</text><line x1="50" y1="40" x2="466" y2="40" stroke="#cbd5e1" stroke-width="0.8"/><line x1="50" y1="116.7" x2="466" y2="116.7" stroke="#cbd5e1" stroke-width="0.8"/><line x1="50" y1="193.3" x2="466" y2="193.3" stroke="#cbd5e1" stroke-width="0.8"/><line x1="50" y1="270" x2="466" y2="270" stroke="#334155" stroke-width="1.5"/><line x1="50" y1="40" x2="50" y2="270" stroke="#334155" stroke-width="1.5"/><text x="44" y="274" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">0</text><text x="44" y="197" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">10</text><text x="44" y="120" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">20</text><text x="44" y="44" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">30</text><text x="16" y="155" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937" transform="rotate(-90 16 155)">Voters (millions)</text><rect x="70" y="266.2" width="50" height="3.8" fill="#bae6fd" stroke="#334155" stroke-width="0.8"/><rect x="138" y="263.9" width="50" height="6.1" fill="#bae6fd" stroke="#334155" stroke-width="0.8"/><rect x="206" y="250.8" width="50" height="19.2" fill="#bae6fd" stroke="#334155" stroke-width="0.8"/><rect x="274" y="226.3" width="50" height="43.7" fill="#bae6fd" stroke="#334155" stroke-width="0.8"/><rect x="342" y="170.3" width="50" height="99.7" fill="#bae6fd" stroke="#334155" stroke-width="0.8"/><rect x="342" y="105.9" width="50" height="64.4" fill="#fecaca" stroke="#334155" stroke-width="0.8"/><rect x="410" y="165" width="50" height="105" fill="#bae6fd" stroke="#334155" stroke-width="0.8"/><rect x="410" y="48.5" width="50" height="116.5" fill="#fecaca" stroke="#334155" stroke-width="0.8"/><text x="95" y="261" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">0.5m</text><text x="163" y="258" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">0.8m</text><text x="231" y="245" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">2.5m</text><text x="299" y="221" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">5.7m</text><text x="367" y="100" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#1f2937">21.4m</text><text x="435" y="43" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#1f2937">28.9m</text><text x="367" y="142" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">8.4m</text><text x="435" y="110" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">~15m</text><text x="95" y="286" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Before 1832</text><text x="163" y="286" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">1832</text><text x="231" y="286" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">1867</text><text x="299" y="286" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">1884</text><text x="367" y="286" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">1918</text><text x="435" y="286" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">1928</text><text x="95" y="301" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">~3% of adults</text><text x="163" y="301" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">+ middle class</text><text x="231" y="301" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">+ town men</text><text x="299" y="301" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">+ rural men</text><text x="367" y="301" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">+ women 30+</text><text x="435" y="301" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">equal at 21</text></svg>`,
      diagramCaption:
        "Approximate UK electorates after each reform (historians' estimates vary slightly). Notice the two giant leaps both come in 1918–28 — and they are the leaps that included women.",
      workedExamples: [
        {
          title: "A modelled ‘how far’ answer",
          problem: "‘The Great Reform Act of 1832 made Britain a democracy.’ How far do you agree? (8 marks)",
          steps: [
            "**Plan.** Define democracy first (government chosen by all adult citizens, in free and fair elections). Then one paragraph for the statement, one against, and a judgement that uses the definition.",
            "**PEEL — agree (some change).** *Point:* 1832 did change the system. *Evidence:* it removed MPs from the worst rotten boroughs such as Old Sarum, gave seats to industrial towns like Manchester and let middle-class men with £10 property vote, raising the electorate from roughly 0.5 to 0.8 million. *Explain:* this broke the idea that the system could never change. *Link:* so 1832 was a real step towards democracy.",
            "**PEEL — disagree (more continuity).** *Point:* however, Britain was still far from a democracy. *Evidence:* only about 1 in 5 men in England and Wales could vote, there was no secret ballot until 1872, and the Act said voters must be a ‘male person’, shutting out all women. *Explain:* the working class, who had protested at Peterloo, gained nothing — which is why the Chartists demanded votes for all men in 1838. *Link:* power stayed with men of property.",
            "**Judgement.** I largely disagree. Measured against my definition, 1832 was a *beginning*, not an arrival: it changed how seats were shared out, but the big question — who counts as a citizen — had hardly moved for men and had gone backwards for women.",
          ],
          answer:
            "1832 was an important first step (rotten boroughs gone, new towns represented) but not democracy: about 80% of men and all women still had no vote.",
          yourTurn: {
            question: "In which year did the Peterloo Massacre take place in Manchester?",
            answer: { type: "number", value: 1819 },
            solution: "Peterloo happened on 16 August 1819, at a peaceful reform meeting on St Peter's Field — four years after Waterloo.",
          },
        },
      ],
      keyPoints: [
        "Before 1832 only about 3% of adults could vote; voting was based on property, and it was done in public.",
        "Rotten and pocket boroughs gave tiny places MPs while big industrial towns had none.",
        "Peterloo (1819) showed both the demand for reform and the state's willingness to crush it.",
        "The 1832, 1867 and 1884 Reform Acts widened the vote step by step — to about 60% of men by 1884.",
        "The Chartists' six points (1838) lost at the time but mostly became law later.",
        "Every reform before 1918 left out all women; 1832 even wrote ‘male person’ into the law.",
      ],
      whyItWorks:
        "Why did Parliament give way at all? The men in power had not suddenly become democrats. Each reform came when **pressure from outside** (Peterloo, the 1831 riots, Chartist petitions, mass meetings in the 1860s) met **calculation inside**: politicians feared revolution of the kind seen in France, and parties hoped newly enfranchised voters would back them. That pattern — pressure plus political advantage — is the key to explaining *every* later extension of the vote, including 1918. It also explains why women were left out so long: until the 1900s they were not seen as a threat, and no party was sure they would vote for it.",
      strategies: ["Spot change and continuity", "Think about who benefited", "Use precise evidence"],
      thinkDeeper:
        "The Chartists lost every petition, yet five of their six points became law. Can a movement that ‘failed’ in its own lifetime be called a success? What would you need to show to prove it caused the later changes?",
    },
    // ------------------------------------------------------------------ 2
    {
      id: "women-in-victorian-britain",
      heading: "Women's lives and rights in Victorian Britain",
      discovery: {
        problem:
          "**Odd one out.** In 1875 an unmarried woman who paid local rates in an English town could legally do three of these four things. Which one could she *not* do?\n\n- Vote for the members of her local school board\n- Stand for election to a school board herself\n- Vote in her town council elections\n- Vote for her town's Member of Parliament\n\nNow the real puzzle: why would a society let women help run its schools and towns, but not choose the national Parliament?",
        idea:
          "She could not vote for an MP. Victorians drew a line based on the idea of **‘separate spheres’**: local matters such as schools, health and help for the poor looked like an extension of women's ‘natural’ caring role in the home, while national politics — war, empire, taxes, trade — was seen as the **men's sphere**. The trouble for opponents was that every year women proved, in local government, education and work, that they could handle public life. The line began to look less like nature and more like **prejudice**.",
      },
      body:
        "Victorian Britain was shaped by the idea of **separate spheres**: men belonged in the **public sphere** (work, business, politics), women in the **private sphere** (home, children, caring). The ideal woman was the gentle ‘Angel in the House’ — the title of a popular poem by Coventry Patmore (1854). Middle-class families held this ideal most strongly; working-class women rarely had the choice to stay at home.\n\n**The law: married women's rights**\nUnder **coverture**, a married woman's legal identity was absorbed into her husband's. Her property and earnings became his, she could not easily make contracts, and children legally belonged to the father. Divorce was unequal too: after 1857 a husband could divorce his wife for adultery alone, but a wife had to prove adultery *plus* another wrong such as cruelty.\n\nChange came slowly, often after campaigns by women such as **Caroline Norton**:\n- **Married Women's Property Act 1870** — wives could keep their own earnings.\n- **Married Women's Property Act 1882** — wives could keep all their property.\n\n**Education**\n- The **1870 Education Act** set up schools for all children, girls included.\n- Women's colleges opened, such as **Girton College, Cambridge (1869)**. The University of London awarded degrees to women from **1878**; Oxford only from **1920** and Cambridge not until **1948**.\n- **Elizabeth Garrett Anderson** qualified as Britain's first woman doctor in **1865** — by using a loophole the authorities then closed.\n\n**Work**\n| Job | Who did it |\n|---|---|\n| Domestic service | the largest employer of women — well over a million servants |\n| Textile mills and factories | working-class women and girls, on lower pay than men |\n| Teaching and nursing | growing ‘respectable’ careers; Florence Nightingale's nursing school opened in 1860 |\n| Offices and shops | typists, clerks and shop assistants, increasingly from the 1880s |\n\n**Local politics — a foot in the door**\n- **1869:** single women ratepayers could vote in town council elections.\n- **1870:** women could vote for, and be elected to, the new **school boards**.\n- **1894:** women could sit on parish and district councils; from **1907** on county and borough councils. Garrett Anderson became England's first woman mayor (Aldeburgh, **1908**).\n\nBy 1900, then, women were better educated, earning, paying taxes and running parts of local government. That made one exclusion look harder and harder to defend: the parliamentary vote.",
      workedExamples: [
        {
          title: "A modelled ‘explain why’ answer",
          problem: "Explain why the position of women in Britain had changed by 1900. (6 marks)",
          steps: [
            "**Plan.** Pick two or three *causes* of change (law, education, work, local politics) and for each explain *why* it changed women's position — not just describe it.",
            "**PEEL 1 — the law.** One reason was changes in the law. The Married Women's Property Acts of 1870 and 1882 let wives keep their earnings and then all their property, ending the worst of coverture. This mattered because economic independence gave women more control over their own lives and more confidence to demand other rights.",
            "**PEEL 2 — education and work.** Another reason was the growth of education and new jobs. After the 1870 Education Act all girls could go to school, colleges like Girton (1869) opened and women such as Elizabeth Garrett Anderson entered medicine. Educated, working women undermined the claim that women belonged only in the private sphere.",
            "**PEEL 3 — local government.** A third reason was women's role in local politics. From 1869 some women voted in town elections and from 1870 they sat on school boards. This showed in practice that women could take part in public decisions sensibly.",
            "**Link and limit.** These changes reinforced each other — education led to work, work to tax-paying, tax-paying to local votes. But change was limited: most women were still poorly paid and none could vote for Parliament.",
          ],
          answer:
            "Women's position changed because of new property laws, wider education and work, and a role in local government — though the national vote was still denied.",
          yourTurn: {
            question:
              "What was the name of the legal idea that a married woman's legal identity was absorbed into her husband's?",
            answer: { type: "text", accept: ["coverture", "couverture", "the doctrine of coverture", "doctrine of coverture"], display: "Coverture" },
            solution: "Under coverture a wife's property and earnings belonged to her husband — weakened by the Married Women's Property Acts of 1870 and 1882.",
          },
        },
      ],
      keyPoints: [
        "‘Separate spheres’: men in public life, women in the home — an ideal strongest among the middle classes.",
        "Coverture meant a wife's property and earnings belonged to her husband until the 1870 and 1882 Acts.",
        "Education widened: the 1870 Education Act, women's colleges, London degrees for women from 1878.",
        "Working-class women had always worked — above all in domestic service and textiles, for low pay.",
        "From 1869–70 some women could vote in local elections and sit on school boards.",
      ],
      whyItWorks:
        "Why does this section matter for the vote? Because the **arguments against** women voting rested on claims about what women *were* — unfit for public life, ignorant of money, dependent on men. Every change in law, education, work and local government chipped away at those claims with **evidence**. Historians call these **long-term causes**: they did not win the vote on their own, but they made the case for it steadily stronger, so that when a short-term opportunity came (the First World War), the arguments had already been half-won.",
      strategies: ["Long-term vs short-term causes", "Ask “how typical?”", "Spot change and continuity"],
      thinkDeeper:
        "Separate spheres was mainly a middle-class ideal. How would the life of a Lancashire mill girl in 1880 challenge the idea that ‘women's place is in the home’ — and why might her experience *not* count for much with MPs?",
    },
    // ------------------------------------------------------------------ 3
    {
      id: "suffragists",
      heading: "The suffragists: NUWSS",
      discovery: {
        problem:
          "In **1867**, the MP **John Stuart Mill** proposed changing the word ‘man’ to ‘person’ in the Second Reform Bill — which would have given some women the vote. MPs voted it down by **196 votes to 73**.\n\nWomen did not get the vote for another **51 years**. Imagine you are a suffrage campaigner in 1867. Is 73 votes a crushing defeat or a promising start? What would you do next — and how long would you keep going?",
        idea:
          "Both readings are reasonable. **73 MPs** backing a brand-new idea was a genuine start; the campaigners' task was to turn a minority into a majority. That is exactly what the suffragists did — through petitions, meetings and persuasion over decades. By the 1900s, bills for women's suffrage sometimes **won a majority of MPs** at their second reading but then ran out of time, because **governments would not give them support**. The suffragists' problem was not only changing minds; it was the **party politics** of who controlled Parliament's timetable.",
      },
      body:
        "**Suffragists** campaigned for votes for women by **peaceful, legal** methods. The word comes from *suffrage*, meaning the right to vote.\n\n**Early campaigns**\n- In **1866** a petition signed by about **1,500 women** was presented to Parliament by **John Stuart Mill**, MP and philosopher.\n- In **1867** Mill's amendment to the Reform Bill was defeated by 196 to 73.\n- Local suffrage societies sprang up — in Manchester, led by **Lydia Becker**, and in London, Bristol and Edinburgh. Bills were introduced almost every year from the 1870s, and all failed.\n\n**The NUWSS (1897)**\nIn **1897** many local societies joined together as the **National Union of Women's Suffrage Societies (NUWSS)**. Its leading figure was **Millicent Garrett Fawcett** (1847–1929), sister of Elizabeth Garrett Anderson and its president from 1907. She believed women would win by proving they were **responsible citizens** — so the campaign must stay law-abiding.\n\n**Methods**\n- **Petitions** and public **meetings**; leaflets and a newspaper, *The Common Cause* (1909).\n- **Lobbying MPs** and campaigning at elections for candidates who supported women's votes.\n- **Marches:** the ‘Mud March’ through rain-soaked London (**1907**) and the **Great Pilgrimage (1913)**, when women walked from all over Britain to a rally of about 50,000 people in Hyde Park.\n- From **1912**, the **Election Fighting Fund** backed **Labour** candidates, the only party officially in favour of votes for women.\n\n**Strengths and weaknesses**\n| Strengths | Weaknesses |\n|---|---|\n| Huge: over 50,000 members in hundreds of branches by 1914 | Easy for the government to ignore |\n| Respectable — hard to dismiss as ‘hysterical’ | Little press coverage compared with the suffragettes |\n| Democratic and nationwide, with many working-class members in the north | Mostly demanded votes on the *same terms as men*, which would have helped wealthier women most |\n\n**Slow progress**\nThe biggest obstacle was **politics**. **Herbert Asquith**, Liberal Prime Minister from 1908 to 1916, opposed votes for women. The **Conciliation Bills** of 1910–12, which would have given votes to a limited number of propertied women, all collapsed. Other crises — the House of Lords, Irish Home Rule, strikes — kept pushing the issue down the agenda.\n\nBy 1914 the suffragists had won the *argument* with many MPs and much of the public, but not the *vote*.",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Vertical timeline drawn to scale from 1866 to 1928. Peaceful campaigning runs from 1866 to 1914; militancy from 1905 to 1914; war from 1914 to 1918; partial votes for women from 1918 to 1928. Events: 1866 Mill's petition, 1869 local votes for single women ratepayers, 1884 Third Reform Act with no women, 1897 NUWSS formed, 1903 WSPU formed, 1909 first hunger strike, 1910 Black Friday, 1913 Cat and Mouse Act and Davison's death, 1914 campaigns suspended, 1918 women over 30 vote, 1928 equal votes at 21."><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><rect x="76" y="20" width="8" height="216.8" fill="#bbf7d0" stroke="#334155" stroke-width="0.6"/><rect x="64" y="196.1" width="8" height="40.7" fill="#fecaca" stroke="#334155" stroke-width="0.6"/><rect x="76" y="236.8" width="8" height="18.1" fill="#fde68a" stroke="#334155" stroke-width="0.6"/><rect x="76" y="254.9" width="8" height="45.1" fill="#bae6fd" stroke="#334155" stroke-width="0.6"/><text x="70" y="100" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">Peaceful</text><text x="70" y="113" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">campaigning</text><text x="60" y="220" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">Militancy</text><text x="72" y="251" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">War</text><text x="72" y="276" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">Partial</text><text x="72" y="289" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">vote</text><line x1="90" y1="20" x2="90" y2="300" stroke="#334155" stroke-width="2"/><g stroke="#334155" stroke-width="1"><line x1="86" y1="20" x2="94" y2="20"/><line x1="86" y1="33.5" x2="94" y2="33.5"/><line x1="86" y1="101.3" x2="94" y2="101.3"/><line x1="86" y1="160" x2="94" y2="160"/><line x1="86" y1="187.1" x2="94" y2="187.1"/><line x1="86" y1="214.2" x2="94" y2="214.2"/><line x1="86" y1="218.7" x2="94" y2="218.7"/><line x1="86" y1="232.3" x2="94" y2="232.3"/><line x1="86" y1="236.8" x2="94" y2="236.8"/><line x1="86" y1="254.9" x2="94" y2="254.9"/><line x1="86" y1="300" x2="94" y2="300"/><line x1="94" y1="20" x2="110" y2="20"/><line x1="94" y1="33.5" x2="110" y2="34"/><line x1="94" y1="101.3" x2="110" y2="101"/><line x1="94" y1="160" x2="110" y2="160"/><line x1="94" y1="187.1" x2="110" y2="178"/><line x1="94" y1="214.2" x2="110" y2="194"/><line x1="94" y1="218.7" x2="110" y2="208"/><line x1="94" y1="232.3" x2="110" y2="222"/><line x1="94" y1="236.8" x2="110" y2="236"/><line x1="94" y1="254.9" x2="110" y2="254"/><line x1="94" y1="300" x2="110" y2="300"/></g><g font-size="11" font-family="sans-serif" fill="#1f2937"><text x="114" y="24">1866 — Mill presents a women's petition (about 1,500 names)</text><text x="114" y="38">1869 — single women ratepayers vote in local elections</text><text x="114" y="105">1884 — Third Reform Act: about 60% of men vote; no women</text><text x="114" y="164">1897 — NUWSS formed: the suffragists</text><text x="114" y="182">1903 — WSPU formed by Emmeline Pankhurst</text><text x="114" y="198">1909 — first hunger strike; force-feeding begins</text><text x="114" y="212">1910 — Black Friday (18 November)</text><text x="114" y="226">1913 — Cat and Mouse Act; Davison dies; Great Pilgrimage</text><text x="114" y="240">1914 — war: both groups suspend their campaigns</text><text x="114" y="258" font-weight="bold">1918 — women over 30 who meet property rules can vote</text><text x="114" y="304" font-weight="bold">1928 — Equal Franchise Act: women vote at 21, like men</text></g><text x="4" y="316" font-size="11" font-family="sans-serif" fill="#334155">Years drawn to scale</text></svg>`,
      diagramCaption:
        "The campaign from 1866 to 1928, with years drawn to scale. See how long the peaceful phase lasted (almost 40 years) compared with the militant phase (about 9 years).",
      workedExamples: [
        {
          title: "A modelled ‘explain why’ answer",
          problem: "Explain why the suffragists had not won the vote for women by 1914. (6 marks)",
          steps: [
            "**Plan.** Avoid only blaming the suffragists' methods. Look for reasons in the *government*, in *party politics* and in *events*, then link them.",
            "**PEEL 1 — government opposition.** The main reason was opposition at the top. Asquith, Liberal Prime Minister from 1908, was personally against votes for women, and without government support even bills that won a majority of MPs at second reading ran out of time. Persuasion could not succeed while the man controlling Parliament's timetable said no.",
            "**PEEL 2 — party calculation.** Another reason was party politics. Most suffragists asked for votes on the same terms as men, which meant property-owning women. Many Liberals feared these women would vote Conservative, while many Conservatives feared it would open the door to votes for everyone. So the Conciliation Bills of 1910–12 collapsed.",
            "**PEEL 3 — methods and competition.** Finally, peaceful methods were easy to ignore. Petitions and the 1913 Great Pilgrimage showed huge support, but newspapers gave far more attention to suffragette militancy — which also gave opponents an excuse to say women were unfit to vote.",
            "**Judgement.** The suffragists' methods were not the main problem: they had built a mass movement of over 50,000 members. The decisive barrier was political — a hostile Prime Minister and parties calculating their own advantage.",
          ],
          answer:
            "Mainly political barriers (Asquith, party calculations, a crowded agenda) rather than weak suffragist methods — though peaceful tactics were easy to ignore.",
          yourTurn: {
            question: "Who led the NUWSS (the suffragists)? Give her surname.",
            answer: { type: "text", accept: ["Fawcett", "Millicent Fawcett", "Millicent Garrett Fawcett", "Mrs Fawcett", "Garrett Fawcett", "Dame Millicent Fawcett"], display: "Fawcett (Millicent Garrett Fawcett)" },
            solution: "Millicent Garrett Fawcett led the NUWSS, formed in 1897, and was its president from 1907.",
          },
        },
      ],
      keyPoints: [
        "Suffragists used peaceful, legal methods: petitions, meetings, lobbying, marches.",
        "1866: a petition of about 1,500 women presented by John Stuart Mill; 1867: his amendment lost 196–73.",
        "The NUWSS was formed in 1897; Millicent Garrett Fawcett was its leading figure.",
        "By 1914 it was the largest suffrage group, with over 50,000 members — far bigger than the WSPU.",
        "Progress was slow mainly because of political opposition, especially from Asquith (PM 1908–16).",
      ],
      whyItWorks:
        "Why might a slow, peaceful strategy make sense? Fawcett's logic was that the strongest argument *against* women voting was that they were irrational or unfit for politics. A huge, orderly, law-abiding movement **disproved that argument by its very existence**. It also built alliances with MPs and with the Labour Party that would still be there when the political moment came. The weakness was time: persuasion works at the speed of the slowest decision-maker — and in 1908–1914 that was a Prime Minister who would not budge.",
      strategies: ["Weigh factors", "Think about who benefited", "Avoid hindsight"],
      thinkDeeper:
        "Most suffragists asked for the vote ‘on the same terms as men’ — which in practice meant votes mainly for women with property. Was that a clever tactic, an unfair compromise, or both?",
    },
    // ------------------------------------------------------------------ 4
    {
      id: "suffragettes",
      heading: "The suffragettes: WSPU",
      discovery: {
        problem:
          "**Source A** — Emmeline Pankhurst, speaking in February 1912, shortly before suffragettes smashed hundreds of shop windows in London's West End.\n\n> The argument of the broken pane of glass is the most valuable argument in modern politics.\n\nWhat was she trying to achieve with this kind of ‘argument’? Make a list of people it might **persuade** and people it might **put off**. On balance, would you have joined her?",
        idea:
          "Pankhurst believed polite requests had been ignored for 40 years; only **disruption** forced newspapers to report the cause and the government to respond. Militancy certainly made votes for women **impossible to ignore** and inspired fierce loyalty. But it also **alienated** some MPs and members of the public, and handed opponents a ready-made argument: ‘women who break windows are not fit to vote.’ Historians still disagree about which effect was bigger — that is the debate this section prepares you for.",
      },
      body:
        "In **October 1903**, frustrated by decades of slow progress, **Emmeline Pankhurst** founded the **Women's Social and Political Union (WSPU)** in Manchester, with her daughters **Christabel** (its chief strategist), **Sylvia** and **Adela**. Its motto was **‘Deeds not words’**. In 1906 the *Daily Mail* mocked its members as **‘suffragettes’** — and they proudly adopted the name.\n\n**How militancy escalated**\n| Years | Tactics |\n|---|---|\n| 1905–08 | Heckling politicians; in 1905 Christabel and **Annie Kenney**, an Oldham mill worker, were arrested at a Liberal meeting and chose prison for publicity; huge rallies such as Hyde Park in 1908 |\n| 1908–11 | Window-smashing begins; chaining to railings; mass marches on Parliament |\n| 1912–14 | Mass window-smashing (March 1912); **arson and bombs** on empty buildings, postboxes and churches; a house being built for Lloyd George was bombed (1913); a painting in the National Gallery slashed (1914) |\n\nLeaders said they targeted **property, not people**, though arson and bombs could still have killed.\n\n**The government's response**\n- **Prison:** hundreds of suffragettes were jailed. From **1909**, many went on **hunger strike**, beginning with Marion Wallace Dunlop.\n- **Force-feeding:** prisoners were held down and fed through tubes — painful, dangerous and widely condemned.\n- **Black Friday (18 November 1910):** about 300 women marching on Parliament were violently and indecently treated by police and bystanders for hours.\n- **The ‘Cat and Mouse Act’ (1913):** hunger strikers were released when weak, then re-arrested once they recovered — like a cat playing with a mouse.\n\n**Emily Wilding Davison**\nOn **4 June 1913**, at the **Epsom Derby**, Davison stepped onto the track in front of the King's horse and died of her injuries four days later. She was carrying a return ticket, and historians still **debate whether she meant to die** or was trying to attach suffragette colours to the horse. Thousands lined the streets for her funeral.\n\n**Not just the Pankhursts**\n- Many suffragettes were **working-class**, like Annie Kenney. **Sylvia Pankhurst** built a working women's movement in the East End and was expelled from the WSPU in 1914.\n- **Sophia Duleep Singh**, daughter of the last Maharaja of the Sikh Empire and a goddaughter of Queen Victoria, marched on Black Friday and sold *The Suffragette* outside Hampton Court Palace.\n- Some members disliked the Pankhursts' tight control and left in **1907** to form the **Women's Freedom League**, which broke laws without violence (refusing to pay taxes, boycotting the 1911 census).\n\n**Did militancy help?** Historians disagree. **Martin Pugh** argues militancy hardened opposition and the NUWSS mattered more; **June Purvis** argues the WSPU put votes for women at the centre of national politics.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison grid of suffragists and suffragettes. Suffragists, the NUWSS, founded 1897 and led by Millicent Fawcett, used lawful persuasion such as petitions, meetings, lobbying and marches, had over 50,000 members by 1914, were run by elected committees, used red, white and green, and in 1914 paused to do relief and war work. Suffragettes, the WSPU, founded 1903 by Emmeline Pankhurst, used the motto Deeds not words and tactics such as heckling, window-smashing, arson and hunger strikes, were much smaller, were tightly controlled by the Pankhursts, used purple, white and green, and in 1914 stopped militancy and backed the war effort."><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><rect x="4" y="4" width="108" height="30" fill="#fde68a"/><rect x="112" y="4" width="184" height="30" fill="#bbf7d0"/><rect x="296" y="4" width="180" height="30" fill="#c7d2fe"/><rect x="4" y="4" width="472" height="289" fill="none" stroke="#334155" stroke-width="1.2"/><g stroke="#334155" stroke-width="0.8"><line x1="112" y1="4" x2="112" y2="293"/><line x1="296" y1="4" x2="296" y2="293"/><line x1="4" y1="34" x2="476" y2="34"/><line x1="4" y1="71" x2="476" y2="71"/><line x1="4" y1="108" x2="476" y2="108"/><line x1="4" y1="145" x2="476" y2="145"/><line x1="4" y1="182" x2="476" y2="182"/><line x1="4" y1="219" x2="476" y2="219"/><line x1="4" y1="256" x2="476" y2="256"/></g><g font-family="sans-serif" fill="#1f2937"><text x="204" y="24" font-size="13" font-weight="bold" text-anchor="middle">Suffragists (NUWSS)</text><text x="386" y="24" font-size="13" font-weight="bold" text-anchor="middle">Suffragettes (WSPU)</text><g font-size="11" font-weight="bold"><text x="10" y="57">Founded</text><text x="10" y="94">Motto / aim</text><text x="10" y="131">Methods</text><text x="10" y="168">Size by 1914</text><text x="10" y="205">Run by</text><text x="10" y="242">Colours</text><text x="10" y="279">In 1914</text></g><g font-size="11"><text x="118" y="57">1897 · Millicent Fawcett</text><text x="302" y="57">1903 · Emmeline Pankhurst</text><text x="118" y="94">Win by lawful persuasion</text><text x="302" y="94">‘Deeds not words’</text><text x="118" y="124">Petitions, meetings,</text><text x="118" y="138">lobbying MPs, marches</text><text x="302" y="124">Heckling, window-smashing,</text><text x="302" y="138">arson, hunger strikes</text><text x="118" y="161">50,000+ members in</text><text x="118" y="175">hundreds of branches</text><text x="302" y="161">Much smaller; exact</text><text x="302" y="175">numbers uncertain</text><text x="118" y="198">Elected committees</text><text x="118" y="212">(democratic)</text><text x="302" y="198">The Pankhursts</text><text x="302" y="212">(tightly controlled)</text><text x="118" y="242">Red, white and green</text><text x="302" y="242">Purple, white and green</text><text x="118" y="272">Paused campaign; relief</text><text x="118" y="286">and war work</text><text x="302" y="272">Stopped militancy;</text><text x="302" y="286">backed the war effort</text></g></g></svg>`,
      diagramCaption:
        "Suffragists and suffragettes compared. Same goal — votes for women — but very different ideas about how to win it. (The suffragettes kept no reliable membership figures.)",
      workedExamples: [
        {
          title: "A modelled ‘explain why’ answer",
          problem: "Explain why the suffragettes turned to militant methods. (6 marks)",
          steps: [
            "**Plan.** Three causes: frustration with failure (long-term), the need for publicity (purpose), and the government's reaction, which made militancy escalate (a chain). Link them in the judgement.",
            "**PEEL 1 — frustration.** One reason was frustration at decades of failure. Petitions had been sent since 1866 and bills had failed almost every year, so Emmeline Pankhurst concluded in 1903 that ‘words’ had not worked and the WSPU needed ‘deeds’.",
            "**PEEL 2 — publicity.** Another reason was publicity. When Christabel Pankhurst and Annie Kenney were arrested in 1905 and chose prison, newspapers covered the story nationwide. Militancy put votes for women on the front pages in a way polite meetings had not.",
            "**PEEL 3 — escalation.** A third reason was the government's response. Force-feeding hunger strikers from 1909, the brutal treatment of marchers on Black Friday in 1910 and the failure of the Conciliation Bills convinced many suffragettes that only greater pressure would work — so tactics escalated to mass window-smashing in 1912 and arson in 1913–14.",
            "**Judgement.** Frustration explains why militancy *began*, but the cycle of government refusal and harsher repression best explains why it *escalated* so far.",
          ],
          answer:
            "Frustration started militancy; the need for publicity shaped it; a cycle of government refusal and repression made it escalate.",
          yourTurn: {
            question: "What nickname was given to the 1913 Prisoners (Temporary Discharge for Ill-Health) Act?",
            answer: { type: "text", accept: ["Cat and Mouse Act", "the Cat and Mouse Act", "Cat and Mouse", "Cat & Mouse Act", "Cat & Mouse", "Cat and Mouse Bill"], display: "The ‘Cat and Mouse Act’" },
            solution: "Hunger strikers were released when weak and re-arrested when they recovered — like a cat toying with a mouse.",
          },
        },
      ],
      keyPoints: [
        "The WSPU was founded in 1903 by Emmeline Pankhurst; motto ‘Deeds not words’.",
        "Tactics escalated from heckling (1905) to window-smashing (1912) and arson (1913–14).",
        "The state responded with prison, force-feeding, Black Friday (1910) and the Cat and Mouse Act (1913).",
        "Emily Wilding Davison died after the 1913 Derby; her intentions are still debated.",
        "Suffragettes included working-class women and Sophia Duleep Singh; the movement was not only the Pankhursts.",
        "Historians disagree on whether militancy helped or harmed the cause.",
      ],
      whyItWorks:
        "Why did militancy spread despite the risks? Because each side's actions **provoked** the other: refusal led to protest, protest to prison, prison to hunger strikes, hunger strikes to force-feeding — and force-feeding generated public sympathy and anger that fuelled more protest. Understanding this **chain of cause and consequence** is far more powerful than labelling suffragettes simply ‘brave’ or ‘violent’. It also explains the debate: the same escalation that won publicity also hardened opponents, so historians can look at identical evidence and disagree about its overall effect.",
      strategies: ["Link the causes", "Consider the counter-argument", "Compare and contrast"],
      thinkDeeper:
        "Emmeline Pankhurst called militancy a fight for justice; the government called it crime. Can an action be both? How might your answer depend on whether people have any *peaceful* way to change the law?",
    },
    // ------------------------------------------------------------------ 5
    {
      id: "arguments-for-and-against",
      heading: "Arguments for and against votes for women",
      discovery: {
        problem:
          "**Source B** — from a private letter written by **Queen Victoria** in 1870 (extract).\n\n> The Queen is most anxious to enlist every one who can speak or write to join in checking this mad, wicked folly of ‘Woman's Rights’, with all its attendant horrors…\n\nThe most powerful woman in the British Empire opposed votes for women. What does that tell you about **who** the opponents were? Predict two arguments she — or a woman of her class — might have used.",
        idea:
          "Opposition was **not simply men versus women**. Many women, especially wealthy ones, believed sincerely in **separate spheres**: that women had a different, equally important role, and that politics would coarsen them. In 1908 the **Women's National Anti-Suffrage League** was founded, led by the novelist **Mary Augusta Ward**; the explorer Gertrude Bell was among its leading members. To understand the period you have to take the opponents' arguments seriously — even where they rested on prejudice — and then see why they collapsed.",
      },
      body:
        "By 1900 the debate about votes for women was fierce, and both sides published leaflets, posters and postcards. Here are the main arguments.\n\n| Arguments FOR | Arguments AGAINST |\n|---|---|\n| **Equality and justice:** women are citizens and must obey the law, so they should help make it | **Separate spheres:** women's role is the home; politics is men's business |\n| **Taxation:** many women paid taxes — ‘no taxation without representation’ | **‘Too emotional’:** women were said to be irrational — a prejudice of the time, not evidence |\n| **Experience:** women already served on school boards and councils | **War:** voters decide on war, and women did not fight |\n| **The absurdity test:** an educated woman doctor could not vote, but an uneducated man could | **Most women don't want it:** anti-suffragists organised petitions to show it |\n| **Women's issues:** child welfare, health, drink and working conditions needed women's voices | **Militancy proved it:** after 1905 opponents pointed to broken windows as proof women were unfit |\n| **Other countries:** **New Zealand (1893)**, **Australia (1902)** and **Finland (1906)** gave women the vote — and the sky did not fall | **The thin end of the wedge:** next would come women MPs, and men would lose control |\n\n**The anti-suffragists**\nOpponents included leading politicians such as **Lord Curzon** and **Lord Cromer** — and many women. In **1889**, 104 prominent women signed ‘An Appeal Against Female Suffrage’, and in **1908** the **Women's National Anti-Suffrage League** was founded with **Mary Augusta Ward** as a leader. In 1910 it merged with the men's league.\n\n**The hidden argument: party advantage**\nBehind the public arguments lay private calculations:\n- **Liberals** feared that giving votes to women *with property* (the usual suffragist demand) would mainly help the **Conservatives**.\n- Many **Conservatives** feared that any change would lead to votes for *all* adults, helping Labour.\n- **Labour** wanted votes for all adults, not just women with property.\n- The **Irish Nationalists** did not want the issue to distract from Home Rule.\n\nSo even MPs who agreed *in principle* might vote against a particular bill. The argument was being won; the arithmetic of party politics kept getting in the way.",
      diagram: `<svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline drawn to scale from 1890 to 1930 showing when women won the national vote: New Zealand 1893, Australia 1902, Finland 1906, Norway 1913, the UK for women over 30 in 1918, the USA in 1920 and the UK on equal terms in 1928. A note explains that Australia excluded most Aboriginal people and that many Black women in the USA were blocked from voting until the 1960s."><rect x="0" y="0" width="480" height="220" fill="#ffffff"/><text x="240" y="20" font-size="13" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#1f2937">Women's national vote: Britain was not first</text><line x1="40" y1="130" x2="440" y2="130" stroke="#334155" stroke-width="2"/><g stroke="#334155" stroke-width="1"><line x1="40" y1="125" x2="40" y2="135"/><line x1="440" y1="125" x2="440" y2="135"/><line x1="70" y1="130" x2="70" y2="56"/><line x1="200" y1="130" x2="200" y2="101"/><line x1="320" y1="130" x2="320" y2="56"/><line x1="420" y1="130" x2="420" y2="101"/><line x1="160" y1="130" x2="160" y2="152"/><line x1="270" y1="130" x2="270" y2="152"/><line x1="340" y1="130" x2="340" y2="152"/></g><g stroke="#334155" stroke-width="1"><circle cx="70" cy="130" r="4" fill="#bae6fd"/><circle cx="160" cy="130" r="4" fill="#bae6fd"/><circle cx="200" cy="130" r="4" fill="#bae6fd"/><circle cx="270" cy="130" r="4" fill="#bae6fd"/><circle cx="320" cy="130" r="5" fill="#fecaca"/><circle cx="340" cy="130" r="4" fill="#bae6fd"/><circle cx="420" cy="130" r="5" fill="#fecaca"/></g><g font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="40" y="148">1890</text><text x="440" y="148">1930</text><text x="70" y="50">1893 New Zealand</text><text x="200" y="95">1906 Finland</text><text x="320" y="50" font-weight="bold">1918 UK (women 30+)</text><text x="420" y="95" font-weight="bold">1928 UK (equal)</text><text x="160" y="166">1902 Australia*</text><text x="270" y="166">1913 Norway</text><text x="340" y="182">1920 USA*</text></g><g font-size="11" font-family="sans-serif" fill="#334155"><text x="20" y="200">* Not for everyone: Australia's 1902 law excluded most Aboriginal people;</text><text x="28" y="214">in the USA many Black women were blocked from voting until the 1960s.</text></g></svg>`,
      diagramCaption:
        "When women won the national vote in some early countries (years to scale). Suffragists used these examples to argue that votes for women were normal, not dangerous.",
      workedExamples: [
        {
          title: "A modelled ‘explain why’ answer",
          problem: "Explain why some people, including many women, opposed votes for women before 1914. (6 marks)",
          steps: [
            "**Plan.** Show you understand opponents' *reasons* in their own terms (without agreeing): beliefs about women's role, fears about consequences, and political self-interest.",
            "**PEEL 1 — separate spheres.** Many opponents believed in separate spheres. They argued women's natural role was in the home and that politics, war and empire were men's business. This explains why even women such as Mary Augusta Ward, who led the Women's National Anti-Suffrage League from 1908, opposed the vote: they thought women had a different but equally valuable role.",
            "**PEEL 2 — fear of the consequences.** Others feared what would follow. Because voters chose governments that went to war, and women did not fight, some argued women should not decide on war. Others saw the vote as ‘the thin end of the wedge’ leading to women MPs. After 1905 some pointed to suffragette militancy as ‘proof’ women were unfit to vote.",
            "**PEEL 3 — party advantage.** Some opposition was really political calculation. Liberals feared propertied women would vote Conservative, so even sympathetic Liberal MPs voted against particular bills.",
            "**Judgement.** Separate-spheres beliefs explain why opposition was so widespread, even among women; party calculation explains why it lasted so long in Parliament.",
          ],
          answer:
            "Opposition came from sincere separate-spheres beliefs, fears about war and the ‘thin end of the wedge’, and party self-interest.",
          yourTurn: {
            question:
              "Which country, in 1893, became the first self-governing country where women could vote in national elections?",
            answer: { type: "text", accept: ["New Zealand", "NZ", "Aotearoa", "Aotearoa New Zealand"], display: "New Zealand" },
            solution: "New Zealand gave women the national vote in 1893, 25 years before Britain gave it to women over 30.",
          },
        },
      ],
      keyPoints: [
        "For: equality, taxation, women's local experience, educated women vs uneducated men, examples abroad.",
        "Against: separate spheres, ‘too emotional’, women don't fight in wars, most women don't want it.",
        "Many women opposed the vote: Mary Augusta Ward's Anti-Suffrage League (1908); Queen Victoria privately.",
        "New Zealand (1893), Australia (1902) and Finland (1906) gave women the vote before Britain.",
        "Party calculations — who would women vote for? — blocked bills even when MPs agreed in principle.",
      ],
      whyItWorks:
        "Why study arguments you now find unconvincing? Because historians must **explain why people in the past believed what they believed** — the opposite of judging them with hindsight. Once you see that opposition rested on (1) a whole worldview of separate spheres and (2) hard party self-interest, you can explain both why the arguments against were so widespread and why they eventually collapsed: the first was undermined by women's changing lives and war work, and the second was solved in 1918 by a deal that gave something to every party.",
      strategies: ["Avoid hindsight", "Think about purpose", "Think about who benefited"],
      thinkDeeper:
        "Which single argument *against* votes for women do you think was hardest for suffragists to answer before 1914 — and what happened between 1914 and 1918 that weakened it?",
    },
    // ------------------------------------------------------------------ 6
    {
      id: "war-and-the-vote",
      heading: "The First World War and the vote",
      discovery: {
        problem:
          "**A puzzle from 1918.** Wei Ling's great-grandmother (a constructed example) was a 24-year-old ‘munitionette’ who spent three years filling shells with explosives. Her 34-year-old neighbour, a married woman, stayed at home throughout the war.\n\nWhen the 1918 law came in, only the **neighbour** could vote.\n\nMany people say ‘women won the vote because of their war work’. Use this puzzle to test that claim. What else must have been going on?",
        idea:
          "If the vote were simply a **reward for war work**, the young munitions worker would have got it first. Instead, the 1918 Act gave votes to women **over 30** who met a **property qualification** — mostly older, married women. The war mattered enormously, but in a more complicated way: it **changed attitudes**, **removed old obstacles** (Asquith fell in 1916) and forced Parliament to **rewrite the voting rules anyway** for returning soldiers. Women's suffrage was added as a careful **compromise** that every party could accept.",
      },
      body:
        "**1914: the campaigns stop**\nWhen war broke out in **August 1914**, both main groups suspended their campaigns. The government released suffragette prisoners. **Emmeline and Christabel Pankhurst** threw the WSPU behind the war effort, organising a march in **1915** demanding women's ‘right to serve’. The **NUWSS** turned to relief work and supported women's hospitals at the front. **Sylvia Pankhurst** opposed the war and kept campaigning for working women in East London.\n\n**Women's war work**\n- **Munitions:** by 1918 around **900,000 women** made shells and weapons. These ‘munitionettes’ did dangerous work — the explosive TNT turned some workers' skin yellow, earning them the nickname ‘canaries’.\n- **Transport and industry:** bus conductors, railway workers, engineers.\n- **The land:** the **Women's Land Army** (1917) kept farms running.\n- **Nursing and the forces:** nurses and volunteers near the front; new women's branches of the army, navy and air force (1917–18).\n\nAround **1.5 million more women** were in paid work by 1918, many in jobs said to be ‘men's work’. Even former opponents changed their minds: **Asquith** said in 1916–17 that women's war service made it impossible to keep refusing them.\n\n**The political problem**\nTo vote, a man had to have lived at the same address for **12 months** — so millions of soldiers fighting abroad would lose their votes. Parliament had to write **new rules** anyway. A **Speaker's Conference (1916–17)** of MPs from all parties recommended votes for all men and for some women. Asquith had been replaced as Prime Minister by the more sympathetic **Lloyd George** in December 1916.\n\n**The Representation of the People Act (February 1918)**\n| Who | Rule |\n|---|---|\n| Men | all men over **21** (19 if they had served in the war) |\n| Women | over **30**, and a local government voter (a householder), married to one, or a university graduate |\n| Result | about **8.4 million** women could vote — roughly 40% of the electorate |\n\nWhy 30? Because so many men had died, equal rules would have made women a **majority** of voters — something many MPs would not accept.\n\n**Firsts**\n- The **Parliament (Qualification of Women) Act** (November 1918) let women **stand as MPs** from the age of 21.\n- **Constance Markievicz** (Sinn Féin, Dublin) was the first woman elected, in December 1918, but refused to take her seat.\n- **Nancy Astor** became the first woman to sit as an MP (**1919**).\n- The **Equal Franchise Act (1928)** finally gave women the vote at **21** on the same terms as men.",
      workedExamples: [
        {
          title: "A modelled ‘explain why’ answer",
          problem: "Explain why some women were given the vote in 1918. (6 marks)",
          steps: [
            "**Plan.** Separate *attitudes* (war work), *opportunity* (the register problem, Asquith's fall) and the *compromise* (why only women over 30). Link them.",
            "**PEEL 1 — war work changed attitudes.** One reason was women's war work. Around 900,000 women worked in munitions and others ran buses, farms and hospitals. This undermined the old argument that women were unfit for public life, and even Asquith, a long-time opponent, said he had changed his mind.",
            "**PEEL 2 — the register problem.** A second reason was that Parliament had to change the voting rules anyway. Soldiers abroad failed the 12-month residence rule, so a new law was needed. Once the rules were being rewritten, the Speaker's Conference of 1916–17 recommended including some women too.",
            "**PEEL 3 — a safe compromise.** Finally, the age limit of 30 and the property qualification made the change acceptable to MPs, because women would remain a minority (about 40%) of voters and many would be older, married women. Lloyd George, Prime Minister from 1916, supported it.",
            "**Judgement.** The war was the *trigger*: it created the opportunity and changed attitudes. But it worked only because decades of campaigning had already won most of the argument — and because a compromise reassured MPs.",
          ],
          answer:
            "War work shifted attitudes, the soldiers' register created an opportunity, and the age-30 compromise made it acceptable — all resting on decades of campaigning.",
          yourTurn: {
            question:
              "Who was the first woman elected as an MP, in December 1918, though she refused to take her seat? Give her surname.",
            answer: { type: "text", accept: ["Markievicz", "Constance Markievicz", "Countess Markievicz", "Markiewicz", "Constance Markiewicz", "Countess Markiewicz"], display: "Markievicz (Constance Markievicz)" },
            solution: "Constance Markievicz won a Dublin seat for Sinn Féin in 1918 but, like her party, refused to sit at Westminster.",
          },
        },
      ],
      keyPoints: [
        "In August 1914 the WSPU and NUWSS suspended their campaigns; Sylvia Pankhurst opposed the war.",
        "Women's war work (about 900,000 in munitions by 1918) challenged arguments that women were unfit to vote.",
        "Soldiers would lose their votes under the residence rules, so Parliament had to rewrite the law anyway.",
        "1918: all men over 21; women over 30 meeting a property qualification — about 8.4 million women.",
        "Markievicz was the first woman elected (1918); Astor the first to sit (1919).",
        "1928: the Equal Franchise Act gave women the vote at 21, equal with men.",
      ],
      whyItWorks:
        "Why does the 1918 Act look so odd — a 21-year-old woman could be an MP but not vote? Because it was a **political compromise**, not a statement of principle. Politicians wanted to reward servicemen, end the pre-war conflict without appearing to give in to militancy, and avoid women becoming a majority of voters. Seeing laws as compromises between interests is one of the most useful habits a historian can have: it explains why change so often comes **in stages** — 1918 first, then equality in 1928.",
      strategies: ["Long-term vs short-term causes", "Think about who benefited", "Use precise evidence"],
      thinkDeeper:
        "Without the First World War, when — if ever — do you think British women would have won the vote? Use evidence from before 1914 to build your counterfactual.",
    },
    // ------------------------------------------------------------------ 7
    {
      id: "why-women-won",
      heading: "Enquiry: why did women win the vote — and how has democracy developed?",
      discovery: {
        problem:
          "Read these two famous opening articles.\n\n**Source C** — France, *Declaration of the Rights of Man and of the Citizen*, **1789** (Article 1, translated).\n\n> Men are born and remain free and equal in rights.\n\n**Source D** — Olympe de Gouges, *Declaration of the Rights of Woman and of the Female Citizen*, **1791** (Article 1, translated).\n\n> Woman is born free and remains equal to man in rights.\n\nDe Gouges was executed during the Terror in 1793. French women did not vote until **1945**. British women voted on equal terms from **1928**.\n\nWhat do these facts suggest about whether democracy has developed through **steady progress**?",
        idea:
          "Big ideas about **equal rights** were written down in 1789 — but the people who wrote them did not apply them to everyone. It took more than a century of campaigning for the practice to catch up with the principle. Progress came in **bursts**, usually after **pressure and crisis** (revolution, riots, war), and it sometimes went **backwards** — the 1832 Act wrote ‘male person’ into law, and revolutionary France banned women's political clubs in 1793. Democracy was not a smooth escalator; people had to push it at every step.",
      },
      body:
        "**Part 1 — Why did (some) women win the vote in 1918?**\nHistorians agree several factors combined; they debate their **weight** and how they **link**.\n\n| Factor | Case for | Case against |\n|---|---|---|\n| **Long-term change** | Education, work, property rights and local politics had undermined ‘separate spheres’ | Change was slow and did not force Parliament to act |\n| **Suffragists (NUWSS)** | 50 years of persuasion; huge membership; Labour alliance; most MPs supported the principle by 1914 | Had not won the vote by 1914 |\n| **Suffragettes (WSPU)** | Made the issue impossible to ignore | Violence gave opponents an excuse; government would not ‘reward’ it |\n| **First World War** | War work changed minds; residence rules forced a new law; Asquith replaced | Many war workers were under 30 and excluded |\n\nHistorians such as **Martin Pugh** stress the suffragists and long-term change; **June Purvis** stresses the WSPU's impact. A strong answer **links** factors: the campaigns had largely won the *argument* by 1914, and the war provided the *opportunity* and a face-saving way for opponents to change their minds.\n\n**Part 2 — How has democracy developed, 1789 to today?**\n| Date | Event | Thread |\n|---|---|---|\n| 1789 | France: *Declaration of the Rights of Man* | Rights — for men |\n| 1832–1884 | Three Reform Acts; secret ballot 1872 | Representation widens for men |\n| 1918 | All men 21+; women 30+ | Equality — partial |\n| 1928 | Equal Franchise Act | Equality in voting |\n| 1948 | **Universal Declaration of Human Rights**, Article 21: universal and equal suffrage by secret vote | Rights become universal |\n| 1948 | **Singapore's first election**, to the Legislative Council: women and men voted on the same terms, but only British subjects could register — about 23,000 did | Representation begins |\n| 1950 | UK abolishes extra votes for university graduates and business owners: one person, one vote | Equality |\n| 1959 | Singapore gains self-government; voting becomes compulsory | Representation |\n| 1969 | UK voting age lowered to 18 | Who counts widens |\n\n**Change:** the vote spread from about 3% of adults to every adult; rights moved from privileges of property to **human rights** for all.\n\n**Continuity:** formal equality did not mean equal representation. Only one woman sat in the Commons in 1919; women were still only about a fifth of MPs in 2010 and about two-fifths in 2024. Equal pay laws came only in 1970.\n\n**Steady progress?** Not really. Change came in **bursts** after **crises**, often as **compromises**, and sometimes went **backwards**. Nothing was inevitable, and steps like 1918 still left people out.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A balance scale weighing the causes of the 1918 vote. The left pan holds women's campaigns: suffragists from 1866 who were huge and respectable and won MPs over, and suffragettes from 1903 who won publicity but also caused a backlash. The right pan holds changing circumstances: long-term change in education, work and local government, and the war, which brought women's war work, a new voting register for soldiers and Asquith's replacement in 1916. The beam is level, and a question asks which pan is heavier and whether one could have worked without the other."><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><text x="240" y="20" font-size="13" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#1f2937">1918: weighing the causes</text><text x="240" y="38" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">Agency (what campaigners did) vs context (what changed around them)</text><line x1="120" y1="96" x2="360" y2="96" stroke="#334155" stroke-width="4"/><polygon points="240,90 232,104 248,104" fill="#334155"/><line x1="120" y1="96" x2="120" y2="124" stroke="#334155" stroke-width="1.5"/><line x1="360" y1="96" x2="360" y2="124" stroke="#334155" stroke-width="1.5"/><rect x="236" y="104" width="8" height="156" fill="#334155"/><rect x="210" y="260" width="60" height="10" fill="#334155"/><rect x="20" y="124" width="200" height="126" rx="6" fill="#c7d2fe" stroke="#334155" stroke-width="1"/><rect x="260" y="124" width="200" height="126" rx="6" fill="#fde68a" stroke="#334155" stroke-width="1"/><g font-family="sans-serif" fill="#1f2937" font-size="11"><text x="120" y="144" font-size="12" font-weight="bold" text-anchor="middle">Women's campaigns</text><text x="28" y="166">Suffragists (from 1866):</text><text x="28" y="182">huge, respectable, won</text><text x="28" y="198">many MPs over</text><text x="28" y="218">Suffragettes (from 1903):</text><text x="28" y="234">publicity — but backlash</text><text x="360" y="144" font-size="12" font-weight="bold" text-anchor="middle">Changing circumstances</text><text x="268" y="166">Long-term change: education,</text><text x="268" y="182">work, local government</text><text x="268" y="202">War: women's war work; a new</text><text x="268" y="218">register for soldiers; Asquith</text><text x="268" y="234">replaced as PM (1916)</text></g><text x="240" y="290" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">Which pan is heavier? Could either side have worked without the other?</text></svg>`,
      diagramCaption:
        "A causes balance for 1918. The beam is drawn level on purpose: tipping it is *your* judgement, and the strongest answers explain how the two pans are linked.",
      workedExamples: [
        {
          title: "A modelled ‘how far’ answer (16 marks)",
          problem: "‘The First World War was the main reason why some women gained the vote in 1918.’ How far do you agree? (16 marks)",
          steps: [
            "**Plan.** Introduction with a clear line of argument; one paragraph on the war; one each on the suffragists, the suffragettes and long-term change; a judgement that weighs and *links* the factors.",
            "**Introduction.** The war was the immediate trigger for the 1918 Act, but I will argue it worked only because the suffragists and long-term change had already won most of the argument before 1914.",
            "**PEEL — the war (agree).** The war created the opportunity. Soldiers abroad failed the 12-month residence rule, so a new law was needed; the Speaker's Conference of 1916–17 recommended including some women; and around 900,000 women in munitions undermined claims that women were unfit. Asquith's replacement by Lloyd George in 1916 removed a key opponent. Without the war, there is no sign a bill would have passed in 1918.",
            "**PEEL — the suffragists (disagree).** However, the war only *triggered* a change that was already prepared. The NUWSS had campaigned since 1897 (and its forerunners since 1866), had over 50,000 members and had persuaded a majority of MPs to back the principle. The ideas the Speaker's Conference adopted were the ones suffragists had argued for.",
            "**PEEL — the suffragettes (balanced).** The WSPU made votes for women a front-page issue after 1905, but by 1912–14 arson and window-smashing let opponents say militancy must not be rewarded. Their ending of militancy in 1914 helped: MPs could change their minds without appearing to give in to violence.",
            "**PEEL — the limits of ‘reward for war work’.** If the vote were a reward, the young munitionettes would have received it. Instead women had to be over 30 and meet a property qualification — evidence that the Act was a political compromise, not simple gratitude.",
            "**Judgement.** I partly agree. The war was the main *short-term* cause because it created the moment and gave politicians a reason to act. But the main *underlying* cause was half a century of suffragist campaigning and changing lives, which meant that when the moment came, the case had already been won.",
          ],
          answer:
            "The war was the trigger, but decades of campaigning (especially by the suffragists) and long-term change made the 1918 Act possible; the age-30 limit shows it was a compromise, not just a reward.",
        },
        {
          title: "A modelled change-and-continuity answer",
          problem: "How far did British democracy change between 1832 and 1928? (12 marks)",
          steps: [
            "**Plan.** Use the three enquiry threads — equality, representation, rights — and give change *and* continuity for each before judging.",
            "**Change — equality of voting.** The electorate grew from about 0.8 million after 1832 to about 29 million in 1928, and from men of property only to every adult over 21. The 1928 Equal Franchise Act ended sex as a barrier to voting.",
            "**Change — fair elections.** The Secret Ballot Act of 1872 ended open voting and much bribery and intimidation, and rotten boroughs disappeared — so representation became much fairer.",
            "**Continuity — representation and equality in practice.** Yet the people *in* Parliament barely changed: only one woman sat in the Commons in 1919, and a handful in the 1920s. Graduates and business owners still had extra votes until 1950.",
            "**Judgement.** The *right to vote* changed dramatically — more than in the previous 500 years — but equality in *representation* and wider rights changed far more slowly, which is why later milestones (1948, 1969, equal pay in 1970) were still needed.",
          ],
          answer:
            "Huge change in who could vote and how fairly; strong continuity in who held power — so democracy grew wider before it grew deeper.",
          yourTurn: {
            question:
              "In which year did Singapore hold its first election, for the Legislative Council, in which women could vote on the same terms as men?",
            answer: { type: "number", value: 1948 },
            solution: "Singapore's first election was held in March 1948 — the same year as the Universal Declaration of Human Rights.",
          },
        },
      ],
      keyPoints: [
        "Most historians see 1918 as the result of several linked factors, not one cause.",
        "The war was the short-term trigger; campaigning and long-term change were the underlying causes.",
        "1918 was a compromise: women over 30 with property — not a straightforward reward for war work.",
        "Democracy developed in bursts after pressure and crisis, not as steady progress — and sometimes went backwards.",
        "1948 linked the threads globally: the UDHR (Article 21) and Singapore's first election.",
        "Change in who can vote has been faster than change in who is represented in Parliament.",
      ],
      whyItWorks:
        "Why do historians argue about this rather than just listing causes? Because the answer shapes how we think change happens. If the war was decisive, democracy looks like a by-product of crisis. If the campaigns were decisive, it looks like something **ordinary people won by organising**. If long-term change mattered most, it looks like society slowly catching up with its own principles. The best answers show how **agency** (what people did) and **context** (what was happening around them) worked together — and that is a lesson that applies from Peterloo to Singapore's first election.",
      strategies: ["Weigh factors", "Link the causes", "Spot change and continuity"],
      thinkDeeper:
        "Equality in voting arrived in Britain in 1928. Equality in representation still has not. Is democracy ever ‘finished’ — and which group, today, might argue it is still waiting for its turn?",
    },
  ],
  learn: {
    flashcards: [
      { front: "Suffrage", back: "The right to vote in political elections." },
      { front: "Suffragist", back: "A campaigner for votes for women using peaceful, legal methods — especially a member of the NUWSS (1897), led by Millicent Fawcett." },
      { front: "Suffragette", back: "A member of the militant WSPU (1903), led by Emmeline Pankhurst — motto ‘Deeds not words’. The name began as a Daily Mail insult (1906)." },
      { front: "NUWSS", back: "National Union of Women's Suffrage Societies, formed 1897. Peaceful, democratic and large (50,000+ members by 1914)." },
      { front: "WSPU", back: "Women's Social and Political Union, founded in Manchester in 1903 by Emmeline Pankhurst and her daughters." },
      { front: "Rotten borough", back: "A constituency with very few voters that still elected MPs — e.g. Old Sarum (two MPs). Most abolished in 1832." },
      { front: "Pocket borough", back: "A constituency controlled by a powerful landowner — the seat was ‘in his pocket’." },
      { front: "Peterloo (1819)", back: "Cavalry charged a peaceful reform meeting of about 60,000 at St Peter's Field, Manchester; around 15–18 killed, hundreds injured." },
      { front: "Great Reform Act (1832)", back: "Removed many rotten boroughs, gave seats to industrial towns, enfranchised middle-class men (£10 householders). About 1 in 5 men could vote; women excluded as voters had to be a ‘male person’." },
      { front: "The Chartists", back: "Working-class movement (1838–1850s). Six points of the People's Charter: votes for all men, secret ballot, no property qualification for MPs, payment of MPs, equal constituencies, annual elections." },
      { front: "Coverture", back: "The legal idea that a wife's identity, property and earnings were absorbed into her husband's. Weakened by the Married Women's Property Acts (1870, 1882)." },
      { front: "Separate spheres", back: "The Victorian belief that men belong in public life and women in the home." },
      { front: "Millicent Garrett Fawcett", back: "Leader of the NUWSS (president from 1907); believed in law-abiding persuasion. Her statue stands in Parliament Square (2018)." },
      { front: "Emmeline Pankhurst", back: "Founded the WSPU in 1903; led its militant campaign; died in June 1928, weeks before equal voting became law." },
      { front: "Emily Wilding Davison", back: "Suffragette who stepped in front of the King's horse at the Epsom Derby, 4 June 1913, and died of her injuries. Her intentions are debated." },
      { front: "Cat and Mouse Act (1913)", back: "Let the government release hunger-striking prisoners when weak and re-arrest them when they recovered." },
      { front: "Black Friday", back: "18 November 1910: about 300 suffragettes marching on Parliament were violently and indecently treated by police and bystanders." },
      { front: "Sophia Duleep Singh", back: "Indian princess and goddaughter of Queen Victoria; a suffragette who marched on Black Friday and refused to pay taxes." },
      { front: "Representation of the People Act (1918)", back: "All men over 21; women over 30 who met a property qualification (about 8.4 million women)." },
      { front: "Equal Franchise Act (1928)", back: "Gave women the vote at 21 on the same terms as men." },
      { front: "Constance Markievicz / Nancy Astor", back: "Markievicz: first woman elected MP (1918, refused her seat). Astor: first woman to sit in the Commons (1919)." },
      { front: "Anti-Suffrage League", back: "Women's National Anti-Suffrage League (1908), led by Mary Augusta Ward — proof that many women opposed the vote." },
    ],
    mustKnow: [
      "Can you explain three ways Britain was undemocratic before 1832 (rotten boroughs, property rules, open voting)?",
      "Can you put 1819, 1832, 1838, 1867, 1872 and 1884 in order and say what each changed?",
      "Can you list the Chartists' six points and say which became law?",
      "Can you describe women's legal position under coverture and how the 1870 and 1882 Acts changed it?",
      "Can you compare the NUWSS and WSPU — leaders, dates, methods and size?",
      "Can you explain why the suffragettes' tactics escalated, and how the government responded?",
      "Can you give at least three arguments for and three against votes for women — and explain party calculations?",
      "Can you explain exactly who could vote after 1918 and after 1928 — and why the age limit was 30?",
      "Can you reach a supported judgement on the main reason women won the vote, linking at least two factors?",
      "Can you show change and continuity in democracy from 1789 to 1928 and beyond, including a Singapore example?",
    ],
    misconceptions: [
      { wrong: "Suffragists and suffragettes are the same thing.", right: "Suffragists (NUWSS, 1897, Fawcett) used peaceful, legal methods; suffragettes (WSPU, 1903, Pankhurst) used militant ones. Both wanted votes for women." },
      { wrong: "All women got the vote in 1918.", right: "Only women over 30 who met a property qualification — about 8.4 million. Women got the vote on equal terms with men in 1928." },
      { wrong: "Women were given the vote as a simple reward for war work.", right: "Many munitions workers were under 30 and excluded. The 1918 Act was a political compromise shaped by the soldiers' register problem and decades of campaigning." },
      { wrong: "All men could vote long before women.", right: "Even after 1884 only about 60% of men could vote. Most men gained the vote at the same time as some women — in 1918." },
      { wrong: "Only men opposed votes for women.", right: "Many women opposed it, including Queen Victoria privately and Mary Augusta Ward, who led the Women's National Anti-Suffrage League (1908)." },
      { wrong: "Emily Wilding Davison definitely meant to kill herself at the Derby.", right: "Historians debate it: she had a return ticket and may have been trying to attach suffragette colours to the King's horse." },
      { wrong: "The suffragettes were all wealthy ladies.", right: "Leaders were mostly middle-class, but many suffragettes were working-class, such as Annie Kenney, an Oldham mill worker." },
      { wrong: "The 1832 Great Reform Act made Britain a democracy.", right: "It gave the vote to about 1 in 5 men in England and Wales and explicitly excluded women; there was no secret ballot until 1872." },
    ],
    examMistakes: [
      "Writing ‘women got the vote in 1918’ without saying *which* women (over 30, property qualification).",
      "Mixing up the NUWSS and WSPU, or their dates (1897 vs 1903) and leaders (Fawcett vs Pankhurst).",
      "Describing suffragette tactics instead of explaining their *effect* on the campaign.",
      "Giving a one-sided ‘how far’ answer with no counter-argument or no clear judgement.",
      "Treating the war as the only cause, or listing factors without linking them.",
      "Using vague evidence (‘they did lots of violent things’) instead of precise examples (1912 window-smashing, the 1913 Cat and Mouse Act).",
      "Forgetting long-term changes in women's lives (education, work, property rights, local government).",
      "Judging people in the past by today's values instead of explaining why they believed what they did.",
    ],
    mnemonics: [
      {
        topic: "The Chartists' six points",
        device: "Many Angry People Petitioned Every Summer",
        explanation: "Manhood suffrage (votes for all men), Annual parliaments, Payment of MPs, Property qualification for MPs abolished, Equal constituencies, Secret ballot.",
      },
      {
        topic: "Suffragists vs suffragettes",
        device: "suffraGISTS were Gentle; suffraGETtes wanted to GET it now",
        explanation: "Suffragists (NUWSS) persuaded peacefully; suffragettes (WSPU) used ‘Deeds not words’ — militant action. Remember the ‘-ette’ began as a Daily Mail sneer in 1906.",
      },
      {
        topic: "Who gained the vote in the 19th-century Reform Acts",
        device: "M-T-C: Middle class, Towns, Countryside (1832, 1867, 1884)",
        explanation: "1832 enfranchised middle-class men; 1867 male householders in towns; 1884 male householders in the countryside. Then 1918 = all men and some women; 1928 = equal.",
      },
    ],
    realWorld: [
      {
        title: "A statue that took 100 years",
        detail: "In 2018, for the centenary of the 1918 Act, a statue of Millicent Fawcett became the first statue of a woman in Parliament Square. Her banner reads ‘Courage calls to courage everywhere’ — her words after Emily Davison's death.",
        emoji: "🗽",
      },
      {
        title: "Singapore: from 23,000 voters to compulsory voting",
        detail: "Singapore's first election in 1948 let women vote on the same terms as men, but only about 23,000 British subjects registered. Since 1959 voting has been compulsory for citizens; the Women's Charter (1961) protected women's rights in marriage, and Halimah Yacob became Singapore's first woman President in 2017.",
        emoji: "🇸🇬",
      },
      {
        title: "Who should vote? The debate continues",
        detail: "The UK lowered the voting age to 18 in 1969. Since then 16- and 17-year-olds have gained the vote in Scottish and Welsh Parliament elections, and people still debate whether the voting age should change across the UK — the same question of ‘who counts?’ that suffragists faced.",
        emoji: "🗳️",
      },
      {
        title: "Protest: words or deeds?",
        detail: "Modern campaigns, from climate protests to civil rights movements, still argue over the suffragette question: does disruptive protest win attention and change, or turn the public against a cause? The suffrage campaign is evidence for both sides.",
        emoji: "📣",
      },
      {
        title: "A human right worldwide",
        detail: "Article 21 of the Universal Declaration of Human Rights (1948) says government should rest on the will of the people, shown in genuine elections with universal and equal suffrage by secret vote. Some countries were slow: Swiss women won the national vote only in 1971.",
        emoji: "🌍",
      },
    ],
    videos: [
      { title: "Votes for women: suffragists and suffragettes", channel: "BBC Bitesize", url: "https://www.youtube.com/results?search_query=BBC+Bitesize+suffragettes+votes+for+women" },
      { title: "The suffragettes explained", channel: "Simple History", url: "https://www.youtube.com/results?search_query=Simple+History+suffragettes" },
      { title: "The Peterloo Massacre explained", channel: "BBC / History channels", url: "https://www.youtube.com/results?search_query=Peterloo+massacre+1819+explained" },
      { title: "Who were the Chartists?", channel: "BBC Bitesize / UK Parliament", url: "https://www.youtube.com/results?search_query=Chartists+explained+six+points" },
      { title: "The women's suffrage movement", channel: "TED-Ed", url: "https://www.youtube.com/results?search_query=TED-Ed+women%27s+suffrage" },
    ],
    formulas: [
      { name: "1819", formula: "Peterloo: cavalry charge a peaceful reform meeting in Manchester", note: "Around 15–18 killed, hundreds injured." },
      { name: "1832", formula: "Great Reform Act: middle-class men gain the vote; ‘male person’ written into law", note: "About 1 in 5 men in England and Wales." },
      { name: "1838", formula: "The People's Charter: the Chartists' six points", note: "Petitions rejected in 1839, 1842 and 1848." },
      { name: "1866–67", formula: "Mill presents a women's petition (1866); his ‘person’ amendment is defeated 196–73 (1867)" },
      { name: "1867", formula: "Second Reform Act: male householders in towns", note: "About 1 in 3 men." },
      { name: "1870 / 1882", formula: "Married Women's Property Acts: wives keep earnings, then all property" },
      { name: "1872", formula: "Secret Ballot Act: voting becomes private" },
      { name: "1884", formula: "Third Reform Act: male householders in the countryside", note: "About 60% of men; no women." },
      { name: "1897", formula: "NUWSS formed — the suffragists (Millicent Fawcett)" },
      { name: "1903", formula: "WSPU formed — the suffragettes (Emmeline Pankhurst)", note: "‘Deeds not words’." },
      { name: "1910", formula: "Black Friday (18 November)" },
      { name: "1913", formula: "Cat and Mouse Act; Emily Wilding Davison dies after the Derby; Great Pilgrimage" },
      { name: "1914", formula: "War begins: suffrage campaigns suspended" },
      { name: "1918", formula: "Representation of the People Act: all men 21+, women 30+ with property", note: "About 8.4 million women; Markievicz first woman elected." },
      { name: "1919", formula: "Nancy Astor becomes the first woman to sit in the Commons" },
      { name: "1928", formula: "Equal Franchise Act: women vote at 21, equal with men" },
      { name: "1948", formula: "Universal Declaration of Human Rights; Singapore's first election" },
      { name: "1969", formula: "UK voting age lowered from 21 to 18" },
    ],
  },
};
