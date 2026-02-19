import { FooterComponent } from "@/components/footer";
import { Navbar } from "@/components/Navbar";
import { OurGalleryComponent } from "@/components/gallery/our-gallery";
import { FeaturesGalleryComponent } from "@/components/gallery/features-gallery";

export default function Page() {
  return (
    <div>
      <Navbar />
      <OurGalleryComponent />
      <FeaturesGalleryComponent />
      <FooterComponent />
    </div>
  );
}
