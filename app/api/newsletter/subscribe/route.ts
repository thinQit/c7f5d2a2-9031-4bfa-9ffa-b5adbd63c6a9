import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { newsletterSubscribeSchema } from "@/lib/validators";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = newsletterSubscribeSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid subscription payload", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const { email } = parsed.data;

    const subscriber = await db.newsletterSubscriber.upsert({
      where: { email },
      update: { unsubscribedAt: null },
      create: { email },
    });

    return NextResponse.json({ success: true, subscriberId: subscriber.id });
  } catch (error) {
    console.error("POST /api/newsletter/subscribe error:", error);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
