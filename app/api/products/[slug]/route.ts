import { NextRequest, NextResponse } from "next/server";

const PRODUCT_DETAILS = {
  "everyday-tote": {
    slug: "everyday-tote",
    name: "Everyday Tote (18L)",
    price: 48,
    compareAtPrice: 60,
    rating: 4.8,
    reviewCount: 1264,
    images: ["/images/products/everyday-tote-1.jpg", "/images/products/everyday-tote-2.jpg"],
    variants: [{ id: "black", name: "Black", inStock: true }],
    specs: { material: "Water-resistant canvas", volume: "18L", laptop: "Up to 14-inch" },
    reviewSummary: { average: 4.8, total: 1264 },
  },
} as const;

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params;
    const product = PRODUCT_DETAILS[slug as keyof typeof PRODUCT_DETAILS];

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ data: product });
  } catch (error) {
    console.error("GET /api/products/[slug] error:", error);
    return NextResponse.json({ error: "Failed to fetch product" }, { status: 500 });
  }
}
