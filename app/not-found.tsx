import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-6">
      <div className="max-w-xl text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">404</h1>
        <p className="text-muted-foreground">This page could not be found.</p>
        <Button asChild className="transition-all duration-200 hover:scale-105">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
