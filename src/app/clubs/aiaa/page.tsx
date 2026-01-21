import { notFound } from "next/navigation";
import clubs from "../../../../content/pages/clubs.json";
import ClubDetails from "../../../components/ClubDetails";

export default function AIAAClubPage() {
  const club = (clubs as any[]).find((c) => c.slug === "aiaa");
  if (!club) return notFound();
  return <ClubDetails club={club} />;
}
