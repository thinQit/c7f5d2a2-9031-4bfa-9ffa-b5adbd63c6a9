export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight"
import ContentSplit from "@/components/ContentSplit"
import SEOHead from "@/components/SEOHead"
import ScrollReveal from "@/components/ScrollReveal"

export default function TermsPage() {
  return (
    <main className="bg-background text-foreground">
      <SEOHead
        title="Terms of Service — Spotlight Landing"
        description="Review Spotlight Landing licensing, support expectations, and refund policy."
      />

      <section
        className="animate-fade-in-up min-h-[80vh] bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576897/site-images/corporate/10041267.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10">
          <HeroSpotlight
            title="Terms of Service"
            subtitle="These terms outline licensing, acceptable use, and support expectations for Spotlight Landing."
            primaryCta={{ label: "Contact", href: "/contact" }}
            secondaryCta={{ label: "Home", href: "/" }}
          />
        </div>
      </section>

      <ScrollReveal>
        <section className="animate-fade-in-up py-20 md:py-24 bg-muted">
          <ContentSplit />
        </section>
      </ScrollReveal>
    </main>
  )
}
