"use client";
import React, { useEffect, useState } from "react";
import { addSubmission } from "../utils/submissions";

type NewsItem = { headline: string; date: string };
type EventItem = { name: string; date: string };

export default function NewsHub({ data }: { data: { news: NewsItem[]; events: EventItem[] } }) {
  const [query, setQuery] = useState("");
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [expandedNews, setExpandedNews] = useState<Record<string, boolean>>({});
  const [rsvpOpen, setRsvpOpen] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem("bookmarks:v1") || "[]";
      setBookmarks(JSON.parse(raw));
    } catch (e) {
      setBookmarks([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("bookmarks:v1", JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggleBookmark = (id: string) => {
    setBookmarks((b) => (b.includes(id) ? b.filter((x) => x !== id) : [...b, id]));
  };

  const downloadICS = (ev: EventItem) => {
    const start = new Date(ev.date).toISOString().replace(/-|:|\.\d{3}/g, "");
    const end = new Date(new Date(ev.date).getTime() + 60 * 60 * 1000).toISOString().replace(/-|:|\.\d{3}/g, "");
    const ics = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:${ev.name}\nDTSTART:${start}\nDTEND:${end}\nEND:VEVENT\nEND:VCALENDAR`;
    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${ev.name.replace(/\s+/g, "-")}.ics`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const handleRsvp = async (ev: EventItem, name: string, email: string) => {
    await addSubmission({ type: "event-rsvp", club: ev.name, name, email, message: `RSVP for ${ev.name} on ${ev.date}` });
    setRsvpOpen((s) => ({ ...s, [ev.name]: false }));
    alert("RSVP recorded (demo)");
  };

  const newsFiltered = data.news.filter((n) => n.headline.toLowerCase().includes(query.toLowerCase()));
  const eventsFiltered = data.events.filter((e) => e.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div>
      <div className="mb-4 flex gap-2">
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search news and events..." className="flex-1 p-2 border rounded" />
        <button onClick={() => { setQuery(""); }} className="px-3 py-2 bg-surface rounded">Clear</button>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#1D428A] mb-3">Latest News</h2>
        <div className="grid gap-3">
          {newsFiltered.map((n) => {
            const id = `${n.headline}--${n.date}`;
            return (
              <article key={id} className="bg-[#f3f4f6] p-4 rounded border border-[#e5e7eb]">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-[#1D428A]">{n.headline}</h3>
                    <div className="text-sm text-[#0A2342]">{n.date}</div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <button onClick={() => toggleBookmark(id)} className="px-2 py-1 bg-surface rounded text-sm">{bookmarks.includes(id) ? "Bookmarked" : "Bookmark"}</button>
                    <button onClick={() => setExpandedNews((s) => ({ ...s, [id]: !s[id] }))} className="px-2 py-1 bg-primary text-white rounded text-sm">{expandedNews[id] ? "Hide" : "Details"}</button>
                  </div>
                </div>
                {expandedNews[id] && (
                  <div className="mt-3 text-sm text-[#0A2342]">
                    <p>This is a short excerpt or summary for the news item. For demo content we show the headline as the main text.</p>
                    <div className="mt-2 flex gap-2">
                      <button className="px-3 py-1 bg-[#18325a] text-white rounded text-sm">Share</button>
                      <button className="px-3 py-1 bg-[#FFD100] text-[#18325a] rounded text-sm">Read More</button>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#1D428A] mb-3">Upcoming Events</h2>
        <div className="grid gap-3">
          {eventsFiltered.map((ev) => (
            <article key={`${ev.name}--${ev.date}`} className="bg-[#f3f4f6] p-4 rounded border border-[#e5e7eb]">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-[#1D428A]">{ev.name}</h3>
                  <div className="text-sm text-[#0A2342]">{ev.date}</div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <button onClick={() => setRsvpOpen((s) => ({ ...s, [ev.name]: !s[ev.name] }))} className="px-2 py-1 bg-primary text-white rounded text-sm">{rsvpOpen[ev.name] ? "Close" : "RSVP"}</button>
                  <button onClick={() => downloadICS(ev)} className="px-2 py-1 bg-surface rounded text-sm">Add to calendar</button>
                </div>
              </div>

              {rsvpOpen[ev.name] && (
                <div className="mt-3">
                  <RsvpForm ev={ev} onSubmit={handleRsvp} />
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function RsvpForm({ ev, onSubmit }: { ev: EventItem; onSubmit: (ev: EventItem, name: string, email: string) => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(ev, name, email);
      }}
      className="bg-white p-3 rounded border border-[#e5e7eb]"
    >
      <label className="block text-sm mb-1">Name</label>
      <input className="block w-full mb-2 p-2 border rounded" value={name} onChange={(e) => setName(e.target.value)} required />
      <label className="block text-sm mb-1">Email</label>
      <input type="email" className="block w-full mb-2 p-2 border rounded" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <div className="flex gap-2">
        <button type="submit" className="px-3 py-1 bg-[#18325a] text-white rounded">Send RSVP</button>
        <button type="button" className="px-3 py-1 bg-surface rounded" onClick={() => { setName(""); setEmail(""); }}>Clear</button>
      </div>
    </form>
  );
}
