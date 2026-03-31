import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { db } from "@/lib/db";
import { productsQuerySchema } from "@/lib/validators";

export async function GET(req: NextRequest) {
  try {
    const params = Object.fromEntries(req.nextUrl.searchParams.entries());
    const parsed = productsQuerySchema.safeParse(params);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid query parameters", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { category, collection, minPrice, maxPrice, rating, q, inStock, sort, page, pageSize } =
      parsed.data;

    const where: Prisma.ProductWhereInput = {
      ...(category ? { category } : {}),
      ...(collection ? { collection } : {}),
      ...(typeof inStock === "boolean" ? { inStock } : {}),
      ...(rating ? { rating: { gte: rating } } : {}),
      ...(q
        ? {
            OR: [
              { name: { contains: q, mode: "insensitive" } },
              { description: { contains: q, mode: "insensitive" } },
              { sku: { contains: q, mode: "insensitive" } },
            ],
          }
        : {}),
      ...(minPrice !== undefined || maxPrice !== undefined
        ? {
            priceCents: {
              ...(minPrice !== undefined ? { gte: minPrice * 100 } : {}),
              ...(maxPrice !== undefined ? { lte: maxPrice * 100 } : {}),
            },
          }
        : {}),
    };

    const orderByMap = {
      best: [{ reviewCount: "desc" as const }, { rating: "desc" as const }],
      newest: [{ createdAt: "desc" as const }],
      price_asc: [{ priceCents: "asc" as const }],
      price_desc: [{ priceCents: "desc" as const }],
      rating: [{ rating: "desc" as const }, { reviewCount: "desc" as const }],
    };

    const [items, total] = await Promise.all([
      db.product.findMany({
        where,
        orderBy: orderByMap[sort],
        skip: (page - 1) * pageSize,
        take: pageSize,
      }),
      db.product.count({ where }),
    ]);

    return NextResponse.json({
      items,
      pagination: {
        page,
        pageSize,
        total,
        totalPages: Math.ceil(total / pageSize),
      },
    });
  } catch (error) {
    console.error("GET /api/products error:", error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}
