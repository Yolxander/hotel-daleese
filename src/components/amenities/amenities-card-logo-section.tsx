'use client'

import { Cormorant_Garamond } from 'next/font/google'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '700'] })

interface AmenityCardProps {
    title: string
    description: React.ReactNode
    index: number
    inView: boolean
}

const AmenityCard: React.FC<AmenityCardProps> = ({ title, description, index, inView }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="mb-8 text-center"
    >
        {/* Logo at the top */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex justify-center mb-4"
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/6742797b4e785.png?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763945723&Signature=f%2Faz0uZppksTNhuApLMxiiy1v2W3hFJfVI5%2BvPC%2Bxc%2Fyv2BSx0yvdckVnUHi9Tl%2Fu5eEhHDFYtVTI1wq15SU3L7a%2B0JcNClqm9wjpsErjWSrO0dJxX5tW8i%2BfxAztrH3zPWslZgkNAgZiyNac%2BJJjDTIL4QvyvFwgr2MhyPqWHSPO5HSrJ6YmLUXSexx9P%2BC8zUJpdt96Taq6o9hU2uR7J9H0Edtnh7RrInB5J0GM4TjU9K5sWiLMMhH%2FkbPwsENv4rXXvQuFVdhTEdpymbOJfthUS1vtEGVGfXxE4I7w4VLB78qrZisUOAmkWy4GImAs3jvju3lxkhmPhd8%2FRtIKQ%3D%3D"
                alt="Restaurant Logo"
                className="w-[150px] h-[150px] object-contain"
            />
        </motion.div>
        <motion.h3
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
            className={`${cormorantGaramond.className} text-2xl md:text-[24px] font-bold mb-4`}
        >
            {title}
        </motion.h3>
        <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
            className="text-gray-700 text-[22px] font-medium"
        >
            {description}
        </motion.p>
    </motion.div>
)

interface AmenitiesSectionProps {
    amenities: {
        title: string
        description: string
    }[]
}

export const AmenitiesCardLogoSectionComponent: React.FC<AmenitiesSectionProps> = ({ amenities }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className={`${cormorantGaramond.className} max-w-6xl mx-auto px-4 pt-2m  pb-6`}>
            <div className="flex flex-wrap justify-center gap-8">
                <div className="flex flex-col md:flex-row md:w-full gap-8">
                    {amenities.slice(0, 2).map((amenity, index) => (
                        <div key={amenity.title} className="flex-1">
                            <AmenityCard
                                title={amenity.title}
                                description={amenity.description}
                                index={index}
                                inView={isInView}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
