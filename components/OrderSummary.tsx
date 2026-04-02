"use client";

interface OrderSummaryProps {
  subtotal?: number
  shipping?: number
  tax?: number
  freeShippingThreshold?: number
}

export default function OrderSummary({
  subtotal = 128,
  shipping = 8,
  tax = 10.24,
  freeShippingThreshold = 150,
}: Partial<OrderSummaryProps>) {
  const total = subtotal + shipping + tax
  const progress = Math.min((subtotal / freeShippingThreshold) * 100, 100)

  return (
    <div className="rounded-xl border p-4">
      <div className="space-y-2 text-sm">
        <div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
        <div className="flex justify-between"><span>Shipping</span><span>${shipping.toFixed(2)}</span></div>
        <div className="flex justify-between"><span>Tax</span><span>${tax.toFixed(2)}</span></div>
        <div className="mt-2 border-t pt-2 text-base font-bold"><div className="flex justify-between"><span>Total</span><span>${total.toFixed(2)}</span></div></div>
      </div>
      <div className="mt-4">
        <div className="mb-1 h-2 w-full rounded-full bg-muted">
          <div className="h-2 rounded-full bg-[#10b981]" style={{ width: progress + '%' }} />
        </div>
        <p className="text-xs text-muted-foreground">
          {subtotal >= freeShippingThreshold ? 'You unlocked free shipping!' : 'Add $' + (freeShippingThreshold - subtotal).toFixed(2) + ' for free shipping.'}
        </p>
      </div>
    </div>
  )
}
