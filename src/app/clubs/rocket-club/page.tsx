import { notFound } from "next/navigation";
import clubs from "../../../../content/pages/clubs.json";
import ClubDetails from "../../../components/ClubDetails";

export default function RocketClubPage() {
  const club = (clubs as any[]).find((c) => c.slug === "rocket-club");
  if (!club) return notFound();
  return <ClubDetails club={club} />;
}
