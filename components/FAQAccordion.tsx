'use client'

import * as React from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  title?: string
  items?: FAQItem[]
}

export default function FAQAccordion({
  title = 'Frequently asked questions',
  items = [
    { question: 'How long does setup take?', answer: 'Most teams are fully set up in under one day using templates and guided onboarding.' },
    { question: 'Do you offer migration support?', answer: 'Yes. We provide migration playbooks and optional white-glove support for larger accounts.' },
    { question: 'Can we cancel anytime?', answer: 'Yes. Monthly plans can be canceled anytime with no hidden fees or penalties.' },
    { question: 'Is my data secure?', answer: 'We use encryption in transit and at rest, role-based access controls, and regular security reviews.' },
  ],
}: Partial<FAQAccordionProps>) {
  const [open, setOpen] = React.useState<string>('0')

  return (
    <section id="faq" className="bg-muted/30 py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <div className="text-center">
          <p className="text-sm font-medium text-[#2563EB]">FAQ</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#111827] md:text-3xl">{title}</h2>
        </div>
        <div className="mt-10 space-y-3">
          {items.map((item, idx) => {
            const key = String(idx)
            const isOpen = open === key
            return (
              <div key={item.question} className="rounded-xl border border-border bg-card">
                <button
                  onClick={() => setOpen(isOpen ? '' : key)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                >
                  <span className="font-medium text-[#111827]">{item.question}</span>
                  <ChevronDown className={cn('h-5 w-5 text-muted-foreground transition-transform', isOpen ? 'rotate-180' : '')} />
                </button>
                {isOpen && <div className="px-5 pb-5 text-sm text-muted-foreground">{item.answer}</div>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
