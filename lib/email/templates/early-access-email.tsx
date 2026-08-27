// emails/early-access-email.tsx
import { Html, Head, Body, Container, Heading, Text, Preview } from "react-email";

interface EarlyAccessEmailProps {
  name: string;
}

export default function EarlyAccessEmail({ name }: EarlyAccessEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>You're on the Sky Fight League early access list</Preview>
      <Body style={{ backgroundColor: "#111111", fontFamily: "sans-serif" }}>
        <Container style={{ padding: "40px 20px", color: "#ffffff" }}>
          <Heading style={{ color: "#ffffff" }}>You're in, {name}.</Heading>
          <Text style={{ color: "#cccccc" }}>
            Thanks for signing up for early access to Sky Fight League. We'll
            email you as soon as tickets, fighter announcements, and event
            details go live.
          </Text>
          <Text style={{ color: "#888888", fontSize: "12px" }}>
            Sky Fight League — Toronto
          </Text>
        </Container>
      </Body>
    </Html>
  );
}