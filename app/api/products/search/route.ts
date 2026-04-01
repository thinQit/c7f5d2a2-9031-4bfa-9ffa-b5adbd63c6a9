import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { ProductCategory } from "@prisma/client";
import { productSearchQuerySchema } from "@/lib/validators";

const categoryMap: Record<string, ProductCategory> = {
  "signature-pizza": "SIGNATURE_PIZZA",
  "build-your-own": "BUILD_YOUR_OWN",
  pasta: "PASTA",
  starters: "STARTERS",
  desserts: "DESSERTS",
  drinks: "DRINKS",
  bundles: "BUNDLES",
};

export async function GET(req: NextRequest) {
  try {
    const parsed = productSearchQuerySchema.safeParse(
      Object.fromEntries(req.nextUrl.searchParams.entries())
    );

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid query params", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { q, category, limit } = parsed.data;
    const normalizedCategory = category ? categoryMap[category] : undefined;

    const items = await db.product.findMany({
      where: {
        isActive: true,
        ...(normalizedCategory ? { category: normalizedCategory } : {}),
        OR: [
          { name: { contains: q, mode: "insensitive" } },
          { description: { contains: q, mode: "insensitive" } },
          { tags: { has: q.toLowerCase() } },
        ],
      },
      orderBy: { name: "asc" as const },
      take: limit,
    });

    return NextResponse.json({ items });
  } catch (error) {
    console.error("GET /api/products/search error:", error);
    return NextResponse.json({ error: "Failed to search products" }, { status: 500 });
  }
}
