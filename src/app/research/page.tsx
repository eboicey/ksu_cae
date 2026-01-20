import research from "../../../content/pages/research.json";

export default function ResearchPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-[#1D428A] mb-4">{research.title}</h1>
      <p className="mb-8 text-lg text-zinc-700 dark:text-zinc-300">{research.description}</p>
      <ul className="space-y-4">
        {research.projects.map((project: any) => (
          <li key={project.name} className="bg-[#FFD100] rounded p-4 shadow text-black">
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p>{project.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
