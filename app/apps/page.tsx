import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { AppCard } from "@/components/home/AppCard"
import { apps } from "@/data/apps"

export default function Apps() {
  return (
    <div className="min-h-screen bg-[#FDFCFC]">
      <Header />
      
      <div className="container mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Apps</h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Discover our complete collection of MenuBar applications designed to enhance your Mac experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {apps.map((app, index) => (
            <AppCard key={index} app={app} />
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  )
} 