'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import PriceTag from '@/components/PriceTag'
import RatingStars from '@/components/RatingStars'

interface ProductCardProps {
  name?: string
  price?: number
  compareAt?: number
  rating?: number
  reviews?: number
  badge?: string
  imageSrc?: string
}

export default function ProductCard({
  name = 'Premium Everyday Backpack',
  price = 89,
  compareAt = 119,
  rating = 4.8,
  reviews = 124,
  badge = 'Best Seller',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577145/site-images/ecommerce/35765454.jpg',
}: Partial<ProductCardProps>) {
  return (
    <Card className="overflow-hidden rounded-xl border">
      <Image src={imageSrc} alt={name} width={900} height={700} className="h-56 w-full object-cover" unoptimized />
      <div className="space-y-3 p-4">
        <p className="inline-block rounded-full bg-[#E63946]/10 px-2 py-1 text-xs font-medium text-[#E63946]">{badge}</p>
        <h3 className="font-medium text-[#1A1A2E]">{name}</h3>
        <RatingStars rating={rating} count={reviews} />
        <PriceTag price={price} compareAt={compareAt} />
        <Button className="w-full bg-[#E63946] hover:bg-[#d62f3c]">Quick Add</Button>
      </div>
    </Card>
  )
}
