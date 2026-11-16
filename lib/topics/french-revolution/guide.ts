import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "french-revolution",
  title: "The French Revolution",
  strand: "Democracy & Rights",
  icon: "🇫🇷",
  summary: "A king with absolute power, a nation that went hungry, and the ten years that rewrote the rules about rights.",
  intro:
    "In 1788 France was ruled by a king who said his power came from God. By 1793 that king had been executed, France was a republic, and a document had declared that “men are born and remain free and equal in rights”. By 1804 France had an emperor.\n\nThis topic is part of the Term 3 enquiry: **How and why has democracy developed?** You will investigate why the Revolution happened, how it turned violent, and — the big question — how much it really changed **equality**, **representation** and the **protection of human rights**, and for whom.",
  guide: [
    // ------------------------------------------------------------------ 1
    {
      id: "ancien-regime",
      heading: "France under the Ancien Régime",
      discovery: {
        problem:
          "France, 1788. Three people live in the same district:\n\n- a **bishop** whose Church owns large estates and collects a share of every farmer's harvest\n- a **count** who owns a château and collects dues from the peasants on his land\n- a **peasant farmer** who rents a few fields and struggles to feed his family\n\nThe royal tax collector arrives to collect the *taille*, the main direct tax.\n\nBefore you read on: predict who pays it. Then ask yourself — on what basis *should* tax be shared out? Write your prediction down.",
        idea:
          "Only the peasant paid the taille. The clergy and the nobility were **privileged**: exempt from the main direct tax because of the estate (order of society) they belonged to — not because they were poor. Under the Ancien Régime, your rights and your tax depended on your **birth and status**, not your wealth. The people with the most land paid the least, and that is the root of the anger you will meet in 1789.",
      },
      body:
        "Before 1789 France was an **absolute monarchy** — historians call this system the **Ancien Régime** (“old order”). King **Louis XVI** (reigned 1774–1792) claimed to rule by **Divine Right**: his power came from God, so he did not answer to any elected body. The **Estates-General**, an old advisory assembly, had not met since **1614**. The king could make laws, raise taxes and even imprison people without trial using a *lettre de cachet* (a sealed royal order).\n\nThe court lived at the vast **Palace of Versailles**, outside Paris. Louis's queen, **Marie Antoinette**, was Austrian — from France's old rival — and many people blamed her for royal spending. Critics nicknamed her “Madame Deficit”.\n\nSociety was divided into three **estates** by birth and role:\n\n| Estate | Who | Share of population (approx.) | Privileges and burdens |\n|---|---|---|---|\n| First | Clergy | under 1% | Collected the **tithe**; the Church paid no taille, only a voluntary “free gift” to the king |\n| Second | Nobility | about 1.5–2% | Exempt from the taille; top jobs in the army, Church and government; collected feudal dues |\n| Third | Everyone else | about 97% | Paid the **taille**, the tithe, the **gabelle** (salt tax) and feudal dues to their lord |\n\nThe Third Estate was not all poor. It included wealthy bankers, merchants and lawyers (the **bourgeoisie**), skilled workers in the towns and around 20 million peasants. What they shared was a lack of privilege — and no real political voice.\n\n> Under the Ancien Régime, tax followed status, not wealth: the more privileged you were, the less you paid.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three Estates pyramid comparing each estate's share of the population with whether it paid the taille"><text x="240" y="20" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">The Three Estates in 1789</text><polygon points="140,40 180,100 100,100" fill="#c7d2fe" stroke="#334155" stroke-width="1.5"/><polygon points="100,100 180,100 215,155 65,155" fill="#fde68a" stroke="#334155" stroke-width="1.5"/><polygon points="65,155 215,155 265,270 15,270" fill="#bbf7d0" stroke="#334155" stroke-width="1.5"/><text x="140" y="95" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">1st: Clergy</text><text x="140" y="133" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">2nd: Nobility</text><text x="140" y="210" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">3rd: Everyone else</text><text x="140" y="228" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">bourgeoisie, workers, peasants</text><text x="285" y="50" font-size="11" font-family="sans-serif" fill="#1f2937" font-weight="bold">Population</text><text x="420" y="50" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#1f2937" font-weight="bold">Paid the taille?</text><text x="285" y="88" font-size="12" font-family="sans-serif" fill="#1f2937">under 1%</text><rect x="395" y="74" width="50" height="20" rx="4" fill="#fecaca" stroke="#334155"/><text x="420" y="88" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">No</text><text x="285" y="133" font-size="12" font-family="sans-serif" fill="#1f2937">about 2%</text><rect x="395" y="119" width="50" height="20" rx="4" fill="#fecaca" stroke="#334155"/><text x="420" y="133" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">No</text><text x="285" y="215" font-size="12" font-family="sans-serif" fill="#1f2937">about 97%</text><rect x="395" y="201" width="50" height="20" rx="4" fill="#bbf7d0" stroke="#334155"/><text x="420" y="215" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Yes</text><line x1="280" y1="100" x2="465" y2="100" stroke="#334155" stroke-dasharray="3,3"/><line x1="280" y1="155" x2="465" y2="155" stroke="#334155" stroke-dasharray="3,3"/><text x="240" y="292" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Pyramid shows rank, not size. Percentages are historians' estimates.</text></svg>`,
      diagramCaption:
        "The pyramid shows rank. The columns show the problem: the two smallest, most privileged estates were exempt from the main direct tax, so its weight fell on the 97%.",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem: "Describe two features of the Three Estates system in France before 1789. (4 marks)",
          steps: [
            "A “describe” question wants features, each with supporting detail — not causes or a story.",
            "Feature 1: society was divided by birth into clergy, nobility and everyone else. Add a detail: the Third Estate was about 97% of the population.",
            "Feature 2: privilege. Add a detail: the clergy and nobility were exempt from the taille, while the Third Estate paid the taille, the tithe and the gabelle.",
            "Check that each feature has a precise fact (a percentage, the name of a tax). That is what turns 1 mark into 2.",
          ],
          answer:
            "One feature was that French society was divided by birth into three estates: the clergy (First Estate), the nobility (Second Estate) and everyone else (Third Estate), who made up about 97% of the population. A second feature was that the first two estates had privileges. For example, they were exempt from the taille, the main direct tax, while the Third Estate had to pay it as well as the tithe to the Church and the gabelle on salt.",
          yourTurn: {
            question: "What was the name of the main direct tax that the Third Estate paid but the clergy and nobility did not?",
            answer: { type: "text", accept: ["taille", "the taille", "la taille"], display: "the taille" },
            solution: "The taille — the main direct royal tax. The clergy and nobility were exempt from it.",
          },
        },
      ],
      keyPoints: [
        "Louis XVI (reigned 1774–1792) was an absolute monarch who claimed Divine Right.",
        "There was no elected parliament: the Estates-General had not met since 1614.",
        "Three estates: clergy (under 1%), nobility (about 2%), everyone else (about 97%).",
        "The privileged estates were exempt from the taille; the Third Estate paid the taille, tithe, gabelle and feudal dues.",
        "The Third Estate included the rich bourgeoisie as well as poor peasants — united by lack of privilege, not by poverty.",
      ],
      whyItWorks:
        "A system where status, not wealth, decided tax was stable only while people accepted it as natural or God-given. Once the Third Estate — especially its educated, wealthy bourgeoisie — began to see privilege as unfair and irrational, the whole structure lost its legitimacy. That is why the Estates system is a long-term cause: it created a large, resentful group with money and ideas but no power.",
      strategies: ["Ask “who benefits?”", "Use precise evidence", "Zoom out to the big picture"],
      thinkDeeper:
        "Louis XVI was not personally cruel, and he even supported some reforms. If the system was the problem, could *any* king have saved it? What would he have had to give up?",
    },
    // ------------------------------------------------------------------ 2
    {
      id: "causes-of-the-revolution",
      heading: "Causes of the Revolution",
      discovery: {
        problem:
          "Here are six cards. Sort them into three piles — **long-term** (building up for decades), **short-term** (the last few years) and **trigger** (the spark):\n\n1. A bad harvest in 1788 and soaring bread prices\n2. Enlightenment writers questioning kings and the Church\n3. A huge royal debt\n4. Louis XVI calling the Estates-General for May 1789\n5. An unfair society of three estates\n6. France helping the American colonists win independence from Britain\n\nThen the harder question: could any *one* of these have caused a revolution on its own?",
        idea:
          "Long-term: the estates system and Enlightenment ideas. Short-term: the debt (made worse by the American war) and the bad harvest. Trigger: calling the Estates-General. Notice the American war sits across two piles — it spread ideas *and* deepened the debt. No single card is enough. The debt forced the king to seek new taxes; the privileged refused; so he called the Estates-General; and it met just as hungry, angry people were reading new ideas about rights. **Causes link together** — that is the key to a top answer.",
      },
      body:
        "**Long-term causes**\n\n- **The estates system.** Privilege and unfair taxes bred resentment, especially among the wealthy bourgeoisie, who had money and education but no political power.\n- **The Enlightenment.** Writers argued that reason, not tradition, should decide how countries are run. **Montesquieu** (*The Spirit of the Laws*, 1748) argued for separating the powers of government. **Voltaire** attacked religious intolerance and censorship. **Rousseau** (*The Social Contract*, 1762) argued that sovereignty belongs to the people.\n- **The American example.** France helped the American colonists defeat Britain (1778–83). French soldiers such as the **Marquis de Lafayette** came home having fought for a people who threw off a king.\n\n**Short-term causes**\n\n- **Royal debt.** Wars, including the American war, left France deeply in debt; by 1788 about half of government spending went on paying interest. Ministers proposed taxing the privileged, but in 1787 an Assembly of Notables (leading nobles and clergy) refused.\n- **Hunger.** Hailstorms ruined the 1788 harvest and the winter was bitterly cold. In Paris the price of bread almost doubled by early 1789, when most workers already spent around half their wages on it.\n\n**The trigger**\n\nOut of options, Louis agreed in August 1788 to call the **Estates-General** for May 1789. Across France people wrote *cahiers de doléances* — lists of grievances — and began to argue about who should have a say.\n\n> “Man is born free, and everywhere he is in chains.” — Jean-Jacques Rousseau, *The Social Contract*, 1762",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Causes diagram: long-term, short-term and trigger causes all leading to the Revolution of 1789"><text x="240" y="20" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">Why did revolution break out in 1789?</text><rect x="10" y="35" width="140" height="22" rx="4" fill="#c7d2fe" stroke="#334155"/><text x="80" y="50" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">Long-term</text><rect x="170" y="35" width="140" height="22" rx="4" fill="#fde68a" stroke="#334155"/><text x="240" y="50" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">Short-term</text><rect x="330" y="35" width="140" height="22" rx="4" fill="#fecaca" stroke="#334155"/><text x="400" y="50" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">Trigger</text><rect x="10" y="70" width="140" height="40" rx="4" fill="#ffffff" stroke="#334155"/><text x="80" y="87" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Unfair estates</text><text x="80" y="101" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">and privilege</text><rect x="10" y="120" width="140" height="40" rx="4" fill="#ffffff" stroke="#334155"/><text x="80" y="137" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Enlightenment ideas</text><text x="80" y="151" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">(Rousseau, Voltaire)</text><rect x="10" y="170" width="140" height="40" rx="4" fill="#ffffff" stroke="#334155"/><text x="80" y="187" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">American example</text><text x="80" y="201" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">(1776–83)</text><rect x="170" y="70" width="140" height="40" rx="4" fill="#ffffff" stroke="#334155"/><text x="240" y="87" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Royal debt: about half</text><text x="240" y="101" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">of spending on interest</text><rect x="170" y="120" width="140" height="40" rx="4" fill="#ffffff" stroke="#334155"/><text x="240" y="137" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Privileged refuse</text><text x="240" y="151" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">new taxes (1787)</text><rect x="170" y="170" width="140" height="40" rx="4" fill="#ffffff" stroke="#334155"/><text x="240" y="187" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Bad harvest 1788,</text><text x="240" y="201" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">bread price soars</text><rect x="330" y="105" width="140" height="56" rx="4" fill="#ffffff" stroke="#334155"/><text x="400" y="125" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Louis calls the</text><text x="400" y="139" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Estates-General</text><text x="400" y="153" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">(meets May 1789)</text><line x1="150" y1="190" x2="170" y2="90" stroke="#334155" stroke-width="1.5"/><line x1="310" y1="90" x2="330" y2="125" stroke="#334155" stroke-width="1.5"/><line x1="310" y1="140" x2="330" y2="135" stroke="#334155" stroke-width="1.5"/><line x1="240" y1="210" x2="240" y2="245" stroke="#334155" stroke-width="2"/><line x1="80" y1="210" x2="80" y2="245" stroke="#334155" stroke-width="2"/><line x1="400" y1="161" x2="400" y2="245" stroke="#334155" stroke-width="2"/><line x1="80" y1="245" x2="400" y2="245" stroke="#334155" stroke-width="2"/><rect x="150" y="258" width="180" height="30" rx="6" fill="#bae6fd" stroke="#334155" stroke-width="1.5"/><text x="240" y="278" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">Revolution, 1789</text><line x1="240" y1="245" x2="240" y2="258" stroke="#334155" stroke-width="2"/></svg>`,
      diagramCaption:
        "Read across the links: the American war fed the debt; the debt led to the tax crisis; the tax crisis forced Louis to call the Estates-General — just as hunger and new ideas made people ready to demand more.",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem: "Explain why Louis XVI called the Estates-General in 1789. (4 marks)",
          steps: [
            "Start with the root problem: money. The crown was nearly bankrupt.",
            "Explain *why* there was a debt: wars, especially helping the Americans against Britain.",
            "Explain why the normal fix failed: ministers wanted to tax the privileged, but the Assembly of Notables refused in 1787.",
            "Link it: with no other way to raise money, Louis turned to the Estates-General, which had last met in 1614. Use PEEL: Point, Evidence, Explain, Link.",
          ],
          answer:
            "Louis XVI called the Estates-General mainly because the French crown was nearly bankrupt. France had borrowed heavily to fight wars, including helping the American colonists against Britain, so that by 1788 about half of government spending went on interest. His ministers tried to solve this by taxing the privileged clergy and nobility, but the Assembly of Notables refused in 1787. This meant Louis had no other way to get new taxes accepted, so in 1788 he agreed to call the Estates-General, which had not met since 1614, to meet in May 1789.",
          yourTurn: {
            question: "In what year had the Estates-General last met before 1789?",
            answer: { type: "number", value: 1614 },
            solution: "1614 — 175 years earlier. That gap shows how unused France was to any kind of representation.",
          },
        },
      ],
      keyPoints: [
        "Long-term: the unfair estates system; Enlightenment ideas (Montesquieu, Voltaire, Rousseau); the American example.",
        "Short-term: royal debt (worsened by the American war) and the privileged refusing reform (1787).",
        "Short-term: the bad harvest of 1788 made bread prices soar.",
        "Trigger: Louis agreed in August 1788 to call the Estates-General for May 1789.",
        "The causes linked: debt → tax crisis → Estates-General, at a moment of hunger and new ideas.",
      ],
      whyItWorks:
        "Revolutions usually need two things at once: a government that is weak (here, bankrupt and unable to reform) and people who are angry and have ideas about an alternative (hungry workers and an Enlightenment-educated bourgeoisie). France in 1789 had both. Calling the Estates-General then gave all that anger a place to meet and a question to fight over: who should have power?",
      strategies: ["Sort causes into categories", "Link the factors", "Use the chronology"],
      thinkDeeper:
        "Counterfactual: if the 1788 harvest had been good, would there still have been a revolution in 1789? Would there have been one later? Use your answer to decide whether the harvest was a *cause* or just a matter of *timing*.",
    },
    // ------------------------------------------------------------------ 3
    {
      id: "revolution-of-1789",
      heading: "1789: the year everything changed",
      discovery: {
        problem:
          "On 14 July 1789 a crowd of Parisians attacked the Bastille, a royal fortress-prison. For generations it has been remembered as the day the people “freed the prisoners of tyranny”.\n\nHere is a puzzle in the evidence: when the crowd broke in, the Bastille held only **seven prisoners**.\n\nBefore you read on: why would hundreds of people risk their lives — and about a hundred of them die — to attack an almost empty prison? Come up with at least two possible reasons.",
        idea:
          "The crowd wanted **gunpowder** to arm themselves: the king had gathered troops around Paris and had just sacked the popular minister Necker, and Parisians feared an attack. And the Bastille was a **symbol** — the place where kings had locked people up without trial. Its fall showed that the king could no longer control his own capital. In history, what an event *means* can matter more than what physically happened.",
      },
      body:
        "| Date (1789) | Event | Why it matters |\n|---|---|---|\n| 5 May | **Estates-General** opens at Versailles | Row over voting: by estate (privileged win 2–1) or by head (the Third had about as many deputies as the other two together)? |\n| 17 June | Third Estate declares itself the **National Assembly** | Claims to speak for the nation, not the king |\n| 20 June | **Tennis Court Oath** | Locked out of their hall, deputies swear in an indoor tennis court not to separate until France has a constitution |\n| 14 July | **Storming of the Bastille** | Paris rises; the king loses control of his capital |\n| late July–early Aug | **The Great Fear** | Panic and rumours of an aristocratic plot; peasants attack châteaux and burn records of feudal dues |\n| 4 August | **Feudal privileges abolished** | The Assembly ends the privileged system in one night |\n| 26 August | **Declaration of the Rights of Man and of the Citizen** | Sets out equal rights, liberty and the sovereignty of the nation |\n| 5–6 October | **Women's March on Versailles** | Thousands of Parisian women march over bread; the royal family is forced to move to Paris |\n\nThe Bastille myth needs care. Its seven prisoners were four forgers, two men held because they were thought to be mentally ill, and one nobleman locked up at his family's request. No political prisoners were freed. But its fall terrified the king and inspired people across France. Today 14 July is France's national day.\n\nIn only five months France moved from absolute monarchy towards **constitutional monarchy**, where the king's power is limited by law. The Declaration's first article set out the big principle:\n\n> “Men are born and remain free and equal in rights.” — Declaration of the Rights of Man and of the Citizen, Article 1, 26 August 1789",
      diagram: `<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline of 1789 from the Estates-General in May to the Women's March in October"><text x="240" y="20" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">1789: May to October</text><line x1="30" y1="100" x2="460" y2="100" stroke="#334155" stroke-width="2"/><line x1="40" y1="94" x2="40" y2="106" stroke="#334155"/><text x="44" y="185" font-size="10" font-family="sans-serif" fill="#1f2937">May</text><line x1="113" y1="94" x2="113" y2="106" stroke="#334155"/><text x="117" y="185" font-size="10" font-family="sans-serif" fill="#1f2937">Jun</text><line x1="184" y1="94" x2="184" y2="106" stroke="#334155"/><text x="188" y="185" font-size="10" font-family="sans-serif" fill="#1f2937">Jul</text><line x1="257" y1="94" x2="257" y2="106" stroke="#334155"/><text x="261" y="185" font-size="10" font-family="sans-serif" fill="#1f2937">Aug</text><line x1="330" y1="94" x2="330" y2="106" stroke="#334155"/><text x="334" y="185" font-size="10" font-family="sans-serif" fill="#1f2937">Sep</text><line x1="401" y1="94" x2="401" y2="106" stroke="#334155"/><text x="405" y="185" font-size="10" font-family="sans-serif" fill="#1f2937">Oct</text><circle cx="49" cy="100" r="6" fill="#c7d2fe" stroke="#334155"/><text x="49" y="70" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">5 May</text><text x="49" y="84" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Estates-Gen.</text><circle cx="158" cy="100" r="6" fill="#c7d2fe" stroke="#334155"/><text x="158" y="128" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">20 June</text><text x="158" y="142" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Tennis Court</text><text x="158" y="155" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Oath</text><circle cx="215" cy="100" r="7" fill="#fecaca" stroke="#334155"/><text x="215" y="56" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">14 July</text><text x="215" y="70" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Bastille</text><text x="215" y="84" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">stormed</text><circle cx="264" cy="100" r="6" fill="#fde68a" stroke="#334155"/><text x="264" y="128" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">4 Aug</text><text x="264" y="142" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Privileges</text><text x="264" y="155" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">abolished</text><circle cx="316" cy="100" r="6" fill="#bbf7d0" stroke="#334155"/><text x="316" y="56" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">26 Aug</text><text x="316" y="70" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Rights of</text><text x="316" y="84" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Man</text><circle cx="410" cy="100" r="6" fill="#fecaca" stroke="#334155"/><text x="410" y="128" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">5–6 Oct</text><text x="410" y="142" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Women's March</text><text x="410" y="155" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">on Versailles</text></svg>`,
      diagramCaption:
        "Five months that turned an absolute monarchy into a constitutional one. Notice how political change (May–June) and popular violence (July–October) drove each other on.",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem: "Explain why the storming of the Bastille was significant. (4 marks)",
          steps: [
            "Significance is about consequences and meaning, not a description of the fighting.",
            "Consequence 1: Louis lost control of Paris — he pulled his troops back, recalled Necker and visited Paris wearing the revolutionary cockade.",
            "Consequence 2: it spread revolt — news of it helped spark the Great Fear in the countryside, which pushed the Assembly to abolish feudal privileges on 4 August.",
            "Symbolic meaning: the Bastille stood for royal power to imprison without trial, so its fall became the founding moment of the Revolution, even though it held only seven prisoners.",
          ],
          answer:
            "The storming of the Bastille on 14 July 1789 was significant because it showed that the king had lost control of his capital. Within days Louis XVI withdrew the troops around Paris, recalled Necker and visited the city wearing the revolutionary cockade. It also spread the revolt: news reached the countryside, adding to the Great Fear, when peasants attacked châteaux, and this pushed the Assembly to abolish feudal privileges on 4 August. Finally, it was hugely symbolic. The Bastille stood for the king's power to imprison people without trial, so even though only seven prisoners were inside, its fall became the symbol of the Revolution and 14 July is still France's national day.",
          yourTurn: {
            question: "How many prisoners were being held in the Bastille when it was stormed on 14 July 1789?",
            answer: { type: "number", value: 7 },
            solution: "Seven: four forgers, two men thought to be mentally ill and one nobleman held at his family's request. The crowd mainly wanted gunpowder.",
          },
        },
        {
          title: "Model answer walkthrough: source inference",
          problem:
            "> “Men are born and remain free and equal in rights. Social distinctions may be founded only upon the general good.” — Declaration of the Rights of Man and of the Citizen, Article 1, 1789\n\nWhat can you infer from this source about the aims of the National Assembly? (2 marks)",
          steps: [
            "An inference is something the source suggests but does not say outright. Use the phrase “This suggests…”.",
            "“Equal in rights” attacks the Ancien Régime directly — privilege by birth is being rejected.",
            "“Only upon the general good” suggests differences in rank must now be useful to everyone, not inherited.",
          ],
          answer:
            "This suggests the Assembly aimed to end the system of privilege by birth, because it says all men are “equal in rights”, which contradicts the three estates. It also suggests they wanted any differences in status to be based on usefulness to society (“the general good”) rather than on family or title.",
        },
      ],
      keyPoints: [
        "17 June: the Third Estate declared itself the National Assembly; 20 June: Tennis Court Oath.",
        "14 July: the storming of the Bastille — it held only 7 prisoners; the crowd wanted gunpowder.",
        "4 August: feudal privileges abolished; 26 August: Declaration of the Rights of Man and of the Citizen.",
        "5–6 October: the Women's March on Versailles brought the royal family to Paris.",
        "By the end of 1789 France was moving from absolute to constitutional monarchy.",
      ],
      whyItWorks:
        "1789 shows two forces pushing each other: deputies making legal changes at Versailles, and ordinary people using direct action in Paris and the countryside. Each time the king seemed to resist, popular violence forced him to give way — and each time the people rose, the Assembly went further. That pattern of pressure from below continued for the next five years.",
      strategies: ["Use the chronology", "Check the provenance (NOP)", "Ask “who benefits?”"],
      thinkDeeper:
        "The Declaration says “men” are born free and equal. Did the deputies mean all human beings, or only men — and which men? Keep this question in mind until the final section; it is the key to judging how much the Revolution changed.",
    },
    // ------------------------------------------------------------------ 4
    {
      id: "radical-revolution",
      heading: "From monarchy to Republic and Terror",
      discovery: {
        problem:
          "January 1793. You are a deputy in the **National Convention**. Louis XVI — now called plain “Louis Capet” — has been found guilty of conspiring with France's enemies. Austria and Prussia are at war with France. You must vote on his punishment:\n\n- **death**\n- **prison** until the war ends\n- **exile** abroad\n\nWeigh it up. If he lives, could foreign armies or French royalists use him as a figurehead? If he dies, will he become a martyr, and will the rest of Europe's kings turn even harder against France? And does “equal before the law” mean a king can be tried like anyone else?\n\nMake your choice and write one reason before reading on.",
        idea:
          "The Convention found Louis guilty overwhelmingly, and a narrow majority voted for death. He was guillotined on 21 January 1793. The decision shows how **war and fear radicalised the Revolution**: deputies who in 1789 had wanted a constitutional king now believed the Republic could not be safe while he lived. Within weeks France was at war with Britain too, and the same logic — “enemies everywhere, so emergency measures are justified” — led to the Terror.",
      },
      body:
        "After 1789 many hoped France would settle down as a constitutional monarchy. Instead it became more radical.\n\n- **Flight to Varennes (20–21 June 1791).** The royal family tried to escape in disguise towards the eastern border but were recognised and stopped at Varennes. Many now saw Louis as a traitor.\n- **The 1791 Constitution** kept the king but limited his power. Only “active citizens” — men who paid a certain amount of tax — could vote.\n- **War (from April 1792).** France declared war on Austria; Prussia joined Austria. Defeats and fear of invasion made people suspect enemies at home.\n- **10 August 1792.** Crowds stormed the Tuileries Palace and the king was imprisoned.\n- **The Republic (September 1792).** A new assembly, the **National Convention**, elected by almost all adult men, abolished the monarchy on 21 September; the Republic began the next day.\n- **21 January 1793.** Louis was guillotined in Paris. Marie Antoinette was executed in October 1793.\n\n**The Terror (1793–94).** Facing foreign war, civil war in the Vendée region and food shortages, the Convention gave huge power to the **Committee of Public Safety**, whose best-known member was **Maximilien Robespierre**. The Law of Suspects (September 1793) let the authorities arrest almost anyone thought to oppose the Revolution. Historians estimate that about **17,000 people were officially executed**. Many thousands more died in prison or were killed without trial, so the full toll was far higher and is still debated. Most victims were not nobles: more than half were peasants and workers.\n\nIn July 1794 the Convention turned on Robespierre. He was arrested on 27 July and guillotined the next day, and the Terror wound down.\n\n> “Terror is nothing other than justice, prompt, severe, inflexible.” — Maximilien Robespierre, speech to the National Convention, February 1794 (translated)",
      diagram: `<svg viewBox="0 0 480 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline of the French Revolution from 1789 to 1804, drawn to scale"><text x="240" y="16" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">From revolution to empire, 1789–1804</text><line x1="30" y1="110" x2="450" y2="110" stroke="#334155" stroke-width="2"/><line x1="30" y1="106" x2="30" y2="114" stroke="#334155"/><line x1="58" y1="106" x2="58" y2="114" stroke="#334155"/><line x1="86" y1="106" x2="86" y2="114" stroke="#334155"/><line x1="114" y1="106" x2="114" y2="114" stroke="#334155"/><line x1="142" y1="106" x2="142" y2="114" stroke="#334155"/><line x1="170" y1="106" x2="170" y2="114" stroke="#334155"/><line x1="198" y1="106" x2="198" y2="114" stroke="#334155"/><line x1="226" y1="106" x2="226" y2="114" stroke="#334155"/><line x1="254" y1="106" x2="254" y2="114" stroke="#334155"/><line x1="282" y1="106" x2="282" y2="114" stroke="#334155"/><line x1="310" y1="106" x2="310" y2="114" stroke="#334155"/><line x1="338" y1="106" x2="338" y2="114" stroke="#334155"/><line x1="366" y1="106" x2="366" y2="114" stroke="#334155"/><line x1="394" y1="106" x2="394" y2="114" stroke="#334155"/><line x1="422" y1="106" x2="422" y2="114" stroke="#334155"/><line x1="450" y1="106" x2="450" y2="114" stroke="#334155"/><line x1="30" y1="77" x2="30" y2="110" stroke="#334155" stroke-dasharray="2,2"/><circle cx="30" cy="110" r="5" fill="#c7d2fe" stroke="#334155"/><text x="24" y="60" font-size="11" text-anchor="start" font-family="sans-serif" fill="#1f2937" font-weight="bold">1789</text><text x="24" y="73" font-size="10" text-anchor="start" font-family="sans-serif" fill="#1f2937">Bastille</text><line x1="86" y1="110" x2="86" y2="125" stroke="#334155" stroke-dasharray="2,2"/><circle cx="86" cy="110" r="5" fill="#c7d2fe" stroke="#334155"/><text x="86" y="136" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">1791</text><text x="86" y="149" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Varennes</text><line x1="114" y1="51" x2="114" y2="110" stroke="#334155" stroke-dasharray="2,2"/><circle cx="114" cy="110" r="5" fill="#fde68a" stroke="#334155"/><text x="114" y="34" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">1792</text><text x="114" y="47" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Republic</text><line x1="142" y1="110" x2="142" y2="159" stroke="#334155" stroke-dasharray="2,2"/><circle cx="142" cy="110" r="5" fill="#fecaca" stroke="#334155"/><text x="142" y="170" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">1793</text><text x="142" y="183" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Louis executed</text><text x="142" y="196" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Terror begins</text><line x1="170" y1="90" x2="170" y2="110" stroke="#334155" stroke-dasharray="2,2"/><circle cx="170" cy="110" r="5" fill="#fecaca" stroke="#334155"/><text x="170" y="60" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">1794</text><text x="170" y="73" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Robespierre falls</text><text x="170" y="86" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Slavery abolished</text><line x1="198" y1="110" x2="198" y2="125" stroke="#334155" stroke-dasharray="2,2"/><circle cx="198" cy="110" r="5" fill="#bbf7d0" stroke="#334155"/><text x="198" y="136" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">1795</text><text x="198" y="149" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Directory</text><line x1="310" y1="51" x2="310" y2="110" stroke="#334155" stroke-dasharray="2,2"/><circle cx="310" cy="110" r="5" fill="#bbf7d0" stroke="#334155"/><text x="310" y="34" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">1799</text><text x="310" y="47" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Napoleon's coup</text><line x1="394" y1="110" x2="394" y2="125" stroke="#334155" stroke-dasharray="2,2"/><circle cx="394" cy="110" r="5" fill="#bae6fd" stroke="#334155"/><text x="394" y="136" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">1802</text><text x="394" y="149" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Slavery restored</text><line x1="450" y1="90" x2="450" y2="110" stroke="#334155" stroke-dasharray="2,2"/><circle cx="450" cy="110" r="5" fill="#bae6fd" stroke="#334155"/><text x="456" y="60" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937" font-weight="bold">1804</text><text x="456" y="73" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">Napoleon Emperor</text><text x="456" y="86" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">Haiti independent</text><text x="240" y="222" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Spacing is to scale: one tick = one year.</text></svg>`,
      diagramCaption:
        "Drawn to scale: the monarchy fell, the king was executed and the Terror rose and fell in just three years (1792–94). Then the Revolution slowed and turned towards one-man rule.",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem: "Explain why the Terror happened in 1793–94. (4 marks)",
          steps: [
            "Sort the causes first: threats from outside, threats from inside, and ideas.",
            "Outside: war with Austria, Prussia and (from 1793) Britain — invasion seemed possible.",
            "Inside: civil war in the Vendée, rebellions in other regions, and hunger in Paris.",
            "Ideas: Robespierre argued that the Republic needed both virtue and terror to survive. Link the factors: war and rebellion created the fear; Robespierre's ideas justified the response.",
          ],
          answer:
            "One reason for the Terror was war. From 1792 France was fighting Austria and Prussia, and from 1793 Britain as well, so the government feared invasion and believed traitors inside France were helping the enemy. A second reason was rebellion at home, such as the civil war in the Vendée, which made the Convention give emergency powers to the Committee of Public Safety. These threats were linked to ideas: Robespierre argued that terror was a form of “justice” needed to protect the Republic, so laws like the Law of Suspects (September 1793) were used to arrest and execute anyone seen as an enemy. War and rebellion created the fear, and Robespierre's ideas turned that fear into a system.",
          yourTurn: {
            question: "In what year was Louis XVI executed?",
            answer: { type: "number", value: 1793 },
            solution: "21 January 1793, by guillotine, in Paris. The Republic had been declared in September 1792.",
          },
        },
      ],
      keyPoints: [
        "Flight to Varennes (June 1791) destroyed trust in the king.",
        "War with Austria and Prussia from April 1792 radicalised the Revolution.",
        "Monarchy abolished and Republic declared in September 1792; Louis XVI executed 21 January 1793.",
        "The Terror (1793–94), led by the Committee of Public Safety and Robespierre: about 17,000 official executions, with many more deaths in prison or without trial.",
        "Robespierre was overthrown and executed in July 1794.",
      ],
      whyItWorks:
        "War is the key to the radical Revolution. It turned political opponents into suspected traitors and made emergency measures seem necessary. The tragedy is that the Terror destroyed the very rights the 1789 Declaration had promised — such as the presumption of innocence and fair trial — in the name of protecting the Revolution.",
      strategies: ["Use the chronology", "Link the factors", "Sort causes into categories"],
      thinkDeeper:
        "The 1789 Declaration said everyone is presumed innocent until found guilty. The Terror arrested people simply for being “suspects”. Can a government protect rights by suspending them? Compare this with what you learned in Term 2 about emergency powers after the Reichstag Fire in 1933.",
    },
    // ------------------------------------------------------------------ 5
    {
      id: "napoleon",
      heading: "Napoleon and the end of the Revolution",
      discovery: {
        problem:
          "In 1802 French men were asked to vote in a **plebiscite** (a yes/no national vote): should Napoleon Bonaparte be Consul for life? In 1804 they were asked to approve him becoming Emperor. Official results said that well over 99% voted **yes** each time.\n\nTwo puzzles:\n\n1. Why would a nation that overthrew its king in 1792 vote for an emperor twelve years later?\n2. Should a historian trust those figures? What would you want to know about *how* the vote was held?",
        idea:
          "After ten years of upheaval, many people wanted **order** — and wanted to keep what they had gained, such as land and the end of feudal dues. Napoleon promised both. But the figures need care: people voted by signing their names in public registers, so saying no was risky, and historians have shown that the 1800 plebiscite results were inflated by Napoleon's brother Lucien. The results are evidence of real support *and* of a government controlling the outcome — a pattern you saw with dictators in Term 2.",
      },
      body:
        "After Robespierre's fall, a new constitution created the **Directory** (from 1795): five Directors and a two-chamber parliament, with voting again limited by property. It was unpopular, unstable and increasingly relied on the army.\n\n**Napoleon Bonaparte**, born in Corsica in 1769, became a hero through victories in Italy (1796–97). On **9 November 1799** he seized power in a **coup d'état**. He ruled as **First Consul**, became Consul for life in 1802, and on **2 December 1804** crowned himself **Emperor** in Notre-Dame Cathedral.\n\n| Kept from the Revolution | Reversed or betrayed |\n|---|---|\n| Equality before the law for men; no return of feudal dues | Censorship: most Paris newspapers closed (1800); a powerful police ministry |\n| Careers “open to talent” — jobs by merit, not birth | Elected assemblies had little real power; plebiscites instead of real choice |\n| Religious toleration (agreement with the Pope, 1801) | Slavery restored in the colonies (1802) |\n| Peasants kept Church land they had bought | A hereditary emperor and a new imperial nobility |\n\nHis most lasting work was the **Civil Code** of 1804, the **Napoleonic Code**. It gave France one set of laws: equality before the law, property rights and freedom of religion. But it made women legally subordinate. Married women needed their husband's permission to manage property or sign contracts, and divorce became harder, especially for wives.\n\n> “The husband owes protection to his wife; the wife owes obedience to her husband.” — Napoleonic Code, Article 213, 1804\n\nNapoleon's armies spread the Code across Europe, ending feudal privileges in many conquered lands. He was finally defeated at **Waterloo** in 1815, and the Bourbon monarchy returned under Louis XVIII.",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem: "“Napoleon betrayed the ideals of the French Revolution.” How far do you agree? (6 marks)",
          steps: [
            "Define the ideals first: liberty, equality and the rights set out in 1789 (including the sovereignty of the nation).",
            "Agree, with evidence: liberty and representation were crushed — censorship, plebiscites with no real choice, an emperor, slavery restored (1802).",
            "Disagree, with evidence: civil equality survived and spread — equality before the law, careers open to talent, no return of feudalism, the Napoleonic Code exported across Europe.",
            "Judge: which ideal did he keep and which did he betray? A strong answer splits the ideals rather than saying “a bit of both”.",
          ],
          answer:
            "I partly agree. Napoleon betrayed the Revolution's ideal of liberty and its promise that power belonged to the nation. He seized power in a coup in 1799, closed most Paris newspapers, made himself Emperor in 1804 and used plebiscites in which people voted publicly, so there was little real choice. He also restored slavery in 1802, reversing the abolition of 1794. However, he kept and spread the Revolution's idea of equality before the law. The Napoleonic Code (1804) ended privilege by birth, protected property and religious freedom, and opened careers to talent, and it was carried across Europe. Even so, this equality applied mainly to men, since the Code made wives obey their husbands. Overall, Napoleon kept the Revolution's equality for men but betrayed its liberty — so the statement is true for political rights but not for legal equality.",
          yourTurn: {
            question: "In what year did Napoleon crown himself Emperor of the French?",
            answer: { type: "number", value: 1804 },
            solution: "2 December 1804, in Notre-Dame Cathedral, Paris. The Napoleonic Code was also issued in 1804.",
          },
        },
      ],
      keyPoints: [
        "The Directory (1795–99) was unstable and depended on the army.",
        "Napoleon seized power in a coup on 9 November 1799 and became First Consul.",
        "He became Emperor in 1804; plebiscites gave him a show of popular approval.",
        "The Napoleonic Code (1804) kept equality before the law for men but made wives legally subordinate to husbands.",
        "He restored slavery in 1802, censored the press and was finally defeated at Waterloo in 1815.",
      ],
      whyItWorks:
        "Napoleon succeeded because he offered the French what a decade of revolution had not: stability, victory and security for what they had gained, such as land and legal equality. The price was liberty and real representation. That trade-off — order in exchange for freedom — is a pattern you met in Term 2, and it explains why historians still argue over whether he ended the Revolution or completed it.",
      strategies: ["Weigh both sides, then judge", "Look for change AND continuity", "Check the provenance (NOP)"],
      thinkDeeper:
        "Louis XVI and Napoleon both held power alone. List three ways Napoleon's power was *different* from Louis's (think: where his power came from, how he chose officials, what laws he made). Was 1804 a return to 1788, or something new?",
    },
    // ------------------------------------------------------------------ 6
    {
      id: "revolution-change-and-continuity",
      heading: "How much did the Revolution change?",
      discovery: {
        problem:
          "Article 1 of the 1789 Declaration says: “Men are born and remain free and equal in rights.”\n\nHere are five people living under French rule in 1789:\n\n- a **Protestant** shopkeeper in Nîmes\n- a **Jewish** merchant in Bordeaux\n- a **poor labourer** in Paris who pays almost no tax\n- a **woman** who runs a printing business in Lyon\n- an **enslaved man** on a sugar plantation in Saint-Domingue (today Haiti)\n\nPredict: which of them gained equal rights during the Revolution? Which kept them by 1815? Rank them from “gained most” to “gained least”.",
        idea:
          "Rights spread **unevenly**. Protestants and Jews gained full citizenship by 1791 and kept it. Poor men gained the vote in 1792 but lost real representation under the Directory and Napoleon. Women gained a few legal rights but no vote, and the Napoleonic Code made wives subordinate. Enslaved people won freedom in 1794 — largely by their own revolt — then had slavery restored in 1802, except in Haiti, which won independence. Judging a revolution means asking **“change for whom?”** and **“did it last?”**",
      },
      body:
        "The motto **“Liberty, Equality, Fraternity”** was used in the 1790s and later became the official motto of the French Republic. But how far did those words become real, and for whom? Look for **change AND continuity**, group by group.\n\n| Group | Before 1789 | During the Revolution | By 1815 |\n|---|---|---|---|\n| Peasants | Paid feudal dues and the tithe | Both abolished (1789–93) | Never restored — **lasting change** |\n| Protestants | Limited rights | Full civil rights (December 1789) | Kept |\n| Jews | Not citizens | Full citizens by 1791 | Kept, with some restrictions under Napoleon |\n| Poorer men | No vote | Taxpayers only (1791); almost all men (1792) | Plebiscites with little real choice |\n| Women | No political rights | Divorce allowed (1792); no vote; women's clubs banned (1793) | Wives must obey husbands (1804); no vote until 1944 |\n| Enslaved people | Slavery in the colonies | Revolt in Saint-Domingue (1791); slavery abolished (1794) | Restored (1802); Haiti independent (1804); final French abolition 1848 |\n\n**Olympe de Gouges**, a playwright, saw the gap. In 1791 she wrote the *Declaration of the Rights of Woman and of the Female Citizen*, rewriting the 1789 Declaration to include women. She was guillotined in 1793.\n\n> “Woman has the right to mount the scaffold; she must equally have the right to mount the rostrum.” — Olympe de Gouges, *Declaration of the Rights of Woman*, Article 10, 1791\n\nIn Saint-Domingue, France's richest colony, enslaved people rose up in 1791. Led by figures such as **Toussaint Louverture**, their revolt — not just debates in Paris — forced abolition in 1794. Their resistance to Napoleon created **Haiti**, the first state founded by formerly enslaved people.\n\nThe ideas outlived the setbacks: the 1789 Declaration influenced later rights documents, including the Universal Declaration of Human Rights (1948).",
      diagram: `<svg viewBox="0 0 480 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Change and continuity scale judging how much different aspects of French life had changed by 1815"><text x="240" y="18" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">How much had changed by 1815?</text><text x="205" y="40" font-size="11" font-family="sans-serif" fill="#1f2937">Little change</text><text x="455" y="40" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">Lasting change</text><text x="10" y="69" font-size="11" font-family="sans-serif" fill="#1f2937">Feudal dues and privilege</text><line x1="205" y1="65" x2="455" y2="65" stroke="#334155" stroke-width="1.5"/><line x1="330" y1="61" x2="330" y2="69" stroke="#334155"/><circle cx="442" cy="65" r="7" fill="#bbf7d0" stroke="#334155" stroke-width="1.5"/><text x="10" y="101" font-size="11" font-family="sans-serif" fill="#1f2937">Equality before the law (men)</text><line x1="205" y1="97" x2="455" y2="97" stroke="#334155" stroke-width="1.5"/><line x1="330" y1="93" x2="330" y2="101" stroke="#334155"/><circle cx="418" cy="97" r="7" fill="#bbf7d0" stroke="#334155" stroke-width="1.5"/><text x="10" y="133" font-size="11" font-family="sans-serif" fill="#1f2937">Protestants' and Jews' rights</text><line x1="205" y1="129" x2="455" y2="129" stroke="#334155" stroke-width="1.5"/><line x1="330" y1="125" x2="330" y2="133" stroke="#334155"/><circle cx="400" cy="129" r="7" fill="#bbf7d0" stroke="#334155" stroke-width="1.5"/><text x="10" y="165" font-size="11" font-family="sans-serif" fill="#1f2937">Men's vote / representation</text><line x1="205" y1="161" x2="455" y2="161" stroke="#334155" stroke-width="1.5"/><line x1="330" y1="157" x2="330" y2="165" stroke="#334155"/><circle cx="318" cy="161" r="7" fill="#fde68a" stroke="#334155" stroke-width="1.5"/><text x="10" y="197" font-size="11" font-family="sans-serif" fill="#1f2937">One-man rule (king → emperor)</text><line x1="205" y1="193" x2="455" y2="193" stroke="#334155" stroke-width="1.5"/><line x1="330" y1="189" x2="330" y2="197" stroke="#334155"/><circle cx="268" cy="193" r="7" fill="#fecaca" stroke="#334155" stroke-width="1.5"/><text x="10" y="229" font-size="11" font-family="sans-serif" fill="#1f2937">Freedom for enslaved people</text><line x1="205" y1="225" x2="455" y2="225" stroke="#334155" stroke-width="1.5"/><line x1="330" y1="221" x2="330" y2="229" stroke="#334155"/><circle cx="242" cy="225" r="7" fill="#fecaca" stroke="#334155" stroke-width="1.5"/><text x="10" y="261" font-size="11" font-family="sans-serif" fill="#1f2937">Women's political rights</text><line x1="205" y1="257" x2="455" y2="257" stroke="#334155" stroke-width="1.5"/><line x1="330" y1="253" x2="330" y2="261" stroke="#334155"/><circle cx="220" cy="257" r="7" fill="#fecaca" stroke="#334155" stroke-width="1.5"/><text x="240" y="296" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Each dot is a judgement to argue with, not a fact.</text></svg>`,
      diagramCaption:
        "A change-and-continuity scale. Feudal privilege was gone for good; for women and enslaved people in the French colonies, 1815 looked much like 1789. Where would you move each dot — and why?",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem: "How far did the French Revolution bring equality to the people of France between 1789 and 1815? (6 marks)",
          steps: [
            "Set your criteria: equality before the law, equal political rights (the vote), and who was included.",
            "Evidence of change: feudal privileges abolished (1789) and never restored; Protestants and Jews became full citizens; the Napoleonic Code kept equality before the law.",
            "Evidence of continuity or limits: women never gained the vote and the Code made wives obey husbands; slavery was abolished in 1794 but restored in 1802; the vote for all men (1792) did not last.",
            "Judge: equality changed most for men's legal status and least for political rights and for women and enslaved people. Say which matters most and why.",
          ],
          answer:
            "The Revolution brought a large and lasting change in legal equality for men. Feudal privileges were abolished in August 1789 and never came back, and Protestants and Jews became full citizens by 1791. Even Napoleon's Code of 1804 kept equality before the law. However, political equality did not last: almost all men could vote in 1792, but the Directory brought back property qualifications and Napoleon's plebiscites gave little real choice. For some groups there was mostly continuity. Women never gained the vote, and the Code made wives obey their husbands. Slavery was abolished in 1794 but restored in 1802. Overall, the Revolution destroyed privilege by birth for men, which was a real turning point, but equality stopped short for women and enslaved people, so its success was limited to some groups.",
          yourTurn: {
            question: "Who wrote the *Declaration of the Rights of Woman and of the Female Citizen* in 1791?",
            answer: { type: "text", accept: ["Olympe de Gouges", "de Gouges", "Gouges", "Olympe"], display: "Olympe de Gouges" },
            solution: "Olympe de Gouges, a playwright and political writer. She was guillotined in November 1793.",
          },
        },
        {
          title: "Model answer walkthrough: provenance",
          problem:
            "How useful is Olympe de Gouges's *Declaration of the Rights of Woman* (1791) for a historian studying women's rights during the French Revolution? (4 marks)",
          steps: [
            "Use NOP: Nature (a published political pamphlet), Origin (a woman writer in Paris, 1791), Purpose (to persuade the Assembly to include women).",
            "Useful for: showing that some women demanded equal rights and that the 1789 Declaration was seen as excluding them.",
            "Limitation: it is one campaigner's view, so it does not tell us how many women agreed or what rights women actually got.",
            "Ask “useful for what?” — it is very useful for demands, less useful for results. Cross-reference with the 1793 ban on women's clubs.",
          ],
          answer:
            "The source is useful because it shows that in 1791 at least some women saw the Declaration of the Rights of Man as excluding them and demanded equal rights, including political rights. Its purpose was to persuade the National Assembly, so it tells us clearly what campaigners wanted. However, it is the view of one writer, so it does not show how typical her views were, and it tells us about demands rather than results. To find out what women actually gained, a historian would need other evidence, such as the 1793 ban on women's political clubs and the Napoleonic Code. Overall, it is very useful for studying women's demands, but less useful for judging how much changed.",
          yourTurn: {
            question: "In what year did Haiti declare its independence from France?",
            answer: { type: "number", value: 1804 },
            solution: "1 January 1804, led by Jean-Jacques Dessalines, after defeating the army Napoleon sent to restore French control.",
          },
        },
      ],
      keyPoints: [
        "“Liberty, Equality, Fraternity” — but the Revolution's rights were applied unevenly.",
        "Lasting change: feudal privilege ended; Protestants and Jews became citizens; equality before the law (for men).",
        "Limited or reversed: the vote for all men (1792) did not last; women never gained the vote (not until 1944).",
        "Olympe de Gouges wrote the Declaration of the Rights of Woman (1791) and was executed in 1793.",
        "Slavery was abolished in 1794 after the Saint-Domingue revolt, restored in 1802; Haiti became independent in 1804.",
      ],
      whyItWorks:
        "Rights expanded fastest where groups could apply pressure — the Paris crowd, property-owning men, enslaved people in revolt — and stalled where leaders feared disorder or saw a group as naturally dependent, like women. But the Declaration spoke in universal language, so excluded groups could use its own words against it. That is why its long-term significance is greater than its immediate results: de Gouges, the Haitian revolutionaries and, later, the suffragettes all argued from the same principle.",
      strategies: ["Look for change AND continuity", "Ask “useful for what?”", "Zoom out to the big picture", "Compare case studies"],
      thinkDeeper:
        "Article 12 of Singapore's Constitution says: “All persons are equal before the law and entitled to the equal protection of the law.” The 1789 Declaration said “Men are born and remain free and equal in rights.” What has changed in the wording, and why might “all persons” matter? Then think ahead to Votes for Women: what does it take for a promise of equality to include everyone?",
    },
  ],
  learn: {
    flashcards: [
      { front: "What was the Ancien Régime?", back: "The “old order” in France before 1789: absolute monarchy by Divine Right and a society divided into three estates with privileges by birth." },
      { front: "Who were the three estates, and roughly what share of the population was each?", back: "First: clergy (under 1%). Second: nobility (about 2%). Third: everyone else (about 97%)." },
      { front: "What were the taille, the tithe and the gabelle?", back: "The taille was the main direct royal tax; the tithe was a share of produce paid to the Church; the gabelle was the tax on salt. The Third Estate carried the burden of all three." },
      { front: "Name three Enlightenment thinkers and one idea of each.", back: "Montesquieu: separate the powers of government. Voltaire: religious tolerance and free speech. Rousseau: sovereignty belongs to the people." },
      { front: "Why was the French crown nearly bankrupt by 1788?", back: "Costly wars, especially helping the Americans against Britain (1778–83); by 1788 about half of spending went on interest, and the privileged refused new taxes." },
      { front: "What was the Tennis Court Oath (20 June 1789)?", back: "Members of the National Assembly, locked out of their hall, swore in an indoor tennis court not to separate until France had a constitution." },
      { front: "Why did the crowd attack the Bastille on 14 July 1789?", back: "To seize gunpowder, and because it symbolised royal power to imprison without trial. It held only 7 prisoners." },
      { front: "What did the Declaration of the Rights of Man and of the Citizen (26 August 1789) say?", back: "Men are born and remain free and equal in rights; sovereignty belongs to the nation; liberty, property, security and resistance to oppression are natural rights; everyone is presumed innocent until found guilty." },
      { front: "What was the Flight to Varennes?", back: "The royal family's failed attempt to escape France in June 1791. They were caught at Varennes, and trust in Louis collapsed." },
      { front: "When was the French Republic declared, and when was Louis XVI executed?", back: "The monarchy was abolished on 21 September 1792 and the Republic began the next day; Louis XVI was guillotined on 21 January 1793." },
      { front: "What was the Reign of Terror?", back: "1793–94: the Committee of Public Safety (Robespierre) used emergency laws to arrest and execute suspected enemies. About 17,000 official executions; many more died in prison or without trial." },
      { front: "When and how did Robespierre fall?", back: "The Convention turned on him; he was arrested on 27 July 1794 and guillotined on 28 July 1794." },
      { front: "How did Napoleon come to power?", back: "A military coup on 9 November 1799. First Consul, Consul for life (1802), Emperor (crowned 2 December 1804)." },
      { front: "What did the Napoleonic Code (1804) keep and what did it limit?", back: "Kept equality before the law (for men), property rights and religious freedom. Limited women: wives had to obey their husbands." },
      { front: "Who was Olympe de Gouges?", back: "A playwright who wrote the Declaration of the Rights of Woman and of the Female Citizen (1791). She was guillotined in 1793." },
      { front: "What happened to slavery in the French colonies?", back: "Abolished on 4 February 1794 after the Saint-Domingue revolt; restored by Napoleon in 1802; Haiti won independence on 1 January 1804; final abolition 1848." },
    ],
    mustKnow: [
      "Can you describe the three estates and explain who paid taxes and who had privileges?",
      "Can you sort the causes of the Revolution into long-term, short-term and trigger, and link them?",
      "Can you explain why Louis XVI called the Estates-General and why it had not met since 1614?",
      "Can you put the key events of 1789 in order, with dates?",
      "Can you explain why the storming of the Bastille was significant even though it held only 7 prisoners?",
      "Can you explain how war led to the Republic, the execution of the king and the Terror?",
      "Can you give the Terror's official death toll (about 17,000) and explain why the full total is an estimate?",
      "Can you argue both sides of “Napoleon betrayed the Revolution”?",
      "Can you judge how far the Revolution changed equality, representation and rights for different groups?",
      "Can you explain the contributions of Olympe de Gouges and the Haitian Revolution?",
    ],
    misconceptions: [
      { wrong: "Marie Antoinette said “Let them eat cake” when told the poor had no bread.", right: "There is no good evidence she said it. A similar line appears in Rousseau's *Confessions*, written when she was a child in Austria. The story spread because it fitted the image of an out-of-touch queen." },
      { wrong: "The storming of the Bastille freed hundreds of political prisoners.", right: "It held only 7 prisoners — four forgers, two men thought to be mentally ill and one nobleman. The crowd mainly wanted gunpowder; the Bastille mattered as a symbol." },
      { wrong: "The Third Estate was all poor peasants.", right: "It included rich bankers, merchants and lawyers (the bourgeoisie) as well as workers and peasants. Many revolutionary leaders came from the bourgeoisie." },
      { wrong: "The Revolution immediately made France a democracy where everyone could vote.", right: "In 1791 only tax-paying men could vote; almost all men voted in 1792 but this did not last; women could not vote in France until 1944." },
      { wrong: "Most victims of the Terror were nobles.", right: "Most victims were ordinary people: more than half of those officially executed were peasants and workers. Nobles were a small minority." },
      { wrong: "The Revolution ended slavery for good.", right: "Slavery was abolished in 1794 but Napoleon restored it in 1802. France only abolished it for good in 1848. Haiti freed itself by winning independence in 1804." },
      { wrong: "“Liberty, Equality, Fraternity” meant equality for everyone.", right: "In practice the rights of 1789 were mostly for men. Women and enslaved people had to fight for their inclusion, often unsuccessfully at the time." },
    ],
    examMistakes: [
      "Telling the story of 1789 instead of explaining causes — every paragraph needs a “because” or “this led to”.",
      "Listing causes without linking them (debt → tax crisis → Estates-General).",
      "Mixing up the Declaration of the Rights of Man (1789) with the Declaration of the Rights of Woman (Olympe de Gouges, 1791).",
      "Muddling the order of 1792–93: the Republic was declared (September 1792) before Louis XVI was executed (January 1793).",
      "Stating the Terror's death toll as an exact fact — say “about 17,000 official executions” and that the full total is an estimate.",
      "Answering “how far” questions with no judgement, or with “a bit of both” and no reason.",
      "Forgetting to ask “change for whom?” — the Revolution affected men, women and enslaved people very differently.",
      "Repeating myths (“Let them eat cake”, crowds freeing hundreds from the Bastille) as fact.",
    ],
    mnemonics: [
      { topic: "The Three Estates", device: "Pray, Fight, Pay", explanation: "The clergy prayed, the nobles (traditionally) fought — and the Third Estate paid the taxes." },
      { topic: "Causes of the Revolution", device: "BREAD", explanation: "**B**ad harvest (1788), **R**oyal debt, **E**nlightenment ideas, **A**merican example, **D**ivided society of three estates. The trigger: calling the Estates-General." },
      { topic: "The order of events in 1789", device: "Every Tired Baker Gets Flour Delivered Weekly", explanation: "Estates-General (May), Tennis Court Oath (June), Bastille (July), Great Fear (late July), Feudal privileges abolished (4 Aug), Declaration of the Rights of Man (26 Aug), Women's March (Oct)." },
    ],
    realWorld: [
      { title: "Bastille Day", detail: "14 July has been France's national day since 1880. It remembers the storming of the Bastille (and the 1790 Festival of the Federation) as symbols of liberty and national unity — not the number of prisoners freed.", emoji: "🎆" },
      { title: "Human rights documents", detail: "The 1789 Declaration's language about equal and natural rights influenced later documents, including the Universal Declaration of Human Rights (1948). Singapore's Constitution also guarantees that “all persons are equal before the law”.", emoji: "📜" },
      { title: "Left and right in politics", detail: "In the 1789 Assembly, supporters of the king tended to sit on the president's right and those wanting bigger change on the left. Political “left” and “right” come from this seating.", emoji: "🪑" },
      { title: "The metric system", detail: "Revolutionary France introduced the metre and kilogram to replace hundreds of local measures. Most of the world — including Singapore — now uses it.", emoji: "📏" },
      { title: "Legal codes", detail: "The Napoleonic Code shaped the civil law of many countries in Europe, Latin America and beyond. The idea of one clear written law for everyone is a direct legacy of the Revolution.", emoji: "⚖️" },
    ],
    videos: [
      { title: "The French Revolution — overview", channel: "Crash Course World History", url: "https://www.youtube.com/results?search_query=crash+course+world+history+french+revolution" },
      { title: "The French Revolution (animated, in parts)", channel: "OverSimplified", url: "https://www.youtube.com/results?search_query=oversimplified+french+revolution" },
      { title: "The Haitian Revolution", channel: "Crash Course World History", url: "https://www.youtube.com/results?search_query=crash+course+haitian+revolutions" },
      { title: "Causes of the French Revolution for KS3", channel: "Search: KS3 history", url: "https://www.youtube.com/results?search_query=causes+of+the+french+revolution+ks3+history" },
      { title: "Olympe de Gouges and women in the Revolution", channel: "Search: history explainer", url: "https://www.youtube.com/results?search_query=olympe+de+gouges+declaration+of+the+rights+of+woman" },
    ],
    keyDates: [
      { year: 1774, date: "1774", event: "Louis XVI becomes king", note: "He inherits a country already deep in debt." },
      { year: 1788, date: "Aug 1788", event: "Louis agrees to call the Estates-General", note: "The crown is nearly bankrupt and the privileged have refused new taxes." },
      { year: 1789, date: "5 May 1789", event: "The Estates-General opens at Versailles", note: "First meeting since 1614." },
      { year: 1789, date: "20 Jun 1789", event: "Tennis Court Oath", note: "The National Assembly swears to give France a constitution." },
      { year: 1789, date: "14 Jul 1789", event: "Storming of the Bastille", note: "The king loses control of Paris." },
      { year: 1789, date: "4 Aug 1789", event: "Feudal privileges abolished", note: "The legal basis of the three estates is swept away." },
      { year: 1789, date: "26 Aug 1789", event: "Declaration of the Rights of Man and of the Citizen", note: "“Men are born and remain free and equal in rights.”" },
      { year: 1789, date: "5–6 Oct 1789", event: "Women's March on Versailles", note: "The royal family is brought to Paris." },
      { year: 1791, date: "20–21 Jun 1791", event: "Flight to Varennes", note: "The king's failed escape destroys trust in him." },
      { year: 1791, date: "Aug 1791", event: "Enslaved people rise up in Saint-Domingue", note: "The start of the Haitian Revolution." },
      { year: 1791, date: "Sep 1791", event: "Olympe de Gouges's Declaration of the Rights of Woman", note: "Demands that rights include women." },
      { year: 1792, date: "Apr 1792", event: "France declares war on Austria", note: "War radicalises the Revolution." },
      { year: 1792, date: "21–22 Sep 1792", event: "Monarchy abolished; the Republic begins", note: "The National Convention is elected by almost all adult men." },
      { year: 1793, date: "21 Jan 1793", event: "Louis XVI executed", note: "Europe's monarchies turn further against France." },
      { year: 1793, date: "Sep 1793", event: "Law of Suspects; the Terror intensifies", note: "Around 17,000 official executions take place during the Terror." },
      { year: 1794, date: "4 Feb 1794", event: "Slavery abolished in all French colonies", note: "Driven by the revolt in Saint-Domingue." },
      { year: 1794, date: "28 Jul 1794", event: "Robespierre executed", note: "The Terror ends." },
      { year: 1795, date: "Nov 1795", event: "The Directory takes power", note: "Voting is limited by property again." },
      { year: 1799, date: "9 Nov 1799", event: "Napoleon's coup", note: "He becomes First Consul." },
      { year: 1802, date: "1802", event: "Napoleon restores slavery", note: "The abolition of 1794 is reversed." },
      { year: 1804, date: "1 Jan 1804", event: "Haiti declares independence", note: "The first state founded by formerly enslaved people." },
      { year: 1804, date: "Mar 1804", event: "The Napoleonic Code", note: "Equality before the law for men; wives must obey husbands." },
      { year: 1804, date: "2 Dec 1804", event: "Napoleon crowned Emperor", note: "One-man rule returns in a new form." },
      { year: 1815, date: "1815", event: "Napoleon defeated at Waterloo", note: "The Bourbon monarchy returns under Louis XVIII." },
    ],
    keyTerms: [
      { term: "Ancien Régime", definition: "The “old order” in France before 1789: absolute monarchy and a society of privileged estates." },
      { term: "Absolute monarchy", definition: "Rule by a king or queen whose power is not limited by a parliament or written constitution." },
      { term: "Divine Right", definition: "The belief that a monarch's power comes from God, so subjects must obey and only God can judge the king." },
      { term: "Estates", definition: "The three orders of French society: clergy (First), nobility (Second) and everyone else (Third)." },
      { term: "Privilege", definition: "A special right or exemption, such as freedom from the taille, held because of birth or status." },
      { term: "Taille", definition: "The main direct royal tax, paid by the Third Estate; the clergy and nobility were exempt." },
      { term: "Bourgeoisie", definition: "The wealthy, educated middle class of the Third Estate: merchants, bankers, lawyers." },
      { term: "Enlightenment", definition: "An 18th-century movement of writers who used reason to question tradition, the Church and absolute monarchy." },
      { term: "Estates-General", definition: "An assembly of representatives of the three estates, called by the king; it had not met between 1614 and 1789." },
      { term: "National Assembly", definition: "The name the Third Estate's deputies took on 17 June 1789, claiming to represent the whole nation." },
      { term: "Constitutional monarchy", definition: "A system where the monarch's power is limited by a constitution and an elected assembly." },
      { term: "Sans-culottes", definition: "Radical working people of Paris, named for wearing long trousers instead of the knee-breeches (culottes) of the rich." },
      { term: "Republic", definition: "A state with no monarch, where power belongs to the people and their elected representatives." },
      { term: "Committee of Public Safety", definition: "The emergency committee that ran France during the Terror (1793–94); Robespierre was its best-known member." },
      { term: "Reign of Terror", definition: "The period 1793–94 when the revolutionary government arrested and executed suspected enemies on a large scale." },
      { term: "Coup d'état", definition: "A sudden, illegal seizure of power, usually backed by the army — as Napoleon did in November 1799." },
      { term: "Plebiscite", definition: "A yes/no vote by the whole electorate on a single question; Napoleon used them to show approval for his rule." },
      { term: "Napoleonic Code", definition: "The French Civil Code of 1804: one law for all, with equality before the law for men but legal subordination of wives." },
    ],
  },
};
