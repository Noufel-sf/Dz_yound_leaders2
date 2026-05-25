"use client";

import { useState } from "react";
import FaqSection from "./components/FaqSection";
import HeroSection from "./components/HeroSection";
import Program from "./components/Program";
import OurVision from "./components/OurVision";
import ProblemAndObjectives from "./components/ProblemAndObjectives";
import WhyChooseUs from "./components/WhyChooseUs";
import Marque from "./components/Marque";
import {PreLoad} from "./components/Preloader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <PreLoad onComplete={() => setIsLoading(false)} />}
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
