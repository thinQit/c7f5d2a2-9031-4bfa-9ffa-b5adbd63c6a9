'use client'

import { ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CartButtonProps {
  count?: number
  onClick?: () => void
  className?: string
}

export default function CartButton({ count = 2, onClick = () => {}, className = '' }: Partial<CartButtonProps>) {
  return (
    <Button variant="outline" size="icon" className={cn('relative', className)} onClick={onClick} aria-label="Open cart">
      <ShoppingCart className="h-5 w-5" />
      {count > 0 && <span className="absolute -right-1 -top-1 rounded-full bg-[#E63946] px-1.5 text-[10px] font-bold text-white">{count}</span>}
    </Button>
  )
}
