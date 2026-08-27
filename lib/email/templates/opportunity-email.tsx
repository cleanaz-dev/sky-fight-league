// lib/email/templates/opportunity-inquiry-email.tsx
import { Heading, Text } from "react-email";

import type { ContactType } from "@/lib/generated/prisma/client";
import { EmailLayout } from "./email-layout";

interface OpportunityInquiryEmailProps {
  name: string;
  contactType: ContactType;
}

const COPY: Record<string, string> = {
  SPONSOR_INQUIRY:
    "We've received your sponsorship request. Our team will follow up shortly with our official deck and next steps.",
  MEDIA_INQUIRY:
    "We've received your media inquiry. Our team will follow up shortly with access details and press assets.",
  GENERAL:
    "We've received your message. A member of our executive team will be in touch shortly.",
};

export default function OpportunityInquiryEmail({ name, contactType }: OpportunityInquiryEmailProps) {
  return (
    <EmailLayout previewText="Your inquiry has been received">
      <Text className="text-primary text-xs font-bold tracking-[0.2em] uppercase m-0 mb-3">
        Message Received
      </Text>
      <Heading className="font-display text-4xl text-foreground uppercase m-0 mb-4 tracking-wide leading-none">
        Thanks, {name}.
      </Heading>
      <Text className="text-muted text-base leading-relaxed m-0">
        {COPY[contactType] ?? COPY.GENERAL}
      </Text>
    </EmailLayout>
  );
}