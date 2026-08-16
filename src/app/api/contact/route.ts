import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, inquiryType, message } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required." },
        { status: 400 }
      );
    }

    // Conditionally send email via Resend if API key is configured
    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== "re_123456789_placeholder") {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "Gymrillaz Leads <noreply@gymrillaz.com>",
        to: [process.env.CONTACT_RECEIVER_EMAIL || "leads@gymrillaz.com"],
        subject: `[GYMRILLAZ] New ${inquiryType} Inquiry from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; background: #0b0c0e; color: #f8fafc; padding: 32px; border-radius: 12px; max-width: 560px;">
            <h2 style="color: #eab308; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 24px;">New Gym Inquiry — ${inquiryType}</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #a1a1aa; font-size: 12px;">Name:</td><td style="padding: 8px 0; font-weight: bold;">${name}</td></tr>
              <tr><td style="padding: 8px 0; color: #a1a1aa; font-size: 12px;">Email:</td><td style="padding: 8px 0;">${email}</td></tr>
              <tr><td style="padding: 8px 0; color: #a1a1aa; font-size: 12px;">Phone:</td><td style="padding: 8px 0;">${phone}</td></tr>
              <tr><td style="padding: 8px 0; color: #a1a1aa; font-size: 12px;">Inquiry Type:</td><td style="padding: 8px 0;">${inquiryType}</td></tr>
              <tr><td style="padding: 8px 0; color: #a1a1aa; font-size: 12px; vertical-align: top;">Notes:</td><td style="padding: 8px 0;">${message || "—"}</td></tr>
            </table>
          </div>
        `,
      });
    }

    // Log to console in development
    if (process.env.NODE_ENV === "development") {
      console.log("New Gymrillaz Inquiry:", { name, email, phone, inquiryType, message });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again or call us directly." },
      { status: 500 }
    );
  }
}
