import {FooterComponent} from "@/components/footer";
import {Navbar} from "@/components/Navbar";
import {BookingFormComponent} from "@/components/book-a-room/booking-form";
import RedirectToHome from "@/components/RedirectToHome";


export default function Page() {
    return (
        <div>
            <RedirectToHome >
            <Navbar/>
            <BookingFormComponent />
            <FooterComponent />
            </RedirectToHome>
        </div>
    );
}
