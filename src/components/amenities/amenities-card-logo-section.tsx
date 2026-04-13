'use client'

import { Cormorant_Garamond } from 'next/font/google'
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
        className="mb-8 text-center"
    >
        {/* Logo at the top */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex justify-center mb-4"
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/default/uploads/6742797b4e785.png"
                alt="Restaurant Logo"
                className="w-[150px] h-[150px] object-contain"
                referrerPolicy="no-referrer"
            />
        </motion.div>
        <motion.h3
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
            className={`${cormorantGaramond.className} text-2xl md:text-[24px] font-bold mb-4`}
        >
            {title}
        </motion.h3>
        <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
            className="text-gray-700 text-[22px] font-medium"
        >
            {description}
        </motion.p>
    </motion.div>
)

interface AmenitiesSectionProps {
    amenities: {
        title: string
        description: string
    }[]
}

export const AmenitiesCardLogoSectionComponent: React.FC<AmenitiesSectionProps> = ({ amenities }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className={`${cormorantGaramond.className} max-w-6xl mx-auto px-4 pt-2m  pb-6`}>
            <div className="flex flex-wrap justify-center gap-8">
                <div className="flex flex-col md:flex-row md:w-full gap-8">
                    {amenities.slice(0, 2).map((amenity, index) => (
                        <div key={amenity.title} className="flex-1">
                            <AmenityCard
                                title={amenity.title}
                                description={amenity.description}
                                index={index}
                                inView={isInView}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
