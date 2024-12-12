import catBarImage from '@/public/assets/catbar.png'
import dogBarImage from '@/public/assets/dogbar.png'
import barMarksImage from '@/public/assets/barmarks.png'
import { AppType } from '@/types'

export const apps: AppType[] = [
    {
        name: "CatBar",
        description: "Your daily dose of cute cat GIFs in your Menu Bar.",
        color: "bg-[#FFE8E3]",
        appStoreLink: "https://apps.apple.com/app/catbar/id1644003590",
        isReady: true,
        icon: catBarImage
    },
    {
        name: "BarMarks",
        description: "Bookmarks in your Menu Bar.",
        color: "bg-[#FFE8E3]",
        appStoreLink: "#",
        linkText: "Get it on the App Store",
        isReady: true,
        icon: barMarksImage
    },
    {
        name: "DogBar",
        description: "Your daily dose of cute dog GIFs in your Menu Bar.",
        color: "bg-[#FFE8E3]",
        appStoreLink: "#",
        linkText: "Coming Soon",
        isReady: false,
        icon: dogBarImage
    },
]

export const favApps = [
    {
        name: "CatBar",
        description: "Your daily dose of cute cat GIFs in your Menu Bar.",
        color: "bg-[#FFE8E3]",
        appStoreLink: "https://apps.apple.com/app/catbar/id1644003590",
        isReady: true,
        icon: catBarImage
    },
    {
        name: "BarMarks",
        description: "Bookmarks in your Menu Bar.",
        color: "bg-[#FFE8E3]",
        appStoreLink: "#",
        isReady: true,
        icon: barMarksImage
    },
    {
        name: "DogBar",
        description: "Your daily dose of cute dog GIFs in your Menu Bar.",
        color: "bg-[#FFE8E3]",
        appStoreLink: "#",
        linkText: "Coming Soon",
        isReady: false,
        icon: dogBarImage
    }
] 