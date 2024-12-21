import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy - Barware',
  description: 'Privacy Policy for Barware and our menu bar apps',
}

export default function PrivacyPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: Dec 20, 2024</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">Our Approach to Privacy</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                At Barware, we believe in absolute privacy and data minimalism. We don&apos;t collect, store, or process any personal information from our users.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Data Collection</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Our apps are designed to work entirely on your device. We don&apos;t:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Collect personal information</li>
                <li>Track your usage</li>
                <li>Use analytics services</li>
                <li>Store any data on remote servers</li>
                <li>Share any information with third parties</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Our Apps</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Each of our apps has its own privacy policy that details any app-specific privacy considerations. You can find these policies on each app&apos;s dedicated page.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                If you have any questions about our privacy practices, please{' '}
                <Link href="/contact" className="text-blue-600 hover:underline">
                  contact us
                </Link>.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600">
            This privacy policy applies to the Barware website and our general practices. For app-specific privacy policies, please refer to individual app pages.
          </p>
        </div>
      </div>
    </main>
  )
} 