import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import NavbarSticky from "@/components/NavbarSticky";
import FooterMultiColumn from "@/components/FooterMultiColumn";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: "Italo Pizza | Modern Italian Pizza, Pasta & Delivery",
  description:
    "Order authentic Italian pizza and pasta from Italo Pizza. Fresh ingredients, fast delivery, easy online ordering. Visit us at 214 Via Roma Ave, Brooklyn.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${inter.variable} font-sans bg-background text-foreground`}>
        <NavbarSticky
          logo="Italo Pizza"
          navItems={[
            { label: "Home", href: "/" },
            { label: "Menu", href: "/menu" },
            { label: "About Us", href: "/about" },
            { label: "Gallery", href: "/gallery" },
            { label: "Contact", href: "/contact" },
            { label: "Wireframe", href: "/wireframe" },
          ]}
          ctaLabel="Order Now"
          ctaHref="/order"
        />
        {children}
        <FooterMultiColumn
          brand="Italo Pizza"
          description="Modern Italian comfort food—crafted fresh, delivered fast."
          columns={[
            {
              title: "Explore",
              links: [
                { label: "Home", href: "/" },
                { label: "Menu", href: "/menu" },
                { label: "About Us", href: "/about" },
                { label: "Gallery", href: "/gallery" },
              ],
            },
            {
              title: "Support",
              links: [
                { label: "Contact", href: "/contact" },
                { label: "Delivery Areas", href: "/contact#delivery" },
                { label: "Catering", href: "/contact#catering" },
                { label: "Privacy", href: "/privacy" },
              ],
            },
            {
              title: "Order",
              links: [
                { label: "Start Order", href: "/order" },
                { label: "Best Sellers", href: "/order?collection=best-sellers" },
                { label: "Family Bundles", href: "/menu?filter=bundles" },
                { label: "Create Account", href: "/auth/sign-up" },
              ],
            },
          ]}
          copyright="© 2026 Italo Pizza. All rights reserved."
        />
      </body>
    </html>
  );
}
