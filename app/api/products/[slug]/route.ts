import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

type Params = {
  params: {
    slug: string;
  };
};

export async function GET(_req: NextRequest, { params }: Params) {
  try {
    const slug = params.slug;

    const product = await db.product.findUnique({
      where: { slug },
      include: {
        category: true,
        images: { orderBy: { position: "asc" as const } },
        variants: true,
        specs: true,
        badges: true,
        tags: true,
        reviews: {
          orderBy: { createdAt: "desc" as const },
          take: 10,
        },
      },
    });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    const reviewsSummary = {
      average: product.ratingAverage,
      count: product.reviewCount,
    };

    return NextResponse.json({ data: { ...product, reviewsSummary } });
  } catch (error) {
    console.error("GET /api/products/[slug] error:", error);
    return NextResponse.json({ error: "Failed to fetch product" }, { status: 500 });
  }
}
