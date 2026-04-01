import HeroSpotlight from "@/components/HeroSpotlight";
import CategoryNav from "@/components/CategoryNav";
import FeaturedProductsGrid from "@/components/FeaturedProductsGrid";
import TrustBadges from "@/components/TrustBadges";
import TestimonialsGrid from "@/components/TestimonialsGrid";
import NewsletterForm from "@/components/NewsletterForm";
import StatsCounter from "@/components/StatsCounter";

export default function HomePage() {
  return (
    <main className="pt-16">
      <div className="animate-fade-in-up">
        <HeroSpotlight
          headline="Authentic Italian Flavors, Fresh From Our Oven"
          subheadline="Hand-stretched dough, San Marzano-style tomato sauce, and mozzarella that melts the way it should. Order pickup or delivery in minutes."
          primaryCta={{ label: "View Menu", href: "/menu" }}
          secondaryCta={{ label: "Order Now", href: "/order" }}
        />
      </div>

      <section className="py-20 md:py-28 bg-background animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <StatsCounter
            stats={[
              { value: "25–45 min", label: "Delivery" },
              { value: "~15 min", label: "Pickup Ready" },
              { value: "4.8/5", label: "Customer Rating" },
            ]}
            bgColor="bg-muted"
          />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <CategoryNav />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <FeaturedProductsGrid />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <TrustBadges />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <TestimonialsGrid />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <NewsletterForm />
        </div>
      </section>
    </main>
  );
}
