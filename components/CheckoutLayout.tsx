'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function CheckoutLayout({
  headline = "Complete your order",
  subheadline = "Shipping address, delivery method, and payment in one clean flow.",
  primaryCta = { label: "Place order", href: "/order/confirmation" },
  secondaryCta = { label: "Need help?", href: "/contact" },
}: {
  headline?: string
  subheadline?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}) {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [zip, setZip] = useState("")
  const [phone, setPhone] = useState("")
  const [delivery, setDelivery] = useState("standard")

  return (
    <section className="max-w-3xl mx-auto rounded-xl bg-card border border-border p-8 shadow-md">
      <h2 className="text-2xl font-bold mb-2">{headline}</h2>
      <p className="mb-6 text-muted-foreground">{subheadline}</p>
      <form className="grid gap-4">
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
          className="h-11 rounded-lg border border-border bg-background px-3"
          placeholder="Email"
        />
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
          className="h-11 rounded-lg border border-border bg-background px-3"
          placeholder="Full Name"
        />
        <input
          value={address}
          onChange={e => setAddress(e.target.value)}
          type="text"
          className="h-11 rounded-lg border border-border bg-background px-3"
          placeholder="Address"
        />
        <div className="flex gap-2">
          <input
            value={city}
            onChange={e => setCity(e.target.value)}
            type="text"
            className="h-11 flex-1 rounded-lg border border-border bg-background px-3"
            placeholder="City"
          />
          <input
            value={state}
            onChange={e => setState(e.target.value)}
            type="text"
            className="h-11 w-24 rounded-lg border border-border bg-background px-3"
            placeholder="State"
          />
          <input
            value={zip}
            onChange={e => setZip(e.target.value)}
            type="text"
            className="h-11 w-32 rounded-lg border border-border bg-background px-3"
            placeholder="ZIP"
          />
        </div>
        <input
          value={phone}
          onChange={e => setPhone(e.target.value)}
          type="text"
          className="h-11 rounded-lg border border-border bg-background px-3"
          placeholder="Phone (optional)"
        />
        <div className="flex flex-col gap-2 mt-2">
          <label className="font-semibold mb-1">Delivery Options</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={delivery === "standard"}
                onChange={() => setDelivery("standard")}
              />
              <span>Standard&nbsp;<span className="text-muted-foreground">(2–5 business days, $6)</span></span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={delivery === "express"}
                onChange={() => setDelivery("express")}
              />
              <span>Express&nbsp;<span className="text-muted-foreground">(1–2 business days, $14)</span></span>
            </label>
          </div>
        </div>
        <div className="mt-6 flex flex-col md:flex-row gap-3">
          <Button type="submit" size="lg" className="w-full md:w-auto" asChild>
            <a href={primaryCta?.href ?? "#"}>{primaryCta?.label ?? "Place order"}</a>
          </Button>
          <Button
            type="button"
            variant="outline"
            size="lg"
            className="w-full md:w-auto border-border bg-background/10 text-primary-foreground hover:bg-background/20"
            asChild
          >
            <a href={secondaryCta?.href ?? "#"}>{secondaryCta?.label ?? "Need help?"}</a>
          </Button>
        </div>
        <div className="mt-4 flex flex-row gap-5 text-xs text-muted-foreground">
          <a href="/shipping-returns" className="underline hover:text-primary">Shipping & returns</a>
          <a href="/privacy" className="underline hover:text-primary">Privacy policy</a>
        </div>
      </form>
    </section>
  )
}
