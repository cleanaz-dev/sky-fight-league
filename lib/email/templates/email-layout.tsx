// lib/email/components/email-layout.tsx
import {
  Html,
  Head,
  Body,
  Container,
  Preview,
  Tailwind,
  Section,
  Text,
  Img,
} from "react-email";

const tailwindConfig = {
  theme: {
    extend: {
      colors: {
        background: "#111111",
        card: "#161616",
        primary: "#DC2626", // The deep red
        foreground: "#FAFAFA",
        muted: "#A1A1AA",
        border: "#27272A",
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Anton", "Impact", "Arial Black", "sans-serif"],
      },
    },
  },
};

interface EmailLayoutProps {
  previewText: string;
  children: React.ReactNode;
}

export function EmailLayout({ previewText, children }: EmailLayoutProps) {
  // 1. Paste your exact working S3 URL here
  const LOGO_URL = "https://sky-fight-league.s3.us-east-1.amazonaws.com/branding/header-logo.png";

  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Preview>{previewText}</Preview>
      <Tailwind config={tailwindConfig}>
        <Body className="bg-background font-sans my-auto mx-auto px-4 py-12">
          <Container className="max-w-[480px] mx-auto">
            
            {/* BRANDING HEADER */}
            <Section className="mb-8 mt-4">
              <Img
                src={LOGO_URL}
                alt="Sky Fight League"
                width="180" // Tweak this number to make it look perfect. Don't add 'px'
                height="auto" 
                className="mx-auto"
                style={{ display: "block", margin: "0 auto" }} 
              />
            </Section>

            {/* MAIN CONTENT CARD */}
            <Section className="bg-card border border-solid border-border rounded-lg overflow-hidden shadow-2xl">
              {/* Premium Top Bar Accent */}
              <Section className="bg-primary h-1.5 w-full" />
              
              {/* The dynamic content from your individual emails goes here */}
              <Section className="p-8">
                {children}
              </Section>
            </Section>

            {/* FOOTER */}
            <Section className="mt-8 text-center">
              <Text className="text-[#666666] text-xs uppercase tracking-widest m-0 mb-2">
                Sky Fight League — Toronto
              </Text>
              {/* Optional: Add social links or unsubscribe text here later */}
            </Section>

          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}