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
                    src="https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/About/671d219ef18e7.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=IiXm9jOgAAiF229TrRT3TuWX7J7LHGaH3wPEI8cgDE9kaETEUY752fVh%2BuQTlaWrV4guDvSw64kXSZtLzUS%2Bxl4uDj8CM701RPQdSKktyEVrsuVe8X9YUJ9nO6c9SIFTuOr3%2FbsOq2nBz3fqGaM1GGOh430mzP3H%2FdKP%2B%2FAqx7OvG44c%2BPPrKZZyjbmu7PREz%2Bz%2FOC69RUhpRYWvXok1X6xBI8fKU1lWUvz23G5ivJ9JAa3xz6p8ou2rNiqm0355P%2B85jNjbcgapFB7E38A6fd8pjPd973X9VxJ%2B3Q0%2BFby4YT9%2FVcPjENMAwYjkgqIkhgBp4pmL8NgeUF20bqZYKQ%3D%3D"
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