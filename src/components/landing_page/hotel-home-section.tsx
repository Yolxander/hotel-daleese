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
                    src="https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/67336fd10e763.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1762960210&Signature=TqR36aeJCJf9z5wXj%2BaQTRZhS4oDVzILqBuOZfOzWCS4hJSmiHox11aGHRrtB600seSp8s0LhterEEIsCYVLdV649sMWNk0SuVlFo8%2BYBFUo%2FT4vtOSImspNSuHUjmCqOi9WQoiy3%2B9%2Bc4r6fl6rJv0ab5ZGIrOCaxvpwx6%2B1WcIEERadp%2B3op71017z6K%2FcE3Y1Q4SLHSBd4heOcsWPqIlXfNgY3%2FgVZYcPZK8bEJnTyYU%2BMbMMo4%2F0UJqwtaENxR537zedKOP2GVIOMV9L7yLjwHN5KKpcmkqgeYH13E1pbYoR2HV%2FnQxrGLrd9MeLlXQm5nF87HnrRuQKDAHpTA%3D%3D"
                    alt="Tropical hotel pool area with lush vegetation and outdoor dining"
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="100vw"
                    quality={100}
                    priority
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