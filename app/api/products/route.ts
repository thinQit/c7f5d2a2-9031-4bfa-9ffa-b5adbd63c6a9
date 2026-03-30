import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { db } from "@/lib/db";
import { productQuerySchema } from "@/lib/validators";

export async function GET(request: NextRequest) {
  try {
    const raw = Object.fromEntries(request.nextUrl.searchParams.entries());
    const parsed = productQuerySchema.safeParse(raw);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid query params", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { q, category, minPrice, maxPrice, minRating, inStock, sort, take, skip } = parsed.data;

    const where: Prisma.ProductWhereInput = {
      ...(q
        ? {
            OR: [
              { name: { contains: q, mode: "insensitive" } },
              { description: { contains: q, mode: "insensitive" } },
              { slug: { contains: q, mode: "insensitive" } },
            ],
          }
        : {}),
      ...(category ? { category: { slug: category } } : {}),
      ...(typeof inStock === "boolean" ? { inStock } : {}),
      ...(typeof minRating === "number" ? { ratingAvg: { gte: minRating } } : {}),
      ...(typeof minPrice === "number" || typeof maxPrice === "number"
        ? {
            priceCents: {
              ...(typeof minPrice === "number" ? { gte: minPrice * 100 } : {}),
              ...(typeof maxPrice === "number" ? { lte: maxPrice * 100 } : {}),
            },
          }
        : {}),
    };

    const orderByMap: Record<
      "featured" | "price-asc" | "price-desc" | "rating-desc" | "newest",
      Prisma.ProductOrderByWithRelationInput[]
    > = {
      featured: [{ featured: "desc" as const }, { createdAt: "desc" as const }],
      "price-asc": [{ priceCents: "asc" as const }],
      "price-desc": [{ priceCents: "desc" as const }],
      "rating-desc": [{ ratingAvg: "desc" as const }, { reviewCount: "desc" as const }],
      newest: [{ createdAt: "desc" as const }],
    };

    const [items, total] = await Promise.all([
      db.product.findMany({
        where,
        orderBy: orderByMap[sort],
        take,
        skip,
        include: {
          category: {
            select: { slug: true, name: true },
          },
        },
      }),
      db.product.count({ where }),
    ]);

    return NextResponse.json({ items, total, take, skip });
  } catch (error) {
    console.error("GET /api/products error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
