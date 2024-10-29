'use client'

import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'] })

export function OurGalleryComponent() {
  return (
    <section className="bg-gray-50 py-24 md:pt-[300px] pt-[200px]">
      <div className="container mx-auto px-4">
        <h2 className={`${lora.className} text-5xl md:text-6xl text-center mb-8`}>
          Our Gallery
        </h2>
      </div>
    </section>
  )
}