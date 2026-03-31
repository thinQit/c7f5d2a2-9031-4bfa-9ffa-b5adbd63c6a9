import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
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
  title: "AuroraCart — Modern Essentials, Fast Shipping",
  description:
    "Shop design-forward everyday essentials with fast shipping, secure checkout, and 30-day returns. Browse categories, best sellers, and bundle deals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${inter.variable} font-sans bg-background text-foreground`}>
        <Navbar />
        {children}
        <FooterMultiColumn
          brand="AuroraCart"
          description="Design-forward essentials with fast shipping and easy returns."
          columns={[
            {
              title: "Shop",
              links: [
                { label: "All Products", href: "/shop" },
                { label: "Bundles", href: "/shop?collection=bundles" },
                { label: "Gift Cards", href: "/gift-cards" },
              ],
            },
            {
              title: "Support",
              links: [
                { label: "Shipping & Returns", href: "/shipping-returns" },
                { label: "FAQ", href: "/faq" },
                { label: "Contact", href: "/contact" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "About", href: "/about" },
                { label: "Reviews", href: "/reviews" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms", href: "/terms" },
              ],
            },
          ]}
          copyright="© 2026 AuroraCart. All rights reserved."
        />
      </body>
    </html>
  );
}
