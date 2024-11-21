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
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673e436317fc5.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763669732&Signature=LomMzgWe%2FQBlS5F8X8taYl4vU2tUVbrApV56H7rD6QYgsc7JhlGZRyLpoqufoISIMzUI08uOn5M1c4XMTqMcVWicI4JE2hTS8iJNqbjpK4hlWYtYXtWS1kaf%2BpftKZtJunDRC%2BudqpegmG7eA1RIqj%2FMuVh2ZVUh22RtQwm%2BGSCjHrAodlmHCkpev9cAJkJ4wQDN7shHU3pbW6gToLIHrHN%2BhxDbP%2FkUH6gflwCHGg9ntyqbeC87GFiHfn4jI0ku2ewOtUiGN9YbmmlYA3e529uEbhvxhMAUrybw7DQOlDqoyaFDpRTxwzV%2BGXfz4hj4JHtvFNtQmRG6va8Q8KO3oQ%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673e4364289a7.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763669732&Signature=gpU%2BLN0dPfnZm3IwEIPh4VGxwM%2FM3%2FcwB0QgH8oGDvv6gobwULT3ZkEo1gxkitzQcrNGn8f4tu%2F2tzEDTbHL8WCD4GfpITo84YS5uswbpak%2BK4z8QZa9m2kggefF0BPdWEXlSyyFQJIXdztpsd2I08i8OOI45hqNDdDVxyhGx6eo7bXjXNI3CGPmosy6nbzG6R1NMAEmtH%2ByJYp9%2BiyEw2ShgBvhVSP8eB7ehbZ2aygRndOXLuhMaJm1BjGz4VtJsUdaX0ECEWgc2Y7M12m42GSCh8LdJbud7GIiGjhNXQwIUCstuhpgyTS9cQprcWeVA9ckOKyDEylX0fychfK7mQ%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673e436d9a9b9.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763669742&Signature=b5p%2BarFb9F3ql2043acJIeAmanWaQsx9isFhOpraH9fPGR4egcXc2ic6YVf99bU%2FMW9T7p9oO%2FKVyIga3OJvLzG3FzfWexWehbtk58Y%2F1WNiKsmTRA0PLXVG22FivGFLwRrPKy2jUINIEUZ3xWR7VfCdhzSXX2WY%2BLhCHwKxUxKEplulpSEQJMj3VG7zKVnHBUs%2BVQu6KO%2BHBinVxlILZqU6Prw0YKktVdNPl0KZgqZ2T%2BtmXErTF4hUWfyLlFYpjUNlf7p9x0goQvfUKaW8tFcBX4aACfdpKqSFhChn7t2ZZFiWWMwBTuO7romkugvYUtBGAFrzBd8%2BVyw59bm%2FJw%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673e43777c6a7.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763669752&Signature=ADyxGoyOFWpCDg4cWc22Td18ExEnTqfQ0fd0ryjRJJakRRpPpUU4CFbJDwWAY3Zt8r1lSlxg4EwydrOdf8d8NRhvfuutUkNQSn9rfbV9KvmQRZaEbESmShKmDxoNso%2BUkFuosoCj8s4RJmzudPdss%2Bbpll8bzc8LzcB3WGzwW4y8K2yRABo2Kq6Q9ku9WnLaV1ZwPOa1okf%2Fy34bFfBgDrlxJv99bdbNGFcYgrXmF1qTLjcwF4pPfoHgrd%2FJUaZW8%2FIWnQ94hUOVBFsJDIBvFFFXZMgTezlVxoeuwiQmweJE7s4RXZxNxB899F89oSyAg6FZhgN3G7t1uAoJhB6O8w%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673e43780549b.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763669752&Signature=AzxbMu8NE9JMHARxRO8zTV7yzlPpzoPuA0GS9WA%2FECWRchMcb6JqElYJHm%2BwfVxGNISh9pufjaj%2Fe1jMveUDpkCIAyX3urppljEuRbatyJzNNW9BZPofzCYIAk5%2F8zx%2BaueoL3BGII19N5uqGXYCUNxzUNeHdIPEzX%2B29JmY1j3wwaYybPuf%2F1FehSB5dd2%2BznZkiwTQUcVlXTc5cLXvY4QVXDSinWwggLyC%2FKlxRxTQWMJMGW5%2BV5YrXvbLRtpdcjbKPj4oJbTl2n7fFEFLKVdiqdfJE9rLeYnYWYQCNtzB6YAhJNRZNz0yGK2bXNU5VI9YgN8iA%2BlmpMR%2BLHweFg%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673e4378475fc.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763669752&Signature=gm28nuFDrCM%2BizLAH7kgXb0NsQ8BeJXiuNqcxGoF%2Fwt%2FxJUB515DNGGXt6eBuuIcOrBAE6Dm%2FFn62gfqBR0jR2y9zHahN9eP22H85ztZVjYVa%2B0Bg2vtmZlAe52IKVQcrX%2BH%2B6t6MbKZosnINe4rsaJ%2BUZhMlrt%2B5%2B0GzrtrEzEltjQeQBYJ8CelkHcyC0LUJ3E9QQQ8ezsQtlY8YCqLxYtsYi%2F9iXkS9E098o9%2Bd4ziXq8ICMPPJEOh4a87RK7OSJksIpUSygC%2FjTxUQY2nuSrQish1MAef%2F2fHr3O9LKuGKoGjbzQkuamGmKKChq%2FdM8iXb7lc%2BAAMxhj2Ec7ivw%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673e43788473e.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763669752&Signature=WDZPNXj7POCaXnumYy7aVUZxUF7iBRBhaghKcK10B10W4MEhPVxOQlEkJy7XmOWQMeFYuntfNautkSpSxRMYcLcMnUvZuf0F85HP1JPdILipmqqKeOySP4Yfb4uftNsqUS1kVyw%2BGAExpyBL5VyoxIW1i5RJ4TFWfpkkTdrF5x3xF3mNB7vX8hz41KFAjaJhERpdIJVSmo%2B62jtcxKDDNBXl4c7Vklx1bJ6fDiqzpVHkw%2FC4WV8ruXRqqOJO%2FM1luWIXxBb0zd6qJretcOzcPtvlYAm6zGTd5SZYZuIjD8yHV8oZAGiW5WqAR95tfcOEeELJVFlBeC%2BnGhjnhFVPaA%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673e4378c89e2.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763669753&Signature=TRMJ67Q4eVBlPyVJPRtFMZ7ld5anSraXGYMO0D4%2BeVA7hW3UDzeewAA9Ee8ovJPlu6WEiELwYWU1%2BMvdR5ooswQ53SDFnPixKUniizp%2BTCZDI5HH7VcTdUE1WqlgNRt0lU4dMt3RaGh4TPA6hkfZ8uPAjVrLv%2FH51jBU93MPaqLcYpAogulUAReVObysJ5UcW0y7ZVYem86XsMSWDYcVKUH0agoYSWhm0VbtUWVXa6Vj8w0hsBW5J1Nz%2BOahYyYPgVA%2BEKqRQkNfoZB5M5u5819JNloj69CUhBsCFvWr3EGNuis4Ygo0Vqb3PCHJ6m7oJvkQLK645X9TVhcJiOjUSg%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673e443c44370.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763669949&Signature=ZIaYN5Ud1fkoNezO8hFFJf%2FGdVEVChac%2FRT9kiQAW9OVX2tb66gmm5A1m8%2Fjzrd%2BtEyoKWY%2BR6P%2FCC3hBLRst3lGjiBUhUsepawqSONADtESYXU5YbqX2ZsvgWZjqcNl0vuFfPPTmDT0RMxxUpKq5nR9RyT3mv4lG16UuOblWTqFs%2Bf7jIvB0AkDmVpAGeW%2BLNMzanMkhP4EBBqy86fCEt8OlOsA7I6yhso2ucrAJFr8z9gRf956mRT5NAkBpzI5yXClV%2BGY3HsjfN47W9TlkwbxRHSXghRR5vgDoCqw6O0ZyZmn6%2FNytXKKG%2Bj7uwUfBFhtLXNWbR8eQrHnbsZ0yA%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673e443d25fbc.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763669949&Signature=ExlrPdWFLVLCuD1acB61JEpxuL7U6OXVcD%2FOMa3LggqXTw5v64QQgV6VT70prhp8Sr4PfA06DfE%2F9HN5eAqf4w5vdgJ4O43BEZ70bA3McNkJfqIp%2FXh1taNw0K5g0SD%2FzLYXsjqnMFcBZ1BeDgz%2BY9hJrztBa%2BdyuuF1yXoCQ5Tl7YZX4QNcdmD23%2F85oZiedwu6LCuZ3datZ2JPpJ0UbTJ4hG60DeVQRVbae1CgyQzxja03gmxy%2FYK0l%2FcdSzs%2F7gZF4zZweV9wpbei%2F3AaLYlt44YyTd98CiB87NxM6nviXwHEhrAV5R3VqB0fuYxnl%2BVakSX2aBptG9VjUg235w%3D%3D"
];
// Map URLs to GalleryItem structure
const galleryItems: GalleryItem[] = imageUrls.map((url, index) => ({
    src: url,
    alt: `Image ${index + 1}`,
}))

const imageSrc = "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%202/672301ae6af1c.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761883438&Signature=LFOa7ciZ%2F7OmNMkmq%2FE%2FCufWn%2FyFKG%2F75BGatA1Mn1vjvTeH2PkYzktMnYlhkD56Ezyoy6x03THviphQK29LxzwkEMnad73BRP4Yjf%2BkUz%2FuLQDQtS9c3GPQjyhlLYwmkKiVvLRMwEGTkgvJyPPtIXWQnjGDdV3t4Vf5Y3c0P%2BeSySyuYZiwcl61TUVHffNfEKsz6DKjZpoGo01DEsZpnMLxj29flhdwI7SnKTeJUscoP0zdVx9Scs0OHNdtuOVaQ8DAjpMAcOoqgsjxvX2bu9DxoK7hBO2mtBQGRRCfCa4P%2BlD9oACmH%2FQ5dLf6CB1cv%2B8ZeuP55vPg896Ejswg8w%3D%3D";

const header = { name: 'Suite 2', description: "Studio Suite with Garden View" };

const suiteInfo = {
    facilities: [
        { id: 1, description: "Entire detached ground floor unit with private entrance & garden terrace" },
        { id: 2, description: "Queen bed with fresh linens" },
        { id: 3, description: "Full kitchenette with coffee machine, mini fridge, microwave, toaster & electric kettle" },
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
        { id: 14, description: "Private garden & outdoor dining area" },
        { id: 15, description: "Glass & screen windows and doors" },
        { id: 16, description: "Hammock" },
    ],
    bathroomAmenities: [
        { id: 1, description: "Toilet & toilet paper" },
        { id: 2, description: "Shower with complimentary shampoo, conditioner & body wash" },
        { id: 3, description: "Hairdryer*" },
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
            <ImageGallery galleryItems={galleryItems} />
            <SuiteNavigationComponent currentSuite={2} />
            <FooterComponent />
        </div>
    );
}
