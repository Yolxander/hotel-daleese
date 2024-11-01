'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Cormorant_Garamond } from 'next/font/google'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '700'] })

export function LifeInUvitaComponent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
      <section ref={ref} className={`${cormorantGaramond.className} py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto`}>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-1/2 lg:pr-12 mb-8 lg:mb-0"
          >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800"
            >
              Life in Uvita
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg md:text-xl mb-4 text-gray-600"
            >
              Located on the South Pacific of Costa Rica, Uvita is known for its whale watching, stunning beaches, and greener landscapes.
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg md:text-xl mb-8 text-gray-600"
            >
              Hotel Daleese is in close proximity of Catarata Waterfall Uvita and the Whale Tail National Park.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link
                  href="/life-in-costa-rica"
                  className="inline-block border-2 border-gray-800 text-gray-800 px-8 py-3 text-xl rounded hover:bg-gray-800 hover:text-white transition-colors"
              >
                Discover Uvita
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full lg:w-1/2 relative"
          >
            <motion.div
                initial={{ scale: 0.8 }}
                animate={isInView ? { scale: 1 } : { scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden"
            >
              <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/59c5d488-9e8e-481d-97b7-a7864ca3cec1-cgHQLzcvkUlq7mTWcASJLLbvWP4JjF.jpg"
                  alt="Lush green forest with waterfall in Uvita, Costa Rica"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="rounded-lg"
              />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute -bottom-10 -left-10 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden"
            >
              <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-asset-3JLZYcfflSE6dkaP6szN8iKpvF3517.jpeg"
                  alt="Aerial view of beautiful coastline in Uvita, Costa Rica"
                  fill
                  sizes="(max-width: 640px) 128px, (max-width: 768px) 192px, 256px"
                  className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
  )
}