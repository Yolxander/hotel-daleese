'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Cormorant_Garamond } from 'next/font/google'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '700'] })

export function HotelHomeSectionComponent() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0])

    return (
        <section ref={ref} className="relative h-[600px] overflow-hidden">
            <motion.div
                style={{ y }}
                className="absolute inset-0"
            >
                <Image
                    src="https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/67336fd10e763.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=ooMM1Dv5u4XefO8EwiDzFAK7FMtNmv2bvlc%2BAqNYzU7hTR6KK7FbOdhNMCvM27WTbgU5znSzzBA4VLean%2B9a%2B1%2BPaMzsgqyPSGt9sh5CCpttNxUOkz%2B9dCpMBPxHcr%2FObOw2F76j5bGWqtt9HDjEZ%2BmUGWqeY7bg1jHI%2FauBU4du0wrRb7HQ9WQ0Hw2CDJ%2FWKQKzvnQM%2F7j9sRNZhlKHlv6lbn9uVkze4cS%2BHQY2ddADrHuSqx3lgpUDX2e5W1VzlqlSsY9pf1j%2F8JOyei2vspCjbCah6Qn8ZyGMjiBw7zDIVnbxH2vidY5ivICSB8G496M2eN3ELYxdKD1GhGLCKQ%3D%3D"
                    alt="Tropical hotel pool area with lush vegetation and outdoor dining"
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="100vw"
                    quality={100}
                    priority
                    unoptimized={true}
                />
            </motion.div>
            <motion.div
                style={{ opacity }}
                className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white px-4"
            >
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={`${cormorantGaramond.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center`}
                >
                    Our Hotel is Your Home
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className={`${cormorantGaramond.className} text-[20px] md:text-[25px] text-center max-w-3xl mb-8`}
                >
                    Hotel Daleese is your home away from home. We are committed to offering our guests a unique and relaxing experience. Get to know your hosts better here.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <Link
                        href="/our-story"
                        className={`${cormorantGaramond.className} bg-white text-black px-8 py-3 text-xl rounded hover:bg-black hover:text-white transition-colors`}
                    >
                        Our Story
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    )
}