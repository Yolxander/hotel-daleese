'use client';

import { useMemo } from 'react';
import DOMPurify from 'isomorphic-dompurify';
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

function looksLikeHtml(text: string): boolean {
  const trimmed = text.trim();
  return /<[a-z][\s\S]*>/i.test(trimmed);
}

type ArticleSectionProps = {
  content: string;
};

export function ArticleSection({ content }: ArticleSectionProps) {
  const { isHtml, sanitizedHtml, paragraphs } = useMemo(() => {
    const trimmed = content.trim();
    if (!trimmed) {
      return { isHtml: false, sanitizedHtml: '', paragraphs: [] };
    }
    if (looksLikeHtml(trimmed)) {
      const sanitized = DOMPurify.sanitize(trimmed, {
        ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 's', 'u', 'h1', 'h2', 'h3', 'h4', 'ul', 'ol', 'li', 'blockquote', 'a', 'code', 'pre'],
        ALLOWED_ATTR: ['href', 'target', 'rel'],
      });
      return { isHtml: true, sanitizedHtml: sanitized, paragraphs: [] };
    }
    const paras = trimmed.split(/\n\n+/).filter((p) => p.trim());
    return { isHtml: false, sanitizedHtml: '', paragraphs: paras };
  }, [content]);

  return (
    <motion.article
      className={`container mx-auto px-4 pb-16 pt-8 ${cormorantGaramond.className}`}
      initial="initial"
      animate="animate"
      variants={staggerChildren}
    >
      {isHtml ? (
        <motion.div
          className="article-content text-[20px] leading-relaxed text-gray-800 [&_p]:mb-6 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_li]:my-1 [&_blockquote]:border-l-4 [&_blockquote]:border-gray-300 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-600 [&_blockquote]:my-6 [&_a]:text-blue-600 [&_a]:underline [&_a]:hover:text-blue-800"
          variants={fadeInUp}
          dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
        />
      ) : (
        paragraphs.map((paragraph, i) => (
          <motion.p
            key={i}
            className="text-[20px] leading-relaxed mb-6 text-gray-800"
            variants={fadeInUp}
          >
            {paragraph.trim()}
          </motion.p>
        ))
      )}
    </motion.article>
  );
}
