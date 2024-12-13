import { Metadata } from 'next'
import { apps } from '@/data/apps'
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { AppLink } from '@/components/apps/AppLink'

type Props = {
  params: { slug: string }
}

export function generateStaticParams() {
  return apps.map((app) => ({
    slug: app.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const app = apps.find(app => app.slug === params.slug)
  
  if (!app) {
    return {
      title: 'App Not Found',
      description: 'The requested app could not be found.',
    }
  }

  return {
    title: `${app.name} - Menu Bar App | Barware.io`,
    description: app.description,
    openGraph: {
      title: `${app.name} - Mac Menu Bar App | Barware.io`,
      description: app.description,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${app.name} - Mac Menu Bar App`,
      description: app.description,
    }
  }
}

export default function AppPage({ params }: Props) {
  const app = apps.find(app => app.slug === params.slug)

  if (!app) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#FDFCFC]">
      <Header />
      
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="w-32 h-32 relative">
              <Image
                src={app.icon}
                alt={app.name}
                className="rounded-2xl"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-4">{app.name}</h1>
              <p className="text-gray-700 text-lg mb-6">
                {app.description}
              </p>
              <AppLink href={app.appStoreLink} isReady={app.isReady}>
                {app.linkText}
              </AppLink>
            </div>
          </div>

          {/* Add more app details sections here */}
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">Features</h2>
            <p className="text-gray-700">
              Coming soon...
            </p>
            
            {/* Add more sections as needed */}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
} 