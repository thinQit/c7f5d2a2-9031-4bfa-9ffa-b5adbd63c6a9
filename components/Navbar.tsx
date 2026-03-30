'use client'

import Link from 'next/link'
import { Menu, ShoppingCart, User, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface NavbarProps {
  logoText?: string
  categories?: string[]
  cartCount?: number
  onMenuClick?: () => void
  className?: string
}

export default function Navbar({
  logoText = 'NovaStore',
  categories = ['New Arrivals', 'Women', 'Men', 'Accessories', 'Sale'],
  cartCount = 3,
  onMenuClick = () => {},
  className = '',
}: Partial<NavbarProps>) {
  return (
    <header className={cn('sticky top-0 z-50 border-b bg-white/95 backdrop-blur', className)}>
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 md:px-6">
        <Button variant="ghost" size="icon" className="md:hidden" onClick={onMenuClick}>
          <Menu className="h-5 w-5" />
        </Button>
        <Link href="/" className="text-xl font-bold text-[#1A1A2E]">
          {logoText}
        </Link>
        <nav className="hidden items-center gap-5 md:flex">
          {categories.map((item) => (
            <Link key={item} href="#" className="text-sm text-muted-foreground hover:text-[#1A1A2E]">
              {item}
            </Link>
          ))}
        </nav>
        <div className="ml-auto hidden w-full max-w-sm items-center md:flex">
          <div className="relative w-full">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input className="pl-9" placeholder="Search products..." />
          </div>
        </div>
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          <span className="absolute -right-1 -top-1 rounded-full bg-[#E63946] px-1.5 text-[10px] text-white">
            {cartCount}
          </span>
        </Button>
      </div>
    </header>
  )
}
