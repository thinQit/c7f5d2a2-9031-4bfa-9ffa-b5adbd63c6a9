"use client";

import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface PricingCardProps {
  name: string
  badge: string
  price: string
  period: string
  features: string[]
  cta: string
  highlighted: boolean
}

export default function PricingCard({
  name = 'Starter',
  badge = '',
  price = '$0',
  period = '/mo',
  features = [],
  cta = 'Choose Plan',
  highlighted = false,
}: Partial<PricingCardProps>) {
  return (
    <Card
      className={cn(
        'rounded-xl border border-border bg-card p-6 shadow-sm',
        highlighted ? 'border-[#2563EB] ring-2 ring-[#2563EB]/20' : ''
      )}
    >
      {badge ? (
        <span className={cn('inline-block rounded-full px-3 py-1 text-xs font-medium', highlighted ? 'bg-[#2563EB] text-white' : 'bg-muted text-muted-foreground')}>
          {badge}
        </span>
      ) : null}
      <h3 className="mt-4 text-xl font-semibold text-[#111827]">{name}</h3>
      <p className="mt-2 text-3xl font-bold text-[#111827]">
        {price}
        <span className="ml-1 text-sm font-medium text-muted-foreground">{period}</span>
      </p>

      <ul className="mt-5 space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
            <Check className="mt-0.5 h-4 w-4 text-[#2563EB]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button className={cn('mt-6 w-full rounded-lg', highlighted ? 'bg-[#2563EB] text-white hover:bg-[#1d4ed8]' : '')} variant={highlighted ? 'default' : 'outline'}>
        {cta}
      </Button>
    </Card>
  )
}
