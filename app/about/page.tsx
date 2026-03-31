export const dynamic = 'force-dynamic';

import FeaturesGrid from "@/components/FeaturesGrid";
import TestimonialsAnimated from "@/components/TestimonialsAnimated";
import CTAVortex from "@/components/CTAVortex";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <main>
      <section className="relative min-h-[80vh] flex items-center animate-fade-in-up">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577103/site-images/ecommerce/29502370.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold">Built for people who notice the details.</h1>
          <p className="mt-5 max-w-2xl text-base md:text-lg text-primary-foreground/90">
            AuroraCart curates everyday essentials that feel premium, last longer, and arrive quickly.
          </p>
        </div>
      </section>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-background animate-fade-in-up">
          <FeaturesGrid
            headline="What we optimize for."
            subheadline="Less clutter, better materials, and a smoother checkout experience."
            features={[
              {
                icon: "Sparkles",
                title: "Design that earns its place",
                description: "We choose products that look good and solve a daily problem—no gimmicks.",
              },
              {
                icon: "Gem",
                title: "Quality you can feel",
                description: "Materials, finishes, and tolerances matter. We prioritize durability and comfort.",
              },
              {
                icon: "Lock",
                title: "Trust at checkout",
                description: "Transparent pricing, secure payment options, and clear policies.",
              },
            ]}
          />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
          <TestimonialsAnimated
            title="Small team, high standards."
            subtitle="Merchandising, logistics, and support—working together to keep the experience simple."
            testimonials={[
              {
                quote: "We evaluate every product for durability, utility, and visual simplicity.",
                name: "Leila Chen",
                designation: "Founder & Merchandising",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577363/site-images/team-people/12903169.jpg",
              },
              {
                quote: "Fast, predictable shipping starts with operations discipline and quality checks.",
                name: "Marcus Alvarez",
                designation: "Operations Lead",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577357/site-images/team-people/1181738.jpg",
              },
              {
                quote: "Customer support should feel personal, fast, and genuinely useful.",
                name: "Priya Nair",
                designation: "Customer Experience",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577370/site-images/team-people/1181405.jpg",
              },
            ]}
          />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-background animate-fade-in-up">
          <CTAVortex
            title="Ready to upgrade your everyday?"
            subtitle="Start with a best seller—fast shipping and easy returns included."
            ctaLabel="Shop Best Sellers"
            ctaHref="/shop?sort=best"
            secondaryCtaLabel="Browse Categories"
            secondaryCtaHref="/#categories"
          />
        </section>
      </ScrollReveal>
    </main>
  );
}
