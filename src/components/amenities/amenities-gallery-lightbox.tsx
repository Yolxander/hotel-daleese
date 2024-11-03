'use client'

import { useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"

const galleryItems = [
    { src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Amenities/671d365de0a74.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761503710&Signature=WBCgNVqDLCtTqy8c2bmvwBk0enVcOrZ9T26rXVIFygfwkhN6ns7dR1MSWhO8CQAt6mx8dscbJzxcest%2BMqY79tx6bPgYI9PaiVsY6FVxzXIpgr1drG2sQ6aQTs9nvMjnz%2FTkm2Kin3g4guLwEZU083E3%2FcpyiGyiEkMZ0dQiwQs74XPedcCyOp0eUgiCjSb7zLtQ8Fk9h%2B4bnnXiqtEskP%2BG5EjHqyNgsqDctkm%2BV9sSLN3G8N%2FCKVGNuz2IZluSjYy3HmLKjBlomWmArNUPwz6l5cUv0WbeZIsXq7QL5SDuZBmEvcSmJjR4lzxl7z1ipTtZ6%2BS9r4%2FUDocG2g6v4w%3D%3D", alt: "Luxurious bedroom with large windows and mountain view" },
    { src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Amenities/671d36589b00a.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761503705&Signature=kLQet8MR5gEIjGUih37uSUg7w5%2B1gFhUxxegRwjizEoZ7AYzCpNqFx94AkwoRgmY8TcbS%2BeFBTaOWjO2iyBTL05bumIPnXFnyinHeD1Lp3MoiQu9M5s07f%2FASRElmmtFMU1f1RrZjmCw6ZJsmoR6eBch8jrWUyG%2BTVpQOoicInhcO%2B1zh9C%2B6FfYvgw%2BSkCjNMcGDuj5%2BcDQnPSrs50VhGJRWO%2FDiP3sfy7zMxIo46RJu59W3mopFXsnyEgcb7sRoTRdzH04sGMf3b5w35iYx6DhpOh%2Fk22%2FhaGLE74JBa15E9rDF0jvXyZDKGpwXzapkY9i8YnEaIb91Bxd27hQtQ%3D%3D", alt: "Modern bathroom with glass shower and elegant fixtures" },
    { src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Amenities/671d36593abdf.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761503705&Signature=fryVtnhZX1cRwZ6%2BQkm8XSEkALNSFFK9iIAE1Kc6us2je6IRGpzMX7s13UQSbQvdaIGOGDgkC7j9oiFmGO3kS68y0Gze57jv8sCU%2B3LOBIdVzSMrqagD1w%2F92%2FIAhzpt3rwrqzvObGrm1OF9cgExBYPxbFdpK6aodK%2BwJCX%2B6hphVyawYYlrpVovx6%2FVl2lt0zWRWq64ewC6XReFjwdA1AHeVcDm0S0SqE%2B4qz0Em4boO6vrt%2BdMPFGiqBQ6A3y6btYiY0NdUcJe0lsYZAyVPxLmUyLjRr8YOlyiMoA%2B8PLUW3tws%2FhfJu%2FXg3L7X6Us9ZUHLYFJBp0ZRug%2BBn%2F6jw%3D%3D", alt: "Cozy living room with fireplace and comfortable seating" },
    { src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Amenities/671d36598483d.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761503705&Signature=ELuTdKGtk%2FySh%2FhvlikmtzXDYNwS3fF5s6hsVE9gUSyZjPBqv8HOM3W4NtwsloGwPbFZy4skcVKENwaH7CRfFMLGwnrc9dCQQE4aRyyJt2NvZZL5ZdWEWzD53zns18UkGyy5MHCa15LNdApZXj2KVwdc1D6CKZ%2B1RqWf9CF%2F%2FpRw7L1XabXHe4g4P1j3Gqnnzf2j9RvZyomhtZlC0LnkhtDKkIVVaIaXFqVxGTqYPrqyr%2BttyP0o9qghEwzRvE%2FcVGwe8EyjcV0kJGKJe78gNSgqx5ANMqMxNAxZeUEJtRxcvrv2P%2BThqXbe8GwFuX6cBfpUy98hZw8a31ysj677Qw%3D%3D", alt: "Outdoor pool area with lounge chairs and mountain backdrop" },
    { src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Amenities/671d3659cfd72.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761503706&Signature=lDDVjW6eVMaeSK1Hy4k2iRGaegqdVLkcPLFw6N7A9DnSK1A%2F%2FX46uqAxBf%2BzXRnMVoxK4fTk9HOpHpew8Cc5kY49FtYBd86%2BOsAWeexkcggg6%2BrRZKLWlma%2F8RLxKbADyerE4mXqc9uMxaoV1QOEh1D9rZvp4VO788jIeyMzhcMx%2F1qpXxm5FvQoM6aBhaiKatXfIBF1RxFmr%2F0RAc6ZK3zIASKFhyJ6upvPZhgYQFvSyGTVU7uB3NaK1bVEd2Lrx0JkX2K4N3vHiZCcwvycqMxwP2e5fMFGRVtqs1SnjCEkWoOZfAzabjkyck3BLfEXB3a8Bk0uh6gTqar0kbTIFA%3D%3D", alt: "Spacious dining area with large table and elegant decor" },
    { src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Amenities/671d365a260d0.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761503706&Signature=FDwwe%2FRwUeSInPd5WtELiYdPpPRwKdbdv2BLk%2Bc1kcNv57cs%2BbSZ2z3xxLkdAcngeUqivhgB09%2FDYYqlr0gO9WuHH7pSr39BeCgdh466KIuVBWy8HRHL3j%2Be2u3L%2FhQFBY4ykl17pCFkD13tCeyS8WGs%2BEKY%2FgngTtHnPrpanDb4uxigRc4uwx%2B5oxt90tlHw%2BQE8diV1HTlR%2FCXAPhICVrErVp%2FWozoPRluRqzlN09Gmsc1Q8UWBV8eKbDcuNaOrfPfCOIzvORYL0uermbFDb9FnttS3jhDUqMFMe44BQrCluC9K51lvYkvoioFgfsP1bhkv2zTYPTZvGu2bqwJFg%3D%3D", alt: "Well-equipped kitchen with modern appliances" },
    { src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Amenities/671d365a70045.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761503706&Signature=dn4w%2BZGb1pFfLD1%2B62qzaK0me0tUwW753T0bs71h03%2BZ0mB7yod%2BvOFMdkj8sD%2F2qWMEpfrbKoTktWq202ZgYVzblmxFcY4KLuk07mfT3LdPjPy%2FnYrBzuLqCtfGOE%2FwjWynMWnA%2Bh53nnFj%2FuwmgLy68aAKBFvP12O9QwDVyLrZjOszNS6kxUIHZTGriJjGGYWbRUIbRIDrV51wPXG1Qn%2FYgxAWiuUdKmmJWZj4NSp5ZwH5U0MSSHSD78bHMZnblVFORV8YrALzY%2BvNEj9FiKL5YMvd3m9qMUPAZD%2FdCf1eG5Rs30RHIPkHSFdiYI2R0U8Z4ZSX%2FBgalnwbwWLNkA%3D%3D", alt: "Comfortable bedroom with rustic wooden furniture" },
    { src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Amenities/671d365ad51da.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761503707&Signature=QEeYvFW%2BVOnawKKF1MPG6Gef32RndtTEQ%2FmUjcf4nqK%2FueaYesQFpfPoHtgjAD381FaecmQ93XiUioAguVb3Lxl2xgy7P%2FDT5yF5WKI4affdt2RuM8wPkyJbs0mbWZZ7J0eb4ivBsyFfPbU%2FJNdI8yLSeVlDTLHK6xZsn1bPcA4H%2BG4BoeCPZZrgxuEtXo8Hp1JBoQeE8htj7yrZ2YNxfRsKdrf8thIU1m62cNKs05fzij5QJYw1Dl%2BcxfuVjYAJrXG5ok%2BhhaepcgBIAOZPT9y1FEJjn2FzFJ7%2FscXOtZ%2BwMKGcUJ6CuMRNaNMaBjhw3u7UU6qAAVnbedO0dMbKQQ%3D%3D", alt: "Cozy seating area with fireplace and mountain views" },
    { src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Amenities/671d365b21e97.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761503707&Signature=ZOoU9moRXhUFGWy8Z4x6rA75B5uLVDdimAxchM0HApt3D5E76NtfUUDogOboYrxQzr00gYQmO2kZwIbA8lhaJMkpLCMOVP44jJTTQdU5TxiQjNrJcMhV%2Bn730%2F0hFdMgWZASNJ1uSgC9C5PU9S88nUlg%2BD057y9Q9t43wLOx0t%2FDh0VpQyNX42kKoiyLjwNcZa3sYQt0V%2BXgdguaGR8yO3fDU41PQLfm%2FAj3xWlXWUSO%2BvIzOwJ9DsjYVbUZrWhwtVz3DSbYKQZd9m3ZT%2BRPi35qEvFqYHeAy28VGz9QFOTjUJe7fmNeF8AbIzyxYpgcQeqeU%2BLzUm8yeGIaLiYCOg%3D%3D", alt: "Outdoor terrace with comfortable seating and scenic views" },
    { src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Amenities/671d365b663f7.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761503707&Signature=MJZqoXW8yB5Qbma4JxLWyxdlbXWyzGMkJ%2BIjGDftXw0FSauISAGuewHjkIHJnNwZr77cb5x9rQ6c55Y2iDdjI8IagP4hG0Qmds1JNleZfJL4ARyyyRKm0NtwbX3a9z3UilrRb67mZ%2FNW%2FeQhimc5NE1VsDffx2J4%2FUk6e73AT%2FSpbsmVg%2F85JZ4s06H8tt7ZPiWZrGa5Elpym%2FNdNXQBJ7AZlmHILcLP5SmwNNMw5oLrcYXhxvz8hcF2DEc2ftwlewsHjj35wUkfe%2BOtMlnpt1tP71%2B7n6fi%2BjLfGmD2twor6JPU0SdWsV8w3DXIbjuUrzP05Yc536ul8sHVESsCVQ%3D%3D", alt: "Elegant bathroom with freestanding bathtub and mountain view" },
    { src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Amenities/671d365bc0eaa.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761503708&Signature=V5lubwFq%2BCjtgEB7ujLKyFslZEcxEpg%2FzeMSPTdGQRPmg0u3LIZUFdCIwWb9nTLj%2FQ59TnW3EfRDIqfU6JjIJKUGFv%2BIXMFF6PwZfOe1AC5w5sYfavN3AUxRgKMa3wDr%2BU8zLYoriAdqoFnWH1eBr6j3basZ7svdQzCgoZDJfGnatirPdjX%2BUp1iv5WT0%2BypCk5rb0pHxs05qekHtywCI3GqFNTsV4uIGVtqVI%2Fs87hvTXypgOE5s65pRHSZCYjUTBp4Y%2BwvscyWHKWo66fe1WIKhGWnlFEKh7WGRAPPUpL3%2FuZFIWfznEQ1T%2FN1yDicmZ6PbDfM%2Bf6oxFEbrudqmQ%3D%3D", alt: "Spacious bedroom with large windows and mountain views" },
    { src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Amenities/671d365c07354.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761503708&Signature=QE22oT2r1RT2XwRJye6So0klpLrzq12zGI1qtLaj%2FwxGgfHN3dQTb8B3dst1NknI9vrOqA5eDP%2FhqiYAkFYRc4pawAHQrqqGXcaJU3rn9DK%2B%2BVdZzOx5zys77%2BFHVAuUbq%2Fr%2BVQigI1GrDmbpcK3U82eUdtvsMEYhELlLK1HAZA0Sg31aJXm7E2SOWCMx5DmU2y6j0ZnoOMNsmlkmDMTDILeZAc7hdOESTtUUAOIcCyUHVvzUxRiVC0TSOvihRasFcmgF7nbIdL2EFpZL1tiCFDU6makDynCXPtcslnCZzGJPzMbdxkRWjVKkjod7h9iGoH9Xjg0RzQJb7%2FW%2BQN6Xw%3D%3D", alt: "Modern bathroom with glass shower and stylish fixtures" },
    { src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Amenities/671d365c65436.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761503708&Signature=mMB%2F6u%2BJ2ndQjbt3%2F0bbPEuINPr2NIlgInLHMFlbxXq215AbIMm7plxHmLSs%2ByPb0eTUfNMPH961%2F8vLFasklxKRQU1mdyQPiqN5GPXQBKYTT2YGs9HI8cEt10dZkvmb4ITGfju%2BaYE0ZAoAZLudGatSdWI5p0U7PjVIu97uRK4Se3GdsyWtxBAx0YPDarJeSYVuujMm7fFhIRNst4RjWu64pIGwoTKbDgZ51%2BY3Zp4qJToWVARGQDOBOuKEyexiLBW8hrsBbrGxVPdY%2B7G2Uw8bUmC%2BXlP87ol58jfG2vDgOPJNBNioTLz6B1bi4BoKLuAc8yzwVyA3d3N81e5oqQ%3D%3D", alt: "Cozy living room with fireplace and comfortable seating" },
    { src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Amenities/671d365cc8263.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761503709&Signature=Wrec3ZXvRp42yf3HGjIumGPDoWTtmveEdzctkQChUEBj3ia0pPswYsYKFd5Kev3AcgraTSXg0y8Z3IM45HOzB1k3fl40gQMh3jV4ibdSXLGlbsl1HH8h53z2eLSx%2B%2BWff5ET%2FTVq9%2BFEQPmO724zfMy1BbQM45uHuDU%2FeFi1fE8CvGEBCdl%2BgOKq0JOA0JY8TBLw63WrJvtFDoJxcxT%2BN%2BAvCelhghRL5A7elqO5W%2BcMPrikipGTgl4zpdaUlmlQhAqGZR3r67ITIWMw1Q48v4NJ8xYu21yFUV%2B6LYrsg%2FNNi1qA2mWBJ3VgXLOnt5PfOBLlAcASwluaB7%2BLtB9NjA%3D%3D", alt: "Outdoor dining area with stunning mountain backdrop" },
    { src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Amenities/671d365d9953c.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761503709&Signature=azrdt92FeuY9SGVt6jNsYkARFQDuGhfC4ydtIcanaYmk8VNmhaQmF%2BawfPTgM0tpcv7WdShOlZLZ2%2B5NU2xlGAw5S7shkJn2VydzYP6FFRIhqWNDLNrkbS4ARJz04tPrQzcBvp1tNCC0EKMdRPDmFF17zJyg83z4Bnd1AWLIaojaYMG3POa1jnz3TV00uOFTDv9kt8o5Qe8LOpK99LK0XG77QUckmpQlsmkijQA%2B%2B5yFrnCPxeqkFRSiDSwyHWAa7EoT%2BjfeL3MU4VVtWZtEYOXPHSTndW%2F7Y5KCcpENEsuZn3%2Fw%2FNLlbzA3eR7aw1LWzSol3Eh1ybn2XL79T9VzAw%3D%3D", alt: "Bathroom with stylish fixtures" },
    { src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Amenities/671d36589b00a.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761503705&Signature=kLQet8MR5gEIjGUih37uSUg7w5%2B1gFhUxxegRwjizEoZ7AYzCpNqFx94AkwoRgmY8TcbS%2BeFBTaOWjO2iyBTL05bumIPnXFnyinHeD1Lp3MoiQu9M5s07f%2FASRElmmtFMU1f1RrZjmCw6ZJsmoR6eBch8jrWUyG%2BTVpQOoicInhcO%2B1zh9C%2B6FfYvgw%2BSkCjNMcGDuj5%2BcDQnPSrs50VhGJRWO%2FDiP3sfy7zMxIo46RJu59W3mopFXsnyEgcb7sRoTRdzH04sGMf3b5w35iYx6DhpOh%2Fk22%2FhaGLE74JBa15E9rDF0jvXyZDKGpwXzapkY9i8YnEaIb91Bxd27hQtQ%3D%3D", alt: "Bathroom with stylish fixtures" }
]

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const Lightbox = ({ currentIndex, onClose, onPrev, onNext }) => (
    <AnimatePresence>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[105]"
        >
            <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white"
                onClick={onClose}
                style={{ height: '100px', width: '100px' }}
            >
                <X size={90} />
                <span className="sr-only">Close</span>
            </Button>
            <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white"
                onClick={onPrev}
                style={{ height: '100px', width: '100px' }}
            >
                <ChevronLeft size={90} />
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
                    <motion.img
                        key={currentIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        src={galleryItems[currentIndex].src}
                        alt={galleryItems[currentIndex].alt}
                        className="max-h-[95vh] object-contain"
                    />
                </div>
            </motion.div>
            <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white"
                onClick={onNext}
                style={{ height: '100px', width: '100px' }}
            >
                <ChevronRight size={90} />
                <span className="sr-only">Next image</span>
            </Button>
        </motion.div>
    </AnimatePresence>
);


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