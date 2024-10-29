'use client'

import Image from 'next/image'

export function HotelMapComponent() {
    return (
        <section className="h-[90vh] pt-[300px] pb-[100px] relative py-16 px-4 md:px-8 bg-transparent flex flex-col items-center justify-end md:justify-center">
            <div className="relative z-10 max-w-8xl mx-auto flex flex-col md:flex-row gap-[100px]">
                <div className="md:h-[50vh] md:w-[60vw] h-[30vh] w-full">
                    <Image
                        src="https://maps.googleapis.com/maps/api/staticmap?center=Hotel+Daleese,Uvita,Costa+Rica&zoom=16&size=1200x400&maptype=roadmap&markers=color:red%7CLabel:H%7CHotel+Daleese,Uvita,Costa+Rica&key=AIzaSyDdwQwsHi-_JmG1n62xVx2sonXav9oyfGU"
                        alt="Map to our location"
                        width={100}
                        height={100}
                        className="rounded-lg w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    )
}
