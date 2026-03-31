"use client";

import ProductCard from '@/components/ProductCard'

interface ProductGridProps {
  headline?: string
  subheadline?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  products?: Array<any>
}

export default function ProductGrid({
  headline = 'Featured Products',
  subheadline = 'Trending and top-rated picks, handpicked for quality and quick ship.',
  primaryCta = { label: 'Shop all', href: '/shop' },
  secondaryCta = { label: 'Giftable', href: '/shop?tag=giftable' },
  products = [
    {
      name: 'Stainless Insulated Bottle (24oz)',
      imageSrc:
        'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577103/site-images/ecommerce/29502370.jpg',
      price: '$34.00',
      compareAt: '$42.00',
      rating: 4.9,
      badge: 'Best Seller',
      href: '/product/stainless-insulated-bottle-24oz',
    },
    {
      name: 'Braided USB‑C Cable (2m)',
      imageSrc:
        'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577167/site-images/ecommerce/29502369.jpg',
      price: '$18.00',
      compareAt: '$24.00',
      rating: 4.8,
      badge: 'Fast Charge',
      href: '/product/braided-usb-c-cable-2m',
    },
    {
      name: 'Weekender Duffel (35L)',
      imageSrc:
        'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577145/site-images/ecommerce/34577.jpg',
      price: '$129.00',
      compareAt: '$159.00',
      rating: 4.7,
      badge: 'Travel Ready',
      href: '/product/weekender-duffel-35l',
    },
    {
      name: 'Wireless Earbuds (ANC)',
      imageSrc:
        'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577110/site-images/ecommerce/17485350.jpg',
      price: '$99.00',
      compareAt: '$129.00',
      rating: 4.6,
      badge: 'Noise Canceling',
      href: '/product/wireless-earbuds-anc',
    },
    {
      name: 'Tech Organizer Pouch',
      imageSrc:
        'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577159/site-images/ecommerce/10330108.jpg',
      price: '$29.00',
      compareAt: '$36.00',
      rating: 4.8,
      badge: 'Editor’s Pick',
      href: '/product/tech-organizer-pouch',
    },
    {
      name: 'Dimmable Desk Lamp',
      imageSrc:
        'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577132/site-images/ecommerce/16675631.jpg',
      price: '$59.00',
      compareAt: '$79.00',
      rating: 4.7,
      badge: 'New',
      href: '/product/dimmable-desk-lamp',
    },
  ],
}: Partial<ProductGridProps>) {
  return (
    <section>
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">{headline}</h2>
        <p className="text-muted-foreground mt-2">{subheadline}</p>
      </div>
      <div className="grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-3">
        {products.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
      <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
        <a
          href={primaryCta?.href}
          className="rounded-lg px-6 py-3 bg-primary text-primary-foreground font-medium transition hover:bg-primary/90 text-center"
        >
          {primaryCta?.label}
        </a>
        {secondaryCta && (
          <a
            href={secondaryCta.href}
            className="rounded-lg px-6 py-3 border border-border bg-background font-medium transition hover:bg-muted text-center"
          >
            {secondaryCta.label}
          </a>
        )}
      </div>
    </section>
  )
}
