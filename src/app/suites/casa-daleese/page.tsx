import { FooterComponent } from '@/components/footer'
import { Navbar } from '@/components/Navbar'
import { Suite_Section } from '@/components/suites/suite-section'
import SuiteFacilities from '@/components/suites/suite-facilities'
import ImageGallery from "@/components/suites/gallery"
import {SuiteNavigationComponent} from "@/components/suites/suite-navigation";
import { getCasaDaleeseImageUrls, STATIC_CASA_DALEESE_IMAGE_URLS } from '@/lib/get-casa-daleese-images';

type GalleryItem = {
    src: string
    alt: string
}

/** Deterministic shuffle so gallery order is fixed but different from source list order. */
function shuffledForDisplay<T>(array: T[], seed: number): T[] {
    const arr = [...array];
    let s = seed;
    const random = () => {
        s = (s * 1103515245 + 12345) & 0x7fffffff;
        return s / 0x7fffffff;
    };
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

const header = { name: 'Casa Daleese', description: "2 Bedroom House with Private Office, Sleeps 4 Adults" }

const suiteInfo = {
    facilities: [
        { id: 1, description: "2 bedroom and private office" },
        { id: 2, description: "Ground floor bungalow with private entrance and parking" },
        { id: 3, description: "Full outdoor garden with large covered patio area for eating and lounge chairs for tanning and relaxing" },
        { id: 4, description: "2 Queen beds with fresh cotton linens" },
        { id: 5, description: "Fully stocked kitchen with Gas stove and oven, coffee machine, fridge, toaster & everything else needed for cooking and hosting" },
        { id: 6, description: "Iron*" },
        { id: 7, description: "Smart TV with Netflix subscription included" },
        { id: 8, description: "Couch" },
        { id: 9, description: "Private Laundry and Drying rack for clothing" },
        { id: 10, description: "Bath towels, pool towels, green striped beach towels, bed linens" },
        { id: 11, description: "Access to hotel pool & lounge area" },
        { id: 12, description: "Tile floor" },
        { id: 13, description: "Air conditioning & fan in each room" },
        { id: 14, description: "Clothing storage units" },
        { id: 15, description: "Glass & screen windows and doors" },
        { id: 16, description: "Mosquito net on sliding door" },
    ],
    bathroomAmenities: [
        { id: 1, description: "Toilet & toilet paper" },
        { id: 2, description: "Shower with complimentary shampoo, conditioner & body wash" },
        { id: 3, description: "Hairdryer" },
        { id: 4, description: "Hand soap" },
    ],
    views: [
        { id: 1, description: "Private outdoor patio garden and semi pool view" },
    ],
};

export default async function Page() {
    // Use static URLs first (they're always up to date)
    // Then try to fetch from Supabase to get any additional images
    let imageUrls: string[] = [...STATIC_CASA_DALEESE_IMAGE_URLS];
    
    try {
        const supabaseUrls = await getCasaDaleeseImageUrls();
        // If we got URLs from Supabase and they're different, use them
        // Otherwise keep using static URLs
        if (supabaseUrls.length > 0) {
            // Use Supabase URLs if they exist (they should match static URLs)
            imageUrls = supabaseUrls;
        }
    } catch (error) {
        console.error('Error fetching Casa Daleese images from Supabase:', error);
        // Continue using static URLs on error
    }
    
    // Ensure we have at least the static URLs
    if (imageUrls.length === 0) {
        imageUrls = STATIC_CASA_DALEESE_IMAGE_URLS;
    }

    // Fixed display order that differs from source list (deterministic shuffle)
    const displayOrder = shuffledForDisplay(imageUrls, 0xcafe);

    // Map URLs to GalleryItem structure
    const galleryItems: GalleryItem[] = displayOrder.map((url, index) => ({
        src: url,
        alt: `Casa Daleese Image ${index + 1}`,
    }));

    // Use first image as hero image, or fallback
    const imageSrc = imageUrls[17] || '/placeholder-image.jpg';

    return (
        <div>
            <Navbar />
            <Suite_Section src={imageSrc} header={header} />
            <SuiteFacilities suiteInfo={suiteInfo} />
            <ImageGallery galleryItems={galleryItems} />
            <SuiteNavigationComponent currentSuite={0} />
            <FooterComponent />
        </div>
    )
}
