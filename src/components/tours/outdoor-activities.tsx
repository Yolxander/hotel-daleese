'use client'

import Image from 'next/image'
import { Cormorant_Garamond } from 'next/font/google'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400'] })

const activities = [
  {
    title: "Zip Lining",
    image: "https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/uploads/Casa%20Turul/Tours%20&%20Attractions/671f237c11d48.jpeg",
    description: "Experience the longest zip line in Central America with El Santuario Canopy Adventure Tours."
  },
  {
    title: "Horseback Riding",
    image: "https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/uploads/Casa%20Turul/Tours%20&%20Attractions/671f237b88018.jpeg",
    description: "Experienced or inexperienced riders can enjoy horseback riding on the Pacific Coast near Punta Uvita. Sunset and Waterfall Tours are available."
  },
  {
    title: "Kayak, SUP & Surf",
    image: "https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/uploads/Casa%20Turul/Tours%20&%20Attractions/671f237963de4.jpeg",
    description: "Just a short distance from Uvita, enjoy your favourite water activities with stunning views of nature, animals and birds in Dominical."
  },
  {
    title: "Whale Watching",
    image: "https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/uploads/Casa%20Turul/Tours%20&%20Attractions/671f2379e36ce.jpeg",
    description: "Uvita is known for whale watching. During the months of July to September, you can see humpback whales!"
  },
  {
    title: "Scuba Diving",
    image: "https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/uploads/Casa%20Turul/Tours%20&%20Attractions/671f237a351cd.jpeg",
    description: "Calling all water enthusiasts! Take a plunge in the Pacific Ocean with a Scuba Diving adventure in Uvita."
  },
  {
    title: "ATV Tours",
    image: "https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/uploads/Casa%20Turul/Tours%20&%20Attractions/671f237a6fcd2.jpeg",
    description: "Feeling adventurous? Pair adrenaline with a view and you have the perfect ATV tour."
  },
  {
    title: "Snorkeling",
    image: "https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/uploads/Casa%20Turul/Tours%20&%20Attractions/671f237acd9a0.jpeg",
    description: "A classic water activity perfect for any swimmer. See some of Uvita's extraordinary sea creatures with a Snorkeling Tour."
  },
  {
    title: "Animal Sanctuary",
    image: "https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/uploads/Casa%20Turul/Tours%20&%20Attractions/671f237b2005e.jpeg",
    description: "Discover all the wildlife Uvita has by visiting the Animal Sanctuary just down the street from the hotel."
  }
]

export function OutdoorActivitiesComponent() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
      <section className={`bg-white py-16 ${cormorantGaramond.className}`}>
        <div className="container mx-auto px-4">
          <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl text-center text-black mb-12"
          >
            Outdoor Activities in Uvita & Surrounding Areas
          </motion.h2>
          <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {activities.map((activity, index) => (
                <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    className="bg-gray-200 text-black p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <motion.div
                      className="relative w-48 h-48 mx-auto mb-4"
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2 }
                      }}
                  >
                    <Image
                        src={activity.image}
                        alt={activity.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-full"
                        unoptimized={activity.image.includes('storage.googleapis.com') && activity.image.includes('Signature=')}
                    />
                  </motion.div>
                  <h3 className="text-[22px] font-semibold text-center mb-2">{activity.title}</h3>
                  <p className="text-[20px] text-center">{activity.description}</p>
                </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
  )
}