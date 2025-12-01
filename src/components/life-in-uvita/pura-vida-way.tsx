'use client'

import Image from 'next/image'
import { Cormorant_Garamond } from 'next/font/google'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400'] })

export function PuraVidaWayComponent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
      <section ref={ref} className={`bg-gray-100 flex items-center justify-center align-center ${cormorantGaramond.className} text-black`}>
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center md:items-start gap-8">
          <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 relative aspect-[4/3] bg-red-10 h-[75vh] rounded overflow-hidden"
          >
            <motion.div
                initial={{ scale: 1.2 }}
                animate={isInView ? { scale: 1 } : { scale: 1.2 }}
                transition={{ duration: 1.2 }}
                className="w-full h-full"
            >
              <Image
                  src="https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Live%20in%20Uvita/671ee2aed3819.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=FiXxgIOh0pIAw7VuHWUGBiUVvya6rSaXPXsWxJahL6r1391wzd250XPCJ9h4ICz5GZBYb%2B2kARUZGEdZifB%2BerJ%2FkBJCsCDsRSjsDB2Y6TDjHRJP7RlUAEPJVxOj2qdjZnC99x3b6fbG2XAFq7cVLOypA%2BfkeGVvaVoQsqHYTBERSKftTFdXIE61uE3kYYPSsZfbLrGNUIkFVt9y25Meq2nAGT1t7wmUoFAjYvfflZedX3BlVXo1aDaInVeVAWTylJIwwoUEpUdMmek2bho3Ol3NUPbA%2FI9EkpFfYxVE1Gt38P0RBMsDBnn%2BMD130iwzPxaGIdjdwP6qgIIUlr1qBA%3D%3D"
                  alt="Hand making shaka sign over ocean waves"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
              />
            </motion.div>
          </motion.div>
          <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              className="h-[75vh] w-full md:w-[40vw] text-black space-y-6 flex flex-col justify-center"
          >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-light"
            >
              The <span className="italic">Pura Vida</span> Way
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-[22px] md:ml-[10px]"
            >
              Pura Vida is more than just a slogan in Costa Rica — it’s a way of life. This beloved phrase embodies the relaxed, joyful spirit that defines the culture, embraced by locals and newcomers alike.
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-[22px] md:ml-[10px]"
            >
              Living Pura Vida means prioritizing your physical and mental well-being over the hustle and bustle of everyday life. It’s about savoring the moment, letting go of the rush, and finding happiness in simplicity.
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-[22px] md:ml-[10px]"
            >
              You’ll hear <span className="italic">Pura Vida</span> everywhere in Costa Rica — from Ticos and expats alike. Whether it’s a friendly greeting, a warm farewell, or a way to make you feel at home, it’s the perfect expression of Costa Rica’s welcoming and carefree vibe.
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-[22px] md:ml-[10px]"
            >
              Come experience <span className="italic">Pura Vida</span> for yourself — it’s not just a phrase; it’s a lifestyle.
            </motion.p>
          </motion.div>
        </div>
      </section>
  )
}
