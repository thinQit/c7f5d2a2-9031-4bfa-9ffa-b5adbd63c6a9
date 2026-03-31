import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-background text-foreground px-6">
      <h2 className="text-3xl md:text-4xl font-bold">Page not found</h2>
      <p className="mt-3 text-muted-foreground text-center">
        The page you’re looking for doesn’t exist or has moved.
      </p>
      <Button asChild className="mt-6 rounded-lg px-6 py-3 font-medium transition-all duration-200 hover:scale-105">
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}
