'use client'

import { useState, useEffect, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Facebook, X } from 'lucide-react'
import { Cormorant_Garamond } from 'next/font/google'
import { motion, AnimatePresence } from 'framer-motion'

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400'] })

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isNavbarVisible, setIsNavbarVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
    const pathname = usePathname()

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

    const menuItems = [
        { name: 'About', path: '/about' },
        { name: 'Suites', path: '/suites' },
        { name: 'Tours', path: '/tours' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
        { name: 'Blog', path: '/blog' }
    ]
    const aboutDropdownItems = [
        { name: 'Amenities', path: '/amenities' },
        { name: 'Our Story', path: '/our-story' },
        { name: 'Life in Costa Rica', path: '/life-in-costa-rica' }
    ]

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
                                    <div key={item.name} className="relative">
                                        {item.name === 'About' ? (
                                            <>
                                                <button
                                                    className="text-3xl text-gray-800 my-4 hover:text-gray-600 flex items-center"
                                                    onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                                                >
                                                    {item.name}
                                                </button>
                                                {isAboutDropdownOpen && (
                                                    <div className="flex flex-col items-center mt-2">
                                                        {aboutDropdownItems.map((subItem) => (
                                                            <Link
                                                                key={subItem.name}
                                                                href={subItem.path}
                                                                className={`text-2xl my-2 relative group ${
                                                                    pathname === subItem.path ? 'text-gray-800' : 'text-gray-600'
                                                                } hover:text-gray-900`}
                                                                onClick={() => {
                                                                    setIsAboutDropdownOpen(false)
                                                                    setIsMobileMenuOpen(false)
                                                                }}
                                                            >
                                                                <span>{subItem.name}</span>
                                                                <span
                                                                    className={`absolute left-0 -bottom-1 w-full h-0.5 bg-gray-600 transform transition-transform duration-300 origin-left ${
                                                                        pathname === subItem.path
                                                                            ? 'scale-x-100'
                                                                            : 'scale-x-0 group-hover:scale-x-100'
                                                                    }`}
                                                                ></span>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                )}
                                            </>
                                        ) : (
                                            <Link
                                                href={item.path}
                                                className={`text-3xl my-4 relative group ${
                                                    pathname === item.path ? 'text-gray-800' : 'text-gray-600'
                                                } hover:text-gray-900`}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                <span>{item.name === 'Tours' ? 'Tours & Attractions' : item.name}</span>
                                                <span
                                                    className={`absolute left-0 -bottom-1 w-full h-0.5 bg-gray-800 transform transition-transform duration-300 origin-left ${
                                                        pathname === item.path
                                                            ? 'scale-x-100'
                                                            : 'scale-x-0 group-hover:scale-x-100'
                                                    }`}
                                                ></span>
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
                            <div key={item.name} className="relative group">
                                {item.name === 'About' ? (
                                    <>
                                        <button className="text-[20px] text-gray-600 hover:text-gray-900 flex items-center relative group">
                                            <span>{item.name}</span>
                                            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                                        </button>
                                        <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                            {aboutDropdownItems.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    href={subItem.path}
                                                    className={`block px-4 py-2 text-sm relative group ${
                                                        pathname === subItem.path ? 'text-gray-700' : 'text-gray-600 hover:bg-gray-100'
                                                    }`}
                                                >
                                                    <span>{subItem.name}</span>
                                                    <span
                                                        className={`absolute left-0 -bottom-1 w-full h-0.5 bg-gray-700 transform transition-transform duration-300 origin-left ${
                                                            pathname === subItem.path
                                                                ? 'scale-x-100'
                                                                : 'scale-x-0 group-hover:scale-x-100'
                                                        }`}
                                                    ></span>
                                                </Link>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        href={item.path}
                                        className={`text-[20px] relative group ${
                                            pathname === item.path ? 'text-gray-800' : 'text-gray-600 hover:text-gray-900'
                                        }`}
                                    >
                                        <span>{item.name === 'Tours' ? 'Tours & Attractions' : item.name}</span>
                                        <span
                                            className={`absolute left-0 -bottom-1 w-full h-0.5 bg-gray-600 transform transition-transform duration-300 origin-left ${
                                                pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                            }`}
                                        ></span>
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
