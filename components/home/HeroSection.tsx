'use client'

import { AppType } from "@/types"
import Image from "next/image"
import Link from 'next/link'
import { motion } from "framer-motion"

export function HeroSection({ favApps }: { favApps: AppType[] }) {
    return (
        <section className="relative py-16 md:py-24 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#FFE8E3]/30 to-white"></div>
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-64 h-64 bg-[#FF5D41]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#FF9E80]/10 rounded-full blur-3xl"></div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                            Pouring Innovation
                            <motion.span 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="text-[#FF5D41] block"
                            >
                                into MacOS.
                            </motion.span>
                        </h1>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="text-gray-600 text-lg max-w-lg"
                        >
                            Discover our collection of beautifully crafted menu bar apps 
                            that enhance your Mac experience.
                        </motion.p>
                    </motion.div>

                    {/* App Showcase */}
                    <div className="relative">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto"
                        >
                            {favApps.map((app, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
                                    className="w-full"
                                >
                                    <Link 
                                        href={`/apps/${app.slug}`}
                                        className="block group h-full"
                                    >
                                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg 
                                            transition-all duration-300 hover:shadow-xl hover:scale-[1.02]
                                            border border-white/20 h-full">
                                            <div className="relative w-12 h-12 mb-4 group-hover:scale-110 transition-transform">
                                                <Image
                                                    src={app.icon}
                                                    alt={app.name}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                            <h3 className="font-semibold mb-2 group-hover:text-[#FF5D41] transition-colors">
                                                {app.name}
                                            </h3>
                                            <p className="text-sm text-gray-600">{app.description}</p>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Decorative Elements */}
                        <div className="absolute -z-10 inset-0 scale-150 blur-3xl opacity-20 bg-gradient-to-r from-[#FF5D41] to-[#FF9E80]"></div>
                    </div>
                </div>
            </div>
        </section>
    )
} 