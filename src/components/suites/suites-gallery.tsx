'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Cormorant_Garamond } from 'next/font/google'

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '700'] })

export function SuitesGalleryComponent() {
    const suites = [
        {
            id: 'casa',
            name: 'Casa Daleese',
            image: 'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0880.jpg',
            alt: 'Casa Daleese - 2 Bedroom House with Private Office',
        },
        {
            id: 1,
            name: 'Suite 1',
            image: 'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/default/uploads/673de7f757eec.jpg',
            alt: 'Exterior view of Suite 1 with pink walls and tropical plants',
        },
        {
            id: 2,
            name: 'Suite 2',
            image: 'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/default/uploads/673e436317fc5.jpeg',
            alt: 'Interior view of Suite 2 kitchen with terrazzo countertop',
        },
        {
            id: 3,
            name: 'Suite 3',
            image: 'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/default/uploads/673e4d0c2e3b8.jpg',
            alt: 'Interior view of Suite 3 bedroom with wooden slat wall',
        },
        {
            id: 4,
            name: 'Suite 4',
            image: 'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/default/uploads/673eab71dbb9c.jpg',
            alt: 'Interior view of Suite 4 bedroom with wooden slat wall',
        },
    ]

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.3,
                            },
                        },
                    }}
                >
                    {suites.map((suite) => (
                        <Link href={suite.id === 'casa' ? '/suites/casa-daleese' : `/suites/suite-${suite.id}`} key={suite.id}>
                            <motion.div
                                className={`flex flex-col items-left cursor-pointer group ${cormorantGaramond.className}`}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 0.6,
                                            ease: 'easeOut',
                                        },
                                    },
                                }}
                            >
                                {/* Centering and Scaling Adjustments */}
                                <div className="relative overflow-hidden flex justify-center items-center h-[60vh] bg-gray-100 rounded-sm">
                                    <Image
                                        src={suite.image}
                                        alt={suite.alt}
                                        width={600}
                                        height={600}
                                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                                        unoptimized={suite.image.includes('storage.googleapis.com') && suite.image.includes('Signature=')}
                                    />
                                </div>
                                <motion.p
                                    className="mt-4 text-black text-xl group-hover:text-primary transition-colors duration-200"
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: {
                                            opacity: 1,
                                            transition: {
                                                delay: 0.2,
                                                duration: 0.4,
                                            },
                                        },
                                    }}
                                >
                                    {suite.name}
                                </motion.p>
                            </motion.div>
                        </Link>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
