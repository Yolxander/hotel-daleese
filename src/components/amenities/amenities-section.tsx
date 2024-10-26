'use client'

import { Cormorant_Garamond } from 'next/font/google'
import Link from 'next/link'

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '700'] })

interface AmenityCardProps {
    title: string
    description: React.ReactNode
}

const AmenityCard: React.FC<AmenityCardProps> = ({ title, description }) => (
    <div className="mb-8 text-center">
        <h3 className={`${cormorantGaramond.className} text-2xl md:text-3xl font-bold mb-4`}>{title}</h3>
        <p className="text-gray-700 text-base md:text-lg font-medium">{description}</p>
    </div>
)

export function AmenitiesSectionComponent() {
    return (
        <section className={`${cormorantGaramond.className} max-w-6xl mx-auto px-4 py-16`}>
            <div className="text-center mb-16">
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-medium max-w-2xl mx-auto">
                    During your stay, we encourage you to take full advantage of our property amenities and
                    services. We want our guests to feel at home. Our hotel offers free access to private parking
                    & wifi.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <AmenityCard
                    title="Dine with Us"
                    description={
                        <>
                            Eat freshly prepared food from our garden and local farmers. We
                            currently have a fixed dinner & <Link href="/breakfast-menu" className="hover:underline">breakfast menu</Link> with a unique course
                            each day of the week. Prepared fresh by Chef Rosa & Dave a la carte.
                        </>
                    }
                />
                <AmenityCard
                    title="Relax with Us"
                    description="Our home is your home. Enjoy our beautifully maintained outdoor pool surrounded by a green oasis. Bring your favourite book, or cocktail."
                />
                <AmenityCard
                    title="Ride with Us"
                    description="We want our guests to have a stress-free experience when booking with us. We would be happy to assist booking your private airport shuttle to and from the hotel. Car rentals? We can also help with that."
                />
                <AmenityCard
                    title="Focus on Yourself"
                    description="We have a network of excellent massage therapists and other bodywork professionals and would be happy to arrange an in-room treatment during your stay."
                />
            </div>
        </section>
    )
}
