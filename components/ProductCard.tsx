'use client'

import Image from 'next/image'
import { Heart, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import RatingStars from '@/components/RatingStars'
import PriceTag from '@/components/PriceTag'

interface ProductCardProps {
  title?: string
  imageSrc?: string
  price?: number
  compareAt?: number
  rating?: number
  reviewCount?: number
  badge?: string
}

export default function ProductCard({
  title = 'Essential Hoodie',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577158/site-images/ecommerce/10330120.jpg',
  price = 79,
  compareAt = 99,
  rating = 4.8,
  reviewCount = 124,
  badge = 'Best Seller',
}: Partial<ProductCardProps>) {
  return (
    <Card className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
      <div className="relative">
        <Image src={imageSrc} alt={title} width={600} height={450} unoptimized className="h-64 w-full object-cover" />
        <span className="absolute left-3 top-3 rounded-full bg-[#1A1A2E] px-2.5 py-1 text-xs font-semibold text-white">{badge}</span>
        <Button variant="secondary" size="icon" className="absolute right-3 top-3 h-8 w-8 rounded-full">
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      <div className="space-y-3 p-4">
        <h3 className="line-clamp-2 font-semibold text-[#1A1A2E]">{title}</h3>
        <RatingStars rating={rating} count={reviewCount} />
        <div className="flex items-center justify-between">
          <PriceTag price={price} compareAt={compareAt} />
          <Button className="bg-[#E63946] text-white hover:bg-[#E63946]/90">
            <Plus className="mr-1 h-4 w-4" /> Quick Add
          </Button>
        </div>
      </div>
    </Card>
  )
}
