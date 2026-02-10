'use client'

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { motion, useInView, AnimatePresence} from "framer-motion"

// Define a type for gallery items
type GalleryItem = {
    src: string
    alt: string
}

// Lightbox Component
const Lightbox = ({
                      currentIndex,
                      onClose,
                      onPrev,
                      onNext,
                      galleryItems,
                      isOpen
                  }: {
    currentIndex: number;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
    galleryItems: GalleryItem[];
    isOpen: boolean;
}) => (
    <AnimatePresence>
        {isOpen && (
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
                    className="absolute top-[95%] left-8 md:top-1/2  transform -translate-y-1/2 bg-transparent bg-opacity-80 rounded-full p-3 hover:bg-opacity-100 transition-transform transform hover:scale-105"
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
                    <div className="p-4">
                        <motion.img
                            key={currentIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            src={galleryItems[currentIndex].src}
                            alt={galleryItems[currentIndex].alt}
                            className="max-h-[90vh] object-contain rounded-lg shadow-lg"
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
        )}
    </AnimatePresence>
)


export default function ImageGallery({ galleryItems }: { galleryItems: GalleryItem[] }) {
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [visibleCount, setVisibleCount] = useState(9) // Start with 9 images
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    
    const IMAGES_PER_PAGE = 9
    const visibleItems = galleryItems.slice(0, visibleCount)
    const hasMore = visibleCount < galleryItems.length

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

    const loadMore = () => {
        setVisibleCount((prev) => Math.min(prev + IMAGES_PER_PAGE, galleryItems.length))
    }

    return (
        <section ref={ref} className="py-12 px-4 md:px-6 lg:px-8 bg-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
            >
                {visibleItems.map((item: GalleryItem, index: number) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card
                            className="overflow-hidden cursor-pointer"
                            onClick={() => openLightbox(index)}
                        >
                            <CardContent className="p-0">
                                <div className="relative aspect-square bg-muted flex items-center justify-center text-muted-foreground">
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        unoptimized={item.src.includes('storage.googleapis.com') && item.src.includes('Signature=')}
                                        priority={index < 6}
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
            
            {/* Show More Button */}
            {hasMore && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex justify-center mt-8"
                >
                    <button
                        type="button"
                        onClick={loadMore}
                        className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
                    >
                        Show more
                    </button>
                </motion.div>
            )}
            
            <Lightbox
                currentIndex={currentImageIndex}
                onClose={closeLightbox}
                onPrev={goToPrevious}
                onNext={goToNext}
                galleryItems={galleryItems}
                isOpen={lightboxOpen}
            />
        </section>
    )
}
