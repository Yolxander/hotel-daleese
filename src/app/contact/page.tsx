import { FooterComponent } from "@/components/footer";
import { Navbar } from "@/components/Navbar";
import ContactSection from "@/components/contact/contact-section";
import { HotelMapComponent } from "@/components/contact/hotel-map";

export default function HomePage() {
    return (
        <main className="min-h-screen relative">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{backgroundImage: "url('https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/uploads/Casa%20Turul/Contact/6720311d840cc.jpg')"}}
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