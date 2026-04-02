'use client'

import Link from 'next/link'
import { X, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface MobileNavDrawerProps {
  open?: boolean
  onClose?: () => void
  collections?: string[]
  quickLinks?: string[]
}

export default function MobileNavDrawer({
  open = false,
  onClose = () => {},
  collections = ['New Arrivals', 'Best Sellers', 'Summer Edit', 'Sale'],
  quickLinks = ['Track Order', 'Shipping', 'Returns', 'Support'],
}: Partial<MobileNavDrawerProps>) {
  return (
    <div className={cn('fixed inset-0 z-[60] md:hidden', open ? 'pointer-events-auto' : 'pointer-events-none')}>
      <div className={cn('absolute inset-0 bg-black/40 transition-opacity', open ? 'opacity-100' : 'opacity-0')} onClick={onClose} />
      <aside className={cn('absolute left-0 top-0 h-full w-[85%] max-w-sm bg-white p-5 shadow-xl transition-transform', open ? 'translate-x-0' : '-translate-x-full')}>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-bold text-[#1A1A2E]">Menu</h2>
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close menu">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="relative mb-6">
          <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search products..." className="pl-9" />
        </div>

        <div className="mb-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Collections</p>
          <div className="space-y-3">
            {collections.map((item) => (
              <Link key={item} href="#" className="block text-sm font-medium text-[#1A1A2E]/90 hover:text-[#E63946]">
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Quick Links</p>
          <div className="space-y-3">
            {quickLinks.map((item) => (
              <Link key={item} href="#" className="block text-sm text-[#1A1A2E]/80 hover:text-[#E63946]">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </div>
  )
}
