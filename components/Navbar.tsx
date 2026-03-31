'use client'

import Link from 'next/link'
import { Search, User, ShoppingCart, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import SearchBar from '@/components/SearchBar'
import CartButton from '@/components/CartButton'

interface NavbarProps {
  logoText?: string
  categories?: string[]
  cartCount?: number
  onMenuClick?: () => void
  className?: string
}

export default function Navbar({
  logoText = 'Storefront',
  categories = ['New Arrivals', 'Women', 'Men', 'Accessories', 'Sale'],
  cartCount = 2,
  onMenuClick = () => {},
  className = '',
}: Partial<NavbarProps>) {
  return (
    <header className={cn('sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/75', className)}>
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 md:px-6">
        <Button variant="ghost" size="icon" className="md:hidden" onClick={onMenuClick}>
          <Menu className="h-5 w-5" />
        </Button>

        <Link href="/" className="font-semibold text-[#1A1A2E] text-lg">
          {logoText}
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {categories.map((category) => (
            <Link key={category} href={'/collections/' + category.toLowerCase().replace(/\s+/g, '-')} className="text-sm text-[#1A1A2E] hover:text-[#E63946] transition-colors">
              {category}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden w-full max-w-md md:block">
          <SearchBar />
        </div>

        <Button variant="ghost" size="icon" className="hidden md:inline-flex">
          <User className="h-5 w-5" />
        </Button>

        <CartButton count={cartCount} />
      </div>
    </header>
  )
}
