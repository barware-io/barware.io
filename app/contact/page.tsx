import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Mail } from 'lucide-react'

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#FDFCFC]">
      <Header />
      
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-700">
              Have a question or feedback? We&apos;d love to hear from you.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <form className="space-y-6" action="https://formcarry.com/s/jxOt-rrrCcG" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5D41] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Your message here..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5D41] focus:border-transparent"
                  required
                ></textarea>
              </div>

              <Button 
                type="submit"
                className="w-full bg-[#FF5D41] hover:bg-[#ff4724] text-white rounded-full h-12 text-base"
              >
                <Mail className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          <div className="text-center mt-8 text-sm text-gray-600">
            <p>You can also reach us directly at{' '}
              <a href="mailto:support@barware.io" className="text-[#FF5D41] hover:text-[#ff4724]">
                support@barware.io
              </a>
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
} 