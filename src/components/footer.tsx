'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Cormorant_Garamond } from 'next/font/google'

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '700'] })

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11" stroke="black" strokeWidth="2"/>
    <circle cx="12" cy="12" r="5" stroke="black" strokeWidth="2"/>
    <circle cx="18" cy="6" r="1.5" fill="black"/>
  </svg>
)

const FacebookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11" stroke="black" strokeWidth="2"/>
    <path d="M15.5 12.5H13V18H10V12.5H8V10H10V8.5C10 7.5 10.5 6 12.5 6H15V8.5H13.5C13 8.5 13 8.75 13 9V10H15.5V12.5Z" fill="black"/>
  </svg>
)

export function FooterComponent() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className={`${cormorantGaramond.className} bg-gray-100 text-gray-800 py-16 px-4`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16">
        <div>
          <h2 className="text-3xl font-normal mb-4">Hotel Daleese</h2>
          <p className="text-base leading-relaxed">
            Situated in Southern Costa Rica, Hotel Daleese is an oasis located in the heart of Uvita. Our property features an outdoor swimming pool, free private parking & wifi.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/policies" className="text-[#0F758C] hover:underline">
                Policies
              </Link>
            </li>
            <li>
              <Link href="/book" className="text-[#0F758C] hover:underline">
                Book now
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Location</h3>
          <p className="text-base leading-relaxed">
            East of BCR, 500 Meters, Provincia de Puntarenas, Uvita, 60504, Costa Rica
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Reach Out</h3>
          <p className="text-base mb-2">
            <a href="https://wa.me/19055980504" className="text-[#0F758C] hover:underline">
              +1 (905) 598-0504
            </a>
            {' '}(WhatsApp)
          </p>
          <p className="text-base">
            <a href="mailto:admin@hoteldaleese.com" className="text-[#0F758C] hover:underline">
              admin@hoteldaleese.com
            </a>
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-300 flex flex-col items-center">
        <div className="flex space-x-4 mb-4">
          <a href="https://instagram.com/hoteldaleese" target="_blank" rel="noopener noreferrer" className="text-black">
            <InstagramIcon />
          </a>
          <a href="https://facebook.com/hoteldaleese" target="_blank" rel="noopener noreferrer" className="text-black">
            <FacebookIcon />
          </a>
        </div>
        <p className="text-sm text-gray-600">© {currentYear} Hotel Daleese</p>
      </div>
    </footer>
  )
}