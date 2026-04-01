"use client";

import { Bike, Store, ShieldCheck, CreditCard } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TrustBadgesProps {
  className?: string
}

export default function TrustBadges({ className = '' }: Partial<TrustBadgesProps>) {
  const badges = [
    { icon: Bike, title: 'Fast Delivery', text: '30-40 min average delivery time' },
    { icon: Store, title: 'Easy Pickup', text: 'Skip the line with express pickup' },
    { icon: ShieldCheck, title: 'Fresh Ingredients', text: 'Daily prepared dough & sauces' },
    { icon: CreditCard, title: 'Secure Payments', text: 'Trusted checkout with all major cards' },
  ]

  return (
    <section className={cn('bg-[#F8F9FA] py-12', className)}>
      <div className="mx-auto grid max-w-7xl gap-4 px-4 md:grid-cols-2 lg:grid-cols-4 md:px-6">
        {badges.map((item) => (
          <div key={item.title} className="rounded-xl border bg-white p-4">
            <item.icon className="mb-2 h-5 w-5 text-[#10b981]" />
            <h3 className="text-sm font-semibold text-[#1A1A2E]">{item.title}</h3>
            <p className="text-xs text-muted-foreground">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
