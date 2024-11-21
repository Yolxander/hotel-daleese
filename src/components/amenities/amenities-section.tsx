'use client'

import { Cormorant_Garamond } from 'next/font/google'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '700'] })

interface AmenityCardProps {
    title: string
    description: React.ReactNode
    index: number
    inView: boolean
}

const AmenityCard: React.FC<AmenityCardProps> = ({ title, description, index, inView }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="mb-8 text-center "
    >
        <motion.h3
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
            className={`${cormorantGaramond.className} text-2xl md:text-3xl font-bold mb-4`}
        >
            {title}
        </motion.h3>
        <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
            className="text-gray-700 text-[20px] font-medium"
        >
            {description}
        </motion.p>
    </motion.div>
)

export function AmenitiesSectionComponent() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const amenities = [
        {
            title: "Dine with Us",
            description: (
                <>
                    Eat freshly prepared food from our garden and local farmers. We
                    currently have a fixed dinner & breakfast menu with a unique course
                    each day of the week. Prepared fresh by Chef Rosa & Dave a la carte.
                </>
            )
        },
        {
            title: "Relax with Us",
            description: "Our home is your home. Enjoy our beautifully maintained outdoor pool surrounded by a green oasis. Bring your favourite book, or cocktail."
        },
        {
            title: "Ride with Us",
            description: "We want our guests to have a stress-free experience when booking with us. We would be happy to assist booking your private airport shuttle to and from the hotel. Car rentals? We can also help with that."
        },
        {
            title: "Focus on Yourself",
            description: "We have a network of excellent massage therapists and other bodywork professionals and would be happy to arrange an in-room treatment during your stay."
        }
    ]

    return (
        <section ref={ref} className={`${cormorantGaramond.className} max-w-6xl mx-auto px-4 py-16`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.9 }}
                className="text-center mb-16"
            >
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                    className="text-gray-700 text-[22px] leading-relaxed font-medium max-w-2xl mx-auto"
                >
                    During your stay, we encourage you to take full advantage of our property amenities and
                    services. We want our guests to feel at home. Our hotel offers free access to private parking
                    & wifi.
                </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
                {amenities.map((amenity, index) => (
                    <AmenityCard
                        key={amenity.title}
                        title={amenity.title}
                        description={amenity.description}
                        index={index}
                        inView={isInView}
                    />
                ))}
            </div>
        </section>
    )
}