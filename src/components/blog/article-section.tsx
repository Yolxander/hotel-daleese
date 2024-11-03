'use client'

import { Cormorant_Garamond } from 'next/font/google'

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '700'] })

export function ArticleSection() {
  return (
      <article className={`container mx-auto px-4 py-16 ${cormorantGaramond.className} mt-[190px]`}>

      <p className="text-[20px] leading-relaxed mb-12">
        The best time to visit Costa Rica depends on your preferences. The dry season, from December to April, is popular for sunny weather and outdoor adventures. However, the rainy season, from May to November, offers lush landscapes, fewer tourists, and great opportunities for activities like whitewater rafting and wildlife viewing. Consider your priorities and plan accordingly!
      </p>

      <section className="mb-12">
        <h2 className={`${cormorantGaramond.className} text-[25px] font-light mb-6`}>Common Travelling Misconceptions</h2>
        <p className="mb-4 text-[20px]">There are a few common misconceptions about when to travel to Costa Rica:</p>

        <div className="space-y-8">
          <div>
            <h3 className={`${cormorantGaramond.className} text-[25px] font-bold mb-2`}>Rainy season is not enjoyable</h3>
            <p className="text-gray-800 text-[20px]">
              While the rainy season (May to November) does bring more precipitation, it doesn&#39;t mean constant downpours every day. Rainfall tends to be in the form of short, intense showers, often in the late afternoon or evening, leaving the mornings sunny and clear. This period also offers lush green landscapes, fewer tourists, and lower prices.
            </p>
          </div>

          <div>
            <h3 className={`${cormorantGaramond.className} font-bold text-[25px] mb-2`}>Dry season is always the best</h3>
            <p className="text-gray-800 text-[20px]">
              While the dry season (December to April) is indeed popular for its sunny weather and lower rainfall, it&#39;s also the peak tourist season. This means higher prices, more crowded attractions, and booked accommodations. Additionally, in some regions, particularly the Pacific coast, the dry season brings very dry conditions, leading to brown landscapes.
            </p>
          </div>

          <div>
            <h3 className={`${cormorantGaramond.className} font-bold text-[25px] mb-2`}>Wildlife is not as visible during the rainy season</h3>
            <p className="text-gray-800 text-[20px]">
              On the contrary, the rainy season can be an excellent time for wildlife viewing in Costa Rica. The lush vegetation provides food and shelter for many species, making it easier to spot wildlife in their natural habitats.
            </p>
          </div>

          <div>
            <h3 className={`${cormorantGaramond.className} font-bold text-[25px] mb-2`}>It&#39;s always hot</h3>
            <p className="text-gray-800 text-[20px]">
              While Costa Rica generally has a tropical climate with warm temperatures year-round, it&#39;s important to note that the country&#39;s diverse geography leads to varying climates in different regions. Higher elevations, such as in the Central Valley and Monteverde, can be cooler, especially at night.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className={`${cormorantGaramond.className} text-[25px] font-light mb-6`}>Best time to travel to Uvita</h2>
        <p className="mb-6 text-[20px]">
          Uvita, located on the Pacific coast of Costa Rica, offers stunning beaches, lush rainforests, and diverse wildlife. The best time to visit Uvita depends on your priorities and interests:
        </p>

        <div className="space-y-6 ml-[20px]">
          <div>
            <h3 className={`${cormorantGaramond.className} font-bold text-[25px] mb-2`}>Dry Season (December to April):</h3>
            <ul className="list-disc pl-6 space-y-2 text-[20px]">
              <li>This period offers sunny days and minimal rainfall, making it ideal for beach activities, snorkeling, diving, and exploring the Marino Ballena National Park.</li>
              <li>The dry season is also a great time for whale watching, particularly humpback whales, which migrate to the area from December to April.</li>
            </ul>
          </div>

          <div>
            <h3 className={`${cormorantGaramond.className} font-bold text-[25px] mb-2`}>Green Season (May to November):</h3>
            <ul className="list-disc pl-6 space-y-2 text-[20px]">
              <li>While the rainy season brings more precipitation, it also results in lush green landscapes, fewer tourists, and lower prices on accommodations and tours.</li>
              <li>Wildlife viewing is excellent during this time, with the rainforests teeming with life. You&#39;ll have a higher chance of spotting animals like monkeys, sloths, toucans, and more.</li>
              <li>The waterfalls and rivers around Uvita are at their fullest during the rainy season, offering spectacular sights and opportunities for adventure activities like waterfall rappelling and river tubing.</li>
            </ul>
          </div>
        </div>

        <p className="mt-8 text-gray-800 text-[20px]">
          Ultimately, the best time to visit Costa Rica depends on your preferences for weather, activities, and crowd levels. If you prioritize sunny skies and dry weather, the dry season is ideal. However, if you prefer lush green landscapes, wildlife encounters, and lower prices, consider visiting during the green season.
        </p>
      </section>
    </article>
  )
}