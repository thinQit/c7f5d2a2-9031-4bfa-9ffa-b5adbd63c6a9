export const dynamic = 'force-dynamic';
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { newsletterSubscribeSchema } from "@/lib/validators";

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = newsletterSubscribeSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid subscription payload", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { email, sourcePage } = parsed.data;

    const subscriber = await db.newsletterSubscriber.upsert({
      where: { email },
      update: { sourcePage },
      create: { email, sourcePage },
    });

    return NextResponse.json({ data: subscriber }, { status: 201 });
  } catch (error) {
    console.error("POST /api/newsletter/subscribe error:", error);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
