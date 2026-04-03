'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavItem {
  label: string;
  href: string;
}

interface NavbarStickyProps {
  logo: string;
  navItems: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

export default function NavbarSticky({
  logo = 'Sankalp',
  navItems = [],
  ctaLabel = '',
  ctaHref = '#',
}: Partial<NavbarStickyProps>) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 animate-fade-in-up">
        <Link href="/" className="text-xl font-bold text-foreground">
          {logo}
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map(function (item) {
            return (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            );
          })}
          {ctaLabel && ctaHref && (
            <Button asChild className="transition-all duration-200 hover:scale-105">
              <a href={ctaHref}>{ctaLabel}</a>
            </Button>
          )}
        </nav>
        <button
          className="p-2 md:hidden"
          onClick={function () {
            setMobileOpen(!mobileOpen);
          }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
        </button>
      </div>
      {mobileOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-4">
            {navItems.map(function (item) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  onClick={function () {
                    setMobileOpen(false);
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
            {ctaLabel && ctaHref && (
              <Button className="w-full transition-all duration-200 hover:scale-105" asChild>
                <a href={ctaHref}>{ctaLabel}</a>
              </Button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
