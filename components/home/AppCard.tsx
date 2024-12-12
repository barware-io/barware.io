import { AppType } from "@/types"
import { Button } from "../ui/button"
import { Card } from "../ui/card"
import Image from "next/image"
import { Download } from 'lucide-react'

interface AppCardProps {
    app: AppType
}

export function AppCard({ app }: AppCardProps) {
    return (
        <Card className="overflow-hidden">
            <div className={`${app.color} p-6`}>
                <div className="w-12 h-12 relative">
                    <Image
                        src={app.icon}
                        alt={app.name}
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
            <div className="p-6 space-y-4">
                <div className="space-y-1">
                    <h3 className="font-semibold">{app.name}</h3>
                    <p className="text-sm text-muted-foreground">
                        {app.description}
                    </p>
                </div>
                <Button 
                    variant={app.isReady ? "default" : "secondary"}
                    className="w-full rounded-full"
                    asChild={app.isReady}
                >
                    {app.isReady ? (
                        <a href={app.appStoreLink} target="_blank" rel="noopener noreferrer">
                            <Download className="mr-2 h-4 w-4" />
                            Get on App Store
                        </a>
                    ) : (
                        <span>{app.linkText || "Coming Soon"}</span>
                    )}
                </Button>
            </div>
        </Card>
    )
} 