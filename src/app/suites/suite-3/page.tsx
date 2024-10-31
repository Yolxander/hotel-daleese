import { FooterComponent } from "@/components/footer";
import { Navbar } from "@/components/Navbar";
import { Suite_Section } from "@/components/suites/suite-section";
import SuiteFacilities from "@/components/suites/suite-facilities";

const imageSrc = "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%203/672302a36c66c.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761883683&Signature=ORmyurkEzmzlHwrOPLlJfLkDQIKBrElRXy%2BkxoPAyWF3gyvN34Pkn%2FXEuXpTNQW%2FJrqcqQ2J4FPl5lCUcL758tSvCYjM1U%2BtffZHDPXnP5SHtFOPlXgo2Zg0cj9pcwSrPjOnJcIhYm5JwwcAZcyzopksp4yVY1XS%2BeuHNvaaJTgTCniT9wCNhK9FYs3Gm8ZlQ68qt3X8cwFdb2DC9kP%2B6GYGWAClQgbLhxYYmThH6OxyPAOnduA2SZ%2FjsX%2B1XB52zSF%2FLk5JHL6YpE1pDEBKhHlt%2F6mlN2oujZvBja2hoaMIjj2EJkLDlTGsIyxpFLrOIO2b64s%2FpxEudhaZoWOs1A%3D%3D";

const header = { name: 'Suite 3', description: "Studio Suite with Pool, Garden & Mountain Views" };

const suiteInfo = {
    facilities: [
        { id: 1, description: "Second level suite with private entrance and spacious balcony" },
        { id: 2, description: "Queen bed with fresh linens" },
        { id: 3, description: "Full kitchen with 2-burner induction stovetop, coffee machine, mini fridge, microwave, toaster & electric kettle" },
        { id: 4, description: "Iron*" },
        { id: 5, description: "Smart TV with Netflix subscription included" },
        { id: 6, description: "Sofa bed (sleeps 2 small children or 1 adult)" },
        { id: 7, description: "Drying rack for clothing" },
        { id: 8, description: "Bath towels, pool towels, bed linens" },
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
        { id: 1, description: "Private outdoor patio/terrace with pool, garden, and mountain views" },
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
