'use client'

import Image from 'next/image'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import QuantityStepper from '@/components/QuantityStepper'

interface CartItem {
  id: string
  name: string
  price: number
  qty: number
  imageSrc: string
}

interface MiniCartDrawerProps {
  open?: boolean
  onClose?: () => void
  items?: CartItem[]
}

export default function MiniCartDrawer({
  open = false,
  onClose = () => {},
  items = [
    {
      id: '1',
      name: 'Minimal Leather Wallet',
      price: 49,
      qty: 1,
      imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577103/site-images/ecommerce/29502370.jpg',
    },
  ],
}: Partial<MiniCartDrawerProps>) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <div className={cn('fixed inset-0 z-50', open ? 'pointer-events-auto' : 'pointer-events-none')}>
      <div className={cn('absolute inset-0 bg-black/40 transition-opacity', open ? 'opacity-100' : 'opacity-0')} onClick={onClose} />
      <aside className={cn('absolute right-0 top-0 h-full w-full max-w-md bg-white p-5 transition-transform', open ? 'translate-x-0' : 'translate-x-full')}>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-semibold text-[#1A1A2E]">Your Cart</h3>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex gap-3 rounded-xl border p-3">
              <Image src={item.imageSrc} alt={item.name} width={90} height={90} className="rounded-md object-cover" unoptimized />
              <div className="flex-1">
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
                <QuantityStepper quantity={item.qty} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 border-t pt-4">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Subtotal</span>
            <span className="font-semibold">${subtotal.toFixed(2)}</span>
          </div>
          <Button className="w-full bg-[#E63946] hover:bg-[#d62f3c]">Checkout</Button>
        </div>
      </aside>
    </div>
  )
}
