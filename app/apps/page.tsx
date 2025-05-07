import { AppCard } from "@/components/home/AppCard"
import { apps } from "@/data/apps"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apps | Barware.io',
  description: 'Discover our collection of useful menu bar apps for your Mac. Simple, efficient tools that live in your menubar.',
  openGraph: {
    title: 'Mac Menu Bar Apps | Barware.io',
    description: 'Discover our collection of useful menu bar apps for your Mac. Simple, efficient tools that live in your menubar.',
  }
}

export default function Apps() {
  return (
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
  )
} 