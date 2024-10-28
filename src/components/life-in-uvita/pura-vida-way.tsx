'use client'

import Image from 'next/image'
import { Cormorant_Garamond } from 'next/font/google'

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400'] })

export function PuraVidaWayComponent() {
  return (
    <section className={`bg-gray-100  flex items-center justify-center align-center ${cormorantGaramond.className} text-black`}>
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center md:items-start gap-8 0">
        <div className="w-full md:w-1/2 relative aspect-[4/3] bg-red-10 h-[75vh] rounded">
          <Image
            src="https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Live%20in%20Uvita/671ee2aed3819.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761613359&Signature=aQc31XrgeDl%2FDu9blWKV6lvJhWz5Cap%2F1IXVfWfjeGLCGQo8eORC2C7ONpdQ10T09NSKm1mqrMGScXxvxjoU1o0MXwX770PsEjLjMeDpnfnMZaxDvCpomT7WhU9hLRXYIqdvrnpAwrPejzs0oXLz9IAUaSAdsgFDLLIFTEjOC5XaJ2tLJv7YBHaYscWNujUqUkATFW71lME%2F7YMxlNvqlilhp1APdgPWQCpkr5%2FGqmbtsc%2F0yG8wsf2uifsyn0FY1VRKuJ7FUNPq3ALfODjSGcSz1rskZe7vKNIeZ9VefKlhGLhbhJupXK5UK6492YZ4PDr%2FmGJexXJYX7bgw93i0g%3D%3D"
            alt="Hand making shaka sign over ocean waves"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="h-[75vh] w-full md:w-[40vw] text-black space-y-6 flex flex-col justify-center ">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light">
            The <span className="italic">Pura Vida</span> Way
          </h2>
          <p className="text-[22px]">
            Pura Vida is a slogan of Costa Rica. It is a symbol of a relaxed lifestyle that anyone living in or moving to Costa Rica adopts sooner or later.
          </p>
          <p className="text-[22px]">
            Living a <span className="italic">pura vida</span> means treasuring your physical and mental well-being above things that we are used to holding in high regard, like punctuality, for example, and getting things done fast.
          </p>
          <p className="text-[22px]">
            Chances are that you&#39;ll hear <span className="italic">pura vida</span> from Ticos and expats all over Costa Rica. It&#39;s our way of saying hello, making you feel welcome or saying goodbye in a happy way.
          </p>
        </div>
      </div>
    </section>
  )
}