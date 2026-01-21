import { notFound } from "next/navigation";
import research from "../../../../content/pages/research.json";
import ResearchDetails from "../../../components/ResearchDetails";

export default function AutonomousSystemsPage() {
  const project = (research.projects as any[]).find((p) => p.slug === "autonomous-systems");
  if (!project) return notFound();
  return <ResearchDetails project={project} />;
}
