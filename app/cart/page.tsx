export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import MiniCartDrawer from "@/components/MiniCartDrawer";
import CTAVortex from "@/components/CTAVortex";

export default function CartPage() {
  return (
    <main className="bg-background">
      <section
        className="animate-fade-in-up min-h-[80vh] bg-cover bg-center bg-no-repeat relative flex items-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577145/site-images/ecommerce/34577.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 w-full">
          <HeroSpotlight
            title="Your cart"
            subtitle="Review items, apply a code, and check out securely."
            primaryCta={{ label: "Checkout", href: "/checkout" }}
            secondaryCta={{ label: "Continue shopping", href: "/shop" }}
          />
        </div>
      </section>

      <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
        <MiniCartDrawer />
      </div>

      <div className="animate-fade-in-up py-20 md:py-28 bg-background">
        <CTAVortex
          title="Ready to complete your order?"
          subtitle="Promo code REFRESH15 applies to qualifying orders over $75."
          ctaLabel="Proceed to checkout"
          ctaHref="/checkout"
          secondaryCtaLabel="Shipping & returns"
          secondaryCtaHref="/shipping-returns"
        />
      </div>
    </main>
  );
}
