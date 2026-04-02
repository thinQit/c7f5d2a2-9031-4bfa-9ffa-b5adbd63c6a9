'use client'

import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import CartLineItem from '@/components/CartLineItem'
import OrderSummary from '@/components/OrderSummary'
import { cn } from '@/lib/utils'

interface CartDrawerProps {
  open?: boolean
  onClose?: () => void
}

export default function CartDrawer({ open = false, onClose = () => {} }: Partial<CartDrawerProps>) {
  return (
    <div className={cn('fixed inset-0 z-[70]', open ? 'pointer-events-auto' : 'pointer-events-none')}>
      <div className={cn('absolute inset-0 bg-black/40 transition-opacity', open ? 'opacity-100' : 'opacity-0')} onClick={onClose} />
      <aside className={cn('absolute right-0 top-0 h-full w-full max-w-md bg-card p-5 text-foreground transition-transform', open ? 'translate-x-0' : 'translate-x-full')}>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-bold text-foreground">Your Cart</h3>
          <Button variant="ghost" size="icon" onClick={onClose}><X className="h-5 w-5" /></Button>
        </div>
        <div className="space-y-3">
          <CartLineItem />
          <CartLineItem title="Canvas Tote" />
        </div>
        <div className="mt-6">
          <OrderSummary />
          <Button className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/90">Checkout</Button>
        </div>
      </aside>
    </div>
  )
}
