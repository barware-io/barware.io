import { Button } from "@/components/ui/button"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#FDFCFC]">
      <Header />
      
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
        
        <div className="prose max-w-none">
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using this website, you accept and agree to be bound by the terms and 
              provision of this agreement.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily download one copy of the materials (information or 
              software) on this website for personal, non-commercial transitory viewing only.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
            <p className="mb-4">
              The materials on this website are provided on an &apos;as is&apos; basis. We make no warranties, 
              expressed or implied, and hereby disclaim and negate all other warranties including, 
              without limitation, implied warranties or conditions of merchantability.
            </p>
          </section>
        </div>

        <div className="mt-8 flex gap-4">
          <Button variant="default">Accept Terms</Button>
          <Button variant="outline">Decline</Button>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}