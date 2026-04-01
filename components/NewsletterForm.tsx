'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface NewsletterFormProps {
  title?: string
  incentiveCode?: string
  className?: string
}

export default function NewsletterForm({
  title = 'Get 15% Off Your First Online Order',
  incentiveCode = 'CIAO15',
  className = '',
}: Partial<NewsletterFormProps>) {
  const [email, setEmail] = useState('')

  return (
    <section className={cn('bg-[#F8F9FA] py-16', className)}>
      <div className="mx-auto max-w-3xl rounded-2xl border bg-white px-6 py-8 text-center shadow-sm md:px-10">
        <h3 className="mb-2 text-2xl font-bold text-[#1A1A2E]">{title}</h3>
        <p className="mb-4 text-sm text-muted-foreground">
          Subscribe for weekly specials. Use code <span className="font-semibold text-[#10b981]">{incentiveCode}</span> at checkout.
        </p>
        <form className="mx-auto flex max-w-xl flex-col gap-3 sm:flex-row">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-11"
          />
          <Button type="submit" className="h-11 bg-[#4f46e5] hover:bg-[#4338ca]">Subscribe</Button>
        </form>
      </div>
    </section>
  )
}
