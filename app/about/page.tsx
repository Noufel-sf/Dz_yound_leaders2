"use client";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import CtaSection from "../components/CtaSection";
import WhyChooseUs from "../components/WhyChooseUs";
import OurVision from "../components/OurVision";
import WerbsiteBuilder from "../components/WerbsiteBuilder";
import ProblemAndObjectives from "../components/ProblemAndObjectives";
import FaqSection from "../components/FaqSection";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const mainRef = useRef<HTMLDivElement | null>(null);
  const problemAndObjectivesRef = useRef<{
    items?: HTMLDivElement[];
    section?: HTMLElement;
    title?: HTMLElement;
  } | null>(null);
  const werbsiteBuilderRef = useRef<{ section?: HTMLElement; title?: HTMLElement } | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 1024px)",
          isMobile: "(max-width: 1023px)",
        },
        (context) => {
          const { isDesktop } = context.conditions as { isDesktop?: boolean };

          if (!problemAndObjectivesRef.current) return;

          const sCards = problemAndObjectivesRef.current
            .items as HTMLDivElement[];
          const sSection = problemAndObjectivesRef.current
            .section as HTMLElement;
          const sTitle = problemAndObjectivesRef.current.title as HTMLElement;

          if (!sSection || !sTitle || sCards.length === 0) return;

          gsap.set([sTitle, sCards], { clearProps: "all" });

          gsap.set(sTitle, { opacity: 0, y: 24, scale: 1 });
          gsap.set(sCards, { yPercent: 100 });

          const servicesTl = gsap.timeline({
            scrollTrigger: {
              id: "problem-objectives-section",
              trigger: sSection,
              start: "top top",
              end: `+=${sCards.length * 100 + 150}%`,
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });

          servicesTl
            .to(
              sTitle,
              { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
              0,
            )
            .to(
              sTitle,
              {
                y: 0,
                duration: 1.2,
                scale: isDesktop ? 0.5 : 1,
                ease: "expo.inOut",
              },
              1,
            )
            .to(
              sCards[0],
              { yPercent: 0, duration: 1.2, ease: "expo.inOut" },
              1,
            );

          sCards.forEach((card: HTMLDivElement, i: number) => {
            if (i === 0) return;
            const prevContent = sCards[i - 1].querySelector(".service-content");
            const currentContent = card.querySelector(".service-content");
            const pos = i + 2.5;

            servicesTl
              .to(
                card,
                { yPercent: i * (isDesktop ? 9 : 8), ease: "power2.inOut" },
                pos,
              )
              .to(
                prevContent,
                { y: -100, scale: 0.9, opacity: 0, ease: "power2.inOut" },
                pos,
              )
              .fromTo(
                currentContent,
                { y: 150, opacity: 0 },
                { y: 0, opacity: 1, ease: "power2.out" },
                pos,
              );
          });
          servicesTl.to({}, { duration: 1 });
          if (werbsiteBuilderRef.current) {
            const wbSection = werbsiteBuilderRef.current.section;
            const wbTitle = werbsiteBuilderRef.current.title;

            if (wbSection && wbTitle) {
              gsap.set(wbTitle, { opacity: 0, y: 24, scale: 1 });

              gsap.timeline({
                scrollTrigger: {
                  id: "website-builder-title",
                  trigger: wbSection,
                  start: "top top",
                  end: "bottom",
                  scrub: 1,
                  invalidateOnRefresh: true,
                },
              })
                .to(
                  wbTitle,
                  { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
                  0
                )
                .to(
                  wbTitle,
                  {
                    scale: isDesktop ? 0.5 : 1,
                    duration: 1.2,
                    ease: "expo.inOut",
                  },
                  1
                );
            }
          }
        },
      );

      return () => mm.revert();
    },
    { scope: mainRef },
  );

  return (
    <main ref={mainRef} dir="rtl" className=" py-24 z-10">
      {/* ── Hero Section ── */}
      <section className="relative mb-40  lg:mb-54 overflow-hidden px-4 py-24 sm:px-8 lg:px-12">
        <div className="absolute inset-0 -z-10" />

        <div className="mx-auto  text-center">
          <div className="mb-6  px-5 py-2.5">
            <span className="inline-flex items-center gap-2 border-2 border-black heading bg-secondary px-4 py-1 text-xl -rotate-3 font-bold text-black shadow-[3px_3px_0_0_#111111]">
              من نحن
            </span>
          </div>

          <h1 className="heading mb-6 rotate-2 text-[3.3rem] font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-[4rem] lg:text-[13rem]">
            مخيم 
            <span className="text-primary heading">
              {" "}
              رواد الشباب
            </span>
          </h1>

          <div className="mx-auto mb-8 w-full max-w-[18rem] -rotate-2 hover:rotate-0 transition duration-500 border-4 border-black bg-white p-4 shadow-[10px_8px_0_0_#111111] sm:max-w-[24rem] lg:max-w-120">
            <div className="relative aspect-16/5 w-full">
              <Image
                src="/logo3.png"
                alt="الشعار الكامل لمخيم رواد الشباب"
                width={500}
                height={400}
                className="object-contain"
                priority
              />
            </div>
          </div>
          <p className="text-md text-center md:text-xl mb-8 mx-auto max-w-lg text-slate-700">
            تم اختيار المشروع ضمن برنامج <span className="font-bold text-primary">DZ Young Leaders</span> التابع لوزارة الشباب وبالتنسيق مع المجلس الأعلى للشباب، مما يعكس أهمية دوره في دعم وتمكين الشباب الجزائري.


          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfbaB2RWp_-TUz-QmFcEI1RDSXqHGAT_W0SxGcHdRHxbjSl5g/viewform"
              className="heading flex items-center flex-row-reverse h-12 text-white border-2 border-black px-8 bg-primary  shadow-[4px_4px_0_0_#111111] hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none "
            >
              سجل الآن
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            </a>
          </div>

        </div>
      </section>
      <OurVision />
      <WerbsiteBuilder/>
      <ProblemAndObjectives ref={problemAndObjectivesRef} />
      <CtaSection />
      <FaqSection />
    </main>
  );
}
