"use client";

import { ShieldCheck, Truck, RotateCcw } from 'lucide-react'

interface TrustBadgeRowProps {
  items?: { icon: string; title: string; detail: string }[]
}

export default function TrustBadgeRow({
  items = [
    { icon: 'Truck', title: 'Free Shipping', detail: 'On orders over $75' },
    { icon: 'RotateCcw', title: 'Easy Returns', detail: '30-day hassle-free returns' },
    { icon: 'ShieldCheck', title: 'Secure Checkout', detail: 'Encrypted payment processing' },
  ],
}: Partial<TrustBadgeRowProps>) {
  const iconMap: Record<string, any> = { Truck, RotateCcw, ShieldCheck }

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item) => {
        const Icon = iconMap[item.icon] || ShieldCheck
        return (
          <div key={item.title} className="rounded-xl border bg-white p-4">
            <Icon className="mb-2 h-5 w-5 text-[#E63946]" />
            <h4 className="font-semibold text-[#1A1A2E]">{item.title}</h4>
            <p className="text-sm text-muted-foreground">{item.detail}</p>
          </div>
        )
      })}
    </div>
  )
}
