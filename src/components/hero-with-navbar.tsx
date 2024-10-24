'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Facebook, X, Phone } from 'lucide-react'
import { Lora, Cormorant_Garamond } from 'next/font/google'
import { motion, AnimatePresence } from 'framer-motion'

const lora = Lora({ subsets: ['latin'] })
const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400'] })

export function HeroWithNavbarComponent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isPhoneNumberVisible, setIsPhoneNumberVisible] = useState(false)

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

  return (
      <div className="relative h-screen w-full overflow-hidden">
        <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bed%20suite%203-pVgueIl1Vk5hCjvzxu854gnfgM41B9.jpg"
            alt="Boutique hotel room with wooden slatted headboard and wicker lamps"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />

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
                <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-K8fD0AzAogPvBfE5bP3K9BJiN72D9m.png"
                    alt="Hotel Daleese Logo"
                    width={120}
                    height={80}
                    className="h-20 w-auto"
                />
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
                      <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-K8fD0AzAogPvBfE5bP3K9BJiN72D9m.png"
                          alt="Hotel Daleese Logo"
                          width={120}
                          height={80}
                          className="h-20 w-auto"
                      />
                      <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:text-gray-900">
                        <X size={24} />
                      </button>
                    </div>
                    <div className="flex flex-col items-center justify-center flex-grow bg-white">
                      {menuItems.map((item) => (
                          <Link
                              key={item}
                              href={`/${item.toLowerCase().replace(/ & /g, '-')}`}
                              className="text-3xl text-gray-800 my-4 hover:text-gray-600"
                              onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item}
                          </Link>
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
                  <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-K8fD0AzAogPvBfE5bP3K9BJiN72D9m.png"
                      alt="Hotel Daleese Logo"
                      width={200}
                      height={120}
                      className="h-28 w-auto mb-2"
                  />
                </div>
                <div className="flex items-center">
                  <Link
                      href="/book"
                      className="rounded border border-gray-800 px-4 py-2 text-[20px] text-gray-800 hover:bg-gray-800 hover:text-white transition-colors mr-4"
                  >
                    Book a Room
                  </Link>
                  <div className="relative">
                    <button
                        onClick={() => setIsPhoneNumberVisible(!isPhoneNumberVisible)}
                        className="text-gray-600 hover:text-gray-900"
                    >
                      <Phone size={20} />
                    </button>
                    <AnimatePresence>
                      {isPhoneNumberVisible && (
                          <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.2 }}
                              className="absolute right-0 mt-2 bg-white p-2 rounded shadow-md"
                          >
                            <a href="tel:+50684569878" className="text-gray-800 hover:text-gray-600">
                              +506 8456-9878
                            </a>
                          </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-center space-x-6">
                {menuItems.map((item) => (
                    <Link key={item} href={`/${item.toLowerCase().replace(/ & /g, '-')}`} className="text-[20px] text-gray-600 hover:text-gray-900">
                      {item}
                    </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-4 border-b border-gray-200"></div>
        </motion.nav>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className={`${lora.className} mb-4 text-4xl font-light md:text-5xl lg:text-6xl text-center`}>
            Boutique Hotel in the Heart of Uvita
          </h1>
          <div className="mb-8 h-px w-1/4 bg-white" />
          <p className={`${lora.className} mb-8 text-xl font-light italic md:text-2xl text-center`}>
            Eccentric • Privacy • Comfort
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-6 text-center">
          <p className={`${cormorantGaramond.className} mx-auto max-w-4xl text-[20px] text-gray-800`}>
            Welcome to Hotel Daleese. Located on the Southern Pacific Coast of Costa Rica, our family-owned boutique hotel is situated in Uvita, Puntarenas. We look forward to your visit!
          </p>
        </div>
      </div>
  )
}