"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center px-6 pb-20 pt-32">
      <div className="section-wrap relative z-10 grid items-center gap-16 md:grid-cols-[1.08fr_.92fr]">
        <motion.div initial={{ opacity: 0, x: -45 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .9 }}>
          <p className="eyebrow mb-7 flex items-center gap-3"><span className="h-px w-9 bg-[#e32636]" /> CREATIVE PORTFOLIO / 2026</p>
          <h1 className="display-title">
            CREATIVE<br /><span className="red-text">VISUAL</span><br />DESIGNER<span className="red-text">.</span>
          </h1>
          <p className="mt-8 max-w-xl text-sm leading-8 text-zinc-400 md:text-base">
            I turn ideas into meaningful visual experiences through graphic design, visual identity, and photography.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <a href="#project" className="group inline-flex items-center gap-3 rounded-full bg-[#e32636] px-6 py-4 text-xs font-bold tracking-wide transition hover:bg-red-700">
              EXPLORE MY WORK <ArrowUpRight size={17} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a href="#about" className="text-xs text-zinc-400 transition hover:text-white">MORE ABOUT ME</a>
          </div>
          <a href="#project" className="mt-16 inline-flex items-center gap-3 text-[10px] tracking-[.25em] text-zinc-500">
            <ArrowDown size={15} className="animate-bounce text-[#e32636]" /> SCROLL TO EXPLORE
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 45, scale: .94 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 1, delay: .15 }} className="relative mx-auto w-full max-w-[470px]">
          <motion.div animate={{ scale: [1, 1.12, 1], opacity: [.35, .55, .35] }} transition={{ duration: 6, repeat: Infinity }} className="absolute inset-[12%] rounded-full bg-red-600/50 blur-[90px]" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[48%] border border-red-500/30 bg-gradient-to-b from-[#42151b] via-[#171012] to-[#080808]">
            <Image
              src="/images/profile.png" alt="My Profile" fill priority className="object-contain object-bottom"/>


            {/* <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-[clamp(6rem,18vw,11rem)] font-black tracking-[-.1em] text-white/[.09]">ME</div>
              <p className="mt-2 text-[10px] tracking-[.35em] text-white/40">ADD YOUR PORTRAIT</p>
            </div> */}


            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
            <div className="absolute bottom-17 left-0 right-0 text-center text-[10px] tracking-[.3em] text-white/60">BAYU SAPUTRA / CREATIVE</div>
          </div>
          <motion.div animate={{ y: [-10, 10, -10], rotate: [0, 7, 0] }} transition={{ duration: 5, repeat: Infinity }} className="glass absolute -right-4 top-20 flex h-14 w-14 items-center justify-center rounded-2xl text-[#ef4754] shadow-[0_0_35px_rgba(227,38,54,.18)]">
            <Sparkles size={25} />
          </motion.div>
          <motion.div animate={{ y: [8, -8, 8] }} transition={{ duration: 4.5, repeat: Infinity }} className="glass absolute -bottom-5 -left-5 rounded-xl px-5 py-4">
            <p className="text-[9px] tracking-[.2em] text-zinc-500">CREATIVE MINDSET</p>
            <p className="mt-1 text-sm font-semibold">Think. Design. Create.</p>
          </motion.div>
          <div className="absolute -bottom-12 right-2 text-[9px] tracking-[.25em] text-zinc-600">01 — INTRODUCTION</div>
        </motion.div>
      </div>
    </section>
  );
}
