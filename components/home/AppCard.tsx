import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { AppType } from "@/types"

export function AppCard({ app }: { app: AppType }) {
  return (
    <Card className={`${app.color} border-none p-6 rounded-3xl`}>
      <CardContent className="p-0">
        <div className="relative w-20 h-20 mb-4 mx-auto">
          <Image
            src={app.icon}
            alt={`${app.name} icon`}
            fill
            className="object-contain"
          />
        </div>
        <h3 className="text-xl font-bold mb-2">{app.name}</h3>
        <p className="text-gray-600 mb-4">{app.description}</p>
        <Link href={app.appStoreLink}>
          <Button className="bg-white text-[#FF5D41] hover:bg-gray-100 rounded-full w-full">
            <Download className="mr-2 h-4 w-4" /> Get on App Store
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
} 