import { AppType } from "@/types"
import { Button } from "../ui/button"
import { Card } from "../ui/card"
import Image from "next/image"
import { Download } from "lucide-react"

interface AppCardProps {
    app: AppType
}

export function AppCard({ app }: AppCardProps) {
    const CardWrapper = app.isReady ? 'a' : 'div'
    const wrapperProps = app.isReady ? {
        href: app.appStoreLink,
        target: "_blank",
        rel: "noopener noreferrer"
    } : {}

    return (
        <CardWrapper
            className={`block group ${app.isReady ? 'cursor-pointer' : ''}`}
            {...wrapperProps}
        >
            <Card className="relative overflow-hidden border-0 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className={`${app.color} p-8 ${!app.isReady ? 'opacity-75' : ''}`}>
                    <div className="relative w-16 h-16 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <Image
                            src={app.icon}
                            alt={app.name}
                            fill
                            className={`object-contain ${!app.isReady ? 'grayscale-[30%]' : ''}`}
                        />
                    </div>
                </div>
                <div className="p-8 space-y-4 text-center flex-1 flex flex-col">
                    <div className="space-y-2 flex-1">
                        <h3 className="text-xl font-semibold">{app.name}</h3>
                        <p className="text-gray-600">
                            {app.description}
                        </p>
                    </div>
                    <Button 
                        variant={app.isReady ? "default" : "secondary"}
                        className={`rounded-full w-full ${
                            app.isReady 
                                ? 'bg-[#FF5D41] hover:bg-[#FF5D41]/90' 
                                : 'bg-gray-100 text-gray-500 hover:bg-gray-200 cursor-not-allowed'
                        }`}
                        disabled={!app.isReady}
                    >
                        {app.isReady ? (
                            <>
                                <Download className="mr-2 h-4 w-4" />
                                Get on App Store
                            </>
                        ) : (
                            app.linkText
                        )}
                    </Button>
                </div>
            </Card>
        </CardWrapper>
    )
} 