import Link from "next/link"
import Image from "next/image"
import logoImage from "@/public/assets/logo.png"

export function Header() {
  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="flex items-center justify-between">
        <Link href="/" className="relative">
          <Image
            src={logoImage}
            alt="barware.io logo"
            width={150}
            height={50}
            priority
          />
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/#apps" className="text-gray-600 hover:text-gray-900">Our Apps</Link>
          <Link href="/#features" className="text-gray-600 hover:text-gray-900">Features</Link>
          <Link href="/#about" className="text-gray-600 hover:text-gray-900">About</Link>
        </div>
      </nav>
    </header>
  )
} 
