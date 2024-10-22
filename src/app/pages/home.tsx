import {HeroWithNavbarComponent} from "@/components/hero-with-navbar";
import {FeatureCards} from "@/components/feature-cards";
import {LifeInUvitaComponent} from "@/components/life-in-uvita";

export default function HomePage() {
    return (
    <div>
        <HeroWithNavbarComponent />
        <FeatureCards />
        <LifeInUvitaComponent />
    </div>
    );
}
