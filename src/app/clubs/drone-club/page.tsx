import { notFound } from "next/navigation";
import clubs from "../../../../content/pages/clubs.json";
import ClubDetails from "../../../components/ClubDetails";

export default function DroneClubPage() {
  const club = (clubs as any[]).find((c) => c.slug === "drone-club");
  if (!club) return notFound();
  return <ClubDetails club={club} />;
}
