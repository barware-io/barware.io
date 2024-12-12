import "@/styles/globals.css"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Barware.io - Innovative MacOS MenuBar Applications",
  description: "Discover a collection of powerful MenuBar applications designed to enhance your Mac experience.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>{children}</body>
    </html>
  )
}

