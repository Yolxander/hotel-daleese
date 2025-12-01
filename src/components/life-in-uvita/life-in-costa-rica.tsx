'use client'

import {Cormorant_Garamond, Lora} from 'next/font/google'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const lora = Lora({ subsets: ['latin'], weight: ['400', '700'] })
const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '700'] })
export function LifeInCostaRicaComponent() {
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
                    backgroundImage: "url('https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Live%20in%20Uvita/671ed0ecd880b.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=eCL7nogw38sGwWib2FbFf08Od0EUXnmnY4suNr2OX%2FfF6X6hVYB3QunyyMLwwQJ%2FvOSPVAfjz8yi1y1L9JUoujmoCf0UQipt30vAnFKIHNYohBuWG7zEstGo9suShTlZFIQA%2BV%2Bg2jkCkXoSmTbraMCx2MqPzrtdtKX7bt06VMvPvK2kWo%2F9AnlEwd%2FTwbM5VhCffOsDXUNkNjZPEoMptPkjRTj%2BB3zr7dKvGRso6vw%2BYbRzQGLQUvdIDFyzv%2BemUR2YTYfPeolg%2BSP8sSzFSMUWCe1z45yCGhBdRp7NFHYDG8NgaKvkNEdKUKXOSMPMooi02ubClFkSC%2Fs%2FOikw%2BQ%3D%3D')",
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
                    className={`${lora.className} text-4xl sm:text-5xl md:text-6xl font-serif mb-4`}
                >
                    Life in Costa Rica
                </motion.h1>
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="w-[205px] h-0.5 bg-white mx-auto mb-8"
                />
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className={`${cormorantGaramond.className} text-lg sm:text-xl md:text-[24px] max-w-3xl mx-auto italic`}
                >
                    Conveniently located in the heart of Uvita, Hotel Daleese is steps away from
                    stunning beaches, unique dining experiences and more.
                </motion.p>
            </div>
        </section>
    )
}