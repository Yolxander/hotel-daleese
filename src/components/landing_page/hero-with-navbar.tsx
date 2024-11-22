'use client'

import { Lora, Cormorant_Garamond } from 'next/font/google'
import { motion } from 'framer-motion'

const lora = Lora({ subsets: ['latin'] })
const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400'] })

export function HeroWithNavbarComponent() {
    return (
        <div className="relative h-screen w-full overflow-hidden" style={{
            backgroundImage: 'url("https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/67322841779f6.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1762876354&Signature=mhPpLz8xVY7o1kR7kjmypvLScdCF0aA2oGQY1eLGl3Qkr68arHVBtZ9qUDAXndVSaf53IHqdvnJFZ8BITkZ71giidOltyC84ojOtPge9HD7WTD8iD6RWdgLI%2BMAVqKFVIXv7T%2FlouRT8W5d%2B6bdt5YnOOpaXfjfIv5rP17YhePJ7onUEbr05IncLROPLrAxB%2FPEHXVgoI2wrXFMUQwGBDP9xIayj9w%2BGY9qAoE891EhJ69O4PkZCAXzLjo1Mf%2FOvla6Ae55JkZ3s366ChNXYqN37I6cfvldJdmxMDZ7rB8xuHeRBLRpLzD%2FKncRAPwGX4Ait4KxiqM9ZluW5opRRRw%3D%3D")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
        }}>
            <motion.div
                className="absolute inset-0 bg-black bg-opacity-10 pointer-events-none "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 md:px-8 pt-12">
                <motion.h1
                    className={`${lora.className} mb-4 text-4xl font-light md:text-[42px] text-center`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Boutique Hotel in the Heart of Uvita
                </motion.h1>
                <motion.div
                    className="mb-4 h-[1px] w-[50vw] bg-white opacity-80"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                />
                <motion.p
                    className={`${lora.className} text-lg font-light italic md:text-2xl text-center`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    Eccentric • Privacy • Comfort
                </motion.p>
            </div>

            <motion.div
                className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-6 text-center"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
            >
                <p className={`${cormorantGaramond.className} mx-auto max-w-4xl text-[20px] md:text-[22px] text-gray-800`}>
                    Welcome to Hotel Daleese. Located on the Southern Pacific Coast of Costa Rica, our family-owned boutique hotel is situated in Uvita, Puntarenas. We look forward to your visit!
                </p>
            </motion.div>
        </div>
    )
}