'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Cormorant_Garamond } from 'next/font/google'
import { motion } from 'framer-motion'

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '700'] })

export function TravelBlogPostComponent() {
  return (
      <section className={`container mx-auto px-4 py-16 ${cormorantGaramond.className} md:mt-[200px] mt-[50px] md:h-[90vh] h-[110vh]`}>
        <div className="flex flex-col md:flex-row md:gap-12">
          <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
          >
            <Image
                src="https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Blog/671fd74a7475b.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=ZZj9WnT2jzn1Cqn6iNFjYYUQHDad9CPy9lphGKiEXinT04cb4S5BkUMoZAb%2Bg4qz7HrUeNbrnd9chgFalifRop8Xd2gGveODVWxOBFE8KwCqf7EbOZQCylCzc1zkH%2BZJd%2BL17xbycTRXs7Z0r%2F%2BVa%2BeDUmu5C%2FNKCJ2Ye%2FwXdBquVuEjO9CCcvVb9tqEZapjlST9DJocXfPxx7xi5RIwcEqbhky7Ei3FwIdYqCHUEYtTm2yt0BZ%2B0qpe6vQtMDgZ%2B1Eej8X9YlEGWwq3hIO%2FUxd1doRIurKkonPbtfC2GQp3uPpJG2Y5N%2BPAp561s8XIrRCQt1qrgH%2BW93kHDMdr9A%3D%3D"
                alt="Person sitting on a car overlooking a mountain in Costa Rica"
                width={800}
                height={200}
                className="w-full md:h-[560px] h-[300px] object-cover"
            />
          </motion.div>
          <motion.div
              className="md:w-1/2 flex flex-col justify-center md:gap-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
                className="text-gray-500 mb-2 font-light text-[25px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
              2024-03-15
            </motion.p>
            <motion.h2
                className="md:text-5xl mb-4 text-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
            >
              When is the best time to travel to Costa Rica?
            </motion.h2>
            <motion.p
                className="mb-4 font-normal text-[21px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
            >
              The best time to travel to Costa Rica depends on your preferences and budget. Costa
              Rica offers two different seasons: Dry & Green seasons. Read our post to figure out
              which is best for you.
            </motion.p>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
            >
              <Link href={`/blog/best-time-to-travel-costa-rica`} className="text-black underline text-[20px] inline-block">
                <motion.span
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Read More
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
  )
}