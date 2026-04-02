'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Spotlight } from '@/components/ui/backgrounds/spotlight'
import { Button } from '@/components/ui/button'

interface AceternityHeroSpotlightProps {
  headline?: string
  subheadline?: string
  imageSrc?: string
}

export default function AceternityHeroSpotlight({
  headline = 'Spring Sale: Up to 40% Off Essentials',
  subheadline = 'Discover premium everyday products with fast shipping and easy returns.',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577700/site-images/hero-backgrounds/13551578.jpg',
}: Partial<AceternityHeroSpotlightProps>) {
  return (
    <section className="relative overflow-hidden rounded-2xl border bg-[#1A1A2E] px-6 py-16 text-white md:px-10">
      <Spotlight className="-top-40 left-0 md:left-40" fill="#38bdf8" />
      <div className="relative z-10 grid items-center gap-8 md:grid-cols-2">
        <div>
          <span className="inline-block rounded-full bg-[#E63946] px-3 py-1 text-xs font-semibold">Limited Time Offer</span>
          <h1 className="mt-4 text-3xl font-bold md:text-5xl">{headline}</h1>
          <p className="mt-4 max-w-lg text-sm text-white/80 md:text-base">{subheadline}</p>
          <div className="mt-6 flex gap-3">
            <Button asChild className="bg-[#E63946] text-white hover:bg-[#E63946]/90">
              <Link href="#">Shop Now</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="#">Explore Categories</Link>
            </Button>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl border border-white/20">
          <Image src={imageSrc} alt="Hero product highlight" width={1000} height={700} unoptimized className="h-[360px] w-full object-cover" />
        </div>
      </div>
    </section>
  )
}
