import { notFound } from "next/navigation";
import research from "../../../../content/pages/research.json";
import ResearchDetails from "../../../components/ResearchDetails";

export default function HRIPage() {
  const project = (research.projects as any[]).find((p) => p.slug === "human-robot-interaction");
  if (!project) return notFound();
  return <ResearchDetails project={project} />;
}
