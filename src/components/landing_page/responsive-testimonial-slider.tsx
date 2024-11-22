"use client"

import { useState, useEffect, useCallback } from 'react'
import { Cormorant_Garamond } from 'next/font/google'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '700'] })

interface Testimonial {
  quote: string
  author: string
}

const testimonials: Testimonial[] = [
  {
    quote: "This place is a dream. I love small family owned and live on properties. This place is amazing so close to all the great places in town. The rooms so clean and beautiful. I highly recommend",
    author: "Kevin M."
  },
  {
    quote: "Very beautiful and friendly place. A few rooms, which makes is very calm and nice. The pool has a great temperature and is super clean. rooms have nice furniture, are clean and comfortable.",
    author: "Verena H."
  },
  {
    quote: "Got connected to this place last minute and Rosa and Dave were really accommodating. It is the perfect place to stay if you're traveling solo and want some down time!",
    author: "Liz D."
  },
  {
    quote: "This was the best accommodations one could ask for. From their hospitality to the rooms and everything in between. They went above and beyond to satisfy any requests and make sure we're taken care of. We can't wait to stay there again. Thank you for everything!",
    author: "Chase H."
  }
]

export function ResponsiveTestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [viewportSize, setViewportSize] = useState('desktop')

  const handleResize = useCallback(() => {
    if (window.innerWidth < 640) {
      setViewportSize('mobile')
    } else if (window.innerWidth < 1024) {
      setViewportSize('tablet')
    } else {
      setViewportSize('desktop')
    }
  }, [])

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])

  const getVisibleCount = () => {
    switch (viewportSize) {
      case 'mobile': return 1
      case 'tablet': return 2
      default: return 3
    }
  }

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const visibleCount = getVisibleCount()

  return (
      <section className={`${cormorantGaramond.className} py-16 px-4 max-w-7xl mx-auto overflow-x-hidden`}>
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Read what our guests have to say:
        </h2>
        <div className="relative overflow-hidden">
          <motion.div
              className="flex transition-all duration-300 ease-in-out"
              style={{
                width: `${100 * testimonials.length / visibleCount}%`,
                transform: `translateX(-${(currentIndex * 100) / testimonials.length}%)`
              }}
          >
            {testimonials.map((testimonial, index) => (
                <div
                    key={index}
                    className={`flex-shrink-0 ${
                        viewportSize === 'mobile'
                            ? 'w-full'
                            : viewportSize === 'tablet'
                                ? 'w-1/2'
                                : 'w-1/3'
                    } px-4`}
                >
                  <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-gray-100 p-6 rounded-lg shadow-sm h-full flex flex-col justify-between max-w-[85vw]"
                  >
                    <p className="text-[20px] mb-4">&#34;{testimonial.quote}&#34;</p>
                    <p className="text-right font-bold text-[22px]">{testimonial.author}</p>
                  </motion.div>
                </div>
            ))}
          </motion.div>
        </div>
        <div className="flex justify-center space-x-4 mt-8 mb-4">
          <button
              onClick={prevTestimonial}
              className="bg-gray-800 text-white rounded-full p-2 hover:bg-black transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
              onClick={nextTestimonial}
              className="bg-gray-800 text-white rounded-full p-2 hover:bg-black transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="text-center mt-4">
          <a
              href="https://www.google.com/search?q=Hotel+Daleese+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[20px] inline-block border-2 border-gray-800 text-gray-800 px-6 py-2 rounded hover:bg-black hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
          >
            See Our Google Reviews
          </a>
        </div>
      </section>
  )
}

