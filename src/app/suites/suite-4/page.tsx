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
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673eab70502b5.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=oHCAEVbZYW%2BwZjmNoubw86gK%2FpSrrgG4%2BOwaX9NvE5uTzzNNNSRRoqLzTmkVA5mW1xYOOqhCWOvp3W0%2F4ZMVTwmqzGBAIVXzhkAKDWXet9ISr6FzRw03e8VB8slAzLYlb4n45kyNMVhHbbF2pgRG%2FoEAfENTYDxXio2X7HE8CehiN7uhwpKXz9JwhHa658sVC2VmFYAORUzkxlVj1Eh4L7GUezrxrIuX2T2JclKpD%2FHEs1ZIVTmk0n39NFhoac62moB0MP18d%2F1oKsc5Ex5ZwJIjWyoKU6ufn%2B7NUZiPHYNAQudkVJXY4D8EPr%2BV9Vccop8lXtcInpUYWCUxOupAJA%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673eab7102af3.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=iNHFm3LwnvK1BkJwFWxQnnmGvuH95gYHoFQbqDzwsqB%2BbvznIB2nFwBZAGuPl7vruI2%2BDS7LmZcQlGEceG%2BR1%2Fw%2Fv0Gx8fi2iJ9yuktm8YfOqIh7PlIHPlZ4gyrsH6Uic96vDeDpc4nsp9Q5ikqO%2FL%2BnuMNUYm0FWsBI6jAeKxFtZzyZki8tDvdywDWiJLHZ05sl8YWuA8CfhjFTCUSgl9yOa7FGwx182yXIuYKsS7xRHJCcrXE6BpbC4MN%2FEguh9H%2FxwWP4B6deCFiSWcin5a9ci8kjggqgf8tZuH7xX3lRES7WI3KPVsd2cmPgxMFhUJEciQfvPWnokaHH9ked1w%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673eab71708ff.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=HDSKiiqVV2ZKK1EtMAjjc%2BArU9QYXqYGNWRtIXE5tTGMIEWZxuetfyS35mW8e%2FV8jWnxkzfO59DnsLTC3YcYbIcWWqIdvGXdQNY%2FFNrqceZsDtvUpU026u7mASLL%2Bt12HD7lraD8SGKDStS0F9mYBlc16bJGgwyMAGjfftz2fZutbNionkng1S77nBgGFIX%2BICvrMp%2BIa8wulPsO1ATrpBKbeonMXO75Ev63si7mjN1P3oM7oljU2BWHsfVIxXdzgqbnKVNC1XNEfOqTodlhdeDURHR%2BDoPcFysSbLyW2So%2FS7DEtsFJcMGxnC4DKQAPnbHvu9LHQ2kEKNE9u9WmKg%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673eab71dbb9c.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=lbP%2FkVVtn6i3fYWjPhvlLpv%2BDmDpTLAB3V%2FnY6bIDl6jGUS14rsx1m0rn1ULT0UVVATnffShDsT8e4tVr3Oe6NVAYacLSRb2whJZM4Y5Vp71DbBiBGtPhLVZbJDrE7em4KJvRNOK6xdoOpotUJ5J9k8WSlMYzCu%2F1bNph9v2hC24juM28sO%2BZmna1j9fD%2FGu7arNcbZR4ybGTu7G7Vv5n70j5A3do2QsyETqbqKCgxxSf0buRRvxBIhEiYKpTvusCljdreqL3lwsdfoPlqsj9gRUMbjifgJ%2B6AHVP7s0%2FqHB20sAu9UGeR6XtntmSutTncAs7M6PoH0zHx%2FWxOJtcQ%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673eab724853b.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=2mLet%2FJrB6hT0qoFBElOojh9ubsgDOMaYjczfiqORyvG4SlEfiMHEC12QOeeub51WmlqhDtyuTBRHA34sYOlzu759KNzeTTVn0TpssqrUIRiU%2FHwtAcJbQhIuMaxLf3hq1BO3aYuCSZsqXIyw1kQWT55ktM7vm%2FP%2FvUQv3%2FGA6imIbaod0T0uF7vKNAusP%2BEF7dqj8VCIDKfGxh5vjrdVxgFgsfPt34nCSuEk4631Y4xm7k%2BdV0l7y7%2BPIfh43rV5PunbvZ7bwFVovD4RBnsG7oZNvWRcLrDjOgrkBjcZuwv443xiiiDNJsBQRQh6O5dILy48w91CbfoNd4YQXULjg%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673eab72b0240.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=lQP9QEvSAaX8Va2YcjDBIkMb4xR1%2BLSgJWXqx1SX9SvnN9jQk4L6eLyuC%2BIbRdbYhn7AiUhCVBmQBaDb5L0h2%2F5LxgDjfXYqMdugLgvtHwv2S5Jc06UO8fvZd5BrW3OCn%2BeUxV%2FbSFcMrSYEGH%2F11t40q7uUh%2F7pityoH7oMprOl566qpk1xhMuIwmw%2Bd0MKyP7c8m3TT%2FWhkTTK8EIq4OEzWx3Y4khZ%2FcS8GUgn8kz9agjyaOydKZFXGoRsM9BwKCc7622YAOjdScWkbMGokBFsiPRA2XT1yf1t6z1ey023JLjqlnKtn5TSuk%2BGntw89T3oRaXT7q7ehpyYbqY3mg%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673eab731dbce.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=mRSyx55KN7A1%2F%2BrXjKGpuHcl%2FldVreK2T5iGkn9Wb8fuqPf6oMn2Ib8D22zxJmkgIbuek8lPUW%2BuruqyRTDajnazJXrCe12h%2FS%2BmIvgUpfFCyzvOMNk%2BnHILFDoUSr03yeRgqSP3yahcHgcDA0D4CTvGsICWO%2F0jP2UhUM46eGxMmuQV%2ByqxWqktZLxSw%2FTVWbWehcXVeiyxFVRqw8aDiQlss4uo%2BOhDuCbUmWX574D4PWoQD32YPsDB1yYaUD1QmhZkdth%2BzLl3BCI%2BxNyYxI7dktgkt5nj4hYw%2F37Hw1YrPsaqGghsDGKa44lwfMJL%2BaMfTBTvDuvkPL8ZcgkZxw%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673eab88003bd.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=uiFFNUt9aLSzWjFkFYJxeeNFYgEUFFnBzAhjXWVePQRFq3n5OUCBFWJjy25whev%2FOL5Y%2BQLWsVE8OfuhVGDCMX%2F6psJScHLUB4PmX8MVzj1cy1AbFF4cKfp3WdXTqSwkGBF%2F1WZFiwEft4AMcKhDdj4iwGV3aMA%2FIawoUb8ZMNca0qoI2aGaKGiv7V0t2dPmijGFWGMoCKxCZEGRT4DtKUbillqA33uEPw%2B3mf%2FGjAb08E4gvMTulY4gh1e6up3xCSba%2BpEzOGjI48op1vbGvesfRUrruTWjQws2773FPIB2bNigT%2FPTzaL0MF1nmbHdtbrKlC1pSfI2zglaJ41B9w%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673eab88b32aa.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=jclxYiMs6JH4IVpdiwfoAX3hmTLDFD9t8a%2B43CkAwAsD1nYRiduDlE4cB9s555b61Ny%2BkTQo%2FHDZfKaKtYT7gr8V9sGQRsSHWsaqf1%2FCakA1bviTFYhkwRL4QsXim1MeUsfBEZvk%2B8F7ugo3dZ7uxxR7YuExNrkALJBvQSZd02lBadCD09nXZto9FNlof9B1fhGHpbyGlVKeN7RkJVFmpzb3Pt7e4o3WCaluJwHx1Dt%2B5n6m08e4qJfGgzg%2Bs3Iq45pN%2BUOddwK1pNEDwwr%2F%2BZP2j4cLD7kfkQlh6E17oZ7Lfq6bVYAIRkcvzFeXbnMqadrAX4CqIZ9S57lI0y2hzA%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673eab89394be.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=pNlJM381D16O1yFzWY9I4soM%2FyWLSeW3d%2BmIEmCN%2B0K737NlgV%2F%2B3Ffx7EYSkwS08dhlne%2BP9p5%2BV74uNFwNad8g7pw8xScW%2FhGIWWjaLFzirtOmRZAV3oX82kUc5dBUWty9hcY6tcM34SQOQ7wCXuw7mJUxrtNAeKELGypWODbIchRJtNZjwJfjSKP0Q%2BRNLEKokIGrP7MZBKN4TbkhDKfQwFgReA06rQ%2FKdWapXV2s%2B6hhR217SIRoo%2FkVMUXiffYY8zydmTjBsklU%2BB7Q7kCHxhAJPt1JG23ffmJMSjD2ktJRLzifKuJG%2FgheoW83VexP%2FZnVbBM1eIzYmFG2fA%3D%3D"
];

// Map URLs to GalleryItem structure
const galleryItems: GalleryItem[] = imageUrls.map((url, index) => ({
    src: url,
    alt: `Image ${index + 1}`,
}))

const imageSrc = "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673eab71dbb9c.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=lbP%2FkVVtn6i3fYWjPhvlLpv%2BDmDpTLAB3V%2FnY6bIDl6jGUS14rsx1m0rn1ULT0UVVATnffShDsT8e4tVr3Oe6NVAYacLSRb2whJZM4Y5Vp71DbBiBGtPhLVZbJDrE7em4KJvRNOK6xdoOpotUJ5J9k8WSlMYzCu%2F1bNph9v2hC24juM28sO%2BZmna1j9fD%2FGu7arNcbZR4ybGTu7G7Vv5n70j5A3do2QsyETqbqKCgxxSf0buRRvxBIhEiYKpTvusCljdreqL3lwsdfoPlqsj9gRUMbjifgJ%2B6AHVP7s0%2FqHB20sAu9UGeR6XtntmSutTncAs7M6PoH0zHx%2FWxOJtcQ%3D%3D"
;

const header = {
    name: 'Suite 4',
    description: "Elegant Studio Suite with Terrazzo Shower, Modern Wooden Accents, and Natural Lighting"
};

const suiteInfo = {
    facilities: [
        { id: 1, description: "Second level suite with private entrance and spacious balcony" },
        { id: 2, description: "Queen bed with fresh linens and decorative pillows" },
        { id: 5, description: "Smart TV with Netflix subscription included" },
        { id: 6, description: "Sofa bed accompanied by black accent pillows" },
        { id: 7, description: "Drying rack for clothing" },
        { id: 8, description: "Bath towels, pool towels, bed linens" },
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
