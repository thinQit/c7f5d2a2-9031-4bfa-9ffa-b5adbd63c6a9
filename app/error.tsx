'use client'

import { Button } from '@/components/ui/button'

export default function Error({
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-background px-6 text-center text-foreground">
      <h2 className="text-3xl font-bold">Something went wrong</h2>
      <p className="mt-3 text-muted-foreground">Please try again or head back to shopping.</p>
      <Button onClick={() => reset()} className="mt-6 transition-all duration-200 hover:scale-105">
        Try again
      </Button>
    </div>
  )
}
