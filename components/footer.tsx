"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const portfolioUrl = "https://minaadel20.github.io/MYPORTFOLIO/"

export function Footer() {
  return (
    <footer id="careers" className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <Link href="#hero" className="font-black tracking-tighter text-foreground transition-colors hover:text-[#00D2FF]">
          Mo <span className="text-[#00D2FF]">Mo</span>
        </Link>
        <span className="font-mono text-xs">© 2026 Mo Mo</span>
        <nav aria-label="Legal" className="flex items-center gap-4 text-xs font-medium">
          <motion.a href={portfolioUrl} target="_blank" rel="noreferrer" whileHover={{ color: "#00D2FF" }}>
            Privacy
          </motion.a>
          <motion.a href={portfolioUrl} target="_blank" rel="noreferrer" whileHover={{ color: "#00D2FF" }}>
            Terms
          </motion.a>
        </nav>
      </div>
    </footer>
  )
}
