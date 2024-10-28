'use client'
import { Cormorant_Garamond } from 'next/font/google'

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '700'] })

export function ToursComponent() {
    return (
        <section
            className="relative w-full pt-[100px] h-[110vh] bg-gray-100 flex items-center justify-center overflow-hidden"
            style={{
                backgroundImage: "url('" +
                    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Live%20in%20Uvita/671f1a8937870.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761627657&Signature=HsWQKt6cE3KYzOWvo%2BAJmltAPLIIPIsPD%2FgPWEjP8%2FmNVSTh%2FW0sH5vutCnsaYNkFpqodzyH7NXlqtBsIXBO%2FWgJ%2FZsjsb9%2Bfi7Mzpf4SlAc4Kwdo1NMbboOO7uLGGpdhAIi6TMvbbMOjy0jUvBH2Q%2FurlQqEEZifl95Dz2%2B6NaaiQp9dau%2BJifUWDoTj%2Fe4UuYhcD6Rx245iDnsKMJVfl1FeJ9%2BWJorbQZTeU2PfRSN9cOjh9gCgN65G2F3ASZrbMui2Eh8XPSG6oFCsInanklcKAidwPLYw7NGT%2Bfm7FhMvFxA6eG5c8dBiJWb%2BVmN1XwYRTu5IL9HO0HYqE5o9g%3D%3D')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
                <h1 className={`${cormorantGaramond.className} text-4xl sm:text-5xl md:text-6xl font-serif mb-4`}>
                    Tours & Attractions
                </h1>
                <div className="w-24 h-0.5 bg-white mx-auto mb-8"></div>
            </div>
        </section>
    )
}
