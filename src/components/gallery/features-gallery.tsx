'use client'

import { useState, useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const BUCKET_BASE = 'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese';
// Fallback when server doesn't pass imageUrls — all 30 from hotel-daleese bucket so gallery always shows
const FALLBACK_IMAGE_URLS = [
  `${BUCKET_BASE}/IMG_9625.jpg`, `${BUCKET_BASE}/IMG_9621.jpg`, `${BUCKET_BASE}/IMG_9618.jpg`,
  `${BUCKET_BASE}/IMG_9617.jpg`, `${BUCKET_BASE}/IMG_9613.jpg`, `${BUCKET_BASE}/IMG_9580.jpg`,
  `${BUCKET_BASE}/IMG_8791.jpg`, `${BUCKET_BASE}/IMG_7629.jpg`, `${BUCKET_BASE}/IMG_6559.jpg`,
  `${BUCKET_BASE}/IMG_6558.jpg`, `${BUCKET_BASE}/IMG_6343.jpg`, `${BUCKET_BASE}/IMG_6339.jpg`,
  `${BUCKET_BASE}/IMG_1632.jpg`, `${BUCKET_BASE}/IMG_1631.jpg`, `${BUCKET_BASE}/IMG_1630.jpg`,
  `${BUCKET_BASE}/IMG_1628.jpg`, `${BUCKET_BASE}/IMG_1627.jpg`, `${BUCKET_BASE}/IMG_1625.jpg`,
  `${BUCKET_BASE}/IMG_1611.jpg`, `${BUCKET_BASE}/IMG_1610.jpg`, `${BUCKET_BASE}/IMG_1609.jpg`,
  `${BUCKET_BASE}/IMG_1162.jpg`, `${BUCKET_BASE}/IMG_0843.jpg`, `${BUCKET_BASE}/IMG_0842.jpg`,
  `${BUCKET_BASE}/IMG_0646.jpg`, `${BUCKET_BASE}/IMG_0644.jpg`, `${BUCKET_BASE}/IMG_0638.jpg`,
  `${BUCKET_BASE}/IMG_0635.jpg`, `${BUCKET_BASE}/IMG_0632.jpg`, `${BUCKET_BASE}/IMG_0508.jpg`,
];

// Preload image function
const preloadImage = (src: string) => {
  const img = new window.Image(); // Using browser's built-in Image constructor
  img.src = src;
};

type GalleryItem = { id: string; src: string; alt: string };

function Lightbox({
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  items: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    if (items.length === 0) return;
    const nextIndex = (currentIndex + 1) % items.length;
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    preloadImage(items[nextIndex].src);
    preloadImage(items[prevIndex].src);
  }, [currentIndex, items]);

  const item = items[currentIndex];
  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[105]"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-transparent bg-opacity-80 rounded-full p-3 hover:bg-opacity-100 transition-transform transform hover:scale-105"
          style={{ height: '120px', width: '120px' }}
        >
          <X className="h-[60px] w-[60px] text-white" />
          <span className="sr-only">Close</span>
        </button>
        <button
          onClick={onPrev}
          className="absolute top-[95%] left-8 md:top-1/2 transform -translate-y-1/2 bg-transparent bg-opacity-80 rounded-full p-3 hover:bg-opacity-100 transition-transform hover:scale-105"
          style={{ height: '120px', width: '120px' }}
        >
          <ChevronLeft className="h-[80px] w-[80px] text-white" />
          <span className="sr-only">Previous image</span>
        </button>
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
              src={item.src}
              alt={item.alt}
              className="max-h-[90vh] object-contain rounded-lg shadow-lg"
              loading="eager"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
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
}

function buildGalleryItems(imageUrls: string[]): GalleryItem[] {
  return imageUrls.map((src, i) => ({
    id: `gallery-${i}`,
    src,
    alt: `Hotel Daleese gallery ${i + 1}`,
  }));
}

/** Deterministic shuffle so gallery order is fixed but random-looking (like Casa Daleese). */
function shuffledForDisplay<T>(array: T[], seed: number): T[] {
  const arr = [...array];
  let s = seed;
  const random = () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Row pattern: 2, 3, 4, 3, 2, 4, 3, 2, ... for varied layout
const ROW_SIZES = [2, 3, 4, 3, 2, 4, 3, 2, 3, 4];
const INITIAL_ROWS = 2;
const ROWS_PER_LOAD = 2;

function chunkIntoRows<T>(items: T[]): T[][] {
  const rows: T[][] = [];
  let i = 0;
  let patternIndex = 0;
  while (i < items.length) {
    const size = ROW_SIZES[patternIndex % ROW_SIZES.length];
    const take = Math.min(size, items.length - i);
    if (take > 0) rows.push(items.slice(i, i + take));
    i += take;
    patternIndex++;
  }
  return rows;
}

export function FeaturesGalleryComponent({ imageUrls = [] }: { imageUrls?: string[] }) {
  const urls = imageUrls?.length ? imageUrls : FALLBACK_IMAGE_URLS;
  const items = useMemo(() => buildGalleryItems(urls), [urls]);
  const shuffledItems = useMemo(() => shuffledForDisplay(items, 0xda1e5e), [items]);
  const allRows = useMemo(() => chunkIntoRows(shuffledItems), [shuffledItems]);

  const [visibleRowCount, setVisibleRowCount] = useState(INITIAL_ROWS);
  const visibleRows = useMemo(
    () => allRows.slice(0, visibleRowCount),
    [allRows, visibleRowCount]
  );
  const hasMoreRows = visibleRowCount < allRows.length;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  // Once the section has been visible, keep it visible so images don't re-run when leaving viewport
  const hasBeenVisibleRef = useRef(false);
  if (inView) hasBeenVisibleRef.current = true;
  const showContent = hasBeenVisibleRef.current;

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? shuffledItems.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === shuffledItems.length - 1 ? 0 : prev + 1));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={showContent ? "visible" : "hidden"}
      variants={containerVariants}
      className="bg-white py-16"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4">
          {visibleRows.map((rowItems, rowIndex) => (
            <motion.div
              key={rowIndex}
              className="grid w-full gap-4"
              style={{
                gridTemplateColumns: `repeat(${rowItems.length}, minmax(0, 1fr))`,
              }}
              variants={containerVariants}
            >
              {rowItems.map((feature) => {
                const globalIndex = shuffledItems.indexOf(feature);
                const isFirstRow = rowIndex === 0;
                return (
                  <motion.div
                    key={feature.id}
                    className="aspect-[4/3] cursor-pointer min-h-0 overflow-hidden rounded-lg relative"
                    variants={itemVariants}
                    onClick={() => openLightbox(globalIndex)}
                  >
                    {/* next/image caches so images don't reload when leaving and returning to the page */}
                    <Image
                      src={feature.src}
                      alt={feature.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      loading={isFirstRow ? "eager" : "lazy"}
                      className="object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 min-h-0"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          ))}
        </div>

        {hasMoreRows && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleRowCount((prev) => prev + ROWS_PER_LOAD)}
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
            >
              Show more
            </button>
          </div>
        )}

        {lightboxOpen && (
          <Lightbox
            items={shuffledItems}
            currentIndex={currentImageIndex}
            onClose={closeLightbox}
            onPrev={goToPrevious}
            onNext={goToNext}
          />
        )}
      </div>
    </motion.section>
  );
}
