
import {Navbar} from "@/components/Navbar";
import {AmenitiesHeroComponent} from "@/components/amenities/amenities-hero";
import {AmenitiesSectionComponent} from "@/components/amenities/amenities-section";
import {AmenitiesGalleryLightbox} from "@/components/amenities/amenities-gallery-lightbox";
import {FooterComponent} from "@/components/footer";


export default function AmenitiesPage() {
    return (
    <div>
       <Navbar />
        <AmenitiesHeroComponent />
        <AmenitiesSectionComponent />
        <AmenitiesGalleryLightbox />
        <FooterComponent />
    </div>
    );
}
