'use client'

import Image from 'next/image'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'] })

export function OurStorySection() {
  return (
      <section className="bg-gray-100 flex items-center justify-center border b-6">
        <div className="w-[90%] h-full flex flex-col md:flex-row items-start justify-between py-12 ">
          <div className={`w-full md:w-1/2 pr-8 .text-gray-700 min-h-[110vh] md:pt-[260px] pt-[100px] ${lora.className}`}>
            <h1 className="text-4xl md:text-5xl font-light mb-8">Our Story</h1>
            <p className="mb-6 text-[22px]">It all begins with an idea.</p>
            <p className="mb-6 font-semibold text-[22px]">
              Hi, we&#39;re Rosa and Dave and we are the owners of Hotel Dalcese.
            </p>
            <p className="mb-6 text-[22px]">
              Rosa has been in the commercial real estate industry for over 20 years, and Dave is a Plumber by trade who has worked in residential and commercial builds for over 20 years, both for high-profile companies with expanded portfolios throughout Canada.
            </p>
            <p className="mb-6 text-[22px]">
              With the same goals in mind, we sold our house, cottage, and all of our belongings in Canada and traveled with our two young children to buy a boutique hotel and live in beautiful Uvita, Costa Rica.
            </p>
            <p className="mb-6 text-[22px]">
              We have been transforming Hotel Dalseese shortly after we arrived in Costa Rica, constantly making changes and updates to suit the needs of our guests and industry standards. We have a huge passion for our business, as it is something we have always dreamt of doing. The boutique-style hotel is run by us, and we are the first people you see with a good morning and the last with a good evening.
            </p>
            <p className="mb-6 text-[22px]">
              Our favorite part of running the hotel is the opportunity to meet new guests from all over the world and hear their stories.
            </p>
            <p className="mb-6 text-[22px]">
              The name of the hotel, Hotel Dalcese, is derived from our children’s names, David & Mehlcese.
            </p>
            <p className="mb-6 text-[22px]">
              We love living in Costa Rica. It has been an interesting experience learning a new culture and language in an entirely new country, but we have no regrets and absolutely love the new life we have built and continue to build today. Pura Vida.
            </p>
          </div>
          <div className="w-full md:w-1/2 space-y-4 mb-6 md:pt-[220px]  pt-[50px]">
            <Image
                src="https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Our%20Story/671daa5c98cab.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761533405&Signature=lLHACj%2FoK%2BSaquuNm%2BnkY2REJWuPtOh%2BmK98cjYeBrbMKwjXPMcnO8nTMY%2BfyrQ1iEktJ8UsDp0ZlozAfuGVQHxz0gBjdxuNeqUJfq4oMpwZ196KjNSXFxwlmyzl1GrF4LJZsG%2BdYnGyHIFoBOSHwVp%2Fwau%2BNBZvALNWUlAGD2i2fJ4KKEYROMPzrZ9ajE5Ji5382wfCYB2L4chg4QAcvrHM2FuH%2FWRSpjhNrEhuAkwND6e15bkhyxwMXqm%2Fem6Z4RanBXw%2F%2FBIzL96zYFtEPGcz5rWjFDvxuHFt3GOHCuR%2FzkCQ%2FfFJlwojRb5rsRN8jz8CFhLvn26n%2F8sVwEDkPw%3D%3D"
                alt="Rosa and Dave sitting in beach chairs"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
            />
            <Image
                src="https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Our%20Story/671daa5b951f7.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761533404&Signature=YwUIsRbcIAMFKSNyOIT769VrFI2XLixZNInT030xKPMW2oAt4GTiODrQNrNOQJU1zSuPXoBufHvsh4fIO1D%2B9VbptLIgNw%2BaU76o5nT4g8pQ0AfZzJoKM50Zl1oa9HRLtuS6MIczXuXckwfLT8c74Lhecvmu0KCjRqU8DsiUq9%2FNwGJzgp6SeCT8OgLx8Z4d6oMQwAkb%2FS6m2qYjGSgy9UpTofHnowiPsdZeHbFNOwySiMj4ykDNW257Yp2E6xb8ExVQ8oB8k8EQyrnfCbibIKxV3It5Az0KsS0wqW4pq50q1HNqVrRyMoPvIIc4Z6Wr%2BY2TVqDXkzj7p0qIjTBBLQ%3D%3D"
                alt="Hotel Dalcese property"
                width={600}
                height={300}
                className="w-full h-auto object-cover rounded-lg "
            />
          </div>
        </div>
      </section>
  )
}
