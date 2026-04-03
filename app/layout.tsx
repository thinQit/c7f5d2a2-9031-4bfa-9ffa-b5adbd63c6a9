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
  title: "Cancelled",
  description: "Update cancelled per directive; no website changes generated.",
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
          logo="No Update Store"
          navItems={[
            { label: "Home", href: "/" },
            { label: "Categories", href: "/#categories" },
            { label: "Featured", href: "/#featured" },
            { label: "Reviews", href: "/#reviews" },
          ]}
          ctaLabel="Shop Now"
          ctaHref="/#cta"
        />
        {children}
        <FooterMultiColumn
          brand="No Update Store"
          description="A modern, conversion-focused storefront experience with curated products, trusted delivery, and seamless checkout intent."
          columns={[
            {
              title: "Shop",
              links: [
                { label: "New Arrivals", href: "/#categories" },
                { label: "Best Sellers", href: "/#featured" },
                { label: "Gift Picks", href: "/#gallery" },
              ],
            },
            {
              title: "Support",
              links: [
                { label: "Shipping", href: "/#trust" },
                { label: "Returns", href: "/#trust" },
                { label: "Help Center", href: "/#cta" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "About", href: "/#features" },
                { label: "Testimonials", href: "/#reviews" },
                { label: "Contact", href: "/#cta" },
              ],
            },
          ]}
          copyright="© 2026 No Update Store. All rights reserved."
        />
      </body>
    </html>
  );
}
