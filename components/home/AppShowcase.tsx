import { AppCard } from "./AppCard"
import { AppType } from "@/types"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function AppShowcase({ apps }: { apps: AppType[] }) {
  return (
    <section id="apps" className="container mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Belowed Apps</h2>
        <p className="text-gray-600">These are the apps that are loved by our users</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {apps.map((app, index) => (
          <AppCard key={index} app={app} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Link href="/apps">
          <Button className="bg-[#FF5D41] hover:bg-[#ff4724] text-white rounded-full h-12 px-8">
            View All Apps <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </section>
  )
} 