'use client'

import Image from 'next/image'
import { Heart, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Price from '@/components/Price'

interface ProductCardProps {
  title?: string
  imageSrc?: string
  price?: number
  compareAt?: number
  rating?: number
  badge?: string
  className?: string
}

export default function ProductCard({
  title = 'Product',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577117/site-images/ecommerce/29502363.jpg',
  price = 0,
  compareAt = 0,
  rating = 4.5,
  badge = '',
  className = '',
}: Partial<ProductCardProps>) {
  return (
    <article className={cn('group rounded-xl border bg-card p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg', className)}>
      <div className="relative mb-3 overflow-hidden rounded-lg">
        <Image src={imageSrc} alt={title} width={1200} height={800} className="h-40 w-full object-cover transition group-hover:scale-105" unoptimized />
        {badge && <span className="absolute left-2 top-2 rounded-md bg-[#E63946] px-2 py-1 text-xs font-semibold text-white">{badge}</span>}
        <Button variant="secondary" size="icon" className="absolute right-2 top-2 h-8 w-8">
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      <h3 className="line-clamp-2 min-h-[2.8rem] text-sm font-semibold text-[#1A1A2E]">{title}</h3>
      <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
        <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
        <span>{rating?.toFixed(1)}</span>
      </div>
      <div className="mt-2">
        <Price price={price} compareAt={compareAt} />
      </div>
      <Button className="mt-3 w-full bg-[#E63946] hover:bg-[#d72f3c]">Add to cart</Button>
    </article>
  )
}
