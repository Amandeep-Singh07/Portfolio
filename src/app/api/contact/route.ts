import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Email validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validation
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    if (!isValidEmail(data.email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 },
      );
    }

    if (data.message.length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters" },
        { status: 400 },
      );
    }

    // TODO: Implement email sending service
    // For now, just log the data (in a real app, you'd use Nodemailer, SendGrid, etc.)
    console.log("Contact form submission:", {
      timestamp: new Date().toISOString(),
      ...data,
    });

    // In a production environment, you would:
    // 1. Send an email to your email address using a service like SendGrid or Nodemailer
    // 2. Save the message to a database
    // 3. Send a confirmation email to the user

    return NextResponse.json(
      {
        success: true,
        message: "Message received! We will get back to you soon.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process your request" },
      { status: 500 },
    );
  }
}

// Handle other methods
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
