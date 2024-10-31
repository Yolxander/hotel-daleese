import { FooterComponent } from '@/components/footer';
import { Navbar } from '@/components/Navbar';
import { Suite_Section } from '@/components/suites/suite-section';
import SuiteFacilities from '@/components/suites/suite-facilities';

const imageSrc = "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%201/6722811bbc369.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761850524&Signature=BySCk34Wg5xMdxbMU1r%2FUH3LhZayf%2FsF8seffcH63yoRvVrwEeoFoeEbNzFt7c%2BPYy4E%2FhyHWS6bduWyT4AagbmTBaPhXqa1YkJfYZHW%2BSPOA0cDF8OsNfIqJRlxRtE6tIFGIS0egfKa9CKrN%2BbAuH77QfVQ5o5kfuc8VggATVODybITrdnlfV7UERiWx%2Fr8JNeNpQo9Nf%2Bo36x3QcqCsqAACJpE5Uc7ZoYESMcDh9NytfKz27evYj9YKwGb%2B0t8eEr9eravw5wPf%2BcF%2BxYkh54ilo2bnLSQcpSC2yZq4QbbH%2BSgn1rlWO3AY6c3AnFzvdkxIs0eUKmyrX4rTK7GRQ%3D%3D";

const header = { name: 'Suite 1', description: "Wheelchair Accessible Studio Suite with Garden View" };

const suiteInfo = {
    facilities: [
        { id: 1, description: "Entire detached ground floor wheelchair accessible unit with private entrance" },
        { id: 2, description: "Queen bed with fresh linens" },
        { id: 3, description: "Full kitchenette with coffee machine, mini fridge, microwave, toaster & electric kettle" },
        { id: 4, description: "Iron*" },
        { id: 5, description: "Smart TV with Netflix subscription included" },
        { id: 6, description: "Sofa Bed (sleeps 2 small children or 1 adult)" },
        { id: 7, description: "Drying rack for clothing" },
        { id: 8, description: "Bath towels, Pool towels, Bed linens" },
        { id: 9, description: "Access to hotel pool & lounge area" },
        { id: 10, description: "Tile floor" },
        { id: 11, description: "Single-room air conditioning for guest accommodation & fan" },
        { id: 12, description: "Washing machine ($)" },
        { id: 13, description: "Clothing storage unit" },
        { id: 14, description: "Private Garden & Outdoor dining area" },
        { id: 15, description: "Glass & Screen windows and doors" },
        { id: 16, description: "Hammock" },
    ],
    bathroomAmenities: [
        { id: 1, description: "Toilet & toilet paper" },
        { id: 2, description: "Shower with complimentary shampoo, conditioner & body wash" },
        { id: 3, description: "Hairdryer*" },
        { id: 4, description: "Hand soap" },
        { id: 5, description: "Grab Bar for safety" },
    ],
    views: [
        { id: 1, description: "Garden view with outdoor patio/terrace" },
        { id: 2, description: "Inner courtyard view" },
    ],
};

export default function Page() {
    return (
        <div>
            <Navbar />
            <Suite_Section src={imageSrc} header={header} />
            <SuiteFacilities suiteInfo={suiteInfo} />
            <FooterComponent />
        </div>
    );
}
