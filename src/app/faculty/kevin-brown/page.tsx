import { notFound } from "next/navigation";
import faculty from "../../../../content/pages/faculty.json";
import FacultyDetails from "../../../components/FacultyDetails";

export default function KevinBrownPage() {
  const member = (faculty.faculty as any[]).find((m) => m.slug === "kevin-brown");
  if (!member) return notFound();
  return <FacultyDetails member={member} />;
}
