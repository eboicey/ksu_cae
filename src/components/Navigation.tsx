import React from "react";
import Link from "next/link";
import navigation from "../../config/navigation.json";

export default function Navigation() {
  return (
    <nav className="w-full bg-[#0A2342] text-white py-4 shadow">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <img src="/content/images/logo.png" alt="Kent State CAE Logo" className="h-10 w-auto" />
          <span className="font-bold text-lg tracking-wide">Kent State CAE</span>
        </div>
        <ul className="flex gap-6">
          {navigation.links.map((link: any) => (
            <li key={link.name}>
              <Link href={link.href} className="hover:text-[#FFD100] transition-colors">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
