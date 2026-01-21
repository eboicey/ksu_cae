import { notFound } from "next/navigation";
import research from "../../../../content/pages/research.json";
import ResearchDetails from "../../../components/ResearchDetails";

export default function UASResearchPage() {
  const project = (research.projects as any[]).find((p) => p.slug === "uas-research");
  if (!project) return notFound();
  return <ResearchDetails project={project} />;
}
