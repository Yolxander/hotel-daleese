'use client'

import { Cormorant_Garamond } from 'next/font/google'
import { motion } from 'framer-motion'

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '700'] })

export function HeroWithNavbarComponent() {
    return (
        <div className="relative h-screen w-full overflow-hidden" style={{
            backgroundImage: 'url("https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/67322841779f6.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=CnhBLyfDhpmSF2pbAxIqLq8wc17KqAxoumZN4Po3QTZjwr9rcFx2Qpgc2PKSv4Ti2NiQCO6MFCni%2Bz2jTS6al%2F7nRcY83WF%2FxEOLNkIb2py6CfblBWNWjUCIpt%2FNoG68%2BtT8un9M%2FuBnCTSb9sYCr13RFXo3Y0dXDhpqzW7JEDE6PDQoc1v%2FNZWLP3AjkUZ59Bj3U2ObZ2E0F9DTdFky74a2BXyUnxJYShoBe22xGDK0yTL8wuDtNOgFu%2FPpyEsm2lGhVRgOerlaE%2BIyVFPHCIEsGX04Is3%2BNqqNvCzMeCP3eN6YG8u1n95Ati0jWg5vxQL9J1YZMj0EaPMvpULWtA%3D%3D")',
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
                    className={`${cormorantGaramond.className} mb-4 text-4xl font-light md:text-[42px] text-center`}
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
                    className={`${cormorantGaramond.className} text-lg font-light italic md:text-2xl text-center`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    Tranquil • Privacy • Comfort
                </motion.p>
            </div>

            <motion.div
                className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-6 text-center"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
            >
                <p className={`${cormorantGaramond.className} mx-auto max-w-4xl text-[20px] md:text-[22px] text-gray-800`}>
                    Welcome to Hotel Daleese, an Adults Only boutique hotel. Located on the Southern Pacific Coast of Costa Rica, our family-owned boutique hotel is situated in Uvita, Puntarenas. We look forward to your visit!
                </p>
            </motion.div>
        </div>
    )
}
