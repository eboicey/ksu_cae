import { notFound } from "next/navigation";
import faculty from "../../../../content/pages/faculty.json";
import FacultyDetails from "../../../components/FacultyDetails";

export default function MarcusWrightPage() {
  const member = (faculty.faculty as any[]).find((m) => m.slug === "marcus-wright");
  if (!member) return notFound();
  return <FacultyDetails member={member} />;
}
