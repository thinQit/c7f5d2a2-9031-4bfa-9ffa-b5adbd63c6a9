import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Spotlight Landing — Conversion-first Next.js landing page",
  description:
    "A clean, conversion-driven landing page blueprint with an Aceternity Spotlight hero, social proof, features, testimonials, pricing, FAQ, and a final CTA—built with Next.js, Tailwind, and shadcn/ui.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/#features" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "Pricing", href: "/#pricing" },
    { label: "FAQ", href: "/#faq" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const footerColumns = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "/#features" },
        { label: "Pricing", href: "/#pricing" },
        { label: "FAQ", href: "/#faq" },
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
  ];

  return (
    <html lang="en">
      <body className={`${inter.variable} ${plusJakartaSans.variable} font-sans bg-background text-foreground`}>
        <Navbar
          logo="Spotlight Landing"
          navItems={navItems}
          ctaLabel="Get the template"
          ctaHref="/#pricing"
        />
        {children}
        <Footer
          brand="Spotlight Landing"
          description="A conversion-first landing page blueprint."
          columns={footerColumns}
          copyright="© 2026 Spotlight Landing. All rights reserved."
        />
      </body>
    </html>
  );
}
