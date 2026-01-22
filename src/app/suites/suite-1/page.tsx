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

// Array of image URLs
const imageUrls = [
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673de7f44f33a.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=Q3NdxHjdLsmvcqL893JAIvr1gTYXe6qolHmIx1SDt9%2FN3cNMU1ngr4Aw5nKxX%2BEOotmQU6ZqZFTA3DXp4rYpY1n%2B7%2B4Z%2BPaBE8x%2FVI12jLr3KG%2BmECKOaauGpRmvvd2Y5X7z0gAVBkxgvYnmXoBMrsioAU2xeXyAfO449BPJDdwgqJwYgNLbCI36J3SLoA5SplrdG2bSxfZ1EjRMmkK%2FxN5VCrzIHFLj2ekk2FOAXDGvkaSlNPC5HDTe29xeXH3mpvztCfaYoARLx4cYMhEeJOXGdFHVl1yRBO2CoeRuf3pf3anTkSyUiHEZDKOH05IA56Mzp%2ByCX7nLYOQvUkHafw%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673de7f509709.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=wH1IHcFO02ZuHcOsq6LQDTRpmiB1v07XSQgJFXO9RJqfo0ZXbJTvpi4zO%2B678QqBNP7U0HZG3htOyvF%2F1l3W8EREDehVBc7ULuouGDdFO%2BDkyK5AyCPtWYyRfhXCCbJWp1C5nJznq3hmVxkbfKVJyPQZziSHVUeqieu%2Fc51sPbBlwFGHxRoJzjDU95QfXYkGdAy8qkNJGPOm2iKqMKZYuS9KDgVVGeYB72s0YJIfAOSXlReSrSy8%2Bw2JLQFPZWN0kqzS9b2WO7DayjdXJN5QIzZxVmos1i2dUX%2Bob2%2FPZ2%2BM24jrIL9hOBjPfufIVbLngYD2Vf7Wt0hZKvfC8E%2B3ZQ%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673de7f57a89b.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=LHOVO1DhDwsZ5YPT0YDY3ghEWuvAGSv0WMNx9g4LD7iUU6t%2FG7aj990xnC%2FYHhf%2F7MHNfFkmCWqfcDHYGM0jABHXtVj66h6PJ1UOKto4PdQcSyMnYkFqB4UdlIWExrSNPGPvLk%2FD56zNUwETEePbKeLSipZviuwQnIuG8lXaei8istLdQ%2BHT8NxjOaAsk%2FHYrfSLx3imjCHcwWFWhry%2FMVK%2BzLLMon40CT%2BIul64kW2d1pxRbSaC30vCM2mvcS0gWJA%2F7btm4AbpDhPv0aMMThvebzMkGhvH4QVa0vorINuTXAwc0fn9DG9vSgshNtj0WeyYJIsoI%2BZL%2BTa%2BR2wPxw%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673de7f5c042d.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=GqPbCKaaLTVvfL3q4TIkzf6yEYAUH2SnNkQyIMtk2HIcsCLYgfQIDyrNvdggfAEUBKq%2BNxP2%2F5f%2F4BqDX1XRXxbCo8PrL7gqIrNJPcW8umaMR0Hm92KWSZ8%2FMQVtFOqzgejNcbEh%2BJyfKp8VMaIDaqapPYrt8r1M60IQbGfE4fymzq68GkL0a3mXcT%2BHLh30Vcx8gWmRRH2jl3ip4JMy0n3WDwOirOSc%2FPYFPkOtS4rnJwRpZgOK2Iaa5s%2BADwXHlhKdjoxouqKMGU6R%2BqFbsKK3bnrM50cbcFffHKUvyheil1UrucSU1QBXk0mQmlUz7lVRo3jOPCS6iJ08iuBwCg%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673de7f623bf6.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=lk55qCv%2Bh6vBAcWKpxB2iTumbcsoo8UND9%2FAk%2FpXXNeYBN15w2t%2BNmPqAKC0BBC7w8nkYqdYtSvhvJuRixV5eTLOuoNj8Yhr4krSz6UxbyR4KxLz2B04a5Y7tFE%2BHC1mwObM5W8Yk19XDEJO%2FUdlJ0snWObh8YK2QQQuPYksfdI2WUHNquecyGAs97z64y6WlyzGpbfBqZEsQmk%2Bw9k88viy22ZTxCgtk3Mo852lip9%2FX9qQ8pEI542ng4reVBevhIRIJMe8huPu4e%2Fznj8ThEc3l%2FOPl26HeqPPqcqh56jA593I7sWYtvszjDYPNnxU3eAMBOQ66gv5NPAISAnp6A%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673de7f6851e5.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=FOx3QQB72JvDvOhAPlNZS0FB9kld%2BB3%2FEPEjJX8H%2BvC3a9P6h5whKzEN7B2pRSix8yodqMJZBa%2FmppMOBSmah7Ng6bWH1B6otvuFf4yFSWOEy0Ku%2ByjmuypCY%2Fp%2BtHIybtWN6JBYjvz%2Bnc%2BniaQC5nTvPsq3fFJJjmWx7qsQLdXUIJ5V5Z1vESou0rNZv1WjuGZhjpYl4ayPgFISYZtJ%2BH7CO5%2FEWbWivv01VQloypeZ9QSwoE0xmHYmJICJ0e0EQLEWCk981SQs%2FuPd7Tg%2FGDO2syG6rGCYd9eCVsdj6sIEPHDn%2F%2Bi3B3svwccll%2BoSmBV17I8dAOgrLeC3JVJRTA%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673de7f6eabf1.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=zAzmLf7dU26vF%2FgHTmXIC%2FsjazvtMCzBii86w19a5p%2Fhg60x0kWjpo0lkfHnAOZxKN%2BMPsP3ttvOb6Vvoru%2Foaaa1n8GiNMt0xQB8ICA4MSn1Tq%2BPEeaP5721Pj34BvuMhov6kWp6corL1xNJLCkJw0zYoKhPrCE%2ByqvDsosxFBauZtMN7d5Yl9YudLQfSwJq6z%2BgzVPrHC29kdrF4hdE9yPOcqKCTyBHN6cOgUSUkvFJ2%2BaPamquxovNmJliv93EXjIDU3wV5nFI8csGTF3xq29ciU4Bf7M7tQwBJfZbyQUqP2g%2BeUvrcjk1y0GegEvJMBGj%2FszK3cwF2qvIC7AiQ%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673de7f757eec.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=xmIq7hcYG10JPoGk1jeSnVzw7AoWbyNDxJZe1TYW0%2FVWyCwGag73BagvNVJy0ven6OxqP3V1S80k4oGCKavMTH9VYhr6eLQxNhB%2FsPHKbg71EhvcD5Zt1BfJUj1%2BEcJKbr%2FrwU1uu0i%2BDJzaaN0BQnevMPpKzglHJc%2FAThh5FW6cU61FBdUcn%2F4iorfRxzhQZRgqm0WaYxUfrWUDqmaGGBpUNh%2FnwbAWJenFy80ckTdk5SvbLTK7EBAODhRF14qY6oa4djGNCNVTtQPBAoS4ipGk4VBjk6xaLPLOQGbyTxUJOjvi0gyBBDK03HkY5S5YrH2H1fIhFYsfal9LkbueTg%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673de7f7b1473.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=rsQa5%2FVwiS%2F0pJgltt6mahGVsP5Mk7ZYrn0sK5DGFhMAxNZ5NvHvyS4LliTWTx4pF%2BWkX9QFFNMqKbTJ8Y%2BMV5tucQp0%2FA1Jzhr%2F%2FMSBZkRhs8S6x891M%2F5d3y7r5U2DVS5bapcO3r72FN6uIuY1M1uVBDhAJUeWbXoJcasOb%2FrpaAerlmjSZb3aXcorrjBS%2BsEU4BQZzpz0PvDuqMg07vOYO50eYAXbjY6qzSz%2ByRk4%2FXYdg0phLJjY8iGeyRyB2xQHPL9DgNHoUcPB8as6XaAAB3lMYsAe725VEGKohrfD9lKIdlOd%2BX%2Faayc%2Fo8DOMleNCk%2FhixQQYUzHFEeA5Q%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673de7f809c17.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=eE%2F6Eccn%2FLk85Rvh9wgO%2FvWj5f1BL0S%2BsXpgNrbFNTNHXT8T6T0n8Hktk35J2WZEAzDabapAv4J6nUTNv2zwvJYiJGgqlMkP3Naj6AlfgZsCz1Qp3w%2FUmpTrlrGdV2gRZt7YRrspc59KC0OWvWVBA1EgpT5ro6p6nRObL3IGfBqrFwpg0EwpWcIAhr1EJ2a4o9F1fqXtcjOUr0Ij1oGYqhN%2BBvIsemxdLBJx74OgaWZGekc3CgEHq3NrPJ0AQAUvzxaZmniOiwKb199D7ZBYH1WrFz1vcGVtNMV7Nq9%2FXR5nPC9AQuKT8DzEo57NLy0jkV1pN%2BpBwPtWqMzZN%2BGFAw%3D%3D"
];

// Map URLs to GalleryItem structure
const galleryItems: GalleryItem[] = imageUrls.map((url, index) => ({
    src: url,
    alt: `Image ${index + 1}`,
}))


const imageSrc = "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673de7f757eec.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=xmIq7hcYG10JPoGk1jeSnVzw7AoWbyNDxJZe1TYW0%2FVWyCwGag73BagvNVJy0ven6OxqP3V1S80k4oGCKavMTH9VYhr6eLQxNhB%2FsPHKbg71EhvcD5Zt1BfJUj1%2BEcJKbr%2FrwU1uu0i%2BDJzaaN0BQnevMPpKzglHJc%2FAThh5FW6cU61FBdUcn%2F4iorfRxzhQZRgqm0WaYxUfrWUDqmaGGBpUNh%2FnwbAWJenFy80ckTdk5SvbLTK7EBAODhRF14qY6oa4djGNCNVTtQPBAoS4ipGk4VBjk6xaLPLOQGbyTxUJOjvi0gyBBDK03HkY5S5YrH2H1fIhFYsfal9LkbueTg%3D%3D"

const header = { name: 'Suite 1', description: "Wheelchair Accessible Studio Suite with Garden View" }

const suiteInfo = {
    facilities: [
        { id: 1, description: "Entire detached ground floor wheelchair accessible unit with private entrance" },
        { id: 2, description: "Queen bed with fresh cotton linens" },
        { id: 3, description: "Full kitchenette with coffee machine, mini fridge, toaster & electric kettle" },
        { id: 4, description: "Iron*" },
        { id: 5, description: "Smart TV with Netflix subscription included" },
        { id: 6, description: "Couch" },
        { id: 7, description: "Drying rack for clothing" },
        { id: 8, description: "Bath towels, Pool towels, green striped beach towels, Bed linens" },
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
        { id: 1, description: "Private garden with outdoor patio/terrace" },
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
            <SuiteNavigationComponent currentSuite={1} />
            <FooterComponent />
        </div>
    )
}
