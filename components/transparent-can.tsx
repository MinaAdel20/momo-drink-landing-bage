"use client"

import { motion } from "framer-motion"

export function TransparentCan({ compact = false }: { compact?: boolean }) {
  return (
    <motion.div className={`relative ${compact ? "h-72 w-40" : "h-[30rem] w-52"}`} animate={{ y: [0, -10, 0], rotate: [0, 1.5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} aria-label="Transparent Mo Mo Blue Berry energy drink can">
      <div className="absolute inset-x-2 top-0 h-7 rounded-[50%] border-2 border-[#B9F3FF]/80 bg-white/10 shadow-[inset_0_2px_8px_rgba(255,255,255,0.45)]" />
      <div className="absolute inset-x-0 top-4 bottom-3 overflow-hidden rounded-[28%] border-2 border-[#00D2FF]/70 bg-gradient-to-r from-white/20 via-[#00D2FF]/15 to-white/10 shadow-[inset_-14px_0_20px_rgba(0,210,255,0.16),inset_12px_0_16px_rgba(255,255,255,0.2),0_20px_50px_rgba(0,210,255,0.25)] backdrop-blur-[2px]">
        <div className="absolute inset-y-0 left-5 w-3 bg-white/30 blur-sm" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-[clamp(2.5rem,7vw,4.5rem)] font-black leading-[0.72] tracking-[-0.12em] text-[#00D2FF] drop-shadow-[0_2px_8px_rgba(0,210,255,0.45)]">Mo<br />Mo</span>
          <span className="mt-6 text-[10px] font-black tracking-[0.26em] text-white">ZERO SUGAR</span>
          <span className="mt-2 text-xs font-black tracking-[0.22em] text-[#B9F3FF]">BERRY BLAST</span>
          <span className="mt-10 rounded-full border border-[#00D2FF]/70 px-3 py-1 text-[8px] font-mono tracking-[0.2em] text-white/80">75 MG ENERGY</span>
        </div>
        <div className="absolute bottom-5 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-[#00D2FF]/70" />
      </div>
      <div className="absolute inset-x-2 bottom-0 h-7 rounded-[50%] border-2 border-[#B9F3FF]/60 bg-white/10" />
    </motion.div>
  )
}
