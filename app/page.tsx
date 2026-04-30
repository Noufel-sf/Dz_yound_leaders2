import FaqSection from "./components/FaqSection";
import HeroSection from "./components/HeroSection";
import Program from "./components/Program";
import OurVision from "./components/OurVision";
import ProblemAndObjectives from "./components/ProblemAndObjectives";
import WhyChooseUs from "./components/WhyChooseUs";
import Marque from "./components/Marque";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Marque />
      <WhyChooseUs />
      <Program />
      <ProblemAndObjectives />
      <OurVision />
      <FaqSection />
    </>
  
  );
}
