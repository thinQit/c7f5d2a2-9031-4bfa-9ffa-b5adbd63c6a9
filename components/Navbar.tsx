'use client'

import Link from 'next/link'
import { Search, ShoppingCart, User, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface NavbarProps {
  logoText?: string
  categories?: string[]
  cartCount?: number
  showAccount?: boolean
  onMenuClick?: () => void
}

export default function Navbar({
  logoText = 'NovaStore',
  categories = ['New In', 'Women', 'Men', 'Accessories', 'Sale'],
  cartCount = 2,
  showAccount = true,
  onMenuClick = () => {},
}: Partial<NavbarProps>) {
  return (
    <header className="sticky top-0 z-50 border-b bg-[#F8F9FA]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F8F9FA]/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 md:px-6">
        <Button variant="ghost" size="icon" className="md:hidden" onClick={onMenuClick} aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </Button>

        <Link href="/" className="text-lg font-bold text-[#1A1A2E]">
          {logoText}
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {categories.map((category) => (
            <Link key={category} href="#" className="text-sm font-medium text-[#1A1A2E]/80 hover:text-[#E63946]">
              {category}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden max-w-sm flex-1 items-center md:flex">
          <div className="relative w-full">
            <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input className={cn('pl-9', 'rounded-lg')} placeholder="Search products..." />
          </div>
        </div>

        <div className="flex items-center gap-1">
          {showAccount && (
            <Button variant="ghost" size="icon" aria-label="Account">
              <User className="h-5 w-5" />
            </Button>
          )}
          <Button variant="ghost" size="icon" className="relative" aria-label="Cart">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 rounded-full bg-[#E63946] px-1.5 py-0.5 text-[10px] font-bold text-white">
              {cartCount}
            </span>
          </Button>
        </div>
      </div>
    </header>
  )
}
