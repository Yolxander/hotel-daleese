'use client'

import Image from 'next/image'
import { Cormorant_Garamond, Lora } from 'next/font/google'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '700'] })
const lora = Lora({ subsets: ['latin'] })

interface FeatureCardProps {
    title: string
    description: string
    learnMoreLink: string
    imageSrc: string
    index: number
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, learnMoreLink, imageSrc, index }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`${cormorantGaramond.className} flex flex-col items-center bg-white p-4 sm:p-6 rounded-lg shadow-lg border border-gray-300`}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                className="relative h-48 sm:h-64 w-full mb-4 overflow-hidden rounded-lg bg-gray-200"
            >
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="transition-transform duration-300 hover:scale-105"
                    unoptimized={imageSrc.includes('storage.googleapis.com') && (imageSrc.includes('Signature=') || imageSrc.includes('GoogleAccessId='))}
                />
            </motion.div>
            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                className={`${lora.className} text-2xl sm:text-3xl font-light text-gray-800 mb-2 sm:mb-4 text-center`}
            >
                {title}
            </motion.h3>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                className="text-[20px] sm:text-[22px] text-gray-600 mb-4 sm:mb-6 text-center"
            >
                {description}
            </motion.p>
            <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                href={learnMoreLink}
                className="inline-block border-2 border-gray-800 text-gray-800 px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg rounded hover:bg-black hover:text-white transition-colors"
            >
                Learn more
            </motion.a>
        </motion.div>
    )
}

export function FeatureCards() {
    const features = [
        {
            title: "Accommodations",
            description: "Our suites are uniquely designed & sleep up to 2 guests. Casa Daleese, a dedicated house on the property that sleeps 4 adults.",
            learnMoreLink: "/suites",
            imageSrc: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673de7f57a89b.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=LHOVO1DhDwsZ5YPT0YDY3ghEWuvAGSv0WMNx9g4LD7iUU6t%2FG7aj990xnC%2FYHhf%2F7MHNfFkmCWqfcDHYGM0jABHXtVj66h6PJ1UOKto4PdQcSyMnYkFqB4UdlIWExrSNPGPvLk%2FD56zNUwETEePbKeLSipZviuwQnIuG8lXaei8istLdQ%2BHT8NxjOaAsk%2FHYrfSLx3imjCHcwWFWhry%2FMVK%2BzLLMon40CT%2BIul64kW2d1pxRbSaC30vCM2mvcS0gWJA%2F7btm4AbpDhPv0aMMThvebzMkGhvH4QVa0vorINuTXAwc0fn9DG9vSgshNtj0WeyYJIsoI%2BZL%2BTa%2BR2wPxw%3D%3D",
        },
        {
            title: "Amenities",
            description: "Guests can enjoy our gorgeous pool, Hotel Daleese spa room & more!",
            learnMoreLink: "/amenities",
            imageSrc: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673eaf00ea361.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=aAIY7cvpZ0wdhMpvhphB0xs7RW1CCTknG7ng2HGdbqyFLvsHFTfLLozeuBiuCo7iKUXbMtGx3eiDX9cwelJ%2BWrr3Ddb6%2FO6TwlH8dmiXMO8K485RSrXOzvcCbUDnhMldm37s%2FFVRV68GebTsRATdN64og9TgyDdkH6vGEkTf%2Fqm1o%2FBcZO%2FYSNRBBEEHfq8Es%2BmnmOWyNstVEHuXaPbrCXLeVSp6XXe8JAuXnUd3bpf9JCQx480WsUV1DqFn%2Bwt%2FZK6U%2BnmMILIggRysIMI%2BZAac4O6txqd1V0RqQ%2BfjUE1iPJ5R5AXAv5OPMohbKHJBxFu52NL3jdZIUoXem1Qc0g%3D%3D",
        },
        {
            title: "Tours & Activities",
            description: "Discover what Costa Rica has to offer during your stay!",
            learnMoreLink: "/tours",
            imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-asset-s7zal6cEjEwXJm7mJeUrIGJT775KnL.jpeg",
        }
    ]

    return (
        <section className="bg-gray-100 py-8 sm:py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={feature.title}
                            {...feature}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}