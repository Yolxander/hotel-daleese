import { FooterComponent } from '@/components/footer'
import { Navbar } from '@/components/Navbar'
import { Suite_Section } from '@/components/suites/suite-section'
import SuiteFacilities from '@/components/suites/suite-facilities'
import ImageGallery from "@/components/suites/gallery"
import {SuiteNavigationComponent} from "@/components/suites/suite-navigation";

type GalleryItem = {
    src: string
    alt: string
}

// Array of image URLs - placeholder structure, user will provide actual URLs
const imageUrls = [
    // Placeholder - replace with actual Casa Daleese image URLs
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673de7f44f33a.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=Q3NdxHjdLsmvcqL893JAIvr1gTYXe6qolHmIx1SDt9%2FN3cNMU1ngr4Aw5nKxX%2BEOotmQU6ZqZFTA3DXp4rYpY1n%2B7%2B4Z%2BPaBE8x%2FVI12jLr3KG%2BmECKOaauGpRmvvd2Y5X7z0gAVBkxgvYnmXoBMrsioAU2xeXyAfO449BPJDdwgqJwYgNLbCI36J3SLoA5SplrdG2bSxfZ1EjRMmkK%2FxN5VCrzIHFLj2ekk2FOAXDGvkaSlNPC5HDTe29xeXH3mpvztCfaYoARLx4cYMhEeJOXGdFHVl1yRBO2CoeRuf3pf3anTkSyUiHEZDKOH05IA56Mzp%2ByCX7nLYOQvUkHafw%3D%3D",
];

// Map URLs to GalleryItem structure
const galleryItems: GalleryItem[] = imageUrls.map((url, index) => ({
    src: url,
    alt: `Casa Daleese Image ${index + 1}`,
}))

const imageSrc = imageUrls[0] || "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673de7f44f33a.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=Q3NdxHjdLsmvcqL893JAIvr1gTYXe6qolHmIx1SDt9%2FN3cNMU1ngr4Aw5nKxX%2BEOotmQU6ZqZFTA3DXp4rYpY1n%2B7%2B4Z%2BPaBE8x%2FVI12jLr3KG%2BmECKOaauGpRmvvd2Y5X7z0gAVBkxgvYnmXoBMrsioAU2xeXyAfO449BPJDdwgqJwYgNLbCI36J3SLoA5SplrdG2bSxfZ1EjRMmkK%2FxN5VCrzIHFLj2ekk2FOAXDGvkaSlNPC5HDTe29xeXH3mpvztCfaYoARLx4cYMhEeJOXGdFHVl1yRBO2CoeRuf3pf3anTkSyUiHEZDKOH05IA56Mzp%2ByCX7nLYOQvUkHafw%3D%3D"

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

export default function Page() {
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
