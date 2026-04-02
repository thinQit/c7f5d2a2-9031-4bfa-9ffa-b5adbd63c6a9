"use client";

import Link from 'next/link'

interface FooterProps {
  brand?: string
}

export default function Footer({ brand = 'NovaStore' }: Partial<FooterProps>) {
  return (
    <footer className="border-t bg-[#F8F9FA]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4 md:px-6">
        <div>
          <h3 className="text-lg font-bold text-[#1A1A2E]">{brand}</h3>
          <p className="mt-2 text-sm text-muted-foreground">Modern essentials for everyday life.</p>
          <p className="mt-3 text-sm text-muted-foreground">102 Market Street, San Francisco, CA</p>
          <p className="text-sm text-muted-foreground">Support hours: Mon–Fri, 9am–6pm</p>
        </div>
        <div>
          <h4 className="font-semibold text-[#1A1A2E]">Shop</h4>
          <div className="mt-3 space-y-2 text-sm">
            <Link href="#" className="block text-muted-foreground hover:text-[#E63946]">New Arrivals</Link>
            <Link href="#" className="block text-muted-foreground hover:text-[#E63946]">Best Sellers</Link>
            <Link href="#" className="block text-muted-foreground hover:text-[#E63946]">Sale</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-[#1A1A2E]">Support</h4>
          <div className="mt-3 space-y-2 text-sm">
            <Link href="#" className="block text-muted-foreground hover:text-[#E63946]">Help Center</Link>
            <Link href="#" className="block text-muted-foreground hover:text-[#E63946]">Shipping & Returns</Link>
            <Link href="#" className="block text-muted-foreground hover:text-[#E63946]">Track Order</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-[#1A1A2E]">Legal</h4>
          <div className="mt-3 space-y-2 text-sm">
            <Link href="#" className="block text-muted-foreground hover:text-[#E63946]">Privacy Policy</Link>
            <Link href="#" className="block text-muted-foreground hover:text-[#E63946]">Terms of Service</Link>
            <Link href="#" className="block text-muted-foreground hover:text-[#E63946]">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
