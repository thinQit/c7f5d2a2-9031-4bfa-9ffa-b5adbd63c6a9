"use client";

import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ContentSplitProps {
  eyebrow?: string
  title?: string
  body?: string
  bullets?: string[]
  imageSrc?: string
  imageAlt?: string
  reverse?: boolean
}

export default function ContentSplit({
  eyebrow = 'Why Teams Switch',
  title = 'Operational clarity for every department',
  body = 'From sales handoff to onboarding and renewals, ClarityOps creates a shared system so teams move faster together. Replace ad-hoc updates with standardized workflows and real-time visibility.',
  bullets = ['Single source of truth across teams', 'Automations that eliminate manual follow-up', 'Leadership dashboards with live KPIs'],
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576897/site-images/corporate/10041273.jpg',
  imageAlt = 'Operations team collaborating in office',
  reverse = false,
}: Partial<ContentSplitProps>) {
  return (
    <section id="features" className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className={cn('grid items-center gap-10 md:grid-cols-2', reverse ? 'md:[&>*:first-child]:order-2' : '')}>
          <div>
            <p className="text-sm font-medium text-[#2563EB]">{eyebrow}</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#111827]">{title}</h2>
            <p className="mt-4 text-muted-foreground">{body}</p>
            <ul className="mt-6 space-y-3">
              {bullets.map((item) => (
                <li key={item} className="text-sm text-[#111827]">• {item}</li>
              ))}
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-border">
            <Image src={imageSrc} alt={imageAlt} width={1200} height={800} className="h-full w-full object-cover" unoptimized />
          </div>
        </div>
      </div>
    </section>
  )
}
