'use client'

import Image from 'next/image'
import { Cormorant_Garamond } from 'next/font/google'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400'] })

const restaurants = [
  {
    name: "Sebas",
    description: "Our top recommendation for food and drinks. Chef Sebastien is originally from Toronto, Canada, and relocated to Uvita to open his dream restaurant, Sebas."
  },
  {
    name: "Los Laureles",
    description: "Conveniently located steps away from Hotel Daleese, be sure to check out this hidden jungle gem in Uvita. Our guests always have great things to say!"
  },
  {
    name: "Indomitos Cafe & Bar",
    description: "One of the best veggie/vegan restaurants in Uvita. Be sure to check out their social media for weekly events and specials!"
  },
  {
    name: "Citrus",
    description: "If you're looking for a gourmet or romantic dining experience, be sure to visit Citrus Restaurant in Ojochal, Puntarenas."
  },
  {
    name: "Cafe Vivo",
    description: "Our go to for anything coffee, sweets, and breakfast! Just located steps away from the hotel. Perfect for a morning stroll."
  },
  {
    name: "Uvita Gastro Park",
    description: "Great food spot for families and large groups, there is something for everyone here! Bonus - Live Music Fridays!"
  }
]

export function RestaurantRecommendationsComponent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-20%" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        ease: "easeOut"
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
      <section ref={ref} className={`relative ${cormorantGaramond.className}`}>
        <div className="absolute inset-0 w-full h-full">
          <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0bb727_6c526323cba142119c3ed48c417ab1e5~mv2-RQuD2d9gUJbbaqbZU4hBA04ebfikdl.jpeg"
              alt="Tropical restaurant interior with ocean view"
              fill
              className="object-cover"
              priority
          />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>
        <div className={`container relative mx-auto px-4 py-16 md:py-24 ${cormorantGaramond.className}`}>
          <motion.h2
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={textVariants}
              className="text-4xl md:text-5xl lg:text-6xl italic text-left mb-12 text-white"
          >
            Good food, memorable experiences
          </motion.h2>
          <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {restaurants.map((restaurant, index) => (
                <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    className="backdrop-blur-sm bg-white/10 p-6"
                >
                  <motion.h3
                      variants={textVariants}
                      className={`text-3xl font-semibold mb-4 text-white ${cormorantGaramond.className}`}
                  >
                    {restaurant.name}
                  </motion.h3>
                  <motion.p
                      variants={textVariants}
                      className={`text-gray-100 text-[24px] font-bold leading-relaxed ${cormorantGaramond.className}`}
                  >
                    {restaurant.description}
                  </motion.p>
                </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
  )
}