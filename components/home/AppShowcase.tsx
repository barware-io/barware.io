import { apps } from "@/data/apps"
import { AppCard } from "./AppCard"

export function AppShowcase() {
    return (
        <section className="container py-8 space-y-6">
            <div className="text-center space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">
                    Our beloved apps
                </h2>
                <p className="text-muted-foreground">
                    Check out our collection of apps designed to enhance your productivity
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {apps.map((app) => (
                    <AppCard key={app.name} app={app} />
                ))}
            </div>
        </section>
    )
} 