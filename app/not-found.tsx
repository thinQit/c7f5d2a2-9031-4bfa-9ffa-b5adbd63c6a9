import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold">404</h1>
        <p className="mt-3 text-lg">Page not found</p>
        <p className="mt-2 text-muted-foreground">
          The page you’re looking for doesn’t exist or has moved.
        </p>
        <Link
          href="/"
          className="inline-block mt-6 rounded-lg px-6 py-3 font-medium bg-primary text-primary-foreground transition-all duration-200 hover:scale-105"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
