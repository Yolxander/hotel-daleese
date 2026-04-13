import { FooterComponent } from "@/components/footer";
import { Navbar } from "@/components/Navbar";
import { OurGalleryComponent } from "@/components/gallery/our-gallery";
import { FeaturesGalleryComponent } from "@/components/gallery/features-gallery";
import {
  getHotelDaleeseImageUrls,
  STATIC_HOTEL_DALEESE_IMAGE_URLS,
} from "@/lib/get-hotel-daleese-images";

export default async function Page() {
  let imageUrls: string[];
  try {
    imageUrls = await getHotelDaleeseImageUrls();
  } catch {
    imageUrls = STATIC_HOTEL_DALEESE_IMAGE_URLS;
  }
  const uniqueUrls = Array.from(new Set(imageUrls));

  return (
    <div>
      <Navbar />
      <OurGalleryComponent />
      <FeaturesGalleryComponent imageUrls={uniqueUrls} />
      <FooterComponent />
    </div>
  );
}
