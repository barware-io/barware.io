import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Mail } from 'lucide-react'
import Link from "next/link"

export default function About() {
  return (
    <div className="min-h-screen bg-[#FDFCFC]">
      <Header />
      
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Us</h1>
          
          <div className="prose max-w-none space-y-8">
            <section>
              <p className="text-gray-700 text-lg leading-relaxed">
                At Barware, we are passionate about creating intuitive and innovative MacOS applications that simplify your everyday tasks and enhance your digital experience. Founded in 2024, we have committed ourselves to delivering software solutions that are not only functional but also beautifully designed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-700">
                Our mission is to empower users with tools that make their workflows more efficient and enjoyable. We believe in blending cutting-edge technology with user-centric design to craft applications that you can rely on and love to use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <strong className="min-w-[120px] inline-block">Innovation:</strong>
                  <span>Continuously pushing the boundaries of what&apos;s possible in software development.</span>
                </li>
                <li className="flex items-start">
                  <strong className="min-w-[120px] inline-block">Quality:</strong>
                  <span>Delivering applications that meet the highest standards of performance and reliability.</span>
                </li>
                <li className="flex items-start">
                  <strong className="min-w-[120px] inline-block">User-Centric:</strong>
                  <span>Putting our users at the heart of everything we create.</span>
                </li>
                <li className="flex items-start">
                  <strong className="min-w-[120px] inline-block">Transparency:</strong>
                  <span>Building trust with our users through clear communication and ethical practices.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Why Choose Barware?</h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <strong className="min-w-[120px] inline-block">Expertise:</strong>
                  <span>Our team consists of experienced developers and designers who are dedicated to excellence.</span>
                </li>
                <li className="flex items-start">
                  <strong className="min-w-[120px] inline-block">Simplicity:</strong>
                  <span>We prioritize ease of use, ensuring that our applications are accessible to everyone.</span>
                </li>
                <li className="flex items-start">
                  <strong className="min-w-[120px] inline-block">Support:</strong>
                  <span>We&apos;re here to assist you every step of the way, providing reliable customer support to address your needs.</span>
                </li>
              </ul>
            </section>

            <section>
              <p className="text-gray-700 text-lg">
                Join the Barware community and experience the difference our MacOS applications can make. Whether you&apos;re streamlining your workflow, managing your projects, or simply exploring new ways to be productive, Barware is here to help you achieve more.
              </p>
            </section>

            <section className="bg-white p-8 rounded-2xl shadow-sm mt-12">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                Have questions or feedback? We&apos;d love to hear from you!
              </p>
              <div className="flex items-center space-x-2 text-gray-700">
                <Mail className="w-5 h-5 text-[#FF5D41]" />
                <a href="mailto:support@barware.io" className="hover:text-[#FF5D41]">
                  support@barware.io
                </a>
              </div>
              <p className="text-gray-700 mt-2">
                Azerbaijan, Baku
              </p>
              <div className="mt-6">
                <Link href="/contact" className="text-[#FF5D41] hover:text-[#ff4724] font-medium">
                  Send us a message →
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
} 