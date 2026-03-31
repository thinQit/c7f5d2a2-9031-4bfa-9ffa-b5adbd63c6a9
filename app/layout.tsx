import "./globals.css"
import { DM_Sans, Inter } from "next/font/google"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "600"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${inter.variable} font-sans bg-background text-foreground`}>
        <Navbar
          logo="Spotlight Storefront"
          navItems={[
            { label: "Home", href: "/" },
            { label: "Shop", href: "/shop" },
            { label: "Categories", href: "/categories" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
            { label: "Wireframe", href: "/wireframe" },
          ]}
          ctaLabel="Shop Best Sellers"
          ctaHref="/shop?sort=best"
        />
        {children}
        <Footer
          brand="Spotlight Storefront"
          description="Curated essentials. Fast shipping. Easy returns."
          columns={[
            {
              title: "Shop",
              links: [
                { label: "All products", href: "/shop" },
                { label: "Best sellers", href: "/shop?sort=best" },
                { label: "New arrivals", href: "/shop?tag=new" },
                { label: "Giftable picks", href: "/shop?tag=giftable" },
              ],
            },
            {
              title: "Help",
              links: [
                { label: "Shipping & returns", href: "/shipping-returns" },
                { label: "FAQ", href: "/faq" },
                { label: "Track order", href: "/track-order" },
                { label: "Contact support", href: "/contact" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "About", href: "/about" },
                { label: "Reviews", href: "/reviews" },
                { label: "Privacy policy", href: "/privacy" },
                { label: "Terms", href: "/terms" },
              ],
            },
          ]}
          copyright="© 2026 Spotlight Storefront. All rights reserved."
        />
      </body>
    </html>
  )
}
