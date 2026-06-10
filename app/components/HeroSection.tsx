"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowLeft } from "lucide-react";

export default function HeroSection() {
  // const sectionRef = useRef<HTMLElement>(null);
  // const contentRef = useRef<HTMLDivElement>(null);

  // const shape1Ref = useRef<HTMLDivElement>(null);
  // const shape2Ref = useRef<HTMLDivElement>(null);
  // const shape3Ref = useRef<HTMLDivElement>(null);

  // useGSAP(
  //   () => {
  //     const tl = gsap.timeline({
  //       defaults: {
  //         ease: "power3.out",
  //       },
  //     });

  //     tl.fromTo(
  //       [shape1Ref.current, shape2Ref.current],
  //       {
  //         scale: 0.4,
  //         opacity: 0,
  //       },
  //       {
  //         scale: 1,
  //         opacity: 1,
  //         stagger: 0.15,
  //         duration: 1,
  //         ease: "back.out(1.7)",
  //       },
  //     )
  //       .fromTo(
  //         contentRef.current?.children ?? [],
  //         {
  //           y: 40,
  //           opacity: 0,
  //         },
  //         {
  //           y: 0,
  //           opacity: 1,
  //           stagger: 0.12,
  //           duration: 0.8,
  //         },
  //         "-=0.5",
  //       )
  //       .fromTo(
  //         shape3Ref.current,
  //         {
  //           x: -80,
  //           opacity: 0,
  //         },
  //         {
  //           x: 0,
  //           opacity: 1,
  //           duration: 1,
  //         },
  //         "-=0.7",
  //       );

  //     // floating animation
  //     gsap.to(shape1Ref.current, {
  //       y: -18,
  //       rotate: 8,
  //       duration: 3.5,
  //       repeat: -1,
  //       yoyo: true,
  //       ease: "sine.inOut",
  //     });

  //     gsap.to(shape2Ref.current, {
  //       y: -14,
  //       rotate: -10,
  //       duration: 4,
  //       repeat: -1,
  //       yoyo: true,
  //       ease: "sine.inOut",
  //     });

  //     gsap.to(shape3Ref.current, {
  //       y: -12,
  //       duration: 3,
  //       repeat: -1,
  //       yoyo: true,
  //       ease: "sine.inOut",
  //     });
  //   },
  //   { scope: sectionRef },
  // );

  return (
    <section
      // ref={sectionRef}
      dir="rtl"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 "
    >
      {/* background grid */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f620_1px,transparent_1px)] bg-[size:80px]" /> */}

      {/* blur lights */}
      {/* <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" /> */}
      {/* <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" /> */}

      {/* shape 1 */}
      <div
        // ref={shape1Ref}
        className="pointer-events-none absolute left-2 top-26 md:left-10 md:top-30"
      >
        <Image
          src="/shape1.png"
          alt=""
          width={180}
          height={180}
          className="w-14 md:w-40"
          priority
        />
      </div>

      {/* shape 2 */}
      <div
        // ref={shape2Ref}
        className="pointer-events-none absolute -right-4 top-30 md:-right-10 md:top-26"
      >
        <Image
          src="/shape3.png"
          alt=""
          width={120}
          height={100}
          className="w-18 md:w-48"
          priority
        />
      </div>

      {/* shape 3 */}
      <div
        // ref={shape3Ref}
        className="pointer-events-none absolute bottom-10 left-4 md:left-12"
      >
        <Image
          src="/shape2.svg"
          alt=""
          width={100}
          height={100}
          className="w-24 md:w-44"
          priority
        />
      </div>

          <div
        // ref={shape3Ref}
        className="pointer-events-none absolute bottom-10 right-4 md:right-12"
      >
        <Image
          src="/c2.png"
          alt=""
          width={100}
          height={100}
          className="w-24 md:w-44"
          priority
        />
      </div>


      {/* center content */}
      <div
        // ref={contentRef}
        className="relative z-10 flex max-w-8xl flex-col items-center text-center"
      >
        {/* top small text */}
        <span className="heading border-2 border-black bg-secondary px-5 py-2 text-sm font-black text-black shadow-[4px_4px_0_0_#111111] md:text-base">
          مخيم الرواد الشبابي
        </span>

        {/* big title */}
        <h1 className="heading mt-5 text-5xl rotate-3  font-black leading-[1.1] text-black sm:text-6xl md:text-7xl lg:text-[8.5rem]">
          نحلم، نبتكر،
          <span className="text-primary heading">
            ونبني المستقبل
          </span>
        </h1>

        {/* arrow + text */}
        {/* <div className="mt-8 flex items-center gap-5">
          <div className="-scale-x-100 text-primary">
            <Image
              src="/shape2.svg"
              alt=""
              width={80}
              height={80}
              className="w-16 md:w-30"
              priority
            />
          </div>

          <span className="heading text-3xl font-black md:text-5xl">
            أنت جزء من التغيير
          </span>
        </div> */}

        {/* subtitle */}
        <p className="mt-4 md:mt-10 max-w-3xl text-md leading-9 text-black/70 md:text-2xl">
          انضم إلى تجربة شبابية تجمع بين
          <span className="heading font-black text-primary">
            {" "}
            القيادة،
          </span>
          <span className="heading font-black text-secondary">
            {" "}
            التكنولوجيا،
          </span>
          <span className="heading font-black text-primary">
            {" "}
            والابتكار
          </span>
          ، لصناعة جيل قادر على التأثير الحقيقي في المجتمع.
        </p>

        {/* buttons */}
        <div className="mt-12 flex  items-center justify-center gap-5">
          <Link
            href="/register"
            className="heading inline-flex h-14 items-center gap-3 border-2 border-black bg-primary px-8 text-md md:text-lg font-black text-white shadow-[5px_5px_0_0_#111111] transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#111111]"
          >
            سجل الآن
            <ArrowLeft className="h-5 w-5" />
          </Link>

          <Link
            href="/about"
            className="heading inline-flex h-14 items-center border-2 border-black bg-white px-8 text-md md:text-lg font-black text-black shadow-[5px_5px_0_0_#111111] transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#111111]"
          >
            اكتشف البرنامج
          </Link>
        </div>
      </div>
    </section>
  );
}