"use client";

import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

interface FooterProps {
  brand?: string
}

export default function Footer({ brand = 'NovaCart' }: Partial<FooterProps>) {
  return (
    <footer className="border-t bg-[#F8F9FA]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4">
        <div>
          <h3 className="font-bold text-[#1A1A2E]">{brand}</h3>
          <p className="mt-2 text-sm text-muted-foreground">221 Market Street, San Francisco, CA</p>
          <p className="text-sm text-muted-foreground">Support: Mon-Fri, 9am-6pm</p>
        </div>
        <div>
          <h4 className="font-semibold">Shop</h4>
          <div className="mt-2 flex flex-col gap-1 text-sm text-muted-foreground">
            <Link href="/shop">All Products</Link>
            <Link href="/shop?category=new">New Arrivals</Link>
            <Link href="/shop?category=sale">Sale</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold">Support</h4>
          <div className="mt-2 flex flex-col gap-1 text-sm text-muted-foreground">
            <Link href="/shipping">Shipping</Link>
            <Link href="/returns">Returns</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold">Follow</h4>
          <div className="mt-2 flex items-center gap-3 text-muted-foreground">
            <Link href="#"><Instagram className="h-5 w-5" /></Link>
            <Link href="#"><Twitter className="h-5 w-5" /></Link>
            <Link href="#"><Facebook className="h-5 w-5" /></Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
