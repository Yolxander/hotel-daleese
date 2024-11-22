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
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673eab70502b5.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763696368&Signature=UPP6Mxkfj8lJg4P1J%2BEWjqAT7Ea%2B2izG7Nqtm%2Bifl0j0%2FyGmBa4ywAkoGWen8eoDjQy77JM2YDoHY1YIdpzEG3V%2FeKmvNpLOE8npTj4cxv%2FTJfp2ADCoYCVDFANWLglQPO7okRwWQG11MVxaO6%2BZpcgwml3Z9cNULbx8NlatwXnbFm4Ng6S20yjWK03vhSuaNlmsyTsOrUaAZnvbKqV3HUzRKdMViEsKkB8RnKT6JcchrFXRviR1xBJwjpVba2paVGUPw4ghsi2dGmz46XhWiTx3gQCKtYDbfn%2FytVfe5nNJbhUQ1sgCgw9XaJOJTWOzhx7mrMn1gTixi0djXCDX3A%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673eab7102af3.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763696369&Signature=QPxMrNbCsL7c3MqOgZcQUD5F3F44A%2B15IVvToLUw5q3joOqxcxux%2FOQ7%2By65QIdeAVoQ9kqDO11DGFB%2B9HIYTwkGBpj8KPOqh7kubTYK5Vnd4WIU0jZGwluQPjq0yf4JXJmyLtRAOT1Nzkl6G34oeLVhMURKRvUcRv7mvXlGlKbr%2FQmecnwkdgooGK6WtY4%2Bw2nau7Uj0SAz%2B3Wc9N60mVz1PN9OhogE9Hk72myp0kLPfAKHnxb9pZQ%2BOa33mu7Z90tfT%2FkXTAnglnRbnMEWiWEa7byPfuQ6aKZKtgehfpW9hPa5U31yEVfY%2FAp5v8YD1RbFwKeVOOyve1Y186Kyhg%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673eab71708ff.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763696369&Signature=EHTB6PyaOF%2BS4%2Bn5m80HLOBEjzZlgyU5m48106d4N3n5KCVbQ%2BSjdHPlO2dXWqSlq%2FIaoyTwbf1%2FJGuwkkQulT59RSdjy%2BLM6znISsxFFakDnbLl%2BlIS7kKVUxE%2FKhaDgghRPc2ztwMU1rygLlvAax4wAJP6eog65Y7sD1qk%2FgsCDJWTLP1pu8tw6HddE%2BJxKkGZws8rrfZ0gxh9GzUt3qddO9ucFv3xhz%2BfR%2FX0V5R3kjkPKWAZG6Ws569bCImXrp7lPGFP1bfb%2F%2FpXxgVb3W0gV2sFd9OlTBNzJoZrPFzOLvax0ennEErLIw3xdMA7tw31rT5kZNQ8pm%2BV7H8d%2Fg%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673eab71dbb9c.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763696370&Signature=Miui7%2BF4QJ8qX9KbL6iGC0DfbQDAUllY8hwJVmKZ%2FzEpRkDObULCUmHYMLGCiCm36%2BHgFtiLxc59TmnQHJ5HdClUyHMgTvD2b%2B%2FTZhgtHEPPrYyugE6qAu2Y6lGPbyPGyYdtUcF8eEitdiqaC0gpGo9eFqV53Wyp7cEfhbPAOAYpvPooBidPIuhKy%2FZLRVmJYL3COQPI7W6KDK0rdBBtAuX1UdCWsVyiPLkp2ZMBjuQXBQVPHtt0PDlz73OcFlTNa0DMhyq51BIcTXQ5B1ExfEFZCn5xfXiilfFroboCz2Wdpyg79giQoE2VWLKX%2Bu06%2FGpnhjoJOXWfl0HNOacM3Q%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673eab724853b.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763696370&Signature=aZgA8AZMXM6baiDgPDCPuDQTWlVHBy3nMXFRb%2FDa4Hieo6q%2BRVzOlA%2BlQWmx3NHwXj6kizPnJCpXkdakeA%2Fwt9NyErz7Dr0croXp8GVY5MethsUB9b9AfY77CNAd1G5YcTOAs1%2B0j%2FdpdM5HlSWrnJIQzovG2zdhyjO7osZYnrLgxHmNrf3XTyvBwpnPuUdhMSr4snmS3dNF5cSXkOBIQ31VqMXhR6rH%2FtysamPxN3IuZIAXhcdF76QSI91INcji20H%2BeyC%2FAz1Tmy9jsdr07xtAl3Z19wIWU1dT7mS9mTozwdiChArhl9ab6OP0%2BqNeHuHhDFeOmYvUU2VaHDbUjA%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673eab72b0240.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763696371&Signature=WPgLYs%2F2uhb0uuulzbraWK9WyOIBfWl3KlUNqOYvnDkMKy9mRJU%2BVj1JHSL%2F6g3ZV1rd7nTHWzK3A1M9lshOKBk8aX3%2BCvoko9ldPwamtmDREBMgyNvqJhqT%2Bq9qh1hJAINDPubDfxLPJBMgyogdgdXoRin0UpJEZobLjcoz0cENSNcY6Y6sttrA0XyK9iLRc34LqiGf2LOOGrKFWW2NHct60Ns19Axsr78xIOF2f2TmWCy7YvMha7i0IUD%2BH3glJzSaLP%2BYj5ZiB7wyvjp08%2BYOZqoRQ%2BQKNmInUuUKoxbYpSXGtC0ID3H964PP6y3aVmY9q4%2B6d1WrSnvz8nt21A%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673eab731dbce.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763696371&Signature=bn4B9MfB9xaXs6UTHAkCK1OJM7Ub1xnY%2FZiI9FwmAGefOgSd%2B%2BSq%2FSq%2FuXn1Ntd6k2onzqmooKehE%2Fw9pgSmGDYiVnB%2BRKimt9o1R7ciukr%2FJHAHcfuwGPSbN3TfhnfJZtRDfQch5FNsGVdHq36EOfC46BtTcG%2FL9GTgfGa80JEDLMdxS1pWm5MvwRtt9jiGcJYWD%2BQ%2BIs%2BtjXvT2eg2p5GG7j1j2SelaJNhZCa9YPBY9lCpCmahi%2FQAjuNTAP1F%2FZeZalYi2UzRz9MWpGSnmiZN6bQxWXpKG3JMZ8O793wgPqwsHg5zDqFwAudtxLoO%2BorwZ51g%2BpWsPquAL5p6ww%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673eab88003bd.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763696392&Signature=P4g6HDVvz5tl%2BWFuz7ncamAknmb6q6vc3b9b4rG6QS%2F%2FsBY7DwtC52ugWYkl3bCrXbdSnqps4rAcbx9N3%2BG3PwdOKkhrvH1R6Y%2FyAIGSzvRXxKGq6Zmltp5FS9QFu9T4jbEEs9A7xM885FukRyB1uJ3AKoPqIccyy106lLlp7QFQkiWzhcgRGJe%2BInb64knPHTq40rUIEHTdD4IkKXFAp%2FScNZCIf28oMB5Bb4YVpbypsHqm38iiAb%2FFHwGXyhBwnolgy8SskEPzRHU%2Fu3svhPTAG1DHibVbWclinutpr8SwTs8lFiAjBuyKcHtwXlgQrDcssjrdVFwOSfaoAos%2FFQ%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673eab88b32aa.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763696393&Signature=pe62qDg1nrhp40YBx4lpi8DWtQyFlkA%2BnfWB7tXB4lWBr9bb5ngoLj25KJUcMnjaUQpU%2BG14A47m3ffR3PyjUWIP%2FXdpc3aMZ7JLs0A%2FHX00QgQtlufukqM%2FuEWlvI7DIffyq2ajUeXT30apUFidDydxvZ6gymgpvLMU7Tm1lRHwGdAMUqfwMAXzu0whxBxLHDJB72XypouBwqBXEJx8n3EJqCcvyl8Pp9N%2Fv0juTtsI7XNt%2BCwt4T0hOL6v7nExU2i6CVf6ToMJz5X6FyDPL7BWGNEPIvT70bznE%2BIdCgVo26jupkHVwL8r6AXkhqk%2FjWYae%2Ba7hpoC7h9qznEOog%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673eab89394be.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763696393&Signature=MyEu2av1AGmMqobXB8KmiAp9biDS5obVOYAp0zAjcaAidDNSFOfhr7aEhxWaGqBnaykSLvblA%2BVIDpJNNvPQstxElDCbUjslERiNGALj4mKpkqziH48oJ5uvmKr0Uynt3GMVUwfyOB6fnfSOPjU04PT%2BkqaLuKhdOdtGgGzAdPB6kIfNZqEBTXTs1hkBlvWwLS%2Fg%2FMSlWUXtsaecJdHQnN8tDY1eQpyo%2ButK3ih0PLN1uNZn%2BmgfZKsV%2BL1GrnM6fIt8URXR8pzc1wD5iqQ08SWnZO94smg4qoMHbfkoZjA9oQRy2emRDbTfqTP%2FFHE5uf0VOZPRSExChjMfrXl8jw%3D%3D"
];

// Map URLs to GalleryItem structure
const galleryItems: GalleryItem[] = imageUrls.map((url, index) => ({
    src: url,
    alt: `Image ${index + 1}`,
}))

const imageSrc = "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673eab72b0240.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763696371&Signature=WPgLYs%2F2uhb0uuulzbraWK9WyOIBfWl3KlUNqOYvnDkMKy9mRJU%2BVj1JHSL%2F6g3ZV1rd7nTHWzK3A1M9lshOKBk8aX3%2BCvoko9ldPwamtmDREBMgyNvqJhqT%2Bq9qh1hJAINDPubDfxLPJBMgyogdgdXoRin0UpJEZobLjcoz0cENSNcY6Y6sttrA0XyK9iLRc34LqiGf2LOOGrKFWW2NHct60Ns19Axsr78xIOF2f2TmWCy7YvMha7i0IUD%2BH3glJzSaLP%2BYj5ZiB7wyvjp08%2BYOZqoRQ%2BQKNmInUuUKoxbYpSXGtC0ID3H964PP6y3aVmY9q4%2B6d1WrSnvz8nt21A%3D%3D";

const header = {
    name: 'Suite 4',
    description: "Elegant Studio Suite with Terrazzo Shower, Modern Wooden Accents, and Natural Lighting"
};

const suiteInfo = {
    facilities: [
        { id: 1, description: "Second level suite with private entrance and spacious balcony" },
        { id: 2, description: "Queen bed with fresh linens and decorative pillows" },
        { id: 3, description: "Smart TV with Netflix subscription included" },
        { id: 4, description: "Sofa bed accompanied by black accent pillows" },
        { id: 5, description: "Drying rack for clothing" },
        { id: 6, description: "Bath towels, pool towels, bed linens" },
        { id: 7, description: "Terrazzo tile floors in bathroom and living area" },
        { id: 8, description: "Single-room air conditioning unit and ceiling fan for guest accommodation" },
        { id: 9, description: "Washing machine ($)" },
        { id: 10, description: "Wooden clothing storage unit with a clean, minimalist design" },
        { id: 11, description: "Glass and screen windows and doors, allowing natural light" },
        { id: 12, description: "Mosquito net to ensure a comfortable stay" },
    ],
    bathroomAmenities: [
        { id: 1, description: "Modern toilet with toilet paper" },
        { id: 2, description: "Spacious shower with terrazzo tile, complimentary shampoo, conditioner, and body wash" },
        { id: 3, description: "Hairdryer*" },
        { id: 4, description: "Hand soap and sleek countertop for toiletries" },
        { id: 5, description: "Elegant round mirror above a wooden vanity" },
    ],
    views: [
        { id: 1, description: "Private outdoor patio/terrace with views of the pool, garden, and distant mountains" },
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
