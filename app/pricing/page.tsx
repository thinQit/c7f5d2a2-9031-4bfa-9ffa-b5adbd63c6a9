export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight"
import PricingTable from "@/components/PricingTable"
import FAQAccordion from "@/components/FAQAccordion"
import CTAVortex from "@/components/CTAVortex"
import SEOHead from "@/components/SEOHead"
import ScrollReveal from "@/components/ScrollReveal"

export default function PricingPage() {
  return (
    <main className="bg-background text-foreground">
      <SEOHead
        title="Pricing — Spotlight Landing"
        description="Simple one-time pricing for a clean, conversion-focused landing page system."
      />

      <section
        className="animate-fade-in-up min-h-[80vh] bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576896/site-images/corporate/12911251.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10">
          <HeroSpotlight
            title="Pricing that matches your launch speed."
            subtitle="Choose a plan, customize the copy, and publish a landing page that looks credible from day one."
            primaryCta={{ label: "Contact to purchase", href: "/contact" }}
            secondaryCta={{ label: "Read FAQs", href: "#faq" }}
          />
        </div>
      </section>

      <ScrollReveal>
        <section className="animate-fade-in-up py-20 md:py-24 bg-background">
          <PricingTable />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section id="faq" className="animate-fade-in-up py-20 md:py-24 bg-muted">
          <FAQAccordion
            headline="Pricing FAQs"
            subheadline="A few quick answers before you decide."
            items={[
              { question: "How do I purchase?", answer: "Use the contact form to request an invoice. We respond within 1 business day." },
              { question: "Can I use it for client work?", answer: "Yes—Studio includes a multi-site license up to 10 sites." },
              { question: "Do you offer refunds?", answer: "Yes, refund requests are accepted within 14 days of purchase." },
            ]}
          />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="animate-fade-in-up py-20 md:py-24 bg-primary text-primary-foreground">
          <CTAVortex
            title="Ship your next launch with a proven layout."
            subtitle="Choose a plan and publish a landing page that’s built to convert."
            ctaLabel="Contact to purchase"
            ctaHref="/contact"
            secondaryCtaLabel="See features"
            secondaryCtaHref="/features"
          />
        </section>
      </ScrollReveal>
    </main>
  )
}
