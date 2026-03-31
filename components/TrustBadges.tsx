"use client";

import { ShieldCheck, Truck, Headphones } from 'lucide-react'

interface TrustBadgesProps {
  shippingThreshold?: string
  supportHours?: string
}

export default function TrustBadges({
  shippingThreshold = 'Free shipping on orders over $75',
  supportHours = 'Live support: Mon-Fri, 9am-8pm',
}: Partial<TrustBadgesProps>) {
  const items = [
    { icon: Truck, title: 'Fast Delivery', copy: shippingThreshold },
    { icon: ShieldCheck, title: 'Secure Checkout', copy: 'Encrypted payments and buyer protection' },
    { icon: Headphones, title: 'Helpful Support', copy: supportHours },
  ]

  return (
    <section className="py-14">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 md:grid-cols-3 md:px-6">
        {items.map((item) => (
          <div key={item.title} className="rounded-xl border bg-white p-5">
            <item.icon className="mb-3 h-5 w-5 text-[#E63946]" />
            <h3 className="font-semibold text-[#1A1A2E]">{item.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{item.copy}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
