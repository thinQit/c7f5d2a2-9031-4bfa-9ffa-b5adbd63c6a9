'use client'

import { Minus, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface QuantityStepperProps {
  quantity?: number
  onChange?: (value: number) => void
}

export default function QuantityStepper({
  quantity = 1,
  onChange = () => {},
}: Partial<QuantityStepperProps>) {
  return (
    <div className="mt-2 inline-flex items-center rounded-lg border">
      <Button variant="ghost" size="icon" onClick={() => onChange(Math.max(1, quantity - 1))}>
        <Minus className="h-4 w-4" />
      </Button>
      <span className="min-w-10 text-center text-sm">{quantity}</span>
      <Button variant="ghost" size="icon" onClick={() => onChange(quantity + 1)}>
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  )
}
