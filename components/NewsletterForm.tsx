'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface NewsletterFormProps {
  title?: string
  incentive?: string
}

export default function NewsletterForm({
  title = 'Get 10% Off Your First Order',
  incentive = 'Join our list for early access drops, member-only offers, and product tips.',
}: Partial<NewsletterFormProps>) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [msg, setMsg] = useState<string>('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setMsg('')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, sourcePage: '/' }),
      })
      if (!res.ok) {
        const err = await res.json()
        setStatus('error')
        setMsg(
          err?.error || 'Submission failed. Please double-check your email and try again.'
        )
        return
      }
      setStatus('success')
      setMsg('You’re on the list! Check your inbox for a welcome email.')
      setEmail('')
    } catch (error) {
      setStatus('error')
      setMsg('Could not submit form. Please try again—or email support.')
    }
  }

  return (
    <section className="py-16">
      <div className="mx-auto max-w-2xl rounded-2xl border bg-white p-6 text-center md:p-8">
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{incentive}</p>
        <form
          onSubmit={handleSubmit}
          className="mt-5 flex flex-col gap-3 md:flex-row"
          noValidate
        >
          <Input
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            autoComplete="email"
            disabled={status === 'loading' || status === 'success'}
          />
          <Button
            type="submit"
            className="bg-primary hover:bg-primary/90"
            disabled={status === 'loading' || status === 'success'}
          >
            {status === 'loading' ? 'Saving…' : status === 'success' ? '✓ Subscribed' : 'Subscribe'}
          </Button>
        </form>
        {msg && (
          <p
            className={`mt-3 text-xs ${
              status === 'error' ? 'text-destructive' : 'text-muted-foreground'
            }`}
            role={status === 'error' ? 'alert' : 'status'}
          >
            {msg}
          </p>
        )}
        {!msg && (
          <p className="mt-3 text-xs text-muted-foreground">
            We respect your privacy. Unsubscribe anytime.
          </p>
        )}
      </div>
    </section>
  )
}
