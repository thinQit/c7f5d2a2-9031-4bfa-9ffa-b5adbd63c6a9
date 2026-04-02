import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { contactSchema } from "@/lib/validators";

const topicMap: Record<string, "Shipping" | "Returns" | "ProductQuestion" | "OrderChange" | "Wholesale" | "Other"> = {
  Shipping: "Shipping",
  Returns: "Returns",
  "Product question": "ProductQuestion",
  "Order change": "OrderChange",
  Wholesale: "Wholesale",
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid contact payload", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const { name, email, orderNumber, topic, message } = parsed.data;

    const contact = await db.contactMessage.create({
      data: {
        name,
        email,
        orderNumber,
        topic: topic ? topicMap[topic] : "Other",
        message,
      },
    });

    return NextResponse.json({ success: true, id: contact.id });
  } catch (error) {
    console.error("POST /api/contact error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
