"use client";

import Image from 'next/image'
import { Button } from '@/components/ui/button'

const cartItems = [
  {
    name: 'Braided USB‑C Cable (2m)',
    price: '$18.00',
    qty: 1,
    imageSrc:
      'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577167/site-images/ecommerce/29502369.jpg',
    href: '/product/braided-usb-c-cable-2m',
  },
  {
    name: 'Tech Organizer Pouch',
    price: '$29.00',
    qty: 2,
    imageSrc:
      'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577159/site-images/ecommerce/10330108.jpg',
    href: '/product/tech-organizer-pouch',
  },
]

export default function CartLayout({
  headline = "Order summary",
  subheadline = "Transparent totals with shipping estimates before you pay.",
  primaryCta = { label: "Proceed to checkout", href: "/checkout" },
  secondaryCta = { label: "Apply promo code", href: "#promo" },
}: {
  headline?: string
  subheadline?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}) {
  const subtotal = 18 * 1 + 29 * 2
  const shipping = subtotal > 50 ? 0 : 6
  const tax = Math.round(subtotal * 0.0825)
  const total = subtotal + shipping + tax
  return (
    <section className="grid gap-8 md:grid-cols-3">
      <div className="md:col-span-2">
        <h2 className="text-2xl font-bold mb-2">{headline}</h2>
        <p className="text-muted-foreground mb-4">{subheadline}</p>
        <ul className="divide-y border rounded-lg bg-background shadow-sm">
          {cartItems.map((item, i) => (
            <li key={i} className="flex items-center gap-4 p-4">
              <a href={item.href}>
                <Image
                  src={item.imageSrc}
                  alt={item.name}
                  width={80}
                  height={60}
                  unoptimized
                  className="rounded-md border"
                />
              </a>
              <div className="flex-1">
                <a href={item.href} className="font-semibold hover:text-primary">
                  {item.name}
                </a>
                <div className="text-sm text-muted-foreground">Quantity: {item.qty}</div>
              </div>
              <div className="font-medium">{item.price}</div>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-col md:flex-row gap-3">
          <Button variant="outline" className="md:w-auto w-full" asChild>
            <a href={secondaryCta?.href ?? "#"}>{secondaryCta?.label ?? "Promo code"}</a>
          </Button>
        </div>
      </div>
      <aside className="bg-card border border-border rounded-xl p-6 shadow flex flex-col gap-4">
        <h3 className="font-semibold text-lg mb-2">Summary</h3>
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Estimated shipping</span>
            <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax (estimated)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="border-t my-2"></div>
          <div className="flex justify-between font-bold text-foreground">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
        <Button size="lg" className="mt-4 w-full" asChild>
          <a href={primaryCta?.href ?? "#"}>{primaryCta?.label ?? "Checkout"}</a>
        </Button>
      </aside>
    </section>
  )
}
