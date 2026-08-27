// lib/email/templates/opportunity-inquiry-email.tsx
import { Html, Head, Body, Container, Heading, Text, Preview } from "react-email";

interface OpportunityInquiryEmailProps {
  name: string;
  isSponsor: boolean;
}

export default function OpportunityInquiryEmail({
  name,
  isSponsor,
}: OpportunityInquiryEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>
        Your {isSponsor ? "sponsorship" : "media"} inquiry has been received
      </Preview>
      <Body style={{ backgroundColor: "#111111", fontFamily: "sans-serif" }}>
        <Container style={{ padding: "40px 20px", color: "#ffffff" }}>
          <Heading style={{ color: "#ffffff" }}>Thanks, {name}.</Heading>
          <Text style={{ color: "#cccccc" }}>
            {isSponsor
              ? "We've received your sponsorship request. Our team will follow up shortly with our official deck and next steps."
              : "We've received your media inquiry. Our team will follow up shortly with access details and press assets."}
          </Text>
          <Text style={{ color: "#888888", fontSize: "12px" }}>
            Sky Fight League — Toronto
          </Text>
        </Container>
      </Body>
    </Html>
  );
}