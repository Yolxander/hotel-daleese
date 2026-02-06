import { FooterComponent } from "@/components/footer";
import { Navbar } from "@/components/Navbar";
import { OurGalleryComponent } from "@/components/gallery/our-gallery";
import { FeaturesGalleryComponent } from "@/components/gallery/features-gallery";
import { getHotelDaleeseImageUrls } from "@/lib/get-hotel-daleese-images";

export default async function Page() {
  const imageUrls = await getHotelDaleeseImageUrls();
  return (
    <div>
      <Navbar />
      <OurGalleryComponent />
      <FeaturesGalleryComponent imageUrls={imageUrls} />
      <FooterComponent />
    </div>
  );
}
