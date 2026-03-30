export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight"
import FeaturesGrid from "@/components/FeaturesGrid"
import StatsCounter from "@/components/StatsCounter"
import CTABand from "@/components/CTABand"
import ScrollReveal from "@/components/ScrollReveal"

export default function AboutPage() {
  return (
    <main>
      <section className="animate-fade-in-up min-h-[80vh]">
        <HeroSpotlight
          title="Curated essentials, not endless options"
          subtitle="We test, compare, and select products that make daily routines simpler—then back them with clear policies."
          primaryCta={{ label: "Shop best sellers", href: "/shop?collection=best-sellers" }}
          secondaryCta={{ label: "Contact us", href: "/contact" }}
        />
      </section>

      <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <FeaturesGrid
              badge="Our values"
              headline="Built for people who hate wasting time"
              subheadline="Spotlight started as a small team comparing everyday gear for friends and coworkers—now we do it at scale."
              features={[
                { icon: "CheckCircle", title: "Quality over quantity", description: "Every item is vetted for durability and value." },
                { icon: "CircleDollarSign", title: "Transparent pricing", description: "No hidden fees, clear comparisons, honest value." },
                { icon: "Truck", title: "Reliable fulfillment", description: "Consistent delivery windows and proactive updates." },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <StatsCounter
            stats={[
              { value: "6,200+", label: "Verified reviews" },
              { value: "2–4 days", label: "Avg. delivery" },
              { value: "30 days", label: "Returns window" },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <CTABand />
        </div>
      </section>
    </main>
  )
}
