"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ScrollIndicator from "./ui/ScrollIndectator";

const DEFAULT_END_DESKTOP = "+=200%";

gsap.registerPlugin(ScrollTrigger);

interface AboutLayerOneProps {
  endDesktop?: string;
  className?: string;
}

export default function AboutLayerOne({
  endDesktop = DEFAULT_END_DESKTOP,
  className,
}: AboutLayerOneProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !headlineRef.current) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            id: "about-layer-one",
            trigger: sectionRef.current,
            start: "top top",
            end: endDesktop,
            pin: true,
            scrub: 1.5,
            invalidateOnRefresh: true,
          },
        });

        const headline = headlineRef.current as HTMLElement;

        tl.fromTo(
          headline.querySelectorAll(".header-title span"),
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 2,
          },
          0,
        )
          .fromTo(
            headline.querySelector(".sub-header"),
            {
              y: 30,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 1.5,
            },
            0.5,
          )
          .to(
            headlineRef.current,
            {
              y: "-100vh",
              opacity: 0,
              duration: 3,
              ease: "expo.in",
            },
            2,
          );
      });

      // MOBILE → SIMPLE LIGHT ANIMATION ONLY
      mm.add("(max-width: 767px)", () => {
        gsap.fromTo(
          ".mobile-fade",
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
          },
        );
      });

      return () => {
        mm.revert();
      };
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className={`relative min-h-[560px] w-full overflow-hidden bg-primary-950 md:h-screen ${
        className ?? ""
      }`}
    >
      <div
        ref={headlineRef}
        className="relative z-10 flex min-h-[560px] flex-col items-center justify-center px-6 py-16 text-center md:absolute md:inset-0 md:min-h-0 md:py-0"
      >
        {/* TITLE */}
        <h2 className="header-title flex flex-col items-center justify-center gap-x-6 leading-none tracking-tighter md:flex-row">
          <span className="mobile-fade heading -rotate-2 text-[18vw] text-black md:text-[15rem]">
            رؤيتنا
          </span>

          <span className="mobile-fade heading text-[18vw] text-primary md:text-[15rem]">
            للشباب؟
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p className="sub-header mobile-fade mt-8 max-w-4xl text-base leading-8 text-gray-600 md:mt-12 md:text-3xl">
          يعمل مخيم رواد الشباب على تمكين الشباب من تطوير المهارات القيادية
          والمشاركة المدنية، ودعمهم في بناء مشاريع مجتمعية مستدامة من خلال
          التدريب العملي والورشات التفاعلية.
        </p>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-1/2 z-20 hidden -translate-x-1/2 md:block">
        <ScrollIndicator />
      </div>
    </section>
  );
}
