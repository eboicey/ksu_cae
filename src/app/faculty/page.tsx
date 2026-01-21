import faculty from "../../../content/pages/faculty.json";
import { FaUsers } from "react-icons/fa";
import Link from "next/link";

export default function FacultyPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="flex min-h-screen items-center justify-center font-sans bg-linear-to-br from-white to-[#f3f4f6]">
          <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-between py-12 px-2 sm:px-8 bg-transparent sm:items-start">
            <div className="w-full mb-4">
              <div className="bg-[#18325a] text-white shadow p-4 text-center font-bold border-b-4 border-[#FFD100]">
                <span className="text-3xl font-bold text-white">Faculty & Staff</span>
              </div>
            </div>
      <div className="bg-white shadow-lg p-8 border border-[#e5e7eb] mb-8">
        <h1 className="text-3xl font-bold text-[#1D428A] mb-4 flex items-center gap-2">
          <FaUsers /> {faculty.title}
        </h1>
        <p className="mb-8 text-lg text-[#0A2342]">{faculty.description}</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {faculty.faculty.map((member: any) => (
            <li key={member.slug}>
              <Link href={`/faculty/${member.slug}`} className="block bg-[#f3f4f6] rounded-xl p-4 shadow text-[#18325a] border border-[#18325a] hover:shadow-lg">
                <h2 className="text-xl font-semibold text-[#1D428A]">{member.name}</h2>
                <p className="text-[#0A2342]">{member.role}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-[#f3f4f6] shadow-lg p-6 border border-[#e5e7eb]">
        <h2 className="text-xl font-semibold text-[#1D428A] mb-2">Faculty Highlights</h2>
        <ul className="list-disc pl-6 text-[#0A2342]">
          <li>Nationally recognized researchers</li>
          <li>Dedicated mentors for student success</li>
          <li>Active in industry partnerships</li>
        </ul>
      </div>
          </main>
        </div>
    </div>
  );
}
