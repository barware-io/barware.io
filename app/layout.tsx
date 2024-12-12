import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'barware.io',
  description: 'Menu bar apps for your Mac',
  icons: {
    icon: [
      {
        url: '/assets/favicon/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/assets/favicon/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/assets/favicon/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      }
    ],
    apple: [
      {
        url: '/assets/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  manifest: '/assets/favicon/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

