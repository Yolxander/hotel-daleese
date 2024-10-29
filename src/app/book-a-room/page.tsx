import {FooterComponent} from "@/components/footer";
import {Navbar} from "@/components/Navbar";
import {BookingFormComponent} from "@/components/book-a-room/booking-form";


export default function Page() {
    return (
        <div>
            <Navbar/>
            <BookingFormComponent />
            <FooterComponent />
        </div>
    );
}
