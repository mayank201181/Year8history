import type { TopicGuide } from "../../types.ts";

// ---------------------------------------------------------------------------
// The Historian's Toolkit — the skills backbone for the whole Year 8 course.
// ---------------------------------------------------------------------------

const chronologyDiagram = `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="To-scale timeline from AD 1000 to 2000 marking 1066, 1215, 1534 and 1789, with a zoomed-in to-scale timeline of the 20th century marking 1918, 1933, 1949, 1959 and 1975" font-family="sans-serif">
<rect width="480" height="300" fill="#ffffff"/>
<text x="240" y="16" font-size="13" font-weight="bold" text-anchor="middle" fill="#1f2937">The year on one ruler: AD 1000–2000</text>
<line x1="58" y1="34" x2="58" y2="62" stroke="#334155"/>
<text x="58" y="30" font-size="11" text-anchor="middle" fill="#1f2937">1066 Hastings</text>
<line x1="120" y1="52" x2="120" y2="62" stroke="#334155"/>
<text x="120" y="48" font-size="11" text-anchor="middle" fill="#1f2937">1215 Magna Carta</text>
<line x1="254" y1="52" x2="254" y2="62" stroke="#334155"/>
<text x="254" y="48" font-size="11" text-anchor="middle" fill="#1f2937">1534 Break with Rome</text>
<line x1="361" y1="34" x2="361" y2="62" stroke="#334155"/>
<text x="361" y="30" font-size="11" text-anchor="middle" fill="#1f2937">1789 French Revolution</text>
<rect x="30" y="62" width="420" height="12" fill="#c7d2fe" stroke="#334155"/>
<rect x="408" y="62" width="42" height="12" fill="#fecaca" stroke="#334155"/>
<circle cx="58" cy="68" r="3" fill="#1f2937"/>
<circle cx="120" cy="68" r="3" fill="#1f2937"/>
<circle cx="254" cy="68" r="3" fill="#1f2937"/>
<circle cx="361" cy="68" r="3" fill="#1f2937"/>
<g stroke="#334155">
<line x1="30" y1="74" x2="30" y2="79"/><line x1="72" y1="74" x2="72" y2="79"/><line x1="114" y1="74" x2="114" y2="79"/><line x1="156" y1="74" x2="156" y2="79"/><line x1="198" y1="74" x2="198" y2="79"/><line x1="240" y1="74" x2="240" y2="79"/><line x1="282" y1="74" x2="282" y2="79"/><line x1="324" y1="74" x2="324" y2="79"/><line x1="366" y1="74" x2="366" y2="79"/><line x1="408" y1="74" x2="408" y2="79"/><line x1="450" y1="74" x2="450" y2="79"/>
</g>
<g font-size="11" text-anchor="middle" fill="#334155">
<text x="30" y="91">1000</text><text x="72" y="91">1100</text><text x="114" y="91">1200</text><text x="156" y="91">1300</text><text x="198" y="91">1400</text><text x="240" y="91">1500</text><text x="282" y="91">1600</text><text x="324" y="91">1700</text><text x="366" y="91">1800</text><text x="408" y="91">1900</text><text x="450" y="91">2000</text>
</g>
<text x="30" y="110" font-size="11" fill="#1f2937">1066 is in the 11th century (the 1000s)</text>
<text x="429" y="110" font-size="11" text-anchor="middle" fill="#1f2937">20th century</text>
<rect x="20" y="124" width="440" height="148" fill="#ffffff" stroke="#94a3b8" stroke-dasharray="4 3"/>
<text x="30" y="142" font-size="12" font-weight="bold" fill="#1f2937">Zoom: the 20th century (scale 10 times bigger)</text>
<text x="106" y="168" font-size="11" font-weight="bold" text-anchor="middle" fill="#1f2937">1918</text>
<text x="106" y="181" font-size="11" text-anchor="middle" fill="#1f2937">Votes for women 30+</text>
<line x1="106" y1="185" x2="106" y2="200" stroke="#334155"/>
<text x="236" y="168" font-size="11" font-weight="bold" text-anchor="middle" fill="#1f2937">1949</text>
<text x="236" y="181" font-size="11" text-anchor="middle" fill="#1f2937">PRC founded (Mao)</text>
<line x1="236" y1="185" x2="236" y2="200" stroke="#334155"/>
<text x="345" y="168" font-size="11" font-weight="bold" text-anchor="middle" fill="#1f2937">1975</text>
<text x="345" y="181" font-size="11" text-anchor="middle" fill="#1f2937">Khmer Rouge rule</text>
<line x1="345" y1="185" x2="345" y2="200" stroke="#334155"/>
<rect x="30" y="200" width="420" height="12" fill="#fecaca" stroke="#334155"/>
<circle cx="106" cy="206" r="3" fill="#1f2937"/>
<circle cx="169" cy="206" r="3" fill="#1f2937"/>
<circle cx="236" cy="206" r="3" fill="#1f2937"/>
<circle cx="278" cy="206" r="3" fill="#1f2937"/>
<circle cx="345" cy="206" r="3" fill="#1f2937"/>
<text x="30" y="226" font-size="11" fill="#334155">1900</text>
<text x="240" y="226" font-size="11" text-anchor="middle" fill="#334155">1950</text>
<text x="450" y="226" font-size="11" text-anchor="end" fill="#334155">2000</text>
<line x1="169" y1="212" x2="169" y2="235" stroke="#334155"/>
<text x="169" y="246" font-size="11" font-weight="bold" text-anchor="middle" fill="#1f2937">1933</text>
<text x="169" y="259" font-size="11" text-anchor="middle" fill="#1f2937">Hitler Chancellor</text>
<line x1="278" y1="212" x2="278" y2="235" stroke="#334155"/>
<text x="278" y="246" font-size="11" font-weight="bold" text-anchor="middle" fill="#1f2937">1959</text>
<text x="278" y="259" font-size="11" text-anchor="middle" fill="#1f2937">Singapore self-rule</text>
<text x="240" y="292" font-size="11" text-anchor="middle" fill="#334155">Both bars are drawn to scale (the zoom uses a bigger scale).</text>
</svg>`;

const sourcesDiagram = `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A two-by-two grid showing that primary and secondary sources can each be trustworthy or need caution, depending on the question asked" font-family="sans-serif">
<rect width="480" height="300" fill="#ffffff"/>
<text x="240" y="18" font-size="13" font-weight="bold" text-anchor="middle" fill="#1f2937">Primary or secondary? Trustworthy or not?</text>
<rect x="110" y="28" width="180" height="30" fill="#c7d2fe" stroke="#334155"/>
<text x="200" y="47" font-size="12" font-weight="bold" text-anchor="middle" fill="#1f2937">Primary (from the time)</text>
<rect x="295" y="28" width="180" height="30" fill="#c7d2fe" stroke="#334155"/>
<text x="385" y="47" font-size="12" font-weight="bold" text-anchor="middle" fill="#1f2937">Secondary (made later)</text>
<rect x="5" y="62" width="100" height="100" fill="#ffffff" stroke="#334155"/>
<g font-size="11" text-anchor="middle" fill="#1f2937">
<text x="55" y="100">Trustworthy</text><text x="55" y="115">for this</text><text x="55" y="130">question</text>
</g>
<rect x="5" y="167" width="100" height="100" fill="#ffffff" stroke="#334155"/>
<g font-size="11" text-anchor="middle" fill="#1f2937">
<text x="55" y="205">Needs great</text><text x="55" y="220">caution for</text><text x="55" y="235">this question</text>
</g>
<rect x="110" y="62" width="180" height="100" fill="#bbf7d0" stroke="#334155"/>
<g font-size="11" text-anchor="middle" fill="#1f2937">
<text x="200" y="92" font-weight="bold">Domesday Book (1086):</text><text x="200" y="108">who held which land</text><text x="200" y="124">and what it was worth</text><text x="200" y="140">(a careful royal survey)</text>
</g>
<rect x="295" y="62" width="180" height="100" fill="#bbf7d0" stroke="#334155"/>
<g font-size="11" text-anchor="middle" fill="#1f2937">
<text x="385" y="92" font-weight="bold">A modern historian's book</text><text x="385" y="108">using many sources,</text><text x="385" y="124">with footnotes you</text><text x="385" y="140">can check</text>
</g>
<rect x="110" y="167" width="180" height="100" fill="#fecaca" stroke="#334155"/>
<g font-size="11" text-anchor="middle" fill="#1f2937">
<text x="200" y="197" font-weight="bold">1932 Nazi election poster</text><text x="200" y="213">as proof that most</text><text x="200" y="229">Germans backed Hitler</text><text x="200" y="245">(made to persuade)</text>
</g>
<rect x="295" y="167" width="180" height="100" fill="#fecaca" stroke="#334155"/>
<g font-size="11" text-anchor="middle" fill="#1f2937">
<text x="385" y="197" font-weight="bold">A Robin Hood film</text><text x="385" y="213">as evidence of what</text><text x="385" y="229">King John was</text><text x="385" y="245">really like</text>
</g>
<text x="240" y="290" font-size="11" text-anchor="middle" fill="#334155">Usefulness depends on your question, not on primary vs secondary.</text>
</svg>`;

const nopDiagram = `<svg viewBox="0 0 480 285" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flow diagram: Nature, Origin and Purpose questions feed into a judgement about reliability and usefulness, followed by cross-referencing with other evidence" font-family="sans-serif">
<rect width="480" height="285" fill="#ffffff"/>
<defs><marker id="ahNop" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#334155"/></marker></defs>
<text x="240" y="20" font-size="13" font-weight="bold" text-anchor="middle" fill="#1f2937">Inspecting a source with NOP</text>
<rect x="15" y="36" width="140" height="96" rx="6" fill="#c7d2fe" stroke="#334155"/>
<rect x="170" y="36" width="140" height="96" rx="6" fill="#c7d2fe" stroke="#334155"/>
<rect x="325" y="36" width="140" height="96" rx="6" fill="#c7d2fe" stroke="#334155"/>
<g font-size="13" font-weight="bold" text-anchor="middle" fill="#1f2937">
<text x="85" y="56">N — Nature</text><text x="240" y="56">O — Origin</text><text x="395" y="56">P — Purpose</text>
</g>
<g font-size="11" text-anchor="middle" fill="#1f2937">
<text x="85" y="78">What type of source?</text><text x="85" y="94">Private or public?</text><text x="85" y="110">Diary, poster, law?</text>
<text x="240" y="78">Who made it?</text><text x="240" y="94">When and where?</text><text x="240" y="110">Were they there?</text>
<text x="395" y="78">Why was it made?</text><text x="395" y="94">Who was it for?</text><text x="395" y="110">Inform or persuade?</text>
</g>
<g stroke="#334155" stroke-width="1.5">
<line x1="85" y1="132" x2="190" y2="167" marker-end="url(#ahNop)"/>
<line x1="240" y1="132" x2="240" y2="167" marker-end="url(#ahNop)"/>
<line x1="395" y1="132" x2="290" y2="167" marker-end="url(#ahNop)"/>
<line x1="240" y1="222" x2="240" y2="239" marker-end="url(#ahNop)"/>
</g>
<rect x="100" y="170" width="280" height="52" rx="6" fill="#fde68a" stroke="#334155"/>
<text x="240" y="191" font-size="12" font-weight="bold" text-anchor="middle" fill="#1f2937">Reliable? Useful? For which question?</text>
<text x="240" y="210" font-size="11" text-anchor="middle" fill="#1f2937">A biased source can still be very useful.</text>
<rect x="100" y="242" width="280" height="34" rx="6" fill="#bbf7d0" stroke="#334155"/>
<text x="240" y="263" font-size="11" text-anchor="middle" fill="#1f2937">Cross-reference: does other evidence agree?</text>
</svg>`;

const interpretationsDiagram = `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline, not to scale, of four interpretations of King John: a tyrant to 13th-century monks, a hero to a 1530s Protestant playwright, a villain in 1800s novels and Robin Hood tales, and a mixed picture for modern historians" font-family="sans-serif">
<rect width="480" height="300" fill="#ffffff"/>
<text x="240" y="20" font-size="13" font-weight="bold" text-anchor="middle" fill="#1f2937">King John's reputation through time</text>
<line x1="20" y1="62" x2="452" y2="62" stroke="#334155" stroke-width="2"/>
<polygon points="462,62 452,57 452,67" fill="#334155"/>
<g fill="#1f2937"><circle cx="70" cy="62" r="5"/><circle cx="180" cy="62" r="5"/><circle cx="290" cy="62" r="5"/><circle cx="400" cy="62" r="5"/></g>
<g font-size="12" font-weight="bold" text-anchor="middle" fill="#1f2937">
<text x="70" y="50">1220s–30s</text><text x="180" y="50">c. 1538</text><text x="290" y="50">1800s</text><text x="400" y="50">1961 onwards</text>
</g>
<rect x="18" y="76" width="104" height="192" rx="6" fill="#fecaca" stroke="#334155"/>
<rect x="128" y="76" width="104" height="192" rx="6" fill="#bbf7d0" stroke="#334155"/>
<rect x="238" y="76" width="104" height="192" rx="6" fill="#fecaca" stroke="#334155"/>
<rect x="348" y="76" width="104" height="192" rx="6" fill="#fde68a" stroke="#334155"/>
<g font-size="11" text-anchor="middle" fill="#1f2937">
<text x="70" y="94">Roger of Wendover</text><text x="70" y="108">(monk, St Albans)</text>
<text x="70" y="146" font-size="12" font-weight="bold">TYRANT</text>
<text x="70" y="162">cruel, greedy,</text><text x="70" y="176">an enemy of</text><text x="70" y="190">the Church</text>
<text x="70" y="214">Why? John had</text><text x="70" y="228">quarrelled with</text><text x="70" y="242">the Pope and</text><text x="70" y="256">taxed the Church</text>
<text x="180" y="94">John Bale's play</text><text x="180" y="108" font-style="italic">Kynge Johan</text>
<text x="180" y="146" font-size="12" font-weight="bold">HERO</text>
<text x="180" y="162">stood up to</text><text x="180" y="176">the Pope</text>
<text x="180" y="214">Why? Written</text><text x="180" y="228">after Henry VIII</text><text x="180" y="242">broke with Rome</text>
<text x="290" y="94" font-style="italic">Ivanhoe (1819),</text><text x="290" y="108">Robin Hood</text><text x="290" y="122">tales</text>
<text x="290" y="146" font-size="12" font-weight="bold">VILLAIN</text>
<text x="290" y="162">'Bad King John',</text><text x="290" y="176">the wicked</text><text x="290" y="190">prince</text>
<text x="290" y="214">Why? Stories</text><text x="290" y="228">need villains;</text><text x="290" y="242">they trusted</text><text x="290" y="256">the monks</text>
<text x="400" y="94">W. L. Warren</text><text x="400" y="108">and later</text><text x="400" y="122">historians</text>
<text x="400" y="146" font-size="12" font-weight="bold">MIXED</text>
<text x="400" y="162">hard-working,</text><text x="400" y="176">unlucky — but</text><text x="400" y="190">cruel, distrusted</text>
<text x="400" y="214">Why? They also</text><text x="400" y="228">studied royal</text><text x="400" y="242">government</text><text x="400" y="256">records</text>
</g>
<text x="240" y="290" font-size="11" text-anchor="middle" fill="#334155">Not to scale. Same king — four interpretations.</text>
</svg>`;

const causationDiagram = `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Causation triangle: crises, weak government and a determined leader or party are linked to each other and together lead to dictatorship" font-family="sans-serif">
<rect width="480" height="300" fill="#ffffff"/>
<defs><marker id="ahCause" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#334155"/></marker></defs>
<text x="240" y="20" font-size="13" font-weight="bold" text-anchor="middle" fill="#1f2937">Why do dictatorships rise? Link the factors</text>
<g stroke="#334155" stroke-width="2">
<line x1="212" y1="108" x2="138" y2="182"/>
<line x1="268" y1="108" x2="342" y2="182"/>
<line x1="155" y1="220" x2="325" y2="220"/>
</g>
<g stroke="#334155" stroke-width="1.5">
<line x1="240" y1="118" x2="240" y2="148" marker-end="url(#ahCause)"/>
<line x1="150" y1="200" x2="188" y2="180" marker-end="url(#ahCause)"/>
<line x1="330" y1="200" x2="292" y2="180" marker-end="url(#ahCause)"/>
</g>
<circle cx="240" cy="74" r="44" fill="#fecaca" stroke="#334155"/>
<circle cx="105" cy="220" r="50" fill="#bae6fd" stroke="#334155"/>
<circle cx="375" cy="220" r="50" fill="#fde68a" stroke="#334155"/>
<rect x="190" y="150" width="100" height="34" rx="6" fill="#c7d2fe" stroke="#334155"/>
<g text-anchor="middle" fill="#1f2937">
<text x="240" y="72" font-size="13" font-weight="bold">Crises</text>
<text x="240" y="88" font-size="11">war, depression</text>
<text x="105" y="214" font-size="13" font-weight="bold">Weak</text>
<text x="105" y="229" font-size="13" font-weight="bold">government</text>
<text x="105" y="245" font-size="11">can't solve it</text>
<text x="375" y="214" font-size="13" font-weight="bold">Determined</text>
<text x="375" y="229" font-size="13" font-weight="bold">leader / party</text>
<text x="375" y="245" font-size="11">exploits both</text>
<text x="240" y="172" font-size="13" font-weight="bold">Dictatorship</text>
</g>
<g font-size="11" fill="#334155">
<text x="150" y="128" text-anchor="end">crises expose</text>
<text x="150" y="142" text-anchor="end">weakness</text>
<text x="330" y="128">leaders exploit</text>
<text x="330" y="142">the crisis</text>
<text x="240" y="238" text-anchor="middle">weak rulers let leaders in</text>
</g>
<text x="240" y="288" font-size="11" text-anchor="middle" fill="#334155">Hitler fits closely; Mao and Pol Pot fit in different ways.</text>
</svg>`;

const changeDiagram = `<svg viewBox="0 0 480 314" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four sketch graphs of change over time: a sudden step for a turning point, a steady slope for gradual change, a flat line for continuity and a fall for regression" font-family="sans-serif">
<rect width="480" height="314" fill="#ffffff"/>
<text x="240" y="18" font-size="13" font-weight="bold" text-anchor="middle" fill="#1f2937">Four shapes of change (sketches, not data)</text>
<rect x="10" y="28" width="225" height="128" rx="6" fill="#c7d2fe" stroke="#334155"/>
<rect x="245" y="28" width="225" height="128" rx="6" fill="#bbf7d0" stroke="#334155"/>
<rect x="10" y="162" width="225" height="128" rx="6" fill="#fde68a" stroke="#334155"/>
<rect x="245" y="162" width="225" height="128" rx="6" fill="#fecaca" stroke="#334155"/>
<g font-size="12" font-weight="bold" fill="#1f2937">
<text x="22" y="46">Turning point</text><text x="257" y="46">Gradual change</text><text x="22" y="180">Continuity</text><text x="257" y="180">Regression</text>
</g>
<g stroke="#334155" stroke-width="1.2">
<line x1="30" y1="56" x2="30" y2="126"/><line x1="30" y1="126" x2="220" y2="126"/>
<line x1="265" y1="56" x2="265" y2="126"/><line x1="265" y1="126" x2="455" y2="126"/>
<line x1="30" y1="190" x2="30" y2="260"/><line x1="30" y1="260" x2="220" y2="260"/>
<line x1="265" y1="190" x2="265" y2="260"/><line x1="265" y1="260" x2="455" y2="260"/>
</g>
<g stroke="#1f2937" stroke-width="3" fill="none">
<path d="M35,113 H120 V68 H215"/>
<path d="M270,116 L450,66"/>
<path d="M35,224 Q80,218 125,224 T215,224"/>
<path d="M270,202 H345 L385,250 H450"/>
</g>
<g font-size="11" fill="#1f2937">
<text x="22" y="146">e.g. Act of Supremacy, 1534</text>
<text x="257" y="146">e.g. Parliament's power after 1215</text>
<text x="22" y="280">e.g. village farming after 1066</text>
<text x="257" y="280">e.g. German democracy, 1930–34</text>
</g>
<text x="240" y="306" font-size="11" text-anchor="middle" fill="#334155">Across = time. Ask: how fast? how far? for whom?</text>
</svg>`;

const peelDiagram = `<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="PEEL paragraph built in four layers: Point, Evidence, Explain and Link, each with an example sentence about William's luck in 1066" font-family="sans-serif">
<rect width="480" height="260" fill="#ffffff"/>
<text x="240" y="18" font-size="13" font-weight="bold" text-anchor="middle" fill="#1f2937">Building a PEEL paragraph</text>
<rect x="62" y="28" width="410" height="50" rx="6" fill="#c7d2fe" stroke="#334155"/>
<rect x="62" y="84" width="410" height="50" rx="6" fill="#fde68a" stroke="#334155"/>
<rect x="62" y="140" width="410" height="50" rx="6" fill="#bbf7d0" stroke="#334155"/>
<rect x="62" y="196" width="410" height="50" rx="6" fill="#bae6fd" stroke="#334155"/>
<circle cx="34" cy="53" r="20" fill="#c7d2fe" stroke="#334155"/>
<circle cx="34" cy="109" r="20" fill="#fde68a" stroke="#334155"/>
<circle cx="34" cy="165" r="20" fill="#bbf7d0" stroke="#334155"/>
<circle cx="34" cy="221" r="20" fill="#bae6fd" stroke="#334155"/>
<g font-size="14" font-weight="bold" text-anchor="middle" fill="#1f2937">
<text x="34" y="58">P</text><text x="34" y="114">E</text><text x="34" y="170">E</text><text x="34" y="226">L</text>
</g>
<g font-size="12" font-weight="bold" fill="#1f2937">
<text x="72" y="48">Point — answer the question directly</text>
<text x="72" y="104">Evidence — precise dates, names, numbers</text>
<text x="72" y="160">Explain — show HOW it answers the question</text>
<text x="72" y="216">Link — back to the question</text>
</g>
<g font-size="11" font-style="italic" fill="#1f2937">
<text x="72" y="66">One reason William won was luck.</text>
<text x="72" y="122">Hardrada invaded first: Stamford Bridge, 25 September 1066.</text>
<text x="72" y="178">So Harold's army reached Hastings tired and weakened.</text>
<text x="72" y="234">This shows luck gave William a real advantage.</text>
</g>
</svg>`;

const powerDiagram = `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison grid of monarchy, dictatorship and democracy: where power comes from, whether it is limited by law, how rulers are replaced, and Year 8 examples" font-family="sans-serif">
<rect width="480" height="300" fill="#ffffff"/>
<text x="240" y="18" font-size="13" font-weight="bold" text-anchor="middle" fill="#1f2937">Three ways to rule</text>
<rect x="110" y="26" width="120" height="28" fill="#fde68a" stroke="#334155"/>
<rect x="235" y="26" width="120" height="28" fill="#fecaca" stroke="#334155"/>
<rect x="360" y="26" width="115" height="28" fill="#bbf7d0" stroke="#334155"/>
<g font-size="12" font-weight="bold" text-anchor="middle" fill="#1f2937">
<text x="170" y="45">Monarchy</text><text x="295" y="45">Dictatorship</text><text x="417" y="45">Democracy</text>
</g>
<g fill="#ffffff" stroke="#334155">
<rect x="5" y="58" width="100" height="54"/><rect x="110" y="58" width="120" height="54"/><rect x="235" y="58" width="120" height="54"/><rect x="360" y="58" width="115" height="54"/>
<rect x="5" y="116" width="100" height="54"/><rect x="110" y="116" width="120" height="54"/><rect x="235" y="116" width="120" height="54"/><rect x="360" y="116" width="115" height="54"/>
<rect x="5" y="174" width="100" height="54"/><rect x="110" y="174" width="120" height="54"/><rect x="235" y="174" width="120" height="54"/><rect x="360" y="174" width="115" height="54"/>
<rect x="5" y="232" width="100" height="62"/><rect x="110" y="232" width="120" height="62"/><rect x="235" y="232" width="120" height="62"/><rect x="360" y="232" width="115" height="62"/>
</g>
<g font-size="11" font-weight="bold" text-anchor="middle" fill="#1f2937">
<text x="55" y="80">Power comes</text><text x="55" y="96">from…</text>
<text x="55" y="138">Limited by</text><text x="55" y="154">the law?</text>
<text x="55" y="196">How is the ruler</text><text x="55" y="212">replaced?</text>
<text x="55" y="258">Year 8</text><text x="55" y="274">examples</text>
</g>
<g font-size="11" text-anchor="middle" fill="#1f2937">
<text x="170" y="80">Inheritance and</text><text x="170" y="96">divine right</text>
<text x="295" y="80">Force, a party, or</text><text x="295" y="96">a legal takeover</text>
<text x="417" y="80">Votes of the</text><text x="417" y="96">people (elections)</text>
<text x="170" y="138">Absolute: barely</text><text x="170" y="154">Constitutional: yes</text>
<text x="295" y="138">No — the leader</text><text x="295" y="154">is above the law</text>
<text x="417" y="138">Yes — rule of law,</text><text x="417" y="154">rights protected</text>
<text x="170" y="196">Death, rebellion</text><text x="170" y="212">or conquest</text>
<text x="295" y="196">Death, coup or</text><text x="295" y="212">revolution</text>
<text x="417" y="196">Peacefully, at</text><text x="417" y="212">elections</text>
<text x="170" y="252">William I, John,</text><text x="170" y="267">Henry VIII,</text><text x="170" y="282">Louis XVI</text>
<text x="295" y="252">Hitler, Mao,</text><text x="295" y="267">Pol Pot</text>
<text x="417" y="252">Athens (direct);</text><text x="417" y="267">UK, Singapore</text><text x="417" y="282">(representative)</text>
</g>
</svg>`;

export const guide: TopicGuide = {
  id: "historians-toolkit",
  title: "The Historian's Toolkit",
  strand: "Historian's Toolkit",
  icon: "🔍",
  summary: "Dates, sources, causes, arguments and the big ideas of power — the tools you will use all year.",
  intro:
    "Historians are detectives with one big problem: the past has gone. All that is left are fragments — a chronicle written by a monk, an embroidered tapestry, an election poster, a tax record, an old person's memory. This topic gives you the tools to turn those fragments into reliable knowledge and convincing arguments.\n\n**Enquiry question: how do historians work out what happened in the past — and why it happened?** You will learn to order and measure time, to question sources (*who made this, and why?*), to understand why historians disagree, to explain causes and judge significance, and to write answers that weigh evidence and reach a judgement.\n\nThese are the tools for the whole year. You will use them to judge how William I, King John and Henry VIII held power; why Hitler, Mao and Pol Pot were able to seize it; and how ordinary people — from the French revolutionaries of 1789 to Britain's suffragettes and Singapore's first voters in 1948 — won a say in how they were governed.",
  guide: [
    // ------------------------------------------------------------------ 1
    {
      id: "chronology",
      heading: "Chronology: dates, centuries and timelines",
      discovery: {
        problem:
          "Three quick puzzles — try them before reading on.\n\n1. The Battle of Hastings was in **1066**. Aisha says that puts it in the 10th century. Is she right?\n2. A dealer offers you a Roman coin stamped **'50 BC'**. Why can you be certain, without even testing the metal, that it is a fake?\n3. How many years passed between the start of 1 BC and the start of AD 1?",
        idea:
          "1. No — 1066 is in the **11th century**. The 1st century was years 1–100, so the century number is always one more than the 'hundreds': 10|66 → 11th.\n\n2. Nobody living in 50 BC knew they were 'before Christ' — the BC/AD system was only worked out by a monk in AD 525. A coin stamped '50 BC' is an **anachronism**: something placed in the wrong time.\n\n3. Just **one** year — there is **no year 0**. Historians avoid these traps by thinking carefully about how time is counted.",
      },
      body:
        "**Chronology** means putting the past in order and measuring the gaps between events. Without it you cannot explain cause and consequence — a cause must come *before* its effect.\n\n**Counting the years**\n\n- **AD** (*Anno Domini*, 'in the year of the Lord') counts forwards from the traditional date of Jesus' birth. **BC** ('Before Christ') counts backwards.\n- Many historians now write **CE** (Common Era) and **BCE** (Before Common Era). The numbers are identical; only the labels change.\n- There is **no year 0**: 1 BC is followed directly by AD 1.\n- BC numbers get *smaller* as time moves forward: 300 BC is earlier than 50 BC.\n\n**Centuries and decades**\n\nThe 1st century was years 1–100, so the century number is one more than the 'hundreds'. Strictly, a century runs from a year ending 01 to one ending 00 (1901–2000), but most people treat 'the 1900s' as the 20th century. A **decade** is ten years: 'the 1920s' means 1920–1929.\n\n| Date | Century | Event |\n|---|---|---|\n| 1066 | 11th | Battle of Hastings |\n| 1215 | 13th | Magna Carta |\n| 1534 | 16th | Act of Supremacy |\n| 1789 | 18th | French Revolution begins |\n| 1819 | 19th | Raffles sets up a British trading post in Singapore |\n| 1933 | 20th | Hitler becomes Chancellor |\n\n**Periods** are labels historians invent to group years: **medieval** (roughly 500–1500; in English history often 1066–1485), **early modern** (about 1500–1750) and **modern** (about 1750 onwards). The boundaries are debated — choosing one is itself an argument about when things changed.\n\n**Timelines** must be drawn **to scale** (equal gaps for equal numbers of years) unless clearly labelled 'not to scale'. A scaled timeline shows what a list hides: the year's three dictators all took power within about **45 years** of each other (1933–1975), while William's conquest and John's Magna Carta are nearly **150 years** apart.\n\n**Anachronism** means putting something in the wrong time — a pocket watch at Hastings, or judging a medieval king purely by 21st-century values without explaining the difference. Spotting anachronisms is how historians catch fakes and lazy thinking.",
      diagram: chronologyDiagram,
      diagramCaption:
        "The top bar covers 1,000 years to scale; the zoom stretches one century ten times wider. Notice how much of this year's history is packed into the 20th century.",
      workedExamples: [
        {
          title: "Ordering and dating events",
          problem:
            "Put these events in chronological order and give the century of each: the Storming of the Bastille, the Battle of Hastings, the Act of Supremacy, Magna Carta. Then explain one thing the order helps you understand. (4 marks)",
          steps: [
            "**Plan:** write the dates down first, then sort them. Bastille 1789; Hastings 1066; Act of Supremacy 1534; Magna Carta 1215.",
            "**Order:** Battle of Hastings (1066) → Magna Carta (1215) → Act of Supremacy (1534) → Storming of the Bastille (1789).",
            "**Centuries:** add one to the 'hundreds' each time — 11th, 13th, 16th and 18th centuries.",
            "**Explain:** 'The order shows that arguments about limiting a ruler's power are very old: Magna Carta tried to put King John under the law in 1215, more than 570 years before the French challenged Louis XVI's power in 1789.'",
          ],
          answer:
            "1066 (11th) → 1215 (13th) → 1534 (16th) → 1789 (18th); the order shows ideas about limiting kings developing over centuries.",
          yourTurn: {
            question: "In which century did Mao Zedong proclaim the People's Republic of China (1949)? Type it like this: 11th.",
            answer: {
              type: "text",
              accept: ["20th", "20th century", "the 20th century", "twentieth", "twentieth century", "the twentieth century", "20th c", "C20"],
              display: "20th century",
            },
            solution: "1949 → the 'hundreds' are 19 → add one → the 20th century.",
          },
        },
      ],
      keyPoints: [
        "Century = the 'hundreds' + 1: 1066 is in the **11th** century, 1949 in the **20th**.",
        "There is **no year 0**; BC numbers count down towards AD 1.",
        "AD/BC and CE/BCE use the same numbers — only the labels differ.",
        "Periods (medieval, early modern, modern) are historians' labels with fuzzy edges.",
        "Timelines must be drawn to scale, or say clearly that they are not.",
        "An **anachronism** is something out of its proper time — a key clue to fakes and to muddled thinking.",
      ],
      whyItWorks:
        "Chronology is the skeleton every other skill hangs on. Causes must come before consequences, so getting the order wrong breaks an explanation: if you think the Wall Street Crash (1929) came after Hitler became Chancellor (1933), you cannot see how the Depression helped him. Measuring gaps matters too — knowing that the Weimar Republic lasted only 14 years (1919–1933) helps explain why democracy had shallow roots in Germany. And because periods are invented labels, asking 'where does one period end?' is really asking 'when did things change?' — the start of a real historical argument.",
      strategies: ["Put it in chronological order", "Avoid hindsight"],
      thinkDeeper:
        "Historians argue about when the 'medieval' period ended in England: 1485 (Bosworth), 1534 (the Break with Rome) or later? Choose a date and justify it — what changed then, and what stayed the same?",
    },
    // ------------------------------------------------------------------ 2
    {
      id: "sources-and-evidence",
      heading: "Sources, evidence and inference",
      discovery: {
        problem:
          "**Source A** — clause 39 of Magna Carta, 1215 (a widely used modern English translation).\n\n> No free man shall be seized or imprisoned, or stripped of his rights or possessions, or outlawed or exiled, or deprived of his standing in any other way, nor will we proceed with force against him, or send others to do so, except by the lawful judgement of his equals or by the law of the land.\n\nThe clause says nothing directly about King John's behaviour. But what can you **work out** from it about (a) what John had been doing before 1215, and (b) who counted in medieval society?",
        idea:
          "You have just made **inferences**.\n\n(a) Why would the barons demand this promise unless John had been seizing, imprisoning and punishing people without trial? The clause *suggests* he had been ruling arbitrarily.\n\n(b) It protects only a **'free man'** — so unfree peasants (villeins), a large part of the population, were left out.\n\nThe source never *says* either thing; you reasoned it out from what is there. That is the difference between **describing** a source and **using it as evidence**.",
      },
      body:
        "A **source** is anything that survives from the past or tells us about it. It only becomes **evidence** when a historian uses it to answer a question.\n\n**Primary and secondary**\n\n- **Primary sources** were made at the time being studied: Domesday Book (1086), a suffragette's letter, a 1932 election poster, the *Anglo-Saxon Chronicle*.\n- **Secondary sources** were made later by people looking back: a textbook, a documentary, a historian's book.\n\n**'Primary' does not mean 'reliable'.** A Nazi poster is primary but was designed to persuade; a careful modern historian's book is secondary but may be far more accurate. The question you ask decides how useful a source is.\n\n**Types of source**\n\n| Type | Examples | Watch out for |\n|---|---|---|\n| Written | chronicles, letters, laws, diaries, newspapers | who could write? In 1066 mostly monks |\n| Visual | Bayeux Tapestry, Holbein's portraits of Henry VIII, posters, photographs | made to impress or persuade |\n| Archaeological | castles, coins, burial sites | tell us *what*, rarely *why* |\n| Oral | interviews, memories, songs | memories fade and change |\n\nThe National Archives of Singapore runs an **Oral History Centre** that has recorded thousands of interviews — including people who lived through the Japanese Occupation (1942–45) — because many ordinary people never wrote their experiences down.\n\n**Describing vs inferring**\n\n- **Describing** repeats what the source shows: *'The poster shows a crowd of people.'*\n- **Inferring** works out something the source *suggests* but does not say: *'This suggests the Nazis wanted to appeal to desperate, ordinary Germans during the Depression.'*\n\nUse inference language — *this suggests…*, *I can infer that…*, *this implies…* — and then **support** the inference with a detail from the source: *'…because the people in the crowd look thin and worn out.'*\n\nA strong inference is **plausible, specific and supported**. A weak one is either a description dressed up as an inference, or a guess with nothing from the source behind it.",
      diagram: sourcesDiagram,
      diagramCaption:
        "Primary and secondary sources can each be trustworthy or misleading — it depends on the question you are asking.",
      workedExamples: [
        {
          title: "Making supported inferences",
          problem:
            "**Source B** — from the *Anglo-Saxon Chronicle*, written by English monks, describing 1066 (adapted).\n\n> King Harold was killed, and earls Leofwine and Gyrth his brothers… and the French had possession of the place of slaughter.\n\nWhat can you infer from Source B about the Battle of Hastings? (4 marks)",
          steps: [
            "**Plan:** pick two details and ask of each, 'What does this suggest that it does not directly say?'",
            "**Inference 1:** 'Source B suggests the English lost their leadership as well as the battle. It says Harold *and* \"earls Leofwine and Gyrth his brothers\" were killed, so the Godwin family — the most powerful family in England — was largely wiped out in one day, leaving few leaders to organise resistance.'",
            "**Inference 2:** 'It also suggests the defeat was decisive: \"the French had possession of the place of slaughter\" implies the Normans held the battlefield at the end, which is how medieval writers judged who had won.'",
            "**Check:** both points go beyond the words of the source, and each is supported by a short quotation from it.",
          ],
          answer:
            "The source suggests a decisive Norman victory that destroyed England's leading family — supported by the deaths of Harold and his brothers and the French holding the field.",
          yourTurn: {
            question:
              "Magna Carta's clause 39 protected every 'free man'. What name was given to the unfree peasants, bound to their lord's land, who were left out? (One word.)",
            answer: {
              type: "text",
              accept: ["villeins", "villein", "villains", "serfs", "serf", "bondmen", "bondsmen"],
              display: "villeins (serfs)",
            },
            solution: "Villeins (serfs) were unfree, so the phrase 'free man' quietly excluded a large part of the population.",
          },
        },
      ],
      keyPoints: [
        "A source becomes **evidence** when you use it to answer a question.",
        "Primary = from the time; secondary = made later. Neither is automatically reliable.",
        "Sources can be written, visual, archaeological or oral — each has blind spots.",
        "**Describe** = what it shows; **infer** = what it suggests.",
        "Support every inference with a specific detail from the source.",
      ],
      whyItWorks:
        "Most of the past left no direct record of what people thought or why they acted. Inference is how historians get from what survives to what happened: a law forbidding something suggests that thing was happening; a poster aimed at the unemployed suggests the party wanted their votes. Supporting each inference with a detail keeps it honest — it shows your reader exactly which part of the source carries the weight, so they can check your reasoning instead of simply trusting you.",
      strategies: ["Make an inference", "Use precise evidence"],
      thinkDeeper:
        "The Bayeux Tapestry was made for the Normans who won — yet it shows Harold being crowned and bravely rescuing soldiers from quicksand. What might that suggest about who made it, and how should it change the way you use it?",
    },
    // ------------------------------------------------------------------ 3
    {
      id: "provenance-nop",
      heading: "Provenance: Nature, Origin, Purpose",
      discovery: {
        problem:
          "You are investigating **why the Nazis won so many votes in 1932**. You have two sources:\n\n- **Source C:** a Nazi election poster from 1932, *Our Last Hope: Hitler*, showing a crowd of thin, worn-out ordinary Germans.\n- **Source D:** a historian's book written in 2010 that analyses voting statistics.\n\nMarcus says: 'Source C is propaganda, so it's biased and useless. Bin it.' Is he right? What *could* the poster tell you?",
        idea:
          "Marcus is half right. The poster is **biased** — it was made to win votes, not to tell the truth. But biased is not the same as **useless**. Ask what the poster reveals about the people who made it: it shows the Nazis aimed at Germans made desperate by the **Depression** (about 6 million were unemployed by 1932) and presented Hitler as their saviour. For a question about *Nazi tactics* it is excellent evidence. **Usefulness depends on the question you ask.**",
      },
      body:
        "**Provenance** means where a source came from. Before you trust what a source says, inspect it with **NOP**:\n\n| | Ask | Example: Holbein's portrait of Henry VIII (1537) |\n|---|---|---|\n| **N**ature | What kind of source? Private or public? | an official painting for a royal palace wall |\n| **O**rigin | Who made it, when and where? Were they in a position to know? | Hans Holbein, the king's own painter, paid by Henry |\n| **P**urpose | Why was it made? For whom? | to show Henry as mighty and his dynasty as secure |\n\n**Bias, reliability and usefulness**\n\n- A source is **biased** when it gives a one-sided view because of who made it or why.\n- **Reliability** asks: *can I trust what it says as an accurate account?*\n- **Usefulness** asks: *does it help me answer my question?*\n\nThese are different. Holbein's portrait is unreliable as a record of what Henry really looked like — no court painter would show the king as anything less than magnificent. But it is very **useful** for a question about how Henry wanted to be seen. **Propaganda** works the same way: it is poor evidence of what was true, but excellent evidence of **what rulers wanted people to believe**, and of the hopes and fears they thought they could exploit.\n\n**Push your NOP further**\n\n- Was the author an eyewitness, or writing years later? (Roger of Wendover wrote about John in the 1220s–30s, partly from gossip and rumour.)\n- Was it private (a diary — perhaps more honest) or public (a speech — written to persuade)?\n- What is *missing*? Who is silent? Peasants rarely wrote chronicles, and women's own words are scarce in most surviving medieval records.\n\n**Corroboration (cross-referencing)**\n\nNo single source is enough. **Cross-reference** — check it against other evidence. If a hostile chronicle calls John idle, but government records show him travelling constantly and hearing court cases himself, the records **challenge** the chronicle. If several independent sources agree, your confidence rises.\n\nRemember: **every** source is biased in some way. The skill is not finding an unbiased source — it is working out *how* each one is slanted, and using it anyway.",
      diagram: nopDiagram,
      diagramCaption:
        "NOP questions lead to a judgement about reliability and usefulness — always for a particular question — and then to cross-referencing.",
      workedExamples: [
        {
          title: "How useful is a propaganda poster?",
          problem:
            "**Source E** — a description of a 1932 Nazi election poster, *Our Last Hope: Hitler*. It shows a crowd of thin, tired-looking men, women and children. Below them, in large letters, is the name HITLER.\n\nHow useful is Source E for an enquiry into why the Nazis won votes in 1932? (6 marks)",
          steps: [
            "**Plan:** content (what it shows) → provenance (NOP) → limits → judgement on usefulness *for this enquiry*.",
            "**Content:** 'Source E is useful because it shows who the Nazis targeted. The crowd looks poor and exhausted, which suggests the Nazis aimed at Germans hit by the Depression, when about 6 million were unemployed by 1932.'",
            "**Provenance:** 'Its nature and purpose add to its usefulness. It is an election poster made by the Nazi Party to win votes, so it reveals their tactics directly: offering Hitler as the single answer to despair. My own knowledge supports this — Nazi propaganda under Goebbels promised \"work and bread\".'",
            "**Limits:** 'However, it shows what the Nazis *hoped* would work, not whether it did. It cannot tell us why individual voters chose them — some voted out of fear of communism rather than desperation. I would need to cross-reference it with election results (37% in July 1932) and voters' own accounts.'",
            "**Judgement:** 'Overall, Source E is very useful for understanding Nazi *methods*, but less useful on its own for proving *why* people voted Nazi.'",
          ],
          answer:
            "Very useful for Nazi tactics, because it is their own propaganda aimed at the Depression's victims; limited as proof of voters' motives unless cross-referenced.",
          yourTurn: {
            question: "What name is given to checking a source against other independent evidence to see whether it is confirmed?",
            answer: {
              type: "text",
              accept: [
                "corroboration",
                "corroborate",
                "corroborating",
                "cross-referencing",
                "cross referencing",
                "crossreferencing",
                "cross-reference",
                "cross reference",
                "cross-checking",
                "cross checking",
              ],
              display: "corroboration (cross-referencing)",
            },
            solution: "Corroboration (cross-referencing): if independent sources agree, confidence rises; if they clash, you investigate why.",
          },
        },
      ],
      keyPoints: [
        "**NOP** = Nature, Origin, Purpose — inspect every source before using it.",
        "Biased does not mean useless: ask what the bias itself reveals.",
        "Reliability = can I trust it? Usefulness = does it help answer *my* question?",
        "Propaganda is strong evidence of what rulers wanted people to believe.",
        "Cross-reference: compare a source with other evidence to confirm or challenge it.",
      ],
      whyItWorks:
        "Every source was made by someone, for a reason, and that reason shapes what it says and what it leaves out. Ignore provenance and you can be fooled — forged 'Hitler Diaries' fooled a famous historian in 1983 until scientists tested the paper. NOP turns bias from a problem into a clue: once you know *why* a source was made, its slant tells you about its maker's aims, fears and audience. That is why propaganda posters, royal portraits and hostile chronicles are all valuable — as long as you ask them the right question.",
      strategies: ["Check the provenance (NOP)", "Think about purpose", "Cross-reference sources"],
      thinkDeeper:
        "Is a private diary always more reliable than a public speech? Think of a case where a diarist might have reasons not to tell the whole truth — even to themselves.",
    },
    // ------------------------------------------------------------------ 4
    {
      id: "interpretations",
      heading: "Interpretations: why historians disagree",
      discovery: {
        problem:
          "Read two views of King John. (Both are constructed teaching summaries of views historians have held.)\n\n> **Interpretation 1:** John was a monster of wickedness — greedy, cruel and faithless, hated by God and man.\n\n> **Interpretation 2:** John was one of the hardest-working kings England ever had. He travelled constantly, heard law cases himself and ran the government with great skill. His failures owed much to bad luck and a brilliant rival, Philip II of France.\n\nBoth writers studied the same king. Before reading on, list as many reasons as you can **why** they might disagree.",
        idea:
          "Strong reasons include:\n\n- they used **different evidence** (monks' chronicles vs government records);\n- they wrote at **different times** (each age has its own heroes and villains);\n- they asked **different questions** ('Was John a good man?' vs 'Was John an effective ruler?');\n- they had **different values and purposes**.\n\nNeither is simply 'right'. Each is an **interpretation** — and your job is to test it against the evidence.",
      },
      body:
        "A **source** comes from the past. An **interpretation** is a later view *about* the past — an argument built from sources. Historians' books, museum displays, documentaries, films and the stories nations tell about their own past are all interpretations.\n\n**Why do interpretations differ?**\n\n1. **Evidence used.** Earlier writers leaned heavily on monks' chronicles. From the mid-20th century historians also studied John's government records — such as the pipe rolls and charters — which show a busy, capable administrator.\n2. **When it was written.** Each age asks its own questions. In the 1530s, John Bale's play *Kynge Johan*, written after Henry VIII's Break with Rome, made John a hero for defying the Pope.\n3. **The historian's question.** 'Was John a good person?' and 'Was John a successful king?' can have different answers.\n4. **Values and purpose.** A writer's beliefs, nationality or aim — to entertain, to teach a moral, to build national pride — shapes what they stress.\n\n**Bad King John? A case study**\n\n| When | Who | View of John |\n|---|---|---|\n| 1220s–30s | Roger of Wendover, monk of St Albans | cruel tyrant, enemy of the Church |\n| c. 1538 | John Bale, Protestant writer | hero who stood up to the Pope |\n| 1800s | Walter Scott's *Ivanhoe* (1819), Robin Hood tales | villain — 'Bad King John' |\n| 1961 onwards | W. L. Warren and later historians | hard-working and unlucky, but cruel and distrusted |\n\n**Testing an interpretation**\n\nDon't ask 'who is right?' Ask **'How far does the evidence support this view?'**\n\n- Find evidence that **supports** it: John lost Normandy in 1204; his nephew Arthur disappeared while John's prisoner in 1203.\n- Find evidence that **challenges** it: records of John's hard work; Philip II's far greater resources.\n- Reach a judgement — *convincing*, *partly convincing* or *unconvincing* — and say why.\n\nThe same thinking applies all year. Historians of Hitler's rise disagree about how much weight to give Hitler's own skills, the economic crisis, or the conservative politicians who appointed him. Good historians usually show how these combined — but they still argue about which mattered most.",
      diagram: interpretationsDiagram,
      diagramCaption:
        "Each generation's interpretation of John reflects its own evidence, questions and values.",
      workedExamples: [
        {
          title: "Explaining why interpretations differ",
          problem:
            "Interpretation 1 calls John 'a monster of wickedness'. Interpretation 2 calls him 'hard-working' and unlucky. Suggest **one** reason why these interpretations are different. (4 marks)",
          steps: [
            "**Plan:** pick *one* reason (here: different evidence) and develop it with detail on *both* sides. Don't just list several reasons.",
            "**Point:** 'The interpretations differ because the historians probably based them on different kinds of evidence.'",
            "**Evidence and explain (1):** 'Interpretation 1 sounds like monk chroniclers such as Roger of Wendover, who wrote in the 1220s–30s. Monks resented John because of his quarrel with the Pope, the Interdict (1208–14) and his seizure of Church money, so they stressed his cruelty and greed.'",
            "**Evidence and explain (2):** 'Interpretation 2 reflects historians who studied government records such as the pipe rolls. These show John travelling the country and hearing law cases, which is why it emphasises his hard work rather than his character.'",
            "**Link:** 'So the difference comes less from the facts about John than from which sources each writer trusted.'",
          ],
          answer: "They differ mainly because they rest on different evidence — hostile monastic chronicles versus royal government records.",
          yourTurn: {
            question:
              "A historian's later view or argument about the past, built from evidence — such as 'John was hard-working but unlucky' — is called an …? (One word.)",
            answer: { type: "text", accept: ["interpretation", "an interpretation", "interpretations"], display: "interpretation" },
            solution: "An interpretation is an argument about the past; sources are the material from the past that it is built on.",
          },
        },
      ],
      keyPoints: [
        "A source is *from* the past; an interpretation is a later argument *about* it.",
        "Interpretations differ because of the evidence used, when they were written, the questions asked and the writer's values.",
        "'Bad King John' came largely from hostile monk chroniclers and later storytellers.",
        "Test an interpretation: evidence for, evidence against, then a judgement.",
        "Disagreement is normal — but not every interpretation is equally well supported.",
      ],
      whyItWorks:
        "Historians disagree because the evidence is incomplete and has to be interpreted, and because each generation asks new questions. That is not a weakness — it is how history improves. When historians studied John's government records closely in the mid-20th century, they found evidence the chroniclers had ignored, and the old picture had to change. Testing interpretations against evidence also protects you from simply being told what to think: a view is only as strong as the evidence behind it.",
      strategies: ["Compare and contrast", "Consider the counter-argument", "Check the provenance (NOP)"],
      thinkDeeper:
        "Films about Robin Hood or Henry VIII's wives are interpretations too. Should film-makers be judged by the same standards as historians? Why, or why not?",
    },
    // ------------------------------------------------------------------ 5
    {
      id: "causation",
      heading: "Causation: why things happen",
      discovery: {
        problem:
          "**Prediction puzzle.** Germany, 1928: the Nazis win just **2.6%** of the vote. July 1932: they win about **37%** and become the largest party in the Reichstag.\n\nIn four years something changed dramatically. Write down **three** things you think might have caused the jump. Then sort them: which were **long-term** (building for years), which **short-term**, and what was the **trigger** that finally put Hitler in power?",
        idea:
          "Historians point to **long-term** causes (resentment at the Treaty of Versailles, 1919; a young democracy with shallow roots), a **short-term** cause (the **Great Depression** after the Wall Street Crash of October 1929, with about 6 million unemployed by 1932) and Hitler's **propaganda and leadership**, which turned despair into votes. The trigger was a backroom deal: President Hindenburg appointed Hitler Chancellor on **30 January 1933**.\n\nBut notice: none of these alone explains it. Versailles had existed for ten years while the Nazis stayed small. It took the factors **combining** — a crisis, a government that looked weak, and a leader ready to exploit both.",
      },
      body:
        "**Causation** asks *why* something happened. Historians rarely accept a single cause; they explain how several causes worked together.\n\n**Three time-scales**\n\n| Type | Meaning | Example: the French Revolution, 1789 |\n|---|---|---|\n| **Long-term** | conditions building over years or decades | an unfair tax system; Enlightenment ideas about rights |\n| **Short-term** | developments just before the event | near-bankruptcy after costly wars; the poor harvest of 1788 and soaring bread prices |\n| **Trigger** | the spark that sets it off | Louis XVI calls the Estates-General (May 1789); the Third Estate declares itself the National Assembly |\n\n**Categories of cause** — remember **PERSIM**: **P**olitical, **E**conomic, **R**eligious, **S**ocial, **I**ndividuals, **M**ilitary. Henry VIII's Break with Rome had causes in several categories: the need for a male heir (political), the Church's wealth (economic), new Protestant ideas (religious) and Henry's own desire to marry Anne Boleyn (individual).\n\n**Linking causes** is what lifts an answer. Instead of 'Another cause was…', write *'This made… worse because…'*. For example: the Depression (economic) made Weimar's coalition governments look helpless (political), which made voters more willing to listen to Hitler's promises (individual).\n\n**The Term 2 model: how dictatorships rise**\n\n1. **Crises** — war, economic collapse, civil war.\n2. **Weak government** — divided, unable to solve the crisis, losing legitimacy.\n3. **A determined, often charismatic leader or party** — ready to exploit both.\n\nTest the model on each case. Hitler fits closely. **Mao** rose through crises (Japanese invasion, civil war) and a weak, corrupt Guomindang government. **Pol Pot** fits the crises and weakness (civil war, spillover from the Vietnam War, US bombing, the weak Lon Nol government) — but he was secretive rather than a public showman; the Khmer Rouge ruled in the name of a faceless 'Angkar' ('the Organisation'). A good historian notices where a model does *not* fit.\n\n**Ranking causes** — to argue that one cause was *most* important, use criteria. Without it, would the event still have happened? Did it make the other causes worse? This **counterfactual** test ('What if the Depression had never happened?') is a tool for weighing causes, not a game of make-believe.",
      diagram: causationDiagram,
      diagramCaption:
        "The Term 2 model: crises, weak government and a determined leader. The links between the factors explain more than any single factor on its own.",
      workedExamples: [
        {
          title: "Explaining a cause — and linking factors",
          problem: "Explain why Hitler became Chancellor in January 1933. (8 marks)",
          steps: [
            "**Plan:** three factors from the model, each as a PEEL paragraph, then a linked conclusion: crisis → weak government → Hitler's leadership → the trigger (the elites' deal).",
            "**Crisis:** 'One reason was the economic crisis. After the Wall Street Crash in October 1929, American loans were recalled and German unemployment rose to about 6 million by 1932. Desperate people looked for radical answers, which helped the Nazi vote leap from 2.6% in 1928 to about 37% in July 1932.'",
            "**Weak government:** 'This crisis exposed the weakness of the Weimar Republic. Proportional representation produced unstable coalitions that could not agree how to respond, so chancellors governed by emergency decree under Article 48. Democracy began to look as if it did not work.'",
            "**Leadership and propaganda:** 'Hitler exploited both. His speeches, Goebbels' propaganda and simple promises of \"work and bread\" offered something to farmers, the middle classes and the young, while fear of communism drew support from wealthier Germans.'",
            "**Trigger and judgement:** 'However, Hitler did not take power in a coup or by winning a majority. He was *appointed* on 30 January 1933 by President Hindenburg, after Franz von Papen persuaded him they could control Hitler. The Depression was the most important cause because it turned a fringe party into the largest one — but it took the elites' miscalculation to hand Hitler the job.'",
          ],
          answer:
            "The Depression was the key cause, making Weimar look weak and Hitler attractive; a backroom deal by von Papen and Hindenburg was the trigger.",
          yourTurn: {
            question: "In which year did the Wall Street Crash happen — the start of the Great Depression that transformed Hitler's chances?",
            answer: { type: "number", value: 1929 },
            solution: "October 1929: the Crash led US banks to recall loans to Germany, and unemployment soared.",
          },
        },
      ],
      keyPoints: [
        "Long-term causes build up; short-term causes come just before; a trigger sets things off.",
        "Sort causes into categories with **PERSIM**: Political, Economic, Religious, Social, Individuals, Military.",
        "Link causes: show how one made another worse.",
        "Term 2 model: **crises + weak government + a determined leader** — and check where it fits less well.",
        "Rank causes using criteria and counterfactual tests, then justify your choice.",
      ],
      whyItWorks:
        "Events such as revolutions and dictatorships are too big to have one cause. A long-term cause explains why something was *possible*; a short-term cause explains why it happened *then*; a trigger explains why it happened on *that day*. Linking them shows how causes multiply each other's effects: resentment of Versailles existed for a decade, but only when the Depression struck did it turn into millions of Nazi votes. That is why the best answers explain connections instead of listing factors.",
      strategies: ["Long-term vs short-term causes", "Link the causes", "Weigh factors"],
      thinkDeeper:
        "If the Wall Street Crash had never happened, would Hitler still have become Chancellor? Use what you know about Germany in 1928 to argue your case — and say what evidence would make you change your mind.",
    },
    // ------------------------------------------------------------------ 6
    {
      id: "change-continuity-significance",
      heading: "Change, continuity and significance",
      discovery: {
        problem:
          "Look at these four moments:\n\n- **after 1066:** Norman lords replace almost all the English nobility;\n- **1215:** Magna Carta is sealed at Runnymede;\n- **1918:** women over 30 who meet a property qualification get the vote;\n- **1928:** women get the vote on the same terms as men (from 21).\n\nZara says: 'They're all turning points — everything changed overnight.' Pick one and argue against her. For whom did life change, and for whom did it stay the same?",
        idea:
          "Most 'turning points' look different from below. After 1066 the people at the *top* changed, but most peasants kept farming the same land, now paying dues to a new lord. Magna Carta was annulled by the Pope within about ten weeks and protected mainly barons — its significance grew over centuries. 1918 was a huge step, but younger women had to wait until 1928.\n\nHistorians always ask **how much changed, how fast, and for whom** — and they look for **continuity** too.",
      },
      body:
        "**Change** is when something becomes different; **continuity** is when it stays the same. Every period has both — history is not just a list of changes.\n\n**Describing change precisely**\n\n| Question | Useful vocabulary |\n|---|---|\n| How fast? (**rate**) | sudden, rapid, gradual, slow |\n| How much? (**extent**) | complete, significant, limited, superficial |\n| For whom? | the elite, women, peasants, workers, everyone |\n| Better or worse? | **progress** (improvement) or **regression** (going backwards) |\n\nA **turning point** is a moment after which things move in a new direction: the 1534 Act of Supremacy made Henry VIII, not the Pope, Supreme Head of the Church in England. **Gradual change** builds slowly: Parliament's power grew over centuries after Magna Carta and Simon de Montfort's Parliament of 1265.\n\nBe careful with 'progress'. Change can go backwards: Germany had a democracy with votes for women in 1919, yet by 1934 it was a one-party dictatorship. And progress for some can be loss for others — the Dissolution of the Monasteries (1536–40) enriched gentry who bought monastery land but removed a source of care for many poor and sick people.\n\n**Significance: why does it matter?**\n\nSignificance is not the same as fame or size. Historians judge it with **criteria**. A popular set is the **5 Rs**:\n\n- **Remarkable** — was it noticed at the time?\n- **Remembered** — is it remembered, and by whom?\n- **Resonant** — do people link it to experiences or debates today?\n- **Resulting in change** — did it have deep, lasting consequences?\n- **Revealing** — does it reveal something important about the past?\n\nCriteria make significance arguable rather than a matter of taste. The 1918 Representation of the People Act scores highly on *resulting in change*: the electorate roughly tripled, from about 8 million to about 21 million voters, around 8.4 million of them women. In Singapore, the **1959** election that brought full internal self-government is significant because it *resulted in change* that led on towards independence in **1965**.\n\nSignificance can also change over time. Magna Carta meant more to American colonists in the 1770s, and to the authors of the Universal Declaration of Human Rights in 1948, than to most people in 1216.",
      diagram: changeDiagram,
      diagramCaption:
        "Four shapes change can take. Real history usually mixes them — and what looks like a turning point for some can be continuity for others.",
      workedExamples: [
        {
          title: "Judging significance with criteria",
          problem: "Explain the significance of the 1918 Representation of the People Act. (6 marks)",
          steps: [
            "**Plan:** choose two or three criteria (resulting in change, revealing, remembered) and give precise detail for each. Include a limitation to show balance.",
            "**Resulting in change:** 'The Act was significant because it transformed who could vote. All men over 21, and women over 30 who met a property qualification (or whose husbands did), gained the vote, so the electorate roughly tripled to about 21 million, including around 8.4 million women.'",
            "**Revealing:** 'It also reveals the impact of the First World War. Women's war work, for example in munitions factories, weakened the argument that they did not serve the nation, and politicians wanted to reward returning soldiers, many of whom had not been able to vote.'",
            "**Limitation:** 'However, it was not equal: women under 30 — often the young munitions workers themselves — still could not vote until the Equal Franchise Act of 1928.'",
            "**Judgement:** 'Overall the Act was highly significant as the biggest single expansion of the vote in British history, even though it was a step towards equality rather than the end point.'",
          ],
          answer:
            "Highly significant — it roughly tripled the electorate and gave millions of women the vote — but only a step, since equal voting came in 1928.",
          yourTurn: {
            question: "In which year did the Equal Franchise Act give women in Britain the vote on the same terms as men?",
            answer: { type: "number", value: 1928 },
            solution: "1928: all women over 21 could vote, on the same terms as men — ten years after the 1918 Act.",
          },
        },
      ],
      keyPoints: [
        "Every period has change **and** continuity — look for both.",
        "Describe change by rate (how fast), extent (how much) and for whom.",
        "Change is not always progress: Germany went from democracy to dictatorship in 1933–34.",
        "A turning point changes the direction of events, not just the headlines.",
        "Judge significance with criteria such as the **5 Rs**, not by fame.",
      ],
      whyItWorks:
        "Without the idea of continuity, history becomes a highlight reel that exaggerates change and forgets most people's lives. Asking 'for whom?' reveals that the same event can be progress for one group and loss for another. Criteria for significance matter because 'important' is otherwise just an opinion: criteria give reasons that someone else can check and argue with — which is exactly what makes it history rather than a list of favourites.",
      strategies: ["Spot change and continuity", "Judge significance", "Ask 'how typical?'"],
      thinkDeeper:
        "Which was the bigger turning point for democracy in Britain: 1918 or 1928? Use at least two of the 5 Rs to decide — and explain why someone might reasonably disagree with you.",
    },
    // ------------------------------------------------------------------ 7
    {
      id: "writing-like-a-historian",
      heading: "Writing like a historian: PEEL and judgement",
      discovery: {
        problem:
          "Two students answer the question *'Explain why William won the Battle of Hastings.'*\n\n> **Arjun:** William landed at Pevensey on 28 September 1066. Harold had fought at Stamford Bridge. The battle was on 14 October. William had archers and cavalry. Harold was killed. William won.\n\n> **Wei Ling:** One reason William won was luck. Harald Hardrada invaded first, so Harold had to march north and fight at Stamford Bridge on 25 September. This meant that when William landed unopposed three days later, Harold's army was tired and had suffered losses — which made a Norman victory far more likely.\n\nArjun includes more facts. Whose answer is better — and why?",
        idea:
          "Wei Ling's. Arjun **describes**: every sentence is true, but none of them answers *why*. Wei Ling makes a **point** that answers the question, gives **evidence**, **explains** how that evidence affected the outcome ('This meant that…') and **links** back to the question. Facts only earn marks when you *use* them to explain.",
      },
      body:
        "Historians write **arguments**, not stories. Your job is to answer the question and prove your answer with evidence.\n\n**The PEEL paragraph**\n\n- **P — Point:** a sentence that directly answers the question. *'One reason Henry VIII broke with Rome was his need for a male heir.'*\n- **E — Evidence:** precise, relevant detail — dates, names, numbers. *'By 1527 Catherine of Aragon was over 40 and only one child, Mary, had survived.'*\n- **E — Explain:** show *how* the evidence answers the question. This earns the most marks. *'This mattered because Henry feared that without a son England could slide back into civil war, as in the Wars of the Roses.'*\n- **L — Link:** tie it back to the question, or on to the next factor. *'So the succession gave Henry a powerful reason to seek an annulment — which led him into conflict with the Pope.'*\n\n**Use precise evidence**\n\n| Vague | Precise |\n|---|---|\n| 'a long time ago' | 'in 1215' |\n| 'lots of people were unemployed' | 'about 6 million Germans were unemployed by 1932' |\n| 'the king's adviser' | 'Thomas Cromwell' |\n| 'women got the vote' | 'women over 30 who met a property qualification, in 1918' |\n\n**'How far do you agree?' answers**\n\nThese questions want a **judgement**, not two lists.\n\n1. **Introduction:** your answer in one sentence (*'I partly agree…'*).\n2. **Paragraph(s) for** the statement (PEEL).\n3. **Paragraph(s) against** — other factors (PEEL).\n4. **Conclusion:** weigh them. Use a **criterion** to justify your verdict: *Which factor made the others matter? Without which could the outcome not have happened?*\n\nUseful phrases: *This suggests… · As a result… · However… · More importantly… · On balance…*\n\n**Avoid**\n\n- retelling the story in order ('first… then… then…');\n- 'There were lots of reasons' with no development;\n- a conclusion that sits on the fence, or brings in new facts;\n- hindsight ('Harold should have known William would land').",
      diagram: peelDiagram,
      diagramCaption: "PEEL in action: each layer does a different job, and the Explain layer is where most marks are won.",
      workedExamples: [
        {
          title: "A 'how far do you agree' answer",
          problem: "'William won the Battle of Hastings mainly because of luck.' How far do you agree? (12 marks)",
          steps: [
            "**Plan:** For luck — Hardrada's invasion and the timing of the wind. Against — William's preparation and tactics; Harold's decisions. Criterion for the judgement: could luck *alone* have won the battle?",
            "**Introduction:** 'I partly agree: luck gave William a vital advantage, but it was his preparation and leadership that turned that advantage into victory.'",
            "**For (PEEL):** 'Luck helped William. Hardrada landed in the north first, so Harold had to march north and fight at Stamford Bridge on 25 September 1066. Then the wind changed, and William landed unopposed at Pevensey on 28 September. As a result, Harold's army arrived at Hastings tired and weakened. This shows that luck shaped *when* and *how* the battle was fought.'",
            "**Against (PEEL):** 'However, William had prepared thoroughly. He built a fleet, brought knights, archers and horses across the Channel, and won the Pope's support (a papal banner), which raised morale. During the battle, Norman feigned retreats tempted English soldiers off the hill and weakened the shield wall. Luck did not win the fighting — William's tactics did.'",
            "**Judgement:** 'On balance, luck was important but not the main reason. Without William's preparation and tactics, the lucky timing would have been wasted: the English shield wall held for most of a long day, which shows the battle was finally won by Norman skill.'",
          ],
          answer: "Partly agree: luck gave William the opportunity, but his preparation and tactics were the main reason he won.",
          yourTurn: {
            question: "In a PEEL paragraph, what does the **L** stand for?",
            answer: { type: "text", accept: ["link", "linking", "link back", "link to the question", "link back to the question"], display: "Link" },
            solution: "L = Link: tie the paragraph back to the question (or on to the next factor).",
          },
        },
      ],
      keyPoints: [
        "PEEL: Point, Evidence, Explain, Link — the Explain earns the most.",
        "Precise evidence = dates, names and numbers that do a job in your argument.",
        "Description retells; explanation shows *how* and *why*.",
        "'How far' answers weigh both sides and reach a justified judgement.",
        "Justify a judgement with a criterion, e.g. 'without this, the other factors would not have mattered'.",
      ],
      whyItWorks:
        "A paragraph structure like PEEL forces you to do the thing examiners reward: connect evidence to the question. Facts on their own prove nothing — '6 million unemployed' only becomes an argument when you explain how unemployment made Nazi promises attractive. Judgement questions work the same way: weighing factors against a criterion shows you understand *how* history happened, not just *what* happened.",
      strategies: ["Use precise evidence", "Weigh factors", "Consider the counter-argument"],
      thinkDeeper:
        "Is it ever right for a conclusion to say 'all the factors were equally important'? When might that genuinely be the best-supported judgement — and how would you justify it?",
    },
    // ------------------------------------------------------------------ 8
    {
      id: "power-concepts",
      heading: "Big ideas: monarchy, dictatorship and democracy",
      discovery: {
        problem:
          "**Odd one out:** Henry VIII · Adolf Hitler · Mao Zedong · Louis XVI.\n\nThere is more than one good answer. Find **two different** odd ones out, each with a reason. (Think about *where their power came from*, *what limited it*, and *what happened to them*.)",
        idea:
          "Some strong answers:\n\n- **Legitimacy:** Hitler and Mao are the odd ones out — Henry VIII and Louis XVI inherited their thrones and claimed **divine right**, authority from God.\n- **Ideology:** again Hitler and Mao — each led a mass party with an **ideology** (Nazism, communism) and a plan to remake society, something no Tudor king had.\n- **How they gained power:** Hitler is the only one *appointed* under a democratic constitution; Mao won a civil war.\n- **Their fate:** Louis XVI is the only one overthrown and executed (1793).\n\nThese ideas — **legitimacy, ideology, limits on power** — are the vocabulary for the whole year.",
      },
      body:
        "These concepts appear in every topic this year. Use them precisely.\n\n**Monarchy** — rule by a king or queen, usually inherited.\n\n- **Divine right of kings:** the belief that a monarch's authority comes from God, so rebellion is a sin. Henry VIII and Louis XVI both relied on it.\n- **Absolute monarchy:** the monarch's power has few or no legal limits (France before 1789).\n- **Limited or constitutional monarchy:** the monarch rules within laws and shares power. Magna Carta (1215) was an early attempt to put the king under the law; today's UK is a constitutional monarchy in which the King reigns but elected governments rule.\n- **Feudalism:** land granted in return for loyalty and service — William I's system of control.\n- **Legitimacy:** the accepted right to rule. William I worked hard to look legitimate: a papal banner, and a coronation on Christmas Day 1066.\n\n**Dictatorship** — rule by one person or party with no effective legal limits, no free elections and no peaceful way for the people to remove them.\n\n- **Totalitarianism:** a dictatorship that tries to control *every* part of life — work, schools, youth groups, even thoughts. Historians apply it to Nazi Germany, Mao's China and Pol Pot's Cambodia, while debating how complete the control really was.\n- **Ideology:** a set of ideas about how society should be organised. **Fascism** (Nazism was an extreme, racist form) glorified the nation, the leader and struggle, and rejected democracy. **Communism** (Mao, Pol Pot) aimed at a classless society without private property — in practice run by a single party.\n- **Propaganda:** spreading ideas to persuade. **Terror:** using fear — secret police, camps, executions — to crush opposition. **Cult of personality:** presenting the leader as heroic and all-wise (Hitler as *Führer*, Mao's *Little Red Book*).\n\n**Democracy** — rule by the people (Greek *demos* = people, *kratos* = power).\n\n- **Direct democracy:** citizens vote on decisions themselves (ancient Athens — though only adult male citizens).\n- **Representative democracy:** citizens elect representatives to decide for them (the UK, Singapore).\n- **Franchise / suffrage:** the right to vote — a Term 3 story from 1789 to 1928.\n- **Rule of law:** everyone, including rulers, is subject to the law.\n- **Human rights:** rights belonging to every person, set out in France's **Declaration of the Rights of Man and of the Citizen (1789)** and the **Universal Declaration of Human Rights (1948)**.",
      diagram: powerDiagram,
      diagramCaption:
        "A simplified comparison. Real states can mix features — the UK today is both a constitutional monarchy and a representative democracy.",
      workedExamples: [
        {
          title: "Using concepts to compare across centuries",
          problem: "'Henry VIII was a dictator.' How far do you agree? (8 marks)",
          steps: [
            "**Plan:** define *dictator* first, then test Henry against the definition: ways he fits, ways he does not, then a judgement.",
            "**For:** 'In some ways Henry ruled like a dictator. The Treason Act of 1534 made it treason even to deny the king's titles in words, and opponents such as Thomas More were executed (1535). He also used his image as propaganda: Holbein's portraits present him as all-powerful.'",
            "**Against:** 'However, Henry's power rested on inheritance and divine right, not on a party or ideology, and he made his biggest changes through Parliament — the Act of Supremacy (1534) was passed as a law. He also lacked the mass propaganda, secret police and modern technology that totalitarian dictators such as Hitler used to control people's daily lives.'",
            "**Judgement:** 'So I mostly disagree. Henry was a powerful and at times tyrannical monarch, but calling him a dictator is anachronistic: his authority was legitimate by the standards of his time and was exercised through the law rather than by sweeping it aside.'",
          ],
          answer: "Mostly disagree: tyrannical at times, but a legitimate monarch ruling through Parliament — not a modern dictator.",
          yourTurn: {
            question: "What term describes the belief that a monarch's authority comes directly from God?",
            answer: {
              type: "text",
              accept: ["divine right", "divine right of kings", "the divine right of kings", "the divine right", "divine rights"],
              display: "divine right of kings",
            },
            solution: "The divine right of kings: rebellion against the monarch was presented as rebellion against God.",
          },
        },
      ],
      keyPoints: [
        "**Divine right:** authority from God — the basis of medieval and Tudor kingship.",
        "Absolute monarchs have few legal limits; constitutional monarchs rule within the law.",
        "Dictators rule without free elections or legal limits; totalitarian regimes try to control all of life.",
        "**Ideology** (fascism, communism) explains what a regime wanted to achieve.",
        "Democracy can be direct or representative; the **franchise** is who can vote.",
        "The **rule of law** and **human rights** are the tests of whether power is limited.",
      ],
      whyItWorks:
        "Precise concepts let you compare across centuries. 'Was Henry VIII a dictator?' only makes sense once you know what a dictatorship is: Henry was ruthless, but his power rested on inheritance and divine right and worked through Parliament, while Hitler's rested on a party, an ideology, terror and modern propaganda. The concepts also reveal the year's big story — a long, uneven struggle over whether power should be limited by law and answerable to the people.",
      strategies: ["Compare and contrast", "Avoid hindsight", "Use precise evidence"],
      thinkDeeper:
        "Hitler was appointed legally, and the Enabling Act (March 1933) was passed by a vote of the Reichstag — though amid intimidation, with Communist deputies excluded. Can a democracy vote itself out of existence? What protections might stop that happening?",
    },
  ],
  learn: {
    flashcards: [
      { front: "Chronology", back: "Putting events in order of time and measuring the gaps between them." },
      { front: "Anachronism", back: "Something placed in the wrong time period — e.g. a pocket watch at the Battle of Hastings, or a coin stamped '50 BC'." },
      { front: "Which century is 1066 in?", back: "The 11th century (the 1000s). Add one to the 'hundreds'." },
      { front: "AD / CE and BC / BCE", back: "AD (Anno Domini) = CE (Common Era); BC = BCE. Same numbers, different labels. There is no year 0." },
      { front: "Primary source", back: "A source made at the time being studied — e.g. Domesday Book (1086) or a 1932 election poster." },
      { front: "Secondary source", back: "A source made later by someone looking back — e.g. a textbook or a historian's book." },
      { front: "Inference", back: "Something a source suggests but does not directly say — always supported with a detail from the source." },
      { front: "Provenance", back: "Where a source came from: who made it, when, where and why." },
      { front: "NOP", back: "Nature, Origin, Purpose — the questions for checking a source's provenance." },
      { front: "Bias", back: "A one-sided view caused by who made a source or why. A biased source can still be very useful." },
      { front: "Reliability vs usefulness", back: "Reliability: can I trust what it says? Usefulness: does it help answer my question? Propaganda is unreliable but useful." },
      { front: "Corroboration", back: "Cross-referencing: checking a source against other independent evidence." },
      { front: "Interpretation", back: "A later argument or view about the past, built from evidence — e.g. 'Bad King John'." },
      { front: "Long-term, short-term and trigger causes", back: "Long-term: conditions building for years. Short-term: just before the event. Trigger: the spark that sets it off." },
      { front: "PERSIM", back: "Categories of cause: Political, Economic, Religious, Social, Individuals, Military." },
      { front: "Term 2 model for dictatorship", back: "Crises + weak government + a determined (often charismatic) leader or party." },
      { front: "Continuity", back: "What stays the same over time." },
      { front: "Turning point", back: "A moment after which events move in a new direction — e.g. the Act of Supremacy, 1534." },
      { front: "The 5 Rs of significance", back: "Remarkable, Remembered, Resonant, Resulting in change, Revealing." },
      { front: "PEEL", back: "Point, Evidence, Explain, Link." },
      { front: "Divine right of kings", back: "The belief that a monarch's authority comes directly from God." },
      { front: "Constitutional monarchy", back: "A monarchy limited by law, where elected governments make the decisions — e.g. the UK today." },
      { front: "Totalitarianism", back: "A system in which the state tries to control every part of people's lives." },
      { front: "Suffrage / franchise", back: "The right to vote in elections." },
      { front: "Representative democracy", back: "Citizens elect representatives to make decisions for them — e.g. the UK and Singapore." },
      { front: "Rule of law", back: "Everyone, including the ruler, must obey the law." },
    ],
    mustKnow: [
      "Can you work out the century of any date, and explain why there is no year 0?",
      "Can you draw a timeline to scale and spot an anachronism?",
      "Can you explain why a primary source is not automatically reliable?",
      "Can you make an inference from a source and support it with a detail from it?",
      "Can you use NOP to judge how useful a source is for a particular enquiry?",
      "Can you explain why propaganda is useful evidence even though it is biased?",
      "Can you give reasons why interpretations differ, using 'Bad King John' as an example?",
      "Can you sort causes into long-term, short-term and trigger, and link them together?",
      "Can you apply the 'crises + weak government + leader' model to Hitler, Mao and Pol Pot — and say where it fits less well?",
      "Can you judge an event's significance using the 5 Rs?",
      "Can you write a PEEL paragraph and a 'how far do you agree' conclusion justified by a criterion?",
      "Can you define monarchy, divine right, dictatorship, totalitarianism, democracy, suffrage and the rule of law precisely?",
    ],
    misconceptions: [
      {
        wrong: "1066 is in the 10th century.",
        right: "It is in the 11th century. The 1st century was years 1–100, so add one to the 'hundreds'.",
      },
      {
        wrong: "Primary sources are reliable and secondary sources are not.",
        right: "Either can be reliable or unreliable. A Nazi poster is primary but propaganda; a careful historian's book is secondary but well researched.",
      },
      {
        wrong: "A biased source is useless.",
        right: "Bias reveals the maker's aims and audience. Propaganda is excellent evidence of what rulers wanted people to believe.",
      },
      {
        wrong: "Interpretations are just opinions, so they are all equally valid.",
        right: "Interpretations must be supported by evidence, and some are far better supported than others.",
      },
      {
        wrong: "Hitler seized power in a violent coup.",
        right: "His Munich Putsch of 1923 failed. He was appointed Chancellor legally on 30 January 1933 and then dismantled democracy from the inside.",
      },
      {
        wrong: "Magna Carta gave everyone rights in 1215.",
        right: "It mainly protected barons and free men, and the Pope annulled it within weeks. Its wider meaning grew over centuries.",
      },
      {
        wrong: "Suffragists and suffragettes were the same people.",
        right: "Suffragists (NUWSS, led by Millicent Fawcett, from 1897) used peaceful, legal methods; suffragettes (WSPU, led by Emmeline Pankhurst, from 1903) used militant 'Deeds not words' tactics.",
      },
      {
        wrong: "Change always means progress.",
        right: "Change can be regression: Germany's democracy became a dictatorship in 1933–34.",
      },
    ],
    examMistakes: [
      "Describing a source ('it shows a crowd') instead of inferring what it suggests.",
      "Writing 'it's biased so it's unreliable' without explaining how the bias affects its usefulness for the question.",
      "Listing causes ('another reason was…') without explaining how each caused the event or linking them.",
      "Using vague evidence ('a long time ago', 'lots of people') instead of dates, names and numbers.",
      "Sitting on the fence in a 'how far' conclusion, or giving a verdict with no reason.",
      "Retelling the story in chronological order instead of answering the question.",
      "Using hindsight — blaming people for not knowing what happened next.",
      "Mixing up centuries, e.g. writing '10th century' for 1066 or '19th century' for 1933.",
    ],
    mnemonics: [
      {
        topic: "Checking a source",
        device: "NOP — Nature, Origin, Purpose",
        explanation: "What is it? Who made it, when and where? Why, and for whom? Then ask: how reliable, and how useful for MY question?",
      },
      {
        topic: "Paragraph structure",
        device: "PEEL — Point, Evidence, Explain, Link",
        explanation: "Answer the question, prove it with precise detail, explain how the detail answers the question, then link back. The Explain earns most marks.",
      },
      {
        topic: "Categories of cause",
        device: "PERSIM — Political, Economic, Religious, Social, Individuals, Military",
        explanation: "Run through the six letters when planning, so you do not miss a whole type of cause.",
      },
      {
        topic: "Judging significance",
        device: "The 5 Rs — Remarkable, Remembered, Resonant, Resulting in change, Revealing",
        explanation: "Test an event against each R; the more it scores, and the deeper the change, the stronger your case for significance.",
      },
      {
        topic: "Centuries",
        device: "Hundreds plus one",
        explanation: "Take the digits before the last two and add one: 10|66 → 11th century; 19|33 → 20th century.",
      },
      {
        topic: "How dictatorships rise",
        device: "Crisis + Weakness + Leader",
        explanation: "The Term 2 model. Use it as a checklist — then ask which factor mattered most and where the model fits less well.",
      },
    ],
    realWorld: [
      {
        title: "Spotting fake news",
        detail:
          "Fact-checkers use the same questions as NOP: who made this post or image, when, and why are they sharing it? With edited photos and AI deepfakes, checking provenance matters more than ever.",
        emoji: "📱",
      },
      {
        title: "Singapore's memory keepers",
        detail:
          "The National Archives of Singapore's Oral History Centre records interviews with people who lived through the Japanese Occupation, self-government and independence — oral sources that fill gaps in the official records.",
        emoji: "🎙️",
      },
      {
        title: "Museums are interpretations",
        detail:
          "Every exhibition at the National Museum of Singapore or the British Museum chooses what to show and what to leave out. Ask: whose story is told, and whose is missing?",
        emoji: "🏛️",
      },
      {
        title: "Your vote one day",
        detail:
          "Singapore citizens can vote from 21, and voting in elections is compulsory. The idea that ordinary people choose their government is the result of the long story you will study, from Magna Carta to 1928.",
        emoji: "🗳️",
      },
      {
        title: "Human rights today",
        detail:
          "The Universal Declaration of Human Rights (1948), which Eleanor Roosevelt hoped would become an 'international Magna Carta', still shapes international law and debates about rights.",
        emoji: "⚖️",
      },
    ],
    videos: [
      {
        title: "Primary and secondary sources",
        channel: "BBC Bitesize",
        url: "https://www.youtube.com/results?search_query=bbc+bitesize+primary+and+secondary+sources+history",
      },
      {
        title: "How to think like a historian",
        channel: "TED-Ed",
        url: "https://www.youtube.com/results?search_query=ted-ed+how+to+think+like+a+historian",
      },
      {
        title: "Check your sources: lateral reading",
        channel: "Crash Course",
        url: "https://www.youtube.com/results?search_query=crash+course+navigating+digital+information+lateral+reading",
      },
      {
        title: "The French Revolution — causes",
        channel: "Oversimplified",
        url: "https://www.youtube.com/results?search_query=oversimplified+french+revolution",
      },
      {
        title: "How did Hitler come to power?",
        channel: "BBC Bitesize",
        url: "https://www.youtube.com/results?search_query=bbc+bitesize+how+did+hitler+come+to+power",
      },
    ],
    formulas: [
      { name: "Century rule", formula: "Century = the 'hundreds' + 1 (1066 → 11th; 1949 → 20th)", note: "There is no year 0: 1 BC is followed by AD 1." },
      { name: "1066", formula: "Battle of Hastings (14 October): William of Normandy defeats Harold", note: "11th century" },
      { name: "1215", formula: "Magna Carta sealed at Runnymede (15 June)", note: "13th century" },
      { name: "1534", formula: "Act of Supremacy: Henry VIII becomes Supreme Head of the Church of England", note: "16th century" },
      { name: "1789", formula: "French Revolution begins; Storming of the Bastille (14 July)", note: "18th century" },
      { name: "1918 / 1928", formula: "Britain: some women over 30 win the vote / women vote on equal terms with men from 21", note: "20th century" },
      { name: "30 January 1933", formula: "Hitler appointed Chancellor of Germany", note: "Appointed legally — not a coup" },
      { name: "1 October 1949", formula: "Mao Zedong proclaims the People's Republic of China" },
      { name: "17 April 1975", formula: "Khmer Rouge take Phnom Penh; Pol Pot's regime rules Cambodia until January 1979" },
      { name: "1959 / 1965", formula: "Singapore: full internal self-government / independence (9 August 1965)" },
    ],
  },
};
