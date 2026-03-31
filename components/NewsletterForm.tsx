'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (!email) {
      setError('Please enter your email')
      return
    }
    try {
      const res = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, sourcePage: 'home-newsletter' }),
      })
      if (!res.ok) throw new Error('Failed to subscribe')
      setSubmitted(true)
    } catch {
      setError('Subscription failed. Try again!')
    }
  }

  return (
    <section>
      <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-1">Get first access to drops and deals</h2>
          <p className="text-muted-foreground mb-2">
            Join 18,000+ subscribers. New arrivals, limited runs, and members-only bundles—sent weekly.
          </p>
          <span className="inline-block rounded px-3 py-1 bg-green-100 text-green-800 text-sm font-medium mb-3">
            Welcome perk: 10% off your first order over $50
          </span>
        </div>
        <form className="mt-4 flex flex-col md:flex-row gap-2" onSubmit={handleSubmit}>
          <input
            className="min-w-[260px] rounded-lg border border-border bg-background px-4 py-3 text-base"
            placeholder="you@example.com"
            value={email}
            type="email"
            onChange={e => setEmail(e.target.value)}
            required
            disabled={submitted}
            aria-label="Email address"
          />
          <Button
            type="submit"
            className="rounded-lg px-4 py-3 font-medium text-base"
            disabled={submitted}
          >
            {submitted ? 'Subscribed!' : 'Subscribe'}
          </Button>
        </form>
      </div>
      {error && <p className="text-red-600 text-sm mt-3">{error}</p>}
      <p className="mt-6 text-xs text-muted-foreground">
        By subscribing, you agree to receive emails from Spotlight Storefront. Unsubscribe anytime.
      </p>
    </section>
  )
}
