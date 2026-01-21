export const dynamic = "force-dynamic";
import { notFound } from "next/navigation";
import programs from "../../../../content/pages/programs.json";
import ProgramDetails from "../../../components/ProgramDetails";

export function generateStaticParams() {
  return (programs.programs as any[]).map((p) => ({ slug: p.slug }));
}

export default function ProgramPage({ params }: { params: { slug: string } }) {
  const program = (programs.programs as any[]).find((p) => p.slug === params.slug);
  if (!program) return notFound();
  return <ProgramDetails program={program} />;
}
