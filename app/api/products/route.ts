import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { db } from "@/lib/db";
import { productListQuerySchema } from "@/lib/validators";

export async function GET(req: NextRequest) {
  try {
    const params = Object.fromEntries(req.nextUrl.searchParams.entries());
    const parsed = productListQuerySchema.safeParse(params);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid query parameters", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { category, minPrice, maxPrice, rating, inStock, q, sort, tag, limit, cursor } =
      parsed.data;

    const where: Prisma.ProductWhereInput = {
      ...(category
        ? { category: { slug: category } }
        : {}),
      ...(typeof minPrice === "number" || typeof maxPrice === "number"
        ? {
            priceCents: {
              ...(typeof minPrice === "number" ? { gte: minPrice * 100 } : {}),
              ...(typeof maxPrice === "number" ? { lte: maxPrice * 100 } : {}),
            },
          }
        : {}),
      ...(typeof rating === "number" ? { ratingAverage: { gte: rating } } : {}),
      ...(typeof inStock === "boolean" ? { inStock } : {}),
      ...(q
        ? {
            OR: [
              { name: { contains: q, mode: "insensitive" } },
              { description: { contains: q, mode: "insensitive" } },
              { sku: { contains: q, mode: "insensitive" } },
            ],
          }
        : {}),
      ...(tag ? { tags: { some: { tag: { equals: tag, mode: "insensitive" } } } } : {}),
    };

    const orderBy: Prisma.ProductOrderByWithRelationInput[] =
      sort === "rating"
        ? [{ ratingAverage: "desc" as const }, { reviewCount: "desc" as const }]
        : sort === "price_asc"
        ? [{ priceCents: "asc" as const }]
        : sort === "price_desc"
        ? [{ priceCents: "desc" as const }]
        : sort === "new"
        ? [{ createdAt: "desc" as const }]
        : [{ reviewCount: "desc" as const }, { ratingAverage: "desc" as const }];

    const products = await db.product.findMany({
      where,
      orderBy,
      take: limit + 1,
      ...(cursor ? { skip: 1, cursor: { id: cursor } } : {}),
      include: {
        category: true,
        badges: true,
        tags: true,
      },
    });

    const hasMore = products.length > limit;
    const sliced = hasMore ? products.slice(0, limit) : products;
    const nextCursor = hasMore ? sliced[sliced.length - 1]?.id : null;

    return NextResponse.json({
      data: sliced,
      pagination: {
        hasMore,
        nextCursor,
        limit,
      },
    });
  } catch (error) {
    console.error("GET /api/products error:", error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}
