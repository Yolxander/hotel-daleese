'use client'

import { useState, useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"

// Define the structure of a gallery item
export interface GalleryItem {
    id: string
    src: string
    alt: string
}

// Define the props for the AmenitiesGalleryLightbox component
export interface AmenitiesGalleryLightboxProps {
    galleryItems: GalleryItem[]
}

// Define the Lightbox component's props
interface LightboxProps {
    galleryItems: GalleryItem[]
    currentIndex: number
    onClose: () => void
    onPrev: () => void
    onNext: () => void
}

// Lightbox component
const Lightbox: React.FC<LightboxProps> = ({ galleryItems, currentIndex, onClose, onPrev, onNext }) => (
    <AnimatePresence>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[105]"
        >
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-transparent bg-opacity-80 rounded-full p-3 hover:bg-opacity-100 transition-transform transform hover:scale-105"
                style={{ height: '120px', width: '120px' }}
            >
                <X className="h-[60px] w-[60px] text-white" />
                <span className="sr-only">Close</span>
            </button>

            {/* Previous Button */}
            <button
                onClick={onPrev}
                className="absolute top-[95%] left-8 md:top-1/2 transform -translate-y-1/2 bg-transparent bg-opacity-80 rounded-full p-3 hover:bg-opacity-100 transition-transform transform hover:scale-105"
                style={{ height: '120px', width: '120px' }}
            >
                <ChevronLeft className="h-[80px] w-[80px] text-white" />
                <span className="sr-only">Previous image</span>
            </button>

            {/* Lightbox Image */}
            <motion.div
                className="text-white text-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                <div className="relative p-4 w-full max-w-5xl h-[90vh]">
                    <Image
                        key={galleryItems[currentIndex].id}
                        src={galleryItems[currentIndex].src}
                        alt={galleryItems[currentIndex].alt}
                        fill
                        className="rounded-lg shadow-lg object-contain"
                        referrerPolicy="no-referrer"
                        unoptimized
                        sizes="(max-width: 1280px) 100vw, 1280px"
                    />
                </div>
            </motion.div>

            {/* Next Button */}
            <button
                onClick={onNext}
                className="absolute top-[95%] right-8 md:top-1/2 transform -translate-y-1/2 bg-transparent bg-opacity-80 rounded-full p-3 hover:bg-opacity-100 transition-transform transform hover:scale-105"
                style={{ height: '120px', width: '120px' }}
            >
                <ChevronRight className="h-[80px] w-[80px] text-white" />
                <span className="sr-only">Next image</span>
            </button>
        </motion.div>
    </AnimatePresence>
)

// AmenitiesGalleryLightbox component
export const AmenitiesGalleryLightbox: React.FC<AmenitiesGalleryLightboxProps> = ({ galleryItems }) => {
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const openLightbox = (index: number) => {
        setCurrentImageIndex(index)
        setLightboxOpen(true)
    }

    const closeLightbox = () => {
        setLightboxOpen(false)
    }

    const goToPrevious = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
        )
    }

    const goToNext = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
        )
    }

    return (
        <section ref={ref} className="pt-6 pb-[100px] px-4 md:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
                {galleryItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card
                            className="overflow-hidden cursor-pointer"
                            onClick={() => openLightbox(index)}
                        >
                            <CardContent className="p-0">
                                <motion.div
                                    className="relative aspect-square bg-muted flex items-center justify-center text-muted-foreground overflow-hidden"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        fill
                                        className="object-cover min-h-0"
                                        referrerPolicy="no-referrer"
                                        unoptimized
                                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                    />
                                </motion.div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
            {lightboxOpen && (
                <Lightbox
                    galleryItems={galleryItems}
                    currentIndex={currentImageIndex}
                    onClose={closeLightbox}
                    onPrev={goToPrevious}
                    onNext={goToNext}
                />
            )}
        </section>
    )
}
