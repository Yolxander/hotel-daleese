import {FooterComponent} from "@/components/footer";
import {Navbar} from "@/components/Navbar";
import {TravelBlogPostComponent} from "@/components/blog/travel-blog-post";

export default function HomePage() {
    return (
        <div>
            <Navbar/>
            <TravelBlogPostComponent />
            <FooterComponent />
        </div>
    );
}
