'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Facebook, X, ChevronDown } from 'lucide-react'
import { Cormorant_Garamond } from 'next/font/google'
import { motion, AnimatePresence } from 'framer-motion'

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400'] })

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isNavbarVisible, setIsNavbarVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)

    const handleScroll = useCallback(() => {
        const currentScrollY = window.scrollY
        if (currentScrollY > lastScrollY) {
            setIsNavbarVisible(false)
        } else {
            setIsNavbarVisible(true)
        }
        setLastScrollY(currentScrollY)
    }, [lastScrollY])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [handleScroll])

    const menuItems = ['About', 'Suites', 'Tours & Attractions', 'Gallery', 'Contact', 'Blog']
    const aboutDropdownItems = ['Amenities', 'Our Story', 'Life in Uvita']

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-10 bg-white py-4 ${cormorantGaramond.className}`}
            initial={{ y: 0 }}
            animate={{ y: isNavbarVisible ? 0 : '-100%' }}
            transition={{ duration: 0.3 }}
        >
            <div className="container mx-auto px-4">
                {/* Mobile Navbar */}
                <div className="flex items-center justify-between lg:hidden z-[101] relative">
                    <div className="flex items-center">
                        <Link href="/">
                            <Image
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-K8fD0AzAogPvBfE5bP3K9BJiN72D9m.png"
                                alt="Hotel Daleese Logo"
                                width={120}
                                height={80}
                                className="h-20 w-auto"
                            />
                        </Link>
                    </div>
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600 hover:text-gray-900">
                        {isMobileMenuOpen ? (
                            <X size={24} />
                        ) : (
                            <div className="flex flex-col space-y-1">
                                <span className="block w-6 h-0.5 bg-gray-600"></span>
                                <span className="block w-6 h-0.5 bg-gray-600"></span>
                                <span className="block w-6 h-0.5 bg-gray-600"></span>
                            </div>
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            className="fixed inset-0 bg-white z-[100] flex flex-col h-screen"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex justify-between items-center p-4">
                                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                                    <Image
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-K8fD0AzAogPvBfE5bP3K9BJiN72D9m.png"
                                        alt="Hotel Daleese Logo"
                                        width={120}
                                        height={80}
                                        className="h-20 w-auto"
                                    />
                                </Link>
                                <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:text-gray-900">
                                    <X size={24} />
                                </button>
                            </div>
                            <div className="flex flex-col items-center justify-center flex-grow bg-white">
                                {menuItems.map((item) => (
                                    <div key={item} className="relative">
                                        {item === 'About' ? (
                                            <>
                                                <button
                                                    className="text-3xl text-gray-800 my-4 hover:text-gray-600 flex items-center"
                                                    onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                                                >
                                                    {item}
                                                    <ChevronDown size={24} className="ml-1" />
                                                </button>
                                                {isAboutDropdownOpen && (
                                                    <div className="flex flex-col items-center mt-2">
                                                        {aboutDropdownItems.map((subItem) => (
                                                            <Link
                                                                key={subItem}
                                                                href={`/${subItem.toLowerCase().replace(/ /g, '-')}`}
                                                                className="text-2xl text-gray-600 my-2 hover:text-gray-900"
                                                                onClick={() => {
                                                                    setIsAboutDropdownOpen(false)
                                                                    setIsMobileMenuOpen(false)
                                                                }}
                                                            >
                                                                {subItem}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                )}
                                            </>
                                        ) : (
                                            <Link
                                                href={item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase().replace(/ & /g, '-')}`}
                                                className="text-3xl text-gray-800 my-4 hover:text-gray-600"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {item}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-center space-x-6 mb-8">
                                <Link href="https://instagram.com" className="text-gray-600 hover:text-gray-900">
                                    <Instagram size={24} />
                                </Link>
                                <Link href="https://facebook.com" className="text-gray-600 hover:text-gray-900">
                                    <Facebook size={24} />
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Desktop Navbar */}
                <div className="hidden lg:block">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <Link href="https://instagram.com" className="text-gray-600 hover:text-gray-900">
                                <Instagram size={20} />
                            </Link>
                            <Link href="https://facebook.com" className="text-gray-600 hover:text-gray-900">
                                <Facebook size={20} />
                            </Link>
                        </div>
                        <div className="flex flex-col items-center">
                            <Link href="/">
                                <Image
                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-K8fD0AzAogPvBfE5bP3K9BJiN72D9m.png"
                                    alt="Hotel Daleese Logo"
                                    width={200}
                                    height={120}
                                    className="h-28 w-auto mb-2"
                                />
                            </Link>
                        </div>
                        <div className="flex items-center">
                            <Link
                                href="/book"
                                className="rounded border border-gray-800 px-4 py-2 text-[20px] text-gray-800 hover:bg-gray-800 hover:text-white transition-colors mr-4"
                            >
                                Book a Room
                            </Link>
                        </div>
                    </div>
                    <div className="mt-4 flex justify-center space-x-6">
                        {menuItems.map((item) => (
                            <div key={item} className="relative group">
                                {item === 'About' ? (
                                    <>
                                        <button className="text-[20px] text-gray-600 hover:text-gray-900 flex items-center">
                                            {item}
                                            <ChevronDown size={20} className="ml-1" />
                                        </button>
                                        <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                            {aboutDropdownItems.map((subItem) => (
                                                <Link
                                                    key={subItem}
                                                    href={`/${subItem.toLowerCase().replace(/ /g, '-')}`}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                >
                                                    {subItem}
                                                </Link>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        href={item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase().replace(/ & /g, '-')}`}
                                        className="text-[20px] text-gray-600 hover:text-gray-900"
                                    >
                                        {item}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="mt-4"></div>
        </motion.nav>
    )
}
