'use client'

import { Lora } from 'next/font/google'
import Image from 'next/image'

const lora = Lora({ subsets: ['latin'] })

export function HeroWithNavbarComponent() {
  return (
      <div className="relative h-screen w-full overflow-hidden">
        <Image
            src="https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/uploads/Casa%20Turul/Home/671c830dbadbf.png"
            alt="Boutique hotel room with wooden slatted headboard and wicker lamps"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
            unoptimized={true}
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className={`${lora.className} mb-4 text-4xl font-light md:text-5xl lg:text-6xl text-center`}>
            Boutique Hotel in the Heart of Uvita
          </h1>
          <div className="mb-8 h-px w-1/4 bg-white" />
          <p className={`${lora.className} mb-8 text-xl font-light italic md:text-2xl text-center`}>
            Tranquil • Privacy • Comfort
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-6 text-center">
          <p className={`${lora.className} mx-auto max-w-4xl text-[20px] text-gray-800`}>
            Welcome to Hotel Daleese. Located on the Southern Pacific Coast of Costa Rica, our family-owned boutique hotel is situated in Uvita, Puntarenas. We look forward to your visit!
          </p>
        </div>
      </div>
  )
}
