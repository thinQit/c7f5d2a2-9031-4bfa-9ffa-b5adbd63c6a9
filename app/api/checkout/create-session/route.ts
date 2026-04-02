import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { db } from "@/lib/db";
import { createCheckoutSchema } from "@/lib/validators";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  throw new Error("Missing STRIPE_SECRET_KEY environment variable");
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2024-06-20",
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = createCheckoutSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid checkout payload", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const { cartSessionId, email, successUrl, cancelUrl } = parsed.data;

    const cart = await db.cart.findUnique({
      where: { sessionId: cartSessionId },
      include: {
        items: {
          include: { product: true },
        },
      },
    });

    if (!cart || cart.items.length === 0) {
      return NextResponse.json({ error: "Cart is empty or missing" }, { status: 400 });
    }

    const subtotal = cart.items.reduce((sum, item) => {
      return sum + Number(item.product.price) * item.quantity;
    }, 0);

    const shipping = subtotal >= 60 ? 0 : 5.95;
    const tax = Number((subtotal * 0.0825).toFixed(2));
    const total = subtotal + shipping + tax;

    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = cart.items.map((item) => ({
      quantity: item.quantity,
      price_data: {
        currency: "usd",
        unit_amount: Math.round(Number(item.product.price) * 100),
        product_data: {
          name: item.product.name,
          description: item.product.description,
        },
      },
    }));

    if (shipping > 0) {
      line_items.push({
        quantity: 1,
        price_data: {
          currency: "usd",
          unit_amount: Math.round(shipping * 100),
          product_data: {
            name: "Standard Shipping",
          },
        },
      });
    }

    const order = await db.order.create({
      data: {
        email,
        status: "pending",
        subtotal,
        shipping,
        tax,
        total,
        items: {
          create: cart.items.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
            unitPrice: item.product.price,
            productName: item.product.name,
          })),
        },
      },
    });

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: email,
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        orderId: order.id,
        cartSessionId,
      },
      line_items,
    });

    await db.order.update({
      where: { id: order.id },
      data: { stripeSessionId: session.id },
    });

    return NextResponse.json({ checkoutUrl: session.url, sessionId: session.id, orderId: order.id });
  } catch (error) {
    console.error("POST /api/checkout/create-session error:", error);
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}
