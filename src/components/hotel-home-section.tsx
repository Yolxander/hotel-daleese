'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Cormorant_Garamond } from 'next/font/google'

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '700'] })

export function HotelHomeSectionComponent() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-EEDB3FA3-872F-4F24-9BE0-04B7286A4481-dNnTtJWCzTvDp3jwIac8okma1qX9xX.jpeg"
        alt="Tropical hotel pool area with lush vegetation and outdoor dining"
        fill
        style={{ objectFit: 'cover' }}
        sizes="100vw"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white px-4">
        <h2 className={`${cormorantGaramond.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center`}>
          Our Hotel is Your Home
        </h2>
        <p className={`${cormorantGaramond.className} text-xl md:text-2xl text-center max-w-3xl mb-8`}>
          Hotel Daleese is your home away from home. We are committed to offering our guests a unique and relaxing experience. Get to know your hosts better here.
        </p>
        <Link 
          href="/our-story"
          className={`${cormorantGaramond.className} bg-white text-[#0F758C] px-8 py-3 text-xl rounded hover:bg-[#0F758C] hover:text-white transition-colors`}
        >
          Our Story
        </Link>
      </div>
    </section>
  )
}