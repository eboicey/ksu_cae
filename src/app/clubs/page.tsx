import Link from "next/link";

const clubs = [
  {
    name: "Rocket Club",
    slug: "rocket-club",
    facts: ["Founded 2018", "Competes in NASA Student Launch"],
    description: "A club for students interested in rocketry, engineering, and aerospace competitions.",
    calendar: [
      { date: "2026-02-10", event: "Weekly Meeting" },
      { date: "2026-03-05", event: "Rocket Launch Prep" }
    ],
    members: ["Ethan Boicey", "Jane Smith", "John Doe"],
    contact: "rocket@kent.edu",
    website: "https://rocketclub.kent.edu"
  },
  {
    name: "Robotics Club",
    slug: "robotics-club",
    facts: ["Founded 2015", "Hosts annual RoboFest"],
    description: "A club for students passionate about robotics, automation, and programming.",
    calendar: [
      { date: "2026-02-15", event: "Intro to Robotics" },
      { date: "2026-03-12", event: "RoboFest Planning" }
    ],
    members: ["Alex Lee", "Sam Patel", "Morgan Yu"],
    contact: "robotics@kent.edu",
    website: "https://robotics.kent.edu"
  }
];

export default function ClubsPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="bg-[#FFD100] text-[#0A2342] rounded-xl shadow p-4 text-center font-bold mb-6">
        This demo website was designed and created by Ethan Boicey for job application purposes. It is not affiliated with or endorsed by Kent State University. Only hiring staff should review this site.
      </div>
      <h1 className="text-3xl font-bold mb-6 text-center">Student Clubs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {clubs.map(club => (
          <Link key={club.slug} href={`/clubs/${club.slug}`} className="block">
            <div className="bg-white rounded-xl shadow p-6 hover:bg-[#FFD100] hover:text-[#0A2342] transition cursor-pointer">
              <h2 className="text-xl font-bold mb-2">{club.name}</h2>
              <ul className="mb-2">
                {club.facts.map(fact => (
                  <li key={fact} className="text-sm">• {fact}</li>
                ))}
              </ul>
              <p className="text-sm mb-2">{club.description}</p>
              <span className="text-xs text-blue-700 underline">Click for more details</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
