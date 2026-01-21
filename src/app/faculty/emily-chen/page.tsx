import { notFound } from "next/navigation";
import faculty from "../../../../content/pages/faculty.json";
import FacultyDetails from "../../../components/FacultyDetails";

export default function EmilyChenPage() {
  const member = (faculty.faculty as any[]).find((m) => m.slug === "emily-chen");
  if (!member) return notFound();
  return <FacultyDetails member={member} />;
}
