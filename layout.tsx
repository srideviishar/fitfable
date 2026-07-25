import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'FitFable — Human performance, engineered.',
  description:
    'FitFable unites movement intelligence software, evidence-based coaching, and corporate wellness under one umbrella — for the organizations that run on healthy people and the individuals who refuse to plateau.',
  generator: 'v0.app',
  keywords: [
    'movement intelligence',
    'human performance',
    'corporate wellness',
    'personal training',
    'workforce health',
    'FitFable',
  ],
  openGraph: {
    title: 'FitFable — Human performance, engineered.',
    description:
      'Movement intelligence software, evidence-based coaching, and corporate wellness under one umbrella.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7f7f7',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
