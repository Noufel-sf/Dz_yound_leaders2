"use client";

import React, { useEffect, useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function CtaSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

 
    

      gsap.to(sectionRef.current, {
        scale: 0.64,
        opacity: 0,
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "bottom 80%",
          end: "bottom 20%",
          scrub: 1.5,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative  flex flex-col mt-30 items-center justify-center overflow-hidden  px-4 py-24 sm:px-8 lg:px-12"
      dir="rtl"
      style={{ transformOrigin: "center top" }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(circle_at_center,rgba(148,163,184,0.12),transparent_55%)]" />

      <div className="relative mx-auto max-w-5xl text-center">
        <h2
          data-cta-item
          className="heading text-4xl font-light leading-tight tracking-tight sm:text-9xl"
        >
          إن لم نؤمّن
       
          مستقبلنا،
          <br />
          فلن نجد سببًا
      
          لنصنعه.
        </h2>

        <p
          data-cta-item
          className="mx-auto mt-6 max-w-2xl text-base leading-8  sm:text-lg"
        >
          مشروع البوصلة يمنحك الأدوات والمسار لتصنع أثرًا حقيقيًا في مجتمعك
          وتكون جزءًا من الجيل القادر على القيادة.
        </p>

        <div data-cta-item className="mt-10">
          <a
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdHvr5R3_eS0nwktsFXqSuOYsEY9dgGL9o81FpBuD_gdY6BSQ/viewform?usp=dialog"
            className="heading flex mx-auto w-1/3 items-center flex-row-reverse h-12 border-2 border-black px-4 justify-center bg-secondary  shadow-[4px_4px_0_0_#111111] hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none "
          >
            سجّل الآن
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
