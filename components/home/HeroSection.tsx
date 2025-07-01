'use client'

import Image, { StaticImageData } from "next/image"
import Link from 'next/link'
import { motion, useMotionValue } from "framer-motion"

type SimplifiedAppType = {
  name: string
  description: string
  color: string
  appStoreLink: string
  linkText: string
  isReady: boolean
  icon: StaticImageData
  slug: string
}

export function HeroSection({ favApps }: { favApps: SimplifiedAppType[] }) {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        const rect = e.currentTarget.getBoundingClientRect()
        const offsetX = e.clientX - rect.left - rect.width / 2
        const offsetY = e.clientY - rect.top - rect.height / 2
        x.set(offsetX / 20)
        y.set(offsetY / 20)
    }

    return (
        <section className="relative py-16 md:py-24 overflow-hidden bg-[#FFE1D8]">
            {/* Enhanced background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#FFE1D8] via-[#FFE8E3] to-[#FFF5F2]"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="space-y-6"
                    >
                        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                            Pouring Innovation
                            <motion.span 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="text-[#FF5D41] block"
                            >
                                into MacOS.
                            </motion.span>
                        </h1>
                        <p className="text-gray-600 text-lg max-w-lg">
                            Discover our collection of beautifully crafted menu bar apps 
                            that enhance your Mac experience.
                        </p>
                    </motion.div>

                    {/* App Showcase */}
                    <div className="relative">
                        <motion.div
                            onMouseMove={handleMouseMove}
                            onMouseLeave={() => { x.set(0); y.set(0) }}
                            style={{ x, y }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto"
                        >
                            {favApps.map((app, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ 
                                        delay: 0.2 * index,
                                        duration: 0.4,
                                        ease: "easeOut"
                                    }}
                                    className="w-full"
                                >
                                    <Link 
                                        href={`/apps/${app.slug}`}
                                        className="block group h-full"
                                    >
                                        <div className="bg-white rounded-3xl p-6 
                                            shadow-sm
                                            transition-all duration-300 ease-out
                                            hover:shadow-md
                                            hover:translate-y-[-2px]
                                            border border-gray-100 h-full">
                                            <div className="relative w-12 h-12 mb-4 transition-transform duration-300 ease-out group-hover:scale-105">
                                                <Image
                                                    src={app.icon}
                                                    alt={app.name}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                            <h3 className="font-semibold mb-2 group-hover:text-[#FF5D41] transition-colors duration-300">
                                                {app.name}
                                            </h3>
                                            <p className="text-sm text-gray-600">{app.description}</p>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
} 