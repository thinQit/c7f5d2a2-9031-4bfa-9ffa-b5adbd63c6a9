export const dynamic = 'force-dynamic';

import PageHero from "@/components/PageHero"
import WireframeMap from "@/components/WireframeMap"
import RevealOnScroll from "@/components/RevealOnScroll"

export default function WireframePage() {
  return (
    <main className="bg-background text-foreground">
      <section className="animate-fade-in-up">
        <PageHero
          headline="Wireframe preview"
          subheadline="A quick structural view of the storefront pages and conversion modules."
          primaryCta={{ label: "Back to home", href: "/" }}
          secondaryCta={{ label: "Open shop", href: "/shop" }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577154/site-images/ecommerce/10330119.jpg"
        />
      </section>

      <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <RevealOnScroll>
            <WireframeMap
              headline="Page structure map"
              subheadline="Home follows the golden layout: HeroSpotlight → CategoryNav → FeaturedProducts → TrustBadges → TestimonialsGrid → Newsletter → Footer."
              primaryCta={{ label: "View golden layout", href: "/#" }}
              secondaryCta={{ label: "View components", href: "#components" }}
            />
          </RevealOnScroll>
        </div>
      </section>
    </main>
  )
}
