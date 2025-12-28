import { AppType, Testimonial } from '@/types'

const BASE_URL = 'https://barware.io'

export function calculateAggregateRating(testimonials: Testimonial[]) {
  if (!testimonials?.length) return null

  const totalRating = testimonials.reduce((sum, t) => sum + t.rating, 0)
  const averageRating = totalRating / testimonials.length

  return {
    '@type': 'AggregateRating' as const,
    ratingValue: Number(averageRating.toFixed(1)),
    ratingCount: testimonials.length,
    bestRating: 5,
    worstRating: 1
  }
}

function parsePrice(pricing?: { price: string }): { price: string; currency: string } {
  if (!pricing || pricing.price === 'Free' || pricing.price === 'TBD') {
    return { price: '0', currency: 'USD' }
  }

  const priceMatch = pricing.price.match(/\$?([\d.]+)/)
  if (priceMatch) {
    return { price: priceMatch[1], currency: 'USD' }
  }

  return { price: '0', currency: 'USD' }
}

export function generateSoftwareApplicationSchema(app: AppType) {
  const { price, currency } = parsePrice(app.pricing)
  const aggregateRating = calculateAggregateRating(app.testimonials)

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: app.name,
    description: app.description,
    operatingSystem: 'macOS',
    applicationCategory: 'UtilitiesApplication',
    url: `${BASE_URL}/apps/${app.slug}`,
    author: {
      '@type': 'Person',
      name: 'Orkhan Farmanli'
    },
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency: currency,
      availability: app.isReady
        ? 'https://schema.org/InStock'
        : 'https://schema.org/PreOrder'
    },
    ...(aggregateRating && { aggregateRating }),
    featureList: app.features.map(f => f.title).join(', '),
    softwareRequirements: app.requirements.os
  }
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Barware',
    url: BASE_URL,
    logo: `${BASE_URL}/assets/favicon/apple-touch-icon.png`,
    description: 'Menu bar apps for your Mac',
    founder: {
      '@type': 'Person',
      name: 'Orkhan Farmanli'
    }
  }
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Barware.io',
    url: BASE_URL,
    description: 'Menu bar apps for your Mac',
    author: {
      '@type': 'Person',
      name: 'Orkhan Farmanli'
    },
    publisher: {
      '@type': 'Person',
      name: 'Orkhan Farmanli'
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${BASE_URL}/apps?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  }
}

type BreadcrumbItem = {
  name: string
  url: string
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }
}
