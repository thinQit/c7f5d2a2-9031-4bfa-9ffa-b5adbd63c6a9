export const dynamic = 'force-dynamic';

import CTAVortex from "@/components/CTAVortex";
import FeaturedProducts from "@/components/FeaturedProducts";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";

export default function ShopPage() {
  return (
    <main>
      <section className="relative min-h-[80vh] flex items-center bg-background animate-fade-in-up">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577160/site-images/ecommerce/3756345.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Shop AuroraCart</h1>
          <p className="mt-5 max-w-2xl text-base md:text-lg text-primary-foreground/90">
            Search, filter, and find essentials that fit your routine.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button className="rounded-lg px-6 py-3 font-medium transition-all duration-200 hover:scale-105">
              View Best Sellers
            </Button>
            <Button
              variant="secondary"
              className="rounded-lg px-6 py-3 font-medium transition-all duration-200 hover:scale-105"
            >
              View Bundles
            </Button>
          </div>
        </div>
      </section>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
          <FeaturedProducts />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-background animate-fade-in-up">
          <CTAVortex
            title="Bundle and save up to 20%."
            subtitle="Pair best sellers together for a better price—perfect for gifting or upgrading your daily carry."
            ctaLabel="Shop Bundles"
            ctaHref="/shop?collection=bundles"
            secondaryCtaLabel="Shop Gift Cards"
            secondaryCtaHref="/gift-cards"
          />
        </section>
      </ScrollReveal>
    </main>
  );
}
