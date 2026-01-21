import { notFound } from "next/navigation";
import labs from "../../../../content/pages/labs.json";
import LabDetails from "../../../components/LabDetails";

export default function RoboticsLab() {
  const lab = (labs.labs as any[]).find((l) => l.slug === "robotics-lab");
  if (!lab) return notFound();
  return <LabDetails lab={lab} />;
}
