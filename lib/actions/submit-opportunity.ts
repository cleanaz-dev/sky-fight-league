// lib/actions/submit-opportunity.ts
"use server";

import { saveContact } from "@/lib/actions/save-contact";
import { sendEmail } from "@/lib/email/send";
import OpportunityInquiryEmail from "../email/templates/opportunity-email";
import type { ContactType } from "@/lib/generated/prisma/client";

export async function submitOpportunity(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const entity = formData.get("entity");
  const message = formData.get("message");
  const type = formData.get("type");

  if (
    !name ||
    !email ||
    !entity ||
    !type ||
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof entity !== "string" ||
    typeof type !== "string"
  ) {
    return { success: false, error: "Please fill in all required fields." };
  }

  const contactType: ContactType =
    type === "sponsor" ? "SPONSOR_INQUIRY" : "MEDIA_INQUIRY";

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
        type === "sponsor"
          ? "Sponsorship request received — Sky Fight League"
          : "Media inquiry received — Sky Fight League",
      react: OpportunityInquiryEmail({ name, isSponsor: type === "sponsor" }),
    });
  } catch (err) {
    console.error("[submitOpportunity] Failed to send confirmation email:", err);
  }

  return {
    success: true,
    message: "Our team will review your inquiry and be in touch shortly.",
  };
}