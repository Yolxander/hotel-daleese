'use client'

import { Cormorant_Garamond } from 'next/font/google'

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400'] })

export function CostaRicaExperiencesIntroComponent() {
  return (
    <section className={`bg-gray-100 py-16 ${cormorantGaramond.className}`}>
      <div className="container mx-auto px-4">
        <p className="text-center text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto">
          Experience what the southern coast of Costa Rica has to offer! Our hotel is in close proximity of many local attractions and popular tours. Upon booking your stay, kindly let us know if you would like to add one of our suggested once in a lifetime experiences below.
        </p>
      </div>
    </section>
  )
}