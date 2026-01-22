'use client'

import Image from 'next/image'
import { Cormorant_Garamond, Lora } from 'next/font/google'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '700'] })
const lora = Lora({ subsets: ['latin'] })

interface BreakfastSpotProps {
    name: string
    description: string
    imageSrc?: string
    location?: string
    hours?: string
    index: number
}

const BreakfastSpotCard: React.FC<BreakfastSpotProps> = ({ name, description, imageSrc, location, hours, index }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`${cormorantGaramond.className} flex flex-col items-center bg-white p-4 sm:p-6 rounded-lg shadow-lg border border-gray-300`}
        >
            {imageSrc && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                    className="relative h-48 sm:h-64 w-full mb-4 overflow-hidden rounded-lg bg-gray-200"
                >
                    <Image
                        src={imageSrc}
                        alt={name}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="transition-transform duration-300 hover:scale-105"
                        unoptimized={imageSrc.includes('storage.googleapis.com') && (imageSrc.includes('Signature=') || imageSrc.includes('GoogleAccessId='))}
                    />
                </motion.div>
            )}
            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                className={`${lora.className} text-2xl sm:text-3xl font-light text-gray-800 mb-2 sm:mb-4 text-center`}
            >
                {name}
            </motion.h3>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                className="text-[20px] sm:text-[22px] text-gray-600 mb-4 sm:mb-6 text-center"
            >
                {description}
            </motion.p>
            {location && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                    className="text-[18px] text-gray-500 mb-2 text-center"
                >
                    {location}
                </motion.p>
            )}
            {hours && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                    className="text-[18px] text-gray-500 text-center"
                >
                    {hours}
                </motion.p>
            )}
        </motion.div>
    )
}

interface BreakfastSpotsSectionProps {
    spots: {
        name: string
        description: string
        imageSrc?: string
        location?: string
        hours?: string
    }[]
}

export function BreakfastSpotsSection({ spots }: BreakfastSpotsSectionProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className={`${cormorantGaramond.className} bg-gray-50 py-16`}>
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl text-center mb-8 font-bold"
                >
                    Breakfast Spots
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center text-[22px] text-gray-700 mb-12 max-w-3xl mx-auto"
                >
                    Start your day right at these recommended breakfast spots near Hotel Daleese.
                </motion.p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {spots.map((spot, index) => (
                        <BreakfastSpotCard
                            key={spot.name}
                            {...spot}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
