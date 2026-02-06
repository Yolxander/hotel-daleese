import { Navbar } from "@/components/Navbar"
import { AmenitiesHeroComponent } from "@/components/amenities/amenities-hero"
import { AmenitiesSectionComponent } from "@/components/amenities/amenities-section"
import { AmenitiesGalleryLightbox } from "@/components/amenities/amenities-gallery-lightbox"
import { FooterComponent } from "@/components/footer"
import { AmenitiesSectionTopComponent } from "@/components/amenities/amenities-section-top"
import { getSignedUrls } from "@/lib/firebase-storage"

const amenities = [
    {
        title: "Experience the Best of Our Boutique Hotel",
        description: "We invite you to immerse yourself in the tranquility of our property and make the most of our thoughtfully curated amenities and services. Enjoy complimentary private parking and high-speed Wi-Fi as part of your stay."
    },
    {
        title: "Unwind in Paradise",
        description: "Bask in the serenity of our lush outdoor pool area, surrounded by a vibrant green oasis. Whether you’re enjoying a good book, sipping a refreshing cocktail, or simply soaking up the atmosphere, relaxation comes naturally here."
    },
    {
        title: "Seamless Travel",
        description: "Leave the logistics to us! We’re happy to assist with booking private airport shuttles to and from the hotel or arranging a car rental for your adventures. Your stress-free getaway starts here."
    },
    {
        title: "Prioritize Self-Care",
        description: "Rejuvenate your mind and body with our network of skilled massage therapists and wellness professionals. Let us arrange an in-room treatment tailored to your needs, so you can fully embrace the peaceful energy of your stay."
    }
];

// Gallery image paths in Firebase Storage (URLs are resolved on the server so they always work)
const GALLERY_DEFINITION = [
    { id: "1", path: "default/uploads/673eaedfed605.jpg", alt: "Pool and garden view" },
    { id: "2", path: "default/uploads/673eaee10c75b.jpg", alt: "Outdoor lounge area" },
    { id: "3", path: "default/uploads/673eaf00ea361.jpg", alt: "Hotel amenities" },
    { id: "4", path: "default/uploads/673eaf0163ab4.jpg", alt: "Property grounds" },
] as const

// Fallback when Firebase is not configured. Run `npm run regenerate-urls` or set Firebase credentials so the server generates fresh URLs.
const FALLBACK_GALLERY_URLS: Record<string, string> = {
    "default/uploads/673eaedfed605.jpg": "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673eaedfed605.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763697248&Signature=KAu6D6nv252TcOgvglA2oMYAgUsMEErGd9zYaiRwf6FM1TYXq5kZ8TUet5iBpw4Xd%2Bc%2FG1n3JmMtLnF5luvte5HgyahE5%2ByJJ229WFf5mOg1tZtsHjGpv9G7m6Y%2Fr0XME9RisKzDMciff91hE74K7jaCIjgenEHRqwlqukIQ%2F7Zs99h0eHMIM4Xb5MqKU8IA3dVeSTcRcWVT8rIXQFqtyY2BiTx2HGFRRvX7YGvCTr7RNAjDiyoZLZGz7xNS%2FnRHQKqBdb1m%2BYd930jXoy15tecl4ddIkdpIXBqYqvCTLS8c8%2BMbLgmon1YvrYDUbb2TzdePy3uYwlLp%2Bosti9wrFg%3D%3D",
    "default/uploads/673eaee10c75b.jpg": "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673eaee10c75b.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763697249&Signature=khj%2B2b7laMUFQsMZpXXCcdcNrNOiUjEEPoKy41OzI9ESUvQsDJ3AXxvT6sSC3ab49x4RAPEnJsJCz8ku%2BnQNws6IOkuk5MKOJBzW5tFu9SWROSTnIbgct51tW4VbTV2Iif0a7B0KJ7bHdwr1A4kBBhFPUFScma9yosAIZSEtCvZrc6VJB%2BgAcdl3RLV9LBgaltirwRQDpp12z1jHLSvWkYK%2F4D8j1wUj349BtK1P8pgP44l2ei6aeUq6Rir7rK61yxMIGnCTW%2FPSPYH8g51NmAGsDzUca7drog4%2BiZOLlQrkgs%2BukPiVcwM0puGoH0FnrSuWMXvml5ietoceQFOUhg%3D%3D",
    "default/uploads/673eaf00ea361.jpg": "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673eaf00ea361.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763697281&Signature=f5syksWOQXM1%2F3IzT05LBkJHzg%2F%2BiMVgcihUJxGzkmmlklmmKKE6oJYTdyy8jxLBgCekiu%2BGvQsPfzFCJMgAdPMpGLnEm3pVooOUD1iIU7%2FaZB%2Fn%2BIp0LyVsFTPf69VOgj%2BZESSi14wfpZs9vnFoFhefUE2f6fCafni3D%2FXVMt6S92ijHU316oQy2d0k58%2BijtpYLikpUUrKmL18sr%2BpH9C2hNriWB6eBGUqyk57i%2F6naqBrbWzPHDnWoAV9TNQal26%2BQiDuC67s4nodJtdKkSClJHoYgj%2FUMxloEqUu93IAVuCGEFrdOFNEPvTQ89%2FqJeaK7ov9tQaF4q5BplXBfw%3D%3D",
    "default/uploads/673eaf0163ab4.jpg": "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673eaf0163ab4.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763697281&Signature=RbmHj8UKe7p%2F522EHeCebrxFBLkvYoqcyvj8ORLSUchp0Hq2XGlYSNfoRntfRR1kHQMv1TPO2BC1Rjn%2By4rAeagg3bswtQ%2FnXhX5qneFb%2B8JyMUqHHAcfmyn0UiEXYbbxbY8RgSqFBIpYEt%2Fa%2BPcw%2FvQsZh78ixxGHu2Cx1W4uOVAg7%2F2wIREkBKjisOC0zaCZW0ZPt2PKxPFOOhdk25IjMODwFHhEWGb3VM7CaIJ1LWgrPsj%2Bz%2F6esgUsNKm7Ppyj%2BJxaaIIbxkQkGzkEmKXU67E1W%2FLRAvjM9slzoGS4N7ZQbwWSlKlPULHSmTCX5ZBkXQFUDzUbn1XoVJ3pMwyw%3D%3D",
}

async function getGalleryItems(): Promise<{ id: string; src: string; alt: string }[]> {
    const paths = GALLERY_DEFINITION.map((item) => item.path)
    try {
        const urlMap = await getSignedUrls([...paths])
        return GALLERY_DEFINITION.map((item) => ({
            id: item.id,
            src: urlMap[item.path] ?? FALLBACK_GALLERY_URLS[item.path] ?? "",
            alt: item.alt,
        })).filter((item) => item.src)
    } catch {
        return GALLERY_DEFINITION.map((item) => ({
            id: item.id,
            src: FALLBACK_GALLERY_URLS[item.path] ?? "",
            alt: item.alt,
        })).filter((item) => item.src)
    }
}

export default async function AmenitiesPage() {
    const galleryItems = await getGalleryItems()
    return (
        <div>
            <Navbar />
            <AmenitiesHeroComponent />
            <AmenitiesSectionTopComponent />
            <AmenitiesSectionComponent amenities={amenities} />
            {galleryItems.length > 0 && (
                <AmenitiesGalleryLightbox galleryItems={galleryItems} />
            )}
            <FooterComponent />
        </div>
    )
}
