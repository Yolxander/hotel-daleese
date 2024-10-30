'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export function HotelMapComponent() {
    const [mapSize, setMapSize] = useState({ width: 1200, height: 600 })

    useEffect(() => {
        const updateMapSize = () => {
            const width = Math.min(window.innerWidth * 0.8, 1200)
            const height = Math.min(window.innerHeight * 0.6, 600)
            setMapSize({ width, height })
        }

        updateMapSize()
        window.addEventListener('resize', updateMapSize)
        return () => window.removeEventListener('resize', updateMapSize)
    }, [])


    return (
        <section className="min-h-[90vh] pt-20 pb-16 px-4 md:px-8 flex flex-col items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-6xl mx-auto"
            >
                <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden rounded-lg shadow-lg">
                    <Image
                        src="https://maps.googleapis.com/maps/api/staticmap?center=Hotel+Daleese,Uvita,Costa+Rica&zoom=16&size=1200x400&maptype=roadmap&markers=color:red%7CLabel:H%7CHotel+Daleese,Uvita,Costa+Rica&key=AIzaSyDdwQwsHi-_JmG1n62xVx2sonXav9oyfGU"
                        alt="Map to Hotel Daleese location"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>

            </motion.div>
        </section>
    )
}