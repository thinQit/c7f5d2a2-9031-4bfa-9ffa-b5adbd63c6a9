"use client";
import { cn } from "@/lib/utils";
export function Spotlight({ children, className }: { children?: React.ReactNode; className?: string }) {
  return <div className={cn("relative w-full", className)}>{children}</div>;
}
