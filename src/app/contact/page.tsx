import { FooterComponent } from "@/components/footer";
import { Navbar } from "@/components/Navbar";
import ContactSection from "@/components/contact/contact-section";
import { HotelMapComponent } from "@/components/contact/hotel-map";

export default function HomePage() {
    return (
        <main className="min-h-screen relative">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{backgroundImage: "url('https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Contact/6720311d840cc.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761698974&Signature=ANvpIn6rfoMcC7mtzNCU4Oi%2FLn8TafM47j6eL%2Bv0v9HYFqgCpoPzCV3wVakNdoE%2FOq2R%2FLhYtmNJZU%2B6rNPh7CJCSfnR45sSrH3scdEjYCs8BYkaddrr79VJD2aLzO15VIWGtr%2B4i4muNuzxU5bL1awNB2b8jmVZEjc1XrMLQlzGBi%2BhOzbHUswlPeISghzSI%2F1Gyr%2B3%2FnlZNXuf%2FI7xsz%2FmxfgB7562k0W8e%2BMqs7bcjDDyvtBjW2C7EULBajs1YmysjbbUWj0zcp2pKCU5CiMgnj7VNXxp95JmUoXG2k%2FwXWGgrn8TSFm3yrmJglTovW3vX6iGo1U%2Bj3tBCi19hQ%3D%3D')"}}
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