'use client'

import { Cormorant_Garamond } from 'next/font/google'

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '700'] })

interface FeatureCardProps {
  title: string
  description: string
  learnMoreLink: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, learnMoreLink }) => (
  <div className={`${cormorantGaramond.className} bg-white p-6 rounded-lg shadow-lg border border-[#0F758C]`}>
    <div className="relative h-64 mb-4 bg-gray-200 flex items-center justify-center">
      <span className="text-gray-500">Image goes here</span>
    </div>
    <h3 className="text-4xl font-bold text-[#0F758C] mb-4">{title}</h3>
    <p className="text-xl text-gray-600 mb-6">{description}</p>
    <a 
      href={learnMoreLink}
      className="inline-block border-2 border-[#0F758C] text-[#0F758C] px-8 py-3 text-xl rounded hover:bg-[#0F758C] hover:text-white transition-colors"
    >
      Learn more
    </a>
  </div>
)

export function FeatureCards() {
  return (
    <section className="bg-[#0F758C] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Accommodations"
            description="Our suites are uniquely designed & sleep up to 4 guests."
            learnMoreLink="/accommodations"
          />
          <FeatureCard
            title="Amenities"
            description="Guests can enjoy our gorgeous pool, on-site massages & more!"
            learnMoreLink="/amenities"
          />
          <FeatureCard
            title="Tours & Activities"
            description="Discover what Costa Rica has to offer during your stay!"
            learnMoreLink="/tours-activities"
          />
        </div>
      </div>
    </section>
  )
}