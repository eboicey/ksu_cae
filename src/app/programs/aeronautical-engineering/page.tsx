import { notFound } from "next/navigation";
import programs from "../../../../content/pages/programs.json";
import ProgramDetails from "../../../components/ProgramDetails";

export default function AeroPage() {
  const program = (programs.programs as any[]).find((p) => p.slug === "aeronautical-engineering");
  if (!program) return notFound();
  return <ProgramDetails program={program} />;
}
