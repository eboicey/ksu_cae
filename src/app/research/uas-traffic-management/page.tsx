import { notFound } from "next/navigation";
import research from "../../../../content/pages/research.json";
import ResearchDetails from "../../../components/ResearchDetails";

export default function UTMPage() {
  const project = (research.projects as any[]).find((p) => p.slug === "uas-traffic-management");
  if (!project) return notFound();
  return <ResearchDetails project={project} />;
}
