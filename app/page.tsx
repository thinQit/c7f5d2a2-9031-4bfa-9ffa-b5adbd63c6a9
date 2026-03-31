export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import LogoCloud from "@/components/LogoCloud";
import FeaturesGrid from "@/components/FeaturesGrid";
import TestimonialsAnimated from "@/components/TestimonialsAnimated";
import PricingTable from "@/components/PricingTable";
import FAQAccordion from "@/components/FAQAccordion";
import CTAVortex from "@/components/CTAVortex";

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <section id="hero" className="animate-fade-in-up min-h-[80vh]">
        <HeroSpotlight
          title="Launch a high-converting landing page in a weekend."
          subtitle="Spotlight Landing pairs an animated hero with proven conversion sections—logos, features, testimonials, pricing, FAQ, and a final CTA—so you can ship faster and sell clearer."
          primaryCta={{ label: "Get the template", href: "#pricing" }}
          secondaryCta={{ label: "See how it works", href: "#features" }}
        />
      </section>

      <section id="logo-cloud" className="animate-fade-in-up py-20 md:py-24 bg-muted">
        <LogoCloud
          headline="Trusted by teams who ship fast"
          subheadline="A simple, credible logo row to add social proof above the fold."
          logos={[
            { name: "Northwind Labs", imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576884/site-images/corporate/10347510.jpg" },
            { name: "Juniper Studio", imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576907/site-images/corporate/1251842.jpg" },
            { name: "AtlasOps", imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576876/site-images/corporate/1181252.jpg" },
            { name: "CloudCove", imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576884/site-images/corporate/12703092.jpg" },
            { name: "BrightDesk", imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576903/site-images/corporate/1313534.jpg" },
            { name: "Kite & Co.", imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576887/site-images/corporate/16553906.jpg" },
          ]}
        />
      </section>

      <section id="features" className="animate-fade-in-up py-20 md:py-24">
        <FeaturesGrid
          badge="Next.js + Tailwind + shadcn/ui"
          headline="Everything you need to convert—nothing you don’t."
          subheadline="Clear messaging blocks, strong hierarchy, and reusable components designed for landing pages."
          features={[
            { icon: "Sparkles", title: "Spotlight hero that grabs attention", description: "An Aceternity-powered animated hero that keeps the page feeling premium without distracting from the CTA." },
            { icon: "LayoutTemplate", title: "Conversion-first section flow", description: "Pre-ordered sections based on proven landing page patterns: proof → value → trust → pricing → objections → final CTA." },
            { icon: "Component", title: "shadcn/ui components, tailored for marketing", description: "Buttons, cards, accordions, badges, and dialogs styled for clean marketing pages with minimal custom CSS." },
            { icon: "Smartphone", title: "Responsive by default", description: "Optimized spacing and typography across mobile, tablet, and desktop with a consistent rhythm (py-20/24)." },
            { icon: "Search", title: "SEO-ready structure", description: "Semantic sections, sensible headings, and metadata defaults so you can rank without fighting your layout." },
            { icon: "Wrench", title: "Fast iteration with reusable blocks", description: "Swap copy, reorder feature cards, and update pricing in one place—without redesigning the whole page." },
          ]}
        />
      </section>

      <section id="testimonials" className="animate-fade-in-up py-20 md:py-24 bg-muted">
        <TestimonialsAnimated
          title="Social proof that feels real."
          subtitle="Short, specific testimonials that address speed, clarity, and conversion."
          testimonials={[
            {
              quote:
                "We replaced a cluttered page with this layout and our demo requests increased by 28% in two weeks. The section order just works.",
              name: "Maya Chen",
              designation: "Founder, Juniper Studio",
              src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576910/site-images/corporate/1181360.jpg",
            },
            {
              quote:
                "The Spotlight hero feels premium, but the rest stays focused. We shipped a polished launch page in a day.",
              name: "Ethan Rivera",
              designation: "Product Lead, AtlasOps",
              src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576866/site-images/corporate/12944978.jpg",
            },
            {
              quote:
                "Pricing and FAQ blocks were exactly what we needed to reduce pre-sales questions. Clean, fast, and easy to edit.",
              name: "Sofia Patel",
              designation: "Marketing, CloudCove",
              src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576877/site-images/corporate/14447085.jpg",
            },
          ]}
        />
      </section>

      <section id="pricing" className="animate-fade-in-up py-20 md:py-24">
        <PricingTable
          headline="Simple pricing that matches a simple site."
          subheadline="Choose a plan based on how much customization you want. Upgrade anytime."
          tiers={[
            {
              name: "Starter",
              price: "$19",
              period: "/one-time",
              description: "For quick launches and waitlists.",
              features: [
                "Full landing page (8 sections)",
                "Responsive + accessible components",
                "SEO metadata defaults",
                "Copy-ready content structure",
              ],
              ctaLabel: "Get Starter",
              ctaHref: "#cta",
            },
            {
              name: "Pro",
              price: "$49",
              period: "/one-time",
              description: "For founders who want a premium feel.",
              features: [
                "Everything in Starter",
                "Aceternity hero + animated testimonials setup",
                "Extra component variants (buttons, cards, badges)",
                "Priority layout presets (alternate sections, callouts)",
              ],
              ctaLabel: "Get Pro",
              ctaHref: "#cta",
              featured: true,
            },
            {
              name: "Team",
              price: "$99",
              period: "/one-time",
              description: "For agencies and multi-brand launches.",
              features: [
                "Everything in Pro",
                "3 project licenses",
                "Branding checklist + launch QA list",
                "Implementation notes for customization",
              ],
              ctaLabel: "Get Team",
              ctaHref: "#cta",
            },
          ]}
        />
      </section>

      <section id="faq" className="animate-fade-in-up py-20 md:py-24 bg-muted">
        <FAQAccordion
          headline="Answers before you ask."
          subheadline="Handle objections clearly so visitors can commit with confidence."
          items={[
            {
              question: "Do I need a backend or database?",
              answer:
                "No. This is a marketing website built for speed and simplicity. You can connect forms to your preferred provider without adding a database.",
            },
            {
              question: "Can I swap the CTA color from blue to purple?",
              answer:
                "Yes. Use primary for key CTAs and secondary for emphasis. Both are part of the design system.",
            },
            {
              question: "Is it accessible and mobile-friendly?",
              answer:
                "Yes. Components follow accessible patterns and the layout is fully responsive across breakpoints.",
            },
            {
              question: "Can I use this for a client project?",
              answer:
                "Yes—Team is ideal for multi-project use. Starter and Pro are best for single launches.",
            },
            {
              question: "How do I customize copy and sections?",
              answer:
                "Update each section’s content props and reorder blocks as needed without redesigning from scratch.",
            },
          ]}
        />
      </section>

      <section id="cta" className="animate-fade-in-up py-20 md:py-24">
        <CTAVortex
          title="Ready to ship a landing page that converts?"
          subtitle="Start with the proven layout, swap in your copy, and launch with confidence."
          primaryCta={{ label: "Get Pro", href: "#pricing" }}
          secondaryCta={{ label: "Email us", href: "mailto:hello@spotlightlanding.com" }}
          points={[
            "Built with Next.js + Tailwind + shadcn/ui",
            "Animated hero + subtle scroll reveals",
            "Clean typography with Plus Jakarta Sans + Inter",
          ]}
        />
      </section>
    </main>
  );
}
