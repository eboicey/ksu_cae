import { notFound } from "next/navigation";
import faculty from "../../../../content/pages/faculty.json";
import FacultyDetails from "../../../components/FacultyDetails";

export default function MichaelLeePage() {
  const member = (faculty.faculty as any[]).find((m) => m.slug === "michael-lee");
  if (!member) return notFound();
  return <FacultyDetails member={member} />;
}
