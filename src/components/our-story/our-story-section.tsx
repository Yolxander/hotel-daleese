'use client'

import Image from 'next/image'
import { Cormorant_Garamond } from 'next/font/google'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '700'] })

export function OurStorySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
      <section className="bg-gray-100 flex items-center justify-center border b-6">
        <div className="w-[90%] h-full flex flex-col md:flex-row items-start justify-between py-12">
          <div ref={ref} className={`w-full md:w-1/2 pr-8 text-gray-700 min-h-[100vh] md:pt-[300px] pt-[100px] ${cormorantGaramond.className}`}>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="text-6xl md:text-5xl font-light mb-8"
            >
              Our Story
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6 text-[22px]"
            >
              Every dream starts with an idea.
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-6 font-semibold text-[22px] italic"
            >
              Hi, we’re Rosa and Dave, the proud owners of <strong>Hotel Daleese.</strong>
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-6 text-[20px]"
            >
              Our journey began in Canada, where Rosa spent over 20 years in commercial real estate, while Dave worked as a skilled plumber on residential and commercial projects for high-profile companies. Despite our success, we shared a dream: to create a space where hospitality and connection thrive.
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-6 text-[20px]"
            >
              With this vision in mind, we sold our home, our cottage, and nearly all our belongings, packing up our lives to embark on a new adventure with our two children in beautiful Uvita, Costa Rica.
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-6 text-[20px]"
            >
              Since arriving, we’ve poured our hearts into transforming Hotel Daleese into a welcoming haven. From thoughtful updates to creative changes, we’ve tailored every aspect of our boutique hotel to meet the evolving needs of our guests and the highest industry standards. We’re passionate about what we do, and we love being hands-on — greeting guests with a warm “good morning” and sending them off with a heartfelt “good evening.”
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mb-6 text-[20px]"
            >
              Our favorite part of this journey is meeting incredible guests from all around the world. Hearing your stories and sharing ours is what makes this life so fulfilling.
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mb-6 text-[20px]"
            >
              The name <em>Hotel Daleese</em> holds special meaning, as it’s inspired by our children, David and Mehleese, who are a huge part of our lives and this adventure.
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="mb-6 text-[20px]"
            >
              Living in Costa Rica has been nothing short of extraordinary. Learning a new language, embracing a new culture, and building a life in this breathtaking country has been an unforgettable experience. We wouldn’t trade it for anything. <strong>Pura Vida.</strong>
            </motion.p>
          </div>
          <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full md:w-1/2 space-y-4 mb-6 md:pt-[220px] pt-[50px]"
          >
            <Image
                src="https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Our%20Story/671daa5c98cab.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761533405&Signature=lLHACj%2FoK%2BSaquuNm%2BnkY2REJWuPtOh%2BmK98cjYeBrbMKwjXPMcnO8nTMY%2BfyrQ1iEktJ8UsDp0ZlozAfuGVQHxz0gBjdxuNeqUJfq4oMpwZ196KjNSXFxwlmyzl1GrF4LJZsG%2BdYnGyHIFoBOSHwVp%2Fwau%2BNBZvALNWUlAGD2i2fJ4KKEYROMPzrZ9ajE5Ji5382wfCYB2L4chg4QAcvrHM2FuH%2FWRSpjhNrEhuAkwND6e15bkhyxwMXqm%2Fem6Z4RanBXw%2F%2FBIzL96zYFtEPGcz5rWjFDvxuHFt3GOHCuR%2FzkCQ%2FfFJlwojRb5rsRN8jz8CFhLvn26n%2F8sVwEDkPw%3D%3D"
                alt="Rosa and Dave sitting in beach chairs"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
            />
            <Image
                src="https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Our%20Story/671daa5b951f7.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761533404&Signature=YwUIsRbcIAMFKSNyOIT769VrFI2XLixZNInT030xKPMW2oAt4GTiODrQNrNOQJU1zSuPXoBufHvsh4fIO1D%2B9VbptLIgNw%2BaU76o5nT4g8pQ0AfZzJoKM50Zl1oa9HRLtuS6MIczXuXckwfLT8c74Lhecvmu0KCjRqU8DsiUq9%2FNwGJzgp6SeCT8OgLx8Z4d6oMQwAkb%2FS6m2qYjGSgy9UpTofHnowiPsdZeHbFNOwySiMj4ykDNW257Yp2E6xb8ExVQ8oB8k8EQyrnfCbibIKxV3It5Az0KsS0wqW4pq50q1HNqVrRyMoPvIIc4Z6Wr%2BY2TVqDXkzj7p0qIjTBBLQ%3D%3D"
                alt="Hotel Daleese property"
                width={600}
                height={300}
                className="w-full h-auto object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </section>
  )
}