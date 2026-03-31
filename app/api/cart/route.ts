import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { cartInputSchema } from "@/lib/validators";

const FREE_SHIPPING_THRESHOLD_CENTS = 5000;
const FLAT_SHIPPING_CENTS = 500;
const TAX_RATE = 0.085;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = cartInputSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid cart payload", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { sessionId, items } = parsed.data;

    const productIds = items.map((i) => i.productId);
    const products = await db.product.findMany({
      where: { id: { in: productIds } },
      select: { id: true, priceCents: true, inStock: true, stockQty: true, name: true },
    });

    if (products.length !== productIds.length) {
      return NextResponse.json({ error: "One or more products not found" }, { status: 404 });
    }

    const productMap = new Map(products.map((p) => [p.id, p]));
    for (const item of items) {
      const product = productMap.get(item.productId);
      if (!product) continue;
      if (!product.inStock || product.stockQty < item.quantity) {
        return NextResponse.json(
          { error: `Insufficient stock for ${product.name}` },
          { status: 400 }
        );
      }
    }

    const subtotalCents = items.reduce((sum, item) => {
      const product = productMap.get(item.productId);
      return sum + (product?.priceCents ?? 0) * item.quantity;
    }, 0);

    const shippingCents =
      subtotalCents >= FREE_SHIPPING_THRESHOLD_CENTS ? 0 : FLAT_SHIPPING_CENTS;
    const taxCents = Math.round(subtotalCents * TAX_RATE);
    const totalCents = subtotalCents + shippingCents + taxCents;

    const cart = await db.cart.upsert({
      where: { sessionId },
      update: {
        subtotalCents,
        shippingCents,
        taxCents,
        totalCents,
      },
      create: {
        sessionId,
        subtotalCents,
        shippingCents,
        taxCents,
        totalCents,
      },
    });

    await db.cartItem.deleteMany({ where: { cartId: cart.id } });

    await db.cartItem.createMany({
      data: items.map((item) => ({
        cartId: cart.id,
        productId: item.productId,
        quantity: item.quantity,
        unitPriceCents: productMap.get(item.productId)?.priceCents ?? 0,
      })),
    });

    const updatedCart = await db.cart.findUnique({
      where: { id: cart.id },
      include: { items: true },
    });

    return NextResponse.json(updatedCart);
  } catch (error) {
    console.error("POST /api/cart error:", error);
    return NextResponse.json({ error: "Failed to update cart" }, { status: 500 });
  }
}
