"use client";

import Link from 'next/link';

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
  description = 'NovaCart helps you discover trusted everyday essentials with fast delivery and secure checkout.',
  columns = [],
  copyright,
}: Partial<FooterMultiColumnProps>) {
  return (
    <footer className="bg-card text-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16 animate-fade-in-up">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold">{brand}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{description}</p>
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
                          className="text-sm text-muted-foreground transition-all duration-200 hover:scale-105 hover:text-foreground"
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
        <div className="my-8 h-px w-full bg-border" />
        <p className="text-center text-sm text-muted-foreground">
          {copyright || '\u00a9 ' + new Date().getFullYear() + ' ' + brand + '. All rights reserved.'}
        </p>
      </div>
    </footer>
  );
}
