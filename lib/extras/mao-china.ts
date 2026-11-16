// Engagement extras for "Mao and Communist China" (separate from audited content).
import type { TopicExtras } from "../types.ts";

const TIMELINE = `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline from 1911 to 1976 drawn to scale: 1911 the Qing dynasty falls; 1921 the Communist Party is founded; 1927 Shanghai Massacre; 1934 to 1935 the Long March; 1937 to 1945 war with Japan; 1946 to 1949 civil war; 1 October 1949 the People's Republic; 1958 to 1962 the Great Leap Forward and famine; 1966 to 1976 the Cultural Revolution; 1976 Mao dies.">
<text x="10" y="18" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937">China 1911–1976 (drawn to scale)</text>
<line x1="30" y1="170" x2="455" y2="170" stroke="#334155" stroke-width="2"/>
<rect x="179" y="162" width="7" height="16" fill="#fde68a" stroke="#334155"/>
<rect x="199" y="162" width="52" height="16" fill="#fecaca" stroke="#334155"/>
<rect x="257" y="162" width="20" height="16" fill="#bae6fd" stroke="#334155"/>
<rect x="335" y="162" width="26" height="16" fill="#fecaca" stroke="#334155"/>
<rect x="387" y="162" width="65" height="16" fill="#c7d2fe" stroke="#334155"/>
<line x1="30" y1="146" x2="30" y2="170" stroke="#334155"/>
<text x="26" y="130" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1f2937">1911</text>
<text x="26" y="142" font-family="sans-serif" font-size="10" fill="#1f2937">Qing dynasty falls</text>
<line x1="95" y1="170" x2="95" y2="189" stroke="#334155"/>
<text x="95" y="200" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1f2937">1921</text>
<text x="95" y="212" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#1f2937">CCP founded</text>
<line x1="134" y1="111" x2="134" y2="170" stroke="#334155"/>
<text x="134" y="95" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1f2937">1927</text>
<text x="134" y="107" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#1f2937">Shanghai Massacre</text>
<line x1="183" y1="178" x2="183" y2="229" stroke="#334155"/>
<text x="183" y="240" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1f2937">1934–35</text>
<text x="183" y="252" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#1f2937">Long March</text>
<line x1="225" y1="146" x2="225" y2="162" stroke="#334155"/>
<text x="225" y="130" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1f2937">1937–45</text>
<text x="225" y="142" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#1f2937">War with Japan</text>
<line x1="267" y1="178" x2="267" y2="189" stroke="#334155"/>
<text x="267" y="200" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1f2937">1946–49</text>
<text x="267" y="212" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#1f2937">Civil War</text>
<line x1="277" y1="111" x2="277" y2="162" stroke="#334155"/>
<text x="290" y="95" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1f2937">1 Oct 1949</text>
<text x="290" y="107" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#1f2937">People's Republic</text>
<line x1="348" y1="178" x2="348" y2="229" stroke="#334155"/>
<text x="348" y="240" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1f2937">1958–62</text>
<text x="348" y="252" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#1f2937">Great Leap Forward</text>
<text x="348" y="264" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#1f2937">(famine 1959–61)</text>
<line x1="420" y1="146" x2="420" y2="162" stroke="#334155"/>
<text x="418" y="130" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1f2937">1966–76</text>
<text x="418" y="142" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#1f2937">Cultural Revolution</text>
<line x1="452" y1="178" x2="452" y2="189" stroke="#334155"/>
<text x="462" y="200" text-anchor="end" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1f2937">1976</text>
<text x="462" y="212" text-anchor="end" font-family="sans-serif" font-size="10" fill="#1f2937">Mao dies</text>
<text x="10" y="290" font-family="sans-serif" font-size="10" fill="#1f2937">Mao was 55 when he founded the People's Republic, and led it for 27 years.</text>
</svg>`;

const WHY_WON = `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Why the Communists won in 1949: Japan's invasion weakened both sides but hurt the Guomindang most. Communist strengths on the left, Guomindang weaknesses on the right, both leading to the People's Republic of China on 1 October 1949.">
<defs><marker id="mc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#334155"/></marker></defs>
<rect x="110" y="8" width="260" height="44" rx="6" fill="#fde68a" stroke="#334155"/>
<text x="240" y="26" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1f2937">Japan's invasion, 1937–45</text>
<text x="240" y="42" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#1f2937">hit the Guomindang hardest</text>
<rect x="8" y="70" width="222" height="122" rx="6" fill="#fecaca" stroke="#334155"/>
<text x="119" y="88" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1f2937">COMMUNIST STRENGTHS</text>
<text x="16" y="106" font-family="sans-serif" font-size="10" fill="#1f2937">Land reform won peasant support</text>
<text x="16" y="122" font-family="sans-serif" font-size="10" fill="#1f2937">Guerrilla war: seen as patriots</text>
<text x="16" y="138" font-family="sans-serif" font-size="10" fill="#1f2937">Disciplined army and party</text>
<text x="16" y="154" font-family="sans-serif" font-size="10" fill="#1f2937">Mao's strategy and propaganda</text>
<text x="16" y="170" font-family="sans-serif" font-size="10" fill="#1f2937">Captured weapons in Manchuria</text>
<rect x="250" y="70" width="222" height="122" rx="6" fill="#bae6fd" stroke="#334155"/>
<text x="361" y="88" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1f2937">GUOMINDANG WEAKNESSES</text>
<text x="258" y="106" font-family="sans-serif" font-size="10" fill="#1f2937">Corruption and harsh conscription</text>
<text x="258" y="122" font-family="sans-serif" font-size="10" fill="#1f2937">Hyperinflation ruined savers</text>
<text x="258" y="138" font-family="sans-serif" font-size="10" fill="#1f2937">Best troops lost fighting Japan</text>
<text x="258" y="154" font-family="sans-serif" font-size="10" fill="#1f2937">Poor generals; mass defections</text>
<text x="258" y="170" font-family="sans-serif" font-size="10" fill="#1f2937">Lost middle-class support</text>
<line x1="200" y1="52" x2="140" y2="68" stroke="#334155" stroke-width="1.5" marker-end="url(#mc-arrow)"/>
<line x1="280" y1="52" x2="340" y2="68" stroke="#334155" stroke-width="1.5" marker-end="url(#mc-arrow)"/>
<line x1="119" y1="192" x2="200" y2="228" stroke="#334155" stroke-width="1.5" marker-end="url(#mc-arrow)"/>
<line x1="361" y1="192" x2="280" y2="228" stroke="#334155" stroke-width="1.5" marker-end="url(#mc-arrow)"/>
<rect x="90" y="230" width="300" height="50" rx="6" fill="#bbf7d0" stroke="#1f2937" stroke-width="2"/>
<text x="240" y="250" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1f2937">1 October 1949: People's Republic of China</text>
<text x="240" y="267" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#1f2937">Chiang Kai-shek's government retreats to Taiwan</text>
<text x="8" y="296" font-family="sans-serif" font-size="10" fill="#1f2937">Historians debate which side mattered more: CCP strength or GMD weakness.</text>
</svg>`;

export const extras: TopicExtras = {
  hook: "In October 1934 about 86,000 Communist soldiers marched out of their base in Jiangxi to escape encirclement. A year later fewer than 10,000 of them reached the north-west — yet that near-disaster became the founding legend of the party that has governed China since 1949. How do you turn a retreat into a triumph?",
  didYouKnow: [
    "In 1918–19 the young Mao worked as an **assistant in the Peking University library**, under the librarian Li Dazhao — one of the founders of Chinese communism.",
    "Only **13 Chinese delegates** attended the first congress of the Chinese Communist Party in Shanghai in July 1921. When police became suspicious, they finished the meeting on a boat on a lake in nearby Jiaxing. Mao was one of the 13.",
    "Much of the world first heard of Mao through **Red Star Over China** (1937) by the American journalist Edgar Snow, who interviewed him in the north-west in 1936. Mao checked parts of the interviews before they were published.",
    "In the 1958 'Four Pests' campaign, people banged pots and pans so that **sparrows** could not land, until they dropped from exhaustion. With fewer sparrows, insect pests increased, and in 1960 sparrows were taken off the list and replaced by bedbugs.",
    "Dong Xiwen's famous painting *The Founding Ceremony of the Nation* (1953) was **repainted more than once** to remove leaders who had fallen out of favour, such as Gao Gang and Liu Shaoqi. Later versions restored them.",
    "Liu Shaoqi was China's **head of state** when the Cultural Revolution began. He was attacked by Red Guards, expelled from the party and died in detention in 1969. In 1980 the party officially cleared his name.",
  ],
  activities: [
    {
      title: "Oral history: interview an older relative",
      emoji: "🎙️",
      materials: ["A phone to record audio (ask permission first)", "A notebook and pen", "A list of 6–8 questions"],
      steps: [
        "Choose a grandparent, older relative or family friend and ask if they would be happy to talk about life when they were your age. Let them choose what to share — some memories may be painful.",
        "Write open questions: What was school like? What did your family eat? What news do you remember? What changed most during your life? (If your family has links to China, you could ask about the 1950s–70s — gently.)",
        "Record the conversation (with permission) or take notes. Ask follow-ups: 'How do you know?' 'How did you feel?'",
        "Afterwards, judge your source with NOP: what is its Nature (a memory told years later), Origin (who, and what did they see?) and Purpose (why might they tell it this way)?",
        "Find one fact from the interview you could check in a book or online, and check it.",
      ],
      history: "Much of what we know about the Great Famine and the Cultural Revolution comes from oral history — survivors' memories, gathered by journalists like Yang Jisheng and historians decades later, often because official records were hidden. Oral history is precious evidence of ordinary lives, but memory can fade or change, so historians cross-reference it with documents.",
    },
    {
      title: "Measure the Long March",
      emoji: "🧵",
      materials: ["A map of China (atlas, printout, or a map app)", "A piece of string about 1 m long", "A ruler", "A pen"],
      steps: [
        "Find these places on the map: Ruijin (Jiangxi), Zunyi (Guizhou), Luding (Sichuan), Songpan (Sichuan) and Yan'an (Shaanxi).",
        "Lay the string along a route that joins them in order: Ruijin → Zunyi → south-west towards Kunming → north to Luding → Songpan → Yan'an.",
        "Measure the string and convert with the map's scale bar. Write down your distance.",
        "Compare: the Communist Party's official figure is 25,000 li (about 12,500 km); the figure often quoted is about 10,000 km; two British researchers who retraced the route in 2002–03 estimated about 6,000 km for the main army.",
        "Discuss: why might the numbers differ so much? (Zig-zags, different columns, mountains — and the value of a heroic number for propaganda.)",
      ],
      history: "The Long March really was an epic of endurance, but its story was shaped from the start: in December 1935 Mao called it 'a manifesto, a propaganda force, a seeding-machine'. Measuring it yourself shows how one 'fact' can have several values — and why historians ask who produced a figure, and why.",
    },
  ],
  bonusDiagrams: [
    {
      title: "China 1911–1976 at a glance",
      svg: TIMELINE,
      caption: "Drawn to scale: notice how long the period of war (1937–49) lasted, and how the Great Leap and the Cultural Revolution came within ten years of each other.",
    },
    {
      title: "Why did the Communists win the civil war?",
      svg: WHY_WON,
      caption: "Use this to weigh factors: was it mainly Communist strength, Guomindang weakness, or the war with Japan that decided 1949?",
    },
  ],
  story: {
    title: "The bridge at Luding: legend and evidence",
    story: "On 29 May 1935 the Red Army reached the Luding Bridge, thirteen iron chains slung across the roaring Dadu River in western Sichuan. In the official story, the planks had been removed and enemy machine guns covered the crossing — so 22 volunteers crawled across the bare chains under fire and seized the far bank, saving the whole army.\n\nThe scene became one of the most famous in Chinese films, paintings and textbooks. But some writers who later interviewed local villagers, such as the historian Sun Shuyun, found accounts suggesting the fighting was much smaller than the legend; a few authors claim there was hardly a battle at all, while others defend the official version. What everyone agrees on: the Red Army did cross the Dadu at Luding and escaped a trap. How much of the drama happened is a lesson in how legends are made.",
  },
};
