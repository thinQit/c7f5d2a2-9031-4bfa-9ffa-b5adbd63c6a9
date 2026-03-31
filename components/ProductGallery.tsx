'use client'

import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface ProductGalleryProps {
  images?: string[]
  headline?: string
  subheadline?: string
}

export default function ProductGallery({
  images = [
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577117/site-images/ecommerce/29502363.jpg',
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577105/site-images/ecommerce/17485352.jpg',
  ],
  headline = "Product details that answer questions fast",
  subheadline = "High-res photos, specs, shipping estimates, and verified reviews—right where you need them.",
}: Partial<ProductGalleryProps>) {
  const [active, setActive] = useState(0)
  return (
    <div>
      <div className="mb-5">
        <h3 className="text-2xl font-semibold">{headline}</h3>
        {subheadline && <p className="mt-1 text-muted-foreground">{subheadline}</p>}
      </div>
      <div>
        <div className="relative rounded-xl border border-border overflow-hidden mb-4">
          <Image
            src={images[active]}
            alt={`Product view ${active + 1}`}
            width={900}
            height={600}
            unoptimized
            className="w-full h-[330px] md:h-[400px] object-cover transition"
          />
        </div>
        <div className="flex gap-3">
          {images.map((img, idx) => (
            <button
              key={img}
              onClick={() => setActive(idx)}
              className={cn(
                "rounded-lg border transition hover:border-primary focus:outline-none",
                idx === active ? "border-primary" : "border-border"
              )}
              tabIndex={0}
              aria-label={`View product image ${idx + 1}`}
            >
              <Image
                src={img}
                alt={`Product thumbnail ${idx + 1}`}
                width={90}
                height={60}
                unoptimized
                className="w-20 h-14 object-cover rounded-lg"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
