import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { cartActionSchema } from "@/lib/validators";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = cartActionSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid cart payload", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const { sessionId, action, item } = parsed.data;

    const cart = await db.cart.upsert({
      where: { sessionId },
      create: { sessionId },
      update: {},
    });

    const existing = await db.cartItem.findFirst({
      where: {
        cartId: cart.id,
        productId: item.productId,
        variantId: item.variantId ?? null,
      },
    });

    if (action === "add") {
      if (existing) {
        await db.cartItem.update({
          where: { id: existing.id },
          data: { quantity: existing.quantity + (item.quantity ?? 1) },
        });
      } else {
        await db.cartItem.create({
          data: {
            cartId: cart.id,
            productId: item.productId,
            variantId: item.variantId,
            quantity: item.quantity ?? 1,
          },
        });
      }
    }

    if (action === "update") {
      if (!existing) {
        return NextResponse.json({ error: "Cart item not found for update" }, { status: 404 });
      }

      await db.cartItem.update({
        where: { id: existing.id },
        data: { quantity: item.quantity ?? 1 },
      });
    }

    if (action === "remove") {
      if (!existing) {
        return NextResponse.json({ error: "Cart item not found for removal" }, { status: 404 });
      }

      await db.cartItem.delete({ where: { id: existing.id } });
    }

    const updatedCart = await db.cart.findUnique({
      where: { id: cart.id },
      include: {
        items: {
          include: { product: true },
          orderBy: { createdAt: "asc" as const },
        },
      },
    });

    return NextResponse.json({ cart: updatedCart });
  } catch (error) {
    console.error("POST /api/cart error:", error);
    return NextResponse.json({ error: "Failed to update cart" }, { status: 500 });
  }
}
