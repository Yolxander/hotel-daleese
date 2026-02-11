'use client';

import { Cormorant_Garamond } from 'next/font/google';
import { motion } from 'framer-motion';

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '700'] });

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerChildren = {
  animate: { transition: { staggerChildren: 0.1 } },
};

type ArticleSectionProps = {
  content: string;
};

export function ArticleSection({ content }: ArticleSectionProps) {
  const paragraphs = content
    .trim()
    .split(/\n\n+/)
    .filter((p) => p.trim());

  return (
    <motion.article
      className={`container mx-auto px-4 py-16 ${cormorantGaramond.className} mt-[190px]`}
      initial="initial"
      animate="animate"
      variants={staggerChildren}
    >
      {paragraphs.map((paragraph, i) => (
        <motion.p
          key={i}
          className="text-[20px] leading-relaxed mb-6 text-gray-800"
          variants={fadeInUp}
        >
          {paragraph.trim()}
        </motion.p>
      ))}
    </motion.article>
  );
}
