import { Navbar } from "@/components/Navbar"
import { AmenitiesHeroComponent } from "@/components/amenities/amenities-hero"
import { AmenitiesSectionComponent } from "@/components/amenities/amenities-section"
import { AmenitiesGalleryLightbox } from "@/components/amenities/amenities-gallery-lightbox"
import { FooterComponent } from "@/components/footer"
import {AmenitiesSectionTopComponent} from "@/components/amenities/amenities-section-top";
import {AmenitiesCardLogoSectionComponent} from "@/components/amenities/amenities-card-logo-section";

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
        "id": "238",
        "src": "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/67427939a4a98.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763945658&Signature=CcP%2BM4xy%2F0tNAt5kEf6GeeDSomnUGpMwO5Xv5vkXmgWRTw4ZvxC4R0QDHFcfJAFK7TwNVsmkLFJm7VTsduKggWnQQg5lpWtfLZ5Jd7pZZj9HEQIeemMOcRZ9Q9q0CE5phphzV83Dsld04qTQMV2PmDud2h3BsCgpr7Yz4phMYW9rpAt0aAKZgAMrAQWs2woGgiMMnmxnMjuIfChktK81yVt22WGKDg%2Br1oN2Mr6ioiUk%2BsRHjBcnSCd0vWq3xGL7bhuKScpWHBKJr22oFpuDrwbMUGNYNeiqPmWppgVKgjm1z8rqhQ5jW9yMPbTr9tQd4Z0lFEvvogisXPVdVP3Tow%3D%3D",
        "alt": "2.jpg"
    },
    {
        "id": "239",
        "src": "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/67427941c0d43.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763945666&Signature=pDqBH3ssGRjVqOF%2BMGvyuB1kcCSucI2ADoAB8dLZKU2%2BXCHg%2FC81GE%2F24%2BeloJMbKZUHgIoN8bSheSk%2FaJqFeR%2FlNL8SJ8PbtF5baOUrZYlgVMo%2B6Iu0cJ9%2BGsEo8qxDFzGhfOESRsvCr%2BDsOS6jBVjMbRUj7hl4qzhrnUkpBRUcfkVAjUrH6iRaCMYqVHuTtvnsZ3W5%2BKDA%2BTunAqEVjyQZJSUh%2F7fYXB53n9ZeXaJgIUJhd6iJ3nFOrigfCrNxQXBtUBFurAjdSAYOBAlEN19yf7wFUabkDQdtf88zzB9%2FN7T07gI9nsNpRvJmUpWpNuVDqizcPHVUPnwcHdhCGA%3D%3D",
        "alt": "4.jpg"
    },
    {
        "id": "240",
        "src": "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/674279424d1d2.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763945666&Signature=VITg4jF5pbrdReRYzTNFP4DsXG6C6o2fsZV2%2BLOxx%2BLU%2F%2B2%2FapQBeLJFOQ6Nukls1URHa8yHTyaDxae884i9tUOXVkCPxgpay%2BByphPE0ImXWsX5%2FNwU7IXhdIC%2B%2Fd1MS%2FAeZDld7%2Br0ceGiSqpRwEmaymEApSExrK0YGDF7nybAiyDUO8JQLI5j6ab%2FqyBSWS6AzRC6iiNE6Ij28RiVmVfGsRgiW30P2g1S7314rjCYvm%2FsjdWpJ34EcA3vH7Lrd9wjht7ju7WySNU%2BrLq3VwC%2BA05oeFzlLTDvQyrhRVk9EHS1Hnl0o1nQDlkwLfOoD0yMh4UgnpZXLC6s%2FNg1xA%3D%3D",
        "alt": "5.jpg"
    },
    {
        "id": "241",
        "src": "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/6742796760f38.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763945703&Signature=B3vGPqCPOQefahqxWnFnx5HaMQrVP355UrpxYZO%2FjRCE2yoaXT2iQnKb3QFdXq95ksAvdq5wwJjtt1isdE7au%2F8ZyxuiSNNxVWc8JB3w9PXx2XVItV8Xu8ZSeVtxAGOnU9a1n8xTMyvXlKvg30fqnPD7ly9%2BKWQ%2BcHDI%2FS6CUrEidgv3sMr5uZPZJIlv%2Flj%2Bg6q%2BdrNE1KYIU7k5nzTG6KZMuraBleIQSKG4gS43fqE1Z2HZZwTOowFrV0NA3DCi1kwS65kxcIM23FOpg2Me2u1W5BEQxP2YHyfUqR%2FoY4SW2zEORHnGFQDNOX5j5z7OPiGRGERU6AqQT0nps9WNrQ%3D%3D",
        "alt": "7.jpg"
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
            <AmenitiesCardLogoSectionComponent amenities={amenities2} />
            <AmenitiesGalleryLightbox galleryItems={galleryItems2} />
            <FooterComponent />
        </div>
    )
}
