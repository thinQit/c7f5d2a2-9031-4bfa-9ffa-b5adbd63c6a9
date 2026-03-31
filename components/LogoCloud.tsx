"use client";

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface LogoItem {
  name: string
  logoSrc: string
}

interface LogoCloudProps {
  title?: string
  trustNote?: string
  logos?: LogoItem[]
  ctaLabel?: string
  ctaHref?: string
}

export default function LogoCloud({
  title = 'Trusted by modern teams at high-growth companies',
  trustNote = '500+ teams moved from spreadsheets to ClarityOps in the last 12 months.',
  logos = [
    { name: 'Northpeak', logoSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576902/site-images/corporate/1367276.jpg' },
    { name: 'Pivota', logoSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576867/site-images/corporate/1181619.jpg' },
    { name: 'BlueHarbor', logoSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576881/site-images/corporate/11901335.jpg' },
    { name: 'Kinetiq', logoSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576877/site-images/corporate/14447085.jpg' },
    { name: 'Altis', logoSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576905/site-images/corporate/16291129.jpg' },
    { name: 'StrataOne', logoSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576862/site-images/corporate/159839.jpg' },
  ],
  ctaLabel = 'See Customer Stories',
  ctaHref = '#testimonials',
}: Partial<LogoCloudProps>) {
  return (
    <section className="py-20 md:py-24">
      <div className={cn('mx-auto max-w-7xl px-4 md:px-6')}>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-[#2563EB]">Social Proof</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#111827] md:text-3xl">{title}</h2>
          <p className="mt-3 text-muted-foreground">{trustNote}</p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center rounded-xl border border-border bg-card p-4">
              <Image src={logo.logoSrc} alt={logo.name + ' logo'} width={160} height={72} className="h-10 w-auto object-contain opacity-80" unoptimized />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button asChild variant="outline" className="rounded-lg px-6 py-3 font-semibold">
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
