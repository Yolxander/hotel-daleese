'use client'

import Image from 'next/image'
import { Cormorant_Garamond, Lora } from 'next/font/google'

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '700'] })
const lora = Lora({ subsets: ['latin'] })

interface FeatureCardProps {
  title: string
  description: string
  learnMoreLink: string
  imageSrc: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, learnMoreLink, imageSrc }) => (
  <div className={`${cormorantGaramond.className} flex flex-col items-center bg-white p-6 rounded-lg shadow-lg border border-gray-300`}>
    <div className="relative h-64 w-full mb-4 overflow-hidden rounded-lg">
      <Image
        src={imageSrc}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 hover:scale-105"
      />
    </div>
    <h3 className={`${lora.className} text-3xl font-light text-gray-800 mb-4`}>{title}</h3>
    <p className="text-xl text-gray-600 mb-6">{description}</p>
    <a 
      href={learnMoreLink}
      className="inline-block border-2 border-gray-800 text-gray-800 px-8 py-3 text-lg rounded hover:bg-black hover:text-white transition-colors"
    >
      Learn more
    </a>
  </div>
)

export function FeatureCards() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Accommodations"
            description="Our suites are uniquely designed & sleep up to 4 guests."
            learnMoreLink="/accommodations"
            imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/36c31ceb-32d2-45e7-b29f-58fc567c27fb-YfVLPrRTFvmfCYgUhqdUhyxiEql4vB.jpeg"
          />
          <FeatureCard
            title="Amenities"
            description="Guests can enjoy our gorgeous pool, on-site massages & more!"
            learnMoreLink="/amenities"
            imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-oICsIJGcXDyT254WtnJzmQPKwRFJVr.jpeg"
          />
          <FeatureCard
            title="Tours & Activities"
            description="Discover what Costa Rica has to offer during your stay!"
            learnMoreLink="/tours-activities"
            imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-asset-s7zal6cEjEwXJm7mJeUrIGJT775KnL.jpeg"
          />
        </div>
      </div>
    </section>
  )
}