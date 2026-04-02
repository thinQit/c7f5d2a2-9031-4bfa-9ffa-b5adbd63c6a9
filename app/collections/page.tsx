export const dynamic = 'force-dynamic';

import GalleryMasonry from '@/components/GalleryMasonry'
import CTAVortex from '@/components/CTAVortex'
import SectionReveal from '@/components/SectionReveal'

export default function CollectionsPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="relative min-h-[80vh] animate-fade-in-up">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577162/site-images/ecommerce/35560482.jpg)',
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-center px-6 py-20 md:py-28">
          <h1 className="text-5xl font-bold text-white md:text-7xl">Collections built around real routines</h1>
          <p className="mt-4 max-w-2xl text-white/90">
            Shop by use-case: desk, travel, hydration, and more.
          </p>
        </div>
      </section>

      <SectionReveal>
        <section className="py-20 md:py-28 animate-fade-in-up">
          <div className="mx-auto max-w-7xl px-6">
            <GalleryMasonry
              headline="Explore collections"
              subheadline="Each collection is curated for quality, durability, and clean design."
              images={[
                { url: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577108/site-images/ecommerce/29502367.jpg', alt: 'Everyday Carry' },
                { url: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577126/site-images/ecommerce/16675636.jpg', alt: 'Workspace' },
                { url: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577107/site-images/ecommerce/10330106.jpg', alt: 'Travel' },
                { url: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577145/site-images/ecommerce/35765454.jpg', alt: 'Hydration' },
                { url: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577106/site-images/ecommerce/15195243.jpg', alt: 'Gifts' },
              ]}
            />
          </div>
        </section>
      </SectionReveal>

      <SectionReveal>
        <section className="bg-muted py-20 md:py-28 animate-fade-in-up">
          <div className="mx-auto max-w-7xl px-6">
            <CTAVortex
              title="Not sure where to start?"
              subtitle="Take the 30-second quiz and we’ll recommend a starter set."
              ctaLabel="Get recommendations"
              ctaHref="/recommendations"
              secondaryCtaLabel="Shop under $50"
              secondaryCtaHref="/shop?maxPrice=50"
            />
          </div>
        </section>
      </SectionReveal>
    </div>
  )
}
