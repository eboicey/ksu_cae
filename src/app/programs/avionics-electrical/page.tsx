import { notFound } from "next/navigation";
import programs from "../../../../content/pages/programs.json";
import ProgramDetails from "../../../components/ProgramDetails";

export default function AvionicsPage() {
  const program = (programs.programs as any[]).find((p) => p.slug === "avionics-electrical");
  if (!program) return notFound();
  return <ProgramDetails program={program} />;
}
