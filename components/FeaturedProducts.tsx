"use client";

import ProductCard from '@/components/ProductCard'

interface Product {
  id: string
  title: string
  imageSrc: string
  price: number
  compareAt?: number
  rating?: number
  badge?: string
}

interface FeaturedProductsProps {
  title?: string
  products?: Product[]
}

export default function FeaturedProducts({
  title = 'Featured Products',
  products = [
    { id: '1', title: 'Aero Noise-Canceling Headphones', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577158/site-images/ecommerce/10330120.jpg', price: 149, compareAt: 199, rating: 4.8, badge: 'Best Seller' },
    { id: '2', title: 'Pulse Smartwatch Pro', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577158/site-images/ecommerce/29502357.jpg', price: 229, compareAt: 279, rating: 4.7, badge: 'Limited' },
    { id: '3', title: 'Arc USB-C Dock', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577128/site-images/ecommerce/32831065.jpg', price: 89, compareAt: 119, rating: 4.6, badge: 'Hot Deal' },
    { id: '4', title: 'Comfy Home Speaker', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577143/site-images/ecommerce/18512823.jpg', price: 119, compareAt: 149, rating: 4.9, badge: 'Top Rated' },
  ],
}: Partial<FeaturedProductsProps>) {
  return (
    <section className="bg-muted/30 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-5 text-2xl font-bold text-[#1A1A2E]">{title}</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
