import { apps } from "@/data/apps"
import { AppCard } from "./AppCard"

export function AppShowcase() {
    return (
        <section className="py-24">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-4xl font-bold tracking-tight">
                    Our Apps
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Each app is crafted with care to bring delight and productivity to your menu bar
                </p>
            </div>
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {apps.map((app) => (
                        <AppCard key={app.name} app={app} />
                    ))}
                </div>
            </div>
        </section>
    )
} 