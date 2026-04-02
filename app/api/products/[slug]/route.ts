import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

type Params = { params: { slug: string } };

export async function GET(_req: NextRequest, { params }: Params) {
  try {
    const product = await db.product.findUnique({
      where: { slug: params.slug },
      include: {
        images: { orderBy: { position: "asc" as const } },
        variants: { orderBy: { name: "asc" as const } },
        reviews: { orderBy: { createdAt: "desc" as const }, take: 20 },
      },
    });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    const reviewSummary = {
      averageRating: product.rating,
      reviewCount: product.reviewCount,
      breakdown: [5, 4, 3, 2, 1].map((stars) => ({
        stars,
        count: product.reviews.filter((r) => r.rating === stars).length,
      })),
    };

    return NextResponse.json({ ...product, reviewSummary });
  } catch (error) {
    console.error("GET /api/products/[slug] error:", error);
    return NextResponse.json({ error: "Failed to fetch product details" }, { status: 500 });
  }
}
