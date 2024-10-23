'use client'

import { useState } from 'react'
import { Cormorant_Garamond } from 'next/font/google'
import { ChevronLeft, ChevronRight } from 'lucide-react'

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
  }
]

export function GuestTestimonialsComponent() {
  const [currentPage, setCurrentPage] = useState(0)

  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % Math.ceil(testimonials.length / 3))
  }

  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3))
  }

  return (
    <section className={`${cormorantGaramond.className} py-16 px-4 max-w-7xl mx-auto`}>
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        Read what our guests have to say:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {testimonials.slice(currentPage * 3, (currentPage + 1) * 3).map((testimonial, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <p className="text-lg mb-4">"{testimonial.quote}"</p>
            <p className="text-right font-bold">{testimonial.author}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={prevPage}
          className="bg-gray-800 text-white rounded-full p-2 hover:bg-black transition-colors"
          aria-label="Previous testimonials"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextPage}
          className="bg-gray-800 text-white rounded-full p-2 hover:bg-black transition-colors"
          aria-label="Next testimonials"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="text-center">
        <a
          href="https://www.google.com/search?q=Hotel+Daleese+reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border-2 border-gray-800 text-gray-800 px-6 py-2 rounded hover:bg-black hover:text-white transition-colors"
        >
          See Our Google Reviews
        </a>
      </div>
    </section>
  )
}