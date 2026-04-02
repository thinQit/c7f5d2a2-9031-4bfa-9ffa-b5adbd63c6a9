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
        { error: "Invalid query params", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const { category, minPrice, maxPrice, rating, inStock, page, limit, sort } = parsed.data;

    const where: Prisma.ProductWhereInput = {
      ...(category ? { category } : {}),
      ...(typeof inStock === "boolean" ? { inStock } : {}),
      ...(typeof rating === "number" ? { rating: { gte: rating } } : {}),
      ...((typeof minPrice === "number" || typeof maxPrice === "number")
        ? {
            price: {
              ...(typeof minPrice === "number" ? { gte: minPrice } : {}),
              ...(typeof maxPrice === "number" ? { lte: maxPrice } : {}),
            },
          }
        : {}),
    };

    const orderBy =
      sort === "top-rated"
        ? [{ rating: "desc" as const }, { reviewCount: "desc" as const }]
        : sort === "price-asc"
          ? [{ price: "asc" as const }]
          : sort === "price-desc"
            ? [{ price: "desc" as const }]
            : sort === "newest"
              ? [{ createdAt: "desc" as const }]
              : [{ reviewCount: "desc" as const }, { createdAt: "desc" as const }];

    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      db.product.findMany({
        where,
        orderBy,
        skip,
        take: limit,
        include: {
          images: {
            orderBy: { position: "asc" as const },
            take: 1,
          },
        },
      }),
      db.product.count({ where }),
    ]);

    return NextResponse.json({
      items,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("GET /api/products error:", error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}
