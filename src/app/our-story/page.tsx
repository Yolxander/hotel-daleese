
import {FooterComponent} from "@/components/footer";
import {OurStorySection} from "@/components/our-story/our-story-section";
import {Navbar} from "@/components/Navbar";

export default function HomePage() {
    return (
        <div>
            <Navbar/>
            <OurStorySection />
            <FooterComponent />
        </div>
    );
}
