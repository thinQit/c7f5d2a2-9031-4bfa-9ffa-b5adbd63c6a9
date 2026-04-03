import "./globals.css";
import { DM_Sans, Inter } from "next/font/google";
import NavbarSticky from "@/components/NavbarSticky";
import FooterMultiColumn from "@/components/FooterMultiColumn";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "LumenCart",
  description: "A conversion-first storefront experience with curated collections, trust signals, and checkout-ready content flow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${inter.variable} dark`}>
      <body className="bg-background text-foreground font-[var(--font-inter)]">
        <NavbarSticky
          logo="LumenCart"
          navItems={[
            { label: "Home", href: "/" },
            { label: "Collections", href: "/#collections" },
            { label: "Proof", href: "/#proof" },
            { label: "Trust", href: "/#trust" },
            { label: "Reviews", href: "/#reviews" },
          ]}
          ctaLabel="Start Shopping"
          ctaHref="/#cta"
        />
        {children}
        <FooterMultiColumn
          brand="LumenCart"
          description="A modern storefront built for confident discovery, fast delivery, and streamlined checkout decisions."
          columns={[
            {
              title: "Shop",
              links: [
                { label: "New Collections", href: "/#collections" },
                { label: "Proof & Comparison", href: "/#proof" },
                { label: "Featured Moments", href: "/#gallery" },
              ],
            },
            {
              title: "Support",
              links: [
                { label: "Shipping & Returns", href: "/#trust" },
                { label: "Order Help", href: "/#cta" },
                { label: "Contact", href: "/#cta" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "Our Promise", href: "/#proof" },
                { label: "Testimonials", href: "/#reviews" },
                { label: "Security", href: "/#trust" },
              ],
            },
          ]}
          copyright="© 2026 LumenCart. All rights reserved."
        />
      </body>
    </html>
  );
}
