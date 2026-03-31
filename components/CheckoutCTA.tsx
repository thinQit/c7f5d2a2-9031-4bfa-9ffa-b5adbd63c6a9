"use client";

import Link from 'next/link'
import { Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CheckoutCTAProps {
  href?: string
  label?: string
}

export default function CheckoutCTA({
  href = '/checkout',
  label = 'Proceed to Checkout',
}: Partial<CheckoutCTAProps>) {
  return (
    <div>
      <Button asChild className="w-full bg-[#E63946] hover:bg-[#d72f3c]">
        <Link href={href}>{label}</Link>
      </Button>
      <p className="mt-2 flex items-center justify-center gap-1 text-xs text-muted-foreground">
        <Lock className="h-3.5 w-3.5" /> Secure payment protected
      </p>
    </div>
  )
}
