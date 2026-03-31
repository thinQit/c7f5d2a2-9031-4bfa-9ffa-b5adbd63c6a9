import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const testimonials = await db.testimonial.findMany({
      where: { isPublished: true },
      orderBy: [{ sortOrder: "asc" as const }, { createdAt: "desc" as const }],
    });

    const aggregate = testimonials.length
      ? {
          value:
            testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length,
          count: testimonials.length,
          source: "Verified purchases",
        }
      : {
          value: 0,
          count: 0,
          source: "Verified purchases",
        };

    return NextResponse.json({
      items: testimonials,
      aggregateRating: {
        ...aggregate,
        value: Number(aggregate.value.toFixed(1)),
      },
    });
  } catch (error) {
    console.error("GET /api/testimonials error:", error);
    return NextResponse.json({ error: "Failed to fetch testimonials" }, { status: 500 });
  }
}
