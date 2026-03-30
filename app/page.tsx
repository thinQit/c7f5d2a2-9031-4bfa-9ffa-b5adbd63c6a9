export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight"
import CategoryNav from "@/components/CategoryNav"
import ProductGrid from "@/components/ProductGrid"
import TrustBadges from "@/components/TrustBadges"
import TestimonialsGrid from "@/components/TestimonialsGrid"
import NewsletterForm from "@/components/NewsletterForm"
import ScrollReveal from "@/components/ScrollReveal"

export default function HomePage() {
  return (
    <main>
      <section className="animate-fade-in-up min-h-[80vh]">
        <HeroSpotlight
          title="Everyday essentials, designed to last—delivered fast."
          subtitle="Shop curated home, tech, and travel goods with transparent pricing, 30-day returns, and free shipping over $75."
          primaryCta={{ label: "Shop best sellers", href: "/shop?sort=best" }}
          secondaryCta={{ label: "Browse categories", href: "#categories" }}
        />
      </section>

      <section id="categories" className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <CategoryNav />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <ProductGrid />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <TrustBadges />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <TestimonialsGrid />
          </ScrollReveal>
        </div>
      </section>

      <section id="newsletter" className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <NewsletterForm />
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
