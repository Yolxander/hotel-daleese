'use client'

import { Lora } from 'next/font/google'
import Image from 'next/image'
import { Navbar } from './Navbar'

const lora = Lora({ subsets: ['latin'] })

export function HeroWithNavbarComponent() {
  return (
      <div className="relative h-screen w-full overflow-hidden">
        <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bed%20suite%203-pVgueIl1Vk5hCjvzxu854gnfgM41B9.jpg"
            alt="Boutique hotel room with wooden slatted headboard and wicker lamps"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />

        <Navbar />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className={`${lora.className} mb-4 text-4xl font-light md:text-5xl lg:text-6xl text-center`}>
            Boutique Hotel in the Heart of Uvita
          </h1>
          <div className="mb-8 h-px w-1/4 bg-white" />
          <p className={`${lora.className} mb-8 text-xl font-light italic md:text-2xl text-center`}>
            Eccentric • Privacy • Comfort
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
