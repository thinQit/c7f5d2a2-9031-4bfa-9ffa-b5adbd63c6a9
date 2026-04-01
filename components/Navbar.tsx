'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Search, ShoppingCart, User, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { useState } from 'react'

interface NavbarProps {
  logoText?: string
  logoImageSrc?: string
  categories?: string[]
  className?: string
}

export default function Navbar({
  logoText = 'Italo Pizza',
  logoImageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577145/site-images/ecommerce/34577.jpg',
  categories = ['Pizzas', 'Pasta', 'Starters', 'Desserts', 'Drinks'],
  className = '',
}: Partial<NavbarProps>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className={cn('sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur', className)}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={logoImageSrc}
            alt="Italo Pizza logo"
            width={36}
            height={36}
            className="rounded-full object-cover"
            unoptimized
          />
          <span className="font-semibold text-[#1A1A2E]">{logoText}</span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {categories.map((item) => (
            <Link key={item} href="/menu" className="text-sm font-medium text-[#1A1A2E] hover:text-[#4f46e5]">
              {item}
            </Link>
          ))}
        </nav>

        <div className="hidden max-w-xs flex-1 items-center gap-2 md:flex">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input className="pl-9" placeholder="Search Margherita, Tiramisu..." />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="hidden md:inline-flex">
            <User className="mr-2 h-4 w-4" />
            Account
          </Button>
          <Button size="sm" className="bg-[#E63946] hover:bg-[#d92f3d]">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Cart
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t bg-white px-4 py-3 lg:hidden">
          <div className="mb-3">
            <Input placeholder="Search menu..." />
          </div>
          <div className="flex flex-col gap-2">
            {categories.map((item) => (
              <Link key={item} href="/menu" className="text-sm font-medium text-[#1A1A2E]">
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
