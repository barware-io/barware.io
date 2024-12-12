import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">barware.io</Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/#apps" className="text-gray-600 hover:text-gray-900">Our Apps</Link>
          <Link href="/#features" className="text-gray-600 hover:text-gray-900">Features</Link>
          <Link href="/#about" className="text-gray-600 hover:text-gray-900">About</Link>
        </div>
      </nav>
    </header>
  )
} 