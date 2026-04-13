import { FooterComponent } from "@/components/footer";
import { Navbar } from "@/components/Navbar";
import { Suite_Section } from "@/components/suites/suite-section";
import SuiteFacilities from "@/components/suites/suite-facilities";
import ImageGallery from "@/components/suites/gallery";
import {SuiteNavigationComponent} from "@/components/suites/suite-navigation";

type GalleryItem = {
    src: string
    alt: string
}
// Array of image URLs
const imageUrls = [
    "https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/uploads/67322841779f6.jpg",
    "https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/default/uploads/673e4d014d65c.jpg",
    "https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/default/uploads/673e4d0b846b7.jpg",
    "https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/default/uploads/673e4d0c2e3b8.jpg",
    "https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/default/uploads/673e4d0c9e943.jpg",
    "https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/default/uploads/673e4d1f31271.jpg",
    "https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/default/uploads/673e4d1fc7c30.jpg",
    "https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/default/uploads/673e4d28e456e.jpg",
    "https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/default/uploads/673e4d298e8b5.jpg"
];

// Map URLs to GalleryItem structure
const galleryItems: GalleryItem[] = imageUrls.map((url, index) => ({
    src: url,
    alt: `Image ${index + 1}`,
}))

const imageSrc = "https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/default/uploads/673e4d0c2e3b8.jpg";

const header = { name: 'Suite 3', description: "Studio Suite with Garden & Mountain Views" };

const suiteInfo = {
    facilities: [
        { id: 1, description: "Second level suite with private entrance and spacious balcony" },
        { id: 2, description: "Queen bed with fresh cotton linens" },
        { id: 3, description: "Full kitchen with 2-burner induction stovetop, coffee machine, mini fridge, toaster & electric kettle" },
        { id: 4, description: "Iron*" },
        { id: 5, description: "Smart TV with Netflix subscription included" },
        { id: 6, description: "Couch" },
        { id: 7, description: "Drying rack for clothing" },
        { id: 8, description: "Bath towels, pool towels, green striped beach towels, bed linens" },
        { id: 9, description: "Access to hotel pool & lounge area" },
        { id: 10, description: "Tile floor" },
        { id: 11, description: "Single-room air conditioning for guest accommodation & fan" },
        { id: 12, description: "Washing machine ($)" },
        { id: 13, description: "Clothing storage unit" },
        { id: 14, description: "Glass & screen windows and doors" },
        { id: 15, description: "Patio with outdoor dining area and bamboo privacy curtain" },
        { id: 16, description: "Hammock" },
        { id: 17, description: "Mosquito net" },
    ],
    bathroomAmenities: [
        { id: 1, description: "Toilet & toilet paper" },
        { id: 2, description: "Shower with complimentary shampoo, conditioner & body wash" },
        { id: 3, description: "Hairdryer*" },
        { id: 4, description: "Hand soap" },
    ],
    views: [
        { id: 1, description: "Private outdoor patio/terrace with garden and mountain views" },
    ],
};


export default function Page() {
    return (
        <div>
            <Navbar />
            <Suite_Section src={imageSrc} header={header} />
            <SuiteFacilities suiteInfo={suiteInfo} />
            <ImageGallery galleryItems={galleryItems} />
            <SuiteNavigationComponent currentSuite={3} />
            <FooterComponent />
        </div>
    );
}
