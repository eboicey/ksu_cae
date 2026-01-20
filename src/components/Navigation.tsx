import React from "react";
import Link from "next/link";
import navigation from "../../config/navigation.json";
import { FaHome, FaRocket, FaUserGraduate, FaFlask, FaUsers, FaCalendarAlt, FaEnvelope, FaUsersCog } from "react-icons/fa";

export default function Navigation() {
  return (
    <nav className="w-full bg-linear-to-r from-[#0A2342] to-[#1D428A] text-white py-4 shadow-lg rounded-b-2xl">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <img
            src="/logo.jpg"
            alt="Kent State CAE Logo"
            className="h-10 w-auto max-w-30 object-contain rounded-xl border-2 border-[#FFD100] bg-white"
          />
          <span className="font-bold text-lg tracking-wide">Kent State CAE</span>
        </div>
        <ul className="flex gap-2 md:gap-4 flex-wrap">
          {navigation.links.map((link: any) => (
            <li key={link.name} className="group">
              <Link
                href={link.href}
                className="flex items-center gap-2 px-2 md:px-3 py-2 rounded-xl bg-[#f3f4f6] text-[#0A2342] font-semibold shadow hover:bg-[#FFD100] hover:text-black transition-colors duration-200"
                title={link.name}
              >
                {link.name === "Home" && <FaHome />}
                {link.name === "Programs" && <FaUserGraduate />}
                {link.name === "Research" && <FaFlask />}
                {link.name === "Faculty & Staff" && <FaUsers />}
                {link.name === "Labs & Facilities" && <FaRocket />}
                {link.name === "News & Events" && <FaCalendarAlt />}
                {link.name === "Clubs" && <FaUsersCog />}
                <span className="hidden md:inline">{link.name}</span>
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="flex items-center gap-2 px-2 md:px-3 py-2 rounded-xl bg-[#FFD100] text-black font-semibold shadow hover:bg-[#1D428A] hover:text-white transition-colors duration-200"
              title="Contact"
            >
              <FaEnvelope /> <span className="hidden md:inline">Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
