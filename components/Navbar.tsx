'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface NavItem {
  label: string
  href: string
}

interface NavbarProps {
  brandName?: string
  logoSrc?: string
  navItems?: NavItem[]
  ctaLabel?: string
  ctaHref?: string
}

export default function Navbar({
  brandName = 'ClarityOps',
  logoSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576909/site-images/corporate/1181638.jpg',
  navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],
  ctaLabel = 'Start Free Trial',
  ctaHref = '#pricing',
}: Partial<NavbarProps>) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="#home" className="flex items-center gap-3">
          <div className="relative h-8 w-8 overflow-hidden rounded-md">
            <Image src={logoSrc} alt={brandName} fill className="object-cover" unoptimized />
          </div>
          <span className="font-semibold text-[#111827]">{brandName}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-[#111827] transition hover:text-[#2563EB]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="rounded-lg bg-[#2563EB] px-6 py-3 font-semibold text-white hover:bg-[#1D4ED8]">
            <Link href={ctaHref}>
              {ctaLabel}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Toggle menu">
          {open ? <X className="h-6 w-6 text-[#111827]" /> : <Menu className="h-6 w-6 text-[#111827]" />}
        </button>
      </div>

      <div className={cn('md:hidden overflow-hidden border-t border-border bg-white transition-all', open ? 'max-h-96' : 'max-h-0')}>
        <div className="space-y-1 px-4 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-sm font-medium text-[#111827] hover:bg-muted"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="mt-3 w-full rounded-lg bg-[#2563EB] px-6 py-3 font-semibold text-white hover:bg-[#1D4ED8]">
            <Link href={ctaHref} onClick={() => setOpen(false)}>
              {ctaLabel}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
