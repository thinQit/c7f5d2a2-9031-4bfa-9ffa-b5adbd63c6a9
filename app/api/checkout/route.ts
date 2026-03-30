import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { createCheckoutSchema } from "@/lib/validators";

const FREE_SHIPPING_THRESHOLD_CENTS = 7500;
const STANDARD_SHIPPING_CENTS = 695;

function generateOrderNumber(): string {
  const stamp = Date.now().toString().slice(-8);
  const rand = Math.floor(Math.random() * 900 + 100);
  return `LC-${stamp}${rand}`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = createCheckoutSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { email, items, discountCode } = parsed.data;

    const ids = items.map((i) => i.productId);
    const products = await db.product.findMany({
      where: { id: { in: ids } },
      select: { id: true, priceCents: true, inStock: true, inventoryQty: true },
    });

    const productMap = new Map(products.map((p) => [p.id, p]));

    let subtotalCents = 0;
    for (const item of items) {
      const product = productMap.get(item.productId);
      if (!product) {
        return NextResponse.json(
          { error: `Product not found: ${item.productId}` },
          { status: 404 }
        );
      }
      if (!product.inStock || product.inventoryQty < item.quantity) {
        return NextResponse.json(
          { error: `Insufficient stock for product: ${item.productId}` },
          { status: 409 }
        );
      }
      subtotalCents += product.priceCents * item.quantity;
    }

    const discountCents =
      discountCode?.toUpperCase() === "SPRING10" && subtotalCents >= 12000
        ? Math.round(subtotalCents * 0.1)
        : 0;

    const shippingCents =
      subtotalCents - discountCents >= FREE_SHIPPING_THRESHOLD_CENTS ? 0 : STANDARD_SHIPPING_CENTS;

    const taxableBase = Math.max(subtotalCents - discountCents, 0) + shippingCents;
    const taxCents = Math.round(taxableBase * 0.0825);
    const totalCents = taxableBase + taxCents;

    const order = await db.$transaction(async (tx) => {
      const created = await tx.customerOrder.create({
        data: {
          orderNumber: generateOrderNumber(),
          email: email.toLowerCase(),
          subtotalCents,
          discountCents,
          shippingCents,
          taxCents,
          totalCents,
          status: "pending",
          items: {
            create: items.map((item) => {
              const product = productMap.get(item.productId)!;
              return {
                productId: item.productId,
                quantity: item.quantity,
                unitPriceCents: product.priceCents,
              };
            }),
          },
        },
        include: {
          items: true,
        },
      });

      for (const item of items) {
        await tx.product.update({
          where: { id: item.productId },
          data: {
            inventoryQty: { decrement: item.quantity },
          },
        });
      }

      return created;
    });

    return NextResponse.json(
      {
        success: true,
        orderNumber: order.orderNumber,
        amountCents: order.totalCents,
        currency: "usd",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/checkout error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
