import { notFound } from "next/navigation";
import faculty from "../../../../content/pages/faculty.json";
import FacultyDetails from "../../../components/FacultyDetails";

export default function SarahPatelPage() {
  const member = (faculty.faculty as any[]).find((m) => m.slug === "sarah-patel");
  if (!member) return notFound();
  return <FacultyDetails member={member} />;
}
