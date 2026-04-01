import "./globals.css"
import type { Metadata } from "next"
import { Press_Start_2P } from "next/font/google"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400"],
})

export const metadata: Metadata = {
  title: "Spotlight Landing — Conversion-first Next.js landing page",
  description:
    "A clean, conversion-driven landing page blueprint with HeroSpotlight, social proof, features, testimonials, pricing, FAQs, and a final CTA—built with Next.js, Tailwind, and shadcn/ui.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${pressStart2P.className} ${pressStart2P.variable}`}>
      <body className="font-sans bg-background text-foreground">
        <Navbar
          logo="Spotlight Landing"
          navItems={[
            { label: "Home", href: "/" },
            { label: "Features", href: "/features" },
            { label: "Pricing", href: "/pricing" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ]}
          ctaLabel="Get the template"
          ctaHref="/pricing"
        />
        {children}
        <Footer
          brand="Spotlight Landing"
          description="A clean, conversion-driven landing page structure for modern launches."
          columns={[
            {
              title: "Product",
              links: [
                { label: "Features", href: "/features" },
                { label: "Pricing", href: "/pricing" },
                { label: "FAQ", href: "/pricing#faq" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ],
            },
            {
              title: "Legal",
              links: [
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms", href: "/terms" },
              ],
            },
          ]}
          copyright="© 2026 Spotlight Landing Co. All rights reserved."
        />
      </body>
    </html>
  )
}
