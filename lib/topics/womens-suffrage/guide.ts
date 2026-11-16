import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "womens-suffrage",
  title: "Votes for Women",
  strand: "Democracy & Rights",
  icon: "🗳️",
  summary: "Petitions, broken windows, a world war — and sixty years of struggle for the vote.",
  intro:
    "In 1900 not a single woman in Britain could vote for a Member of Parliament. By 1928 every woman over 21 could. This topic asks the Term 3 question — *how and why has democracy developed?* — through one of its biggest changes. You will meet the peaceful **suffragists** and the militant **suffragettes** (never mix them up!), the people who opposed them, and the war that changed everything. Then you will weigh the evidence and decide for yourself: *why* did women win the vote?",
  guide: [
    // ------------------------------------------------------------------ 1
    {
      id: "women-in-victorian-britain",
      heading: "Women's lives and rights in Victorian Britain",
      discovery: {
        problem:
          "It is 1865. Meet Mrs Ellen Hart (an invented but typical example). She is married, works in a Manchester cotton mill, and has some money left to her by her father.\n\n- Her wages and her inheritance legally belong to her husband.\n- She cannot divorce him for unfaithfulness alone.\n- Her daughter cannot take a degree at Oxford or Cambridge.\n- She cannot vote — and nor can her husband, because they rent a cheap house.\n\nYou can campaign to change only **one** of these first. Which would you choose, and why? Is there one change that might unlock all the others?",
        idea:
          "Many Victorian campaigners came to the same conclusion: **the vote was the key**. Laws about property, divorce and education were made by Parliament — and only men elected Parliament. Without the vote, women had to beg male MPs to change things for them. Notice too that Ellen's husband couldn't vote either: in the 1860s, voting depended on **property and class** as well as sex.",
      },
      body:
        "Victorian Britain was shaped by the idea of **separate spheres**: men belonged in the *public* sphere (work, business, politics) and women in the *private* sphere (home, children, caring). Many people, women included, believed this was natural and even God-given.\n\nThe law reflected it:\n\n- **Property:** a married woman's property and earnings belonged to her husband. The **Married Women's Property Acts** of **1870** (wives could keep their own earnings) and **1882** (wives could own property in their own right) changed this.\n- **Divorce:** after 1857 a husband could divorce his wife for adultery alone; a wife had to prove adultery *plus* another wrong such as cruelty or desertion. Equal grounds came only in 1923.\n- **Education and jobs:** women could study at new colleges such as Girton, Cambridge (1869) but Cambridge did not award them full degrees until 1948. Most working women were servants, mill workers, teachers or nurses — on lower pay than men.\n\n| Reform Act | Who gained the vote | Roughly what share of adults could vote |\n|---|---|---|\n| 1832 (Great Reform Act) | Wealthier middle-class men | about 7% |\n| 1867 (Second Reform Act) | Many working men in towns | about 16% |\n| 1884 (Third Reform Act) | Male householders in the countryside | about 29% |\n\nWomen gained **no** parliamentary vote in any of these Acts — the 1832 Act was the first to say voters must be “male persons”.\n\nThere were small gains: from **1869** some single women ratepayers could vote in town council elections, and from 1870 women could vote for, and sit on, school boards.\n\n> “The Queen is most anxious to enlist every one who can speak or write to join in checking this mad, wicked folly of ‘Woman's Rights’…” — Queen Victoria, private letter, 1870",
      diagram: `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart: approximate share of adults who could vote in Britain after each reform. 1832 about 7 percent, 1867 about 16 percent, 1884 about 29 percent, all men only. 1918 about 74 percent and 1928 about 97 percent, now including women."><text x="230" y="20" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">Share of adults who could vote (approx.)</text><line x1="50" y1="250" x2="450" y2="250" stroke="#334155" stroke-width="2"/><line x1="50" y1="50" x2="50" y2="250" stroke="#334155" stroke-width="2"/><line x1="50" y1="200" x2="450" y2="200" stroke="#cbd5e1" stroke-width="1"/><line x1="50" y1="150" x2="450" y2="150" stroke="#cbd5e1" stroke-width="1"/><line x1="50" y1="100" x2="450" y2="100" stroke="#cbd5e1" stroke-width="1"/><text x="44" y="254" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">0%</text><text x="44" y="204" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">25%</text><text x="44" y="154" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">50%</text><text x="44" y="104" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">75%</text><text x="44" y="54" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">100%</text><rect x="70" y="236" width="50" height="14" fill="#bae6fd" stroke="#334155"/><rect x="150" y="218" width="50" height="32" fill="#bae6fd" stroke="#334155"/><rect x="230" y="192" width="50" height="58" fill="#bae6fd" stroke="#334155"/><rect x="310" y="102" width="50" height="148" fill="#fde68a" stroke="#334155"/><rect x="390" y="56" width="50" height="194" fill="#bbf7d0" stroke="#334155"/><text x="95" y="230" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">7%</text><text x="175" y="212" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">16%</text><text x="255" y="186" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">29%</text><text x="335" y="96" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">74%</text><text x="415" y="70" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">97%</text><text x="95" y="267" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">1832</text><text x="175" y="267" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">1867</text><text x="255" y="267" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">1884</text><text x="335" y="267" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">1918</text><text x="415" y="267" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">1928</text><text x="175" y="288" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Men only</text><text x="375" y="288" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Women included</text><line x1="295" y1="256" x2="295" y2="292" stroke="#334155" stroke-dasharray="3,3"/></svg>`,
      diagramCaption:
        "Approximate share of adults who could vote after each reform (historians' estimates; sources differ slightly). Before 1918 every voter was a man — and most men could not vote either.",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem: "Describe two ways in which women's rights were limited in Victorian Britain. (4 marks)",
          steps: [
            "A ‘describe’ question wants accurate features, not causes. Pick two clearly different limits.",
            "Limit 1: property — before 1870/1882 a married woman's earnings and property legally belonged to her husband.",
            "Limit 2: politics — women could not vote in parliamentary elections; the 1832 Act even said voters had to be “male persons”.",
            "For each one add a precise detail (a date, an Act, an example) to earn the second mark.",
          ],
          answer:
            "First, married women had very limited property rights. Until the Married Women's Property Act of 1870, a wife's wages legally belonged to her husband, and only after the 1882 Act could she own property in her own right. Second, women were shut out of national politics. None of the Reform Acts of 1832, 1867 or 1884 gave women the vote, and the 1832 Act specifically said that voters had to be “male persons”.",
          yourTurn: {
            question: "In what year did a Married Women's Property Act allow wives to own property in their own right (not just keep their earnings)?",
            answer: { type: "number", value: 1882 },
            solution: "1882. The 1870 Act let wives keep their own earnings; the 1882 Act let them own and control property of their own.",
          },
        },
      ],
      keyPoints: [
        "‘Separate spheres’: men in public life, women in the home — a widely held Victorian belief.",
        "Married women's property belonged to their husbands until the Acts of 1870 and 1882.",
        "The Reform Acts of 1832, 1867 and 1884 widened the vote for men only — and only men with some property.",
        "Small gains came first in local government (from 1869) and education (e.g. Girton College, 1869).",
      ],
      whyItWorks:
        "Each Reform Act showed that the vote *could* be widened — so why not to women? Every time Parliament extended it to more men, it made women's exclusion look less like ‘nature’ and more like a choice. And because only Parliament could change the laws on property, divorce and education, campaigners concluded that the vote was the key to every other right.",
      strategies: ["Look for change AND continuity", "Use precise evidence", "Zoom out to the big picture"],
      thinkDeeper:
        "In 1884 a poor male farm labourer could vote but a wealthy woman factory owner who paid taxes could not. What does that tell you about what Victorian Parliament thought the vote was *for*?",
    },
    // ------------------------------------------------------------------ 2
    {
      id: "suffragists",
      heading: "The suffragists",
      discovery: {
        problem:
          "It is 1897. Women have been petitioning Parliament for the vote for 30 years and lost every time. You have just been chosen to lead a new national union of local suffrage societies.\n\nOnly MPs — all of them men — can change the law. Choose your strategy:\n\n- Keep persuading: petitions, meetings, letters, peaceful marches.\n- Make headlines by breaking the law.\n- Back whichever political party promises to support you.\n\nWhat is the biggest strength and the biggest risk of the strategy you picked?",
        idea:
          "The suffragists bet on **persuasion and respectability**. If women showed they were sensible, organised and law-abiding, they hoped MPs would see they deserved the vote. The risk: it was slow, and newspapers often ignored polite campaigners. By 1912 they also used the third option, backing Labour candidates.",
      },
      body:
        "**Suffragists** were campaigners who used peaceful, legal (*constitutional*) methods. The movement began long before the suffragettes:\n\n- **1866:** a petition signed by about 1,500 women was presented to Parliament by the MP **John Stuart Mill**.\n- **1867:** Mill proposed changing the word “man” to “person” in the Reform Bill. MPs rejected it by 196 votes to 73.\n- **1897:** many local societies joined together as the **National Union of Women's Suffrage Societies (NUWSS)**, led by **Millicent Fawcett**.\n\nTheir methods:\n\n- petitions, public meetings, pamphlets and their own newspaper, *The Common Cause* (from 1909)\n- lobbying (persuading) MPs of every party\n- peaceful mass marches: the **‘Mud March’** of February 1907, when more than 3,000 women marched through London in pouring rain, and the **Great Pilgrimage** of 1913, when marchers walked from all over Britain to a huge rally in Hyde Park\n- from 1912, the **Election Fighting Fund**, which supported Labour candidates because Labour backed votes for women\n\nThe NUWSS was by far the biggest campaign group, with around **50,000 members by 1914** and hundreds of local branches. Its colours were **red, white and green**.\n\nBut it struggled to make headlines. By 1903 some campaigners believed politeness had achieved nothing in almost forty years — and decided to try something very different.\n\n> Watch the word: *suffragist* = peaceful campaigner (NUWSS). *Suffragette* = militant campaigner (WSPU). Mixing them up is the most common mistake in this topic.",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline of the campaign for votes for women from 1866 to 1928, not to scale. Green dots are suffragist events, purple dots are suffragette events and yellow dots are laws passed by Parliament."><text x="240" y="20" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">The long campaign, 1866–1928 (not to scale)</text><line x1="90" y1="38" x2="90" y2="282" stroke="#334155" stroke-width="2"/><circle cx="90" cy="45" r="6" fill="#bbf7d0" stroke="#334155"/><text x="78" y="49" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">1866</text><text x="104" y="49" font-size="11" font-family="sans-serif" fill="#1f2937">Petition presented to Parliament by J. S. Mill</text><circle cx="90" cy="74" r="6" fill="#bbf7d0" stroke="#334155"/><text x="78" y="78" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">1897</text><text x="104" y="78" font-size="11" font-family="sans-serif" fill="#1f2937">NUWSS formed, led by Millicent Fawcett</text><circle cx="90" cy="103" r="6" fill="#c7d2fe" stroke="#334155"/><text x="78" y="107" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">1903</text><text x="104" y="107" font-size="11" font-family="sans-serif" fill="#1f2937">WSPU founded by Emmeline Pankhurst</text><circle cx="90" cy="132" r="6" fill="#bbf7d0" stroke="#334155"/><text x="78" y="136" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">1907</text><text x="104" y="136" font-size="11" font-family="sans-serif" fill="#1f2937">‘Mud March’ in London</text><circle cx="90" cy="161" r="6" fill="#c7d2fe" stroke="#334155"/><text x="78" y="165" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">1909</text><text x="104" y="165" font-size="11" font-family="sans-serif" fill="#1f2937">First hunger strike; force-feeding begins</text><circle cx="90" cy="190" r="6" fill="#c7d2fe" stroke="#334155"/><text x="78" y="194" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">1913</text><text x="104" y="194" font-size="11" font-family="sans-serif" fill="#1f2937">Cat and Mouse Act; Emily Wilding Davison at the Derby</text><circle cx="90" cy="219" r="6" fill="#fde68a" stroke="#334155"/><text x="78" y="223" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">1914</text><text x="104" y="223" font-size="11" font-family="sans-serif" fill="#1f2937">War begins; WSPU halts militancy</text><circle cx="90" cy="248" r="6" fill="#fde68a" stroke="#334155"/><text x="78" y="252" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">1918</text><text x="104" y="252" font-size="11" font-family="sans-serif" fill="#1f2937">Some women over 30 win the vote</text><circle cx="90" cy="277" r="6" fill="#fde68a" stroke="#334155"/><text x="78" y="281" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">1928</text><text x="104" y="281" font-size="11" font-family="sans-serif" fill="#1f2937">Equal Franchise Act: women vote at 21, like men</text><circle cx="40" cy="305" r="5" fill="#bbf7d0" stroke="#334155"/><text x="50" y="309" font-size="10" font-family="sans-serif" fill="#1f2937">Suffragists</text><circle cx="150" cy="305" r="5" fill="#c7d2fe" stroke="#334155"/><text x="160" y="309" font-size="10" font-family="sans-serif" fill="#1f2937">Suffragettes</text><circle cx="270" cy="305" r="5" fill="#fde68a" stroke="#334155"/><text x="280" y="309" font-size="10" font-family="sans-serif" fill="#1f2937">War and Parliament</text></svg>`,
      diagramCaption:
        "The campaign lasted more than sixty years. The suffragists were there at the start — the suffragettes arrived almost forty years later.",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem: "Explain why the NUWSS used peaceful methods to campaign for the vote. (4 marks)",
          steps: [
            "‘Explain why’ means give reasons, not just a list of methods. Aim for two reasons in PEEL style.",
            "Reason 1: the vote could only be granted by an all-male Parliament, so the NUWSS needed to win over MPs — breaking the law would put them off.",
            "Reason 2: showing women were responsible and law-abiding answered the claim that women were too emotional to vote.",
            "Support with evidence (petitions, lobbying, the 1907 Mud March) and link back to the question.",
          ],
          answer:
            "One reason was that only Parliament could give women the vote, and every MP was a man. The NUWSS therefore needed to persuade MPs, so it lobbied them, organised petitions and held peaceful marches such as the 1907 Mud March. Breaking the law would have given MPs an excuse to say no. A second reason was that opponents claimed women were too emotional and irrational to vote. By campaigning calmly and legally, Millicent Fawcett's suffragists hoped to prove that women were sensible, responsible citizens who deserved the vote.",
          yourTurn: {
            question: "Who led the NUWSS (the suffragists)?",
            answer: { type: "text", accept: ["Millicent Fawcett", "Fawcett", "Millicent Garrett Fawcett", "Mrs Fawcett", "Dame Millicent Fawcett"], display: "Millicent Fawcett" },
            solution: "Millicent Fawcett led the NUWSS, founded in 1897. Emmeline Pankhurst led the suffragettes (WSPU) — a different organisation.",
          },
        },
      ],
      keyPoints: [
        "Suffragists = peaceful, law-abiding campaigners; their main group was the NUWSS (1897), led by Millicent Fawcett.",
        "Methods: petitions, meetings, lobbying MPs, newspapers and peaceful marches (Mud March 1907; Great Pilgrimage 1913).",
        "The NUWSS was the largest group — around 50,000 members by 1914.",
        "From 1912 it backed Labour candidates through the Election Fighting Fund.",
      ],
      whyItWorks:
        "In a parliamentary democracy, laws change when enough MPs vote for them. The suffragists' strategy aimed directly at that: build a huge, respectable movement so that supporting votes for women looked safe and popular. It was slow, but it kept MPs from every party on side — which mattered enormously when the chance finally came in 1917–18.",
      strategies: ["Use the chronology", "Ask “who benefits?”", "Use precise evidence"],
      thinkDeeper:
        "The suffragists campaigned for about fifty years before winning anything. Does a long, unsuccessful campaign mean it failed — or could it have been preparing the ground? What evidence would help you decide?",
    },
    // ------------------------------------------------------------------ 3
    {
      id: "suffragettes",
      heading: "The suffragettes",
      discovery: {
        problem:
          "October 1905, Manchester. Two young women, Christabel Pankhurst and Annie Kenney, stand up at a Liberal Party meeting and shout: will a Liberal government give votes to women? They are thrown out and arrested. In court they are offered a choice: pay a fine, or go to prison.\n\nThey choose prison.\n\nWhy would anyone *choose* prison? What did they gain — and what might they lose?",
        idea:
          "Prison gave them **publicity**. Newspapers that had ignored polite petitions now reported the story, and the women looked like brave martyrs for a cause. This was the logic of militancy: if being reasonable gets you ignored, make yourself impossible to ignore. The risk was that some people would decide women who broke the law were not fit to make it.",
      },
      body:
        "The **Women's Social and Political Union (WSPU)** was founded in Manchester in **1903** by **Emmeline Pankhurst**, with her daughters **Christabel** and **Sylvia**. It was for women only, and its motto was **“Deeds not words”**. In 1906 the *Daily Mail* called its members **‘suffragettes’** to mock them — they proudly adopted the name. Their colours were **purple, white and green**.\n\nTheir militancy escalated step by step:\n\n| Years | Methods |\n|---|---|\n| 1905–08 | Heckling politicians, marches, huge rallies such as ‘Women's Sunday’ in Hyde Park (1908) |\n| 1908–12 | Chaining themselves to railings, smashing windows (a mass window-smashing in London in March 1912) |\n| 1912–14 | Arson attacks on empty buildings, bombs, attacking post boxes, damaging golf courses and paintings |\n\nMore than a thousand suffragettes went to prison. From **1909**, starting with Marion Wallace Dunlop, many went on **hunger strike**. The government responded with **force-feeding**: prison doctors fed women through a tube against their will. It was painful and dangerous, and caused public outrage. In 1913 Parliament passed the **Prisoners (Temporary Discharge for Ill-Health) Act** — the **‘Cat and Mouse Act’** — which released hunger strikers when they became weak and re-arrested them once they had recovered.\n\nOn **4 June 1913**, **Emily Wilding Davison** stepped onto the course at the Epsom Derby and was hit by the King's horse. She died four days later. Historians still **debate her intentions**: some evidence (such as a return train ticket and studies of the newsreel film) suggests she was trying to attach suffragette colours to the horse rather than planning to die. Thousands lined the streets for her funeral.\n\n> “We are here, not because we are law-breakers; we are here in our efforts to become law-makers.” — Emmeline Pankhurst, speaking at her trial, 1908",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of suffragists and suffragettes. Suffragists: NUWSS, 1897, Millicent Fawcett, peaceful and law-abiding methods, about 50,000 members by 1914, red white and green. Suffragettes: WSPU, 1903, Emmeline Pankhurst, Deeds not words, militant methods, women only, purple white and green. Both wanted votes for women."><rect x="10" y="10" width="225" height="36" fill="#bbf7d0" stroke="#334155"/><text x="122" y="33" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">SUFFRAGISTS</text><rect x="245" y="10" width="225" height="36" fill="#c7d2fe" stroke="#334155"/><text x="357" y="33" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">SUFFRAGETTES</text><rect x="10" y="46" width="225" height="214" fill="none" stroke="#334155"/><rect x="245" y="46" width="225" height="214" fill="none" stroke="#334155"/><text x="20" y="70" font-size="12" font-family="sans-serif" fill="#1f2937" font-weight="bold">NUWSS · founded 1897</text><text x="20" y="92" font-size="11" font-family="sans-serif" fill="#1f2937">Led by Millicent Fawcett</text><text x="20" y="114" font-size="11" font-family="sans-serif" fill="#1f2937">Peaceful and law-abiding</text><text x="20" y="136" font-size="11" font-family="sans-serif" fill="#1f2937">Petitions, meetings, lobbying MPs</text><text x="20" y="158" font-size="11" font-family="sans-serif" fill="#1f2937">Marches: Mud March 1907,</text><text x="20" y="174" font-size="11" font-family="sans-serif" fill="#1f2937">Great Pilgrimage 1913</text><text x="20" y="196" font-size="11" font-family="sans-serif" fill="#1f2937">About 50,000 members by 1914</text><text x="20" y="218" font-size="11" font-family="sans-serif" fill="#1f2937">Colours: red, white, green</text><text x="20" y="240" font-size="11" font-family="sans-serif" fill="#1f2937">Aim: persuade Parliament</text><text x="255" y="70" font-size="12" font-family="sans-serif" fill="#1f2937" font-weight="bold">WSPU · founded 1903</text><text x="255" y="92" font-size="11" font-family="sans-serif" fill="#1f2937">Led by Emmeline Pankhurst</text><text x="255" y="114" font-size="11" font-family="sans-serif" fill="#1f2937">Motto: ‘Deeds not words’</text><text x="255" y="136" font-size="11" font-family="sans-serif" fill="#1f2937">Heckling, window smashing,</text><text x="255" y="152" font-size="11" font-family="sans-serif" fill="#1f2937">arson, attacks on post boxes</text><text x="255" y="174" font-size="11" font-family="sans-serif" fill="#1f2937">Prison, hunger strikes</text><text x="255" y="196" font-size="11" font-family="sans-serif" fill="#1f2937">Women only</text><text x="255" y="218" font-size="11" font-family="sans-serif" fill="#1f2937">Colours: purple, white, green</text><text x="255" y="240" font-size="11" font-family="sans-serif" fill="#1f2937">Aim: force the issue</text><rect x="90" y="274" width="300" height="36" fill="#fde68a" stroke="#334155"/><text x="240" y="297" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Shared goal: votes for women</text></svg>`,
      diagramCaption:
        "Same goal, different methods. Memory hook: suffraGETTEs wanted to GET the vote by force; suffragists stuck to persuasion.",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem: "Explain why the WSPU turned to militant methods. (4 marks)",
          steps: [
            "Start with the problem they faced: decades of peaceful campaigning had not won the vote.",
            "Reason 1: frustration — Parliament kept ignoring or blocking women's suffrage, so the WSPU wanted ‘deeds not words’.",
            "Reason 2: publicity — arrests, prison and hunger strikes put the cause on the front pages in a way petitions did not.",
            "Show escalation: when the government still refused (e.g. the failed Conciliation Bills), militancy grew from heckling to window smashing and arson.",
          ],
          answer:
            "One reason was frustration. Women had petitioned Parliament since 1866 without success, so Emmeline Pankhurst believed polite methods had failed and adopted the motto “Deeds not words”. A second reason was publicity. When Christabel Pankhurst and Annie Kenney chose prison in 1905, newspapers that ignored petitions reported the story, and hunger strikes later made suffragettes look like martyrs. Because the government still refused to act — for example when the Conciliation Bills failed in 1910–12 — the WSPU escalated to window smashing and arson to keep up the pressure.",
          yourTurn: {
            question: "In what year was the ‘Cat and Mouse Act’ passed?",
            answer: { type: "number", value: 1913 },
            solution: "1913 — the Prisoners (Temporary Discharge for Ill-Health) Act, passed in April 1913, the same year as Emily Wilding Davison's death at the Derby.",
          },
        },
      ],
      keyPoints: [
        "Suffragettes = militant campaigners; their group was the WSPU (1903), led by Emmeline Pankhurst with Christabel and Sylvia.",
        "Motto: “Deeds not words”. Methods escalated from heckling to window smashing to arson.",
        "Hunger strikes (from 1909) led to force-feeding; the Cat and Mouse Act (1913) released and re-arrested hunger strikers.",
        "Emily Wilding Davison was fatally injured at the Derby on 4 June 1913; her intentions are still debated.",
      ],
      whyItWorks:
        "Militancy worked like a megaphone: it forced newspapers, politicians and the public to talk about votes for women. Force-feeding and the Cat and Mouse Act made the government look cruel and won sympathy. But a megaphone can also annoy people — by 1912–14, attacks on property gave opponents an argument that women were unfit to vote.",
      strategies: ["Check the provenance (NOP)", "Weigh both sides, then judge", "Use the chronology"],
      thinkDeeper:
        "The WSPU attacked property but its leaders said they did not aim to endanger human life. Does that distinction matter when you judge militancy? How might a shopkeeper whose window was smashed in 1912 have answered?",
    },
    // ------------------------------------------------------------------ 4
    {
      id: "the-opposition",
      heading: "Opposition to votes for women",
      discovery: {
        problem:
          "Imagine an Edwardian postcard (anti-suffrage cards like this were common around 1908–1914). It shows a miserable husband in an apron at the end of the day. Babies are crying, the washing is piled up, the fire is out. A note on the table says his wife has gone to a suffrage meeting.\n\nWho made cards like this, and who bought them? What is the artist actually afraid of? Is it really about the vote?",
        idea:
          "The postcard is not mainly about elections — it is about **who runs the home**. Much opposition came from fear that votes for women would turn ‘separate spheres’ upside down: neglected children, humiliated husbands, a broken social order. Postcards used **humour and ridicule** to make suffrage campaigners look silly, selfish or unwomanly. Cards were cheap mass-produced items, which tells you these ideas were popular enough to sell.",
      },
      body:
        "Plenty of people — **women as well as men** — opposed votes for women. Their main arguments, and how campaigners replied:\n\n| Anti-suffrage argument | Suffrage campaigners' reply |\n|---|---|\n| Women belong in the home (‘separate spheres’) | Laws affect homes, schools and wages — women should help make them |\n| Women are too emotional to judge politics | Women already run homes, schools, charities and local councils |\n| Women do not fight in wars, so shouldn't decide on war and empire | Many men who could vote never fought either |\n| Most women don't want the vote | The NUWSS alone had around 50,000 members |\n| Suffragette violence proves women are unfit | Men had also used violence in earlier reform campaigns |\n\n**Organised opposition:** the **Women's National Anti-Suffrage League** was founded in **1908**. One of its leaders was the popular novelist **Mary Ward** (known as Mrs Humphry Ward). In 1910 it merged with a men's league to form the National League for Opposing Woman Suffrage.\n\n**In Parliament:** the Liberal Prime Minister **H. H. Asquith** (1908–16) firmly opposed women's suffrage. Some Liberals also feared that giving the vote to women who owned property would help the Conservatives.\n\n**The Conciliation Bills (1910–12)** were cross-party attempts to give the vote to about a million women who owned or occupied property. They failed: the 1910 and 1911 bills were stalled by the government, and in **March 1912** the third bill was defeated by 14 votes, just after a wave of suffragette window smashing.\n\n> Did militancy harden opposition? Some MPs said they would not ‘reward violence’. But the earlier bills had already been blocked before the worst militancy began — so historians disagree.",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem: "Describe two arguments used by opponents of votes for women. (4 marks)",
          steps: [
            "Choose two clearly different arguments — e.g. one about women's ‘nature’ and one about the role of the vote.",
            "Argument 1: separate spheres — a woman's place was the home; politics would distract her from family.",
            "Argument 2: women did not fight in wars, so they should not vote on matters of war and empire.",
            "Add precise support: who said it or how it was spread (e.g. the 1908 Anti-Suffrage League, postcards).",
          ],
          answer:
            "One argument was based on the idea of ‘separate spheres’: opponents said a woman's proper place was the home and that politics would make her neglect her husband and children. Anti-suffrage postcards often showed husbands left to look after crying babies to spread this idea. A second argument was that the vote decided questions of war and the Empire, and since women could not be soldiers, they should not decide them. Groups such as the Women's National Anti-Suffrage League, founded in 1908, used arguments like these — showing that some women opposed the vote too.",
          yourTurn: {
            question: "Which Prime Minister (1908–16) was a leading opponent of votes for women before the First World War?",
            answer: { type: "text", accept: ["Asquith", "H. H. Asquith", "Herbert Asquith", "Herbert Henry Asquith", "H.H. Asquith"], display: "H. H. Asquith" },
            solution: "Herbert Henry Asquith, Liberal Prime Minister 1908–16. He changed his mind during the war, in 1917.",
          },
        },
      ],
      keyPoints: [
        "Opposition rested on ‘separate spheres’, claims about women's nature, the link between voting and fighting, and fear of change.",
        "Many women opposed suffrage too: the Women's National Anti-Suffrage League (1908) included Mary (Mrs Humphry) Ward.",
        "Prime Minister Asquith blocked reform before 1914.",
        "The Conciliation Bills of 1910–12 all failed; the 1912 bill lost by 14 votes.",
      ],
      whyItWorks:
        "To win, campaigners had to change the minds of the people who already had power — and many of them believed the existing order was natural and safe. That is why opposition was so stubborn: for many people the vote stood for a whole way of life. It is also why the war mattered, because it shook up ideas about what women could do.",
      strategies: ["Ask “who benefits?”", "Check the provenance (NOP)", "Weigh both sides, then judge"],
      thinkDeeper:
        "Some of the strongest opponents of votes for women were women. Why might a well-educated, successful woman like Mary Ward oppose votes for women? Does her opposition make the anti-suffrage case stronger or weaker?",
    },
    // ------------------------------------------------------------------ 5
    {
      id: "the-vote-is-won",
      heading: "War work and the vote, 1914–1928",
      discovery: {
        problem:
          "It is 1917. You are a government minister writing a new voting law. Here is your problem:\n\n- Millions of soldiers have lost the vote, because the old rules required you to have lived at the same address for a year.\n- Everyone agrees the soldiers must vote at the next election.\n- If you also give the vote to all women over 21, women will outnumber men among voters, because so many men have been killed.\n- Many MPs now praise women's war work.\n\nWrite your law. Who gets to vote — and at what age?",
        idea:
          "The real answer was a **compromise**: all men over 21, but women only over **30**, and only if they (or their husbands) met a property qualification. This kept women a minority of voters (about 40%). The war created the *need* to rewrite the rules — and once the rules were being rewritten anyway, leaving women out was hard to defend.",
      },
      body:
        "When war broke out in **August 1914**, both campaigns changed course:\n\n- The **WSPU** stopped militancy, and the government released suffragette prisoners. Emmeline and Christabel Pankhurst strongly supported the war effort.\n- The **NUWSS** also supported the nation and organised relief work, while keeping the suffrage campaign alive.\n\n> “Let us show ourselves worthy of citizenship, whether our claim to it be recognised or not.” — Millicent Fawcett, NUWSS, August 1914\n\nWith millions of men in the forces, women took on work once seen as ‘men's jobs’: **munitions** (nearly a million women by 1918), buses and trams, farming (the Women's Land Army), nursing, offices and police patrols. This challenged the idea that women were weak or belonged only at home.\n\nIn December 1916 **Lloyd George**, more sympathetic than Asquith, became Prime Minister, and in January 1917 a cross-party **Speaker's Conference** recommended votes for some women. The result:\n\n| Law | What it did |\n|---|---|\n| **Representation of the People Act, February 1918** | All men over 21 (19 if they had served); women over **30** who met a property qualification (or whose husbands did) — about **8.4 million** women |\n| **Parliament (Qualification of Women) Act, November 1918** | Women over 21 could stand as MPs |\n| **Equal Franchise Act, 1928** | Women could vote at **21**, on equal terms with men |\n\nIn the December 1918 election, **Constance Markievicz** (Sinn Féin) became the first woman elected as an MP, but she refused to take her seat. **Nancy Astor** became the first woman to *take* her seat, in 1919. Emmeline Pankhurst died in June 1928, just weeks before equal voting became law.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bars drawn to scale comparing the electorate. 1918: about 21 million voters, of whom about 8.4 million were women, about 40 percent. 1928 rules, first used in 1929: about 29 million voters, of whom just over half were women."><text x="240" y="20" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">Who could vote? 1918 vs 1928 (to scale)</text><text x="40" y="52" font-size="13" font-family="sans-serif" fill="#1f2937" font-weight="bold">1918</text><text x="90" y="52" font-size="11" font-family="sans-serif" fill="#1f2937">Men 21+ · Women 30+ with property</text><rect x="40" y="62" width="116" height="40" fill="#fecaca" stroke="#334155"/><rect x="156" y="62" width="179" height="40" fill="#bae6fd" stroke="#334155"/><text x="98" y="86" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Women 8.4m</text><text x="245" y="86" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Men about 13m</text><text x="345" y="86" font-size="11" font-family="sans-serif" fill="#1f2937">≈ 21m voters</text><text x="40" y="122" font-size="11" font-family="sans-serif" fill="#1f2937">Women ≈ 40% of voters — kept a minority on purpose</text><text x="40" y="172" font-size="13" font-family="sans-serif" fill="#1f2937" font-weight="bold">1928</text><text x="90" y="172" font-size="11" font-family="sans-serif" fill="#1f2937">Men and women 21+ on equal terms</text><rect x="40" y="182" width="211" height="40" fill="#fecaca" stroke="#334155"/><rect x="251" y="182" width="189" height="40" fill="#bae6fd" stroke="#334155"/><text x="145" y="206" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Women ≈ 15m</text><text x="345" y="206" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Men ≈ 14m</text><text x="40" y="242" font-size="11" font-family="sans-serif" fill="#1f2937">≈ 29m voters (1929 election) — women just over half</text><line x1="40" y1="270" x2="440" y2="270" stroke="#334155"/><line x1="40" y1="265" x2="40" y2="275" stroke="#334155"/><line x1="440" y1="265" x2="440" y2="275" stroke="#334155"/><text x="240" y="290" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Scale: full width ≈ 29 million voters (figures approximate)</text></svg>`,
      diagramCaption:
        "1918 was a huge change but not equality: women had to be nine years older than men. Equality came only in 1928.",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem: "Describe the key features of the Representation of the People Act of 1918. (4 marks)",
          steps: [
            "List what changed for men AND for women — the Act did both.",
            "Men: all men over 21 could vote (19 if they had served in the war), regardless of property.",
            "Women: women over 30 who met a property qualification, or whose husbands did — about 8.4 million.",
            "Add the significance: it was a compromise that kept women a minority of voters; equality only came in 1928.",
          ],
          answer:
            "The 1918 Representation of the People Act gave the vote to all men over 21, and to men aged 19 or 20 who had served in the war, removing the old property rules for men. For the first time it also gave the parliamentary vote to women — but only women over 30 who met a property qualification or were married to a man who did. About 8.4 million women gained the vote. This was a compromise: the higher age limit meant women made up only about 40% of voters, and equal voting did not come until the Equal Franchise Act of 1928.",
          yourTurn: {
            question: "In what year did women in Britain finally gain the vote on the same terms as men (aged 21)?",
            answer: { type: "number", value: 1928 },
            solution: "1928 — the Equal Franchise Act. In 1918 only women over 30 who met a property qualification could vote.",
          },
        },
      ],
      keyPoints: [
        "August 1914: the WSPU halted militancy; both groups supported the war effort.",
        "Women did vital war work — nearly a million in munitions by 1918.",
        "1918: all men over 21; women over 30 with a property qualification (about 8.4 million women).",
        "1918: women could stand as MPs — Markievicz first elected (did not sit); Astor first to take her seat (1919).",
        "1928: Equal Franchise Act — women vote at 21, like men.",
      ],
      whyItWorks:
        "The war forced the government to redesign the voting system for the soldiers. Once the whole system was open for change, and women's war work had silenced many old arguments, it became politically possible to include women — but only in a limited way that reassured nervous MPs. Ten years later the remaining gap looked impossible to defend.",
      strategies: ["Look for change AND continuity", "Use the chronology", "Use precise evidence"],
      thinkDeeper:
        "Most women munitions workers were young and working class. How many of them could vote in 1918? What does that suggest about the claim that the vote was a ‘reward for war work’?",
    },
    // ------------------------------------------------------------------ 6
    {
      id: "why-women-won-the-vote",
      heading: "Why did women win the vote?",
      discovery: {
        problem:
          "Rank these four factors from most to least important in winning the vote in 1918:\n\n1. The suffragists' long, peaceful campaign\n2. Suffragette militancy\n3. Women's work in the First World War\n4. The government needing to change the voting rules for soldiers anyway\n\nNow add one piece of evidence: **most women munitions workers were under 30, and so could not vote in 1918.** Does that change your ranking?",
        idea:
          "If the vote was simply a *reward* for war work, the young munitions workers would have received it — they didn't. So the war worked less as a reward and more as an **opportunity**: it forced a rewrite of the voting rules and changed attitudes, while decades of campaigning (peaceful and militant) had already made votes for women a question that could not be dodged. Good answers **link** the factors rather than picking one.",
      },
      body:
        "Historians agree several factors combined, but disagree about their weight:\n\n| Factor | Case for | Case against |\n|---|---|---|\n| Suffragists | Built support among MPs of all parties for 50 years; huge membership | Had won no national vote by 1914 |\n| Suffragettes | Made the issue impossible to ignore; force-feeding won sympathy | Violence from 1912 may have hardened opposition |\n| War work | Challenged ideas about what women could do; many MPs changed their minds | Young munitions workers did not get the vote |\n| Political change | Soldiers needed votes; Lloyd George replaced Asquith (1916) | Only explains *timing*, not why women were included |\n\n**Interpretations:** historians such as **Martin Pugh** argue that militancy after 1912 damaged the cause and that the suffragists and political change mattered more. Others, such as **June Purvis**, argue that the suffragettes' courage was essential in keeping the issue alive.\n\n**Change and continuity:** 1918 and 1928 were huge changes in *representation*. But inequality continued: few women became MPs for decades, and the **Equal Pay Act** came only in 1970.\n\n**A global view:**\n\n| Country | Women's vote (national) |\n|---|---|\n| New Zealand | 1893 — first self-governing country |\n| Britain | 1918 (over 30, limited); 1928 (equal) |\n| USA | 1920 |\n| Singapore | 1948 — women voted in the first Legislative Council election |\n\nIn **Singapore**, women voted alongside men in the first Legislative Council election in **1948**, and the **Women's Charter (1961)** strengthened women's rights in marriage and the family — for example, making monogamy the law for non-Muslim marriages.",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of four linked factors leading to the vote: the suffragists' long campaign, suffragette militancy, the First World War and women's work, and political change. Arrows from each factor point to the centre, and the war and political change are linked."><rect x="160" y="128" width="160" height="64" rx="8" fill="#fde68a" stroke="#334155" stroke-width="2"/><text x="240" y="155" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">The vote</text><text x="240" y="174" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">1918 (partial), 1928 (equal)</text><rect x="10" y="16" width="180" height="62" rx="6" fill="#bbf7d0" stroke="#334155"/><text x="100" y="40" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">Suffragists</text><text x="100" y="58" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">50 years of persuasion;</text><text x="100" y="71" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">support from MPs</text><rect x="290" y="16" width="180" height="62" rx="6" fill="#c7d2fe" stroke="#334155"/><text x="380" y="40" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">Suffragettes</text><text x="380" y="58" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Publicity and pressure —</text><text x="380" y="71" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">help or hindrance?</text><rect x="10" y="242" width="180" height="62" rx="6" fill="#fecaca" stroke="#334155"/><text x="100" y="266" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">War and women's work</text><text x="100" y="284" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Munitions, transport, nursing;</text><text x="100" y="297" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">attitudes change</text><rect x="290" y="242" width="180" height="62" rx="6" fill="#bae6fd" stroke="#334155"/><text x="380" y="266" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">Political change</text><text x="380" y="284" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Soldiers need votes;</text><text x="380" y="297" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Lloyd George PM (1916)</text><line x1="130" y1="78" x2="190" y2="128" stroke="#334155" stroke-width="2"/><polygon points="190,128 178,124 186,116" fill="#334155"/><line x1="350" y1="78" x2="290" y2="128" stroke="#334155" stroke-width="2"/><polygon points="290,128 294,116 302,124" fill="#334155"/><line x1="130" y1="242" x2="190" y2="192" stroke="#334155" stroke-width="2"/><polygon points="190,192 186,204 178,196" fill="#334155"/><line x1="350" y1="242" x2="290" y2="192" stroke="#334155" stroke-width="2"/><polygon points="290,192 302,196 294,204" fill="#334155"/><line x1="190" y1="273" x2="290" y2="273" stroke="#334155" stroke-width="2" stroke-dasharray="5,4"/><text x="240" y="222" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">war forced a rewrite</text><text x="240" y="235" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">of the voting rules</text></svg>`,
      diagramCaption:
        "No single factor explains the vote. Strong answers show how the factors worked together — and judge which mattered most.",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem: "‘Women won the vote in 1918 mainly because of their work in the First World War.’ How far do you agree? (8 marks)",
          steps: [
            "Plan both sides before writing. Agree: war work changed attitudes; Asquith changed his mind in 1917.",
            "Disagree: young munitions workers (under 30) were not given the vote, so it was not simply a reward.",
            "Bring in other factors: the suffragists' long campaign had built support among MPs; the need to give soldiers the vote forced a new law.",
            "Judge: decide what mattered most and explain WHY — link the factors (the war created the opportunity, the campaign had prepared the ground).",
          ],
          answer:
            "War work was important. Women worked in munitions, transport and nursing, which undermined the claim that women were too weak or emotional to vote, and even Asquith, a long-time opponent, changed his mind in 1917. However, the vote was not simply a reward: most munitions workers were under 30 and could not vote in 1918. The war mattered more because it forced the government to rewrite the voting rules so soldiers could vote, creating an opportunity to include women. That opportunity was only taken because the suffragists had spent fifty years building support among MPs, while the suffragettes had made the issue impossible to ignore. Overall, I only partly agree: the war was the trigger, but the long campaign was the main reason women were included when the chance came.",
          yourTurn: {
            question: "In what year did New Zealand become the first self-governing country to give women the vote in national elections?",
            answer: { type: "number", value: 1893 },
            solution: "1893 — twenty-five years before Britain's limited reform of 1918.",
          },
        },
      ],
      keyPoints: [
        "No single cause: the suffragists, suffragettes, the war and political change all played a part.",
        "The war was an opportunity more than a reward — young women war workers did not get the vote in 1918.",
        "Historians disagree about the suffragettes: help or hindrance?",
        "Change and continuity: votes were won, but inequality in pay and representation continued.",
        "Global view: New Zealand 1893; Singapore women voted from the first elections in 1948; Women's Charter 1961.",
      ],
      whyItWorks:
        "Big political changes usually need both **long-term pressure** and a **short-term trigger**. Decades of campaigning made votes for women a live issue; the war shattered old assumptions and forced Parliament to redesign the voting system. When the moment came, enough MPs were ready to say yes.",
      strategies: ["Link the factors", "Weigh both sides, then judge", "Consider the counterfactual", "Compare case studies"],
      thinkDeeper:
        "Counterfactual: if there had been no First World War, when do you think British women would have won the vote — and which group's campaign would have been most responsible? Use evidence from 1910–14 to support your guess.",
    },
  ],
  learn: {
    flashcards: [
      { front: "What is the difference between a suffragist and a suffragette?", back: "Suffragists used peaceful, legal methods (NUWSS, Millicent Fawcett). Suffragettes used militant methods (WSPU, Emmeline Pankhurst)." },
      { front: "When was the NUWSS founded and who led it?", back: "1897, led by Millicent Fawcett." },
      { front: "When was the WSPU founded and by whom?", back: "1903, in Manchester, by Emmeline Pankhurst (with her daughters Christabel and Sylvia)." },
      { front: "What was the WSPU's motto?", back: "“Deeds not words”." },
      { front: "What were ‘separate spheres’?", back: "The Victorian idea that men belonged in public life (work, politics) and women in the private world of home and family." },
      { front: "What did the Married Women's Property Acts of 1870 and 1882 do?", back: "1870: wives could keep their own earnings. 1882: wives could own property in their own right." },
      { front: "What was the ‘Cat and Mouse Act’ (1913)?", back: "A law letting the government release hunger-striking prisoners when they grew weak, then re-arrest them once they recovered." },
      { front: "What happened at the Epsom Derby on 4 June 1913?", back: "Emily Wilding Davison stepped onto the course and was hit by the King's horse; she died four days later. Her intentions are still debated." },
      { front: "Who could vote after the 1918 Representation of the People Act?", back: "All men over 21 (19 if they had served), and women over 30 who met a property qualification (or whose husbands did) — about 8.4 million women." },
      { front: "What did the Equal Franchise Act of 1928 do?", back: "Gave women the vote at 21 on the same terms as men." },
      { front: "Who was the first woman elected as an MP, and who was the first to take her seat?", back: "Constance Markievicz was elected in 1918 but did not take her seat; Nancy Astor was the first to take her seat, in 1919." },
      { front: "What were the Conciliation Bills?", back: "Cross-party bills (1910–12) to give the vote to about a million property-owning women. All failed." },
      { front: "When did women in Singapore first vote?", back: "In the first Legislative Council election, 1948 — alongside men." },
      { front: "What was the Women's Charter (Singapore, 1961)?", back: "A law protecting women's rights in marriage and the family; for example it made monogamy the law for non-Muslim marriages." },
    ],
    mustKnow: [
      "Can you explain the difference between suffragists and suffragettes, with their organisations, leaders and methods?",
      "Can you describe women's legal position in Victorian Britain (property, divorce, education, voting)?",
      "Can you explain who could vote after the Reform Acts of 1832, 1867 and 1884?",
      "Can you describe the methods of the NUWSS, with examples such as the 1907 Mud March?",
      "Can you describe how WSPU militancy escalated from 1905 to 1914, including hunger strikes and the Cat and Mouse Act?",
      "Can you explain why Emily Wilding Davison's intentions at the 1913 Derby are debated?",
      "Can you give at least three arguments used against votes for women, and say who used them?",
      "Can you state exactly who could vote after the 1918 Act and after the 1928 Act?",
      "Can you weigh the factors that explain why women won the vote and reach a supported judgement?",
      "Can you compare Britain with New Zealand (1893) and Singapore (1948, Women's Charter 1961)?",
    ],
    misconceptions: [
      { wrong: "Suffragists and suffragettes are the same thing.", right: "Suffragists (NUWSS) were peaceful; suffragettes (WSPU) were militant. They shared a goal but disagreed about methods." },
      { wrong: "All women got the vote in 1918.", right: "In 1918 only women over 30 who met a property qualification could vote. Equal voting at 21 came in 1928." },
      { wrong: "Women were given the vote as a reward for war work.", right: "Most young munitions workers were under 30 and could not vote in 1918. The war was more an opportunity to change the rules than a simple reward." },
      { wrong: "All men could vote before 1918.", right: "Even after 1884 only about 60% of adult men could vote; the property qualification for men was removed in 1918." },
      { wrong: "Emily Wilding Davison definitely meant to kill herself at the Derby.", right: "Her intentions are debated: evidence such as a return ticket and the newsreel film suggests she may have been trying to attach suffragette colours to the King's horse." },
      { wrong: "Only men opposed votes for women.", right: "Many women did too — e.g. the novelist Mary Ward helped lead the Women's National Anti-Suffrage League (1908)." },
      { wrong: "The suffragettes started the campaign for votes for women.", right: "The campaign began in the 1860s (the 1866 petition); the WSPU was only founded in 1903." },
    ],
    examMistakes: [
      "Writing ‘suffragette’ when you mean the peaceful NUWSS — check the spelling before every answer.",
      "Saying women got the vote ‘in 1918’ without the age (30) and property limits — or mixing up 1918 and 1928.",
      "Telling the story of Emily Wilding Davison's death as certain suicide instead of noting the debate about her intentions.",
      "In ‘how far do you agree’ questions, only writing about one factor instead of weighing several and reaching a judgement.",
      "Treating a source as useless because it is biased — instead, ask what it is useful FOR (e.g. anti-suffrage postcards show the fears of opponents).",
      "Listing methods without explaining WHY each group chose them or what effect they had.",
      "Forgetting that the 1918 Act also changed men's voting — all men over 21 gained the vote.",
    ],
    mnemonics: [
      { topic: "Suffragist vs suffragette", device: "SuffraGETTEs wanted to GET the vote by force; suffraGISTs gave the GIST of their case politely.", explanation: "Suffragettes (WSPU) = militant; suffragists (NUWSS) = peaceful persuasion." },
      { topic: "1918 vs 1928", device: "19‘2’8 starts with a 2 — like 21.", explanation: "1928 = women vote at 21, equal with men. 1918 = women over 30 with property only." },
      { topic: "WSPU colours", device: "Green, White, Violet — ‘Give Women Votes’.", explanation: "A popular memory trick for the suffragette colours (purple/violet, white, green). Historians think the WSPU did not choose them for this reason — it is just a handy hook." },
    ],
    realWorld: [
      { title: "Voting in Singapore today", detail: "Voting in Singapore is compulsory for citizens aged 21 and over, and women and men vote on equal terms — a right women first exercised in the 1948 Legislative Council election.", emoji: "🇸🇬" },
      { title: "Peaceful vs disruptive protest", detail: "The suffragist/suffragette debate is still alive: modern campaigns argue about whether disruptive protest wins support or turns people against a cause.", emoji: "📢" },
      { title: "Women in Parliament", detail: "Winning the vote did not bring equal representation straight away. Countries around the world still debate how to get more women into Parliament.", emoji: "🏛️" },
      { title: "Equal pay", detail: "Britain's Equal Pay Act came only in 1970 — a reminder that political rights and economic equality are different things.", emoji: "💷" },
      { title: "Votes around the world", detail: "Some countries gave women the vote much later than Britain — Switzerland only at national level in 1971 — showing that democracy develops at different speeds.", emoji: "🌍" },
    ],
    videos: [
      { title: "Suffragists and suffragettes explained", channel: "BBC Bitesize", url: "https://www.youtube.com/results?search_query=suffragists+and+suffragettes+explained" },
      { title: "Why did women get the vote in 1918?", channel: "UK Parliament", url: "https://www.youtube.com/results?search_query=why+did+women+get+the+vote+1918+UK+Parliament" },
      { title: "Emily Wilding Davison and the 1913 Derby", channel: "Various", url: "https://www.youtube.com/results?search_query=Emily+Wilding+Davison+Derby+1913+newsreel" },
      { title: "Emmeline Pankhurst and the WSPU", channel: "Various", url: "https://www.youtube.com/results?search_query=Emmeline+Pankhurst+WSPU+history" },
      { title: "Women's Charter 1961 Singapore", channel: "Various", url: "https://www.youtube.com/results?search_query=Women%27s+Charter+1961+Singapore+history" },
    ],
    keyDates: [
      { year: 1832, date: "1832", event: "Great Reform Act", note: "Widened the vote for wealthier men — and stated that voters must be “male persons”." },
      { year: 1866, date: "1866", event: "First mass women's suffrage petition presented by John Stuart Mill", note: "The start of the organised campaign." },
      { year: 1870, date: "1870", event: "Married Women's Property Act", note: "Wives could keep their own earnings (extended in 1882)." },
      { year: 1893, date: "1893", event: "New Zealand gives women the national vote", note: "The first self-governing country to do so." },
      { year: 1897, date: "1897", event: "NUWSS formed under Millicent Fawcett", note: "The suffragists unite into one national organisation." },
      { year: 1903, date: "10 Oct 1903", event: "WSPU founded by Emmeline Pankhurst", note: "The suffragettes: “Deeds not words”." },
      { year: 1907, date: "Feb 1907", event: "The ‘Mud March’", note: "More than 3,000 suffragists march peacefully through London." },
      { year: 1908, date: "1908", event: "Women's National Anti-Suffrage League founded", note: "Organised opposition, including women such as Mary Ward." },
      { year: 1909, date: "1909", event: "First suffragette hunger strike; force-feeding begins", note: "Marion Wallace Dunlop starts the tactic." },
      { year: 1912, date: "March 1912", event: "Mass window smashing; third Conciliation Bill defeated", note: "Lost by 14 votes — did militancy harden opposition?" },
      { year: 1913, date: "April 1913", event: "Cat and Mouse Act", note: "Hunger strikers released when weak, re-arrested when recovered." },
      { year: 1913, date: "4 June 1913", event: "Emily Wilding Davison at the Epsom Derby", note: "She died four days later; her intentions are debated." },
      { year: 1914, date: "Aug 1914", event: "First World War begins; WSPU suspends militancy", note: "Both campaigns support the war effort." },
      { year: 1918, date: "Feb 1918", event: "Representation of the People Act", note: "All men over 21; women over 30 with a property qualification." },
      { year: 1919, date: "1919", event: "Nancy Astor takes her seat", note: "The first woman MP to sit in the House of Commons." },
      { year: 1928, date: "1928", event: "Equal Franchise Act", note: "Women vote at 21 on equal terms with men." },
      { year: 1948, date: "1948", event: "Singapore's first Legislative Council election", note: "Women voted alongside men from the very first election." },
      { year: 1961, date: "1961", event: "Women's Charter passed in Singapore", note: "Protected women's rights in marriage and the family." },
    ],
    keyTerms: [
      { term: "Suffrage", definition: "The right to vote in political elections." },
      { term: "Suffragist", definition: "A campaigner for votes for women using peaceful, legal methods — especially a member of the NUWSS." },
      { term: "Suffragette", definition: "A militant campaigner for votes for women, especially a member of the WSPU. The name began as a Daily Mail insult in 1906." },
      { term: "NUWSS", definition: "National Union of Women's Suffrage Societies (1897), the suffragists' organisation, led by Millicent Fawcett." },
      { term: "WSPU", definition: "Women's Social and Political Union (1903), the suffragettes' organisation, led by Emmeline Pankhurst." },
      { term: "Militancy", definition: "Using aggressive or law-breaking actions, such as window smashing or arson, to force change." },
      { term: "Separate spheres", definition: "The Victorian belief that men belonged in public life and women in the home." },
      { term: "Franchise", definition: "The right to vote; the ‘franchise’ is the set of rules saying who may vote." },
      { term: "Electorate", definition: "All the people who are allowed to vote in an election." },
      { term: "Hunger strike", definition: "Refusing food as a protest; suffragette prisoners used it from 1909." },
      { term: "Force-feeding", definition: "Feeding a hunger-striking prisoner through a tube against their will — used on suffragettes from 1909." },
      { term: "Cat and Mouse Act", definition: "The Prisoners (Temporary Discharge for Ill-Health) Act 1913, which released weak hunger strikers and re-arrested them later." },
      { term: "Conciliation Bills", definition: "Cross-party bills of 1910–12 that would have given the vote to about a million property-owning women; all failed." },
      { term: "Anti-suffragist", definition: "A person who opposed votes for women." },
      { term: "Representation", definition: "Having a voice in government, usually through elected representatives such as MPs." },
    ],
  },
};
