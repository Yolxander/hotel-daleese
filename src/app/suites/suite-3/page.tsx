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
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/67322841779f6.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=CnhBLyfDhpmSF2pbAxIqLq8wc17KqAxoumZN4Po3QTZjwr9rcFx2Qpgc2PKSv4Ti2NiQCO6MFCni%2Bz2jTS6al%2F7nRcY83WF%2FxEOLNkIb2py6CfblBWNWjUCIpt%2FNoG68%2BtT8un9M%2FuBnCTSb9sYCr13RFXo3Y0dXDhpqzW7JEDE6PDQoc1v%2FNZWLP3AjkUZ59Bj3U2ObZ2E0F9DTdFky74a2BXyUnxJYShoBe22xGDK0yTL8wuDtNOgFu%2FPpyEsm2lGhVRgOerlaE%2BIyVFPHCIEsGX04Is3%2BNqqNvCzMeCP3eN6YG8u1n95Ati0jWg5vxQL9J1YZMj0EaPMvpULWtA%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673e4d014d65c.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=znmP7f%2BdHBPUm%2F2n5JmVDAjJxjXq3RikE6ieLDGL2OUcc%2FezT9CKDTb0xXT5rRXLHM8ndXBzc77gWcxbfdYChpzobsAixB5N11Z1cl7qpy7ZZGE7LsOQDtDHv%2BydvfSJaI%2BydKdsiXc4W9orEH7y0jm4WOwjVfPxnk8Y9kl2Kxe00S2oRk0GBYRjqe3%2Fm%2FOrZyy55nGb3rzeoXuWrXSz1JG2nZHBpi0bsva%2FNbOhv%2Bdtt7fSUpxxFIXhzjnfheEw6Pyb2z54rbV%2BVkc2c%2BB3ddk%2BtWzLz4KQjBjefiENkc%2FmFSlQjDwudB3Q7CaNX8mE7vDnFdOQjICDibyGtxKRwQ%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673e4d0b846b7.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=o0UPCQGt%2BrRuajTP4SizqhvkddmZj66FcPj05dnNuCm7W4PT1kQ7Z%2Bm8DTqD0QWyG9657ah%2FjwJK5OkSkCfpKggikZ4FC9aXNTIQw9tZ7mqervNGlPf2J7USHHzcB9tE1qjPmqeOWaYfZWNgcvQsPN61EteMet9aVobkXtwG3yBm4HeFbA%2FpFLSLR%2FsHJJJYU%2B%2FayHM6buM7CMxP%2FLxibiRlIihK3ePgeYGflciX4f0ccr8xcA6JEcS0xPs9rJ%2B52nwqIfqi91g%2B2x7xpxwoifQ%2Bxm8Ayk9y2%2FEVetpCQ2I8Ex2VqCVlNeW33k7ig%2FQDaWIMlq9AjICa248S5aYryg%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673e4d0c2e3b8.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=YbIbtugDw4BXjelgsOlUOQQrhjX1NqO58mP0l0Au85Bjk1DG5hvFu0sCn36JnPmmgheC22wNC02ryM5WFfKBoyIteoZA%2BMAo5i0oaUnY1fYwheodUG2Q0g04%2By0FTP4hFAIbOcNx5ASczTm%2B6Sa2AAA%2BtsG%2Fs3MGFXI6dZ7OswRLU7xnp7hcdxWjfWBhcpRKhL9%2FfnfRd20GIEX6mcpMHJ9%2FLzNgQnmmp4dTL03NrHREEnWANSO%2FH47cOIeourvZ16KCWapO0s4Uyp7mKxau00FGswJJc4ZVpPOSh%2Fuw8dUNcCGa0uAKkpC%2BuNWJuP2WlS8tQchciwlu3ZG1vXeCSw%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673e4d0c9e943.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=yxIjnXy6eg0nwBv1k%2BE6RGM9GigVmGCQw8yuJGV9i1nOQrY8dI8TT0zljjjfZHobr5tvYCef%2B2GNJpiGOIr9Ab3qxDOU%2Fb073q2anBBwgGMePHedL2UGQKgQjtEaQnF0S%2BYOKipsD7uvqfBXZnrQ%2FYWrIKSBmHGFZzb2OcTxMjePwbnhBB2GeDt1sYR7q%2Fhh%2BtP3jmE11VurgwU%2BBz660CUrcBcybV5BRe5jkC%2FmhzrtCFcY%2FLj5BF54AcDeYJoterLHe3RiVv97Tbf%2Bu7SOj72VhIFheB7YJAsTnQvXzXbLyWB1fEbIV9sr3I8P2Mkm7NcVHuMw2SKf2Tw%2BSJgQVw%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673e4d1f31271.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=UkabXF4C6v%2BFdTsHbADvMu9UgLF1nH2kKmCTeycXY0ojuOX0z59NOIvCqgqwbFrdfWQcK8DKPrxgQ5I5Ke26XoC61ekwDjuz2PumjjYgKEB34QJGyGnh%2Bvo6uktwXlvLFayd93%2FvIC71dY%2FcwZ799Fd17Mz0Mowp1fGnsH%2BBq%2BsKDSMNN1vlWdAAVG578kMZib22biYfuQEWI1RW07QpXTD6DCjH5Mx0Bnq6jNpSKSqd8eDNGu701MLGw0OVdEcVbM9BIlmyYtxU1ajLPAjB%2FRd%2FWWZQeH19slG5kYQRJiDZvtKJbmEROk5i2iiGQOSf3%2FrLoBj7oNsRUYbg8ghr8g%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673e4d1fc7c30.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=crQ%2FuoAEoE7MspvgmODlmaIsDlHbUWFlW8VGywsf2iGxX37b18%2BSeeeYH9DRjyhkC12OMFA2O%2B4LZFo3BrEnWDZ85EMWVTwffgcs9611vvZtbQbU2zaPmwzpBKdlY%2FuXWt5N7uvGYp4ZrBv9xJBudsSwJyJtDrTAos4K7zu%2BA6z5ye238%2ButtGdNVSBvFsEP4UtrAsTVI85uDLXWwEIEE4Scb626Wxk3AUC99C72D915SP8PSela6LHSyVC1VANgzmwNiwWRQElmsv5nvfCe5dv2NDo8jl1TI9vgjKaEo5S1aNq3XHph3%2FF5C5dFh%2BDoSptVEgeOzDl%2FWq5y5yjg1A%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673e4d28e456e.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=E%2Ft6ol9iKMNSJL1k6sDsKrxwb2LDVxM7StCGWw3AviSa%2BjFWIxnaN3oRD9a2RG5IPHoE%2FlArqLWlivCHbRnneT0bZrIxM%2FtGoIImoY9C5qhAmQ1nZnwR18B9OUYAA3l6uf65mIhj%2B01n%2BTeW5I8p6JbBqoKsOPUyx1Qn4oN3PFYELw0KJZvskYWMNbubmI1ZBWVz%2FU24JYUb2I%2BfQINlrAsyoloJXxkAj67nf7El7y5kVPdJXv1oiIiB6AlgPg29cgCvBG3REq0UKRa%2Bw47gh%2Fi%2FHlkD%2BGmMTTQQf9Bp8zELniGvT61jwRH5UNIPi1snombLIyUd%2BZwsRmbakLqdLg%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673e4d298e8b5.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=KWfRhXd8Jayx7RlGx1YFU8yLU23hzLUQlAlQVaVQ%2FMn%2BKn2fZwVQjFM%2BEasaBY%2BGt8ArbJLCc7%2BfxvC%2BkmCgJm97GsKAuTSpm6JmF24hJMZz9gLoISWWJSJRmdN4JwqZYrelA%2BUD3cOl%2FzUPRTYI0qm5lNRT4VswK7laMW4XM9S81qmgBbW4p9wFSJL6VqFJbT3Yb4IIjalzTKGj4R67Mviv3KT3atvtFwNDF7pk7SCfTLRW02apd3kik4OafRqRrn2KVJdtlakucsUs2jvGnOEM5QBRmpjFVgJBPt4n%2Fy5MhUSRmSO7SLhOT7MJDpV3N2PEX2Ma8%2Fk84%2BGcAFIqNQ%3D%3D"
];

// Map URLs to GalleryItem structure
const galleryItems: GalleryItem[] = imageUrls.map((url, index) => ({
    src: url,
    alt: `Image ${index + 1}`,
}))

const imageSrc = "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673e4d0c2e3b8.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=YbIbtugDw4BXjelgsOlUOQQrhjX1NqO58mP0l0Au85Bjk1DG5hvFu0sCn36JnPmmgheC22wNC02ryM5WFfKBoyIteoZA%2BMAo5i0oaUnY1fYwheodUG2Q0g04%2By0FTP4hFAIbOcNx5ASczTm%2B6Sa2AAA%2BtsG%2Fs3MGFXI6dZ7OswRLU7xnp7hcdxWjfWBhcpRKhL9%2FfnfRd20GIEX6mcpMHJ9%2FLzNgQnmmp4dTL03NrHREEnWANSO%2FH47cOIeourvZ16KCWapO0s4Uyp7mKxau00FGswJJc4ZVpPOSh%2Fuw8dUNcCGa0uAKkpC%2BuNWJuP2WlS8tQchciwlu3ZG1vXeCSw%3D%3D";

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
