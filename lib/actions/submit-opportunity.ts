// lib/actions/submit-opportunity.ts
"use server";

import { saveContact } from "@/lib/actions/save-contact";
import { sendEmail } from "@/lib/email/send";
import OpportunityInquiryEmail from "../email/templates/opportunity-email";
import type { ContactType } from "@/lib/generated/prisma/client";

const TYPE_MAP: Record<string, ContactType> = {
  sponsor: "SPONSOR_INQUIRY",
  media: "MEDIA_INQUIRY",
  general_conversation: "GENERAL",
};

export async function submitOpportunity(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const entity = formData.get("entity");
  const message = formData.get("message");
  const rawType = formData.get("type");

  if (
    !name ||
    !email ||
    !entity ||
    !rawType ||
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof entity !== "string" ||
    typeof rawType !== "string"
  ) {
    return { success: false, error: "Please fill in all required fields." };
  }

  const contactType = TYPE_MAP[rawType];

  if (!contactType) {
    return { success: false, error: "Invalid inquiry type." };
  }

  const result = await saveContact({
    name,
    email,
    type: contactType,
    metadata: {
      entity,
      message: typeof message === "string" ? message : undefined,
    },
  });

  if (!result.success) {
    return { success: false, error: result.error };
  }

  try {
    await sendEmail({
      to: email,
      subject:
        contactType === "SPONSOR_INQUIRY"
          ? "Sponsorship request received — Sky Fight League"
          : contactType === "MEDIA_INQUIRY"
            ? "Media inquiry received — Sky Fight League"
            : "Message received — Sky Fight League",
      react: OpportunityInquiryEmail({ name, contactType }),
    });
  } catch (err) {
    console.error("[submitOpportunity] Failed to send confirmation email:", err);
  }

  return {
    success: true,
    message: "Our team will review your inquiry and be in touch shortly.",
  };
}