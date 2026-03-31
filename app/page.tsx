export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import CategoryNav from "@/components/CategoryNav";
import FeaturedProducts from "@/components/FeaturedProducts";
import TrustBadges from "@/components/TrustBadges";
import TestimonialsGrid from "@/components/TestimonialsGrid";
import NewsletterSignup from "@/components/NewsletterSignup";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <main>
      <section id="hero" className="animate-fade-in-up">
        <HeroSpotlight
          title="Shop essentials that ship fast—and look even better in person."
          subtitle="Curated, design-forward gear for work, travel, and home. Free shipping over $50, 30-day returns, and secure checkout."
          primaryCta={{ label: "Shop Best Sellers", href: "/shop?sort=best" }}
          secondaryCta={{ label: "Browse Categories", href: "#categories" }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577111/site-images/ecommerce/3767397.jpg"
        />
      </section>

      <ScrollReveal>
        <section id="categories" className="py-20 md:py-28 bg-muted animate-fade-in-up">
          <CategoryNav />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section id="featured-products" className="py-20 md:py-28 bg-background animate-fade-in-up">
          <FeaturedProducts />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
          <TrustBadges />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-background animate-fade-in-up">
          <TestimonialsGrid />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section id="newsletter" className="py-20 md:py-28 bg-muted animate-fade-in-up">
          <NewsletterSignup />
        </section>
      </ScrollReveal>
    </main>
  );
}
