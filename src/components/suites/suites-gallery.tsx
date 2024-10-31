'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function SuitesGalleryComponent() {
    const suites = [
        { id: 1, image: 'https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suites/67205e0a1b3d1.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761710474&Signature=VtsL32AoKpnuEXa5g5qwiriDefGb6AkO%2BDGA7URx2geyOgBhM4do0nGF7QvGQomSJuF4CL%2FB9Y0K93q%2FrKlIsYtefKCt6Hoj5F9Bx%2BimKN2mgQK8skaAJfH9P6JrfT3PcTgkRKqJ%2Btv97aS9FJc0c1dU%2FPpvMuD5V4QohW6mbsedefgKHAB6NWMu9lxn3S3G5tiUeX5x4neRinoShO07%2F73F2BtvTEIYJshn%2FxVcN2pk8AnM7vHiMg%2Bpe%2FelQfst6GuQHNIjuH6%2BpxUW4dAOOkXobpNXHvKfwvKGa42QTy7%2BskyJu8ZiRBCjMVaczQsUTg%2BmUeZJkIiGWqZzOIzVeA%3D%3D', alt: 'Exterior view of Suite 1 with pink walls and tropical plants' },
        { id: 2, image: 'https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suites/67205e096bf5b.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761710474&Signature=GN2iMA6GNJEmeqZsD6r%2BLw8ioVamar3AK8uX04KEQNOc2g556b7vWe4E8cDWQBjAPyEwdqXKGOclePvz%2B61gmMuWQFWUYCUAS%2Bvf9%2BL3a5GOWvJZkSvRRqgBUkxz6g%2B3yjzZBLgjkz2nIlxGHuRLX54gebvhECX5bOE%2FD1s5Z8SeLZt1ZVixMCKBQhji0tn%2FqS2SpHc8XNCzJlMjr%2FRckP8%2FUl5mccvdSZk%2F%2B0x6cERee9wzxJgkyktJ2UJW7DkqXoYQMr0RoEGqguRvgU%2BGC%2FVkOOxMKj24cYkrQi%2F1wrOhUxuuSpDwsPGn4pjH4WIuhKoGFAbSDULDg7%2FcTu7UIQ%3D%3D', alt: 'Interior view of Suite 2 kitchen with terrazzo countertop' },
        { id: 3, image: 'https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suites/67205e0a645a0.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761710474&Signature=nbdxDzNupFS4MLbl6UwqAtwozcUJJRTQ9b3BRKAUpCIRUHV6HJ20XA%2FOlbRgo1lXW2DxYXx5NvVyXcIDLBmL83bBI4L6e6FbdmRwd5Tg3mDBs9fifhsEA2N1obL2AWgz8rMmTD9IzM5NEDQL45Sh3RUXmIDogf2ZWdy18updjlrpW9vwIWE2RIkqzkJCLH5cmeyNDSItkp6puxX8xhE9GxQo7q4AR0QxcFw9dyJb6hZJpLn%2BQE%2Fd6H1zv2S8wgslTdehZQ28bK68ptqEESCDi42GFi8VxbUk73TOyqvk2WSIgH5DLx4WkhjRWlSEUjCAxXEr6LXjaN79jiyHwugLyg%3D%3D', alt: 'Interior view of Suite 3 bedroom with wooden slat wall' },
    ]

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.3
                            }
                        }
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
                                            ease: "easeOut"
                                        }
                                    }
                                }}
                            >
                                <div className="relative overflow-hidden">
                                    <Image
                                        src={suite.image}
                                        alt={suite.alt}
                                        width={400}
                                        height={400}
                                        className="w-full h-[50vh] object-cover transition-transform duration-300 group-hover:scale-105"
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
                                                duration: 0.4
                                            }
                                        }
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