export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight"
import ContentSplit from "@/components/ContentSplit"
import SEOHead from "@/components/SEOHead"
import ScrollReveal from "@/components/ScrollReveal"

export default function PrivacyPage() {
  return (
    <main className="bg-background text-foreground">
      <SEOHead
        title="Privacy Policy — Spotlight Landing"
        description="Learn how Spotlight Landing collects, uses, and retains information."
      />

      <section
        className="animate-fade-in-up min-h-[80vh] bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576898/site-images/corporate/12912160.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10">
          <HeroSpotlight
            title="Privacy Policy"
            subtitle="We collect only what we need to respond to inquiries and improve the site experience."
            primaryCta={{ label: "Contact", href: "/contact" }}
            secondaryCta={{ label: "Home", href: "/" }}
          />
        </div>
      </section>

      <ScrollReveal>
        <section className="animate-fade-in-up py-20 md:py-24 bg-muted">
          <ContentSplit />
        </section>
      </ScrollReveal>
    </main>
  )
}
