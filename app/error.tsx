"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-background text-foreground px-6">
      <h2 className="text-3xl md:text-4xl font-bold">Something went wrong.</h2>
      <p className="mt-3 text-muted-foreground text-center max-w-xl">
        We hit an unexpected issue while loading this page. Please try again.
      </p>
      <Button
        onClick={() => reset()}
        className="mt-6 rounded-lg px-6 py-3 font-medium transition-all duration-200 hover:scale-105"
      >
        Try again
      </Button>
    </div>
  );
}
