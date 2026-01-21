import { notFound } from "next/navigation";
import labs from "../../../../content/pages/labs.json";
import LabDetails from "../../../components/LabDetails";

export default function AvionicsLab() {
  const lab = (labs.labs as any[]).find((l) => l.slug === "avionics-lab");
  if (!lab) return notFound();
  return <LabDetails lab={lab} />;
}
