import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { trackOrderSchema } from "@/lib/validators";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = trackOrderSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { orderNumber, email } = parsed.data;

    const order = await db.customerOrder.findFirst({
      where: {
        orderNumber,
        email: email.toLowerCase(),
      },
      include: {
        items: {
          include: {
            product: {
              select: { name: true, slug: true },
            },
          },
        },
      },
    });

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    return NextResponse.json({
      orderNumber: order.orderNumber,
      status: order.status,
      totals: {
        subtotalCents: order.subtotalCents,
        discountCents: order.discountCents,
        shippingCents: order.shippingCents,
        taxCents: order.taxCents,
        totalCents: order.totalCents,
      },
      createdAt: order.createdAt,
      items: order.items.map((item) => ({
        productName: item.product.name,
        productSlug: item.product.slug,
        quantity: item.quantity,
        unitPriceCents: item.unitPriceCents,
      })),
    });
  } catch (error) {
    console.error("POST /api/orders/track error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
