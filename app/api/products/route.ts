export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { productQuerySchema } from "@/lib/validators";
import { ProductCategory } from "@prisma/client";

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
    const parsed = productQuerySchema.safeParse(
      Object.fromEntries(req.nextUrl.searchParams.entries())
    );

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid query params", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { category, tag, limit, page } = parsed.data;
    const skip = (page - 1) * limit;

    const where = {
      isActive: true,
      ...(category && categoryMap[category] ? { category: categoryMap[category] } : {}),
      ...(tag ? { tags: { has: tag } } : {}),
    };

    const [items, total] = await Promise.all([
      db.product.findMany({
        where,
        orderBy: { createdAt: "desc" as const },
        skip,
        take: limit,
      }),
      db.product.count({ where }),
    ]);

    return NextResponse.json({
      items,
      pagination: {
        total,
        page,
        limit,
        pageCount: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("GET /api/products error:", error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}
