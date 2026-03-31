export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight"
import LogoCloud from "@/components/LogoCloud"
import FeaturesGrid from "@/components/FeaturesGrid"
import TestimonialsAnimated from "@/components/TestimonialsAnimated"
import PricingTable from "@/components/PricingTable"
import FAQAccordion from "@/components/FAQAccordion"
import CTAVortex from "@/components/CTAVortex"
import SEOHead from "@/components/SEOHead"
import ScrollReveal from "@/components/ScrollReveal"

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <SEOHead
        title="Spotlight Landing — Conversion-first Next.js landing page"
        description="A clean, conversion-driven landing page blueprint with HeroSpotlight, social proof, features, testimonials, pricing, FAQs, and a final CTA."
      />

      <section
        className="animate-fade-in-up min-h-[80vh] bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576909/site-images/corporate/1181638.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10">
          <HeroSpotlight
            title="Launch a high-converting landing page in a weekend."
            subtitle="Spotlight Landing is a clean, conversion-driven Next.js site structure with social proof, pricing, FAQs, and a final CTA—designed to help you ship faster and sell sooner."
            primaryCta={{ label: "Get the template", href: "/pricing" }}
            secondaryCta={{ label: "See how it works", href: "#features" }}
          />
        </div>
      </section>

      <ScrollReveal>
        <section className="animate-fade-in-up py-20 md:py-24 bg-muted">
          <LogoCloud
            headline="Trusted by teams shipping faster"
            subheadline="A layout that looks credible from the first scroll—built for modern SaaS and product launches."
            logos={[
              { name: "Northwind Labs", imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576902/site-images/corporate/1367276.jpg" },
              { name: "Juniper Studio", imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576867/site-images/corporate/1181619.jpg" },
              { name: "CloudHarbor", imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576881/site-images/corporate/11901335.jpg" },
              { name: "MetricForge", imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576877/site-images/corporate/14447085.jpg" },
              { name: "SparrowPay", imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576905/site-images/corporate/16291129.jpg" },
              { name: "BrightDesk", imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576862/site-images/corporate/159839.jpg" },
            ]}
          />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section id="features" className="animate-fade-in-up py-20 md:py-24 bg-background">
          <FeaturesGrid
            headline="Everything you need to convert—nothing you don’t."
            subheadline="A focused set of sections and components that cover the full buyer journey: clarity, proof, value, and a confident next step."
            features={[
              { icon: "Sparkles", title: "Conversion-first section flow", description: "Hero → social proof → benefits → testimonials → pricing → FAQs → final CTA." },
              { icon: "Search", title: "Fast, SEO-ready pages", description: "Semantic structure, clean headings, and metadata defaults for search and sharing." },
              { icon: "LayoutGrid", title: "Polished UI with shadcn/ui", description: "Accessible patterns and consistent styling across components." },
              { icon: "Wand2", title: "Motion that feels premium", description: "Aceternity hero animation plus subtle reveals and hover interactions." },
              { icon: "Smartphone", title: "Responsive by default", description: "Mobile-first readability with clear CTAs and touch-friendly controls." },
              { icon: "SlidersHorizontal", title: "Easy to customize", description: "Centralized design tokens and reusable sections for fast brand matching." },
            ]}
          />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section id="testimonials" className="animate-fade-in-up py-20 md:py-24 bg-muted">
          <TestimonialsAnimated
            title="Makers use it to ship faster and sell with confidence."
            subtitle="Clear messaging and clean design help visitors understand value quickly—without a complicated build."
            testimonials={[
              {
                quote: "We replaced a messy one-pager with this structure and our demo requests went up 38% in two weeks. The section order just works.",
                name: "Ava Chen",
                designation: "Founder, MetricForge",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576902/site-images/corporate/15371559.jpg",
              },
              {
                quote: "The typography and spacing feel premium out of the box. I only changed colors and copy and it looked like a custom build.",
                name: "Diego Martínez",
                designation: "Product Designer, Juniper Studio",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576897/site-images/corporate/10041273.jpg",
              },
              {
                quote: "I shipped my pricing and FAQ pages in a day. The components are consistent and the animations are tasteful.",
                name: "Priya Nair",
                designation: "Indie Maker",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576907/site-images/corporate/10142683.jpg",
              },
            ]}
          />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="animate-fade-in-up py-20 md:py-24 bg-background">
          <PricingTable />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section id="faq" className="animate-fade-in-up py-20 md:py-24 bg-muted">
          <FAQAccordion
            headline="Questions, answered."
            subheadline="Everything you need to know before you ship."
            items={[
              { question: "Is this a web app template?", answer: "No—this is a marketing website/landing page blueprint focused on conversion sections." },
              { question: "Do I need a backend or database?", answer: "No. The default setup is static/marketing-first and works without backend infrastructure." },
              { question: "Can I change the colors and fonts?", answer: "Yes. Design tokens and typography settings are easy to adjust." },
              { question: "What’s included in the pages?", answer: "Home, Features, Pricing, About, and Contact—plus legal pages for trust and compliance." },
              { question: "Is it accessible and responsive?", answer: "Yes. Components follow accessible patterns and mobile-first responsive layout principles." },
            ]}
          />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="animate-fade-in-up py-20 md:py-24 bg-primary text-primary-foreground">
          <CTAVortex
            title="Ready to ship a landing page that converts?"
            subtitle="Start with a proven layout, strong typography, and a clean design system—then customize the copy to your product."
            ctaLabel="Get the template"
            ctaHref="/pricing"
            secondaryCtaLabel="Talk to us"
            secondaryCtaHref="/contact"
          />
        </section>
      </ScrollReveal>
    </main>
  )
}
