import programs from "../../../content/pages/programs.json";
import { FaUserGraduate } from "react-icons/fa";

export default function ProgramsPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="bg-[#FFD100] text-[#0A2342] rounded-xl shadow p-4 text-center font-bold mb-6">
        This demo website was designed and created by Ethan Boicey for job
        application purposes. It is not affiliated with or endorsed by Kent State
        University. Only hiring staff should review this site.
      </div>
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-[#e5e7eb] mb-8">
        <h1 className="text-3xl font-bold text-[#1D428A] mb-4 flex items-center gap-2">
          <FaUserGraduate /> {programs.title}
        </h1>
        <p className="mb-8 text-lg text-[#0A2342]">{programs.description}</p>
        <ul className="space-y-4">
          {programs.programs.map((program: any) => (
            <li
              key={program.name}
              className="bg-[#f3f4f6] rounded-xl p-4 shadow text-black border border-[#FFD100]"
            >
              <h2 className="text-xl font-semibold text-[#1D428A]">
                {program.name}
              </h2>
              <p className="text-[#0A2342]">{program.summary}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-[#f3f4f6] rounded-2xl shadow-lg p-6 border border-[#e5e7eb]">
        <h2 className="text-xl font-semibold text-[#1D428A] mb-2">
          Why Choose CAE Programs?
        </h2>
        <ul className="list-disc pl-6 text-[#0A2342]">
          <li>Industry-leading faculty and research</li>
          <li>Hands-on labs and facilities</li>
          <li>Career-focused curriculum</li>
          <li>Strong alumni network</li>
        </ul>
      </div>
    </div>
  );
}
