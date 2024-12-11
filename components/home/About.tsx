import { Button } from "@/components/ui/button"
import Link from "next/link"

export function About() {
  return (
    <section id="about" className="container mx-auto px-4 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About Barware</h2>
        <p className="text-gray-600 mb-8">
          At Barware, we&apos;re passionate about creating innovative MenuBar applications that enhance your MacOS experience.
          Our team of developers and designers work tirelessly to craft tools that seamlessly integrate into your workflow,
          boosting productivity and adding a touch of fun to your daily computing tasks.
        </p>
        <Link href="/about">
          <Button className="bg-[#FF5D41] hover:bg-[#ff4724] text-white rounded-full">
            Learn More About Us
          </Button>
        </Link>
      </div>
    </section>
  )
} 