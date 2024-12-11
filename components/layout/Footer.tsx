import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold mb-4 md:mb-0">barware.io</div>
          <div className="flex space-x-6">
            <Link href="/terms" className="text-gray-600 hover:text-gray-900">Terms</Link>
            <Link href="/privacy" className="text-gray-600 hover:text-gray-900">Privacy</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 