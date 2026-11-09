"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundGlow from "@/components/BackgroundGlow";
import { projects, type Project } from "@/data/projects";

const categories = ["All Works", "Photography", "Banner", "Pamphlet", "Logo"] as const;
type Category = (typeof categories)[number];
type GalleryItem = Project & { id: number};

const sourceItems: GalleryItem[] = projects.map((project, index) => ({
  ...project,
  id: index + 1,
  // ratio: ["4 / 5", "3 / 4", "1 / 1", "4 / 5", "3 / 4", "5 / 4"][index % 6],
}));

function shuffle<T,>(items: T[]) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export default function GalleryPage() {
  const [active, setActive] = useState<Category>("All Works");
  const [randomized, setRandomized] = useState<GalleryItem[]>(sourceItems);
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  useEffect(() => {
    setRandomized(shuffle(sourceItems));
  }, []);

  useEffect(() => {
    if (!selected) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selected]);

  const visible = useMemo(
    () => active === "All Works" ? randomized : randomized.filter((item) => item.category === active),
    [active, randomized],
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080808] text-white">
      <BackgroundGlow />
      <Navbar />
      <section className="relative z-10 px-6 pb-24 pt-36 md:pt-44">
        <div className="section-wrap">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
            <p className="eyebrow">A COLLECTION OF MY CREATIVE WORKS</p>
            <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <h1 className="text-6xl font-black tracking-[-.08em] md:text-8xl">GALLE<span className="red-text">RY.</span></h1>
              <p className="max-w-sm text-sm leading-7 text-zinc-500">A growing collection of designs, photographs, and visual ideas. Explore the works by category.</p>
            </div>
          </motion.div>

          <div className="mt-10 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button key={category} onClick={() => setActive(category)} className={`rounded-full border px-4 py-2 text-[11px] transition ${active === category ? "border-[#e32636] bg-[#e32636] text-white" : "border-white/10 text-zinc-400 hover:border-red-500/60 hover:text-white"}`}>
                {category}
              </button>
            ))}
          </div>

          {visible.length > 0 ? (
            <div className="gallery-masonry mt-9">
              {visible.map((item, index) => (
                <motion.button
                  key={item.id}
                  type="button"
                  layout
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: .4, delay: index * .035 }}
                  onClick={() => setSelected(item)}
                  className="gallery-item group mb-5 block w-full break-inside-avoid overflow-hidden rounded-xl border border-white/10 bg-[#111] text-left"
                >
                  
                  {/* <div className="relative w-full overflow-hidden bg-gradient-to-br from-[#291014] via-[#171313] to-[#090909]" style={{ aspectRatio: item.ratio }}>
                    <Image src={item.image} alt={item.title} fill className="object-cover opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-100" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/15">
                      <span className="text-3xl font-black tracking-[-.07em] text-white/20">{item.category.toUpperCase()}</span>
                    </div>
                    <span className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/50 p-2 opacity-0 transition group-hover:opacity-100"><ArrowUpRight size={16} /></span>
                  </div> */}

                  <div className="relative w-full overflow-hidden bg-gradient-to-br from-[#291014] via-[#171313] to-[#090909]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="block h-auto w-full opacity-85 transition duration-700 group-hover:scale-[1.02] group-hover:opacity-100"
                    />

                    <span className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/50 p-2 opacity-0 transition group-hover:opacity-100">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>


                  <div className="flex items-start justify-between gap-3 p-4">
                    <div>
                      <p className="text-[9px] tracking-[.2em] text-[#ef4754]">{item.category.toUpperCase()} / {item.year}</p>
                      <h2 className="mt-2 text-sm font-semibold text-white">{item.title}</h2>
                      <p className="mt-1 text-xs leading-5 text-zinc-500">{item.description}</p>
                    </div>
                    <span className="pt-1 text-zinc-600">↗</span>
                  </div>
                </motion.button>
              ))}
            </div>
          ) : (
            <p className="mt-16 text-center text-sm text-zinc-500">Belum ada karya di kategori ini.</p>
          )}
          <p className="mt-8 text-center text-[10px] tracking-wide text-zinc-600">SAMPLE CONTENT — replace these examples with your own work in data/projects.ts.</p>
        </div>
      </section>
      <Footer />

      {selected && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 p-5 backdrop-blur-md" onClick={() => setSelected(null)}>
          <div className="relative grid max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#111] md:grid-cols-[1.2fr_.8fr]" onClick={(event) => event.stopPropagation()}>
            <div className="relative min-h-[280px] bg-black md:min-h-[560px]">
              <Image src={selected.image} alt={selected.title} fill className="object-contain" sizes="(max-width: 768px) 100vw, 60vw" />
            </div>
            <div className="flex flex-col justify-center p-7 md:p-10">
              <button onClick={() => setSelected(null)} aria-label="Close preview" className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/60 p-2 text-white"><X size={18} /></button>
              <p className="eyebrow">{selected.category.toUpperCase()} / {selected.year}</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight">{selected.title}</h2>
              <p className="mt-4 text-sm leading-7 text-zinc-400">{selected.description}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
