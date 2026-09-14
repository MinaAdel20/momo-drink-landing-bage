import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LenisProvider } from "@/components/lenis-provider"
import { ThemeProvider } from "@/components/theme-provider"
import ClickSpark from "@/components/click-spark"
import "./globals.css"

const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const _jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Mo Mo Energy Drink | Dream Big, Drink Mo Mo",
  description: "Zero sugar, 75mg caffeine, 100% natural flavors. The energy drink for dreamers and doers.",
  keywords: ["energy drink", "zero sugar", "natural energy", "Mo Mo", "caffeine"],
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#00D2FF",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ClickSpark
          sparkColor="#00D2FF"
          sparkSize={12}
          sparkRadius={20}
          sparkCount={8}
          duration={400}
          easing="ease-out"
          >
            <LenisProvider>{children}</LenisProvider>
          </ClickSpark>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
