"use client";
import React from "react";

type Member = any;

export default function FacultyDetails({ member }: { member: Member }) {
  const initials = member.name
    .split(" ")
    .map((s: string) => s[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="max-w-[900px] mx-auto p-6">
      <div className="flex gap-6 items-start">
        <div className="w-28 h-28 rounded-full bg-[#e6eef9] flex items-center justify-center text-2xl font-bold text-[#18325a]">{initials}</div>
        <div>
          <h1 className="text-2xl font-bold">{member.name}</h1>
          <p className="text-sm text-muted-foreground">{member.role}</p>
          <p className="mt-2 text-sm">{member.bio}</p>
          <div className="mt-3 text-sm text-[#0A2342]">
            <div><strong>Years at college:</strong> {member.yearsAtCollege}</div>
            <div><strong>Degree:</strong> {member.degree}</div>
            <div className="mt-2"><strong>Contact:</strong> <a className="text-primary underline" href={`mailto:${member.email}`}>{member.email}</a> • <a className="text-primary underline" href={`tel:${member.phone}`}>{member.phone}</a></div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-surface p-4 rounded">
        <h2 className="font-semibold mb-2">Selected Publications</h2>
        {member.publications && member.publications.length ? (
          <ul className="list-disc pl-6">
            {member.publications.map((p: string, idx: number) => (
              <li key={idx} className="text-sm">{p}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-muted-foreground">No publications listed.</p>
        )}
      </div>
    </div>
  );
}
