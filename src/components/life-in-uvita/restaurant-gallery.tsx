'use client'

import Image from 'next/image'
import { Lora } from 'next/font/google'
import { motion } from 'framer-motion'

const lora = Lora({ subsets: ['latin'] })

const images = [
  {
    src: "https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/uploads/Casa%20Turul/Live%20in%20Uvita/671f0d4575be6.jpg",
    alt: "Cafe Vivo table setting",
    width: 600,
    height: 400,
    caption: "Cafe Vivo"
  },
  {
    src: "https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/uploads/Casa%20Turul/Live%20in%20Uvita/671f0d44d464f.jpg",
    alt: "Indómitos dessert plate",
    width: 400,
    height: 400,
    caption: "Indómitos"
  },
  {
    src: "https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/uploads/Casa%20Turul/Live%20in%20Uvita/671f0d45281c9.jpg",
    alt: "Indómitos quesadilla plate",
    width: 200,
    height: 400,
    caption: "Indómitos"
  },
  {
    src: "https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/uploads/Casa%20Turul/Live%20in%20Uvita/671f0d443e66d.jpg",
    alt: "Large restaurant image",
    width: 800,
    height: 400,
    caption: "Indómitos"
  },
  {
    src: "https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/uploads/Casa%20Turul/Live%20in%20Uvita/671f0d43e2643.jpg",
    alt: "Smaller restaurant image",
    width: 400,
    height: 400,
    caption: "Los Laureles"
  },
  {
    src: "https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/uploads/Casa%20Turul/Live%20in%20Uvita/671f10cf23579.jpg",
    alt: "Equal-sized restaurant image 1",
    width: 600,
    height: 400,
    caption: "Los Laureles"
  },
  {
    src: "https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/uploads/Casa%20Turul/Live%20in%20Uvita/671f0d42ac32b.jpg",
    alt: "Equal-sized restaurant image 2",
    width: 600,
    height: 400,
    caption: "Los Laureles"
  },
  {
    src: "https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/uploads/Casa%20Turul/Live%20in%20Uvita/671f0d439d589.jpg",
    alt: "Equal-sized restaurant image 3",
    width: 400,
    height: 400,
    caption: "Sebas Resto"
  },
  {
    src: "https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/uploads/Casa%20Turul/Live%20in%20Uvita/671f0d433ca96.jpg",
    alt: "Equal-sized restaurant image 4",
    width: 400,
    height: 400,
    caption: "Sebas Resto"
  },
  {
    src: "https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/uploads/673653582121f.jpg",
    alt: "Equal-sized restaurant image 5",
    width: 400,
    height: 400,
    caption: "Sebas Resto"
  }
]

export function RestaurantGalleryComponent() {
    return (
        <section className={`container mx-auto px-4 py-16 ${lora.className}`}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-8"
            >
                <div className="space-y-2 md:col-span-3">
                    <Image
                        src={images[0].src}
                        alt={images[0].alt}
                        width={images[0].width}
                        height={images[0].height}
                        className="w-full h-[500px] object-cover"
                        unoptimized={true}
                    />
                    <p className="text-[20px]">{images[0].caption}</p>
                </div>
                <div className="space-y-2 md:col-span-2">
                    <Image
                        src={images[1]?.src}
                        alt={images[1]?.alt}
                        width={images[1]?.width}
                        height={images[1]?.height}
                        className="w-full h-[500px]  object-cover"
                        unoptimized={true}
                    />
                    <p className="text-[20px]">{images[1]?.caption}</p>
                </div>
                <div className="space-y-2 md:col-span-1">
                    <Image
                        src={images[2]?.src}
                        alt={images[2]?.alt}
                        width={images[2]?.width}
                        height={images[2]?.height}
                        className="w-full h-[500px] object-cover"
                        unoptimized={true}
                    />
                    <p className="text-[20px]">{images[2]?.caption}</p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
            >
                <div className="space-y-2">
                    <Image
                        src={images[4]?.src}
                        alt={images[4]?.alt}
                        width={images[4]?.width}
                        height={images[4]?.height}
                        className="w-full  h-[500px] object-cover"
                        unoptimized={true}
                    />
                    <p className="text-[20px]">{images[4]?.caption}</p>
                </div>
                <div className="space-y-2 md:col-span-2">
                    <Image
                        src={images[3]?.src}
                        alt={images[3]?.alt}
                        width={images[3]?.width}
                        height={images[3]?.height}
                        className="w-full h-[500px] object-cover"
                        unoptimized={true}
                    />
                    <p className="text-[20px]">{images[3]?.caption}</p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
            >
                <div className="space-y-2">
                    <Image
                        src={images[5]?.src}
                        alt={images[5]?.alt}
                        width={images[5]?.width}
                        height={images[5]?.height}
                        className="w-full  h-[500px] object-cover"
                        unoptimized={true}
                    />
                    <p className="text-[20px]">{images[5]?.caption}</p>
                </div>
                <div className="space-y-2">
                    <Image
                        src={images[6]?.src}
                        alt={images[6]?.alt}
                        width={images[6]?.width}
                        height={images[6]?.height}
                        className="w-full  h-[500px] object-cover"
                        unoptimized={true}
                    />
                    <p className="text-[20px]">{images[6]?.caption}</p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
                <div className="space-y-2">
                    <Image
                        src={images[7]?.src}
                        alt={images[7]?.alt}
                        width={images[7]?.width}
                        height={images[7]?.height}
                        className="w-full  h-[500px] object-cover"
                        unoptimized={true}
                    />
                    <p className="text-[20px]">{images[7]?.caption}</p>
                </div>
                <div className="space-y-2">
                    <Image
                        src={images[8]?.src}
                        alt={images[8]?.alt}
                        width={images[8]?.width}
                        height={images[8]?.height}
                        className="w-full  h-[500px] object-cover"
                        unoptimized={true}
                    />
                    <p className="text-[20px]">{images[8]?.caption}</p>
                </div>
                <div className="space-y-2">
                    <Image
                        src={images[9]?.src}
                        alt={images[9]?.alt}
                        width={images[9]?.width}
                        height={images[9]?.height}
                        className="w-full  h-[500px] object-cover"
                        unoptimized={true}
                    />
                    <p className="text-[20px]">{images[9]?.caption}</p>
                </div>
            </motion.div>
        </section>
    )
}
