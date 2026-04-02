import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { db } from "@/lib/db";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

if (!stripeSecretKey || !webhookSecret) {
  throw new Error("Missing Stripe webhook environment variables");
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2024-06-20",
});

export async function POST(req: Request) {
  try {
    const body = await req.text();
    const signature = headers().get("stripe-signature");

    if (!signature) {
      return NextResponse.json({ error: "Missing stripe signature" }, { status: 400 });
    }

    const event = stripe.webhooks.constructEvent(body, signature, webhookSecret);

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      const orderId = session.metadata?.orderId;

      if (orderId) {
        await db.order.update({
          where: { id: orderId },
          data: {
            status: "paid",
            stripePaymentIntentId:
              typeof session.payment_intent === "string" ? session.payment_intent : null,
          },
        });
      }
    }

    if (event.type === "checkout.session.expired") {
      const session = event.data.object as Stripe.Checkout.Session;
      const orderId = session.metadata?.orderId;

      if (orderId) {
        await db.order.update({
          where: { id: orderId },
          data: { status: "canceled" },
        });
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("POST /api/webhooks/stripe error:", error);
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 400 });
  }
}
