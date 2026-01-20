"use client";
import Navigation from "../components/Navigation";
import { useState, useEffect } from "react";
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
    // Save submission to localStorage (demo mode)
    const submissions = JSON.parse(localStorage.getItem("submissions") || "[]");
    submissions.push({ ...form, timestamp: new Date().toISOString() });
    localStorage.setItem("submissions", JSON.stringify(submissions));
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-linear-to-br from-white to-[#f3f4f6]">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-between py-12 px-2 sm:px-8 bg-transparent sm:items-start">
        {/* DEMO disclaimer banner */}
        <div className="w-full mb-4">
          <div className="bg-[#FFD100] text-[#0A2342] rounded-xl shadow p-4 text-center font-bold">
            This demo website was designed and created by Ethan Boicey for job application purposes. It is not affiliated with or endorsed by Kent State University. Only hiring staff should review this site.
          </div>
        </div>
        {/* Hero image */}
        <div className="w-full flex justify-center mb-8">
          <img
            src="/hero.jpg"
            alt="Kent State CAE Hero"
            className="rounded-2xl shadow-xl object-cover w-full max-h-72 border-4 border-[#FFD100]"
            style={{ objectFit: "cover" }}
          />
        </div>
        {/* Highlights & Announcements */}
        <section className="w-full mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#e5e7eb]">
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
        <section className="w-full mb-8">
          <div className="bg-[#f3f4f6] rounded-2xl shadow-lg p-6 border border-[#e5e7eb]">
            <h2 className="text-xl font-semibold text-[#1D428A] mb-2 flex items-center gap-2"><FaLink /> Quick Links</h2>
            <div className="flex flex-wrap gap-4">
              <a href="/programs" className="bg-[#FFD100] text-black font-bold py-2 px-4 rounded-xl shadow hover:scale-105 transition-transform flex items-center gap-2"><FaUserGraduate /> Programs</a>
              <a href="/research" className="bg-[#1D428A] text-white font-bold py-2 px-4 rounded-xl shadow hover:scale-105 transition-transform flex items-center gap-2"><FaRocket /> Research</a>
              <a href="/faculty" className="bg-[#0A2342] text-white font-bold py-2 px-4 rounded-xl shadow hover:scale-105 transition-transform flex items-center gap-2"><FaUserGraduate /> Faculty</a>
              <a href="/labs" className="bg-[#FFD100] text-black font-bold py-2 px-4 rounded-xl shadow hover:scale-105 transition-transform flex items-center gap-2"><FaRocket /> Labs</a>
              <a href="/news" className="bg-[#1D428A] text-white font-bold py-2 px-4 rounded-xl shadow hover:scale-105 transition-transform flex items-center gap-2"><FaCalendarAlt /> News</a>
            </div>
          </div>
        </section>
        {/* Featured Faculty */}
        <section className="w-full mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#e5e7eb]">
            <h2 className="text-xl font-semibold text-[#1D428A] mb-2 flex items-center gap-2"><FaUserGraduate /> Featured Faculty</h2>
            <div className="flex gap-6">
              <div className="bg-[#f3f4f6] rounded-xl p-4 shadow flex-1">
                <div className="font-bold text-[#0A2342]">Dr. Jane Smith</div>
                <div className="text-[#1D428A]">Professor of Aeronautics</div>
                <div className="text-xs text-[#6b7280]">Aerospace systems, flight simulation</div>
              </div>
              <div className="bg-[#f3f4f6] rounded-xl p-4 shadow flex-1">
                <div className="font-bold text-[#0A2342]">Dr. John Doe</div>
                <div className="text-[#1D428A]">Associate Professor of Mechatronics</div>
                <div className="text-xs text-[#6b7280]">Robotics, automation, smart materials</div>
              </div>
            </div>
          </div>
        </section>
        {/* Latest News */}
        <section className="w-full mb-8">
          <div className="bg-[#f3f4f6] rounded-2xl shadow-lg p-6 border border-[#e5e7eb]">
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
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#e5e7eb]">
            <h2 className="text-xl font-semibold text-[#1D428A] mb-1 flex items-center gap-2"><FaEnvelope /> Contact & Address</h2>
            <div className="text-[#0A2342]">
              Kent State University CAE<br />
              1400 Lefton Esplanade, Kent, OH 44242<br />
              Email: cae@kent.edu<br />
              Phone: (330) 672-2892
            </div>
          </div>
        </section>
        {/* Submission Form */}
        <section className="w-full mb-8">
          <div className="bg-[#f3f4f6] rounded-2xl shadow-lg p-6 border border-[#e5e7eb]">
            <h2 className="text-xl font-semibold text-[#1D428A] mb-1 flex items-center gap-2"><FaEnvelope /> Student/Visitor Submission</h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="border rounded-lg p-2"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="border rounded-lg p-2"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message / Interest / RSVP"
                required
                className="border rounded-lg p-2"
              />
              <button
                type="submit"
                className="bg-linear-to-r from-[#FFD100] to-[#1D428A] text-black font-bold py-2 px-4 rounded-xl shadow hover:scale-105 transition-transform flex items-center gap-2"
              >
                <FaEnvelope /> Submit
              </button>
              {submitted && (
                <div className="text-green-600 font-semibold">Thank you for your submission!</div>
              )}
            </form>
          </div>
        </section>
        {/* Extra Navigation Buttons */}
        <section className="w-full flex gap-4 mt-4">
          <a href="/contact" className="bg-linear-to-r from-[#FFD100] to-[#1D428A] text-black font-bold py-2 px-4 rounded-xl shadow hover:scale-105 transition-transform flex items-center gap-2"><FaEnvelope /> Contact</a>
          <a href="/admin/submissions" className="bg-linear-to-r from-[#0A2342] to-[#FFD100] text-white font-bold py-2 px-4 rounded-xl shadow hover:scale-105 transition-transform flex items-center gap-2"><FaCheckCircle /> Admin (Secret)</a>
        </section>
      </main>
    </div>
  );
}
