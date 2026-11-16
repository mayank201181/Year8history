import { Suspense } from "react";
import type { Metadata } from "next";
import { EpisodesHub } from "@/components/EpisodesHub";
import { SHOW_NAME } from "@/lib/show";

export const metadata: Metadata = {
  title: `Episodes — ${SHOW_NAME}`,
  description: "Animated sitcom episodes for Year 8 History topics, with questions to pause and answer.",
};

export default function EpisodesPage() {
  return (
    <Suspense fallback={<p className="p-6 text-ink-2">Loading episodes…</p>}>
      <EpisodesHub />
    </Suspense>
  );
}
