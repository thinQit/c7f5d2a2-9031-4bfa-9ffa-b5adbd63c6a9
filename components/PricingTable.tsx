"use client";

import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface Plan {
  name: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
}

interface PricingTableProps {
  title?: string
  guaranteeLine?: string
  plans?: Plan[]
  comparisonRows?: string[]
}

export default function PricingTable({
  title = 'Simple pricing that scales with your team',
  guaranteeLine = '30-day money-back guarantee. Cancel anytime.',
  plans = [
    { name: 'Starter', price: '$49/mo', description: 'For small teams getting organized.', features: ['Up to 10 users', 'Workflow templates', 'Email support'], highlighted: false },
    { name: 'Growth', price: '$149/mo', description: 'For scaling teams that need visibility.', features: ['Up to 50 users', 'Advanced automations', 'Priority support'], highlighted: true },
    { name: 'Enterprise', price: 'Custom', description: 'For large orgs with security needs.', features: ['Unlimited users', 'SSO + audit logs', 'Dedicated success manager'], highlighted: false },
  ],
  comparisonRows = ['Unlimited projects', 'Custom fields', 'Automations', 'Reporting dashboards'],
}: Partial<PricingTableProps>) {
  return (
    <section id="pricing" className="py-20 md:py-24">
      <div className={cn('mx-auto max-w-7xl px-4 md:px-6')}>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-[#2563EB]">Pricing</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#111827] md:text-3xl">{title}</h2>
          <p className="mt-3 text-sm text-muted-foreground">{guaranteeLine}</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                'rounded-xl border border-border bg-card p-6 shadow-sm',
                plan.highlighted ? 'border-[#7C3AED] shadow-md ring-1 ring-[#7C3AED]/20' : ''
              )}
            >
              {plan.highlighted && (
                <div className="mb-4 inline-flex rounded-md bg-[#7C3AED]/10 px-3 py-1 text-xs font-semibold text-[#7C3AED]">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-semibold text-[#111827]">{plan.name}</h3>
              <p className="mt-1 text-3xl font-bold text-[#111827]">{plan.price}</p>
              <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
              <ul className="mt-5 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-[#111827]">
                    <Check className="h-4 w-4 text-[#2563EB]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className={cn('mt-6 w-full rounded-lg px-6 py-3 font-semibold', plan.highlighted ? 'bg-[#7C3AED] text-white hover:bg-[#6D28D9]' : 'bg-[#2563EB] text-white hover:bg-[#1D4ED8]')}>
                Choose {plan.name}
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-xl border border-border">
          <table className="w-full text-left text-sm">
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-medium text-[#111827]">{row}</td>
                  <td className="px-4 py-3 text-muted-foreground">Included</td>
                  <td className="px-4 py-3 text-muted-foreground">Included</td>
                  <td className="px-4 py-3 text-muted-foreground">Included</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
