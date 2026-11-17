// ---------------------------------------------------------------------------
// Suggested self-marking ticks for WrittenQ responses.
// Pure helper shared by QuestionCard, content validators and unit tests.
// ---------------------------------------------------------------------------
import type { WrittenQ } from "./types.ts";

function normForMatch(s: string): string {
  return s
    .toLowerCase()
    .replace(/[*_`~>#|]/g, " ")
    .replace(/[“”"‘’'.,;:!?()\[\]{}—–-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Strip any contiguous run of >= minRun words in `ans` that appears verbatim
 * inside `stem`, so copying the question or source extract does not earn ticks.
 */
function stripVerbatimRuns(ans: string, stem: string, minRun = 4): { text: string; novelWords: number; totalWords: number } {
  const ansWords = normForMatch(ans).split(" ").filter(Boolean);
  const stemStr = ` ${normForMatch(stem)} `;
  if (!ansWords.length) return { text: "", novelWords: 0, totalWords: 0 };
  const copied = new Array<boolean>(ansWords.length).fill(false);
  for (let i = 0; i + minRun <= ansWords.length; i++) {
    let j = i + minRun;
    if (!stemStr.includes(` ${ansWords.slice(i, j).join(" ")} `)) continue;
    while (j < ansWords.length && stemStr.includes(` ${ansWords.slice(i, j + 1).join(" ")} `)) j++;
    for (let k = i; k < j; k++) copied[k] = true;
  }
  const kept = ansWords.filter((_, idx) => !copied[idx]);
  return { text: kept.join(" "), novelWords: kept.length, totalWords: ansWords.length };
}

const NON_ATTEMPT = /^(?:i do not know|i dont know|dont know|do not know|idk|not sure|unsure|no idea|i have no idea|pass|skip|none|nothing|na|n a)$/;

export function suggestMarks(q: WrittenQ, text: string): boolean[] {
  const cleaned = normForMatch(text ?? "");
  if (!cleaned || NON_ATTEMPT.test(cleaned)) {
    return q.markScheme.map(() => false);
  }
  const { text: novelNorm, novelWords, totalWords } = stripVerbatimRuns(text, q.question, 4);
  if (!novelNorm || NON_ATTEMPT.test(novelNorm) || (novelWords < 5 && novelWords < totalWords * 0.5)) {
    return q.markScheme.map(() => false);
  }
  const rawClean = ` ${text.toLowerCase().replace(/[*_`~]/g, "").replace(/\s+/g, " ")} `;
  const novelSpaced = ` ${novelNorm} `;
  return q.markScheme.map((p) =>
    p.keywords.some((k) => {
      if (!k) return false;
      const kl = k.toLowerCase();
      const kn = normForMatch(kl);
      // Short alphabetic keywords (e.g. "sa", "pr", "so", "un", "men") must match whole words.
      if (/^[a-z]{1,3}$/.test(kn)) {
        return novelSpaced.includes(` ${kn} `);
      }
      if (/[£%$]/.test(kl)) {
        return novelWords >= 5 && rawClean.includes(kl);
      }
      return kn ? novelSpaced.includes(` ${kn} `) || (kn.length >= 4 && novelNorm.includes(kn)) : false;
    }),
  );
}
