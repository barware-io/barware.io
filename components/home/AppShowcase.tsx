import { apps } from "@/data/apps"
import { AppCard } from "./AppCard"

export function AppShowcase() {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white" id="apps">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Apps</h2>
                    <p className="text-white/90 text-lg max-w-2xl mx-auto">
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
            </div>
        </section>
    )
} 