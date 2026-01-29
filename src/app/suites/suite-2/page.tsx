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
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673e436317fc5.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=wPy%2B75nE0xgHnqX%2FXJLh9S4XG0419GSV79t3auEolT0aM1amX%2FcR%2BSuJutMp0bc%2FdDU3xnF7j27ldu8D4sODdobEBrG9MqLX7GRM9obtb%2FR0pWUkOneY2vZYQMdaNEcTi9yi%2B6YiGD%2BbTT53Va73iCPpcScYBAC9wwK778fUNqXpzypaUnh%2Ftjb67pT8PRoVOndDYNJ7UZjhLwGVG80LdzhtLOPWdquF7OiRNH0ywGXAEENzq7%2BMrt0ElnE2Lim04s9xzlwCz3hU02Q6NUMkBhWrsHL45TE1Br0lnN7xXZcDCgkl7M4obgnCdwlhsGQpE52bH6SW%2FZFzMPQbyzNFqQ%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673e4364289a7.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=fl756dJGwu8enGCWG9Xn3dlTBCf78ZFe1xgDFfxmaQjPIYeTyPfcn85mVbg31ZH5ddqHfx44sn0M1PvxSAeiQu0nEmazaqa2CZL4rQehx9Ch4Wb9192oeEk7BRGR3FtbY2e11728JC8KRjFZZqCx3NW2gsioVVKw1YK6TefJHN5orvqwL3yJy1tsoCsf3r1byK1Bf%2BK7APiETxsalRcmXvgbuBa8Epd166n1WGwZHL9ndHtx2QV4XMXEmsLBUoI4F0WPELjqSLiXYnEGG3RtbpLYF1sSk3nq8HsjkZXGRQ6pkxnU%2B7Z%2B5XFPSynbn0RMmGmueUAgeK%2B3SYrryf1ZCA%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673e436d9a9b9.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=QayJIlRJX3ndpy94vlJ%2BGfcl6yUK7D2eNvwYbQUIXdxuY%2FukFBMs2y92KAHuyvD6ux0PiuBpj08VTWHfpW70XwRK5C6vwIZ3VPdq4f%2BIYKjOomJEF5RM0R10ZDoVi27jGOHRMp2J1SLfl7u0rhLggsc5AUwGgsT4Z1T%2BDWVoEsWi8cCvRweiYGJ4IH4ik%2BwjdI9SKfdf4PQOPwziw3sRP%2B7opHDXcdmVyax9NTET9F0EVlKz70M0uuy58GR7FxAeBSToTy2863pHxJ09ZuHZEK3AnmkvJRuMgyOgVc0z2adSnKwJQoaIYQTCTLV0Aos2HCdjka5aBDl3s9bVObD5Fg%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673e43777c6a7.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=runYywnSfYaCQ7GtmcuSxUCwg45g9f9w0yPOX5icEuD%2BRYDG32GSaNgeHSPLMcu7FtWMA2X2wgHi3GtuYE510Cnx4sifk%2BKcJgTg%2F6UJ5lx1O8pdxelZc8lcKDyONyQshzOIGWgFYo42M19n%2BEp05QgnRILG8i7iYAvmkjhc7%2F6sSxcYbMsWw90kUOTCWQeI6dwVbGhwHkPmsX%2B6tKAGZ6eIryh3UjL17h47WQALlIirljKW1rCbVrN2djcmsQs0WxF%2FGty54qeZSsX0%2F0pE87AbWfLqov%2F3P2%2FNu9%2BdK3XpGfg8iyEgoUtJPgvxCzyw%2BvVRpizqRmXy%2FvS%2FL1CxoQ%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673e43780549b.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=2vJH85hPIAYnCdmLX50jN%2BD%2FtJLsarrlefszoVPmPq4dk9twZWbyMjEFsZJKT%2F6q3oyPVP4Et%2FuWD%2BL6rzKm0uFvUeyE986vEC9n6abIv8qfA7muSFY%2FtcZdVFRUugbLqi7ZsPt0XzJU8mkGhyfe%2Brv0cdDPjsDLssSUg5yxp%2BIhy59z2zWaFhMXm%2F5iyww9NSKiUaZ779NRcgcuaSYeBVxa3WGT7DUcSNa9sb8ReMA%2BbZn23%2FJL%2Fkem2ouBPEknJt%2FDUDTWthqMl5ZNO%2BE7ho3Z6yBKyYkwXAhQC4mw9sGPdZPAGhFuLbYxNZR7WBL3AdC9YkOdrocYYXRzuDrt0A%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673e4378475fc.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=vcyH4WgyAIzOx5apLDQEcIz%2FG4o2r6y5%2BgA6C4s7ZLCNBrxNehrgu30B1tnUNNdT3NR7rDrfTzHIgfoY3ZPKxiPQZLQFRrcQ8cXLKAVnV3r8t4MYDqO86eSu%2Bh3%2BEyk7m0NbUXOhx12VWOtm5i05aOM4q3CxUtM1QiBFHBDEL3SFgqdhh9HQ2ZW7IfgZpsGhgTtV7ksZv1htWUP7MYo0Gmrn8DKHAN9OhvHIU4jPDgm2jH7R4bz9%2BsiJKBwM7aimbfQcTgm0nKfRQ5QU8XKApYNoCpRWMxQhBPKPDjc%2BAPnU5fvQwd3H3DzUQxIJJ3Fm%2Bl5B9I5j2VomgzZN3n9iwg%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673e43788473e.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=Fj0ntPr35VAeYdf5r7MsGqnhwOIUxQOSHJ4qb7JNSf6mGnb%2BjSg%2BxV41MezEnmKvPN9afgLMGxoE4xUCLu72k9yqMqbKwOF1vZ%2FoOi10lxjfwXbLfouIns1DpxzyjdZ4Ix45aZ1zQgvhDovmLjxrFSql%2Fl8i8BSi58uoN%2Bp77WuZT%2Btl1bNkLP5kCXRROYaepoEG7EDoiZatx58OXAcRp8k%2F0lBQgZx3ppLfWryTFoeePeT8hF%2Fnj9uNLuzbnDYhMXnIDJYKvyAl76d8Z2bH2H7PxNhqzbSXNuG0VxpROlFYd04I2vBfyzNSMzyqcBCTf7BLHq3g%2Fwkty33MJCLPYQ%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673e4378c89e2.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=ul%2F9MIP5ryB76FdgSq%2BUNHCfZsB9RWpzefxqmX5j0XFxf2yZxnWMJmF0KUkdl%2FDTSMjjXB%2BnC0o%2FInU0pkk2FfsNtl1RX1y%2BtsWNDiRCs06rTCSpB318UcijobH0%2BGZRoh4f%2FzFDEV556oVAQnOdDezqm9YBb%2BXARy0Ux82TQcptbttOA0CFhnIiz56qj0c%2FwzznlYWnAMNe%2FMBaxN8X7lYaggbeTaX%2BfuDI%2FyQKmDFr8dgAFkv%2B96ls9IWUjEA%2FTBFZV%2BDn3LziiEH8r0WBPG%2BOnoUjYLNBJZmkSpq84cD4jjQnhYADwrxMC%2FNlMAzQUwLv8RZ5SlwuSwmgkM9WfA%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673e443c44370.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=Oc%2FglVKqtMBE%2F3VV5Sn2lB%2FF%2B2ZvuBsMVzDgfETf53VgrXjpXkXvVEij0pcCm0jYfUyoqyShJuGl3bwVA87df4sFg6GU8pxjbvMg%2BsPqRF78QtqRwuxue8cB3GOpEv19%2BD6qlNMLsdPi2m%2F4%2FNak8C%2BxVHyplHYomi5Otcd22aa9QoFHDI3DEwHgrl6nKBVXAXzY23BQx1VxbnZZuUp%2FkMn010d64Fn7XkcJjecifOaqQ0Us1y%2FGAkT%2BZuxBu8sCbOFfg%2BQLBWrJp78Gd1yFT4iHkCuJmtKe58n2tJCPBcs75qr%2FEMit%2F7H1LmpVu0CltmsJGNe%2FWfGrv7T51O3KFw%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673e436317fc5.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=wPy%2B75nE0xgHnqX%2FXJLh9S4XG0419GSV79t3auEolT0aM1amX%2FcR%2BSuJutMp0bc%2FdDU3xnF7j27ldu8D4sODdobEBrG9MqLX7GRM9obtb%2FR0pWUkOneY2vZYQMdaNEcTi9yi%2B6YiGD%2BbTT53Va73iCPpcScYBAC9wwK778fUNqXpzypaUnh%2Ftjb67pT8PRoVOndDYNJ7UZjhLwGVG80LdzhtLOPWdquF7OiRNH0ywGXAEENzq7%2BMrt0ElnE2Lim04s9xzlwCz3hU02Q6NUMkBhWrsHL45TE1Br0lnN7xXZcDCgkl7M4obgnCdwlhsGQpE52bH6SW%2FZFzMPQbyzNFqQ%3D%3D",

    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673e443d25fbc.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=Oo5dlqkZ7Ehn8RRBygVsItJyrXfbZ7smFNScHtEF5Rd7t9N%2F4G0OI0FtNyel7XvQh4CS8PwnQhXvVL5r07gHMHekfZsNx6sGvsJPhzi9Px6evjMekO07EldrmTsJKLkoKpEBDAdSycgUfNPsLjingGlqUQBKrxLWlnvL4WYHV5Y6gyIpbn0%2FCH98UJvqD21A0LnWNIOHpPxMZoYU%2Fmqh4%2BWXOZ4UY9hjzelayT7ynbJvyZjbYCS0t0X8D4WQhjFOOsKRpVuxBiXW1QAd3JGMV63%2FPfqv6mHUxDG4RoagD0cIDBE7EqIrgLUQidFdFsvar8mSz1tcvilNzf5FeIoQKg%3D%3D"
];
// Map URLs to GalleryItem structure
const galleryItems: GalleryItem[] = imageUrls.map((url, index) => ({
    src: url,
    alt: `Image ${index + 1}`,
}))

const imageSrc = "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673e436317fc5.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=wPy%2B75nE0xgHnqX%2FXJLh9S4XG0419GSV79t3auEolT0aM1amX%2FcR%2BSuJutMp0bc%2FdDU3xnF7j27ldu8D4sODdobEBrG9MqLX7GRM9obtb%2FR0pWUkOneY2vZYQMdaNEcTi9yi%2B6YiGD%2BbTT53Va73iCPpcScYBAC9wwK778fUNqXpzypaUnh%2Ftjb67pT8PRoVOndDYNJ7UZjhLwGVG80LdzhtLOPWdquF7OiRNH0ywGXAEENzq7%2BMrt0ElnE2Lim04s9xzlwCz3hU02Q6NUMkBhWrsHL45TE1Br0lnN7xXZcDCgkl7M4obgnCdwlhsGQpE52bH6SW%2FZFzMPQbyzNFqQ%3D%3D";

const header = { name: 'Suite 2', description: "Studio Suite with private garden" };

const suiteInfo = {
    facilities: [
        { id: 1, description: "Entire detached ground floor unit with private entrance & garden terrace" },
        { id: 2, description: "Queen bed with fresh cotton linens" },
        { id: 3, description: "Full kitchenette with coffee machine, mini fridge, toaster & electric kettle" },
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
            <SuiteNavigationComponent currentSuite={2} />
            <FooterComponent />
        </div>
    );
}
