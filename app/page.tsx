export const dynamic = 'force-dynamic';

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import AceternityHeroSpotlight from '@/components/AceternityHeroSpotlight'
import CategoryPills from '@/components/CategoryPills'
import ProductGrid from '@/components/ProductGrid'
import TrustBadgeRow from '@/components/TrustBadgeRow'
import TestimonialsGrid from '@/components/TestimonialsGrid'
import NewsletterForm from '@/components/NewsletterForm'
import FeaturesGrid from '@/components/FeaturesGrid'
import SectionReveal from '@/components/SectionReveal'
import GalleryMasonry from '@/components/GalleryMasonry'
import CTAVortex from '@/components/CTAVortex'

export default function HomePage() {
  return (
    <div className="bg-background text-foreground">
      <section className="relative min-h-[80vh] animate-fade-in-up">
        <AceternityHeroSpotlight />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577158/site-images/ecommerce/10330120.jpg)',
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-center px-6 py-20 md:py-28">
          <p className="mb-4 inline-block w-fit rounded-full bg-primary/90 px-4 py-2 text-sm text-primary-foreground">
            Spring Refresh • Save 15% with REFRESH15
          </p>
          <h1 className="max-w-3xl text-5xl font-bold leading-tight text-white md:text-7xl">
            Upgrade your everyday with design-forward essentials.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/90 md:text-lg">
            Curated gear for work, travel, and home—fast shipping, easy returns, and checkout you can trust.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button className="transition-all duration-200 hover:scale-105">Shop best sellers</Button>
            <Button variant="secondary" className="transition-all duration-200 hover:scale-105">
              Browse collections
            </Button>
          </div>
        </div>
      </section>

      <SectionReveal>
        <section className="py-20 md:py-28 animate-fade-in-up">
          <div className="mx-auto max-w-7xl px-6">
            <CategoryPills />
          </div>
        </section>
      </SectionReveal>

      <SectionReveal>
        <section className="bg-muted py-20 md:py-28 animate-fade-in-up">
          <div className="mx-auto max-w-7xl px-6">
            <ProductGrid />
          </div>
        </section>
      </SectionReveal>

      <SectionReveal>
        <section className="py-20 md:py-28 animate-fade-in-up">
          <div className="mx-auto max-w-7xl px-6">
            <TrustBadgeRow />
          </div>
        </section>
      </SectionReveal>

      <SectionReveal>
        <section className="bg-muted py-20 md:py-28 animate-fade-in-up">
          <div className="mx-auto max-w-7xl px-6">
            <TestimonialsGrid />
          </div>
        </section>
      </SectionReveal>

      <SectionReveal>
        <section className="py-20 md:py-28 animate-fade-in-up">
          <div className="mx-auto max-w-7xl px-6">
            <GalleryMasonry
              headline="Shop by collection"
              subheadline="Start with what you need—then discover what you’ll love."
              images={[
                { url: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577136/site-images/ecommerce/16675632.jpg', alt: 'Everyday carry collection' },
                { url: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577162/site-images/ecommerce/18548434.jpg', alt: 'Hydration essentials' },
                { url: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577110/site-images/ecommerce/17485351.jpg', alt: 'Workspace setup' },
                { url: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577107/site-images/ecommerce/29502359.jpg', alt: 'Travel accessories' },
                { url: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577106/site-images/ecommerce/17485353.jpg', alt: 'Wellness products' },
                { url: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577152/site-images/ecommerce/11952304.jpg', alt: 'Gift bundles' },
              ]}
            />
          </div>
        </section>
      </SectionReveal>

      <SectionReveal>
        <section className="bg-muted py-20 md:py-28 animate-fade-in-up">
          <div className="mx-auto max-w-7xl px-6">
            <NewsletterForm />
          </div>
        </section>
      </SectionReveal>

      <div className="hidden">
        <Card />
        <FeaturesGrid headline="" features={[]} />
        <CTAVortex title="" ctaLabel="" ctaHref="" />
      </div>
    </div>
  )
}
