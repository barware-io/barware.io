import { StaticImageData } from "next/image"

export interface AppType {
  name: string
  description: string
  color: string
  appStoreLink: string
  linkText?: string
  isReady: boolean
  icon: any
} 