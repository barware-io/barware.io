import { Button } from "@/components/ui/button"
import Image from "next/image"
import { AppType } from "@/types"

export function HeroSection({ favApps }: { favApps: AppType[] }) {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF9E80] via-[#FFE0B2] to-[#80CBC4] opacity-60"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-[#FFA07A]/20 via-transparent to-[#98DED9]/20"></div>
      <div className="absolute inset-0 bg-white/40 mix-blend-soft-light"></div>
      <div className="absolute inset-0 bg-gradient-radial from-white/0 via-white/0 to-[#FFE8E3]/40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Pouring Innovation into MacOS
          </h1>
          <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Discover a collection of powerful MenuBar applications designed to enhance your Mac experience.
            Each app is crafted for seamless productivity, convenience and entertainment.
          </p>
        </div>
        <div className="relative h-[400px] md:h-[500px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-3 gap-4 md:gap-8">
              {favApps.map((app, index) => (
                <div key={index} className={`${app.color} p-6 rounded-2xl shadow-lg animate-float backdrop-blur-sm bg-white/50`} style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto">
                    <Image
                      src={app.icon}
                      alt={`${app.name} icon`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-center mt-4 font-semibold text-lg">{app.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -right-20 top-1/4 w-56 h-56 bg-[#FFA07A] rounded-full opacity-30 blur-3xl animate-pulse"></div>
      <div className="absolute -left-20 bottom-1/4 w-56 h-56 bg-[#98DED9] rounded-full opacity-30 blur-3xl animate-pulse"></div>
    </section>
  )
} 