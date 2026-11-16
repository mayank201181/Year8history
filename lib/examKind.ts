// Which kind of Big Exam paper this is (client-safe: no paper content imported).
import type { ExamKind, ExamPaper } from "./types.ts";

/** A paper's kind: as written, or from its id (exam-s… = Sources & Judgement). */
export function examKind(p: Pick<ExamPaper, "id" | "kind">): ExamKind {
  return p.kind ?? (p.id.startsWith("exam-s") ? "sources" : "knowledge");
}
