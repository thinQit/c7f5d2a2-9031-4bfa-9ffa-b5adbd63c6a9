import "./globals.css";
import { DM_Sans, Inter } from "next/font/google";
import NavbarSticky from "@/components/NavbarSticky";
import FooterMultiColumn from "@/components/FooterMultiColumn";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${inter.variable} bg-background text-foreground antialiased`}>
        <NavbarSticky
          logo="LumenCart"
          navItems={[
            { label: "Home", href: "/" },
            { label: "Collections", href: "/collections" },
            { label: "Products", href: "/products" },
            { label: "Compare", href: "/compare" },
            { label: "Contact", href: "/contact" },
          ]}
          ctaLabel="Shop best sellers"
          ctaHref="/collections/best-sellers"
        />
        {children}
        <FooterMultiColumn
          brand="LumenCart"
          description="Curated essentials across Tech, Home, and Travel—shipped fast with straightforward returns."
          columns={[
            {
              title: "Shop",
              links: [
                { label: "All products", href: "/products" },
                { label: "Collections", href: "/collections" },
                { label: "Best sellers", href: "/collections/best-sellers" },
                { label: "New arrivals", href: "/collections/new-arrivals" },
              ],
            },
            {
              title: "Help",
              links: [
                { label: "Shipping & returns", href: "/shipping-returns" },
                { label: "FAQ", href: "/faq" },
                { label: "Track order", href: "/track" },
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
