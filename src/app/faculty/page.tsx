import faculty from "../../../content/pages/faculty.json";

export default function FacultyPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-[#1D428A] mb-4">{faculty.title}</h1>
      <p className="mb-8 text-lg text-zinc-700 dark:text-zinc-300">{faculty.description}</p>
      <ul className="space-y-4">
        {faculty.faculty.map((member: any) => (
          <li key={member.name} className="bg-[#FFD100] rounded p-4 shadow text-black">
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p>{member.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
