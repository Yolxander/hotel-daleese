import { FooterComponent } from "@/components/footer";
import { Navbar } from "@/components/Navbar";
import ContactSection from "@/components/contact/contact-section";
import { HotelMapComponent } from "@/components/contact/hotel-map";

export default function HomePage() {
    return (
        <main className="min-h-screen relative">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{backgroundImage: "url('https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Contact/6720311d840cc.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=HeuNk82mIgXZa6fxelagvKETaQHoUV7LggkrxSZGl2j6mggWGdYyoFilfS6xkl02AA0b%2BtXBu%2F0U1%2BZjRAcnLLqB2ehZpkPK09H68GBppzncqfL3bZ8YaQgXtuX%2FkS46YmH5zDtf1QJX7X7Q%2FKdrkT5WohBET%2FfzFFknojoOUYvYicesM0D14hyXl49ZRbc7o1EMOGkwszwlYztKMy8MRQWCpwyaDzvuJGw3qkaohHXSSTTvRCHzk8W7%2Bne%2BvGMwahNOVnzAnh4oGvDL%2FtmoHb9G9cY%2B7qd04AVImm%2BQMWeXUNUKqYgtnKqu83R4yykWlZLlxAbuH1RtNLFiA4ptAw%3D%3D')"}}
            ></div>
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="relative z-10">
                <Navbar />
                <ContactSection />
                <HotelMapComponent />
                <FooterComponent />
            </div>
        </main>
    );
}