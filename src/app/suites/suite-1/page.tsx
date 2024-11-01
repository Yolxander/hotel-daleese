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
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%201/6722811bbc369.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761850524&Signature=BySCk34Wg5xMdxbMU1r%2FUH3LhZayf%2FsF8seffcH63yoRvVrwEeoFoeEbNzFt7c%2BPYy4E%2FhyHWS6bduWyT4AagbmTBaPhXqa1YkJfYZHW%2BSPOA0cDF8OsNfIqJRlxRtE6tIFGIS0egfKa9CKrN%2BbAuH77QfVQ5o5kfuc8VggATVODybITrdnlfV7UERiWx%2Fr8JNeNpQo9Nf%2Bo36x3QcqCsqAACJpE5Uc7ZoYESMcDh9NytfKz27evYj9YKwGb%2B0t8eEr9eravw5wPf%2BcF%2BxYkh54ilo2bnLSQcpSC2yZq4QbbH%2BSgn1rlWO3AY6c3AnFzvdkxIs0eUKmyrX4rTK7GRQ%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%201/672456f4a7513.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761970805&Signature=RUHw8d5ZqPBgGavX%2BLa6ySckbMqE%2BAHK%2Fiob%2Fn%2FL7B3mV%2F8zp%2FwC1nmo6s8E%2FncHvfZ%2FeMGAvvyAp2KYApTy%2BP72a33y6hNTV8Tg4cAqHTRj9kMvJ7b7gHTS0tatptq%2F61Q7RVxUgwdtqs0Q%2F1KzZePYrmw8RlVNCQTEyPlEo1m8mYhb66fjYs1ZW9RSxjuQQXCYTLV%2BHR2rqUoRAhDqPQkgpWu%2FP6zFiM%2FajZ9RpPTS0ogGxHh6eTa5ri%2BlWY6GudqPV14zCX5Mdd1sMAY9SpCZ5xTDE1MQj7Ufo450YDsiZgynZBIMUBm7sKLmTutQHDiMKkKWTeRjRgd8DKvtRg%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%201/672456f59f915.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761970805&Signature=Qot1HRPGLjM9qF6km3GjxEVKfSApS2c7gpdoly9KFWep3JoFKZibcpE8bROHMB4MkylZw1aOr7pJ0mjtQ35Xxdsxbjk5JBu98ARLggnDzY332Yc9bodlN0SpRgZr9X0GdtroqiVXndoxGAqpqr7pVsRM4e%2BvToCeUITfA52Mnguoxo%2BxY0ehF0JwD42WNHcSpMEVS3SR2CfTIj8jKQtOVjvw6zAY0JzW9N7o4S1PWTGA6yslOWxw%2BUu7xTZkUpTuSca8AUdyPiFmWWsefxlS3gv%2BHsSeXuLY3LmE2Dn6TA32YDbMDPIwwSf0WdFFvemrv%2BXctiBEABRP1B34jYCuUw%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%201/672456f65702a.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761970806&Signature=aOXhAuqcKOgPfe9OHdGCaiJ4GN%2BRuOi46Rr7mhyFHRGPas4qPQHrpoOc39uJhjUCfKxfs1hhq02m3U23CIxD4Q1UdO7I2LLvnR1VgyWUNGaVLTEqVh4ghI%2FUX7s53S1%2BYWLnz9hoEZchUGcU0GL%2FqjReHW4APtfNPqrRIyMgLiCNg%2BaMKOZ%2FT0%2Fcd0Cx4csTf%2FPEo9BaDIOAriOAbLPTUWhMK1gnhdGJxkVu%2FMcDwg9B%2BFYEPGgYrtI36X7kyksrIgkklzwHAL7Kq3uGo%2FTYWg9KnptKvqiyrXfUyjLrchvJ5kz5jP9hNTabcU9LF2bQnZO%2BUsWURSS4RH45ANR9Nw%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%201/672456f6a1f59.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761970807&Signature=bUwVI9DI4GYJHx2MNIh67ZGO3P8hz5fKaLDc9nBjIo1hnumfZedKyoJBeU5U2g8QW33HiQ3x9AI7LXXROGuvGUcD50AGRpuyh83LN6RXRRwUvWWZUk1OHA5aJfjgYS91Kc%2FXOTUAysgV5F0ow7XGM5yqRWAuxyuHlsK3Sqt7A05muYLYmxwQNlC9CGstoskB8%2Bns5I44Y%2BTRpqMYzIbDp2fKE%2B6MoET5s2ECCi2osgMe8VQngiOLOJR4xe510SQhJVf1HxPpbjzGPw2WdZFhp3ZqRh3B%2BPcpHdPJSKQrgrvvUUrPD32%2B%2F0BM4SVr%2FqshYSy%2BA1lmTZUSGCmpRYxa1g%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%201/672456f702dc0.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761970807&Signature=PQhGFDRKymbrQ7y408O3AFMxvEYxcplcNchtu38UwZyntZG6DNlsQjwiADVVQ6xxlT4Mpx4c6vH2RamkoCrLr9Ur6%2Fw8%2BFlxHfzJwiq%2FxoVUWbP%2BRXu%2BExMwSIxcLku%2BwQDaY%2BrFq5DdYnzJPzdK%2F463ioEnx6rN4HuVyZOqcaqGxl1IMu4MeB1M2QscnHduF%2FWj%2B7mzEff1%2FhFHkFCTPuHeW%2FYMVxlA2zGVhE8VBj5GY0XaTJomSZrDWR9QzC4UWbA7MtSZKzAIba8JLhhWdOspfsXD%2BtvOHYzanXnNpklJHm%2BDngWDW3tcUA0GASaBUOySL1Iw%2BJiNXy8SjQgeeA%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%201/672456f74763a.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761970807&Signature=bslkk8iT2E4SakStBgodyHXxlAmfiJBV0mQ9hNmjyyi01Woiz5BpfWcFuw%2FIsQ2%2FmtGgAbfMxgPUIWFdgy%2Bigy%2FXzcFnAkz%2F9swSGEKGbVCP1yVdk%2BoYzWuVrc6%2BkSIjDhzdh72be%2Be8QEgpou7cxfwwaRu61t7Bli%2B9VdNBWtg3qo%2FqL8IbKiwc5yzuVMh7FKturNHzwvzRCNNCZ9DJKtSAkaSRP61rKXUlccpDk0fvCeAWxsfB%2BJHSAaat1tWeHgSvREaCIJygY%2B2%2F9IAaSB8P8RB9F3SZ62RnpKxr0Rd9FFRsSy4LH3CM9GT6TLmBrKMmFeiihzuA30DLnJAbtg%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%201/672456f7890e0.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761970807&Signature=i13YTKXznGOeJ%2BTa0bqJpWupGUELI%2BWBOmfoxstpf%2BhUob8Jj%2F6pYLsjIb6YTsw7Z%2BghCi5rBhNxLvBD4xwxG8wBluf8phPimZigPhl1vey5S%2BNRg4ZZ9%2By4oiaHpDiUV2qzbecthHROGyng89B%2FfJQkChmwKRUllvotBTCRkXFIOQmD4gDhRhxpWAf6JbvtzAM%2FT%2FxrmM%2FkRT8lFB%2FLl9F3nPlhnYylsUFNMyGbcD%2BcGdwS8U0dfedisG0UigGQG3S3yp59Y5aE56aen53cFAvWqzKjOHccaL4EqvYOe0q67ec%2FpYT5t6GffmXHejAkrk5SsVKLKBa8sAwhfumSnw%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%201/672456f7cda16.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761970808&Signature=JLYCQWHDQ3QGAVOyoc1H5ErlI76Tac9TPPpvEulUGTjxAbsT9bVGuWdbunzHW7M5wNJ46Dv59PSSD8uDJFSymbbR8NcVY5NWt7ADHgVOfUWSJP2fKYsFO0W2r%2FA147L4oyuigqQwE6MBJaFhj8Cx0ExHqAsQ%2BOv5kmBVmUZh1glQ4VkcdURN6ajGzB34PdTT8SFGruriM%2FoFK%2Fznftp%2B%2BtKcHIiXkCqHMyNhtP30wEY1p%2BKLgkar8qjCYVgZT6qzNU0DUqgID1d18Ux1A5%2B8jtBfbqpH4E1PYmtpXgvQTRbnQg%2FR0l9OFuFRE8iML4AnfUs38TB7sqcdqai6PX7yGw%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%201/672456f821193.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761970808&Signature=EnMPw4GZDlhVTy%2FFobV3IZ2csLE%2BzNm7yTD8n1TJFkx1KsXGfESvLMM%2BqnHI2KzEtro5rjMBGcgvhdr9VE4UDNELuqboqbSguoGjoMCgVWsFRXunO5YVt%2BFheSdSIMEd%2F5AriBBzTte%2B%2F4CsSBvQldz0fVZincc9AcLn7wE74FghaVF0%2B1KIdEn96a9jJiQztp1%2F%2F1u16zKyt0QqIo%2BlYm44ZWwPoEdXalq6L7t87dQEU3YAZZ%2FS8K%2B5tGl0cgwLWcclZBXetCL4CWRABE03efoJkx1orAifao1t%2FryPvexL6gohPPhwgayObKkmKkl3JexygboDV%2BSc86OqshmF6Q%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%201/672456f86bdd5.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761970808&Signature=iGZpFwgGeNCyPwXu2dimKjPzokmuS6DqlIwfG6UCG9F5krU30t%2B1aR1nnNrbeH%2Fv5bkd0N%2FkAf1jKOZpyMOlM9QpAGqysM3UoXvPlr6kpGcHdEVMSp2cOOShu49AUu5pFq2yuX5HlefxqUnuBhSmOLOg08THsx83eTb%2BA3IRBXzJdmTwMV4EU0jFG593oHvrMPv9f6s2nrBieh66tP2GyDL%2BMP94P2cjUMr5FMwBNSfKYG21cPUHDDk3m%2F%2Flnbw5R1usCnUhwI2YycoykEuyDceBl5Mj6fY4DgTVw2ghW0KdpWBUIqdhDnIZbVDbM3w0z0pgTob8T6miED5MerH%2BUw%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%201/672456f8b13f8.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761970809&Signature=dB%2BaRBmUZkSrQRZ%2FLJssPF%2BVa6w%2BQUCdfff15HqmR7GsDdpQwOnc55euy3J22yONnlt72Fqq%2BX27KykmM6VEk%2Frwc%2Br46Gl%2FibKhdkehajJjACDOM9FUNOUWpwgCGH3YJKezqippDWVaT3R8vXG3ts680%2F8dM6L1n31T1zSxI9yXTMalG4UhhpWXmZfbKFt7FhVprvcZlhf%2FLz57aELzg%2Bdk8y4r1%2FRid6mTOk6Yd6F4hUMMad6SsgJs6btJKDekZPa3qz0eD7XT2fbsyVCFK3c3FFUxaoWEdkIRznQnNBf2%2FWubu%2Fi7lhmAB40mYzLa8GDa%2FnmVQFRj0dqiNNpA%2BA%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%201/672456f90e8ab.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761970809&Signature=hTAFjoCUfhgPr1GDadwMJQWqoKfnk4mQGNkQ3fdgJHNG9lVDXk2xxPD3CUl0%2BpBy%2FkpI7Z6hJ1lxj%2BlNT4BxIeFMnWBPQ%2Fj0GUdqnlQSUZIhJLeT4f5pvf6F3R68p79jah%2FVFFQi%2FuZjw5kOViTdjPbaAGaMiZKwrKTbIxlf0KPjp8vjZC%2BaADK8PU%2BZIa73lL5fnVEzHP%2FSVNdgO5zF4hYqIG3gyFm3quyn3u7P8uxAcyRItVq%2BYrUf3lOocjRc5vohpFol2aipyooTm2f7JuvCjKP3GE%2FiyKHn68Umw3IGwX4IfYMfMOy7%2BuW5UNRDaqWgO73R2TSwiCPYpjubbA%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%201/672456f955a02.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761970809&Signature=msHkozwgZH9f%2FmTgbfQqmk7nxi6fZCziVBdUVFAm6Cel1gS%2FXRBjoInhabWp1EEFMMGh5SnaujKsPwiplKm7enM8EX1Jd9nj5u8%2FYLRAktrrtmJOMwVRMszsYJ6cYIAsAazvybSA%2BU%2FllsCPWVIpJgb%2B9Hj9h3BP9MCEiNhycpo7uLIp%2B1Y4rwzR3afXa7KsoyI%2B0AF%2FzbAVaHy6MVZy8Q2j0HXsVNYsgnmjvwimOkRarjP1VWacKm7le9uqTXFxo%2BIHKxqShhGm08iI4TiSpLpZv1i%2Bfe1uC3%2Fom2EeebqF9Uai8yC9idVyxRlTVf3UYfroTB2TbeR5NMtWt%2Fpo%2Fw%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%201/672456f9973e3.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761970809&Signature=I4DAAWnrxPqaVJ%2Firb0j1bK8Rent8ZKmtSfzJM4Prexot6mY62navXd8rvTixvQTY5q%2BtSjkfTFCwCmIZNJ0%2FcMhLg8o%2BUv1w1lS3JR0Tlxubn2Kz58oA0h1ctjTpF1cSMJRZiaAOeGMIiEQIHccQIp9QeOeptZdiR49mFzzfmQzfr9P%2BsNxGx1uoEiJL14iG9ND%2B%2BvSURwVvkbfAx32C%2B9DPzEo0Zv9rPPn5ioZg8lg7Mi%2BJkGi3Rp8eioPWFZVbGTGHcOOCMo3R5Az5ia315R446OTURyMiXDZPBV%2FQP%2FwB%2FA%2FQA4uHyXK2i2VNIdQyrvaHI034LMaBUEKIe2vcA%3D%3D"
]

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
