'use client'

import Image from 'next/image'
import { Cormorant_Garamond } from 'next/font/google'
import { motion } from 'framer-motion'

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '700'] })

export function AmenitiesHeroComponent() {
    return (
        <div className="relative h-[60vh] md:h-[95vh] w-full overflow-hidden">
            <motion.div
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="relative h-full w-full"
            >
                <Image
                    src="https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/About/671d219ef18e7.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761498399&Signature=hm0lHR2DylZ7ztLnpHqdk%2FbOa3mHKZrsyNkwvCePdh0hJmKXr7vPBaL8ISWkFzBC234njh9Zo8YB0k%2BF4Ik9oRAPhaCqKUGJ%2Bm%2BUvZPgHDPTIa2N1yx5qyi9ZFqDy9b5aXL%2F6ni%2BlIHP%2B50wwh1s6Wiucj4eWr8tI2VzH6gATluj9bdrlPv%2FrzRrd3EzMSDPQne1B8rhAA3cf7FkIaFmYDJ6Ojp%2BTTPm3qyv%2Fy%2FH47mOp3Co1oDEUm%2FSYAMpKApO0pkp9MMOnoTEbvi%2BvioWWGsWqRquGbBHJBVfJ%2BsrPzioLZXqrFNe2QyAmNutHa0YFVf3XTkuLWOQsBfDY0NFTQ%3D%3D"
                    alt="Luxurious pool area with tropical surroundings"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    priority
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 bg-black bg-opacity-30"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className={`${cormorantGaramond.className} text-4xl md:text-6xl lg:text-7xl font-light text-center px-4`}
                >
                    Our Amenities & Services
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-4 h-px w-24 bg-white origin-center"
                />
            </div>
        </div>
    )
}