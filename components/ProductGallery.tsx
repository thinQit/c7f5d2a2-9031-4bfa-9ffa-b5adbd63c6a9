'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ProductGalleryProps {
  images?: string[]
}

export default function ProductGallery({
  images = [
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577107/site-images/ecommerce/29502359.jpg',
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577106/site-images/ecommerce/17485353.jpg',
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577152/site-images/ecommerce/11952304.jpg',
  ],
}: Partial<ProductGalleryProps>) {
  const [active, setActive] = useState(0)

  return (
    <div className="space-y-3">
      <div className="overflow-hidden rounded-xl border">
        <Image src={images[active]} alt="Product image" width={1000} height={800} unoptimized className="h-[420px] w-full object-cover transition-transform hover:scale-105" />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {images.map((img, idx) => (
          <button key={img} onClick={() => setActive(idx)} className={cn('overflow-hidden rounded-lg border', idx === active ? 'ring-2 ring-[#E63946]' : '')}>
            <Image src={img} alt={'Thumbnail ' + (idx + 1)} width={180} height={120} unoptimized className="h-20 w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}
