import { notFound } from "next/navigation";
import research from "../../../../content/pages/research.json";
import ResearchDetails from "../../../components/ResearchDetails";

export default function CompositesPage() {
  const project = (research.projects as any[]).find((p) => p.slug === "advanced-composites");
  if (!project) return notFound();
  return <ResearchDetails project={project} />;
}
