import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "historians-toolkit",
  title: "The Historian's Toolkit",
  strand: "Historian's Toolkit",
  icon: "🔍",
  summary: "The thinking tools that turn a pile of old stories into real history: dates, sources, interpretations, causes and judgements.",
  intro:
    "Every topic this year — 1066, Magna Carta, Henry VIII, Hitler, Mao, the French Revolution, the suffragettes — is built with the same set of tools. Historians place events in time, question their sources, compare interpretations, untangle causes and decide what really mattered. This topic hands you that toolkit, with examples from across the Year 8 course and from Singapore's own history. Learn the tools once and every other topic gets easier.",
  guide: [
    // ------------------------------------------------------------------ 1
    {
      id: "chronology-and-periods",
      heading: "Chronology: dates, centuries and periods",
      discovery: {
        problem:
          "Here are five events from this year's course:\n\n- the storming of the Bastille, 1789\n- the Battle of Hastings, 1066\n- Singapore becomes independent, 1965\n- Magna Carta is sealed, 1215\n- Henry VIII's Act of Supremacy, 1534\n\nPut them in order, then say which **century** each one is in. Finally, the trap: which century is the year **1900** in? Commit to an answer before you read on.",
        idea:
          "The order is 1066, 1215, 1534, 1789, 1965. The centuries are the 11th, 13th, 16th, 18th and 20th — always one more than the 'hundreds' part of the year. That is because the 1st century was the years 1–100: there was **no year 0**. So 1900 is the *last* year of the 19th century, and the 20th century ran from 1901 to 2000.",
      },
      body:
        "**Chronology** means putting events in the right order and knowing how far apart they are. It is the skeleton every other skill hangs on: you cannot argue that one thing caused another if you have them the wrong way round.\n\n**BC and AD.** Most of the world counts years from the traditional date of the birth of Jesus. *AD* (*Anno Domini*, 'in the year of the Lord') counts forwards; *BC* ('before Christ') counts backwards. Many historians use **BCE** and **CE** ('before the Common Era', 'Common Era') — the numbers are exactly the same. In BC, bigger numbers are *earlier*: Julius Caesar's first raid on Britain in 55 BC came before his second in 54 BC.\n\n**Centuries and decades.** For most years, add one to the hundreds: 1066 → 11th century; 1789 → 18th century. Years ending in 00 belong to the century that is finishing. 'The 1920s' means 1920–1929.\n\n**Periods** are labels historians invented later to group long stretches of time. The boundaries are rough and based on European history:\n\n| Period | Roughly | Year 8 examples |\n|---|---|---|\n| Ancient | before c. AD 500 | Roman Britain |\n| Medieval (Middle Ages) | c. 500–1500 | 1066, Magna Carta |\n| Early modern | c. 1500–1750 | Henry VIII |\n| Modern | c. 1750 onwards | French Revolution, suffragettes, Hitler, Mao |\n\nSingapore's history is often divided differently — Temasek in the 14th century, the British trading post from 1819, the Japanese Occupation of 1942–45, independence in 1965.\n\n**Anachronism** is something placed in the wrong time — a Norman knight with a gun, or Henry VIII checking a wristwatch. Spotting anachronisms is a quick way to catch a fake or careless source.",
      diagram: `<svg viewBox="0 0 480 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline from 1000 to 2000 showing Hastings 1066, Magna Carta 1215, the Act of Supremacy 1534, the Bastille 1789 and Singapore independence 1965, with centuries and periods marked"><line x1="30" y1="100" x2="450" y2="100" stroke="#334155" stroke-width="2"/><g stroke="#334155" stroke-width="1"><line x1="30" y1="95" x2="30" y2="105"/><line x1="72" y1="95" x2="72" y2="105"/><line x1="114" y1="95" x2="114" y2="105"/><line x1="156" y1="95" x2="156" y2="105"/><line x1="198" y1="95" x2="198" y2="105"/><line x1="240" y1="95" x2="240" y2="105"/><line x1="282" y1="95" x2="282" y2="105"/><line x1="324" y1="95" x2="324" y2="105"/><line x1="366" y1="95" x2="366" y2="105"/><line x1="408" y1="95" x2="408" y2="105"/><line x1="450" y1="95" x2="450" y2="105"/></g><g stroke="#94a3b8" stroke-width="1"><line x1="58" y1="48" x2="58" y2="100"/><line x1="120" y1="80" x2="120" y2="100"/><line x1="254" y1="48" x2="254" y2="100"/><line x1="361" y1="80" x2="361" y2="100"/><line x1="435" y1="48" x2="435" y2="100"/></g><g fill="#fecaca" stroke="#334155"><circle cx="58" cy="100" r="4"/><circle cx="120" cy="100" r="4"/><circle cx="254" cy="100" r="4"/><circle cx="361" cy="100" r="4"/><circle cx="435" cy="100" r="4"/></g><g font-family="sans-serif" font-size="10" fill="#1f2937" text-anchor="middle"><text x="58" y="30" font-weight="bold">1066</text><text x="58" y="42">Hastings</text><text x="120" y="62" font-weight="bold">1215</text><text x="120" y="74">Magna Carta</text><text x="254" y="30" font-weight="bold">1534</text><text x="254" y="42">Act of Supremacy</text><text x="361" y="62" font-weight="bold">1789</text><text x="361" y="74">Bastille</text><text x="435" y="30" font-weight="bold">1965</text><text x="435" y="42">Singapore</text></g><g font-family="sans-serif" font-size="10" fill="#1f2937" text-anchor="middle"><text x="51" y="118">11th</text><text x="93" y="118">12th</text><text x="135" y="118">13th</text><text x="177" y="118">14th</text><text x="219" y="118">15th</text><text x="261" y="118">16th</text><text x="303" y="118">17th</text><text x="345" y="118">18th</text><text x="387" y="118">19th</text><text x="429" y="118">20th</text></g><rect x="30" y="128" width="210" height="22" fill="#c7d2fe" stroke="#334155"/><rect x="240" y="128" width="105" height="22" fill="#fde68a" stroke="#334155"/><rect x="345" y="128" width="105" height="22" fill="#bbf7d0" stroke="#334155"/><g font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle"><text x="135" y="143">Medieval (to c. 1500)</text><text x="292" y="143">Early modern</text><text x="397" y="143">Modern</text></g><g font-family="sans-serif" font-size="10" fill="#1f2937" text-anchor="middle"><text x="30" y="168">1000</text><text x="240" y="168">1500</text><text x="450" y="168">2000</text></g></svg>`,
      diagramCaption: "Centuries are named one ahead of their 'hundreds': 1066 sits in the 11th century. Period boundaries are approximate.",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem:
            "Magna Carta was sealed in 1215 and the Battle of Hastings was fought in 1066. (a) Which century was Magna Carta sealed in? (b) How many years after Hastings did it come? (c) Which period are both events in? (3 marks)",
          steps: [
            "Century: take the hundreds (12) and add one → 13th century. Check: the 13th century runs 1201–1300, and 1215 is inside it.",
            "Gap between two AD dates: subtract the smaller from the larger → 1215 − 1066 = 149 years.",
            "Period: both fall between about 500 and 1500, so both are medieval.",
            "Write each part as a short, clear sentence — no need for long explanation in a recall question.",
          ],
          answer:
            "(a) Magna Carta was sealed in the 13th century. (b) It came 149 years after the Battle of Hastings (1215 − 1066 = 149). (c) Both events belong to the medieval period (the Middle Ages).",
          yourTurn: {
            question: "Which century was the storming of the Bastille (1789) in? Give the number only.",
            answer: { type: "number", value: 18, display: "18th century" },
            solution: "Hundreds = 17, add one → the 18th century (1701–1800).",
          },
        },
      ],
      keyPoints: [
        "Chronology = correct order + sense of how far apart events are.",
        "BC counts backwards (55 BC is before 54 BC); AD counts forwards. BCE/CE use the same numbers.",
        "Century = hundreds + 1 (1066 → 11th century); years ending 00 close the old century.",
        "Periods (medieval, early modern, modern) are later labels with rough, European-based boundaries.",
        "An anachronism is something placed in the wrong time.",
      ],
      whyItWorks:
        "Cause always comes before effect, so a historian who gets the order wrong will get the explanation wrong too. Knowing the gaps matters as well: Magna Carta came almost 150 years after 1066, so the 'Norman' barons who forced it on King John were English landowners whose families had lived in England for generations.",
      strategies: ["Use the chronology", "Spot the anachronism", "Zoom out to the big picture"],
      thinkDeeper:
        "The labels 'medieval' and 'modern' were invented by Europeans. Would they make sense for the history of Singapore or China? What dates would you choose to divide Singapore's past into periods, and why?",
    },
    // ------------------------------------------------------------------ 2
    {
      id: "sources-and-evidence",
      heading: "Sources and evidence",
      discovery: {
        problem:
          "You are researching the Norman Conquest and have two items on your desk:\n\n1. The **Bayeux Tapestry**, embroidered within about 10–15 years of 1066, probably for Bishop Odo — William the Conqueror's half-brother.\n2. A **school textbook** about 1066, written in 2015.\n\nWhich one is the *primary* source? Which one is more likely to be *correct*? Can a source be primary and still be wrong? Decide before reading on.",
        idea:
          "The Tapestry is primary — it was made at the time. The textbook is secondary — written long afterwards by someone using earlier evidence. But 'primary' does **not** mean 'true': the Tapestry tells the Norman side of the story, and the textbook may be more balanced because its author compared many sources. Primary and secondary describe *when and by whom* a source was made, not whether it can be trusted.",
      },
      body:
        "A **source** is anything left behind from the past that can tell us about it: a chronicle, a law, a letter, a poster, a photograph, a coin, a building, a speech.\n\n- **Primary source** — produced at the time, or by someone involved (the Bayeux Tapestry, Magna Carta itself, a 1932 Nazi poster).\n- **Secondary source** — produced later, usually by someone using primary sources (a textbook, a historian's book, a documentary).\n\n**Inference** means working out what a source *suggests* that it does not say directly. Read this:\n\n> “…nor one ox nor one cow nor one pig which was there left out, and not put down in his record.” — Anglo-Saxon Chronicle, entry for 1085, on William I's Domesday survey (in translation)\n\nIt *says* the survey counted animals. You can *infer* that William had enough power to inspect the whole kingdom in detail — and that the English chronicler resented it.\n\n**Content and provenance.** Content is what the source says or shows. Provenance is where it came from. Historians test provenance with **NOP**:\n\n| | Question | Why it matters |\n|---|---|---|\n| **N**ature | What kind of source is it? | A private diary and a public speech are made for different reasons. |\n| **O**rigin | Who made it, when, where? Were they there? | Closeness to events, and the maker's side. |\n| **P**urpose | Why was it made, and for whom? | Persuasion, celebration and record-keeping all shape what is included. |\n\n**Corroboration** (cross-referencing) means checking one source against others. If a Norman chronicle and an English one agree on something, it is more likely to be true — because they had no reason to agree.",
      diagram: `<svg viewBox="0 0 480 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="NOP diagram: a source in the centre with three boxes for Nature, Origin and Purpose and the questions to ask for each"><rect x="180" y="88" width="120" height="46" rx="8" fill="#fde68a" stroke="#334155" stroke-width="1.5"/><text x="240" y="108" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1f2937" text-anchor="middle">THE SOURCE</text><text x="240" y="124" font-family="sans-serif" font-size="10" fill="#1f2937" text-anchor="middle">content + provenance</text><rect x="10" y="10" width="160" height="72" rx="6" fill="#c7d2fe" stroke="#334155"/><rect x="310" y="10" width="160" height="72" rx="6" fill="#bbf7d0" stroke="#334155"/><rect x="160" y="160" width="160" height="62" rx="6" fill="#fecaca" stroke="#334155"/><line x1="170" y1="70" x2="190" y2="88" stroke="#334155" stroke-width="1.5"/><line x1="310" y1="70" x2="290" y2="88" stroke="#334155" stroke-width="1.5"/><line x1="240" y1="134" x2="240" y2="160" stroke="#334155" stroke-width="1.5"/><g font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="90" y="30" font-size="13" font-weight="bold">NATURE</text><text x="90" y="48" font-size="10">What kind of source is it?</text><text x="90" y="62" font-size="10">diary, poster, law, chronicle,</text><text x="90" y="75" font-size="10">photo, speech, memoir</text><text x="390" y="30" font-size="13" font-weight="bold">ORIGIN</text><text x="390" y="48" font-size="10">Who made it? When? Where?</text><text x="390" y="62" font-size="10">Were they there?</text><text x="390" y="75" font-size="10">Whose side were they on?</text><text x="240" y="180" font-size="13" font-weight="bold">PURPOSE</text><text x="240" y="198" font-size="10">Why was it made?</text><text x="240" y="212" font-size="10">Who was meant to see it?</text></g></svg>`,
      diagramCaption: "NOP: three questions to ask about every source's provenance.",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem:
            "Study the source.\n\n> “…nor one ox nor one cow nor one pig which was there left out, and not put down in his record.” — Anglo-Saxon Chronicle, entry for 1085 (in translation)\n\nWhat can you infer from this source about William I's rule? (2 marks)",
          steps: [
            "Ask: what does the source *say*? (The survey recorded even single animals.)",
            "Ask: what does that *suggest*, beyond the words? (William could send officials everywhere and make people answer — he had tight control.)",
            "Use the 'This suggests… because it says…' frame so the inference is backed by the source.",
            "For a second inference, look at the tone: the chronicler sounds disapproving.",
          ],
          answer:
            "This source suggests that William I had very tight control over England, because it says his survey was so detailed that not even 'one pig' was left out. It also suggests that some English people resented this, because the chronicler presents the counting of every animal as something shocking.",
          yourTurn: {
            question: "What word describes working out something a source suggests but does not say directly?",
            answer: { type: "text", accept: ["inference", "an inference", "inferring", "infer", "making an inference"], display: "inference" },
            solution: "Inference — reading 'between the lines' of a source, backed up by what it actually says.",
          },
        },
      ],
      keyPoints: [
        "Primary = from the time (or by someone involved); secondary = later, usually based on primaries.",
        "Primary does not mean reliable; secondary does not mean unreliable.",
        "Inference = what a source suggests, supported by what it says.",
        "NOP = Nature, Origin, Purpose — the questions behind provenance.",
        "Corroboration: check sources against each other, especially sources from opposing sides.",
      ],
      whyItWorks:
        "Nobody in the past wrote for *us*. Every source was made by a particular person for a particular reason, so what it includes and leaves out is shaped by its provenance. NOP makes you see those choices, and inference lets you squeeze out evidence the maker never meant to give — which is often the most honest evidence of all.",
      strategies: ["Check the provenance (NOP)", "Cross-reference sources", "Use precise evidence"],
      thinkDeeper:
        "A Victorian painting of the Battle of Hastings, made in 1880, is a secondary source about 1066. Could it be a *primary* source for anything? (Hint: what could it tell you about the 1880s?)",
    },
    // ------------------------------------------------------------------ 3
    {
      id: "utility-and-reliability",
      heading: "Usefulness and reliability",
      discovery: {
        problem:
          "In 1932, during the Great Depression, the Nazi Party produced an election poster showing a crowd of tired, poor-looking German men and women under the slogan **“Our last hope: Hitler”**.\n\nTwo students argue:\n\n- **Arjun:** “It's Nazi propaganda, so it's biased. It's useless to a historian.”\n- **Mei:** “It's biased — that's exactly what makes it useful.”\n\nWho is right? Decide, and write one sentence explaining why.",
        idea:
          "Mei. The poster is **unreliable** as evidence of what Hitler would actually do — it is propaganda. But it is very **useful** for other questions: it shows *how* the Nazis tried to win votes, *who* they targeted (the unemployed and desperate) and what they thought voters feared. Usefulness always depends on the question you ask: useful *for what*?",
      },
      body:
        "These two words are not the same, and mixing them up is the commonest mistake in source questions.\n\n- **Reliability** — can we trust what the source says to be accurate?\n- **Utility (usefulness)** — how much does the source help us answer a *particular* question?\n\nA source can be unreliable but highly useful. Propaganda, exaggeration and bias are themselves evidence: they show what people believed, wanted or feared.\n\n**Bias** is a one-sided view. **Exaggeration** makes something seem bigger or worse than it was. **Propaganda** is material designed to persuade people to think or act in a certain way, often by a government or party.\n\n**Judging utility** needs three ingredients:\n\n1. **Content** — what does it tell you that is relevant to the enquiry?\n2. **Provenance** — use NOP: what makes it stronger or weaker for *this* enquiry?\n3. **Own knowledge** — does it fit with what you already know? What does it leave out?\n\n| Source | Weakness | But useful for… |\n|---|---|---|\n| Bayeux Tapestry | Made for the Normans | Weapons, armour, ships; how the Normans justified the Conquest |\n| Holbein's portraits of Henry VIII | Flattering royal image | How Henry wanted to be seen — power as image |\n| Suffragette newspaper | Written by campaigners | Their aims, methods and how they saw the government |\n| Churchill's war memoirs | Written after the war by the leader who had to explain defeats | What he believed, and how he wanted to be remembered |\n\nOne warning: famous stories are not automatically sources. There is no reliable evidence that Marie Antoinette ever said 'Let them eat cake' — a similar line appears in Rousseau's *Confessions*, written when she was still a child in Austria.",
      diagram: `<svg viewBox="0 0 480 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="How to judge utility: content plus provenance plus own knowledge leads to a judgement about how useful a source is for a particular enquiry"><g stroke="#334155" stroke-width="1.5"><rect x="10" y="12" width="130" height="64" rx="6" fill="#c7d2fe"/><rect x="175" y="12" width="130" height="64" rx="6" fill="#fde68a"/><rect x="340" y="12" width="130" height="64" rx="6" fill="#bbf7d0"/><rect x="120" y="112" width="240" height="48" rx="8" fill="#fecaca"/></g><g font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="75" y="34" font-size="13" font-weight="bold">CONTENT</text><text x="75" y="52" font-size="10">What does it say or</text><text x="75" y="65" font-size="10">show that is relevant?</text><text x="240" y="34" font-size="13" font-weight="bold">PROVENANCE</text><text x="240" y="52" font-size="10">NOP: what makes it</text><text x="240" y="65" font-size="10">stronger or weaker?</text><text x="405" y="34" font-size="13" font-weight="bold">OWN KNOWLEDGE</text><text x="405" y="52" font-size="10">Does it fit? What</text><text x="405" y="65" font-size="10">does it leave out?</text><text x="157" y="50" font-size="18" font-weight="bold">+</text><text x="322" y="50" font-size="18" font-weight="bold">+</text><text x="240" y="132" font-size="13" font-weight="bold">JUDGEMENT</text><text x="240" y="150" font-size="10">How useful, and FOR WHAT enquiry?</text></g><g stroke="#334155" stroke-width="1.5" fill="none"><line x1="75" y1="76" x2="170" y2="112"/><line x1="240" y1="76" x2="240" y2="112"/><line x1="405" y1="76" x2="310" y2="112"/></g></svg>`,
      diagramCaption: "Utility is a judgement built from three ingredients — and it always depends on the enquiry.",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem:
            "Source: a 1932 Nazi election poster showing a crowd of poor, tired-looking Germans with the slogan “Our last hope: Hitler”.\n\nHow useful is this source for an enquiry into why support for the Nazis grew between 1929 and 1932? (4 marks)",
          steps: [
            "Content: what does it show that is relevant? (The Nazis appealed to people made desperate by the Depression and presented Hitler as a saviour.)",
            "Provenance: Nature = election poster; Origin = Nazi Party, 1932, during the Depression; Purpose = to win votes. So it shows Nazi *methods*, but not whether voters actually believed it.",
            "Own knowledge: by 1932 about six million Germans were unemployed, and the Nazis became the largest party in July 1932 with about 37% of the vote — the poster fits this.",
            "Limitation: it shows only one reason (propaganda aimed at the desperate) and leaves out others, such as the weakness of Weimar governments or fear of communism.",
            "Judgement: useful for *how* the Nazis won support, less useful on its own for *why* people voted for them.",
          ],
          answer:
            "The poster is useful because it shows how the Nazis tried to win support during the Depression: it presents ordinary Germans as desperate and Hitler as their only hope. Its provenance makes it useful for studying Nazi methods, because it was made by the Nazi Party in 1932 to win votes, so it reveals who they were targeting. This fits my own knowledge that about six million Germans were unemployed by 1932 and that the Nazis became the largest party in July 1932. However, because it is propaganda, it cannot show whether voters believed it, and it leaves out other reasons such as fear of communism. Overall it is very useful for understanding Nazi propaganda, but only partly useful for explaining why their support grew.",
          yourTurn: {
            question: "What name is given to material deliberately designed to persuade people to think or act in a certain way, often produced by a government or party?",
            answer: { type: "text", accept: ["propaganda"], display: "propaganda" },
            solution: "Propaganda — for example, Nazi posters, or Holbein's flattering portraits of Henry VIII.",
          },
        },
      ],
      keyPoints: [
        "Reliability = can we trust it? Utility = does it help with THIS question?",
        "A biased source can be extremely useful — bias is evidence of attitudes and methods.",
        "Always ask 'useful FOR what?'",
        "Judge utility with content + provenance (NOP) + own knowledge.",
        "Finish with a judgement: how useful, and why.",
      ],
      whyItWorks:
        "Historians rarely have a perfectly neutral source, so if they threw away every biased one there would be almost nothing left. Instead they ask what each source can honestly reveal. A Nazi poster cannot tell you the truth about Hitler, but it tells you a great deal about the Nazis — and that is real evidence.",
      strategies: ["Ask \"useful for what?\"", "Check the provenance (NOP)", "Ask \"who benefits?\"", "Use precise evidence"],
      thinkDeeper:
        "Is there any source that is useless for *every* possible question? Try to invent one — then try to think of a question that would make it useful after all.",
    },
    // ------------------------------------------------------------------ 4
    {
      id: "interpretations",
      heading: "Interpretations: why historians disagree",
      discovery: {
        problem:
          "Two views of King John (reigned 1199–1216):\n\n> “Foul as it is, Hell itself is made fouler by the presence of John.” — Matthew Paris, a monk at St Albans Abbey, writing in the mid-1200s\n\n**View 2:** Some 20th-century historians, studying the government records of John's reign, described him as a hard-working, capable administrator who took a close personal interest in justice and royal finances.\n\nHow can both be describing the same man? List as many reasons as you can for the difference *before* reading on.",
        idea:
          "Interpretations differ because of **who** wrote them, **when**, **why**, and **what evidence** they used. Matthew Paris was a monk writing decades after John's death; the Church had suffered badly when John quarrelled with the Pope, and Paris loved a dramatic story. Modern historians could read John's government records, which show his daily work. Neither view is simply 'right' — each is built from particular evidence for a particular purpose.",
      },
      body:
        "A **source** comes from the past. An **interpretation** is a later *account* of the past — a historian's book, a documentary, a museum display, a film, even a statue. Interpretations are built *from* sources, but they involve choices: what to include, what to stress, what to conclude.\n\n**Why interpretations differ**\n\n| Reason | King John example |\n|---|---|\n| **Evidence available** | Modern historians use the royal records; monks relied on stories and rumours. |\n| **Focus** (the question asked) | A study of John's government looks kinder than a study of his wars or his treatment of barons. |\n| **When written** (context) | Monks wrote just after John's quarrel with the Church; modern historians write for a world that prizes evidence and balance. |\n| **The author's values and purpose** | A monk wanted to teach a moral lesson; a Robin Hood film wants a villain. |\n\n**Other interpretation debates in Year 8**\n\n- **Hitler's rise:** was he carried to power by mass support during the Depression, or handed power by a small group of conservative politicians in January 1933? (Both, say most historians — but they weigh them differently.)\n- **The French Revolution:** some historians, such as Georges Lefebvre, stressed class conflict and a rising middle class; later 'revisionists' such as Alfred Cobban and François Furet stressed politics and ideas instead.\n- **Suffragettes:** did militant action win the vote, or harden opposition and delay it?\n- **Singapore:** is 1819 the start of Singapore's story? The 2019 Bicentennial commemorations deliberately set Raffles' arrival within a much longer, 700-year history going back to Temasek.\n\n**How to evaluate an interpretation:** identify its main claim → test it against the evidence you know (for *and* against) → consider how it was made (NOP for interpretations) → judge *how far* it is convincing.",
      diagram: `<svg viewBox="0 0 480 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A spectrum of interpretations of King John from villain to capable ruler, placing monastic chroniclers, Robin Hood stories, recent historians and W. L. Warren along it"><text x="240" y="18" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle">Interpretations of King John</text><line x1="40" y1="90" x2="440" y2="90" stroke="#334155" stroke-width="2"/><polygon points="40,90 50,85 50,95" fill="#334155"/><polygon points="440,90 430,85 430,95" fill="#334155"/><g stroke="#94a3b8" stroke-width="1"><line x1="95" y1="70" x2="95" y2="90"/><line x1="265" y1="70" x2="265" y2="90"/><line x1="170" y1="90" x2="170" y2="120"/><line x1="360" y1="90" x2="360" y2="120"/></g><g stroke="#334155"><circle cx="95" cy="90" r="5" fill="#fecaca"/><circle cx="170" cy="90" r="5" fill="#fecaca"/><circle cx="265" cy="90" r="5" fill="#fde68a"/><circle cx="360" cy="90" r="5" fill="#bbf7d0"/></g><g font-family="sans-serif" font-size="10" fill="#1f2937" text-anchor="middle"><text x="95" y="40">Matthew Paris and</text><text x="95" y="52">Roger of Wendover</text><text x="95" y="64">(monks, 1200s)</text><text x="265" y="40">Many recent historians:</text><text x="265" y="52">hard-working, but cruel</text><text x="265" y="64">and untrustworthy</text><text x="170" y="132">Robin Hood stories</text><text x="170" y="144">and films</text><text x="360" y="132">W. L. Warren (1961):</text><text x="360" y="144">capable administrator</text><text x="360" y="156">with serious flaws</text></g><g font-family="sans-serif" font-size="11" font-weight="bold" fill="#1f2937"><text x="40" y="112" text-anchor="start">VILLAIN</text><text x="440" y="112" text-anchor="end">CAPABLE RULER</text></g></svg>`,
      diagramCaption: "Same king, different interpretations — placed by how harshly they judge him. Positions are approximate.",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem:
            "Explain why Matthew Paris and some modern historians have given different interpretations of King John. (4 marks)",
          steps: [
            "Point 1 — different evidence: modern historians use the government records; Paris used stories, rumours and earlier chronicles.",
            "Point 2 — different purpose and context: Paris was a monk writing after John's quarrel with the Church (the Interdict of 1208), so he had reason to be hostile.",
            "Support each point with a precise detail (a name, a date, a record).",
            "Explain the effect: how does that difference *produce* a harsher or kinder view?",
            "Link: the two interpretations answer different questions using different evidence.",
          ],
          answer:
            "One reason is that they used different evidence. Matthew Paris, a monk at St Albans writing in the mid-1200s, relied on stories and earlier chronicles, while modern historians can study the government records of John's reign, which show how hard he worked at justice and finance. This means modern historians can see a side of John that Paris never saw. A second reason is purpose and context. Paris was writing after John's long quarrel with the Church, when the Pope placed England under an Interdict in 1208, so as a churchman he had a reason to present John as wicked — he wanted to teach a moral lesson. Modern historians aim for balance. So the interpretations differ because they were made at different times, for different purposes, from different evidence.",
          yourTurn: {
            question: "Which monk of St Albans wrote that 'Hell itself is made fouler by the presence of John'?",
            answer: { type: "text", accept: ["Matthew Paris", "Paris", "Matthew of Paris"], display: "Matthew Paris" },
            solution: "Matthew Paris, a monk and chronicler at St Albans Abbey, writing in the mid-1200s.",
          },
        },
      ],
      keyPoints: [
        "A source comes from the past; an interpretation is a later account built from sources.",
        "Interpretations differ because of evidence, focus, context (when written) and the author's values or purpose.",
        "Different does not automatically mean wrong — but some interpretations are better supported than others.",
        "Evaluate an interpretation by testing its claim against evidence, for and against.",
      ],
      whyItWorks:
        "The past is gone; all we have are traces of it. Every historian has to select from those traces and explain them, and different questions, evidence and values lead to different selections. That is why history is an argument, not a list — and why your job is to judge which interpretation is best supported, not just to repeat one.",
      strategies: ["Check the provenance (NOP)", "Weigh both sides, then judge", "Use precise evidence", "Ask \"who benefits?\""],
      thinkDeeper:
        "In 2019 Singapore marked 200 years since Raffles' arrival, but framed it within 700 years of history. Why might a nation choose to tell its story from 1299 rather than from 1819? What does this show about how interpretations are shaped by the present?",
    },
    // ------------------------------------------------------------------ 5
    {
      id: "causation-and-consequence",
      heading: "Causation and consequence",
      discovery: {
        problem:
          "Why did Hitler become Chancellor of Germany on 30 January 1933? Here are eight cause cards:\n\n- Treaty of Versailles (1919)\n- hyperinflation (1923)\n- Wall Street Crash (1929)\n- about six million Germans unemployed by 1932\n- Hitler's powerful speeches\n- Nazi propaganda and SA street violence\n- weak coalition governments\n- von Papen persuades President Hindenburg to appoint Hitler\n\nSort them into three piles: **long-term**, **short-term** and **the final spark**. Then ask: which single card could you remove and *still* get Hitler as Chancellor?",
        idea:
          "You probably found it hard to remove any card without the whole chain wobbling. That is the key insight: big events have **several causes working together**. Long-term causes (Versailles, weak governments) created resentment and instability; short-term causes (the Depression, unemployment, propaganda) turned that into votes for the Nazis; the **trigger** (the deal between Papen and Hindenburg) turned votes into power. Good historians **link** causes, not just list them.",
      },
      body:
        "**Types of cause by time**\n\n- **Long-term** — conditions that build up over years (Versailles; the unfair estate system in France).\n- **Short-term** — developments that make an event likely in the months or few years before (the Depression; bread prices in 1788–89).\n- **Trigger** — the final event that sets things off (Hindenburg appointing Hitler; the storming of the Bastille on 14 July 1789).\n\n**Types of cause by category:** political, economic, social, religious, military, and individuals. Henry VIII's Break with Rome had several: an individual (Henry's desire for a male heir and for Anne Boleyn), religious (Protestant ideas), economic (Church wealth) and political (Henry's wish for total power over his kingdom).\n\n**Linking causes.** The best answers show causes acting on each other: the Wall Street Crash *caused* unemployment, *which made* Nazi promises more attractive, *which won* them seats, *which made* Hindenburg's advisers think they could use Hitler.\n\n**Ranking causes.** 'Most important' needs a reason. Useful tests: Was it **necessary** (would the event have happened without it)? Did it **affect the other causes**? Did it come at the **decisive moment**?\n\n**Consequences** are results. They can be:\n\n| | Example |\n|---|---|\n| **Intended** | Magna Carta, 1215: the barons wanted to limit John's power. |\n| **Unintended** | Mao's Great Leap Forward (1958–62) aimed to industrialise China fast; it led to a terrible famine in which, historians estimate, between about 15 and 45 million people died. |\n| **Short-term** | Magna Carta was annulled by the Pope within weeks; civil war followed. |\n| **Long-term** | Centuries later, Magna Carta inspired ideas about rights in Britain, the USA and beyond. |",
      diagram: `<svg viewBox="0 0 480 215" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cause diagram for Hitler becoming Chancellor in January 1933: long-term causes 1919 to 1923, short-term causes 1929 to 1932, and the trigger in January 1933, joined by arrows"><text x="240" y="18" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle">Why was Hitler appointed Chancellor in January 1933?</text><g stroke="#334155" stroke-width="1.5"><rect x="8" y="32" width="140" height="150" rx="6" fill="#c7d2fe"/><rect x="170" y="32" width="140" height="150" rx="6" fill="#fde68a"/><rect x="332" y="32" width="140" height="150" rx="6" fill="#fecaca"/></g><g stroke="#334155" stroke-width="2"><line x1="148" y1="107" x2="162" y2="107"/><line x1="310" y1="107" x2="324" y2="107"/></g><polygon points="170,107 161,102 161,112" fill="#334155"/><polygon points="332,107 323,102 323,112" fill="#334155"/><g font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="78" y="52" font-size="12" font-weight="bold">LONG-TERM</text><text x="78" y="66" font-size="10">1919–1923</text><text x="78" y="88" font-size="10">Treaty of Versailles</text><text x="78" y="101" font-size="10">(1919): anger</text><text x="78" y="122" font-size="10">Weak coalition</text><text x="78" y="135" font-size="10">governments</text><text x="78" y="156" font-size="10">Hyperinflation (1923)</text><text x="240" y="52" font-size="12" font-weight="bold">SHORT-TERM</text><text x="240" y="66" font-size="10">1929–1932</text><text x="240" y="88" font-size="10">Wall Street Crash (1929)</text><text x="240" y="108" font-size="10">c. 6 million unemployed</text><text x="240" y="128" font-size="10">Nazi propaganda</text><text x="240" y="141" font-size="10">and SA violence</text><text x="240" y="161" font-size="10">Fear of communism</text><text x="402" y="52" font-size="12" font-weight="bold">TRIGGER</text><text x="402" y="66" font-size="10">January 1933</text><text x="402" y="88" font-size="10">Papen and other</text><text x="402" y="101" font-size="10">conservatives persuade</text><text x="402" y="114" font-size="10">President Hindenburg</text><text x="402" y="135" font-size="10">Hitler appointed</text><text x="402" y="148" font-size="10">Chancellor,</text><text x="402" y="161" font-size="10">30 January 1933</text><text x="240" y="203" font-size="11">Each layer made the next possible — no single card explains it alone.</text></g></svg>`,
      diagramCaption: "Long-term conditions, short-term developments and a trigger — linked, not listed.",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem: "Explain why there was a revolution in France in 1789. (6 marks)",
          steps: [
            "Sort the causes: long-term (the unfair estate system; Enlightenment ideas), short-term (government debt, partly from helping the Americans against Britain; the bad harvest of 1788 and high bread prices), trigger (the Estates-General of 1789 and the storming of the Bastille).",
            "Write one PEEL paragraph per main cause, each with a precise detail.",
            "In each 'Explain' sentence, show *how* the cause pushed France towards revolution.",
            "Finish by linking the causes: debt forced the king to call the Estates-General, which gave the angry Third Estate a stage.",
          ],
          answer:
            "One long-term cause was the unfair estate system. The clergy (First Estate) and nobles (Second Estate) paid little tax, while the Third Estate — the vast majority of the people — paid most of it. This created deep resentment, sharpened by Enlightenment ideas that people were born equal.\n\nA short-term cause was the government's financial crisis. France was close to bankruptcy, partly because of the cost of helping the Americans in their war against Britain, and the bad harvest of 1788 pushed bread prices up. This meant ordinary people were hungry and angry just when the king needed more money.\n\nThese causes were linked by the trigger. Desperate for money, Louis XVI called the Estates-General in May 1789. The Third Estate declared itself the National Assembly, and when Parisians feared the king would crush it, they stormed the Bastille on 14 July 1789. Debt forced the king to call the meeting; resentment and hunger turned it into a revolution.",
          yourTurn: {
            question: "What one word describes the final event that sets off a big change, such as the storming of the Bastille?",
            answer: { type: "text", accept: ["trigger", "a trigger", "trigger cause", "the trigger", "spark", "immediate cause"], display: "trigger" },
            solution: "A trigger (or immediate cause) — the spark that sets off conditions that have been building for years.",
          },
        },
      ],
      keyPoints: [
        "Causes by time: long-term, short-term, trigger.",
        "Causes by category: political, economic, social, religious, military, individuals.",
        "Link causes ('which led to…'), don't just list them.",
        "To rank causes, use a test: necessary? affected other causes? decisive moment?",
        "Consequences can be intended or unintended, short-term or long-term.",
      ],
      whyItWorks:
        "Events in history are like fires: you need fuel (long-term conditions), heat (short-term pressures) and a spark (the trigger). A spark on its own does nothing; dry fuel can sit for years. Explaining *how* the three combined is what turns a list of facts into a real historical explanation.",
      strategies: ["Sort causes into categories", "Link the factors", "Use the chronology", "Consider the counterfactual"],
      thinkDeeper:
        "Counterfactual test: if the Wall Street Crash had never happened, would Hitler still have become Chancellor? Use the Nazi vote (2.6% in 1928) to help you decide — and then ask what that tells you about the importance of the Depression.",
    },
    // ------------------------------------------------------------------ 6
    {
      id: "significance-and-change",
      heading: "Significance, change and continuity",
      discovery: {
        problem:
          "Which was more **significant** in the story of women getting the vote in Britain?\n\n- Emily Wilding Davison running onto the course at the Epsom Derby in June 1913 (she died of her injuries four days later), or\n- the Representation of the People Act of 1918, which gave the vote to many women over 30?\n\nBefore choosing, write down **what 'significant' should mean**. Is it 'famous'? 'Changed things'? Something else?",
        idea:
          "If 'significant' means *remembered and talked about*, Davison wins — her story is famous. If it means *resulting in change*, the 1918 Act wins — it actually gave about 8.4 million women the vote. Significance is not a fact you look up; it is a **judgement**, and it depends on your criteria. State your criteria and your judgement becomes an argument rather than an opinion.",
      },
      body:
        "**Significance.** History teacher Christine Counsell suggested five tests, the **5 Rs**. Something is significant if it was:\n\n| Test | Magna Carta, 1215 |\n|---|---|\n| **Remarkable** — noticed at the time or since | A king was forced to accept written limits on his power. |\n| **Remembered** — part of a group's memory | Reissued in 1216, 1217 and 1225; its 800th anniversary was marked in 2015. |\n| **Resonant** — people connect it to later situations | In 1948 Eleanor Roosevelt hoped the Universal Declaration of Human Rights would become “the international Magna Carta for all men everywhere”. |\n| **Resulting in change** | Little at first (annulled within weeks), but in the long run it spread the idea that rulers are under the law. |\n| **Revealing** — tells us about its time | Shows how angry the barons were about John's taxes and justice. |\n\nSignificance can change over time: Magna Carta mattered more in the 1600s, when lawyers used it against the Stuart kings, than in the 1220s.\n\n**Change and continuity.** Change is what is different; continuity is what stays the same. Describe change precisely:\n\n- **Rate** — fast or slow? (The vote for women came in two steps: 1918, then equal votes at 21 in 1928.)\n- **Extent** — how much changed, and for whom?\n- **Nature** — better or worse (progress or regress), and for whom?\n- **Turning point** — a moment when the direction of change shifted, such as the Enabling Act of March 1933.\n\nRemember the continuity too: after the French Revolution abolished the monarchy (1792), Napoleon crowned himself Emperor in 1804 — one-man rule returned.\n\n**Writing it up: PEEL.** **P**oint (answer the question) → **E**vidence (precise facts) → **E**xplain (*how* the evidence proves the point) → **L**ink (back to the question, or to your next point). End with a **substantiated judgement**: 'Overall… because…'.",
      diagram: `<svg viewBox="0 0 480 225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Step diagram of women's right to vote in UK general elections: no vote before 1918, women over 30 with property from 1918, equal votes at 21 from 1928, with NUWSS 1897, WSPU 1903 and Davison 1913 marked"><text x="240" y="18" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle">Women's right to vote in UK general elections</text><line x1="40" y1="185" x2="450" y2="185" stroke="#334155" stroke-width="1.5"/><polyline points="40,165 309,165 309,120 426,120 426,72 450,72" fill="none" stroke="#334155" stroke-width="3"/><g fill="#c7d2fe" stroke="#334155"><circle cx="63" cy="185" r="4"/><circle cx="134" cy="185" r="4"/><circle cx="251" cy="185" r="4"/></g><g fill="#bbf7d0" stroke="#334155"><circle cx="309" cy="185" r="4"/><circle cx="426" cy="185" r="4"/></g><g font-family="sans-serif" font-size="10" fill="#1f2937" text-anchor="middle"><text x="150" y="157">No vote — campaigning grows, law unchanged</text><text x="367" y="100">Women over 30</text><text x="367" y="112">with property</text><text x="63" y="200" font-weight="bold">1897</text><text x="63" y="212">NUWSS</text><text x="134" y="200" font-weight="bold">1903</text><text x="134" y="212">WSPU</text><text x="251" y="200" font-weight="bold">1913</text><text x="251" y="212">Davison</text><text x="309" y="200" font-weight="bold">1918</text><text x="309" y="212">Act</text><text x="426" y="200" font-weight="bold">1928</text><text x="426" y="212">Act</text></g><text x="440" y="60" font-family="sans-serif" font-size="10" fill="#1f2937" text-anchor="end">Equal votes at 21</text></svg>`,
      diagramCaption: "Change came in two big steps, not one smooth line. The heights show the kind of change, not exact numbers.",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem: "How significant was Magna Carta? Explain your answer. (6 marks)",
          steps: [
            "Choose criteria: resulting in change (short- and long-term), resonance, and what it reveals.",
            "Short term (PEEL): little immediate change — annulled by Pope Innocent III within weeks; civil war followed.",
            "Long term (PEEL): reissued in 1216, 1217 and 1225; became a symbol that the ruler is under the law; cited by later campaigners for rights.",
            "Judgement: weigh short- against long-term, and finish with 'Overall… because…'.",
          ],
          answer:
            "In the short term Magna Carta was not very significant. John never meant to keep it: the Pope annulled it within weeks and civil war followed. This shows that a piece of parchment could not on its own control a determined king.\n\nIn the long term, however, it was highly significant because it resulted in change and resonated across centuries. It was reissued in 1216, 1217 and 1225, so its ideas became part of English law, especially the clause that no free man could be imprisoned 'except by the lawful judgement of his equals or by the law of the land'. Later, people used it to argue that even rulers must obey the law — Eleanor Roosevelt called the 1948 Universal Declaration of Human Rights a possible 'international Magna Carta'.\n\nOverall, Magna Carta was very significant, but for what it came to stand for rather than for what it achieved in 1215 — its significance grew because later generations kept using it.",
          yourTurn: {
            question: "In what year did women in the UK win the vote on the same terms as men (at 21)?",
            answer: { type: "number", value: 1928 },
            solution: "1928 — the Equal Franchise Act. (1918 gave the vote only to women over 30 who met a property qualification.)",
          },
        },
      ],
      keyPoints: [
        "Significance is a judgement made with criteria — e.g. the 5 Rs: Remarkable, Remembered, Resonant, Resulting in change, Revealing.",
        "Significance can grow or shrink over time.",
        "Describe change by rate, extent and nature; look for turning points — and always for continuity too.",
        "PEEL: Point, Evidence, Explain, Link.",
        "A substantiated judgement says 'Overall… because…', with a reason.",
      ],
      whyItWorks:
        "Without criteria, 'significant' just means 'I've heard of it'. Criteria such as the 5 Rs force you to explain *why* something matters and *to whom*, which is what turns an opinion into a historical argument. PEEL does the same for writing: the 'Explain' step is where you show the examiner you understand, not just remember.",
      strategies: ["Look for change AND continuity", "Weigh both sides, then judge", "Zoom out to the big picture", "Compare case studies"],
      thinkDeeper:
        "Was 9 August 1965 — Singapore's separation from Malaysia — a turning point? Think about what changed (independence, a new nation) and what continued (for example, a parliamentary system and English common law inherited from British rule).",
    },
  ],
  learn: {
    flashcards: [
      { front: "How do you work out which century a year is in?", back: "Add one to the 'hundreds': 1066 → 11th century, 1789 → 18th. Years ending in 00 close the old century (1900 is in the 19th)." },
      { front: "What do BCE and CE stand for?", back: "Before the Common Era and Common Era — the same numbers as BC and AD." },
      { front: "What is an anachronism?", back: "Something placed in the wrong time period — e.g. a Norman knight with a gun." },
      { front: "Primary vs secondary source?", back: "Primary: made at the time or by someone involved. Secondary: made later, usually from primary sources." },
      { front: "What does NOP stand for?", back: "Nature (what kind of source), Origin (who, when, where), Purpose (why, for whom)." },
      { front: "What is inference?", back: "Working out what a source suggests beyond what it directly says — backed by its content." },
      { front: "What is corroboration?", back: "Checking a source against other sources to see whether they agree (cross-referencing)." },
      { front: "Reliability vs utility?", back: "Reliability: can we trust it? Utility: how much does it help answer a particular question?" },
      { front: "Can a biased source be useful?", back: "Yes — bias and propaganda are evidence of attitudes, aims and methods. Ask 'useful for what?'" },
      { front: "Source vs interpretation?", back: "A source comes from the past; an interpretation is a later account of the past, built from sources." },
      { front: "Four reasons interpretations differ?", back: "Evidence available, focus/question, when written (context), the author's values and purpose." },
      { front: "Long-term, short-term and trigger causes?", back: "Long-term builds over years; short-term makes the event likely soon before; the trigger sets it off." },
      { front: "Counsell's 5 Rs of significance?", back: "Remarkable, Remembered, Resonant, Resulting in change, Revealing." },
      { front: "What does PEEL stand for?", back: "Point, Evidence, Explain, Link." },
      { front: "What is a turning point?", back: "A moment when the direction of change shifts significantly (e.g. the Enabling Act, March 1933)." },
      { front: "What is continuity?", back: "Things that stay the same over a period of change." },
    ],
    mustKnow: [
      "Can you put events from across the course in chronological order and name the century of any year?",
      "Can you explain BC/AD and BCE/CE, and why 55 BC is earlier than 54 BC?",
      "Can you define primary and secondary sources and explain why primary does not mean reliable?",
      "Can you make an inference from a source and support it with a quotation?",
      "Can you use NOP to analyse a source's provenance?",
      "Can you explain the difference between reliability and utility, and why a biased source can be useful?",
      "Can you explain why two historians might interpret the same person differently (e.g. King John)?",
      "Can you sort causes into long-term, short-term and trigger, and into categories?",
      "Can you link causes and justify which was most important?",
      "Can you judge significance with criteria such as the 5 Rs?",
      "Can you describe change by its rate, extent and nature, and spot continuity?",
      "Can you write a PEEL paragraph that ends with a substantiated judgement?",
    ],
    misconceptions: [
      { wrong: "Primary sources are reliable and secondary sources are not.", right: "Primary/secondary describes when and by whom a source was made, not whether it is true. The Bayeux Tapestry is primary but tells the Norman side." },
      { wrong: "A biased source is useless.", right: "Bias is evidence too. A Nazi poster is unreliable about Hitler but very useful about Nazi propaganda methods." },
      { wrong: "1900 is in the 20th century.", right: "There was no year 0, so the 20th century ran 1901–2000. 1900 is the last year of the 19th century." },
      { wrong: "If two historians disagree, one of them must be lying.", right: "They may use different evidence, ask different questions or write in different contexts. Judge which is better supported." },
      { wrong: "Significant just means famous.", right: "Significance is a judgement with criteria, e.g. resulting in change, resonance, what it reveals." },
      { wrong: "The trigger is the most important cause.", right: "The trigger is the last cause, not necessarily the biggest — it only works because long-term and short-term causes built up first." },
      { wrong: "Everything changed after a revolution.", right: "Look for continuity: after the French Revolution, one-man rule returned when Napoleon became Emperor in 1804." },
    ],
    examMistakes: [
      "Writing about whether a source is reliable when the question asks how USEFUL it is.",
      "Saying 'it's biased so it's useless' without explaining what it IS useful for.",
      "Copying out a source instead of making an inference from it.",
      "Describing the provenance ('it was written in 1932') without explaining how that affects usefulness.",
      "Listing causes without explaining or linking them.",
      "Saying a cause was 'most important' without giving a reason or a criterion.",
      "Ending a 'how far' answer without a clear judgement ('Overall… because…').",
      "Getting centuries wrong by one (saying 1066 is in the 10th century).",
    ],
    mnemonics: [
      { topic: "Provenance", device: "NOP — Nature, Origin, Purpose", explanation: "Three questions for every source: what is it, who made it when, and why?" },
      { topic: "Writing paragraphs", device: "PEEL — Point, Evidence, Explain, Link", explanation: "The 'Explain' step is where most marks are won: show HOW the evidence proves the point." },
      { topic: "Categories of cause", device: "Please Eat Some Ripe Mangoes Indoors", explanation: "Political, Economic, Social, Religious, Military, Individuals." },
      { topic: "Significance", device: "The 5 Rs — Remarkable, Remembered, Resonant, Resulting in change, Revealing", explanation: "Christine Counsell's tests for whether something was significant." },
      { topic: "Centuries", device: "Hundreds plus one", explanation: "1066 → 10 + 1 = 11th century. Except years ending 00, which finish the old century." },
    ],
    realWorld: [
      { title: "Spotting fake news", detail: "Before you share a viral post, ask NOP: what is it, who made it, and why? It is the same check historians use on a 1932 poster.", emoji: "📱" },
      { title: "Courts weigh evidence like historians", detail: "Judges and juries compare witnesses, look for corroboration and ask who benefits from a story — exactly the skills of source analysis.", emoji: "⚖️" },
      { title: "Museums and anniversaries", detail: "Singapore's 2019 Bicentennial and the National Museum choose how to tell the past. Every display is an interpretation, built from sources.", emoji: "🏛️" },
      { title: "Statues, street names and significance", detail: "Arguments about whom a city should honour are really arguments about historical significance — and about which criteria matter.", emoji: "🗽" },
      { title: "Magna Carta still in law", detail: "A few clauses of Magna Carta, including the promise of lawful judgement, are still part of English law over 800 years later.", emoji: "📜" },
    ],
    videos: [
      { title: "Primary and secondary sources explained", channel: "YouTube search", url: "https://www.youtube.com/results?search_query=primary+and+secondary+sources+history+explained" },
      { title: "Analysing provenance: Nature, Origin, Purpose", channel: "YouTube search", url: "https://www.youtube.com/results?search_query=source+analysis+nature+origin+purpose+history" },
      { title: "Usefulness vs reliability of sources", channel: "YouTube search", url: "https://www.youtube.com/results?search_query=usefulness+vs+reliability+history+sources" },
      { title: "Long-term, short-term and trigger causes", channel: "YouTube search", url: "https://www.youtube.com/results?search_query=long+term+short+term+trigger+causes+history" },
      { title: "Historical significance and the 5 Rs", channel: "YouTube search", url: "https://www.youtube.com/results?search_query=historical+significance+5+Rs+Counsell" },
      { title: "How to write a PEEL paragraph in history", channel: "YouTube search", url: "https://www.youtube.com/results?search_query=PEEL+paragraph+history" },
    ],
    keyDates: [
      { year: -55, date: "55 BC", event: "Julius Caesar's first expedition to Britain", note: "A BC date: 55 BC came before 54 BC, his second visit." },
      { year: 1066, date: "14 Oct 1066", event: "Battle of Hastings", note: "The Bayeux Tapestry, made soon after, is a classic primary source with a Norman point of view." },
      { year: 1215, date: "15 June 1215", event: "Magna Carta sealed at Runnymede", note: "A model case for judging significance with the 5 Rs." },
      { year: 1534, date: "1534", event: "Act of Supremacy makes Henry VIII Supreme Head of the Church of England", note: "Caused by a mix of individual, religious, economic and political factors." },
      { year: 1789, date: "14 July 1789", event: "Storming of the Bastille", note: "The trigger for revolution after long-term and short-term causes built up." },
      { year: 1819, date: "1819", event: "Raffles establishes a British trading post in Singapore", note: "Its significance has been reinterpreted — the 2019 Bicentennial placed it in a 700-year story." },
      { year: 1918, date: "1918", event: "Representation of the People Act gives many women over 30 the vote", note: "A big step of change — but equal votes only came in 1928." },
      { year: 1933, date: "30 Jan 1933", event: "Hitler appointed Chancellor of Germany", note: "Explained by linking long-term, short-term and trigger causes." },
      { year: 1942, date: "15 Feb 1942", event: "Fall of Singapore to Japan", note: "Churchill later called it the worst disaster in British history — a memoir written with hindsight and a reputation to protect." },
      { year: 1965, date: "9 Aug 1965", event: "Singapore becomes an independent nation", note: "A turning point — with important continuities from the colonial era." },
    ],
    keyTerms: [
      { term: "Chronology", definition: "Arranging events in the order they happened, and understanding the time between them." },
      { term: "Anachronism", definition: "Something placed in the wrong time period." },
      { term: "Century", definition: "A period of 100 years; the 11th century is 1001–1100." },
      { term: "BCE / CE", definition: "Before the Common Era / Common Era — alternatives to BC and AD with the same numbers." },
      { term: "Primary source", definition: "A source produced at the time being studied, or by someone involved." },
      { term: "Secondary source", definition: "A source produced later, usually using primary sources (e.g. a textbook)." },
      { term: "Provenance", definition: "Where a source comes from: its nature, origin and purpose." },
      { term: "Inference", definition: "Something a source suggests that it does not directly say." },
      { term: "Corroboration", definition: "Checking a source against others to see if they agree; also called cross-referencing." },
      { term: "Reliability", definition: "How far a source can be trusted to be accurate." },
      { term: "Utility", definition: "How useful a source is for a particular enquiry." },
      { term: "Bias", definition: "A one-sided view that favours one side or person." },
      { term: "Propaganda", definition: "Material designed to persuade people to think or act in a certain way, often by a government or party." },
      { term: "Interpretation", definition: "A later account or view of the past, built from sources — e.g. a historian's book or a film." },
      { term: "Trigger", definition: "The final event that sets off a bigger change." },
      { term: "Consequence", definition: "A result of an event — intended or unintended, short-term or long-term." },
      { term: "Significance", definition: "How important something was, judged against criteria such as the 5 Rs." },
      { term: "Continuity", definition: "Things that stay the same over time." },
      { term: "Turning point", definition: "A moment after which the direction of change shifts." },
      { term: "PEEL", definition: "Point, Evidence, Explain, Link — a structure for analytical paragraphs." },
    ],
  },
};
