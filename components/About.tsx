"use client";

import { motion } from "motion/react";
import { Aperture, GraduationCap, Layers3, Monitor } from "lucide-react";

const strengths = [
  { icon: Layers3, title: "Graphic Design", detail: "Banner, poster, pamphlet & layout" },
  { icon: Aperture, title: "Photography", detail: "Visual storytelling & composition" },
  { icon: Monitor, title: "Digital Creativity", detail: "Creative ideas & digital experiences" },
];

export default function About() {
  return (
    <section id="about" className="relative z-10 border-y border-white/[.06] bg-white/[.015] px-6 py-28 md:py-36">
      <div className="section-wrap grid gap-14 md:grid-cols-[.9fr_1.1fr]">
        <motion.div initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="eyebrow">02 / THE PERSON BEHIND THE WORK</p>
          <h2 className="mt-5 text-5xl font-black tracking-[-.07em] md:text-7xl">ABOUT<br />ME<span className="red-text">.</span></h2>
          <div className="mt-9 flex items-start gap-4 border-l border-[#e32636] pl-5">
            <GraduationCap className="mt-1 shrink-0 text-[#ef4754]" />
            <div><p className="text-sm font-semibold">Education</p><p className="mt-1 text-xs leading-6 text-zinc-500">S1 Information Systems · Universitas PGRI Madiun</p></div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="text-lg leading-9 text-zinc-300 md:text-xl">Hello! I&apos;m a creative individual with an interest in visual design, digital creativity, and photography.</p>
          <p className="mt-5 text-sm leading-8 text-zinc-500">With a background in Information Systems, I enjoy combining structured thinking with creative exploration. This portfolio is a space to collect and share the visual work I create.</p>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {strengths.map(({ icon: Icon, title, detail }) => (
              <div key={title} className="glass rounded-xl p-4">
                <Icon size={20} className="text-[#ef4754]" />
                <h3 className="mt-5 text-xs font-semibold">{title}</h3>
                <p className="mt-2 text-[10px] leading-5 text-zinc-500">{detail}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
