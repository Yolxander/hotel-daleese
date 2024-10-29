'use client'

import Image from 'next/image'

export function HotelMapComponent() {
  return (
    <section className="container mx-auto px-4 py-16 bg-transparent	">
      <div className="max-w-4xl mx-auto">
          <Image
              src="https://maps.googleapis.com/maps/api/staticmap?center=Hotel+Daleese,Uvita,Costa+Rica&zoom=16&size=1200x400&maptype=roadmap&markers=color:red%7CLabel:H%7CHotel+Daleese,Uvita,Costa+Rica&key=AIzaSyDdwQwsHi-_JmG1n62xVx2sonXav9oyfGU"
              alt="Map to our location"
              width={500}
              height={300}
              className="rounded-lg w-full h-auto"
          />
      </div>
    </section>
  )
}