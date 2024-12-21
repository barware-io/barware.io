'use client'

import { AppType } from "@/types"
import Image from "next/image"
import Link from 'next/link'

export function HeroSection({ favApps }: { favApps: AppType[] }) {
    const handleAppClick = (app: AppType) => {
        if (app.isReady) {
            window.open(app.appStoreLink, '_blank', 'noopener,noreferrer')
        }
    }

    return (
        <section className="relative py-16 md:py-20 overflow-hidden">
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
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 w-full md:w-[750px] mx-auto">
                            {favApps.map((app, index) => (
                                <Link 
                                    key={index} 
                                    href={`/apps/${app.slug}`}
                                    className="block transform hover:scale-105 transition-transform"
                                >
                                    <div className="bg-white rounded-3xl p-6 shadow-lg">
                                        <div className="relative w-12 h-12 mb-4">
                                            <Image
                                                src={app.icon}
                                                alt={app.name}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <h3 className="font-semibold mb-2">{app.name}</h3>
                                        <p className="text-sm text-gray-600">{app.description}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -z-10 inset-0 scale-150 blur-3xl opacity-20 bg-gradient-to-r from-[#FF5D41] to-[#FF9E80]"></div>
                    </div>
                </div>
            </div>
        </section>
    )
} 