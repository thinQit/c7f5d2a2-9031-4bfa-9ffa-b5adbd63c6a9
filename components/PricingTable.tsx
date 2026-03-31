"use client";

import PricingCard from '@/components/PricingCard'
import { ShieldCheck } from 'lucide-react'

export default function PricingTable() {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/mo',
      badge: 'For individuals',
      features: ['1 active project', 'Basic analytics', 'Email support', 'Landing page templates'],
      cta: 'Start Starter',
      highlighted: false,
    },
    {
      name: 'Growth',
      price: '$79',
      period: '/mo',
      badge: 'Most popular',
      features: ['Unlimited projects', 'Advanced analytics', 'A/B testing', 'Priority support', 'Team collaboration'],
      cta: 'Start Growth',
      highlighted: true,
    },
    {
      name: 'Scale',
      price: '$199',
      period: '/mo',
      badge: 'For teams',
      features: ['Everything in Growth', 'SLA support', 'Custom domains', 'SSO & security controls', 'Dedicated success manager'],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-[#111827] md:text-4xl">Simple pricing. Clear value.</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          Choose the plan that matches your stage. Upgrade anytime as your pipeline grows.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              name={plan.name}
              price={plan.price}
              period={plan.period}
              badge={plan.badge}
              features={plan.features}
              cta={plan.cta}
              highlighted={plan.highlighted}
            />
          ))}
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-xl border border-border bg-muted/40 p-4 text-sm text-muted-foreground">
          <ShieldCheck className="mt-0.5 h-4 w-4 text-[#2563EB]" />
          <p>30-day money-back guarantee. If you do not see measurable conversion lift, we will refund your first month.</p>
        </div>
      </div>
    </section>
  )
}
