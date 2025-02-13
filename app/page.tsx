import { Metadata } from 'next'
import { HeroSection } from "@/components/home/HeroSection"
import { AppShowcase } from "@/components/home/AppShowcase"
import { Features } from "@/components/home/Features"
import { About } from "@/components/home/About"
import { favApps } from "@/data/apps"

export const metadata: Metadata = {
  title: 'Barware.io - Menu Bar Apps for Mac',
  description: 'Discover essential menu bar apps to enhance your Mac experience. Simple, efficient tools for your menubar.',
  openGraph: {
    title: 'Barware.io - Menu Bar Apps for Mac',
    description: 'Discover essential menu bar apps to enhance your Mac experience. Simple, efficient tools for your menubar.',
  }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFCFC]">
      <HeroSection favApps={favApps} />
      <Features />
      <AppShowcase />
      <About />
    </div>
  )
}
