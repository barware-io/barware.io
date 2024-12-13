'use client'

interface AppLinkProps {
  href: string
  isReady: boolean
  children: React.ReactNode
}

export function AppLink({ href, isReady, children }: AppLinkProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center px-6 py-3 rounded-lg text-white ${
        isReady ? 'bg-black hover:bg-gray-800' : 'bg-gray-400 cursor-not-allowed'
      }`}
      onClick={(e) => !isReady && e.preventDefault()}
    >
      {children}
    </a>
  )
} 