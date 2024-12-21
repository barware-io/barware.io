import catBarImage from '@/public/assets/catbar.png'
import dogBarImage from '@/public/assets/dogbar.png'
import barMarksImage from '@/public/assets/barmarks.png'
import barTactoeImage from '@/public/assets/bartactoe.png'
import { AppType } from '@/types'

export const apps: AppType[] = [
    {
        name: "BarMarks",
        description: "Bookmarks in your Menu Bar.",
        color: "bg-[#FFE8E3]",
        appStoreLink: "#",
        linkText: "Coming Soon",
        isReady: false,
        icon: barMarksImage,
        slug: "barmarks",
        features: [
            {
                title: "Bookmark Management",
                description: "Easily manage your bookmarks with a simple interface"
            },
            {
                title: "Quick Access",
                description: "Access your bookmarks quickly from the menu bar"
            },
            {
                title: "Organize",
                description: "Organize your bookmarks into categories for easy navigation"
            },
            {
                title: "Customizable",
                description: "Color code your bookmarks to make them easier to identify"
            }
        ],
        requirements: {
            os: "macOS 13.0 or later",
            processor: "Apple Silicon or Intel processor",
            memory: "50 MB",
            storage: "50 MB available space"
        },
        screenshots: [], // Add screenshots when available
        pricing: {
            price: "TBD",
            type: "one-time"
        },
        privacyPolicy: {
            lastUpdated: "March 15, 2024",
            sections: [
                {
                    title: "Information We Don't Collect",
                    content: [
                        "BarMarks does not collect, store, or transmit any personal information.",
                        "All data is stored locally on your device.",
                        "We have no access to any information about your usage of the app."
                    ]
                },
                {
                    title: "Changes to This Policy",
                    content: [
                        "We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page."
                    ]
                }
            ]
        }
    },
    {
        name: "CatBar",
        description: "Your daily dose of cute cat GIFs in your Menu Bar.",
        color: "bg-[#FFE8E3]",
        appStoreLink: "#",
        linkText: "Coming Soon",
        isReady: false,
        icon: catBarImage,
        slug: "catbar",
        features: [
            {
                title: "Fresh Cat GIFs Daily",
                description: "Get a new adorable cat GIF every day, right in your menu bar"
            },
            {
                title: "Save Favorites",
                description: "Save your favorite GIFs to view them later"
            },
            {
                title: "Share Instantly",
                description: "Share cute cat GIFs directly to Messages, Mail, or copy to clipboard"
            },
            {
                title: "Minimal Design",
                description: "Clean and simple interface that stays out of your way"
            }
        ],
        requirements: {
            os: "macOS 13.0 or later",
            processor: "Apple Silicon or Intel processor",
            memory: "50 MB",
            storage: "50 MB available space"
        },
        screenshots: [], // Add screenshots when available
        pricing: {
            price: "Free",
            type: "one-time"
        },
        privacyPolicy: {
            lastUpdated: "March 15, 2024",
            sections: [
                {
                    title: "Information We Don't Collect",
                    content: [
                        "CatBar does not collect, store, or transmit any personal information.",
                        "All GIFs are stored locally on your device.",
                        "We have no access to any information about your usage of the app."
                    ]
                },
                {
                    title: "Third-Party Services",
                    content: [
                        "CatBar uses the Giphy API to fetch cat GIFs.",
                        "Your interaction with the Giphy service is subject to Giphy's own privacy policy."
                    ]
                },
                {
                    title: "Changes to This Policy",
                    content: [
                        "We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page."
                    ]
                }
            ]
        }
    },
    {
        name: "DogBar",
        description: "Your daily dose of cute dog GIFs in your Menu Bar.",
        color: "bg-[#FFE8E3]",
        appStoreLink: "#",
        linkText: "Coming Soon",
        isReady: false,
        icon: dogBarImage,
        slug: "dogbar",
        features: [
            {
                title: "Fresh Dog GIFs Daily",
                description: "Get a new adorable dog GIF every day, right in your menu bar"
            },
            {
                title: "Save Favorites",
                description: "Save your favorite GIFs to view them later"
            },
            {
                title: "Share Instantly",
                description: "Share cute dog GIFs directly to Messages, Mail, or copy to clipboard"
            },
            {
                title: "Minimal Design",
                description: "Clean and simple interface that stays out of your way"
            }
        ],
        requirements: {
            os: "macOS 13.0 or later",
            processor: "Apple Silicon or Intel processor",
            memory: "50 MB",
            storage: "50 MB available space"
        },
        screenshots: [], // Add screenshots when available
        pricing: {
            price: "TBD",
            type: "one-time"
        },
        privacyPolicy: {
            lastUpdated: "March 15, 2024",
            sections: [
                {
                    title: "Information We Don't Collect",
                    content: [
                        "DogBar does not collect, store, or transmit any personal information.",
                        "All data is stored locally on your device.",
                        "We have no access to any information about your usage of the app."
                    ]
                },
                {
                    title: "Changes to This Policy",
                    content: [
                        "We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page."
                    ]
                }
            ]
        }
    },
    {
        name: "BarTacToe",
        description: "Challenge the computer to a game of Tic-Tac-Toe in your Menu Bar.",
        color: "bg-[#FFE8E3]",
        appStoreLink: "#",
        linkText: "Coming Soon",
        isReady: false,
        icon: barTactoeImage,
        slug: "bartactoe",
        features: [
            {
                title: "Classic Game",
                description: "Play the classic game of Tic-Tac-Toe in your menu bar"
            },
            {
                title: "Challenge",
                description: "Challenge the computer to a game of Tic-Tac-Toe"
            },
            {
                title: "Minimal Design",
                description: "Clean and simple interface that stays out of your way"
            },
            {
                title: "Fun",
                description: "Enjoy the fun of Tic-Tac-Toe in your menu bar"
            }
        ],
        requirements: {
            os: "macOS 13.0 or later",
            processor: "Apple Silicon or Intel processor",
            memory: "50 MB",
            storage: "50 MB available space"
        },
        screenshots: [], // Add screenshots when available
        pricing: {
            price: "TBD",
            type: "one-time"
        },
        privacyPolicy: {
            lastUpdated: "March 15, 2024",
            sections: [
                {
                    title: "Information We Don't Collect",
                    content: [
                        "BarTacToe does not collect, store, or transmit any personal information.",
                        "All data is stored locally on your device.",
                        "We have no access to any information about your usage of the app."
                    ]
                },
                {
                    title: "Changes to This Policy",
                    content: [
                        "We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page."
                    ]
                }
            ]
        }
    },
]

export const favApps = apps.map(app => ({
    name: app.name,
    description: app.description,
    color: app.color,
    appStoreLink: app.appStoreLink,
    linkText: app.linkText,
    isReady: app.isReady,
    icon: app.icon,
    slug: app.slug
})) 