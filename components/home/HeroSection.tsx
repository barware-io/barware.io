import { AppType } from "@/types"
import Image from "next/image"

export function HeroSection({ favApps }: { favApps: AppType[] }) {
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
                            <div className="col-span-1 max-w-[400px] w-full mx-auto">
                                {(() => {
                                    const AppWrapper = favApps[0].isReady ? 'a' : 'div'
                                    const wrapperProps = favApps[0].isReady ? {
                                        href: favApps[0].appStoreLink,
                                        target: "_blank",
                                        rel: "noopener noreferrer"
                                    } : {}
                                    
                                    return (
                                        <AppWrapper
                                            className={`relative bg-white p-8 rounded-3xl shadow-xl backdrop-blur-sm w-full
                                                ${favApps[0].isReady ? 'cursor-pointer hover:scale-105 transition-transform' : ''}`}
                                            {...wrapperProps}
                                        >
                                            {/* First app content */}
                                            <div className="relative w-16 h-16 mb-4">
                                                <Image
                                                    src={favApps[0].icon}
                                                    alt={`${favApps[0].name} icon`}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                            <h3 className="font-semibold text-lg mb-2">{favApps[0].name}</h3>
                                            <p className="text-sm text-gray-600">{favApps[0].description}</p>
                                            {!favApps[0].isReady && (
                                                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
                                                    <div className="ribbon bg-[#FF5D41] text-white px-4 py-1.5 rounded-lg text-xs">
                                                        {favApps[0].linkText}
                                                    </div>
                                                </div>
                                            )}
                                        </AppWrapper>
                                    )
                                })()}
                            </div>
                            <div className="col-span-1 md:translate-y-8 max-w-[400px] w-full mx-auto">
                                {(() => {
                                    const AppWrapper = favApps[1].isReady ? 'a' : 'div'
                                    const wrapperProps = favApps[1].isReady ? {
                                        href: favApps[1].appStoreLink,
                                        target: "_blank",
                                        rel: "noopener noreferrer"
                                    } : {}
                                    
                                    return (
                                        <AppWrapper
                                            className={`relative bg-white p-8 rounded-3xl shadow-xl backdrop-blur-sm 
                                                ${favApps[1].isReady ? 'cursor-pointer hover:scale-105 transition-transform' : ''}`}
                                            {...wrapperProps}
                                        >
                                            {/* Second app content */}
                                            <div className="relative w-16 h-16 mb-4">
                                                <Image
                                                    src={favApps[1].icon}
                                                    alt={`${favApps[1].name} icon`}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                            <h3 className="font-semibold text-lg mb-2">{favApps[1].name}</h3>
                                            <p className="text-sm text-gray-600">{favApps[1].description}</p>
                                            {!favApps[1].isReady && (
                                                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
                                                    <div className="ribbon bg-[#FF5D41] text-white px-4 py-1.5 rounded-lg text-xs">
                                                        {favApps[1].linkText}
                                                    </div>
                                                </div>
                                            )}
                                        </AppWrapper>
                                    )
                                })()}
                            </div>
                            <div className="col-span-1 md:col-span-2 flex justify-center mt-0 md:mt-8">
                                <div className="max-w-[400px] w-full">
                                    {(() => {
                                        const AppWrapper = favApps[2].isReady ? 'a' : 'div'
                                        const wrapperProps = favApps[2].isReady ? {
                                            href: favApps[2].appStoreLink,
                                            target: "_blank",
                                            rel: "noopener noreferrer"
                                        } : {}
                                        
                                        return (
                                            <AppWrapper
                                                className={`relative bg-white p-8 rounded-3xl shadow-xl backdrop-blur-sm 
                                                    ${favApps[2].isReady ? 'cursor-pointer hover:scale-105 transition-transform' : ''}`}
                                                {...wrapperProps}
                                            >
                                                {/* Third app content */}
                                                <div className="relative w-16 h-16 mb-4">
                                                    <Image
                                                        src={favApps[2].icon}
                                                        alt={`${favApps[2].name} icon`}
                                                        fill
                                                        className="object-contain"
                                                    />
                                                </div>
                                                <h3 className="font-semibold text-lg mb-2">{favApps[2].name}</h3>
                                                <p className="text-sm text-gray-600">{favApps[2].description}</p>
                                                {!favApps[2].isReady && (
                                                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
                                                        <div className="ribbon bg-[#FF5D41] text-white px-4 py-1.5 rounded-lg text-xs">
                                                            {favApps[2].linkText}
                                                        </div>
                                                    </div>
                                                )}
                                            </AppWrapper>
                                        )
                                    })()}
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -z-10 inset-0 scale-150 blur-3xl opacity-20 bg-gradient-to-r from-[#FF5D41] to-[#FF9E80]"></div>
                    </div>
                </div>
            </div>
        </section>
    )
} 