'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Cormorant_Garamond } from 'next/font/google'

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400'] })

export function LiveLikeALocalComponent() {
  return (
    <section className={` flex flex-col md:flex-row min-h-screen ${cormorantGaramond.className}`}>
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">Live like a local</h2>
        <div className="space-y-6 text-lg">
          <p>
            Costa Rica is a beautiful and diverse country located in Central America. It is known for its beautiful rainforests, stunning beaches, colorful culture, and home of the best pineapples and coffee in the world!
          </p>
          <p>
            Costa Rica also offers a variety of <Link href="#" className="text-blue-600 hover:underline">outdoor activities</Link>, ranging from surfing and snorkeling to hiking and birdwatching.
          </p>
          <p>
            Hotel Daleese is located in Southern Costa Rica in Puntarenas Province, which is home to Uvita, Dominical, Ojochal and many other towns! Live like a true Tico (a Costa Rican local) with many shops, beaches, and restaurants close by. Be sure to check out our recommendations below!
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7243-Af5nvQL4oHVFaZj6lE6lbo9Bc5gMpU.jpg"
          alt="Seba's bar interior with neon sign, tropical decor, and patrons at the counter"
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
    </section>
  )
}