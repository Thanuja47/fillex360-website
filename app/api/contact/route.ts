import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || "fillex360solutions@gmail.com";

    // If API key is present, send email via Resend
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: "Fillex360 Contact <onboarding@resend.dev>",
        to: [toEmail],
        subject: `New Project Inquiry from ${name}`,
        replyTo: email,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      });
    } else {
      // Graceful fallback for local dev or missing key
      console.log("[DEV MODE] Contact form submission received:", { name, email, message });
    }

    return NextResponse.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
