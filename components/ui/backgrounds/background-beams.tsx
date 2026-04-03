"use client";
import { cn } from "@/lib/utils";
export function BackgroundBeams({ children, className }: { children?: React.ReactNode; className?: string }) {
  return <div className={cn("relative w-full", className)}>{children}</div>;
}
