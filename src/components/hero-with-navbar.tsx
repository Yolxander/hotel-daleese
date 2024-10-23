'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Facebook, Menu } from 'lucide-react'
import { Lora, Cormorant_Garamond } from 'next/font/google'

const lora = Lora({ subsets: ['latin'] })
const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400'] })

export function HeroWithNavbarComponent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY
    if (currentScrollY > lastScrollY) {
      // Scrolling down
      setIsNavbarVisible(false)
    } else {
      // Scrolling up
      setIsNavbarVisible(true)
    }
    setLastScrollY(currentScrollY)
  }, [lastScrollY])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

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
      
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 bg-white py-4 transition-all duration-300 ease-in-out ${cormorantGaramond.className} ${
          isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4">
          {/* Mobile Navbar */}
          <div className="flex items-center justify-between lg:hidden">
            <div className="flex items-center">
              <Image
                src="/placeholder.svg?height=40&width=120"
                alt="Hotel Daleese Logo"
                width={120}
                height={40}
              />
            </div>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600 hover:text-gray-900">
              <Menu size={24} />
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="mt-4 lg:hidden">
              <div className="flex flex-col space-y-2">
                {['About', 'Suites', 'Tours & Attractions', 'Gallery', 'Contact', 'Blog'].map((item) => (
                  <Link key={item} href={`/${item.toLowerCase().replace(/ & /g, '-')}`} className="text-sm text-gray-600 hover:text-gray-900">
                    {item}
                  </Link>
                ))}
              </div>
              <div className="mt-4 flex items-center space-x-4">
                <Link href="https://instagram.com" className="text-gray-600 hover:text-gray-900">
                  <Instagram size={20} />
                </Link>
                <Link href="https://facebook.com" className="text-gray-600 hover:text-gray-900">
                  <Facebook size={20} />
                </Link>
              </div>
              <div className="mt-4">
                <Link
                  href="/book"
                  className="inline-block rounded border border-blue-500 px-4 py-2 text-sm text-blue-500 hover:bg-blue-500 hover:text-white"
                >
                  Book a Room
                </Link>
              </div>
            </div>
          )}

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
                  src="/placeholder.svg?height=60&width=200"
                  alt="Hotel Daleese Logo"
                  width={200}
                  height={60}
                  className="mb-2"
                />
                {/*<span className="text-[20px] text-gray-600">Boutique Hotel | Uvita, Costa Rica</span>*/}
              </div>
              <div>
                <Link
                  href="/book"
                  className="rounded border border-blue-500 px-4 py-2 text-[20px] text-blue-500 hover:bg-blue-500 hover:text-white"
                >
                  Book a Room
                </Link>
              </div>
            </div>
            <div className="mt-4 flex justify-center space-x-6 ">
              {['About', 'Suites', 'Tours & Attractions', 'Gallery', 'Contact', 'Blog'].map((item) => (
                <Link key={item} href={`/${item.toLowerCase().replace(/ & /g, '-')}`} className="text-[20px] text-gray-600 hover:text-gray-900">
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 border-b border-gray-200"></div>
      </nav>

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