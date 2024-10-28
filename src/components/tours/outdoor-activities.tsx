'use client'

import Image from 'next/image'
import { Cormorant_Garamond } from 'next/font/google'

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400'] })

const activities = [
  {
    title: "Zip Lining",
    image: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Tours%20%26%20Attractions/671f237c11d48.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761629948&Signature=BqJMymf14Fcwi2dz%2F53t5dsPBd1PIO%2B8Ftq1nRrZYXGrWH73w0C61I1xes0tvWwUoDP7mbCcQ%2BNRnlf8CJpraHKo1EPGMOvuZzFa9Mv0HiHjZAEi8SkbiogvtG8xWgxlvMcT9MH5wPwQCbg7D2Zo6muVw7q7SaYkeA6co5OActUeepNB4tLIi6lc7Uxgp0bRKQjYYSHoZy8Dc0J%2BjWW1kXFSzHsCvFLGarnCyXhbknNEuczwFFW3sMeqoWcY2S0i0uHt1%2Fd1vkabtK82WO58N4o8expo9i7BxAzuTLwpl0NiiHk4%2BPySwTaAakBCIoltw5fWqwdLIICFtiWW3Uu6kw%3D%3D",
    description: "Experience the longest zip line in Central America with El Santuario Canopy Adventure Tours."
  },
  {
    title: "Horseback Riding",
    image: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Tours%20%26%20Attractions/671f237b88018.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761629948&Signature=LPqqWXzhOkWJJfFwTAOqCL0VE6lHwNDc6%2FWOzakaHzsTJo0v9elQSdpmFcy6gHFQV5JDoEgAkYWW6l70%2BbL1FxBreIpGpBrbBv4%2F79SbuhKocEbCPSCmf%2FS0k25qz8B9MgWwHWqP1jxrO6gB0J6wwWxI2srwnRLEMQPBzcmdYlLUfvLdIniEdvk3u%2B6DdtDDJTAZ6Jz%2Bys7nsMZ1Q5s1PtKEXb7cZMKjHSSFRGKWnSx2vlmiUlhXlTHeRNZI1O0jDfgmfZfMWGfHVEuLRZTKPXvkrOzaYs85fRtiWHfP%2BERuVszBT94m%2BkWASrPXkDyQLC9hvlg9NZL86sdhx5GlKg%3D%3D",
    description: "Experienced or inexperienced riders can enjoy horseback riding on the Pacific Coast near Punta Uvita. Sunset and Waterfall Tours are available."
  },
  {
    title: "Kayak, SUP & Surf",
    image: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Tours%20%26%20Attractions/671f237963de4.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761629945&Signature=TIMKSKoJ5J8HbIRDbg4m1ZGK5z3A4V5hyhkFotjbJORbaWeqBupATw4wLF0wrP2tDYpCLDdHBvPOxmBuuJStPFTYnj%2B1%2BFaqfzoqGryyBbqkVQIv8R5l1SgYIrzTvri9aEbD%2F80QX2Qwg61O2cj%2BEUkgfQTIk%2FKBD%2BkSLkhOhGPxcni6ns4VWDexa0dZ4hiGuiUo1oRei9yZi3biFOBL4SlvdXV9IgUBFc8KvJCxlhqNUeoC0Aiy8LfW42SBc%2F153RGYnKCL2K%2FFd03YA0Sx9BrhaG8mUCPl6hGPiq%2Bg7ERFGtou94gTpEUWWrZWAZ1EKu1YCke0uj6FvoLoNoxl%2Fw%3D%3D",
    description: "Just a short distance from Uvita, enjoy your favourite water activities with stunning views of nature, animals and birds in Dominical."
  },
  {
    title: "Whale Watching",
    image: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Tours%20%26%20Attractions/671f2379e36ce.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761629946&Signature=bFcYNjeOhHOXr1wOSJqMgY1L8HZzlj%2BpUl3BTUROi1mcbs2hNHtOij%2B1x7qKsAM405NRfxczgLbPEC5Vh8bhYf%2B%2FNPznnK8KqgsoBg%2BCwHCctAA7Xu4dNwcFnnqeCbkbDIcd7wJjp4oz2foj6Hstrw2flAPtvR2AUnUxijQdtUNjj%2B%2FyFqb4GRLdwy%2FiKFWCD35Kcy5KWlLqiUo0S5g%2FqfAvt6ePtIjoLvL%2BY%2FNmR6cxysH2MDuhFz37SJLWumR8PZujz0q00AztUiLMyZZU0i4bpa3udsbJ66Y%2F5hvkw09hV1rDkf1x55cMU5CmEmjF4D%2BI009iCGs%2FkCjvykrJQg%3D%3D",
    description: "Uvita is known for whale watching. During the months of July to September, you can see humpback whales!"
  },
  {
    title: "Scuba Diving",
    image: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Tours%20%26%20Attractions/671f237a351cd.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761629946&Signature=ONsLbytRB7GZJoSmzWwHLct6MesOB28%2FVw4lbq8MY3dZw0JJqwPeQ4jAiQWh3FBsxMvbzu1Y%2FwzWji%2B0%2BlCZa91ZbZVBmo%2FABE2Xhdy0aOqreuzsL6VhjX%2FD4pINEqpDp6msQZeCfzWyMKQ3Lssov7a%2FsLONeRwL6pKJ0HjGcQyx2LFP6mYj48nfX5IQdk8WqKhZnBybzNR7S8V%2F30rJCtx7cTgg9%2FbVQEyp8759IKutpL1tHVGjDbrMGsmsg2m%2FiHnlP8OqLyuv85ELgLYYkhpzAMKckvqcxN5eQOULl2ROBVOvf%2BWPqFrvC%2Fxg5gyca1ux84sV%2BRfNXr%2FmA21LzA%3D%3D",
    description: "Calling all water enthusiasts! Take a plunge in the Pacific Ocean with a Scuba Diving adventure in Uvita."
  },
  {
    title: "ATV Tours",
    image: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Tours%20%26%20Attractions/671f237a6fcd2.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761629946&Signature=Yed6sYR%2FiV9DuqzLJLPaHGhewlsSvQ4hii9DEMSmuz7Fjk5L4ThAC9PE7UBOfqnScXyA%2F4tblhYyC7kOhrvpeb1YloQAW5toR3Hy4w21tml9SrlbDZN%2BAz7ry%2FoLJd81XLeOURFB%2FA38pNyL9KySCcHnqtpz8Zl21IWaNN8E1IWmlgEyDS2MGlXsEpuAwfpbfGWvHKqqY7XqOUm085o6QRdxM5spKMGDCWJwR9Z31Io78HhwLDYlv4Jivp8Q204G2lcDtwalCe7fTM6mjwq969EinWixkJA3AkJXYjNgZP6g4wuj8ySThiBo40Cnlu32NpwJWQT51bTaAOGMt4H3nQ%3D%3D",
    description: "Feeling adventurous? Pair adrenaline with a view and you have the perfect ATV tour."
  },
  {
    title: "Snorkeling",
    image: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Tours%20%26%20Attractions/671f237acd9a0.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761629947&Signature=F5lIxFJND%2Bo2%2B%2BkWw01l6qXsoAKK%2BYVOAE%2Fw9jSfrhcmS5b%2B9vpaOaQuH%2B5DcyOC9xGrbkBySpGVdxJo%2Br3yEUG3N75FGyAwQ9SMR%2BReicdRkRl301dTC2dkiuGMuZnQmyQeKcRUjladf%2FreXkJPyqyq0w%2BQl21Zf7PTEuAVjwhjMQEKCPxLVsqzwQGvZ5VsmVG3Ry1C%2Bn32m%2Fov9x6q2jgvQicgQv9Qhjvbp8DpyJcmzswuxxf9MZStuB0jd098I8xD4C3uQ%2B4RAKjcoqL216O7xr1TNL9LRW5kMEA1J9b0FMTsffs0dOwKq246KzvUB9Pto3ZsmeFf2RBOcNYVgg%3D%3D",
    description: "A classic water activity perfect for any swimmer. See some of Uvita's extraordinary sea creatures with a Snorkeling Tour."
  },
  {
    title: "Animal Sanctuary",
    image: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Tours%20%26%20Attractions/671f237b2005e.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761629947&Signature=GDw6%2FRtR6qY67rLAhq2Kbn0JobcktyAsPoNjo5cgANoZg1BcbDvcUthOqAYQpSSM72rTdiHxje0KAtFEfExgdurVwOTI1FDuqLoY9Y1AnpAJ%2FYjv%2BoJ472PQeh8yVngl%2BmIHZJuPwxA5mvIwIF4eiJAFxiLyP%2BSjuHEU42E0HLffuoakIEN6cj6vGFWNmxU4eVh%2BoooDD%2B8SAievlKZv3cAbVL1KqmIxAzTX8WyYXjf7CQ6rfQkCie%2F6YtZwjSg7SP%2FSGKEbqKCMu8C%2Fy5XJbDybOq2jp5rDyZaB4aMCDyQ8Fi2Km4%2FRD6qLkZCkpGtU9TdCFDV7d0mfX8%2FH59Ijpg%3D%3D",
    description: "Discover all the wildlife Uvita has by visiting the Animal Sanctuary just down the street from the hotel."
  }
]

export function OutdoorActivitiesComponent() {
  return (
    <section className={`bg-white py-16 ${cormorantGaramond.className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center text-black mb-12">
          Outdoor Activities in Uvita & Surrounding Areas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-gray-200 text-black p-6 rounded">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">{activity.title}</h3>
              <p className="text-lg text-center">{activity.description}</p>
              {/*<div className="mt-4 border-t border-gray-400 pt-4"></div>*/}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}