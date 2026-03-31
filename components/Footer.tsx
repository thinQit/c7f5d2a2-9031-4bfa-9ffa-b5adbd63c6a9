"use client";

import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

interface FooterProps {
  brand?: string
}

export default function Footer({
  brand = 'Storefront',
}: Partial<FooterProps>) {
  return (
    <footer className="border-t bg-[#F8F9FA]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4 md:px-6">
        <div>
          <h3 className="font-semibold text-[#1A1A2E]">{brand}</h3>
          <p className="mt-2 text-sm text-muted-foreground">hello@storefront.co<br />+1 (555) 014-8899</p>
        </div>
        <div>
          <h4 className="mb-2 text-sm font-semibold">Shop</h4>
          <div className="space-y-1 text-sm text-muted-foreground">
            <Link href="#" className="block hover:text-[#E63946]">New Arrivals</Link>
            <Link href="#" className="block hover:text-[#E63946]">Best Sellers</Link>
            <Link href="#" className="block hover:text-[#E63946]">Sale</Link>
          </div>
        </div>
        <div>
          <h4 className="mb-2 text-sm font-semibold">Support</h4>
          <div className="space-y-1 text-sm text-muted-foreground">
            <Link href="#" className="block hover:text-[#E63946]">Shipping</Link>
            <Link href="#" className="block hover:text-[#E63946]">Returns</Link>
            <Link href="#" className="block hover:text-[#E63946]">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="mb-2 text-sm font-semibold">Follow</h4>
          <div className="flex gap-2">
            <Link href="#" className="rounded-md border p-2"><Instagram className="h-4 w-4" /></Link>
            <Link href="#" className="rounded-md border p-2"><Facebook className="h-4 w-4" /></Link>
            <Link href="#" className="rounded-md border p-2"><Twitter className="h-4 w-4" /></Link>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">Payments: Visa, Mastercard, Amex, PayPal</p>
        </div>
      </div>
    </footer>
  )
}
