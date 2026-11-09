"use client";

import { motion, useScroll, useTransform } from "motion/react";

export default function BackgroundGlow() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 420]);
  const x = useTransform(scrollYProgress, [0, 1], [0, -180]);

  return (
    <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden" aria-hidden="true">
      <motion.div style={{ y, x }} className="absolute -right-40 top-40 h-[480px] w-[480px] rounded-full bg-red-700/20 blur-[150px]" />
      <motion.div
        animate={{ scale: [1, 1.18, 1], opacity: [.12, .24, .12] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-52 top-[1100px] h-[500px] w-[500px] rounded-full bg-red-600/20 blur-[160px]"
      />
      <div className="absolute inset-0 opacity-[.035]" style={{ backgroundImage: "radial-gradient(#fff 0.7px, transparent 0.7px)", backgroundSize: "24px 24px" }} />
    </div>
  );
}
