export const dynamic = 'force-dynamic';

import { Card } from '@/components/ui/card'
import SectionReveal from '@/components/SectionReveal'

export default function WireframePage() {
  const maps = [
    {
      name: 'Home',
      blocks: ['HeroSpotlight', 'CategoryNav', 'FeaturedProducts', 'TrustBadges', 'TestimonialsGrid', 'Newsletter'],
    },
    {
      name: 'Shop',
      blocks: ['Hero', 'ProductGrid', 'CTA Band'],
    },
    {
      name: 'Product Detail',
      blocks: ['ProductHero', 'Details', 'Reviews', 'CTA Band'],
    },
    {
      name: 'Cart',
      blocks: ['Hero', 'CartItems', 'Free Shipping CTA'],
    },
    {
      name: 'Checkout',
      blocks: ['Hero', 'CheckoutForm'],
    },
  ]

  return (
    <div className="bg-background text-foreground">
      <section className="py-20 md:py-28 animate-fade-in-up">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-3xl font-bold md:text-4xl">Wireframe preview</h1>
          <p className="mt-3 text-muted-foreground">
            A conversion-first layout map for key pages: Home, Shop, PDP, Cart, and Checkout.
          </p>
        </div>
      </section>

      <SectionReveal>
        <section className="bg-muted py-20 md:py-28 animate-fade-in-up">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2">
            {maps.map((page) => (
              <Card key={page.name} className="card-hover rounded-xl border border-border bg-card p-6">
                <h2 className="text-xl font-semibold">{page.name}</h2>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {page.blocks.map((block) => (
                    <li key={block}>• {block}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>
      </SectionReveal>
    </div>
  )
}
