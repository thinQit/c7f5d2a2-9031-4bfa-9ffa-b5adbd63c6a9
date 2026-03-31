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
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577712/site-images/hero-backgrounds/12981878.jpg',
  alt = 'Hero shopping image',
  overlay = true,
  className = '',
}: Partial<HeroImageCardProps>) {
  return (
    <div className={cn('relative overflow-hidden rounded-xl border shadow-sm', className)}>
      <Image src={imageSrc} alt={alt} width={1200} height={800} unoptimized className="h-full w-full object-cover" />
      {overlay && <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />}
    </div>
  )
}
