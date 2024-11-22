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
            image: 'https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673e4d0c2e3b8.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763672204&Signature=m1YtG3hTL1A9LQa7efkZPLvVDsjMMpvwvJB9Kn9PjvsVNY%2BKEaqlnfVSvTfUkT0XgqErNDZzSZ93eS6gwtnlwApfuWF1U8irXi42sMeKkcOEFUXEGy8ZUFId85IEbJj6WwEoNpJHzcJv9uiqbbyfZIFqaBPlNUqeg%2BX%2FVzP5s7Vaqd8qFG%2Fvo35lzrEPaVsNY61RiWLy2UCN4E%2FERuDkUrjg55k8TX10dd1U%2BQiKvpe3nfs%2B11ed600%2BY8QgCigJtOQ9HfegfpouFO3oYgNSffCwYYgB0VdbE2l7A3H%2BhIxaHPm7wpeSK9fcdF6Ry5iX08nrZi0FXBNjktOY27SIYQ%3D%3D',
            alt: 'Interior view of Suite 3 bedroom with wooden slat wall',
        },
        {
            id: 4,
            image: 'https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673eab72b0240.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763696371&Signature=WPgLYs%2F2uhb0uuulzbraWK9WyOIBfWl3KlUNqOYvnDkMKy9mRJU%2BVj1JHSL%2F6g3ZV1rd7nTHWzK3A1M9lshOKBk8aX3%2BCvoko9ldPwamtmDREBMgyNvqJhqT%2Bq9qh1hJAINDPubDfxLPJBMgyogdgdXoRin0UpJEZobLjcoz0cENSNcY6Y6sttrA0XyK9iLRc34LqiGf2LOOGrKFWW2NHct60Ns19Axsr78xIOF2f2TmWCy7YvMha7i0IUD%2BH3glJzSaLP%2BYj5ZiB7wyvjp08%2BYOZqoRQ%2BQKNmInUuUKoxbYpSXGtC0ID3H964PP6y3aVmY9q4%2B6d1WrSnvz8nt21A%3D%3D',
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
