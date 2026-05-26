"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function OurVision() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) {
        gsap.set("[data-vision-item]", { autoAlpha: 1, y: 0 });
        return;
      }

      gsap.from("[data-vision-item]", {
        autoAlpha: 0,
        y: 36,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      dir="rtl"
      ref={sectionRef}
      className="relative  overflow-hidden px-4 py-20 lg:py-30 sm:px-8 lg:px-12"
    >
      {/* subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="mx-auto w-full max-w-6xl">
        <div className="relative flex flex-col gap-8 lg:block lg:min-h-[540px]">
          {/* Gold title block */}
          <div
            data-vision-item
            className="relative order-1 z-10 min-h-[160px] border-2 border-black bg-secondary px-10 py-12 shadow-[8px_8px_0_0_#111111] lg:absolute lg:left-0 lg:top-8 lg:w-[48%]"
          >
            <h2 className="heading text-4xl font-black italic text-slate-900 text-center sm:text-5xl lg:text-[2.9rem]">
              من نحن
            </h2>
          </div>

          {/* Window card (top right) */}
          <div
            data-vision-item
            className="relative order-2 z-20 lg:absolute lg:right-0 lg:top-0 lg:w-[54%] lg:-translate-y-6"
          >
            <div className="border-2 border-black bg-white mt-4 lg:mt-0 shadow-[8px_8px_0_0_#111111]">
              <div className="flex items-center gap-2 border-b-2 border-black px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
              </div>
              <div className="px-7 py-9 text-right ">
                <div className="flex items-center gap-3">
                  <Image
                    src="/logo2.png"
                    alt="فريق انطلاقتك"
                    width={48}
                    height={48}
                  />
                  <h3 className="heading text-xl font-extrabold text-slate-900">
                    فريق انطلاقتك
                  </h3>
                </div>
                <p className="mt-4 text-[0.95rem] leading-7 text-slate-600 sm:text-base">
                  نسعى إلى تقليص الفجوة بين الشباب والمجالس المنتخبة عبر تكوين
                  عملي يرفع الوعي السياسي ويمنح المشاركين أدوات حقيقية لفهم الشأن
                  العام والمساهمة فيه.
                </p>
                <div className="mt-5">
                  <Link href="/about">
                  <span className="inline-flex items-center rounded-md border border-slate-300 bg-slate-50 cursor-pointer px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-widest text-slate-700">
                    اكتشف رؤيتنا
                  </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Window card (bottom left) */}
          <div
            data-vision-item
            className="relative order-3 z-20 lg:absolute lg:bottom-15 lg:left-2 lg:w-[60%]"
          >
            <div className="border-2 border-black bg-white shadow-[8px_8px_0_0_#111111]">
              <div className="flex items-center gap-2 border-b-2 border-black px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
              </div>
              <div className="px-7 py-9 text-right">
                <h3 className="heading text-xl font-extrabold text-slate-900">
                  ما الذي نقدمه؟
                </h3>
                <p className="mt-4 text-[0.95rem] leading-7 text-slate-600 sm:text-base">
                  برنامج عملي يدعم الشباب بالمهارات والأدوات اللازمة لفهم الشأن
                  العام والمشاركة الفعالة في صناعة القرار.
                </p>
                <div className="mt-5">
                  <Link href="/about">
                    <span className="inline-flex items-center border border-slate-300 bg-slate-50 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-widest text-slate-700">
                      تعرف على البرنامج
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Gold question block */}
          <div
            data-vision-item
            className="relative order-4 z-10 min-h-[160px] border-2 border-black bg-secondary p-12 shadow-[8px_8px_0_0_#111111] lg:absolute lg:bottom-24 lg:right-0 lg:w-[42%]"
          >
            <h2 className="heading text-3xl text-center font-black italic text-slate-900 sm:text-5xl lg:text-[2.9rem]">
              لماذا هذا البرنامج مهم؟
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
