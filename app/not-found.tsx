import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-background px-6 text-center text-foreground">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-3 text-muted-foreground">We couldn’t find that page.</p>
      <Link href="/">
        <Button className="mt-6 transition-all duration-200 hover:scale-105">Back to home</Button>
      </Link>
    </div>
  )
}
