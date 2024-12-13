import Link from 'next/link'
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FDFCFC]">
      <Header />
      
      <div className="container mx-auto py-32 px-4 text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl mb-8">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center px-6 py-3 rounded-lg text-white bg-black hover:bg-gray-800"
        >
          Return Home
        </Link>
      </div>
      
      <Footer />
    </div>
  )
} 