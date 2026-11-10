"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ReelVideo() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  // Lazy load video when section is within 300px of viewport
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px 0px" }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useGSAP(
    () => {
      if (!titleRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          end: "top 35%",
          scrub: 1,
        },
      });

      tl.fromTo(
        titleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power2.out" }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full my-20 overflow-hidden px-4 py-16 sm:px-8 lg:px-12"
    >
      <div className="relative mx-auto max-w-5xl text-center">
        <span className="inline-flex mb-3 items-center gap-2 border-2 border-black heading bg-secondary px-4 py-1 text-2xl -rotate-3 font-bold text-black shadow-[3px_3px_0_0_#111111]">
          فيديو تعريفي
        </span>
        <h2
          ref={titleRef}
          className="heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-slate-900"
        >
          كل ما تحتاج معرفته قبل
          <span className="text-primary heading"> الانطلاق معنا</span>
        </h2>
      </div>

      <div className="relative mx-auto mt-14 max-w-5xl">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20 sm:h-[520px] sm:w-[520px]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-pink-300/30 sm:h-[420px] sm:w-[420px]" />

        <div className="relative mx-auto w-[240px] sm:w-[280px]">
          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_30px_60px_rgba(15,23,42,0.15)]">
            <div className="relative aspect-[9/16] bg-slate-900">
              {shouldLoadVideo ? (
                <video
                  ref={videoRef}
                  className="h-full w-full object-cover"
                  controls
                  loop
                  muted
                  autoPlay
                  playsInline
                  preload="metadata"
                >
                  <source src="/k1.mp4" type="video/mp4" />
                  متصفحك لا يدعم تشغيل الفيديو.
                </video>
              ) : (
                <div className="flex h-full w-full items-center justify-center text-white/50 text-sm">
                  جاري تجهيز الفيديو...
                </div>
              )}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/60 to-transparent" />
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-4 py-1 text-xs font-semibold text-slate-800">
                فيديو تعريفي
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute left-0 top-8 hidden w-[230px] rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-slate-50 p-4 shadow-[0_18px_40px_rgba(15,23,42,0.12)] sm:block -rotate-1">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600 text-xs font-bold">
              100K
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-slate-900">100K</p>
              <p className="text-xs text-slate-500">مشاركون حول العالم</p>
            </div>
          </div>
          <div className="mt-3 h-px w-full bg-slate-100" />
          <p className="mt-2 text-[0.7rem] uppercase tracking-widest text-slate-400">
            مجتمع واسع
          </p>
        </div>

        <div className="pointer-events-none absolute right-0 top-16 hidden w-[240px] rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-emerald-50 p-4 shadow-[0_18px_40px_rgba(15,23,42,0.12)] sm:block rotate-1">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <span className="text-sm">#</span>
            </div>
            <p className="text-sm font-bold text-slate-900">شبكات وتعاون</p>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            تواصل، تبادل خبرات، ونمو
          </p>
        </div>

        <div className="pointer-events-none absolute left-6 bottom-12 hidden w-[220px] rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-sky-50 p-4 shadow-[0_18px_40px_rgba(15,23,42,0.12)] sm:block rotate-1">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sky-600">
              <span className="text-sm">+</span>
            </div>
            <p className="text-sm font-bold text-slate-900">دعم مستمر</p>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            مرافقة وإرشاد طوال الرحلة
          </p>
        </div>

        <div className="pointer-events-none absolute right-6 bottom-10 hidden w-[250px] rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-rose-50 p-4 shadow-[0_18px_40px_rgba(15,23,42,0.12)] sm:block -rotate-1">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-100 text-rose-600">
              <span className="text-sm">*</span>
            </div>
            <p className="text-sm font-bold text-slate-900">بناء المسار</p>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            خطوات عملية للنجاح المهني
          </p>
        </div>
      </div>
    </section>
  );
}
