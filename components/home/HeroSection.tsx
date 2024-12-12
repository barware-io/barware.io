import { AppType } from "@/types"
import Image from "next/image"

export function HeroSection({ favApps }: { favApps: AppType[] }) {
    return (
        <section className="relative py-16 md:py-20">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#FFE8E3]/30 to-white"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-6">
                        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                            Pouring Innovation
                            <span className="text-[#FF5D41] block">into MacOS.</span>
                        </h1>
                        <p className="text-gray-600 text-lg max-w-lg">
                            Discover our collection of beautifully crafted menu bar apps 
                            that enhance your Mac experience.
                        </p>
                    </div>

                    {/* App Showcase */}
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            {favApps.map((app, index) => {
                                const AppWrapper = app.isReady ? 'a' : 'div'
                                const wrapperProps = app.isReady ? {
                                    href: app.appStoreLink,
                                    target: "_blank",
                                    rel: "noopener noreferrer"
                                } : {}

                                return (
                                    <AppWrapper
                                        key={index}
                                        className={`relative bg-white p-8 rounded-3xl shadow-xl backdrop-blur-sm 
                                            ${app.isReady ? 'cursor-pointer hover:scale-105 transition-transform' : ''}
                                            ${index % 2 === 0 ? 'translate-y-8' : ''}`}
                                        {...wrapperProps}
                                    >
                                        <div className="relative w-16 h-16 mb-4">
                                            <Image
                                                src={app.icon}
                                                alt={`${app.name} icon`}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <h3 className="font-semibold text-lg mb-2">{app.name}</h3>
                                        <p className="text-sm text-gray-600">{app.description}</p>
                                        {!app.isReady && (
                                            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
                                                <div className="ribbon">
                                                    {app.linkText}
                                                </div>
                                            </div>
                                        )}
                                    </AppWrapper>
                                )
                            })}
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -z-10 inset-0 scale-150 blur-3xl opacity-20 bg-gradient-to-r from-[#FF5D41] to-[#FF9E80]"></div>
                    </div>
                </div>
            </div>
        </section>
    )
} 