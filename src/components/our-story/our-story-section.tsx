'use client'

import Image from 'next/image'
import Link from 'next/link'
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
              Every dream begins with an idea.
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-6 text-[22px]"
            >
              We're Rosa and Dave, the founders and owners of Hotel Daleese.
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-6 text-[22px]"
            >
              Our journey started in Canada, where Rosa spent over 20 years working in commercial real estate and hospitality-focused projects, while Dave built his career as a skilled plumber on residential and commercial developments. Although our careers were thriving, we shared a deeper vision — to create a place where thoughtful design, genuine hospitality, and meaningful connection come together.
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-6 text-[22px]"
            >
              With that vision guiding us, we took a leap of faith, sold our home and belongings, and relocated our family to beautiful Uvita, Costa Rica to bring Hotel Daleese to life.
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-6 text-[22px]"
            >
              From the beginning, we have been deeply involved in shaping every detail of the property — from renovations and design choices to guest experience and service standards. Today, Hotel Daleese continues to operate with the same care and attention through our dedicated on-site team, who share our commitment to warm, personalized hospitality.
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mb-6 text-[22px]"
            >
              What brings us the greatest joy is welcoming travelers from around the world and creating a space where guests feel relaxed, inspired, and at home. The stories shared within these walls are what make Hotel Daleese truly special.
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mb-6 text-[22px]"
            >
              The name Hotel Daleese carries deep meaning for our family, inspired by our children, David and Mehleese, who remain at the heart of everything we build.
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="mb-6 text-[22px]"
            >
              As part of our ongoing vision, we are constantly evolving Hotel Daleese through curated upgrades, new experiences, and thoughtful expansions designed to elevate guest comfort and connection. You can follow our latest renovations, upcoming projects, and behind-the-scenes transformations <Link href="/upcoming-updates" className="underline">here</Link>.
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="mb-6 text-[22px]"
            >
              Our time in Costa Rica has shaped us in unforgettable ways — teaching us new perspectives, introducing us to rich culture, and reinforcing the importance of community, balance, and beauty in everyday life.
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="mb-6 text-[22px]"
            >
              Hotel Daleese is more than a boutique hotel. It is a reflection of our journey, our values, and our passion for creating exceptional experiences.
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="mb-6 text-[22px] font-semibold"
            >
              Pura Vida.
            </motion.p>
          </div>
          <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full md:w-1/2 space-y-4 mb-6 md:pt-[220px] pt-[50px]"
          >
            <Image
                src="https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Our%20Story/671daa5c98cab.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=zYDgqxB9rtmK9nUec4SptyKDEP9yWLkadtmgHSJoI7l7Lt%2F9OgjUvPorlI7tq2w5brgK05J0kVpGXw0i3Zl2mVt%2F8EBt3R0pHzcFiXcWL6YlGX44ADgsShLTK4nv2%2FjdwTNgShLpBG%2BHURP45wh9O6vfGChiU0phyfnZJVonkdNr6c1zvwFKUF3JQ0vx0S2%2BXxOMkOTfeoAWKPx0qp%2BzJpaVhqttYLTfSyb0vz457ROMfMlM8ZY7CSSLoND3ugLzHokQoguVeEKnZfTv3w%2F5ixKUmrdAaH8GFLk2FfrUUWlonxu7G1zEzsHqD4gnoM2yQ3f2g08jPiNq9Dp6WVdUvg%3D%3D"
                alt="Rosa and Dave sitting in beach chairs"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
                unoptimized={true}
            />
            <Image
                src="https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/67401e51161d4.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=ix8E%2BklOLvKvTpbbVjqt8kPLb3vf%2FwrNGrxizXGFERdxJEsdBXh7jbtj0jyaLEGrrfaCjrcE0WRiVFEzokfGzkjSfx8g6Kf8Xov7smqH4Kzi9%2F8pq8kRhP8NyV0AiOe2A5izAQULBcTW0AD5LOyCsT3stFHBUAj4ml%2BmNjiubhOGyj%2FmY2OJVWQKqNZHiKEbLY26RurZ1i2iJvKZtU80TYeX9PCiojucqsSp15N8R2fk36eY75FeOYuf1YnWLZWuMGD51zuzdFDFphlDOHKouRd3MDBzBkEws%2Fw%2BltgF8e%2FRuweIXhVafdHYPFb0o%2BqKjGJsr5uuvW5sSqFZTuA8VQ%3D%3D"
            alt="Hotel Daleese property"
                width={600}
                height={300}
                className="w-full h-auto object-cover rounded-lg"
                unoptimized={true}
            />
          </motion.div>
        </div>
      </section>
  )
}
