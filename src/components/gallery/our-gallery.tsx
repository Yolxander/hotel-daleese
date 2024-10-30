'use client'

import { Lora } from 'next/font/google'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const lora = Lora({ subsets: ['latin'] })

export function OurGalleryComponent() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    }

    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    }

    return (
        <motion.section
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-gray-50 py-6 md:pt-[250px] pt-[200px]"
        >
            <div className="container mx-auto px-4">
                <motion.h2
                    variants={titleVariants}
                    className={`${lora.className} text-5xl md:text-6xl text-center mb-8`}
                >
                    Our Gallery
                </motion.h2>
            </div>
        </motion.section>
    )
}