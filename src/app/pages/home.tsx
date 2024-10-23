import {HeroWithNavbarComponent} from "@/components/hero-with-navbar";
import {FeatureCards} from "@/components/feature-cards";
import {LifeInUvitaComponent} from "@/components/life-in-uvita";
import {HotelHomeSectionComponent} from "@/components/hotel-home-section";
import {GuestTestimonialsComponent} from "@/components/guest-testimonials";
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
