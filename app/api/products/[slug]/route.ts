export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { productSlugParamsSchema } from "@/lib/validators";

type RouteContext = {
  params: Promise<{ slug: string }>;
};

export async function GET(_req: NextRequest, context: RouteContext) {
  try {
    const params = await context.params;
    const parsed = productSlugParamsSchema.safeParse(params);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid product slug" }, { status: 400 });
    }

    const product = await db.product.findUnique({
      where: { slug: parsed.data.slug },
      include: {
        images: { orderBy: { position: "asc" as const } },
        variants: true,
        specs: { orderBy: { position: "asc" as const } },
        highlights: { orderBy: { position: "asc" as const } },
        reviewSummary: true,
      },
    });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error("GET /api/products/[slug] error:", error);
    return NextResponse.json({ error: "Failed to fetch product details" }, { status: 500 });
  }
}
