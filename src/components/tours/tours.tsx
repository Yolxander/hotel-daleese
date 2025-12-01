'use client'

import { Cormorant_Garamond } from 'next/font/google'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '700'] })

export function ToursComponent() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6])

    return (
        <section
            ref={ref}
            className="relative w-full pt-[100px] h-[110vh] bg-gray-100 flex items-center justify-center overflow-hidden"
        >
            <motion.div
                className="absolute inset-0 w-full h-full"
                style={{
                    backgroundImage: "url('https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Live%20in%20Uvita/671f1a8937870.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=Jy8AOhSgK2rDmfg6nFQdIsXnv15XYqAaGl%2Fz0QbHRxAlqnEaGA9Shq3t2htES1pbi8%2FHLwjmdNmvm7BkVMkWDoe%2FEGswEA8TgOf9UN9P%2FX2gO7z21OLMf53s%2BN%2B4hOP1w0%2FEJs7eW1srop5CSStkZ3VtwTTmdpAczhSYY0RdOuDSQ3vBkmlS5eCa2mZua9x%2BmO7cajN35Pk6Dz9kCcUijZrgI5NrJRXJOywMp4oC4HHek1dYLzeIsGgRSTZgXQ0m8TAPbdZPoproH9ueIF4IZYfX0QjN4bhXbfb5gurAOxnkfRZ3E6kmXILO7j%2FjDGm%2FvRF6Hsu7WTkTalmjMT7%2F8Q%3D%3D')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    y: backgroundY,
                    opacity
                }}
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 0.5 } : { opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 bg-black"
            />
            <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={`${cormorantGaramond.className} text-4xl sm:text-5xl md:text-6xl font-serif mb-4`}
                >
                    Tours & Attractions
                </motion.h1>
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="w-24 h-0.5 bg-white mx-auto mb-8"
                />
            </div>
        </section>
    )
}