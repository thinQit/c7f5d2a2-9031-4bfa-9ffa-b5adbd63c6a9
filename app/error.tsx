"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
      <div className="max-w-xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Something went wrong</h1>
        <p className="mt-4 text-muted-foreground">
          We hit an unexpected issue while loading this page.
        </p>
        <button
          onClick={reset}
          className="mt-6 rounded-lg px-6 py-3 font-medium bg-primary text-primary-foreground transition-all duration-200 hover:scale-105"
        >
          Try again
        </button>
        <p className="mt-4 text-xs text-muted-foreground">{error.message}</p>
      </div>
    </main>
  );
}
