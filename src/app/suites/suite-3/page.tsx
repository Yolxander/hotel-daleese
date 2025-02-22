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
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/67322841779f6.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1762876354&Signature=mhPpLz8xVY7o1kR7kjmypvLScdCF0aA2oGQY1eLGl3Qkr68arHVBtZ9qUDAXndVSaf53IHqdvnJFZ8BITkZ71giidOltyC84ojOtPge9HD7WTD8iD6RWdgLI%2BMAVqKFVIXv7T%2FlouRT8W5d%2B6bdt5YnOOpaXfjfIv5rP17YhePJ7onUEbr05IncLROPLrAxB%2FPEHXVgoI2wrXFMUQwGBDP9xIayj9w%2BGY9qAoE891EhJ69O4PkZCAXzLjo1Mf%2FOvla6Ae55JkZ3s366ChNXYqN37I6cfvldJdmxMDZ7rB8xuHeRBLRpLzD%2FKncRAPwGX4Ait4KxiqM9ZluW5opRRRw%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673e4d014d65c.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763672193&Signature=NmgELSavmLZNz3JOkO4zbc2t2zAz74Cm9B3mcjbygBRV4lTIDbcnWpQwqiQZAbVj1qLt9Vxo6zzc%2B0hHxbDS04VOdvyC47gN%2BYlBVC33seNBBaVi3%2FfWSQmAeF2ImAUKEx21ge%2FyEv9SrLAZVD1I78m2%2BKbMzGlT%2BlT1613Ini7U9AOO827LPCtt8%2BrnfqST77w%2Brf45ciT%2BpnVY2Ke9ZwcKvHAC56RbZLW3eaQmATLXThtDuqJqTBrRYxCXtqjdAbUwZiA%2FF7bPFM5k%2F%2FCnDQAhPREuCyrbPvqeSZA5ZN7UIkbeKA3A71FE7wjSNFc3FODnEgvqYUDnLCUVfS1uRw%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673e4d0b846b7.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763672204&Signature=U99bRZw5VGYvnO2ocEzNQ%2B8O%2FN8PmSjSOSChP1U1GqAACYrvWuyMGBPm7ayxGnE2j%2BICkb7ndypdzl1r%2FPOkC4UhjLZawe8rZNx3i0PgD7eFHXIwieawOZ%2FltE2fEStPRD%2FcpNWiFXBqD2Yz6uxaqAlH79hy14zXoFhA%2Fn%2F%2FvXw%2F8kgXtIfYBwSaxOKYGftnXw3OMP6AlDINVCKLRrTN8IdWzDwL0o9wcVewE83TD6qgv95WijqvZc8BNuPh8IMAiqXBl%2B4AU4ZOxuBYmWAAqTMn4xFoP2qNtZeyFGrkqK951KITo%2B8RKXQ5s6cHV5TtdGNr8cV7Hab55pWOCdIAHw%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673e4d0c2e3b8.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763672204&Signature=m1YtG3hTL1A9LQa7efkZPLvVDsjMMpvwvJB9Kn9PjvsVNY%2BKEaqlnfVSvTfUkT0XgqErNDZzSZ93eS6gwtnlwApfuWF1U8irXi42sMeKkcOEFUXEGy8ZUFId85IEbJj6WwEoNpJHzcJv9uiqbbyfZIFqaBPlNUqeg%2BX%2FVzP5s7Vaqd8qFG%2Fvo35lzrEPaVsNY61RiWLy2UCN4E%2FERuDkUrjg55k8TX10dd1U%2BQiKvpe3nfs%2B11ed600%2BY8QgCigJtOQ9HfegfpouFO3oYgNSffCwYYgB0VdbE2l7A3H%2BhIxaHPm7wpeSK9fcdF6Ry5iX08nrZi0FXBNjktOY27SIYQ%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673e4d0c9e943.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763672205&Signature=W3VyqX4DtozLAff6uXB7Q17VCqmw%2Bb%2FidMYXn43b%2BYzslneLHZSse3FhgEd2BWq%2F8nZWey6gYKQlgwiJjZaVe8OPMLnJoCBoaQW6fzWrcjA%2FOyxOcDBMHPFygrMOktns9eyTpLyvbOXye1JM%2Bdk956khHphmk2kBHLNHnTOEXLbtzyAAGpXpiQ0gWFnH0D%2BYEIxYsO9xu%2B4f0Zw88SrjO7WrkTMaomv3qdRQX7N0KPqvb831qv0ViacMZeO6Z9pkDCU%2B1olD8dUDxbsPCJPrdbSBU1VFE%2BjalTV1bAK6H65LNyYUdg89PMlfQnN7wO%2BH58eFVRv8uCfeaYHOsktBEw%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673e4d1f31271.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763672223&Signature=SFaQowsATqE1FZ3Uhz%2BMrvRgOxSbKkf1BMrN%2FudrINY9YTTHHWt9IpQWMhNQuU3vx287tC9vn088YbHlN3Gx8x2pWTw3m7QMuVWvQt%2Bbh4fixrEO1qNa2N4Jjm1RduSXwcuPeo7HKfVAKCpTbCWsJnyAiWS4K8ijh50lYVYg1DAjp1z%2F0cdsX%2F%2FGVlTD%2F2ukUqG8u9xAj%2FAPH1Ud5BHpHAHVowKFtRFLSW37gE43cTaIX45ghHa%2BpS2hMvvu9DzoFlUBV6UGrDFIY%2BO4P06GdXykdy2itKGq%2BeR%2BAVGfYos3iL%2FvXfY46q7geUq6TGq5qsuS5iNAZPA2xcZDzXC%2Bcg%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673e4d1fc7c30.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763672224&Signature=dKNvgYERpoJEs11xyWpj7lyRhSztDLWLxUC94Gd3rGimdfJyDE2yYfydZ8qoHinGytEvGc5gpirtswpVuOfF4gz8BGkv2bCbch2fhTihvmBBTGqVmhYEfXnSGJ0oLMWdfYSEwUKh7Au0FYiQ%2BS7cHhJUG6ytzM8I5XpgNbO8lKmctpnSykoznWANBEDqwkx7rgd%2B9FOo%2Fa4PGG%2BvlAkqsrUdXHj1hlqx3WBlUL3lTGeC9zKSpB5KLyHIyu5a0BbPNJ2hkeubevnNgKgfDjG%2BtBobLpGN4jTH5ErBPZDc2iexcVak4lJbHtiAHDCmYA3oVWLFpfwW2ZbGYr2AgTYqgQ%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673e4d28e456e.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763672233&Signature=OBVD%2BHEbbwHPmWDK6pymOYPuHtp%2FdA0tbWE46w8CGrRmxSOhfcuj4aXdgDIA4V7H33orjXqHVjBT7kkbA3XvQMah0TXcdi6gI7BDJ4fys1CccUnJIxC7pvzUu3IfyBjcBigi9iQ%2Bq3QXEI6hWuuKBzThrTm0o%2FKGFsoBYLAn2T9hg6x3de2Qk4MoIekhmFyZ1x4uqWBNB6s%2BwXmE7I1SwuJ%2F75LTj5uTio6izvIyY5UH5CZqZVpFAth3mbg0L0Op64dFZP2uOaS5kkRlsShZyA9%2FotKi%2BOQujFweSbID6U4zYzJSuvDfLBse8LKD4SV8LkkUMjlhBE9a3LNRL62txg%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673e4d298e8b5.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763672234&Signature=CvqOthF9WUOIBTBQGMPGScQNYZHnCP6uh3goxQLN2%2FuSnkoeD8A6C0XeMNDDgvTPyAktFKFCPoKY2xq3k9jei7SvYbDLDqGrfvdlOcJQwFnRImpeq4nYh7AVou1Dhl25y02m9UBeC6%2FsDPvd8tKzkcZGCa4YHm7yOWgvew6kM3djpgBK6dGB34IxsI21Ewx7uCmTZvncwMy08S7ylqxEpgjnZXzaiP5SKGBimLvPJ0%2BotogPSuJ9GbuMNBXtbGOom1YigD2GpNBPLncS3DPYVy%2BxMv0qIhPCX1hNmhDUvOK7%2B6GeaK7edfwP2uOR5NaGlcXogVQlwQQbUuZGmKplRw%3D%3D"
];

// Map URLs to GalleryItem structure
const galleryItems: GalleryItem[] = imageUrls.map((url, index) => ({
    src: url,
    alt: `Image ${index + 1}`,
}))

const imageSrc = "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673e4d0c2e3b8.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763672204&Signature=m1YtG3hTL1A9LQa7efkZPLvVDsjMMpvwvJB9Kn9PjvsVNY%2BKEaqlnfVSvTfUkT0XgqErNDZzSZ93eS6gwtnlwApfuWF1U8irXi42sMeKkcOEFUXEGy8ZUFId85IEbJj6WwEoNpJHzcJv9uiqbbyfZIFqaBPlNUqeg%2BX%2FVzP5s7Vaqd8qFG%2Fvo35lzrEPaVsNY61RiWLy2UCN4E%2FERuDkUrjg55k8TX10dd1U%2BQiKvpe3nfs%2B11ed600%2BY8QgCigJtOQ9HfegfpouFO3oYgNSffCwYYgB0VdbE2l7A3H%2BhIxaHPm7wpeSK9fcdF6Ry5iX08nrZi0FXBNjktOY27SIYQ%3D%3D";

const header = { name: 'Suite 3', description: "Studio Suite with Pool, Garden & Mountain Views" };

const suiteInfo = {
    facilities: [
        { id: 1, description: "Second level suite with private entrance and spacious balcony" },
        { id: 2, description: "Queen bed with fresh linens" },
        { id: 3, description: "Full kitchen with 2-burner induction stovetop, coffee machine, mini fridge, microwave, toaster & electric kettle" },
        { id: 4, description: "Iron*" },
        { id: 5, description: "Smart TV with Netflix subscription included" },
        { id: 6, description: "Couch" },
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
            <ImageGallery galleryItems={galleryItems} />
            <SuiteNavigationComponent currentSuite={3} />
            <FooterComponent />
        </div>
    );
}
