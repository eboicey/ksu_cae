"use client";
import { useState, useEffect } from "react";
import { addSubmission } from "../utils/submissions";
import Link from "next/link";

// Example open positions and roles for demo
const exampleRoles = [
  { title: "President", filled: true },
  { title: "Vice President", filled: true },
  { title: "Treasurer", filled: false },
  { title: "Event Coordinator", filled: false },
  { title: "Member", filled: true }
];

export default function ClubDetails({ club }: { club: any }) {
  const [openPanel, setOpenPanel] = useState<null | 'contact' | 'apply' | 'members' | 'roles' | 'positions'>(null);

  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-linear-to-br from-white to-[#f3f4f6]">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-12 px-2 sm:px-8 bg-transparent sm:items-start">
        <div className="w-full mb-4">
          <nav className="text-sm mb-2">
            <a href="/clubs" className="text-blue-700 underline" aria-label="Back to clubs">&larr; Back to Clubs</a>
          </nav>
          <div className="bg-[#18325a] text-white shadow p-4 text-center font-bold border-b-4 border-[#FFD100]">
            <span className="text-3xl font-bold text-white">{club.name}</span>
          </div>
        </div>
        <div className="bg-white shadow-lg p-8 border border-[#e5e7eb] mb-8 w-full">
          <h2 className="text-2xl font-bold text-[#1D428A] mb-2">About</h2>
          <p className="mb-4 text-[#0A2342]">{club.description}</p>
          <ul className="mb-4 flex flex-wrap gap-2">
            {club.facts.map((fact: string) => (
              <li key={fact} className="bg-[#f3f4f6] rounded px-3 py-1 text-xs border border-[#18325a]">{fact}</li>
            ))}
          </ul>
          <div className="mb-4">
            <span className="font-semibold text-[#1D428A]">Contact:</span>{' '}
            {club.contact ? (
              <a href={`mailto:${club.contact}`} className="text-blue-700 underline" aria-label={`Email ${club.name}`}>{club.contact}</a>
            ) : (
              <span className="text-sm text-gray-600">No contact listed</span>
            )}
            {club.website && (
              <span className="ml-4"><a href={club.website} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Website</a></span>
            )}
          </div>
          <div className="flex flex-wrap gap-3 mb-4">
            <button
              type="button"
              className="bg-[#18325a] text-white font-bold py-2 px-4 rounded-lg shadow border border-[#18325a] hover:bg-[#FFD100] hover:text-[#18325a] transition"
              onClick={() => setOpenPanel(openPanel === 'contact' ? null : 'contact')}
              aria-pressed={openPanel === 'contact'}
            >
              Contact Club
            </button>
            <button
              type="button"
              className="bg-[#FFD100] text-[#18325a] font-bold py-2 px-4 rounded-lg shadow border border-[#FFD100] hover:bg-[#e5e7eb] transition"
              onClick={() => setOpenPanel(openPanel === 'apply' ? null : 'apply')}
              aria-pressed={openPanel === 'apply'}
            >
              Apply for Position
            </button>
            <button
              type="button"
              className="bg-[#f3f4f6] text-[#18325a] py-2 px-3 rounded border border-[#e5e7eb] hover:bg-[#e5e7eb] transition"
              onClick={() => setOpenPanel(openPanel === 'members' ? null : 'members')}
              aria-pressed={openPanel === 'members'}
            >
              View Members
            </button>
            <button
              type="button"
              className="bg-[#f3f4f6] text-[#18325a] py-2 px-3 rounded border border-[#e5e7eb] hover:bg-[#e5e7eb] transition"
              onClick={() => setOpenPanel(openPanel === 'roles' ? null : 'roles')}
              aria-pressed={openPanel === 'roles'}
            >
              Club Roles
            </button>
            <button
              type="button"
              className="bg-[#f3f4f6] text-[#18325a] py-2 px-3 rounded border border-[#e5e7eb] hover:bg-[#e5e7eb] transition"
              onClick={() => setOpenPanel(openPanel === 'positions' ? null : 'positions')}
              aria-pressed={openPanel === 'positions'}
            >
              Open Positions
            </button>
          </div>
          {openPanel === 'contact' && <ContactForm club={club} />}
          {openPanel === 'apply' && <ApplyForm club={club} />}
          {openPanel === 'members' && <MembersList club={club} />}
          {openPanel === 'roles' && <RolesList club={club} />}
          {openPanel === 'positions' && <OpenPositions club={club} />}
        </div>
        <div className="bg-[#f3f4f6] shadow-lg p-6 border border-[#e5e7eb] w-full">
          <h3 className="text-xl font-semibold text-[#1D428A] mb-2">Upcoming Events</h3>
          <ul className="list-disc pl-6 text-[#0A2342]">
            {(club.calendar || []).map((item: any) => (
              <li key={(item.date || '') + (item.event || '')}>{item.date}: {item.event}</li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <Link href="/clubs" className="text-blue-700 underline" aria-label="Back to clubs">&larr; Back to Clubs</Link>
        </div>
      </main>
    </div>
  );
}

function ContactForm({ club }: { club: any }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  function handleSubmit(e: any) {
    e.preventDefault();
    addSubmission({
      type: "contact",
      club: club.name,
      name,
      email,
      message
    });
    setSent(true);
  }
  if (sent) return <div className="p-4 text-green-700">Message sent! Thank you.</div>;
  return (
    <form className="mt-4 bg-[#f3f4f6] p-4 rounded border border-[#e5e7eb]" onSubmit={handleSubmit}>
      <h4 className="font-bold mb-2 text-[#1D428A]">Contact {club.name}</h4>
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

function ApplyForm({ club }: { club: any }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [why, setWhy] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    setError("");
    if (!name || !email || !position) {
      setError("Please fill name, email, and position.");
      return;
    }
    setSubmitting(true);
    const saveSubmission = (resumeUrlLocal = "", resumeNameLocal = "") => {
      addSubmission({
        type: "application",
        club: club.name,
        name,
        email,
        position,
        message: why,
        resumeUrl: resumeUrlLocal,
        resumeName: resumeNameLocal,
      });
      setSent(true);
      setSubmitting(false);
    };
    if (resume) {
      const reader = new FileReader();
      reader.onload = function (ev) {
        const resumeUrl = ev.target?.result as string;
        const resumeName = resume.name;
        saveSubmission(resumeUrl, resumeName);
      };
      reader.readAsDataURL(resume);
    } else {
      saveSubmission();
    }
  }
  if (sent) return <div className="p-4 text-green-700">Application submitted! Thank you.</div>;
  return (
    <form className="mt-4 bg-[#f3f4f6] p-4 rounded border border-[#e5e7eb]" onSubmit={handleSubmit}>
      <h4 className="font-bold mb-2 text-[#1D428A]">Apply for a Position</h4>
      {error && <div className="mb-2 text-sm text-red-600">{error}</div>}
      <label className="block text-sm mb-1">Your Name</label>
      <input className="block w-full mb-2 p-2 border rounded" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} required />
      <label className="block text-sm mb-1">Your Email</label>
      <input className="block w-full mb-2 p-2 border rounded" placeholder="Your Email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      <label className="block text-sm mb-1">Position Applying For</label>
      <input className="block w-full mb-2 p-2 border rounded" placeholder="Position Applying For" value={position} onChange={e => setPosition(e.target.value)} required />
      <label className="block text-sm mb-1">Resume (optional)</label>
      <input className="block w-full mb-2 p-2 border rounded" type="file" accept=".pdf,.doc,.docx" onChange={e => setResume(e.target.files?.[0] || null)} />
      <label className="block text-sm mb-1">Why are you a good fit?</label>
      <textarea className="block w-full mb-2 p-2 border rounded" placeholder="Why are you a good fit?" value={why} onChange={e => setWhy(e.target.value)} />
      <button className="bg-[#FFD100] text-[#18325a] font-bold py-2 px-4 rounded-lg shadow border border-[#FFD100] hover:bg-[#e5e7eb] transition" type="submit" disabled={submitting}>{submitting ? 'Submitting...' : 'Submit Application'}</button>
    </form>
  );
}

function MembersList({ club }: { club: any }) {
  return (
    <div className="mt-4 bg-[#f3f4f6] p-4 rounded border border-[#18325a]">
      <h4 className="font-bold mb-2 text-[#1D428A]">Members</h4>
      <ul className="list-disc pl-6 text-[#0A2342]">
        {(club.members || []).map((member: string) => (
          <li key={member}>{member}</li>
        ))}
      </ul>
    </div>
  );
}

function RolesList({ club }: { club: any }) {
  // Demo: use exampleRoles, but could be dynamic
  return (
    <div className="mt-4 bg-[#f3f4f6] p-4 rounded border border-[#18325a]">
      <h4 className="font-bold mb-2 text-[#1D428A]">Club Roles</h4>
      <ul className="list-disc pl-6 text-[#0A2342]">
        {exampleRoles.map((role) => (
          <li key={role.title} className={role.filled ? "text-[#18325a]" : "text-yellow-700 font-semibold"}>
            {role.title} {role.filled ? "(Filled)" : "(Open)"}
          </li>
        ))}
      </ul>
    </div>
  );
}

function OpenPositions({ club }: { club: any }) {
  // Demo: show open roles from exampleRoles
  const open = exampleRoles.filter((r) => !r.filled);
  if (open.length === 0) return <div className="mt-4 p-4 text-green-700">No open positions at this time.</div>;
  return (
    <div className="mt-4 bg-[#f3f4f6] p-4 rounded border border-[#18325a]">
      <h4 className="font-bold mb-2 text-[#1D428A]">Open Positions</h4>
      <ul className="list-disc pl-6 text-[#0A2342]">
        {open.map((role) => (
          <li key={role.title}>{role.title}</li>
        ))}
      </ul>
      <div className="mt-2 text-sm text-[#18325a]">Apply for open positions using the application form above.</div>
    </div>
  );
}
