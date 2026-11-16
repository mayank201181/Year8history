import type { Metadata } from "next";
import { TOPICS } from "@/lib/server/content";
import type { FactSource } from "@/lib/timeline";
import { TimelineView } from "@/components/TimelineView";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Timeline & key facts",
  description: "Every key date in Year 8 History in one chronological timeline — William I to votes for women — plus the key facts and ideas from each topic. Searchable and printable.",
};

export default function TimelinePage() {
  // TOPICS is already in teaching order (Toolkit, then Terms 1–3).
  const sources: FactSource[] = TOPICS.map((t) => ({
    topicId: t.id,
    topicTitle: t.title,
    icon: t.icon,
    strand: t.strand,
    facts: (t.learn?.formulas ?? []).map((f) => ({ name: f.name, formula: f.formula, ...(f.note ? { note: f.note } : {}) })),
  })).filter((s) => s.facts.length > 0);
  return <TimelineView sources={sources} />;
}
