'use client'
import { Cormorant_Garamond } from 'next/font/google'

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '700'] })

export function LifeInCostaRicaComponent() {
    return (
        <section
            className="relative w-full pt-[100px] h-[110vh] bg-gray-100 flex items-center justify-center overflow-hidden"
            style={{
                backgroundImage: "url('https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Live%20in%20Uvita/671ed0ecd880b.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761608813&Signature=jCp5dgKrfx4d%2FkGKpw3fbx0qpIblBu7J6mPNtGI2HDtgthSL%2Fwl7hRk%2Bmiaih10RMNcVOBH2qSihTGDOdkCxgeoH9gWdEFoflc9%2B0%2B8jiAne0grI9SumXlZj3RojDcI%2BwICfmd%2BgH2UuZi7Tl5aC5Afmyi4Fx8f4PrYbX8gqSztM%2F66qT0dKLBpMZPch6aj3R0xleriaBvvt4zq%2BIhQ1ZcxFBGPX9FCfC330fZRAxvHSMbWx7bEEUpUtg9BKKKsPTzJ8uy5XKQgNNhQBqsvkwphSP%2B80cMj7i%2BamvcD4LTuS8mThfvhVWFV6izQeovoUluxhGl%2FJ17JIR3EIWjtozQ%3D%3D')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
                <h1 className={`${cormorantGaramond.className} text-4xl sm:text-5xl md:text-6xl font-serif mb-4`}>
                    Life in Costa Rica
                </h1>
                <div className="w-24 h-0.5 bg-white mx-auto mb-8"></div>
                <p className={`${cormorantGaramond.className} text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed`}>
                    Conveniently located in the heart of Uvita, Hotel Daleese is steps away from
                    stunning beaches, unique dining experiences and more.
                </p>
            </div>
        </section>
    )
}
