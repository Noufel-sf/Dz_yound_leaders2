"use client";

import { useState } from "react";
import FaqSection from "./components/FaqSection";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import OurVision from "./components/OurVision";
// import ProblemAndObjectives from "./components/ProblemAndObjectives";
import WhyChooseUs from "./components/WhyChooseUs";
import {PreLoad} from "./components/Preloader";
import ReelVideo from "./components/ReelVideo";
import CtaSection from "./components/CtaSection";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <PreLoad onComplete={() => setIsLoading(false)} />}
      
      <HeroSection />
       <OurVision />
       <WhyChooseUs />
       <ReelVideo />
       <Services />
       <CtaSection />
      {/* <Program /> */}
      {/* <ProblemAndObjectives /> */}
     
      <FaqSection />
    </>
  
  );
}
