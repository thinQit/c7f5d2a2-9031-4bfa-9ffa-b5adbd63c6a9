'use client'

import { ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CartButtonProps {
  count?: number
  onClick?: () => void
  className?: string
}

export default function CartButton({
  count = 0,
  onClick = () => {},
  className = '',
}: Partial<CartButtonProps>) {
  return (
    <Button variant="ghost" size="icon" onClick={onClick} className={cn('relative', className)}>
      <ShoppingCart className="h-5 w-5" />
      <span className="absolute -right-1 -top-1 min-w-[18px] rounded-full bg-primary px-1 text-center text-[10px] font-semibold text-primary-foreground">
        {count}
      </span>
    </Button>
  )
}
