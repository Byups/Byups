"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const links = [
  { label: "Home", href: "/#home" },
  { label: "Project", href: "/#project" },
  { label: "Gallery", href: "/gallery" },
  { label: "About Me", href: "/#about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed inset-x-0 top-0 z-50 px-6"
    >
      <nav className="mx-auto flex max-w-[1180px] items-center justify-between border-b border-white/10 py-5">
        <Link href="/#home" className="text-lg font-black tracking-[.12em]">
          BAYU<span className="text-[#e32636]">SAPUTRA.</span>
        </Link>
        <div className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={`nav-link text-sm ${pathname === "/gallery" && link.href === "/gallery" ? "active" : ""}`}>
              {link.label}
            </Link>
          ))}
        </div>
        <Link href="/#contact" className="hidden items-center gap-2 rounded-full border border-[#e32636]/60 px-5 py-2.5 text-xs font-semibold transition hover:bg-[#e32636] md:flex">
          LET&apos;S TALK <ArrowUpRight size={15} />
        </Link>
        <button onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} className="text-white md:hidden">
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>
      {open && (
        <div className="glass mx-auto flex max-w-[1180px] flex-col gap-5 rounded-2xl p-6 md:hidden">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-sm text-white">{link.label}</Link>
          ))}
          <Link href="/#contact" onClick={() => setOpen(false)} className="text-sm text-[#ef4754]">Let&apos;s talk ↗</Link>
        </div>
      )}
    </motion.header>
  );
}
