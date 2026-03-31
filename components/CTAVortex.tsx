'use client'

import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { Spotlight } from '@/components/ui/backgrounds/spotlight'
import { Button } from '@/components/ui/button'

interface CTAVortexProps {
  title: string
  subtitle: string
  bullets: string[]
  ctaLabel: string
  ctaHref: string
}

export default function CTAVortex({
  title = 'Ready to turn more traffic into revenue?',
  subtitle = 'Launch your highest-converting page this week with battle-tested sections and fast setup.',
  bullets = ['No-code editing for marketing teams', 'Built-in conversion analytics', 'Fast onboarding and support'],
  ctaLabel = 'Start Free Trial',
  ctaHref = '#',
}: Partial<CTAVortexProps>) {
  return (
    <section className="relative overflow-hidden bg-[#111827] py-20 text-white md:py-24">
      <Spotlight className="-top-20 left-0 md:left-40" fill="#7C3AED" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center md:px-6">
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-white/80 md:text-base">{subtitle}</p>

        <div className="mt-8 grid gap-3 text-left sm:grid-cols-3">
          {bullets.map((bullet) => (
            <div key={bullet} className="rounded-lg border border-white/20 bg-white/5 p-3 text-sm">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#60a5fa]" />
                <span>{bullet}</span>
              </div>
            </div>
          ))}
        </div>

        <Button className="mt-8 rounded-lg bg-[#2563EB] px-6 py-3 text-white hover:bg-[#1d4ed8] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#111827]">
          <Link href={ctaHref}>{ctaLabel}</Link>
        </Button>
      </div>
    </section>
  )
}
