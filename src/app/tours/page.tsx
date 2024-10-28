
import {FooterComponent} from "@/components/footer";

import {Navbar} from "@/components/Navbar";
import {ToursComponent} from "@/components/tours/tours";
import {CostaRicaExperiencesIntroComponent} from "@/components/tours/costa-rica-experiences-intro";
import {OutdoorActivitiesComponent} from "@/components/tours/outdoor-activities";

export default function Page() {
    return (
        <div>
            <Navbar/>
            <ToursComponent />
            <CostaRicaExperiencesIntroComponent />
            <OutdoorActivitiesComponent />
            <FooterComponent />
        </div>
    );
}
