'use client'

import { useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"

const galleryItems = [
    {
        src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673eaedfed605.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763697248&Signature=KAu6D6nv252TcOgvglA2oMYAgUsMEErGd9zYaiRwf6FM1TYXq5kZ8TUet5iBpw4Xd%2Bc%2FG1n3JmMtLnF5luvte5HgyahE5%2ByJJ229WFf5mOg1tZtsHjGpv9G7m6Y%2Fr0XME9RisKzDMciff91hE74K7jaCIjgenEHRqwlqukIQ%2F7Zs99h0eHMIM4Xb5MqKU8IA3dVeSTcRcWVT8rIXQFqtyY2BiTx2HGFRRvX7YGvCTr7RNAjDiyoZLZGz7xNS%2FnRHQKqBdb1m%2BYd930jXoy15tecl4ddIkdpIXBqYqvCTLS8c8%2BMbLgmon1YvrYDUbb2TzdePy3uYwlLp%2Bosti9wrFg%3D%3D",
        alt: "Image 1 description"
    },
    {
        src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673eaee10c75b.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763697249&Signature=khj%2B2b7laMUFQsMZpXXCcdcNrNOiUjEEPoKy41OzI9ESUvQsDJ3AXxvT6sSC3ab49x4RAPEnJsJCz8ku%2BnQNws6IOkuk5MKOJBzW5tFu9SWROSTnIbgct51tW4VbTV2Iif0a7B0KJ7bHdwr1A4kBBhFPUFScma9yosAIZSEtCvZrc6VJB%2BgAcdl3RLV9LBgaltirwRQDpp12z1jHLSvWkYK%2F4D8j1wUj349BtK1P8pgP44l2ei6aeUq6Rir7rK61yxMIGnCTW%2FPSPYH8g51NmAGsDzUca7drog4%2BiZOLlQrkgs%2BukPiVcwM0puGoH0FnrSuWMXvml5ietoceQFOUhg%3D%3D",
        alt: "Image 2 description"
    },
    {
        src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673eaf00ea361.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763697281&Signature=f5syksWOQXM1%2F3IzT05LBkJHzg%2F%2BiMVgcihUJxGzkmmlklmmKKE6oJYTdyy8jxLBgCekiu%2BGvQsPfzFCJMgAdPMpGLnEm3pVooOUD1iIU7%2FaZB%2Fn%2BIp0LyVsFTPf69VOgj%2BZESSi14wfpZs9vnFoFhefUE2f6fCafni3D%2FXVMt6S92ijHU316oQy2d0k58%2BijtpYLikpUUrKmL18sr%2BpH9C2hNriWB6eBGUqyk57i%2F6naqBrbWzPHDnWoAV9TNQal26%2BQiDuC67s4nodJtdKkSClJHoYgj%2FUMxloEqUu93IAVuCGEFrdOFNEPvTQ89%2FqJeaK7ov9tQaF4q5BplXBfw%3D%3D",
        alt: "Image 3 description"
    },
    {
        src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673eaf0163ab4.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763697281&Signature=RbmHj8UKe7p%2F522EHeCebrxFBLkvYoqcyvj8ORLSUchp0Hq2XGlYSNfoRntfRR1kHQMv1TPO2BC1Rjn%2By4rAeagg3bswtQ%2FnXhX5qneFb%2B8JyMUqHHAcfmyn0UiEXYbbxbY8RgSqFBIpYEt%2Fa%2BPcw%2FvQsZh78ixxGHu2Cx1W4uOVAg7%2F2wIREkBKjisOC0zaCZW0ZPt2PKxPFOOhdk25IjMODwFHhEWGb3VM7CaIJ1LWgrPsj%2Bz%2F6esgUsNKm7Ppyj%2BJxaaIIbxkQkGzkEmKXU67E1W%2FLRAvjM9slzoGS4N7ZQbwWSlKlPULHSmTCX5ZBkXQFUDzUbn1XoVJ3pMwyw%3D%3D",
        alt: "Image 4 description"
    },
    {
        src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Amenities/671d365de0a74.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761503710&Signature=WBCgNVqDLCtTqy8c2bmvwBk0enVcOrZ9T26rXVIFygfwkhN6ns7dR1MSWhO8CQAt6mx8dscbJzxcest%2BMqY79tx6bPgYI9PaiVsY6FVxzXIpgr1drG2sQ6aQTs9nvMjnz%2FTkm2Kin3g4guLwEZU083E3%2FcpyiGyiEkMZ0dQiwQs74XPedcCyOp0eUgiCjSb7zLtQ8Fk9h%2B4bnnXiqtEskP%2BG5EjHqyNgsqDctkm%2BV9sSLN3G8N%2FCKVGNuz2IZluSjYy3HmLKjBlomWmArNUPwz6l5cUv0WbeZIsXq7QL5SDuZBmEvcSmJjR4lzxl7z1ipTtZ6%2BS9r4%2FUDocG2g6v4w%3D%3D",
        alt: "Luxurious bedroom with large windows and mountain view"
    },
    {
        src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Amenities/671d36589b00a.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761503705&Signature=kLQet8MR5gEIjGUih37uSUg7w5%2B1gFhUxxegRwjizEoZ7AYzCpNqFx94AkwoRgmY8TcbS%2BeFBTaOWjO2iyBTL05bumIPnXFnyinHeD1Lp3MoiQu9M5s07f%2FASRElmmtFMU1f1RrZjmCw6ZJsmoR6eBch8jrWUyG%2BTVpQOoicInhcO%2B1zh9C%2B6FfYvgw%2BSkCjNMcGDuj5%2BcDQnPSrs50VhGJRWO%2FDiP3sfy7zMxIo46RJu59W3mopFXsnyEgcb7sRoTRdzH04sGMf3b5w35iYx6DhpOh%2Fk22%2FhaGLE74JBa15E9rDF0jvXyZDKGpwXzapkY9i8YnEaIb91Bxd27hQtQ%3D%3D",
        alt: "Modern bathroom with glass shower and elegant fixtures"
    },
    {
        src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Amenities/671d36593abdf.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761503705&Signature=fryVtnhZX1cRwZ6%2BQkm8XSEkALNSFFK9iIAE1Kc6us2je6IRGpzMX7s13UQSbQvdaIGOGDgkC7j9oiFmGO3kS68y0Gze57jv8sCU%2B3LOBIdVzSMrqagD1w%2F92%2FIAhzpt3rwrqzvObGrm1OF9cgExBYPxbFdpK6aodK%2BwJCX%2B6hphVyawYYlrpVovx6%2FVl2lt0zWRWq64ewC6XReFjwdA1AHeVcDm0S0SqE%2B4qz0Em4boO6vrt%2BdMPFGiqBQ6A3y6btYiY0NdUcJe0lsYZAyVPxLmUyLjRr8YOlyiMoA%2B8PLUW3tws%2FhfJu%2FXg3L7X6Us9ZUHLYFJBp0ZRug%2BBn%2F6jw%3D%3D",
        alt: "Cozy living room with fireplace and comfortable seating"
    },
    {
        src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Amenities/671d36598483d.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761503705&Signature=ELuTdKGtk%2FySh%2FhvlikmtzXDYNwS3fF5s6hsVE9gUSyZjPBqv8HOM3W4NtwsloGwPbFZy4skcVKENwaH7CRfFMLGwnrc9dCQQE4aRyyJt2NvZZL5ZdWEWzD53zns18UkGyy5MHCa15LNdApZXj2KVwdc1D6CKZ%2B1RqWf9CF%2F%2FpRw7L1XabXHe4g4P1j3Gqnnzf2j9RvZyomhtZlC0LnkhtDKkIVVaIaXFqVxGTqYPrqyr%2BttyP0o9qghEwzRvE%2FcVGwe8EyjcV0kJGKJe78gNSgqx5ANMqMxNAxZeUEJtRxcvrv2P%2BThqXbe8GwFuX6cBfpUy98hZw8a31ysj677Qw%3D%3D",
        alt: "Outdoor pool area with lounge chairs and mountain backdrop"
    }

];


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const Lightbox = ({ currentIndex, onClose, onPrev, onNext }) => (
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
    </AnimatePresence>
)



export function AmenitiesGalleryLightbox() {
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
        <section ref={ref} className="py-12 px-4 md:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
                {galleryItems.map((item, index) => (
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
                                <motion.div
                                    className="aspect-square bg-muted flex items-center justify-center text-muted-foreground"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        className="object-cover w-full h-full"
                                    />
                                </motion.div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
            {lightboxOpen && (
                <Lightbox
                    currentIndex={currentImageIndex}
                    onClose={closeLightbox}
                    onPrev={goToPrevious}
                    onNext={goToNext}
                />
            )}
        </section>
    )
}