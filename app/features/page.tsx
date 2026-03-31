export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight"
import ContentSplit from "@/components/ContentSplit"
import CTAVortex from "@/components/CTAVortex"
import SEOHead from "@/components/SEOHead"
import ScrollReveal from "@/components/ScrollReveal"

export default function FeaturesPage() {
  return (
    <main className="bg-background text-foreground">
      <SEOHead
        title="Features — Spotlight Landing"
        description="Explore reusable landing page sections, conversion-focused structure, and polished UI patterns."
      />

      <section
        className="animate-fade-in-up min-h-[80vh] bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576857/site-images/corporate/1181408.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10">
          <HeroSpotlight
            title="A landing page system you can reuse for every launch."
            subtitle="Reusable sections, consistent spacing, and a clear content hierarchy—so you can focus on messaging and ship faster."
            primaryCta={{ label: "See pricing", href: "/pricing" }}
            secondaryCta={{ label: "Contact", href: "/contact" }}
          />
        </div>
      </section>

      <ScrollReveal>
        <section className="animate-fade-in-up py-20 md:py-24 bg-muted">
          <ContentSplit />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="animate-fade-in-up py-20 md:py-24 bg-primary text-primary-foreground">
          <CTAVortex
            title="Turn your product into a clear offer."
            subtitle="Use the structure, swap in your copy, and publish."
            ctaLabel="View pricing"
            ctaHref="/pricing"
            secondaryCtaLabel="Contact"
            secondaryCtaHref="/contact"
          />
        </section>
      </ScrollReveal>
    </main>
  )
}
