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
                className="relative h-48 sm:h-64 w-full mb-4 overflow-hidden rounded-lg"
            >
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 hover:scale-105"
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
            description: "Our suites are uniquely designed & sleep up to 4 guests.",
            learnMoreLink: "/suites",
            imageSrc: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673de7f57a89b.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763646325&Signature=Dwk204G1gSMjZpm2RQbBcpXdTi5zfOQ13Wm1y8D8evSsBiw1fxv87eNHwbfOjva%2FmiBinlAjz%2BAi6%2FnOzAKnVUqf1S9RlzUxZ01ZotxdbhJuHXJjwRz4usyjLzXsILiTyffrineL8b6vsMT8zIKba%2BL27gh7gKBeLXiK0Kpz9I6F%2BPIYz1ib6VlmQBLkEQsB0tLIg2PIEFOIJSszNuac%2F5lLo5Dj9cNg0%2Fzlv6qoApubGnusPEbS9UIHkv7Jgh7inCyPYPdpogDh%2BGFB%2BTrrpij8fACo0BPbKTTOq2PdW%2Fi0BHCtf%2FyOqWWNcur%2Be5DbGkA%2F1elSlEjbOTG6339XFg%3D%3D",
        },
        {
            title: "Amenities",
            description: "Guests can enjoy our gorgeous pool, on-site massages & more!",
            learnMoreLink: "/amenities",
            imageSrc: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673eaf00ea361.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763697281&Signature=f5syksWOQXM1%2F3IzT05LBkJHzg%2F%2BiMVgcihUJxGzkmmlklmmKKE6oJYTdyy8jxLBgCekiu%2BGvQsPfzFCJMgAdPMpGLnEm3pVooOUD1iIU7%2FaZB%2Fn%2BIp0LyVsFTPf69VOgj%2BZESSi14wfpZs9vnFoFhefUE2f6fCafni3D%2FXVMt6S92ijHU316oQy2d0k58%2BijtpYLikpUUrKmL18sr%2BpH9C2hNriWB6eBGUqyk57i%2F6naqBrbWzPHDnWoAV9TNQal26%2BQiDuC67s4nodJtdKkSClJHoYgj%2FUMxloEqUu93IAVuCGEFrdOFNEPvTQ89%2FqJeaK7ov9tQaF4q5BplXBfw%3D%3D",
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