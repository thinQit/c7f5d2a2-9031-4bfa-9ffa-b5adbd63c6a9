'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ProductGalleryProps {
  images?: string[]
}

export default function ProductGallery({
  images = [
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577167/site-images/ecommerce/29502369.jpg',
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577128/site-images/ecommerce/32831065.jpg',
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577143/site-images/ecommerce/18512823.jpg',
  ],
}: Partial<ProductGalleryProps>) {
  const [active, setActive] = useState(0)

  return (
    <div>
      <div className="overflow-hidden rounded-xl border">
        <Image src={images[active] || ''} alt="Product image" width={1200} height={900} className="h-[420px] w-full object-cover hover:scale-105 transition-transform" unoptimized />
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2">
        {images.map((img, i) => (
          <button key={img + i} onClick={() => setActive(i)} className={cn('overflow-hidden rounded-md border', i === active && 'ring-2 ring-[#E63946]')}>
            <Image src={img} alt={'Thumbnail ' + (i + 1)} width={220} height={180} className="h-20 w-full object-cover" unoptimized />
          </button>
        ))}
      </div>
    </div>
  )
}
