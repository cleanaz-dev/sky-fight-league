// lib/email/templates/newsletter-confirmation-email.tsx
import { Heading, Text } from "react-email";
import { EmailLayout } from "./email-layout";


interface NewsletterConfirmationEmailProps {
  name: string;
}

export default function NewsletterConfirmationEmail({ name }: NewsletterConfirmationEmailProps) {
  return (
    <EmailLayout previewText="You're subscribed to Sky Fight League updates">
      <Text className="text-primary text-xs font-bold tracking-[0.2em] uppercase m-0 mb-3">
        Subscribed
      </Text>
      <Heading className="font-display text-4xl text-foreground uppercase m-0 mb-4 tracking-wide leading-none">
        You're in, {name}.
      </Heading>
      <Text className="text-muted text-base leading-relaxed m-0">
        Thanks for subscribing to Sky Fight League updates. We'll send
        fight announcements, ticket presales, and behind-the-cage access
        straight to your inbox — no spam, just the heavy hits.
      </Text>
    </EmailLayout>
  );
}