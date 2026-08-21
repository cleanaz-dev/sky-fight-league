// import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Anton } from 'next/font/google'
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

export const metadata: Metadata = {
  title: 'Sky Fight League | Canada\u2019s Premier MMA Promotion',
  description:
    'Sky Fight League \u2014 elite Canadian mixed martial arts. Live fight cards, championship bouts, and the next generation of combat sports. Get tickets and fight updates.',
  generator: 'v0.app',
  keywords: ['MMA', 'Sky Fight League', 'Canada MMA', 'fight card', 'combat sports', 'championship'],
  openGraph: {
    title: 'Sky Fight League | Canada\u2019s Premier MMA Promotion',
    description:
      'Elite Canadian mixed martial arts. Live fight cards, championship bouts, and the next generation of combat sports.',
    type: 'website',
    locale: 'en_CA',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#111111',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${anton.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {/* {process.env.NODE_ENV === 'production' && <Analytics />} */}
      </body>
    </html>
  )
}
