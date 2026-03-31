import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { db } from "@/lib/db";
import { productsQuerySchema } from "@/lib/validators";

export async function GET(req: NextRequest) {
  try {
    const parsed = productsQuerySchema.safeParse(
      Object.fromEntries(req.nextUrl.searchParams.entries()),
    );

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid query parameters", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const { search, category, minPrice, maxPrice, minRating, inStock, sort, page, limit } = parsed.data;
    const skip = (page - 1) * limit;

    const where: Prisma.ProductWhereInput = {
      AND: [
        search
          ? {
              OR: [
                { name: { contains: search, mode: "insensitive" } },
                { sku: { contains: search, mode: "insensitive" } },
                { category: { contains: search, mode: "insensitive" } },
              ],
            }
          : {},
        category ? { category: { equals: category, mode: "insensitive" } } : {},
        minPrice !== undefined || maxPrice !== undefined
          ? {
              priceCents: {
                gte: minPrice !== undefined ? minPrice * 100 : undefined,
                lte: maxPrice !== undefined ? maxPrice * 100 : undefined,
              },
            }
          : {},
        minRating !== undefined ? { ratingAvg: { gte: minRating } } : {},
        inStock !== undefined ? { inStock } : {},
      ],
    };

    const orderBy: Prisma.ProductOrderByWithRelationInput[] =
      sort === "best"
        ? [{ isBestSeller: "desc" as const }, { reviewCount: "desc" as const }]
        : sort === "new"
        ? [{ createdAt: "desc" as const }]
        : sort === "price_asc"
        ? [{ priceCents: "asc" as const }]
        : sort === "price_desc"
        ? [{ priceCents: "desc" as const }]
        : sort === "top_rated"
        ? [{ ratingAvg: "desc" as const }, { reviewCount: "desc" as const }]
        : [{ isBestSeller: "desc" as const }, { createdAt: "desc" as const }];

    const [items, total] = await Promise.all([
      db.product.findMany({
        where,
        orderBy,
        skip,
        take: limit,
        include: {
          images: { orderBy: { position: "asc" as const }, take: 1 },
          highlights: { orderBy: { position: "asc" as const }, take: 3 },
        },
      }),
      db.product.count({ where }),
    ]);

    return NextResponse.json({
      items,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("GET /api/products error:", error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}
