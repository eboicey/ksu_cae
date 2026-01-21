import Link from "next/link";
import clubs from "../../../content/pages/clubs.json";

export default function ClubsPage() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-linear-to-br from-white to-[#f3f4f6]">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-between py-12 px-2 sm:px-8 bg-transparent sm:items-start">
        <div className="w-full mb-4">
          <div className="bg-[#18325a] text-white shadow p-4 text-center font-bold border-b-4 border-[#FFD100]">
            <span className="text-3xl font-bold text-white">Student Clubs</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {clubs.map((club: any) => (
            <Link key={club.slug} href={`/clubs/${club.slug}`} className="block">
              <div className="bg-white rounded-lg shadow-lg p-6 border border-[#e5e7eb] hover:shadow-xl transition cursor-pointer">
                <h2 className="text-xl font-bold mb-2 text-[#1D428A]">{club.name}</h2>
                <ul className="mb-3 flex flex-wrap gap-2">
                  {club.facts.map((fact: string) => (
                    <li key={fact} className="bg-[#f3f4f6] rounded px-3 py-1 text-xs border border-[#e5e7eb]">{fact}</li>
                  ))}
                </ul>
                <p className="text-sm mb-4 text-[#0A2342]">{club.description}</p>
                <div className="flex items-center">
                  <span className="text-sm text-[#18325a] underline">Learn more</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
