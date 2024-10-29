'use client'

import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'] })

export function OurSuitesComponent() {
  return (
    <section className="bg-gray-50 py-24 md:pt-[300px] pt-[200px]">
      <div className="container mx-auto px-4">
        <h2 className={`${lora.className} text-5xl md:text-6xl text-center mb-8`}>
          Our Suites
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto">
          There are three (3) unique studio suites located on our well-maintained manicured property. Contact us for group rates.
        </p>
      </div>
    </section>
  )
}