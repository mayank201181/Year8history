import type { Metadata } from "next";
import { topicSummaries } from "@/lib/server/content";
import { WatchHub } from "@/components/WatchHub";

export const metadata: Metadata = {
  title: "Watch",
  description: "Animated sitcom episodes and hand-picked explainer videos for every Year 8 History topic.",
};

export default function WatchPage() {
  const items = topicSummaries().filter((t) => t.ready).map((t, idx) => ({
    id: t.id,
    num: idx + 1,
    title: t.title,
    icon: t.icon,
    strand: t.strand,
    summary: t.summary,
  }));
  return <WatchHub topics={items} />;
}
