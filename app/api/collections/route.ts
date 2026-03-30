import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const collections = await db.category.findMany({
      orderBy: [{ name: "asc" as const }],
      include: {
        _count: {
          select: { products: true },
        },
      },
    });

    return NextResponse.json(
      collections.map((c) => ({
        id: c.id,
        name: c.name,
        slug: c.slug,
        description: c.description,
        itemCount: c._count.products,
      }))
    );
  } catch (error) {
    console.error("GET /api/collections error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
