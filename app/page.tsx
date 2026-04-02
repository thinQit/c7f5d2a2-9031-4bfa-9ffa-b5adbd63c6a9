// Italo Pizza homepage
import Image from "next/image";
import HeroSpotlight from "@/components/HeroSpotlight";
import CategoryNav from "@/components/CategoryNav";
import FeaturedProductsGrid from "@/components/FeaturedProductsGrid";
import TrustBadges from "@/components/TrustBadges";
import TestimonialsGrid from "@/components/TestimonialsGrid";
import NewsletterForm from "@/components/NewsletterForm";
import StatsCounter from "@/components/StatsCounter";

export default function HomePage() {
  return (
    <main className="pt-2">
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="animate-fade-in-up">
            <HeroSpotlight
              headline="Welcome to Italo Pizza"
              subheadline="Hand-stretched dough, San Marzano-style tomato sauce, and mozzarella that melts the way it should. Order pickup or delivery in minutes."
              primaryCta={{ label: "View Menu", href: "/menu" }}
              secondaryCta={{ label: "Order Now", href: "/order" }}
            />
          </div>
          <div className="relative animate-fade-in-up">
            <div className="absolute -inset-6 rounded-3xl bg-primary/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-lg">
              <Image
                src="https://res.cloudinary.com/dwc294mzm/image/upload/v1771577162/site-images/ecommerce/35560482.jpg"
                alt="Freshly baked pizza with bubbling cheese"
                width={720}
                height={840}
                className="h-full w-full object-cover"
                unoptimized
              />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Crafted daily with premium ingredients for a crisp crust and bold flavor.
            </p>
          </div>
        </div>
      </section>

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
