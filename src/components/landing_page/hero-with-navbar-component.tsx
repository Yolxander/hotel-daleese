'use client'

import { Lora } from 'next/font/google'
import Image from 'next/image'

const lora = Lora({ subsets: ['latin'] })

export function HeroWithNavbarComponent() {
  return (
      <div className="relative h-screen w-full overflow-hidden">
        <Image
            src="https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Home/671c830dbadbf.png?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=uxoZOK9EisZeAMHGe33C0o6PVfBz%2FKdQmjjdJYBFprMKFEP8Wz1exhWhTb9%2BRCH97iB4MBUmBwtzqcpJ8O1evYPvjVtNDZFZrregkXjvuYUi%2FxbIIpOShRBd92wBXRRuyLn4Qu7UnqYyCOLmVtSU96gCl7Yb5gusaJjXrrK1elfLjWA7T5s1l0aJwWLshVmW1kjUqudi8XVIBI6mcPc1SCg8LZHpTGTgm6j7VIWwPmDb%2B9ZgOaN424stWzCCeNjevwuSBQBTQD7EViQYjv%2F4L8NBhM9jWDiEYgVv%2Bm2Z4%2BjC1nlsiL%2Bxqw3Dn0NzGOIwQqPADoKbliM7epQioS5uFA%3D%3D"
            alt="Boutique hotel room with wooden slatted headboard and wicker lamps"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
            unoptimized={true}
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
