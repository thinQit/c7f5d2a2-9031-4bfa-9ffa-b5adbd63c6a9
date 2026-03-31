"use client";

import ProductCard from '@/components/ProductCard'

interface FeaturedProductsProps {
  title?: string
  products?: {
    name: string
    price: number
    compareAt: number
    rating: number
    reviews: number
    badge: string
    imageSrc: string
  }[]
}

export default function FeaturedProducts({
  title = 'Featured Products',
  products = [
    {
      name: 'Minimal Leather Wallet',
      price: 49,
      compareAt: 69,
      rating: 4.7,
      reviews: 89,
      badge: 'Limited',
      imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577107/site-images/ecommerce/29502359.jpg',
    },
    {
      name: 'Commuter Messenger Bag',
      price: 79,
      compareAt: 99,
      rating: 4.8,
      reviews: 176,
      badge: 'Top Rated',
      imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577145/site-images/ecommerce/34577.jpg',
    },
    {
      name: 'Classic White Sneakers',
      price: 99,
      compareAt: 139,
      rating: 4.9,
      reviews: 240,
      badge: 'Best Seller',
      imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577159/site-images/ecommerce/10330108.jpg',
    },
  ],
}: Partial<FeaturedProductsProps>) {
  return (
    <section className="bg-muted/30 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="mb-6 text-2xl font-bold text-[#1A1A2E] md:text-3xl">{title}</h2>
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
