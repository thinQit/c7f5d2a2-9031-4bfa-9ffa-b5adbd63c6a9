import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const testimonials = await db.testimonial.findMany({
      where: { verified: true },
      orderBy: { date: "desc" as const },
      take: 24,
    });

    return NextResponse.json({ items: testimonials });
  } catch (error) {
    console.error("GET /api/testimonials error:", error);
    return NextResponse.json({ error: "Failed to fetch testimonials" }, { status: 500 });
  }
}
