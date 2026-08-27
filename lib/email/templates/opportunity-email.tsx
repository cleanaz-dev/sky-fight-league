// lib/email/templates/opportunity-inquiry-email.tsx
import { Html, Head, Body, Container, Heading, Text, Preview } from "react-email";
import type { ContactType } from "@/lib/generated/prisma/client";

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

export default function OpportunityInquiryEmail({
  name,
  contactType,
}: OpportunityInquiryEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Your inquiry has been received</Preview>
      <Body style={{ backgroundColor: "#111111", fontFamily: "sans-serif" }}>
        <Container style={{ padding: "40px 20px", color: "#ffffff" }}>
          <Heading style={{ color: "#ffffff" }}>Thanks, {name}.</Heading>
          <Text style={{ color: "#cccccc" }}>
            {COPY[contactType] ?? COPY.GENERAL}
          </Text>
          <Text style={{ color: "#888888", fontSize: "12px" }}>
            Sky Fight League — Toronto
          </Text>
        </Container>
      </Body>
    </Html>
  );
}