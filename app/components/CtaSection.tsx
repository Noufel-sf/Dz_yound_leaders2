"use client";

import React, { useEffect, useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { gsap } from "gsap";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function CtaSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // reset state first
      gsap.set(sectionRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
      });

      // animation
      gsap.fromTo(
        sectionRef.current,
        {
          scale: 1,
          opacity: 1,
          y: 0,
        },
        {
          scale: 0.92,
          opacity: 0.2,
          y: -80,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "bottom 85%",
            end: "bottom 20%",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        },
      );

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative mt-30 flex flex-col items-center justify-center overflow-hidden px-4 py-24 sm:px-8 lg:px-12"
      dir="rtl"
      style={{ transformOrigin: "center top" }}
    >
      <div className="relative mx-auto max-w-7xl text-center">
        <h2 className="heading text-4xl font-light leading-tight tracking-tight sm:text-9xl">
          نشعل شغفك، نُطلق إبداعك، نُصقل قيادتك.
          <br />
          انضم لجيل يصنع الفارق
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
          مشروع البوصلة يمنحك الأدوات والمسار لتصنع أثرًا حقيقيًا في مجتمعك
          وتكون جزءًا من الجيل القادر على القيادة.
        </p>

        <div className="mt-10 flex items-center justify-center gap-5">
          <Link
            href="/about"
            className="heading inline-flex items-center gap-2 border-2 border-black bg-primary px-6 py-3 font-bold text-white shadow-[4px_4px_0_0_#111111] hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none md:text-lg"
          >
            تعرف أكثر
            <ArrowLeft className="h-5 w-5" />
          </Link>

          <a
            target="_blank"
            href=""
            className="heading inline-flex items-center gap-2 border-2 border-black bg-secondary px-8 py-3 font-bold shadow-[4px_4px_0_0_#111111] hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none md:text-lg"
          >
            انضم الآن
          </a>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;