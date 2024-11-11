
import {FooterComponent} from "@/components/footer";

import {Navbar} from "@/components/Navbar";
import {OurSuitesComponent} from "@/components/suites/our-suites";
import {SuitesGalleryComponent} from "@/components/suites/suites-gallery";
export default function Page() {
    return (
        <div>
                <Navbar/>
                <OurSuitesComponent />
                <SuitesGalleryComponent />
                <FooterComponent />
        </div>
    );
}
