export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import ProductGallery from "@/components/ProductGallery";
import TestimonialsGrid from "@/components/TestimonialsGrid";
import FeaturesGrid from "@/components/FeaturesGrid";

export default function ProductDetailPage() {
  return (
    <main className="bg-background">
      <section
        className="animate-fade-in-up min-h-[80vh] bg-cover bg-center bg-no-repeat relative flex items-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577107/site-images/ecommerce/29502359.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 w-full">
          <HeroSpotlight
            title="Product details that answer questions fast"
            subtitle="Big imagery, clear specs, and trust modules near the buy button."
            primaryCta={{ label: "Add to cart", href: "/cart" }}
            secondaryCta={{ label: "Shipping & returns", href: "/shipping-returns" }}
          />
        </div>
      </section>

      <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
        <ProductGallery />
      </div>

      <div className="animate-fade-in-up py-20 md:py-28 bg-background">
        <FeaturesGrid
          badge="Product details"
          headline="Specs, what’s included, and warranty"
          subheadline="Everything you need to decide—no fluff."
          features={[
            {
              icon: "Package",
              title: "What’s included",
              description: "Core product, cable/accessories, and quick start guide in the box.",
            },
            {
              icon: "ShieldCheck",
              title: "Warranty",
              description: "1-year limited warranty on electronics with responsive support.",
            },
            {
              icon: "Truck",
              title: "Shipping",
              description: "Same-day processing before 1pm CT and 2–4 day standard delivery.",
            },
          ]}
        />
      </div>

      <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
        <TestimonialsGrid />
      </div>
    </main>
  );
}
