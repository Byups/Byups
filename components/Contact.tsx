"use client";

import { ArrowUpRight, Instagram, Mail, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 px-6 py-28 md:py-36">
      <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-wrap overflow-hidden rounded-3xl border border-red-500/20 bg-gradient-to-br from-[#241014] via-[#100d0e] to-[#0a0a0a] p-8 md:p-16">
        <p className="eyebrow">03 / GET IN TOUCH</p>
        <h2 className="mt-6 max-w-3xl text-5xl font-black tracking-[-.07em] md:text-7xl">HAVE A PROJECT<br />IN MIND<span className="red-text">?</span></h2>
        <p className="mt-6 max-w-lg text-sm leading-7 text-zinc-400">Have an idea, collaboration, or creative project? Let&apos;s make something meaningful together.</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="mailto:your.email@example.com" className="inline-flex items-center gap-3 rounded-full bg-[#e32636] px-6 py-4 text-xs font-bold transition hover:bg-red-700"><Mail size={16} /> EMAIL ME <ArrowUpRight size={15} /></a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-4 text-xs font-semibold transition hover:border-red-500"><Instagram size={16} /> INSTAGRAM</a>
          <a href="https://wa.me/6283125288785" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py- text-xs font-semibold transition hover:border-green-500 hover:text-green-500"> <MessageCircle size={16} /> WHATSAPP </a>
        </div>
        <p className="mt-6 text-[10px] text-zinc-600">Remember to replace the sample email and social links with your own.</p>
      </motion.div>
    </section>
  );
}
