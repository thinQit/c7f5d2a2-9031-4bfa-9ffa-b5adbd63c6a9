import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { searchQuerySchema } from "@/lib/validators";

export async function GET(req: NextRequest) {
  try {
    const parsed = searchQuerySchema.safeParse(
      Object.fromEntries(req.nextUrl.searchParams.entries()),
    );

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid search query", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const { q, limit } = parsed.data;

    const products = await db.product.findMany({
      where: {
        OR: [
          { name: { contains: q, mode: "insensitive" } },
          { description: { contains: q, mode: "insensitive" } },
          { category: { contains: q, mode: "insensitive" } },
          { sku: { contains: q, mode: "insensitive" } },
        ],
      },
      take: limit,
      orderBy: [{ reviewCount: "desc" as const }, { rating: "desc" as const }],
      include: {
        images: { orderBy: { position: "asc" as const }, take: 1 },
      },
    });

    const suggestions = products.slice(0, 5).map((p) => p.name);

    return NextResponse.json({ query: q, products, suggestions });
  } catch (error) {
    console.error("GET /api/search error:", error);
    return NextResponse.json({ error: "Search failed" }, { status: 500 });
  }
}
