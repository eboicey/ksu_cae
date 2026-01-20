import research from "../../../content/pages/research.json";
import { FaFlask } from "react-icons/fa";

export default function ResearchPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="bg-[#FFD100] text-[#0A2342] rounded-xl shadow p-4 text-center font-bold mb-6">
        This demo website was designed and created by Ethan Boicey for job
        application purposes. It is not affiliated with or endorsed by Kent State
        University. Only hiring staff should review this site.
      </div>
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-[#e5e7eb] mb-8">
        <h1 className="text-3xl font-bold text-[#1D428A] mb-4 flex items-center gap-2">
          <FaFlask /> {research.title}
        </h1>
        <p className="mb-8 text-lg text-[#0A2342]">{research.description}</p>
        <ul className="space-y-4">
          {research.projects.map((project: any) => (
            <li
              key={project.name}
              className="bg-[#f3f4f6] rounded-xl p-4 shadow text-black border border-[#FFD100]"
            >
              <h2 className="text-xl font-semibold text-[#1D428A]">
                {project.name}
              </h2>
              <p className="text-[#0A2342]">{project.summary}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-[#f3f4f6] rounded-2xl shadow-lg p-6 border border-[#e5e7eb]">
        <h2 className="text-xl font-semibold text-[#1D428A] mb-2">
          Research Opportunities
        </h2>
        <ul className="list-disc pl-6 text-[#0A2342]">
          <li>Collaborate with faculty on funded projects</li>
          <li>Access to state-of-the-art labs</li>
          <li>Present at national conferences</li>
          <li>Publish in leading journals</li>
        </ul>
      </div>
    </div>
  );
}
