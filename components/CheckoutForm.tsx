'use client'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface CheckoutFormProps {
  title?: string
}

export default function CheckoutForm({ title = 'Checkout' }: Partial<CheckoutFormProps>) {
  return (
    <form className="space-y-4 rounded-xl border bg-white p-5">
      <h3 className="text-xl font-bold text-[#1A1A2E]">{title}</h3>
      <div className="grid gap-3 md:grid-cols-2">
        <Input placeholder="First name" />
        <Input placeholder="Last name" />
      </div>
      <Input placeholder="Address line 1" />
      <Input placeholder="Apartment, suite, etc. (optional)" />
      <div className="grid gap-3 md:grid-cols-3">
        <Input placeholder="City" />
        <Input placeholder="State" />
        <Input placeholder="ZIP code" />
      </div>
      <div className="rounded-lg border p-4 text-sm text-muted-foreground">Stripe Payment Element Placeholder</div>
      <Button className="w-full bg-[#E63946] text-white hover:bg-[#E63946]/90">Place Order</Button>
    </form>
  )
}
