'use client'

import { AppType } from "@/types"
import Image from "next/image"
import { Button } from "../ui/button"
import { Download } from "lucide-react"
import Link from 'next/link'

export function AppCard({ app }: { app: AppType }) {
    if (!app) return null

    return (
        <Link href={`/apps/${app.slug}`} className="block h-full">
            <div
                className={`relative bg-white p-8 rounded-3xl shadow-xl backdrop-blur-sm 
                    hover:scale-105 transition-transform h-full flex flex-col`}
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
                <p className="text-sm text-gray-600 mb-4 flex-grow">{app.description}</p>
                {app.isReady ? (
                    <Button 
                        className="w-full bg-[#0066CC] hover:bg-[#0066CC]/90 rounded-full"
                        asChild
                        onClick={(e) => {
                            e.preventDefault()
                            window.open(app.appStoreLink, '_blank')
                        }}
                    >
                        <div>
                            <Download className="mr-2 h-4 w-4" />
                            Get on App Store
                        </div>
                    </Button>
                ) : (
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
                        <div className="ribbon bg-[#FF5D41] text-white px-4 py-1.5 rounded-lg text-xs">
                            {app.linkText}
                        </div>
                    </div>
                )}
            </div>
        </Link>
    )
}