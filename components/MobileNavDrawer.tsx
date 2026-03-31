'use client'

import { X, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface MobileNavDrawerProps {
  open?: boolean
  onClose?: () => void
  categories?: string[]
  quickLinks?: string[]
}

export default function MobileNavDrawer({
  open = false,
  onClose = () => {},
  categories = ['New Arrivals', 'Best Sellers', 'Electronics', 'Home', 'Fashion'],
  quickLinks = ['Track Order', 'Returns', 'Help Center'],
}: Partial<MobileNavDrawerProps>) {
  return (
    <div className={cn('fixed inset-0 z-50 md:hidden', open ? 'pointer-events-auto' : 'pointer-events-none')}>
      <div
        className={cn('absolute inset-0 bg-black/40 transition-opacity', open ? 'opacity-100' : 'opacity-0')}
        onClick={onClose}
      />
      <aside
        className={cn(
          'absolute left-0 top-0 h-full w-[88%] max-w-sm bg-background p-4 shadow-xl transition-transform',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="mb-4 flex items-center justify-between">
          <p className="font-semibold">Menu</p>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="mb-6 flex items-center gap-2 rounded-lg border px-3 py-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input className="w-full bg-transparent text-sm outline-none" placeholder="Search..." />
        </div>

        <p className="mb-2 text-xs uppercase text-muted-foreground">Categories</p>
        <div className="mb-6 space-y-1">
          {categories.map((item) => (
            <a key={item} href="#" className="block rounded-md px-2 py-2 text-sm hover:bg-muted">
              {item}
            </a>
          ))}
        </div>

        <p className="mb-2 text-xs uppercase text-muted-foreground">Quick Links</p>
        <div className="space-y-1">
          {quickLinks.map((item) => (
            <a key={item} href="#" className="block rounded-md px-2 py-2 text-sm hover:bg-muted">
              {item}
            </a>
          ))}
        </div>
      </aside>
    </div>
  )
}
