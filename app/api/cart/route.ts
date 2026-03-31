import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { cartUpsertSchema } from "@/lib/validators";

function calcShipping(subtotalCents: number) {
  return subtotalCents >= 5000 ? 0 : 600;
}

function calcTax(subtotalCents: number) {
  return Math.round(subtotalCents * 0.0825);
}

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = cartUpsertSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid cart payload", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { cartId, email, items } = parsed.data;
    const productIds = items.map((i) => i.productId);

    const products = await db.product.findMany({
      where: { id: { in: productIds } },
      select: { id: true, priceCents: true, inStock: true },
    });

    if (products.length !== productIds.length) {
      return NextResponse.json({ error: "One or more products not found" }, { status: 404 });
    }

    const productMap = new Map(products.map((p) => [p.id, p]));
    const lineItems = items.map((item) => {
      const p = productMap.get(item.productId)!;
      if (!p.inStock) {
        throw new Error(`Product out of stock: ${item.productId}`);
      }
      const unitCents = p.priceCents;
      const lineCents = unitCents * item.quantity;
      return {
        productId: item.productId,
        quantity: item.quantity,
        unitCents,
        lineCents,
      };
    });

    const subtotalCents = lineItems.reduce((sum, li) => sum + li.lineCents, 0);
    const shippingCents = calcShipping(subtotalCents);
    const taxCents = calcTax(subtotalCents);
    const totalCents = subtotalCents + shippingCents + taxCents;

    const cart = await db.$transaction(async (tx) => {
      const upsertedCart = cartId
        ? await tx.cart.update({
            where: { id: cartId },
            data: { email, subtotalCents, shippingCents, taxCents, totalCents },
          })
        : await tx.cart.create({
            data: { email, subtotalCents, shippingCents, taxCents, totalCents },
          });

      await tx.cartItem.deleteMany({ where: { cartId: upsertedCart.id } });

      if (lineItems.length > 0) {
        await tx.cartItem.createMany({
          data: lineItems.map((li) => ({
            cartId: upsertedCart.id,
            productId: li.productId,
            quantity: li.quantity,
            unitCents: li.unitCents,
            lineCents: li.lineCents,
          })),
        });
      }

      return tx.cart.findUnique({
        where: { id: upsertedCart.id },
        include: {
          items: {
            include: {
              product: {
                select: { id: true, name: true, slug: true, imageUrl: true },
              },
            },
          },
        },
      });
    });

    return NextResponse.json({ data: cart });
  } catch (error) {
    console.error("POST /api/cart error:", error);
    if (error instanceof Error && error.message.includes("out of stock")) {
      return NextResponse.json({ error: error.message }, { status: 409 });
    }
    return NextResponse.json({ error: "Failed to update cart" }, { status: 500 });
  }
}
