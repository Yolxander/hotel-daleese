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
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673de7f44f33a.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763646324&Signature=BTVEsfkYcsZZIEvRj%2BYOWWmHN6tIB7Ow7I3mHxshxxbvFPSQcLh%2BhxBuR8xWAYbaYlhMsaynPkfCmWZY0JI2oRflg%2Fo0LPZhDBdXnNkxI8nfol%2F88E5SJUlS58PtqVl%2B%2B2ya6sBP0WCCJ6MOR7n775b4%2FI7Ut2YRF6VOT9%2FS7SIXajSvqKq1gX7K46zrX2sNzBEqZF1ksgjeQxe3uz3%2FLBsit8RS6q8ADHO1ZQzBM2bjdvd0fzTMQpgHH4owOJwG7MWmI5VqQuwGRhU6YBa0XheGgxgLG7EY0NvsDagho6LVDPgNtCiF2kcDsV8u2Qaj7beV5i8HQsO8IoJC0mdccw%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673de7f509709.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763646325&Signature=BkxFOoIOSWEPmqaYNIJpwp8llFGqj5JyEerif5vzi1yKuVjmFpdKj0mAWYXjiNLuI9gh7O7%2BLHu%2FnPqejHT5lZVM1NG6J2DGdKIwlpu1sBcb0pyLgkJjmZ8d7jmWdHfVbFSXSBlQHKg6R1sXgtIfiCtDAQE%2FhNlEq2jzUkgXQkmRr75sXrW0CiAyGll51lRrtlyKnTJAo3Q5I1SY5CWxoNELAX4NMasO5Fk0TycY3RfKfg08o6p9SsRp7EXOn4%2Fpt3OQzvhvQhEcREOXytO5ZrfKJ%2FEQ3qZoc6Ih62OMBXiZU3uUS%2BgRS%2F1JFihJ9jMH9pBHzawzikyBqp%2BZQCb8Jw%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673de7f57a89b.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763646325&Signature=Dwk204G1gSMjZpm2RQbBcpXdTi5zfOQ13Wm1y8D8evSsBiw1fxv87eNHwbfOjva%2FmiBinlAjz%2BAi6%2FnOzAKnVUqf1S9RlzUxZ01ZotxdbhJuHXJjwRz4usyjLzXsILiTyffrineL8b6vsMT8zIKba%2BL27gh7gKBeLXiK0Kpz9I6F%2BPIYz1ib6VlmQBLkEQsB0tLIg2PIEFOIJSszNuac%2F5lLo5Dj9cNg0%2Fzlv6qoApubGnusPEbS9UIHkv7Jgh7inCyPYPdpogDh%2BGFB%2BTrrpij8fACo0BPbKTTOq2PdW%2Fi0BHCtf%2FyOqWWNcur%2Be5DbGkA%2F1elSlEjbOTG6339XFg%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673de7f5c042d.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763646326&Signature=SYk%2FJRrR897lNQ9qG0UmtBaxgL92KMuC9A2TMA6FhKPWRMD72Jz1ts8Mjw4sEE4nTKzZvUS1MIJN9%2Biu8IqsM4dtOEpmDeXdmMoxJMItBa%2FH8F4t28yjgYOycTzEK6WSVaqnnk2QFG%2FsRXYxARJA0ziOg17RLkVBY61VEoKiNiSwO3cNYyFY6SvVdK%2BLDOE48XIUiGLvXAghZGCUOOGCGEDy3oZx9HfNIVSHz2z54m8Q4HYoJ0Lr1oSMtrtLWsqeBUVIeluVFRRlDH%2FommCEjFcsO6%2BJVWjeRh6ce4QYhOJ4yHyYtTnR0RbI3X1JNnPeRVteeeESjTISzLoND1fAMg%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673de7f623bf6.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763646326&Signature=IHD66mNlqqx%2FENn457EpCNlja3ZwLTjOGmrGZiuNyViDjTFJh5OSxm1kaF3q4ue%2B4OxZeNUH6NhONTNwv8M2WelGkLCtkjsDfGECyLlnu433z8l5VNtTjlrz8U0GyXZ9G%2BRgEropiXELgI%2FN1kl5QNDDQ5U6PqmFCIzRIKq7%2BLQ8jE283%2Fovnq3dSruGRmnXwXbjIfPK9UFlknG98yG4lup6p9X3uxRFycYNF%2Fa4GBSAY6X8Pw4RriJNDo9hoZcjRPVOZkiIHGMzeif9n%2FP7VeGwd2sbNVD199yTjokgynCiN246Y%2BLElIjQ7Df2981e78Oew94m9OTNaPV92WMDNw%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673de7f6851e5.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763646326&Signature=AVsDFM%2FFez3ywbPwWXlaXJva5cJae3gkrM3KFOs7oZLbKWu8QOOHt9inyM4Nt5%2F%2BJuFjAgJ9Yq9OHo1YclYj5ySQd0OONLLO%2FxF19sL8og5XV9CNun%2FdzgkiBVD%2FFKnfweUEXFdas178kwZwkruA05gvuce8mlA48qA58QVSKYTwrAn%2Brmdk9BSsYeRnDY3H1orQv9uT94eBBNkIFMuPyfyGeTsn1fN43S9Lyybz2U72zMZN15oWtQ70JI0B28ueJVyhc2XAHfGZTrNjpP9ZFMrcFnQa0KJQv2WLBJ4%2B%2FvbGIIlxxGyypJaUdgFbF5cGxbCThhSj5DWznpZQjnBwRA%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673de7f6eabf1.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763646327&Signature=LX3p%2BSnW7DRd2ayHhyfzHK9leJ8nUdhXeJpxydkAouMuMHbfgPQE%2B4vhKdIkLUH7FM%2FvX26N9Np858rdrJlaC%2FLlEPw5XbtgS%2BY3E4tTTsz53q6kKOubE75ByBl8bLnglI%2Bld0vcBh0Vxs6InTD5GUF1DZF8Z6EQnBJ5BQoxNgItXPpr2A0b83d7xHV5xMj8hzfoFYjjUtDHW2uWmpbKHyQg7MVKZL2bSzoy14bCyeysz4FzMKha2jm5zVi9SzPjoO3lCE3ZUyLT%2FT7IHyix0Wq5wiF25D0DepguW4MP4V8l6Cnz%2BcwnAttaXXGAd0clW8%2Bq7XRDtwghu18rxF7jng%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673de7f757eec.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763646327&Signature=on52lKpeaCdsHvx7PLv%2BLPb8xuud%2BVeeDP6Yc2OgFwTgtxGcuV0GZt77t36%2FEvRbOFndDk0XxawBJAgoXYAYYVSjSBgJId%2Ff9s7ylJOmkmyJ7QvP5ERDs2y4d%2BWcT5wVXgQM8XrUHTW%2FGhWQE%2FIT83qbmDoF1RC6qQE0ssetbFNb3pvcFXnFMI3XCZ%2BqZvdtYTS3HffBbDyu2iOOdohY8L%2BUTUgzI9ns%2FITjYqc8MVUgvummw3126zPv5O%2BDFT57l1guvgRxjZE9ItROrL5NpPHsDP83L2HGHgER2LR16cmYkDOTqyJgXeQD%2Bjnba%2B5BLJGvL2YwwvXEPTlEOL7%2Fgg%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673de7f7b1473.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763646328&Signature=BP4dNVsoCsCcn9f9uCsLo3XYTwEserJZpX2sM5MT3TBlYs%2Bs4KMci2%2F%2FJEK75pmPH3yfRxhQz9eeysmoJHPgozcU5cKGosRXI3stg7NJhCgsxn4iPMr4olLpXQKX%2BKvS%2FDr1xPr4iqO1u2RtSnKUzck7bc%2BRQqTflGiIBDeWzQ6isAzW%2FgOCpcuqB4zbxJQw2UjkD7lay9Ljd0je4unSmAtKo%2Bfo06ez6c0CuDlGy%2Baj9h9n4p9iXHqyORl8ff%2Bpp5tBbxuZyjGviupnicR%2FJLRVV40YW7%2FJXVxx0eGCSOuOhMixNh%2FbVH%2FxN%2BdiNOAtRcp88IOWJY8KzfqgLJmVEQ%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673de7f809c17.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763646328&Signature=oI%2Bkzd8NPMw5mhW1I9ZStPLhCqJ3Guzmzq5aqt67jWWhwtUYK1Nc4PhBHpy2Txf3rwRnhdTO8lHZFIMPjKe8fZ%2Bd3oBHIPqOCndtuYkfFQTOjdeWL%2BpRCmw4kSoO0nSe0SjSFy7x6MiSyvuciomDn21JpoZI3rfcaLUieh2ihM%2BmELxxaPGoJJd5aJK0F7xGTyK0m%2Bxpwd8%2BQZqOB9wxpfGA2fuB3AgqwhJQWLujF8bbqHncWU5bFxRoTODaBe6UL%2BboQbiwce%2FDpHfXbCZrAv90W5kpuJrPTIb%2FIIfz3cppwg7TbNzY2ZeXgcbb%2BEdyvj7%2Bpc8OWG0Dh%2F21IK0nDA%3D%3D"
];

// Map URLs to GalleryItem structure
const galleryItems: GalleryItem[] = imageUrls.map((url, index) => ({
    src: url,
    alt: `Image ${index + 1}`,
}))


const imageSrc = "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%201/6722811bbc369.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761850524&Signature=BySCk34Wg5xMdxbMU1r%2FUH3LhZayf%2FsF8seffcH63yoRvVrwEeoFoeEbNzFt7c%2BPYy4E%2FhyHWS6bduWyT4AagbmTBaPhXqa1YkJfYZHW%2BSPOA0cDF8OsNfIqJRlxRtE6tIFGIS0egfKa9CKrN%2BbAuH77QfVQ5o5kfuc8VggATVODybITrdnlfV7UERiWx%2Fr8JNeNpQo9Nf%2Bo36x3QcqCsqAACJpE5Uc7ZoYESMcDh9NytfKz27evYj9YKwGb%2B0t8eEr9eravw5wPf%2BcF%2BxYkh54ilo2bnLSQcpSC2yZq4QbbH%2BSgn1rlWO3AY6c3AnFzvdkxIs0eUKmyrX4rTK7GRQ%3D%3D"

const header = { name: 'Suite 1', description: "Wheelchair Accessible Studio Suite with Garden View" }

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
            <ImageGallery galleryItems={galleryItems} />
            <SuiteNavigationComponent currentSuite={1} />
            <FooterComponent />
        </div>
    )
}
