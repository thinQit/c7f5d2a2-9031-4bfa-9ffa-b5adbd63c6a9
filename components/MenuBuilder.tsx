'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface MenuBuilderProps {
  className?: string
}

export default function MenuBuilder({ className = '' }: Partial<MenuBuilderProps>) {
  const [size, setSize] = useState('Medium')
  const [base, setBase] = useState('Classic Tomato')

  return (
    <section className={cn('mx-auto max-w-5xl px-4 py-16 md:px-6', className)}>
      <h2 className="mb-6 text-2xl font-bold text-[#1A1A2E]">Build Your Own Pizza</h2>
      <div className="grid gap-6 rounded-2xl border bg-white p-6 md:grid-cols-3">
        <div>
          <p className="mb-3 font-semibold">1) Size</p>
          <div className="space-y-2">
            {['Small', 'Medium', 'Large'].map((s) => (
              <button key={s} onClick={() => setSize(s)} className={cn('w-full rounded-lg border p-2 text-left text-sm', size === s && 'border-[#4f46e5] bg-[#eef2ff]')}>
                {s}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-3 font-semibold">2) Base</p>
          <div className="space-y-2">
            {['Classic Tomato', 'White Cream', 'Pesto'].map((b) => (
              <button key={b} onClick={() => setBase(b)} className={cn('w-full rounded-lg border p-2 text-left text-sm', base === b && 'border-[#10b981] bg-[#ecfdf5]')}>
                {b}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-3 font-semibold">3) Toppings</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Mozzarella</li>
            <li>• Pepperoni</li>
            <li>• Mushrooms</li>
            <li>• Olives</li>
            <li>• Burrata</li>
          </ul>
          <Button className="mt-4 w-full bg-[#E63946] hover:bg-[#d92f3d]">Add Custom Pizza</Button>
        </div>
      </div>
    </section>
  )
}
