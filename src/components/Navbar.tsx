"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Education", href: "/education" },
    { name: "Experience", href: "/internships" },
    { name: "Achievements", href: "/achievements" },
    { name: "Certificates", href: "/certificates" },
    { name: "Competitive Programming", href: "/competitive-programming" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-cyan-400 hover:text-cyan-300"
          >
            AS
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-1 items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? "bg-cyan-500 text-slate-950"
                    : "text-slate-300 hover:bg-slate-700 hover:text-cyan-400"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              download
              className="ml-2 px-4 py-2 rounded-md text-sm font-medium bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-all duration-300"
            >
              Download Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-cyan-400 hover:bg-slate-700"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? "bg-cyan-500 text-slate-950"
                    : "text-slate-300 hover:bg-slate-700 hover:text-cyan-400"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              download
              className="block px-3 py-2 rounded-md text-base font-medium bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-all duration-300 text-center"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
