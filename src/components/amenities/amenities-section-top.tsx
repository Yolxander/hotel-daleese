'use client'

import { Cormorant_Garamond } from 'next/font/google'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

// Import and configure the font
const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '700'] })

export const AmenitiesSectionTopComponent: React.FC = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

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
                    className="text-gray-700 text-[24px] leading-relaxed font-medium max-w-2xl mx-auto"
                >
                    During your stay, we encourage you to take full advantage of our property amenities and
                    services. We want our guests to feel at home. Our hotel offers free access to private parking
                    & wifi.
                </motion.p>
            </motion.div>
        </section>
    )
}
