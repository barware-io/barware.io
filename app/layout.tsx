import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Barware.io',
  url: 'https://barware.io',
  description: 'Menu bar apps for your Mac',
  author: {
    '@type': 'Person',
    name: 'Orkhan Farmanli'
  },
  publisher: {
    '@type': 'Person',
    name: 'Orkhan Farmanli'
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://barware.io/apps?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
}

export const metadata: Metadata = {
  metadataBase: new URL('https://barware.io'),
  title: {
    default: 'Barware.io',
    template: '%s | Barware.io'
  },
  description: 'Menu bar apps for your Mac',
  keywords: ['barware', 'barware.io', 'menu bar apps', 'mac apps', 'macos', 'menubar'],
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
  other: {
    'schema:jsonLd': JSON.stringify(jsonLd)
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
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/favicon/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/assets/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/assets/favicon/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-[#FDFCFC]">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}

