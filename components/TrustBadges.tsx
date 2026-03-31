"use client";

import { Truck, RotateCcw, ShieldCheck, Headset, CreditCard } from 'lucide-react'

const badges = [
  {
    icon: Truck,
    title: 'Fast shipping',
    description: 'Orders ship in 24–48 hours from Austin, TX.',
  },
  {
    icon: RotateCcw,
    title: '30-day returns',
    description: 'Easy returns with prepaid labels on eligible items.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure payments',
    description: 'Stripe-powered checkout with PCI-compliant processing.',
  },
  {
    icon: Headset,
    title: 'Real support',
    description: 'Email support Mon–Fri, 9am–5pm CT. Typical reply under 4 hours.',
  },
]

const paymentMethods = [
  'Visa',
  'Mastercard',
  'AmEx',
  'Apple Pay',
  'Google Pay',
  'Shop Pay',
]

export default function TrustBadges() {
  return (
    <section className="pt-0">
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Checkout with confidence</h2>
        <p className="text-muted-foreground mt-2">
          Clear policies, secure payments, and fast fulfillment—no surprises.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {badges.map((badge, i) => (
          <div
            key={i}
            className="flex flex-col items-center rounded-xl border border-border bg-card px-6 py-8 shadow-sm"
          >
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <badge.icon className="h-7 w-7" />
            </div>
            <span className="font-semibold text-lg">{badge.title}</span>
            <p className="text-sm text-muted-foreground mt-1 text-center">{badge.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-4 flex-wrap">
        {paymentMethods.map(method => (
          <span
            key={method}
            className="inline-flex items-center rounded-full border border-border bg-muted px-4 py-1 text-sm text-muted-foreground mr-2 mb-2"
          >
            <CreditCard className="mr-2 h-4 w-4 text-primary" /> {method}
          </span>
        ))}
      </div>
    </section>
  )
}
