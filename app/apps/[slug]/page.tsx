import { Metadata } from 'next'
import { apps } from '@/data/apps'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Link from 'next/link'

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
    title: `${app.name} - Menu Bar App`,
    description: app.description,
    openGraph: {
      title: `${app.name} - Mac Menu Bar App`,
      description: app.description,
    },
  }
}

export default function AppPage({ params }: Props) {
  const app = apps.find(app => app.slug === params.slug)

  if (!app) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className={`rounded-3xl ${app.color} p-8 mb-12`}>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-24 h-24 md:w-32 md:h-32">
              <Image
                src={app.icon}
                alt={`${app.name} icon`}
                fill
                className="rounded-2xl object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{app.name}</h1>
              <p className="text-lg mb-6">{app.description}</p>
              {app.isReady ? (
                <Button 
                  className="bg-[#0066CC] hover:bg-[#0066CC]/90 rounded-full"
                  asChild
                >
                  <a href={app.appStoreLink} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Get on App Store
                  </a>
                </Button>
              ) : (
                <div className="inline-block">
                  <div className="bg-[#FF5D41] text-white px-6 py-2 rounded-full text-sm">
                    {app.linkText}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {app.features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Requirements Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">System Requirements</h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <dt className="font-medium mb-2">Operating System</dt>
                <dd className="text-gray-700">{app.requirements.os}</dd>
              </div>
              <div>
                <dt className="font-medium mb-2">Processor</dt>
                <dd className="text-gray-700">{app.requirements.processor}</dd>
              </div>
              <div>
                <dt className="font-medium mb-2">Memory</dt>
                <dd className="text-gray-700">{app.requirements.memory}</dd>
              </div>
              <div>
                <dt className="font-medium mb-2">Storage</dt>
                <dd className="text-gray-700">{app.requirements.storage}</dd>
              </div>
            </dl>
          </div>
        </section>

        {app.pricing && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Pricing</h2>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold">{app.pricing.price}</span>
                {app.pricing.type === 'subscription' && (
                  <span className="text-gray-600">/month</span>
                )}
              </div>
              {app.pricing.trial && (
                <p className="text-gray-700">{app.pricing.trial}</p>
              )}
            </div>
          </section>
        )}

        <section className="mb-12">
          <div className="flex justify-center">
            <Link 
              href={`/apps/${app.slug}/privacy`}
              className="flex items-center gap-2 text-gray-600 hover:text-[#FF5D41] transition-colors px-4 py-2 rounded-full border border-gray-200 hover:border-[#FF5D41]"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              </svg>
              Privacy Policy
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
} 