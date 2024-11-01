'use client';

import { FC, useEffect } from 'react';
import { Lora } from 'next/font/google';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const lora = Lora({ subsets: ['latin'] });

interface Facility {
  id: number;
  description: string;
}

interface SuiteInfo {
  facilities: Facility[];
  bathroomAmenities: Facility[];
  views: Facility[];
}

interface SuiteFacilitiesProps {
  suiteInfo: SuiteInfo;
}

const listVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const ListItem: FC<{ item: Facility; index: number }> = ({ item, index }) => (
    <motion.li
        className="pl-5 text-[18px] relative before:content-['•'] before:absolute before:left-0 before:text-gray-400"
        variants={listVariants}
        custom={index}
    >
      {item.description}
    </motion.li>
);

const SuiteFacilities: FC<SuiteFacilitiesProps> = ({ suiteInfo }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Debugging
  console.log('suiteInfo:', suiteInfo);

  if (!suiteInfo) {
    return null; // Or render a loading state
  }

  return (
      <section className={`bg-gray-100 py-16 ${lora.className}`}>
        <div className="container mx-auto px-4 flex justify-center items-center min-h-screen">
          <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              className="grid md:grid-cols-2 md:gap-[200px] gap-12 max-w-4xl"
          >
            <div>
              <motion.h2 className="text-2xl mb-4" variants={listVariants}>
                Suite facilities:
              </motion.h2>
              <motion.ul className="space-y-2 list-none">
                {suiteInfo.facilities.map((facility, index) => (
                    <ListItem key={facility.id} item={facility} index={index} />
                ))}
              </motion.ul>
            </div>
            <div>
              <div className="mb-8">
                <motion.h2 className="text-2xl mb-4" variants={listVariants}>
                  In your private bathroom:
                </motion.h2>
                <motion.ul className="space-y-2 list-none">
                  {suiteInfo.bathroomAmenities.map((amenity, index) => (
                      <ListItem key={amenity.id} item={amenity} index={index} />
                  ))}
                </motion.ul>
              </div>
              <div>
                <motion.h2 className="text-2xl mb-4" variants={listVariants}>
                  View:
                </motion.h2>
                <motion.ul className="space-y-2 list-none">
                  {suiteInfo.views.map((view, index) => (
                      <ListItem key={view.id} item={view} index={index} />
                  ))}
                </motion.ul>
              </div>
              <motion.p className="mt-8 text-lg font-light italic" variants={listVariants}>
                *Available for guests upon request.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>
  );
};

export default SuiteFacilities;
