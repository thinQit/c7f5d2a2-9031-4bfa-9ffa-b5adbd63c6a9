'use client'

import Link from 'next/link'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface MobileNavDrawerProps {
  open?: boolean
  onClose?: () => void
  categories?: string[]
  collections?: string[]
  quickLinks?: string[]
}

export default function MobileNavDrawer({
  open = false,
  onClose = () => {},
  categories = ['New Arrivals', 'Women', 'Men', 'Accessories', 'Sale'],
  collections = ['Spring Edit', 'Best Sellers', 'Under $50'],
  quickLinks = ['Track Order', 'Shipping', 'Contact Support'],
}: Partial<MobileNavDrawerProps>) {
  return (
    <div className={cn('fixed inset-0 z-50 md:hidden', open ? 'pointer-events-auto' : 'pointer-events-none')}>
      <div className={cn('absolute inset-0 bg-black/40 transition-opacity', open ? 'opacity-100' : 'opacity-0')} onClick={onClose} />
      <aside className={cn('absolute left-0 top-0 h-full w-[86%] max-w-sm bg-white p-5 transition-transform', open ? 'translate-x-0' : '-translate-x-full')}>
        <div className="mb-6 flex items-center justify-between">
          <p className="font-semibold text-[#1A1A2E]">Menu</p>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="space-y-6">
          <section>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Categories</h3>
            <div className="space-y-2">
              {categories.map((item) => (
                <Link key={item} href="#" className="block text-sm text-[#1A1A2E] hover:text-[#E63946]">
                  {item}
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Collections</h3>
            <div className="space-y-2">
              {collections.map((item) => (
                <Link key={item} href="#" className="block text-sm text-[#1A1A2E] hover:text-[#E63946]">
                  {item}
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((item) => (
                <Link key={item} href="#" className="block text-sm text-[#1A1A2E] hover:text-[#E63946]">
                  {item}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </aside>
    </div>
  )
}
