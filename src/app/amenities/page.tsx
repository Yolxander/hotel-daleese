import { Navbar } from "@/components/Navbar"
import { AmenitiesHeroComponent } from "@/components/amenities/amenities-hero"
import { AmenitiesSectionComponent } from "@/components/amenities/amenities-section"
import { AmenitiesGalleryLightbox } from "@/components/amenities/amenities-gallery-lightbox"
import { FooterComponent } from "@/components/footer"
import {AmenitiesSectionTopComponent} from "@/components/amenities/amenities-section-top";

const amenities = [
    {
        title: "Relax with Us",
        description: "Our home is your home. Enjoy our beautifully maintained outdoor pool surrounded by a green oasis. Bring your favourite book, or cocktail."
    },
    {
        title: "Ride with Us",
        description: "We want our guests to have a stress-free experience when booking with us. We would be happy to assist booking your private airport shuttle to and from the hotel. Car rentals? We can also help with that."
    },
    {
        title: "Focus on Yourself",
        description: "We have a network of excellent massage therapists and other bodywork professionals and would be happy to arrange an in-room treatment during your stay."
    }
]

const amenities2 = [
    {
        title: "Dine with Us",
        description:" Eat freshly prepared food from our garden and local farmers. We currently have a fixed dinner & in house restaurant with a unique courseeach day of the week. Prepared fresh by Chef Rosa & Dave a la carte."
    },
]

const galleryItems = [
    {
        id:'1',
        src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673eaedfed605.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763697248&Signature=KAu6D6nv252TcOgvglA2oMYAgUsMEErGd9zYaiRwf6FM1TYXq5kZ8TUet5iBpw4Xd%2Bc%2FG1n3JmMtLnF5luvte5HgyahE5%2ByJJ229WFf5mOg1tZtsHjGpv9G7m6Y%2Fr0XME9RisKzDMciff91hE74K7jaCIjgenEHRqwlqukIQ%2F7Zs99h0eHMIM4Xb5MqKU8IA3dVeSTcRcWVT8rIXQFqtyY2BiTx2HGFRRvX7YGvCTr7RNAjDiyoZLZGz7xNS%2FnRHQKqBdb1m%2BYd930jXoy15tecl4ddIkdpIXBqYqvCTLS8c8%2BMbLgmon1YvrYDUbb2TzdePy3uYwlLp%2Bosti9wrFg%3D%3D",
        alt: "Image 1 description"
    },
    {
        id:'2',
        src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673eaee10c75b.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763697249&Signature=khj%2B2b7laMUFQsMZpXXCcdcNrNOiUjEEPoKy41OzI9ESUvQsDJ3AXxvT6sSC3ab49x4RAPEnJsJCz8ku%2BnQNws6IOkuk5MKOJBzW5tFu9SWROSTnIbgct51tW4VbTV2Iif0a7B0KJ7bHdwr1A4kBBhFPUFScma9yosAIZSEtCvZrc6VJB%2BgAcdl3RLV9LBgaltirwRQDpp12z1jHLSvWkYK%2F4D8j1wUj349BtK1P8pgP44l2ei6aeUq6Rir7rK61yxMIGnCTW%2FPSPYH8g51NmAGsDzUca7drog4%2BiZOLlQrkgs%2BukPiVcwM0puGoH0FnrSuWMXvml5ietoceQFOUhg%3D%3D",
        alt: "Image 2 description"
    },
    {
        id:'3',
        src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673eaf00ea361.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763697281&Signature=f5syksWOQXM1%2F3IzT05LBkJHzg%2F%2BiMVgcihUJxGzkmmlklmmKKE6oJYTdyy8jxLBgCekiu%2BGvQsPfzFCJMgAdPMpGLnEm3pVooOUD1iIU7%2FaZB%2Fn%2BIp0LyVsFTPf69VOgj%2BZESSi14wfpZs9vnFoFhefUE2f6fCafni3D%2FXVMt6S92ijHU316oQy2d0k58%2BijtpYLikpUUrKmL18sr%2BpH9C2hNriWB6eBGUqyk57i%2F6naqBrbWzPHDnWoAV9TNQal26%2BQiDuC67s4nodJtdKkSClJHoYgj%2FUMxloEqUu93IAVuCGEFrdOFNEPvTQ89%2FqJeaK7ov9tQaF4q5BplXBfw%3D%3D",
        alt: "Image 3 description"
    },
    {
        id:'4',
        src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673eaf0163ab4.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763697281&Signature=RbmHj8UKe7p%2F522EHeCebrxFBLkvYoqcyvj8ORLSUchp0Hq2XGlYSNfoRntfRR1kHQMv1TPO2BC1Rjn%2By4rAeagg3bswtQ%2FnXhX5qneFb%2B8JyMUqHHAcfmyn0UiEXYbbxbY8RgSqFBIpYEt%2Fa%2BPcw%2FvQsZh78ixxGHu2Cx1W4uOVAg7%2F2wIREkBKjisOC0zaCZW0ZPt2PKxPFOOhdk25IjMODwFHhEWGb3VM7CaIJ1LWgrPsj%2Bz%2F6esgUsNKm7Ppyj%2BJxaaIIbxkQkGzkEmKXU67E1W%2FLRAvjM9slzoGS4N7ZQbwWSlKlPULHSmTCX5ZBkXQFUDzUbn1XoVJ3pMwyw%3D%3D",
        alt: "Image 4 description"
    },

];

const galleryItems2 = [
    {
        id:'5',
        src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Amenities/671d365de0a74.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761503710&Signature=WBCgNVqDLCtTqy8c2bmvwBk0enVcOrZ9T26rXVIFygfwkhN6ns7dR1MSWhO8CQAt6mx8dscbJzxcest%2BMqY79tx6bPgYI9PaiVsY6FVxzXIpgr1drG2sQ6aQTs9nvMjnz%2FTkm2Kin3g4guLwEZU083E3%2FcpyiGyiEkMZ0dQiwQs74XPedcCyOp0eUgiCjSb7zLtQ8Fk9h%2B4bnnXiqtEskP%2BG5EjHqyNgsqDctkm%2BV9sSLN3G8N%2FCKVGNuz2IZluSjYy3HmLKjBlomWmArNUPwz6l5cUv0WbeZIsXq7QL5SDuZBmEvcSmJjR4lzxl7z1ipTtZ6%2BS9r4%2FUDocG2g6v4w%3D%3D",
        alt: "Luxurious bedroom with large windows and mountain view"
    },
    {
        id:'6',
        src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Amenities/671d36589b00a.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761503705&Signature=kLQet8MR5gEIjGUih37uSUg7w5%2B1gFhUxxegRwjizEoZ7AYzCpNqFx94AkwoRgmY8TcbS%2BeFBTaOWjO2iyBTL05bumIPnXFnyinHeD1Lp3MoiQu9M5s07f%2FASRElmmtFMU1f1RrZjmCw6ZJsmoR6eBch8jrWUyG%2BTVpQOoicInhcO%2B1zh9C%2B6FfYvgw%2BSkCjNMcGDuj5%2BcDQnPSrs50VhGJRWO%2FDiP3sfy7zMxIo46RJu59W3mopFXsnyEgcb7sRoTRdzH04sGMf3b5w35iYx6DhpOh%2Fk22%2FhaGLE74JBa15E9rDF0jvXyZDKGpwXzapkY9i8YnEaIb91Bxd27hQtQ%3D%3D",
        alt: "Modern bathroom with glass shower and elegant fixtures"
    },
    {
        id:'7',
        src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Amenities/671d36593abdf.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761503705&Signature=fryVtnhZX1cRwZ6%2BQkm8XSEkALNSFFK9iIAE1Kc6us2je6IRGpzMX7s13UQSbQvdaIGOGDgkC7j9oiFmGO3kS68y0Gze57jv8sCU%2B3LOBIdVzSMrqagD1w%2F92%2FIAhzpt3rwrqzvObGrm1OF9cgExBYPxbFdpK6aodK%2BwJCX%2B6hphVyawYYlrpVovx6%2FVl2lt0zWRWq64ewC6XReFjwdA1AHeVcDm0S0SqE%2B4qz0Em4boO6vrt%2BdMPFGiqBQ6A3y6btYiY0NdUcJe0lsYZAyVPxLmUyLjRr8YOlyiMoA%2B8PLUW3tws%2FhfJu%2FXg3L7X6Us9ZUHLYFJBp0ZRug%2BBn%2F6jw%3D%3D",
        alt: "Cozy living room with fireplace and comfortable seating"
    },
    {
        id:'8',
        src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Amenities/671d36598483d.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761503705&Signature=ELuTdKGtk%2FySh%2FhvlikmtzXDYNwS3fF5s6hsVE9gUSyZjPBqv8HOM3W4NtwsloGwPbFZy4skcVKENwaH7CRfFMLGwnrc9dCQQE4aRyyJt2NvZZL5ZdWEWzD53zns18UkGyy5MHCa15LNdApZXj2KVwdc1D6CKZ%2B1RqWf9CF%2F%2FpRw7L1XabXHe4g4P1j3Gqnnzf2j9RvZyomhtZlC0LnkhtDKkIVVaIaXFqVxGTqYPrqyr%2BttyP0o9qghEwzRvE%2FcVGwe8EyjcV0kJGKJe78gNSgqx5ANMqMxNAxZeUEJtRxcvrv2P%2BThqXbe8GwFuX6cBfpUy98hZw8a31ysj677Qw%3D%3D",
        alt: "Outdoor pool area with lounge chairs and mountain backdrop"
    }

];

export default function AmenitiesPage() {
    return (
        <div>
            <Navbar />
            <AmenitiesHeroComponent />
            <AmenitiesSectionTopComponent />
            <AmenitiesSectionComponent amenities={amenities} />
            <AmenitiesGalleryLightbox galleryItems={galleryItems} />
            <AmenitiesSectionComponent amenities={amenities2} />
            <AmenitiesGalleryLightbox galleryItems={galleryItems2} />
            <FooterComponent />
        </div>
    )
}
