import type { Metadata } from 'next'
import { Nunito, DM_Sans } from 'next/font/google'
import './globals.css'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-heading',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'TechBridge - Bridging the Digital Divide',
  description: 'TechBridge helps businesses donate end-of-life devices to students in need through partner schools and NGOs. Inspired by Australia\'s Tech4Kids initiative.',
  generator: 'v0.app',
  openGraph: {
    title: 'TechBridge, a Device Donation Platform',
    description: 'A platform connecting businesses donating devices to schools and NGOs. Invoice module live. Donation module in progress.',
    url: 'https://tech-bridge-landing-page.vercel.app',
    images: [
      {
        url: '/preview.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${dmSans.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  )
}
