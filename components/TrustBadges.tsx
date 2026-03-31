"use client";

import TrustBadgeItem from '@/components/TrustBadgeItem'

interface BadgeData {
  icon: string
  title: string
  description: string
}

interface TrustBadgesProps {
  items?: BadgeData[]
}

export default function TrustBadges({
  items = [
    { icon: 'Truck', title: 'Free Shipping', description: 'Orders over $75 ship free in 2-4 days.' },
    { icon: 'RotateCcw', title: '30-Day Returns', description: 'Simple returns with prepaid labels.' },
    { icon: 'ShieldCheck', title: 'Secure Checkout', description: '256-bit encrypted payment processing.' },
    { icon: 'BadgeCheck', title: '1-Year Warranty', description: 'Coverage included on all featured items.' },
  ],
}: Partial<TrustBadgesProps>) {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <TrustBadgeItem key={item.title + i} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
