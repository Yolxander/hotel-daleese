'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Lora, Cormorant_Garamond } from 'next/font/google'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const lora = Lora({ subsets: ['latin'], weight: ['400'] })
const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400'] })

export function LiveLikeALocalComponent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
      <section ref={ref} className={`flex flex-col md:flex-row min-h-screen ${lora.className}`}>
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center gap-6"
        >
          <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-7xl mb-6"
          >
            Live like a local
          </motion.h2>
          <div className={`space-y-6 text-[22px] ${cormorantGaramond.className}`}>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
              Costa Rica is a beautiful and diverse country located in Central America. It is known for its beautiful rainforests, stunning beaches, colorful culture, and home of the best pineapples and coffee in the world!
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
              Costa Rica also offers a variety of <Link href="#" className="text-blue-600 hover:underline">outdoor activities</Link>, ranging from surfing and snorkeling to hiking and birdwatching.
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
              Hotel Daleese is located in Southern Costa Rica in Puntarenas Province, which is home to Uvita, Dominical, Ojochal and many other towns! Live like a true Tico (a Costa Rican local) with many shops, beaches, and restaurants close by. Be sure to check out our recommendations below!
            </motion.p>
          </div>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 h-[50vh] md:h-screen relative overflow-hidden"
        >
          <motion.div
              initial={{ scale: 1.2 }}
              animate={isInView ? { scale: 1 } : { scale: 1.2 }}
              transition={{ duration: 1.2 }}
              className="w-full h-full"
          >
            <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7243-Af5nvQL4oHVFaZj6lE6lbo9Bc5gMpU.jpg"
                alt="Seba's bar interior with neon sign, tropical decor, and patrons at the counter"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
            />
          </motion.div>
        </motion.div>
      </section>
  )
}