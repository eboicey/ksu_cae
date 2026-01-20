import programs from "../../../content/pages/programs.json";

export default function ProgramsPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-[#1D428A] mb-4">{programs.title}</h1>
      <p className="mb-8 text-lg text-zinc-700 dark:text-zinc-300">{programs.description}</p>
      <ul className="space-y-4">
        {programs.programs.map((program: any) => (
          <li key={program.name} className="bg-[#FFD100] rounded p-4 shadow text-black">
            <h2 className="text-xl font-semibold">{program.name}</h2>
            <p>{program.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
