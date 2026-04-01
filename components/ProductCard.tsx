'use client'

import Image from 'next/image'
import { Flame, Leaf, Plus } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ProductCardProps {
  name?: string
  description?: string
  price?: string
  imageSrc?: string
  isPopular?: boolean
  isVegetarian?: boolean
  className?: string
}

export default function ProductCard({
  name = 'Margherita Classica',
  description = 'San Marzano tomato, fresh mozzarella, basil, and extra virgin olive oil.',
  price = '$14.90',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577154/site-images/ecommerce/10330119.jpg',
  isPopular = true,
  isVegetarian = true,
  className = '',
}: Partial<ProductCardProps>) {
  return (
    <Card className={cn('overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg', className)}>
      <div className="relative">
        <Image src={imageSrc} alt={name} width={800} height={500} className="h-44 w-full object-cover" unoptimized />
        <div className="absolute left-3 top-3 flex gap-2">
          {isPopular && <span className="rounded-full bg-[#E63946] px-2 py-1 text-xs font-semibold text-white"><Flame className="mr-1 inline h-3 w-3" />Popular</span>}
          {isVegetarian && <span className="rounded-full bg-[#10b981] px-2 py-1 text-xs font-semibold text-white"><Leaf className="mr-1 inline h-3 w-3" />Veg</span>}
        </div>
      </div>
      <div className="space-y-3 p-4">
        <h3 className="text-base font-semibold text-[#1A1A2E]">{name}</h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">{description}</p>
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-[#1A1A2E]">{price}</p>
          <Button size="sm" className="bg-[#4f46e5] hover:bg-[#4338ca]">
            <Plus className="mr-1 h-4 w-4" />
            Add
          </Button>
        </div>
      </div>
    </Card>
  )
}
