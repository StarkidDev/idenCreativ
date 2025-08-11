"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/story", label: "Our Story" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="font-extrabold tracking-tight text-xl text-deepblue">
          <span>iden</span>
          <span className="text-primary">Creativ</span>
          <span>.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="inline-flex items-center bg-primary text-deepblue font-semibold px-4 py-2 rounded-md shadow-sm hover:shadow">
            Start a Project
          </Link>
        </nav>
        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-white/95">
          <div className="container py-3 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="py-2">
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="inline-flex items-center justify-center bg-primary text-deepblue font-semibold px-4 py-2 rounded-md shadow-sm">
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}