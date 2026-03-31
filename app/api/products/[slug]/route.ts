import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { slugParamsSchema } from "@/lib/validators";

type RouteContext = {
  params: {
    slug: string;
  };
};

export async function GET(_req: NextRequest, context: RouteContext) {
  try {
    const parsed = slugParamsSchema.safeParse(context.params);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid product slug", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { slug } = parsed.data;

    const product = await db.product.findUnique({
      where: { slug },
      include: {
        reviews: {
          orderBy: { createdAt: "desc" as const },
          take: 20,
        },
      },
    });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({
      ...product,
      reviewsSummary: {
        averageRating: product.rating,
        totalReviews: product.reviewCount,
      },
    });
  } catch (error) {
    console.error("GET /api/products/[slug] error:", error);
    return NextResponse.json({ error: "Failed to fetch product details" }, { status: 500 });
  }
}
