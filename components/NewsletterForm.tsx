'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface NewsletterFormProps {
  title?: string
  incentive?: string
}

export default function NewsletterForm({
  title = 'Get 10% off your first order',
  incentive = 'Join our newsletter for drops, deals, and styling tips.',
}: Partial<NewsletterFormProps>) {
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)

  return (
    <div className="rounded-2xl border bg-white p-6 text-center md:p-8">
      <h3 className="text-2xl font-bold text-[#1A1A2E]">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{incentive}</p>
      {success ? (
        <p className="mt-4 font-medium text-green-600">Thanks! You’re subscribed.</p>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault()
            setSuccess(true)
          }}
          className="mx-auto mt-5 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <Input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" />
          <Button className="bg-[#E63946] text-white hover:bg-[#E63946]/90">Subscribe</Button>
        </form>
      )}
      <p className="mt-3 text-xs text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
    </div>
  )
}
