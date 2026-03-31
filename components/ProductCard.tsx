'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ProductCardProps {
  name?: string
  imageSrc?: string
  price?: string
  compareAt?: string
  rating?: number
  badge?: string
  href?: string
}

export default function ProductCard({
  name = 'Wireless Headphones',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577167/site-images/ecommerce/29502369.jpg',
  price = '$99.00',
  compareAt = '$129.00',
  rating = 4.7,
  badge = 'Best Seller',
  href = '#',
}: Partial<ProductCardProps>) {
  return (
    <a
      href={href}
      className={cn(
        'group block rounded-xl border border-border bg-card card-hover p-3 shadow-sm transition'
      )}
      tabIndex={0}
    >
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={imageSrc}
          alt={name}
          width={600}
          height={400}
          unoptimized
          className="h-44 w-full object-cover transition group-hover:scale-105"
        />
        {badge && (
          <span className="absolute top-3 left-3 z-10 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground">
            {badge}
          </span>
        )}
      </div>
      <div className="mt-4 flex flex-col gap-1">
        <h3 className="font-semibold text-lg">{name}</h3>
        <div className="flex items-center gap-2">
          <span className="font-bold text-foreground">{price}</span>
          {compareAt && (
            <span className="text-sm text-muted-foreground line-through">{compareAt}</span>
          )}
        </div>
        <div className="flex items-center gap-1 text-primary mt-1">
          <Star size={16} fill="currentColor" className="text-yellow-400" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
        <Button
          size="sm"
          className="mt-4 w-full transition-all duration-200 hover:scale-105"
          asChild
        >
          <span>Add to cart</span>
        </Button>
      </div>
    </a>
  )
}
