'use client'

import { Cormorant_Garamond } from 'next/font/google'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400'] })

export function CostaRicaExperiencesIntroComponent() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut'
            }
        }
    }

    return (
        <section className={`bg-gray-100 py-16 ${cormorantGaramond.className}`}>
            <div className="container mx-auto px-4">
                <motion.p
                    ref={ref}
                    variants={variants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="text-center text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto"
                >
                    Experience what the southern coast of Costa Rica has to offer! Our hotel is in close proximity of many local attractions and popular tours. Upon booking your stay, kindly let us know if you would like to add one of our suggested once in a lifetime experiences below.
                </motion.p>
            </div>
        </section>
    )
}