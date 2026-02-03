'use client'

import { motion } from 'framer-motion'

// Hotel Daleese: East of BCR, 500m, Uvita 60504, Costa Rica (approx. 500m east of BCR/Uvita center).
const HOTEL_LAT = 9.1642
const HOTEL_LON = -83.734
const OSM_EMBED_URL = `https://www.openstreetmap.org/export/embed.html?bbox=${HOTEL_LON - 0.008},${HOTEL_LAT - 0.01},${HOTEL_LON + 0.008},${HOTEL_LAT + 0.01}&layer=mapnik&marker=${HOTEL_LAT}%2C${HOTEL_LON}`

export function HotelMapComponent() {
  return (
    <section className="min-h-[90vh] pt-20 pb-16 px-4 md:px-8 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl mx-auto"
      >
        <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden rounded-lg shadow-lg">
          <iframe
            title="Map to Hotel Daleese location — OpenStreetMap"
            src={OSM_EMBED_URL}
            className="w-full h-full rounded-lg border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </motion.div>
    </section>
  )
}