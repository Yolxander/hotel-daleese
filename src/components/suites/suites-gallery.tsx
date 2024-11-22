'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function SuitesGalleryComponent() {
    const suites = [
        {
            id: 1,
            image: 'https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%201/6722811bbc369.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761850524&Signature=BySCk34Wg5xMdxbMU1r%2FUH3LhZayf%2FsF8seffcH63yoRvVrwEeoFoeEbNzFt7c%2BPYy4E%2FhyHWS6bduWyT4AagbmTBaPhXqa1YkJfYZHW%2BSPOA0cDF8OsNfIqJRlxRtE6tIFGIS0egfKa9CKrN%2BbAuH77QfVQ5o5kfuc8VggATVODybITrdnlfV7UERiWx%2Fr8JNeNpQo9Nf%2Bo36x3QcqCsqAACJpE5Uc7ZoYESMcDh9NytfKz27evYj9YKwGb%2B0t8eEr9eravw5wPf%2BcF%2BxYkh54ilo2bnLSQcpSC2yZq4QbbH%2BSgn1rlWO3AY6c3AnFzvdkxIs0eUKmyrX4rTK7GRQ%3D%3D',
            alt: 'Exterior view of Suite 1 with pink walls and tropical plants',
        },
        {
            id: 2,
            image: 'https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%202/672301ae6af1c.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761883438&Signature=LFOa7ciZ%2F7OmNMkmq%2FE%2FCufWn%2FyFKG%2F75BGatA1Mn1vjvTeH2PkYzktMnYlhkD56Ezyoy6x03THviphQK29LxzwkEMnad73BRP4Yjf%2BkUz%2FuLQDQtS9c3GPQjyhlLYwmkKiVvLRMwEGTkgvJyPPtIXWQnjGDdV3t4Vf5Y3c0P%2BeSySyuYZiwcl61TUVHffNfEKsz6DKjZpoGo01DEsZpnMLxj29flhdwI7SnKTeJUscoP0zdVx9Scs0OHNdtuOVaQ8DAjpMAcOoqgsjxvX2bu9DxoK7hBO2mtBQGRRCfCa4P%2BlD9oACmH%2FQ5dLf6CB1cv%2B8ZeuP55vPg896Ejswg8w%3D%3D',
            alt: 'Interior view of Suite 2 kitchen with terrazzo countertop',
        },
        {
            id: 3,
            image: 'https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673e4d20250e6.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763672224&Signature=Px0ZVgtiVjK0e4EmJUmDBRIF4l%2BOI8XmippgA4nzZCd5n4yASX880NTSNuRj42fycAFyCcAxEJKTiFk0dt%2BRD6bzvpjypKkz8V4NYu6Ysv2cvCSpbforvYWdUt50vRQ0ppgh4s2PQ0leyBtS5goAI0ifD7fzQQ5S61sAAkUmgN1popsp4DnEAzzfSUY0R8KOvEClN2Xa%2BNkrlP9kCgiV9%2BAIwA1nPTNCO1kISo%2F5rhOaLnS4KhFod1O4qxxcBpFcKWk%2B6ishZrCP%2BfIHnRh4pufYL9%2FTNeqpLNlCcEEZsg66qerMoVOk9d3l821u4dDWUxQqb2WyYK0nnWoWA%2F75Dg%3D%3D',
            alt: 'Interior view of Suite 3 bedroom with wooden slat wall',
        },
        {
            id: 4,
            image: 'https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673eab88b32aa.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763696393&Signature=pe62qDg1nrhp40YBx4lpi8DWtQyFlkA%2BnfWB7tXB4lWBr9bb5ngoLj25KJUcMnjaUQpU%2BG14A47m3ffR3PyjUWIP%2FXdpc3aMZ7JLs0A%2FHX00QgQtlufukqM%2FuEWlvI7DIffyq2ajUeXT30apUFidDydxvZ6gymgpvLMU7Tm1lRHwGdAMUqfwMAXzu0whxBxLHDJB72XypouBwqBXEJx8n3EJqCcvyl8Pp9N%2Fv0juTtsI7XNt%2BCwt4T0hOL6v7nExU2i6CVf6ToMJz5X6FyDPL7BWGNEPIvT70bznE%2BIdCgVo26jupkHVwL8r6AXkhqk%2FjWYae%2Ba7hpoC7h9qznEOog%3D%3D',
            alt: 'Interior view of Suite 4 bedroom with wooden slat wall',
        },
    ]

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8" // Changed to 2 columns
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
                        <Link href={`/suites/suite-${suite.id}`} key={suite.id}>
                            <motion.div
                                className="flex flex-col items-left cursor-pointer group"
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
                                <div className="relative overflow-hidden">
                                    <Image
                                        src={suite.image}
                                        alt={suite.alt}
                                        width={600} // Increased width
                                        height={600} // Increased height
                                        className="w-full h-[60vh] object-cover transition-transform duration-300 group-hover:scale-105"
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
                                    Suite {suite.id}
                                </motion.p>
                            </motion.div>
                        </Link>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
