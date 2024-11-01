'use client'

import { Lora } from 'next/font/google'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const lora = Lora({ subsets: ['latin'] })

// Define the props type
type SuiteNavigationComponentProps = {
    currentSuite: number
}

export function SuiteNavigationComponent({ currentSuite }: SuiteNavigationComponentProps) {
    // Define previous and next suites based on the current suite
    const previousSuite = currentSuite > 1 ? currentSuite - 1 : null
    const nextSuite = currentSuite < 3 ? currentSuite + 1 : null

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`w-full bg-white text-black py-8 flex flex-row justify-center ${lora.className}`}
        >
            <div className="w-full px-6">
                <div className="flex justify-between items-center">
                    {/* Show the previous suite link if it exists */}
                    {previousSuite && (
                        <Link href={`/suites/suite-${previousSuite}`} className="group flex items-center space-x-2 hover:opacity-60 transition-opacity">
                            <ChevronLeft className="w-12 h-12" />
                            <motion.span
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-3xl"
                            >
                                Suite {previousSuite}
                            </motion.span>
                        </Link>
                    )}

                    {/* Show the next suite link if it exists */}
                    {nextSuite && (
                        <Link href={`/suites/suite-${nextSuite}`} className="group flex items-center space-x-2 hover:opacity-60 transition-opacity">
                            <motion.span
                                initial={{ x: 10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-3xl"
                            >
                                Suite {nextSuite}
                            </motion.span>
                            <ChevronRight className="w-12 h-12" />
                        </Link>
                    )}
                </div>
            </div>
        </motion.section>
    )
}
