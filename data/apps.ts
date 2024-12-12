import catBarImage from '@/public/assets/catbar.png'
import dogBarImage from '@/public/assets/dogbar.png'
import barMarksImage from '@/public/assets/barmarks.png'
import barTactoeImage from '@/public/assets/bartactoe.png'
import { AppType } from '@/types'

export const apps: AppType[] = [
    {
        name: "CatBar",
        description: "Your daily dose of cute cat GIFs in your Menu Bar.",
        color: "bg-[#FFE8E3]",
        appStoreLink: "https://apps.apple.com/app/catbar/id1644003590",
        linkText: "Coming soon",
        isReady: false,
        icon: catBarImage
    },
    {
        name: "BarMarks",
        description: "Bookmarks in your Menu Bar.",
        color: "bg-[#FFE8E3]",
        appStoreLink: "#",
        linkText: "Coming soon",
        isReady: false,
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
    {
        name: "BarTacToe",
        description: "Challenge the computer to a game of Tic-Tac-Toe.",
        color: "bg-[#FFE8E3]",
        appStoreLink: "#",
        linkText: "Coming Soon",
        isReady: false,
        icon: barTactoeImage
    },
]

export const favApps = [
    {
        name: "CatBar",
        description: "Your daily dose of cute cat GIFs in your Menu Bar.",
        color: "bg-[#FFE8E3]",
        appStoreLink: "#",
        linkText: "Coming Soon",
        isReady: false,
        icon: catBarImage
    },
    {
        name: "BarMarks",
        description: "Bookmarks in your Menu Bar.",
        color: "bg-[#FFE8E3]",
        appStoreLink: "#",
        linkText: "Coming Soon",
        isReady: false,
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