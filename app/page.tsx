import FaqSection from "./components/FaqSection";
import HeroSection from "./components/HeroSection";
import OurValues from "./components/OurValues";
import OurVision from "./components/OurVision";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <OurVision />
      <OurValues />
      <FaqSection />
    </>
  
  );
}
