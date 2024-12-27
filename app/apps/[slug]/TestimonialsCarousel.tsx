"use client"

import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'
import { Testimonial } from "@/types"

export function TestimonialsCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="flex-[0_0_100%] min-w-0"
            >
              <div className="px-8 md:px-16 text-center">
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FF5D41] text-[#FF5D41]" />
                  ))}
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-[#FF5D41] mb-4">
                  {testimonial.header}
                </h3>
                <p className="text-2xl md:text-3xl text-gray-800 mb-8 font-normal leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex flex-col items-center gap-3">
                  <div>
                    <p className="font-semibold text-lg text-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.source}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center gap-4 mt-12">
        <button
          className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-[#FF5D41] hover:text-white transition-all group shadow-sm"
          onClick={scrollPrev}
        >
          <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
        </button>
        
        <button
          className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-[#FF5D41] hover:text-white transition-all group shadow-sm"
          onClick={scrollNext}
        >
          <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
        </button>
      </div>
    </div>
  )
} 