"use client";
// Navigation is rendered in the root layout; don't import here to avoid duplicates
import { useState, useEffect } from "react";
import { addSubmission } from "../utils/submissions";
import Link from "next/link";
import { FaRocket, FaEnvelope, FaUserGraduate, FaCalendarAlt, FaLink, FaCheckCircle } from "react-icons/fa";

// Countdown clock for Rocket Club launch
function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const target = new Date(targetDate);
      const diff = target.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft("Launched!");
        clearInterval(interval);
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);
  return <span className="font-mono text-lg text-[#FFD100]">{timeLeft}</span>;
}

export default function Home() {
  // Submission form state
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    // Save submission (demo mode)
    addSubmission({ type: "contact", name: form.name, email: form.email, message: form.message });
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-linear-to-br from-white to-[#f3f4f6]">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-between py-0 px-2 sm:px-8 bg-transparent sm:items-start">
        {/* (hero banner removed — using hero image only in navigation) */}

        {/* DEMO disclaimer banner (moved, centered, made highly visible) */}
        <div className="w-full mt-8 mb-6 flex justify-center">
          <div role="banner" className="bg-red-600 text-black shadow p-6 text-center font-extrabold border-8 border-black max-w-3xl mx-auto">
            <span className="text-lg md:text-2xl leading-tight">This demo website was designed and created by Ethan Boicey for job application purposes. It is not affiliated with or endorsed by Kent State University.</span>
          </div>
        </div>

        {/* Hero content card (logo swapped into the right column) */}
        <header className="w-full mb-8">
          <div className="bg-white shadow-lg p-6 border border-[#e5e7eb] rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <h1 className="text-3xl font-bold text-[#1D428A]">Engineering the Flight of Tomorrow</h1>
                <p className="mt-2 text-lg text-[#0A2342]">Hands-on programs, multidisciplinary research, and industry partnerships preparing students for aerospace careers.</p>
                <div className="mt-4 flex gap-3 flex-wrap">
                  <Link href="/programs" className="inline-flex items-center gap-2 bg-[#18325a] text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-[#FFD100] hover:text-[#18325a] transition">Programs</Link>
                  <Link href="/research" className="inline-flex items-center gap-2 bg-[#FFD100] text-[#18325a] font-bold py-2 px-4 rounded-lg shadow hover:bg-[#e5e7eb] transition">Research</Link>
                  <Link href="/labs" className="inline-flex items-center gap-2 bg-surface text-[#1D428A] font-semibold py-2 px-4 rounded-lg shadow transition">Labs & Facilities</Link>
                </div>
              </div>
              <div className="hidden md:flex md:items-center md:justify-center">
                <img src="/logo.jpg" alt="Kent State CAE Logo" className="h-28 w-auto max-w-[160px] object-contain rounded-lg border-2 border-[#FFD100] bg-white p-1" />
              </div>
            </div>
          </div>
        </header>
        {/* Highlights & Announcements */}
        <section className="w-full mb-8">
          <div className="bg-white shadow-lg p-6 border border-[#e5e7eb]">
            <h2 className="text-2xl font-bold text-[#1D428A] mb-4 flex items-center gap-2"><FaRocket /> Highlights</h2>
            <ul className="list-none space-y-2">
              <li className="flex items-center gap-2"><FaCheckCircle className="text-[#FFD100]" /> Rocket Club Launch: <Countdown targetDate="2026-02-10T12:00:00" /></li>
              <li className="flex items-center gap-2"><FaCalendarAlt className="text-[#1D428A]" /> CAE Open House: March 5, 2026</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-[#FFD100]" /> New Research Grant Awarded for UAS</li>
              <li className="flex items-center gap-2"><FaCalendarAlt className="text-[#1D428A]" /> Annual Aviation Symposium: Feb 15, 2026</li>
            </ul>
          </div>
        </section>
        {/* Quick Links */}
        <nav aria-label="Quick links" className="w-full mb-8">
          <div className="bg-[#f3f4f6] shadow-lg p-6 border border-[#e5e7eb] rounded-lg">
            <h2 className="text-xl font-semibold text-[#1D428A] mb-2 flex items-center gap-2"><FaLink /> Quick Links</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              <Link href="/programs" className="block text-center bg-[#18325a] text-white font-bold py-3 px-2 rounded-lg shadow">Programs</Link>
              <Link href="/research" className="block text-center bg-[#FFD100] text-[#18325a] font-bold py-3 px-2 rounded-lg shadow">Research</Link>
              <Link href="/labs" className="block text-center bg-white text-[#1D428A] font-semibold py-3 px-2 rounded-lg shadow border">Labs</Link>
              <Link href="/faculty" className="block text-center bg-white text-[#1D428A] font-semibold py-3 px-2 rounded-lg shadow border">Faculty</Link>
              <Link href="/news" className="block text-center bg-white text-[#1D428A] font-semibold py-3 px-2 rounded-lg shadow border">News & Events</Link>
            </div>
          </div>
        </nav>
        {/* Featured Faculty */}
        <section className="w-full mb-8">
          <div className="bg-white shadow-lg p-6 border border-[#e5e7eb] rounded-lg">
            <h2 className="text-xl font-semibold text-[#1D428A] mb-4 flex items-center gap-2"><FaUserGraduate /> Featured Faculty</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/faculty/jane-smith" className="block bg-[#f3f4f6] p-4 shadow rounded">
                <div className="font-bold text-[#0A2342]">Dr. Jane Smith</div>
                <div className="text-[#1D428A]">Professor of Aeronautics</div>
                <div className="text-xs text-[#6b7280]">Aerospace systems, flight simulation</div>
              </Link>
              <Link href="/faculty/john-doe" className="block bg-[#f3f4f6] p-4 shadow rounded">
                <div className="font-bold text-[#0A2342]">Dr. John Doe</div>
                <div className="text-[#1D428A]">Associate Professor of Mechatronics</div>
                <div className="text-xs text-[#6b7280]">Robotics, automation, smart materials</div>
              </Link>
            </div>
          </div>
        </section>
        {/* Latest News */}
        <section className="w-full mb-8">
          <div className="bg-[#f3f4f6] shadow-lg p-6 border border-[#e5e7eb]">
            <h2 className="text-xl font-semibold text-[#1D428A] mb-2 flex items-center gap-2"><FaCalendarAlt /> Latest News</h2>
            <ul className="space-y-2">
              <li className="bg-white rounded-lg p-3 shadow flex justify-between items-center">
                <span>CAE Hosts Annual Aviation Symposium</span>
                <span className="text-xs text-[#1D428A]">Feb 15, 2026</span>
              </li>
              <li className="bg-white rounded-lg p-3 shadow flex justify-between items-center">
                <span>New Research Grant Awarded for UAS</span>
                <span className="text-xs text-[#1D428A]">Jan 10, 2026</span>
              </li>
            </ul>
          </div>
        </section>
        {/* Contact Info */}
        <section className="w-full mb-8">
          <div className="bg-white shadow-lg p-6 border border-[#e5e7eb] rounded-lg">
            <h2 className="text-xl font-semibold text-[#1D428A] mb-1 flex items-center gap-2"><FaEnvelope /> Contact & Address</h2>
            <address className="not-italic text-[#0A2342]">Kent State University CAE<br />1400 Lefton Esplanade, Kent, OH 44242<br />Email: <a href="mailto:cae@kent.edu" className="text-primary underline">cae@kent.edu</a><br />Phone: <a href="tel:+13306722892" className="text-primary underline">(330) 672-2892</a></address>
          </div>
        </section>
        {/* Submission Form */}
        <section className="w-full mb-8">
          <div className="bg-[#f3f4f6] shadow-lg p-6 border border-[#e5e7eb] rounded-lg">
            <h2 className="text-xl font-semibold text-[#1D428A] mb-1 flex items-center gap-2"><FaEnvelope /> Student/Visitor Submission</h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit} aria-label="Contact form">
              <label htmlFor="home-name" className="text-sm">Your name</label>
              <input
                id="home-name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="border p-2"
              />
              <label htmlFor="home-email" className="text-sm">Your email</label>
              <input
                id="home-email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="border p-2"
              />
              <label htmlFor="home-message" className="text-sm">Message</label>
              <textarea
                id="home-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message / Interest / RSVP"
                required
                className="border p-2"
              />
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="bg-[#18325a] text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-[#FFD100] hover:text-[#18325a] border border-[#18325a] transition-transform flex items-center gap-2"
                >
                  <FaEnvelope /> Submit
                </button>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#1D428A] font-semibold py-2 px-4 rounded-lg shadow border">More contact options</Link>
              </div>
              {submitted && (
                <div className="text-green-600 font-semibold">Thank you for your submission!</div>
              )}
            </form>
          </div>
        </section>
        {/* Extra Navigation Buttons */}
        <section className="w-full flex gap-4 mt-4">
          <Link href="/contact" className="bg-[#18325a] text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-[#FFD100] hover:text-[#18325a] transition-transform flex items-center gap-2 border border-[#18325a]"><FaEnvelope /> Contact</Link>
          <Link href="/admin/submissions" className="bg-[#18325a] text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-[#FFD100] hover:text-[#18325a] transition-transform flex items-center gap-2 border border-[#18325a]"><FaCheckCircle /> Admin (Secret)</Link>
        </section>
      </main>
    </div>
  );
}
