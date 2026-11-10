import HeroSection from "./components/HeroSection";
import ReelVideo from "./components/ReelVideo";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import CtaSection from "./components/CtaSection";
import FaqSection from "./components/FaqSection";
import ClientPreloader from "./components/ClientPreloader";

export default function Home() {
  return (
    <>
      <ClientPreloader />
      <HeroSection />
      <ReelVideo />
      <WhyChooseUs />
      <Services />
      <CtaSection />
      <FaqSection />
    </>
  );
}
