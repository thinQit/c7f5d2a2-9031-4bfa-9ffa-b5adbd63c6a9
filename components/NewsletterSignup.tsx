'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface NewsletterSignupProps {
  title?: string
  subtitle?: string
}

export default function NewsletterSignup({
  title = 'Get 10% Off Your First Order',
  subtitle = 'Join our newsletter for launches, offers, and restock alerts.',
}: Partial<NewsletterSignupProps>) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const submit = async () => {
    try {
      await fetch('/api/newsletter', { method: 'POST', body: JSON.stringify({ email }) })
      setStatus('Thanks! You are subscribed.')
      setEmail('')
    } catch {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-3xl rounded-xl border bg-card p-6 text-center shadow-sm">
        <h2 className="text-2xl font-bold text-[#1A1A2E]">{title}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
        <div className="mx-auto mt-4 flex max-w-lg flex-col gap-2 sm:flex-row">
          <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" />
          <Button onClick={submit} className="bg-[#E63946] hover:bg-[#d72f3c]">
            Subscribe
          </Button>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">We respect your privacy. Unsubscribe anytime.</p>
        {status && <p className="mt-2 text-sm">{status}</p>}
      </div>
    </section>
  )
}
