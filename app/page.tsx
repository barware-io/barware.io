import { HeroSection } from "@/components/home/HeroSection"
import { AppShowcase } from "@/components/home/AppShowcase"
import { Features } from "@/components/home/Features"
import { About } from "@/components/home/About"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { apps, favApps } from "@/data/apps"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FDFCFC]">
      <Header />
      <HeroSection favApps={favApps} />
      <Features />
      <AppShowcase />
      <About />
      <Footer />
    </div>
  )
}
