'use client';

import { Cormorant_Garamond } from 'next/font/google';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '700'] });

// Define the props type
type SuiteNavigationComponentProps = {
    currentSuite: number;
};

export function SuiteNavigationComponent({ currentSuite }: SuiteNavigationComponentProps) {
    // Update logic for previous and next suites
    // currentSuite: 0 = Casa Daleese, 1-4 = Suite 1-4
    let previousSuite: number | 'casa' | null = null;
    let nextSuite: number | 'casa' | null = null;
    
    if (currentSuite === 0) {
        // Casa Daleese: next is Suite 1
        nextSuite = 1;
    } else if (currentSuite === 1) {
        // Suite 1: previous is Casa Daleese, next is Suite 2
        previousSuite = 'casa';
        nextSuite = 2;
    } else if (currentSuite > 1 && currentSuite < 4) {
        // Suite 2-3: previous is previous suite, next is next suite
        previousSuite = currentSuite - 1;
        nextSuite = currentSuite + 1;
    } else if (currentSuite === 4) {
        // Suite 4: previous is Suite 3, no next
        previousSuite = 3;
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`w-full bg-white text-black py-8 flex flex-row justify-center ${cormorantGaramond.className}`}
        >
            <div className="w-full px-6">
                <div className="flex justify-between items-center">
                    {/* Show the previous suite link if it exists */}
                    {previousSuite && (
                        <Link
                            href={typeof previousSuite === 'string' ? '/suites/casa-daleese' : `/suites/suite-${previousSuite}`}
                            className="group flex items-center space-x-2 hover:opacity-60 transition-opacity"
                        >
                            <ChevronLeft className="w-10 h-10" />
                            <motion.span
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-3xl"
                            >
                                {typeof previousSuite === 'string' ? 'Casa Daleese' : `Suite ${previousSuite}`}
                            </motion.span>
                        </Link>
                    )}

                    {/* Show the next suite link if it exists */}
                    {nextSuite && (
                        <Link
                            href={typeof nextSuite === 'string' ? '/suites/casa-daleese' : `/suites/suite-${nextSuite}`}
                            className="group flex items-center space-x-2 hover:opacity-60 transition-opacity"
                        >
                            <motion.span
                                initial={{ x: 10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-3xl"
                            >
                                {typeof nextSuite === 'string' ? 'Casa Daleese' : `Suite ${nextSuite}`}
                            </motion.span>
                            <ChevronRight className="w-10 h-10" />
                        </Link>
                    )}
                </div>
            </div>
        </motion.section>
    );
}
