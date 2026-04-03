export const dynamic = 'force-dynamic';

import FeaturesGrid from '@/components/FeaturesGrid'
import GalleryMasonry from '@/components/GalleryMasonry'
import CTAVortex from '@/components/CTAVortex'
import SectionReveal from '@/components/SectionReveal'

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="relative min-h-[80vh] animate-fade-in-up">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577111/site-images/ecommerce/3767397.jpg)',
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-center px-6 py-20 md:py-28">
          <h1 className="text-5xl font-bold text-white md:text-7xl">A small team obsessed with the little things</h1>
          <p className="mt-4 max-w-2xl text-white/90">
            We curate essentials that look good, last long, and arrive fast—so your routines feel effortless.
          </p>
        </div>
      </section>

      <SectionReveal>
        <section className="py-20 md:py-28 animate-fade-in-up">
          <div className="mx-auto max-w-7xl px-6">
            <FeaturesGrid
              headline="Built for product discovery—and a frictionless checkout"
              subheadline="Sankalp started in Austin with a simple idea: fewer products, better picks."
              features={[
                { icon: 'Sparkles', title: 'Curated quality', description: 'Curated quality over endless choice.' },
                { icon: 'ShieldCheck', title: 'Transparency', description: 'Transparent pricing and clear policies.' },
                { icon: 'Truck', title: 'Fast fulfillment', description: '2–3 day US shipping with responsive support.' },
              ]}
            />
          </div>
        </section>
      </SectionReveal>

      <SectionReveal>
        <section className="bg-muted py-20 md:py-28 animate-fade-in-up">
          <div className="mx-auto max-w-7xl px-6">
            <GalleryMasonry
              headline="Meet the team"
              images={[
                { url: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577335/site-images/team-people/1181734.jpg', alt: 'Avery Chen' },
                { url: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577325/site-images/team-people/10347164.jpg', alt: 'Samira Patel' },
                { url: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577370/site-images/team-people/1181405.jpg', alt: 'Diego Morales' },
              ]}
            />
          </div>
        </section>
      </SectionReveal>

      <SectionReveal>
        <section className="py-20 md:py-28 animate-fade-in-up">
          <div className="mx-auto max-w-7xl px-6">
            <CTAVortex
              title="Try us risk-free"
              subtitle="30-day returns, secure payments, and support that actually responds."
              ctaLabel="Shop now"
              ctaHref="/shop"
              secondaryCtaLabel="Shipping & returns"
              secondaryCtaHref="/shipping-returns"
            />
          </div>
        </section>
      </SectionReveal>
    </div>
  )
}
