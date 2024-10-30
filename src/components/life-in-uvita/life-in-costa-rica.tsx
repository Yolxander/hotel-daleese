'use client'

import { Lora } from 'next/font/google'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const lora = Lora({ subsets: ['latin'], weight: ['400', '700'] })

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
                    backgroundImage: "url('https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Live%20in%20Uvita/671ed0ecd880b.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761608813&Signature=jCp5dgKrfx4d%2FkGKpw3fbx0qpIblBu7J6mPNtGI2HDtgthSL%2Fwl7hRk%2Bmiaih10RMNcVOBH2qSihTGDOdkCxgeoH9gWdEFoflc9%2B0%2B8jiAne0grI9SumXlZj3RojDcI%2BwICfmd%2BgH2UuZi7Tl5aC5Afmyi4Fx8f4PrYbX8gqSztM%2F66qT0dKLBpMZPch6aj3R0xleriaBvvt4zq%2BIhQ1ZcxFBGPX9FCfC330fZRAxvHSMbWx7bEEUpUtg9BKKKsPTzJ8uy5XKQgNNhQBqsvkwphSP%2B80cMj7i%2BamvcD4LTuS8mThfvhVWFV6izQeovoUluxhGl%2FJ17JIR3EIWjtozQ%3D%3D')",
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
                    className={`${lora.className} text-lg sm:text-xl md:text-[22px] max-w-3xl mx-auto italic`}
                >
                    Conveniently located in the heart of Uvita, Hotel Daleese is steps away from
                    stunning beaches, unique dining experiences and more.
                </motion.p>
            </div>
        </section>
    )
}