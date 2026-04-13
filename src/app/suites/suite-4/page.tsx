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
    "https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/default/uploads/673eab70502b5.jpg",
    "https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/default/uploads/673eab7102af3.jpg",
    "https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/default/uploads/673eab71708ff.jpg",
    "https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/default/uploads/673eab71dbb9c.jpg",
    "https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/default/uploads/673eab724853b.jpg",
    "https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/default/uploads/673eab72b0240.jpg",
    "https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/default/uploads/673eab731dbce.jpg",
    "https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/default/uploads/673eab88003bd.jpg",
    "https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/default/uploads/673eab88b32aa.jpg",
    "https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/default/uploads/673eab89394be.jpg"
];

// Map URLs to GalleryItem structure
const galleryItems: GalleryItem[] = imageUrls.map((url, index) => ({
    src: url,
    alt: `Image ${index + 1}`,
}))

const imageSrc = "https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/default/uploads/673eab71dbb9c.jpg"
;

const header = {
    name: 'Suite 4',
    description: "Studio Suite with Garden & Mountain Views"
};

const suiteInfo = {
    facilities: [
        { id: 1, description: "Second level suite with private entrance and spacious balcony" },
        { id: 2, description: "Queen bed with fresh cotton linens and decorative pillows" },
        { id: 5, description: "Smart TV with Netflix subscription included" },
        { id: 6, description: "Sofa bed accompanied by black accent pillows" },
        { id: 7, description: "Drying rack for clothing" },
        { id: 8, description: "Bath towels, pool towels, green striped beach towels, bed linens" },
        { id: 10, description: "Terrazzo tile floors in bathroom and living area" },
        { id: 11, description: "Single-room air conditioning unit and ceiling fan for guest accommodation" },
        { id: 12, description: "Washing machine ($)" },
        { id: 13, description: "Wooden clothing storage unit with a clean, minimalist design" },
        { id: 14, description: "Glass and screen windows and doors, allowing natural light" },
        { id: 15, description: "Patio with outdoor dining area and bamboo privacy curtain" },
        { id: 17, description: "Mosquito net to ensure a comfortable stay" },
    ],
    bathroomAmenities: [
        { id: 1, description: "Modern toilet with toilet paper" },
        { id: 2, description: "Spacious shower with terrazzo tile, complimentary shampoo, conditioner, and body wash" },
        { id: 3, description: "Hairdryer*" },
        { id: 4, description: "Hand soap and sleek countertop for toiletries" },
        { id: 5, description: "Elegant round mirror above a wooden vanity" },
    ],
    views: [
        { id: 1, description: "Private outdoor patio/terrace with pool, garden, and partial mountain views" },
        { id: 2, description: "Well-lit suite with natural light through large windows" },
    ],
};




export default function Page() {
    return (
        <div>
            <Navbar />
            <Suite_Section src={imageSrc} header={header} />
            <SuiteFacilities suiteInfo={suiteInfo} />
            <ImageGallery galleryItems={galleryItems} />
            <SuiteNavigationComponent currentSuite={4} />
            <FooterComponent />
        </div>
    );
}
