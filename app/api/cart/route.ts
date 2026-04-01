export const dynamic = 'force-dynamic';
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { cartBodySchema } from "@/lib/validators";

const CART_COOKIE_NAME = "lumencart_session_id";

function getSessionId() {
  return crypto.randomUUID();
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = cartBodySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid cart payload", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const cookieStore = await cookies();
    let sessionId = cookieStore.get(CART_COOKIE_NAME)?.value;

    if (!sessionId) {
      sessionId = getSessionId();
      cookieStore.set(CART_COOKIE_NAME, sessionId, {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 60 * 24 * 30,
      });
    }

    const cart = await db.cart.upsert({
      where: { sessionId },
      update: {},
      create: { sessionId },
    });

    const { action, productId, quantity } = parsed.data;

    if (action === "clear") {
      await db.cartItem.deleteMany({ where: { cartId: cart.id } });
    } else {
      if (!productId) {
        return NextResponse.json({ error: "productId is required" }, { status: 400 });
      }

      if (action === "add") {
        const qtyToAdd = quantity ?? 1;
        await db.cartItem.upsert({
          where: { cartId_productId: { cartId: cart.id, productId } },
          update: { quantity: { increment: qtyToAdd } },
          create: { cartId: cart.id, productId, quantity: qtyToAdd },
        });
      }

      if (action === "update") {
        if (!quantity) {
          return NextResponse.json({ error: "quantity is required for update" }, { status: 400 });
        }
        await db.cartItem.updateMany({
          where: { cartId: cart.id, productId },
          data: { quantity },
        });
      }

      if (action === "remove") {
        await db.cartItem.deleteMany({ where: { cartId: cart.id, productId } });
      }
    }

    const updatedCart = await db.cart.findUnique({
      where: { id: cart.id },
      include: {
        items: {
          orderBy: { createdAt: "asc" as const },
          include: { product: { include: { images: { take: 1, orderBy: { position: "asc" as const } } } },
          },
        },
      },
    });

    return NextResponse.json(updatedCart);
  } catch (error) {
    console.error("POST /api/cart error:", error);
    return NextResponse.json({ error: "Failed to update cart" }, { status: 500 });
  }
}
