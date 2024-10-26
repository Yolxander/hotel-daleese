'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Cormorant_Garamond } from 'next/font/google'

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '700'] })

export function LifeInUvitaComponent() {
  return (
    <section className={`${cormorantGaramond.className} py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto`}>
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">Life in Uvita</h2>
          <p className="text-lg md:text-xl mb-4 text-gray-600">
            Located on the South Pacific of Costa Rica, Uvita is known for its whale watching, stunning beaches, and greener landscapes.
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-600">
            Hotel Daleese is in close proximity of Catarata Waterfall Uvita and the Whale Tail National Park.
          </p>
          <Link 
            href="/discover-uvita" 
            className="inline-block border-2 border-gray-800 text-gray-800 px-8 py-3 text-xl rounded hover:bg-gray-800 hover:text-white transition-colors"
          >
            Discover Uvita
          </Link>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/59c5d488-9e8e-481d-97b7-a7864ca3cec1-cgHQLzcvkUlq7mTWcASJLLbvWP4JjF.jpg"
              alt="Lush green forest with waterfall in Uvita, Costa Rica"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-lg"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-asset-3JLZYcfflSE6dkaP6szN8iKpvF3517.jpeg"
              alt="Aerial view of beautiful coastline in Uvita, Costa Rica"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}