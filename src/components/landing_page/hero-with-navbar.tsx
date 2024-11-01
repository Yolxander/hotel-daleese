'use client'

import Image from 'next/image'
import { Lora, Cormorant_Garamond } from 'next/font/google'
import { motion } from 'framer-motion'

const lora = Lora({ subsets: ['latin'] })
const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400'] })

export function HeroWithNavbarComponent() {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bed%20suite%203-pVgueIl1Vk5hCjvzxu854gnfgM41B9.jpg"
                alt="Boutique hotel room with wooden slatted headboard and wicker lamps"
                fill
                sizes="100vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                priority
            />
            <motion.div
                className="absolute inset-0 bg-black bg-opacity-30 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 md:px-8">
                <motion.h1
                    className={`${lora.className} mb-4 text-4xl font-light md:text-[42px] text-center`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Boutique Hotel in the Heart of Uvita
                </motion.h1>
                <motion.div
                    className="mb-4 h-[1px] w-[50vw] bg-white opacity-80"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                />
                <motion.p
                    className={`${lora.className} text-lg font-light italic md:text-2xl text-center`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    Eccentric • Privacy • Comfort
                </motion.p>
            </div>

            <motion.div
                className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-6 text-center"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
            >
                <p className={`${cormorantGaramond.className} mx-auto max-w-4xl text-[18px] md:text-[20px] text-gray-800`}>
                    Welcome to Hotel Daleese. Located on the Southern Pacific Coast of Costa Rica, our family-owned boutique hotel is situated in Uvita, Puntarenas. We look forward to your visit!
                </p>
            </motion.div>
        </div>
    )
}