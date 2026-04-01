import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-4">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Page not found</h1>
        <p className="text-muted-foreground">Looks like this slice is missing from the menu.</p>
        <Button asChild className="transition-all duration-200 hover:scale-105">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
