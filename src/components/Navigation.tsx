import React from "react";
import Link from "next/link";
import navigation from "../../config/navigation.json";
import { FaHome, FaRocket, FaUserGraduate, FaFlask, FaUsers, FaCalendarAlt, FaEnvelope, FaUsersCog } from "react-icons/fa";

export default function Navigation() {
  return (
    <nav className="w-full bg-[#18325a] text-black py-5 shadow-lg border-b border-[#FFD100]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        <div className="flex items-center justify-center gap-6 w-64">
          <img
            src="/hero.jpg"
            alt="CAE students working in lab"
            className="h-20 w-auto max-w-[180px] object-contain rounded-xl border-2 border-[#FFD100] bg-white p-1"
          />
        </div>
        <ul className="flex gap-4 items-center whitespace-nowrap overflow-x-auto text-base">
          {navigation.links.map((link: any) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-white font-bold px-2 py-1 hover:underline hover:text-[#FFD100] transition-colors duration-200"
                title={link.name}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="flex items-center gap-2 px-2 py-1 text-white font-bold hover:underline hover:text-[#FFD100] transition-colors duration-200"
              title="Contact"
            >
              <FaEnvelope /> <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
