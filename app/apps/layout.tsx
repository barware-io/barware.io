import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

export default function AppsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#FDFCFC]">
      {children}
    </div>
  )
} 