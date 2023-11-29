import Expertise from "../Components/Expertise";
import NavBar from "../Components/NavBar";
import Services from "../Components/Services";
import Work from "../Components/Wrok"; // Corrected the component name
import HomeComponent from "../Components/Home"; // Corrected the component name
import Video from "../Components/Video";
import Contact from "@/Components/Contact";

export default function HomePage() {
  return (
    <main>
      <div>
        
        <Video/>
        <HomeComponent />
        <Expertise />
        <Services />
        <Work />
        <Contact/>
      </div>
    </main>
  );
}
