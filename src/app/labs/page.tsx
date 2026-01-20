import labs from "../../../content/pages/labs.json";

export default function LabsPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-[#1D428A] mb-4">{labs.title}</h1>
      <p className="mb-8 text-lg text-zinc-700 dark:text-zinc-300">{labs.description}</p>
      <ul className="space-y-4">
        {labs.labs.map((lab: any) => (
          <li key={lab.name} className="bg-[#FFD100] rounded p-4 shadow text-black">
            <h2 className="text-xl font-semibold">{lab.name}</h2>
            <p>{lab.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
