import {HeroWithNavbarComponent} from "@/components/landing_page/hero-with-navbar";
import {FeatureCards} from "@/components/landing_page/feature-cards";
import {LifeInUvitaComponent} from "@/components/landing_page/life-in-uvita";
import {HotelHomeSectionComponent} from "@/components/landing_page/hotel-home-section";
import {FooterComponent} from "@/components/footer";
import {Navbar} from "@/components/Navbar";
import {ResponsiveTestimonialSlider} from "@/components/landing_page/responsive-testimonial-slider";

export default function HomePage() {
    return (
    <div>
        <Navbar />
        <HeroWithNavbarComponent />
        <FeatureCards />
        <LifeInUvitaComponent />
        <HotelHomeSectionComponent />
        <ResponsiveTestimonialSlider />
        <FooterComponent />
    </div>
    );
}
