'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CartLineItemProps {
  title?: string
  imageSrc?: string
  price?: number
  quantity?: number
}

export default function CartLineItem({
  title = 'Essential Hoodie',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577149/site-images/ecommerce/10223868.jpg',
  price = 79,
  quantity = 1,
}: Partial<CartLineItemProps>) {
  const [qty, setQty] = useState(quantity)

  return (
    <div className="flex gap-3 rounded-lg border p-3">
      <Image src={imageSrc} alt={title} width={96} height={96} unoptimized className="h-20 w-20 rounded-md object-cover" />
      <div className="flex-1">
        <h4 className="text-sm font-semibold text-[#1A1A2E]">{title}</h4>
        <p className="mt-1 text-sm font-bold">${price.toFixed(2)}</p>
        <div className="mt-2 flex items-center gap-2">
          <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => setQty(Math.max(1, qty - 1))}><Minus className="h-3 w-3" /></Button>
          <span className="w-6 text-center text-sm">{qty}</span>
          <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => setQty(qty + 1)}><Plus className="h-3 w-3" /></Button>
          <Button variant="ghost" size="icon" className="ml-auto h-7 w-7"><Trash2 className="h-4 w-4 text-muted-foreground" /></Button>
        </div>
      </div>
    </div>
  )
}
