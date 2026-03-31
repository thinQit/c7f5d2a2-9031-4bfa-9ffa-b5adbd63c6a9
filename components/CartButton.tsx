'use client'

import { ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CartButtonProps {
  count?: number
  onClick?: () => void
}

export default function CartButton({ count = 0, onClick = () => {} }: Partial<CartButtonProps>) {
  return (
    <Button variant="outline" size="icon" className="relative" onClick={onClick}>
      <ShoppingCart className="h-5 w-5" />
      <span
        className={cn(
          'absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#E63946] px-1 text-xs text-white'
        )}
      >
        {count}
      </span>
    </Button>
  )
}
