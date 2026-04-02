'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import ProductCard from '@/components/ProductCard'

interface Product {
  title: string
  imageSrc: string
  price: number
  compareAt: number
  rating: number
  reviewCount: number
  badge: string
}

interface ProductGridProps {
  products?: Product[]
  loading?: boolean
}

export default function ProductGrid({
  products = [
    { title: 'Urban Sneaker', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577136/site-images/ecommerce/16675632.jpg', price: 120, compareAt: 150, rating: 4.7, reviewCount: 210, badge: 'New' },
    { title: 'Canvas Tote', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577162/site-images/ecommerce/18548434.jpg', price: 49, compareAt: 65, rating: 4.6, reviewCount: 88, badge: 'Popular' },
    { title: 'Minimal Watch', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577110/site-images/ecommerce/17485351.jpg', price: 159, compareAt: 199, rating: 4.9, reviewCount: 342, badge: 'Top Rated' },
  ],
  loading = false,
}: Partial<ProductGridProps>) {
  const [visibleCount, setVisibleCount] = useState(6)
  const visibleProducts = products.slice(0, visibleCount)

  return (
    <section className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {loading
          ? Array.from({ length: 6 }).map((_, idx) => <div key={idx} className="h-[420px] animate-pulse rounded-xl bg-muted" />)
          : visibleProducts.map((product) => <ProductCard key={product.title} {...product} />)}
      </div>

      {!loading && visibleCount < products.length && (
        <div className="flex justify-center">
          <Button onClick={() => setVisibleCount((prev) => prev + 3)} className="bg-[#1A1A2E] text-white hover:bg-[#1A1A2E]/90">
            Load More
          </Button>
        </div>
      )}
    </section>
  )
}
