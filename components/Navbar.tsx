'use client'

import Link from 'next/link'
import { Menu } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface NavbarProps {
  brandName: string
  ctaLabel: string
  ctaHref: string
  links: { label: string; href: string }[]
}

export default function Navbar({
  brandName = 'GrowthPilot',
  ctaLabel = 'Start Free Trial',
  ctaHref = '#pricing',
  links = [
    { label: 'Features', href: '#features' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],
}: Partial<NavbarProps>) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="#" className="text-lg font-bold tracking-tight text-[#111827]">
          {brandName}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-[#111827]">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button className="rounded-lg bg-[#2563EB] px-6 py-2 text-white hover:bg-[#1d4ed8] focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2">
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-[#111827] md:hidden"
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      <div className={cn('border-t border-border bg-white px-4 py-3 md:hidden', open ? 'block' : 'hidden')}>
        <div className="flex flex-col gap-3">
          {links.map((link) => (
            <Link key={link.label} href={link.href} onClick={() => setOpen(false)} className="text-sm font-medium text-[#111827]">
              {link.label}
            </Link>
          ))}
          <Button className="mt-2 rounded-lg bg-[#2563EB] text-white hover:bg-[#1d4ed8]">
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
