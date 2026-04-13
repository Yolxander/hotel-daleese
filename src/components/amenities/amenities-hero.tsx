'use client'

import Image from 'next/image'
import { Cormorant_Garamond } from 'next/font/google'
import { motion } from 'framer-motion'

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '700'] })

export function AmenitiesHeroComponent() {
    return (
        <div className="relative h-[60vh] md:h-[95vh] w-full overflow-hidden">
            <motion.div
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="relative h-full w-full"
            >
                <Image
                    src="https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/uploads/Casa%20Turul/About/671d219ef18e7.jpg"
                    alt="Luxurious pool area with tropical surroundings"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    priority
                    unoptimized
                    referrerPolicy="no-referrer"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 bg-black bg-opacity-30"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className={`${cormorantGaramond.className} text-4xl md:text-6xl lg:text-7xl font-light text-center px-4`}
                >
                    Our Amenities & Services
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-4 h-px w-24 bg-white origin-center"
                />
            </div>
        </div>
    )
}