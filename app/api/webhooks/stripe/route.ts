export const dynamic = 'force-dynamic';
import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { stripeWebhookOrderMetadataSchema } from "@/lib/validators";



export async function POST(req: Request) {
  try {
    const signature = req.headers.get("stripe-signature");
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    if (!signature || !webhookSecret) {
      return NextResponse.json({ error: "Invalid webhook setup" }, { status: 400 });
    }

    const payload = await req.text();
    const event = getStripe().webhooks.constructEvent(payload, signature, webhookSecret);

    if (event.type === "checkout.session.completed") {
      const checkoutSession = event.data.object as Stripe.Checkout.Session;
      const metadataParsed = stripeWebhookOrderMetadataSchema.safeParse(checkoutSession.metadata);

      if (!metadataParsed.success) {
        return NextResponse.json({ error: "Invalid checkout metadata" }, { status: 400 });
      }

      const existing = await db.order.findUnique({
        where: { stripeCheckoutSessionId: checkoutSession.id },
      });

      if (existing) {
        return NextResponse.json({ received: true });
      }

      const lineItems = await getStripe().checkout.sessions.listLineItems(checkoutSession.id, {
        expand: ["data.price.product"],
      });

      const productNames = lineItems.data.map((li) => li.description).filter(Boolean) as string[];
      const products = await db.product.findMany({
        where: { name: { in: productNames } },
      });

      const productsByName = new Map(products.map((p) => [p.name, p]));
      const subtotalCents = checkoutSession.amount_subtotal ?? 0;
      const totalCents = checkoutSession.amount_total ?? 0;
      const deliveryFeeCents = Math.max(totalCents - subtotalCents, 0);

      await db.order.create({
        data: {
          userId: metadataParsed.data.userId,
          status: "PAID",
          fulfillmentType: metadataParsed.data.fulfillmentType,
          subtotalCents,
          deliveryFeeCents,
          totalCents,
          currency: (checkoutSession.currency ?? "usd").toUpperCase(),
          stripeCheckoutSessionId: checkoutSession.id,
          stripePaymentIntentId:
            typeof checkoutSession.payment_intent === "string"
              ? checkoutSession.payment_intent
              : null,
          customerNote: metadataParsed.data.customerNote ?? null,
          metadata: checkoutSession.metadata ?? {},
          orderItems: {
            create: lineItems.data
              .map((li) => {
                const product = productsByName.get(li.description ?? "");
                if (!product || !li.quantity || !li.amount_subtotal) return null;
                const unitPriceCents = Math.round(li.amount_subtotal / li.quantity);
                return {
                  productId: product.id,
                  quantity: li.quantity,
                  unitPriceCents,
                  totalPriceCents: li.amount_subtotal,
                };
              })
              .filter((item): item is NonNullable<typeof item> => Boolean(item)),
          },
        },
      });
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("POST /api/webhooks/stripe error:", error);
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 400 });
  }
}
