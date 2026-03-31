'use client'

import * as React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function FAQAccordion() {
  const faqs = [
    {
      q: 'Will this work for a small team?',
      a: 'Yes. Starter plans are designed for lean teams and solo operators. You can scale features as results grow.',
    },
    {
      q: 'How fast can we launch?',
      a: 'Most teams publish their first conversion-ready page in under one day using templates and guided setup.',
    },
    {
      q: 'Do we need engineering support?',
      a: 'Not for core setup. Marketing and revenue teams can own page updates without waiting on dev cycles.',
    },
    {
      q: 'What if we already use other tools?',
      a: 'GrowthPilot plugs into your existing CRM and analytics stack, so you can keep your current workflows.',
    },
  ]

  return (
    <section id="faq" className="bg-muted/30 py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-[#111827] md:text-4xl">Frequently asked questions</h2>
        <Accordion type="single" collapsible className="mt-8 w-full">
          {faqs.map((item, i) => (
            <AccordionItem key={item.q} value={'item-' + i}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
