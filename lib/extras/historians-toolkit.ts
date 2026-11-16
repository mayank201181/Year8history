import type { TopicExtras } from "../types.ts";

const enquiryCycle = `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The enquiry cycle: ask a question, find sources, check NOP, infer and cross-check, build an argument, test and refine, then back to a new question" font-family="sans-serif">
<rect width="480" height="300" fill="#ffffff"/>
<defs><marker id="ahCycle" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#334155"/></marker></defs>
<text x="240" y="16" font-size="13" font-weight="bold" text-anchor="middle" fill="#1f2937">How historians work: the enquiry cycle</text>
<g stroke="#334155" stroke-width="1.5">
<line x1="290" y1="65" x2="345" y2="86" marker-end="url(#ahCycle)"/>
<line x1="370" y1="122" x2="370" y2="196" marker-end="url(#ahCycle)"/>
<line x1="345" y1="232" x2="292" y2="253" marker-end="url(#ahCycle)"/>
<line x1="190" y1="255" x2="135" y2="234" marker-end="url(#ahCycle)"/>
<line x1="110" y1="198" x2="110" y2="124" marker-end="url(#ahCycle)"/>
<line x1="135" y1="88" x2="188" y2="67" marker-end="url(#ahCycle)"/>
</g>
<rect x="175" y="31" width="130" height="34" rx="8" fill="#c7d2fe" stroke="#334155"/>
<rect x="305" y="88" width="130" height="34" rx="8" fill="#bae6fd" stroke="#334155"/>
<rect x="305" y="198" width="130" height="34" rx="8" fill="#fde68a" stroke="#334155"/>
<rect x="175" y="255" width="130" height="34" rx="8" fill="#bbf7d0" stroke="#334155"/>
<rect x="45" y="198" width="130" height="34" rx="8" fill="#fecaca" stroke="#334155"/>
<rect x="45" y="88" width="130" height="34" rx="8" fill="#c7d2fe" stroke="#334155"/>
<g font-size="11" text-anchor="middle" fill="#1f2937">
<text x="240" y="52">1. Ask a question</text>
<text x="370" y="109">2. Find sources</text>
<text x="370" y="219">3. Check NOP</text>
<text x="240" y="276">4. Infer, cross-check</text>
<text x="110" y="219">5. Build an argument</text>
<text x="110" y="109">6. Test and refine</text>
</g>
<text x="240" y="152" font-size="13" font-weight="bold" text-anchor="middle" fill="#1f2937">The enquiry</text>
<text x="240" y="169" font-size="13" font-weight="bold" text-anchor="middle" fill="#1f2937">cycle</text>
<text x="240" y="192" font-size="11" text-anchor="middle" fill="#334155">new evidence → new questions</text>
</svg>`;

const toolkitGrid = `<svg viewBox="0 0 480 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Grid showing the three Year 8 enquiries, their topics and the key historical skills each uses, with chronology, sources and PEEL writing used every term" font-family="sans-serif">
<rect width="480" height="250" fill="#ffffff"/>
<text x="240" y="18" font-size="13" font-weight="bold" text-anchor="middle" fill="#1f2937">One toolkit, three enquiries</text>
<rect x="10" y="28" width="150" height="34" fill="#fde68a" stroke="#334155"/>
<rect x="165" y="28" width="150" height="34" fill="#fecaca" stroke="#334155"/>
<rect x="320" y="28" width="150" height="34" fill="#bbf7d0" stroke="#334155"/>
<g font-size="12" font-weight="bold" text-anchor="middle" fill="#1f2937">
<text x="85" y="50">Term 1: Kings</text><text x="240" y="50">Term 2: Dictators</text><text x="395" y="50">Term 3: Democracy</text>
</g>
<g fill="#ffffff" stroke="#334155">
<rect x="10" y="62" width="150" height="142"/><rect x="165" y="62" width="150" height="142"/><rect x="320" y="62" width="150" height="142"/>
</g>
<g font-size="11" text-anchor="middle" fill="#1f2937">
<text x="85" y="82" font-style="italic">How did kings rise</text><text x="85" y="96" font-style="italic">to power?</text>
<text x="85" y="116">William I, John,</text><text x="85" y="130">Henry VIII</text>
<text x="85" y="152" font-weight="bold">Key tools:</text><text x="85" y="166">causation,</text><text x="85" y="180">interpretations</text><text x="85" y="194">('Bad King John?')</text>
<text x="240" y="82" font-style="italic">How did dictatorships</text><text x="240" y="96" font-style="italic">come to power?</text>
<text x="240" y="116">Hitler, Mao,</text><text x="240" y="130">Pol Pot</text>
<text x="240" y="152" font-weight="bold">Key tools:</text><text x="240" y="166">the causation model,</text><text x="240" y="180">propaganda as</text><text x="240" y="194">evidence (NOP)</text>
<text x="395" y="82" font-style="italic">How and why did</text><text x="395" y="96" font-style="italic">democracy develop?</text>
<text x="395" y="116">French Revolution,</text><text x="395" y="130">women's suffrage</text>
<text x="395" y="152" font-weight="bold">Key tools:</text><text x="395" y="166">change and continuity,</text><text x="395" y="180">significance</text><text x="395" y="194">(the 5 Rs)</text>
</g>
<rect x="10" y="210" width="460" height="30" rx="6" fill="#c7d2fe" stroke="#334155"/>
<text x="240" y="230" font-size="12" font-weight="bold" text-anchor="middle" fill="#1f2937">Every term: chronology · sources · PEEL writing · key concepts</text>
</svg>`;

export const extras: TopicExtras = {
  hook:
    "In 1983 a famous historian declared that some 60 volumes of Hitler's secret diaries were genuine. Within weeks, scientists proved they were forgeries made on post-war paper. How do you make sure the past cannot fool you?",
  didYouKnow: [
    "There is no year 0: the calendar jumps straight from 1 BC to AD 1. So there are only 99 years between 50 BC and AD 50.",
    "The AD system was worked out by a monk, Dionysius Exiguus, in AD 525, and spread in England through the historian Bede, writing in 731. Most scholars now think Jesus was actually born a few years 'BC' — probably around 6–4 BC.",
    "The Bayeux Tapestry is not really a tapestry: it is an embroidery, nearly 70 metres long, and was probably stitched in England — for Norman patrons.",
    "The word 'suffragette' began as an insult: the *Daily Mail* used it in 1906 to mock the WSPU. The campaigners adopted it with pride.",
    "Only three clauses of Magna Carta are still law in England and Wales today — one of them the famous promise that no free man will be imprisoned without lawful judgement.",
    "Domesday Book got its name because people compared it to the Day of Judgement ('Doomsday'): its verdicts were final and there was no appeal against them.",
  ],
  activities: [
    {
      title: "Your life on a to-scale timeline",
      emoji: "📏",
      materials: ["A long strip of paper (tape A4 sheets together)", "Ruler and pencil", "Coloured pens", "A parent or grandparent to interview"],
      steps: [
        "Choose a scale: 1 cm = 1 year works well for your own life and your parents' lives (about 50 cm).",
        "Mark an equal gap for every year — no squashing! Add your birth, starting school and other personal events above the line.",
        "Ask a parent or grandparent for three events from their lives and add them in a different colour.",
        "Below the line, add world and Singapore events from the same years (for example, the COVID-19 pandemic of 2020).",
        "Now draw a second timeline at 1 cm = 10 years from 1819 to today: add Raffles' trading post (1819), the Japanese Occupation (1942–45), self-government (1959) and independence (1965).",
        "Compare the two: what does the bigger scale hide, and what does it reveal?",
      ],
      maths:
        "Chronology is about measuring gaps, not just putting things in order. A to-scale timeline shows which periods are crowded and which are empty — and choosing a scale is a decision that shapes what people notice, just as historians' choices shape their accounts.",
    },
    {
      title: "Be a historian from the future",
      emoji: "🕵️",
      materials: [
        "Five 'sources' from your own week — e.g. a receipt, a school newsletter, a photo, an advert, a message (printed or copied out)",
        "Paper and pen",
        "A highlighter",
      ],
      steps: [
        "Imagine it is the year 2126 and a historian finds your five items in a box.",
        "For each one, write its NOP: Nature (what is it?), Origin (who made it, when?), Purpose (why was it made, and for whom?).",
        "Write one inference from each: 'This suggests that in 2026 people…' — and highlight the detail that supports it.",
        "Decide which item is most *reliable* and which is most *useful* for the question 'What was family life like in Singapore in 2026?' Are they the same item?",
        "List what is missing: which important parts of your life leave no trace in these sources at all?",
      ],
      maths:
        "This is exactly how historians work with fragments of the past: provenance, inference, reliability versus usefulness, and gaps in the record. The silences — everything nobody wrote down — are why oral history and archaeology matter so much.",
    },
  ],
  bonusDiagrams: [
    {
      title: "The enquiry cycle",
      svg: enquiryCycle,
      caption: "History is never finished: testing an argument against new evidence leads to new questions.",
    },
    {
      title: "One toolkit, three enquiries",
      svg: toolkitGrid,
      caption: "Each term leans on particular tools — but chronology, sources, PEEL and key concepts are used all year.",
    },
  ],
  history: {
    title: "The Hitler Diaries hoax",
    story:
      "In April 1983 the German magazine *Stern* announced a sensation: about 60 volumes of Adolf Hitler's private diaries, supposedly rescued from a plane crash in 1945. *Stern* had paid millions of marks for them, and the British historian Hugh Trevor-Roper, after only a brief look, declared them genuine. Then the scientists stepped in. Tests organised by West Germany's Federal Archives found that the paper and bindings contained materials that were not made until after the war. The diaries had been forged by Konrad Kujau, a dealer in fake Nazi memorabilia. Kujau and the *Stern* journalist who bought the diaries were both jailed. The lesson? Even experts can be fooled when they skip the provenance checks — especially when they want a story to be true.",
  },
};
