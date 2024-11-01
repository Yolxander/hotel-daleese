'use client'

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { motion, useInView } from "framer-motion"

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
    currentIndex: number
    onClose: () => void
    onPrev: () => void
    onNext: () => void
    galleryItems: GalleryItem[]
    isOpen: boolean
}) => (
    <div
        className={`fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[105] transition-opacity duration-300 ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
    >
        <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white"
            onClick={onClose}
            style={{ height: '72px', width: '72px' }}
        >
            <X className="h-16 w-16" />
            <span className="sr-only">Close</span>
        </Button>
        <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white"
            onClick={onPrev}
            style={{ height: '72px', width: '72px' }}
        >
            <ChevronLeft className="h-16 w-16" />
            <span className="sr-only">Previous image</span>
        </Button>
        <motion.div
            className="text-white text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="p-4">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-[80vw] h-[80vh]"
                >
                    <Image
                        src={galleryItems[currentIndex].src}
                        alt={galleryItems[currentIndex].alt}
                        layout="fill"
                        objectFit="contain"
                    />
                </motion.div>
            </div>
            <p className="mt-2">Image {currentIndex + 1} of {galleryItems.length}</p>
        </motion.div>
        <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white"
            onClick={onNext}
            style={{ height: '72px', width: '72px' }}
        >
            <ChevronRight className="h-16 w-16" />
            <span className="sr-only">Next image</span>
        </Button>
    </div>
)

export default function ImageGallery({ galleryItems }: { galleryItems: GalleryItem[] }) {
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
        <section ref={ref} className="py-12 px-4 md:px-6 lg:px-8 bg-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
            >
                {galleryItems.map((item: GalleryItem, index: number) => (
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
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
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
