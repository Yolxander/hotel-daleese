
import {FooterComponent} from "@/components/footer";
import {LifeInCostaRicaComponent} from "@/components/life-in-uvita/life-in-costa-rica";
import {Navbar} from "@/components/Navbar";
import {LiveLikeALocalComponent} from "@/components/life-in-uvita/live-like-a-local";
import {PuraVidaWayComponent} from "@/components/life-in-uvita/pura-vida-way";
import {FaqSection} from "@/components/life-in-uvita/faq-section";
import {RestaurantRecommendationsComponent} from "@/components/life-in-uvita/restaurant-recommendations";
import {RestaurantGalleryComponent} from "@/components/life-in-uvita/restaurant-gallery";


export default function HomePage() {
    return (
        <div>
            <Navbar />
            <LifeInCostaRicaComponent />
            <LiveLikeALocalComponent />
            <PuraVidaWayComponent />
            <FaqSection />
            <RestaurantRecommendationsComponent />
            <RestaurantGalleryComponent />
            <FooterComponent />
        </div>
    );
}
