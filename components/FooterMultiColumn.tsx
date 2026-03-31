"use client";

import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

interface FooterMultiColumnProps {
  brand: string;
  description: string;
  columns: FooterColumn[];
  copyright?: string;
}

export default function FooterMultiColumn({
  brand = 'NovaCart',
  description = 'Premium everyday essentials with fast shipping, secure checkout, and customer-first support.',
  columns = [
    {
      title: 'Shop',
      links: [
        { label: 'New Arrivals', href: '/shop/new' },
        { label: 'Best Sellers', href: '/shop/best-sellers' },
        { label: 'Deals', href: '/shop/deals' },
      ],
    },
    {
      title: 'About',
      links: [
        { label: 'Our Story', href: '/about' },
        { label: 'Sustainability', href: '/about/sustainability' },
        { label: 'Careers', href: '/careers' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', href: '/support' },
        { label: 'Shipping & Returns', href: '/support/shipping-returns' },
        { label: 'Contact Us', href: '/support/contact' },
      ],
    },
    {
      title: 'Social',
      links: [
        { label: 'Instagram', href: 'https://instagram.com' },
        { label: 'X (Twitter)', href: 'https://x.com' },
        { label: 'Facebook', href: 'https://facebook.com' },
      ],
    },
  ],
  copyright,
}: Partial<FooterMultiColumnProps>) {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16 animate-fade-in-up">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold">{brand}</h3>
            <p className="mt-3 text-sm text-background/70">{description}</p>
          </div>
          {columns.map(function (col) {
            return (
              <div key={col.title}>
                <h4 className="text-sm font-semibold uppercase tracking-wider">{col.title}</h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map(function (link) {
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm text-background/70 transition-all duration-200 hover:text-background hover:scale-105 inline-block"
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <Separator className="my-8 bg-background/20" />
        <p className="text-center text-sm text-background/50">
          {copyright || '\u00a9 ' + new Date().getFullYear() + ' ' + brand + '. All rights reserved.'}
        </p>
      </div>
    </footer>
  );
}
