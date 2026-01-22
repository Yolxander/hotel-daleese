import { Navbar } from "@/components/Navbar"
import { AmenitiesHeroComponent } from "@/components/amenities/amenities-hero"
import { AmenitiesSectionComponent } from "@/components/amenities/amenities-section"
import { AmenitiesGalleryLightbox } from "@/components/amenities/amenities-gallery-lightbox"
import { FooterComponent } from "@/components/footer"
import {AmenitiesSectionTopComponent} from "@/components/amenities/amenities-section-top";
import {AmenitiesCardLogoSectionComponent} from "@/components/amenities/amenities-card-logo-section";
import {BreakfastSpotsSection} from "@/components/amenities/breakfast-spots-section";

const amenities = [
    {
        title: "Experience the Best of Our Boutique Hotel",
        description: "We invite you to immerse yourself in the tranquility of our property and make the most of our thoughtfully curated amenities and services. Enjoy complimentary private parking and high-speed Wi-Fi as part of your stay."
    },
    {
        title: "Unwind in Paradise",
        description: "Bask in the serenity of our lush outdoor pool area, surrounded by a vibrant green oasis. Whether you’re enjoying a good book, sipping a refreshing cocktail, or simply soaking up the atmosphere, relaxation comes naturally here."
    },
    {
        title: "Seamless Travel",
        description: "Leave the logistics to us! We’re happy to assist with booking private airport shuttles to and from the hotel or arranging a car rental for your adventures. Your stress-free getaway starts here."
    },
    {
        title: "Prioritize Self-Care",
        description: "Rejuvenate your mind and body with our network of skilled massage therapists and wellness professionals. Let us arrange an in-room treatment tailored to your needs, so you can fully embrace the peaceful energy of your stay."
    }
];


const amenities2 = [
    {
        title: "Savor Every Bite",
        description: "Indulge in a dining experience like no other. Our talented chefs craft exquisite meals using fresh ingredients from our garden and local farmers. With unique breakfast and dinner courses prepared à la carte, every meal is a delight for your taste buds."
    },
]

const breakfastSpots = [
    {
        name: "Breakfast Spot 1",
        description: "A delightful breakfast spot offering fresh local ingredients and traditional Costa Rican flavors.",
        // Optional: imageSrc, location, hours can be added here
    },
    {
        name: "Breakfast Spot 2",
        description: "Enjoy a relaxing morning meal with ocean views and tropical ambiance.",
        // Optional: imageSrc, location, hours can be added here
    },
    {
        name: "Breakfast Spot 3",
        description: "Start your day with authentic local cuisine in a charming setting.",
        // Optional: imageSrc, location, hours can be added here
    },
]

const galleryItems = [
    {
        id:'1',
        src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673eaedfed605.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=T8I5YqpisRBEGX1cHB6KFOLE%2BNvbyxM8SZ%2FXBnt5%2FmSxaFub%2B0XoaC6FBbbNNQ32hjvEijYwjLlKx0%2BF1YAJZyKJ3S1tOzjlYB8u0BrALfx5AgDCKgFTzPjaMLzmvGg%2BWtCgbyzHq1mw%2F9Ulsb4e6hg8Lq7rMlIXcFe98tWFrxGD4Rn2nmCXOaIx0gJAgb2nhZ3sb88EAuyZy5vjNQqYndIHxUXFKY4fzRf8vwUvTbUIimdU7k4iNMcbpEMwbOt41sPRP2w98qm74XkLncfLIW7E3JvTqDbGSkZDc0XFgO6r8JvhnWyFMnoeskf%2BDwz49JVAZQGUhfkd9SzdOURQiA%3D%3D",
        alt: "Image 1 description"
    },
    {
        id:'2',
        src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673eaee10c75b.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=O%2FmVDkcJrSwLx4daZnys1W3S1xsFhRnexP7mc25%2FUDKNjhgz4Pt%2BcoD76tJ5gUGFfRThY0XXXesUohSQdGoZIJHcI6MhHZq3RVn2NLVZi%2B5tWpN5zct4iu76Q%2Fr0fgefKFxtvtPr9XIO4qTxw%2FnpuZ807nhb%2BnjDc6L0TFAB7qHMSYxx%2FGAAniC57ZmqxWL4NdpBu0Dc1oh2ukYHCNaEeaUhCqYdT6vNzHox9%2Bir%2BEt%2FowtGYI9utlyRyxMJq0t3y7fzgb%2FnjIeaNfjQY0SysdGVNNjkl%2B6VhveK7VlSP2xb15PKWKJLobyXmyvqSAQbq0yT4YKWLJSMhUeJ%2FhjTfg%3D%3D",
        alt: "Image 2 description"
    },
    {
        id:'3',
        src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673eaf00ea361.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=aAIY7cvpZ0wdhMpvhphB0xs7RW1CCTknG7ng2HGdbqyFLvsHFTfLLozeuBiuCo7iKUXbMtGx3eiDX9cwelJ%2BWrr3Ddb6%2FO6TwlH8dmiXMO8K485RSrXOzvcCbUDnhMldm37s%2FFVRV68GebTsRATdN64og9TgyDdkH6vGEkTf%2Fqm1o%2FBcZO%2FYSNRBBEEHfq8Es%2BmnmOWyNstVEHuXaPbrCXLeVSp6XXe8JAuXnUd3bpf9JCQx480WsUV1DqFn%2Bwt%2FZK6U%2BnmMILIggRysIMI%2BZAac4O6txqd1V0RqQ%2BfjUE1iPJ5R5AXAv5OPMohbKHJBxFu52NL3jdZIUoXem1Qc0g%3D%3D",
        alt: "Image 3 description"
    },
    {
        id:'4',
        src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673eaf0163ab4.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=wIZCt04IJh67tTGy4ERlqbwAf2LfHc%2BXRT1C9xryu7EHkLkO8UUnPxMWgpRirMMFwowyusPNmuL8CU0SOojEeRE13Yoyoro8vAvTh8tBEulju21DDH2bSpfLFe8SpqWV6oJ4wQTPaVD1all9wQxe86xbw5MXEeo7%2FbRwrgDQ9LuDjROr8fZaf6hLwF8Pzqf7IDb7Tf9VkXVmRe%2FXaMs0umIN0gyKjitsxiW1Op8yiAXuH%2F%2FHZl1NhEfP0Ptl5RiD34iHEUcoGmxECyshC5tSVyvqdHi6D8cTmVaNpg8xBnDTtLeEBlLZG6NI911U17n8iRw7JM%2BOrBt08t%2FBxFfEeA%3D%3D",
        alt: "Image 4 description"
    },

];

const galleryItems2 = [
    {
        "id": "238",
        "src": "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/67427939a4a98.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=Wk0mXf0Ni9bbrEUonqGKAwWxIJug4R5bLudaSIz%2FgDDuQ6Tk5m2IwaMQ2qMovtd%2FgUHLnwijgXPbfd%2BrYAcdnIfnmDv1w8%2F%2FeilDJ08FAnCTxgc%2BSyL3scCuoJq2B6TndiYAtdW4%2BuBW%2BSmN7FL0Cg%2B99BQx6Ulajw%2BEfaD67jgQDotRk0oiYvPouj7sprypiRM%2BTOS5J601YXPPMt0ATyD7d1%2B7KqZXlS3J4nz%2Bri%2BVSHXs3qNKfn9%2Bm2%2BmsfFfwNi82rpZneCwotkUkN1hUosdxwEp9VeKOmBy3mjCwhyfJbsYUQIo5RZ698GXeAKEHqJHr52wmWrtbAdN%2BffaYg%3D%3D",
        "alt": "2.jpg"
    },
    {
        "id": "239",
        "src": "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/67427941c0d43.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=b0uFWr09CYFciJJbsdP2DYKvhtZYUv8QkG6HMxdP1jgHFai91DhB4hKNhjqLjn9KxAy3vtARk9Xz4xjRoomG79n6zx%2BpWUoAW8NUfaH5hsGthIE7zyLPGVLMLDIwcHh93GkqFvCYztCLqo0oQxLLecfnLuqREcjBVDqsnJzVJCungQS8eaD95%2F%2BuXBA1XVwZoV3DB33uLld2rA3mmsMd36U%2BiTUG%2B7SJrQQKl8PvyO4TR7IdlrxmjTEnEzQF3TbwjrvjnYAB2RXdAayFTgnPU9NzYwi8Y6VOmDVc%2BkMMj43PDUY%2FGx%2FpmVspR5NYPNt9MEOlbc6UhBbHc%2F7iKpra4A%3D%3D",
        "alt": "4.jpg"
    },
    {
        "id": "240",
        "src": "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/674279424d1d2.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=tSm3M1YJNUvpT%2BrQhD5bQDL9K4u2NLolZvUBEd7BO%2Bjb379t6Mq2N9EWm%2F8mBE6iWnIqLTTwwgb8CsdUTH8XD%2BTWPnSqIfb5efBESypHo4VPsel%2BMu1m3TU1xX3SxKpxkQ%2FOVh47zqIK7HxknXZ3jsVoIGczFUyMcyTOzAm1X990EHC0pTON5J%2FYucTC9hPeEXFBkErwj7YFe64T6ZxsTepHir4YjU5WlW1mbwT6Gi%2FCcP2nEzLEq5ekOFwQ7Zc5tPlzrKiCBx5f2kJHwZmumKQRS3ewWJ5Ddifo392HmCiR69wjErgaUY2NG%2B%2FSjp%2F7fEYeQrH2RXfLsmoE2IMAgQ%3D%3D",
        "alt": "5.jpg"
    },
    {
        "id": "241",
        "src": "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/6742796760f38.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=TNrhDb%2B087cO2rvrZ8lxn7kRUpE25jlsAbG5dBbshgeljZGF5o8m4bYOT3zTQuZTnfAXm4cDHFvbA1URR%2F1Mnvze%2BGltQ7rBhbZKCp8gzFfBcHlAYUiELiYxt3IbzTBHRhUBKxo8UJSq8Q0cZmm77SJrY3g7dWLeBZm%2FQVX2rV2D5uLSkLC%2BmHRhkrXhG8FJtRBpuQZCKHyO5ZW6Jz6hPV0M2dlPKBLRMnMY2Owe5qVfX5VlJPwSBaTlCTsTw2faHBjF8TfCy9vKD6m1yUNEx9aUdu5rVugo%2BqgV7ms9K2Oo1wVaR7pBW6atQMmbskEIbwQA%2FIoSN%2B4jnNvF%2FWgeug%3D%3D",
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
            <BreakfastSpotsSection spots={breakfastSpots} />
            <FooterComponent />
        </div>
    )
}
