"use client";

import { Button } from '@/components/ui/button'
import HeroImageCard from '@/components/HeroImageCard'

interface PageHeroProps {
  headline?: string
  subheadline?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  imageSrc?: string
}

export default function PageHero({
  headline = 'Shop smarter every day',
  subheadline = 'Discover premium products with fast shipping and trusted support.',
  primaryCta = { label: 'Shop now', href: '/shop' },
  secondaryCta = { label: 'Contact support', href: '/contact' },
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577705/site-images/hero-backgrounds/12981881.jpg',
}: Partial<PageHeroProps>) {
  return (
    <section className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
      <div className="md:w-1/2 flex-1 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{headline}</h1>
        <p className="mb-6 text-muted-foreground">{subheadline}</p>
        <div className="flex flex-col md:flex-row gap-3 justify-center md:justify-start">
          <Button size="lg" asChild>
            <a href={primaryCta?.href ?? "#"}>{primaryCta?.label}</a>
          </Button>
          {secondaryCta && (
            <Button variant="outline" size="lg" asChild className="border-border bg-background/10 text-primary-foreground hover:bg-background/20">
              <a href={secondaryCta.href}>{secondaryCta.label}</a>
            </Button>
          )}
        </div>
      </div>
      <div className="md:w-1/2 flex-1 my-6 md:my-0 max-w-xl mx-auto">
        <HeroImageCard imageSrc={imageSrc} />
      </div>
    </section>
  )
}
