'use client'

import Image from 'next/image'
import { Lora } from 'next/font/google'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const lora = Lora({ subsets: ['latin'] })

interface SuiteSectionProps {
    src: string;
    header: {
        name: string;
        description: string;
    };
}

export function Suite_Section({ src, header }: SuiteSectionProps) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeOut"
            }
        }
    }

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: 0.5,
                ease: "easeOut"
            }
        }
    }

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="relative md:pt-[200px] h-[110vh] w-full overflow-hidden"
        >
            <Image
                src={src}
                alt={`${header.name} exterior view`}
                layout="fill"
                objectFit="cover"
                className="z-0"
                priority
            />
            <motion.div
                variants={containerVariants}
                className="absolute inset-0 bg-black/30 z-10"
            />
            <motion.div
                variants={textVariants}
                className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4"
            >
                <h1 className={`${lora.className} text-6xl mb-4`}>{header.name}</h1>
                <p className={`${lora.className} text-xl font-light max-w-md`}>
                    {header.description}
                </p>
            </motion.div>
        </motion.section>
    )
}