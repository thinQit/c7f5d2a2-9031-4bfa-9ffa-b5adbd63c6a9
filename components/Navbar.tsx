'use client'

import { Search, User, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import CartButton from '@/components/CartButton'

interface NavbarProps {
  logoText?: string
  categories?: string[]
  cartCount?: number
  onMenuClick?: () => void
}

export default function Navbar({
  logoText = 'Storefront',
  categories = ['New Arrivals', 'Best Sellers', 'Electronics', 'Home', 'Fashion'],
  cartCount = 2,
  onMenuClick = () => {},
}: Partial<NavbarProps>) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 md:px-6">
        <Button variant="ghost" size="icon" className="md:hidden" onClick={onMenuClick}>
          <Menu className="h-5 w-5" />
        </Button>

        <a href="/" className="text-lg font-bold text-[#1A1A2E]">
          {logoText}
        </a>

        <nav className="hidden items-center gap-5 md:flex">
          {categories.map((cat) => (
            <a key={cat} href="#" className="text-sm text-muted-foreground hover:text-foreground">
              {cat}
            </a>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-2 md:flex">
          <div className={cn('flex items-center gap-2 rounded-lg border px-3 py-2')}>
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              className="w-40 bg-transparent text-sm outline-none lg:w-56"
              placeholder="Search products"
            />
          </div>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <CartButton count={cartCount} />
        </div>

        <div className="ml-auto md:hidden">
          <CartButton count={cartCount} />
        </div>
      </div>
    </header>
  )
}
