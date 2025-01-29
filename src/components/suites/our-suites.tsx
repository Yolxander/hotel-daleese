'use client'

import { Cormorant_Garamond } from 'next/font/google'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '700'] })

export function OurSuitesComponent() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0])

  return (
      <motion.section
          ref={sectionRef}
          className="bg-gray-50 py-24 md:pt-[300px] pt-[200px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
      >
        <motion.div
            className="container mx-auto px-4"
            style={{ opacity, y }}
        >
          <motion.h2
              className={`${cormorantGaramond.className} text-5xl md:text-6xl text-center mb-8`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
          >
            Our Suites
          </motion.h2>
          <motion.p
              className={`${cormorantGaramond.className} text-[25px] text-center text-gray-700 mx-auto`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
          >
            There are three (3) unique studio suites located on our well-maintained manicured property. Contact us for group rates.
          </motion.p>
        </motion.div>
      </motion.section>
  )
}
