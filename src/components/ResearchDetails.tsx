"use client";
import { useState } from "react";
import Link from "next/link";
import { addSubmission } from "../utils/submissions";

export default function ResearchDetails({ project }: { project: any }) {
  const [openPanel, setOpenPanel] = useState<null | 'contact'>(null);

  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-linear-to-br from-white to-[#f3f4f6]">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-12 px-2 sm:px-8 bg-transparent sm:items-start">
        <div className="w-full mb-4">
          <nav className="text-sm mb-2">
            <Link href="/research" className="text-blue-700 underline" aria-label="Back to research">&larr; Back to Research</Link>
          </nav>
          <div className="bg-[#18325a] text-white shadow p-4 text-center font-bold border-b-4 border-[#FFD100]">
            <span className="text-3xl font-bold text-white">{project.name}</span>
          </div>
        </div>

        <div className="bg-white shadow-lg p-8 border border-[#e5e7eb] mb-8 w-full">
          <h2 className="text-2xl font-bold text-[#1D428A] mb-2">About</h2>
          <p className="mb-4 text-[#0A2342]">{project.about || project.summary}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-[#f3f4f6] p-4 rounded border border-[#e5e7eb]">
              <h4 className="font-semibold text-[#1D428A] mb-2">Type</h4>
              <div className="text-[#0A2342]">{project.type}</div>
            </div>
            <div className="bg-[#f3f4f6] p-4 rounded border border-[#e5e7eb]">
              <h4 className="font-semibold text-[#1D428A] mb-2">Highlights</h4>
              <ul className="list-disc pl-6 text-[#0A2342]">
                {(project.highlights || []).map((h: string) => (<li key={h}>{h}</li>))}
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold text-[#1D428A] mb-2">Key Findings</h4>
            <ul className="text-[#0A2342] space-y-1">
              {(project.findings || []).map((f: string) => (<li key={f}>{f}</li>))}
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold text-[#1D428A] mb-2">Members</h4>
            <ul className="text-[#0A2342] space-y-1">
              {(project.members || []).map((m: string) => (<li key={m}>{m}</li>))}
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold text-[#1D428A] mb-2">Publications</h4>
            <ul className="text-[#0A2342] space-y-1">
              {(project.papers || []).map((p: any) => (
                <li key={p.title}><a href={p.url} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">{p.title}</a></li>
              ))}
            </ul>
          </div>

          <div className="flex gap-3 mt-4">
            <button
              type="button"
              className="bg-[#18325a] text-white font-bold py-2 px-4 rounded-lg shadow border border-[#18325a] hover:bg-[#FFD100] hover:text-[#18325a] transition"
              onClick={() => setOpenPanel(openPanel === 'contact' ? null : 'contact')}
              aria-pressed={openPanel === 'contact'}
            >
              Contact Project
            </button>
            {project.website && <a href={project.website} target="_blank" rel="noopener noreferrer" className="bg-[#FFD100] text-[#18325a] font-bold py-2 px-4 rounded-lg shadow border border-[#FFD100] hover:bg-[#e5e7eb] transition">Visit Website</a>}
          </div>
        </div>

        {openPanel === 'contact' && <ResearchContactForm project={project} />}

      </main>
    </div>
  );
}

function ResearchContactForm({ project }: { project: any }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: any) {
    e.preventDefault();
    addSubmission({
      type: "research-contact",
      club: project.name,
      name,
      email,
      message
    });
    setSent(true);
  }

  if (sent) return <div className="p-4 text-green-700">Message sent! Thank you.</div>;

  return (
    <form className="mt-4 bg-white p-4 rounded border border-[#e5e7eb] w-full max-w-3xl" onSubmit={handleSubmit}>
      <h4 className="font-bold mb-2 text-[#1D428A]">Contact {project.name}</h4>
      <label className="block text-sm mb-1">Your Name</label>
      <input className="block w-full mb-2 p-2 border rounded" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} required />
      <label className="block text-sm mb-1">Your Email</label>
      <input className="block w-full mb-2 p-2 border rounded" placeholder="Your Email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      <label className="block text-sm mb-1">Message</label>
      <textarea className="block w-full mb-2 p-2 border rounded" placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} required />
      <button className="bg-[#18325a] text-white font-bold py-2 px-4 rounded-lg shadow border border-[#18325a] hover:bg-[#FFD100] hover:text-[#18325a] transition" type="submit">Send</button>
    </form>
  );
}
