import { NextRequest, NextResponse } from "next/server";
import { EnquiryResponse } from "@/types";

export async function POST(request: NextRequest): Promise<NextResponse<EnquiryResponse>> {
  try {
    const data = await request.json();

    // Honeypot spam check
    if (data.honeypot) {
      // Silently succeed to discard spam bots
      return NextResponse.json(
        {
          success: true,
          message: "Your enquiry has reached us. We'll read it carefully and reply to the email address you gave.",
        },
        { status: 200 }
      );
    }

    const errors: Record<string, string> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Detect type of enquiry
    const isPartner = Boolean(data.organisation || data.contactName);

    if (isPartner) {
      if (!data.organisation || typeof data.organisation !== "string" || !data.organisation.trim()) {
        errors.organisation = "Please enter your organisation name.";
      }
      if (!data.contactName || typeof data.contactName !== "string" || !data.contactName.trim()) {
        errors.contactName = "Please enter your contact name.";
      }
      if (!data.email || typeof data.email !== "string" || !emailRegex.test(data.email.trim())) {
        errors.email = "Please enter a valid email address.";
      }
      if (!data.message || typeof data.message !== "string" || !data.message.trim()) {
        errors.message = "Please share what you have in mind.";
      }
      if (!data.consent) {
        errors.consent = "Please confirm that you agree to ABWA using these details to reply.";
      }
    } else {
      // Volunteer enquiry
      if (!data.fullName || typeof data.fullName !== "string" || !data.fullName.trim()) {
        errors.fullName = "Please enter your full name.";
      }
      if (!data.email || typeof data.email !== "string" || !emailRegex.test(data.email.trim())) {
        errors.email = "Please enter a valid email address.";
      }
      if (!data.message || typeof data.message !== "string" || !data.message.trim()) {
        errors.message = "Please tell us a little about yourself.";
      }
      if (!data.consent) {
        errors.consent = "Please confirm that you agree to ABWA using these details to reply.";
      }
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Please correct the errors in the form before submitting.",
          errors,
        },
        { status: 400 }
      );
    }

    // Factual server log for enquiry
    console.log(
      `[Enquiry Received - ${isPartner ? "Partner" : "Volunteer"}]`,
      JSON.stringify({
        sender: isPartner ? `${data.contactName} (${data.organisation})` : data.fullName,
        email: data.email,
        interest: data.interestArea || "General",
        timestamp: new Date().toISOString(),
      })
    );

    return NextResponse.json(
      {
        success: true,
        message: "Thank you. Your enquiry has reached us. We'll read it carefully and reply to the email address you gave.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Enquiry Handler Error]", error);
    return NextResponse.json(
      {
        success: false,
        message: "Sorry, that didn't go through. Please try again, or call us on +254 720 021 001.",
      },
      { status: 500 }
    );
  }
}
