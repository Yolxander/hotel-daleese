'use client'

import Image from 'next/image'
import { Cormorant_Garamond } from 'next/font/google'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400'] })

export function FaqSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
      <section ref={ref} className={`container mx-auto px-4 py-16 md:py-24 ${cormorantGaramond.className}`}>
        <div className="flex flex-col md:flex-row md:items-center items-start gap-8">
          <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
          >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-7xl mb-8"
            >
              FAQ
            </motion.h2>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
              <Accordion type="single" collapsible className="w-full text-[25px]">
                <motion.div variants={itemVariants}>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Where is your hotel located in Costa Rica?</AccordionTrigger>
                    <AccordionContent className="text-[20px] leading-relaxed ml-[20%]">
                      We are located in Uvita, Puntarenas. It's a 3 hour drive south from the San Jose airport.
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How do I get to your hotel?</AccordionTrigger>
                    <AccordionContent className="text-[20px] leading-relaxed ml-[20%]">
                      We offer guests assistance with shuttle to and from the airport. If you require a rental, shuttle, or directions, please reach out to our hosts upon booking!
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What wildlife will I see when I visit Uvita?</AccordionTrigger>
                    <AccordionContent className="text-[20px] leading-relaxed ml-[20%]">
                      Parrots, Monkeys, Iguanas, Sloths and so much more!
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Where are the best places to eat in Uvita?</AccordionTrigger>
                    <AccordionContent className="text-[20px] leading-relaxed ml-[20%]">
                      We are locals, so we know our Uvita restos! Our top 3 recommendations would be Sebas, Los Laureles, and Indomitos.
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>What activities are close to the hotel?</AccordionTrigger>
                    <AccordionContent className="text-[20px] leading-relaxed ml-[20%]">
                      Hotel Daleese is in close proximity to Whale Tail National Park, the butterfly sanctuary and a private waterfall you can jump from! There are also plenty of other beaches to check out, and the animal sanctuary close by. Check out our list of experiences here.
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              </Accordion>
            </motion.div>
          </motion.div>
          <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full md:w-1/2 relative aspect-square"
          >
            <Image
                src="https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Live%20in%20Uvita/671efba46ef0a.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761619749&Signature=Md%2Fflm%2Bih9coqFN%2FHsJ%2Fh%2BEVTfVDhJGEHgzS7rg3Bep%2FuIaWWV9knm7RPV%2BVNfdUzKqeUStmQQPROq0qGeep2Xg4CSZb4P0UArecoARHlursgUPaKBLGXojpkfjzWYH6FF0OK4pNtiLg41gDTinuzQGWbOrDgPJXBu1s9gExRL0%2B%2F9z75ZBMGgv6eLj9tfKh3560N1LqghduKXl%2FlAE3bml4cbUZ8SC5dOpbcrLXYiD1QlZ99Opr24FVFdkrc5E9zMUlsDLw%2BadcI58LCzyCmocNFACHmoiIoKvqKtV7XkcgYwCqBdBJu%2B4XIjfME5H%2BjsQqBspoR2vujyuu0il1KA%3D%3D"
                alt="Colorful toucan perched on a branch"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
            />
          </motion.div>
        </div>
      </section>
  )
}