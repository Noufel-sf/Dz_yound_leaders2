"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function HeroSection() {
  const sectionRef  = useRef<HTMLElement>(null);
  const contentRef  = useRef<HTMLDivElement>(null);
  const logoRef     = useRef<HTMLDivElement>(null);
  const shape1Ref   = useRef<HTMLDivElement>(null);
  const shape2Ref   = useRef<HTMLDivElement>(null);
  const shape3Ref   = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Corner shapes pop in first — they frame everything else
      tl.fromTo(
        [shape1Ref.current, shape2Ref.current],
        { scale: 0.4, opacity: 0 },
        { scale: 1, opacity: 1, stagger: 0.12, duration: 1.1, ease: "back.out(1.6)" },
      )
        // Logo drops in
        .fromTo(
          logoRef.current,
          { y: -30, opacity: 0, scale: 0.85 },
          { y: 0, opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" },
          "-=0.5",
        )
        // Content lines stagger up
        .fromTo(
          contentRef.current?.children ?? [],
          { y: 44, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.13, duration: 0.7 },
          "-=0.35",
        )
        // Bottom shape slides in
        .fromTo(
          shape3Ref.current,
          { x: -60, opacity: 0 },
          { x: 0, opacity: 1, duration: 1 },
          "-=0.6",
        );

      // Endless floating
      gsap.to(shape1Ref.current, {
        y: -20, rotation: 8, duration: 3.4,
        ease: "sine.inOut", yoyo: true, repeat: -1,
      });
      gsap.to(shape2Ref.current, {
        y: -16, x: -6, rotation: -10, duration: 4.2,
        ease: "sine.inOut", yoyo: true, repeat: -1,
      });
      gsap.to(shape3Ref.current, {
        y: -12, rotation: 6, duration: 3.8,
        ease: "sine.inOut", yoyo: true, repeat: -1,
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      dir="rtl"
      className="relative min-h-screen overflow-hidden px-6 sm:px-10"
    >
      {/* ── Background (unchanged) ── */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#111111_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-[#FFD64D]/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#3C7CFF]/15 blur-3xl" />

      {/* ── Shape 1 — top-left (like the pink shape in reference) ── */}
      <div
        ref={shape1Ref}
        className="pointer-events-none absolute left-2 top-4 md:left-8 md:top-8"
        style={{ rotate: "-12deg" }}
      >
        <Image
          src="/shape1.png"
          alt=""
          width={180}
          height={180}
          className="w-24 md:w-40 lg:w-48"
          aria-hidden="true"
          priority
        />
      </div>

      {/* ── Shape 2 — top-right (like the gold crescent in reference) ── */}
      <div
        ref={shape2Ref}
        className="pointer-events-none absolute right-2 top-4 md:right-8 md:top-8"
        style={{ rotate: "6deg" }}
      >
        <Image
          src="/shape2.svg"
          alt=""
          width={200}
          height={200}
          className="w-28 md:w-44 lg:w-56"
          aria-hidden="true"
          priority
        />
      </div>

      {/* ── Shape 3 — bottom-left ── */}
      <div
        ref={shape3Ref}
        className="pointer-events-none absolute bottom-8 left-4 md:bottom-16 md:left-10"
      >
        <Image
          src="/shape3.png"
          alt=""
          width={130}
          height={130}
          className="w-20 md:w-32"
          aria-hidden="true"
        />
      </div>

   

      {/* ── Main content ── */}
      <div
        ref={contentRef}
        className="relative z-10 mx-auto mt-8 flex w-full max-w-2xl flex-col items-center text-center"
      >
        {/* Rotated badge — eyebrow */}
        <span className="heading inline-flex -rotate-1 items-center border-2 border-black bg-secondary px-5 py-1.5 text-base font-bold text-black shadow-[3px_3px_0_0_#111111]">
          نادي رواد الشباب
        </span>

        {/* Headline */}
        <h1 className="heading mt-7 text-5xl font-black leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
          حيث يبدأ{" "}
          <span className="text-primary  heading">المستقبل</span>
          <span className="mt-3 block heading text-4xl sm:text-5xl lg:text-[3.5rem]">
            وتشارك في صناعة القرار
          </span>
        </h1>

        {/* One-liner sub-text */}
        <p className="mt-6 max-w-lg text-base leading-8 text-slate-600 sm:text-lg">
          تم اختيار المشروع ضمن برنامج{" "}
          <span className="heading font-bold text-primary">DZ Young Leaders</span>{" "}
          التابع لوزارة الشباب وبالتنسيق مع المجلس الأعلى للشباب.
        </p>

        {/* CTA buttons */}
        <div className="mt-8 mb-20 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/about"
            className="heading inline-flex h-12 items-center gap-2 border-2 border-black bg-primary px-7 text-base font-bold text-white shadow-[4px_4px_0_0_#111111] transition-transform hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
          >
            ابدأ الآن
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <Button
            asChild
            variant="neutral"
            className="heading h-12 border-2 border-black bg-secondary px-5 text-base font-bold shadow-[4px_4px_0_0_#111111] hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
          >
            <Link href="/about">تعرف أكثر</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}