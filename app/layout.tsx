import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { GoogleAnalytics } from "@/components/GoogleAnalytics"
import { JsonLd } from "@/components/JsonLd"
import { generateWebsiteSchema, generateOrganizationSchema } from "@/lib/structured-data"
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://barware.io'),
  title: {
    default: 'Barware.io',
    template: '%s | Barware.io'
  },
  description: 'Menu bar apps for your Mac',
  keywords: ['mac', 'apple', 'menu', 'bar', 'app', 'utility', 'productivity', 'reddit', 'subreddit', 'bookmark', 'feeds', 'menu bar apps', 'mac apps', 'macos', 'menubar', 'barware', 'barware.io',],
  authors: [{ name: 'Orkhan Farmanli' }],
  creator: 'Orkhan Farmanli',
  publisher: 'Orkhan Farmanli',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://barware.io',
    siteName: 'barware.io',
    title: 'barware.io',
    description: 'Menu bar apps for your Mac',
    images: [
      {
        url: 'https://barware.io/assets/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Barware.io - Menu bar apps for your Mac',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'barware.io',
    description: 'Menu bar apps for your Mac',
    creator: '@orkhanfarmanli',
    images: ['https://barware.io/assets/og-image.png'],
  },
  alternates: {
    canonical: 'https://barware.io'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const websiteSchema = generateWebsiteSchema()
  const organizationSchema = generateOrganizationSchema()

  return (
    <html lang="en">
      <head>
        <JsonLd data={websiteSchema} />
        <JsonLd data={organizationSchema} />
        <link rel="icon" href="/assets/favicon/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/assets/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/assets/favicon/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <div className="min-h-screen bg-[#FDFCFC]">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}

