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

// Gallery image paths in Firebase Storage (URLs are resolved on the server so they always work). Items may have direct `src` (Supabase) or `path` (Firebase).
const GALLERY_DEFINITION: { id: string; path?: string; src?: string; alt: string }[] = [
    { id: "1", src: "https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/IMG_0843.jpg", alt: "Hotel Daleese gallery 23" },
    { id: "2", src: "https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/IMG_1632.jpg", alt: "Outdoor lounge area" },
    { id: "3", src: "https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0838.jpg", alt: "Outdoor lounge area"},
    { id: "4", src: "https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/IMG_0508.jpg", alt: "Property grounds" },
] as const

// Fallback when Firebase is not configured. Run `npm run regenerate-urls` or set Firebase credentials so the server generates fresh URLs.
const FALLBACK_GALLERY_URLS: Record<string, string> = {
    "default/uploads/673eaedfed605.jpg": "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673eaedfed605.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763697248&Signature=KAu6D6nv252TcOgvglA2oMYAgUsMEErGd9zYaiRwf6FM1TYXq5kZ8TUet5iBpw4Xd%2Bc%2FG1n3JmMtLnF5luvte5HgyahE5%2ByJJ229WFf5mOg1tZtsHjGpv9G7m6Y%2Fr0XME9RisKzDMciff91hE74K7jaCIjgenEHRqwlqukIQ%2F7Zs99h0eHMIM4Xb5MqKU8IA3dVeSTcRcWVT8rIXQFqtyY2BiTx2HGFRRvX7YGvCTr7RNAjDiyoZLZGz7xNS%2FnRHQKqBdb1m%2BYd930jXoy15tecl4ddIkdpIXBqYqvCTLS8c8%2BMbLgmon1YvrYDUbb2TzdePy3uYwlLp%2Bosti9wrFg%3D%3D",
    "default/uploads/673eaf00ea361.jpg": "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673eaf00ea361.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763697281&Signature=f5syksWOQXM1%2F3IzT05LBkJHzg%2F%2BiMVgcihUJxGzkmmlklmmKKE6oJYTdyy8jxLBgCekiu%2BGvQsPfzFCJMgAdPMpGLnEm3pVooOUD1iIU7%2FaZB%2Fn%2BIp0LyVsFTPf69VOgj%2BZESSi14wfpZs9vnFoFhefUE2f6fCafni3D%2FXVMt6S92ijHU316oQy2d0k58%2BijtpYLikpUUrKmL18sr%2BpH9C2hNriWB6eBGUqyk57i%2F6naqBrbWzPHDnWoAV9TNQal26%2BQiDuC67s4nodJtdKkSClJHoYgj%2FUMxloEqUu93IAVuCGEFrdOFNEPvTQ89%2FqJeaK7ov9tQaF4q5BplXBfw%3D%3D",
}

async function getGalleryItems(): Promise<{ id: string; src: string; alt: string }[]> {
    const pathItems = GALLERY_DEFINITION.filter((item): item is typeof item & { path: string } => "path" in item && !!item.path)
    const paths = pathItems.map((item) => item.path)
    try {
        const urlMap = await getSignedUrls([...paths])
        return GALLERY_DEFINITION.map((item) => {
            if (item.src) return { id: item.id, src: item.src, alt: item.alt }
            const path = item.path!
            return { id: item.id, src: urlMap[path] ?? FALLBACK_GALLERY_URLS[path] ?? "", alt: item.alt }
        }).filter((item) => item.src)
    } catch {
        return GALLERY_DEFINITION.map((item) => {
            if (item.src) return { id: item.id, src: item.src, alt: item.alt }
            return { id: item.id, src: FALLBACK_GALLERY_URLS[item.path!] ?? "", alt: item.alt }
        }).filter((item) => item.src)
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
