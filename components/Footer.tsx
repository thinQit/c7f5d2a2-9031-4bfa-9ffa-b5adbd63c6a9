"use client";

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface FooterProps {
  companyName?: string
  address?: string
  hours?: string[]
  legalLinks?: { label: string; href: string }[]
  ctaLabel?: string
  ctaHref?: string
}

export default function Footer({
  companyName = 'ClarityOps',
  address = '245 Market Street, Suite 900, San Francisco, CA 94105',
  hours = ['Mon–Fri: 8:00 AM – 6:00 PM', 'Sat: 9:00 AM – 1:00 PM', 'Sun: Closed'],
  legalLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
  ctaLabel = 'Book a Demo',
  ctaHref = '#home',
}: Partial<FooterProps>) {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className={cn('mx-auto max-w-7xl px-4 py-16 md:px-6')}>
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#111827]">{companyName}</h3>
            <p className="text-sm text-muted-foreground">
              Growth-focused operations platform helping teams streamline workflows, improve visibility, and scale confidently.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-[#111827]">Address</h4>
            <p className="text-sm text-muted-foreground">{address}</p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-[#111827]">Hours</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {hours.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-[#111827]">Get Started</h4>
            <Button asChild className="rounded-lg bg-[#7C3AED] px-6 py-3 font-semibold text-white hover:bg-[#6D28D9]">
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>
            <div className="space-y-2">
              {legalLinks.map((link) => (
                <Link key={link.label} href={link.href} className="block text-sm text-muted-foreground hover:text-[#2563EB]">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} {companyName}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
