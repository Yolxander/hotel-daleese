'use client'

import Image from 'next/image'
import { Cormorant_Garamond } from 'next/font/google'

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '700'] })

export function AmenitiesHeroComponent() {
  return (
    <div className="relative h-[60vh] md:h-[110vh] w-full overflow-hidden">
      <Image
        src="https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/About/671d219ef18e7.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761498399&Signature=hm0lHR2DylZ7ztLnpHqdk%2FbOa3mHKZrsyNkwvCePdh0hJmKXr7vPBaL8ISWkFzBC234njh9Zo8YB0k%2BF4Ik9oRAPhaCqKUGJ%2Bm%2BUvZPgHDPTIa2N1yx5qyi9ZFqDy9b5aXL%2F6ni%2BlIHP%2B50wwh1s6Wiucj4eWr8tI2VzH6gATluj9bdrlPv%2FrzRrd3EzMSDPQne1B8rhAA3cf7FkIaFmYDJ6Ojp%2BTTPm3qyv%2Fy%2FH47mOp3Co1oDEUm%2FSYAMpKApO0pkp9MMOnoTEbvi%2BvioWWGsWqRquGbBHJBVfJ%2BsrPzioLZXqrFNe2QyAmNutHa0YFVf3XTkuLWOQsBfDY0NFTQ%3D%3D"
        alt="Luxurious pool area with tropical surroundings"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className={`${cormorantGaramond.className} text-4xl md:text-6xl lg:text-7xl font-light text-center px-4`}>
          Our Amenities & Services
        </h1>
        <div className="mt-4 h-px w-24 bg-white" />
      </div>
    </div>
  )
}