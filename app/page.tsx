export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight"
import CategoryNav from "@/components/CategoryNav"
import ProductGrid from "@/components/ProductGrid"
import TrustBadges from "@/components/TrustBadges"
import TestimonialsGrid from "@/components/TestimonialsGrid"
import NewsletterForm from "@/components/NewsletterForm"
import StatsCounter from "@/components/StatsCounter"
import RevealOnScroll from "@/components/RevealOnScroll"

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <section className="animate-fade-in-up">
        <HeroSpotlight
          title="Upgrade your everyday carry—without the guesswork."
          subtitle="Curated essentials with fast shipping, easy returns, and reviews you can trust. Shop best-sellers or browse by category in seconds."
          primaryCta={{ label: "Shop Best Sellers", href: "/shop?sort=best" }}
          secondaryCta={{ label: "Browse Categories", href: "#categories" }}
          saleBanner="Spring Drop: 15% off orders over $75 — code SPRING15"
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577110/site-images/ecommerce/17485350.jpg"
        />
      </section>

      <section className="py-20 md:py-28 bg-card animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <StatsCounter
            stats={[
              { label: "Avg. ship time", value: "2–3 days" },
              { label: "Returns", value: "30 days" },
              { label: "Rating", value: "4.8/5" },
            ]}
          />
        </div>
      </section>

      <section id="categories" className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <RevealOnScroll>
            <CategoryNav
              headline="Shop by category"
              subheadline="Find what you need fast—built for discovery and quick add-to-cart."
              primaryCta={{ label: "View all categories", href: "/categories" }}
              secondaryCta={{ label: "See new arrivals", href: "/shop?tag=new" }}
              categories={[
                {
                  name: "Everyday Essentials",
                  href: "/shop?category=everyday-essentials",
                  image: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577145/site-images/ecommerce/34577.jpg",
                  description: "Daily-use upgrades that feel premium.",
                },
                {
                  name: "Travel & Commute",
                  href: "/shop?category=travel-commute",
                  image: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577126/site-images/ecommerce/259200.jpg",
                  description: "Bags, bottles, and organizers built for movement.",
                },
                {
                  name: "Tech Accessories",
                  href: "/shop?category=tech-accessories",
                  image: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577107/site-images/ecommerce/29502359.jpg",
                  description: "Cables, chargers, and desk-ready gear.",
                },
                {
                  name: "Home & Wellness",
                  href: "/shop?category=home-wellness",
                  image: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577159/site-images/ecommerce/10330108.jpg",
                  description: "Comfort-forward picks for better routines.",
                },
              ]}
            />
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-card animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <RevealOnScroll>
            <ProductGrid
              headline="Best sellers this week"
              subheadline="Top-rated picks with real reviews, clear specs, and quick checkout."
              primaryCta={{ label: "Shop all products", href: "/shop" }}
              secondaryCta={{ label: "Giftable picks", href: "/shop?tag=giftable" }}
            />
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <RevealOnScroll>
            <TrustBadges
              headline="Checkout with confidence"
              subheadline="Clear policies, secure payments, and fast fulfillment—no surprises."
              primaryCta={{ label: "Shipping & returns", href: "/shipping-returns" }}
              secondaryCta={{ label: "Contact support", href: "/contact" }}
              badges={[
                { title: "Fast shipping", description: "Orders ship in 24–48 hours from Austin, TX.", icon: "Truck" },
                { title: "30-day returns", description: "Easy returns with prepaid labels on eligible items.", icon: "RotateCcw" },
                { title: "Secure payments", description: "Stripe-powered checkout with PCI-compliant processing.", icon: "ShieldCheck" },
                { title: "Real support", description: "Email support Mon–Fri, 9am–5pm CT. Typical reply under 4 hours.", icon: "Headset" },
              ]}
            />
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-card animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <RevealOnScroll>
            <TestimonialsGrid
              headline="Loved by customers who value quality"
              subheadline="Verified reviews from recent orders—highlighting fit, finish, and delivery speed."
              primaryCta={{ label: "Read more reviews", href: "/reviews" }}
              secondaryCta={{ label: "Shop top-rated", href: "/shop?sort=rating" }}
            />
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted animate-fade-in-up" id="newsletter">
        <div className="max-w-7xl mx-auto px-4">
          <RevealOnScroll>
            <NewsletterForm
              headline="Get first access to drops and deals"
              subheadline="Join 18,000+ subscribers. New arrivals, limited runs, and members-only bundles—sent weekly."
              primaryCta={{ label: "Subscribe", href: "/#newsletter" }}
              secondaryCta={{ label: "See bundles", href: "/shop?tag=bundle" }}
            />
          </RevealOnScroll>
        </div>
      </section>
    </main>
  )
}
