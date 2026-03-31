import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import NavbarSticky from "@/components/NavbarSticky";
import FooterMultiColumn from "@/components/FooterMultiColumn";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "LumenCart | Curated essentials with fast shipping",
  description:
    "Shop curated tech accessories, home essentials, and travel gear. Free shipping over $60, 30-day returns, and secure Stripe checkout.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${inter.variable} font-sans bg-background text-foreground`}>
        <NavbarSticky
          logo="LumenCart"
          navItems={[
            { label: "Home", href: "/" },
            { label: "Shop", href: "/shop" },
            { label: "Categories", href: "/#categories" },
            { label: "Best Sellers", href: "/shop?sort=best" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
            { label: "Wireframe", href: "/wireframe" },
          ]}
          ctaLabel="Shop Now"
          ctaHref="/shop"
        />
        {children}
        <FooterMultiColumn
          brand="LumenCart"
          description="Curated essentials with fast shipping, transparent pricing, and a checkout experience built for speed."
          columns={[
            {
              title: "Shop",
              links: [
                { label: "All products", href: "/shop" },
                { label: "Best sellers", href: "/shop?sort=best" },
                { label: "New arrivals", href: "/shop?sort=new" },
                { label: "Gift guide", href: "/collections/gifts" },
              ],
            },
            {
              title: "Help",
              links: [
                { label: "Shipping & returns", href: "/shipping-returns" },
                { label: "Order tracking", href: "/track-order" },
                { label: "FAQ", href: "/faq" },
                { label: "Contact", href: "/contact" },
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
          copyright="© 2026 LumenCart. All rights reserved."
        />
      </body>
    </html>
  );
}
