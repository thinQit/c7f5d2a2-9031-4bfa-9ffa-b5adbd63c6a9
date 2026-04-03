import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground flex items-center justify-center px-4">
      <div className="text-center space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold">Page not found</h2>
        <p className="text-muted-foreground">The page you&apos;re looking for does not exist.</p>
        <Button asChild className="transition-all duration-200 hover:scale-105">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
