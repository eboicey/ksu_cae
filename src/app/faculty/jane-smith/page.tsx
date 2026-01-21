import { notFound } from "next/navigation";
import faculty from "../../../../content/pages/faculty.json";
import FacultyDetails from "../../../components/FacultyDetails";

export default function JaneSmithPage() {
  const member = (faculty.faculty as any[]).find((m) => m.slug === "jane-smith");
  if (!member) return notFound();
  return <FacultyDetails member={member} />;
}
