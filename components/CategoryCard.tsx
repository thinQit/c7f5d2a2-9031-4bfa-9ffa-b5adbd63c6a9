"use client";

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CategoryCardProps {
  name?: string
  description?: string
  href?: string
  imageSrc?: string
  className?: string
}

export default function CategoryCard({
  name = 'Category',
  description = 'Explore products',
  href = '/shop',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577107/site-images/ecommerce/10330106.jpg',
  className = '',
}: Partial<CategoryCardProps>) {
  return (
    <Link href={href} className={cn('group block rounded-xl border bg-card p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg', className)}>
      <div className="relative mb-3 overflow-hidden rounded-lg">
        <Image src={imageSrc} alt={name} width={1200} height={800} className="h-40 w-full object-cover transition group-hover:scale-105" unoptimized />
      </div>
      <h3 className="text-lg font-semibold text-[#1A1A2E]">{name}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#E63946]">
        Shop now <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  )
}
