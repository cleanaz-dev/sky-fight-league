// app/layout.tsx
import type { Metadata, Viewport } from 'next'
import { Anton, Geist } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
})

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  'https://skyfightleague.ca'

const title = 'Sky Fight League | MMA & Muay Thai in Toronto'
const description =
  'Sky Fight League showcases emerging MMA and Muay Thai athletes through live events, broadcast production, and fighter storytelling in Toronto.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s | Sky Fight League',
  },
  description,
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/header-logo.png',
  },
  openGraph: {
    title,
    description,
    url: '/',
    siteName: 'Sky Fight League',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/header-logo.png',
        alt: 'Sky Fight League',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title,
    description,
    images: ['/header-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#111111',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en-CA"
      className={`${geistSans.variable} ${anton.variable} bg-background`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}