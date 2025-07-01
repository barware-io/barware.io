import Link from "next/link"
import Image from "next/image"
import logoImage from "@/public/assets/logo.png"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <nav className="flex items-center justify-between w-full">
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
          <Link href="/#apps" className="text-white hover:text-gray-200">Our Apps</Link>
          <Link href="/#features" className="text-white hover:text-gray-200">Features</Link>
          <Link href="/#about" className="text-white hover:text-gray-200">About</Link>
        </div>
      </nav>
      </div>
    </header>
  )
}
