import Link from "next/link";

const club = {
  name: "Rocket Club",
  facts: ["Founded 2018", "Competes in NASA Student Launch"],
  description: "A club for students interested in rocketry, engineering, and aerospace competitions.",
  calendar: [
    { date: "2026-02-10", event: "Weekly Meeting" },
    { date: "2026-03-05", event: "Rocket Launch Prep" }
  ],
  members: ["Ethan Boicey", "Jane Smith", "John Doe"],
  contact: "rocket@kent.edu",
  website: "https://rocketclub.kent.edu"
};

export default function RocketClubDetails() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <div className="bg-[#FFD100] text-[#0A2342] rounded-xl shadow p-4 text-center font-bold mb-6">
        This demo website was designed and created by Ethan Boicey for job application purposes. It is not affiliated with or endorsed by Kent State University. Only hiring staff should review this site.
      </div>
      <h1 className="text-2xl font-bold mb-4">{club.name}</h1>
      <ul className="mb-4">
        {club.facts.map(fact => (
          <li key={fact} className="text-sm">• {fact}</li>
        ))}
      </ul>
      <p className="mb-4">{club.description}</p>
      <h2 className="font-bold mb-2">Upcoming Events</h2>
      <ul className="mb-4">
        {club.calendar.map(item => (
          <li key={item.date} className="text-sm">{item.date}: {item.event}</li>
        ))}
      </ul>
      <h2 className="font-bold mb-2">Members</h2>
      <ul className="mb-4">
        {club.members.map(member => (
          <li key={member} className="text-sm">{member}</li>
        ))}
      </ul>
      <h2 className="font-bold mb-2">Contact</h2>
      <p className="mb-2">Email: <a href={`mailto:${club.contact}`} className="text-blue-700 underline">{club.contact}</a></p>
      <p>Website: <a href={club.website} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">{club.website}</a></p>
      <div className="mt-6">
        <Link href="/clubs" className="text-[#0A2342] underline">← Back to Clubs</Link>
      </div>
    </div>
  );
}
