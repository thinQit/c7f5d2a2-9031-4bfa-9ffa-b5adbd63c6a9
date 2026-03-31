import { NextResponse } from "next/server";
import { ContactTopic } from "@prisma/client";
import { db } from "@/lib/db";
import { contactSubmissionSchema } from "@/lib/validators";

const topicMap: Record<string, ContactTopic> = {
  "Order status": "ORDER_STATUS",
  Returns: "RETURNS",
  "Product question": "PRODUCT_QUESTION",
  "Bulk order": "BULK_ORDER",
  Other: "OTHER",
};

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = contactSubmissionSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid contact payload", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, orderNumber, topic, message } = parsed.data;

    const submission = await db.contactSubmission.create({
      data: {
        name,
        email,
        orderNumber: orderNumber || null,
        topic: topicMap[topic],
        message,
      },
    });

    return NextResponse.json({ data: submission }, { status: 201 });
  } catch (error) {
    console.error("POST /api/contact error:", error);
    return NextResponse.json({ error: "Failed to submit contact form" }, { status: 500 });
  }
}
