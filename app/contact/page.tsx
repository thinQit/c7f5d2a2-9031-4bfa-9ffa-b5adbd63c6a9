export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight"
import ContactForm from "@/components/ContactForm"
import CTAVortex from "@/components/CTAVortex"
import SEOHead from "@/components/SEOHead"
import ScrollReveal from "@/components/ScrollReveal"

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground">
      <SEOHead
        title="Contact — Spotlight Landing"
        description="Get in touch with Spotlight Landing for pricing, licensing, and customization questions."
      />

      <section
        className="animate-fade-in-up min-h-[80vh] bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576912/site-images/corporate/10384120.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10">
          <HeroSpotlight
            title="Contact us"
            subtitle="Questions about plans, licensing, or customization? Send a message and we’ll reply within 1 business day."
            primaryCta={{ label: "Email support", href: "mailto:support@spotlightlanding.co" }}
            secondaryCta={{ label: "View pricing", href: "/pricing" }}
          />
        </div>
      </section>

      <ScrollReveal>
        <section id="contact-form" className="animate-fade-in-up py-20 md:py-24 bg-muted">
          <ContactForm
            headline="Send a message"
            subheadline="Tell us what you’re building and which plan you’re considering."
            contactInfo={[
              { icon: "Mail", label: "Email", value: "support@spotlightlanding.co" },
              { icon: "Phone", label: "Phone", value: "+1 (415) 555-0128" },
              { icon: "MapPin", label: "Address", value: "55 Market Street, Suite 1200, San Francisco, CA 94105" },
            ]}
          />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="animate-fade-in-up py-20 md:py-24 bg-primary text-primary-foreground">
          <CTAVortex
            title="Prefer to start now?"
            subtitle="Review pricing and pick the plan that matches your launch timeline."
            ctaLabel="View pricing"
            ctaHref="/pricing"
            secondaryCtaLabel="See features"
            secondaryCtaHref="/features"
          />
        </section>
      </ScrollReveal>
    </main>
  )
}
