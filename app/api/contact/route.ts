import { NextResponse } from "next/server";
import { Resend } from "resend";

import { contactSchema } from "@/lib/schemas/contact";
import { practiceAreas } from "@/data/practice-areas";
import { siteConfig } from "@/data/site";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.CONTACT_TO_EMAIL;
    const sender = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !recipient || !sender) {
      console.error("Contact email environment variables are missing.");

      return NextResponse.json(
        { message: "The enquiry service is temporarily unavailable." },
        { status: 503 },
      );
    }

    const body: unknown = await request.json();

    const validation = contactSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          message: "Please check the information you submitted.",
          errors: validation.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const values = validation.data;

    const selectedArea = practiceAreas.find(
      (area) => area.slug === values.service,
    );

    const serviceName =
      selectedArea?.title ??
      (values.service === "other" ? "Other / Not Sure" : values.service);

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: sender,
      to: recipient,
      replyTo: values.email,
      subject: `New Legal Enquiry — ${serviceName}`,
      text: [
        "A new enquiry has been submitted through the website.",
        "",
        `Name: ${values.name}`,
        `Email: ${values.email}`,
        `Phone: ${values.phone}`,
        `Practice Area: ${serviceName}`,
        "",
        "Message:",
        values.message,
        "",
        "This enquiry was submitted through the website contact form.",
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { message: "We could not send your enquiry. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your enquiry has been submitted successfully.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { message: "An unexpected error occurred. Please try again." },
      { status: 500 },
    );
  }
}
