import { notFound } from "next/navigation";
import programs from "../../../../content/pages/programs.json";
import ProgramDetails from "../../../components/ProgramDetails";

export default function MaterialsPage() {
  const program = (programs.programs as any[]).find((p) => p.slug === "materials-structures");
  if (!program) return notFound();
  return <ProgramDetails program={program} />;
}
