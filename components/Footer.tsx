"use client";

import Link from 'next/link'
import { Facebook, Instagram, MapPin, Phone, Clock, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FooterProps {
  className?: string
  brandName?: string
  address?: string
  phone?: string
  email?: string
  hours?: string[]
}

export default function Footer({
  className = '',
  brandName = 'Italo Pizza',
  address = '245 Via Roma Street, Downtown, New York, NY 10012',
  phone = '+1 (212) 555-0199',
  email = 'ciao@italopizza.com',
  hours = ['Mon - Thu: 11:00 AM - 10:00 PM', 'Fri - Sat: 11:00 AM - 11:30 PM', 'Sun: 12:00 PM - 9:30 PM'],
}: Partial<FooterProps>) {
  return (
    <footer className={cn('border-t bg-[#F8F9FA]', className)}>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4 md:px-6">
        <div>
          <h3 className="mb-3 text-lg font-bold text-[#1A1A2E]">{brandName}</h3>
          <p className="text-sm text-muted-foreground">Authentic Italian flavors, handcrafted daily with fresh ingredients.</p>
        </div>

        <div>
          <h4 className="mb-3 font-semibold text-[#1A1A2E]">Visit Us</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4" /> {address}</li>
            <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4" /> {phone}</li>
            <li className="flex gap-2"><Mail className="mt-0.5 h-4 w-4" /> {email}</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-semibold text-[#1A1A2E]">Opening Hours</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {hours.map((line) => (
              <li key={line} className="flex gap-2"><Clock className="mt-0.5 h-4 w-4" /> {line}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-semibold text-[#1A1A2E]">Follow Us</h4>
          <div className="mb-4 flex items-center gap-3">
            <Link href="#" className="rounded-lg border p-2 hover:bg-white"><Instagram className="h-4 w-4" /></Link>
            <Link href="#" className="rounded-lg border p-2 hover:bg-white"><Facebook className="h-4 w-4" /></Link>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-[#4f46e5]">Privacy Policy</Link>
            <Link href="#" className="text-muted-foreground hover:text-[#4f46e5]">Terms of Service</Link>
            <Link href="#" className="text-muted-foreground hover:text-[#4f46e5]">Delivery Policy</Link>
          </div>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {brandName}. All rights reserved.
      </div>
    </footer>
  )
}
