"use client";

import Image from 'next/image'
import { cn } from '@/lib/utils'

interface CategoryCardProps {
  title?: string
  description?: string
  imageSrc?: string
}

export default function CategoryCard({
  title = 'Electronics',
  description = 'Latest gadgets and smart essentials.',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577145/site-images/ecommerce/34577.jpg',
}: Partial<CategoryCardProps>) {
  return (
    <a className={cn('group block rounded-xl border bg-card p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg')}>
      <div className="overflow-hidden rounded-lg">
        <Image src={imageSrc} alt={title} width={1200} height={800} unoptimized className="h-40 w-full object-cover transition group-hover:scale-105" />
      </div>
      <h3 className="mt-3 font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </a>
  )
}
