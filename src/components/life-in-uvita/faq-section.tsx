"use client"

import Image from 'next/image'
import { Cormorant_Garamond } from 'next/font/google'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400'] })

export function FaqSection() {
  return (
    <section className={`container mx-auto px-4 py-16 md:py-24 ${cormorantGaramond.className}`}>
      <div className="flex flex-col md:flex-row items-start gap-8">
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8">FAQ</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Where is your hotel located in Costa Rica?</AccordionTrigger>
              <AccordionContent>
                Our hotel is located in Uvita, in the Puntarenas Province of Costa Rica. Uvita is known for its beautiful beaches and proximity to Marino Ballena National Park.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do I get to your hotel?</AccordionTrigger>
              <AccordionContent>
                You can reach our hotel by flying into San José International Airport (SJO) and then taking a domestic flight to Quepos or driving for about 3.5 hours. We can arrange transportation from Quepos to our hotel upon request.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What wildlife will I see when I visit Uvita?</AccordionTrigger>
              <AccordionContent>
                Uvita is home to a diverse range of wildlife. You might see toucans, sloths, monkeys, and various tropical birds. During whale watching season, you can also spot humpback whales in the nearby Marino Ballena National Park.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Where are the best places to eat in Uvita?</AccordionTrigger>
              <AccordionContent>
                Uvita offers a variety of dining options. Some popular local restaurants include Sabor Español for seafood, Sibu Café for organic fare, and La Pescaderia Sustainable Fish Market & Restaurant for fresh fish dishes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>What activities are close to the hotel?</AccordionTrigger>
              <AccordionContent>
                There are many activities near our hotel, including surfing at nearby beaches, hiking in Marino Ballena National Park, whale watching tours, waterfall tours, and zip-lining adventures in the nearby rainforest.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="w-full md:w-1/2 relative aspect-square">
          <Image
            src="https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Live%20in%20Uvita/671efba46ef0a.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761619749&Signature=Md%2Fflm%2Bih9coqFN%2FHsJ%2Fh%2BEVTfVDhJGEHgzS7rg3Bep%2FuIaWWV9knm7RPV%2BVNfdUzKqeUStmQQPROq0qGeep2Xg4CSZb4P0UArecoARHlursgUPaKBLGXojpkfjzWYH6FF0OK4pNtiLg41gDTinuzQGWbOrDgPJXBu1s9gExRL0%2B%2F9z75ZBMGgv6eLj9tfKh3560N1LqghduKXl%2FlAE3bml4cbUZ8SC5dOpbcrLXYiD1QlZ99Opr24FVFdkrc5E9zMUlsDLw%2BadcI58LCzyCmocNFACHmoiIoKvqKtV7XkcgYwCqBdBJu%2B4XIjfME5H%2BjsQqBspoR2vujyuu0il1KA%3D%3D"
            alt="Colorful toucan perched on a branch"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  )
}