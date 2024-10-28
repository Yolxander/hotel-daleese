'use client'

import Image from 'next/image'
import { Cormorant_Garamond } from 'next/font/google'

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400'] })

const restaurants = [
  {
    name: "Sebas",
    description: "Our top recommendation for food and drinks. Chef Sebastien is originally from Toronto, Canada, and relocated to Uvita to open his dream restaurant, Sebas."
  },
  {
    name: "Los Laureles",
    description: "Conveniently located steps away from Hotel Daleese, be sure to check out this hidden jungle gem in Uvita. Our guests always have great things to say!"
  },
  {
    name: "Indomitos Cafe & Bar",
    description: "One of the best veggie/vegan restaurants in Uvita. Be sure to check out their social media for weekly events and specials!"
  },
  {
    name: "Citrus",
    description: "If you're looking for a gourmet or romantic dining experience, be sure to visit Citrus Restaurant in Ojochal, Puntarenas."
  },
  {
    name: "Cafe Vivo",
    description: "Our go to for anything coffee, sweets, and breakfast! Just located steps away from the hotel. Perfect for a morning stroll."
  },
  {
    name: "Uvita Gastro Park",
    description: "Great food spot for families and large groups, there is something for everyone here! Bonus - Live Music Fridays!"
  }
]

export function RestaurantRecommendationsComponent() {
  return (
    <section className={`bg-gray-100 ${cormorantGaramond.className}`}>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-4xl md:text-5xl lg:text-6xl italic text-center mb-12">
          Good food, memorable experiences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant, index) => (
            <div key={index} className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{restaurant.name}</h3>
              <p className="text-gray-700">{restaurant.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}