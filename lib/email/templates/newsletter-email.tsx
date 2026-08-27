// lib/email/templates/newsletter-confirmation-email.tsx
import { Html, Head, Body, Container, Heading, Text, Preview } from "react-email";

interface NewsletterConfirmationEmailProps {
  name: string;
}

export default function NewsletterConfirmationEmail({
  name,
}: NewsletterConfirmationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>You're subscribed to Sky Fight League updates</Preview>
      <Body style={{ backgroundColor: "#111111", fontFamily: "sans-serif" }}>
        <Container style={{ padding: "40px 20px", color: "#ffffff" }}>
          <Heading style={{ color: "#ffffff" }}>You're in, {name}.</Heading>
          <Text style={{ color: "#cccccc" }}>
            Thanks for subscribing to Sky Fight League updates. We'll send
            fight announcements, ticket presales, and behind-the-cage access
            straight to your inbox — no spam, just the heavy hits.
          </Text>
          <Text style={{ color: "#888888", fontSize: "12px" }}>
            Sky Fight League — Toronto
          </Text>
        </Container>
      </Body>
    </Html>
  );
}