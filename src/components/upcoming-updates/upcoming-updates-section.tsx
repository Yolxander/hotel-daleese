'use client';

import { Cormorant_Garamond } from 'next/font/google';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '600', '700'] });

export function UpcomingUpdatesSection() {
  const ref = useRef(null);
  const cardRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const isCardInView = useInView(cardRef, { once: true, margin: '-50px' });

  return (
    <section className="min-h-screen bg-gradient-to-b from-stone-50 via-stone-100/80 to-stone-100 pt-[140px] md:pt-[280px]">
      {/* Decorative top border */}
      <div className="h-px w-24 mx-auto bg-stone-300/80" aria-hidden />

      <div className="container mx-auto px-4 sm:px-6 max-w-4xl pb-20 md:pb-28">
        <div ref={ref} className={`${cormorantGaramond.className} text-stone-800`}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="text-sm uppercase tracking-[0.2em] text-stone-500 font-medium">
              What&apos;s next
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-12 leading-tight"
          >
            Upcoming Updates & Changes
          </motion.h1>
          <div className="w-16 h-px bg-amber-800/30 mb-10" />

         
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="text-lg md:text-xl text-stone-600 leading-relaxed mb-14"
          >
            Stay tuned for updates on our latest renovations, upcoming projects, and
            behind-the-scenes transformations. We&apos;re excited to share our journey of continuous
            improvement with you.
          </motion.p>

          {/* Current & Planned Projects card */}
          <div ref={cardRef} className="mt-16">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={isCardInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative rounded-2xl border border-stone-200/90 bg-white/70 backdrop-blur-sm shadow-sm shadow-stone-200/50 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-900/20 via-amber-700/30 to-amber-900/20" />
              <div className="p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-light text-stone-800 mb-2">
                  Current & Planned Projects
                </h2>
                <p className="text-stone-500 text-sm uppercase tracking-widest mb-6">
                  In progress
                </p>
                <p className="text-lg text-stone-600 leading-relaxed">
                  Check back soon for detailed information about our upcoming improvements and
                  renovations. We&apos;ll post timelines, photos, and news here as projects take shape.
                </p>
                <div className="mt-8 flex items-center gap-3 text-stone-500">
                  <svg
                    className="w-5 h-5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-sm">Updates added as we go</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isCardInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center text-stone-500 text-sm"
          >
            Thank you for being part of our story.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
