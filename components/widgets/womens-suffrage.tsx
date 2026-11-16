"use client";
import { useState } from "react";
import { WidgetFrame, Segmented, Readout, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// 1. Suffragists vs suffragettes: tactics board
// ---------------------------------------------------------------------------

type Who = "suffragists" | "suffragettes" | "both";
type Verdict = "helped" | "mixed" | "hindered";

interface Tactic {
  id: string;
  label: string;
  emoji: string;
  who: Who;
  whoNote: string;
  when: string;
  happened: string;
  helped: string;
  hindered: string;
  verdict: Verdict;
  verdictNote: string;
}

const TACTICS: Tactic[] = [
  {
    id: "petitions",
    label: "Petitions",
    emoji: "📝",
    who: "suffragists",
    whoNote: "Peaceful campaigners — long before the NUWSS existed, and then the NUWSS itself.",
    when: "From 1866",
    happened: "In 1866 John Stuart Mill presented a petition signed by about 1,500 women. Petitions followed for decades.",
    helped: "Kept the question in front of Parliament and showed that thousands of women wanted the vote.",
    hindered: "Easy for MPs and newspapers to ignore: in 1867 Mill's amendment lost by 196 votes to 73, and no national vote was won for over fifty years.",
    verdict: "mixed",
    verdictNote: "Necessary groundwork, but on its own it achieved little.",
  },
  {
    id: "lobbying",
    label: "Lobbying MPs",
    emoji: "🤝",
    who: "suffragists",
    whoNote: "The NUWSS, led by Millicent Fawcett, worked on MPs of every party.",
    when: "1897–1918",
    happened: "Supporters in all parties backed the Conciliation Bills (1910–12). In 1917 a cross-party Speaker's Conference recommended votes for some women.",
    helped: "When the chance came in 1917–18, enough MPs in every party were ready to vote yes.",
    hindered: "Slow — Asquith's government blocked every bill before 1914.",
    verdict: "helped",
    verdictNote: "Many historians see this patient work as the reason MPs said yes in 1918.",
  },
  {
    id: "marches",
    label: "Peaceful marches",
    emoji: "🚶‍♀️",
    who: "suffragists",
    whoNote: "NUWSS marches, carefully peaceful and respectable.",
    when: "1907 and 1913",
    happened: "The ‘Mud March’ (February 1907): more than 3,000 women marched through London in pouring rain. The Great Pilgrimage (1913): marchers walked from all over Britain to a huge rally in Hyde Park.",
    helped: "Showed mass support from ordinary, law-abiding women — and in 1913 showed that most campaigners were not militants.",
    hindered: "Polite marches got less coverage than smashed windows.",
    verdict: "helped",
    verdictNote: "Built a respectable image that made supporting women's votes look safe.",
  },
  {
    id: "eff",
    label: "Backing Labour",
    emoji: "🗳️",
    who: "suffragists",
    whoNote: "The NUWSS's Election Fighting Fund.",
    when: "From 1912",
    happened: "The NUWSS raised money to support Labour candidates, because Labour backed votes for women and the Liberal government did not.",
    helped: "Put pressure on the Liberals and tied a growing party firmly to the cause.",
    hindered: "Upset some Liberal supporters of the NUWSS.",
    verdict: "helped",
    verdictNote: "A shrewd political move that used elections rather than law-breaking.",
  },
  {
    id: "heckling",
    label: "Heckling",
    emoji: "📣",
    who: "suffragettes",
    whoNote: "The WSPU's first militant tactic.",
    when: "From 1905",
    happened: "In October 1905 Christabel Pankhurst and Annie Kenney interrupted a Liberal meeting in Manchester. They were arrested and chose prison rather than a fine.",
    helped: "Instant publicity: newspapers that had ignored petitions reported the story.",
    hindered: "Many people saw it as rude and ‘unwomanly’.",
    verdict: "mixed",
    verdictNote: "Brilliant for publicity; less good for winning over MPs.",
  },
  {
    id: "rallies",
    label: "Mass rallies",
    emoji: "🏟️",
    who: "both",
    whoNote: "Both groups held huge rallies; the WSPU's ‘Women's Sunday’ was one of the biggest.",
    when: "1908 onwards",
    happened: "On ‘Women's Sunday’ (June 1908) the WSPU filled Hyde Park with one of the largest crowds London had seen. Asquith did not change his mind.",
    helped: "Proved the movement had enormous support.",
    hindered: "When even huge peaceful rallies were ignored, some suffragettes concluded that only law-breaking would work — and stones were thrown at Downing Street windows days later.",
    verdict: "mixed",
    verdictNote: "Impressive, but it showed the government could ignore numbers.",
  },
  {
    id: "windows",
    label: "Window smashing",
    emoji: "🪨",
    who: "suffragettes",
    whoNote: "WSPU militants.",
    when: "1908–1912",
    happened: "In March 1912 suffragettes smashed shop windows across London's West End. Later that month the third Conciliation Bill was defeated by 14 votes.",
    helped: "Made votes for women impossible to ignore.",
    hindered: "Some MPs said they would not ‘reward violence’ — though the earlier bills had been blocked before this.",
    verdict: "mixed",
    verdictNote: "Historians disagree: it may have cost the 1912 bill some votes.",
  },
  {
    id: "arson",
    label: "Arson and bombs",
    emoji: "🔥",
    who: "suffragettes",
    whoNote: "WSPU militants; the leaders said they did not aim to endanger life.",
    when: "1912–1914",
    happened: "Empty buildings, a house being built for Lloyd George (1913), post boxes, golf courses and paintings were attacked.",
    helped: "Kept up pressure on the government when nothing else seemed to work.",
    hindered: "Lost public sympathy and gave opponents their best argument: that women were unfit to vote.",
    verdict: "hindered",
    verdictNote: "Many historians (e.g. Martin Pugh) think this harmed the cause; others (e.g. June Purvis) defend the suffragettes' courage.",
  },
  {
    id: "hunger",
    label: "Hunger strikes",
    emoji: "🍽️",
    who: "suffragettes",
    whoNote: "WSPU prisoners, starting with Marion Wallace Dunlop.",
    when: "From July 1909",
    happened: "The government responded with force-feeding, then the ‘Cat and Mouse Act’ (1913) released weak hunger strikers and re-arrested them later.",
    helped: "Force-feeding caused public outrage and made the government look cruel — winning sympathy.",
    hindered: "Did not change Asquith's mind before the war.",
    verdict: "helped",
    verdictNote: "One of the most effective ways the suffragettes won sympathy.",
  },
  {
    id: "census",
    label: "Census boycott",
    emoji: "📋",
    who: "suffragettes",
    whoNote: "Organised by the militant groups (the WSPU and the Women's Freedom League).",
    when: "April 1911",
    happened: "“No vote, no census”: women stayed out all night or refused to fill in the form. Emily Wilding Davison hid in a cupboard in Parliament. Thousands of women are thought to have avoided being counted, though the exact number is uncertain.",
    helped: "A protest that broke the law without hurting anyone or damaging property.",
    hindered: "The census still worked, and the boycott changed no votes in Parliament.",
    verdict: "mixed",
    verdictNote: "Clever and peaceful, but small in its effect.",
  },
  {
    id: "war",
    label: "War work",
    emoji: "🏭",
    who: "both",
    whoNote: "The WSPU stopped militancy in August 1914; the NUWSS also supported the war effort and organised relief work.",
    when: "1914–1918",
    happened: "Nearly a million women worked in munitions by 1918; others drove buses, farmed and nursed. In 1917 Asquith changed his mind.",
    helped: "Undermined the claim that women were weak or belonged only at home, and ended the militancy that had annoyed MPs.",
    hindered: "Most munitions workers were under 30 — so they still could not vote in 1918.",
    verdict: "helped",
    verdictNote: "More an opportunity than a reward: the war forced a new voting law, and attitudes had changed.",
  },
];

const WHO_LABEL: Record<Who, string> = { suffragists: "Suffragists (NUWSS)", suffragettes: "Suffragettes (WSPU)", both: "Both" };
const VERDICT_LABEL: Record<Verdict, string> = { helped: "Helped", mixed: "Mixed", hindered: "Hindered" };

function TacticsBoard() {
  const [selected, setSelected] = useState(TACTICS[0].id);
  const [whoGuess, setWhoGuess] = useState<Record<string, Who>>({});
  const [verdicts, setVerdicts] = useState<Record<string, Verdict>>({});
  const t = TACTICS.find((x) => x.id === selected) ?? TACTICS[0];
  const guessed = whoGuess[t.id];
  const myVerdict = verdicts[t.id];

  const guessedList = TACTICS.filter((x) => whoGuess[x.id]);
  const right = guessedList.filter((x) => whoGuess[x.id] === x.who).length;
  const judged = TACTICS.filter((x) => verdicts[x.id]);

  // Board: helped / mixed / hindered columns, rows for each group, showing judged tactics.
  const cols: Verdict[] = ["helped", "mixed", "hindered"];

  return (
    <WidgetFrame
      title="Suffragists vs suffragettes: tactics board"
      tryThis={[
        "Before you reveal each tactic, guess: **suffragists, suffragettes or both?** Can you get all 11?",
        "Judge every tactic: helped, mixed or hindered? Then look at the board — which group's tactics cluster on the **helped** side?",
        "Which tactic was followed, in the **same month**, by a bill for women's votes losing by just 14 votes? Does that prove it hindered the cause?",
        "Pick the one tactic you think mattered most for 1918, and write one sentence of evidence for it.",
      ]}
      caption={
        judged.length === TACTICS.length ? (
          <p>
            <strong>Your board is complete.</strong> Notice that the suffragists' slow, legal tactics mostly built support among MPs, while the suffragettes' tactics won headlines and sympathy but, from 1912, also gave opponents an argument. Most historians now link the two: the suffragettes made the issue impossible to ignore, and the suffragists made saying yes look safe — and the war gave Parliament the chance.
          </p>
        ) : myVerdict ? (
          <p>
            <strong>Model judgement — {VERDICT_LABEL[t.verdict]}:</strong> {t.verdictNote}{" "}
            {myVerdict === t.verdict ? "Your verdict matches." : "Your verdict differs — that is fine in history if you can back it with evidence."}
          </p>
        ) : guessed ? (
          <p>
            <strong>{t.label}</strong> was used by <strong>{WHO_LABEL[t.who].toLowerCase()}</strong>. {t.whoNote} Now weigh the evidence and give your verdict.
          </p>
        ) : (
          <p>
            Pick a tactic, then guess who used it. Suffragists (NUWSS, 1897) stayed peaceful and legal; suffragettes (WSPU, 1903) used ‘Deeds not words’. Same goal — votes for women — different methods.
          </p>
        )
      }
    >
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {TACTICS.map((x) => {
          const g = whoGuess[x.id];
          const mark = g ? (g === x.who ? "✓" : "✗") : "";
          return (
            <button
              key={x.id}
              type="button"
              onClick={() => setSelected(x.id)}
              aria-pressed={x.id === selected}
              className={`min-h-[44px] rounded-xl border px-2 py-2 text-left text-sm font-bold transition ${x.id === selected ? "border-brand bg-brand-soft text-ink" : "border-line bg-surface text-ink-2 hover:text-ink"}`}
            >
              <span aria-hidden className="mr-1">{x.emoji}</span>
              {x.label}
              {mark ? <span className={`ml-1 ${mark === "✓" ? "text-good" : "text-bad"}`} aria-label={mark === "✓" ? "guessed right" : "guessed wrong"}>{mark}</span> : null}
            </button>
          );
        })}
      </div>

      <div className="mt-4 rounded-xl border border-line bg-surface p-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-lg bg-brand px-2 py-1 text-xs font-extrabold text-brand-ink">{t.when}</span>
          <span className="text-base font-extrabold text-ink">
            <span aria-hidden className="mr-1">{t.emoji}</span>
            {t.label}
          </span>
        </div>

        {!guessed ? (
          <div className="mt-3">
            <p className="text-sm font-semibold text-ink-2">Who used this tactic?</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {(["suffragists", "suffragettes", "both"] as Who[]).map((w) => (
                <button key={w} type="button" className="btn btn-secondary min-h-[44px]" onClick={() => setWhoGuess((m) => ({ ...m, [t.id]: w }))}>
                  {WHO_LABEL[w]}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-3 space-y-2 text-sm text-ink">
            <p className={`font-bold ${guessed === t.who ? "text-good" : "text-bad"}`} aria-live="polite">
              {guessed === t.who ? "Right" : `Not quite — you said ${WHO_LABEL[guessed].toLowerCase()}`}: {WHO_LABEL[t.who]}.
            </p>
            <p>
              <strong>What happened:</strong> {t.happened}
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="rounded-lg bg-good-soft p-2">
                <div className="text-xs font-extrabold uppercase tracking-wide text-good">Evidence it helped</div>
                <p className="mt-1">{t.helped}</p>
              </div>
              <div className="rounded-lg bg-bad-soft p-2">
                <div className="text-xs font-extrabold uppercase tracking-wide text-bad">Evidence it hindered</div>
                <p className="mt-1">{t.hindered}</p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-ink-2">Your verdict:</p>
              <div className="mt-1">
                <Segmented<Verdict | "none">
                  label="Your verdict on this tactic"
                  value={myVerdict ?? "none"}
                  onChange={(v) => {
                    if (v !== "none") setVerdicts((m) => ({ ...m, [t.id]: v }));
                  }}
                  options={[
                    { value: "helped", label: "Helped" },
                    { value: "mixed", label: "Mixed" },
                    { value: "hindered", label: "Hindered" },
                  ]}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <Readout label="Who-used-it guesses" value={`${right} / ${guessedList.length}`} tone={guessedList.length && right === guessedList.length ? "good" : "brand"} />
        <Readout label="Tactics judged" value={`${judged.length} / ${TACTICS.length}`} tone="ink" />
      </div>

      <div className="mt-4 overflow-hidden rounded-xl border border-line" role="table" aria-label="Your verdict board: tactics you have judged, by group and verdict">
        <div className="grid grid-cols-[5.5rem_1fr_1fr_1fr] bg-surface-2 text-xs font-extrabold text-ink-2" role="row">
          <span className="p-2" role="columnheader">Group</span>
          {cols.map((c) => (
            <span key={c} className={`p-2 ${c === "helped" ? "text-good" : c === "hindered" ? "text-bad" : ""}`} role="columnheader">
              {VERDICT_LABEL[c]}
            </span>
          ))}
        </div>
        {(["suffragists", "suffragettes", "both"] as Who[]).map((w) => (
          <div key={w} className="grid grid-cols-[5.5rem_1fr_1fr_1fr] border-t border-line text-xs" role="row">
            <span className="p-2 font-bold text-ink" role="rowheader">{w === "both" ? "Both" : w === "suffragists" ? "Suffragists" : "Suffragettes"}</span>
            {cols.map((c) => (
              <span key={c} className="flex flex-wrap gap-1 p-2" role="cell">
                {TACTICS.filter((x) => x.who === w && verdicts[x.id] === c && whoGuess[x.id]).map((x) => (
                  <span key={x.id} className="rounded bg-surface-2 px-1.5 py-0.5 text-ink" title={x.label}>
                    <span aria-hidden>{x.emoji}</span> {x.label}
                  </span>
                ))}
              </span>
            ))}
          </div>
        ))}
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// 2. Who could vote? 1832–1928
// ---------------------------------------------------------------------------

interface ReformStep {
  year: number;
  act: string;
  rule: string;
  adults: number;
  men: number;
  women: number;
  /** Women's share of the electorate, %. */
  womenShare: number;
  menLabel: string;
  womenLabel: string;
  adultsLabel: string;
}

const REFORMS: ReformStep[] = [
  { year: 1832, act: "Great Reform Act", rule: "Wealthier middle-class men — in towns, men in homes worth £10 a year. Voters must be “male persons”.", adults: 7, men: 14, women: 0, womenShare: 0, adultsLabel: "about 7%", menLabel: "about 1 in 7", womenLabel: "none" },
  { year: 1867, act: "Second Reform Act", rule: "Male householders in towns — many skilled working men.", adults: 16, men: 32, women: 0, womenShare: 0, adultsLabel: "about 16%", menLabel: "about 1 in 3", womenLabel: "none" },
  { year: 1884, act: "Third Reform Act", rule: "The same householder rules extended to the countryside.", adults: 29, men: 60, women: 0, womenShare: 0, adultsLabel: "about 29%", menLabel: "about 60%", womenLabel: "none" },
  { year: 1918, act: "Representation of the People Act", rule: "All men over 21 (19 if they had served). Women over 30 who met a property qualification, or whose husbands did — about 8.4 million women.", adults: 74, men: 95, women: 55, womenShare: 40, adultsLabel: "about 74%", menLabel: "almost all", womenLabel: "just over half" },
  { year: 1928, act: "Equal Franchise Act", rule: "Everyone over 21, on equal terms. First used at the 1929 election: about 29 million voters.", adults: 97, men: 97, women: 97, womenShare: 52, adultsLabel: "about 97%", menLabel: "almost all", womenLabel: "almost all" },
];

type Answer = "yes" | "no";
interface Persona {
  id: string;
  name: string;
  emoji: string;
  detail: string;
  /** Could they vote in a general election under each year's rules? Keyed by Reform year. */
  could: Record<number, Answer>;
  why: Record<number, string>;
}

const PERSONAS: Persona[] = [
  {
    id: "owner",
    name: "Mr Harris, 45",
    emoji: "🎩",
    detail: "Factory owner; owns a large house in Manchester.",
    could: { 1832: "yes", 1867: "yes", 1884: "yes", 1918: "yes", 1928: "yes" },
    why: { 1832: "A wealthy man in a town house worth well over £10 a year — exactly who the 1832 Act was for.", 1867: "Already qualified.", 1884: "Already qualified.", 1918: "All men over 21.", 1928: "Everyone over 21." },
  },
  {
    id: "worker",
    name: "Tom, 30",
    emoji: "🔧",
    detail: "Skilled worker; rents a small terraced house in a town.",
    could: { 1832: "no", 1867: "yes", 1884: "yes", 1918: "yes", 1928: "yes" },
    why: { 1832: "Most working men's homes were worth less than £10 a year.", 1867: "The 1867 Act gave the vote to male householders in towns.", 1884: "Still a town householder.", 1918: "All men over 21.", 1928: "Everyone over 21." },
  },
  {
    id: "labourer",
    name: "Joseph, 35",
    emoji: "🌾",
    detail: "Farm labourer; rents a cottage in the countryside.",
    could: { 1832: "no", 1867: "no", 1884: "yes", 1918: "yes", 1928: "yes" },
    why: { 1832: "Not wealthy enough.", 1867: "The 1867 householder vote was for towns, not the countryside.", 1884: "The 1884 Act extended the householder vote to the countryside.", 1918: "All men over 21.", 1928: "Everyone over 21." },
  },
  {
    id: "son",
    name: "William, 22",
    emoji: "🧢",
    detail: "Lives in his parents' house; does not rent or own a home.",
    could: { 1832: "no", 1867: "no", 1884: "no", 1918: "yes", 1928: "yes" },
    why: { 1832: "Not a property holder.", 1867: "Not a householder — sons living at home were usually left out.", 1884: "Still not a householder: about 40% of men were in his position.", 1918: "The property rule for men was scrapped — all men over 21 could vote.", 1928: "Everyone over 21." },
  },
  {
    id: "widow",
    name: "Mrs Green, 50",
    emoji: "🏠",
    detail: "Widow; owns her house and pays rates.",
    could: { 1832: "no", 1867: "no", 1884: "no", 1918: "yes", 1928: "yes" },
    why: { 1832: "Women were barred, however much property they owned.", 1867: "Mill's attempt to change “man” to “person” was voted down.", 1884: "Still no women. (From 1869 she could vote in town council elections, though.)", 1918: "Over 30 and meets the property qualification.", 1928: "Everyone over 21." },
  },
  {
    id: "wife",
    name: "Edith, 35",
    emoji: "👒",
    detail: "Married to a man who rents their home.",
    could: { 1832: "no", 1867: "no", 1884: "no", 1918: "yes", 1928: "yes" },
    why: { 1832: "No women.", 1867: "No women.", 1884: "No women.", 1918: "Over 30, and her husband meets the property qualification.", 1928: "Everyone over 21." },
  },
  {
    id: "munitions",
    name: "Lily, 24",
    emoji: "🏭",
    detail: "Munitions worker; lodges in a rented room.",
    could: { 1832: "no", 1867: "no", 1884: "no", 1918: "no", 1928: "yes" },
    why: { 1832: "No women.", 1867: "No women.", 1884: "No women.", 1918: "Under 30 — despite her war work. The classic 1918 trap.", 1928: "Equal voting at 21 at last." },
  },
  {
    id: "servant",
    name: "Mary, 33",
    emoji: "🧹",
    detail: "Unmarried domestic servant; lives in her employer's house.",
    could: { 1832: "no", 1867: "no", 1884: "no", 1918: "no", 1928: "yes" },
    why: { 1832: "No women.", 1867: "No women.", 1884: "No women.", 1918: "Over 30, but she has no property qualification of her own and no husband — so still excluded.", 1928: "Everyone over 21." },
  },
];

function WhoCouldVote() {
  const [idx, setIdx] = useState(0);
  const [preds, setPreds] = useState<Record<string, Answer>>({});
  const r = REFORMS[idx];
  const key = (p: Persona) => `${r.year}:${p.id}`;
  const predicted = PERSONAS.filter((p) => preds[key(p)]);
  const correct = predicted.filter((p) => preds[key(p)] === p.could[r.year]).length;

  const bars = [
    { id: "adults", label: "All adults", value: r.adults, text: r.adultsLabel, cls: "fill-ink-2" },
    { id: "men", label: "Men", value: r.men, text: r.menLabel, cls: "fill-info" },
    { id: "women", label: "Women", value: r.women, text: r.womenLabel, cls: "fill-brand" },
  ];
  const X0 = 80;
  const W = 300;

  return (
    <WidgetFrame
      title="Who could vote? 1832–1928"
      tryThis={[
        "Step to **1884**. Most men could vote now — but what share of ALL adults? Why so low?",
        "Before you reveal, predict whether **Lily, 24, a munitions worker**, could vote in 1918. Then 1928.",
        "Compare **1918 and 1928**: by how many percentage points did the share of adults who could vote rise?",
        "Find the one **man** who could only vote from 1918. Why had he been left out before?",
      ]}
      caption={
        <div className="space-y-2">
          <p>
            <strong>
              {r.year} — {r.act}:
            </strong>{" "}
            {r.rule}
          </p>
          <p>
            {r.year < 1918
              ? `Every voter was a man — and even so, ${r.year === 1884 ? "about 40%" : "most"} of men could not vote. Voting depended on property and class as well as sex.`
              : r.year === 1918
                ? "The biggest jump in British history — but not equality. Women had to be nine years older than men and meet a property test, which kept them to about 40% of voters (about 8.4 million of about 21 million)."
                : "Equal at last: women now made up just over half of voters. 1918 was the first time women voted; 1928 was the first time they voted on equal terms."}{" "}
            Figures are historians' estimates and differ slightly between sources.
          </p>
        </div>
      }
    >
      <div className="flex flex-wrap gap-1" role="group" aria-label="Choose a Reform Act">
        {REFORMS.map((s, i) => (
          <button
            key={s.year}
            type="button"
            onClick={() => setIdx(i)}
            aria-pressed={i === idx}
            className={`min-h-[44px] rounded-lg px-3 text-sm font-bold transition ${i === idx ? "bg-brand text-brand-ink" : "bg-surface-2 text-ink-2 hover:text-ink"}`}
          >
            {s.year}
          </button>
        ))}
      </div>

      <svg
        viewBox="0 0 480 190"
        className="mt-3 h-auto w-full"
        role="img"
        aria-label={`After ${r.year}: ${bars.map((b) => `${b.label} ${b.text}`).join(", ")}; women were ${r.womenShare}% of voters. Bars drawn to scale out of 100%.`}
      >
        <text x={10} y={16} fontSize={12} fontWeight={700} className="fill-ink">
          Share who could vote after {r.year} (to scale)
        </text>
        {[0, 25, 50, 75, 100].map((t) => (
          <g key={t}>
            <line x1={X0 + (t / 100) * W} x2={X0 + (t / 100) * W} y1={26} y2={118} className="stroke-line" strokeWidth={1} />
            <text x={X0 + (t / 100) * W} y={130} fontSize={9} textAnchor="middle" className="fill-ink-2">
              {t}%
            </text>
          </g>
        ))}
        {bars.map((b, i) => (
          <g key={b.id}>
            <text x={X0 - 6} y={46 + i * 30} fontSize={11} textAnchor="end" className="fill-ink">
              {b.label}
            </text>
            <rect x={X0} y={32 + i * 30} width={W} height={20} rx={4} className="fill-surface-2" />
            {b.value > 0 ? <rect x={X0} y={32 + i * 30} width={(b.value / 100) * W} height={20} rx={4} className={b.cls} /> : null}
            <text x={X0 + W + 6} y={46 + i * 30} fontSize={11} className="fill-ink" fontWeight={700}>
              {b.text}
            </text>
          </g>
        ))}
        <text x={10} y={152} fontSize={11} fontWeight={700} className="fill-ink">
          Who the voters were
        </text>
        <rect x={X0} y={160} width={W} height={18} rx={4} className="fill-info" />
        {r.womenShare > 0 ? <rect x={X0} y={160} width={(r.womenShare / 100) * W} height={18} rx={4} className="fill-brand" /> : null}
        {r.womenShare > 0 ? <line x1={X0 + (r.womenShare / 100) * W} x2={X0 + (r.womenShare / 100) * W} y1={160} y2={178} className="stroke-surface" strokeWidth={2} /> : null}
        <text x={X0 + W + 6} y={173} fontSize={11} className="fill-ink">
          {r.womenShare === 0 ? "all men" : `women ≈ ${r.womenShare}%`}
        </text>
      </svg>

      <div className="mt-2 grid grid-cols-3 gap-2">
        <Readout label="Adults" value={r.adultsLabel.replace("about ", "≈ ")} tone="ink" />
        <Readout label="Women voting" value={r.womenLabel} tone={r.women === 0 ? "bad" : "good"} />
        <Readout label={`Your ${r.year} predictions`} value={`${correct} / ${predicted.length}`} tone="brand" />
      </div>

      <h4 className="mt-4 text-sm font-extrabold text-ink">Could they vote in a general election after {r.year}? Predict, then check.</h4>
      <div className="mt-2 grid gap-2 sm:grid-cols-2">
        {PERSONAS.map((p) => {
          const pred = preds[key(p)];
          const truth = p.could[r.year];
          return (
            <div key={p.id} className="rounded-xl border border-line bg-surface p-3">
              <div className="text-sm font-extrabold text-ink">
                <span aria-hidden className="mr-1">{p.emoji}</span>
                {p.name}
              </div>
              <p className="text-xs text-ink-2">{p.detail}</p>
              {!pred ? (
                <div className="mt-2 flex gap-2">
                  {(["yes", "no"] as Answer[]).map((a) => (
                    <button key={a} type="button" className="btn btn-secondary min-h-[40px] flex-1" onClick={() => setPreds((m) => ({ ...m, [key(p)]: a }))} aria-label={`Predict ${p.name} ${a === "yes" ? "could" : "could not"} vote after ${r.year}`}>
                      {a === "yes" ? "Can vote" : "Can't vote"}
                    </button>
                  ))}
                </div>
              ) : (
                <p className="mt-2 text-xs text-ink" aria-live="polite">
                  <strong className={pred === truth ? "text-good" : "text-bad"}>
                    {pred === truth ? "✓ " : "✗ "}
                    {truth === "yes" ? "Could vote." : "Could not vote."}
                  </strong>{" "}
                  {p.why[r.year]}
                </p>
              )}
            </div>
          );
        })}
      </div>
      <p className="mt-2 text-xs text-ink-2">Personas are invented but typical; the real rules had more conditions (for example, how long you had lived at an address).</p>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "tactics-board",
    title: "Suffragists vs suffragettes: tactics board",
    blurb: "Pick a tactic, guess who used it, weigh the evidence and decide: did it help or hinder the cause?",
    Component: TacticsBoard,
  },
  {
    id: "who-could-vote",
    title: "Who could vote? 1832–1928",
    blurb: "Step through the Reform Acts, watch the electorate grow to scale, and predict who could vote each time.",
    Component: WhoCouldVote,
  },
];
