import {FooterComponent} from "@/components/footer";
import {UpcomingUpdatesSection} from "@/components/upcoming-updates/upcoming-updates-section";
import {Navbar} from "@/components/Navbar";

export default function UpcomingUpdatesPage() {
    return (
        <div>
            <Navbar/>
            <UpcomingUpdatesSection />
            <FooterComponent />
        </div>
    );
}
