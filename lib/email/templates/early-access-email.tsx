// lib/email/templates/early-access-email.tsx
import { Heading, Text } from "react-email";
import { EmailLayout } from "./email-layout";

interface EarlyAccessEmailProps {
  name: string;
}

export default function EarlyAccessEmail({ name }: EarlyAccessEmailProps) {
  return (
    <EmailLayout previewText="You're on the Sky Fight League early access list">
      <Text className="text-primary text-xs font-bold tracking-[0.2em] uppercase m-0 mb-3">
        Status: Confirmed
      </Text>
      <Heading className="font-display text-4xl text-foreground uppercase m-0 mb-4 tracking-wide leading-none">
        You're in, {name}.
      </Heading>
      <Text className="text-muted text-base leading-relaxed m-0 mb-6">
        Thanks for stepping into the arena. You are officially on the early access list for Sky Fight League. 
      </Text>
      <Text className="text-muted text-base leading-relaxed m-0">
        Keep an eye on your inbox. We'll alert you the moment tickets, fighter rosters, and official event details go live.
      </Text>
    </EmailLayout>
  );
}