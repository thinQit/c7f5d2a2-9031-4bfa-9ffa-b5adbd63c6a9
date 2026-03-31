"use client"

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <div className="max-w-xl text-center space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold">Something went wrong</h1>
        <p className="text-muted-foreground">
          We hit an unexpected issue while loading this page.
        </p>
        <button
          onClick={reset}
          className="bg-primary text-primary-foreground rounded-lg px-6 py-3 font-semibold transition-all duration-200 hover:scale-105"
        >
          Try again
        </button>
      </div>
    </main>
  )
}
