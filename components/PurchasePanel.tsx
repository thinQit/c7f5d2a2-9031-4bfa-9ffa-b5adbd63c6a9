'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CreditCard, Truck } from 'lucide-react'

export default function PurchasePanel({
  headline = "Secure purchase panel",
  subheadline = "Price, variants, quantity, stock, delivery estimate, and payment methods.",
  primaryCta = { label: "Add to cart", href: "/cart" },
  secondaryCta = { label: "Shipping & returns", href: "/shipping-returns" },
}: {
  headline?: string
  subheadline?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}) {
  const [qty, setQty] = useState(1)
  return (
    <aside className="rounded-xl border border-border bg-muted/40 p-6 flex flex-col gap-6">
      <div>
        <h4 className="text-2xl font-bold">{headline}</h4>
        <p className="text-muted-foreground text-sm">{subheadline}</p>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-3xl font-bold text-primary">$99.00</span>
        <span className="line-through text-muted-foreground">$129.00</span>
        <span className="text-green-600 text-sm font-semibold">In stock</span>
      </div>
      <div className="flex items-center gap-4">
        <label htmlFor="qty" className="font-semibold">
          Qty
        </label>
        <div className="flex items-center border rounded-lg px-2 py-1 bg-background">
          <button
            type="button"
            className="px-2 text-xl font-bold text-primary"
            aria-label="Decrease quantity"
            onClick={() => setQty(q => Math.max(1, q - 1))}
          >
            –
          </button>
          <input
            id="qty"
            value={qty}
            onChange={e => setQty(Math.max(1, parseInt(e.target.value || "1")))}
            min={1}
            type="number"
            className="w-14 text-base border-none outline-none text-center bg-background"
          />
          <button
            type="button"
            className="px-2 text-xl font-bold text-primary"
            aria-label="Increase quantity"
            onClick={() => setQty(q => Math.min(99, q + 1))}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <Button size="lg" className="w-full" asChild>
          <a href={primaryCta?.href ?? "#"}>{primaryCta?.label ?? "Add to cart"}</a>
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="w-full border-border bg-background/10 text-primary-foreground hover:bg-background/20"
          asChild
        >
          <a href={secondaryCta?.href ?? "#"}>{secondaryCta?.label ?? "Shipping & returns"}</a>
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Truck className="h-5 w-5 text-primary" />
        <span className="text-sm text-muted-foreground">
          Delivery in 2–4 days from Austin, TX
        </span>
      </div>
      <div className="flex gap-3 mt-3">
        {["Visa", "Mastercard", "AmEx", "Apple Pay"].map(method => (
          <div
            key={method}
            className="flex items-center gap-1 rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground"
          >
            <CreditCard className="h-3 w-3 text-primary" /> {method}
          </div>
        ))}
      </div>
    </aside>
  )
}
