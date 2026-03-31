export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import FeaturesGrid from "@/components/FeaturesGrid";
import CTAVortex from "@/components/CTAVortex";

export default function CheckoutPage() {
  return (
    <main className="bg-background">
      <section
        className="animate-fade-in-up min-h-[80vh] bg-cover bg-center bg-no-repeat relative flex items-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577159/site-images/ecommerce/10330108.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 w-full">
          <HeroSpotlight
            title="Secure checkout"
            subtitle="Pay with card, Apple Pay, or Google Pay—powered by Stripe."
            primaryCta={{ label: "Pay now", href: "/checkout#pay" }}
            secondaryCta={{ label: "Return to cart", href: "/cart" }}
          />
        </div>
      </section>

      <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
        <FeaturesGrid
          badge="Checkout flow"
          headline="Shipping + payment"
          subheadline="Fast form, clear totals, and delivery estimates."
          features={[
            { icon: "Mail", title: "Email", description: "Order confirmation and shipping updates sent instantly." },
            { icon: "MapPin", title: "Shipping address", description: "Validated address fields reduce delivery errors." },
            { icon: "CreditCard", title: "Payment", description: "Encrypted Stripe payment handling for maximum security." },
          ]}
        />
      </div>

      <div className="animate-fade-in-up py-20 md:py-28 bg-background">
        <CTAVortex
          title="Complete purchase with confidence"
          subtitle="Your payment details are encrypted and never stored on our servers."
          ctaLabel="Complete purchase"
          ctaHref="/checkout#complete"
          secondaryCtaLabel="Shipping & returns"
          secondaryCtaHref="/shipping-returns"
        />
      </div>
    </main>
  );
}
