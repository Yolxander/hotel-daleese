'use client'

import Image from 'next/image'
import { Cormorant_Garamond } from 'next/font/google'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400'] })

const activities = [
  {
    title: "Zip Lining",
    image: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Tours%20%26%20Attractions/671f237c11d48.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=k%2FuIDhUSEw5%2Bnv1lBdEmDnT7iWJMPdL%2FgtoVx8Tw%2Fkc8cHAlZl1%2FRQdcrep4iaqSUJgWBOW%2B1WZsMSvjThUxO%2F0%2FE%2F4dDlkJZzhbt71S%2B5mF3Cqzze%2BjWb%2BVw9TlbSHt6Www8P3ySWsBJA%2Bh%2F3ALZet23xnq4w7m%2F2jd0txg3844p%2FjeZS2q8T0OT8COXeLD%2Bq6ur2gHERLqnhhxtbo%2FjyQEliBE6or5d1M7Z7xkxViAGb9QNNMuIn3JN%2FvSY%2FxwgQodRoXdMNgW%2FyaNb%2F8heWcJuW3elq7Oc429dYzEizYG3Y3rFCwWOZbVw7SK6qXWsyDuCF%2FIZFL1hCDgKEKYyw%3D%3D",
    description: "Experience the longest zip line in Central America with El Santuario Canopy Adventure Tours."
  },
  {
    title: "Horseback Riding",
    image: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Tours%20%26%20Attractions/671f237b88018.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=BpFnIKIDzG%2FbjLBw9mJNCX1jq9CAwYoWh0QlnstU%2B31XGqkuVOyk8Y421n2Qr1pshCXvBMZodbl28j7Oh0PwWzGnEKICcqzXsmnooxnoVy2hZZPFWUjQx2W2yWiJ6z8IjOSJBaRzPAXlTWMOB6406t6ey1Ojry501fz3Y%2FpAPSj6SqPOn0r8wQ9B1hcRq%2FjM7%2BhR4SLwUX2Aqzl2LAo5Oe%2FGoooRX3ujxh8R%2BhA4b5zrk9sKGGPz2%2BoqoC52PvQSNqaedkrNHd%2F7l9K5YUWbuIBW1R0ayvoSyF0AA56%2BeYNOCrhikPvWNiDzuf7qvZMfI6%2BrOiwNvvu0aKn5dY7fXQ%3D%3D",
    description: "Experienced or inexperienced riders can enjoy horseback riding on the Pacific Coast near Punta Uvita. Sunset and Waterfall Tours are available."
  },
  {
    title: "Kayak, SUP & Surf",
    image: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Tours%20%26%20Attractions/671f237963de4.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=cyQo4sbAFWpw1WsRSY4C6mpImL9WdhybdeR5uy1PwkwPksaHyW1H1Os%2ByqRTll7NvG3jhmE5VWZTUySMa3W7iYreLey1JlW%2FOp2DLwVZh1Q2oDyD3NB2S%2F%2BaCxbtfc7w2d%2F42x2HhePuFcauwCZTHWHjV0iIZ7%2By%2FlYBpFN%2BgUqqoQSc1fwoappTuqTQc8maY%2BGWJHfkpaBuINr0DkWPeLah%2BPDOENkEeyC1IIc1Tt6Dlt1uTVVzPiLBWJc4SZC3arfQiS64LAD4lYtf5Lk%2F70tn7GFiC8GC3r9FiBpqI5Rt37KdcWAZkUu0Vcpz99yL%2FUaTC%2FWZ9IA%2BbBQ9%2FewD2w%3D%3D",
    description: "Just a short distance from Uvita, enjoy your favourite water activities with stunning views of nature, animals and birds in Dominical."
  },
  {
    title: "Whale Watching",
    image: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Tours%20%26%20Attractions/671f2379e36ce.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=n6ymoj6GOfkPzWEHynptjHkcwlEq%2FzXyLEzQxdCFPxKqFsCiDyiCi7mqoStGn118njTE%2Bg7tvd0fsD6Q39mKA2uAAw2d8uhmBT18KTP2YhUzyvZYMTwse8%2Bt0THMQyRtwdYCzF90fp5kRGylIqufetRzaDJnY%2FruHCNnz9V0Aj%2FL0RsvAugKfZQIVKQW2GsZWInaQ28BCmBjf%2FHZVO%2Be7NwrVGxOg%2FuFBrMqtufI6GxkhDe2mwoEtDgNu0mdVtOzl7v5kMzUOw4zjJFiVfANfSM0H0tt2L2rxLzL693PeU6E80jPWU%2F%2FeQP%2F5huCtBzNBDxH4vXpOEDZuOC62leLTw%3D%3D",
    description: "Uvita is known for whale watching. During the months of July to September, you can see humpback whales!"
  },
  {
    title: "Scuba Diving",
    image: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Tours%20%26%20Attractions/671f237a351cd.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=pkweVG7RIdkr6rXBoF9j4NjzFisMBgistpMMz8SQWDCTwaSVPbXlEsMKRF3ZrxwfGaIQj1q%2BOga7slDhR27JpdUKJVQHaIpSUpBWDRfbP3Bk%2FWuviOJM4UANG6oWJ3%2FE%2F1x3og%2BBmMW79Lq7ec4k2DX%2FAmGfpmeslfizMrtCusflYyRiZS%2FNzAjPuLjvKQoDH4HSxxegQF0NPUm1zvOR0kxnRL545%2FmUowbx4kM%2FacyjYmr04XN4FgQm376yDqK8C%2B59vUdrZntE%2FF4J%2BhbEqF6d7kNQNz8D3eBZ1FYfxqLAN6%2FVLy4gaZ%2FCZviCyNm6bjIjxVdGdruinpyBL4S45Q%3D%3D",
    description: "Calling all water enthusiasts! Take a plunge in the Pacific Ocean with a Scuba Diving adventure in Uvita."
  },
  {
    title: "ATV Tours",
    image: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Tours%20%26%20Attractions/671f237a6fcd2.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=FhHa4lEiEoZOMqpfrw92PsmjzVlpYSzuo3C%2BLHaDYel%2BcUx19AANR9EnGFtuy%2BeH6a8rXcS%2FRVDrKMzYkeYBlfm8pq2vPuOpQTY%2FHJ59fYWYIVxiFWSAJ81AbJQNnbvTxH39ABtOAqK%2Fo5K8nUlEhzvcmjKft3%2BeUVpXGN%2BRxCg0afCWJsoUzaDg0svhcvmExGBykoAcBDhuQa8iKhdHMnhjeepO8ex6KphPIaJwuYtiQNL5Z3RHAfkdylWV1hQIPsVxXN7U%2FRgNueDgTphkPjQyyot%2B%2BuKlC3cweJLmya86PAeEJFED0%2BukHiZUBAnzLqxnDbqGPpIbAtiofz8J%2FA%3D%3D",
    description: "Feeling adventurous? Pair adrenaline with a view and you have the perfect ATV tour."
  },
  {
    title: "Snorkeling",
    image: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Tours%20%26%20Attractions/671f237acd9a0.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=Rod%2FALEXLNgycdepxqCEgX6n5lRn8QihLt%2FkZqPmFFYj2JIYU1ue8Ps4x3pScgEZ5MTaMtql3aydzo3NbIhhcxIL6xginZahi9anrbRa37rWuFiQyH3D8c76%2BIGZXzUolq1Hco9oxTp%2BnBZMiljCiV5H2U4mBjbsOYylHbZgbZf%2BfROsXLXIK%2ByFdtn6E%2Fj1XDtQaxsCVJcanE9%2BnvaM194SV1bIWQsiir9T%2BHeCdBuBdIt4LX1NtIZ384HmpoKJ6HZsWFyZXI8sV55YFC1QNVanp7F2x1wHUY1Rwfw95DafBlT7P9bKwpNYsCKETtJvEYHOPNucGSvAERaCEonyTg%3D%3D",
    description: "A classic water activity perfect for any swimmer. See some of Uvita's extraordinary sea creatures with a Snorkeling Tour."
  },
  {
    title: "Animal Sanctuary",
    image: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Tours%20%26%20Attractions/671f237b2005e.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=Ijei%2FXPbTAaf2E6WIPMMBDAuKH%2Btkk2xYY7Wo73iB9SHhMez3Yht6pWB7aKPtoBjCTsotIOUhEMV7PHEi07BZxfAxIa4TO%2FOKBQ%2FHDxT0dGRYeX316x8XK90xXIHwOQAxUONy9OKD6J%2BGcuFHCCAz75maA77RzC7GB6DifZtAR0tP21Z3Tw1rvtXV4yZkFD0I0km0idFWlRc8l9P3EGysX4Q3VlMd9mFRcUNPW%2B0yEwpM66hRDahOrOFbVsnVjGv4BalaMFBHIb83Nmhwo4B0oKawmPCD9LF9CUb91A4s6rrsxTSnTiG%2FzXC3oXOS9hawyojSI4sVOsmPpF%2B2QktzA%3D%3D",
    description: "Discover all the wildlife Uvita has by visiting the Animal Sanctuary just down the street from the hotel."
  }
]

export function OutdoorActivitiesComponent() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
      <section className={`bg-white py-16 ${cormorantGaramond.className}`}>
        <div className="container mx-auto px-4">
          <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl text-center text-black mb-12"
          >
            Outdoor Activities in Uvita & Surrounding Areas
          </motion.h2>
          <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {activities.map((activity, index) => (
                <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    className="bg-gray-200 text-black p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <motion.div
                      className="relative w-48 h-48 mx-auto mb-4"
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2 }
                      }}
                  >
                    <Image
                        src={activity.image}
                        alt={activity.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-full"
                        unoptimized={activity.image.includes('storage.googleapis.com') && activity.image.includes('Signature=')}
                    />
                  </motion.div>
                  <h3 className="text-[22px] font-semibold text-center mb-2">{activity.title}</h3>
                  <p className="text-[20px] text-center">{activity.description}</p>
                </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
  )
}