'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Menu, Search, Store, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import CartButton from '@/components/CartButton'

interface NavItem {
  label: string
  href: string
}

interface NavbarProps {
  logoText?: string
  navItems?: NavItem[]
  className?: string
}

export default function Navbar({
  logoText = 'NovaCart',
  navItems = [
    { label: 'New Arrivals', href: '/shop?category=new' },
    { label: 'Electronics', href: '/shop?category=electronics' },
    { label: 'Home', href: '/shop?category=home' },
    { label: 'Fashion', href: '/shop?category=fashion' },
  ],
  className = '',
}: Partial<NavbarProps>) {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')

  const searchHref = useMemo(() => '/shop?q=' + encodeURIComponent(query), [query])

  return (
    <header className={cn('sticky top-0 z-50 border-b bg-background/95 backdrop-blur', className)}>
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold text-[#1A1A2E]">
          <Store className="h-5 w-5 text-[#E63946]" />
          <span>{logoText}</span>
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-muted-foreground hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-2 md:flex">
          <div className="relative w-72">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-9"
              placeholder="Search products..."
            />
          </div>
          <Button asChild variant="ghost">
            <Link href={searchHref}>Search</Link>
          </Button>
          <CartButton />
        </div>

        <div className="ml-auto flex items-center gap-2 md:hidden">
          <CartButton />
          <Button variant="ghost" size="icon" onClick={() => setIsOpen((v) => !v)} aria-label="Toggle menu">
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t bg-background px-4 py-4 md:hidden">
          <div className="mb-3 flex gap-2">
            <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search products..." />
            <Button asChild>
              <Link href={searchHref}>Go</Link>
            </Button>
          </div>
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="rounded-md px-2 py-2 text-sm hover:bg-muted">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
