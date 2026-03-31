export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import FeaturesGrid from "@/components/FeaturesGrid";
import CTAVortex from "@/components/CTAVortex";

export default function ContactPage() {
  return (
    <main className="bg-background">
      <section
        className="animate-fade-in-up min-h-[80vh] bg-cover bg-center bg-no-repeat relative flex items-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577128/site-images/ecommerce/32831065.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 w-full">
          <HeroSpotlight
            title="Contact support"
            subtitle="Questions about an order, a return, or product details? We’ll reply fast."
            primaryCta={{ label: "Email support", href: "mailto:support@lumencart.com" }}
            secondaryCta={{ label: "Track an order", href: "/track-order" }}
          />
        </div>
      </section>

      <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
        <FeaturesGrid
          badge="Support"
          headline="Send a message"
          subheadline="Include your order number for the fastest help."
          features={[
            { icon: "Clock", title: "Support hours", description: "Mon–Fri, 9:00am–6:00pm CT." },
            { icon: "MessageCircle", title: "Fast response", description: "Typical response time is under 2 hours." },
            { icon: "Phone", title: "Phone", description: "(512) 555-0184" },
          ]}
        />
      </div>

      <div className="animate-fade-in-up py-20 md:py-28 bg-background">
        <CTAVortex
          title="Need a quick answer?"
          subtitle="Most common questions are covered in our FAQ and shipping policy."
          ctaLabel="Read FAQ"
          ctaHref="/faq"
          secondaryCtaLabel="Shipping & returns"
          secondaryCtaHref="/shipping-returns"
        />
      </div>
    </main>
  );
}
