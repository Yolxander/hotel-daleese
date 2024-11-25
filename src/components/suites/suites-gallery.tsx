'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Cormorant_Garamond } from 'next/font/google'

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '700'] })

export function SuitesGalleryComponent() {
    const suites = [
        {
            id: 1,
            image: 'https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673de7f757eec.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763646327&Signature=on52lKpeaCdsHvx7PLv%2BLPb8xuud%2BVeeDP6Yc2OgFwTgtxGcuV0GZt77t36%2FEvRbOFndDk0XxawBJAgoXYAYYVSjSBgJId%2Ff9s7ylJOmkmyJ7QvP5ERDs2y4d%2BWcT5wVXgQM8XrUHTW%2FGhWQE%2FIT83qbmDoF1RC6qQE0ssetbFNb3pvcFXnFMI3XCZ%2BqZvdtYTS3HffBbDyu2iOOdohY8L%2BUTUgzI9ns%2FITjYqc8MVUgvummw3126zPv5O%2BDFT57l1guvgRxjZE9ItROrL5NpPHsDP83L2HGHgER2LR16cmYkDOTqyJgXeQD%2Bjnba%2B5BLJGvL2YwwvXEPTlEOL7%2Fgg%3D%3D',
            alt: 'Exterior view of Suite 1 with pink walls and tropical plants',
        },
        {
            id: 2,
            image: 'https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673e436317fc5.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763669732&Signature=LomMzgWe%2FQBlS5F8X8taYl4vU2tUVbrApV56H7rD6QYgsc7JhlGZRyLpoqufoISIMzUI08uOn5M1c4XMTqMcVWicI4JE2hTS8iJNqbjpK4hlWYtYXtWS1kaf%2BpftKZtJunDRC%2BudqpegmG7eA1RIqj%2FMuVh2ZVUh22RtQwm%2BGSCjHrAodlmHCkpev9cAJkJ4wQDN7shHU3pbW6gToLIHrHN%2BhxDbP%2FkUH6gflwCHGg9ntyqbeC87GFiHfn4jI0ku2ewOtUiGN9YbmmlYA3e529uEbhvxhMAUrybw7DQOlDqoyaFDpRTxwzV%2BGXfz4hj4JHtvFNtQmRG6va8Q8KO3oQ%3D%3D',
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
                        <Link href={`/suites/suite-${suite.id}`} key={suite.id}>
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
                                <div className="relative overflow-hidden">
                                    <Image
                                        src={suite.image}
                                        alt={suite.alt}
                                        width={600}
                                        height={600}
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
