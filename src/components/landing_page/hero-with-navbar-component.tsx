'use client'

import { Lora } from 'next/font/google'
import Image from 'next/image'

const lora = Lora({ subsets: ['latin'] })

export function HeroWithNavbarComponent() {
  return (
      <div className="relative h-screen w-full overflow-hidden">
        <Image
            src="https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Home/671c830dbadbf.png?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761457806&Signature=WtvwGdlyKbrY6sLqcis7P8iLk7VewMY%2FXH3o9FLzsgFJ8zq0MGx10234OactoBXIQfF127cx1BJvikqM9BwlMZZWYp1crN8nlUCW6LUlxRCwJa0hRTDlXCMbdFwSv1tJ%2BPsvCcj%2BAhP999PnuD9VRJpmrojvlqOWGpGntVnaL%2BeMuhYT0HuO0pMu1KE%2F2d%2BT4hY66FE7M%2F8AEBYUdlNMQ0kWIaSs3V%2BF2S31iduU%2BWdJQih8kUPXbbQE9o9qO2kPxrZxYcx1GDzyWyKRWZNNqAgJe9o83EWpqY%2FSgqM7LrhUYsFWpjI57LIUEx05ohjxqODHNINaHXfvodZ20U2jSQ%3D%3D"
            alt="Boutique hotel room with wooden slatted headboard and wicker lamps"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />

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
          <p className={`${lora.className} mx-auto max-w-4xl text-[20px] text-gray-800`}>
            Welcome to Hotel Daleese. Located on the Southern Pacific Coast of Costa Rica, our family-owned boutique hotel is situated in Uvita, Puntarenas. We look forward to your visit!
          </p>
        </div>
      </div>
  )
}
