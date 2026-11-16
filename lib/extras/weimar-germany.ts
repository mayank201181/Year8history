// Engagement extras for "Weimar Germany in Crisis" — separate from the audited content.
import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "In 1918 a loaf of bread in Berlin cost less than one mark. Five years later it cost about 200 billion. How can a country's money collapse like that — and what does it do to people's trust in democracy?",

  didYouKnow: [
    "The Weimar Republic is named after a small town, not a capital. Berlin was too dangerous in early 1919, so the new National Assembly met in the theatre in Weimar, the town of the poets Goethe and Schiller.",
    "German women voted for the first time in January 1919, on the same terms as men (from age 20), and 37 women were elected to the National Assembly. British women only won the vote on equal terms with men in 1928.",
    "In 1923 notes became so worthless that some people burned them in their stoves: a bundle of banknotes gave more heat than the firewood it could buy.",
    "The largest banknote Germany ever issued was worth 100 trillion marks (100,000,000,000,000). It was printed in 1924, just as the new currency was replacing the old marks.",
    "Gustav Stresemann shared the 1926 Nobel Peace Prize with France's foreign minister, Aristide Briand, for the Locarno Treaties — less than a decade after the two countries had been at war.",
    "Germany made the final payment on bonds linked to its First World War reparations on 3 October 2010 — 92 years after the war ended.",
  ],

  activities: [
    {
      title: "The 1923 market",
      emoji: "🍞",
      materials: ["Paper and scissors (to make banknotes)", "Pens", "5 small household items to 'sell' (an apple, a pencil, a sock…)", "A calculator", "2–4 players"],
      steps: [
        "Make banknotes: 20 notes marked '1,000 marks'. One player is the shopkeeper and puts a price of 1,000 marks on each item.",
        "Give each other player a role card: SAVER (puts 10,000 marks in an envelope 'bank' and can't touch it until the end), BORROWER (borrows 10,000 marks now and must repay 10,000 at any time), WORKER (paid 2,000 marks at the start of every round).",
        "Each round is 'a month in 1923'. At the start of every round the shopkeeper multiplies every price by 10. Wages only double.",
        "Players may buy items whenever they like. Play 5 rounds.",
        "At the end, the saver opens the envelope. Who could still buy anything? Who did best — and why?",
      ],
      history:
        "In 1923 prices rose so fast that money lost its value by the hour. Savers and pensioners were ruined, workers' wages could not keep up, but borrowers paid off debts with worthless money. Many middle-class Germans who lost everything never trusted the Weimar Republic again.",
    },
    {
      title: "The Reichstag in 100 beans",
      emoji: "🫘",
      materials: ["100 dried beans, rice grains, buttons or Lego bricks", "9 small cups or scraps of paper as labels", "Pen"],
      steps: [
        "Label the cups with the parties of July 1932 and count beans into each (each bean ≈ 6 seats): Nazis 38, SPD 22, Communists 15, Centre 12, Nationalists (DNVP) 6, Bavarian People's Party 3, DVP 1, State Party 1, others 2.",
        "A government needs a majority: 51 beans or more.",
        "Try to build a majority from parties that supported democracy (SPD, Centre, BVP, DVP, State Party). How close can you get?",
        "Now put the Nazis and Communists together. They have a majority — but both wanted to destroy the republic. Could they ever form a government?",
        "Decide: what would you do if you were President Hindenburg?",
      ],
      history:
        "Proportional representation gave many parties seats. By 1932 the parties that supported democracy no longer had a majority, while the Nazis and Communists together had over half the seats but refused to cooperate with anyone. Without a working majority, Chancellors relied on President Hindenburg's Article 48 decrees — and democracy stalled.",
    },
  ],

  bonusDiagrams: [
    {
      title: "Crisis, recovery, collapse: 1918–1933",
      svg: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three phases of the Weimar Republic: crisis 1918 to 1923, recovery 1924 to 1929, collapse 1929 to 1933, with key events in each">
<rect x="0" y="0" width="480" height="300" fill="#ffffff"/>
<g stroke="#334155" stroke-width="1">
<rect x="6" y="20" width="148" height="236" rx="10" fill="#ffffff"/>
<rect x="166" y="20" width="148" height="236" rx="10" fill="#ffffff"/>
<rect x="326" y="20" width="148" height="236" rx="10" fill="#ffffff"/>
<rect x="6" y="20" width="148" height="32" rx="10" fill="#fecaca"/>
<rect x="166" y="20" width="148" height="32" rx="10" fill="#bbf7d0"/>
<rect x="326" y="20" width="148" height="32" rx="10" fill="#fde68a"/>
</g>
<g fill="#334155">
<polygon points="156,32 164,36 156,40"/>
<polygon points="316,32 324,36 316,40"/>
</g>
<g font-family="sans-serif" fill="#1f2937">
<text x="80" y="41" font-size="12" font-weight="bold" text-anchor="middle">Crisis 1918–23</text>
<text x="240" y="41" font-size="12" font-weight="bold" text-anchor="middle">Recovery 1924–29</text>
<text x="400" y="41" font-size="12" font-weight="bold" text-anchor="middle">Collapse 1929–33</text>
</g>
<g font-family="sans-serif" font-size="10" fill="#1f2937">
<text x="14" y="74">1918 Kaiser goes;</text>
<text x="14" y="88">armistice signed</text>
<text x="14" y="108">1919 Spartacist rising</text>
<text x="14" y="128">1919 Versailles signed</text>
<text x="14" y="148">1920 Kapp Putsch</text>
<text x="14" y="168">1922 Rathenau murdered</text>
<text x="14" y="188">1923 Ruhr occupied</text>
<text x="14" y="208">1923 Hyperinflation</text>
<text x="14" y="228">1923 Munich Putsch</text>
<text x="174" y="74">Nov 1923 Rentenmark</text>
<text x="174" y="94">1924 Dawes Plan</text>
<text x="174" y="114">1925 Locarno Treaties</text>
<text x="174" y="134">1926 Joins League</text>
<text x="174" y="154">1928 Kellogg–Briand</text>
<text x="174" y="174">1929 Young Plan</text>
<text x="174" y="200" font-style="italic">But: built on loans</text>
<text x="174" y="214" font-style="italic">from American banks</text>
<text x="334" y="74">Oct 1929 Wall St Crash</text>
<text x="334" y="94">1930 Brüning rules</text>
<text x="334" y="108">by Article 48</text>
<text x="334" y="128">1930 Nazis: 107 seats</text>
<text x="334" y="148">1932 about 6 million</text>
<text x="334" y="162">unemployed</text>
<text x="334" y="182">Jul 1932 Nazis: 230</text>
<text x="334" y="202">Nov 1932 Nazis: 196</text>
<text x="334" y="222">Jan 1933 Hitler</text>
<text x="334" y="236">made Chancellor</text>
</g>
<text x="240" y="282" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">The recovery rested on American loans, so the 1929 Crash hit Germany hard.</text>
</svg>`,
      caption:
        "Weimar survived its first crisis (1918–23) and recovered — but the recovery depended on American money. When the loans were recalled after 1929, the crisis returned with the extremes far stronger.",
    },
    {
      title: "The Reichstag after the July 1932 election (drawn to scale)",
      svg: `<svg viewBox="0 0 480 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart of Reichstag seats in July 1932: Nazis 230, SPD 133, Communists 89, Centre 75, DNVP 37, BVP 22, others 11, DVP 7, State Party 4; total 608, majority 305">
<rect x="0" y="0" width="480" height="340" fill="#ffffff"/>
<text x="240" y="18" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle">Seats won, July 1932 (608 seats; majority = 305)</text>
<g stroke="#334155" stroke-width="1">
<rect x="125" y="30" width="322" height="18" fill="#fecaca"/>
<rect x="125" y="56" width="186.2" height="18" fill="#c7d2fe"/>
<rect x="125" y="82" width="124.6" height="18" fill="#fde68a"/>
<rect x="125" y="108" width="105" height="18" fill="#bbf7d0"/>
<rect x="125" y="134" width="51.8" height="18" fill="#bae6fd"/>
<rect x="125" y="160" width="30.8" height="18" fill="#bbf7d0"/>
<rect x="125" y="186" width="15.4" height="18" fill="#e5e7eb"/>
<rect x="125" y="212" width="9.8" height="18" fill="#c7d2fe"/>
<rect x="125" y="238" width="5.6" height="18" fill="#c7d2fe"/>
</g>
<g font-family="sans-serif" font-size="10" fill="#1f2937">
<text x="118" y="43" text-anchor="end">Nazis (NSDAP)</text>
<text x="118" y="69" text-anchor="end">Social Democrats</text>
<text x="118" y="95" text-anchor="end">Communists (KPD)</text>
<text x="118" y="121" text-anchor="end">Centre Party</text>
<text x="118" y="147" text-anchor="end">Nationalists (DNVP)</text>
<text x="118" y="173" text-anchor="end">Bavarian (BVP)</text>
<text x="118" y="199" text-anchor="end">Others</text>
<text x="118" y="225" text-anchor="end">People's Party (DVP)</text>
<text x="118" y="251" text-anchor="end">State Party (DStP)</text>
<text x="451" y="43">230</text>
<text x="315" y="69">133</text>
<text x="254" y="95">89</text>
<text x="234" y="121">75</text>
<text x="181" y="147">37</text>
<text x="160" y="173">22</text>
<text x="145" y="199">11</text>
<text x="139" y="225">7</text>
<text x="135" y="251">4</text>
</g>
<g stroke="#334155" stroke-width="1">
<rect x="12" y="282" width="172.5" height="22" fill="#fecaca"/>
<rect x="184.5" y="282" width="66.75" height="22" fill="#fde68a"/>
<rect x="251.25" y="282" width="99.75" height="22" fill="#c7d2fe"/>
<rect x="351" y="282" width="56.25" height="22" fill="#bbf7d0"/>
<rect x="407.25" y="282" width="16.5" height="22" fill="#bbf7d0"/>
<rect x="423.75" y="282" width="27.75" height="22" fill="#bae6fd"/>
<rect x="451.5" y="282" width="16.5" height="22" fill="#e5e7eb"/>
</g>
<line x1="240.75" y1="274" x2="240.75" y2="312" stroke="#1f2937" stroke-width="2" stroke-dasharray="4 2"/>
<g font-family="sans-serif" font-size="10" fill="#1f2937">
<text x="98" y="297" text-anchor="middle">Nazis</text>
<text x="218" y="297" text-anchor="middle">KPD</text>
<text x="301" y="297" text-anchor="middle">SPD</text>
<text x="379" y="297" text-anchor="middle">Centre</text>
<text x="244" y="270">majority line (305)</text>
<text x="240" y="328" text-anchor="middle">Nazis + Communists = 319 seats: a majority, but both wanted to end the republic</text>
</g>
</svg>`,
      caption:
        "Every bar is drawn to the same scale (1.4 px per seat above; the strip shows all 608 seats). No pro-democracy coalition could reach 305, while the two extremes together could block any government.",
    },
  ],

  story: {
    title: "The money that worked because people believed in it",
    story:
      "How do you rescue money that nobody trusts? In November 1923 Germany tried a bold experiment. From 15 November a new currency, the Rentenmark, was issued. It was not backed by gold — Germany had little left — but by a mortgage on the country's farmland and industry. One Rentenmark was worth 1 trillion old paper marks, and only a strictly limited number were printed. The banker Hjalmar Schacht, the new Currency Commissioner, refused to let the government print more. On 20 November the exchange rate was fixed at 4.2 trillion marks to the US dollar — and that same day the president of the Reichsbank, Rudolf Havenstein, whose presses had poured out the worthless notes, died suddenly. Within weeks prices stopped racing upwards. The new money worked largely because people decided to trust it.",
  },
};
