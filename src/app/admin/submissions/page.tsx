"use client";
import { useState, useEffect } from "react";

export default function SubmissionsAdmin() {
  const [submissions, setSubmissions] = useState<any[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("submissions") || "[]");
    setSubmissions(data);
  }, []);

  function exportCSV() {
    const header = "name,email,message,timestamp";
    const rows = submissions.map(s => [s.name, s.email, s.message, s.timestamp].join(","));
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
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="bg-[#FFD100] text-[#0A2342] rounded-xl shadow p-4 text-center font-bold mb-6">
        This demo website was designed and created by Ethan Boicey for job application purposes. It is not affiliated with or endorsed by Kent State University. Only hiring staff should review this site.
      </div>
      <h1 className="text-3xl font-bold text-[#1D428A] mb-4">Submission Admin</h1>
      <p className="mb-6 text-lg text-[#0A2342]">View and export all student/visitor submissions.</p>
      <button
        onClick={exportCSV}
        className="bg-[#FFD100] text-black font-bold py-2 px-4 rounded shadow mb-6"
      >
        Export to CSV
      </button>
      <table className="w-full border">
        <thead>
          <tr className="bg-[#1D428A] text-white">
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Message</th>
            <th className="p-2">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {submissions.length === 0 ? (
            <tr><td colSpan={4} className="p-4 text-center">No submissions yet.</td></tr>
          ) : (
            submissions.map((s, i) => (
              <tr key={i} className="border-t">
                <td className="p-2">{s.name}</td>
                <td className="p-2">{s.email}</td>
                <td className="p-2">{s.message}</td>
                <td className="p-2">{s.timestamp}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
