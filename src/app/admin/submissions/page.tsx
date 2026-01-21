"use client";

import { useState, useEffect } from "react";
import { listSubmissions, clearSubmissions } from "../../../utils/submissions";

export default function SubmissionsAdmin() {
  const [submissions, setSubmissions] = useState<any[]>([]);

  useEffect(() => {
    setSubmissions(listSubmissions());

    function onUpdate() {
      setSubmissions(listSubmissions());
    }
    // Listen for updates from addSubmission (same-tab) and storage (other tabs)
    window.addEventListener("submissions:updated", onUpdate as any);
    window.addEventListener("storage", onUpdate);
    return () => {
      window.removeEventListener("submissions:updated", onUpdate as any);
      window.removeEventListener("storage", onUpdate);
    };
  }, []);

  function exportCSV() {
    const header = "type,club,name,email,message,position,resume,timestamp";
    const rows = submissions.map(s => [
      s.type || "contact",
      s.club || "",
      s.name,
      s.email,
      s.message || "",
      s.position || "",
      s.resumeName || "",
      s.timestamp
    ].join(","));
    const csv = [header, ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "submissions.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-linear-to-br from-white to-[#f3f4f6]">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-between py-12 px-2 sm:px-8 bg-transparent sm:items-start">
        <div className="w-full mb-4">
          <div className="bg-[#18325a] text-white shadow p-4 text-center font-bold border-b-4 border-[#FFD100]">
            <span className="text-3xl font-bold text-white">Submission Admin</span>
          </div>
        </div>
        <p className="mb-6 text-lg text-[#0A2342]">View and export all club applications, contact requests, and submissions.</p>
        <div className="flex gap-3 mb-6">
          <button
            onClick={exportCSV}
            className="bg-[#18325a] text-white font-bold py-2 px-4 rounded-lg shadow border border-[#18325a] hover:bg-[#0A2342] hover:text-white transition-colors duration-200"
          >
            Export to CSV
          </button>
          <button
            onClick={() => { clearSubmissions(); setSubmissions([]); }}
            className="bg-white text-[#18325a] font-bold py-2 px-4 rounded-lg shadow border border-[#e5e7eb] hover:bg-[#f3f4f6] transition-colors duration-200"
          >
            Clear All
          </button>
        </div>
        <table className="w-full border">
          <thead>
            <tr className="bg-[#1D428A] text-white">
              <th className="p-2">Type</th>
              <th className="p-2">Club</th>
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Message</th>
              <th className="p-2">Position</th>
              <th className="p-2">Resume</th>
              <th className="p-2">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {submissions.length === 0 ? (
              <tr><td colSpan={8} className="p-4 text-center">No submissions yet.</td></tr>
            ) : (
              submissions.map((s, i) => (
                <tr key={i} className="border-t">
                  <td className="p-2">{s.type || "contact"}</td>
                  <td className="p-2">{s.club || ""}</td>
                  <td className="p-2">{s.name}</td>
                  <td className="p-2">{s.email}</td>
                  <td className="p-2">{s.message || ""}</td>
                  <td className="p-2">{s.position || ""}</td>
                  <td className="p-2">
                    {s.resumeUrl ? (
                      <a href={s.resumeUrl} download={s.resumeName} className="text-blue-700 underline">{s.resumeName}</a>
                    ) : ""}
                  </td>
                  <td className="p-2">{s.timestamp}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </main>
    </div>
  );
}
