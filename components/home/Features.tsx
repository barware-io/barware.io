import { Card, CardContent } from "@/components/ui/card"
import { Zap, Download, Monitor } from 'lucide-react'

export function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Barware Apps</h2>
          <p className="text-gray-600">Discover what makes our MenuBar apps special</p>
        </div>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[#E8F9F3] border-none p-6 rounded-3xl">
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                  <Zap className="w-12 h-12 text-gray-700" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quick Access</h3>
                <p className="text-gray-600">Access all your tools instantly from the menu bar</p>
              </CardContent>
            </Card>
            <Card className="bg-[#E8E5FF] border-none p-6 rounded-3xl">
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                  <Download className="w-12 h-12 text-gray-700" />
                </div>
                <h3 className="text-xl font-bold mb-2">Easy Installation</h3>
                <p className="text-gray-600">Simple one-click install from the App Store</p>
              </CardContent>
            </Card>
            <Card className="bg-[#FFE8E3] border-none p-6 rounded-3xl">
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                  <Monitor className="w-12 h-12 text-gray-700" />
                </div>
                <h3 className="text-xl font-bold mb-2">Tailored for MacOS</h3>
                <p className="text-gray-600">Seamlessly integrated with your MacOS workflow</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
} 