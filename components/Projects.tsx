"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { projects } from "@/data/projects";


const categories = ["All", "Banner", "Pamphlet", "Logo", "Photography"] as const;

export default function Projects() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const featuredProjects = projects.slice(0, 6);
  const visible = active === "All" ? featuredProjects : featuredProjects.filter((p) => p.category === active);

  return (
    <section id="project" className="relative z-10 px-6 py-28 md:py-36">
      <div className="section-wrap">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }}>
          <p className="eyebrow">01 / SELECTED WORKS</p>
          <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="text-5xl font-black tracking-[-.07em] md:text-7xl">PROJECT<span className="red-text">S.</span></h2>
            <p className="max-w-sm text-sm leading-7 text-zinc-500">A selection of visual experiments, design projects, and moments captured through my lens.</p>
          </div>
        </motion.div>

        <div className="mt-12 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button key={category} onClick={() => setActive(category)} className={`rounded-full border px-4 py-2 text-[11px] transition ${active === category ? "border-[#e32636] bg-[#e32636] text-white" : "border-white/10 text-zinc-400 hover:border-red-500/60 hover:text-white"}`}>
              {category}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, index) => (
            <motion.article key={project.title} layout initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .45, delay: index * .06 }} className="project-card group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#291014] via-[#171313] to-[#090909]">
                <Image src={project.image} alt={project.title} fill className="object-cover opacity-80" sizes="(max-width: 768px) 100vw, 33vw" onError={() => {}} />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <span className="text-4xl font-black tracking-[-.07em] text-white/20">{project.category.toUpperCase()}</span>
                </div>
                <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/40 p-2 text-white opacity-0 transition group-hover:opacity-100"><ArrowUpRight size={17} /></div>
              </div>
              <div className="flex items-start justify-between gap-3 pt-4">
                <div><p className="text-[9px] tracking-[.2em] text-[#ef4754]">{project.category.toUpperCase()} / {project.year}</p><h3 className="mt-2 text-lg font-semibold">{project.title}</h3><p className="mt-1 text-xs text-zinc-500">{project.description}</p></div>
                <span className="pt-1 text-zinc-600">↗</span>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-4">
          <p className="text-xs tracking-widest text-zinc-500">
            WANT TO SEE MORE OF MY WORK?
          </p>

          <Link
            href="/gallery"
            className="group inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 text-xs font-semibold tracking-widest text-white transition-all duration-300 hover:border-[#e32636] hover:bg-[#e32636]"
          >
            EXPLORE FULL GALLERY

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>

      </div>
    </section>
  );
}
