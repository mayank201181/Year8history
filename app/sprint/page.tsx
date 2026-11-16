import type { Metadata } from "next";
import { SprintRunner } from "@/components/SprintRunner";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Quick-fire round",
  description: "Quick-fire recall of dates, people and key terms from Year 8 History — kings, dictators and democracy — timed or untimed.",
};

export default function SprintPage() {
  return <SprintRunner />;
}
