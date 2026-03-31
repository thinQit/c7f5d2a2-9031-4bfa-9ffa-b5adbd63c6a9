export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import FeaturedProducts from "@/components/FeaturedProducts";
import CTAVortex from "@/components/CTAVortex";

export default function ShopPage() {
  return (
    <main className="bg-background">
      <section
        className="animate-fade-in-up min-h-[80vh] bg-cover bg-center bg-no-repeat relative flex items-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577126/site-images/ecommerce/259200.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 w-full">
          <HeroSpotlight
            title="Shop all products"
            subtitle="Search, filter, and find the right essentials—fast."
            primaryCta={{ label: "Best sellers", href: "/shop?sort=best" }}
            secondaryCta={{ label: "New arrivals", href: "/shop?sort=new" }}
          />
        </div>
      </section>

      <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
        <FeaturedProducts />
      </div>

      <div className="animate-fade-in-up py-20 md:py-28 bg-background">
        <CTAVortex
          title="Free shipping kicks in at $60"
          subtitle="Bundle a charger + cable and you’re basically there. Most orders ship within 24 hours."
          ctaLabel="Shop bundles"
          ctaHref="/collections/bundles"
          secondaryCtaLabel="Best sellers"
          secondaryCtaHref="/shop?sort=best"
        />
      </div>
    </main>
  );
}
