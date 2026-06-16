"use client";

import { useState } from "react";
import FaqSection from "./components/FaqSection";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import OurVision from "./components/OurVision";
// import ProblemAndObjectives from "./components/ProblemAndObjectives";
import WhyChooseUs from "./components/WhyChooseUs";
import { PreLoad } from "./components/Preloader";
import ReelVideo from "./components/ReelVideo";
import CtaSection from "./components/CtaSection";

export default function Home() {
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window === "undefined") return false;
    const hasVisited = sessionStorage.getItem("preloader_shown");
    return !hasVisited;
  });

  return (
    <>
      {isLoading && (
        <PreLoad
          onComplete={() => {
            sessionStorage.setItem("preloader_shown", "true");
            setIsLoading(false);
          }}
        />
      )}
      <HeroSection />
      <ReelVideo />
      <WhyChooseUs />
      <Services />
      <CtaSection />
      <FaqSection />
    </>
  );
}
