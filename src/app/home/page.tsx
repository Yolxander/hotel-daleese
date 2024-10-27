import {HeroWithNavbarComponent} from "@/components/landing_page/hero-with-navbar";
import {FeatureCards} from "@/components/landing_page/feature-cards";
import {LifeInUvitaComponent} from "@/components/landing_page/life-in-uvita";
import {HotelHomeSectionComponent} from "@/components/landing_page/hotel-home-section";
import {GuestTestimonialsComponent} from "@/components/landing_page/guest-testimonials";
import {FooterComponent} from "@/components/footer";

export default function HomePage() {
    return (
    <div>
        <HeroWithNavbarComponent />
        <FeatureCards />
        <LifeInUvitaComponent />
        <HotelHomeSectionComponent />
        <GuestTestimonialsComponent />
        <FooterComponent />
    </div>
    );
}