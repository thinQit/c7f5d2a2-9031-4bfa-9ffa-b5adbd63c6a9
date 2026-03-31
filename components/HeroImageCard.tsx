"use client";

import Image from 'next/image'
import { cn } from '@/lib/utils'

interface HeroImageCardProps {
  imageSrc?: string
  alt?: string
  overlay?: boolean
  className?: string
}

export default function HeroImageCard({
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577111/site-images/ecommerce/3767397.jpg',
  alt = 'Hero shopping image',
  overlay = true,
  className = '',
}: Partial<HeroImageCardProps>) {
  return (
    <div className={cn('relative overflow-hidden rounded-xl border shadow-sm', className)}>
      <Image src={imageSrc} alt={alt} width={1200} height={800} className="h-full w-full object-cover" unoptimized />
      {overlay && <div className="absolute inset-0 bg-gradient-to-tr from-[#1A1A2E]/40 via-transparent to-[#E63946]/20" />}
    </div>
  )
}
