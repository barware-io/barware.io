import { StaticImageData } from "next/image"

export type AppType = {
  name: string
  description: string
  color: string
  appStoreLink: string
  linkText: string
  isReady: boolean
  icon: StaticImageData
  slug: string
  features: {
    title: string
    description: string
  }[]
  requirements: {
    os: string
    processor: string
    memory: string
    storage: string
  }
  screenshots: {
    src: StaticImageData
    alt: string
  }[]
  pricing?: {
    price: string
    type: 'one-time' | 'subscription'
    trial?: string
  }
  privacyPolicy: {
    lastUpdated: string
    sections: {
      title: string
      content: string[]
    }[]
  }
} 