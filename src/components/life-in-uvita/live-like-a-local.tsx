'use client'

import Image from 'next/image'
import { Lora, Cormorant_Garamond } from 'next/font/google'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const lora = Lora({ subsets: ['latin'], weight: ['400'] })
const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400'] })

export function LiveLikeALocalComponent() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className={`flex flex-col md:flex-row min-h-screen ${lora.className}`}>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center gap-6"
            >
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-5xl lg:text-7xl mb-6"
                >
                    Live Like a Local
                </motion.h2>
                <div className={`space-y-6 text-[22px] ${cormorantGaramond.className}`}>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Costa Rica is a land of breathtaking diversity, nestled in the heart of Central America. Famous for its lush rainforests, pristine beaches, vibrant culture, and the world’s finest pineapples and coffee, it’s a destination that captures the heart of every traveler.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Adventure awaits around every corner, with activities like surfing, snorkeling, hiking, and birdwatching offering endless opportunities to connect with nature and explore the great outdoors.
                    </motion.p>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full md:w-1/2 h-[50vh] md:h-screen relative overflow-hidden"
            >
                <motion.div
                    initial={{ scale: 1.2 }}
                    animate={isInView ? { scale: 1 } : { scale: 1.2 }}
                    transition={{ duration: 1.2 }}
                    className="w-full h-full"
                >
                    <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7243-Af5nvQL4oHVFaZj6lE6lbo9Bc5gMpU.jpg"
                        alt="Seba's bar interior with neon sign, tropical decor, and patrons at the counter"
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}
