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