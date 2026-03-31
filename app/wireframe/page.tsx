export const dynamic = 'force-dynamic';

import WireframeMap from "@/components/WireframeMap";
import ScrollReveal from "@/components/ScrollReveal";
import CTAVortex from "@/components/CTAVortex";

export default function WireframePage() {
  return (
    <main>
      <section className="relative min-h-[80vh] flex items-center animate-fade-in-up">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577105/site-images/ecommerce/17485352.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold">Wireframe preview</h1>
          <p className="mt-5 max-w-2xl text-base md:text-lg text-primary-foreground/90">
            A quick, structured view of page hierarchy and conversion flow.
          </p>
        </div>
      </section>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-background animate-fade-in-up">
          <WireframeMap />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
          <CTAVortex
            title="Review the live flow"
            subtitle="Jump between key pages to validate structure, CTA hierarchy, and trust modules."
            ctaLabel="Open Home"
            ctaHref="/"
            secondaryCtaLabel="Open Shop"
            secondaryCtaHref="/shop"
          />
        </section>
      </ScrollReveal>
    </main>
  );
}
