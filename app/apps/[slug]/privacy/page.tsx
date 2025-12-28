import { Metadata } from 'next'
import { apps } from '@/data/apps'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { JsonLd } from '@/components/JsonLd'
import { generateBreadcrumbSchema } from '@/lib/structured-data'

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
      title: 'Privacy Policy Not Found',
      description: 'The requested privacy policy could not be found.',
    }
  }

  return {
    title: `${app.name} Privacy Policy`,
    description: `Privacy Policy for ${app.name} - how we handle your data and protect your privacy.`,
    alternates: {
      canonical: `https://barware.io/apps/${app.slug}/privacy`
    }
  }
}

export default function PrivacyPolicyPage({ params }: Props) {
  const app = apps.find(app => app.slug === params.slug)

  if (!app) {
    notFound()
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://barware.io' },
    { name: 'Apps', url: 'https://barware.io/apps' },
    { name: app.name, url: `https://barware.io/apps/${app.slug}` },
    { name: 'Privacy Policy', url: `https://barware.io/apps/${app.slug}/privacy` }
  ])

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <main className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <Link 
          href={`/apps/${app.slug}`}
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to {app.name}
        </Link>

        <h1 className="text-3xl font-bold mb-2">{app.name} Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: {app.privacyPolicy.lastUpdated}</p>

        <div className="space-y-8">
          {app.privacyPolicy.sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
              <div className="space-y-4">
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-gray-700">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600">
            If you have any questions about this Privacy Policy, please{' '}
            <Link 
              href="/contact" 
              className="text-blue-600 hover:underline"
            >
              contact us
            </Link>.
          </p>
        </div>
      </div>
    </main>
    </>
  )
} 