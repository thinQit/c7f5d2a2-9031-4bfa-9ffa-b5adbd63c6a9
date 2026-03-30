'use client'

import Link from 'next/link'
import { X, ShoppingBag, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface MobileNavDrawerProps {
  open?: boolean
  onClose?: () => void
  categories?: string[]
  collections?: string[]
  helpLinks?: string[]
}

export default function MobileNavDrawer({
  open = false,
  onClose = () => {},
  categories = ['Women', 'Men', 'Shoes', 'Accessories'],
  collections = ['Spring Edit', 'Best Sellers', 'Workwear'],
  helpLinks = ['Track Order', 'Shipping', 'Returns', 'Contact'],
}: Partial<MobileNavDrawerProps>) {
  return (
    <div className={cn('fixed inset-0 z-[60]', open ? 'pointer-events-auto' : 'pointer-events-none')}>
      <div
        className={cn('absolute inset-0 bg-black/40 transition-opacity', open ? 'opacity-100' : 'opacity-0')}
        onClick={onClose}
      />
      <aside
        className={cn(
          'absolute left-0 top-0 h-full w-[86%] max-w-sm bg-white p-5 transition-transform',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="mb-6 flex items-center justify-between">
          <p className="font-semibold">Menu</p>
          <Button size="icon" variant="ghost" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        <div className="relative mb-5">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input className="pl-9" placeholder="Search products..." />
        </div>
        <section className="mb-5">
          <p className="mb-2 text-xs uppercase text-muted-foreground">Categories</p>
          <div className="space-y-2">
            {categories.map((link) => (
              <Link key={link} href="#" className="block text-sm">
                {link}
              </Link>
            ))}
          </div>
        </section>
        <section className="mb-5">
          <p className="mb-2 text-xs uppercase text-muted-foreground">Collections</p>
          <div className="space-y-2">
            {collections.map((link) => (
              <Link key={link} href="#" className="block text-sm">
                {link}
              </Link>
            ))}
          </div>
        </section>
        <section>
          <p className="mb-2 text-xs uppercase text-muted-foreground">Help</p>
          <div className="space-y-2">
            {helpLinks.map((link) => (
              <Link key={link} href="#" className="block text-sm">
                {link}
              </Link>
            ))}
          </div>
        </section>
        <Button className="mt-8 w-full bg-[#E63946] hover:bg-[#d62839]">
          <ShoppingBag className="mr-2 h-4 w-4" />
          View Cart
        </Button>
      </aside>
    </div>
  )
}
