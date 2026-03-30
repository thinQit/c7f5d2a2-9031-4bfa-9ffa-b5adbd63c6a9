import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

type Params = { params: { slug: string } };

export async function GET(_request: NextRequest, { params }: Params) {
  try {
    const product = await db.product.findUnique({
      where: { slug: params.slug },
      include: {
        category: { select: { slug: true, name: true } },
      },
    });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error(`GET /api/products/${params.slug} error:`, error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
