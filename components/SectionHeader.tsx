"use client";

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface SectionHeaderProps {
  title: string
  subtitle: string
  align: 'left' | 'center'
  primaryCtaLabel: string
  primaryCtaHref: string
  secondaryCtaLabel: string
  secondaryCtaHref: string
}

export default function SectionHeader({
  title = 'Section headline',
  subtitle = 'Section subheadline that explains the core value in one clear sentence.',
  align = 'center',
  primaryCtaLabel = '',
  primaryCtaHref = '#',
  secondaryCtaLabel = '',
  secondaryCtaHref = '#',
}: Partial<SectionHeaderProps>) {
  return (
    <div className={cn('mx-auto max-w-3xl', align === 'center' ? 'text-center' : 'text-left')}>
      <h2 className="text-3xl font-bold tracking-tight text-[#111827] md:text-4xl">{title}</h2>
      <p className="mt-3 text-muted-foreground">{subtitle}</p>
      {(primaryCtaLabel || secondaryCtaLabel) && (
        <div className={cn('mt-6 flex flex-wrap gap-3', align === 'center' ? 'justify-center' : 'justify-start')}>
          {primaryCtaLabel ? (
            <Button className="rounded-lg bg-[#2563EB] text-white hover:bg-[#1d4ed8]">
              <Link href={primaryCtaHref}>{primaryCtaLabel}</Link>
            </Button>
          ) : null}
          {secondaryCtaLabel ? (
            <Button variant="outline">
              <Link href={secondaryCtaHref}>{secondaryCtaLabel}</Link>
            </Button>
          ) : null}
        </div>
      )}
    </div>
  )
}
