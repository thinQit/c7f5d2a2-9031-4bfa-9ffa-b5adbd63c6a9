"use client";

import Image from 'next/image'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface CategoryCardProps {
  title?: string
  description?: string
  href?: string
  imageSrc?: string
  className?: string
}

export default function CategoryCard({
  title = 'Everyday Essentials',
  description = 'Curated picks made for daily comfort and style.',
  href = '/collections/essentials',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577129/site-images/ecommerce/16675635.jpg',
  className = '',
}: Partial<CategoryCardProps>) {
  return (
    <Link href={href}>
      <Card className={cn('overflow-hidden rounded-xl border bg-card transition-transform hover:-translate-y-1', className)}>
        <Image src={imageSrc} alt={title} width={800} height={520} className="h-48 w-full object-cover" unoptimized />
        <div className="p-4">
          <h3 className="font-semibold text-foreground">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        </div>
      </Card>
    </Link>
  )
}
