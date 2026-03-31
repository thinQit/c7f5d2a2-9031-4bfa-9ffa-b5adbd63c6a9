import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <div className="max-w-xl text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">404</h1>
        <p className="text-muted-foreground">The page you are looking for does not exist.</p>
        <Link
          href="/"
          className="inline-flex bg-primary text-primary-foreground rounded-lg px-6 py-3 font-semibold transition-all duration-200 hover:scale-105"
        >
          Back to home
        </Link>
      </div>
    </main>
  )
}
