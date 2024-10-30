import { Navbar} from "@/components/Navbar";
import Image from 'next/image'
import { Lora, Cormorant_Garamond } from 'next/font/google'

const lora = Lora({ subsets: ['latin'] })
const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400'] })

export function HeroWithNavbarComponent() {
  return (
      <div className="relative h-[105vh] w-full overflow-hidden">
        <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bed%20suite%203-pVgueIl1Vk5hCjvzxu854gnfgM41B9.jpg"
            alt="Boutique hotel room with wooden slatted headboard and wicker lamps"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className={`${lora.className} mb-4 text-4xl font-light md:text-[42px] text-center`}>
            Boutique Hotel in the Heart of Uvita
          </h1>
          <div className="mb-4 h-px w-[55vw] bg-white" />
          <p className={`${lora.className} text-xl font-light italic md:text-2xl text-center`}>
            Eccentric • Privacy • Comfort
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-95 p-6 text-center">
          <p className={`${cormorantGaramond.className} mx-auto max-w-4xl text-[20px] text-gray-800`}>
            Welcome to Hotel Daleese. Located on the Southern Pacific Coast of Costa Rica, our family-owned boutique hotel is situated in Uvita, Puntarenas. We look forward to your visit!
          </p>
        </div>
      </div>
  )
}
