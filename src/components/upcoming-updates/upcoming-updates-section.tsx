'use client'

import { Cormorant_Garamond } from 'next/font/google'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '700'] })

export function UpcomingUpdatesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
      <section className="bg-gray-100 flex items-center justify-center border b-6">
        <div className="w-[90%] h-full flex flex-col items-start justify-between py-12">
          <div ref={ref} className={`w-full text-gray-700 min-h-[100vh] md:pt-[300px] pt-[100px] ${cormorantGaramond.className}`}>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="text-6xl md:text-5xl font-light mb-8"
            >
              Upcoming Updates & Changes
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6 text-[22px]"
            >
              As part of our ongoing vision, we are constantly evolving Hotel Daleese through curated upgrades, new experiences, and thoughtful expansions designed to elevate guest comfort and connection.
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-6 text-[22px]"
            >
              Stay tuned for updates on our latest renovations, upcoming projects, and behind-the-scenes transformations. We&apos;re excited to share our journey of continuous improvement with you.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-6 text-[22px]"
            >
              <h2 className="text-3xl md:text-4xl font-light mb-4 mt-8">Current & Planned Projects</h2>
              <p className="mb-4 text-[22px]">
                Check back soon for detailed information about our upcoming improvements and renovations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
  )
}
