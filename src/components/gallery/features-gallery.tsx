'use client'

import { useState, useEffect } from "react";
import NextImage from 'next/image'; // Renamed to avoid conflict with browser's Image constructor
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Preload image function
const preloadImage = (src: string) => {
  const img = new window.Image(); // Using browser's built-in Image constructor
  img.src = src;
};

const galleryItems = [
  {
    id: "215",
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/67401da32d86a.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763791139&Signature=iVaWSOQ6%2BY%2FLnHKXJPgjcymRBETYPFwQbVc4p%2FfAvdBjYH5hWw%2FSs63fGSKRqmMQDoXRwRr0%2Bfr2XhOgpq3frgkNixO57aI6Y8Vl8ilLYstdphTWh6gC0wR4%2BHyyDK0o39MHyq77qRtZuw6UFzIgojiaPh4%2BQsSTi2PaRKibMOCZnOvF6yeGfHpQaCH3JIFh%2FQ%2F4kXWBjNpkPywT0Y9b7FoNVaW045pKgODJIMGYXlU10%2B9vmhPfKwNMp6uWF%2FBT7cUwI%2FCNwZE6j36ue66CAPA6dM9iu7dSc8uA%2BA0xBfgR0o3Fg1EUE%2Bk%2B4L5D5PtK4LRYUkvO7RAyREMhLBM6KA%3D%3D",
    alt: "IMG_4145.jpg"
  },
  {
    id: "216",
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/67401da3cfbfd.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763791140&Signature=iQslxduUQVDM4gZdzJBy%2F11qpgNPTTDr%2B%2FbCDH%2Fmzhe1RUOGqnR6B6XFrLlrbg4%2BHosYOWdtXBOj8ViVTD606MfhNcno%2FvdX5%2Bb9jhoIW0rNXwfADv7LreB8JbPCSNCEBfJJekNvdLdv6nMKLQPbxwCCbSSWY2SLQufJZngTAje7mI6VFfON0trek%2Bn2eKxNelL79v66nnjGF106Pb5159kAtItSX4jUKTCe9o%2BU29JdwgliE%2FF%2BcRCH5S%2BTPtlSJc32KzsYgbzkwaPq4L4vOdWR0d9uMpi3fflgqFpl9pgIN0d6ND4b9oeLl%2BqwiX7n%2B9P1NzdzypNnxYfg0Njhpg%3D%3D",
    alt: "IMG_4150.jpg"
  },
  {
    id: "217",
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/67401dce55738.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763791182&Signature=WXQ4saG1bVPo%2Bwqaf5RyN9P1Mo9WH8972XkS6fUQjn8T5GEcxVTpfuRCUUiuyueiUvhY8DpbUjn73pKLBFKZnkONjMEjoqpOtXdh5Fd9TOqxof%2BFrLlAgPVDsvA3z18zQ8n7IYuCyUN56YovxbA%2Fy%2FshHkYq7qKFOk2BH2rhPS3P9v56IiDlCJ1f1fC5n7AwFJvQVc01Oq%2Fo0ULMltxWXAEVvEdaEs0Erm6shjfwPzb%2BGiRA4DWPI1OoJgstNWe22MT%2Fy%2B9MjN733OZ0KiRM9xh41x2fcfxwrIjZyf8Fpz05DKyvQFVhU9K7Lgg0EaQfahEi1m10qW%2Bbjz0iiyWJUw%3D%3D",
    alt: "2.jpg"
  },
  {
    id: "218",
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/67401dcede7b0.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763791183&Signature=lraHDde0YENNY%2F5WtHNRD2%2FDkSFGqseBO6n%2B3wJHfKlcbIqMZ%2BV8VnQleYIX0EAHUdWECqM7Xt%2Fh%2FG0TJN20aNCoEycAPiP42sykBj0G4mmapRod25LIGKg6fgQca7larTi5cWbn8bBDqinAo4ZcemLfUM5l8YoANdzpegSiEgwkARr%2FWr8b9eoJ7TFShWKykr3A0b%2FYGqmXH27AsvxinJgR0HprcYYs9ME4iJr4CvnijjQbAQacrZ9tkCn5kgxHpHxD5sU6zWZ8%2B2WSXrYXlj%2BujgXrLiL4QqKRiZMs%2FAJtOz1VxTNkJdDmDnyiF9SnKTgKmz1D9rhWYeIHiqQe3Q%3D%3D",
    alt: "3.jpg"
  },
  {
    id: "219",
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/67401dcf662dd.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763791183&Signature=WuL2QGgbjU2kfkjHUDYEKPspG2C1VaDf9j1tvx5JWkIRi1F6SsrIvZjn4dQrjoI7xzYbgZUNaRVPRNgKegkrVQYwRmBCk1xnhyZVMN5XNivmY3sIqAnqAWkTfvy476EiWAmWn%2BYrouGh3TGKpt%2FvGlMQRu%2FyXUCrkR7bCqCu4YlSvIEiSaf%2BDrzC%2FkmPYIPLwZ84eWzDM%2BM5ejiDc0sqrNHEkocLccMIqWWIwTliaIptJPVLSphbxJ88ofyaAfdKFrV64snpbhUVkkA6SZSWkjqwWscYHTZ7nzH%2BeG7J%2Ff9zpbNnsDp49i0fQ2K0jrrw%2FigsyBq5RTYtdgKiIbHMQQ%3D%3D",
    alt: "4.jpg"
  },
  {
    id: "221",
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/67401e51161d4.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763791313&Signature=Ichn241uGd%2BzuPclsXjt8lBxlRTsqk7D2qMul3J%2BUEUOL3kvKPAjQ8pWZZQb24FWAmZzlB8%2Bx8abT2OhM5CG6fPBWLB%2FLNdWRoWgtH6pY4GGpY2BBwA%2BLjoV63cYVJwzUjCkv%2Bv3%2BDeKmTT3h8f%2BP8NCyFfigx3MuWfIWSRB%2FZMO2gQeU2saQxY4qFH477w99rmpkrU1062Tha7uXRtSJcxOBWqnXsgPT1Wd6%2F1AFo50J7iEy%2BzcevB0YQ8eevJ23iZ93d3mPD9QJqm0C0xRMevx1pxDqkXI2T6iiZRj5JG4TToJf1uf0kLZaCSi4SAbnJKfy5iVDpZlHxErdd3%2BNQ%3D%3D",
    alt: "IMG_4730.jpg"
  },
  {
    id: "222",
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/6740e5fb6e5b4.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763842428&Signature=E5DQ0IW3eaYsVI8VL3%2BeZGBHcJHUMwp%2BNEzO7DViMU1LDS1rz5WdWqtVq3zBnmSGmMckp3%2FK%2B5YihSpnrkouSV%2FyNKXCoqCf1w6p%2FpJd%2BDimKPnj3jcZGxOSwEiinzCaWivVCHuin9nLpL%2BRtr%2Btlx0FsLlyJvMkRtQBRHAb4y6auKzNxvoFw0Cp30DBBht1jWLyN6Cd33ZgQTuXbWmEAfoQEkLAsU8Jph9pCvRrnvHiI50DIMcyYMFXhJABiVkARedAUXqR7xCtLgGde4QZ2DzyR5ZI9Zi%2FldKWdd19iNQzip0177OQ4Jh%2FjMJybTxspB2h2ds8w4t7wFXvEfGx%2Bw%3D%3D",
    alt: "IMG_3946.jpg"
  },
  {
    id: "223",
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/6740eeff3860c.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763844735&Signature=fCE1dnw%2FKP%2F2x6Xqc2nCcRAhFkFvJSGTQf4ZyySYpeemjBKmRK%2BbjGQ%2FYTNp7upFSO6qdd%2Bv%2B4bHQ01JMDWKop0ATjJ6HrYGP8QLz5UFCdtr2IJiJ6u7C%2FLi41WJc8uX5MaoBS1YZjttv0V7s6pMdbXXV2Y5KCrt8qWvWr2xj2Kq2Qf%2FcRMjwnmViHZNYLHqV7ymMi63yg8TWqUypPVHJq%2FVtjQiex0Xp0ndCSf5sJzqTqRALYsU%2BEYgk0rr11eAP7qGQV1GSwz5dOFtwmzDzULBnyhJ5A0QrZWi5BQCVenJ%2BBa3fhJUyzJf8I8vEi5zuXQN2vW3yOyPxnKq%2F9IdlQ%3D%3D",
    alt: "IMG_4145.jpg"
  },
  {
    id: "228",
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/6740e80de5967.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763842958&Signature=PYQ%2BB3F6y%2FkOZTqj0DLgtWHp%2B2seXDNIBKLYoHZ1gDeAEfji9NjqLtRyxA2QHyTXcxliErU3pzpyiVwrKuD5nwbwS0FZYzs8sjMQFvy4I8S4gNtawRQt40HLxix5LYvuY1yQLEety8YPGjRbzj6EjPIzkOAT4ExNolOlo%2FhSI2aPrX2MD%2BDzdnRSgpF6OedinvdJj%2BzW1yjs4Z2cughjBByQl3l2o%2Fvyv3o1MmSSxKbLj3EbAiG8Pg9Vgc5hFFO9u%2BFnbi0q9Z%2BiAxYisvbHsjNNnXaKFMqPO7vA1M930tW4E4FkF5LCJcUzwJWK0DitHc0WbhcJuUhhJzrkty%2Bhxw%3D%3D",
    alt: "g.jpg"
  },
  {
    id: "229",
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/6740e90926e16.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763843209&Signature=eHYvsjXWVZJA6k5pA6uYkqkTTSP0kkrESvKXDeFwd92Hur7lrAD1iBBcjNHCBuIvUe0ikq5cvcaV2iJdEyTkOgX2t5fOOsBWj%2BSOjeNde1pVdinAoFxfIzBwb3S7Phx1%2FG6ziOK6OunxiX%2BfbVFlx13wSwuhVNUs%2B5gV8EQ3fk0zSUjg7a%2FvJ44oDUx%2Fri2T7atupNruqqrLmID8bZaCoCYlqLbjThxOhHvqZyqHuhgtBkeMyDradcDT00dWJN8Oum8f6E56YO%2B3GKwupydBZGxRtvEraxHdbaXrKoJ%2BwHZO2FnWT0UTYSgZF%2BsTGd%2FT2weou%2BRaidU3HofJeAZc8Q%3D%3D",
    alt: "IMG_4361.jpg"
  },
  {
    id: "230",
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/6740ef3066d53.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763844784&Signature=mgNXk5ZTFQGqQi441zhDQWcdAm8PhbH5E0ywUoPQE%2B2QymoMA7%2BGMG5CxmMCEiiKFUrHM9sG%2BZcG0Gwn%2BwCwOwTiAMLKmMmoLFPZZDfFcFBgL6aw3E8T73L0%2B8gRLlWovYL663%2FwLe8L%2Fmb19CGFFgln5KJwkpm9B5k6bDNq%2FbQ3fIzXDILV2dGLGREvHAQA3vdV9vGQT1j1%2BMHJz6Q7wGsw1A%2BeLZjSvZDONISNHBPP5gLHAlTAOCXw9u5wf3I53mtlzkNGP1XLWqnvMColjPTBGY%2FT6c7xoqRJyX57TQgfb6SV%2BN5wTwJcquQtqCkQdrxRm1qT%2Ffeu38J6VqceWQ%3D%3D",
    alt: "c.jpg"
  },
  {
    id: "224",
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/6740e60a653fa.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763842443&Signature=eyQCRwOSk5gfJ7f3i7vhMCIcbjs9uPHKu38MC%2Fy%2BZMIJJ05Ut2fGwHyW0Ne3p9VZ4FX30pGJyAltPw3NCa%2F9XMqsxPY3kOoaDVqAnamM7m3N7bX5xgszTKeubeXwc1QxVi2z8aGDSjXBz1LzptFSgyBsid6tnexdhpBiPMF9TEAXV2l2vPXqgEX3qd6XllOF19gbkWNIKM7WNRhIgvYbEKwiEmR%2BgrRyI6EhN3QC7%2F3ii2dq%2BqFYDBVVF6WROovqLkbZfGDJJSZUJJID4mzFSZRhn4%2BNx7zRDpiwgIurkCQfndLDNuO90%2Ff%2FPt190V4R4h6sxCxDGPNivk3OeLYTLQ%3D%3D",
    alt: "IMG_3921.jpg"
  },
  {
    id: "225",
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/6740e645b4bb7.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763842502&Signature=CnPMk7zXqJdCNSgbOw7f2%2FTROVHy2Frfh0odjXkbGRbOkI652be09Nw2oYGFuVUydEf4hXrCJL6KL%2Fm8a5Sy33uC8QniR3F65AOcujQKm7nFkV604AL82kLlue4apoD7x0PqJNqfWab1fCCczE8L5Smte%2BAScxzReisGForJJLiTGpO0T4yxMBFJh5JPYou3kq6Up8fleFTZedEXRPlTtRLrocNjU73%2B%2BtAZtYnXWjpKvw%2F4VMzSYMZLhSq59nlY5ablAiz6uhVm72VdoM3Mfxqb4JKNpxtQJzxCYpywOvr5o02%2FMcBCoydSXMnuNd6FG9JqT43boAMCyah%2F1hYWFw%3D%3D",
    alt: "IMG_4172.jpg"
  },
  {
    id: "226",
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/6740e6464b792.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763842502&Signature=Wsu%2F49ZII0xoaw6I54W0FeTqFSS4DKzp7wQnR97j10kL8JiLuvwyg%2FCIaq5rUuvHVxImn9eKxd5o2sTsA8YEtXdjv0IzQ80tgxIk2Vmivwm3Y1rLUjoEc73tGgPLiFHg9YTmRNg%2FPMk1le6u1CZoZNuYJwW9Yu5pU%2FYxPQL%2B7QZc4x%2Ft506iKuTQSDNzGgD3Vbiya0q1L6Ko45WIq87Ad4UBtdbFedvltdIK2KQNhaAbFL1f4MTmN1undJpODIdzKRzF0NW4JUVhjqxnHVCHHZN%2FjgrNvBYG0Y4Z7irnjrs5z1cIgU68jL9scL%2BVN1XD7YD3%2FmfxLVvORCeedvyBPQ%3D%3D",
    alt: "IMG_4255.jpg"
  },
  {
    id: "227",
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/6740e66acde62.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763842539&Signature=WbIZUiYEPzRt%2F81x%2Fk5dTTW09AhnRgc6mC0z%2BtpEKTQlo2%2Fz42jyJAWXlRFWDfthXxrAiMcb%2F7ylVevTCVM1gkHlhTjH6EhrmJw8c%2BfkWLPV04%2BYnH4gb3eUO1l735LxZ1pOhExn3T1PXfXlUBPDAVoPd9JuFoqlCV%2BgR6xcRrkqJ0UMoMVcNbE5c5vXHRriWnFzMWIF5S0dMxzcoebVYcMMN%2BC8Es14sow7b7Ta%2F3Vmk0hhHlCwi3j5tg6wX33qpfYSZvnVT4VumeKzjF7QSPVRAbdi2%2FMd1JNnz6ncIIQ1CNv9CkVhEJihGWUr3FZZhErQCSOIh2pHQ0%2BhDqXKsw%3D%3D",
    alt: "IMG_4880.jpg"
  },
];

// Lightbox Component
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const Lightbox = ({ currentIndex, onClose, onPrev, onNext }) => {
  // Preload adjacent images
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;

    preloadImage(galleryItems[nextIndex].src);
    preloadImage(galleryItems[prevIndex].src);
  }, [currentIndex]);


  return (
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
              className="absolute top-[95%] left-8 md:top-1/2 transform -translate-y-1/2 bg-transparent bg-opacity-80 rounded-full p-3 hover:bg-opacity-100 transition-transform hover:scale-105"
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
                  loading="eager"
              />
            </div>
          </motion.div>

          {/* Next Button */}
          <button
              onClick={onNext}
              className="absolute top-[95%] right-8 md:top-1/2 transform -translate-y-1/2 bg-transparent bg-opacity-80 rounded-full p-3 hover:bg-opacity-100 transition-transform hover:scale-105"
              style={{ height: '120px', width: '120px' }}
          >
            <ChevronRight className="h-[80px] w-[80px] text-white" />
            <span className="sr-only">Next image</span>
          </button>
        </motion.div>
      </AnimatePresence>
  );
};

export function FeaturesGalleryComponent() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
        prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  useEffect(() => {
    galleryItems.forEach((item) => preloadImage(item.src));
  }, []);

  return (
      <motion.section
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="bg-white py-16"
      >
        <div className="container mx-auto px-4">
          <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            {galleryItems.slice(4, 7).map((feature, index) => (
                <motion.div
                    key={feature.id}
                    className="aspect-[4/4] cursor-pointer"
                    variants={itemVariants}
                    onClick={() => openLightbox(index + 4)}
                >
                  <NextImage
                      src={feature.src}
                      alt={feature.alt}
                      width={300}
                      height={400}
                      className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                  />
                </motion.div>
            ))}
          </motion.div>
          <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            {galleryItems.slice(7, 10).map((feature, index) => (
                <motion.div
                    key={feature.id}
                    className="aspect-[3/4] cursor-pointer"
                    variants={itemVariants}
                    onClick={() => openLightbox(index + 7)}
                >
                  <NextImage
                      src={feature.src}
                      alt={feature.alt}
                      width={300}
                      height={400}
                      className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                  />
                </motion.div>
            ))}
          </motion.div>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {galleryItems.slice(10, 12).map((feature, index) => (
                <motion.div
                    key={feature.id}
                    className="aspect-[3/4] cursor-pointer"
                    variants={itemVariants}
                    onClick={() => openLightbox(index + 10)}
                >
                  <NextImage
                      src={feature.src}
                      alt={feature.alt}
                      width={300}
                      height={400}
                      className="w-full h-full object-cover rounded-lg"
                  />
                </motion.div>
            ))}
          </motion.div>
          <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {galleryItems.slice(12, 15).map((feature, index) => (
                <motion.div
                    key={feature.id}
                    className="aspect-[3/4] cursor-pointer"
                    variants={itemVariants}
                    onClick={() => openLightbox(index + 7)}
                >
                  <NextImage
                      src={feature.src}
                      alt={feature.alt}
                      width={300}
                      height={400}
                      className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                  />
                </motion.div>
            ))}
          </motion.div>
          <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            {galleryItems.slice(15, 18).map((feature, index) => (
                <motion.div
                    key={feature.id}
                    className="aspect-[4/4] cursor-pointer"
                    variants={itemVariants}
                    onClick={() => openLightbox(index + 4)}
                >
                  <NextImage
                      src={feature.src}
                      alt={feature.alt}
                      width={300}
                      height={400}
                      className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                      loading="lazy"
                  />
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
        </div>
      </motion.section>
  )
}
