import type { Metadata } from "next";
import { SprintRunner } from "@/components/SprintRunner";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Fluency sprint",
  description: "Date Dash: quick-fire key dates from every Year 8 History topic — timed or untimed.",
};

export default function SprintPage() {
  return <SprintRunner />;
}
