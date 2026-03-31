'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import CheckoutCTA from '@/components/CheckoutCTA'

interface CartItem {
  id: string
  title: string
  quantity: number
  price: number
  imageSrc: string
}

interface CartDrawerProps {
  open?: boolean
  onClose?: () => void
  items?: CartItem[]
}

export default function CartDrawer({
  open = false,
  onClose = () => {},
  items = [
    { id: '1', title: 'Aero Headphones', quantity: 1, price: 149, imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577110/site-images/ecommerce/17485350.jpg' },
    { id: '2', title: 'Arc USB-C Dock', quantity: 2, price: 89, imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577106/site-images/ecommerce/15195243.jpg' },
  ],
}: Partial<CartDrawerProps>) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/40">
      <aside className="ml-auto h-full w-full max-w-md bg-background p-4 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-bold">Your Cart</h3>
          <Button variant="ghost" onClick={onClose}>Close</Button>
        </div>
        <div className="space-y-3">
          {items.map((item) => (
            <div key={item.id} className="flex gap-3 rounded-lg border p-2">
              <Image src={item.imageSrc} alt={item.title} width={120} height={80} className="h-16 w-16 rounded object-cover" unoptimized />
              <div className="flex-1">
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-xs text-muted-foreground">Qty {item.quantity}</p>
                <p className="text-sm font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 border-t pt-4">
          <p className="mb-3 flex justify-between font-semibold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </p>
          <CheckoutCTA />
        </div>
      </aside>
    </div>
  )
}
