import programs from "../../../content/pages/programs.json";
import { FaUserGraduate } from "react-icons/fa";
import Link from "next/link";

export default function ProgramsPage() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-linear-to-br from-white to-[#f3f4f6]">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-between py-12 px-2 sm:px-8 bg-transparent sm:items-start">
        <div className="w-full mb-4">
          <div className="bg-[#18325a] text-white shadow p-4 text-center font-bold border-b-4 border-[#FFD100]">
            <span className="text-3xl font-bold text-white">Programs</span>
          </div>
        </div>
        <div className="bg-white shadow-lg p-8 border border-[#e5e7eb] mb-8 w-full">
          <h1 className="text-3xl font-bold text-[#1D428A] mb-4 flex items-center gap-2">
            <FaUserGraduate /> {programs.title}
          </h1>
          <p className="mb-8 text-lg text-[#0A2342]">{programs.description}</p>
          <ul className="space-y-4">
            {programs.programs.map((program: any) => (
              <li key={program.slug}>
                <Link href={`/programs/${program.slug}`} className="block">
                  <div className="bg-[#f3f4f6] rounded-lg p-4 shadow-lg border border-[#e5e7eb] hover:shadow-xl transition">
                    <h2 className="text-xl font-semibold text-[#1D428A]">{program.name}</h2>
                    <p className="text-[#0A2342]">{program.summary}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#f3f4f6] shadow-lg p-6 border border-[#e5e7eb] w-full">
          <h2 className="text-xl font-semibold text-[#1D428A] mb-2">Why Choose CAE Programs?</h2>
          <ul className="list-disc pl-6 text-[#0A2342]">
            <li>Industry-leading faculty and research</li>
            <li>Hands-on labs and facilities</li>
            <li>Career-focused curriculum</li>
            <li>Strong alumni network</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
