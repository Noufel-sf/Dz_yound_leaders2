"use client";

import React, { useRef } from "react";
import { Check } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    title: "تأهيل شامل",
    description:
      "برنامج متكامل يغطي المسارات المهارية والقانونية والإدارية والسياسية.",
    accent: "border-[var(--figjam-blue)]",
    iconBg: "bg-[var(--figjam-blue)]",
  },
  {
    title: "قيادة واعية",
    description:
      "نعد جيلاً قادراً على فهم الحياة العامة والمشاركة الفعالة فيها.",
    accent: "border-[var(--figjam-yellow)]",
    iconBg: "bg-[var(--figjam-yellow)]",
  },
  {
    title: "هوية قوية",
    description:
      "نحافظ على التراث الثقافي ونطوره ليكون منطلقاً للتغيير الإيجابي.",
    accent: "border-[var(--figjam-pink)]",
    iconBg: "bg-[var(--figjam-pink)]",
  },
  {
    title: "شراكات استراتيجية",
    description:
      "دعم من وزارة الشباب والمجلس الأعلى للشباب ضمن برنامج DZ Young Leaders.",
    accent: "border-[var(--figjam-green)]",
    iconBg: "bg-[var(--figjam-green)]",
  },
  {
    title: "تقييم مستمر",
    description: "نظام تقييم شامل لضمان جودة المخرجات وتحقيق الأهداف المرجوة.",
    accent: "border-[var(--figjam-purple)]",
    iconBg: "bg-[var(--figjam-purple)]",
  },
  {
    title: "تأثير ملموس",
    description:
      "نهدف إلى بناء جيل قادر على إحداث تغيير إيجابي في المجتمع الجزائري.",
    accent: "border-[var(--figjam-blue)]",
    iconBg: "bg-[var(--figjam-blue)]",
  },
];

function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".why-choose-title",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: { trigger: ".why-choose-title", start: "top 85%" },
        },
      );

      gsap.utils.toArray<HTMLElement>(".why-choose-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30, rotate: -2 },
          {
            opacity: 1,
            y: 0,
            rotate: 0,
            duration: 0.6,
            delay: i * 0.08,
            ease: "power2.out",
            scrollTrigger: { trigger: card, start: "top 85%" },
          },
        );
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="bg-blue-700 px-4 py-20 sm:px-8 lg:px-12"
    >
      <div className="why-choose-title mb-10 flex flex-col items-center gap-4 text-center">
        <span className="inline-flex items-center gap-2  border-2 border-black heading bg-secondary px-4 py-1 text-3xl -rotate-3 font-bold text-black shadow-[3px_3px_0_0_#111111]">
          مشروع البوصلة
        </span>

        <h2 className="heading text-5xl font-bold uppercase text-white sm:text-7xl">
          <span className="block heading">ما الذي يميزنا</span>
        </h2>
      </div>

      <div className="mx-auto max-w-6xl -rotate-1 rounded-[28px] border-[3px] border-black bg-[var(--figjam-cream)] p-6 shadow-[10px_10px_0_0_#111111] sm:p-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, idx) => (
            <article
              key={idx}
              className={`why-choose-card rounded-2xl border-[3px] bg-white p-6 shadow-[6px_6px_0_0_#111111] ${item.accent}`}
            >
              <div className="mb-4 flex items-center justify-between">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl border-2 border-black text-[#111111] ${item.iconBg}`}
                >
                  <Check className="h-6 w-6" />
                </div>
                <div className="flex items-center gap-1">
                  <span className="h-3 w-3 rounded-full bg-primary" />
                  <span className="h-3 w-3 rounded-full bg-[var(--figjam-green)]" />
                  <span className="h-3 w-3 rounded-full bg-secondary" />
                </div>
              </div>
              <h3 className="heading mb-3 text-lg font-bold text-[#111111]">
                {item.title}
              </h3>
              <p className="text-sm leading-7 text-[#111111]/70">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 h-0.5 w-full bg-black" />
      </div>
    </section>
  );
}

export default WhyChooseUs;
