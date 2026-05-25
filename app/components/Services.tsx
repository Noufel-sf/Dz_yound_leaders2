"use client";

import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// DATA edit content here, nothing else needs to change

const SERVICES = [
  {
    id: "01",
    category: "البرنامج التدريبي",
    title: "المراحل الأساسية",
    desc: "ثلاث مراحل مترابطة تبني الشخصية وتُكسب المهارات ثم تُحوّلها إلى أثر عملي.",
    sections: [
      {
        title: "المرحلة الأولى: بناء الشخصية وصقل المهارات الناعمة",
        badge: "إلزامية",
        summary:
          "هذه المرحلة هي حجر الأساس في المخيم، وتهدف إلى تجهيز المشاركين بمهارات التواصل والقيادة وإدارة الذات قبل الانتقال إلى أي تخصص تقني.",
        // items: [
        //   'التواصل والذكاء العاطفي: فهم أنماط الشخصيات، الإقناع، إدارة النزاعات، والتعامل بذكاء وفعالية.',
        //   'القيادة والعمل الجماعي: بناء الفرق عالية الأداء وتوزيع الأدوار بما يرفع الانسجام والإنتاجية.',
        //   'إدارة الذات والوقت: تقنيات الإنتاجية الشخصية، التعامل مع ضغط العمل، وتجنب الاحتراق الوظيفي.',
        // ],
      },
      {
        title: "المرحلة الثانية: التمكين التقني والمسارات التخصصية",
        badge: "إلزامية ثم اختيارية",
        summary:
          "تنطلق هذه المرحلة بتدريب مكثف على الذكاء الاصطناعي بوصفه المهارة الصلبة الأساسية، ثم يختار كل مشارك مسارًا تخصصيًا واحدًا للتطبيق العملي.",
        // items: [
        //   'الذكاء الاصطناعي وPrompt Engineering: استخدام الأدوات الحديثة لرفع الإنتاجية وأتمتة المهام.',
        //   'المسارات المتاحة: ريادة الأعمال، التسويق الرقمي، وإدارة المشاريع.',
        // ],
      },
      {
        title: "المرحلة الثالثة: صناعة الأثر (TOT)",
        badge: "تأثير",
        summary:
          "تستهدف هذه المرحلة تحويل المتدربين المتميزين إلى صناع معرفة قادرين على نقل الخبرة وتقديمها باحترافية أمام الجمهور.",
        // items: [
        //   'سيكولوجية تعلم الكبار وتصميم الحقائب التدريبية الاحترافية.',
        //   'مهارات الإلقاء، كاريزما الظهور، والتحكم في نبرة الصوت ولغة الجسد.',
        //   'إعداد متدربين قادرين على نقل المعرفة التقنية للأقران بشكل مستدام.',
        // ],
      },
    ],
    bg: "bg-[var(--figjam-cream)] text-[#111111]",
    accent: "text-[var(--figjam-purple)]",
    bullet: "bg-[var(--figjam-purple)]",
  },
  {
    id: "02",
    category: "المسارات التخصصية",
    title: "مجالات التطبيق",
    desc: "اختر مسارك المفضل واكتسب المهارات العملية اللازمة لتحقيق أحلامك في أحد هذه المجالات.",
    sections: [
      {
        title: "ريادة الأعمال",
        badge: "🚀",
        summary: "بناء ريادة أعمال مستدامة من الفكرة إلى التطبيق.",
      },
      {
        title: "التسويق الرقمي",
        badge: "📱",
        summary: "إتقان أدوات التسويق الرقمي للوصول إلى الجمهور المستهدف.",
      },
      {
        title: "إدارة المشاريع",
        badge: "📊",
        summary: "إدارة المشاريع بكفاءة عالية والتسليم في الوقت المحدد.",
      },
    ],
    bg: "bg-[var(--figjam-yellow)] text-[#111111]",
    accent: "text-[var(--figjam-blue)]",
    bullet: "bg-[var(--figjam-blue)]",
  },
  {
    id: "03",
    category: "التقييم",
    title: "آليات القياس",
    desc: "نظام تقييم شامل يضمن جودة المخرجات وتحقيق الأهداف المرجوة.",
    sections: [
      {
        title: "التقييم المعرفي",
        summary:
          "اختبارات قبلية وبعدية لقياس تطور المهارات الناعمة والتقنية المكتسبة.",
      },
      {
        title: "المشاريع التطبيقية",
        summary:
          "تقييم جودة المشاريع النهائية ومدى دمج أدوات الذكاء الاصطناعي فيها.",
      },
      {
        title: "الأداء التدريبي",
        summary:
          "عرض حي (Demo Day) لقياس قوة الإلقاء والقدرة على نقل المعلومة.",
      },
      {
        title: "قياس الأثر والرضا",
        summary:
          "استطلاعات رأي دورية لقياس ملاءمة البرنامج للفئة العمرية 18-35 سنة.",
      },
    ],
    bg: "bg-[var(--figjam-pink)] text-[#111111]",
    accent: "text-[var(--figjam-green)]",
    bullet: "bg-[var(--figjam-green)]",
  },
];

export default function Services() {

  // refs
  const containerRef = useRef<HTMLDivElement>(null);


  const serviceRef = useRef<HTMLDivElement>(null);
  const serviceCards = useRef<HTMLDivElement[]>([]);

  useGSAP(
    () => {
      const cards = serviceCards.current;

      gsap.set(cards, {
        yPercent: (i) => (i === 0 ? 0 : 100),
        scale: (i) => (i === 0 ? 1 : 0.85),
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: serviceRef.current,
          start: "top top",
          end: `+=${cards.length * 100}%`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      cards.forEach((card, i) => {
        if (i === 0) return;

        tl.fromTo(
          card,
          {
            yPercent: 100,
            scale: 0.8,
          },
          {
            yPercent: 0,
            scale: 1,
            duration: 1,
            ease: "power2.inOut",
          },
          `card-${i}`,
        );
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full mt-40 overflow-x-hidden bg-[var(--figjam-cream)] text-[#111111] selection:bg-[var(--figjam-green)] selection:text-black"
    >
      {/* SERVICES SCROLL STACK */}

      <section
        ref={serviceRef}
        className="relative h-screen w-full overflow-hidden bg-[var(--figjam-cream)]"
      >
        {SERVICES.map((svc, i) => (
          <div
            key={svc.id}
            ref={(el) => {
              if (el) serviceCards.current[i] = el;
            }}
            className={`absolute inset-1 flex h-screen ${svc.bg} w-full flex-col items-center justify-center px-6 md:px-20`}
            style={{ zIndex: i + 10 }}
          >
            {/* GHOST NUMBER */}
            <span className="pointer-events-none absolute bottom-0 right-4 select-none font-display text-[22vw] font-black leading-none text-black/5">
              {svc.id}
            </span>

            {/* CARD CONTENT */}
            <div className="relative z-10 pt-20 pb-20 flex w-full max-w-7xl flex-col items-start justify-center gap-10 md:max-w-full md:flex-row md:items-start md:justify-between">
              {/* Left Column */}
              <div className="flex flex-col gap-6 md:w-1/2">
                <span
                  className={`font-sans text-xs font-bold uppercase tracking-[0.4em] ${svc.accent}`}
                >
                  {svc.category}
                </span>
                <h2 className="heading whitespace-pre-line break-words text-3xl font-black uppercase leading-[1.1] tracking-tight text-black sm:text-4xl md:text-5xl lg:text-[4.5rem]">
                  {svc.title}
                  <span className={svc.accent}>.</span>
                </h2>
                <p className="max-w-md font-sans text-base text-black/70 md:text-lg">
                  {svc.desc}
                </p>
              </div>

              {/* Right Column: Sections */}
              <div className="grid w-full grid-cols-1 gap-6 border-t border-black/10 pt-6 md:grid-cols-2 md:border-l md:border-t-0 md:pl-12 md:pt-0">
                {svc.sections.map((section) => (
                  <div
                    key={section.title}
                    className="rounded-2xl border border-black/10 bg-white/60 p-5"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="heading text-lg font-black text-black">
                        {section.title}
                      </h3>
                      {section.badge ? (
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-bold ${svc.accent} bg-white/70`}
                        >
                          {section.badge}
                        </span>
                      ) : null}
                    </div>
                    {section.summary ? (
                      <p className="mt-3 text-sm leading-7 text-black/70">
                        {section.summary}
                      </p>
                    ) : null}
                 
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
