import catBarImage from '@/public/assets/catbar.png'
import dogBarImage from '@/public/assets/dogbar.png'
import barMarksImage from '@/public/assets/barmarks.png'
import reddBarImage from '@/public/assets/reddbar.png'
import { AppType } from '@/types'

export const apps: AppType[] = [
    {
        name: "ReddBar",
        description: "A Read-Only Reddit Client for Your Mac's Menu Bar.",
        color: "bg-[#FFD1D1]",
        appStoreLink: "https://apps.apple.com/us/app/reddbar-menu-bar-feeds/id6739960301?mt=12",
        linkText: "Get on App Store",
        isReady: true,
        icon: reddBarImage,
        slug: "reddbar",
        features: [
            {
                title: "Read-only experience",
                description: "No login or signup needed."
            },
            {
                title: "Minimalist menu bar design",
                description: "Access Reddit anytime, without opening a browser."
            },
            {
                title: "Customize your subreddits",
                description: "Add your favorite communities for quick access (Free: up to 3 subreddits)."
            },
            {
                title: "Basic sorting",
                description: "Browse by hot and new posts in the free version."
            },
            {
                title: "Pro: Unlimited subreddits",
                description: "Add and browse as many subreddits as you want."
            },
            {
                title: "Pro: Advanced sorting",
                description: "Sort posts by hot, new, top, rising, and more."
            },
            {
                title: "Pro: Unlimited refreshes",
                description: "Refresh your feed as often as you like."
            },
            {
                title: "Pro: Unlimited scroll",
                description: "Keep scrolling through posts without any limitations."
            }
        ],
        requirements: {
            os: "macOS 13.0 or later",
            processor: "Apple Silicon or Intel processor",
            memory: "50 MB",
            storage: "50 MB available space"
        },
        screenshots: [],
        pricing: {
            price: "Free",
            type: "one-time",
            trial: "Pro version available for $3.99 (can change depending on the region)"
        },
        privacyPolicy: {
            lastUpdated: "Dec 20, 2024",
            sections: [
                {
                    title: "Information We Don't Collect",
                    content: [
                        "ReddBar does not collect, store, or transmit any personal information.",
                        "All data is stored locally on your device.",
                        "We have no access to any information about your usage of the app."
                    ]
                },
                {
                    title: "Third-Party Services",
                    content: [
                        "ReddBar may utilize third-party APIs for the latest news feeds. Your interactions with these services are subject to their respective privacy policies."
                    ]
                },
                {
                    title: "Changes to This Policy",
                    content: [
                        "We may update our privacy policy periodically. Any changes will be posted on this page."
                    ]
                }
            ]
        },
        testimonials: []
    },
    {
        name: "BarMarks",
        description: "Bookmarks in your Menu Bar.",
        color: "bg-[#FFE8E3]",
        appStoreLink: "https://apps.apple.com/app/barmarks/id6739710035?mt=12",
        linkText: "Get on App Store",
        isReady: true,
        icon: barMarksImage,
        slug: "barmarks",
        features: [
            {
                title: "Works Fully Offline",
                description: "Access and manage your bookmarks without needing an internet connection."
            },
            {
                title: "Privacy-Focused",
                description: "Your data stays secure—no tracking or third-party access."
            },
            {
                title: "Drag & Drop Support",
                description: "Save links instantly by dragging them to the menu bar icon."
            },
            {
                title: "Seamless Bookmark Import",
                description: "Effortlessly import your bookmarks from Safari or Chrome."
            },
            {
                title: "Auto Sync Bookmarks",
                description: "Automatically fetch and sync bookmarks from Safari and Chrome at your set interval."
            },
            {
                title: "Menu Bar Quick Access",
                description: "Access your favorite bookmarks instantly from the macOS menu bar."
            },
            {
                title: "Custom Categories & Tags",
                description: "Personalize your bookmarks with categories and tags for quick access."
            },
            {
                title: "Powerful Search & Filtering",
                description: "Find bookmarks in seconds with advanced search."
            },
            {
                title: "Browser Assignment",
                description: "Open bookmarks in the browser of your choice for ultimate flexibility."
            },
            {
                title: "Export as JSON",
                description: "Save bookmarks as a JSON file for backups or custom use cases."
            },
            {
                title: "Color Coding",
                description: "Use colors to visually organize and distinguish bookmarks."
            },
            {
                title: "Lightweight & Beautiful Design",
                description: "A sleek, minimalist app that blends seamlessly with macOS."
            }
        ],
        requirements: {
            os: "macOS 13.0 or later",
            processor: "Apple Silicon or Intel processor",
            memory: "~50 MB",
            storage: "2 MB available space"
        },
        screenshots: [], // Add screenshots when available
        pricing: {
            price: "$4.99",
            type: "one-time",
            trial: "(can change depending on the region)"
        },
        privacyPolicy: {
            lastUpdated: "Dec 20, 2024",
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
        },
        testimonials: [
            {
                content: "Simple yet powerful app which is easy to use, supports quick imports from Safari and Chrome, and is conveniently accessible right from the macOS menu bar. Highly recommend 🙌",
                author: "MuradSofi",
                rating: 5,
                header: "Highly recommend",
                source: "App Store Review"
            },
            {
                content: "The app is fantastic! So many little features that are really well thought out... Categories and colors for clarity, a dark mode. Great! I love it!",
                author: "webwrk",
                rating: 5,
                header: "The app you didn't know you needed",
                source: "App Store Review"
            },
            {
                content: "It's best bookmarks app I have ever seen.",
                author: "FiruzcanHaciyev",
                rating: 5,
                header: "Awesome",
                source: "App Store Review"
            },
            {
                content: "Great app for organizing bookmarks! The clean UI and quick navigation make it efficient.",
                author: "h.gerayzade",
                rating: 5,
                header: "Great!",
                source: "App Store Review"
            },
            {
                content: "Links that I use constantly I store here. Such a useful app.",
                author: "BladeRoll",
                rating: 5,
                header: "Simple, yet much needed!",
                source: "App Store Review"
            }
        ],
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
        testimonials: [],
        privacyPolicy: {
            lastUpdated: "Dec 20, 2024",
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
        testimonials: [],
        privacyPolicy: {
            lastUpdated: "Dec 20, 2024",
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
    }
]

export const favApps = apps
    .slice(0, 4) // Only take the first 4 apps
    .map(app => ({
        name: app.name,
        description: app.description,
        color: app.color,
        appStoreLink: app.appStoreLink,
        linkText: app.linkText,
        isReady: app.isReady,
        icon: app.icon,
        slug: app.slug
    })) 