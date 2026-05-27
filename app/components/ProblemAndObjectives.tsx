"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";

const PROBLEM_AND_OBJECTIVES_DATA = [
  {
    id: "01",
    title: "الإشكالية",
    desc: "فجوة واضحة بين التعليم التقليدي ومتطلبات السوق، وضعف في امتلاك أدوات الذكاء الاصطناعي والمسارات التقنية لدى الشباب.",
    color: "bg-rose-50",
    textColor: "text-rose-900",
  },
  {
    id: "02",
    title: "الأهداف",
    desc: "تمكين الشباب بالمعرفة القيادية والمهارات التقنية الأساسية، وفتح مسارات تخصصية تطبيقية لبناء الكفاءة والجاهزية المهنية.",
    color: "bg-emerald-50",
    textColor: "text-emerald-900",
  },
  {
    id: "03",
    title: "الحلول",
    desc: "برنامج تكويني متدرج يجمع بين التعلم التطبيقي، المشاريع الواقعية، والتوجيه المستمر لصناعة أثر حقيقي.",
    color: "bg-slate-50",
    textColor: "text-slate-900",
  },
];

const ProblemAndObjectives = forwardRef((_, ref) => {
  const ProblemAndObjectivesRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useImperativeHandle(ref, () => ({
    section: ProblemAndObjectivesRef.current,
    items: cardsRef.current,
    title: titleRef.current,
  }));

  return (
    <section
      ref={ProblemAndObjectivesRef}
      className="relative h-screen w-full overflow-hidden bg-primary-950"
    >
      <div className="relative flex mt-30 w-full items-center justify-center px-8">
        <h1
          ref={titleRef}
          className="featured heading select-none font-display text-[11vw] uppercase leading-none tracking-tighter"
        >
          الاشكالية و
          <span className="text-primary heading "> الحلول</span>
        </h1>
      </div>

      <div className="absolute inset-0 top-[25vh] lg:top-[35vh]">
        {PROBLEM_AND_OBJECTIVES_DATA.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            className={`absolute top-0 flex h-full w-full flex-col items-center justify-center  ${item.color} ${item.textColor} px-6 md:px-20`}
            style={{ zIndex: index + 1 }}
          >
            <div className="service-content flex max-w-4xl flex-col items-center text-center">
              <span className="mb-4 font-mono text-sm uppercase tracking-widest opacity-40">
                {item.id}
                
              </span>
              <h2 className="mb-6 font-display heading text-5xl uppercase leading-[0.9] md:text-7xl">
                {item.title}
              </h2>
              <p className="max-w-xl font-sans text-lg opacity-70">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

ProblemAndObjectives.displayName = "ProblemAndObjectives";
export default ProblemAndObjectives;
